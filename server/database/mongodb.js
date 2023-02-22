import mongoose from "mongoose";
import { config } from 'dotenv';

config();

mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// mongoose.set('strictQuery', true);

const connection = mongoose.connection;

connection.once('connected', () => {
    console.log('Connected to the Database');
});

connection.once('error', () => {
    console.log('Error occured while connecting to DB')
})