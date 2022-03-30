import { boot } from 'quasar/wrappers'
import * as VuePlugin from 'quasar-ui-qdraggabletree/src/vue-plugin'

export default boot(({ app }) => {
  app.use(VuePlugin)
})
