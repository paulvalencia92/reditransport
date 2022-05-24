<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Http\Requests\PursheRequest;
use App\Models\PursheTransaction;
use App\Models\Purshe;
use App\Models\User;
use App\Models\Vehicle;
use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Support\Str;

class PursheController extends Controller
{
    public function index(Request $request)
    {

        $purshe = Purshe::with('vehicle', 'user', 'purshe_transaction.user')
            ->where('status_pay', $request->status_pay)
            ->orderBy('id', 'asc')
            ->paginate(10);
        return response()->json($purshe, 200);
    }


    public function search(Request $request)
    {
        $search = $request->data;

        if($request->type == 0)
        {
            $data = Purshe::whereIn('vehicle_id', function ($query) use ($search) {
                $query->select('id')->from('vehicles')->where('car_plate', 'like', '%'.$search.'%')->get();
            })->with('user', 'vehicle', 'purshe_transaction.user')
            ->orderBy('id', 'asc')
            ->get();

            return response()->json($data, 201);

        }else if($request->type == 1) {

            $data = Purshe::whereIn('user_id', function ($query) use ($search) {
                $query->select('id')->from('users')->where('names', 'like', '%'.$search.'%')->get();
            })->with('user', 'vehicle', 'purshe_transaction.user')
            ->orderBy('id', 'asc')
            ->get();

            return response()->json($data, 201);
            
        }else if($request->type == 2)
        {
            $purshe = Purshe::with('vehicle', 'user', 'purshe_transaction.user')
            ->where('id', $search)
            ->orderBy('payment_date', 'asc')
            ->get();
            
            return response()->json($purshe, 200);
        }else if ($request->type == 3)
        {
            $purshe = Purshe::with('vehicle', 'user', 'purshe_transaction.user')
            ->where('detail', 'like', '%'. $search .'%')
            ->orderBy('payment_date', 'asc')
            ->get();

            return response()->json($purshe, 200);
        }
    }


    public function store(PursheRequest $request)
    {

        if ($request->months) {

            foreach ($request->months as $month) {

                $year = Carbon::now()->year;
                $day = $request->day;
                $date = new Carbon("{$year}-{$month}-{$day}");

                $data = Purshe::create([
                    'user_id' => $request->user_id,
                    'vehicle_id' => $request->vehicle_id,
                    'detail' => $request->detail,
                    'payment_date' => $date,
                    'cost' => $request->cost,
                    'type' => $request->type,
                ]);
            }
        } else {

            $data = Purshe::create([
                'user_id' => $request->user_id,
                'vehicle_id' => $request->vehicle_id,
                'detail' => $request->detail,
                'payment_date' => $request->payment_date,
                'cost' => $request->cost,
                'type' => $request->type,
            ]);
        }


        return response()->json($data, 201);
    }

    public function myPurshes(Request $request)
    {
        $user = auth()->user();
        $idsVehicles = $user->vehicles->pluck('id');

        $purshes = Purshe::where(function ($q) use ($user, $idsVehicles) {
            $q->where('user_id', $user->id)->orWhereIn('vehicle_id', $idsVehicles);
        })->where('status_pay', $request->status_pay)
            ->with('purshe_transaction', 'user')
            ->get();

        return response()->json($purshes, 201);

    }


    public function saveFilePurshe(Request $request, Purshe $purshe)
    {
//

        if ($request->hasFile('file')) {
            $file = Uploader::uploadFile('file', 'purshes');
        }

        $purshe->update(['file' => $file]);

        $purshe->purshe_transaction()->create([
            'cost' => $request->cost,
            'payment' => $request->payment,
            'file' => $file,
            'user_id' => $request->user_id
        ]);


        return response()->json("success", 201);

    }

    public function toggleStatus(Request $request, Purshe $purshe)
    {
        $purshe->status_pay = $request->status;
        $purshe->save();
        return response()->json("success", 201);

    }

    public function destroy($id)
    {
        $licence = Purshe::find($id);
        $licence->delete();

        return response()->json($licence, 200);
    }

    public function checkPayments()
    {
        $vehicles = \Auth::user()->vehicles;

        /* $vehicles = User::find('64')->vehicles; */
        
        $vehiclesArray = [];
        $userArray = [];
        foreach ($vehicles as $vehicle) {
            array_push($vehiclesArray, $vehicle->id);
            
            foreach($vehicle->users as $user)
            {
                array_push($userArray, $user->id);
            }
        }

        $purchesUser = Purshe::select('id','detail','cost','payment_date')->whereIn('user_id', $userArray)->where('status_pay', 'No pago')->orWhere('status_pay','Parcialmente pago')->where('payment_date', '<', Carbon::now())->get();
        $purchesVehicle = Purshe::select('id','detail','cost','payment_date')->whereIn('vehicle_id', $vehiclesArray)->where('payment_date', '<', Carbon::now())->where('status_pay', 'No pago')->orWhere('status_pay','Parcialmente pago')->get();

        return response()->json([$purchesUser, $purchesVehicle], 201);
    }
}
