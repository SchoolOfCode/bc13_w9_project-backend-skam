// create the function to get all users
const { query } = require("../db/index");

// create async function which will return all users in the db
async function getAllUsers() {
	let result = await query(
		`SELECT username 
		FROM skamtable;`
	);
	let usernameResult = result.rows;
	return usernameResult;
}

// create an async function to return user by ID
async function getAllUsersByID(id) {
	let result = await query(
		`SELECT * 
		FROM skamtable 
		WHERE user_id=$1;`,
		[id]
	);
	let userByID = result.rows;
	return userByID;
}


// create an async function to return user by ID
async function getAllUsersByTHING(req) {
		//sub-function to convert request object to an array of key and value
	let requestKeys = Object.entries(req.query);
	//
	console.log(requestKeys);

	let searchParam = requestKeys[0][0];
	let searchValue = requestKeys[0][1];

	let result;
	if (searchValue == true) {
			result = await query(
				`SELECT * 
				FROM skamtable 
				WHERE ${searchParam} = $1;`,
				[searchValue]
			);
		} if (searchValue == false) {
			result = await query(
				`SELECT * 
				FROM skamtable 
				WHERE ${searchParam} = $1;`,
				[searchValue]
			);
			}else {
			result = await query(
			`SELECT * 
			FROM skamtable 
			WHERE ${searchParam} ILIKE $1;`,
			['%' + searchValue + '%']
			);}

	let userByTHING = result.rows;
	return userByTHING;
}


// create an async function which adds new to existing user
// add parameterized queries so that all columns of the user can be updated
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

// create an async function which deletes a user by the id
async function deleteUserById(id) {
	// Query the database to delete a user and return the deleted user
	let result = await query(
		`DELETE 
        FROM skamtable
        WHERE user_id = $1 RETURNING *;`,
		[id]
	);
	let deletedUser = result.rows;
	return deletedUser;
}


module.exports = {
	getAllUsers,
	updateUserUsername,
	deleteUserById,
	getAllUsersByID,
	getAllUsersByTHING
};
