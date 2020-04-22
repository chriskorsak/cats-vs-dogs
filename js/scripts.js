$(document).ready(function() {

  $("button#cat").click(function() {
    $("ul#cat-said").prepend("<li>meow</li>");
    $("ul#dog-said").prepend("<li>Is that all you got?</li>");
    $("ul#cat-said").children("li").first().click(function() {
      $(this).remove();
    });
  });
  $("button#dog").click(function() {
    $("ul#cat-said").prepend("<li>OH NO!</li>");
    $("ul#dog-said").prepend("<li>BARK, BARK!</li>");
  });
  $("button#after-h1").click(function() {
    $("h1").after("<p>This paragraph is after the h1 element!</p>");
    $("p").click(function() {
      (this).remove();
    });

  });

});