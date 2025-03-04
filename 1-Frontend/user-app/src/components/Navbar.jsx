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
                        <Link to="/" className="nav-link">Home</Link>
                    </li>
                    <li>
                        <Link to="user/notification" className="nav-link">Notifications <span className="main-badges">3</span></Link>
                    </li>
                    <li>
                        <Link to="user/messages" className='nav-link'>Messages <span className="main-badges">5</span></Link>
                    </li>
                    <li>
                        <Link to="user/account" className="nav-link">Account</Link>
                    </li>
                    <li>
                        <Link to="user/contact" className="nav-link">Contact Us</Link>
                    </li>
                </ul>
            </div>
           
        </nav> 
    </div>
 
    )   
}