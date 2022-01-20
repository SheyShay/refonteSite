//------------------------------------- SLIDE IMAGE------------------------------------------------

const slideshowImages = document.querySelectorAll(".intro-slideshow img");

const nextImageDelay = 3500;
let currentImageCounter = 0;

slideshowImages[currentImageCounter].style.opacity = 1;

setInterval(nextImage, nextImageDelay);

function nextImage() {
  slideshowImages[currentImageCounter].style.opacity = 0;

  currentImageCounter = (currentImageCounter+1) % slideshowImages.length;

  slideshowImages[currentImageCounter].style.opacity = 1;
}

// ------------------------------------MENU HAMBOURGER------------------------------------------------

let hamburgerMenuState='close';

function doClickHamburger(){
    console.log('On est là!');
    console.log(hamburgerMenuState);
    if(hamburgerMenuState=='close'){
        document.getElementById("menuHamburger").style.display = "flex";
        hamburgerMenuState='open';
    }else{
        document.getElementById("menuHamburger").style.display = "none";
        hamburgerMenuState='close';
    }
}
