<?php

namespace Database\Seeders;

use App\Models\Restaurant;
use App\Models\restaurant_schedule;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class RestaurantScheduleSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $weekDays = range(0, 6);

        foreach (Restaurant::all() as $restaurant) {
            foreach ($weekDays as $day) {
                $isLunchClosed = fake()->boolean(10); // 10% probability of closing
                $isDinnerClosed = fake()->boolean(5); // 5% probability of closing

                Restaurant_schedule::create([
                    'restaurant_id' => $restaurant->id,
                    'week_day' => $day,
                    'lunch_opening' => $isLunchClosed ? null : fake()->randomElement(['11:30:00', '12:00:00']),
                    'lunch_closing' => $isLunchClosed ? null : fake()->randomElement(['14:00:00', '14:30:00']),
                    'dinner_opening' => $isDinnerClosed ? null : fake()->randomElement(['19:00:00', '19:30:00']),
                    'dinner_closing' => $isDinnerClosed ? null : fake()->randomElement(['22:00:00', '23:00:00']),
                    'is_lunch_closed' => $isLunchClosed,
                    'is_dinner_closed' => $isDinnerClosed,
                ]);
            }
        }
    }
}
