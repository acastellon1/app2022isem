import { Request, Response } from "express";
import { TipoVehiculo, TipoVehiculoI } from "../models/TipoVehiculo";

export class TipoVehiculoController{
    public async getAllTipoVehiculo(req: Request, res: Response){
        try {
            const tipov: TipoVehiculoI[] = await TipoVehiculo.findAll()
            res.status(200).json({tipov})
        } catch (error) {
            
        }
    }

    public async getOneMarca(req: Request, res: Response){
        
    }

    public async createMarca(req: Request, res: Response){
      
    }

    public async updateMarca(req: Request, res: Response){
      
    }

    public async deleteMarca(req: Request, res: Response){
      
    }
}