import { useState } from 'react';
import { Link } from 'react-router-dom';  
import Logo from '../assets/cers_logox2.png';

const SideNav = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (menu) => {
        setOpenDropdown(openDropdown === menu ? null : menu)
    }

    return (
        <div class="py-4 ps-2 custom-navigation">
            <div className="brand ps-3">
                <img id='logo' src={Logo} alt="CERS_Logo" />
                <span><a href="#" className='nav-brand text-decoration-none fw-bold fs-5 text-dark '>CE<span style={{ color: '#f24236'}}>RS</span></a></span>
            </div>

            <div className='side-nav'>
                <ul>
                    <li className='li-block'><i className='fa fa-windows ico'></i><Link to="/">Dashboard</Link></li>
                    <li onClick={() => toggleDropdown("responders")}>
                        <i className='fa fa-ambulance ico'></i>Emergencies <i className='fa fa-chevron-right ico-more'></i>

                        {openDropdown === "responders" && (
                            <ul>
                                <li><Link to="/emergencies/active">Active Emergencies</Link></li>
                                <li><Link to="/emergencies/resolved">Resolved Emergencies</Link></li>
                            </ul>
                        )}
                    </li>
                    <li><i className='fa fa-users ico'></i>Responders <i className='fa fa-chevron-right ico-more'></i></li>
                    <li><i className='fa fa-map-marker ico'></i>Flagged Areas  <i className='fa fa-chevron-right ico-more'></i></li>
                    <li><i className='fa fa-address-book ico'></i>Manage Accounts  <i className='fa fa-chevron-right ico-more'></i></li>
                    <li><i className='fa fa-envelope ico'></i>Messages</li>
                    <li><i className='fa fa-bell ico'></i>Notifications</li>
                </ul>

            </div>
        </div>
    )
}

export default SideNav