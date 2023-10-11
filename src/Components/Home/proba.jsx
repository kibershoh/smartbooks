import React, { useState } from 'react'
import list from '../../Constants/data'
import save from '../../assets/saveIcon.png'
import saveFill from '../../assets/fillSaveIcon.png'
import { BsSuitHeart, BsSuitHeartFill } from 'react-icons/bs';

const Proba = () => {
   const [likes, setLikes] = useState(false);
  const [likeCount, setLikeCount] = useState(0);
 
   const Liked = ()=>{
    list.map((item)=>{
      if(item.like){
        item.like=false
      }
      else{
        item.like=true
      }
    })
   }
  return (
    <div>
      {
        list.map((item,index)=>(
          <div key={index} className='pl-20'>
            <h1>{item.title}</h1>
            <button className="hover:scale-115" >
                 {item.like ? (
                    <BsSuitHeart onClick={Liked} size={20} className="hover:scale-110 duration-300" />
                  ) : (
                    <BsSuitHeartFill onClick={Liked}
                      size={20}
                      className="hover:scale-110 text-red-600 duration-300"
                    />
                  )}
                </button>
          </div>
        ))
      }
      mmmmmmmmmm
    </div>
  )
}

export default Proba
