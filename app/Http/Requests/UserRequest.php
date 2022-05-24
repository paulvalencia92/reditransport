<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UserRequest extends FormRequest
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
        switch ($this->method()) {
            case 'POST':
            {
                return [
                    'id_type_id' => ['required', Rule::exists('id_types', 'id')],
                    'municipality_id' => ['required', Rule::exists('municipalities', 'id')],
                    'department_id' => ['required', Rule::exists('departments', 'id')],
                    'identification_number' => ['required', 'unique:users'],
                    'names' => ['required'],
                    'surnames' => ['required'],
                    'date_of_birth' => ['required'],
                    'sex' => ['required', Rule::in('Masculino', 'Femenino')],
                    'residence_address' => ['required'],
                    'phone_number' => ['required'],
                    'email' => ['required', 'unique:users'],
                    'password' => [''],
                    'role' => [''],
                ];
            }
            case 'PUT':
            {
                return [
                    'id_type_id' => ['required', Rule::exists('id_types', 'id')],
                    'municipality_id' => ['required', Rule::exists('municipalities', 'id')],
                    'department_id' => ['required', Rule::exists('departments', 'id')],
                    'identification_number' => ['required', Rule::unique('users')->ignore($this->user)],
                    'names' => ['required'],
                    'surnames' => ['required'],
                    'date_of_birth' => ['required'],
                    'sex' => ['required', Rule::in('Masculino', 'Femenino')],
                    'residence_address' => ['required'],
                    'phone_number' => ['required'],
                    'email' => ['required', Rule::unique('users')->ignore($this->user)],
                    'password' => [''],
                ];
            }
        }


    }
}
