// create the function to get all users
import query from "../db/index.js";

//create async function which will return all users in the db
export async function getAllUsers() {
	let result = await query(
		`SELECT *
		FROM skamtable;`
	);
	let userResult = result.rows;
	return userResult;
}

// // create an async function to return user by ID
// async function getAllUsersByID(id) {
// 	let result = await query(
// 		`SELECT *
// 		FROM skamtable
// 		WHERE user_id=$1;`,
// 		[id]
// 	);
// 	let userByID = result.rows;
// 	return userByID;
// }

// create an async function to return user by ID
export async function getAllUsersByTHING(req) {
	//sub-function to convert request object to an array of key and value
	// splits the entry into a key and a pair (email:krish becomes email, krish)
	let requestKeys = Object.entries(req.query);
	console.log(req.query);
	console.log(requestKeys);

	let searchParam = requestKeys[0][0];
	let searchValue = requestKeys[0][1];

	let result = await query(
		`SELECT * 
		FROM skamtable 
		WHERE ${searchParam} ILIKE $1;`,
		["%" + searchValue + "%"]
	);

	let userByTHING = result.rows;
	return userByTHING;
}

// create an async function which adds new to existing user
// add parameterized queries so that all columns of the user can be updated
export async function updateUserUsername(id, update) {
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
// tjis function means you can do multple queries at one time
export async function getUsersByLang(programminglang, location, spokenlang) {
	let sqlStatement = `SELECT * FROM skamtable WHERE `;
	let sqlParams = [];
	if (programminglang) {
		sqlParams.push(programminglang);
		let indexOfArray = sqlParams.indexOf(programminglang) + 1;
		sqlStatement += `programming_lang @>ARRAY[$${indexOfArray}] `;
		if (location || spokenlang) {
			sqlStatement += `AND `;
		}
	}

	if (location) {
		sqlParams.push(location);
		let indexOfArray = sqlParams.indexOf(location) + 1;
		sqlStatement += `location = $${indexOfArray} `;
	}
	if (location && spokenlang) {
		sqlStatement += `AND `;
	}
	if (spokenlang) {
		sqlParams.push(spokenlang);
		let indexOfArray = sqlParams.indexOf(spokenlang) + 1;
		sqlStatement += `spoken_lang @>ARRAY[$${indexOfArray}] `;
	}

	let result = await query(sqlStatement, sqlParams);
	let userByLang = result.rows;
	return userByLang;
}

//MEGA MEGA SEARCH MODEL
export async function getAllUsersByKeyword(keyword) {
	let result = await query(
		`SELECT *
		FROM skamtable
		WHERE $1 
		IN (username, name, location, email, phone, photo, twitter, linkedin, github, bio, looking_to_hire, looking_to_work, looking_to_teach, looking_to_collab)
		OR spoken_lang @>ARRAY[$1]
		OR programming_lang @>ARRAY[$1];`,
		[keyword]
	);
	let userByKeyword = result.rows;
	return userByKeyword;
}

// create an async function which deletes a user by the id
// async function deleteUserById(id) {
// 	// Query the database to delete a user and return the deleted user
// 	let result = await query(
// 		`DELETE
//         FROM skamtable
//         WHERE user_id = $1 RETURNING *;`,
// 		[id]
// 	);
// 	let deletedUser = result.rows;
// 	return deletedUser;
// }

// export { getAllUsers, updateUserUsername, getAllUsersByTHING };
