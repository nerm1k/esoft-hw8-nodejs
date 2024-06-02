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

    getUserById(id: number){
        return this.users.find(user => user.id == id);
    }

    getAllUsersAboveAge(age: number){
        return this.users.filter(user => user.age > age);
    }

    getAllUsersWithDomain(domain: string){
        return this.users.filter(user => user.email.split('@')[1] == domain);
    }

    getAllUsersAlphabeticalNames(){
        return [...this.users].sort((a, b) => a.name.localeCompare(b.name));
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

    updateUserById(id: number, name: string, email: string, age: number){
        let updated = false;
        let newUser = null;

        const newUsers = this.users.map(user => {
            if (user.id == id){
                updated = true;
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

        if (updated){
            this.users = newUsers;
            return newUser;
        }
        
        return null;
    }

    deleteUserById(id: number){
        const userToDelete = this.users.find(user => user.id == id);
        const newUsers = this.users.filter(user => user.id != id);
        this.users = newUsers;
        return userToDelete;
    }
}

export default new UserModel();