import query from "../db/index.js";

export async function getAllPLangs() {
	let result = await query(
		`SELECT *
		FROM p_langs;`
	);
	let userResult = result.rows;
	return userResult;
}

export async function getAllSLangs() {
	let result = await query(
		`SELECT *
		FROM spoken_languages;`
	);
	let userResult = result.rows;
	return userResult;
}

export async function getAllLocations() {
	let result = await query(
		`SELECT *
		FROM spoken_languages;`
	);
	let userResult = result.rows;
	return userResult;
}