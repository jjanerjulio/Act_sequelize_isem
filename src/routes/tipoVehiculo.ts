import { Request, Response, Application } from 'express';

import { TipoVehiculoController } from '../controllers/tipoVehiculocontroller';

export class TipoVehiculoRoutes{
    public tipoVehiculoController: TipoVehiculoController = new TipoVehiculoController();

    public routes(app: Application): void{
        app.route("/tipoVehiculo").get(this.tipoVehiculoController.getAllTipoVehiculo)
        //app.route("/venta/:id").get(this.ventaController.getOneVenta)
        //app.route("/ventas").post(this.ventaController.createVenta)
        // app.route("/ventas").patch(this.ventaController.updateVenta)
        //app.route("/ventas").delete(this.ventaController.deleteVenta)
    }
}