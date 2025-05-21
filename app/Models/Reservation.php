<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reservation extends Model
{
    /** @use HasFactory<\Database\Factories\ReservationFactory> */
    use HasFactory;

     protected $fillable = [
        'user_id',
        'restaurant_id',
        'table_id',
        'reservation_date',
        'reservation_time',
        'guest_number',
        'status',
        'notes'
    ];

    protected $casts = [
        'reservation_date' => 'datetime:Y-m-d',
        'reservation_time' => 'datetime:H:i',
    ];


    
}
