import query from "../db/index.js";

/**
 * Queries SQL database returning all information.
 * @returns all users from table in JSON object
 */ 
export async function getAllUsers() {
	let result = await query(
		`SELECT *
		FROM users;`
	);
	let userResult = result.rows;
	return userResult;
}


// export async function getAllUsersByTHING(req) {
// 	//sub-function to convert request object to an array of key and value
// 	// splits the entry into a key and a pair (email:krish becomes email, krish)
// 	let requestKeys = Object.entries(req.query);
// 	console.log(req.query);
// 	console.log(requestKeys);
	
// 	let searchParam = requestKeys[0][0];
// 	let searchValue = requestKeys[0][1];
	
// 	let result = await query(
// 		`SELECT * 
// 		FROM users 
// 		WHERE ${searchParam} ILIKE $1;`,
// 		["%" + searchValue + "%"]
// 		);
		
// 		let userByTHING = result.rows;
// 		return userByTHING;
// 	}
	
	/**
	 * Queries database using given parameters as 'WHERE' filters.
	 * @param {*} programminglang 
	 * @param {*} location 
	 * @param {*} spokenlang 
	 * @returns all relevant user information as a JSON object.
	 */
		export async function getUsersByFilter(
      programminglang,
      location,
      spokenlang
    ) {
      let sqlStatement = `SELECT * FROM users `;
      let sqlParams = [];
      if (programminglang || spokenlang || location) {
        sqlStatement += `WHERE `;
      }
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
    //   console.log({ sqlStatement, sqlParams });
      let result = await query(sqlStatement, sqlParams);
      let userByFilter = result.rows;
      return userByFilter;
    }
		
		/**
		 * Takes in any single keyword and searches all users table columns returning rows where keyword is present.
		 * @param {*} keyword 
		 * @returns any relevant information containing keyword ina JSON object.
		 */
		export async function getAllUsersByKeyword(keyword) {
			let result = await query(
				`SELECT *
				FROM users
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
					//         FROM user
					//         WHERE user_id = $1 RETURNING *;`,
					// 		[id]
					// 	);
					// 	let deletedUser = result.rows;
					// 	return deletedUser;
					// }
					
					// export { getAllUsers, updateUserUsername, getAllUsersByTHING };
					
					// // create an async function to return user by ID
					// async function getAllUsersByID(id) {
					// 	let result = await query(
					// 		`SELECT *
					// 		FROM user
					// 		WHERE user_id=$1;`,
					// 		[id]
					// 	);
					// 	let userByID = result.rows;
					// 	return userByID;
					// }