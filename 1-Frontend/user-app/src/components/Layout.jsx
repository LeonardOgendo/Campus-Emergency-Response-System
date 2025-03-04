import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Home from './Home';
import TopNav from './TopNav';
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