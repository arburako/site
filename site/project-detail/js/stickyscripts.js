/*!
 * stickyNavbar.js v1.0.0
 * https://github.com/jbutko/stickyNavbar
 * Fancy sticky navigation jQuery plugin with smart anchor links highlighting
 *
 * Developed and maintenained under MIT licence by Jozef Butko - www.jozefbutko.com
 *
 * Original jquery-browser code Copyright 2005, 2013 jQuery Foundation, Inc. and other contributors
 * http://jquery.org/license
 *
 * Licensed under the MIT license:
 * http://www.opensource.org/licenses/MIT
 *
 * CREDITS:
 * Daniel Eden for Animate.CSS
 * http://daneden.github.io/animate.css/
 *
 * COPYRIGHT (C) 2014 Jozef Butko
 * https://github.com/jbutko
 */
/* The semi-colon before function invocation is a safety net against concatenated
   scripts and/or other plugins which may not be closed properly. */
;(function ($, window, document) {

  'use strict';

  $.fn.stickyNavbar = function (prop) {

    // Set default values
    var options = $.extend({
      activeClass: "active", // Class to be added to highlight nav elements
      sectionSelector: "scrollto", // Class of the section that is interconnected with nav links
      navOffset: 0, // Offset from the default position of this() (nav container)
      animDuration: 550, // Duration of jQuery animation
      startAt: 0, // Stick the menu at XXXpx from the top of the this() (nav container)
      easing: "swing", // Easing type if jqueryEffects = true, use jQuery Easing plugin to extend easing types - gsgd.co.uk/sandbox/jquery/easing
      animateCSS: true, // AnimateCSS effect on/off
      animateCSSRepeat: false, // Repeat animation everytime user scrolls
      bottomAnimation: false, // CSS animation on/off in case we hit the bottom of the page
      cssAnimation: "fadeInDown", // AnimateCSS class that will be added to selector
      jqueryEffects: true, // jQuery animation on/off
      jqueryAnim: "slideDown", // jQuery animation type: fadeIn, show or slideDown
      selector: "a", // Selector to which activeClass will be added, either "a" or "li"
      mobile: false // If false nav will not stick under 496px width of window
    }, prop),
      section = $('.' + options.sectionSelector);


    return this.each(function () {

      /* Cache variables */
      var $self = $(this),
        $selfPosition = $self.css("position"), // Initial position of this,
        $selfZindex = $self.css("zIndex"), // Z-index of this
        $selfScrollTop = $self.offset().top, // scrollTop position of this
        $topOffset = $self.css("top") === 'auto' ? 0 : $self.css("top"), // Top property of this: if not set = 0
        menuItems = options.selector === "a" ? $self.find('li a') : $self.find('li'), // Navigation lists or links
        menuItemsHref = $self.find('li a[href*=#]'), // href attributes of navigation links
        thisHeight = $self.outerHeight(true); // Height of navigation wrapper

      /* Smooth scrolling to the desired section: get clicked href attribute, measure offset from top and then animate  */
      menuItemsHref.click(function () {
        $('html, body').animate({
          scrollTop: $($.attr(this, 'href')).offset().top - options.navOffset - thisHeight + 2
        }, options.animDuration, options.easing);
        return false;
      });


      $(window).scroll(function () {

        /* Cache window and window position from the top */
        var win = $(window),
          windowPosition = win.scrollTop(),
          windowWidth = win.outerWidth(true);

        /* Everytime we scroll remove the activeClass. Later on we add it if needed. */
        menuItems.removeClass(options.activeClass);

        /* Add activeClass to the div that is passing the top of the window */
        section.each(function () {
          var top = $(this).offset().top - thisHeight,
            bottom = $(this).outerHeight(true) + top;

          if ((windowPosition >= top) && (windowPosition <= bottom)) {
            if (options.selector === "a") {
              $self.find('li a[href~="#' + this.id + '"]').addClass(options.activeClass);
            } else {
              $self.find('li a[href~="#' + this.id + '"]').parent().addClass(options.activeClass);
            }
          }
        });


        /* 1.) As soon as we start scrolling */
        if (windowPosition >= $selfScrollTop + options.startAt) {

          /* As soons as scrolling starts set position of this() to fixed */
          $self.css({
            'position': 'fixed',
            "zIndex": 9999 //'top': options.navOffset
          }).stop().animate({
            top: options.navOffset
          }, options.animDuration, options.easing);
          
          if (!options.mobile && windowWidth < 480) {
            $self.css('position', $selfPosition);
          }
          
          /* If jQuery effects are turned on */
          if (options.jqueryEffects) {
            if (!options.animateCSSRepeat) {
              $self.hide().stop()[options.jqueryAnim](options.animDuration, options.easing);
            }
            $self.hide().stop()[options.jqueryAnim](options.animDuration, options.easing);

            /* If animateCSS are turned on */
          } else if (options.animateCSS) {

            /* If animateCSSRepeat == true animation will repeat on each scroll  */
            if (options.animateCSSRepeat && options.bottomAnimation) {
              $self.removeClass(options.cssAnimation + ' animated');
            }

            /* Restart the animation */
            setTimeout(function () {
              $self.stop().addClass(options.cssAnimation + ' animated');
            }, 1);

            /* Else if jQuery and animateCSS are turned off */
          } else {
            $self.stop().animate({
              top: options.navOffset
            }, options.animDuration, options.easing); /* Pin navigation to the top */
          }

          /* If top of the window is over this() (nav container) */
        } else {
          $self.css({
            'position': options.$selfPosition,
            "zIndex": $selfZindex
          });
        }


        /* 2.) As soon as we hit the bottom of the page */
        if (win.scrollTop() + win.height() >= $(document).height()) {

          /* To restart bottom animation remove animation classes at first */
          $self.removeClass(options.cssAnimation + ' animated');

          /* Remove activeClass from menuItem before the last and add activeClass to the lastests one */
          menuItems.removeClass(options.activeClass).last().addClass(options.activeClass);

          /* If CSS bottom animation is turned on animate this() as soon as we hit bottom of the page */
          if (options.bottomAnimation) {

            /* Remove the animateCSS class */
            $self.removeClass(options.cssAnimation + ' animated');

            /* Restart the animation */
            setTimeout(function () {
              $self.addClass(options.cssAnimation + ' animated');
            }, 1);
          }
        }

        /* 3.) As soon as we get back to the top of the page */
        /* If top of the window is over this() (nav container) */
        if (windowPosition <= $selfScrollTop) {
          $self.removeClass(options.cssAnimation + ' animated');

          /* If jQuery effects are turned on */
          if (options.jqueryEffects) {

            /* If we are at the very top of the page remove active class */
            /* If we are the top of the page */
            if (windowPosition === 0) {
              menuItems.removeClass(options.activeClass);
            }

            /* If the top of the window is under the this() stick the nav and start the animation */
            if (windowPosition >= $selfScrollTop) {
              $self.css({
                'position': 'fixed',
                "zIndex": 9999,
                'top': options.navOffset
              }).hide().stop()[options.jqueryAnim](options.animDuration, options.easing);
            } else {
              $self.css({
                'position': $selfPosition,
                "zIndex": 9999,
                'top': options.navOffset
              });
            }

            /* If jQuery effects are turned off */
          } else {

            /* If we are at the very top of the page remove active class */
            if (windowPosition === 0) {
              menuItems.removeClass(options.activeClass);
            }

            /* Set initial position of this() and initial CSS top property */
            $self.css({
              'position': $selfPosition,
              'top': $topOffset
            }).stop().animate({
              top: $topOffset
            }, options.animDuration, options.easing);
          }
        } // ( windowPosition <= $selfScrollTop ) end

      }); // scroll fn end
    }); // return this.each end
  }; // $.fn.stickyNavbar end
})(jQuery, window, document); // document ready end

$(function () {
  
  $('.header').stickyNavbar({
    activeClass: "active",
    sectionSelector: "scrollto",
    navOffset: 0,
    animDuration: 300,
    startAt: 0, // Stick the menu at XXXpx from the top
    easing: "easeInQuad",
    bottomAnimation: true,
    jqueryEffects: false,
    animateCSS: true,
    animateCSSRepeat: false,
    selector: "a",
    jqueryAnim: "fadeInDown" // jQuery effects: fadeIn, show, slideDown
  });
});

/*! WOW - v0.1.5 - 2014-03-05
* Copyright (c) 2014 Matthieu Aussaguel; Licensed MIT */(function(){var a,b=function(a,b){return function(){return a.apply(b,arguments)}};a=function(){function a(){}return a.prototype.extend=function(a,b){var c,d;for(c in a)d=a[c],null!=d&&(b[c]=d);return b},a.prototype.isMobile=function(a){return/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)},a}(),this.WOW=function(){function c(a){null==a&&(a={}),this.scrollCallback=b(this.scrollCallback,this),this.scrollHandler=b(this.scrollHandler,this),this.start=b(this.start,this),this.scrolled=!0,this.config=this.util().extend(a,this.defaults)}return c.prototype.defaults={boxClass:"wow",animateClass:"animated",offset:0,mobile:!0},c.prototype.init=function(){var a;return this.element=window.document.documentElement,"interactive"===(a=document.readyState)||"complete"===a?this.start():document.addEventListener("DOMContentLoaded",this.start)},c.prototype.start=function(){var a,b,c,d;if(this.boxes=this.element.getElementsByClassName(this.config.boxClass),this.boxes.length){if(this.disabled())return this.resetStyle();for(d=this.boxes,b=0,c=d.length;c>b;b++)a=d[b],this.applyStyle(a,!0);return window.addEventListener("scroll",this.scrollHandler,!1),window.addEventListener("resize",this.scrollHandler,!1),this.interval=setInterval(this.scrollCallback,50)}},c.prototype.stop=function(){return window.removeEventListener("scroll",this.scrollHandler,!1),window.removeEventListener("resize",this.scrollHandler,!1),null!=this.interval?clearInterval(this.interval):void 0},c.prototype.show=function(a){return this.applyStyle(a),a.className=""+a.className+" "+this.config.animateClass},c.prototype.applyStyle=function(a,b){var c,d,e;return d=a.getAttribute("data-wow-duration"),c=a.getAttribute("data-wow-delay"),e=a.getAttribute("data-wow-iteration"),a.setAttribute("style",this.customStyle(b,d,c,e))},c.prototype.resetStyle=function(){var a,b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],e.push(a.setAttribute("style","visibility: visible;"));return e},c.prototype.customStyle=function(a,b,c,d){var e;return e=a?"visibility: hidden; -webkit-animation-name: none; -moz-animation-name: none; animation-name: none;":"visibility: visible;",b&&(e+="-webkit-animation-duration: "+b+"; -moz-animation-duration: "+b+"; animation-duration: "+b+";"),c&&(e+="-webkit-animation-delay: "+c+"; -moz-animation-delay: "+c+"; animation-delay: "+c+";"),d&&(e+="-webkit-animation-iteration-count: "+d+"; -moz-animation-iteration-count: "+d+"; animation-iteration-count: "+d+";"),e},c.prototype.scrollHandler=function(){return this.scrolled=!0},c.prototype.scrollCallback=function(){var a;return this.scrolled&&(this.scrolled=!1,this.boxes=function(){var b,c,d,e;for(d=this.boxes,e=[],b=0,c=d.length;c>b;b++)a=d[b],a&&(this.isVisible(a)?this.show(a):e.push(a));return e}.call(this),!this.boxes.length)?this.stop():void 0},c.prototype.offsetTop=function(a){var b;for(b=a.offsetTop;a=a.offsetParent;)b+=a.offsetTop;return b},c.prototype.isVisible=function(a){var b,c,d,e,f;return c=a.getAttribute("data-wow-offset")||this.config.offset,f=window.pageYOffset,e=f+this.element.clientHeight-c,d=this.offsetTop(a),b=d+a.clientHeight,e>=d&&b>=f},c.prototype.util=function(){return this._util||(this._util=new a)},c.prototype.disabled=function(){return!this.config.mobile&&this.util().isMobile(navigator.userAgent)},c}()}).call(this);

new WOW().init();

