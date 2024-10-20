import PropTypes from "prop-types";
import auth from "../FirebaseConfig/Firebase.config";
import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import useAxiosSecure from "@/hooks/useAxiosSecure";


export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const { axiosSecure } = useAxiosSecure();

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  const googleProvider = new GoogleAuthProvider();

  const signUpUser = async (email, password) => {
    setLoading(true);

    try {
      const result = await createUserWithEmailAndPassword(
        auth,
        email,
        password
      );
      return result;
    } catch (error) {
      console.log("Error signing in:", error);
    } finally {
      setLoading(false);
    }
  };

  const signInUser = async (email, password) => {
    setLoading(true);

    try {
      const result = await signInWithEmailAndPassword(auth, email, password);
      return result;
    } catch (error) {
      console.log("Error signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  const googleSigninUser = async () => {
    setLoading(true);

    try {
      const result = await signInWithPopup(auth, googleProvider);
      return result;
    } catch (error) {
      console.log("Error google signing up:", error);
    } finally {
      setLoading(false);
    }
  };

  const logOut = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unSubcribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      setLoading(false);

      const email = currentUser?.email;
      const userEmail = { email: email };

      // JWT secret__
      if (currentUser) {
        axiosSecure.post("/jwt", userEmail).then(() => {
          // console.log(res.data);
        });
      }
      else{
        axiosSecure.post("/logout")
        .then(() => {
          // console.log(res.data);
        })
      }

      // console.log(currentUser);
    });
    return () => {
      unSubcribe();
    };
  }, [axiosSecure]);

  const updateUserProfile = (name, photo) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const authInfo = {
    user,
    loading,
    signUpUser,
    signInUser,
    updateUserProfile,
    googleSigninUser,
    logOut,
  };

  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
