import { Request, Response } from 'express';
import { Marca, MarcaI } from '../models/Marca';

export class MarcaController{
    public async getAllMarca(req: Request, res: Response){
        try{
            const marca: MarcaI[] = await Marca.findAll()  //select * from usuarios;
            res.status(200).json({marca})
        } catch(error){

        }
    }

    /*public async getOneVenta(req: Request, res: Response){
        const { id: idParam } = req.params 
        try{
            const venta: VentaI | null = await Venta.findOne(
                {
                    where: { id: idParam}
                }
            )

            res.status(200).json(venta)
        } catch(error){
            res.status(500).json({msg: "Error internal"})
        }
    }

    public async createVenta(req: Request, res: Response){
        const {
            fechaVenta,
            valorTotal,
            tipoPago,
            UsuarioId,
        } = req.body;
        try{
            let body:any = {
                fechaVenta,
                valorTotal,
                tipoPago,
                UsuarioId
            }

            const user = await Venta.create(body);
            res.status(200).json({user})
        } catch(error){

        }
    }*/


}
