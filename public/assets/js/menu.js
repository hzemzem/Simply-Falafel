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

// var cart = localStorage.getItem("cart");
// cart = JSON.parse(cart);
// console.log("cart: "+cart);
	//function for getting json array of menu items
	$.getJSON("/menuItem", function(results) {
		var bin = [];
		// if (!bin) {
		// 	if (cart === null) {
		// 		var bin = []; //create global bin array variable
		// 	} else {
		// 		var bin = [];
		// 		Array.prototype.push.apply(bin, cart);
		// 		console.log("bin: "+bin);
		// 	}
		// }
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
			var select = '<select name="quantity" id="quantity">'+
				'<option value=""></option>'+
				'<option value="1">1</option>'+
				'<option value="2">2</option>'+
				'<option value="3">3</option>'+
				'<option value="4">4</option>'+
				'<option value="5">5</option>'+
				'<option value="6">6</option>'+
				'<option value="7">7</option>'+
				'<option value="8">8</option>'+
				'</select>';

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
					// localStorage.setItem("cart", JSON.stringify(bin));
					cart(bin); //run cart display function with bin array
				} else { //else if num is empty, return
					return;
					cart(bin);
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
			if (bin.length === 1) {
				$("#shoppingCart .window .form").attr("action", "/SingleItem")
				var item = "<div class='lineItem' data='"+i+"'><input type='hidden' type='text' name='menuItem' value='"+bin[0].menuItem+"'><input type='hidden' type='text' name='price' value='"+bin[0].price+"'><span class='menuItem'>"+bin[0].menuItem+"</span><span class='specialRequest'>Special Request: <input type='text' name='specialRequest'></span><span class='price'> price: "+bin[0].price+"</span><span class='remove'><i class='fa fa-trash' aria-hidden='true' style='font-size: 20px;'></i></span></div>";
				$("#shoppingCart .window .form").prepend(item);
			} else {
				$("#shoppingCart .window .form").attr("action", "/ShoppingCart")
				for (var i=0; i < bin.length; i++) {
					var item = "<div class='lineItem' data='"+i+"'>"+
						"<input type='hidden' type='text' name='menuItem' value='"+bin[i].menuItem+"'>"+
						"<input type='hidden' type='text' name='price' value='"+bin[i].price+"'>"+
						"<span class='menuItem'>"+bin[i].menuItem+"</span>"+
						"<span class='specialRequest'>Special Request: <input type='text' name='specialRequest' id ='special"+i+"'></span>"+
						"<span class='price'> price: "+bin[i].price+"</span>"+
						"<span class='remove'><i class='fa fa-trash' aria-hidden='true' style='font-size: 20px;'></i></span>"+
						"</div>";
						
					$("#shoppingCart .window .form").prepend(item);
				}
			}
			$(".remove").on("click", function() {
				var removeItem = $(this).parent($(".lineItem"));
				var binItem = removeItem.attr("data");
				bin.splice(binItem,1);
				$("#itemCount").html(bin.length);
				calc(bin);
				console.log(bin);
				removeItem.remove();
			});
			// calculates order price
			function calc(bin) {
				var subTotal = parseFloat(0);
				for (var z=0; z < bin.length; z++) {
					subTotal += parseFloat(bin[z].price);
				}
				subTotal = Math.round(subTotal * 100) / 100;
				Total = (subTotal * .08) + subTotal;
				// Total.toFixed(2);
				Total = Math.round(Total * 100) / 100;
				$(".subTotal span").html(subTotal);
				$(".total span").html(Total);
				console.log("subTotal: "+subTotal+" Total: "+Total);

			}
			calc(bin);
			function checkout(bin) {
				var specialArr = [];
				var specialItems = $(".specialRequest");
				for (var w = 0; w < specialItems.length; w++) {
					var specialItem = $(".specialRequest #special"+w).val();
					specialArr.push(specialItem);
				}
				console.log(specialArr);				
				$(".checkout .itemCheckout .checkoutItem").remove();
				for (var z=0; z < bin.length; z++) {
					
					if (specialArr[z] === undefined) specialArr[z] = "No special request";
					var checkoutLine = "<div class='checkoutItem'>"+bin[z].menuItem+"<span class='request'>"+specialArr[z]+"</span><span class='price'>"+bin[z].price+"</span></div><div class='clear'></div>"
					$(".checkout .itemCheckout").append(checkoutLine);
				}
			}
			$("#shoppingCart button").on("click", function() {
				checkout(bin);
				$(".checkout").show();
				$("#shoppingCart").hide();
			});

		}
	});

	//click function to close out the order confirmation
	$("#orderCnfBTN").on("click", function(){
		//ajax calls to transfer data from shopping cart to order history
		$.ajax({
			url: "/menu",
			method: "DELETE",
		}).done(function() {
			console.log("Order Complete");
			window.close();
		});
	});
});