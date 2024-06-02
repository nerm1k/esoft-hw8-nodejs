import express, { Router } from "express";
import CarController from "../controllers/carController.js";
import UserController from "../controllers/userController.js";

export const userRoutes = (userController: UserController, carController: CarController): Router => {
    const router = express.Router();

    router.get('/users', userController.getAllUsers);
    router.get('/users/:id', userController.getUserById);
    router.post('/users', userController.createUser);
    router.put('/users/:id', userController.updateUserById);
    router.delete('/users/:id', userController.deleteUserById);

    router.get('/users/:id/cars/', carController.getCarsByUserId);
    router.get('/users/:id/cars/:carId', carController.getCarByUserId);

    return router;
}
