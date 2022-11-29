import pkg from "pg";
const { Pool } = pkg;
export const pool = new Pool({
	connectionString: process.env.POSTGRES_CONNECTION_URL,
});

export default function query(text, params) {
	//text: SQL query
	//params: parameterized queries (prepared statements)
	return pool.query(text, params);
	//query function grabs what it needs & returns the text and params to the pool
}

