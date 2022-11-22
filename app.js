//import express
const express = require("express");
const userRoutes = require("./routes/users.js");

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/users", userRoutes);

app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});
