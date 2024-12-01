import { types, flow } from 'mobx-state-tree';
import api from '../api/api';

const UserModel = types.model('User', {
  id: types.identifierNumber,
  firstName: types.string,
  lastName: types.string,
  phone: types.string,
  address: types.string,
  city: types.string,
  post: types.string,
  funcBlock: types.string,
  orgStructureoOne: types.string,
  orgStructureTwo: types.string,
  orgStructureThree: types.string,
  orgStructureFour: types.string,
  role: types.string,
});

export const UserStore = types
  .model('UserStore', {
    users: types.array(UserModel),
    currentUser: types.maybeNull(UserModel),
    loading: types.boolean,
    error: types.maybeNull(types.string),
  })
  .actions((self) => ({
    fetchUsers: flow(function* () {
      self.loading = true;
      self.error = null;

      try {
        const response = yield api.get('/users');
        self.users = response;
      } catch (err) {
        self.error = 'Ошибка при загрузке списка пользователей';
        console.error(err);
      } finally {
        self.loading = false;
      }
    }),

    fetchUserById: flow(function* (userId) {
      self.loading = true;
      self.error = null;

      try {
        const response = yield api.get(`/users/${userId}`);
        self.currentUser = response.id;
      } catch (err) {
        self.error = `Ошибка при загрузке пользователя с ID ${userId}`;
        console.error(err);
      } finally {
        self.loading = false;
      }
    }),
  }));
