<?php

namespace App\Http\Controllers;

use App\Models\Company;
use App\Models\User;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ApiDianController extends Controller
{


    public function getCompany()
    {
        $data = Company::first();
        return response()->json($data, 200);
    }


    public function registerAsACompany(Request $request)
    {
        $url = config('services.dian.host') . "/ubl2.1/config/{$request->nit}/{$request->dv}";
        $response = Http::acceptJson()->post($url, $request->all());
        if ($response->status() == 200) {
            Company::query()->updateOrCreate(
                [
                    'nit' => $request->nit,
                ],
                $request->all()
            );
        }
        return $response->body();
    }

    public function registerSoftware(Request $request)
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/config/software";
        $response = Http::withToken($token)->acceptJson()->put($url, $request->all());
        return $response->body();
    }


    public function registerCertificate(Request $request)
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/config/certificate";
        $response = Http::withToken($token)->acceptJson()->put($url, $request->all());
        return $response->body();
    }

    public function registerResolution(Request $request)
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/config/resolution";
        $response = Http::withToken($token)->acceptJson()->put($url, $request->all());
        return $response->body();
    }


    public function getPaymentMethods()
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/custom/payment-methods";
        $response = Http::withToken($token)->acceptJson()->get($url);
        return $response->body();
    }


    public function getResolution(Request $request)
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/custom/resolution";
        $response = Http::withToken($token)->acceptJson()->post($url, $request->all());
        return $response->body();
    }


    public function getResolutions()
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/custom/resolutions";
        $response = Http::withToken($token)->acceptJson()->get($url);
        return $response->body();
    }

    public function destroyResolution(Request $request)
    {
        $user = User::first();
        $token = $user->token_api_dian;
        $url = config('services.dian.host') . "/ubl2.1/custom/delete-resolution/{$request->id}";
        $response = Http::withToken($token)->acceptJson()->put($url);
        return $response->body();
    }

}
