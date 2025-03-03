import '../styles.css';
import Logo from '../assets/cers_logox2.png';
import { Link } from "react-router-dom";

export default function Navbar(){
    return(

    <div className="container">
        <nav className="navbar navbar-expand-md ">
             <div className="brand ps-3">
                 <img id='logo' src={Logo} alt="CERS_Logo" />
                 <span><a href="#" className='nav-brand text-decoration-none fw-bold fs-5 text-dark '>CERS</a></span>
            </div>
            

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span><i className='fa fa-bars'></i></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/home" className="nav-link">Home</Link>
                </li>
                <li className="nav-item">
                    <Link to="/notification" className="nav-link">Notifications</Link>
                </li>
                <li className="nav-item">
                    <Link to="/account" className="nav-link">Account</Link>
                </li>
                <li className="nav-item">
                    <Link to="/contact" className="nav-link">Contact Us</Link>
                </li>
                    <button className="btn-custom">
                        <a href="#" className="logout">Logout</a>
                    </button>
                </ul>
            </div>
           
        </nav> 
    </div>
 
    )   
}