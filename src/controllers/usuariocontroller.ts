import { Request, Response } from 'express';
import { Usuario, UsuarioI } from '../models/Usuario';

export class UsuarioController {
    public async getAllUsuario(req: Request, res: Response){
        try{
            const user: UsuarioI[] = await Usuario.findAll()  //select * from usuarios;
            res.status(200).json({user})
        } catch(error){

        }
    }

    public async getOneUsuario(req: Request, res: Response){
        
    }

    public async createUsuario(req: Request, res: Response){
        
    }

    public async updateUsuario(req: Request, res: Response){
        
    }

    public async deleteUsuario(req: Request, res: Response){
        
    }
}