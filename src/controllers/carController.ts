import CarService from "../services/carService.js";
import { Request, Response } from "express";

class CarController{
    async getCarsByUserId(req: Request, res: Response){
        try {
            const {id} = req.params;
            const cars = await CarService.getCarsByUserId(+id);
            if (cars.length > 0) {
                res.status(200).json(cars);
            } else {
                res.status(404).json(`У пользователя с id ${id} нет машин`);
            }
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    async getCarByUserId(req: Request, res: Response){
        try {
            const {id, carId} = req.params;
            const car = await CarService.getCarByUserId(+id, +carId);

            if (car) {
                return res.status(200).json(car);
            } else {
                return res.status(404).json(`У пользователя с id ${id} нет машины с id ${carId}`);
            }
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }
}

export default new CarController();