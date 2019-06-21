<script>
import StatelessComponentExample from "./dummy-component"
export default {
  name: "component-example-jsx",
  render() {
    return (
      <div>
        <h1> If coming from React and JSX is more of your thing, why not do this? </h1>
        <a href="https://vuejs.org/v2/guide/render-function.html"> the docs on this</a>
        <StatelessComponentExample />
      </div>
    )
  },
}
</script>
