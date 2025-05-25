<?php

namespace App\Repositories;

use App\Interfaces\RepositoryInterface;
use App\Models\Restaurant;

class RestaurantRepository implements RepositoryInterface
{
    /**
     * Create a new class instance.
     */
    public function index(){
        return Restaurant::all();
    }

    public function getById($id){
       return Restaurant::findOrFail($id);
    }

    public function store(array $data){
       return Restaurant::create($data);
    }

    public function update(array $data,$id){
       return Restaurant::whereId($id)->update($data);
    }
    
    public function delete($id){
       Restaurant::destroy($id);
    }
}
