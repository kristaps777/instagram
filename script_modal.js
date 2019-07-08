//stories pop-up

// Get the modal
var modal = document.getElementById('myModal');

// Get the buttons that opens the modal
var btn_1 = document.getElementById("myBtn_1");
var btn_2 = document.getElementById("myBtn_2");
var btn_3 = document.getElementById("myBtn_3");
var btn_4 = document.getElementById("myBtn_4");
var btn_5 = document.getElementById("myBtn_5");
var btn_6 = document.getElementById("myBtn_6");
var test_name = document.getElementsByClassName('test_tag');
var test_name_value_1 = test_name[0].innerHTML.toUpperCase();
var test_name_value_2 = test_name[1].innerHTML.toUpperCase();
var test_name_value_3 = test_name[2].innerHTML.toUpperCase();
var test_name_value_4 = test_name[3].innerHTML.toUpperCase();
var test_name_value_5 = test_name[4].innerHTML.toUpperCase();
var test_name_value_6 = test_name[5].innerHTML.toUpperCase();
var target_name = document.getElementById('vanilla');

// When the user clicks any of the 6 buttons, open the same modal, but with different name on top
btn_1.onclick = function() {
  modal.style.display = "block";
  target_name.innerHTML = test_name_value_1;
}

btn_2.onclick = function() {
  modal.style.display = "block";
  target_name.innerHTML = test_name_value_2;
}

btn_3.onclick = function() {
  modal.style.display = "block";
  target_name.innerHTML = test_name_value_3;
}

btn_4.onclick = function() {
  modal.style.display = "block";
  target_name.innerHTML = test_name_value_4;
}

btn_5.onclick = function() {
  modal.style.display = "block";
  target_name.innerHTML = test_name_value_5;
}

btn_6.onclick = function() {
  modal.style.display = "block";
  target_name.innerHTML = test_name_value_6;
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// close modal on ESC press
$(document).keydown(function(e) {
    // ESCAPE key pressed
    if (e.keyCode == 27) {
        modal.style.display = "none";
    }
});
