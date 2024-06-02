import UserModel from "../models/userModel.js";
import { Request, Response } from "express";


class UserController {
    getAllUsers(req: Request, res: Response){
        const users = UserModel.getAllUsers();
        return res.json(users);
    }

    getUserById(req: Request, res: Response){
        const {id} = req.params;

        if (id == 'sorted'){
            const users = UserModel.getAllUsersAlphabeticalNames();
            return res.json(users);
        }

        const user = UserModel.getUserById(+id);

        if (user){
            return res.json(user);
        }

        return res.status(400).json('Не найден');
    }

    getAllUsersAboveAge(req: Request, res: Response){
        const {age} = req.params;
        console.log(age);
        const users = UserModel.getAllUsersAboveAge(+age);
        if (users.length > 0){
            return res.json(users);
        }
        return res.status(400).json(`Пользователи с возрастом больше ${age} не найдены`);
    }

    getAllUsersWithDomain(req: Request, res: Response){
        const {domain} = req.params;
        const users = UserModel.getAllUsersWithDomain(domain);
        if (users.length > 0){
            return res.json(users);
        }
        return res.status(400).json(`Пользователи с email домейном ${domain} не найдены`);
    }

    createUser(req: Request, res: Response){
        const {name, email, age} = req.body;
        if (!name || !email || !age){
            return res.status(500).json('Не все поля переданы');
        }
        const user = UserModel.createUser(name, email, +age);
        return res.json(user);
    }

    updateUserById(req: Request, res: Response){
        const {id} = req.params;
        const {name, email, age} = req.body;
        const user = UserModel.updateUserById(+id, name, email, +age);
        if (user == null) return res.status(400).json(`Пользователь с id ${id} для обновления не найден`);
        return res.json(user);
    }

    deleteUserById(req: Request, res: Response){
        const {id} = req.params;
        const user = UserModel.deleteUserById(+id);
        return res.json(user);
    }
}

export default new UserController();