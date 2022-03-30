<template>
  <q-page padding>
    <QDraggableTree v-model="data" :data="data" group="testsailordgod" rowKey="id">
    </QDraggableTree>
  </q-page>
</template>

<style lang="sass" scoped>
.directive-target
  width: 50px
  height: 50px
</style>


<script>

import {defineComponent} from 'vue';
import {ref} from 'vue';

export default defineComponent({
  name: "Basic",
  data() {
    return {
      data: ref([
        {
          id: 1,
          label: 'Satisfied customers',
          children: [
            {
              id: 2,
              label: 'Good food',
              children: [
                {
                  id: 3,
                  label: 'Quality ingredients',
                  children: []
                },
                {
                  id: 4,
                  label: 'Good recipe',
                  children: []
                }
              ]
            },
            {
              id: 5,
              label: 'Good service',
              children: [
                {id: 6, label: 'Prompt attention', children: []},
                {id: 7, label: 'Professional waiter', children: []}
              ]
            },
            {
              id: 8,
              label: 'Pleasant surroundings',
              children: [
                {id: 9, label: 'Happy atmosphere', children: []},
                {id: 10, label: 'Good table presentation', children: []},
                {id: 11, label: 'Pleasing decor', children: []}
              ]
            }
          ]
        }
      ])
    }
  },
  props: {
    tagParts: {
      type: Object,
      default: () => {
      }
    }
  },
})
</script>
