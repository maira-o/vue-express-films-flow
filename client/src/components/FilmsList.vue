<template>
  <div class="films container">
    <h2 class="subtitle is-3">
      Confira alguns filmes
    </h2>
    <div class="columns is-multiline">
      <div 
        v-for="film in films" 
        :film="film" 
        :key="film.id" 
        class="column is-one-quarter">

        <router-link 
          :to="'/film/' + film.id">

          <FilmCard :film="film" />

        </router-link>
      </div>
    </div>
  </div>
</template>
<script>
  import FilmCard from '@/components/FilmCard';
export default {
  name: 'FilmsList',
  components : {
    FilmCard
  },
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
        }
      ]
    }    
  }
}
</script>
<style lang="scss" scoped>
  .films {
    margin-top: 100px;
    text-align: center;
  }
</style>