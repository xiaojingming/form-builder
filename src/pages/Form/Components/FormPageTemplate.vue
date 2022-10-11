<!-- eslint-disable no-param-reassign -->
<!-- eslint-disable vue/no-mutating-props -->
<script lang="ts">
import { defineComponent, h } from 'vue';
import { ElFormItem } from 'element-plus';

export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => {},
    },
  },
  setup(props) {
    // const form = reactive({});
    return () => h(ElFormItem, {
      label: props.config.label,
    }, () => h(props.config.type, {
      modelValue: props.config.value,
      // onChange(v: string) {
      // },
    }));
  },
});
</script>
