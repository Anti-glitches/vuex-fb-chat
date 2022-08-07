<template>
    <!-- <button @click="store.commit('toggleShow')">Change Profile</button> -->
    <div class="chat-body" ref="scrollList">
        <div class="chat-wrap">
            <div class="columns" v-for="message in messages" :key="message.id">
                <div class="column is-2">
                    <!-- <img src="#" alt="profile"> -->
                    <div class="circle">{{ message.img }}</div>
                </div>

                <div class="column">
                    <!-- This is the name and date -->
                    <div>
                        <span class="has-text-weight-bold ml-1 mr-2">{{ message.name }}</span>
                        <span class="has-text-weight-light">{{ message.date }}</span>
                    </div>
                    <!-- This is the message -->
                    <div class="card mt-2">
                        <div class="card-content">
                            <div class="content">
                                {{ message.content }}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <form @submit.prevent="handleClick" class="stay-at-bottom">
            <div class="field has-addons">
                <div class="control add-width">
                    <input v-model="messageContext" class="input" type="text" placeholder="Send a message">
                </div>
                <div class="control">
                    <button class="button is-success" >
                        <i class="fa-solid fa-paper-plane"></i>
                    </button>
                </div>
            </div>
        </form>
    </div>


</template>

<script>
import { ref, onMounted } from 'vue'
import { useStore } from 'vuex'
import { db } from '@/firebase'
import { collection, onSnapshot, 
addDoc, deleteDoc, doc, 
updateDoc, query, orderBy, limit } from "firebase/firestore"; 

const todoCollectionRefs = collection(db, "chat")
const todoCollectionQuery = query(todoCollectionRefs, orderBy("date", 'desc'), limit(25));

export default {
    name: 'Chatbody',
    setup() {
        const messages = ref([
            // {
            //     id: '1',
            //     name: 'Udin',
            //     date: 'MM/D/YYYY',
            //     content: "Hello Everyone!",
            //     img: '😎'
            // },
            // {
            //     id: '2',
            //     name: 'Sam',
            //     date: 'MM/D/YYYY',
            //     content: "SUPPPP!",
            //     img: '🐱'
            // },
            // {
            //     id: '3',
            //     name: 'Jake',
            //     date: 'MM/D/YYYY',
            //     content: "SUPPPP!",
            //     img: '🔥'
            // }
        ])

        const store = useStore();

        onMounted(async ()=>{
            await onSnapshot((todoCollectionQuery), querySnapshot => {
                const fbChat = []

                querySnapshot.forEach((doc) => {
                    const chat = {
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        img: doc.data().img,
                        date: doc.data().date
                    }

                    fbChat.unshift(chat);
                });

                messages.value = fbChat
                scrollDown()
            });
            
        })

        return { messages, store }
    },
    data() {
        return {
            messageContext: ""
        }
    },
    methods: {
        //add message to msgs
        handleClick() {
            addDoc(todoCollectionRefs, {
                name: this.store.state.name,
                date: Date.now(),
                content: this.messageContext,
                img: this.store.state.icon
            });
            // this.messages.push(message)
            this.messageContext = ""
            this.scrollDown();
        },
        scrollDown() {
            //scrolled done once everything done rendering
            //I set to 0 because this will update last which is what we want
            setTimeout(() => {
                this.$refs.scrollList.scrollTop = this.$refs.scrollList.scrollHeight
            }, 10)
        }
    },
    mounted() {
        this.$nextTick(() => { this.scrollDown() })
    },
    watch:{
        messages(){
            this.scrollDown()
        }
    }
}
</script>

<style>
    .chat-body{
        max-width: 400px;
        margin: 0 auto;
        padding: 20px;
        overflow: scroll;
        height: 100vh;
    }

    .chat-wrap{
        margin-bottom: 60px;
    }

    .stay-at-bottom{
        position: fixed;
        bottom: 0%;
        right: 0;
        left:0;
        width: 400px;
        background: white;
        padding: 10px;
        margin: 0 auto;
    }

    .add-width{
        width: 400px;
    }

    .circle{
        width: 60px;
        height: 60px;
        border-radius: 50%;
        background: aliceblue;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>