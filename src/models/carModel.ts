interface Car {
    id: number,
    brand: string,
    model: string,
};

const cars: Car[] = [
    {
        id: 1,
        brand: 'Lada',
        model: 'Vesta'
    },
    {
        id: 2,
        brand: 'Porsche',
        model: 'Macan S'
    },
    {
        id: 3,
        brand: 'Audi',
        model: 'RS6'
    }
];

const usersCars = [
    {
        userID: 1,
        carID: 1
    },
    {
        userID: 1,
        carID: 3
    },
    {
        userID: 3,
        carID: 2
    },
];

class CarModel {
    cars: Car[];
    usersCars;

    constructor(){
        this.cars = cars;
        this.usersCars = usersCars;
    }

    async getCarsByUserId(id: number){
        const userCarIDs = usersCars.filter(userCar => userCar.userID == id).map(userCar => userCar.carID);
        return cars.filter(car => userCarIDs.includes(car.id));
    }

    async getCarByUserId(id: number, carId: number){
        let carToFind = null;

        usersCars.forEach(userCar => {
            if (userCar.userID == id && userCar.carID == carId) {
                carToFind = userCar.carID;
            }
        });

        if (carToFind) {
            carToFind = cars.find(car => car.id == carId);
        }

        return carToFind;
    }
}

export default new CarModel();