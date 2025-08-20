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
        'image',
        'city',
        'phone',
        'user_id',
    ];

    protected $appends = ['image_url'];

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

    /**
     * Get the full URL of the restaurant's image.
     *
     * If an image is stored, it returns the public path using asset('storage/...').
     * Otherwise, it returns a default fallback image.
     *
     * @return string The absolute URL of the restaurant's image
     */
    public function getImageUrlAttribute()
    {
        return $this->image 
            ? asset('storage/' . $this->image)
            : asset('images/default-restaurant.jpg');
    }
}
