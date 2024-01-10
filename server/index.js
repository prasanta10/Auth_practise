import express from 'express';
import * as dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './mongoDB/connect.js';

import postRoutes from './Routes/postRoutes.js';

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({limit: '50mb'}));

app.use('/post', postRoutes);

const PORT= 8080 || process.env.PORT;

app.get('/', (req,res) => {
    res.send('Hello fromt the other side');
})

const startServer = async() =>{
    try {
        connectDB(process.env.MONGODB_URL);
        app.listen(PORT,  () =>{
            console.log(`App is running on port ${PORT}`);
        })
    } catch (error) {
        console.log(error);
    }
}

startServer();