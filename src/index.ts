import express, { Express } from "express";
import { userRoutes } from "./routes/userRoutes.js";
import 'dotenv/config';
import UserController from "./controllers/userController.js";
import UserService from "./services/userService.js";
import UserModel from "./models/userModel.js";
import CarModel from "./models/carModel.js";
import CarService from "./services/carService.js";
import CarController from "./controllers/carController.js";

const app: Express = express();

const userModel: UserModel = new UserModel();
const userService: UserService = new UserService(userModel);
const userController: UserController = new UserController(userService);

const carModel: CarModel = new CarModel();
const carService: CarService = new CarService(carModel);
const carController: CarController = new CarController(carService);

app.use(express.json());
app.use(userRoutes(userController, carController));

const port = process.env.PORT;

app.listen(port, () => {
  console.log(`[server]: Server is running at http://localhost:${port}`);
});