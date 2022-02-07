import { Router } from 'express'
import { CreateClientController } from '../../../useCases/createClient/ClientsCreateController'

const clientRouter = Router()

const clientClientController = new CreateClientController()

clientRouter.post('/client', clientClientController.handle)

export { clientRouter }