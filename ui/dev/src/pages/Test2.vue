<template>
  <q-page padding>
    <QDraggableTree v-model="data" :data="data" group="testsailordgod" rowKey="id">
      <template #left="{ item }">
        <div class="row items-center">
<!--          {{item}}-->
          <q-icon v-if="item.icon" :name="item.icon" color="orange" size="25px" class="q-mr-sm"/>
          <q-icon v-else-if="item.type == 'root'" name="people" color="orange" size="25px" class="q-mr-sm"/>
          <q-icon v-else name="fastfood" color="orange" size="25px" class="q-mr-sm"/>
        </div>
      </template>
      <template #body="{ item }">
        <div class="row items-center">
          <div class="text-weight-bold text-primary">{{ item.label }}</div>
        </div>
      </template>
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
  name: "Test2",
  data() {
    return {
      data: ref([
        {
          id: 1,
          type: 'root',
          label: 'Satisfied customers',
          children: [
            {
              id: 2,
              label: 'Good food',
              icon: 'restaurant_menu',
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
              icon: 'room_service',
              children: [
                {id: 6, label: 'Prompt attention', children: []},
                {id: 7, label: 'Professional waiter', children: []}
              ]
            },
            {
              id: 8,
              label: 'Pleasant surroundings',
              icon: 'photo',
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
