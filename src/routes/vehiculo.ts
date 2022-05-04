import { Request, Response, Application } from 'express';

import { VehiculoController } from '../controllers/vehiculocontroller';
export class VehiculoRoutes{
    public vehiculoController: VehiculoController = new VehiculoController();

    public routes(app: Application): void{
        app.route("/vehiculo").get(this.vehiculoController.getAllVehiculo)
        //app.route("/venta/:id").get(this.ventaController.getOneVenta)
        //app.route("/ventas").post(this.ventaController.createVenta)
        // app.route("/ventas").patch(this.ventaController.updateVenta)
        //app.route("/ventas").delete(this.ventaController.deleteVenta)
    }
}