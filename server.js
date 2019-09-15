const express = require("express");
const path = require("path");
const PORT = process.env.PORT || 5000;
const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static(__dirname + "/app/public"));
require("./app/routing/htmlRoutes.js")(app);
require("./app/routing/apiRoutes.js")(app);
// starts server and listens for connection
app.listen(PORT, () => {
	console.log(`Listening on port ${PORT}`);
});
