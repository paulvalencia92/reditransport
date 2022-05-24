<?php

namespace App\Http\Controllers;

use App\Models\Contractor;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class ContratContractorController extends Controller
{
    public function create(Request $request)
    {
        try {
            DB::beginTransaction();

            $contractor = Contractor::create([
                'nit' => $request->nit,
                'contractor' => $request->contractor,
                'adress' => $request->adress,
                'phone' => $request->phone,
                'email' => $request->email,
                'web' => $request->web,
                'c_name' => $request->c_name,
                'c_last_name' => $request->c_last_name,
                'c_cc' => $request->c_cc,
                'c_adress' => $request->c_adress,
                'c_phone' => $request->c_phone,
            ]);

            $contractor->contracts()->create([
                'number' => $request->number,
                'department_id' => $request->department_id,
                'municipality_id' => $request->municipality_id,
                'start_date' => $request->start_date,
                'end_date' => $request->end_date,
                'contractor_id' => $request->contractor_id,
                'object' => $request->object,
                'incomes' => $request->incomes,
                'details' => $request->details,
                'vehicle_id' => $request->vehicle_id,
                'user_id' => $request->user_id,
                'user_second_id' => $request->user_second_id,
                'user_third_id' => $request->user_third_id,
                'user_four_id' => $request->user_four_id
            ]);


            DB::commit();
            return response()->json('success');

        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
    }
}
