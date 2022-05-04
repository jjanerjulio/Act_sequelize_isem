import { Request, Response, Application } from 'express';

import { VentaController } from '../controllers/ventacontroller';

export class VentaRoutes{
    public ventaController: VentaController = new VentaController();

    public routes(app: Application): void{
        app.route("/ventas").get(this.ventaController.getAllVenta)
        app.route("/venta/:id").get(this.ventaController.getOneVenta)
        app.route("/ventas").post(this.ventaController.createVenta)
        // app.route("/ventas").patch(this.ventaController.updateVenta)
        //app.route("/ventas").delete(this.ventaController.deleteVenta)
    }
}