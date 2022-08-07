<template>
    <div class="icon-picker-body">
        <div v-if="show" class="popup has-background-light">
            <h1 class="subtitle is-size-4 has-text-black">Pick an avatar</h1>
            <div class="grid">
                <div v-for="(icon, i) in icons" :key="i" @click="selectIcon(icon)" class="circle">{{icon}}</div>
            </div>
        </div>
        <div class="circle mb-3" @click="togglePopup">{{selectedIcon}}</div>
    </div>
</template>
<script>
export default {
    name: 'IconPicker',
    data() {
        return {
            show: true,
            icons: ['🐵', '😎', '🤖', '💩', '👽', '🐮', '🤠', '🤡', '👺'],
            selectedIcon: '🔍'
        }
    },
    methods:{
        selectIcon(icon){
            this.selectedIcon = icon;
            this.$emit('icon-selected', icon);
            this.togglePopup();
        },
        togglePopup(){
            this.show = !this.show;
        }
    },
}
</script>
<style scoped>
    .popup{
        position: absolute;
        background: rgb(157, 252, 255);
        z-index: 10;
        padding: 20px;
        border-radius: 10px;
        border: 2px solid black;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width:fit-content;
    }
    .circle{
        width: 70px;
        height: 70px;
        cursor: pointer;
        font-size: 1.5rem;
        border: 3px solid rgb(42, 71, 165);
        margin: 5px;
    }

    .grid {
        display: grid;
        gap: 1px;
        grid-template-columns: repeat(3, 1fr);
        /* width: 200px; */
        /* height: 200px; */
    }
</style>