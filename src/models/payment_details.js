import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const PaymentDetails = sequelize.define('PaymentDetails', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    order_id: DataTypes.INTEGER,
    amount: DataTypes.DECIMAL,
    provider: DataTypes.STRING,
    status: DataTypes.STRING,
    created_at: DataTypes.DATE,
    modified_at: DataTypes.DATE
}, {
    timestamps: false,
    tableName: 'payment_details'
});

export default PaymentDetails;
