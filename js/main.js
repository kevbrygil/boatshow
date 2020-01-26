jQuery(document).ready(function($) {

    var get_html_pic = function(file_name, description){
        return '<div class="col-lg-3 col-md-4">'+
            '<div class="portfolio-item wow fadeInUp">'+
              '<a href="'+file_name+'" class="portfolio-popup">'+
                '<img src="'+file_name+'" alt="">'+
                '<div class="portfolio-overlay">'+
                  '<div class="portfolio-info"><h2 class="wow fadeInUp">Portfolio Name</h2></div>'+
                '</div>'+
              '</a>'+
            '</div>'+
            '</div>';
    };

    gallery_files_names.map(function(file,index,ar) {
        $('#gallery').append(get_html_pic(file.url,file.description));
    });

    sponsers_files_names.map(function(file,index,ar) {
        $('#sponsers').append('<img src="'+file.url+'" alt="">');
    });

    companies_names.map(function(column,index,ar) {
        var html_company = '<div class="col-6 col-md-4"><ul>';
        column.map(function(company,index,ar) {
            html_company += '<li><i class="icon ion-ios-checkmark-outline"></i>'+company.name+'</li>';
        });
        html_company += '</ul></div>';
        $('#companies').append(html_company);
    });

    $(window).scroll(function() {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function() {
        $('html, body').animate({
            scrollTop: 0
        }, 1500, 'easeInOutExpo');
        return false;
    });

    $("#header").sticky({
        topSpacing: 0,
        zIndex: '50'
    });

    $("#intro-carousel").owlCarousel({
        autoplay: true,
        dots: false,
        loop: true,
        animateOut: 'fadeOut',
        items: 1
    });

    new WOW().init();

    $('.nav-menu').superfish({
        animation: {
            opacity: 'show'
        },
        speed: 400
    });

    if ($('#nav-menu-container').length) {
        var $mobile_nav = $('#nav-menu-container').clone().prop({
            id: 'mobile-nav'
        });
        $mobile_nav.find('> ul').attr({
            'class': '',
            'id': ''
        });
        $('body').append($mobile_nav);
        $('body').prepend('<button type="button" id="mobile-nav-toggle"><i class="fa fa-bars"></i></button>');
        $('body').append('<div id="mobile-body-overly"></div>');
        $('#mobile-nav').find('.menu-has-children').prepend('<i class="fa fa-chevron-down"></i>');

        $(document).on('click', '.menu-has-children i', function(e) {
            $(this).next().toggleClass('menu-item-active');
            $(this).nextAll('ul').eq(0).slideToggle();
            $(this).toggleClass("fa-chevron-up fa-chevron-down");
        });

        $(document).on('click', '#mobile-nav-toggle', function(e) {
            $('body').toggleClass('mobile-nav-active');
            $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
            $('#mobile-body-overly').toggle();
        });

        $(document).click(function(e) {
            var container = $("#mobile-nav, #mobile-nav-toggle");
            if (!container.is(e.target) && container.has(e.target).length === 0) {
                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
            }
        });
    } else if ($("#mobile-nav, #mobile-nav-toggle").length) {
        $("#mobile-nav, #mobile-nav-toggle").hide();
    }

    $('.nav-menu a, #mobile-nav a, .scrollto').on('click', function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            if (target.length) {
                var top_space = 0;

                if ($('#header').length) {
                    top_space = $('#header').outerHeight();

                    if (!$('#header').hasClass('header-fixed')) {
                        top_space = top_space - 20;
                    }
                }

                $('html, body').animate({
                    scrollTop: target.offset().top - top_space
                }, 1500, 'easeInOutExpo');

                if ($(this).parents('.nav-menu').length) {
                    $('.nav-menu .menu-active').removeClass('menu-active');
                    $(this).closest('li').addClass('menu-active');
                }

                if ($('body').hasClass('mobile-nav-active')) {
                    $('body').removeClass('mobile-nav-active');
                    $('#mobile-nav-toggle i').toggleClass('fa-times fa-bars');
                    $('#mobile-body-overly').fadeOut();
                }
                return false;
            }
        }
    });


    $('.portfolio-popup').magnificPopup({
        type: 'image',
        removalDelay: 300,
        mainClass: 'mfp-fade',
        gallery: {
            enabled: true
        },
        zoom: {
            enabled: true,
            duration: 300,
            easing: 'ease-in-out',
            opener: function(openerElement) {
                return openerElement.is('img') ? openerElement : openerElement.find('img');
            }
        }
    });

    $(".testimonials-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 1
            },
            768: {
                items: 2
            },
            900: {
                items: 3
            }
        }
    });

    $(".clients-carousel").owlCarousel({
        autoplay: true,
        dots: true,
        loop: true,
        responsive: {
            0: {
                items: 2
            },
            768: {
                items: 4
            },
            900: {
                items: 6
            }
        }
    });

});
