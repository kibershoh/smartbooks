import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './Components/Home'
// import CreatePost from './Components/CreatePost'
import Navbar from './Components/Navbar'
import About from './Components/About'
import Contact from './Components/Contact'
import Genres from './Components/Home/Genres'
import Moment from './Components/Home/moment'
import Proba from './Components/Home/proba'
import Footer from './Components/Footer'
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

      </Routes>
     <Footer/>
    </Router>
  )
}

export default App
