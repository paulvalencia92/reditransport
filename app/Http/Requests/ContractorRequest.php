<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class ContractorRequest extends FormRequest
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
                    'nit' => ['required'],
                    'contractor' => [],
                    'adress' => [],
                    'phone' => ['required'],
                    'email' => ['required'],
                    'web' => [],
                    'c_name' => ['required'],
                    'c_last_name' => [],
                    'c_cc' => [],
                    'c_adress' => [],
                    'c_phone' => ['required']
                ];
            }
            case 'PUT':
            {
                return [
                    'nit' => ['required'],
                    'contractor' => [],
                    'adress' => [],
                    'phone' => ['required'],
                    'email' => ['required'],
                    'web' => [],
                    'c_name' => ['required'],
                    'c_last_name' => [],
                    'c_cc' => [],
                    'c_adress' => [],
                    'c_phone' => ['required']
                ];
            }
        }


    }
}
