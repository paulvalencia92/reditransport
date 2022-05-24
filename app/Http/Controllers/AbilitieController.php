<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Silber\Bouncer\Database\Ability;

class AbilitieController extends Controller
{
    public function index()
    {
        $abilities = Ability::all();
        return response()->json($abilities, 200);
    }

    public function myAbilities()
    {
        $user = auth()->user();
        $abilities = $user->getAbilities()->pluck('name');
        return response()->json($abilities, 200);
    }
}
