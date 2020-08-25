/**
 * Quasar App Extension index/runner script
 * (runs on each dev/build)
 *
 * Docs: https://quasar.dev/app-extensions/development-guide/index-api
 * API: https://github.com/quasarframework/quasar/blob/master/app/lib/app-extension/IndexAPI.js
 */

function extendWithComponent (conf) {
  // make sure boot file is registered
  conf.boot.push('~quasar-app-extension-qdraggabletree/src/boot/index.js')

  // make sure boot file transpiles
  conf.build.transpileDependencies.push(/quasar-app-extension-qdraggabletree[\\/]src/)
  console.log(` App Extension (qdraggabletree) Info: 'qdraggabletree boot reference to your quasar.conf.js'`)

}

module.exports = function (api) {
  // extend quasar.conf
  api.registerDescribeApi('', './components/QDraggableTree.json')

  api.compatibleWith('quasar', '^1.5.11')
  api.compatibleWith('@quasar/app', '^1.4.3 || ^2.0.0')

  api.extendQuasarConf(extendWithComponent)
};


