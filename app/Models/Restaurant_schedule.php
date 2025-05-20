<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class restaurant_schedule extends Model
{
    /** @use HasFactory<\Database\Factories\RestaurantScheduleFactory> */
    use HasFactory;

    protected $fillable = [
        'restaurant_id',
        'week_day',
        'lunch_opening',
        'lunch_closing',
        'dinner_opening',
        'dinner_closing',
        'is_lunch_closed',
        'is_dinner_closed',
    ];

    protected $casts = [
        'is_lunch_closed' => 'boolean',
        'is_dinner_closed' => 'boolean',
        'lunch_opening' => 'datetime:H:i',
        'lunch_closing' => 'datetime:H:i',
        'dinner_opening' => 'datetime:H:i',
        'dinner_closing' => 'datetime:H:i',
    ];

    public function restaurant() {
        return $this->belongsTo(Restaurant::class);
    }
}
