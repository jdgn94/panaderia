Vue.component('breads', {
  template: /*html*/`
    <div>
      <h1></h1>
      <v-carousel
        cycle
        height="400"
        hide-delimiters
        show-arrows-on-hover
      >
        <v-carousel-item
          v-for="(item,i) in items"
          :key="i"
        >
          <div class="caroucel-container">
            <v-img
              class="image-lazy"
              :lazy-src="items[i].src"
              height="400"
            >
              <template v-slot:placeholder>
                <v-row
                  class="fill-height ma-0"
                  align="center"
                  justify="center"
                >
                  <v-progress-circular
                    indeterminate
                    color="purple darken-2"
                  ></v-progress-circular>
                </v-row>
              </template>
            </v-img>
            <v-img
              :src="items[i].src"
              height="400"
              max-width="600"
            >
            </v-img>
            <div class="caroucel-description">
              <h3 class="text-center">{{ items[i].name }}</h3>
            </div>
          </div>
        </v-carousel-item>
      </v-carousel>
    </div>
  `,

  data () {
    return {
      items: [
        {
          src: 'public/images/breads/baegle.jpeg',
          name: 'Beagle',
        },
        {
          src: 'public/images/breads/cachito_jamon.jpeg',
          name: 'Cachito de jamon',
        },
        {
          src: 'public/images/breads/camaleon.jpeg',
          name: 'Camaleon Tradicional',
        },
        {
          src: 'public/images/breads/chino.jpeg',
          name: 'Pan Chino',
        },
        {
          src: 'public/images/breads/dulce_anis.jpeg',
          name: 'Pan Dulce con Anis',
        },
        {
          src: 'public/images/breads/golfeado.jpeg',
          name: 'Golfeados',
        },
        {
          src: 'public/images/breads/integrales.jpeg',
          name: 'Panes Integrales (Variados)',
        },
        {
          src: 'public/images/breads/jala.jpeg',
          name: 'Jalá (Challah)',
        },
        {
          src: 'public/images/breads/jamon.jpeg',
          name: 'Pan de Jamón',
        },
        {
          src: 'public/images/breads/kaiser.jpeg',
          name: 'Pan Kaiser (con masa madre)',
        },
        {
          src: 'public/images/breads/oregano_parmesano.jpeg',
          name: 'Pan con Oregano y Parmesano',
        },
        {
          src: 'public/images/breads/pan_integral_pasas.jpeg',
          name: 'Pan Integral con Pasas',
        },
        {
          src: 'public/images/breads/kaiser_2.jpeg',
          name: 'Pan Kaiser (con masa madre)',
        },
        {
          src: 'public/images/breads/rustico.jpeg',
          name: 'Pan Rustico (con masa madre)',
        },
        {
          src: 'public/images/breads/pan_integral.jpeg',
          name: 'Pan Integral',
        },
        {
          src: 'public/images/breads/trenza_dulce_leche.jpeg',
          name: 'Trensa Dulce con Leche',
        },
        {
          src: 'public/images/breads/rustico_2.jpeg',
          name: 'Pan Rustico (con masa madre)',
        },
        {
          src: 'public/images/breads/kaiser_3.jpeg',
          name: 'Pan Kaiser (con masa madre)',
        },
        {
          src: 'public/images/breads/vienes.jpeg',
          name: 'Pan Vienes',
        },
        {
          src: 'public/images/breads/preparacion_masamadre.jpeg',
          name: 'Preparacion de pan con masa madre',
        },
        {
          src: 'public/images/breads/kaiser_4.jpeg',
          name: 'Pan Kaiser (con masa madre)',
        },
        {
          src: 'public/images/breads/rustico_3.jpeg',
          name: 'Pan Rustico (con masa madre)',
        },
        // {
        //   src: 'public/images/breads/.jpeg',
        //   name: '',
        // },
      ],
    }
  },
});