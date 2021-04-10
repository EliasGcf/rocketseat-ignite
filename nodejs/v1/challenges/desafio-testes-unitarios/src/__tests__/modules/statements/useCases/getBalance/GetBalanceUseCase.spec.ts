import { OperationType } from '../../../../../modules/statements/entities/Statement';
import { InMemoryStatementsRepository } from '../../../../../modules/statements/repositories/in-memory/InMemoryStatementsRepository';
import { IStatementsRepository } from '../../../../../modules/statements/repositories/IStatementsRepository';
import { CreateStatementUseCase } from '../../../../../modules/statements/useCases/createStatement/CreateStatementUseCase';
import { GetBalanceError } from '../../../../../modules/statements/useCases/getBalance/GetBalanceError';
import { GetBalanceUseCase } from '../../../../../modules/statements/useCases/getBalance/GetBalanceUseCase';
import { InMemoryUsersRepository } from '../../../../../modules/users/repositories/in-memory/InMemoryUsersRepository';
import { IUsersRepository } from '../../../../../modules/users/repositories/IUsersRepository';

let inMemoryUsersRepository: IUsersRepository;
let inMemoryStatementsRepository: IStatementsRepository;

let createStatementUseCase: CreateStatementUseCase;
let getBalanceUseCase: GetBalanceUseCase;

describe('Get Balance UseCase', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryStatementsRepository = new InMemoryStatementsRepository();

    createStatementUseCase = new CreateStatementUseCase(
      inMemoryUsersRepository,
      inMemoryStatementsRepository,
    );

    getBalanceUseCase = new GetBalanceUseCase(
      inMemoryStatementsRepository,
      inMemoryUsersRepository,
    );
  });

  it('should be able to get the user balance', async () => {
    const user = await inMemoryUsersRepository.create({
      name: 'fake_name',
      email: 'fake_email@mail.com',
      password: 'fake_password',
    });

    const statementsPromise = [
      createStatementUseCase.execute({
        user_id: user.id,
        type: OperationType.DEPOSIT,
        amount: 1000,
        description: 'fake_description_1',
      }),
      createStatementUseCase.execute({
        user_id: user.id,
        type: OperationType.WITHDRAW,
        amount: 100,
        description: 'fake_description_2',
      }),
      createStatementUseCase.execute({
        user_id: user.id,
        type: OperationType.DEPOSIT,
        amount: 500,
        description: 'fake_description_3',
      }),
    ];

    await Promise.all(statementsPromise);

    const response = await getBalanceUseCase.execute({ user_id: user.id });

    expect(response).toHaveProperty('balance');
    expect(response.balance).toBe(1400);

    expect(response).toHaveProperty('statement');
    expect(response.statement).toBeInstanceOf(Array);
    expect(response.statement).toHaveLength(3);
  });

  it('should not be able to get the user balance if the user does not exists', async () => {
    await expect(
      getBalanceUseCase.execute({ user_id: 'fake_user_id' }),
    ).rejects.toBeInstanceOf(GetBalanceError);
  });
});
