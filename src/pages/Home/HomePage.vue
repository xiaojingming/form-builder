<script setup lang='ts'>
import { useRouter } from 'vue-router';
import useDialog from '@/utils/useDialog';
import DialogTemplate from '@/pages/Home/components/DialogTemplate.vue';

const router = useRouter();
const handleShowDialog = () => {
  useDialog({
    props: { title: 'hello world!', router },
    component: DialogTemplate,
  });
};

</script>

<template>
  <div>home</div>
  <el-button @click="handleShowDialog">
    click
  </el-button>
</template>

<style lang='scss' scoped>

</style>
