// import express
// const Express = pkg;
// import pkg from "express";
import express from "express";
import router from "./routes/users.js";

//import cors to allow front end to fetch data from backend without getting blocked
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

app.use("/users", router);

//tell the app to use cors
app.use(cors());

app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});

export default app;
