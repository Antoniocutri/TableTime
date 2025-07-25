<?php

namespace App\Models;

use App\Models\table as ModelsTable;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Laravel\Prompts\Table;

class Restaurant extends Model
{
    /** @use HasFactory<\Database\Factories\RestaurantFactory> */
    use HasFactory;

     protected $fillable = [
        'name',
        'description',
        'street',
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

    public function tables() {
        return $this->hasMany(ModelsTable::class);
    }

    public function reservations() {
        return $this->hasMany(Reservation::class);
    }

    public function reviews() {
        return $this->hasMany(Review::class);
    }
}
