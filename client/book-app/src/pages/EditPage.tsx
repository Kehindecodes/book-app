import { useParams, useNavigate } from 'react-router-dom'; 
import axios  from 'axios';
import { editBook } from '../api/bookApi';
// import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { Book } from '../types/types';

// const fetcher  = async (url : string) =>{
//   const response = await axios.get(url);
//   return response.data;

// }

const EditBook = () => {
  const { bookId } = useParams(); // Get book ID from route parameter
  const [book, setBook] = useState <Book>({
    name: '',
    author: [],
    isbn: '',
    publisher: '',
    country: '',
    release_date: '',
    number_of_pages: 0
  });
  // const [btnText, setBtnText] = useState('Save Changes');

  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(`http://localhost:8000/api/v1/books/${bookId}`);
      setBook(response.data.data);
    };

    fetchData();
  }, [bookId]);

  if (!book) {
    return <div>Loading...</div>;
   }

  const {name, author, isbn, publisher, country, release_date, number_of_pages} = book;
  console.log();

  const handleChange = (event : any) => {
    const { name, value } = event.target;
    if (name === 'author') {
    const authorArray = value.split(',');
      setBook({ ...book, [name]: authorArray });
    } else {
      setBook({ ...book, [name]: value });
    }
  };


  const handleSubmit = async (event: any) => {
    event.preventDefault();
    if (bookId === undefined) {
      console.error('Book ID is undefined');
    } else {
      try {
        await editBook(bookId, book);
        
        console.log("Book updated successfully:");
        // redirect to home page
        return navigate('/');


      } catch (error) {
        console.error(error);
      }
    }

  };


  return (
    <div className="container mx-auto px-4 py-8 w-1/2">
      <h1 className="text-3xl font-bold mb-4">Edit Book</h1>
      <form onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">
            Book Name
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={ book && name}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="author" className="block text-gray-700 mb-2">
          </label>
          <input
            type="text"
            id="author"
            name="author"
          value={ book && Array.isArray(author) ? author.join(',') : ''}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="release_date" className="block text-gray-700 mb-2">
            Release Date (YYYY-MM-DD)
          </label>
          <input
            type="date"
            id="release_date"
            name="release_date"
            value={ book && release_date}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="number_of_pages" className="block text-gray-700 mb-2">
            Number of Pages
          </label>
          <input
            type="number"
            id="number_of_pages"
            name="number_of_pages"
            value={ book && number_of_pages}
            onChange={handleChange}
            className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="publisher" className="block text-gray-700 mb-2">
            Publisher
            </label>
            <input
              type="text"
              id="publisher"
              name="publisher"
              value={ book && publisher}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="country" className="block text-gray-700 mb-2">  
            Country
            </label>
            <input
              type="text"
              id="country"
              name="country"
              value={ book && country}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
            </div>
            <div className="mb-4">
            <label htmlFor="isbn" className="block text-gray-700 mb-2">
            ISBN
            </label>
            <input
              type="text"
              id="isbn"
              name="isbn"
              value={ book && isbn}
              onChange={handleChange}
              className="w-full rounded-md border border-gray-300 px-4 py-2 focus:border-blue-500 focus:outline-none"
            />
            </div>
        <div className="mb-4 flex justify-end">
        <button type="submit" className="bg-gray-700 text-white hover:bg-gray-400 text-red-400 font-bold py-2 px-4 rounded mr-0">
          Save Changes
        </button>
        </div>
      </form>
    </div>
  );
};

export default EditBook;
