import React from 'react'
import { LoginContainer } from './style'
import {
    GoogleAuthProvider,
 getAuth,
 signInWithPopup,
 signInWithEmailAndPassword,
 createUserWithEmailAndPassword,
 sendPasswordResetEmail,
 signOut,
} from "firebase/auth";
import {
  getFirestore,
  query,
  getDocs,
  collection,
  where,
  addDoc,
} from "firebase/firestore";
import { db, auth } from "../../../firebase"
import { logout, login } from '../../../features/auth/authSclice'
import { useSelector, useDispatch } from 'react-redux'
import Router from "next/router"



function LoginPage() {


  const user = useSelector(state => state.auth.user)
  const dispatch = useDispatch()



  const googleProvider = new GoogleAuthProvider();
  const signInWithGoogle = async () => {
    try {
      const res = await signInWithPopup(auth, googleProvider);
      const user = res.user;
      const q = query(collection(db, "users"), where("uid", "==", user.uid));
      const docs = await getDocs(q);
      if (docs.docs.length === 0) {
        await addDoc(collection(db, "users"), {
          uid: user.uid,
          name: user.displayName,
          authProvider: "google",
          email: user.email,
        });
      }
      dispatch(login(user))
      console.log("Data: " + user.email)

    } catch (err) {
      console.error(err);
      alert(err.message);
    }
  };

  
  if (user.email) {
    Router.push('/')
  }




  return (
      <LoginContainer>
        <div className="center-container">
        <h2>BRANA</h2>
        <span>{user.email}</span>
        <div className='glow-on-hover' onClick={() => signInWithGoogle()}>
          <img src="https://www.freepnglogos.com/uploads/google-logo-png/google-logo-png-suite-everything-you-need-know-about-google-newest-0.png" alt="" />  
          
          <span>

          Continue wth google
          </span>
        
        </div>
        </div>
    </LoginContainer>
  )
}

export default LoginPage