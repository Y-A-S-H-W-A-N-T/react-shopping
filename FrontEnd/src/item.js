import { useParams} from "react-router-dom"
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
    console.log(item)
    return ( 
    <div>
        {item.map((data,id)=>(
          <div className='item' key={id}>  
            <img src={data.type} alt="" />
            <h1>{data.cloth}</h1>
            <p>{data.cost}</p>     
          </div>
        ))}
    </div> );
}
 
export default Item;