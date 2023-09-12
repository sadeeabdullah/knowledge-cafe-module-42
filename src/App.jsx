
import './App.css'
import Bookmarks from './Component/Bookmarks/Bookmarks'
import Blogs from './Component/Header/Blogs/Blogs'
import Header from './Component/Header/Header'

function App() {

  return (
    <>
      <Header></Header>
  
     <div  className="md:flex">
     <Blogs></Blogs>
     <Bookmarks></Bookmarks>
     </div>
    </>
  )
}

export default App
