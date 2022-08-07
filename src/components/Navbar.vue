<template>
    <nav>
        <template v-if="authIsReady">
            <div>
                <router-link to="/">Home</router-link>
            </div>
            <div v-if="user">
                <router-link to="/Settings">Settings</router-link>
                <span>Logged in as {{user.email}}</span>
                <button @click.prevent="handleClick">Logout</button>
            </div>

            <div v-if="!user">
                <router-link to="/Login">Login</router-link>
                <router-link to="/Signup">Signup</router-link>
            </div>

        </template>


    </nav>
</template>
<script>
import { useStore } from 'vuex'
import { computed } from 'vue'

export default {
    name: "Navbar",
    setup(){
        const store = useStore();

        const handleClick = () =>{
            store.dispatch('logout')
        }

        return {
            handleClick,
            user: computed(()=> store.state.user),
            authIsReady: computed(()=> store.state.authIsReady)
        }
    }
}
</script>