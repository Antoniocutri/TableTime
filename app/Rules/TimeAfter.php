<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Log;

class TimeAfter implements ValidationRule
{
    protected $startTimeField;
    protected $startTimeValue;

    public function __construct($startTimeField)
    {
        $this->startTimeField = $startTimeField;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {   
        // Take the start value from request
        $this->startTimeValue = request()->input($this->startTimeField);

        $start = \DateTime::createFromFormat('H:i', $this->startTimeValue);
        $end = \DateTime::createFromFormat('H:i', $value);

        if($end < $start){
            $fail(__('Closing must be later than opening'));
        };
    }
}
