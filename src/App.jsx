import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import CreatePost from './Components/CreatePost'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Genres from './Components/Home/Genres'
import Moment from './Components/Home/moment'
import Footer from './Components/Footer'
import SearchFilter from './Components/SearcgFilter/searchFilter'
const App = () => {

  return (
    <Router>
     <Navbar/>
     <Moment/>
     {/* <Proba/> */}
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/genres' element={<Genres/>}/>
        <Route path='/searchproject' element={<SearchFilter/>}/>

      </Routes>
     <Footer/>
    </Router>
  )
}

export default App
