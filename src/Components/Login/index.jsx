// import React from 'react'
// import { auth, provider } from "../../firebase-config"
// import { signInWithPopup } from 'firebase/auth';
// import { useNavigate } from 'react-router-dom'


// const Login = ({setIsAuth}) => {
//     let navigate = useNavigate()
//     const signInWithGoogle = () => {
//         signInWithPopup(auth,provider).then((result)=>{
//          localStorage.setItem("isAuth",true)
//             setIsAuth(true)
//             navigate('/')
//         })

//     }
//     return (
//         <div>
//             <p>Sigin with google to Contact</p>
//             <button onClick={signInWithGoogle}>Sign in with Google</button>
//         </div>
//     )
// }

// export default Login
import { onValue, ref } from 'firebase/database'
import React, { useEffect, useState } from 'react'
import { db } from '../../firebase'

const Test2 = () => {
    const [todoData,setTodoData] = useState([])
    useEffect(()=>{
        const starCountRef = ref(db,'BooksData/Fantasy/Fly-Away-Home')
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
      {
        todoData.map((item,index)=>{
            return(
                <div key={index}>
                <h1>{item.bookName}</h1>
                <img src={item.imgUrl} alt="" />
                </div>
            )
        })
      }
    </div>
  )
}

export default Test2


