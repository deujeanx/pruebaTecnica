<?php

use Illuminate\Support\Facades\Route;

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider and all of them will
| be assigned to the "web" middleware group. Make something great!
|
*/

Route::get('/', function () {
    return view('index');
}) -> name('index');

Route::get('/graficas1', function () {
    return view('graficas1');
})->name('grafica1');

Route::get('/graficas2', function () {
    return view('graficas2');
})->name('grafica2');

Route::get('/graficas3', function () {
    return view('graficas3');
})->name('grafica3');
