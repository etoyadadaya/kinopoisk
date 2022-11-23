import React, {createContext, FC, HTMLProps} from "react";

import {Auth, getAuth} from "firebase/auth";
import {Firestore, getFirestore} from "firebase/firestore";
import {FirebaseApp, initializeApp} from "firebase/app";

export const firebaseContext = createContext<{
  app: FirebaseApp;
  auth: Auth;
  db: Firestore;
}>(null);

type IFirebaseProps = HTMLProps<HTMLElement>;

const Firebase: FC<IFirebaseProps> = ({children}) => {
  const app = initializeApp({
    apiKey: "AIzaSyBL0hA7SHbSrDkgp6j6iOQmXPcJ1O2BTvU",
    authDomain: "kinopoisk-c3069.firebaseapp.com",
    projectId: "kinopoisk-c3069",
    storageBucket: "kinopoisk-c3069.appspot.com",
    messagingSenderId: "848981064619",
    appId: "1:848981064619:web:1de404308859769e1070ee",
    measurementId: "G-46FTDRR5EF",
  });

  const auth = getAuth(app);
  const db = getFirestore(app);

  return (
    <firebaseContext.Provider
      value={{
        app,
        auth,
        db,
      }}
    >
      {children}
    </firebaseContext.Provider>
  );
};

export default Firebase;
