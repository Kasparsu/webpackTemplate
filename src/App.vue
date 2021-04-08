<template>
    <div class="container">
        <section class="section">
            <button class="button is-primary" @click="modalActive=true">Hello</button>
        </section>

        <div class="modal is-active" v-if="modalActive">
            <div class="modal-background" @click="modalActive=false"></div>
            <div class="modal-content">
                <p class="image is-4by3">
                    <img src="https://bulma.io/images/placeholders/1280x960.png" alt="">
                </p>
            </div>
            <button class="modal-close is-large" aria-label="close" @click="modalActive=false"></button>
        </div>

    </div>
</template>

<script>
    export default {
        name: "App",
        data(){
            return {
                modalActive: false
            }
        }
    }
</script>

<style scoped>

</style>