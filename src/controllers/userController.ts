import { Request, Response } from "express";
import UserService from "../services/userService.js";
import { HttpStatusCode } from "../utils/enums.js";
import { isValidUser } from "../utils/validations.js";

export default class UserController {
    userService: UserService;

    constructor(userService: UserService){
        this.userService = userService;
    }

    getAllUsers = async (req: Request, res: Response) => {
        try {
            if (req.query.sort_by == 'name' && req.query.order_by) {
                const orderBy = req.query.order_by as string;
                const users = await this.userService.getAllUsersAlphabeticalNames(orderBy);
                res.json(users);
            } else if ('age_above' in req.query) {
                const age = req.query.age_above as string;
                const users = await this.userService.getAllUsersAboveAge(+age);
                if (users.length > 0) {
                    res.json(users);
                } else {
                    res.status(HttpStatusCode.NOT_FOUND).json(`Пользователи с возрастом больше ${age} не найдены.`);
                }
            } else if ('domain' in req.query) {
                const domain = req.query.domain as string;
                const users = await this.userService.getAllUsersWithDomain(domain);
                if (users.length > 0) {
                    res.json(users);
                } else {
                    res.status(HttpStatusCode.NOT_FOUND).json(`Пользователи с email домейном ${domain} не найдены.`);
                }     
            } else {
                const users = await this.userService.getAllUsers();
                res.json(users);
            }
        } catch (error: any) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({error: error.message});
        }
    }

    getUserById = async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const user = await this.userService.getUserById(+id);

            if (user) {
                res.json(user);
            } else {
                res.status(HttpStatusCode.NOT_FOUND).json(`Пользователи с id ${id} не найден.`);
            }
        } catch (error: any) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({error: error.message});
        }
    }

    createUser = async (req: Request, res: Response) => {
        try {
            const {name, email, age} = req.body;

            if (!name || !email || !age) {
                res.status(HttpStatusCode.BAD_REQUEST).json('Не все поля переданы.');
            } else {
                if (!isValidUser(name, email, age)) {
                    res.status(HttpStatusCode.BAD_REQUEST).json('Не все поля корректны.')
                } else {
                    const user = await this.userService.createUser(name, email, +age);
                    res.status(HttpStatusCode.CREATED).json(user);
                }
            }
        } catch (error: any) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({error: error.message});
        }
    }

    updateUserById = async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const {name, email, age} = req.body;

            if (!isValidUser(name, email, age)) {
                res.status(HttpStatusCode.BAD_REQUEST).json('Не все поля корректны.')
            } else {
                const user = await this.userService.updateUserById(+id, name, email, +age);

                if (user) {
                    res.json(user);
                } else {
                    res.status(HttpStatusCode.NOT_FOUND).json(`Пользователь с id ${id} для обновления не найден.`);
                }
            }
        } catch (error: any) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({error: error.message});
        }
    }

    deleteUserById = async (req: Request, res: Response) => {
        try {
            const {id} = req.params;
            const user = await this.userService.deleteUserById(+id);

            if (user) {
                res.json(user);
            } else {
                res.status(HttpStatusCode.NOT_FOUND).json(`Пользователь с id ${id} для удаления не найден.`);
            }
        } catch (error: any) {
            res.status(HttpStatusCode.INTERNAL_SERVER_ERROR).json({error: error.message});
        }
    }
}