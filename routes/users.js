//import express
// import express from "express";
// const router = express.Router();

const express = require("express");
const router = express.Router();

const { getAllUsers, updateUserUsername } = require("../models/users");

router.get("/", async function (req, res) {
	const users = await getAllUsers();
	res.json({ success: true, payload: users });
});

router.patch("/:id", async function (req, res) {
	const data = req.body;
	console.log(data);
	const updateUsername = await updateUserUsername(req.params.id, data);
	res.json({ success: true, payload: updateUsername });
});

module.exports = router;
