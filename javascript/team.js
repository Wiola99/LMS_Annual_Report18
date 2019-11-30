// forcing this code to execute itself after the document is ready
$(document).ready(function() {
  // Appearing text - Wrap every letter in a span
  var textWrapper = document.querySelector(".meet-our-team");
  textWrapper.innerHTML = textWrapper.textContent.replace(
    /\S/g,
    "<span class='letter'>$&</span>"
  );

  anime
    .timeline({ loop: true })
    .add({
      targets: ".meet-our-team .letter",
      opacity: 1,
      easing: "easeInOutQuad",
      duration: 1300,
      delay: (el, i) => 100 * (i + 1)
    })
    .add({
      targets: ".meet-our-team .letter",
      opacity: 0,
      easing: "easeInOutQuad",
      duration: 1300,
      delay: (el, i) => 100 * (i + 1)
    });
});
