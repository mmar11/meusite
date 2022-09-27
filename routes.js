import { Router } from 'express'
import { contactControl, contactPost, indexControl } from './src/controllers/viewcontroller.js'

import multer from 'multer'
const upload = multer({ dest: 'uploads/' })
const routes = Router()

routes.get('/', indexControl)
routes.get('/contact', contactControl)
routes.post('/contact', upload.none(), contactPost)


export default routes