
$(document).ready(function() {
		$("#signInBTN").on("click", function() {
			$(".signIn").show();
			$(".signIn .close").on("click", function() {
				$(".signIn").hide();
			})
		});
		$("#cart").on("click", function() {
			$("#shoppingCart").show();
			$("#shoppingCart .close").on("click", function() {
				$("#shoppingCart").hide();
			})
		});
	$.getJSON("/menuItem", function(results) {
		var bin = [];
		var item;
		$(".menuPrice").click(function(e) {
			e.preventDefault();
			var id = $(this).attr("data-ID");
			console.log(id);
			popUp(id);
		});
		function popUp(id) {
			for (var i=0; i < results.length; i++) {
				if (parseInt(results[i].id) === parseInt(id)) item = results[i]
			}
			console.log(item.menuItem);
			var select = '<select name="quantity" id="quantity"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>'
			var line = "<div id='menuItem'>"+item.menuItem+"..........."+select+"</div>";
			$(".quantity .window").append(line);
			$(".quantity").show();
			$(".quantity .close").click(function() {
				trigger();
				$(".quantity").hide();
			});
			function trigger() {
				var num = $("#quantity").val();
				parseInt(num);				
				var element = document.getElementById("menuItem");
				element.outerHTML = "";
				element.remove();
				if (num !== "") {
					for (var i=0; i < num; i++) {
						bin.push(item);
					}
					cart(bin);
				} else {
					return;
				}
				delete item;
				delete num;
			}
		}
		function cart(bin) {
			$("#itemCount").html(bin.length);
			$(".lineItem").remove();
			console.log(bin);
			for (var i=0; i < bin.length; i++) {
				var item = "<div class='lineItem'>"+bin[i].id+" | "+bin[i].menuItem+" | "+bin[i].price+"</div>";
				$("#shoppingCart .window").append(item);
			}
		}
	});
});
