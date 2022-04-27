import { Request, Response, Application } from "express";

import { UsuarioController } from "../controllers/usuario.controller";

export class UsuarioRoutes{
    public usuarioController: UsuarioController = new UsuarioController();
    public routes(app: Application): void{
        app.route("/usuarios").get(this.usuarioController.getAllUsuario)
        app.route("/usuarios").get(this.usuarioController.getOneUsuario)
        app.route("/usuarios").post(this.usuarioController.createUsuario)
        app.route("/usuarios").patch(this.usuarioController.updateUsuario)
        app.route("/usuarios").delete(this.usuarioController.deleteUsuario)
        
    }
}