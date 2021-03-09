const { Sequelize } = require('sequelize');
const database = {};

const options = {
    username: 'postegres',
    password: '123',
    database: 'notas',
    host: 'localhost',
    dialect: 'postgres',
}

const sequelize = new  Sequelize(options);

sequelize
    .authenticate()
    .then(() => console.log(`Conexão com o banco ${options.database} bem sucedida `))
    .catch(error => console.log(`Falha ao conectar ao banco ${options.database}: ${error}`));

database.sequelize = sequelize;

module.export = database;