<template>
  <el-dialog
    v-model="dialogVisible"
    title="Shipping address"
  >
    <el-form :model="form">
      <el-form-item
        label="Promotion name"
        label-width="140px"
      >
        <el-input
          v-model="form.name"
          autocomplete="off"
        />
      </el-form-item>
      <el-form-item
        label="Zones"
        label-width="140px"
      >
        <el-select
          v-model="form.region"
          placeholder="Please select a zone"
        >
          <el-option
            label="Zone No.1"
            value="shanghai"
          />
          <el-option
            label="Zone No.2"
            value="beijing"
          />
        </el-select>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="handleCancel">Cancel</el-button>
        <el-button
          type="primary"
          @click="handleConfirm"
        >
          Confirm
        </el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script lang="ts" setup>
import { reactive, computed } from 'vue';
import { Router } from 'vue-router';

const props = defineProps<{
  modelValue: boolean;
  router: Router;
}>();
// eslint-disable-next-line no-spaced-func, func-call-spacing
const emits = defineEmits<{
  // eslint-disable-next-line no-unused-vars
  (e: 'update:modelValue', val: boolean): void;
  // eslint-disable-next-line no-unused-vars
  (e: 'confirm', val: any): void;
}>();

const dialogVisible = computed({
  get: () => props.modelValue,
  set: (v: boolean) => emits('update:modelValue', v),
});
// const routerInstance = computed(() => props.router);

const form = reactive({
  name: '',
  region: '',
});

const handleCancel = () => {
  dialogVisible.value = false;
};
const handleConfirm = () => {
  emits('confirm', form);
  dialogVisible.value = false;
};

</script>
