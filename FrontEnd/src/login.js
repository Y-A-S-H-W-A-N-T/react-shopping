import {useState} from 'react'
import './css/login.css'
const Login = () => {
    const [name,setName] = useState('')
    const [password,setPassword] = useState('')
    const Authen = (e)=>{
        e.preventDefault()
        fetch("http://localhost:5000/login",{
            method:"POST",
            headers:
            {
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                user: name,
                password: password
            })
        })
    }
    return ( 
        <div className="login">
            <div className="login_change">
                <form onSubmit={Authen}>
                    <label>Username :</label>
                    <input type="text" className="login_name cred" placeholder="username" value={name} onChange={(e)=>setName(e.target.value)} required/>
                    <label>Password :</label>
                    <input type="password" className="login_password cred" placeholder="password" value={password} onChange={(e)=>setPassword(e.target.value)} required/>
                    <input type="submit" className="login_submit" value="LOGIN"/>
                </form>
            </div>
        </div>
    );
}
 
export default Login;