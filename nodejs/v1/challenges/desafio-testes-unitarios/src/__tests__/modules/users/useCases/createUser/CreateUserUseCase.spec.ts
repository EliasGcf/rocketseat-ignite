import { InMemoryUsersRepository } from '../../../../../modules/users/repositories/in-memory/InMemoryUsersRepository';
import { IUsersRepository } from '../../../../../modules/users/repositories/IUsersRepository';
import { CreateUserError } from '../../../../../modules/users/useCases/createUser/CreateUserError';
import { CreateUserUseCase } from '../../../../../modules/users/useCases/createUser/CreateUserUseCase';

let inMemoryUsersRepository: IUsersRepository;

let createUserUseCase: CreateUserUseCase;

describe('Create User UseCase', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    createUserUseCase = new CreateUserUseCase(inMemoryUsersRepository);
  });

  it('should be able to create a new user', async () => {
    const usersRepositoryCreateUser = spyOn(
      inMemoryUsersRepository,
      'create',
    ).and.callThrough();

    const userData = {
      name: 'fake_name',
      email: 'fake_email@mail.com',
    };

    const user = await createUserUseCase.execute({
      ...userData,
      password: '123456',
    });

    expect(usersRepositoryCreateUser).toHaveBeenCalledWith(
      expect.objectContaining({
        name: userData.name,
        email: userData.email,
      }),
    );
    expect(user).toHaveProperty('id');
  });

  it('should not be able to create a user with duplicate email', async () => {
    const usersRepositoryFindByEmail = spyOn(
      inMemoryUsersRepository,
      'findByEmail',
    ).and.callThrough();

    const user_fake_email = 'fake_email@mail.com';

    await createUserUseCase.execute({
      name: 'fake_name',
      email: user_fake_email,
      password: '123456',
    });

    await expect(
      createUserUseCase.execute({
        name: 'fake_name',
        email: user_fake_email,
        password: '123456',
      }),
    ).rejects.toBeInstanceOf(CreateUserError);
    expect(usersRepositoryFindByEmail).toHaveBeenNthCalledWith(2, user_fake_email);
  });
});
