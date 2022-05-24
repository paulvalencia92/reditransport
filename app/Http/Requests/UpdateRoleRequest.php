<?php

namespace App\Http\Requests;

use Bouncer;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Str;
use Illuminate\Validation\Rule;
use Illuminate\Validation\ValidationException;
use Silber\Bouncer\Database\Role;

class UpdateRoleRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'titulo' => ['required', 'min:3', 'max:25', Rule::unique('bouncer_roles', 'title')->ignore($this->id)],
            'habilidades' => 'nullable'
        ];
    }


    public function updateRole(Role $role)
    {
        DB::beginTransaction();
        try {

            $title = $this->titulo;
            $name_lower = Str::lower($title);
            $name = Str::slug($name_lower, '-');

            $role->update([
                'title' => $this->titulo
            ]);

            foreach ($role->abilities as $ability) {
                Bouncer::disallow($role->name)->to($ability->name);
            }

            if (isset($this->habilidades)) {
                foreach ($this->habilidades as $habilidad) {
                    Bouncer::allow($role->name)->to($habilidad);
                }
            }


            DB::commit();
            return response()->json($role, 200);


        } catch (ValidationException  $exception) {
            DB::rollBack();
            return response()->json($exception->getMessage(), 422);
        }
    }
}
