<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Models\File;
use Illuminate\Http\Request;

class FileController extends Controller
{
    public function store(Request $request)
    {
        $file = null;
        if ($request->hasFile('file')) {
            $file = Uploader::uploadFile('file', "folders/folder-{$request->id}");
        }

        $data = File::create([
            'folder_id' => $request->id,
            'url' => $file,
        ]);

        return response()->json($data, 201);
    }
}
