import UserModel from "../models/userModel.js";

export default class UserService{
    userModel: UserModel;

    constructor(userModel: UserModel){
        this.userModel = userModel;
    }

    async getAllUsers(){
        const users = await this.userModel.getAllUsers();
        return users;
    }

    async getUserById(id: number){
        const user = await this.userModel.getUserById(+id);
        return user;
    }

    async getAllUsersAlphabeticalNames(orderBy: string){
        const users = await this.userModel.getAllUsersAlphabeticalNames(orderBy);
        return users;
    }

    async getAllUsersAboveAge(age: number){
        const users = await this.userModel.getAllUsersAboveAge(age);
        return users;
    }

    async getAllUsersWithDomain(domain: string){
        const users = await this.userModel.getAllUsersWithDomain(domain);
        return users;
    }

    async createUser(name: string, email: string, age: number){
        const user = await this.userModel.createUser(name, email, age);
        return user;
    }

    async updateUserById(id: number, name: string, email: string, age: number){
        const user = await this.userModel.updateUserById(id, name, email, age);
        return user;
    }

    async deleteUserById(id: number){
        const user = await this.userModel.deleteUserById(+id);
        return user;
    }
}