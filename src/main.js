
import Vue from 'vue';

let app = new Vue ({
    el: '#app',
    data: {
        message: '',
        items: []
    },
    methods: {
        addItem(){
            // '     aaaaa   ' => 'aaaaa' '       ' => ''
            if(this.message.trim() !== '') {
                this.items.push(this.message);
                this.message = '';
            }
        }
    }
});