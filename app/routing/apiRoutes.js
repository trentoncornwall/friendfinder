// const path = require("path");
const data = require("./../data/friends.js");
module.exports = app => {
	app.get("/api/friends", (req, res) => {
		console.log(data);
	});
	app.post("/api/friends", (req, res) => {
		console.log(json(req.body));
	});
};
