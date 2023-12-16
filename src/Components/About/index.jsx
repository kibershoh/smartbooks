import search from '../.././assets/search.jpg'
import giotto from '../.././assets/giotto.jpg'
import foods from '../.././assets/foods.jpg'
import { Link } from "react-router-dom"
const About = () => {
  return (
    <div className="p-20 max-lg:p-10 max-md:p-5 grid grid-cols-2 max-lg:grid-cols-1 gap-20">
     <div className="border border-blue-600 rounded p-10">
        
      <img className="w-3/4 h-3/4 " src={search} alt="" />
      <button className="bg-blue-600 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'/searchproject'}>Ko&apos;rish</Link></button>
     </div>
     <div className="border border-blue-600 rounded p-10">
        
      <img className="w-3/4 h-3/4 " src={foods} alt="" />
      <button className="bg-blue-600 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://dainty-horse-44700e.netlify.app/'}>Ko&apos;rish</Link></button>
     </div>
     <div className="border border-blue-600 rounded p-10">
        
      <img className="w-3/4 h-3/4 " src={giotto} alt="" />
      <button className="bg-blue-600 p-2 rounded text-white hover:scale-110 duration-1000 mt-10"><Link target="_blank" to={'https://giotto1.netlify.app/'}>Ko&apos;rish</Link></button>
     </div>
      
    </div>
  )
}

export default About
