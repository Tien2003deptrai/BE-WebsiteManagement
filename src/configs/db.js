import { Sequelize } from "sequelize";

const sequelize = new Sequelize('add123', 'root', 'Tien2003@',
    {
        host: 'localhost',
        dialect: 'mysql',
        // logging: false,
        logging: console.log
    }
)

export default sequelize;