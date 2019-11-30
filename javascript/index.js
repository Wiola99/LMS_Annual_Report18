var handleTimeline = function() {
  var onScroll = function() {
    var scrollPosition = $(window).scrollTop();
    var headerHeight = $("#header").height();

    var timenline = $("#timeline");
    var timelineHeight = timenline.height();

    var pageTitle = $(".page-title");

    if (scrollPosition > headerHeight) {
      timenline.css({ position: "fixed" });
      pageTitle.css({ "margin-top": timelineHeight });
    } else {
      timenline.css({ position: "relative" });
      pageTitle.css({ "margin-top": 0 });
    }
  };
  $(window).scroll(onScroll);
};

var animateOneEvent = function(currentDomElement, controller) {
  var liDom = currentDomElement;
  var liJquery = $(liDom);

  var imageJquery = liJquery.find(".full-image");

  var titleJquery = liJquery.find(".title");
  var titleDom = titleJquery.get(0);

  // Add span for each letter in title
  titleJquery.html(
    titleJquery.text().replace(/\S/g, "<span class='letter'>$&</span>")
  );
  var titleLettersJquery = titleJquery.find(".letter");
  var titleLettersDom = titleLettersJquery.get();

  // Init scene
  var scene = new ScrollMagic.Scene({
    triggerElement: liDom, // starting scene, when reaching this element
    offset: -150
    // duration: 500,
  });

  // When the trigger is after the start possition of the current scene (li)
  scene.on("enter", function(event) {
    // Set image to opcity 1 with the class imgtrans
    imageJquery.addClass("imgtrans");

    anime.timeline().add({
      targets: titleLettersDom,
      opacity: [0, 1],
      easing: "easeInOutQuad",
      duration: 1000,
      delay: (el, i) => 50 * (i + 1)
    });
  });

  // Add add indicators for debug only
  //scene.addIndicators();

  //  Add the current scene to controller
  scene.addTo(controller);
};

var animateEachEvent = function() {
  // detecting the scrolling with ScrollMagic in order to add animations
  var controller = new ScrollMagic.Controller();
  $(".scroll-animation").each(function() {
    animateOneEvent(this, controller);
  });
};

var animatePageTitle = function() {
  // Wrap every letter in a span
  var pageTitle = document.querySelector(".page-title");
  pageTitle.innerHTML = pageTitle.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  ); // /\S/g breaking text into letters and putting everz letter into a span

  anime
    .timeline({ loop: true })
    .add({
      targets: ".page-title .letter",
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 1300,
      delay: (el, i) => 100 * (i + 1)
    })
    .add({
      targets: ".page-title .letter",
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 1300,
      delay: (el, i) => 100 * (i + 1)
    });
  // .add({
  //   targets: ".page-title",
  //   opacity: 0,
  //   duration: 1000,
  //   easing: "easeOutExpo",
  //   delay: 1000
  // });
};

// forcing this code to execute itself after the document is ready
$(document).ready(function() {
  handleTimeline();
  animatePageTitle();
  animateEachEvent();
});
