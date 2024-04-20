<?php

namespace App\Http\Controllers;

use App\Models\Book;
use Illuminate\Http\Request;

class GetBooksController extends Controller
{
    function __invoke(Request $request)
    {
        $data = [];
        $query = Book::query();

        if($request->has('name')){
            $query->where('name',$request->input('name'));
        }

        if($request->has('country')){
            $query->where('country',$request->input('country'));
        }

        if($request->has('publisher')){
            $query->where('publisher',$request->input('publisher'));
        }

        if($request->has('release_date')){
            $query->where('release_date',$request->input('release_date'));
        }

        $books = $query->get(); 

     foreach($books as $book){            
         $data[] = [
             'id' => $book->id,
             'name' => $book->name,
             'isbn' => $book->isbn,
             'authors' => $book->authors->pluck('name'),
             'number_of_pages' => $book->number_of_pages,
             'publisher' => $book->publisher,
             'country' => $book->country,
             'release_date' => $book->release_date
         ];
     }

        return response()->json([
            'status_code'=> 200,
            'status' => 'success',
            'data' => $data
        ]);
    }
}
