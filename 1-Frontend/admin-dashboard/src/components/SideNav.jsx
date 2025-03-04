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
                    <li className='li-block main-links'><i className='fa fa-windows ico'></i><Link className='text-decoration-none text-dark' to="/">Dashboard</Link></li>
                    <li className='main-links' onClick={() => toggleDropdown("emergencies")}>
                        <i className='fa fa-ambulance ico'></i>Emergencies <i className='fa fa-chevron-right ico-more'></i>

                        {openDropdown === "emergencies" && (
                            <ul className='dropdowns mt-2'>
                                <li><Link to="/emergencies/active" className='text-decoration-none'>Active Emergencies</Link></li>
                                <li><Link to="/emergencies/resolved" className='text-decoration-none'>Resolved Emergencies</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className='main-links' onClick={() => toggleDropdown("responders")}>
                        <i className='fa fa-users ico'></i>Responders <i className='fa fa-chevron-right ico-more'></i>

                        {openDropdown === "responders" && (
                            <ul className='dropdowns mt-2'>
                                <li><Link to="/responders/view" className='text-decoration-none'>View Responders</Link></li>
                                <li><Link to="/responders/assign" className='text-decoration-none'>Assign Responders</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className='main-links' onClick={() => toggleDropdown("flagged-areas")}>
                        <i className='fa fa-map-marker ico'></i>Flagged Areas<i className='fa fa-chevron-right ico-more'></i>
                        
                        {openDropdown === "flagged-areas" && (
                            <ul className='dropdowns mt-2'>
                                <li><Link to="/admin/flagged-areas" className='text-decoration-none'>View Flagged Areas</Link></li>
                                <li><Link to="/admin/flag-area" className='text-decoration-none'>Flag Areas</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className='main-links' onClick={() => toggleDropdown("manage-accounts")}>
                        <i className='fa fa-address-book ico'></i>Manage Accounts  <i className='fa fa-chevron-right ico-more'></i>
                    
                        {openDropdown === "manage-accounts" && (
                            <ul className='dropdowns mt-2'>
                                <li><Link to="users/approve" className='text-decoration-none'>Account Approvals</Link></li>
                                <li><Link to="users/remove" className='text-decoration-none'>Remove Accounts</Link></li>
                            </ul>
                        )}
                    </li>
                    <li className='main-links' >
                        <i className='fa fa-envelope ico'></i><Link className='text-decoration-none text-dark' to="/admin/messages">Messages</Link>
                        <span className="notification-count">4</span>
                    </li>
                    <li className='main-links'>
                        <i className='fa fa-bell ico'></i><Link className='text-decoration-none text-dark' to="admin/notifications">Notifications</Link>
                        <span className="notification-count">2</span>
                    </li>
                </ul>

            </div>
        </div>
    )
}

export default SideNav