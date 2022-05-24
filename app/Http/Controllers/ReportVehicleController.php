<?php

namespace App\Http\Controllers;

use App\Exports\VehiclesExport;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class ReportVehicleController extends Controller
{
    public function getFilteredVehicles(Request $request)
    {
        $vehicles = Vehicle::filtered($request);
        return response()->json($vehicles, 200);
    }

    public function vehiclesExcel(Request $request)
    {
        $vehicles = Vehicle::filtered($request);
        $data = new VehiclesExport($vehicles);
        return $data->download('reporte-vehiculos.xlsx');
    }
}
