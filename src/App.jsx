import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './Components/Home'
import CreatePost from './Components/CreatePost'
const App = () => {

  return (
    <Router>
     
      <Home/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/createpost' element={<CreatePost/>}/>

      </Routes>
    </Router>
  )
}

export default App
