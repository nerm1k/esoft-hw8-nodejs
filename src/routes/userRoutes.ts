import express, { Router } from "express";
import UserController from "../controllers/userController.js";

export const userRoutes = (): Router => {
    const router = express.Router();

    router.get('/users', UserController.getAllUsers);
    router.get('/users/sorted', UserController.getAllUsersAlphabeticalNames);
    router.get('/users/:id', UserController.getUserById);
    router.get('/users/age/:age', UserController.getAllUsersAboveAge);
    router.get('/users/domain/:domain', UserController.getAllUsersWithDomain);
    router.post('/users', UserController.createUser);
    router.put('/users/:id', UserController.updateUserById);
    router.delete('/users/:id', UserController.deleteUserById);

    return router;
}
