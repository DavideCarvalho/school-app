import { Action, action, createStore } from 'easy-peasy';

export interface StoreModel {
  loggedUser: LoggedUserModel;
}

interface LogUserAction {
  email: string;
  name: string;
  type: string;
}

interface LoggedUserModel {
  email: string;
  name: string;
  type: string;
  fetching: boolean;
  startSession: Action<LoggedUserModel, LogUserAction>;
  closeSession: Action<LoggedUserModel>;
}

const loggedUser: LoggedUserModel = {
  email: '',
  name: '',
  type: '',
  fetching: true,
  startSession: action((state, payload) => {
    state.email = payload.email;
    state.name = payload.name;
    state.type = payload.type;
    state.fetching = false;
  }),
  closeSession: action(state => {
    state.email = '';
    state.name = '';
    state.type = '';
    state.fetching = false;
  }),
};

const storeModel: StoreModel = {
  loggedUser,
};

export const store = createStore(storeModel, {
  devTools: true,
});
