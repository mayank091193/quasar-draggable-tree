<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          @click="leftDrawerOpen = !leftDrawerOpen"
          icon="menu"
          aria-label="Menu"
        />

        <q-toolbar-title>
          QDraggableTree
        </q-toolbar-title>

        <q-btn flat round @click="$q.dark.toggle()" :icon="$q.dark.isActive ? 'nights_stay' : 'wb_sunny'"/>
        <div>Quasar v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      bordered
    >
      <q-list>
        <q-item-label header>QDraggableTree</q-item-label>

        <q-item clickable to="/docs">
          <q-item-section avatar>
            <q-icon name="home"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>QDraggableTree API</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable to="/examples">
          <q-item-section avatar>
            <q-icon name="?"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Examples</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>
        <q-item clickable tag="a" target="_blank" href="https://twitter.com/mayank91193">
          <q-item-section avatar>
            <q-icon name="fab fa-twitter"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@mayank91193</q-item-label>
          </q-item-section>
        </q-item>
        <q-separator></q-separator>

        <q-item-label header>Essential Quasar Links</q-item-label>
        <q-item clickable tag="a" target="_blank" href="https://quasar.dev">
          <q-item-section avatar>
            <q-icon name="school"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Docs</q-item-label>
            <q-item-label caption>quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://github.quasar.dev">
          <q-item-section avatar>
            <q-icon name="code"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Github</q-item-label>
            <q-item-label caption>github.com/quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://chat.quasar.dev">
          <q-item-section avatar>
            <q-icon name="chat"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Discord Chat Channel</q-item-label>
            <q-item-label caption>chat.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://forum.quasar.dev">
          <q-item-section avatar>
            <q-icon name="record_voice_over"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Forum</q-item-label>
            <q-item-label caption>forum.quasar.dev</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://twitter.quasar.dev">
          <q-item-section avatar>
            <q-icon name="rss_feed"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Twitter</q-item-label>
            <q-item-label caption>@quasarframework</q-item-label>
          </q-item-section>
        </q-item>
        <q-item clickable tag="a" target="_blank" href="https://facebook.quasar.dev">
          <q-item-section avatar>
            <q-icon name="public"/>
          </q-item-section>
          <q-item-section>
            <q-item-label>Facebook</q-item-label>
            <q-item-label caption>@QuasarFramework</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-drawer>

    <q-page-container>


      <section class="page-header q-pa-none q-ma-none">
        <div class="text-h1 project-name">QDraggableTree</div>
        <q-btn type="a" href="https://github.com/mayank091193/quasar-draggable-tree" target="_blank"
               class="btn q-mr-sm" label="View on GitHub" no-caps/>
        <q-btn to="/docs" class="btn q-mr-sm" label="Docs" no-caps/>
        <q-btn to="/examples" class="btn" label="Examples" no-caps/>

        <div class="byline q-mt-md q-pb-md">A Quasar Framework Component and App Extension
          Created and maintained by Mayank Patel <a href="https://twitter.com/mayank91193" target="_blank"
                                                    title="Twitter"> <i class="fab fa-twitter"></i></a></div>

      </section>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script>
    export default {
        name: 'MyLayout',

        data() {
            return {
                leftDrawerOpen: true
            }
        }
    }
</script>

<style>

  .page-header {
    position: relative !important;
    color: #fff !important;;
    text-align: center !important;;
    background-color: #00f !important;;
    background: linear-gradient(145deg, #4a5e89 15%, #b61924 70%) !important;
  }


  .project-name {
    font-size: 4.25rem
  }

  .byline {
    left: 0
  }

  btn {
    display: inline-block;
    margin-bottom: 1rem;
    color: hsla(0, 0%, 100%, 0.7);
    background-color: hsla(0, 0%, 100%, 0.08);
    border-color: hsla(0, 0%, 100%, 0.2);
    border-style: solid;
    border-width: 1px;
    border-radius: 0.3rem;
    transition: color 0.2s, background-color 0.2s, border-color 0.2s
  }
</style>
