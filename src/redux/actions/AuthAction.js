import { getAuth, GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import { LOAD_PROFILE, LOG_OUT, LOGIN_FAIL, LOGIN_REQUEST, LOGIN_SUCESS } from '../ActionTypes';
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyA-DcfoXWV_YOLVKAa2XIsENzWOBY4Dexc",
    authDomain: "clone-7-175d5.firebaseapp.com",
    projectId: "clone-7-175d5",
    storageBucket: "clone-7-175d5.appspot.com",
    messagingSenderId: "923649589110",
    appId: "1:923649589110:web:5beb3edcae1344dcb20457"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export const login = () => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });

    const provider = new GoogleAuthProvider();
    provider.addScope("https://www.googleapis.com/auth/youtube.force-ssl");

    const res = await signInWithPopup(auth, provider);

    const accessToken = await res.user.getIdToken();
    const profile = res.additionalUserInfo?.profile
      ? {
          name: res.additionalUserInfo.profile.name,
          photoUrl: res.additionalUserInfo.profile.picture,
        }
      : { name: res.user.displayName, photoUrl: res.user.photoURL };

    sessionStorage.setItem("ytc-access-token", accessToken);
    sessionStorage.setItem("ytc-user", JSON.stringify(profile));

    dispatch({ type: LOGIN_SUCESS, payload: accessToken });
    dispatch({ type: LOAD_PROFILE, payload: profile });
  } catch (error) {
    console.error(error);
    
    // Handle specific error code
    if (error.code === 'auth/cancelled-popup-request') {
      console.log('Popup closed by user');
    }

    dispatch({ type: LOGIN_FAIL, payload: error.message });
  }
};

export const logout = () => async (dispatch) => {
  await auth.signOut();
  dispatch({ type: LOG_OUT });
  sessionStorage.removeItem("ytc-access-token");
  sessionStorage.removeItem("ytc-user");
};
