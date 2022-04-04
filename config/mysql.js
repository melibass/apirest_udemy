const { Sequelize } = require('sequelize');

const database = process.env.MYSQL_DATABASE;
const username = process.env.MYSQL_USER;
const password = process.env.MYSQL_PASSWORD;
const host = process.env.MYSQL_HOST;
// const port = process.env.MYSQL_PORT;

//instanciamos la conexion de mysql

const sequelize = new Sequelize(
    database,
    username,
    password,
    {
        host,
        dialect: "mysql"
    }
)

//conexion a la db
const dbConnectMySql = async() =>{

    try{
        await sequelize.authenticate();
        console.log('MySQL Connection success')
    } catch(e){
        console.log('MySQL Connection error', e)
    }
}


module.exports= { sequelize, dbConnectMySql}