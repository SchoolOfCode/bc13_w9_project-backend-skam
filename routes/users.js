// import express
// import express from "express";
// const router = express.Router();

const express = require("express");
const router = express.Router();

const {
	getAllUsers,
	updateUserUsername,
	deleteUserById,
	getAllUsersByID,
} = require("../models/users");

router.get("/", async function (req, res) {
	const users = await getAllUsers();
	res.json({ success: true, payload: users });
});

router.get("/:id", async function (req, res) {
	const userByID = await getAllUsersByID(req.params.id);
	res.json({ success: true, payload: userByID });
});

router.patch("/:id", async function (req, res) {
	const data = req.body;
	console.log(data);
	const updateUsername = await updateUserUsername(req.params.id, data);
	res.json({ success: true, payload: updateUsername });
});

router.delete("/:id", async function (req, res) {
	const deletedUser = await deleteUserById(req.params.id);
	res.json({ success: true, payload: deletedUser });
});

module.exports = router;
