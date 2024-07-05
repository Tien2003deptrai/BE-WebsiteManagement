import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const ShoppingSession = sequelize.define('ShoppingSession', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'shopping_session'
});

export default ShoppingSession;
