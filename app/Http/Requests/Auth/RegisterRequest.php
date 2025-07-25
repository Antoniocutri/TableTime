<?php

namespace App\Http\Requests\Auth;

use App\Models\User;
use Illuminate\Validation\Rules;
use Illuminate\Foundation\Http\FormRequest;

class RegisterRequest extends FormRequest
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
            'name' => ['required', 'string', 'max:255'],
            'email' => ['required', 'string', 'lowercase', 'email', 'max:255', 'unique:'.User::class],
            'role' => ['required', 'in:customer,owner,admin'],
            'restaurant_name' => ['required_if:role,owner', 'string', 'max:255'],
            'restaurant_description' => ['string', 'max:511'],
            'city' => ['required_if:role,owner', 'string', 'max:255'],
            'street' => ['required_if:role,owner', 'string', 'max:255'],
            'phone' => ['required_if:role,owner', 'regex:/^(\+39)?\s*\(?\d{3}\)?[\s-]?\d{3}[\s-]?\d{3,4}$/'],
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ];
    }
}
