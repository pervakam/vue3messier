<template>
  <nav class="page-header">
    <my-button @click="$router.push('/')">Главная</my-button>
    <div class="page-header__wrapper">
      <my-button @click="$router.push('/objects')">Каталог</my-button>
      <my-button @click="$router.push('/account')">Мой кабинет ({{ objectsToLearnLength }})</my-button>
    </div>
  </nav>

</template>

<script>
import MyButton from "@/components/UI/MyButton";
import {mapGetters} from "vuex";

export default {
  components: {
    MyButton
  },
  computed: {
    ...mapGetters(['objectsToLearnLength']),
  },
}
</script>

<style lang="scss" scoped>
.page-header {
  box-sizing: border-box;
  padding: 32px;
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #ffffff;

  &__wrapper {
    .btn:not(:last-of-type) {
      margin-right: 16px;
    }
  }
}

</style>