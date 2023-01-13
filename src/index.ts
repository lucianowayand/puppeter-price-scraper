import express from 'express'
import bodyParser from 'body-parser'
import { getPrices } from './services/puppeteer';

const app = express();

app.use(bodyParser.json())

app.use(express.json())

app.get('/', async (req: any, res: any) => {
    try {
        const notebooks = await getPrices()
        res.send(notebooks).status(200)
        
    } catch (error) {
        res.send(error).status(500)
    }
})

app.listen(3333, () => console.log('REST API server ready at: http://localhost:3333'))