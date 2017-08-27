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

	function slideshow(num) {
		var count = 0;
		var imgArr = [];
		for (var i=0; i < num; i++) {
			var slideShow = $("<img>");
			count++;
			var imgSRC = "";
			if (num <= 9) {
				imgSRC = "assets/images/gallery/0"+count+".jpg";
			}
			else {
				imgSRC = "assets/images/gallery/"+count+".jpg";
			}
			slideShow.attr("src", imgSRC);
			$(".slideshow").append(slideShow);
		}

		changeSlide(1, $(".slideshow img"));
		function changeSlide(i, items) {
		    setTimeout(
		      function() 
		      {
		          var currentItem = items.eq(i);
		          var prevItem = items.eq(i-1);
		          prevItem.css("left", -prevItem.width());
		          currentItem.css("left", 0);
		          if(i < items.length-1) {
		          	changeSlide(i+1, items);
		          }
		          else if(i === num-1) {
		          	changeSlide(i=0, $(".slideshow img"));
		          }
		      }, 8000);    
		}
	}
	slideshow(7);
});