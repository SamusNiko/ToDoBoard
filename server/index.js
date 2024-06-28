require('dotenv').config();

const express = require('express');
const sequelize = require('./db');
const cors = require('cors');
const cookieParser = require('cookie-parser'); // нуден чтобы работать с куками
const router = require('./routes/index');
const errorHandler = require('./middleware/errorHandlingMiddleware');
const PORT = process.env.PORT || 5000;

const app = express();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials: true
}));

app.use(express.json());
app.use(cookieParser());

app.use('/api', router);

app.use(errorHandler); //Error handler should be the last

app.get('/', (req, res) => {
    res.status(200).json({ message: "Working" })
})
const start = async() => {
    try {
        await sequelize.authenticate()
        await sequelize.sync()
        app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
    } catch (error) {
        console.log(error);
    }
};

start();