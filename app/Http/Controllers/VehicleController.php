<?php

namespace App\Http\Controllers;

use App\Http\Requests\VehicleRequest;
use App\Models\User;
use App\Models\Vehicle;
use Illuminate\Http\Request;

class VehicleController extends Controller
{

    public function index(Request $request)
    {
        $name = $request->name;

        $vehicles = Vehicle::query()
            ->with('users', 'department', 'municipality')
            ->withCount('users');

        if (!empty($name)) {
            $vehicles->where('car_plate', $name);
        }

        $data = $vehicles->paginate(400);
        return response()->json($data, 200);
    }

    public function getByPLate($plate)
    {
        $vehicles = Vehicle::with('users.license_tran', 'department', 'municipality', 'documentations')
            ->withCount('users')
            ->where('car_plate', 'LIKE', '%' . $plate . '%')
            ->get();
        return response()->json($vehicles, 200);
    }


    public function store(VehicleRequest $request)
    {
        $vehicle = Vehicle::create($request->validated());
        return response()->json($vehicle, 201);
    }


    public function update(VehicleRequest $request, Vehicle $vehicle)
    {
        $vehicle->update($request->validated());
        return response()->json($vehicle, 201);
    }


    public function destroy(Vehicle $vehicle)
    {
        $vehicle->delete();
        return response()->json("vehicle successfully removed", 200);
    }


    public function getMyVehicles()
    {
        $vehicles = auth()->user()->myVehicles();
        return response()->json($vehicles, 200);
    }

    public function getVehiclesByCustomers(User $user)
    {
        $vehicles = $user->myVehicles();
        return response()->json($vehicles, 200);
    }

    public function unlink(Vehicle $vehicle)
    {
        $vehicle->its_linked = false;
        $vehicle->update();
        return response()->json($vehicle, 201);
    }

    public function unlinkUser(Vehicle $vehicle, Request $request)
    {
        $vehicle->users()->detach($request->idUser);
        return response()->json("user unlinked successfully", 200);
    }
}
