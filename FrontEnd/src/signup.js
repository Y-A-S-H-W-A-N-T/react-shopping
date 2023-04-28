import { useState } from 'react';
import './signup.css'
const Signup = () => {

    return ( 
        <div className="signup">
        <h1>SIGNUP</h1>
        <div className="signup_change">
            <form action="">
                <input type="text" className="name cred" placeholder="Username"/>
                <input type="email" className="email cred" placeholder="Email"/>
                <input type="date" className="age cred"/>
                <input type="number" className="ph_no cred" placeholder="Phone Number"/>
                <input type="password" className="pass cred" placeholder="Password"/>
                <input type="password" className="confirmpass cred" placeholder="Confirm Password"/>
                <input type="submit" value="SIGNUP" className="submit"/>
            </form>
        </div>
    </div>
     );
}
 
export default Signup;