import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const Discount = sequelize.define('Discount',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        desc: DataTypes.TEXT,
        discount_percent: DataTypes.DECIMAL,
        active: DataTypes.BOOLEAN,
        created_at: DataTypes.DATE,
        modified_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        timestamps: true,
        tableName: 'discount',
    }
);

export default Discount;