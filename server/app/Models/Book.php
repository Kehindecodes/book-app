<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Book extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'isbn',
        'authors',
        'country',
        'number_of_pages',
        'publisher',
        'release_date',
    ];

    protected $table = 'books';
    // 
    public function authors()
    {
        return $this->belongsToMany(Author::class, 'book_author');
    }
}
