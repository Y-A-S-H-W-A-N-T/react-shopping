import { useParams } from "react-router-dom"
const Items = () => {
    const { id } = useParams()
    console.log(id)
    return ( <div> 
        <p>hello</p>
        </div> );
}
 
export default Items;