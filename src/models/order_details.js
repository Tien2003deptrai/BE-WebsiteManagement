import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const OrderDetails = sequelize.define('OrderDetails', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user_id: DataTypes.INTEGER,
    total: DataTypes.DECIMAL,
    payment_id: DataTypes.INTEGER,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'order_details'
});

export default OrderDetails;
