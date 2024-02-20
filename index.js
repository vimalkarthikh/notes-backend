import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { databaseConnection } from './db.js';
import { userRouter } from './router/userroute.js';
import { notesRouter } from './router/notesroute.js';
import { isAuth } from './middleware/auth.js';


dotenv.config()

const PORT = process.env.PORT;

const app = express();

//middleware
app.use(express.json());
app.use(cors());

//DB Connection
databaseConnection();

//routes
app.use('/',userRouter);
app.use('/notes',isAuth,notesRouter);

app.get('/',(req,res)=>{
    res.send("Hello ! User This is Success message from Notes Application Server")
})

app.listen(PORT,()=>{console.log("Server is running in port ");});
