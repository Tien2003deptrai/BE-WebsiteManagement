import { Sequelize, DataTypes } from "sequelize";
import sequelize from "../configs/db.js";

const Product = sequelize.define('Product',
    {
        id: {
            type: DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        name: DataTypes.STRING,
        desc: DataTypes.TEXT,
        SKU: DataTypes.STRING,

        // TODO: foreign key
        category_id: DataTypes.INTEGER,
        inventory_id: DataTypes.INTEGER,
        discount_id: DataTypes.INTEGER,

        created_at: DataTypes.DATE,
        modified_at: DataTypes.DATE,
        deleted_at: DataTypes.DATE,
    },
    {
        timestamps: true,
        tableName: 'product',
    }
);

export default Product;
