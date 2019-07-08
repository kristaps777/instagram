// here we define 3 'switch' functions to switch classes for picture elements
// we add a visibility class to make the picture visible (it is invisible by default) and we also add a transition class for a nice transition effect
function mySwitch_1() {
  document.getElementById('switch_image_1').setAttribute('class', 'image_switch transition_class visibility_class');
};

function mySwitch_2() {
  document.getElementById('switch_image_2').setAttribute('class', 'image_switch transition_class visibility_class');
};

function mySwitch_3() {
  document.getElementById('switch_image_3').setAttribute('class', 'image_switch transition_class visibility_class');
};


// here we define 4 'clear' functions to clear the pictures of previously added classes
// we do this to ensure the image switch/transition looping
// if we do not clear the previously added classes, the pictures will stay still, because they're already visible and have gone through transition
function myClear_1() {
  document.getElementById('switch_image_3').setAttribute('class', 'image_switch');
};

function myClear_2() {
  document.getElementById('switch_image_2').setAttribute('class', 'image_switch');
};

function myClear_3() {
  document.getElementById('switch_image_3').setAttribute('class', 'image_switch');
};

function myClear_4() {
  document.getElementById('switch_image_1').setAttribute('class', 'image_switch');
  document.getElementById('switch_image_2').setAttribute('class', 'image_switch');
  document.getElementById('switch_image_3').setAttribute('class', 'image_switch');
  document.getElementById('main_image').setAttribute('class', 'image_switch transition_class visibility_class');
};

// here we define a function with timeouts
// first, we make sure the picture is cleared of any unnecessary classes, then we add the 'switch' classes, which happens on a timer to make sure all of the transitions don't happen at the same time
function myNightmare() {
  setTimeout(function(){myClear_1(); }, 1000);
  setTimeout(function(){mySwitch_1(); }, 2000);
  setTimeout(function(){myClear_2(); }, 3000);
  setTimeout(function(){mySwitch_2(); }, 4000);
  setTimeout(function(){myClear_3(); }, 5000);
  setTimeout(function(){mySwitch_3(); }, 6000);
  setTimeout(function(){myClear_4(); }, 9000);
};

// here we combine all of the timeout functions and put them in a single function that will loop in intervals
function myFinale() {
  setInterval(function(){myNightmare(); }, 10000);
};

// here we run the final function to make things roll
myFinale();


// incomplete attempt to simulate the placeholder/label text movement in Instagram login window
function myText_1() {
  document.getElementById('label_1').setAttribute('class', 'label_move');
}

function myText_2() {
  document.getElementById('label_2').setAttribute('class', 'label_move');
}

function myText_3() {
  document.getElementById('label_3').setAttribute('class', 'label_move');
}

function myText_4() {
  document.getElementById('label_4').setAttribute('class', 'label_move');
}

function myText_reset() {
  var label_1 = document.getElementById('label_1');
  var label_2 = document.getElementById('label_2');
  var label_3 = document.getElementById('label_3');
  var label_4 = document.getElementById('label_4');
  var label_1_input = document.getElementById('label_1_input').value;
  var label_2_input = document.getElementById('label_2_input').value;
  var label_3_input = document.getElementById('label_3_input').value;
  var label_4_input = document.getElementById('label_4_input').value;
  if (label_1_input === '') {
    label_1.setAttribute('class', 'none');
  }
  if (label_2_input === '') {
    label_2.setAttribute('class', 'none');
  }
  if (label_3_input === '') {
    label_3.setAttribute('class', 'none');
  }
  if (label_4_input === '') {
    label_4.setAttribute('class', 'none');
  }
}

function submitCheck() {
  var label_1_input = document.getElementById('label_1_input').value;
  var label_2_input = document.getElementById('label_2_input').value;
  var label_3_input = document.getElementById('label_3_input').value;
  var label_4_input = document.getElementById('label_4_input').value;
  var submit = document.getElementById('submit');
    if (label_1_input === '' || label_2_input === '' || label_3_input === '' || label_4_input === '') {
      alert('Please enter your details or use Facebook instead to proceed!')
  } else {
    submit.href = "profile.html"
  }
}
