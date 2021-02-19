Vue.component('nav-bar', {
  template: /*html*/`
    <div>
      <v-app-bar
        id="app-bar"
        color='purple darken-2'
        dark
        style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px"
      >
        <v-toolbar-title>Nombre pagina</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn href='#informacion' text>
            <span>Información</span>
          </v-btn>
          <v-btn href="#ubicacion" text>
            <span>Ubicación</span>
          </v-btn>
          <v-btn href="#contacto" text>
            <span>Contacto</span>
          </v-btn>
        </v-toolbar-items>

        <v-menu class="hidden-md-and-up">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              icon
              v-bind="attrs"
              v-on="on"
              class="hidden-md-and-up"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
          </template>

          <v-list>
            <v-list-item
              href="#informacion"
            >
              <v-list-item-title>Información</v-list-item-title>
            </v-list-item>
            <v-list-item
              href="#ubicacion"
            >
              <v-list-item-title>Ubicación</v-list-item-title>
            </v-list-item>
            <v-list-item
              href="#contacto"
            >
              <v-list-item-title>Contacto</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
      </v-app-bar>
    </div>
  `,
  component: {
    isMobile() {
      if (window.screen.width < 700) {
        console.log("ocultar");
        return false
      }
      return true
    }
  }
});