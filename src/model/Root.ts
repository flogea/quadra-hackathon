import { types } from 'mobx-state-tree';

import { UserStore } from './UserStore';

const RootStore = types.model('RootStore', {
  userStore: UserStore,
});

const initialState = {
  userStore: {
    users: [],
    currentUser: null,
    loading: false,
    error: null,
  },
};

export const rootStore = RootStore.create(initialState);
