<template>
    <!-- <form @submit.prevent="handleSubmit">
        <h3>Sign up</h3>

        <label for="email">Email:</label>
        <input type="email" name="email" v-model="email" required>

        <label for="email">Password:</label>
        <input type="password" name="password" v-model="password" required>

        <button>Sign up</button>
        <div v-if="error">{{ error }}</div>
    </form> -->
    <div class="form-body">
        <h1 class="title is-3">Signup</h1>
        <form @submit.prevent="handleSubmit">
            <div class="field">
                <p class="control has-icons-left has-icons-right">
                    <input v-model="email" class="input" type="email" placeholder="Email" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-envelope"></i>
                    </span>
                    <span class="icon is-small is-right">
                        <i class="fas fa-check"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control has-icons-left">
                    <input v-model="password" class="input" type="password" placeholder="Password" required>
                    <span class="icon is-small is-left">
                        <i class="fas fa-lock"></i>
                    </span>
                </p>
            </div>
            <div class="field">
                <p class="control">
                    <button class="button is-success">
                        Signup
                    </button>
                </p>
            </div>
            <!-- <div v-if="error">{{ error }}</div> -->
        </form>
    </div>
    
</template>
<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRouter } from 'vue-router'

export default {
    name: "Signup",
    setup(){
        const email = ref('')
        const password = ref('')
        const error = ref('')

        const store = useStore()
        const router = useRouter()

        const handleSubmit = async()=>{
            try{
                await store.dispatch('signup', {email: email.value, password: password.value})

                router.push('/')
            } catch(err){
                error.value = err.message;
            }
        }

        return {email, password, error, handleSubmit}

    }
}
</script>
<style>
    /* this is used on login and signup */
    .form-body{
        width: 300px;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin: 0 auto;
        /* align-items: center; */
    }
    
</style>