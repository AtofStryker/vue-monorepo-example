
import Vue from 'vue'
import ComponentExampleJSX from "@vue-mono/component-example-jsx"

new Vue
({
    el: '#app',
    template: '<ComponentExampleJSX/>',
    components: { ComponentExampleJSX: ComponentExampleJSX }
});
