Vue.component('nav-bar', {
  template: /*html*/`
    <div>
      <v-app-bar
        color='purple darken-2'
        dark
        style="border-bottom-left-radius: 20px; border-bottom-right-radius: 20px"
      >
        <v-toolbar-title>Nombre pagina</v-toolbar-title>
  
        <v-spacer></v-spacer>
  
        <v-btn href='#informacion' text>
          <span>Información</span>
        </v-btn>
        <v-btn href="#ubicacion" text>
          <span>Ubicación</span>
        </v-btn>
        <v-btn href="#contacto" text>
          <span>Contacto</span>
        </v-btn>
      </v-app-bar>
    </div>
  `
});