import React, { useEffect, useState } from 'react';
import 'bulma-divider/dist/css/bulma-divider.min.css';
import { firestore } from '../../../utils/firebase';
import firebase from 'firebase';
import { Loader } from '../../../common/components/loader';
import {State, useStoreState} from "easy-peasy";
import {StoreModel} from "../../../store";
import {SchoolModel} from "../../../store/LoggedUserStore";

interface UserDocument {
  name: string;
  school: string;
  type: string;
}

interface UserDocumentWithEmail extends UserDocument {
  email: string;
}

interface UserCollection {
  [email: string]: UserDocument;
}

interface LoadingState {
  loading: boolean;
  success: boolean;
  fetching: boolean;
  error: boolean;
}

function transformDocumentArrayIntoProfessorArray(
  professorDoc: firebase.firestore.QueryDocumentSnapshot<firebase.firestore.DocumentData>,
): UserDocumentWithEmail {
  const professor: UserDocument = (professorDoc.data() as unknown) as UserDocument;
  return {
    ...professor,
    email: professorDoc.id,
  };
}

export const SchoolAdminProfessorPage: React.FC = () => {
  const [data, setData] = useState<UserDocumentWithEmail[]>([]);
  const [isLoading, setIsLoading] = useState<LoadingState>({ loading: true, fetching: true, success: false, error: false });
  const school = useStoreState<State<StoreModel>, SchoolModel>(({ loggedUser }) => loggedUser.school!);
  useEffect(() => {
    const schoolRef = firestore.collection('schools').doc(school.id);
    const unsubscribe = firestore
      .collection('users')
      .where('school', '==', schoolRef)
      .onSnapshot(snap => {
        setIsLoading({ ...isLoading, fetching: false, success: true, loading: false });
        const professors = snap.docs.map<UserDocumentWithEmail>(transformDocumentArrayIntoProfessorArray);
        setData(professors);
      });
    return () => unsubscribe();
  }, [setData, isLoading, setIsLoading, school]);
  return (
    <div className="container">
      <div className="columns">
        <div className="column is-8 is-offset-2">
          <p className="has-text-centered title">School Admin Professor Page</p>
          <div className="is-divider" />
          <Loader active={isLoading.fetching}/>
          {isLoading.success && !data.length && <p>Não há nenhum professor</p>}
          {!isLoading.success && isLoading.error && <p>Erro ao pesquisar professores</p>}
          {data.map(({ name, email }) => {
            return (
              <div key={email}>
                <div>
                  <p>{name}</p>
                </div>
                <div className="is-divider" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
