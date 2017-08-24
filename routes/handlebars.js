Handlebars.registerHelper('category', function(meal)) {
	for (var i=0; i < {{response}}.length; i++) {
		if ({{response}}[i].category === "Meal") {
			meal.fn({{response}})
		}
	}
});