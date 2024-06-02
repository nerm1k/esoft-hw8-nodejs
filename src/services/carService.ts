import CarModel from "../models/carModel.js";
import { capitalizeFirstLetterAndLowerOthers } from "../utils/stringUtils.js";

export default class CarService{
    carModel: CarModel;

    constructor(carModel: CarModel){
        this.carModel = carModel;
    }

    async getCarsByUserId(id: number){
        const cars = await this.carModel.getCarsByUserId(id);
        return cars;
    }

    async getCarsByBrandByUserId(id: number, brand: string){
        brand = capitalizeFirstLetterAndLowerOthers(brand);
        const cars = await this.carModel.getCarsByBrandByUserId(id, brand);
        return cars; 
    }

    async getCarByUserId(id: number, carId: number){
        const car = await this.carModel.getCarByUserId(id, carId);
        return car;
    }
}