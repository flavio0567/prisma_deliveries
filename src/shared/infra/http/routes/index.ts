import { Router } from 'express'
import { clientRouter } from '../../../../modules/clients/infra/http/routes/clients.routes'

const routes = Router()

routes.use('/', clientRouter)

export { routes }