(function($) {
Drupal.behaviors.elat = {
  attach: function (context, settings) {

    //code starts
    $("#methods").click(function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#methods-text').removeClass('hidden');
    });
    
    $("#objectives").click(function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#objectives-text').removeClass('hidden');
    });
    
     $("#analyze").click(function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#analyze-text').removeClass('hidden');
    });
    
     $("#use").click(function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#use-text').removeClass('hidden');
    });
    
     $("#assessment").click(function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#assessment-text').removeClass('hidden');
    });
  }
};
})(jQuery);