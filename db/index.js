const { Pool } = require("pg");
const pool = new Pool({
	connectionString: process.env.POSTGRES_CONNECTION_URL,
});

module.exports = {
	//query key in our export object where a value of the query key is a function
	//query is an anonymous function
	query: function (text, params) {
		//text: SQL query
		//params: parameterized queries (prepared statements)
		return pool.query(text, params);
		//query function grabs what it needs & returns the text and params to the pool
	},
};
