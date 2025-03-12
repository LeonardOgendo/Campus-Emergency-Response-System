import '../styles.css';
import Dashboard from './Dashboard';
import { Outlet } from 'react-router-dom';
import SideNav from './SideNav';
import TopNav from './TopNav';


const Layout = () => {
    return(
        <div className="main">
            <SideNav />

            <div className='home-dash'>
                <TopNav />

                <div className="dash-content ms-3 me-4">
                    <Outlet />
                </div>
            </div>
        </div>
    
    )
}

export default Layout