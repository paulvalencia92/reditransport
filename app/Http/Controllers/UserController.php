<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Http\Requests\UserRequest;
use App\Models\Customer;
use App\Models\User;
use App\Models\Vehicle;
use App\Models\Contract;
use App\Models\Purshe;
use App\Models\UserVehicle;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Traits\Helpers;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;

use Illuminate\Support\Facades\DB;

class UserController extends Controller
{
    use Helpers;

    public function index(Request $request)
    {
        $name = $request->name;

        $users = User::query()->orderBy('id', 'desc')
            ->where('names', 'like', "%{$name}%")
            ->with('vehicles', 'id_type', 'department', 'municipality')
            ->paginate();
        return response()->json($users, 200);
    }


    public function store(UserRequest $request)
    {
        $user = User::create($this->userInput($request));
        $user->assign($request->role);
        return response()->json($user->load('vehicles', 'id_type', 'department', 'municipality'), 201);
    }


    public function update(UserRequest $request, User $user)
    {
        $user->fill($this->userInput($request))->save();
        return response()->json($user->load('vehicles', 'id_type', 'department', 'municipality'), 201);
    }

    public function updateProfilePhoto(Request $request)
    {
        $file = null;
        if ($request->hasFile('file')) {
            $file = Uploader::uploadFile('file', 'profilephoto');
        }

        $user = User::find($request->id);
        $user->photo = $file;
        $user->save();

        return response()->json($user);
    }


    public function destroy(User $user)
    {
        $user->delete();
        return response()->json("user successfully removed", 200);
    }

    public function getUsersDoesntHaveVehicle(Request $request)
    {
        $users = User::doesntHaveVehicle($request->vehicle_id);
        $data = $this->dataForSelectComponentTwo($users, 'full_name');
        return response()->json($data, 200);
    }

    public function getHasVehicles()
    {
        $users = User::hasVehicle();
        $data = $this->dataForSelectComponentTwo($users, 'full_name');
        return response()->json($data, 200);
    }

    public function getUserByVehicle($id)
    {
        $vehicle = Vehicle::find($id)->users;

        return response()->json($vehicle);
    }


    public function storeUserToVehicle(Request $request)
    {
        $userVehicle = new UserVehicle;
        $userVehicle->user_id = $request->user_id;
        $userVehicle->vehicle_id = $request->vehicle_id;
        $userVehicle->save();

        return response()->json("success", 200);
    }

    public function changePassword(Request $request, User $user)
    {
        $user->password = bcrypt($request->password);
        $user->save();
        return "Success";
    }


    public function changeMyPassword(Request $request)
    {

        $user = auth()->user();

        if (!Hash::check($request->old_password, $user->password)) {
            return response()->json(['errors' => [['La Contraseña que suministraste no coincide']]], 401);
        }

        $user->password = bcrypt($request->password);
        $user->save();
        return "Success";
    }


    protected function userInput(Request $request): array
    {
        return [
            'id_type_id' => $request->id_type_id,
            'department_id' => $request->department_id,
            'municipality_id' => $request->municipality_id,
            'identification_number' => $request->identification_number,
            'names' => $request->names,
            'surnames' => $request->surnames,
            'date_of_birth' => $request->date_of_birth,
            'sex' => $request->sex,
            'residence_address' => $request->residence_address,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'password' => bcrypt($request->identification_number),
        ];
    }

    public function getDashboard()
    {

        $contracts = Contract::where('status', '1')->count();
        $vehicles = Vehicle::count();
        $users = User::count();
        $accounts = Purshe::where('status_pay', 'No pago')->orWhere('status_pay', 'Parcialmente pago')->count();

        $data = array(
            'contracts' => $contracts,
            'vehicles' => $vehicles,
            'users' => $users,
            'accounts' => $accounts
        );

        return response()->json($data);

    }


    public function updateDataDian(Request $request, User $user)
    {
        $user->nit = $request->nit;
        $user->is_created_dian = true;
        $user->token_api_dian = $request->token;
        $user->save();
        $user->load('vehicles', 'id_type', 'department', 'municipality');
        return response()->json($user, 201);
    }

    public function updateRoles()
    {
        $users = User::all();

        $arrayUsers = [];
        foreach ($users as $user) {
            if ($user->role_old == 'ADMIN') {
                array_push($arrayUsers,
                    ['role_id' => '1', 'entity_id' => $user->id, 'entity_type' => 'App\Models\User']);
            } else {
                if ($user->role_old == 'CONDUCTOR') {
                    array_push($arrayUsers,
                        ['role_id' => '2', 'entity_id' => $user->id, 'entity_type' => 'App\Models\User']);
                } else {
                    array_push($arrayUsers,
                        ['role_id' => '3', 'entity_id' => $user->id, 'entity_type' => 'App\Models\User']);
                }
            }
        }

        DB::table('bouncer_assigned_roles')->insert($arrayUsers);

        return 'Listo!';
    }
}
