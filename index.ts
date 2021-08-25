import express from  'express';
import  Routes from "./routes/restaurant.js";
const app = express();
import fileUpload from "express-fileupload";

import dbConnection from './config/dbConnection';
dbConnection.dbConnect();
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(fileUpload({
        createParentPath: true
    }));

app.use('/',Routes);

app.get('/',(req,res)=>{
        res.send(process.env.DB_CONFIG);
})


app.listen(3000);