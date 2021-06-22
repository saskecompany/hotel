let btn = document.querySelector(".tbtnb");
$(document).ready(function () {
    $("#class").hide();
    $(".tbtnb").click(function () {
        $("#class").toggle(400);
    });
    $(".tbtnb").mouseenter(function() {
        btn.innerHTML = "<i class='bi bi-door-open-fill'></i>";
    });
    $(".tbtnb").mouseleave(function() {
        btn.innerHTML = "<i class='bi bi-door-closed-fill'></i>";
    });
});
var up=document.getElementById("up");
setInterval(function upf() {
    var uscroll=window.pageYOffset;
    if(uscroll>100){
        console.log(uscroll);
        up.style.display="block";
    }
    else{
        up.style.display="none";
    }}, 1);
    
