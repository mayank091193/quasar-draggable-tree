<template>
  <q-page>
    <div :class="($q.platform.is.mobile ? '' : 'q-mx-xl')">

      <div class="markdown-nav-bar shadow-10">
        <div class="title">
          <span class="ellipsis">{{ title }}</span>
        </div>
      </div>

      <q-card class="no-shadow text-grey-8 bg-transparent q-mt-md no-border">
        <q-card-section>
          <div class="text-h6">
            Introduction
          </div>
        </q-card-section>
        <q-card-section>
          <div>I am Mayank Patel (Known as mayank091193). I am in the programming field since 2011. I always wanted to
            become
            a skilled programmer. My passion to become a full-stack developer increases as I started working at my first
            job in Vadodara, Gujarat.
          </div>
          <br/>
          <div>
            I started my career with HTML/CSS as the front-end and ASP.NET C#. In the initial stage, I was working on 3
            tier architecture that our company had built. Later we had implemented ASP.NET MVC Architecture. Later after
            2
            years, I have decided to move to another company to get myself challenges and learn more. In my second
            company, I started working on HTML/Bootstrap/AngularJS as the front-end and Python as the back-end language.
          </div>
          <br/>
          <div>
            In this phase, I have learned many technologies. I got many projects to work on. The major project includes
            the Sales reporting system, CRM system, AWS based data warehouse solution and many more. Eventually, I
            introduced myself to Quasar-Framework and Vue.js. After getting hands-on experience on Quasar-Framework for
            2
            years, I got involved in creating some plugins for Quasar Framework such as QDraggableHierarchy App
            Extension.
          </div>
          <br/>
          <div>
            Also, I do believe in Free or Open Source Software (FOSS) because I believe "Knowledge management doesn’t
            happen until somebody reuses something". I am currently heavily involved in creating open source templates.
            You may have heard of some of my open-source resources:
          </div>
          <br/>
          <div>
            Quasar CRM Admin
            Quasar Scrum
            Quasar draggable tree (QDraggableTree)
            CoolTab chrome extension
          </div>
          I believe for sustaining in the market, you need to keep yourself updated with knowledge. Solution matters
          technology doesn't.
          <br/><br/>
          Stay tuned for more.
          <br/><br/>
          Thank you very much!
        </q-card-section>
      </q-card>


      <page-footer></page-footer>

    </div>
  </q-page>
</template>

<script>
import {defineAsyncComponent, defineComponent, ref} from 'vue'

const year = (new Date()).getFullYear()

export default defineComponent({
  name: "Sponsor",
  setup() {
    return {
      title: 'Sponsor',
      year,
      openLink(href) {
        window.open(href)
      }
    }
  },
  components: {
    PageFooter: defineAsyncComponent(() => import('components/PageFooter')),
  }
})
</script>

<style scoped>

</style>
