import { getCustomRepository } from "typeorm";
import { UsersRepositories } from "../repositories/UsersRepositories";
import {instanceToPlain} from 'class-transformer';


class ListUsersService{
  async execute(){
    const userRepository = getCustomRepository(UsersRepositories);

    const users = userRepository.find()

    return instanceToPlain(users);
  }
}


export {ListUsersService}