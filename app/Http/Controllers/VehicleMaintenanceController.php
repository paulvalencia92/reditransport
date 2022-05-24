<?php

namespace App\Http\Controllers;

use App\Models\VehicleMaintenance;
use Carbon\Carbon;
use Illuminate\Http\Request;
use PDF;

class VehicleMaintenanceController extends Controller
{


    public function index(Request $request)
    {
        $query = VehicleMaintenance::query()->with('vehicle', 'user');


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

        return response()->json($data, 201);
    }

    public function store(Request $request)
    {

        $vehicle = VehicleMaintenance::create([
            'vehicle_id' => $request->vehicle_id,
            'user_id' => $request->user_id,
            'km' => $request->km,
            'date' => $request->date,
            'pase' => $request->pase,
            'vence' => $request->vence,
            'categoria' => $request->categoria,
            'items' => $request->items,
            'observaciones' => $request->observaciones,
            'total_gasto' => $request->total_gasto,
            'driver' => $request->driver,
            'car_plate' => $request->car_plate,
            'type' => $request->type,
        ]);

        return response()->json($vehicle, 200);
    }


    public function generatePDF($id)
    {
        $data = VehicleMaintenance::find($id);

        $pdf = PDF::loadView('pdf.maintenance_vehicle', [
            'data' => $data
        ]);

        $name = "mantenimiento" . '.pdf';

        return $pdf->download($name);
    }

}
