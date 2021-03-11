/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
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

function getValue() {
    var x = document.getElementById("myHeader")
    alert(x.innerHTML)
}


function getElements_ById() {
    var x = document.getElementById("I5");
    alert("Vaš odgovor nas je iznenadio i on je: " + x.value);
}

function funkcija(){
  alert("Trenutno nemamo ženskih modela u ponudi");
}




