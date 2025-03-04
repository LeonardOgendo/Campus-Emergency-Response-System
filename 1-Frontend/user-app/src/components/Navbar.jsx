import '../styles.css';
import Logo from '../assets/cers_logox2.png';
import { Link } from "react-router-dom";

export default function Navbar(){
    return(

    <div className="container">
        <nav>
             <div className="brand ps-3">
                 <img id='logo' src={Logo} alt="CERS_Logo" style={{ height:"50px" }} />
                 <span ><a href="#" className='nav-brand text-decoration-none fw-bold fs-5 text-dark'>CE<span style={{ color: 'red'}}>RS</span></a></span>
            </div>

            <div className='main-links'>
                <ul>
                    <li>
                        <Link to="/home" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="/notification" className="nav-link">Notifications</Link>
                    </li>
                    <li>
                        <Link to="/account" className="nav-link">Account</Link>
                    </li>
                    <li>
                        <Link to="/contact" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
            </div>
           
        </nav> 
    </div>
 
    )   
}