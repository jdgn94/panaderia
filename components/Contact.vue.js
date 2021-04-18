Vue.component('contact', {
  template: /*html*/`
    <div>
      <footer>  
        <v-container>
          <h3 class="text-white">Horario</h3>
          <h5 class="text-white">de Lunes a Viernes de 7:00 AM a 5:00 PM</h5>
          <v-divider color="white" style="margin-top: 10px; margin-bottom: 10px;"></v-divider>
          <h4 class="text-white">
            Puedes contactarnos y hacer pedidos por:
          </h4>
          <div class="social-container">
            <contat-btn v-for="(item,key) in contact" :key="key" :data="item"></contat-btn>
          </div>
        </v-container>
      </footer>
    </div>
  `,
  
  data() {
    return {
      contact: [
        {
          icon: 'fab fa-instagram',
          label: 'Instagram',
          tooltip: 'Instagram',
          link: 'https://instagram.com/negrisbakery.21?igshid=azeu1jreeiqt'
        },
        {
          icon: 'fab fa-whatsapp',
          label: 'WhatsApp',
          tooltip: '+58 412 923 01 07',
          link: 'https://wa.me/message/LOPTAKEW3YVRD1'
        },
      ]
    }
  }
});