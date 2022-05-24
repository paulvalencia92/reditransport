<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Models\LicenseTran;
use App\Models\User;
use App\Models\UserVehicle;
use Illuminate\Http\Request;

class LicenseTranController extends Controller
{

//    public function index($search)
//    {
//        if ($search != 'null') {
//            $data = LicenseTran::whereIn('user_id', function ($query) use ($search) {
//                $query->select('id')
//                    ->from('users')
//                    ->where('names', 'like', '%' . $search . '%');
//            })->orderBy('id', 'desc')->with('user')->get();
//            return response()->json($data, 201);
//
//        } else {
//            $data = LicenseTran::with('user')->orderBy('id', 'desc')->get();
//            return response()->json($data, 201);
//        }
//
//    }

    public function index(Request $request)
    {

        $name = $request->name;

        $data = LicenseTran::query()
            ->whereIn('user_id', function ($query) use ($name) {
                $query->select('id')
                    ->from('users')
                    ->where('names', 'like', '%' . $name . '%');
            })
            ->orderBy('id', 'desc')
            ->with('user')
            ->paginate();

        return response()->json($data, 201);

    }

    public function store(Request $request)
    {
        $file = null;
        if ($request->hasFile('file')) {
            $file = Uploader::uploadFile('file', 'licensetrasn');
        }

        $data = LicenseTran::create([
            'user_id' => auth()->id(),
            'expiration_date' => $request->expiration_date,
            'type' => $request->type,
            'file' => $file
        ]);

        return response()->json($data, 201);
    }


    public function storeAdmin(Request $request)
    {
        $file = null;
        if ($request->hasFile('file')) {
            $file = Uploader::uploadFile('file', 'licensetrasn');
        }

        $data = LicenseTran::create([
            'user_id' => $request->user_id,
            'expiration_date' => $request->expiration_date,
            'type' => $request->type,
            'file' => $file
        ]);

        return response()->json($data, 201);
    }

    public function updateAdmin(Request $request)
    {
        $file = null;
        if ($request->hasFile('file')) {
            $file = Uploader::uploadFile('file', 'licensetrasn');
        }

        $licence = LicenseTran::find($request->id);
        $licence->user_id = $request->user_id;
        $licence->expiration_date = $request->expiration_date;
        $licence->type = $request->type;

        if ($file != null) {
            $licence->file = $file;
        }

        $licence->save();

        return response()->json($licence, 201);
    }


    public function show()
    {
        $user = auth()->user();
        $vehicleIds = $user->vehicles->pluck('id');
        $userIds = UserVehicle::query()->whereIn('vehicle_id', $vehicleIds)->pluck('user_id');
        $data = LicenseTran::query()->whereIn('user_id', $userIds)->with('user')->get();
        return response()->json($data, 200);
    }

    public function getUserWithOutLicense()
    {
        $data = User::query()
            ->whereIs('conductor')
            ->whereDoesntHave('license_tran')
            ->get();
        return response()->json($data, 200);
    }


    public function destroy($id)
    {
        $licence = LicenseTran::find($id);
        $licence->delete();

        return response()->json($licence, 200);
    }
}
