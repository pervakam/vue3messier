<template>
  <div class="info">
    <h2>Информация об объекте {{ messier.fields.messier }}</h2>
    <ul class="info__list">
      <li class="info__item">
        <p>Номер в новом общем каталоге</p>
        <p>{{ messier.fields.ngc }}</p>
      </li>
      <li class="info__item">
        <p>Тип объекта</p>
        <p>{{ messier.fields.objet }}</p>
      </li>
      <li class="info__item">
        <p>Расстояние, световых лет</p>
        <p>{{ messier.fields.distance }}</p>
      </li>
      <li class="info__item">
        <p>Созвездие</p>
        <p>{{ messier.fields.english_name_nom_en_anglais }}</p>
      </li>
      <li class="info__item">
        <p>Видимые размеры</p>
        <p>{{ messier.fields.dimension }}</p>
      </li>
      <li class="info__item">
        <p>Период наблюдения</p>
        <p>{{ messier.fields.saison }}</p>
      </li>
      <li class="info__item">
        <p>Открыто</p>
        <p>{{ messier.fields.decouvreur }}</p>
      </li>
    </ul>

  </div>
</template>

<script>
import {useStore} from 'vuex'
import {ref, computed, onBeforeMount, onMounted} from 'vue'
import {useRoute} from 'vue-router'

export default {
  setup() {
    const store = useStore()
    const route = useRoute()
    const messier = ref([])
    const object = computed(() => store.getters['object'])

    onBeforeMount(async () => {
      await store.dispatch('GET_DATA_FROM_API')
      messier.value = object.value(route.params.id)
    })

    return {
      messier
    }
  }
}
</script>

<style lang="scss" scoped>
.info {

  box-sizing: border-box;
  margin: 32px 0 0;
  padding: 0 32px;

  &__list {
    list-style: none;
    margin: 32px 0 0;
    padding: 0;
    width: 60%;
  }

  &__item {
    margin-bottom: 24px;
    display: flex;

    p {
      margin: 0;
      width: 45%;
    }
  }
}
</style>