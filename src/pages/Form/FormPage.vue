<script setup lang='ts'>
import FormPageTemplate from './Components/FormPageTemplate.vue';
import config from './Components/template';

</script>

<template>
  <el-form>
    <FormPageTemplate
      v-for="(item, index) in config"
      :key="index"
      :config="item"
    />
  </el-form>
</template>

<style lang='scss' scoped>

</style>
