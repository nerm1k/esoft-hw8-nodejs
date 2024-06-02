interface User {
    id: number; 
    name: string; 
    email: string; 
    age: number;
};

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
        age: 23
    },
    {
        id: 3,
        name: 'Alexey',
        email: 'alexey@mail.ru',
        age: 19
    }
];

export default class UserModel {
    nextId: number;
    users: User[];

    constructor(){
        this.nextId = 4;
        this.users = users;
    }

    async getAllUsers(){
        return this.users;
    }

    async getUserById(id: number){
        return this.users.find(user => user.id == id);
    }

    async getAllUsersAlphabeticalNames(orderBy: string){
        if (orderBy == 'asc'){
            return [...this.users].sort((a, b) => a.name.localeCompare(b.name));
        }
        return [...this.users].sort((a, b) => b.name.localeCompare(a.name));
    }

    async getAllUsersAboveAge(age: number){
        return this.users.filter(user => user.age > age);
    }

    async getAllUsersWithDomain(domain: string){
        return this.users.filter(user => user.email.split('@')[1] == domain);
    }

    async createUser(name: string, email: string, age: number){
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

    async updateUserById(id: number, name: string, email: string, age: number){
        let newUser = null;

        this.users = this.users.map(user => {
            if (user.id == id){
                newUser = {
                    id: id,
                    name: name ? name : user.name,
                    email: email ? email : user.email,
                    age: age ? age : user.age
                };
                return newUser;
            } 
            return user;
        });

        return newUser;
    }

    async deleteUserById(id: number){
        const userToDelete = this.users.find(user => user.id == id);

        if (userToDelete) {
            this.users = this.users.filter(user => user.id != id);
            return userToDelete;
        }

        return null;
    }
}