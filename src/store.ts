import {createStore} from 'easy-peasy';
import {LoggedUserModel, loggedUser} from "./store/LoggedUserStore";

export interface StoreModel {
  loggedUser: LoggedUserModel;
}

const storeModel: StoreModel = {
  loggedUser,
};

export const store = createStore(storeModel, {
  devTools: true,
});
