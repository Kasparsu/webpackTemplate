<template>
    <div>
        <input type="text" v-model="message" @keypress.enter="addItem"><button @click="addItem">Add</button>
        <h1>All Items</h1>
        <ul>
            <li v-for="(item,index) in items" :key="item.id">
                <input type="checkbox" v-model="item.isDone">
                {{item.name}}
            </li>
        </ul>
        <h1>Done Items</h1>
        <ul>
            <li v-for="(item,index) in doneItems" :key="item.id">
                <input type="checkbox" v-model="item.isDone">
                {{item.name}}
            </li>
        </ul>
        <h1>To Do Items</h1>
        <ul>
            <li v-for="(item,index) in toDoItems" :key="item.id">
                <input type="checkbox" v-model="item.isDone">
                {{item.name}}
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                message: '',
                items: [
                    {name:'Leib', isDone: false, id: 0},
                    {name:'Sai', isDone: true, id: 1},
                    {name:'Piim', isDone: false, id: 2},
                ]
            }
        },
        methods: {
            addItem(){
                if(this.message.trim() !== '') {
                    this.items.push({name: this.message, isDone: false, id: this.items.length});
                    this.message = '';
                }
            }
        },
        computed: {
            reversedMessage(){
                // "message" => ["m", "e" ....]
                return this.message.split('').reverse().join('');
            },
            doneItems(){
                return this.items.filter(item => item.isDone);
            },
            toDoItems(){
                return this.items.filter(item => !item.isDone);
            }
        }
    }
</script>

<style scoped>

</style>