<template>
<!-- full credit to https://vuejs.org/v2/guide/components-slots.html-->
<!-- Includes examples of how to document with vue styleguide https://github.com/vue-styleguidist-->
    <div class="container">
        <header>
            <!--
                @slot
                <p>addtional text, for say a slot scope <p>
                <p> Here is a description of the header slot<p>
            -->
            <slot name="header"></slot>
        </header>
        <main>
            <!--
                @slot
                <p> Here is a description of the default slot<p>
            -->
            <slot>{{mainDefaultText}}</slot>
        </main>
        <footer>
            <!--
                @slot
               Here is the description of the footer slot. You don't have to use html tags and can just the default formatter is that is more desireable
            -->
            <slot name="footer"></slot>
            <img :src="logo" alt="Vue Logo">
        </footer>
    </div>
</template>
<script>
    export default {
        name: "component-example-plain",
        props: {
            /**
             * Is the default text for the main body if no content is provided. The user can provide a new string, or completely override the slot
             */
            mainDefaultText: {
                type: String,
                default: "Hello, World!",
                required: false
            }
        },
        data(){
            return {
                logo: require("./assets/vue-demo.png")
            }
        },
        methods:{
            /**
             * pass content to emit the someEvent event
             *
             * @param {boolean} isLiteral
             * @public
             */
            emitSomeEvent(isLiteral = true){
                /**
                 * someEvent...literally
                 *
                 * @type {object}
                 */
                this.$emit('someEvent', {
                    literally: isLiteral
                 })
            }
        },
        mounted(){
            this.emitSomeEvent()
        }
    }
</script>
