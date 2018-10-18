console.log('you can use ES6 here : )')

document.addEventListener("DOMContentLoaded", function(){

  var mobileButton = document.getElementById("mobile-menu-button")

  mobileButton.onclick = function(){
    document.body.classList.toggle("show")
  }

});
