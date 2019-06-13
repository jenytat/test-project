$(document).ready(function(){
    //script for slider
    var slider = $('.slider-box__slider');
    var slideWidth = $('.slider-box').outerWidth();
    var slideCount = $('.slider-box__slider img').length;
    var slideNum = 1;
    var index = 0;
    var clickBullets = 0;
    var sliderInterval = 3300;
    var animateTime = 1000;
    var course = 1;
    var margin = - slideWidth;
    var bullets = $('.slider-box .slider-box__bullets li');

        for(var i = 0; i < slideCount; i++) {
            html = $('.slider-box__bullets').html() + '<li></li>';
            $('.slider-box__bullets').html(html);
        }

        $('.slider-box .slider-box__bullets li:first').addClass('active');
        $('.slider-box__slider a:last').clone().prependTo('.slider-box__slider');
        $('.slider-box__slider a').eq(1).clone().appendTo('.slider-box__slider');
        $('.slider-box__slider').css('margin-left', -slideWidth);

        function nextSlide() {
            interval = window.setInterval(animateSlide, sliderInterval);
        }

        function animateSlide() {
            if(margin == -slideCount*slideWidth-slideWidth && course == 1) {
                slider.css({'marginLeft':-slideWidth}); 
                margin = -slideWidth*2;
            } else {
                margin = margin-slideWidth*(course); 
            }

            slider.animate({'marginLeft':margin},animateTime);

            if(clickBullets == 0) {
                activeBullets();
            } else {
                slideNum = index+1;
            }
        }

        function activeBullets() {
            if(course == 1 && slideNum != slideCount) {
                slideNum++;
                $('.slider-box__bullets .active').removeClass('active').next('li').addClass('active');
            } else if(course == 1 && slideNum == slideCount) {
                slideNum = 1;
                $('.slider-box__bullets li').removeClass('active').eq(0).addClass('active');
                return false;
            } else if(course == -1  && slideNum != 1) {
                slideNum--;
                $('.slider-box__bullets .active').removeClass('active').prev('li').addClass('active');
                return false;
            } else if(course == -1  && slideNum == 1) {
                slideNum = slideCount;
                $('.slider-box__bullets li').removeClass('active').eq(slideCount-1).addClass('active');
            }
        }

        function stopSlider() {
            window.clearInterval(interval);
        }

        bullets.click(function() {
            if(slider.is(':animated')) {
                return false;
            }

            stopSlider();
            index = bullets.index(this);

            if(course == 1) {
                margin = -slideWidth*index;
            } else if(course == -1) {
                margin = -slideWidth*index-2*slideWidth;
            }

            $('.slider-box__bullets li').removeClass('active').eq(index).addClass('active');
            clickBullets = 1;
            animateSlide();
            clickBullets = 0;
        });
        nextSlide();

        $('.slider-box__slider_img').css('width', $('.slider-box').width());
    //end script

    //script for menu
    $('.header-main-area__menu').click(function(){
        $('.header-nav').toggleClass('show').slideToggle("slow");
    });
    //end script
    
    //script for carousel
        function moveCarousel() {
            var leftBtn = $('.goods-box__carousel_btn-left');
            var rightBtn = $('.goods-box__carousel_btn-right');
            var elementsList = $('.goods-box__carousel_list');
            var currentLeftValue = 0;
            var pixelsOffset = $('.goods-box__carousel_item').width() + 26;
            var elementsCount = elementsList.find('.goods-box__carousel_item').length;
            var minimumOffset = - ((elementsCount - 4) * pixelsOffset);
            var maximumOffset = 0;

                leftBtn.click(function(){
                    if(currentLeftValue != maximumOffset) {
                        currentLeftValue += pixelsOffset;
                        elementsList.animate({left: currentLeftValue + "px"}, 500);
                    }
                });

                rightBtn.click(function(){
                    if(currentLeftValue != minimumOffset) {
                        currentLeftValue -= pixelsOffset;
                        elementsList.animate({left: currentLeftValue + "px"}, 500);
                    }
                });
        }

        function moveCarousel_new() {
            var leftBtn_new = $('.goods-box__carousel_btn-left-new');
            var rightBtn_new = $('.goods-box__carousel_btn-right-new');
            var elementsList_new = $('.goods-box__carousel_list-new');
            var currentLeftValue_new = 0;
            var pixelsOffset_new = $('.goods-box__carousel_item-new').width() + 26;
            var elementsCount_new = elementsList_new.find('.goods-box__carousel_item-new').length;
            var minimumOffset_new = - ((elementsCount_new - 4) * pixelsOffset_new);
            var maximumOffset_new = 0;

                leftBtn_new.click(function(){
                    if(currentLeftValue_new != maximumOffset_new) {
                        currentLeftValue_new += pixelsOffset_new;
                        elementsList_new.animate({left: currentLeftValue_new + "px"}, 500);
                    }
                });

                rightBtn_new.click(function(){
                    if(currentLeftValue_new != minimumOffset_new) {
                        currentLeftValue_new -= pixelsOffset_new;
                        elementsList_new.animate({left: currentLeftValue_new + "px"}, 500);
                    }
                });
        }

        function moveCarousel_recom() {
            var leftBtn_recom = $('.recommendation-box__carousel_btn-left');
            var rightBtn_recom = $('.recommendation-box__carousel_btn-right');
            var elementsList_recom = $('.recommendation-box__carousel_list');
            var currentLeftValue_recom = 0;
            var pixelsOffset_recom = $('.recommendation-box__carousel_item').width() + 26;
            var elementsCount_recom = elementsList_recom.find('.recommendation-box__carousel_item').length;
            var minimumOffset_recom = - ((elementsCount_recom - 5) * pixelsOffset_recom);
            var maximumOffset_recom = 0;

                leftBtn_recom.click(function(){
                    if(currentLeftValue_recom != maximumOffset_recom) {
                        currentLeftValue_recom += pixelsOffset_recom;
                        elementsList_recom.animate({left: currentLeftValue_recom + "px"}, 500);
                    }
                });

                rightBtn_recom.click(function(){
                    if(currentLeftValue_recom != minimumOffset_recom) {
                        currentLeftValue_recom -= pixelsOffset_recom;
                        elementsList_recom.animate({left: currentLeftValue_recom + "px"}, 500);
                    }
                });
        }

        function moveCarousel_recom_mob() {
            var leftBtn_recom = $('.recommendation-box__carousel_btn-left');
            var rightBtn_recom = $('.recommendation-box__carousel_btn-right');
            var elementsList_recom = $('.recommendation-box__carousel_list');
            var currentLeftValue_recom = 0;
            var pixelsOffset_recom = $('.recommendation-box__carousel_item').width() + 26;
            var elementsCount_recom = elementsList_recom.find('.recommendation-box__carousel_item').length;
            var minimumOffset_recom = - ((elementsCount_recom - 4) * pixelsOffset_recom);
            var maximumOffset_recom = 0;

                leftBtn_recom.click(function(){
                    if(currentLeftValue_recom != maximumOffset_recom) {
                        currentLeftValue_recom += pixelsOffset_recom;
                        elementsList_recom.animate({left: currentLeftValue_recom + "px"}, 500);
                    }
                });

                rightBtn_recom.click(function(){
                    if(currentLeftValue_recom != minimumOffset_recom) {
                        currentLeftValue_recom -= pixelsOffset_recom;
                        elementsList_recom.animate({left: currentLeftValue_recom + "px"}, 500);
                    }
                });
        }

        function moveCarousel_mod() {
            var leftBtn = $('.goods-box__carousel_btn-left');
            var rightBtn = $('.goods-box__carousel_btn-right');
            var elementsList = $('.goods-box__carousel_list');
            var currentLeftValue = 0;
            var pixelsOffset = $('.goods-box__carousel_item').width() + 26;
            var elementsCount = elementsList.find('.goods-box__carousel_item').length;
            var minimumOffset = - ((elementsCount - 1) * pixelsOffset);
            var maximumOffset = 0;

                leftBtn.click(function(){
                    if(currentLeftValue != maximumOffset) {
                        currentLeftValue += pixelsOffset;
                        elementsList.animate({left: currentLeftValue + "px"}, 500);
                    }
                });

                rightBtn.click(function(){
                    if(currentLeftValue != minimumOffset) {
                        currentLeftValue -= pixelsOffset;
                        elementsList.animate({left: currentLeftValue + "px"}, 500);
                    }
                });
        }

        function moveCarousel_new_mob() {
            var leftBtn_new = $('.goods-box__carousel_btn-left-new');
            var rightBtn_new = $('.goods-box__carousel_btn-right-new');
            var elementsList_new = $('.goods-box__carousel_list-new');
            var currentLeftValue_new = 0;
            var pixelsOffset_new = $('.goods-box__carousel_item-new').width() + 26;
            var elementsCount_new = elementsList_new.find('.goods-box__carousel_item-new').length;
            var minimumOffset_new = - ((elementsCount_new - 1) * pixelsOffset_new);
            var maximumOffset_new = 0;

                leftBtn_new.click(function(){
                    if(currentLeftValue_new != maximumOffset_new) {
                        currentLeftValue_new += pixelsOffset_new;
                        elementsList_new.animate({left: currentLeftValue_new + "px"}, 500);
                    }
                });

                rightBtn_new.click(function(){
                    if(currentLeftValue_new != minimumOffset_new) {
                        currentLeftValue_new -= pixelsOffset_new;
                        elementsList_new.animate({left: currentLeftValue_new + "px"}, 500);
                    }
                });
        }

        function moveCarousel_recom_mob_small() {
            var leftBtn_recom = $('.recommendation-box__carousel_btn-left');
            var rightBtn_recom = $('.recommendation-box__carousel_btn-right');
            var elementsList_recom = $('.recommendation-box__carousel_list');
            var currentLeftValue_recom = 0;
            var pixelsOffset_recom = $('.recommendation-box__carousel_item').width() + 26;
            var elementsCount_recom = elementsList_recom.find('.recommendation-box__carousel_item').length;
            var minimumOffset_recom = - ((elementsCount_recom - 1) * pixelsOffset_recom);
            var maximumOffset_recom = 0;

                leftBtn_recom.click(function(){
                    if(currentLeftValue_recom != maximumOffset_recom) {
                        currentLeftValue_recom += pixelsOffset_recom;
                        elementsList_recom.animate({left: currentLeftValue_recom + "px"}, 500);
                    }
                });

                rightBtn_recom.click(function(){
                    if(currentLeftValue_recom != minimumOffset_recom) {
                        currentLeftValue_recom -= pixelsOffset_recom;
                        elementsList_recom.animate({left: currentLeftValue_recom + "px"}, 500);
                    }
                });
        }
        //end script

        //script for svg-image
        $('img.footer-box__footer-links_img-social').each(function(){
            var $img = $(this);
            var imgClass = $img.attr('class');
            var imgUrl = $img.attr('src');
    
                 $.get(imgUrl, function(data){
                    var $svg = $(data).find('svg');
    
                    if(typeof imgClass !== 'undefined') {
                        $svg = $svg.attr('class', imgClass + ' replaced-svg');
                    }
    
                    $svg = $svg.removeAttr('xmlns:a');
    
                    if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                        $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'));
                    }
    
                    $img.replaceWith($svg);
                 }, 'xml');
        });
        //end script

        //script for menu
        $('.header-main-area__burger').click(function(){
            $('.menu').toggleClass('menu-active');
            $('body').toggleClass('content-active');
        });
        //end script

        if($(window).width() <= 992) {
            moveCarousel_recom_mob();
        }
        
        if($(window).width() <= 320) {
            moveCarousel_mod();
            moveCarousel_new_mob();
            moveCarousel_recom_mob_small();
        }
        moveCarousel();
        moveCarousel_new();
        moveCarousel_recom();
});