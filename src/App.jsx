import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import CreatePost from './Components/CreatePost'
import Navbar from './Components/Navbar'
const App = () => {

  return (
    <Router>
     <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<Home/>}/>
        <Route path='/contact' element={<Home/>}/>

      </Routes>
    </Router>
  )
}

export default App
