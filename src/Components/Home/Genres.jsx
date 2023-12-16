import { TabContext, TabList, TabPanel } from '@mui/lab';
import { Box, Tab } from '@mui/material';
import clsx from 'clsx';
import React, { useContext, useEffect, useState } from 'react'
import { RiSendPlaneFill } from 'react-icons/ri';
import { Link } from 'react-router-dom';
import { db } from '../../firebase';
import { onValue, ref } from 'firebase/database';
import save from '../../assets/saveIcon.png'
import saveFill from '../../assets/fillSaveIcon.png'
import { TbMessage } from 'react-icons/tb';
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';
import {v4 as uuidv4} from 'uuid'
import { LanguageContext } from '../Context/LanguageContext';
const Genres = () => {
      const [input, setInput] = useState(false);
        const [todoData,setTodoData] = useState([])
    useEffect(()=>{
        const starCountRef = ref(db,'BooksData')
        onValue(starCountRef, (snapshot)=>{
            const data = snapshot.val();
            const newPosts = data
            console.log(newPosts);
            setTodoData(newPosts)
        })
    }, [])
   
const [value, setValue] = React.useState();

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  
  const [likes, setLikes] = useState(true);
  const [likeCount, setLikeCount] = useState(0);
  const Likes = () => {
    setLikes(!likes);
    setLikeCount(likeCount + 0.5);
  };


  
  
  const activeInput = () => {
    setInput(!input);
  };
      const { tr, language, setLanguage } = useContext(LanguageContext);

  return (
    <div className='mt-20'>
      {
        <Box sx={{ width: '100%',}}>
      <TabContext value={value} >
        <Box sx={{ borderBottom: 1, textAlign:'center', width:'100%', borderColor: 'divider' }}>
          <TabList  orientation="gorizontal"
        variant="scrollable" onChange={handleChange} aria-label="lab API tabs example">
           {
            Object.keys(todoData).map((genre,index)=>(
                <Tab key={genre} className='hover:text-blue-800 hover:translate-x-1	duration-300' sx={{color:'black', fontWeight:'semibold'}} label={genre} value={index+2}  />
           
            ))
           }
                

          </TabList>
        </Box>
        {/* <TabPanel value="1">Item One</TabPanel>
        <TabPanel value="2">Item Two</TabPanel>
        <TabPanel value="3">Item Three</TabPanel> */}
        
          {
            Object.keys(todoData).map((genre,index)=>(
             
             <div key={index} className='grid grid-cols-2 gap-10 max-md:grid-cols-1'>
                {Object.keys(todoData[genre]).map((bookKey,inx) => {
              const book = todoData[genre][bookKey];
              return (
                <TabPanel className='shadow-2xl rounded-lg p-2' key={inx} value={index+2}>
         <div>
           <div className='flex max-lg:flex-cols'>
            <img src={book.imgUrl} alt="" className='w-64 h-48 max-md:w-32 max-md:h-32 rounded-lg' />
            <div className='p-5 max-md:pl-2 max-md:pr-0 pt-0'>
              <h1 className='text-lg text-start  font-bold max-md:text-xs'>{book.bookName}</h1>
              <p className='text-slate-400 text-start w-full text-sm '>{book.authorName}</p>
              <p className='break-all pt-1 pr-2 mt-3 overflow-y-scroll h-16 max-md:h-14'>
                {book.description}
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
                {tr('Open')}
              </Link>
            </button>
            
            </div> 
         </div>
                 
                </TabPanel>
              );
            })}
             </div>
           
            ))
           }
        
      </TabContext>
    </Box>
}
    </div>
  )
}

export default Genres
 