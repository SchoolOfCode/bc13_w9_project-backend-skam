import query from "../db/index.js";

/**
 * Queries SQL database to return all data from programming languages table.
 * @returns a JSON object containing all rows from programming languages database.
 */
export async function getAllProgrammingLanguages() {
	let result = await query(
		`SELECT *
		FROM programming_languages;`
	);
	let userResult = result.rows;
	return userResult;
}

/**
 * Queries SQL database to return all data from spoken languages table.
 * @returns a JSON object containing all rows from spoken languages database.
 */
export async function getAllSpokenLanguages() {
	let result = await query(
		`SELECT *
		FROM spoken_languages;`
	);
	let userResult = result.rows;
	return userResult;
}
/**
 * Queries SQL database to return all data from location table.
 * @returns a JSON object containing all rows from location database.
 */
export async function getAllLocations() {
	let result = await query(
		`SELECT *
		FROM locations;`
	);
	let userResult = result.rows;
	return userResult;
}