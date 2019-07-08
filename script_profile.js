window.onload=function() {
    document.getElementById('loading_mask').style.display='none';
}

// 4 switches for the buttons
function activeSwitch_1() {
  document.getElementById('posts_button').setAttribute('class', 'active');
  document.getElementById('igtv_button').setAttribute('class', 'none');
  document.getElementById('saved_button').setAttribute('class', 'none');
  document.getElementById('tagged_button').setAttribute('class', 'none');
}

function activeSwitch_2() {
  document.getElementById('posts_button').setAttribute('class', 'none');
  document.getElementById('igtv_button').setAttribute('class', 'active');
  document.getElementById('saved_button').setAttribute('class', 'none');
  document.getElementById('tagged_button').setAttribute('class', 'none');
}

function activeSwitch_3() {
  document.getElementById('posts_button').setAttribute('class', 'none');
  document.getElementById('igtv_button').setAttribute('class', 'none');
  document.getElementById('saved_button').setAttribute('class', 'active');
  document.getElementById('tagged_button').setAttribute('class', 'none');
}

function activeSwitch_4() {
  document.getElementById('posts_button').setAttribute('class', 'none');
  document.getElementById('igtv_button').setAttribute('class', 'none');
  document.getElementById('saved_button').setAttribute('class', 'none');
  document.getElementById('tagged_button').setAttribute('class', 'active');
}

// 4 switches for display sections
function enableSection() {
  var myClickElement_1 = document.getElementById('posts_button');
  var myClickElement_2 = document.getElementById('igtv_button');
  var myClickElement_3 = document.getElementById('saved_button');
  var myClickElement_4 = document.getElementById('tagged_button');
  var myclass_1 = myClickElement_1.getAttribute('class');
  var myclass_2 = myClickElement_2.getAttribute('class');
  var myclass_3 = myClickElement_3.getAttribute('class');
  var myclass_4 = myClickElement_4.getAttribute('class');
  var myTargetElement_1 = document.getElementById('posts');
  var myTargetElement_2 = document.getElementById('igtv');
  var myTargetElement_3 = document.getElementById('saved');
  var myTargetElement_4 = document.getElementById('tagged');
  if (myclass_1 === 'active') {
    myTargetElement_1.setAttribute('class', 'posts_active');
    myTargetElement_2.setAttribute('class', 'inactive');
    myTargetElement_3.setAttribute('class', 'inactive');
    myTargetElement_4.setAttribute('class', 'inactive');
  } else if (myclass_2 === 'active') {
    myTargetElement_1.setAttribute('class', 'inactive');
    myTargetElement_2.setAttribute('class', 'igtv_active');
    myTargetElement_3.setAttribute('class', 'inactive');
    myTargetElement_4.setAttribute('class', 'inactive');
  } else if (myclass_3 === 'active') {
    myTargetElement_1.setAttribute('class', 'inactive');
    myTargetElement_2.setAttribute('class', 'inactive');
    myTargetElement_3.setAttribute('class', 'saved_active');
    myTargetElement_4.setAttribute('class', 'inactive');
  } else if (myclass_4 === 'active') {
    myTargetElement_1.setAttribute('class', 'inactive');
    myTargetElement_2.setAttribute('class', 'inactive');
    myTargetElement_3.setAttribute('class', 'inactive');
    myTargetElement_4.setAttribute('class', 'tagged_active');
}
};


// Looking glass shiw/hide
function myGlass() {
  var glass = document.getElementById('glass');
  glass.setAttribute('class', 'looking_glass_hide');
}

function myGlass_2() {
  var glass = document.getElementById('glass');
  var glass_input = document.getElementById('glass_input').value;
  if (glass_input === '') {
    glass.setAttribute('class', 'looking_glass');
  }
}

//TO TOP SCROLL SCRIPT
$(window).scroll(function() {
  // console.log('wwww');
  if ($(this).scrollTop() > 50) {
    $('.top-scroller').fadeIn();
  } else {
    $('.top-scroller').fadeOut();
  }
});
//Click event to scroll to top
$('.top-scroller').click(function() {
  $('html, body').animate({
    scrollTop: 0
  }, 1000);
  return false;
});

//TO RIGHT SCROLL SCRIPT
// can't be used with swiper

//focus on scroll button
// const button_1 = document.getElementById('scroll_right');
// // focus on scroll target container and scroll
// button_1.onclick = function () {
//   document.getElementById('scroll_container').scrollLeft += 200;
//   var check = document.getElementById('scroll_container').scrollLeft;
//   if (check > 0) {
//     var sc_left = document.getElementById('scroll_left');
//     sc_left.classList.add('unhide');
//     var sc_right = document.getElementById('scroll_right');
//     sc_right.classList.add('hide');
//   }
// };

//TO LEFT SCROLL SCRIPT
// can't be used with swiper

//focus on scroll button
// const button_2 = document.getElementById('scroll_left');
// // focus on scroll target container and scroll
// button_2.onclick = function () {
//   document.getElementById('scroll_container').scrollLeft -= 200;
//   var check = document.getElementById('scroll_container').scrollLeft;
//   if (check < 200) {
//     var sc_left = document.getElementById('scroll_left');
//     sc_left.classList.remove('unhide');
//     var sc_right = document.getElementById('scroll_right');
//     sc_right.classList.remove('hide');
//   }
// };

// HOVER display

// rng generator with an upper limit
function getRandomNumber(upper) {
  return Math.floor(Math.random() * upper) + 1;
};

function getRandomLikes() {
  let randomLikes = getRandomNumber(999);
  return randomLikes;
};

function getRandomComments() {
  let randomComments = getRandomNumber(9);
  return randomComments;
};


// a function to create a new div with a class and some contents to be inserted into every picture container that has the class 'posts_image'; we also use the generator to generate 2 random numbers for likes and comments.
function addContent() {
  const classes = document.getElementsByClassName('posts_image');
  let likes = getRandomLikes();
  let comments = getRandomComments();
  const element = '<span><i class="fas fa-heart fa-lg"></i></span><p>' + likes + 'k</p><span><i class="fas fa-comment fa-lg"></i></span><p>' + comments + 'k</p>';
  for (let i = 0; i < classes.length; i += 1) {
      classes[i].innerHTML += '<div class="image_overlay">' + element + '</div>';
    }
};

addContent();

// script for posts section image shrink
const classElements = document.getElementsByClassName('posts_image');
const imageElements = document.getElementsByClassName('zoom');
for (let i = 0; i < classElements.length; i += 1) {
  classElements[i].addEventListener('mousedown', () => {
    imageElements[i].style.width = "150px";
  })
  classElements[i].addEventListener('mouseup', () => {
    imageElements[i].style.width = "";
  })
  };
