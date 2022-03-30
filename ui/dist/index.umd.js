/*!
 * quasar-ui-qdraggabletree v0.0.5-beta
 * (c) 2022 pratikpatelpp802@gmail.com
 * Released under the MIT License.
 */

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('components/QDraggableTree')) :
  typeof define === 'function' && define.amd ? define(['components/QDraggableTree'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.qdraggabletree = factory(global.QDraggableTree));
})(this, (function (QDraggableTree) { 'use strict';

  function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

  var QDraggableTree__default = /*#__PURE__*/_interopDefaultLegacy(QDraggableTree);

  var name = "quasar-ui-qdraggabletree";
  var version$1 = "0.0.5-beta";
  var author = "pratikpatelpp802@gmail.com";
  var description = "My awesome component";
  var license = "MIT";
  var module = "dist/index.esm.js";
  var main = "dist/index.common.js";
  var scripts = {
  	dev: "cd dev && yarn dev && cd ..",
  	"dev:umd": "yarn build && node build/script.open-umd.js",
  	"dev:ssr": "cd dev && yarn 'dev:ssr' && cd ..",
  	"dev:ios": "cd dev && yarn 'dev:ios' && cd ..",
  	"dev:android": "cd dev && yarn 'dev:android' && cd ..",
  	"dev:electron": "cd dev && yarn 'dev:electron' && cd ..",
  	build: "node build/index.js",
  	"build:js": "node build/script.javascript.js"
  };
  var repository = {
  	type: "git",
  	url: ""
  };
  var bugs = "";
  var homepage = "";
  var devDependencies = {
  	"@quasar/app": "^3.0.0",
  	"@quasar/extras": "^1.0.0",
  	"@rollup/plugin-buble": "^0.21.3",
  	"@rollup/plugin-json": "^4.0.0",
  	"@rollup/plugin-node-resolve": "^11.2.1",
  	"@rollup/plugin-replace": "^2.4.2",
  	chalk: "^4.1.0",
  	"core-js": "^3.0.0",
  	"fs-extra": "^8.1.0",
  	open: "^7.3.0",
  	quasar: "^2.0.0",
  	rimraf: "^3.0.0",
  	rollup: "^2.45.0",
  	"uglify-js": "^3.13.3",
  	zlib: "^1.0.5"
  };
  var browserslist = [
  	"last 4 Chrome versions",
  	"last 4 Firefox versions",
  	"last 2 Edge versions",
  	"last 4 Safari versions",
  	"last 4 Android versions",
  	"last 4 ChromeAndroid versions",
  	"last 4 FirefoxAndroid versions",
  	"last 4 iOS versions"
  ];
  var dependencies = {
  	"rollup-plugin-vue": "^6.0.0",
  	vuedraggable: "^4.1.0"
  };
  var pkg = {
  	name: name,
  	version: version$1,
  	author: author,
  	description: description,
  	license: license,
  	module: module,
  	main: main,
  	scripts: scripts,
  	repository: repository,
  	bugs: bugs,
  	homepage: homepage,
  	devDependencies: devDependencies,
  	browserslist: browserslist,
  	dependencies: dependencies
  };

  var version = pkg.version;

  function install (app) {
    app.component('QDraggableTree', QDraggableTree__default["default"]);
  }

  var VuePlugin = /*#__PURE__*/Object.freeze({
    __proto__: null,
    version: version,
    QDraggableTree: QDraggableTree__default["default"],
    install: install
  });

  return VuePlugin;

}));
