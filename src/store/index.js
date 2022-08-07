import { createStore } from "vuex";

export default createStore({
    state: {
        name: "",
        icon: "",
        showChat: false,
        showStarter: true,
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
    },
});
