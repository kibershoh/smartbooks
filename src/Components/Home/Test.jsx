import React, { useEffect, useRef, useState } from 'react';
import booksData from '../../Constants/booksItems.json';
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { RiSendPlaneFill } from 'react-icons/ri';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import { TbMessage } from 'react-icons/tb';
import save from '../../assets/saveIcon.png'
import saveFill from '../../assets/fillSaveIcon.png'
import { onValue, ref } from '@firebase/database';
import { db } from '../../firebase';
const BookCards = () => {
     const [likes, setLikes] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const link = 'https://firebasestorage.googleapis.com/v0/b/bookapp-faa2c.appspot.com/o/books%2Ffantasy%2FWebley-and-The-World-Machine.pdf?alt=media&token=447359a7-3242-405f-95f2-3c70cacf735d'
  const Likes = () => {
    setLikes(!likes);
    setLikeCount(likeCount + 0.5);
  };
  const [sidebar, setSidebar] = useState(false);
  const [profile, setProfile] = useState(false);

  const [input, setInput] = useState(false);
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  const activeInput = () => {
    setInput(!input);
  };
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
  const [todoData,setTodoData] = useState([])
    useEffect(()=>{
        const starCountRef = ref(db,'BooksData')
        onValue(starCountRef, (snapshot)=>{
            const data = snapshot.val();
            const newPosts = Object.keys(data).map(key=>({
                id:key,
                ...data[key]
            }))
            console.log(newPosts);
            setTodoData(newPosts)
        })
    }, [])
  return (
    <div>
      {Object.keys(todoData).map((genre,index) => (
        <div key={index}>
          <h2 className='font-bold text-3xl my-10 mt-20'>{genre}</h2>
          <div className='grid grid-cols-2 max-md:grid-cols-1 gap-5 max-md:gap-2'>
            {Object.keys(todoData[genre]).map((bookKey) => {
              const book = todoData[genre][bookKey];
              return (
                <div key={bookKey}>
                     <div className="shadow-2xl rounded-lg p-2">
          <div className='flex max-lg:flex-cols'>
            <img src={book.imgUrl} alt="" className='w-64 h-48 max-md:w-32 max-md:h-32 rounded-lg' />
            <div className='p-5 max-md:pl-2 max-md:pr-0 pt-0'>
              <h1 className='text-lg text-start  font-bold max-md:text-xs'>{book.bookName}</h1>
              <p className='text-slate-400 text-start w-full text-sm '>{book.authorName}</p>
              <p className='break-all pt-1 pr-2 mt-3 overflow-y-scroll h-16 max-md:h-14'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio nostrum ratione mollitia neque id nam soluta ex! Autem, inventore nihil.
              </p>
            </div>
            <div className='flex flex-col h-44 justify-between '>
              <div>
                <button className="hover:scale-115" onClick={Likes}>
                  {likes ? (
                    <img src={save} className="hover:scale-110 w-6 h-5 duration-300" />
                  ) : (
                    <img src={saveFill} className="hover:scale-110 w-8 h-5 duration-300" />

                  )}
                </button>
              </div>

              <div className='mt-20'>
                <button className="hover:scale-115" onClick={Likes}>
                  <TbMessage size={20} className="hover:scale-110 duration-300" />

                </button>

                <button className="hover:scale-115 mt-3" onClick={Likes}>
                  {likes ? (
                    <BsSuitHeart size={20} className="hover:scale-110 duration-300" />
                  ) : (
                    <BsSuitHeartFill
                      size={20}
                      className="hover:scale-110 text-red-600 duration-300"
                    />
                  )}
                </button>

              </div>
            </div>
          </div>
          <div className='pt-3 flex justify-between px-2'>
            <button className={input ? 'text-blue-600 hidden' : 'text-blue-600'} onClick={activeInput}>
              <RiSendPlaneFill size={23}/>
            </button>
              <div className={input ? "relative  h-10 w-7/12" : "relative  h-10 w-7/12 hidden"}>                
                <button className='absolute right-2 top-2 text-blue-600' onClick={activeInput}>
                  <RiSendPlaneFill  size={22}/>
                </button>
                <input
                  type="text"
                  placeholder="search"
                  className={clsx(
                    "outline-none w-full  p-1 pl-2 rounded-lg border-2 shadow-lg focus:border-2 focus:border-blue-600",
                   
                  )}
                />
              </div>    
            <button className='bg-blue-600 h-10 text-white rounded-lg w-1/3 text-lg'>
              <Link to={book.fileUrl} target="_blank">
                Open
              </Link>
            </button>
          </div>
        </div>
                 
                </div>
              );
            })}
          </div>
        </div>
      ))}
    </div>
  );
};

export default BookCards;
