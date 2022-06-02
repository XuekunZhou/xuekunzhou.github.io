// function isElementInViewport(elem) {
//     var $elem = $(elem);

//     // Get the scroll position of the page.
//     var scrollElem = ((navigator.userAgent.toLowerCase().indexOf('webkit') != -1) ? 'body' : 'html');
//     var viewportTop = $(scrollElem).scrollTop();
//     var viewportBottom = viewportTop + $(window).height();

//     // Get the position of the element on the page.
//     var elemTop = Math.round( $elem.offset().top );
//     var elemBottom = elemTop + $elem.height();

//     return ((elemTop < viewportBottom) && (elemBottom > viewportTop));
// }

// // Check if it's time to start the animation.
// function checkAnimation() {
//     var $elem = $('.bar .level');

//     // If the animation has already been started
//     if ($elem.hasClass('start')) return;

//     if (isElementInViewport($elem)) {
//         // Start the animation
//         $elem.addClass('start');
//     }
// }

// // Capture scroll events
// $(window).scroll(function(){
//     checkAnimation();
// })


window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  const vh = Math.max(document.documentElement.clientHeight || 0, window.innerHeight || 0)
  const welcomeHeight = document.getElementById("welcome").clientHeight;
  const aboutMeHeight = document.getElementById("aboutme").clientHeight - welcomeHeight + 50;
  const projectsHeight = document.getElementById("projects").clientHeight + aboutMeHeight - welcomeHeight + 0.10 * vh;
  const bodyPos = document.body.scrollTop;
  const scrollPos = document.documentElement.scrollTop;

  // about me gets into focus
  if (bodyPos > 50  || scrollPos > 50) {
    document.getElementById("welcome").classList.add("scrolled");
    document.getElementById("aboutme").classList.add("focus");
  } else {
    document.getElementById("welcome").classList.remove("scrolled");
    document.getElementById("aboutme").classList.remove("focus");
    document.getElementById("projects").classList.remove("focus");
    document.getElementById("contact").classList.remove("focus");
    document.getElementById("project-1").classList.remove("focus");
    document.getElementById("project-2").classList.remove("focus");
    document.getElementById("project-3").classList.remove("focus");
  }

  // projects gets into focus
  if (bodyPos > aboutMeHeight  || scrollPos > aboutMeHeight) {
    document.getElementById("projects").classList.add("focus");
    document.getElementById("project-1").classList.add("focus");
    document.getElementById("project-2").classList.add("focus");
    document.getElementById("project-3").classList.add("focus");
  }

  // contact gets into focus
  if (bodyPos > projectsHeight  || scrollPos > projectsHeight) {
    document.getElementById("contact").classList.add("focus");
  }

} 