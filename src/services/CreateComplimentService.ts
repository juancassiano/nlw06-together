import { getCustomRepository } from "typeorm"
import { ComplimentsRepositories } from "../repositories/ComplimentsRepositories"
import { UsersRepositories } from "../repositories/UsersRepositories";

interface IComplimentRequest{
  tag_id: string;
  user_receiver : string;
  user_sender: string;
  message: string;
}

class CreateComplimentService{

  async execute({ user_receiver, user_sender, message, tag_id}: IComplimentRequest){ 
    const complimentsRepositories = getCustomRepository(ComplimentsRepositories)
    const usersRepository = getCustomRepository(UsersRepositories);

    if(user_sender===user_receiver){
      throw new Error("Incorrect user receiver")
    }

    const userReceiverExists = await usersRepository.findOne(user_receiver)

    if(!userReceiverExists){
      throw new Error("User receiver does not exists")
    }

    const compliment = complimentsRepositories.create({
      tag_id,
      user_receiver,
      user_sender,
      message
    })

    await complimentsRepositories.save(compliment)

    return compliment
  }
}

export {CreateComplimentService}