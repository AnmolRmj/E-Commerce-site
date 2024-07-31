import { useNavigate } from "react-router-dom"

const PageNotFound=()=>{
    const navigate=useNavigate()
    const handleBack=()=>{
        navigate(-1);
    };
    return(
        <div>
            <button onClick={handleBack} style={{color:'white',backgroundColor:'grey'}}>Back</button>
        </div>
    )
}
export default PageNotFound;