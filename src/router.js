import express from "express";
import { userRoutes } from "./routes/userRoutes.js";
import { saltRoutes } from "./routes/saltRoutes.js";
import { loginRoutes } from "./routes/loginRoutes.js";
import { postsRoutes } from "./routes/postsRoutes.js";
import { likeRoutes } from "./routes/likeRoutes.js";
import { authenticateJWT } from "./auth/index.js";
import { customersRoutes } from "./routes/customersRoutes.js";
import { getCustomersById } from "./db/customers.js";
const router = (app) => {
  const route = express.Router();
  const routev2 = express.Router();
  app.use("/api/v1", route);
  route.use("/login", loginRoutes);
  route.use("/user", userRoutes);
  route.use('/posts',postsRoutes)
  //route.use("/salt", authenticateJWT, saltRoutes);
  //route.use("/posts", authenticateJWT, postsRoutes);
  
  route.use("/customers",  customersRoutes)
  //(req,res)=>{  
    //getCustomersById(req,res)  
    //res.json({asd:'mensaje hola'}) 
   //}  )
  
  
  
  route.use("/like", authenticateJWT, likeRoutes);

  //app.use('/api/v2', route)
  
};

export { router };
