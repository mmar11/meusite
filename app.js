import * as dotenv from 'dotenv' // see https://github.com/motdotla/dotenv#how-do-i-use-dotenv-with-import
import { Router } from 'express'
import routes from './routes.js'
dotenv.config()

import express from 'express'
const app = express()
const PORT = 3000


app.use(express.json());



app.use(express.static('public'))

app.set('views', './src/views')
app.set('view engine', 'ejs')

app.use(routes);


app.listen(process.env.PORT || PORT, () => console.log(`servidor na porta ${PORT}`))