<template>
  <div class="event-card">
    <div class="card">
      <div class="card-content">

        <h2 class="is-size-4 has-text-weight-bold">{{ film.name }}</h2>

        <small class="film-genre">{{ film.genre }}</small>

        <div class="film-infos">
            <span>{{ film.origin }}</span>
            <span>{{ film.year }}</span>
            <span>{{ film.director }}</span>
            <span>{{ film.language }}</span>
            <span>{{ film.status }}</span>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: [
    'film'
  ]
}
</script>
<style lang="scss" scoped>
    .card {
        background-image: url('https://placekitten.com/400/400');
        height: 300px;
        background-position: center;
        background-size: cover;
        text-align: left;
    }

    .card-content {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        padding-top: 50px;
        position: absolute;
        color: #FFF;
        background-color: rgba(0, 0, 0, 0.35);
        top: 0;
        padding: 10px;
        height: 300px;
        width: 100%;
        
        h2 {
            margin-top: 10px;
        }

        .film-genre {
            background-color: #151515;
            color: #FFF;
            font-size: .75em;
            padding: 2px 10px;
            position: absolute;
            top: 0;
            right: 0;
        }

        .film-infos {
            display: flex;
            flex-direction: column;

            span {
                font-size: 18px;
                width: 100%;
                bottom: 10px;
                right: 0;
            }
        }
    }
</style>