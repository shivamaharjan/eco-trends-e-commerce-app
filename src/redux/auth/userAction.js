import { createUserWithEmailAndPassword, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { doc, getDoc, setDoc } from "firebase/firestore";
import { toast } from "react-toastify";
import { auth, db } from "../../config/firebase-config";
import { setUser } from "./userSlice";

export const createUserAction = (userInfo, navigate) => async (dispatch) => {
  try {
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userInfo.email,
      userInfo.password
    );

    const { password, confirmPassword, ...rest } = userInfo;
    await setDoc(doc(db, "users", user.uid), rest);
    toast.success("User Register Successful");
    navigate("/login");
  } catch (e) {
    toast.error(`Something went wrong. ${e.message}`);
  }
};

export const loginUserAction =
  ({ email, password }) =>
  async (dispatch) => {
    try {
      const authSnap = signInWithEmailAndPassword(auth, email, password);
      toast.promise(authSnap, {
        pending: "In progress...",
      });
      const { user } = await authSnap;
      toast.success("Login Successful");

      dispatch(getUserInfoAction(user.uid));
    } catch (e) {
      toast.error(`Something went wrong. ${e.message}`);
    }
  };

  export const getUserInfoAction = (uid) => async (dispatch) => {
    try {
      const userSnap = await getDoc(doc(db, "users", uid));
      if (userSnap.exists()) {
        const userData = userSnap.data();
        const userInfo = { ...userData, uid };
        dispatch(setUser(userInfo));
      }
    } catch (e) {
      toast.error(`Something went wrong. ${e.message}`);
    }
  };


  export const forgetPasswordAction = (email) => async (dispatch) => {
    try{
      const resPromise = sendPasswordResetEmail(auth, email);
      toast.promise(resPromise, {
        pending: "In Progress..."
      })
      await resPromise;
      toast.success("Password Reset Email Sent!!")


    }catch{

    }
  };