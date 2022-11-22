//import express
import express from "express";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});
