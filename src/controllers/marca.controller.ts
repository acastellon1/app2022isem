import { Marca, MarcaI } from "../models/Marca";
import { Request, Response } from "express";


export class MarcaController {
    public async getAllMarca(req: Request, res: Response){
        try {
            const brand: MarcaI[]= await Marca.findAll()
            res.status(200).json({brand})
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