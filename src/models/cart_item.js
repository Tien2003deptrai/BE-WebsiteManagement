import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const CartItem = sequelize.define('CartItem', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    session_id: DataTypes.INTEGER,
    product_id: DataTypes.INTEGER,
    quantity: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'cart_item'
});

export default CartItem;
