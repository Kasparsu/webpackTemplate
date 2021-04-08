<template>
    <div class="container">
        <section class="section">
            
        </section>
    </div>
</template>

<script>
    import axios from 'axios';
    export default {
        name: "App",
        created(){
            axios.get('https://rickandmortyapi.com/api/character').then(response => {
                this.info = response.data.info;
                this.characters = response.data.results;
            });
        },
        data(){
            return {
                info: null,
                characters: []
            }
        }
    }
</script>

<style scoped>

</style>