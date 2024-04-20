import axios from 'axios';
import { Book } from '../types/types';



const bookApi = axios.create({
    baseURL: 'http://localhost:8000',
});
export const booksUrlEndpoint = '/api/v1/books';
// export const externalUrlEndPoint = '/api/external-books'

export const getAllBooks = async (): Promise<any> => {
    try{
        const response = await bookApi.get(booksUrlEndpoint);
        return response.data;
    }catch(error){
        console.error("Error fetching books: ", error);
        throw error;
    }

}

// export const getBook = async (id: string): Promise<any> => {
//     try{
//         const response = await bookApi.get(`${booksUrlEndpoint}/${id}`);
//         return response.data;

//     }catch(error){
//         console.error("Error fetching book: ", error);
//         throw error;
//     }
// }

export const deleteBook = async (id: string): Promise<void> => {
    try{
        await bookApi.delete(`${booksUrlEndpoint}/${id}`);
    }catch(error){
        console.error("Error deleting book: ", error);
        throw error;
    }
}

export const editBook = async (id: string, book: Book): Promise<void> => {
    try{
        await bookApi.patch(`${booksUrlEndpoint}/${id}`,book);
    }catch(error){
        console.error("Error editing book: ", error);
        throw error;
    }
} 