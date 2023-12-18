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
    title: "About Me",
    path: 'https://oybekjonportfolio2.netlify.app/',
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
    aboutBook:"Thomas decides to use an ultralight aircraft he had been constructing to teach the birds to fly and show them their migratory routes, but quickly realizes the birds will only follow Amy. Aided by his friend Barry, Thomas teaches Amy how to fly an ultralight aircraft of her own ",
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
    title: "Men haqimda",
    path: 'https://oybekjonportfolio2.netlify.app/',
  },
  {
    id: '4',
    title: "Aloqa",
    path: '/contact',
  },
    ],
    Open: "O'qish",
    All_Books: "Barcha Kitoblar",
    aboutBook:"Tomas qushlarga uchishni o'rgatish va ularga migratsiya yo'llarini ko'rsatish uchun o'zi yaratgan o'ta yengil samolyotdan foydalanishga qaror qiladi, lekin tezda qushlar faqat Emi ortidan borishini tushunadi. Do'sti Barrining yordami bilan Tomas Emiga o'zining ultra yengil samolyotini qanday boshqarishni o'rgatadi"
    // me:" ",
    // Frontend:"Frontend Dasturchiman",
    // Backend:"Backend Dasturchiman",
    // Freelancer:"Freelancerman",
    // aboutMeBtn:"Men haqimda",
    // aboutMe:"Salom."
  }
};
