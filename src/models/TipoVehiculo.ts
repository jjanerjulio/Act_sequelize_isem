import { Model, DataType, DataTypes } from 'sequelize';
import { database } from '../database/db';

export class TipoVehiculo extends Model {
    public nombre!: string;
}

export interface TipoVehiculoI {
    nombre: string;
    
}

TipoVehiculo.init(
    {
        nombre: {
            type: DataTypes.STRING,
            allowNull: false
        },

        
    },
    {
        tableName: 'tipoVehiculos',
        sequelize: database,
        timestamps: true
    }
)