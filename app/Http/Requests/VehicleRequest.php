<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class VehicleRequest extends FormRequest
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
                    'branch_or_agreement' => 'required',
                    'settled_city' => 'required',
                    'car_plate' => 'required|unique:vehicles,car_plate',
                    'department_id' => 'required',
                    'municipality_id' => 'required',
                    'internal_number' => ['required'],
                    'enrollment_date' => 'required',
                    'chassis_number' => ['required',Rule::unique('vehicles')],
                    'engine_number' => ['required', Rule::unique('vehicles')],
                    'model' => 'required',
                    'brand' => 'required',
                    'cylinder' => 'required',
                    'color' => 'required',
                    'auto_type' => 'required',
                    'number_seats' => 'required',
                    'date_association_company' => 'required',
                    'operation_card' => ''
                ];
            }
            case 'PUT':
            {
                return [
                    'branch_or_agreement' => 'required',
                    'settled_city' => 'required',
                    'car_plate' => 'required',
                    'department_id' => 'required',
                    'municipality_id' => 'required',
                    'internal_number' => ['required'],
                    'enrollment_date' => 'required',
                    'chassis_number' => ['required',Rule::unique('vehicles')->ignore($this->vehicle)],
                    'engine_number' => ['required', Rule::unique('vehicles')->ignore($this->vehicle)],
                    'model' => 'required',
                    'brand' => 'required',
                    'cylinder' => 'required',
                    'color' => 'required',
                    'auto_type' => 'required',
                    'number_seats' => 'required',
                    'date_association_company' => 'required',
                    'operation_card' => ''
                ];
            }
        }
    }
}
