import CarModel from "../models/carModel.js";

class CarService{
    async getCarsByUserId(id: number){
        const cars = await CarModel.getCarsByUserId(id);
        return cars;
    }

    async getCarByUserId(id: number, carId: number){
        const car = await CarModel.getCarByUserId(id, carId);
        return car;
    }
}

export default new CarService();