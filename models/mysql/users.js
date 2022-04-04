const { sequelize } = require('../../config/mysql');
const { DataTypes } = require('sequelize');

//definimos un modelo

const User = sequelize.define(
    "users", // nombre tabla
    {
        name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        age: {
            type: DataTypes.NUMBER,
        },
        email: {
            type: DataTypes.STRING,
        },
        password: {
            type: DataTypes.STRING,
        },
        role: {
            type: DataTypes.ENUM(["user", "admin"]),
        }
    },
    {
        timestamps:true, // si o si existe createdAt y updatedAt.
    }
);


module.exports= User;