import UserModel from "../models/userModel.js";
import UserService from "../services/userService.js";
import { Request, Response } from "express";


class UserController {
    async getAllUsers(req: Request, res: Response){
        try {
            const users = await UserService.getAllUsers();
            res.json(users);
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async getUserById(req: Request, res: Response){
        try {
            const {id} = req.params;
            const user = await UserService.getUserById(+id);

            if (user) {
                res.json(user);
            } else {
                res.status(404).json(`Пользователи с id ${id} не найден.`);
            }
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async getAllUsersAlphabeticalNames(req: Request, res: Response){
        try {
            const users = await UserService.getAllUsersAlphabeticalNames();
            res.json(users);
        } catch (error: any){
            res.status(500).json({error: error.message});
        }
    }

    async getAllUsersAboveAge(req: Request, res: Response){
        try {
            const {age} = req.params;
            const users = await UserService.getAllUsersAboveAge(+age);
    
            if (users.length > 0) {
                res.json(users);
            } else {
                res.status(404).json(`Пользователи с возрастом больше ${age} не найдены.`);
            }
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async getAllUsersWithDomain(req: Request, res: Response){
        try {
            const {domain} = req.params;
            const users = await UserService.getAllUsersWithDomain(domain);
    
            if (users.length > 0) {
                res.json(users);
            } else {
                res.status(404).json(`Пользователи с email домейном ${domain} не найдены.`);
            }     
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async createUser(req: Request, res: Response){
        try {
            const {name, email, age} = req.body;

            if (!name || !email || !age) {
                res.status(400).json('Не все поля переданы.');
            } else {
                const user = await UserService.createUser(name, email, +age);
                res.status(201).json(user);
            }
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async updateUserById(req: Request, res: Response){
        try {
            const {id} = req.params;
            const {name, email, age} = req.body;

            const user = await UserService.updateUserById(+id, name, email, +age);
            
            if (user) {
                res.json(user);
            } else {
                res.status(404).json(`Пользователь с id ${id} для обновления не найден.`);
            }
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async deleteUserById(req: Request, res: Response){
        try {
            const {id} = req.params;
            const user = await UserService.deleteUserById(+id);

            if (user) {
                res.json(user);
            } else {
                res.status(404).json(`Пользователь с id ${id} для удаления не найден.`);
            }
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }
}

export default new UserController();