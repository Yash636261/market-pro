require('dotenv').config();
require('express-async-errors');
const express = require('express');
const app = express();
const connectDB = require('./db/connect');
const Project = require('./models/Projects');



const Userrouter = require('./routes/User');
const Projectrouter = require('./routes/Projects');
const auth = require('./middleware/authentication');

const cors = require('cors');
app.use(cors());
app.use(express.json());


app.use('/api/v1/User', Userrouter);
app.use('/api/v1/Projects', auth, Projectrouter);


const start = async () => {
    try {
        await connectDB(process.env.MONGO_URI);
        app.listen(process.env.PORT, () => {
            console.log(`server chilling at port ${process.env.PORT} `);
        });
    } catch (error) {
        console.log(error);
    }
}
start();