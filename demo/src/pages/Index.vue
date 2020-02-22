<template>
  <q-page class="q-pa-md text-grey-7 shadow-2">
    <q-markdown :src="markdown"/>
    <json-api-viewer
      title="QDraggableTree API"
      :json="json"
      starting-inner-tab="general"
    />

    <q-page-scroller position="bottom-right" :scroll-offset="150" :offset="[18, 18]">
      <q-btn
        fab
        icon="keyboard_arrow_up"
        :class="{ 'text-black bg-grey-4': $q.dark.isActive, 'text-white bg-primary': !$q.dark.isActive }"
      />
    </q-page-scroller>
  </q-page>
</template>

<script>

    import markdown from '../markdown/qdraggabletree.md'

    export default {
        name: 'PageIndex',
        data() {
            return {
                markdown: markdown,
                json: {
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
                },
            }
        },
    }
</script>

<style>
</style>
