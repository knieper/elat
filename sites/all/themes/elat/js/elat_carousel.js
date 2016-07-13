(function($) {
Drupal.behaviors.elatCarousel = {
  attach: function (context, settings) {
  $('#showcaseBrowse').carousel({
      interval: false
    })

	$('.carousel .item').each(function(){
  		var next = $(this).next();
      //if at the end of the list then the next one is the first item in the list
  		if (!next.length) {
    		next = $(this).siblings(':first');
  		}
        next.children(':first-child').clone().addClass('hidden-xs').appendTo($(this));
        if (next.next().length>0) {
    		 next.next().children(':first-child').clone().addClass('hidden-sm hidden-xs').appendTo($(this));
 		     }
  		   else {
  			    $(this).siblings(':first').children(':first-child').clone().addClass('hidden-sm hidden-xs').appendTo($(this));
  		  }
      });
  }}
})(jQuery);
