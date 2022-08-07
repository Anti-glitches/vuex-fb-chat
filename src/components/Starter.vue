<template>
    <div class="starter-body">
        <IconPicker @icon-selected="setSelectedIcon" />

        <h3 class="title is-4">Enter Name:</h3>
        <form @submit.prevent="handleSubmit">
            <input v-model="name" class="input" type="text" placeholder="John Doe">
            <button class="button is-primary is-rounded py-5 px-6 m-5">Let's Start</button>
        </form>

    </div>

</template>
<script>
import {useStore} from 'vuex'
import {ref} from 'vue'
import IconPicker from './IconPicker.vue'

export default {
    name: "Starter",
    setup() {
        const selectedIcon = ref("");
        const name = ref("");
        const store = useStore();
        const handleSubmit = () => {
            store.commit("setName", name);
            store.commit("setIcon", selectedIcon);
            store.commit("toggleShow");
        };
        const getData = () => {
            console.log(store.state.name, store.state.icon);
        };
        return { store, selectedIcon, name, handleSubmit, getData };
    },
    components: { IconPicker },
    methods: {
        setSelectedIcon(e){
            this.selectedIcon = e;
        }
    }
}
</script>
<style scoped>
    .starter-body {
        height: 100vh;
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        text-align:center;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
</style>