import { OperationType } from '../../../../../modules/statements/entities/Statement';
import { InMemoryStatementsRepository } from '../../../../../modules/statements/repositories/in-memory/InMemoryStatementsRepository';
import { IStatementsRepository } from '../../../../../modules/statements/repositories/IStatementsRepository';
import { CreateStatementUseCase } from '../../../../../modules/statements/useCases/createStatement/CreateStatementUseCase';
import { GetStatementOperationError } from '../../../../../modules/statements/useCases/getStatementOperation/GetStatementOperationError';
import { GetStatementOperationUseCase } from '../../../../../modules/statements/useCases/getStatementOperation/GetStatementOperationUseCase';
import { InMemoryUsersRepository } from '../../../../../modules/users/repositories/in-memory/InMemoryUsersRepository';
import { IUsersRepository } from '../../../../../modules/users/repositories/IUsersRepository';

let inMemoryUsersRepository: IUsersRepository;
let inMemoryStatementsRepository: IStatementsRepository;

let createStatementUseCase: CreateStatementUseCase;
let getStatementOperationUseCase: GetStatementOperationUseCase;

describe('Get Statement Operation UseCase', () => {
  beforeEach(() => {
    inMemoryUsersRepository = new InMemoryUsersRepository();
    inMemoryStatementsRepository = new InMemoryStatementsRepository();

    createStatementUseCase = new CreateStatementUseCase(
      inMemoryUsersRepository,
      inMemoryStatementsRepository,
    );

    getStatementOperationUseCase = new GetStatementOperationUseCase(
      inMemoryUsersRepository,
      inMemoryStatementsRepository,
    );
  });

  it('should be able to get the user statement operation using user_id and statement_id', async () => {
    const user = await inMemoryUsersRepository.create({
      name: 'fake_name',
      email: 'fake_email@mail.com',
      password: 'fake_password',
    });

    const statement = await createStatementUseCase.execute({
      user_id: user.id,
      type: OperationType.DEPOSIT,
      amount: 1000,
      description: 'fake_description_2',
    });

    const statementOperation = await getStatementOperationUseCase.execute({
      user_id: user.id,
      statement_id: statement.id,
    });

    expect(statementOperation).toHaveProperty('id');
    expect(statementOperation.id).toEqual(statement.id);
    expect(statementOperation).toEqual(statement);
  });

  it('should not be able to get the user statement operation if the user does not exist', async () => {
    await expect(
      getStatementOperationUseCase.execute({
        user_id: 'fake_user_id',
        statement_id: 'fake_statement_id',
      }),
    ).rejects.toBeInstanceOf(GetStatementOperationError.UserNotFound);
  });

  it('should not be able to get the user statement operation if the statement does not exist', async () => {
    const user = await inMemoryUsersRepository.create({
      name: 'fake_name',
      email: 'fake_email@mail.com',
      password: 'fake_password',
    });

    await expect(
      getStatementOperationUseCase.execute({
        user_id: user.id,
        statement_id: 'fake_statement_id',
      }),
    ).rejects.toBeInstanceOf(GetStatementOperationError.StatementNotFound);
  });
});
