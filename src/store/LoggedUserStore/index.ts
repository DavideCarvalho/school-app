import {action, Action} from "easy-peasy";

export interface LogUserAction {
  email: string;
  name: string;
  type: string;
  school: SchoolModel;
}

export interface LoggedUserModel {
  email: string;
  name: string;
  type: string;
  school: SchoolModel | null,
  fetching: boolean;
  startSession: Action<LoggedUserModel, LogUserAction>;
  closeSession: Action<LoggedUserModel>;
}

export interface SchoolModel {
  id: string;
  city: string
}

export const loggedUser: LoggedUserModel = {
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
