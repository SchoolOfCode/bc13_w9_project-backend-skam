// import express
// import express from "express";
// const router = express.Router();
// import pkg from "express";
// const { request, express } = pkg;
// import { request, express } from "express";
import express, { Router } from "express";

import {
	getAllUsers,
	updateUserUsername,
	getAllUsersByTHING,
} from "../models/users.js";

const router = express.Router();

// const { getAllUsers, updateUserUsername, getAllUsersByTHING } = default;

// router.get("/", async function (req, res) {
// 	const users = await getAllUsers();
// 	res.json({ success: true, payload: users });
// });

// router.get("/:id", async function (req, res) {
// 	const userByID = await getAllUsersByID(req.params.id);
// 	res.json({ success: true, payload: userByID });
// });

//search by ALL THINGS
router.get("/", async function (req, res) {
	//console.log(req.query)
	if (Object.keys(req.query).length !== 0) {
		const users = await getAllUsersByTHING(req);
		res.json({ success: true, payload: users });
	} else {
		const users = await getAllUsers();
		res.status(200).json({ success: true, payload: users });
	}
});

router.patch("/:id", async function (req, res) {
	const data = req.body;
	console.log(data);
	const updateUsername = await updateUserUsername(req.params.id, data);
	res.status(200).json({ success: true, payload: updateUsername });
});

// not necessary as users wont need to delete anything
// router.delete("/:id", async function (req, res) {
// 	const deletedUser = await deleteUserById(req.params.id);
// 	res.json({ success: true, payload: deletedUser });
// });

export default router;
