import UserModel from "../models/userModel.js";

class userService{
    async getAllUsers(){
        const users = await UserModel.getAllUsers();
        return users;
    }

    async getUserById(id: number){
        const user = await UserModel.getUserById(+id);
        return user;
    }

    async getAllUsersAlphabeticalNames(orderBy: string){
        const users = await UserModel.getAllUsersAlphabeticalNames(orderBy);
        return users;
    }

    async getAllUsersAboveAge(age: number){
        const users = await UserModel.getAllUsersAboveAge(age);
        return users;
    }

    async getAllUsersWithDomain(domain: string){
        const users = await UserModel.getAllUsersWithDomain(domain);
        return users;
    }

    async createUser(name: string, email: string, age: number){
        const user = await UserModel.createUser(name, email, age);
        return user;
    }

    async updateUserById(id: number, name: string, email: string, age: number){
        const user = await UserModel.updateUserById(id, name, email, age);
        return user;
    }

    async deleteUserById(id: number){
        const user = await UserModel.deleteUserById(+id);
        return user;
    }
}

export default new userService();