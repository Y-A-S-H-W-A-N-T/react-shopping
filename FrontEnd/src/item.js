import { useParams,Link } from "react-router-dom"
import { useEffect, useState} from 'react';
import './css/item.css'
import './css/nav.css'
const Item = () => {
    const { id } = useParams()
    const [item,setItem] = useState([{}])
    useEffect(()=>{
        fetch(
          `/data/${id}`,
          {mode: 'no-cors'}
        ).then(
          data=>data.json()
        ).then(
          data=>setItem(data)
        )
    },[])
    const Send = (e)=>{
      e.preventDefault()
      console.log("HELLO")
    }
    return ( 
    <div>
        {item.map((data,id)=>(
          <div className='item' key={id}>  
            <div className="pic">
              <img src={data.type} alt="" />
              <div className="details">
                <h1>Cloth Type : {data.cloth}</h1>
                <h1>Cost : ₹{data.cost}</h1>
                <Link to="/underdev"><input type="submit" value="ADD TO CART" onSubmit={Send}/></Link>
            </div>
            </div>
          </div>
        ))}
    </div> );
}

export default Item;