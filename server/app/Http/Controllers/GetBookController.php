<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class GetBookController extends Controller
{
   public function __invoke($id)
    {
          $book = Book::find($id);

          if (!$book) {
              return response()->json([
                  'status_code'=> 404,
                  'status' => 'error',
                  'message' => "Book with id $id not found",
              ]);
          }
        return response()->json([
            'status_code'=> 200,
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
