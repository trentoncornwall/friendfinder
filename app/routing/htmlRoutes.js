const path = require("path");

module.exports = app => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "./../public/home.html"));
		console.log(__dirname, "home");
	});
	app.get("/find", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
	app.get("/script", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/script.js"));
	});
};
