import query from "../db/index.js";

export async function getAllProgrammingLanguages() {
	let result = await query(
		`SELECT *
		FROM programming_languages;`
	);
	let userResult = result.rows;
	return userResult;
}

export async function getAllSpokenLanguages() {
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
		FROM locations;`
	);
	let userResult = result.rows;
	return userResult;
}