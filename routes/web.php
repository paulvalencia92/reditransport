<?php

use App\Exports\VehiclesExport;
use App\Http\Controllers\ApiDianController;
use App\Http\Controllers\AuthController;
use App\Http\Controllers\ContractController;
use App\Http\Controllers\ReportAffiliateController;
use App\Http\Controllers\ReportDocumentsController;
use App\Http\Controllers\ReportVehicleController;
use App\Http\Controllers\VehicleCheckOperController;
use App\Http\Controllers\VehicleReceiptDeliveryController;
use App\Models\Contract;
use App\Models\Documentation;
use App\Models\Incidence;
use App\Models\Purshe;
use App\Models\User;
use App\Models\Vehicle;
use Carbon\Carbon;
use Illuminate\Support\Collection;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Route;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Maatwebsite\Excel\Facades\Excel;
use Illuminate\Database\Eloquent\Builder;


Route::get('/tests', function () {

//    $from = date('2022-03-01');
//    $to = date('2022-03-15');
//
//    return Carbon::today()->toDateString();

    return app(ContractController::class)->index();
});

Route::get('/fuec', 'FuecController@checkPayments');


Route::get('/fuec/{id}/{user?}', 'FuecController@generateFuec');
Route::get('/pdf/{id}', 'FuecController@generateFuecValidate');

Route::get('/tests/{id}', 'UserController@getUserByVehicle');


Route::get('/{any}', function () {
    return view('layouts.app');
})->where('any', '.*');

Route::get('/password/reset', function () {
})->name('password.reset');
