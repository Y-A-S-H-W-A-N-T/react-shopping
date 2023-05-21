import { useState } from 'react';
import './css/signup.css'
import { useHistory } from "react-router-dom";
const Signup = () => {

    const [username,setUsername] = useState('')
    const [email,setEmail] = useState('')
    const [date,setDate] = useState('')
    const [phone,setPhone] = useState('')
    const [password,setPassword] = useState('')
    const [confirmpassword,setConfirmpassword] = useState('')
    const [message,setMessage] = useState('')
    const go = useHistory()

    const Send = (e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/signup",{
            method: 'POST',
            headers: {
                "content-type":"application/json"
            },
            body: JSON.stringify({
                username: username,
                email: email,
                date: date,
                phone: phone,
                password: password,
                confirmpassword: confirmpassword
            })
        })
        .then(
            res=>res.json()
        )
        .then(
            data=>{
                console.log(data.status,data.msg)
                if(data.status===200)
                {   
                    setMessage(data.msg)
                    setTimeout(()=>{
                        go.push('/')
                    },1000)
                }
                if(data.status === 'mismatch')
                {
                    setMessage(data.msg)
                }
                if(data.status === 'invalid number')
                {
                    setMessage(data.msg)
                }
                if(data.status === 1000)
                {
                    setMessage(data.msg)
                }
            }
        )
        .catch((e)=>{
            setMessage(e.message)
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
                <br />
                <h1>{message}</h1>
            </form>
        </div>
    </div>
     );
}
 
export default Signup;