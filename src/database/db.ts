const Sequelize = require('sequelize');

const DB_NAME = 'db_ventavehiculos_node';

const DB_USER = 'janer';

const DB_PASS = '52637585-Rosa';

export const database = new Sequelize(
    DB_NAME,
    DB_USER,
    DB_PASS,

    {
        host: 'localhost',
        dialect: 'mysql',
        port: 3306
    }
);


database.sync({force: true})
    .then(function () {
        console.log('Base de dato creada correctamente...');
    });