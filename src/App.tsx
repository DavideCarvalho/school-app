import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { Actions, useStoreActions } from 'easy-peasy';
import { LoginPage } from './login/pages';
import { SchoolPage } from './school/pages';
import { auth, firestore } from './utils/firebase';
import { StoreModel } from './store';
import './App.css';

interface UserDocument {
  name: string;
  school: string;
  type: string;
}

const App: React.FC = () => {
  const history = useHistory();
  const { closeSession, startSession } = useStoreActions(({ loggedUser }: Actions<StoreModel>) => loggedUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (!user) {
        closeSession();
        history.push('/login');
        return;
      }
      const documentSnapshot = await firestore
        .collection('users')
        .doc(user?.email!)
        .get();
      const userData: UserDocument = documentSnapshot.data() as UserDocument;
      startSession({ email: user.email!, name: userData.name, type: userData.type });
    });
    return () => unsubscribe();
  }, [closeSession, startSession, history]);
  return (
    <Switch>
      <Route exact path={['', '/login']}>
        <LoginPage />
      </Route>
      <Route path="/escola/*">
        <SchoolPage />
      </Route>
    </Switch>
  );
};

export default App;
