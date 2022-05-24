<?php

namespace App\Http\Controllers;

use App\Models\Customer;
use Illuminate\Http\Request;

class CustomerController extends Controller
{
    public function index()
    {
        $customers = Customer::all();
        return response()->json($customers, 200);
    }


    public function store(Request $request)
    {
        $user = Customer::updateOrCreate(
            [
                'user_id' => $request->user_id
            ],
            $request->all()
        );

        return response()->json($user, 201);
    }

    public function show(Request $request)
    {
        $customer = Customer::query()
            ->where('user_id', $request->user_id)
            ->first();

        return response()->json($customer, 200);
    }

}
