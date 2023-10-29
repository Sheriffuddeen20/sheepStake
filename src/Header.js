import { Link } from "react-router-dom"

const Header = () =>{
   

    return(
        <div className="div">
            <Link to='/' className="links">Home</Link> 
            <Link to='/login' className="liks">Login</Link>
        
        </div>
    )
}
export default Header