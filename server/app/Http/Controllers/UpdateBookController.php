<?php

namespace App\Http\Controllers;

use App\Models\Author;
use App\Models\Book;
use Illuminate\Http\Request;

class UpdateBookController extends Controller
{
    public function __invoke(Request $request, $id)
    {
        // Fetch the book 
        $book = Book::find($id);

        // Check if the book exists
        if (!$book) {
            return response()->json([
                'status_code' => 404,
                'status' => 'error',
                'message' => "Book with id $id not found"
            ]);
        }

        // Prepare data for update
        $data = [
            'name' => $request->input('name') ?? $book->name,
            'isbn' => $request->input('isbn') ?? $book->isbn,
            'publisher' => $request->input('publisher') ?? $book->publisher,
            'country' => $request->input('country') ?? $book->country,
            'release_date' => $request->input('release_date') ?? $book->release_date,
            'number_of_pages' => $request->input('number_of_pages') ?? $book->number_of_pages
        ];

        // Update the book
        $book->update($data);

        // Handle authors
        $authors = $request->input('author');
        if ($authors) {
            foreach ($authors as $authorName) {
                $author = Author::firstOrCreate(['name' => $authorName]);
                // Check if the author is already attached to the book
            if (!$book->authors()->where('name', $authorName)->exists()) {
                $book->authors()->attach($author);
            }
            }
        }

        // Return the updated book instance
        return response()->json([
            'status_code' => 200,
            'status' => 'success',
            'message' => "The book $book->name was updated successfully",
            'data' => [
                'id' => $book->id,
                'name' => $book->name,
                'authors' => $book->authors->pluck('name'),
                'isbn' => $book->isbn,
                'publisher' => $book->publisher,
                'country' => $book->country,
                'release_date' => $book->release_date,
                'number_of_pages' => $book->number_of_pages
            ]
        ]);
    }

}
