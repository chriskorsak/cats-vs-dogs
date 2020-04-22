$(document).ready(function() {
  $("button#cat").click(function() {
    $("ul#cat-says").prepend("<li>MEOW!<li>");
    $("ul#dog-says").prepend("<li>BARK!<li>");
  });
  $("button#dog").click(function() {
    $("ul#cat-says").prepend("<li>OH NO!<li>");
    $("ul#dog-says").prepend("<li>BARK, BARK!<li>");
  });

});