import { useContext, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
 
import {GrInstagram} from 'react-icons/gr'
import { FaMapMarkerAlt } from 'react-icons/fa';
import { ImFacebook2 } from 'react-icons/im';
import { BsTelegram } from 'react-icons/bs';
import { BiMessageDetail } from 'react-icons/bi';
import { IoCall } from 'react-icons/io5';
import navLinks from '../../Constants/navbar';
import { LanguageContext } from '../Context/LanguageContext';
const Footer = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
      const { tr, language, setLanguage } = useContext(LanguageContext);

  return (
    <div className='mt-20 bg-white px-5'>

     <div className='grid grid-cols-3 max-md:grid-cols-2 items-start'>
       <div>
        {/* <img src={logo} width={180} alt="" /> */}
      </div>
      <ul className="">
        {tr('navLinks').map((nav) => (
          <li key={nav.id} className="text-base py-3 mx-5 links">
            <NavLink
              to={nav.path}
              className={
                active === nav.title
                  ? "flex text-blue-800 hover:text-blue-600 hover:scale-105 hover:duration-300"
                  : "flex items-center hover:text-blue-600 hover:scale-105 hover:duration-300"
              }
              onClick={() => {
                setToggle(!toggle);
                setActive(nav.title);
                document.title = nav.title
              }}
            >
              {nav.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div>
        <Link className='flex my-4'>
          <IoCall size={25} className='hover:scale-110 hover:text-green-600 text-blue-900 hover:duration-300' />

          <p className='pl-3 font-semibold'> +998940095101
          </p>
        </Link>
        <Link className='flex my-4'>
          <BiMessageDetail size={25} className='hover:scale-110 hover:text-blue-400 text-blue-900 hover:duration-300'/>

          <p className='pl-3 font-semibold'> saminovo150947@gmail.com
          </p>
        </Link>
        <Link className='flex my-4'>
        
        </Link>
        <div className='flex my-8'>
          <Link src={'/'} className='mr-8 '>
            <GrInstagram  size={25} className='hover:scale-110 hover:text-red-700 text-blue-900 hover:duration-300'/>
          </Link>
          <Link to={''} className='mr-8 '>
            <BsTelegram size={25} className='hover:scale-110 hover:text-blue-400 text-blue-900 hover:duration-300'/>
          </Link>
          <Link to={'/'} className='mr-8 '>
            <ImFacebook2 size={25} className='hover:scale-110 hover:text-blue-600 text-blue-900 hover:duration-300'/>
          </Link>
        </div>
      </div>
     </div>
     <hr className='mt-3 text-black shadow-lg h-px bg-black' />
   <div className='text-center my-3'>
     <Link to={'/'} className='hover:text-blue-800 hover:border-b hover:border-blue-800'>@Copyright 2023 | It is free shopping</Link>

   </div>
    </div>
  )
}

export default Footer
