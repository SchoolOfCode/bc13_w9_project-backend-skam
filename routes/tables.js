import express, { Router } from "express";

import {
	getAllProgrammingLanguages,
    getAllSpokenLanguages,
    getAllLocations
} from "../models/tables.js";

const tableRouter = express.Router();


tableRouter.get("/programming_languages", async function (req, res) {
	const pLangs = await getAllProgrammingLanguages();
	res.status(200).json({ success: true, payload: pLangs });
});

tableRouter.get("/spoken_languages", async function (req, res) {
	const sLangs = await getAllSpokenLanguages();
	res.status(200).json({ success: true, payload: sLangs });
});

tableRouter.get("/locations", async function (req, res) {
	const locations = await getAllLocations();
	res.status(200).json({ success: true, payload: locations });
});

export default tableRouter;
