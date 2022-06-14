<template>
<div class="my-select">
  <label for="selectType" class="visually-hidden"></label>
  <select name="selectType" id="selectType" v-model="modelValue" @change="changeOptions">
    <option disabled value="">Выберите из списка</option>
    <option v-for="option in options"
            :key="option.value"
            :value="option.value">
      {{ option.name }}
    </option>
  </select>
</div>
</template>

<script>
export default {
  name: "my-select",
  props: {
    modelValue: String,
    options: {
      type: Array,
      default: () => []
    }
  },
  methods: {
    changeOptions(event) {
      this.$emit('update:modelValue', event.target.value)
    }
  }
}
</script>

<style scoped>

</style>