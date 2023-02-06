import express from "express";
import cors from 'cors'
import { router } from "./router.js";

const app = express()
const PORT = 3050 ||process.env.PORT;
app.use(cors())
app.use(express.json())

router(app)

app.listen(PORT,()=>{
    console.log('Running at port ',`${PORT}`);
})