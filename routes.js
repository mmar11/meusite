import { Router } from 'express'
import { indexControl } from './src/controllers/viewcontroller.js'
const routes = Router()


routes.get('/', indexControl)

export default routes