import { Request, Response } from 'express';
import { TipoVehiculo, TipoVehiculoI } from '../models/TipoVehiculo';

export class TipoVehiculoController{
    public async getAllTipoVehiculo(req: Request, res: Response){
        try{
            const marca: TipoVehiculoI[] = await TipoVehiculo.findAll()  //select * from usuarios;
            res.status(200).json({marca})
        } catch(error){

        }
    }
}