import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"
import {signInWithEmailAndPassword} from 'firebase/auth'
import {auth} from './config/firebase'
 
function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory()

    const login = (()=> {
        
        signInWithEmailAndPassword(auth, email, password).then(()=>{
            history.push("/home");

        }).catch((err)=>{
            console.log(err)
        })

        

    })




    return(
        <div className="container">
            <h1>Login</h1>
            <input type="email" placeholder="Enter your Email" onChange={(e) => setEmail(e.target.value)} /><br></br>
            <input type="password" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)} />
            <button id="loginBtn" onClick={login}>Login</button>
            <span>Don't have account yet?</span>
             <span>
                <Link to="sign-up">Create account here</Link>
             
            </span>

        </div>
    )
}

export default Login;