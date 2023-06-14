import express, { Request, Response } from "express";

const app = express();

app.get('/', (req: Request, res: Response ) =>{
    res.send('Servidor Online!')
})

app.get('/login/:slug', (req: Request, res: Response) =>{
    let slug = req.params.slug;
    res.send(`Bem vindo ${slug}`)
})
app.get('/register', (req: Request, res: Response) => {
    res.send("Pagina de cadastro!")
})

app.listen(3000, ()=> {console.log('Servidor Online!')})