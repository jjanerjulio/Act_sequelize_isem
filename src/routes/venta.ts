import { Request, Response, Application } from 'express';

import { VentaController } from '../controllers/ventacontroller';

export class VentaRoutes{
    public ventaController: VentaController = new VentaController();

    public routes(app: Application): void{
        app.route("/ventas").get(this.ventaController.getAllVenta)


    }
}