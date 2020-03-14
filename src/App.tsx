import React, {useEffect} from 'react';
import {Route, Switch, useHistory, useLocation} from 'react-router-dom';
import {Actions, State, useStoreActions, useStoreState} from 'easy-peasy';
import {LoginPage} from './login/pages';
import {SchoolPage} from './school/pages';
import {auth, firestore} from './utils/firebase';
import {StoreModel} from './store';
import './App.css';

interface Redirects {
  [userType: string]: string;
}

interface UserDocument {
  name: string;
  school: string;
  type: string;
}

const redirects: Redirects = {
  teacher: '/escola/home',
  'school-admin': '/escola/home',
};

const App: React.FC = () => {
  const history = useHistory();
  const location = useLocation();
  const { closeSession, startSession } = useStoreActions(({ loggedUser }: Actions<StoreModel>) => loggedUser);
  const { type, fetching } = useStoreState(({ loggedUser }: State<StoreModel>) => loggedUser);
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async user => {
      if (!user) {
        closeSession();
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
  useEffect(() => {
    if (fetching) return;
    if (!type) {
      if (location.pathname === '/login') return;
      history.push('/login');
    }
    if (location.pathname === '/login') {
      history.push(redirects[type]);
    }
  }, [history, location, type, fetching]);
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
