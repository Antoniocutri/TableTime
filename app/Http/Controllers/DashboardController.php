<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class DashboardController extends Controller
{
    /**
     * Handle the incoming request.
     */
    public function __invoke(Request $request)
    {
        if($request->user()->role == 'owner'){
            return view('dashboard_owner',[
                'restaurant' => $request->user()->restaurants()->first(),
            ]);
        }
        return view('dashboard_customer',[
            'user' => $request->user(),
        ]);
    }
}
