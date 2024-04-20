<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Http\Request;

class BookController extends Controller
{
    
    // create a new book
    public function __invoke(Request $request)
    {
        $bookPayload = $request->validate([
            'name' => 'required',
            'author' => 'required',
            'isbn' => 'required|unique:books',
            'publisher' => 'required',
            'country' => 'required',
            'release_date' => 'required',
            'number_of_pages' => 'required'
        ]);
        $book = $request->all();
        $book = Book::create($bookPayload);

        $author = Author::firstOrCreate([
            'name' => $request->input('author')
        ]);
        $book->authors()->attach($author);

        return response()->json([
            'status_code'=> 201,
            'status' => 'success',
            'data' => [
                'id' => $book->id,
                'name' => $book->name,
                'author' => $book->authors->pluck('name'),
                'isbn' => $book->isbn,
                'publisher' => $book->publisher,
                'country' => $book->country,
                'release_date' => $book->release_date,
                'number_of_pages' => $book->number_of_pages
            ]
        ]);
}
}