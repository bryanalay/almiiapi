import express from "express";
import cors from 'cors'
import { router } from "./router.js";

const app = express()

app.use(cors())
app.use(express.json())

router(app)

app.listen(3000 ||process.env.PORT,()=>{
    console.log(`Running ${process.env.PORT || 3000}`);
})