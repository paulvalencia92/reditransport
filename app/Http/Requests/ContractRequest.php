<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContractRequest extends FormRequest
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
                    'number' => ['required'],
                    'department_id' => ['required', Rule::exists('departments', 'id')],
                    'municipality_id' => ['required', Rule::exists('municipalities', 'id')],
                    'start_date' => ['required'],
                    'end_date' => ['required'],
                    'contractor_id' => ['required'],
                    'object' => ['required'],
                    'incomes' => ['required'],
                    'details' => ['required'],
                    'vehicle_id' => ['required']
                ];
            }
            case 'PUT':
            {
                return [
                    'number' => ['required'],
                    'department_id' => ['required', Rule::exists('departments', 'id')],
                    'municipality_id' => ['required', Rule::exists('municipalities', 'id')],
                    'start_date' => ['required'],
                    'end_date' => ['required'],
                    'contractor_id' => ['required'],
                    'object' => ['required'],
                    'incomes' => ['required'],
                    'details' => ['required'],
                    'vehicle_id' => ['required']
                ];
            }
        }


    }
}
