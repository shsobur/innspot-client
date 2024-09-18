import PropTypes from 'prop-types';
import auth from "../FirebaseConfig/Firebase.config";
import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";

export const AuthContext = createContext(null);

const AuthProvider = ({children}) => {
  const [user, setUser] = useState(null);
  console.log(user);
  const [loading, setLoading] = useState(false);

  const googleProvider = new GoogleAuthProvider();

  const signUpUser = (email, password) => {
    setLoading(true)
    return createUserWithEmailAndPassword(auth, email, password);
  }

  const signInUser = (email, password) => {
    setLoading(true)
    return signInWithEmailAndPassword(auth, email, password);
  }

  const googleSigninUser = () => {
    setLoading(true)
    return signInWithPopup(auth, googleProvider);
  }

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);
    })
  }, [])

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo
    })
  }

  const logOut = () => {
    return signOut(auth);
  }

  const authInfo = {
    user,
    loading,
    signUpUser,
    signInUser,
    updateUserProfile,
    googleSigninUser,
    logOut
  }

  return (
    <AuthContext.Provider value={authInfo}>
      {children}
    </AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node
}

export default AuthProvider;