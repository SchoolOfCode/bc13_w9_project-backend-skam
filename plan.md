Step 1:

- Download all npm modules DONE
- Get everything installed corerctly and check dependecies DONE
- Create the connection string and link it to the port DONE

app

- Import in express
- Initialise express in the app
- Create a PORT variable which connects to the environmen variable
- Tell the app to use the express
  // Tell the app to use the routes
- Listening on the port

routes

- try to convert to ECMA

models
functions

- get all users
- get all users by id
- post a new user (does this need to have all columns?)
- update user info (same q^?)
- delete users

Testing

- Test the mvp

- Test that you can get an array of all the users
  response code should be 200
  success is true
  outer level test -> payload is an array of objects

- Test that you can get users by email, phone, spoken language, programming language, looking to teach, looking to learn, looking to work, looking to hire, looking to collab
  For each of these
  response code = 200
  success = true
  outer level test -> payload is an array of objects
  second level test -> object contain whatever the search parameter was (e.g. email sophie@mail.com)
