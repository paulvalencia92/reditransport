<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Models\Contractor;
use App\Models\Documentation;
use App\Models\PreRegistro;
use App\Models\User;
use App\Models\Vehicle;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class PreRegisterController extends Controller
{
    public function store(Request $request)
    {

        if ($request->hasFile('file_cc')) {
            $filecc = Uploader::uploadFile('file_cc', 'cedulas');
        }
        if ($request->hasFile('file_license')) {
            $file_license = Uploader::uploadFile('file_license', 'licensetrasn');
        }

        if ($request->hasFile('file_cc_driver')) {
            $file_cc_driver = Uploader::uploadFile('file_cc_driver', 'cedulas');
        }

        if ($request->hasFile('file_cc_driver')) {
            $file_cc_driver = Uploader::uploadFile('file_cc_driver', 'cedulas');
        }


        if ($request->hasFile('soat')) {
            $soat = Uploader::uploadFileTwo('soat', 'documents', 'soat');
        }

        if ($request->hasFile('contractual')) {
            $contractual = Uploader::uploadFileTwo('contractual', 'documents', 'contractual');
        }

        if ($request->hasFile('extra_contractual')) {
            $extra_contractual = Uploader::uploadFileTwo('extra_contractual', 'documents', 'extra_contractual');
        }

        if ($request->hasFile('tarjeta_operacion')) {
            $tarjeta_operacion = Uploader::uploadFileTwo('tarjeta_operacion', 'documents', 'tarjeta_operacion');
        }

        if ($request->hasFile('tecnomecanica')) {
            $tecnomecanica = Uploader::uploadFileTwo('tecnomecanica', 'documents', 'tecnomecanica');
        }


        $data = PreRegistro::create([
            'names' => $request->names,
            'surnames' => $request->surnames,
            'id_type_id' => $request->id_type_id,
            'department_id' => $request->department_id,
            'identification_number' => $request->identification_number,
            'municipality_id' => $request->municipality_id,
            'date_of_birth' => $request->date_of_birth,
            'sex' => $request->sex,
            'residence_address' => $request->residence_address,
            'phone_number' => $request->phone_number,
            'email' => $request->email,
            'file_cc' => $filecc,

            'car_plate' => $request->car_plate,
            'department_id_vehicle' => $request->department_id_vehicle,
            'municipality_id_vehicle' => $request->municipality_id_vehicle,
            'internal_number' => $request->internal_number,
            'enrollment_date' => $request->enrollment_date,
            'chassis_number' => $request->chassis_number,
            'engine_number' => $request->engine_number,
            'model' => $request->model,
            'brand' => $request->brand,
            'cylinder' => $request->cylinder,
            'color' => $request->color,
            'auto_type' => $request->auto_type,
            'number_seats' => $request->number_seats,
            'operation_card' => $request->operation_card,

            'names_driver' => $request->names_driver,
            'surnames_driver' => $request->surnames_driver,
            'id_type_id_driver' => $request->id_type_id_driver,
            'department_id_driver' => $request->department_id_driver,
            'identification_number_driver' => $request->identification_number_driver,
            'municipality_id_driver' => $request->municipality_id_driver,
            'date_of_birth_driver' => $request->date_of_birth_driver,
            'sex_driver' => $request->sex_driver,
            'residence_address_driver' => $request->residence_address_driver,
            'phone_number_driver' => $request->phone_number_driver,
            'email_driver' => $request->email_driver,
            'file_license' => $file_license,
            'file_cc_driver' => $file_cc_driver,

            'soat' => $soat,
            'contractual' => $contractual,
            'extra_contractual' => $extra_contractual,
            'tarjeta_operacion' => $tarjeta_operacion,
            'tecnomecanica' => $tecnomecanica,
        ]);


        return $data;
    }

    public function getRequests()
    {
        $data = PreRegistro::all();
        return response()->json($data, 200);
    }

    public function approveRequest(Request $request)
    {

        try {
            DB::beginTransaction();


            $preregistro = PreRegistro::find($request->id);

           $user = User::create([
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
            ]);

            $user->assign('owner');

            $user2 = User::create([
                'role' => 'CONDUCTOR',
                'id_type_id' => $request->id_type_id_driver,
                'department_id' => $request->department_id_driver,
                'municipality_id' => $request->municipality_id_driver,
                'identification_number' => $request->identification_number_driver,
                'names' => $request->names_driver,
                'surnames' => $request->surnames_driver,
                'date_of_birth' => $request->date_of_birth_driver,
                'sex' => $request->sex_driver,
                'residence_address' => $request->residence_address_driver,
                'phone_number' => $request->phone_number_driver,
                'email' => $request->email_driver,
                'password' => bcrypt($request->identification_number_driver),
            ]);

            $user->assign('conductor');


            $vehicle = Vehicle::create([
                'branch_or_agreement' => 'CONVENIOS',
                'settled_city' => 'Bogota',
                'car_plate' => $request->car_plate,
                'department_id' => $request->department_id_vehicle,
                'municipality_id' => $request->municipality_id_vehicle,
                'internal_number' => $request->internal_number,
                'enrollment_date' => $request->enrollment_date,
                'chassis_number' => $request->chassis_number,
                'engine_number' => $request->engine_number,
                'model' => $request->model,
                'brand' => $request->brand,
                'cylinder' => $request->cylinder,
                'color' => $request->color,
                'auto_type' => $request->auto_type,
                'number_seats' => $request->number_seats,
                'date_association_company' => Carbon::now(),
                'operation_card' => $request->operation_card
            ]);

            Documentation::create([
                'vehicle_id' => $vehicle->id,
                'file' => $preregistro->soat,
                'type' => 'SOAT',
            ]);

            Documentation::create([
                'vehicle_id' => $vehicle->id,
                'file' => $preregistro->contractual,
                'type' => 'CONTRACTUAL',
            ]);

            Documentation::create([
                'vehicle_id' => $vehicle->id,
                'file' => $preregistro->extra_contractual,
                'type' => 'EXTRA-CONTRACTUAL',
            ]);
            Documentation::create([
                'vehicle_id' => $vehicle->id,
                'file' => $preregistro->tarjeta_operacion,
                'type' => 'TARJETA OPERACIONES',
            ]);

            Documentation::create([
                'vehicle_id' => $vehicle->id,
                'file' => $preregistro->tecnomecanica,
                'type' => 'TECNOMECANICA',
            ]);


            $preregistro->delete();

            DB::commit();
            return response()->json('success');

        } catch (\Exception $exception) {
            DB::rollBack();
            return $exception->getMessage();
        }
    }

    public function destroy($id)
    {
        $preregistro = PreRegistro::find($id);
        $preregistro->delete();

        return response()->json($preregistro);
    }
}
