$(document).ready(function() {
	$(document).scrollTop(0);
	function sticky(element, offset) {
		var Element = $(element);
	  	Element.css({"top": offset});
	  $(window).scroll(function () {
	  	var topSpace = $(window).scrollTop();
	    if (topSpace > offset) {
	    	Element.css({"margin-top": -offset});
	    }
	    if (topSpace < offset) {
	    	var squeeze = topSpace * -1;
	    	console.log(squeeze);
	    	Element.css({"margin-top": squeeze});
	    }
	  });
	}
	sticky("nav", 45);
});