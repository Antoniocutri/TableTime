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
        $schedules = $restaurant->schedules()->get();
        $validSchedules = $schedules->filter(function ($s) {
            return !$s->is_lunch_closed || !$s->is_dinner_closed;
        });

        $schedule = $validSchedules->random();
        $reservationDate = Carbon::now()->addDays(rand(1, 30))->next($schedule->week_day);
        
        // generate a random reservation time beetween openin and closing hour
        if (!$schedule->is_lunch_closed) {
            $timeSlot = Carbon::parse($schedule->lunch_opening)
                ->addMinutes(rand(0, Carbon::parse($schedule->lunch_closing)->diffInMinutes($schedule->lunch_opening) - 1));
        } else {
            $timeSlot = Carbon::parse($schedule->dinner_opening)
                ->addMinutes(rand(0, Carbon::parse($schedule->dinner_closing)->diffInMinutes($schedule->dinner_opening) - 1));
        }

        return [
            'user_id' => User::where('role', '!=', 'owner')->inRandomOrder()->first()->id,
            'restaurant_id' => $restaurant->id,
            'table_id' => $table->id,
            'guests_number'  => fake()->numberBetween(1, $table->seats ?? 4),
            'reservation_date' => $reservationDate->toDateString(),
            'reservation_time' => $timeSlot->format('H:i'),
            'status' =>  fake()->randomElement(['pending', 'confirmed', 'cancelled', 'completed']),
            'notes' => $this->faker->optional()->sentence(),
        ];
    }
}
