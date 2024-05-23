import { UserModel } from "../models/userModel.js";
export class UserController {
    constructor() {
        this.userModel = new UserModel();
    }
    async getAllUsers(req, res) {
        const users = await this.userModel.getAllUsers();
        return res.json(users);
    }
}
//# sourceMappingURL=userController.js.map