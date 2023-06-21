import express, { Request, Response } from "express";
import mainRoutes from "./routes/index"

const app = express();

app.use(mainRoutes)

app.listen(3000, ()=> {console.log('Servidor Online!')})