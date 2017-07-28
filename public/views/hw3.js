/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myThemeFunction() {
    document.getElementById("myDropdownTheme").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
  if (!event.target.matches('.dropbtn')) {

    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains('show')) {
        openDropdown.classList.remove('show');
      }
    }
  }
}

function black() {
	document.body.style.backgroundColor = "black";
	document.body.style.color = "white";
	document.getElementById(themeBtn).style.color = "black";
}

function white() {
	document.body.style.backgroundColor = "white";
	document.body.style.color = "black";
	document.getElementById(themeBtn).style.color = "white";
}
</script>
