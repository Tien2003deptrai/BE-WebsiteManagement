import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const OrderItems = sequelize.define('OrderItems', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'order_items'
});

export default OrderItems;
