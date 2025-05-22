<?php

namespace Database\Factories;

use App\Models\User;
use Illuminate\Database\Eloquent\Factories\Factory;

/**
 * @extends \Illuminate\Database\Eloquent\Factories\Factory<\App\Models\Restaurant>
 */
class RestaurantFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array<string, mixed>
     */
    public function definition(): array
    {
        return [
            'name'=> fake()->company(),
            'description' => fake()->sentence(),
            'street' => fake()->streetName(),
            'street_number' => fake()->numberBetween(1,100),
            'city' => fake()->city(),
            'phone' => fake()->phoneNumber(),
            'email' => fake()->unique()->safeEmail(),
            'user_id' =>  User::where('role', 'owner')->inRandomOrder()->first()->id,
        ];
    }
}
