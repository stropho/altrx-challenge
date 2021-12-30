import L from '../../common/logger';

interface User {
  email: string;
  firstName: string;
  id: string;
  lastName: string;
  password: string;
}

let id = 0;
const makeUser = (user: Omit<User, 'id'>): User => ({
  id: String(id++),
  ...user,
});
const users: User[] = [
  makeUser({
    email: 'master.admin@foo.bar',
    firstName: 'master',
    lastName: 'admin',
    password: 'admin',
  }),
  makeUser({
    email: 'john.doe@foo.bar',
    firstName: 'john',
    lastName: 'doe',
    password: 'johndoe',
  }),
];

export class usersService {
  all(): Promise<User[]> {
    L.info(users, 'fetch all users');
    return Promise.resolve(users);
  }

  byId(id: string): Promise<User | null> {
    L.info(`fetch user with id ${id}`);
    return this.all().then((r) => r.find((user) => user.id === id) || null);
  }
  validateCredentials(email: string, password: string): Promise<string | null> {
    L.info(`validate user with email ${email}`);
    return this.all()
      .then((r) =>
        r.find((user) => user.email === email && user.password === password)
      )
      .then((user) => (user ? user.id : null));
  }

  async removeById(id: string): Promise<boolean> {
    L.info(`remove user with id ${id}`);
    const users = await this.all();
    const userIndex = users.findIndex((user) => user.id === id);
    if (userIndex < 0) return false;
    users.splice(userIndex, 1);
    return true;
  }

  async updateById(
    id: string,
    firstName: string,
    lastName: string,
    email: string,
    password: string
  ): Promise<User | null> {
    L.info(`update user with id ${id}`);
    const users = await this.all();
    const user = users.find((user) => user.id === id);
    if (!user) return null;
    Object.assign(user, { firstName, lastName, email, password });
    return user;
  }

  create(
    email: string,
    firstName: string,
    lastName: string,
    password: string
  ): Promise<User> {
    L.info(`create user with name ${firstName}`);
    const user: User = makeUser({
      email,
      firstName,
      lastName,
      password,
    });
    users.push(user);
    return Promise.resolve(user);
  }
}

export default new usersService();
