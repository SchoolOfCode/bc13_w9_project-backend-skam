// create the function to get all users
const { query } = require("../db/index");

// create async function which will return all users in the db
async function getAllUsers() {
	let result = await query(`SELECT username FROM skamtable`);
	let usernameResult = result.rows;
	return usernameResult;
}

module.exports = {
	getAllUsers,
};
