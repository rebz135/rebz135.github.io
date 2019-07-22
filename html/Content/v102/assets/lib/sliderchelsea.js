jQuery(document).ready(function ($) {
    function sliderFunction() {
        setInterval(function () {
            moveRight();
        }, 8000);

        var slideCount = $('#sliderchelsea ul li').length;
        var slideWidth = $('#sliderchelsea ul li').width();
        var slideHeight = $('#sliderchelsea ul li').height();
        var sliderUlWidth = slideCount * slideWidth;
        var slideLi = $('#sliderchelsea ul li');
        var arrayHeight = [];

        slideLi.each(function () {
            var thisHeight = $(this).height();
            arrayHeight.push(thisHeight)
        });
        slideHeight = Math.max.apply(Math,arrayHeight);

        $('#sliderchelsea').css({ width: slideWidth });

        $('#sliderchelsea ul').css({ width: sliderUlWidth, height: slideHeight, marginLeft: - slideWidth });

        $('#sliderchelsea ul li:last-child').prependTo('#sliderchelsea ul');

        function moveLeft() {
            $('#sliderchelsea ul').animate({
                left: + slideWidth
            }, 800, function () {
                $('#sliderchelsea ul li:last-child').prependTo('#sliderchelsea ul');
                $('#sliderchelsea ul').css('left', '');
            });
        }

        function moveRight() {
            $('#sliderchelsea ul').animate({
                left: - slideWidth
            }, 800, function () {
                $('#sliderchelsea ul li:first-child').appendTo('#sliderchelsea ul');
                $('#sliderchelsea ul').css('left', '');
            });
        }

        $('a.control_prev').click(function (event) {
            event.preventDefault();
            moveLeft();
        });

        $('a.control_next').click(function (event) {
            event.preventDefault();
            moveRight();
        });
    }
    sliderFunction();
    window.onresize = function(){
        sliderFunction();
    };
});
