import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    username: DataTypes.STRING,
    password: DataTypes.TEXT,
    first_name: DataTypes.STRING,
    last_name: DataTypes.STRING,
    telephone: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'user'
});

export default User;
