
import Vue from 'vue'
import ComponentExampleTypescript from "@vue-mono/component-example-typescript"

new Vue
({
    el: '#app',
    template: '<ComponentExampleTypescript/>',
    components: { ComponentExampleTypescript: ComponentExampleTypescript }
});
