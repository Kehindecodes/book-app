<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Author extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
    ];

    protected $table = 'authors';

    // Define the many-to-many relationship between Author and Book models
    public function books()
    {
        return $this->belongsToMany(Book::class, 'book_author');
    }
}
