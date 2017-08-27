
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
			$(".quantity .window").append(line);
			//display the menu item modal
			$(".quantity").show();
			//on click of close, run trigger function(which pushes item and quantity to an array)
			$(".quantity .close").click(function() {
				trigger();
				$(".quantity").hide();
			});
			//trigger function
			function trigger() {
				var num = $("#quantity").val(); //get quantity form's value
				parseInt(num);	//make sure it's an integer		
				var element = document.getElementById("menuItem"); 
				element.outerHTML = "";
				element.remove(); //remove any rendered menu items in menu item modal
				//if num isn't empty
				if (num !== "") {
					//run loop that's the length of the quantity number
					for (var i=0; i < num; i++) {
						bin.push(item); //push item to bin array
					}
					cart(bin); //run cart display function with bin array
				} else { //else if num is empty, return
					return;
				}
				delete item;
				delete num;
			}
		}
		//function for showing cart array count in nav bar and adding array variables to shopping cart modal
		function cart(bin) {
			$("#itemCount").html(bin.length);
			$(".lineItem").remove();
			console.log(bin);
			for (var i=0; i < bin.length; i++) {
				var item = "<div class='lineItem' data='"+i+"'>"+"Array ID: "+i+" item ID: "+bin[i].id+" item: "+bin[i].menuItem+" price: "+bin[i].price+"</div>";
				$("#shoppingCart .window").append(item);
			}
		}
	});
});
