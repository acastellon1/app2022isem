import { Request, Response, Application, Router } from "express";

import { UsuarioController } from "../controllers/usuario.controller";

export class UsuarioRoutes{
    public usuarioController: UsuarioController = new UsuarioController();


    public routes(app: Application): void{
        app.route("/usuarios").get(this.usuarioController.getAllUsuario)
        app.route("/usuario/:id").get(this.usuarioController.getOneUsuario)
        app.route("/usuarios").post(this.usuarioController.createUsuario)
        //app.route("/usuarios").patch(this.usuarioController.updateUsuario)
        //app.route("/usuarios").delete(this.usuarioController.deleteUsuario)
        
    }
}