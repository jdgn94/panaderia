Vue.component('contat-btn', {
  template: /*html*/`
    <v-tooltip bottom>
      <template v-slot:activator="{ on, attrs }">
        <v-btn
          class="social-btn"
          v-bind="attrs"
          v-on="on"
          text
          dark
        >
          <i :class="data.icon"></i>
          <span>{{data.label}}</span>
        </v-btn>
      </template>
      <span>{{data.tooltip}}</span>
    </v-tooltip>
  `,

  props: ['data']
})