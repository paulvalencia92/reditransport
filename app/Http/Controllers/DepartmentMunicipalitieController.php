<?php

namespace App\Http\Controllers;

use App\Traits\Helpers;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class DepartmentMunicipalitieController extends Controller
{
    use Helpers;

    public function indexDepartment()
    {
        
        $departments = $this->dataForSelectComponent(DB::table('departments')->orderBy('name')->get());
        return response()->json($departments, 200);
        
    }


    public function getMunicipalitiesForDepartment(Request $request)
    {
        $municipalities = DB::table('municipalities')
            ->where('department_id', $request->departmentId)
            ->orderBy('name')
            ->get();
        $municipalitiesData = $this->dataForSelectComponent($municipalities);
        return response()->json($municipalitiesData, 200);
    }

}
