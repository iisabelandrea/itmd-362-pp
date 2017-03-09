// Tell jQuery to give up the dollar sign
$.noConflict();

// jQuery 3.x-style ready event and locally scoped $
jQuery(function($) {
  $('html').removeClass('nojs');
  $('html').addClass('hasjs');
});
// adding webfontloader
    WebFont.load({
      google: {
        families:['Gill Sans', 'Gill Sans MT']
      }
    });
