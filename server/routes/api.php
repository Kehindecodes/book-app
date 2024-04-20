<?php

use App\Http\Controllers\CreateBookController;
use App\Http\Controllers\DeleteBookController;
use App\Http\Controllers\ExternalBookController;
use App\Http\Controllers\GetBookController;
use App\Http\Controllers\GetBooksController;
use App\Http\Controllers\UpdateBookController;
use Illuminate\Support\Facades\Route;

// Route::get('/user', function (Request $request) {
//     return $request->user();
// })->middleware('auth:sanctum');



Route::get('/external-books', ExternalBookController::class);
Route::post('/v1/books', CreateBookController::class);
Route::get('/v1/books', GetBooksController::class);
Route::get('/v1/books/{id}', GetBookController::class);
Route::patch('/v1/books/{id}', UpdateBookController::class);
Route::delete('/v1/books/{id}', DeleteBookController::class);
