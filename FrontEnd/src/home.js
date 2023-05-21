import { Link } from 'react-router-dom';
const Home = () => {
    return ( 
        <div className="Home">
            <div className="search_bar">
        <input type="search" placeholder="search...."/>
        <Link to="/underdev"><img src="./images/search.png" alt='search'/></Link>
     </div>
     <div className="add">
        <img src="./images/grocery.jpg" alt=""/>
        <h1>Try out the new quick cart<Link to='/underdev'>Quick Cart</Link></h1>
     </div>
     <div className="main-scroll-div">
        <div></div>
        <div className="cover">
            <div className="scroll-images">
                <div className="child"><img className="child-images" src="./images/clothes1.jpg" alt=""/></div>
                <div className="child"><img className="child-images" src="./images/clothes2.jpg" alt=""/></div>
                <div className="child"><img className="child-images" src="./images/clothes3.jpg" alt=""/></div>
                <div className="child"><img className="child-images" src="./images/clothes4.jpg" alt=""/></div>
                <div className="child"><img className="child-images" src="./images/clothes5.jpg" alt=""/></div>
            </div>
        </div>
        <div></div>
     </div>
     <footer>
        <div>
            <ul>
                <li><Link to="/underdev">Contact Us</Link></li>
                <li><Link to="/underdev">Help</Link></li>
                <li><Link to="/underdev">More</Link></li>
                <li><Link to="/underdev">About</Link></li>
            </ul>
        </div>
     </footer>
        </div>
     );
}
 
export default Home;