import { AiOutlineDashboard, AiOutlineFile } from "react-icons/ai";
import { RiMenu2Fill } from "react-icons/ri";

export const translations = {
  en: {
    navLinks:[
      {
    id: '1',  
    title: "Home",
    path: '/',
    icon: AiOutlineDashboard,
  },
  {
     id: '2',  
    title: " My Projects",
    path: '/about',
    icon: RiMenu2Fill,
  },
  {
     id: '3',  
    title: "Genres",
    path: '/genres',
    icon: RiMenu2Fill,
  },
  {
     id: '4',  
    title: "Contact",
    path: '/contact',
    icon: AiOutlineFile,
  },
    ],
    Open: "Open",
    All_Books: "All Books",
    me:"and I'm",
    Frontend:"Frontend Developer",
    Backend:"Backend Developer",
    Freelancer:"Freelancer",
    aboutMeBtn: "About Me",
    aboutMe:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eos ex architecto accusantium libero commodi nemo dolorem id, tenetur illum quibusdam hic nobis! Quo, perferendis. Quaerat, maiores facilis blanditiis molestias vero dicta, iure ex similique quae, aliquid est. Nisi, dolorem harum."
  },
  uz: {
     navLinks:[
      {
    id: '1',  
    title: "Kitoblar",
    path: '/',
  },
  {
    id: '2',
    title: "Loyihalarim",
    path: '/about',
  },
  {
    id: '3',
    title: "Janrlar",
    path: '/genres',
  },
  {
    id: '4',
    title: "Aloqa",
    path: '/contact',
  },
    ],
    Open: "O'qish",
    All_Books: "Barcha Kitoblar",
    // me:" ",
    // Frontend:"Frontend Dasturchiman",
    // Backend:"Backend Dasturchiman",
    // Freelancer:"Freelancerman",
    // aboutMeBtn:"Men haqimda",
    // aboutMe:"Salom."
  }
};
