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
export default {
  name: 'FilmSingle',
  data () {
     return {
      film: {},
      films: [
        {
          id: 1,
          name: 'Quem Quer Ser um Milionário?',
          origin: 'UK | USA',
          year: '2008',
          director: 'Danny Boyle',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          genre: 'drama',
          language: 'inglês',
          status: 'assistido'
        },
        {
          id: 2,
          name: 'Quem Quer Ser',
          origin: 'UK | USA',
          year: '2008',
          director: 'Danny Boyle',
          images: [
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
            'https://placekitten.com/500/500',
          ],
          genre: 'drama',
          language: 'inglês',
          status: 'assistido'
        }
      ]
    } 
  },
  created() {
    const ID = Number(this.$route.params.id);
    let film = this.films.find(film => film.id === ID);
    this.film = film;
  }
}
</script>