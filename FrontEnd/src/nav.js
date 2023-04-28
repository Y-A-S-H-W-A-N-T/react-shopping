import './nav.css'
import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav class="navbar">
        <ul>
            <li><Link to="/"><img src="./images/fastcart.png" alt=""/></Link></li>
        <div class="reg">    
            <li><Link to="/signup" className="register">SIGN UP</Link></li>
            <li><Link to="/login" className="register">LOGIN</Link></li>
            <li><a href="cart.html"><img src="./images/cart.png" alt=""/></a></li>
        </div>
        </ul>
         </nav>
     );
}
 
export default Navbar;