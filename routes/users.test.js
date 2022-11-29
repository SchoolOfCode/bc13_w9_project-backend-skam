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
import {pool} from "../db/index.js";

import supertest from "supertest";
const request = supertest(app);

afterAll(() => {
	return pool.end();
  });

// format for test -> test(desciption, anon async function() { response -> request.get + what we expect })

test("Get all the users in the database", async function () {
	let response = await request.get("/users");
	expect(response.status).toBe(200);
	expect(response.body.success).toStrictEqual(true);
	expect(response.body.payload).toBeInstanceOf(Array);
});

// Test that you can get users by email, phone, spoken language, programming language, looking to teach, looking to learn, looking to work, looking to hire, looking to collab
// test("The email parameter searched gives the correct user from the db", async function () {
// 	let response = await request.get("/users");
// });

test("Filters provide suitable results when programming lang is CSS, location is UK and language is Klingon", async function(){
	let response = await request.get("/users/byFilter/?programming_language=css&location=uk&spoken_language=klingon")
	let resultThing = response.body.payload[0];
	expect(resultThing).toBeInstanceOf(Object);
	expect(resultThing.location).toBe('uk');
	expect(resultThing.programming_lang).toContain('css')
	expect(resultThing.spoken_lang).toContain('klingon')
});

test("Search  by any given keyword", async function(){
	let response = await request.get("/users/mia")
	let resultThing = response.body.payload[0];
	expect(resultThing).toBeInstanceOf(Object);
	expect(resultThing.name).toBe('mia');
})