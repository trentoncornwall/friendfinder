// const path = require("path");
const data = require("./../data/friends.js");
module.exports = app => {
	//gets all friends
	app.get("/api/friends", (req, res) => {
		console.log(data);
	});

	// post request, adds user to the data set and finds a 'friend'
	app.post("/api/friends", (req, res) => {
		const user = req.body;

		let match = null;
		let matchScoreDif = null;

		//! helper function to find the difference b/w match and user
		function findDif(friend) {
			// If no match, matches first one
			if (match === null) {
				match = friend;
			}

			// calculate difference
			let totalDif = 0;
			for (i = 0; i < user.scores.length; i++) {
				totalDif = +Math.abs(user.scores[i] - friend.scores[i]);
			}

			// if first match is match set score dif
			if (matchScoreDif === null) {
				matchScoreDif = totalDif;
			}

			//calculate if friend is a closer match
			if (matchScoreDif > totalDif) {
				match = friend;
				matchScoreDif = totalDif;
			}
		}

		//* 1st. Finds closest match in data set
		data.forEach(friend => {
			//matches, friend needs to be same gender as prefrence
			if (
				friend.gender === user.preference &&
				friend.preference === user.gender
			) {
				findDif(friend);
			}
		});

		//* 2nd, Gets added to data set
		data.push(req.body);

		//* 3rd, sends a response with the friend
		res.send(match);
	});
};
