<template>
  <div class="event-single">
    <section class="hero is-primary">
      <div class="hero-body">
        <div class="container">
          <h1 class="title">
            {{ film.name }}
          </h1>
          <h2 class="subtitle ">
            <strong>Status:</strong> {{ film.status }}
            <br>
            <strong>Gênero:</strong> {{ film.genre }}
          </h2>
        </div>
      </div>
    </section>
    <section class="event-content">
      <div class="container">
        <p class="is-size-4 description">{{ film.director }}</p>
        <p class="is-size-5"><strong>Origem:</strong> {{ film.origin }}</p>
        <p class="is-size-5"><strong>Idioma:</strong> {{ film.language }}</p>
        <div class="event-images columns is-multiline has-text-centered">
          <div v-for="image in film.images" :key="image.id" class="column is-one-third">
            <img :src="image" :alt="film.name">
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
// NEW - import FilmService
import FilmService from '@/services/FilmService.js';
export default {
  name: 'FilmSingle',
  data() {
    // NEW - initialize the event object
    return {
      film: {}
    }
  },
  created() {
    this.getFilmData(); // NEW - call getEventData() when the instance is created
  },
  // NEW
  methods: {
    async getFilmData() {
      // Get the access token from the auth wrapper
      // const accessToken = await this.$auth.getTokenSilently()
      // console.log(accessToken)
      // Use the eventService to call the getEventSingle() method
      FilmService.getFilmSingle(this.$route.params.id, accessToken)
        .then(
          (film => {
            this.$set(this, "film", film);
          }).bind(this)
        );
      FilmService.getFilmSingle(this.$route.params.id)
        .then(
          (film => {
            this.$set(this, "film", film);
          }).bind(this)
        );
    }
  }
}
</script>
