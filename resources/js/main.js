// mixitup plaugings //

var mixer = mixitup('.grid-port-container');

//scrollify plaugings//

$(function() {
    $.scrollify({
      section : ".scrollify",
      setHeights: false,
      updateHash: false,
    });
  });

//Hamburger Menu //
function openMenu(){
  document.getElementById('menu').style.height = "100%"
}
function closeMenu(){
  document.getElementById('menu').style.height = "0%"
}

// smooth scroll //

$(function(){
  $('.menu-item a, .scroll-down a, .close-btn ion-icon').on('click', function(){
    $('html, body').animate({
      scrollTop: $($.attr(this, 'href')).offset().top
    }, 1000);
    return false;
  });
});