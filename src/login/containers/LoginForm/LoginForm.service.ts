import { firebaseApp } from '../../../utils/firebase';

export async function loginUser(email: string, password: string): Promise<void> {
  await firebaseApp.auth().signInWithEmailAndPassword(email, password);
}
