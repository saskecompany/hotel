"use strict";

$(document).ready(function () {
  $("#cont").hide();
  $(".tbtnb").click(function () {
    $("#cont").toggle(400);
  });
});
var up = document.getElementById("up");
setInterval(function upf() {
  var uscroll = window.pageYOffset;

  if (uscroll > 100) {
    console.log(uscroll);
    up.style.display = "block";
  } else {
    up.style.display = "none";
  }
}, 1);