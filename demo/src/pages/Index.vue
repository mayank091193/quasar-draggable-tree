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

      <vue3-markdown-it :source='source' class="q-px-md"/>

      <json-api-viewer
        title="QHierarchy API"
        :json="json"
        starting-tab="general"
        no-menu
      />

      <page-footer></page-footer>
    </div>
  </q-page>
</template>

<script>
import {defineComponent, ref , defineAsyncComponent} from 'vue';
import {useRoute} from 'vue-router'
import MarkdownLink from "components/MarkdownLink";

import {
  mdiCharity
} from '@quasar/extras/mdi-v5'

import 'highlight.js/styles/monokai.css';

const year = (new Date()).getFullYear()

const columns = [
  {
    name: 'label',
    label: 'Label',
    align: 'left',
    field: 'label',
    // (optional) tell QHierarchy you want this column sortable
    sortable: true
  },
  {
    name: 'Description',
    label: 'Description',
    sortable: true,
    field: 'description',
    align: 'center'
  },
  {
    name: 'note',
    label: 'Note',
    sortable: true,
    field: 'note',
    align: 'left'
  }
];
const data = [
  {
    label: "Node 1",
    description: "Node 1 description",
    note: "Node 1 note",
    // id: 1,
    children: [
      {
        label: "Node 1.1",
        description: "Node 1.1 description",
        note: "Node 1.1 note",
        // id: 2
      },
      {
        label: "Node 1.2",
        description: "Node 1.2 description",
        note: "Node 1.2 note",
        // id: 3,
        children: [
          {
            label: "Node 1.2.1",
            description: "Node 1.2.1 description",
            note: "Node 1.2.1 note",
            // id: 4
          },
          {
            label: "Node 1.2.2",
            description: "Node 1.2.2 description",
            note: "Node 1.2.2 note",
            // id: 5
          }
        ],
      }
    ],
  },
  {
    label: "Node 2",
    description: "Node 2 description",
    note: "Node 2 note",
    // id: 6,
    children: [
      {
        label: "Node 2.1",
        description: "Node 2.1 description",
        note: "Node 2.1 note",
        // id: 7,
        children: [
          {
            label: "Node 2.1.1",
            description: "Node 2.1.1 description",
            note: "Node 2.1.1 note",
            // id: 8
          },
          {
            label: "Node 2.1.2",
            description: "Node 2.1.2 description",
            note: "Node 2.1.2 note",
            // id: 9
          }
        ],
      },
      {
        label: "Node 2.2",
        description: "Node 2.2 description",
        note: "Node 2.2 note",
        // id: 10
      }
    ],
  }
];
const json = {

  "general": {
    "data": {
      "type": "Array",
      "desc": "Rows of data to display",
      "examples": [":data=\"myData\""],
    },
    "columns": {
      "type": "Array",
      "desc": "The column definitions (Array of Objects)\n",
      "examples": [":columns=\"tableColumns\""],
    }
  },
  "props": {
    "dense": {
      "extends": "dense",
      "type": "boolean",
      "desc": "Dense mode; occupies less space",
      "category": "style"
    },
    "dark": {
      "extends": "dark",
      "type": "boolean",
      "desc": "Notify the component that the background is a dark color",
      "category": "style"
    },
    "default-expand-all": {
      "extends": "dark",
      "type": "boolean",
      "desc": "Allow the QHierarchy to have all it's nodes expanded, when first rendered",
      "category": "behaviour"
    },
    "flat": {
      "extends": "flat",
      "type": "boolean",
      "desc": "Applies a 'flat' design (no default shadow)",
      "category": "style"
    },
    "bordered": {
      "extends": "bordered",
      "type": "boolean",
      "desc": "Applies a default border to the component",
      "category": "style"
    },
    "square": {
      "extends": "square",
      "type": "boolean",
      "desc": "Removes border-radius so borders are squared",
      "category": "style"
    },
    "separator": {
      "type": "String",
      "desc": "Use a separator/border between rows, columns or all cells",
      "default": "horizontal",
      "values": ["horizontal", "vertical", "cell", "none"],
      "examples": ["cell"],
      "category": "content"
    }
  },
  "slots": {
    "body": {
      "extends": "default",
      "desc": "Slot to define how a body row looks like; Suggestion: tr + td"
    }
  },
}
import md from "markdown-it";

let mds_data = "#### QHierarchy\n" +
  "\n" +
  "QHierarchy is a [Quasar App Extension](https://quasar.dev/app-extensions/introduction).  It allows you to display data in hierarchy structure on your page.\n" +
  "\n" +
  "###### Install\n" +
  "To add this App Extension to your Quasar application, run the following (in your Quasar app folder):\n" +
  "\n" +
  "```bash\n" +
  "quasar ext add qhierarchy\n" +
  "```\n" +
  "###### Uninstall \n" +
  "To remove this App Extension from your Quasar application, run the following (in your Quasar app folder):\n" +
  "\n" +
  "```\n" +
  "quasar ext remove qhierarchy\n" +
  "```\n" +
  "\n" +
  "#### Defining the columns\n" +
  "\n" +
  "\n" +
  "    [\n" +
  "        {\n" +
  "            name: 'label',\n" +
  "            label: 'Label',\n" +
  "            align: 'left',\n" +
  "            field: 'label',\n" +
  "            // (optional) tell QHierarchy you want this column sortable\n" +
  "            sortable: true\n" +
  "        },\n" +
  "        {\n" +
  "            name: 'Description',\n" +
  "            label: 'Description',\n" +
  "            sortable: true,\n" +
  "            field: 'description',\n" +
  "            align: 'center',\n" +
  "        },\n" +
  "        {\n" +
  "            name: 'note',\n" +
  "            label: 'Note',\n" +
  "            sortable: true,\n" +
  "            field: 'note',\n" +
  "            align: 'left',\n" +
  "        }\n" +
  "    ],\n" +
  "\n" +
  "#### Defining Data\n" +
  "\n" +
  "     [\n" +
  "            {\n" +
  "                label: \"Node 1\",\n" +
  "                description: \"Node 1 description\",\n" +
  "                note: \"Node 1 note\",\n" +
  "                children: [\n" +
  "                    {\n" +
  "                        label: \"Node 1.1\",\n" +
  "                        description: \"Node 1.1 description\",\n" +
  "                        note: \"Node 1.1 note\",\n" +
  "                    },\n" +
  "                    {\n" +
  "                        label: \"Node 1.2\",\n" +
  "                        description: \"Node 1.2 description\",\n" +
  "                        note: \"Node 1.2 note\",\n" +
  "                        children: [\n" +
  "                            {\n" +
  "                                label: \"Node 1.2.1\",\n" +
  "                                description: \"Node 1.2.1 description\",\n" +
  "                                note: \"Node 1.2.1 note\",\n" +
  "                            },\n" +
  "                            {\n" +
  "                                label: \"Node 1.2.2\",\n" +
  "                                description: \"Node 1.2.2 description\",\n" +
  "                                note: \"Node 1.2.2 note\",\n" +
  "                            }\n" +
  "                        ],\n" +
  "                    }\n" +
  "                ],\n" +
  "        }\n" +
  "     ]\n" +
  "\n" +
  "#### Source\n" +
  "\n" +
  "can be found [here](https://github.com/pratik227/quasar-qhierarchy).\n" +
  "\n" +
  "#### Docs\n" +
  "\n" +
  "can be found [here](https://quasar-qhierarchy.netlify.com).\n" +
  "\n" +
  "#### Examples\n" +
  "can be found [here](https://quasar-qhierarchy.netlify.com/examples).\n" +
  "\n" +
  "#### Demo (source) Project.\n" +
  "can be found [here](https://github.com/pratik227/quasar-qhierarchy/tree/master/demo).\n" +
  "\n" +
  "#### Support\n" +
  "If this helped you in any way, you can contribute to this project for long term survival by supporting me:\n" +

  "###### [💜 Support my open-source work on GitHub](https://github.com/sponsors/pratik227)\n" +
  "\n" +
  "Be sure to check out my sponsor page.\n" +
  "\n" +
  "(GitHub currently **doubles your support**! So if you support me with $10/mo, I will get $20 instead! They're alchemists 😉)\n" +
  "\n" +
  "Thank you so much!!!\n"

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
      columns,
      data,
      path,
      title: 'What is QHierarchy',
      year,
      json,
      md_data: '',
      source: mds_data,
      mdiCharity
    }
  },
  created() {
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
