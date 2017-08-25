Handlebars = require('handlebars');

function render(meals, array) {
	console.log("meals: "+meals)
	for (var i =0; i < meals.length; i++) {
		var line = "\t\t\t\t<div class='mealItem'>"+meals[i].menuItem+"<span class='style'>"+meals[i].style+"</span> "+meals[i].price+"</div>\n\t\t\t\t<div class='shopPop'><input type='checkbox' value='"+meals[i].id+"'></div>\n";
		array.push(line)
	}	
}

Handlebars.registerHelper('meal', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Meal';

	});
	render(meals, array);
	return array.join("");
});
Handlebars.registerHelper('kids', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Kids';

	});
	render(meals, array);
	return array.join("");
});
Handlebars.registerHelper('vegan', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Vegan';

	});
	render(meals, array);
	return array.join("");
});
Handlebars.registerHelper('drink', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Drink';

	});
	render(meals, array);
	return array.join("");
});
Handlebars.registerHelper('salad', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Salad';

	});
	render(meals, array);
	return array.join("");
});