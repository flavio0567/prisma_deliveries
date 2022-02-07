import { Request, Response } from "express"
import { CreateClientUseCase } from "./CreateCientUseCase"

export class CreateClientController {
  async handle(request: Request, response: Response) {
    const { client_username, client_password, client_name } = request.body  
    
    const createClientUseCase = new CreateClientUseCase()
    
    const result = await createClientUseCase.execute({
      client_username,
      client_password,
      client_name
    })

    return response.json(result)
  }
}