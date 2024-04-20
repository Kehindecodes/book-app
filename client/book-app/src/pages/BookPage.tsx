import { BookCard } from "../components/BookCard"
import { getAllBooks,booksUrlEndpoint } from "../api/bookApi";
import useSWR from "swr";
import { Book } from "../types/types";



function BookPage() {
  
const { data: books, error , isLoading } = useSWR(booksUrlEndpoint, getAllBooks, {
  onSuccess:(data: any)=>{
    // display first 10 books
    if(data.data.length > 10){
       data.data = data.data.slice(0, 10);
    }

  }
});
    return (
        <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-8 text-gray-900 text-center ">List of Books</h1>
        {isLoading && <p>Loading...</p>}
        {error && <p>Error: {error.message}</p>}
        {/* if data is empty */}
        {books && books.data.length === 0 && <h1 className=" text-3xl font-bold mb-8 text-gray-900 text-center"> No books found.</h1>}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-8 w-full">
          {books && books.data.map((book : Book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </div>
  
    )
}

export default BookPage