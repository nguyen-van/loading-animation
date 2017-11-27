"use trick"
var overlay = document.getElementById("c-overlay");
window.addEventListener('load', function(){
  overlay.style.display = 'default';
})
$(document).ready(function(){
  setTimeout(
    function() 
    {
      $("#c-overlay").hide()
    }, 2500);
});