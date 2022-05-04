import { Request, Response, Application } from "express";

import { MarcaController } from "../controllers/marca.controller";

export class MarcaRoutes{
    public marcaController: MarcaController = new MarcaController();


    public routes(app: Application): void{
        app.route("/marca").get(this.marcaController.getAllMarca)
    }
}