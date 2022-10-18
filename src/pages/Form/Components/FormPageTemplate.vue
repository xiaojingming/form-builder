<!-- eslint-disable no-restricted-syntax -->
<!-- eslint-disable consistent-return -->
<!-- eslint-disable no-param-reassign -->
<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts">
import { defineComponent, h, computed } from 'vue';
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
    form: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const componentShow = computed(() => {
      const currentHasVif = props.config?.options?.vIf;
      if (currentHasVif) {
        for (const { relationKey, value } of currentHasVif) {
          if (props.form[relationKey] !== value) {
            return false;
          }
        }
      }
      return true;
    });
    return () => {
      if (!componentShow.value) {
        emit('update:modelValue', '');
        return;
      }
      return h(ElFormItem, {
        label: props.config.label,
      }, () => h(props.config.type, {
        modelValue: props.modelValue,
        'onUpdate:modelValue': (value: string) => {
          emit('update:modelValue', value);
        },
      }, () => props.config?.optionData
        .map((option: Options) => h(ElOption, {
          label: option.label,
          value: option.value,
        }))));
    };
  },
});
</script>
