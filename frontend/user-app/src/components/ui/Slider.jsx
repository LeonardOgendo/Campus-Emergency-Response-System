import SliderOne from '../../assets/1.png';
import SliderTwo from '../../assets/4.png';
import SliderThree from '../../assets/3.png';

export default function Slider(){
    return(
        <div id="hero-carousel" className="carousel slide" data-bs-ride="carousel" >

        <div className="carousel-indicators">
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div> 

            <div className="carousel-inner">

                <div className="carousel-item active c-item">
                    <img src={SliderOne} className="d-block w-100  c-image" alt="..."/>
                    <div className="carousel-caption top-0 mt-4 ">
                    </div>   
                </div>

                <div className="carousel-item c-item">
                    <img src={SliderTwo} className="d-block w-100 c-image" alt="..."/>
                    <div className="carousel-caption top-0 mt-4  ">
                    </div> 
                </div>

                <div className="carousel-item  c-item">
                    <img src={SliderThree} className="d-block w-100 c-image" alt="..."/>
                    <div className="carousel-caption top-0 mt-4  ">
                    </div> 
                </div>

            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
                
    )
}