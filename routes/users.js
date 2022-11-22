//import express
// import express from "express";
// const router = express.Router();

const express = require("express");
const router = express.Router();

const { getAllUsers } = require("../models/users");

router.get("/", async function (req, res) {
	const users = await getAllUsers();
	res.json({ success: true, payload: users });
});

module.exports = router;
