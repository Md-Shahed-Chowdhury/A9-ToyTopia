// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey:import.meta.env.VITE_apiKey ,
  authDomain:import.meta.env.VITE_authDomain ,
  projectId: import.meta.env.VITE_projectId,
  storageBucket:import.meta.env.VITE_storageBucket ,
  messagingSenderId:import.meta.env.VITE_messagingSenderId ,
  appId: import.meta.env.VITE_appId
};
// const firebaseConfig = {
//   apiKey: "AIzaSyC4zL2lI_T0NqDGmQj7W3UvrnvLk3kHbWk",
//   authDomain: "a9-toytopia.firebaseapp.com",
//   projectId: "a9-toytopia",
//   storageBucket: "a9-toytopia.firebasestorage.app",
//   messagingSenderId: "962302820725",
//   appId: "1:962302820725:web:ef6518eeffb64a42c4133c"
// };

// Initialize Firebase
const app = initializeApp(firebaseConfig);
//Initialize auth
const auth = getAuth(app);

export default auth;