<?php

namespace App\Http\Controllers;

use App\Http\Requests\RestaurantScheduleRequest;
use App\Models\Restaurant_schedule;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Log;
use Illuminate\Support\Facades\Redirect;

class RestaurantScheduleController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(RestaurantScheduleRequest $request)
    {
        $request->validated();

        Restaurant_schedule::create([
            'restaurant_id' => $request->user()->restaurants[0]->id,
            'week_day' => $request->week_day,
            'is_lunch_closed' => $request->isLunch_closed,
            'lunch_opening' => $request->lunch_opening,
            'lunch_closing' => $request->lunch_closing,
            'is_dinner_closed' => $request->isDinner_closed,
            'dinner_opening' => $request->dinner_opening,
            'dinner_closing' => $request->dinner_closing,
        ]);

        return Redirect::route('profile.edit')->with('status', 'schedule-stored');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
