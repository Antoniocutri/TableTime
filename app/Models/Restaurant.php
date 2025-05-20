<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Restaurant extends Model
{
    /** @use HasFactory<\Database\Factories\RestaurantFactory> */
    use HasFactory;

     protected $fillable = [
        'name',
        'description',
        'street',
        'street_number',
        'city',
        'phone',
        'email',
        'user_id',
    ];

    public function restaurant_schedules() {
        return $this->hasMany(Restaurant_schedule::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
