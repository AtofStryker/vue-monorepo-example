<template>
  <!-- full credit to https://vuejs.org/v2/guide/components-slots.html-->
  <div class="container">
    <header>
      <slot name="header"></slot>
    </header>
    <main>
      <slot>{{mainDefaultText}}</slot>
    </main>
    <footer>
      <slot name="footer"></slot>
      <img :src="logo" alt="Vue Logo">
    </footer>
  </div>
</template>
<script lang="ts">
import { Vue, Component, Prop, Watch } from "vue-property-decorator"

//exact representation of of component-example-plain but with typescript and class decorators!
@Component({
  name: "component-example-typescript",
})
export default class ComponentExamplePlain extends Vue {
  logo: any = require("./assets/vue-demo.png")
  @Prop({ type: String, required: false, default: "Hello, World!" }) readonly mainDefaultText!: string

  emitSomeEvent(isLiteral = true) {
    this.$emit("someEvent", {
      literally: isLiteral,
    })
  }
  mounted() {
    this.emitSomeEvent()
  }
}
</script>
