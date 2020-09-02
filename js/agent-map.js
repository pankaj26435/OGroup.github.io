(function ($) {

    var app = {

        meetTheTeam: function () {
            var _this = this;

            if (!$('body').hasClass('home')) {
                return false;
            }

            this.newAgentsMap = function () {

                var map = $("#new-agents-map #map");
                var mapOrigWidth = 1600;
                var mapOrigHeight = 840;
                var container = $("#new-agents-map");
                var containerWidth = container.width();
                var scale = containerWidth / mapOrigWidth;
                scale = scale > 1 ? scale : scale;

                map.css({
                    transform: 'scale(' + scale + ')',
                    transformOrigin: '0 0'
                });

                container.css({
                    height: (mapOrigHeight * scale),
                });
            }

            this.newAgentsMapHover = function () {
                var $target = $('#new-agents-map #map map area');
                
                $(document).mouseup(function (e) {
                    if (!$target.is(e.target) && $target.has(e.target).length === 0) {
                        $target.removeClass('active');
                        $('.new-agents-map .new-agents-map-hover-details > div').removeClass('active');
                    }
                });
                
                $('#new-agents-map #map map area').hover(function () {
                    var $this = $(this),
                        mapHover = $this.data('map-hover'),
                        mapHoverDetails = $this.data('map-hover-details'),
                        windowWidth = window.outerWidth;

                    $('#' + mapHover).css("opacity", 1);
                    if ($('html').hasClass('mobile')) {
                        return false;
                    }

                    $('#' + mapHoverDetails).addClass('active');
                }, function () {
                    var $this = $(this),
                        mapHover = $this.data('map-hover'),
                        mapHoverDetails = $this.data('map-hover-details');

                    $('#' + mapHover).css("opacity", 0);
                    if ($('html').hasClass('mobile')) {
                        return false;
                    }

                    $('#' + mapHoverDetails).removeClass('active');
                });

                $('.new-agents-map-hover-details > div').hover(function () {
                    var $this = $(this),
                        $area = $('#new-agents-map #map map area[data-map-hover-details="' + $this.attr('id') + '"]'),
                        mapHover = $area.data('map-hover'),
                        mapHoverDetails = $this.attr('id');

                    $('#' + mapHover).css("opacity", 1);
                    $('#' + mapHoverDetails).addClass('active');
                }, function () {
                    var $this = $(this),
                        $area = $('#new-agents-map #map map area[data-map-hover-details="' + $this.attr('id') + '"]'),
                        mapHover = $area.data('map-hover'),
                        mapHoverDetails = $this.attr('id');

                    $('#' + mapHover).css("opacity", 0);
                    $('#' + mapHoverDetails).removeClass('active');
                });
            }

            this.init = function () {
                _this.newAgentsMap();
                $(window).on('load resize orientationchange', function () {
                    _this.newAgentsMap();
                });
                _this.newAgentsMapHover();
            }

            this.init();
        }, //meetTheTeam ends here     

        // Slider Down Arrow
        HomepageSlideDownArrow: function () {

            var $body = $('body');

            // if ($body.hasClass('ip-container')) {
            //     return false;
            // }

            $('.slider-down-arrow span').on('click', function (e) {
                e.preventDefault();

                var currentWindowSize = $(window).width(),
                    target = $('.section-fl').offset().top - $('.fixed-header').outerHeight();
                $('html, body').animate({
                    scrollTop: target,
                }, 1000);
            });
        },// Slider Down Arrow ends here

        ourTeamPage: function () {
            var $ourTeamPage = $('.ourteam');

            if ($ourTeamPage.length == 0) {
                return false;
            }

            $(window).on('load resize orientationchange', function () {
                var $ourTeamContent = $('.ourteam-content'),
                    $ourTeamPhoto = $('.ourteam-photo'),
                    $ourTeamTitle = $('.ourteam-content .site-section-title');

                $ourTeamContent.height($ourTeamPhoto.height() + 36);
                $ourTeamTitle.css('top', ((0.20) * ($ourTeamPhoto.height() + 36)) + 'px');
                console.log(((0.20) * ($ourTeamPhoto.height() - 36)));
            });
        },      //ourTeamPage ends here
        
        
        init: function () {
            /* Initialize Meet The Team */
            this.meetTheTeam();
            /* Initialize Homepage Slideshow */
            this.HomepageSlideDownArrow();
             /* Initialize Our Team Page */
            this.ourTeamPage();            
        },
    }
    $(document).ready(function () {
        /* Initialize All app functions */
        app.init();
    });

})(jQuery);