import '../styles.css';
import Dashboard from './Dashboard';
import Search from './Search';
import Logo from '../assets/cers_logox2.png';
import UserIcon from '../assets/logo_try.jpg';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return(
        <>
            <div class="main">
                <div class="py-4 ps-2 custom-navigation">
                    <div className="brand ps-3">
                        <img id='logo' src={Logo} alt="CERS_Logo" />
                        <span><a href="#" className='nav-brand text-decoration-none fw-bold fs-5 text-dark '>CE<span style={{ color: '#f24236'}}>RS</span></a></span>
                    </div>

                    <div className='side-nav'>
                        <ul>
                            <li className='li-block'><i className='fa fa-windows ico'></i>Dashboard</li>
                            <li><i className='fa fa-ambulance ico'></i> Active Emergencies <i className='fa fa-chevron-right ico-more'></i></li>
                            <li><i className='fa fa-users ico'></i>Responders <i className='fa fa-chevron-right ico-more'></i></li>
                            <li><i className='fa fa-map-marker ico'></i>Flagged Areas  <i className='fa fa-chevron-right ico-more'></i></li>
                            <li><i className='fa fa-address-book ico'></i>Manage Accounts  <i className='fa fa-chevron-right ico-more'></i></li>
                            <li><i className='fa fa-envelope ico'></i>Messages</li>
                            <li><i className='fa fa-bell ico'></i>Notifications</li>
                        </ul>

                    </div>
                </div>

                <div className='home-dash'>
                    
                    <div className='mini-nav pt-3 mb-2 pb-2 justify-content-end pe-5'>
                        <div className="search-bar d-flex">
                            <i className="fa fa-search mt-1 me-1 text-secondary"></i>
                            <Search />
                        </div>

                        <i className='fa fa-moon-o'></i>
                        <i className="fa fa-ambulance"></i>
                        <i className='fa fa-envelope'></i>
                        <i className='fa fa-bell'></i>

                        <div className="user ms-3">
                            <div id="logo">
                                <img src={UserIcon} alt="User" />
                            </div>
                            <div className="user-identity ms-2">
                                <span>Leon Mosg <i className='fa fa-chevron-circle-down ms-3'></i></span><br/>
                                <span className='text-secondary fs-6'>mosg@afric.com</span>
                                
                            </div>

                        </div>
                    </div>
                    


                    <div className="dash-content ms-3 me-4">
                        <Outlet />
                    </div>
                </div>
            </div>
        </>
    )
}

export default Layout