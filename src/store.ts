import { Action, action, createStore } from 'easy-peasy';

export interface StoreModel {
  loggedUser: LoggedUserModel;
}

interface LogUserAction {
  email: string;
  name: string;
  type: string;
  school: SchoolModel;
}

interface LoggedUserModel {
  email: string;
  name: string;
  type: string;
  school: SchoolModel | null,
  fetching: boolean;
  startSession: Action<LoggedUserModel, LogUserAction>;
  closeSession: Action<LoggedUserModel>;
}

interface SchoolModel {
  id: string;
  city: string
}

const loggedUser: LoggedUserModel = {
  email: '',
  name: '',
  type: '',
  school: null,
  fetching: true,
  startSession: action((state, payload) => {
    state.email = payload.email;
    state.name = payload.name;
    state.type = payload.type;
    state.school = payload.school;
    state.fetching = false;
  }),
  closeSession: action(state => {
    state.email = '';
    state.name = '';
    state.type = '';
    state.school = null;
    state.fetching = false;
  }),
};

const storeModel: StoreModel = {
  loggedUser,
};

export const store = createStore(storeModel, {
  devTools: true,
});
