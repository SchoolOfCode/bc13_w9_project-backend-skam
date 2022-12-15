// import express
// import express from "express";
// const router = express.Router();
// import pkg from "express";
// const { request, express } = pkg;
// import { request, express } from "express";
import express, { Router } from "express";

import {
	getAllUsers,
	getAllUsersByKeyword,
	getUsersByFilter,
} from "../models/users.js";

const router = express.Router();

router.get("/", async function (req, res) {
		const users = await getAllUsers();
		res.status(200).json({ success: true, payload: users });
	
});

router.get("/byFilter", async function (req, res) {
	const programminglang = req.query.programming_language;
	const location = req.query.location;
	const spokenlang = req.query.spoken_language;
	const users = await getUsersByFilter(programminglang, location, spokenlang);
	res.status(200).json({ success: true, payload: users });
});


router.get("/:keyword", async function (req, res) {
	const userByKeyword = await getAllUsersByKeyword(req.params.keyword);
	res.json({ success: true, payload: userByKeyword });
});

export default router;


/*
router.patch("/:id", async function (req, res) {
	const data = req.body;
	console.log(data);
	const updateUsername = await updateUserUsername(req.params.id, data);
	res.status(200).json({ success: true, payload: updateUsername });
});
*/