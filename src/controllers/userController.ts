import UserModel from "../models/userModel.js";
import { Request, Response } from "express";


class UserController {
    createUser(req: Request, res: Response){
        const {name, email, age} = req.body;
        if (!name || !email || !age){
            return res.status(500).json('error');
        }
        const user = UserModel.createUser(name, email, age);
        return res.json(user);
    }

    getAllUsers(req: Request, res: Response){
        const users = UserModel.getAllUsers();
        return res.json(users);
    }

    getUserById(req: Request, res: Response){
        const {id} = req.params;
        const user = UserModel.getUserById(+id);
        if (user){
            return res.json(user);
        }
        return res.status(400).json('Не найден');
    }

    updateUserById(req: Request, res: Response){
        const {id} = req.params;
        const {name, email, age} = req.body;
        const user = UserModel.updateUserById(+id, name, email, age);
        return res.json(user);
    }

    deleteUserById(req: Request, res: Response){
        const {id} = req.params;
        const user = UserModel.deleteUserById(+id);
        return res.json(user);
    }
}

export default new UserController();