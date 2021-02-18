Vue.component('location', {
  template: /*html*/`
    <div>
      <h1>Estamos ubicados en:</h1>
      <h4>
        Calle el comercio, edificio Ateca, Planta baja, Local 1B, Las Acacias.
      </h4>
      <a
        href="https://www.google.com/maps/place/10%C2%B029'14.7%22N+66%C2%B054'34.9%22W/@10.4871015,-66.9093721,16.99z/data=!4m6!3m5!1s0x8c2a5f2e0627170d:0x27216c299ee100f7!7e2!8m2!3d10.4874176!4d-66.9096994"
        target="_blank"
      >
        <v-img
          src="public/images/address/map3.png"
          class="map-container"
        >
        </v-img>
      </a>
    </div>
  `
});