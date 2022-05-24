<?php

namespace App\Http\Controllers;

use App\Models\VehicleReceiptDelivery;
use Carbon\Carbon;
use Illuminate\Http\Request;
use PDF;

class VehicleReceiptDeliveryController extends Controller
{

    public function index(Request $request)
    {
        $query = VehicleReceiptDelivery::query()->with('vehicle', 'user');

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

        $data = VehicleReceiptDelivery::create([
            'vehicle_id' => $request->vehicle_id,
            'user_id' => $request->user_id,
            'km' => $request->user_id,
            'extracto_contrato_conductor' => $request->extracto_contrato_conductor,
            'date' => $request->date,
            'items' => $request->items,

            'car_plate' => $request->car_plate,
            'type' => $request->type,
            'driver' => $request->driver,
            'license' => $request->license,
            'soat' => $request->soat,
            'contractual' => $request->contractual,
            'extra_contractual' => $request->extra_contractual,
            'permiso_acceso' => $request->permiso_acceso,
        ]);
        return response()->json($data, 201);
    }

    public function generatePDF($id)
    {
        $data = VehicleReceiptDelivery::find($id);

        $pdf = PDF::loadView('pdf.inventory_vehicle', [
            'data' => $data
        ]);

        $name = "noloserick" . '.pdf';

        return $pdf->download($name);
    }

    public function generatePDF2($id)
    {
        $data = VehicleReceiptDelivery::find($id);

        return view('index', compact('data'));
    }


    public function update(Request $request, VehicleReceiptDelivery $vehicleReceiptDelivery)
    {
        //
    }

    public function destroy(VehicleReceiptDelivery $vehicleReceiptDelivery)
    {
        //
    }
}
