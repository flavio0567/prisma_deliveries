import express from 'express'
import { routes } from './shared/infra/http/routes'

const PORT = '3000'

const app = express()

app.use(express.json())

app.use(routes)

app.listen(3000, () => console.log('Server is running on: ' + PORT))