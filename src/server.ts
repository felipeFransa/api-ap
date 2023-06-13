import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response )=>{
    res.send('Servidor Online!')
})

app.listen(3000, ()=> {console.log('Servidor Online!')})