import Express from "express";
import homeController from "../controllers/homeController.js";

const homeRoutes = Express.Router();
const { getHome,getDocumentation } = homeController;

homeRoutes.get('/',getHome)
homeRoutes.get('/docs', getDocumentation)


export { homeRoutes };
