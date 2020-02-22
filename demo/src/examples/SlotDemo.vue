<template>
  <q-card :class="!$q.dark.isActive?'my-lg q-pa-md q-ma-sm bg-grey-2':'my-lg q-pa-md q-ma-sm bg-grey-8'">
    <q-toolbar>
      <q-ribbon
        position="left"
        color="rgba(0,0,0,.58)"
        background-color="#c0c0c0"
        leaf-color="#a0a0a0"
        leaf-position="bottom"
        decoration="rounded-out"
      >
        <q-toolbar-title
          class="example-title"
          style="padding: 5px 20px;"
        ><span class="ellipsis">Slot Demo</span></q-toolbar-title>
      </q-ribbon>
    </q-toolbar>
    <q-card-section class="q-pb-sm">
      <code-tabs :tagParts="tagParts"></code-tabs>
    </q-card-section>
    <q-card-section class="bg-white q-mx-md">
      <q-draggable-tree v-model="data" :data="data" group="testsailordgod" rowKey="id">
        <template v-slot:left="{ item }">
          <div class="row items-center">
            <q-icon v-if="item.icon" :name="item.icon" color="orange" size="25px" class="q-mr-sm"/>
            <q-icon v-else-if="item.type == 'root'" name="people" color="orange" size="25px" class="q-mr-sm"/>
            <q-icon v-else name="fastfood" color="orange" size="25px" class="q-mr-sm"/>
          </div>
        </template>
        <template v-slot:body="{ item }">
          <div class="row items-center">
            <div class="text-weight-bold text-primary">{{ item.label }}</div>
          </div>
        </template>
      </q-draggable-tree>
    </q-card-section>
  </q-card>
</template>

<script>
    import CodeTabs from "../components/CodeTabs";

    export default {
        name: "SlotDemo",
        data() {
            return {
                data: [
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
                                    },
                                    {
                                        id: 4,
                                        label: 'Good recipe',
                                    }
                                ]
                            },
                            {
                                id: 5,
                                label: 'Good service',
                                icon: 'room_service',
                                children: [
                                    {id: 6, label: 'Prompt attention'},
                                    {id: 7, label: 'Professional waiter'}
                                ]
                            },
                            {
                                id: 8,
                                label: 'Pleasant surroundings',
                                icon: 'photo',
                                children: [
                                    {id: 9, label: 'Happy atmosphere'},
                                    {id: 10, label: 'Good table presentation'},
                                    {id: 11, label: 'Pleasing decor'}
                                ]
                            }
                        ]
                    }
                ]
            }
        },
        components: {CodeTabs},
        props: {
            tagParts: {
                type: Object,
                default: () => {
                }
            }
        },
    }
</script>
