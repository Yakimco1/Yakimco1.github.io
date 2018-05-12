window.onload = function () {

    var d = document.getElementById("dots");
    d.setAttribute("style", "text-align:center;");

    var slideIndex = 1;
    showSlides(slideIndex);

    function plusSlides(n) {
        showSlides(slideIndex += n);
    }

    function current(n) {
        showSlides(slideIndex = n);
    }

    function showSlides(n) {
        var i;
        var slide3 = document.getElementsByClassName("myS");
        var dot3 = document.getElementsByClassName("dot");

        if (n > slide3.length) {
            slideIndex = 1;
        }

        if (n < 1) {
            slideIndex = slide3.length;
        }

        for (i = 0; i < slide3.length; i++){
            slide3[i].style.display = "none";
        }

        for (i = 0; i < dot3.length; i++){
            dot3[i].className = dot3[i].className.replace("active", "");
        }

        slide3[slideIndex-1].display= "block";
        dot3[slideIndex-1].className+= " active";
    }

}
