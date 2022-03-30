import { boot } from 'quasar/wrappers'
import Plugin from '@quasar/quasar-ui-qmarkdown'
import '@quasar/quasar-ui-qmarkdown/dist/index.css'

export default boot(({ app }) => {
  app.use(Plugin)
})
