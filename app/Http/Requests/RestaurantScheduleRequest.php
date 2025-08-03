<?php

namespace App\Http\Requests;

use App\Rules\TimeAfter;
use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Log;
use Illuminate\Validation\Rule;

class RestaurantScheduleRequest extends FormRequest
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
            "week_day" => ['required','integer','min:0','max:6',
                            Rule::unique('restaurant_schedules', 'week_day')
                                ->where('restaurant_id', $this->user()->restaurants[0]->id)],
            "isLunch_closed" => ['required','boolean'],
            "lunch_opening" => ['nullable','required_if:isLunch_closed,false','date_format:H:i'],
            "lunch_closing" => ['nullable','required_if:isLunch_closed,false','date_format:H:i', new TimeAfter('lunch_opening')],
            "isDinner_closed" => ['required','boolean'],
            "dinner_opening" => ['nullable','required_if:isDinner_closed,false','date_format:H:i'],
            "dinner_closing" => ['nullable','required_if:isDinner_closed,false','date_format:H:i',new TimeAfter('dinner_opening')]
        ];
    }

    /**
     * Get the error messages for the defined validation rules.
     *
     * @return array<string, string>
     */
    public function messages()
    {
        return [
            'week_day.unique' => __("The schedule for this day has already been added"),
        ];
    }
}
