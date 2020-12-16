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
<!-- client/src/views/FilmSingle.vue -->
<script>
import FilmCard from "@/components/FilmCard";
import FilmService from '@/services/FilmService.js'; // NEW
export default {
  name: "FilmsList",
  components: {
    FilmCard
  },
  data() {
    return {
      film: {},
      films: []
    };
  },
  created() {
    this.getFilmsData(); // NEW - call getEventData() when the instance is created
  },
  // NEW
  methods: {
    async getFilmsData() {
      // NEW - Use the eventService to call the getEvents() method
      FilmService.getFilms()
      .then(
        (films => {
          this.$set(this, "films", films);
        }).bind(this)
      );
    }
  }
};
</script>
<style lang="scss" scoped>
  .films {
    margin-top: 100px;
    text-align: center;
  }
</style>