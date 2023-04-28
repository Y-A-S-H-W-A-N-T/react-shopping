import { useState } from 'react';
import './signup.css'
import { useHistory } from "react-router-dom";
import axios from 'axios'
const Signup = () => {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [date,setDate] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword] = useState('')
    const go = useHistory()

    const Send = async(e)=>{
        e.preventDefault()
        const result = await axios.post("/signup",{
            username,
            email,
            phone,
            password,
            confirmpassword,
            date
        })
    }

    return (
        <div className="signup">
        <h1>SIGNUP</h1>
        <div className="signup_change">
            <form onSubmit={Send}>
                <input type="text" className="name cred" placeholder="Username" required value={username} onChange={(e)=>setUsername(e.target.value)}/>
                <input type="email" className="email cred" placeholder="Email" required value={email} onChange={(e)=>setEmail(e.target.value)}/>
                <input type="date" className="age cred" required value={date} onChange={(e)=>setDate(e.target.value)}/>
                <input type="text" className="ph_no cred" placeholder="Phone Number" required value={phone} onChange={(e)=>setPhone(e.target.value)}/>
                <input type="password" className="pass cred" placeholder="Password" minLength="4" maxLength="9" required value={password} onChange={(e)=>setPassword(e.target.value)}/>
                <input type="password" className="confirmpass cred" placeholder="Confirm Password" minLength="4" maxLength="9" required value={confirmpassword} onChange={(e)=>setConfirmpassword(e.target.value)}/>
                <input type="submit" value="SIGNUP" className="submit"/>
            </form>
        </div>
    </div>
     );
}
 
export default Signup;