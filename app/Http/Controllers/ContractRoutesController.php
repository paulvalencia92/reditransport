<?php

namespace App\Http\Controllers;

use App\Models\ContractRoutes;
use Illuminate\Http\Request;

class ContractRoutesController extends Controller
{
    public function index($id)
    {
        $contractRoutes = ContractRoutes::where('contract_id', $id)->orderBy('id', 'desc')->get();
        return response()->json($contractRoutes, 200);
    }

    public function store(Request $request)
    {        
        $user = ContractRoutes::create($this->userInput($request));
        return response()->json($user, 201);
    }

    public function update(Request $request, ContractRoutes $contractRoutes)
    {
        $contractRoutes->fill($this->userInput($request))->save();
        return response()->json($contractRoutes, 201);
    }

    public function destroy($id)
    {
        $contractRoutes = ContractRoutes::find($id);
        $contractRoutes->delete();

        return response()->json("route successfully removed", 200);
    }

    protected function userInput(Request $request): array
    {
        return [
            'contract_id' => $request->contract_id,
            'from' => $request->from,
            'to' => $request->to,
            'details' => $request->details,
            'center_from' => json_encode($request->centerFrom),
            'center_to' => json_encode($request->centerTo)
        ];
    }
}
