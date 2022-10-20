<script setup lang='ts'>
import { reactive } from 'vue';
import FormPageTemplate from './Components/FormPageTemplate.vue';
import config from './Components/template';

const form = reactive({
  active: '111',
  area: 'area1',
  type: '1',
});
const handleClick = () => {
  console.log(form);
};
</script>

<template>
  <el-form>
    <FormPageTemplate
      v-for="(item, index) in config"
      :key="index"
      v-model="form[(item.formKey as keyof typeof form)]"
      :config="item"
      :form="form"
    />
  </el-form>
  <el-button @click="handleClick">
    click
  </el-button>
</template>

<style lang='scss' scoped>

</style>
