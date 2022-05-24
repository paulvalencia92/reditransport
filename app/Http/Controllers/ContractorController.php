<?php

namespace App\Http\Controllers;

use App\Models\Contractor;
use Illuminate\Http\Request;
use App\Http\Requests\ContractorRequest;

class ContractorController extends Controller
{
    public function index(Request $request)
    {
        $nit = $request->name;

        $query = Contractor::query()
            ->orderByDesc('created_at');
//            ->paginate(20);

        if ($nit) {
            $query->where('nit', $nit);
        }

        $contractors = $query->paginate(20);


        return response()->json($contractors, 200);
    }

    public function store(ContractorRequest $request)
    {
        $user = Contractor::create($this->userInput($request));
        return response()->json($user, 201);
    }

    public function update(ContractorRequest $request, Contractor $contractor)
    {
        $contractor->fill($this->userInput($request))->save();
        return response()->json($contractor, 201);
    }


    public function destroy(Contractor $contractor)
    {
        $contractor->delete();
        return response()->json("user successfully removed", 200);
    }

    protected function userInput(Request $request): array
    {
        return [
            'nit' => $request->nit,
            'contractor' => $request->contractor,
            'adress' => $request->adress,
            'phone' => $request->phone,
            'email' => $request->email,
            'web' => $request->web,
            'c_name' => $request->c_name,
            'c_last_name' => $request->c_last_name,
            'c_cc' => $request->c_cc,
            'c_adress' => $request->c_adress,
            'c_phone' => $request->c_phone
        ];
    }
}
