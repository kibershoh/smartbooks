import { useEffect, useRef, useState } from 'react';
import BookCards from './Test';


const Home = () => {
  const [likes, setLikes] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const Likes = () => {
    setLikes(!likes);
    setLikeCount(likeCount + 0.5);
  };
  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false);

  const [input, setInput] = useState(false);
   
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target)
      ) {
        setSidebar(false);
        setInput(false);
        setProfile(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  });
  return (
     
    <div className='pt-20 px-4'>
      <BookCards/>
    </div>
  )
}

export default Home
