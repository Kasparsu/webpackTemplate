<template>
    <div class="container">
        <section class="section">
            <button class="button is-primary" @click="modalActive=true">Pic1</button>
            <button class="button is-primary" @click="modal2Active=true">Pic2</button>
        </section>
        <modal :active="modalActive" @close="modalActive=false">
            <p class="image is-4by3">
                <img src="https://placekitten.com/1280/960" alt="">
            </p>
        </modal>
        <modal :active="modal2Active" @close="modal2Active=false">
            <div class="card">
                <div class="card-image">
                    <figure class="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
                    </figure>
                </div>
                <div class="card-content">
                    <div class="media">
                        <div class="media-left">
                            <figure class="image is-48x48">
                                <img src="https://bulma.io/images/placeholders/96x96.png" alt="Placeholder image">
                            </figure>
                        </div>
                        <div class="media-content">
                            <p class="title is-4">John Smith</p>
                            <p class="subtitle is-6">@johnsmith</p>
                        </div>
                    </div>

                    <div class="content">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Phasellus nec iaculis mauris. <a>@bulmaio</a>.
                        <a href="#">#css</a> <a href="#">#responsive</a>
                        <br>
                        <time datetime="2016-1-1">11:09 PM - 1 Jan 2016</time>
                    </div>
                </div>
            </div>
        </modal>
    </div>
</template>

<script>
    import Modal from "./components/Modal";
    export default {
        name: "App",
        components: {Modal},
        data(){
            return {
                modalActive: false,
                modal2Active: false,
            }
        }
    }
</script>

<style scoped>

</style>