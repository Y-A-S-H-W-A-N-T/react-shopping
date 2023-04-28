import { Link } from 'react-router-dom';
const Navbar = () => {
    return ( 
        <nav className="navbar">
        <ul>
            <li><Link to="/"><img src="./images/fastcart.png" alt="icon" className="icon"/></Link></li>
        <div className="reg">    
            <li><Link to="/signup" className="register">SIGN UP</Link></li>
            <li><Link to="/login" className="register">LOGIN</Link></li>
            <li><a><img src="./images/cart.png" alt=""/></a></li>
        </div>
        </ul>
         </nav>
     );
}
 
export default Navbar;