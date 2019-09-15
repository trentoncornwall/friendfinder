const path = require("path");
const express = require("express");

module.exports = app => {
	app.get("/", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/home.html"));
	});
	app.get("/find", (req, res) => {
		res.sendFile(path.join(__dirname, "../public/survey.html"));
	});
};
