import express, { Application } from "express";
import morgan from 'morgan';
import { Routes } from "../routes/index";

export class App {
    app: Application;
    public routeprv: Routes = new Routes();
    constructor(
        private port?: number | string
    ){
        this.app = express();
        this.settings();
        this.middlewares();
        this.routes()
    }
    
    
    settings() {
        this.app.set('port', this.port || 3000);
    }

    async listen() {
        await this.app.listen(this.app.get('port'));
        console.log('server on port', this.app.get('port'));
    }

    middlewares() {
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended: false}));
    }

    routes() {
        this.routeprv.usuarioRoutes.routes(this.app)
        this.routeprv.ventaRoutes.routes(this.app)
        this.routeprv.marcaRoutes.routes(this.app)
        this.routeprv.tipovehiculoRoutes.routes(this.app)
        this.routeprv.vehiculosRoutes.routes(this.app)
    }


}