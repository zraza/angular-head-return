angular.module('zanbeel', [])
   .directive('HeadReturn', function($compile, $window) {
      'use strict';
      return {
         restrict: 'A',
         scope: false,
         link: function(scope, element, attrs) {

            element.css({
               position: 'fixed',
               transition: attrs.transition || 'top 0.3s ease',
               top: '0'
            });

            var navbarHeight = element[0].offsetHeight;
            var windowObj = angular.element($window);

            var timer = null;
            var lastScrollTop = 0;
            var topScrollOffset = parseInt(attrs.topScrollOffset || 0);
            var scrollOffSet = parseInt(attrs.scrollOffSet || 5);
            var scrollInterval = parseInt(attrs.scrollInterval || 100);
            var lastTopValue = 0;
            var topValue = 0;

            var onScrollInterval = function() {

               var currectScrollPosition = $window.pageYOffset || $window.document.documentElement.scrollTop;

               // Make sure they scroll more than scrollOffSet
               if (Math.abs(lastScrollTop - currectScrollPosition) > scrollOffSet) {
                  var hideHeader = currectScrollPosition > lastScrollTop && currectScrollPosition > (navbarHeight + topScrollOffset);

                  //only change DOM if required
                  if ((topValue = hideHeader ? -navbarHeight + 'px' : 0) !== lastTopValue) {
                     element.css({
                        top: topValue
                     });
                  }

                  lastScrollTop = currectScrollPosition;
                  lastTopValue = topValue;
               }
            };
            var onScroll = function() {

               if (timer) {
                  $window.clearTimeout(timer);
               }
               timer = $window.setTimeout(onScrollInterval, scrollInterval);

            };
            windowObj.on('scroll', onScroll);

            // Bit of clean up
            scope.$on('$destroy', function() {
               if (timer) {
                  $window.clearTimeout(timer);
               }
               windowObj.on('scroll', onScroll);
            });
         }
      };
   });
