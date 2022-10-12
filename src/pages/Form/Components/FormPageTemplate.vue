<!-- eslint-disable no-param-reassign -->
<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts">
import { defineComponent, h } from 'vue';
import { ElFormItem, ElOption } from 'element-plus';

interface Options {
  label: string;
  value: string;
}

export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    modelValue: {
      type: String,
      default: '',
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    return () => h(ElFormItem, {
      label: props.config.label,
    }, () => h(props.config.type, {
      modelValue: props.modelValue,
      'onUpdate:modelValue': (value: string) => {
        emit('update:modelValue', value);
      },
    }, () => props.config?.optionData.map((option: Options) => h(ElOption, {
      label: option.label,
      value: option.value,
    }))));
  },
});
</script>
