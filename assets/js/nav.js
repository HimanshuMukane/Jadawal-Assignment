var header = document.getElementById("nav");
var btns = header.getElementsByClassName("navbtn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("circle");
        current[0].className = current[0].className.replace(" circle", "");
        this.className += " circle";
    });
}


$(window).scroll(function() {
    var threshold = 400;
    if ($(window).scrollTop() >= threshold)
        $('#nav').removeClass('invisible');
    else
        $('#nav').addClass('invisible');
});