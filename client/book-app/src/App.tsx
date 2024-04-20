import './App.css'
import { Routes, Route } from 'react-router-dom'
import BookPage from './pages/BookPage'
import EditBook from './pages/EditPage'

function App() {

  return (
    <Routes>
    <Route path="/" element={<BookPage />} />
    <Route path="/edit/:bookId" element={<EditBook />} />
    </Routes>
  )
}

export default App
