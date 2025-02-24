import '../styles.css';

export default function Navbar(){
    return(

    <div className="container">

        <nav className="navbar navbar-expand-md ">
            <img src="" alt="image" />

            <button className="navbar-toggler" data-bs-toggle="collapse" data-bs-target="#navbarNav">
                <span><i className='fa fa-bars'></i></span>
            </button>

            <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item">
                        <a href="#" className="nav-link">Home</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Notifications</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Account</a>
                    </li>
                    <li className="nav-item">
                        <a href="#" className="nav-link">Contact Us</a>
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