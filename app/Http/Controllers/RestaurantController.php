<?php

namespace App\Http\Controllers;

use App\Classes\ApiResponseClass;
use App\Models\Restaurant;
use App\Http\Requests\StoreRestaurantRequest;
use App\Http\Requests\UpdateRestaurantRequest;
use App\Http\Resources\RestaurantResource;
use App\Repositories\RestaurantRepository;

class RestaurantController extends Controller
{

    public function __construct(protected RestaurantRepository $restaurantRepository){
    }

    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $data = $this->restaurantRepository->index();

        return ApiResponseClass::sendResponse(RestaurantResource::collection($data),'',200);
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
    public function store(StoreRestaurantRequest $request)
    {
        //
    }

    /**
     * Display the specified resource.
     */
    public function show($id)
    {
        $restaurant = $this->restaurantRepository->getById($id);

        return ApiResponseClass::sendResponse(new RestaurantResource($restaurant),'',200);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(Restaurant $restaurant)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(UpdateRestaurantRequest $request, Restaurant $restaurant)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy($id)
    {
        $this->restaurantRepository->delete($id);

        return ApiResponseClass::sendResponse('Product Delete Successful','',204);
    }
}
