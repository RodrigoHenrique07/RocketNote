
import { initializeApp } from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyDTLXKMzleRcikxqwqw5GMBHLgncV-Wskk',
  authDomain: 'rocket-note-auth.firebaseapp.com',
  projectId: 'rocket-note-auth',
  storageBucket: 'rocket-note-auth.appspot.com',
  messagingSenderId: '868486277734',
  appId: '1:868486277734:web:ceb7e03d7e0f2ea5bc9ba7'
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)


// firebase/app inicializa a conexão do firebase com a aplicação //
// o getAuth obtem os parâmetros de autenticação da aplicação, ou seja dentro o auth tem os parâmetros //