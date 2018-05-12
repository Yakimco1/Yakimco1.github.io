window.onload =  function () {


    var n = 0;
    carousel();

    function carousel() {
        var i;
        var slides = document.getElementsByClassName("mySlides");
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
        }
        n++;
        if (n > slides.length) {
            n = 1
        }
        slides[n - 1].style.display = "block";
        setTimeout(carousel, 3000);
    }
}