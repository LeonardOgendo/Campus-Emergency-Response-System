import Navbar from './Navbar';
import Footer from './Footer';
import Content from './Content';
import Slider from './Slider';

export default function Layout(){
    return(
        <div className="main">
            <Navbar/>
            <Slider/>
            <Content/>
            <Footer/>
        </div>
    )
}