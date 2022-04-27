import { Request, Response, Application } from 'express';

import { UsuarioController } from '../controllers/usuariocontroller';

export class UsuarioRoutes {
    public usuarioController: UsuarioController = new UsuarioController();
    
    public routes(app: Application): void{
        app.route("/usuarios").get(this.usuarioController.getAllUsuario)
        //app.route("/usuario").get(this.usuarioController.getOneUsuario)
        app.route("/usuario").post(this.usuarioController.createUsuario)
       // app.route("/usuario").patch(this.usuarioController.updateUsuario)
        //app.route("/usuario").delete(this.usuarioController.deleteUsuario)

    }
}