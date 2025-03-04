import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import Slider from './Slider';
import TopNav from './TopNav';

export default function Layout(){
    return(
        <div className="main">
            <div className="side-nav">
                <Navbar/>
            </div>
            <div className="content-body">
                <TopNav />
                <div className='dynamic-content'>
                    <Slider/>
                    <Content/>
                    <Footer/>
                </div>
                
            </div>
            
        </div>
    )
}