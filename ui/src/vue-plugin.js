import QDraggableTree from './components/QDraggableTree'

import pkg from '../package.json'
const { version } = pkg

function install (app) {
  app.component('QDraggableTree', QDraggableTree)
}

export {
  version,
  QDraggableTree,

  install
}
