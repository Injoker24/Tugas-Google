var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("dot");
    if (n > slides.length) {
        slideIndex = 1
    }    
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";  
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";  
    dots[slideIndex-1].className += " active";
}

function openNav(){
    document.getElementById("side").style.width = "20vw";
    document.getElementById("main").style.marginLeft = "20vw";
}

function closeNav() {
    document.getElementById("side").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
}

function openModal(modalid) {

    var modal = document.getElementById(modalid)
    modal.style.display = "block";
}

function closeModal(modalid) {
    var modal = document.getElementById(modalid)
    modal.style.display = "none";
}
