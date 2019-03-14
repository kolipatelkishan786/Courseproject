import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';

export class AuthService {
  signupUser(email: string, password: string) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
      .catch(
        error => console.log(error)
      )
  }
}
