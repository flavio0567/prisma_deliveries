import ICreateClientDTO from '../../dtos/ICreateClientDTO';
import { prisma } from '../../../../shared/database/prismaClient';
import { hash } from 'bcrypt';

export class CreateClientUseCase {

  async execute({ client_password, client_username, client_name }: ICreateClientDTO) {
    console.log('nome do client =====>', client_name)
    const clientExist = await prisma.clients.findFirst({
      where: {
        client_username: client_name,
        // client_username :{
        //   mode: "insensitive"
        // }
      }
    })

    if (clientExist) {
      console.log(clientExist)
      throw new Error("Client already exists!")
    }

    const hashedPassword = await hash(client_password, 10)

    await prisma.clients.create({
      data: {
        client_username,
        client_password: hashedPassword,
        client_name,
      } 
    })
  }
}