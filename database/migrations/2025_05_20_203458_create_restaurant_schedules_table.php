<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    /**
     * Run the migrations.
     */
    public function up(): void
    {
        Schema::create('restaurant_schedules', function (Blueprint $table) {
            $table->id();
            $table->unsignedBigInteger('restaurant_id');

            $table->tinyInteger('week_day');
            $table->time('lunch_opening')->nullable();
            $table->time('lunch_closing')->nullable();
            $table->time('dinner_opening')->nullable();
            $table->time('dinner_closing')->nullable();
            $table->boolean('is_lunch_closed')->default(false);
            $table->boolean('is_dinner_closed')->default(false);

            $table->foreign('restaurant_id')->references('id')->on('restaurants')->onDelete('cascade');
            $table->timestamps();
        });
    }

    /**
     * Reverse the migrations.
     */
    public function down(): void
    {
        Schema::dropIfExists('restaurant_schedules');
    }
};
