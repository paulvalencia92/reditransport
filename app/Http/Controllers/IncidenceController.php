<?php

namespace App\Http\Controllers;

use App\Http\Requests\IncidenceRequest;
use App\Models\Incidence;
use Illuminate\Http\Request;

class IncidenceController extends Controller
{
    public function index()
    {
        $user = auth()->user();

        if ($user->isAdmin()) {
            $incidence = Incidence::with('user', 'vehicle')->get();
        } else {
            $vehicleIds = auth()->user()->myVehicles()->pluck('id');
            $incidence = Incidence::whereIn('vehicle_id', $vehicleIds)->get();
        }
        return response()->json($incidence, 200);
    }

    public function store(IncidenceRequest $request)
    {
        $incidence = Incidence::create($request->validated());
        return response()->json($incidence->load('user', 'vehicle'), 201);
    }

    public function update(IncidenceRequest $request, Incidence $incidence)
    {
         $incidence->update($request->validated());
        return response()->json($incidence->load('user', 'vehicle'), 201);
    }

    public function destroy(Incidence $incidence)
    {
        $incidence->delete();
        return response()->json('Incidence deleted', 201);
    }
}
