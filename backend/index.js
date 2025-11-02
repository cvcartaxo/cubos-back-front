import http from 'http';
import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

const port = Number(process.env.PORT) || 3000;

const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASS,
  port: Number(process.env.DB_PORT),
});

http.createServer(async (req, res) => {
  if (req.url === "/api") {
    res.setHeader("Content-Type", "application/json");
    res.writeHead(200);

    let result;
    try {
      const client = await pool.connect();
      result = (await client.query("SELECT * FROM users LIMIT 1")).rows[0];
      client.release();
    } catch (error) {
      console.error(error);
    }

    const data = {
      database: true,
      userAdmin: result?.role === "admin"
    };

    res.end(JSON.stringify(data));
  } else {
    res.writeHead(404);
    res.end("Not Found");
  }
}).listen(port, () => {
  console.log(`Server is listening on port ${port}`);
});
