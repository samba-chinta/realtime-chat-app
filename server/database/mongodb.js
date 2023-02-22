import mongoose from "mongoose";
import { config } from 'dotenv';

config();   // configuring env variables

// connecting to mongoDB using connection url in env
mongoose.connect(process.env.MONGO_DB_CONNECTION_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

// get connection object
const connection = mongoose.connection;

// check whether DB connected or not 
// using events 'connected' and 'error'
connection.once('connected', () => {
    console.log('Connected to the Database');
});

connection.once('error', () => {
    console.log('Error occured while connecting to DB')
})