const express = require("express");
const app = express();
const port = 3000;

app.get("./", (req, res) => {
	res.send("Server del mio blog");
});

const blogPosts = [
	{
		title: "ciambellone",
		content: "ciambellone fatto in casa",
		img: "./ciambellone.jpeg",
		tags: [""],
	},
	{
		title: "cracker di barbabietola",
		content: "cracker di barbabietola fatti in casa",
		img: "./cracker_barbabietola.jpeg",
		tags: [""],
	},
	{
		title: "pane dolce fritto",
		content: "pane dolce fritto fatto in casa",
		img: "./pane_fritto_dolce.jpeg",
		tags: [""],
	},
	{
		title: "pasta alla barbabietola",
		content: "pasta alla barbabietola fatta in casa",
		img: "./pasta_barbabietola.jpeg",
		tags: [""],
	},
	{
		title: "torta paesana",
		content: "torta paesana fatta in casa",
		img: "./torta_paesana.jpeg",
		tags: [""],
	},
];

app.get("./bacheca", (req, res) => {
	res.json();
});

app.listen(port, () => {
	console.log("example app listening on port " + port);
});
