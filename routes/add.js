var data = require("../data.json");

exports.addFriend = function(request, response) { 
	// Your code goes here
  response.render('index', data);

	var name = request.query.name;
	var description = request.query.description;

	var newFriend = {
		"name" : name,
		"description" : description,
		"imageURL" : "http://lorempixel.com/400/400/people"
	};
	console.log(newFriend);

	data.friends.push(newFriend);
 }
