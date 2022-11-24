import express, { Router } from "express";

import {
	getAllPLangs,
    getAllSLangs,
    getAllLocations
} from "../models/tables.js";

const tableRouter = express.Router();


tableRouter.get("/pLangs", async function (req, res) {
	const pLangs = await getAllPLangs();
	res.status(200).json({ success: true, payload: pLangs });
});

tableRouter.get("/sLangs", async function (req, res) {
	const sLangs = await getAllSLangs();
	res.status(200).json({ success: true, payload: sLangs });
});

tableRouter.get("/locations", async function (req, res) {
	const locations = await getAllLocations();
	res.status(200).json({ success: true, payload: locations });
});

export default tableRouter;
