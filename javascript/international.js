// forcing this code to execute itself after the document is ready
$(document).ready(function() {
  // Wrap every letter in a span
  var textWrapper = document.querySelector(".page-title");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".page-title .letter",
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 1300,
      delay: (el, i) => 150 * (i + 1)
    })
    .add({
      targets: ".page-title .letter",
      opacity: 0,
      duration: 1300,
      easing: "easeOutExpo",
      delay: (el, i) => 150 * (i + 1)
    });
});
