<template>
  <h1>Кабинет</h1>
  <p>Объектов для изучения - {{ objectsToLearnLength }}</p>
  <ul class="objects__list">
    <li
        class="objects__item"
        v-for="(object, index) in objectsToLearn"
        key="object.recordid">
      <object-card
          :img="object.fields.image"
          :name="object.fields.messier"
          :year="object.fields.annee"
          :id="object.recordid">
        <template v-slot:remove>
          <my-button @click="removeObjectToLearn(index)">Удалить</my-button>
        </template>
      </object-card>
    </li>
  </ul>
</template>

<script>
import ObjectCard from "@/components/ObjectCard";

import {useStore} from 'vuex'
import {computed} from 'vue'

export default {
  name: "MyCabinet",
  components: {ObjectCard},

  setup() {
    const store = useStore()
    const removeObjectToLearn = (index) => store.commit('removeObjectToLearn', index)
    const objectsToLearnLength = computed(() => store.getters.objectsToLearnLength)
    const objectsToLearn = computed(() => store.state.objectsToLearn)

    return {
      removeObjectToLearn,
      objectsToLearnLength,
      objectsToLearn
    }
  },
}
</script>

<style scoped>

</style>