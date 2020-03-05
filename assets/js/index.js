console.log('you can use ES6 here : )')

document.addEventListener("DOMContentLoaded", function(){

  var mobileButton = document.getElementById("mobile-menu-button")
  var dropdown    = document.getElementsByClassName("toggleDropdown")[0]
  mobileButton.onclick = function(){
    document.body.classList.toggle("show")
  }
  /* When the user clicks on the button,
  toggle between hiding and showing the dropdown content */
  dropdown.onclick=function(e) {
    e.preventDefault()
    document.getElementById("myDropdown").classList.toggle("show")
  }
  window.onclick = function(event) {
    if (!event.target.matches('.toggleDropdown')) {
      var dropdowns = document.getElementsByClassName("dropdown-content")
      var i
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i]
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show')
        }
      }
    }
  }

});
