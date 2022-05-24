<?php

namespace App\Http\Controllers;

use App\Helpers\Uploader;
use App\Models\Folder;
use Illuminate\Http\Request;

class FolderController extends Controller
{

    public function index()
    {
        $folders = Folder::query()->where('folder_id', null)->get();
        return $folders;
    }

    public function store(Request $request)
    {
        $folderId = null;
        if (isset($request->folder_id)) {
            $folderId = $request->folder_id;
        }

        $folder = Folder::create([
            'name' => $request->name,
            'folder_id' => $folderId
        ]);

        return $folder;
    }


    public function update(Request $request, Folder $folder)
    {
        $folder->name = $request->name;
        $folder->update();
        $folder->load('folders', 'files');
        return $folder->load('folders', 'files');
    }

    public function show(Folder $folder)
    {
        $folder->load('folders', 'files');
        return $folder;
    }

    public function destroy(Folder $folder)
    {
        Uploader::removeFolder("folders/folder-{$folder->id}");
        $folder->delete();
        return response()->json('deleted', 200);
    }
}
