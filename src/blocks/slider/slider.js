$.slider = require('jquery-ui/ui/widgets/slider');

// var $grid = $(".our-design__gallery-items").isotope({
//   itemSelector: ".our-design__gallery-item",
//   transitionDuration: 500,
// });

$(function () {
    $('.slider__body').slider({
        range: true,
        min: 0,
        max: 50000,
        values: [5000, 10000],
        slide: function (event, ui) {
            $('.slider__range').val(ui.values[0] + '₽ - ' + ui.values[1] + '₽');
        },
    });
    $('.slider__range').val(
        $('.slider__body').slider('values', 0) +
            '₽ - ' +
            $('.slider__body').slider('values', 1) +
            '₽'
    );
});
