<?php

namespace App\Http\Controllers;


use App\Exports\AffiliateExport;
use App\Models\User;
use App\Models\Vehicle;
use Carbon\Carbon;
use Illuminate\Http\Request;

class ReportAffiliateController extends Controller
{
    public function getFilteredAffiliates(Request $request)
    {
        $affiliates = User::filteredAffiliates($request);
        return response()->json($affiliates, 200);
    }

    public function affiliatesExcel(Request $request)
    {
        $affiliates = User::filteredAffiliates($request);
        return (new AffiliateExport($affiliates))->download('reporte-afiliados.xlsx');
    }
}
