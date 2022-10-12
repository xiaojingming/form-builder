<script setup lang='ts'>
import { reactive } from 'vue';
import FormPageTemplate from './Components/FormPageTemplate.vue';
import config from './Components/template';

const form = reactive({
  active: 'xxxxx',
  area: 'area1',
});
</script>

<template>
  <el-form>
    <FormPageTemplate
      v-for="(item, index) in config"
      :key="index"
      v-model="form[item.formKey]"
      :config="item"
    />
  </el-form>
</template>

<style lang='scss' scoped>

</style>
