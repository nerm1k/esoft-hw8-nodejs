import { Request, Response } from "express";
import CarService from "../services/carService.js";

export default class CarController{
    carService: CarService;

    constructor(carService: CarService){
        this.carService = carService;
    }

    getCarsByUserId = async (req: Request, res: Response) => {
        try {
            const {id} = req.params;

            if (req.query.brand) {
                const brand = req.query.brand as string;
                const cars = await this.carService.getCarsByBrandByUserId(+id, brand);
                if (cars.length > 0) {
                    res.status(200).json(cars);
                } else {
                    res.status(404).json(`У пользователя с id ${id} нет машин ${brand}`);
                }
            } else {
                const cars = await this.carService.getCarsByUserId(+id);
                if (cars.length > 0) {
                    res.status(200).json(cars);
                } else {
                    res.status(404).json(`У пользователя с id ${id} нет машин`);
                }
            }
        } catch (error: any) {
            res.status(500).json({error: error.message});
        }
    }

    getCarByUserId = async (req: Request, res: Response) => {
        try {
            const {id, carId} = req.params;
            const car = await this.carService.getCarByUserId(+id, +carId);

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