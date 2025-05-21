<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class table extends Model
{
    /** @use HasFactory<\Database\Factories\TableFactory> */
    use HasFactory;

    protected $fillable = [
        'restaurant_id',
        'table_number',
        'seats',
    ];

    public function restaurant() {
        return $this->belongsTo(Restaurant::class);
    }

    public function reservations() {
        return $this->hasMany(Reservation::class);
    }

}
