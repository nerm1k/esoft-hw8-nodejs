import express, { Express } from "express";
import { userRoutes } from "./routes/userRoutes.js";
import 'dotenv/config';

const app: Express = express();

app.use(express.json());
app.use(userRoutes());

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});