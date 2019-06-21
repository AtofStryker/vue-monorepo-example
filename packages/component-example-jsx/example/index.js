
import Vue from 'vue'
import ComponentExamplePlain from "@vue-mono/component-example-jsx"

new Vue
({
    el: '#app',
    template: '<ComponentExamplePlain/>',
    components: { ComponentExamplePlain: ComponentExamplePlain }
});
