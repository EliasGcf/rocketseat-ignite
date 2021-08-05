import { User } from '../../model/User';
import { IUsersRepository } from '../../repositories/IUsersRepository';

interface IRequest {
  name: string;
  email: string;
}

class CreateUserUseCase {
  constructor(private usersRepository: IUsersRepository) {}

  execute({ name, email }: IRequest): User {
    const userAlreadyExists = this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new Error('User already exists');
    }

    const newUser = this.usersRepository.create({ name, email });

    return newUser;
  }
}

export { CreateUserUseCase };
