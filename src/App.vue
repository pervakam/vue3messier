<template>
  <div>
    <page-header></page-header>
    <router-view></router-view>
  </div>
</template>

<script>
import PageHeader from "@/components/PageHeader";

export default {
  components: {
    PageHeader
  }
};
</script>

<style lang="scss">


</style>
