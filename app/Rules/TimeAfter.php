<?php

namespace App\Rules;

use Closure;
use Illuminate\Contracts\Validation\ValidationRule;
use Illuminate\Support\Facades\Log;

class TimeAfter implements ValidationRule
{
    protected $startTimeField;
    protected $startTimeValue;
    protected $isClosed;

    public function __construct($startTimeField, $isClosed)
    {
        $this->startTimeField = $startTimeField;
        $this->isClosed = $isClosed;
    }

    /**
     * Run the validation rule.
     *
     * @param  \Closure(string, ?string=): \Illuminate\Translation\PotentiallyTranslatedString  $fail
     */
    public function validate(string $attribute, mixed $value, Closure $fail): void
    {
        Log::info(request()->boolean($this->isClosed));
        // ignore rules if is closed is true
        if ($this->isClosed && request()->boolean($this->isClosed)) {
            Log::alert('heree');
            return; 
        }

        // Take the start value from request
        $this->startTimeValue = request()->input($this->startTimeField);

        $start = \DateTime::createFromFormat('H:i', $this->startTimeValue);
        $end = \DateTime::createFromFormat('H:i', $value);

        if (!$start || !$end) {
            Log::info('chiuso');
            return;
        }

        if($end > $start){
            $fail(__('Closing must be later than opening'));
        };
    }
}
