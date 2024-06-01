import express, { Router } from "express";
import UserController from "../controllers/userController.js";
import CarController from "../controllers/carController.js";

export const userRoutes = (): Router => {
    const router = express.Router();

    router.get('/users', UserController.getAllUsers);
    router.get('/users/:id', UserController.getUserById);
    router.post('/users', UserController.createUser);
    router.put('/users/:id', UserController.updateUserById);
    router.delete('/users/:id', UserController.deleteUserById);

    router.get('/users/:id/cars/', CarController.getCarsByUserId);
    router.get('/users/:id/cars/:carId', CarController.getCarByUserId);

    return router;
}
