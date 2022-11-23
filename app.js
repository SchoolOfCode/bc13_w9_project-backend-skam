// import express
// const Express = pkg;
// import pkg from "express";
import Express from "express";

import router from "./routes/users.js";

const app = Express();
const PORT = process.env.PORT;

// app.use(json());

app.use("/users", router);

app.listen(PORT, function () {
	console.log(`Server listening on port ${PORT}`);
});
