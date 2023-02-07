import express from "express";
import cors from 'cors'
import { router } from "./router.js";

const app = express()
const port = process.env.PORT||3000;
app.use(cors())
app.use(express.json())

router(app)

app.listen(port,()=>{
    console.log('Running at port ',`${port}`);
})