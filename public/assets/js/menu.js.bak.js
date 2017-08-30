
$(document).ready(function() {
	//click function for bringing up sign in modal
	$("#signInBTN").on("click", function() {
		$(".signIn").show();
		$(".signIn .close").on("click", function() {
			$(".signIn").hide();
		})
	});
	//click function for bringing up shopping cart modal
	$("#cart").on("click", function() {
		$("#shoppingCart").show();
		$("#shoppingCart .close").on("click", function() {
			$("#shoppingCart").hide();
		})
	});

	//function for getting json array of menu items
	$.getJSON("/menuItem", function(results) {
		var bin = []; //create global bin array variable
		var item; //set global item variable
		//set click function for menu price and quantity confirmation
		$(".menuPrice").click(function(e) {
			e.preventDefault();
			var id = $(this).attr("data-ID"); //get id from menu item ID that was set in data-ID attribute
			console.log(id);
			popUp(id); //pass id to popUp function
		});
		//popup function for displaying and creating menuItem array
		function popUp(id) {
			//set item object with results object that matches the same id
			for (var i=0; i < results.length; i++) {
				if (parseInt(results[i].id) === parseInt(id)) item = results[i]
			}
			console.log(item.menuItem);
			//create a div with menu item and quantity option
			var select = '<select name="quantity" id="quantity"><option value=""></option><option value="1">1</option><option value="2">2</option><option value="3">3</option><option value="4">4</option><option value="5">5</option><option value="6">6</option><option value="7">7</option><option value="8">8</option></select>'
			var line = "<div id='menuItem'>"+item.menuItem+"..........."+select+"</div>";
			var num = $("#quantity").val(); //get quantity form's value
			parseInt(num);	//make sure it's an integer	
			$(".quantity .window").append(line);
			//display the menu item modal
			$(".quantity").show();
			//on click of close, run trigger function(which pushes item and quantity to an array)
			$(".quantity .close").click(function() {
	
				var element = document.getElementById("menuItem"); 
				element.outerHTML = "";
				element.remove(); //remove any rendered menu items in menu item modal
				//if num isn't empty
				if (num !== "") {
					//run loop that's the length of the quantity number
					for (var i=0; i < num; i++) {

						bin.push(item); //push item to bin array
					}
					$("#itemCount").html(bin.length);
					$(".lineItem").remove();
					console.log("Bin: "+bin);
					for (var i=0; i < bin.length; i++) {
						console.log(bin[i].id);
						var item = "<input type='hidden' type='text' name='menuItem' value='"+bin[i].menuItem+"'><input type='hidden' type='text' name='price' value='"+bin[i].price+"'><div class='lineItem' data='"+i+"'><span class='menuItem'>Item: "+bin[i].menuItem+"</span><form class='specialRequest' action='/shoppingCart?_method=PUT' method=POST>Special Request: <input type='text'></form><span class='price'> price: "+bin[i].price+"</span><button class='remove'></button><i class='fa fa-trash' aria-hidden='true'></i></div>";
						$("#shoppingCart .window .form").append(item);
					}
					// cart(bin); //run cart display function with bin array
				} else { //else if num is empty, return
					return;
				}
				delete item;
				delete num;
				$(".quantity").hide();
			});
			//trigger function
			function trigger() {

			}
		}
		//function for showing cart array count in nav bar and adding array variables to shopping cart modal
		function cart(bin) {

		}
	});
});
