import './App.css'
import Header from './Components/Header/Header'
import Blogs from './Components/Blogs/Blogs'
import BookMarks from './Components/Bookmarks/BookMarks'

function App() {

  return (
    <>
      <Header></Header>
      <div className='md:flex '>
      <Blogs></Blogs>
      <BookMarks></BookMarks>

      </div>
      
      
      
    </>
  )
}

export default App
