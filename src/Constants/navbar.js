
import {RiMenu2Fill } from "react-icons/ri";
import {AiOutlineDashboard, AiOutlineFile } from "react-icons/ai";
export const navLinks= [
  {
    id: 1,  
    title: "Home",
    path: '/',
    icon: AiOutlineDashboard,
  },
  {
    id: 2,
    title: "About",
    path: '/about',
    icon: RiMenu2Fill,
  },
  {
    id: 2,
    title: "Genres",
    path: '/genres',
    icon: RiMenu2Fill,
  },
  {
    id: 3,
    title: "Contact",
    path: '/contact',
    icon: AiOutlineFile,
  },
   

];
export default navLinks;
