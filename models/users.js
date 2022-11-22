// create the function to get all users
const { query } = require("../db/index");

// create async function which will return all users in the db
async function getAllUsers() {
	let result = await query(`SELECT username FROM skamtable`);
	let usernameResult = result.rows;
	return usernameResult;
}

// create an async function which adds new to existing user
async function updateUserUsername(id, update) {
	let result = await query(
		`UPDATE skamtable
        SET username = $1
        WHERE user_id = $2
        RETURNING *;`,
		[update.username, id]
	);
	let updatedUsername = result;
	//console.log(id);
	//console.log(result);
	return updatedUsername;
}

// create an async function which posts a new user

module.exports = {
	getAllUsers,
	updateUserUsername,
};
