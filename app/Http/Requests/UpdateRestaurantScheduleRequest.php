<?php

namespace App\Http\Requests;
use App\Rules\TimeAfter;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateRestaurantScheduleRequest extends FormRequest
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
            "week_day_update" => ['required','integer','min:0','max:6'],
            "isLunch_closed_update" => ['required','boolean'],
            "lunch_opening_update" => ['nullable','required_if:isLunch_closed,false','date_format:H:i'],
            "lunch_closing_update" => ['nullable','required_if:isLunch_closed,false','date_format:H:i', new TimeAfter('lunch_opening')],
            "isDinner_closed_update" => ['required','boolean'],
            "dinner_opening_update" => ['nullable','required_if:isDinner_closed,false','date_format:H:i'],
            "dinner_closing_update" => ['nullable','required_if:isDinner_closed,false','date_format:H:i',new TimeAfter('dinner_opening')]
        ];
    }
}
