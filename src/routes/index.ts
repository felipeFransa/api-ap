import { Router, Request, Response } from 'express';

const router = Router()

router.get('/', (req: Request, res: Response ) =>{
    res.send('Servidor Online!')
})

router.get('/login/:slug', (req: Request, res: Response) =>{
    let slug = req.params.slug;
    res.send(`Bem vindo ${slug}`)
})
router.get('/register', (req: Request, res: Response) => {
    res.send("Pagina de cadastro!")
})

export default router;