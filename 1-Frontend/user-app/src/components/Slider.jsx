import "/src/styles.css"

export default function Slider(){
    return(

<div id="hero-carousel" class="carousel slide" data-bs-ride="carousel" >

<div class="carousel-indicators">
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#hero-carousel" data-bs-slide-to="2" aria-label="Slide 3"></button>
    
  </div> 

    <div class="carousel-inner">

        <div class="carousel-item active c-item">
        <img src="./src/assets/1.png" class="d-block w-100  c-image" alt="..."/>
        <div class="carousel-caption top-0 mt-4 ">
        </div>   
        </div>

        <div class="carousel-item c-item">
        <img src="./src/assets/4.png" class="d-block w-100 c-image" alt="..."/>
        <div class="carousel-caption top-0 mt-4  ">
      
        </div> 
        </div>

        <div class="carousel-item  c-item">
        <img src="./src/assets/3.png" class="d-block w-100 c-image" alt="..."/>
        <div class="carousel-caption top-0 mt-4  ">
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