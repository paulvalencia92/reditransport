<?php

namespace App\Http\Controllers;

use App\Models\Folder;
use App\Models\FolderPermit;
use App\Models\User;
use Illuminate\Http\Request;

class FolderPermitController extends Controller
{
    public function usersWithoutPermits($id)
    {
        $users = User::query()
            ->whereDoesntHave('folder_permits', function ($query) use ($id) {
                $query->where('folder_id', $id);
            })->get();

        return $users;
    }


    public function usersWithPermits($id)
    {
        $users = User::query()
            ->whereHas('folder_permits', function ($query) use ($id) {
                $query->where('folder_id', $id);
            })->get();

        return $users;
    }

    public function store(Request $request)
    {
        FolderPermit::create([
            'folder_id' => $request->folder_id,
            'user_id' => $request->user_id
        ]);

        return response()->json('success', 201);
    }

    public function destroy(Request $request)
    {
        $folderPermit = FolderPermit::query()
            ->where('user_id', $request->user_id)
            ->where('folder_id', $request->folder_id)
            ->first();

        $folderPermit->delete();

        return response()->json('deleted', 201);
    }

    public function myFolders()
    {
        $data = \App\Models\FolderPermit::query()->where('user_id', auth()->id())->pluck('folder_id');
        return $data;
    }
}
