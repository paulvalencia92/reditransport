<?php

namespace App\Http\Controllers;

use App\Models\VehicleCheckOper;
use Carbon\Carbon;
use Illuminate\Http\Request;
use PDF;

class VehicleCheckOperController extends Controller
{


    public function index(Request $request)
    {

        $query = VehicleCheckOper::query()->with('vehicle', 'user');

        if ($request->from && $request->to) {
            $query->whereBetween('date', [$request->from, $request->to]);
        }

        if ($request->from) {
            $now = Carbon::today()->toDateString();
            $query->whereBetween('date', [$request->from, $now]);
        }

        if ($request->to) {
            $query->where('date', '<=', $request->to);
        }


        if ($request->car_plate) {
            $query->where('car_plate', $request->car_plate);
        }

        $data = $query->orderByDesc('date')->paginate(20);

        return response()->json($data, 200);
    }


    public function store(Request $request)
    {
        $data = VehicleCheckOper::create([
            'vehicle_id' => $request->vehicle_id,
            'user_id' => $request->user_id,
            'place' => $request->place,
            'items' => $request->items,
            'driver' => $request->driver,
            'car_plate' => $request->car_plate,
            'internal_number' => $request->internal_number,
            'observaciones' => $request->observaciones,
            'date' => $request->date,
            'modalidad' => $request->modalidad,
        ]);

        return response()->json($data, 201);
    }

    public function update(Request $request, VehicleCheckOper $vehicleCheckOper)
    {
        $vehicleCheckOper->items = $request->items;
        $vehicleCheckOper->save();
        return response()->json($vehicleCheckOper, 201);

    }


    public function show(VehicleCheckOper $vehicleCheckOper)
    {
        return response()->json($vehicleCheckOper, 200);
    }

    public function generatePDF($id)
    {
        $data = VehicleCheckOper::find($id);

        $pdf = PDF::loadView('pdf.check_oper_vehicle', [
            'data' => $data
        ]);

        $name = "check_operacional" . '.pdf';

        return $pdf->download($name);
    }


    public function generatePDF2()
    {
        $data = VehicleCheckOper::first();

        return view('index', compact('data'));
    }


}
