<template>
    <Starter v-if="store.state.showStarter" />
    <Chatbody v-if="store.state.showChat" />
</template>

<script>
    import Chatbody from '../components/Chatbody.vue'
    import Starter from '../components/Starter.vue'
    import { useStore } from 'vuex'

export default {
    name: 'App',
    setup() {
        const store = useStore();

        return { store }
    },
    components: {
        Chatbody,
        Starter
    }
}
</script>
