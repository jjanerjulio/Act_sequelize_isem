import { Request, Response, Application } from 'express';

import { MarcaController } from '../controllers/marcacontroller';

export class MarcaRoutes{
    public marcaController: MarcaController = new MarcaController();

    public routes(app: Application): void{
        app.route("/marca").get(this.marcaController.getAllMarca)
        //app.route("/venta/:id").get(this.ventaController.getOneVenta)
        //app.route("/ventas").post(this.ventaController.createVenta)
        // app.route("/ventas").patch(this.ventaController.updateVenta)
        //app.route("/ventas").delete(this.ventaController.deleteVenta)
    }
}