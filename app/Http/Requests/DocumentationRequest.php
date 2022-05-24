<?php

namespace App\Http\Requests;

use App\Models\Documentation;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class DocumentationRequest extends FormRequest
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
                    'vehicle_id' => ['required', Rule::exists('vehicles', 'id')],
                    'file' => ['required'],
                    'number' => ['required'],
                    'identity_name' => ['required'],
                    'expiration_date' => ['required'],
                    'type' => ['required', Rule::in(Documentation::types())],
                ];

            }
            case 'PUT':
            {
                return [
                    'vehicle_id' => ['required', Rule::exists('vehicles', 'id')],
                    'file' => ['required'],
                    'number' => ['required'],
                    'identity_name' => ['required'],
                    'expiration_date' => ['required'],
                    'type' => ['required', Rule::in(Documentation::types())],
                ];

            }
        }
    }
}
