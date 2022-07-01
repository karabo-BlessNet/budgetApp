import React, {useState} from "react";
import {useHistory} from "react-router-dom"
import {Link} from "react-router-dom"


function SignUp(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    let history = useHistory()

    const Register = (()=> {

            history.push("/");

    })

    return(
        <div className="container">
            <h1>Register account</h1>
            <input type="email" placeholder="Enter your Email" onChange={(e)=> setEmail(e.target.value)} />
            <input type="password" placeholder="Enter your Password" onChange={(e)=> setPassword(e.target.value)} />
            <button className="signBtn" onClick={Register} id="loginBtn">Sign-In</button>

        </div>
    )
}

export default SignUp;