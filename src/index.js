import express from 'express';
import sequelize from './configs/db.js';

const app = express();
const port = 3000;

sequelize.sync().then(() => {
    console.log('Database & tables created/aligned!');
}).catch(err => {
    console.error('Unable to create tables, shutting down...', err);
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
