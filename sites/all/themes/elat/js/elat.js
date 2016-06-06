(function($) {
Drupal.behaviors.elat = {
  attach: function (context, settings) {
    $("#methods").on('click mouseover', function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#methods-text').removeClass('hidden');
    });
    
    $("#objectives").on('click mouseover', function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#objectives-text').removeClass('hidden');
    });
    
     $("#analyze").on('click mouseover', function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#analyze-text').removeClass('hidden');
    });
    
     $("#use").on('click mouseover', function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#use-text').removeClass('hidden');
    });
    
     $("#assessment").on('click mouseover', function() {
      $('#explanatory-text').children('div').addClass('hidden');
      $('#assessment-text').removeClass('hidden');
      
    });
  }
};
})(jQuery);