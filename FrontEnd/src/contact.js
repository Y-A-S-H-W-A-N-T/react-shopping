import { useEffect, useState } from 'react';
const Contact = () => {
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
        <div>
            {items.map((data,id)=>(
                <div className='Information' key={id}>
                <h1>{data.type}</h1>
                </div>
            ))}
        </div> 
    );
}
 
export default Contact;