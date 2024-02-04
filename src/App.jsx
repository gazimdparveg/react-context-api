import './App.css'
import Home from './Home' 
import UseContext from './Context/UseContext';
import Blogs from './blogs';
import NewBlog1 from './NewBlog1';
 

 
 

function App() {
   

 
  return (
    <>
 
<Blogs>
  <NewBlog1/>
</Blogs>

   <UseContext>
  
      <Home/> 
  
    </UseContext>
    </>
  )
}

export default App
