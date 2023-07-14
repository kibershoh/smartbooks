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
const Login = () => {
  return (
    <div>
      <h1>Login</h1>
    </div>
  )
}

export default Login

