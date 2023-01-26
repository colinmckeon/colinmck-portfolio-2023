// Mobile Navigation
$('.mobile-toggle').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.main_h').removeClass('open-nav');
    } else {
        $('.main_h').addClass('open-nav');
    }
});

$('.main_h li a').click(function() {
    if ($('.main_h').hasClass('open-nav')) {
        $('.navigation').removeClass('open-nav');
        $('.main_h').removeClass('open-nav');
    }
});

// Navigation Scroll - ljepo radi materem
$('nav a').click(function(event) {
    var id = $(this).attr("href");
    var offset = 70;
    var target = $(id).offset().top - offset;
    $('html, body').animate({
        scrollTop: target
    }, 500);
    event.preventDefault();
});



document.addEventListener('click', function (event) {
  console.log(event.target.parentElement.parentElement);
  if (event.target.parentElement.parentElement.matches('.gallery-image__preview')) {
    event.target.parentElement.parentElement.classList.remove('gallery-image__preview');
    event.target.parentElement.parentElement.scrollIntoView();
  } else if (event.target.matches('.gallery-image__media')) {
    // Remove any existing preview classes
    var previewing = document.getElementsByClassName('gallery-image__preview');
    for (el of previewing) {
      el.classList.remove('gallery-image__preview');
    }
        // Preview the clicked figure
    event.target.parentElement.parentElement.classList.add('gallery-image__preview');
    event.target.parentElement.parentElement.scrollIntoView();
    }
}, false);




function openNav() {
  var sideBar = document.getElementById("sidebar");
  if(sideBar.style.display == "block") {
    sideBar.style.display = "none";
  }
  else {
    sideBar.style.display = "block";
  }
}

function closeNav() {
  var sideBar = document.getElementById("sidebar");
  if(sideBar.style.display == "none") {
    sideBar.style.display = "block";
  }
  else {
    sideBar.style.display = "none";
  }
}



var main_body = document.getElementById("main-body");

main_body.addEventListener('mouseup', function(event){
    var sideBar = document.getElementById('sidebar');
    if (event.target != sideBar && event.target.parentNode != sideBar){
        sideBar.style.display = 'none';
    }
});

var header = document.getElementById("header")
header.addEventListener('mouseup', function(event){
    var sideBar = document.getElementById('sidebar');
    if (event.target != sideBar && event.target.parentNode != sideBar){
        sideBar.style.display = 'none';
    }
});

