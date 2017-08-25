Handlebars = require('handlebars');

function renderMeals(meals, array) {
	for (var i =0; i < meals.length; i++) {
		var line = "\t\t\t\t<div class='mealItem'>"+meals[i].menuItem+"<span class='style'>"+meals[i].style+"</span><button class='menuPrice' data-ID='"+meals[i].id+"'>"+meals[i].price+"</button></div>\n";
		array.push(line)
	}	
}

function renderItems(meals, array) {
	for (var i =0; i < meals.length; i++) {
		var line = "\t\t\t\t<div class='mealItem'>"+meals[i].menuItem+"<button class='menuPrice' data-ID='"+meals[i].id+"'>"+meals[i].price+"</button></div>\n";
		array.push(line)
	}	
}

Handlebars.registerHelper('meal', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Meal';

	});
	renderMeals(meals, array);
	return array.join("");
});
Handlebars.registerHelper('kids', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Kids';

	});
	renderItems(meals, array);
	return array.join("");
});
Handlebars.registerHelper('vegan', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Vegan';

	});
	renderMeals(meals, array);
	return array.join("");
});
Handlebars.registerHelper('drink', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Drink';

	});
	renderItems(meals, array);
	return array.join("");
});
Handlebars.registerHelper('salad', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Salad';

	});
	renderItems(meals, array);
	return array.join("");
});
Handlebars.registerHelper('side', function(response) {
	var array = [];
	var meals = response.filter(function(m) {
		return m.category === 'Side';

	});
	renderItems(meals, array);
	return array.join("");
});