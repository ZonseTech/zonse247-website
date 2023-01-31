<?php

use App\Http\Controllers\ExpenseController;
use Illuminate\Support\Facades\Route;

require __DIR__ . '/auth.php';

Route::group(['middleware' => ['auth:sanctum']], function () {

    Route::resource("/expense", ExpenseController::class);

});
