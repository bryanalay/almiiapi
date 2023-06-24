import Express from "express";
import sensorController from "../controllers/sensorController.js";

const { getData, insertData } = sensorController

const sensorRoutes = Express.Router()

sensorRoutes.get('/',getData)
sensorRoutes.post('/',insertData)

export { sensorRoutes }