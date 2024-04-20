
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Book } from "../types/types";
import { deleteBook } from "../api/bookApi";


export const BookCard = ({book}: {book: Book}) => 
{
   const [deletedBookId, setDeletedBookId] = useState<string | null>(null);
   const handleDeleteBook = async (bookId: string) => {
      try {
        await deleteBook(bookId);
        setDeletedBookId(bookId);
      } catch (error) {
        console.error("Error deleting book: ", error);
        throw error;
      }
    };
    useEffect(() => {
      if (deletedBookId) {
        // reload the page
        window.location.reload();
      }
    }, [deletedBookId]);
return(
<div className="bg-white rounded-lg shadow-md overflow-hidden p-4 hover:shadow-xl flex flex-col h-full">
    <div className=" flex-grow mb-2">
    <h2 className="text-xl font-medium mb-2 text-gray-900">{book.name}</h2>
    <p className="text-gray-700 mb-2">
       Author: {book.authors && book.authors.join(', ')}
    </p>
    <p className="text-gray-700 mb-2">
       ISBN : {book.isbn}
    </p>
    <p className="text-gray-700 mb-2">
       Publisher :  {book.publisher}
    </p>
    <p className="text-gray-700 mb-2">
      Country : {book.country}
    </p>
    <p className="text-gray-700 mb-2">
       Number of pages : {book.number_of_pages}
    </p>
    <p className="text-gray-700 mb-2">
       Release Date : {book.release_date}
    </p>
    </div>
      <div className="flex space-x-2 mt-4 justify-end mb-2">
        <Link to={`/edit/${book.id}`} className="bg-transparent hover:bg-gray-400 text-gray-800 font-bold py-2 px-4 rounded">Edit</Link>
        <button onClick={() => book.id && handleDeleteBook(book.id)} className="bg-transparent hover:bg-gray-400 text-red-400 font-bold py-2 px-4 rounded">Delete</button>
      </div>
   
      </div> 
)
}
