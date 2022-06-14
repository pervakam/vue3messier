<template>
<div>
  <img :src="img" alt="изображение объекта">
  <p>название в каталоге {{ name }}</p>
  <p>год открытия {{ year }}</p>
  <div class="objects__item-buttons">
    <my-button @click="$router.push(`/objects/${id}`)">Подробнее</my-button>
    <slot name="add"></slot>
    <slot name="remove"></slot>
  </div>
</div>
</template>

<script>
import {mapGetters} from "vuex";

export default {
  name: "ObjectCard.vue",
  props: {
    name: String,
    img: String,
    year: String,
    id: String,
  },
}
</script>

<style scoped>

</style>