import { createStore } from "vuex";

import { auth } from "../firebase/index";
import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from "firebase/auth";

const store = createStore({
    state: {
        name: "",
        icon: "",
        showChat: false,
        showStarter: true,
        user: null,
        authIsReady: false,
    },
    mutations: {
        addOne(state, payload) {
            state.counter = payload;
        },
        setName(state, payload) {
            state.name = payload;
        },
        setIcon(state, payload) {
            state.icon = payload;
        },
        toggleShow(state) {
            state.showChat = !state.showChat;
            state.showStarter = !state.showStarter;
        },
        setUser(state, payload) {
            state.user = payload;
            console.log("User state changed: ", state.user);
        },
        setAuthIsReady(state, payload) {
            state.authIsReady = payload;
        },
    },
    actions: {
        async signup({ commit }, { email, password }) {
            console.log("sign up actions");

            //async code
            const res = await createUserWithEmailAndPassword(
                auth,
                email,
                password
            );

            console.log(res);

            if (res) {
                commit("setUser", res.user);
            } else {
                throw new Error("Sign up Error");
            }
        },
        async login({ commit }, { email, password }) {
            console.log("login actions");

            //asyc code
            const res = await signInWithEmailAndPassword(auth, email, password);

            console.log(res);

            if (res) {
                commit("setUser", res.user);
            } else {
                throw new Error("login error");
            }
        },
        async logout({ commit }) {
            console.log("log out actions");

            await signOut(auth);

            commit("setUser", null);
        },
    },
});

const unsub = onAuthStateChanged(auth, (user) => {
    console.log("called unsub");
    store.commit("setAuthIsReady", true);
    store.commit("setUser", user);
    unsub();
});

export default store;
