<template>
  <ul class="objects__list">
    <li
        class="objects__item"
        v-for="object in messierObjects"
        key="object.recordid">
      <object-card
          :img="object.fields.image"
          :name="object.fields.messier"
          :year="object.fields.annee"
          :id="object.recordid"
      >
        <template v-slot:add>
          <my-button @click="addMessierObject(object.recordid)">Добавить</my-button>
        </template>
      </object-card>
    </li>
  </ul>
</template>

<script>
import {useStore} from 'vuex'
import {ref, computed, onBeforeMount} from 'vue'
import ObjectCard from "./../components/ObjectCard.vue";

export default {
  name: 'ObjectsPage',
  components: {ObjectCard},

  setup() {
    const store = useStore()
    const messierObjects = ref([])
    const isAdded = ref(false)

    const loading = computed(() => store.state.loading)
    const messierAPI = computed(() => store.state.messierAPI)
    const object = computed(() => store.getters['object'])
    const objectsSum = computed(() => store.getters['objectsSum'])
    const MESSIER_API = computed(() => store.getters['MESSIER_API'])
    const setObjectsToLearn = (object) => store.commit('setObjectsToLearn', object)
    const addMessierObject = (id) => {
      const obj = object.value(id)
      setObjectsToLearn(obj)
    }

    onBeforeMount(async () => {
      await store.dispatch('GET_DATA_FROM_API')
      messierObjects.value = MESSIER_API.value
    })

    return {
      messierObjects,
      isAdded,
      store,
      object,
      setObjectsToLearn,
      addMessierObject,
      objectsSum,
      MESSIER_API,
      loading,
      messierAPI
    }
  },
}

</script>

<style lang="scss">
.objects {
  &__list {
    list-style: none;
    box-sizing: border-box;
    margin: 32px 0 0;
    padding: 0 32px;
    display: flex;
    flex-wrap: wrap;
    gap: 24px;
  }

  &__item {
    min-width: 300px;
    width: 22%;
    box-sizing: border-box;
    border: 1px solid #ffffff;
    padding: 16px;
    border-radius: 20px;

    img {
      width: 100%;
      height: auto;
      border-radius: 20px;
    }
  }

  &__item-buttons {
    display: flex;
    justify-content: space-between;
  }

  &__list-more {
    margin-top: 32px;
    text-align: center;
  }

}
</style>