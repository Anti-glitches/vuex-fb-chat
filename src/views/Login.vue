<template lang="">
    <div class="form-body">
        <h1 class="title is-3">Login</h1>
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
                        Login
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
    name:"Login",
    setup(){
        const email = ref('');
        const password = ref('');
        const error = ref('');

        const store = useStore()
        const router = useRouter()

        const handleSubmit = async ()=>{
            try{
                await store.dispatch('login', {email: email.value, password: password.value})
                router.push('/')
            }catch(err){
                error.value = err.message
            }
        }

        return {email, password, error, handleSubmit}
    }
}
</script>
