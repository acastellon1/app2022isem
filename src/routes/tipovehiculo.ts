import { Request, Response, Application } from "express";

import { TipoVehiculoController } from "../controllers/tipovehiculo.controller";

export class TipoVehiculoRoutes{
    public tipovehiculoController: TipoVehiculoController = new TipoVehiculoController();

    public routes(app: Application): void{
        app.route("/tipovehiculo").get(this.tipovehiculoController.getAllTipoVehiculo)
    }
}
