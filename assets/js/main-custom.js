(function($) {
    "use strict";
    var control = {
        initialised: false,
        version: 1.0,
        init: function() {
            if (!this.initialised) {
                this.initialised = true;
            } else {
                return;
            }
            /*-----------------------------------------------------
            	Function Calling
            -----------------------------------------------------*/
            this.searchBox();
            this.niceSlection();
            this.swiperSLiders();
            this.navMenu();
            this.siteLoader();
            this.bookingForm();

        },
        /*-----------------------------------------------------
        	Fix Search Bar
        -----------------------------------------------------*/
        searchBox: function() {
            $('.search-btn').on("click", function() {
                $('.search-box').addClass('show');
            });
            $('.close-btn').on("click", function() {
                $('.search-box').removeClass('show');
            });
            $('.search-box').on("click", function() {
                $('.search-box').removeClass('show');
            });
            $(".search-bar-inner").on('click', function(e) {
                e.stopPropagation();
            });
        },

        /*-----------------------------------------------------
        	Nice Select
        -----------------------------------------------------*/
        niceSlection: function() {
            if ($('.nice-selection').length > 0) {
                $(document).ready(function() {
                    $('.nice-selection').niceSelect();
                });
            }
        },

        /*-----------------------------------------------------
        	Home Banner Slider
        -----------------------------------------------------*/
        swiperSLiders: function() {

            // Team slider
            $(document).ready(function() {
                new Swiper('.team-slider', {
                    pagination: {
                        el: '.pagination-team-swiper',
                        clickable: true,
                    },
                    paginationClickable: false,
                    direction: 'horizontal',
                    spaceBetween: 30,
                    nested: true,
                    slidesPerView: 4,
                    allowTouchMove: true,
                    breakpoints: {
                        0: {
                            slidesPerView: 1,
                        },
                        575: {
                            slidesPerView: 2,
                        },
                        767: {
                            slidesPerView: 2,
                        },
                        992: {
                            slidesPerView: 3,
                        },
                        1200: {
                            slidesPerView: 4,
                        },
                        1400: {
                            slidesPerView: 4,
                        },
                    },
                });
            });
        },

        /*-----------------------------------------------------
        	Fix Mobile Menu 
        -----------------------------------------------------*/
        navMenu: function() {
            /* Menu Toggle */
            $(".menu-btn").on('click', function(event) {
                $(".main-menu, .menu-btn").toggleClass("open-menu");
            });
            $("body").on('click', function() {
                $(".main-menu, .menu-btn").removeClass("open-menu");
            });
            $(".menu-btn, .main-menu").on('click', function(event) {
                event.stopPropagation();
            });

        },

        /*-----------------------------------------------------
                Site Loader Js
        -----------------------------------------------------*/
        siteLoader: function() {
            jQuery(window).on("load", function() {
                var preLoader = $('.cat-preloader');
                preLoader.fadeToggle(500).fadeOut("slow");
            });

            /*-----------------------------------------------------
                Event Filter js
            -----------------------------------------------------*/
            $(function() {
                $('.cat-filter').mixItUp();
            });

            $('.popup-gallery').magnificPopup({
                type: 'image',
                gallery: {
                    enabled: true
                }
            });

        },


        /*-----------------------------------------------------
                Booking Form Submition
        -----------------------------------------------------*/

        bookingForm: function() {
            $('#bookingConfirm').on('click', function() {
                var cdate = $('#cus_date').val();
                var cevent = $('#cus_event').val();
                var cppl = $('#cus_ppl').val();
                var carea = $('#cus_area').val();
                var cname = $('#cus_name').val();
                var cnum = $('#cus_num').val();
                var cemail = $('#cus_email').val();
                var cename = $('#cus_event_name').val();
                var cnote = $('#cus_note').val();
                console.log(cdate + ' ' + cevent + ' ' + cppl + ' ' + carea + ' ' + cname + ' ' + cnum + ' ' + cemail + ' ' + cename + ' ' + cnote);
                $.ajax({
                    type: "POST",
                    url: "informative_booking.php",
                    data: {
                        'username': cname,
                        'userdate': cdate,
                        'usernum': cnum,
                        'uevent': cevent,
                        'uarea': carea,
                        'uemail': cemail,
                        'uppl': cppl,
                        'eventName': cename,
                        'note': cnote,
                    },
                    success: function(msg) {
                        console.log(msg);
                        var full_msg = msg.split("#");
                        if (full_msg[0] == '1') {
                            $('#cus_date').val("");
                            $('#cus_event').val("");
                            $('#cus_ppl').val("");
                            $('#cus_area').val("");
                            $('#cus_name').val("");
                            $('#cus_num').val("");
                            $('#cus_email').val("");
                            $('#cus_event_name').val("");
                            $('#cus_note').val("");
                            $('#err3').html(full_msg[1]);
                        } else {
                            $('#cus_date').val(cdate);
                            $('#cus_event').val(cevent);
                            $('#cus_ppl').val(cppl);
                            $('#cus_name').val(cname);
                            $('#cus_num').val(cnum);
                            $('#cus_email').val(cemail);
                            $('#cus_event_name').val(cename);
                            $('#cus_note').val(cnote);
                            $('#err3').html(full_msg[1]);
                        }
                    }
                });
            });
        },



    };

    control.init();

})(jQuery);