import { MarcaRoutes } from "./marca";
import { TipoVehiculoRoutes } from "./tipovehiculo";
import { UsuarioRoutes } from "./user";
import { VehiculoRoutes } from "./vehiculo";
import { VentaRoutes } from "./venta";

export class Routes {
    public usuarioRoutes: UsuarioRoutes = new UsuarioRoutes();
    public ventaRoutes: VentaRoutes = new VentaRoutes();
    public marcaRoutes: MarcaRoutes = new MarcaRoutes();
    public tipovehiculoRoutes: TipoVehiculoRoutes = new TipoVehiculoRoutes();
    public vehiculosRoutes: VehiculoRoutes = new VehiculoRoutes();
}