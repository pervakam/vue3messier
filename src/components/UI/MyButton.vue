<template>
  <button class="btn" type="button">
    <slot></slot>
  </button>
</template>

<script>
export default {
  name: 'my-button'
}
</script>

<style lang="scss" scoped>
.btn {
  border: 1px solid #ffffff;
  background-color: transparent;
  padding: 16px;
  color: #ffffff;
  text-transform: uppercase;
  border-radius: 16px;
  width: fit-content;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: #ffffff;
    color: #2F353B;
    transition: 0.3s;
  }
}
</style>