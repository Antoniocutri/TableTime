<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        User::factory(20)->create();
        $this->call(RestaurantSeeder::class);
        $this->call(ReviewSeeder::class);
        $this->call(TableSeeder::class);
        $this->call(RestaurantScheduleSeeder::class);
        $this->call(ReservationSeeder::class);
    }
}
