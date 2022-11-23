//BASIC THINGS
//create a test.js file ✔
//check that jest is running everywhere(in all the files and scripts) ✔
//check its installed ✔
//import jest and supertest into where we're going to use it

// Test that you can get an array of all the users
//    response code should be 200
//    success is true
//    outer level test -> payload is an array of objects

import { expect, test } from "@jest/globals";
import app from "../app.js";

import supertest from "supertest";
const request = supertest(app);

// format for test -> test(desciption, anon async function() { response -> request.get + what we expect })
//it('example', async () => {
//   const res = await request(app).get('/');
//   expect(res).toHaveHTTPStatus(200);
// });

test("Get all the users in the database", async function () {
	let response = await request.get("/users");
	expect(response.status).toBe(200);
	console.log(response.body.payload);
	expect(response.body.success).toStrictEqual(true);
	expect(response.body.payload).toBeInstanceOf(Array);
});

// Test that you can get users by email, phone, spoken language, programming language, looking to teach, looking to learn, looking to work, looking to hire, looking to collab
//    For each of these
//    response code = 200
//    success = true
//      outer level test -> payload is an array of objects
//      second level test -> object contain whatever the search parameter was (e.g. email sophie@mail.com)
test("The email parameter searched gives the correct user from the db", async function () {
	let response = await request.get("/users");
});
