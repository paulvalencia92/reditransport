<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateRoleRequest;
use Illuminate\Http\Request;
use Bouncer;
use Illuminate\Support\Str;
use Silber\Bouncer\Database\Role;

class RoleController extends Controller
{
    public function index()
    {
        return Role::with('abilities')->orderBy('title', 'asc')->get();
    }

    public function store(Request $request)
    {

        $data = $request->validate([
            'title' => ['required', 'unique:bouncer_roles,title'],
        ]);


        $role = $data['title'];
        $role_lower = Str::lower($role);
        $name = Str::slug($role_lower, '-');

        $role = Bouncer::role()->create([
            'name' => $name,
            'title' => $data['title'],
        ]);

        return $this->index();
    }


    public function update(UpdateRoleRequest $request, Role $role)
    {
        $data = $request->updateRole($role);

        return $data;

    }
}
