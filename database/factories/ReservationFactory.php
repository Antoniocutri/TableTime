<?php

namespace Database\Factories;

use App\Models\Restaurant;
use App\Models\User;
use Carbon\Carbon;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Reservation>
 */
class ReservationFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        $restaurant = Restaurant::inRandomOrder()->first();
        $table = $restaurant->tables()->inRandomOrder()->first();

        //take an opening date of the restaurant
        $schedules = $restaurant->restaurant_schedules()->get();
        $validSchedules = $schedules->filter(function ($s) {
            return !$s->is_lunch_closed || !$s->is_dinner_closed;
        });

        $schedule = $validSchedules->random();
        $reservationDate = Carbon::now()->addDays(rand(1, 30))->next($schedule->week_day);

        // generate a random reservation time beetween openin and closing hour
        if (!$schedule->is_lunch_closed) { 
            $opening = Carbon::parse($schedule->lunch_opening); 
            $closing = Carbon::parse($schedule->lunch_closing); 
            $minutesRange = $opening->diffInMinutes($closing); // calculate how many minutes are beetween opening and closing time
            $timeSlot = $opening->copy()->addMinutes(rand(0, $minutesRange - 1)); // generate a random value in opening time
        } else {
            $opening = Carbon::parse($schedule->dinner_opening); 
            $closing = Carbon::parse($schedule->dinner_closing); 
            $minutesRange = $opening->diffInMinutes($closing); // calculate how many minutes are beetween opening and closing time
            $timeSlot = $opening->copy()->addMinutes(rand(0, $minutesRange - 1)); // generate a random value in opening time
        }

        return [
            'user_id' => User::where('role', '!=', 'owner')->inRandomOrder()->first()->id,
            'restaurant_id' => $restaurant->id,
            'table_id' => $table->id,
            'guest_number'  => fake()->numberBetween(1, $table->seats ?? 4),
            'reservation_date' => $reservationDate->toDateString(),
            'reservation_time' => $timeSlot->format('H:i'),
            'status' =>  fake()->randomElement(['pending', 'confirmed', 'cancelled', 'completed']),
            'notes' => fake()->optional()->sentence(),
        ];
    }
}
