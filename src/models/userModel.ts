interface User {
    id: number; 
    name: string; 
    email: string; 
    age: number;
}

const users: User[] = [
    {
        id: 1,
        name: 'Roman',
        email: 'roman@mail.ru',
        age: 20
    },
    {
        id: 2,
        name: 'Egor',
        email: 'egor@mail.ru',
        age: 21
    },
    {
        id: 3,
        name: 'Alexey',
        email: 'alexey@mail.ru',
        age: 19
    }
]

class UserModel {
    nextId: number;
    users: User[];

    constructor(){
        this.nextId = 4;
        this.users = users;
    }

    getAllUsers(){
        return this.users;
    }

    createUser(name: string, email: string, age: number){
        const user = {
            id: this.nextId,
            name: name,
            email: email,
            age: age
        };
        this.nextId++;
        this.users.push(user);
        return user;
    }

    getUserById(id: number){
        return this.users.find(user => user.id == id);
    }

    updateUserById(id: number, name: string, email: string, age: number){
        const newUsers = this.users.map(user => {
            if (user.id == id){
                return ({
                    id: id,
                    name: name ? name : user.name,
                    email: email ? email : user.email,
                    age: age ? age : user.age
                })
            } 
            return user;
        });
        this.users = newUsers;
        return newUsers;
    }

    deleteUserById(id: number){
        const userToDelete = users.find(user => user.id == id);
        const newUsers = users.filter(user => user.id != id);
        this.users = newUsers;
        return userToDelete;
    }
}

export default new UserModel();