$(document).ready(function() {
    if (document.documentElement.clientWidth < 768) {
        var a = document.getElementById("latest-row").clientWidth;
        document.getElementById("latest-content1").style.width = a;
        document.getElementById("latest-content2").style.width = a;
        document.getElementById("latest-content3").style.width = a;
        document.getElementById("latest-wrap").style.width = 3 * a;
        alert(a);
    }
});
