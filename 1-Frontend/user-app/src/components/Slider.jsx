import "/src/styles.css"

export default function Slider(){
    return(

<div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" >

<div class="carousel-indicators">
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="3" aria-label="Slide 4"></button>
  </div> 

    <div class="carousel-inner">

        <div class="carousel-item active c-item">
        <img src="./src/assets/em2.jpeg" class="d-block w-100  c-image" alt="..."/>
        <div class="carousel-caption top-0 mt-4 ">
        <p className="mt-5 fs-3 text-uppercase">Some representative placeholder content for the first slide.</p>
        <h1 className="display-1 fw-bolder text-capitalize">First slide label</h1>
        <button className="btn btn-danger px-4 py-2 fs-5 mt-5 ">Report emergency</button>
        </div>   
        </div>

        <div class="carousel-item c-item">
        <img src="./src/assets/em4.jpeg" class="d-block w-100 c-image" alt="..."/>
        <div class="carousel-caption top-0 mt-4  ">
        <p className="mt-5 fs-3 text-uppercase">Some representative placeholder content for the first slide.</p>
        <h1 className="display-1 fw-bolder text-capitalize">First slide label</h1>
        <button className="btn btn-danger px-4 py-2 fs-5 mt-5 ">Report emergency</button>
        </div> 
        </div>

        <div class="carousel-item  c-item">
        <img src="./src/assets/em5.jpeg" class="d-block w-100 c-image" alt="..."/>
        <div class="carousel-caption top-0 mt-4  ">
        <p className="mt-5 fs-3 text-uppercase">Some representative placeholder content for the first slide.</p>
        <h1 className="display-1 fw-bolder text-capitalize">First slide label</h1>
        <button className="btn btn-danger px-4 py-2 fs-5 mt-5 ">Report emergency</button>
        </div> 
        </div>

        <div class="carousel-item c-item">
        <img src="./src/assets/em3.jpeg" class="d-block w-100 c-image" alt="..."/>
        <div class="carousel-caption top-0 mt-4   d-md-block">
        <p className="mt-5 fs-3 text-uppercase">Some representative placeholder content for the first slide.</p>
        <h1 className="display-1 fw-bolder text-capitalize">First slide label</h1>
        <button className="btn btn-danger px-4 py-2 fs-5 mt-5 ">Report emergency</button>
        </div> 
        </div>

    </div>
    <button class="carousel-control-prev" type="button" data-bs-target="#hero-carousel" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
    </button>
    <button class="carousel-control-next" type="button" data-bs-target="#hero-carousel" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
    </button>
</div>
        
    )
}