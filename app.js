// import express
// const Express = pkg;
// import pkg from "express";
import express from "express";
import router from "./routes/users.js";
import tableRouter from './routes/tables.js';

//import cors to allow front end to fetch data from backend without getting blocked
import cors from "cors";

const app = express();
const PORT = process.env.PORT;

app.use(express.json());

//tell the app to use cors on the local host where react is running
//cors checks if the frontend has permission to communicate with the backend
//if you do cors("http://localhost:3001") it means you can be specific of who can fetch your data
//for now, use * to allow it to be accessed from everywhere
app.use(cors("*"));

app.use("/users", router);

app.use("/tables", tableRouter);

app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});

export default app;
