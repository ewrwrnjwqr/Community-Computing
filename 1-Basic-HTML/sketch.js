function setup() {}
function draw() {}

$(function() {
  $('a.link').click(function() {
      $('a.link').removeClass('active');
      $(this).addClass('active');
  });
});