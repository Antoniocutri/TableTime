<?php

namespace App\Http\Requests;

use App\Models\Restaurant;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRestaurantRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     */
    public function authorize(): bool
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array<string, \Illuminate\Contracts\Validation\ValidationRule|array<mixed>|string>
     */
    public function rules(): array
    {
        return [
            'name' => ['required','string','max:255'],
            'description' => ['required','string'],
            'street' => ['required','string'],
            'street_number'=> ['required','string'],
            'city' => ['required','string','max:255'],
            'phone' => ['required','string','max:20'],
            'email' => ['required','string','email','lowercase','max:255',Rule::unique(Restaurant::class)->ignore($this->restaurant->id)]
        ];
    }
}
