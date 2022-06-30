$.slider = require('jquery-ui/ui/widgets/slider');

$.extend($.slider.prototype.options.classes, {
    'ui-slider-handle': 'slider__handle',
    'ui-slider-range': 'slider__range',
});

$(function () {
    $('.slider__body').slider({
        range: true,
        min: 0,
        max: 50000,
        values: [5000, 10000],
        slide: function (event, ui) {
            $('.slider__range-text').val(
                ui.values[0] + '₽ - ' + ui.values[1] + '₽'
            );
        },
    });
    $('.slider__range-text').val(
        $('.slider__body').slider('values', 0) +
            '₽ - ' +
            $('.slider__body').slider('values', 1) +
            '₽'
    );
});
