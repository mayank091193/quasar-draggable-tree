/*!
 * quasar-ui-qdraggabletree v0.0.5-beta
 * (c) 2022 pratikpatelpp802@gmail.com
 * Released under the MIT License.
 */
import QDraggableTree from"../src/components/QDraggableTree";export{default as QDraggableTree}from"./src/components/QDraggableTree";var name="quasar-ui-qdraggabletree",version$1="0.0.5-beta",author="pratikpatelpp802@gmail.com",description="My awesome component",license="MIT",module="dist/index.esm.js",main="dist/index.common.js",scripts={dev:"cd dev && yarn dev && cd ..","dev:umd":"yarn build && node build/script.open-umd.js","dev:ssr":"cd dev && yarn 'dev:ssr' && cd ..","dev:ios":"cd dev && yarn 'dev:ios' && cd ..","dev:android":"cd dev && yarn 'dev:android' && cd ..","dev:electron":"cd dev && yarn 'dev:electron' && cd ..",build:"node build/index.js","build:js":"node build/script.javascript.js"},repository={type:"git",url:""},bugs="",homepage="",devDependencies={"@quasar/app":"^3.0.0","@quasar/extras":"^1.0.0","@rollup/plugin-buble":"^0.21.3","@rollup/plugin-json":"^4.0.0","@rollup/plugin-node-resolve":"^11.2.1","@rollup/plugin-replace":"^2.4.2",chalk:"^4.1.0","core-js":"^3.0.0","fs-extra":"^8.1.0",open:"^7.3.0",quasar:"^2.0.0",rimraf:"^3.0.0",rollup:"^2.45.0","uglify-js":"^3.13.3",zlib:"^1.0.5"},browserslist=["last 4 Chrome versions","last 4 Firefox versions","last 2 Edge versions","last 4 Safari versions","last 4 Android versions","last 4 ChromeAndroid versions","last 4 FirefoxAndroid versions","last 4 iOS versions"],dependencies={"rollup-plugin-vue":"^6.0.0",vuedraggable:"^4.1.0"},pkg={name:name,version:version$1,author:author,description:description,license:license,module:module,main:main,scripts:scripts,repository:repository,bugs:bugs,homepage:homepage,devDependencies:devDependencies,browserslist:browserslist,dependencies:dependencies},version=pkg.version;function install(e){e.component("QDraggableTree",QDraggableTree)}var VuePlugin=Object.freeze({__proto__:null,version:version,QDraggableTree:QDraggableTree,install:install});export{VuePlugin as default,install,version};
