<template>
  <div class="q-pa-md q-gutter-sm">
    <q-draggable-tree-node
        v-for="(item, index) in treeData" v-bind:value="item" v-bind:group="group" v-on:input="updateItem" v-bind:rowKey="rowKey"
    >
      <template v-slot:left="{ item, open }">
        <slot name="left" v-bind:item="item" v-bind:open="open"></slot>
      </template>
      <template v-if="hasDefaultSlot" v-slot:body="{ item, open }">
        <slot name="body" v-bind="{ item, open }"></slot>
      </template>
      <span v-if="!hasDefaultSlot">{{ item }}</span>
    </q-draggable-tree-node>
  </div>
</template>

<script>
import Draggable from "vuedraggable";
import QDraggableTreeNode from "./QDraggableTreeNode.vue";

import {defineComponent} from 'vue';
import {ref} from 'vue';

export default defineComponent({
  components: {
    Draggable,
    QDraggableTreeNode
  },
  props: {
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    group: {
      type: String,
      default: null
    },
    rowKey: {
      type: String,
      default: 'label'
    },
  },
  data() {
    return {
      drag: ref(false),
      localValue: ref([...this.data])
    };
  },
  computed: {
    treeData: {
      get() {
        return this.data
      },
      set(val) {
        // We should not update original data
      }
    },
    themeClassName() {
      return 'theme--dark';
    },
    hasDefaultSlot() {
      return this.$slots.hasOwnProperty("body");
    },
    dragOptions() {
      return {
        animation: 200,
        group: "description",
        emptyInsertThreshold: 10,
        disabled: false,
        ghostClass: "ghost"
      };
    }
  },
  watch: {
    value(value) {
      this.localValue = [...value];
    }
  },
  methods: {
    updateValue(value) {
      this.localValue = value;
      this.$emit("input", this.localValue);
    },
    updateItem(itemValue) {
      const index = this.localValue.findIndex(v => v[this.rowKey] === itemValue[this.rowKey]);
      this.localValue[index] = itemValue
      this.$emit("input", this.localValue);
    }
  }
});

</script>

<style scoped>

.ghost {
  opacity: 0.5;
  background: lightgray;
}

.list-group {
  min-height: 20px;
}

.list-group-item {
  cursor: move;
}

.list-group-item i {
  cursor: pointer;
}
</style>
