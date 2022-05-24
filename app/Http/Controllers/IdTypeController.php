<?php

namespace App\Http\Controllers;

use App\Models\IdType;
use App\Traits\Helpers;
use Illuminate\Http\Request;

class IdTypeController extends Controller
{
    use Helpers;

    public function index()
    {
        $idTypes = $this->dataForSelectComponent(IdType::all());
        return response()->json($idTypes, 200);
    }


}
