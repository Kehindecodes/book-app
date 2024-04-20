<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Http;

class ExternalBookController extends Controller
{
    public function __invoke(Request $request)
    {
        $data = [];
        $baseUrl = 'https://www.anapioficeandfire.com/api/books';

        // Check if the name query parameter is present in the request
        if($request->has('name')){
            // Append the name query parameter to the URL
            $baseUrl .= '?name='. urlencode($request->query('name'));
        }

        $response = Http::get($baseUrl);
        
        $externalBooks = $response->json();

         foreach($externalBooks as $book){            
             $data[] = [
                 'name' => $book['name'],
                 'isbn' => $book['isbn'],
                 'author' => $book['authors'],
                 'number_of_pages' => $book['numberOfPages'],
                 'publisher' => $book['publisher'],
                 'country' => $book['country'],
                 'release_date' => $book['released']
             ];
         }

         return response([
              'status_code'=> 200,
              'status' => 'success',
              'data' => $data,
         ]);
    }
}
