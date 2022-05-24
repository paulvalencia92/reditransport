<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Http\Requests\DocumentationRequest;
use App\Models\{Vehicle, Documentation};
use Illuminate\Http\Request;

class VehicleDocumentationController extends Controller
{

    public function index(Request $request)
    {
        $name = $request->name;

        $query = Vehicle::with('documentations');

        if (!empty($name)) {
            $query->where('car_plate', $name);
        }

        $vehicles = $query->paginate(5);

        return response()->json($vehicles, 200);
    }

    public function getByPLate($plate)
    {
        $vehicles = Vehicle::with('documentations')->where('car_plate', 'LIKE', '%' . $plate . '%')->get();
        return response()->json($vehicles, 200);
    }

    public function store(DocumentationRequest $request)
    {

        $file = null;
        if ($request->hasFile('file')) {
            $file = Uploader::uploadFile('file', 'documents');
        }

        $document = Documentation::create([
            'vehicle_id' => $request->vehicle_id,
            'file' => $file,
            'number' => $request->number,
            'identity_name' => $request->identity_name,
            'expiration_date' => $request->expiration_date,
            'type' => $request->type,
        ]);

        return response()->json($document, 201);
    }


    public function update(DocumentationRequest $request, Documentation $document)
    {

        $file = null;
        if ($request->hasFile('file')) {
            if ($document->file) {
                Uploader::removeFile("documents", $document->file);
            }
            $file = Uploader::uploadFile('file', 'documents');
        }

        $document->update([
            'vehicle_id' => $request->vehicle_id,
            'file' => $file,
            'number' => $request->number,
            'identity_name' => $request->identity_name,
            'expiration_date' => $request->expiration_date,
            'type' => $request->type,
        ]);

        return response()->json($document, 201);
    }
}
