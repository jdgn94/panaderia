Vue.component('floating-button', {
  template: /*html*/`
    <div
      class="floating-button"
    >
      <v-fab-transition>
        <v-btn
          v-show="!hidden"
          color="green"
          dark
          fixed
          bottom
          right
          fab
          href="#app-bar"
        >
          <v-icon>mdi-chevron-up</v-icon>
        </v-btn>
      </v-fab-transition>
    </div>
  `,

  data() {
    return {
      hidden: true
    }
  },

  created: function () {
    window.addEventListener('scroll', this.handleScroll);
  },
  destroyed: function () {
      window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll: function (event) {
      if (window.scrollY > 200)
        this.hidden = false;
      else 
        this.hidden = true;
    }
}
})