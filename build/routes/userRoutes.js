import express from "express";
import { UserController } from "../controllers/userController.js";
export const userRoutes = () => {
    const router = express.Router();
    const userController = new UserController();
    router.get('/users', (req, res) => userController.getAllUsers(req, res));
    // router.get('/users/:id', userController.getByUserById);
    // router.post('/users');
    // router.put('/users/:id');
    // router.delete('/users/:id');
    return router;
};
//# sourceMappingURL=userRoutes.js.map