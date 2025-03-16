import Navbar from '../layout/Navbar';
import Footer from '../layout/Footer';
import TopNav from '../layout/TopNav';
import { Outlet } from 'react-router-dom';

export default function Layout(){
    return(
        <div className="wrapper">
            <div className="main">
                <div className="side-nav">
                    <Navbar />
                </div>
                <div className="content-body">
                    <TopNav />
                    <div className='dynamic-content'>
                        <Outlet />
                    </div>
                    <Footer />
                    
                </div>
                
            </div>
        </div>
    )
}