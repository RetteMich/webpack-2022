$.slider = require("jquery-ui/ui/widgets/slider");

// var $grid = $(".our-design__gallery-items").isotope({
//   itemSelector: ".our-design__gallery-item",
//   transitionDuration: 500,
// });

$(function () {
  $("#slider-range").slider({
    range: true,
    min: 0,
    max: 500,
    values: [75, 300],
    slide: function (event, ui) {
      $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
    },
  });
  $("#amount").val(
    "$" +
      $("#slider-range").slider("values", 0) +
      " - $" +
      $("#slider-range").slider("values", 1)
  );
});
