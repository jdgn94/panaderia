Vue.component('contact', {
  template: /*html*/`
    <div>
      <footer>  
        <v-container>
          <h3 class="text-white">Horario</h3>
          <h5 class="text-white">de xx:xx a xx:xx</h5>
          <v-divider color="white" style="margin-top: 10px; margin-bottom: 10px;"></v-divider>
          <v-row>
            <v-col  cols="12" md="6">
              <h4 class="text-white">
                Puedes seguirnos en nuestras redes sociales:
              </h4>
              <div class="social-container">
                <contat-btn v-for="(item,key) in social" :key="key" :data="item"></contat-btn>
              </div>
            </v-col>
            <v-col  cols="12" md="6">
              <h4 class="text-white">
                Puedes contactarnos y hacer encargos por:
              </h4>
              <div class="social-container">
                <contat-btn v-for="(item,key) in contact" :key="key" :data="item"></contat-btn>
              </div>
            </v-col>
          </v-row>
        </v-container>
      </footer>
    </div>
  `,

  // components: {

  // },
  
  data() {
    return {
      social: [
        {
          icon: 'fab fa-facebook-f',
          label: 'Facebook',
          tooltip: 'Facebook',
        },
        {
          icon: 'fab fa-instagram',
          label: 'Instagram',
          tooltip: 'Instagram'
        }
      ],
      contact: [
        {
          icon: 'fab fa-whatsapp',
          label: 'WhatsApp',
          tooltip: '+58 xxx xxx-xx-xx'
        },
        {
          icon: 'fab fa-telegram',
          label: 'Telegram',
          tooltip: '+58 xxx xxx-xx-xx'
        }
      ]
    }
  }
});