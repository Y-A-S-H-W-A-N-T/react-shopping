const Home = () => {
    return ( 
        <div className="Home">
            <div className="search_bar">
        <input type="search" placeholder="search...."/>
        <a><img src="./images/search.png"/></a>
     </div>
     <div className="add">
        <img src="./images/grocery.jpg" alt=""/>
        <h1>Try out the new quick cart<a>Quick Cart</a></h1>
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
                <li><a>Contact Us</a></li>
                <li><a>Help</a></li>
                <li><a>More</a></li>
                <li><a>About</a></li>
            </ul>
        </div>
     </footer>
        </div>
     );
}
 
export default Home;