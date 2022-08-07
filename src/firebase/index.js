import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDhXz-j6AwbXW_7IrQlKHpz2Tmop2mLiFQ",
    authDomain: "vuex-fb-chat.firebaseapp.com",
    projectId: "vuex-fb-chat",
    storageBucket: "vuex-fb-chat.appspot.com",
    messagingSenderId: "88320626237",
    appId: "1:88320626237:web:f8680e66d6f72eccb9e454",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
