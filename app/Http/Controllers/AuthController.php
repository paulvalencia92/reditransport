<?php

namespace App\Http\Controllers;

use App\Mail\RecoverPassword;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Mail;
use Illuminate\Support\Facades\Password;
use Illuminate\Support\Str;
use Laravel\Passport\Passport;
use Carbon\Carbon;

class AuthController extends Controller
{
    public function login()
    {
        try {
            $this->validate(request(), [
                'email' => 'required|email',
                'password' => 'required|string'
            ]);

            $credentials = request(['email', 'password']);

            if (!Auth::attempt($credentials)) {
                return response()->json(['errors' => [['El Correo electrónico o Contraseña no coinciden']]], 401);
            }


            $user = request()->user();
            $role = $user->roles->pluck('name')->first();
            $abilities = $user->getAbilities()->pluck('name');

            if ($role == 'conductor') {
                return response()->json(['errors' => [['Los conductores no tienen permitido el ingreso a la plataforma']]],
                    401);
            };

            $token = $user->createToken('Personal Access Client');
            Passport::tokensExpireIn(Carbon::now()->addYears(100));
            return response()->json([
                'user' => $user->load('vehicles', 'id_type', 'department', 'municipality'),
                'access_token' => $token->accessToken,
                'role' => $role,
                'abilities' => $abilities,
            ]);

        } catch (ValidationException $e) {
            return response()->json($e->validator->errors());
        }

    }


    public function logout()
    {
        auth()->user()->tokens->each(function ($token, $key) {
            $token->delete();
        });

        return response()->json('Logged out successfully', 200);

    }

//
//    public function recoverPassword(Request $request)
//    {
//        $user = User::where('email', $request->email)->first();
//        if (!$user) {
//            return response()->json(['errors' => [['El correo suministrado no se encuentra en nuestros registros']]],
//                401);
//        }
//
//        $newPassword = Str::random(rand(8, 15));
//        $user->password = bcrypt($newPassword);
//        $user->update();
//
//        Mail::to($user->email)->send(new RecoverPassword($user, $newPassword));
//        return response()->json('Hemos enviado un enlace para que puedas recuperar la contraseña');
//    }

    public function forgot()
    {
        $credentials = request()->validate(['email' => 'required|email']);
        Password::sendResetLink($credentials);
        return response()->json('Reset password link sent on your email id.');
    }

    public function reset()
    {
        $credentials = request()->validate([
            'email' => 'required|email',
            'token' => 'required|string',
            'password' => 'required|string|confirmed'
        ]);

        $reset_password_status = Password::reset($credentials, function ($user, $password) {
            $user->password = bcrypt($password);
            $user->save();
        });

        if ($reset_password_status == Password::INVALID_TOKEN) {
            return response()->json(['errors' => [['El correo suministrado no se encuentra en nuestros registros']]],
                401);
        }

        return response()->json('Password has been successfully changed', 200);
    }


}
