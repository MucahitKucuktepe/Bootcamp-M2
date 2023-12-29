import React, { createContext, useContext, useEffect, useState } from "react";
import { auth } from "../auth/firebase";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { toastErrorNotify, toastSuccessNotify } from "../helpers/ToastNotify";
export const AuthContext = createContext();
export const useAuthContext = () => {
  return useContext(AuthContext);
};
const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    userObserver();
  }, []);

  const createUser = async (email, password, displayName) => {
    try {
      //? yeni bir kullanıcı oluşturmak için firebase metodu
      const userCredential = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      await updateProfile(auth.currentUser, {
        displayName: displayName,
      });
      navigate("/");
      toastSuccessNotify("Registered succesfully!");
      console.log(userCredential.user.auth);
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };
  const signIn = async (email, password) => {
    try {
      //? mevcut bir kullanıcının giriş yapabilmesi için kullanılan metod firebase metodu
      const userCredential = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      navigate("/");
      toastSuccessNotify("Logged in succesfully!");
      console.log(userCredential.user.auth);
    } catch (error) {
      console.log(error);
      toastErrorNotify(error.message);
    }
  };

  const userObserver = () => {
    onAuthStateChanged(auth, (user) => {
      //? Kullanıcının signin olup olmadığını takip eden ve kullanıcı değiştiğinde yeni kullanıcıyı response olarak döenen firebase metodu
      if (user) {
        console.log(user);
        const { email, displayName, photoURL } = user;
        setCurrentUser({ email, displayName, photoURL });
      } else {
        console.log("logged out");
        setCurrentUser(false);
      }
    });
  };
  const logOut = () => {
    signOut(auth);
    toastSuccessNotify("Logged Out Succesfully");
    // .then(() => {
    //   // Sign-out successful.
    // })
    // .catch((error) => {
    //   // An error happened.
    // });
  };
  const signUpProvider = () => {
    //* => Authentication => sign-in-method => enable Google
    //! Google ile girişi enable yap
    //! projeyi deploy ettikten sonra google sign in çalışması için domain listesine deploy linkini ekle
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
        toastSuccessNotify("Logged in succesfuly");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const signUpProviderGithub = () => {
    //* => Authentication => sign-in-method => enable Google
    //! Google ile girişi enable yap
    //! projeyi deploy ettikten sonra google sign in çalışması için domain listesine deploy linkini ekle
    const provider = new GithubAuthProvider();
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
        navigate("/");
        toastSuccessNotify("Logged in succesfuly");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const forgotPassword = (email) => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        toastSuccessNotify("Please check your mail box!");
      })
      .catch((error) => {
        toastErrorNotify(error.message);
      });
  };
  const values = {
    createUser,
    signIn,
    logOut,
    currentUser,
    signUpProvider,
    signUpProviderGithub,
    forgotPassword,
  };
  return (
    <AuthContext.Provider value={values}> {children} </AuthContext.Provider>
  );
};

export default AuthContextProvider;
