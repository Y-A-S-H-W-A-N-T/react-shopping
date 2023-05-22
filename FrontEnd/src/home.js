import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
const Home = () => {

    const [items,setItems] = useState([{}])
    console.log(items)

    useEffect(()=>{
        fetch(
          "/data",
          {mode: 'no-cors'}
        ).then(
          data=>data.json()
        ).then(
          data=>setItems(data)
        )
    },[])

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
            {items.map((data,id)=>(
                    <div className='' key={id}>
                    <div className="main-scroll-div">
                    <div></div>
                        <div className="cover">
                            <div className="scroll-images">
                                <img src={data.type} alt="" />
                            </div>
                        </div>
                        <div></div>
                    </div>
                    </div>
                ))}
     <footer>
        <div>
            <ul>
                <li><Link to="/contact">Contact Us</Link></li>
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