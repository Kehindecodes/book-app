<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class DeleteBookController extends Controller
{
    public function __invoke($id)
    {
        // find the book
        $book = Book::find($id);
        // check if the book exists
        if (!$book) {
            return response()->json([
                'status_code'=> 404,
                'status' => 'error',
                'message' => "Book with id $id not found",
            ]);
        }
        // delete the book if it exists
        $book->delete();
        return response()->json([
            'status_code'=> 200,
            'status' => 'success',
            'message' => 'The book ' . $book->name . ' has been deleted successfully',
            'data' => []
        ]);
    }
}
