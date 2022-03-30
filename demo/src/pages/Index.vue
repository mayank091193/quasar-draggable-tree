<template>
  <q-page class="">
    <div :class="($q.platform.is.mobile ? '' : 'q-mx-xl')">
      <div class="markdown-nav-bar shadow-10">
        <div class="title">
          <span class="ellipsis">{{ title }}</span>
        </div>
      </div>

      <q-card class="q-mt-sm q-pb-none no-shadow bg-transparent no-border">
        <q-card-section>
          <div class="text-h6">WARNING</div>
          <q-banner inline-actions class="text-white bg-red rounded-borders">
            Please note that the codepen links, in the documentation examples, do not work at this time.
          </q-banner>
        </q-card-section>
      </q-card>


      <q-markdown>{{ source }}</q-markdown>

      <json-api-viewer
        title="QDraggableTree API"
        :json="json"
        starting-tab="General"
        no-menu
      />

      <page-footer></page-footer>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, ref, defineAsyncComponent} from 'vue';
import {useRoute} from 'vue-router'
import MarkdownLink from "components/MarkdownLink";
import markdown from './qdraggabletree.md'

import {
  mdiCharity
} from '@quasar/extras/mdi-v5'

import 'highlight.js/styles/monokai.css';

const year = (new Date()).getFullYear()

const json = {
  "props": {
    "rowKey": {
      "type": "string",
      "category": "general",
      "desc": "Property of each row that defines the unique key of each row (the result must be a primitive, not Object, Array, etc); The value of property must be string.",
      "examples": [":rowKey=\"id\""],
    },
    "group": {
      "type": "string",
      "category": "general",
      "desc": "group name for vuedraggable. If this props not provided, drag and drop will be enabled only in children.",
      "examples": [":group=\"name\""],
    },
  },
  "slots": {
    "left": {
      "extends": "default",
      "desc": "Slot to define the left section which may include avatar, icon, etc."
    },
    "body": {
      "extends": "default",
      "desc": "Slot to define the body which will be the main part to display labels."
    }
  },
  "General": {
    "data": {
      "type": "Array",
      "desc": "Rows of data to display",
      "examples": [":data=\"treeData\""],
    },
  }
}
import md from "markdown-it";

let mds_data = "# QDraggableTree\n" +
  "\n" +
  "QDraggableTree is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction). It is a component that displays hierarchical data \n" +
  "\n" +
  "with drag and drop ability.\n" +
  "\n" +
  "## Install\n" +
  "\n" +
  "To add this App Extension to your Quasar application, run the following (in your Quasar app folder):\n" +
  "\n" +
  "```bash\n" +
  "quasar ext add qdraggabletree\n" +
  "```\n" +
  "\n" +
  "# Uninstall\n" +
  "To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\n" +
  "\n" +
  "```\n" +
  "quasar ext remove qdraggabletree\n" +
  "```\n" +
  "\n" +
  "# Defining the data\n" +
  "\n" +
  "\n" +
  "    \n" +
  "        [\n" +
  "            {\n" +
  "                id: 1,\n" +
  "                label: 'Satisfied customers',\n" +
  "                children: [\n" +
  "                    {\n" +
  "                        id: 2,\n" +
  "                        label: 'Good food',\n" +
  "                        children: [\n" +
  "                            {\n" +
  "                                id: 3,\n" +
  "                                label: 'Quality ingredients',\n" +
  "                                children: [],\n" +
  "                            },\n" +
  "                            {\n" +
  "                                id: 4,\n" +
  "                                label: 'Good recipe',\n" +
  "                                children: [],\n" +
  "                            }\n" +
  "                        ]\n" +
  "                    },\n" +
  "                    {\n" +
  "                        id: 5,\n" +
  "                        label: 'Good service',\n" +
  "                        children: [\n" +
  "                            {id: 6, label: 'Prompt attention', children: [],},\n" +
  "                            {id: 7, label: 'Professional waiter', children: [],},\n" +
  "                        ]\n" +
  "                    },\n" +
  "                    {\n" +
  "                        id: 8,\n" +
  "                        label: 'Pleasant surroundings',\n" +
  "                        children: [\n" +
  "                            {id: 9, label: 'Happy atmosphere', children: [],},\n" +
  "                            {id: 10, label: 'Good table presentation', children: [],},\n" +
  "                            {id: 11, label: 'Pleasing decor', children: [],}\n" +
  "                        ]\n" +
  "                    }\n" +
  "                ]\n" +
  "            }\n" +
  "        ]\n" +
  "\n" +
  "# Source\n" +
  "\n" +
  "can be found [here](https://github.com/mayank091193/quasar-draggable-tree).\n" +
  "\n" +
  "# Docs\n" +
  "\n" +
  "can be found [here](https://next-quasar-draggable-tree.netlify.com).\n" +
  "\n" +
  "# Examples\n" +
  "\n" +
  "can be found [here](https://next-quasar-draggable-tree.netlify.com).\n" +
  "\n" +
  "# Demo Project.\n" +
  "\n" +
  "can be found [here](https://github.com/mayank091193/quasar-draggable-tree/tree/next/demo).\n" +
  "\n" +
  "# Roadmap\n" +
  "\n" +
  "Default Expansion"

export default defineComponent({
  name: 'PageIndex',
  components: {
    MarkdownLink,
    PageFooter: defineAsyncComponent(() => import('components/PageFooter')),

  },
  setup(props) {
    const $route = useRoute(), path = $route.path;
    return {
      filterString: 'Sub-Value Test',
      classes: 'bg-deep-purple-10',
      dense: ref(false),
      dark: ref(true),
      default_expand_all: ref(true),
      path,
      title: 'What is QDraggableTree',
      year,
      json,
      md_data: '',
      source: mds_data,
      mdiCharity,
      markdown
    }
  },
  created() {
    var client = new XMLHttpRequest();
    client.open('GET', '/qdraggabletree.md');
    let self = this;
    client.onreadystatechange = function () {
      self.markdown = client.responseText;
    }

    client.send();
    console.log(this.markdown)

  }
})
</script>

<style>
.markdown-nav-bar {
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 80px;
  padding: 6px;
  background: # # # #0d47a1;
  color: # # # #bbdefb;
  border-radius: 0 0 6px 6px;
}

.markdown-nav-bar .title {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: center;
  font-size: 2.4em;
}

.markdown-nav-bar .inner {
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  align-items: center;
}


.markdown-copyright {
  font-family: Consolas, Monaco, Andale Mono, Ubuntu Mono, monospace
}
</style>
