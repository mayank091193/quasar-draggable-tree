<template>
  <q-page>
    <div class="q-markdown">
      <basic :tag-parts="getTagParts(require('!!raw-loader!../examples/Basic.vue').default)"></basic>
      <slot-demo :tag-parts="getTagParts(require('!!raw-loader!../examples/SlotDemo.vue').default)"></slot-demo>
    </div>
  </q-page>
</template>

<script>
    import Basic from "../examples/Basic";
    import SlotDemo from "../examples/SlotDemo";
    import {getTagParts} from '@quasar/quasar-ui-qmarkdown'

    export default {
        name: "Examples",
        components: {SlotDemo, Basic},
        methods: {
            getTagParts
        }
    }
</script>

<style scoped>

</style>
