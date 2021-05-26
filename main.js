window.onscroll = function() {headerFunction()};
function headerFunction() {
    if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
        document.getElementById("header").style.background = "linear-gradient(-45deg, #00c06d, #00d478)";
    } else {
        document.getElementById("header").style.background = "none";
        document.getElementById("header").style.background = "rgba(0,0,0,0.1)";

    }
}