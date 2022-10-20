<!-- eslint-disable vue/require-default-prop -->
<!-- eslint-disable no-underscore-dangle -->
<!-- eslint-disable no-restricted-syntax -->
<!-- eslint-disable consistent-return -->
<script lang="ts">
import { defineComponent, h, computed } from 'vue';
import { ElFormItem } from 'element-plus';
import { useRouter } from 'vue-router';
import DialogTemplate from '@/pages/Home/components/DialogTemplate.vue';

export default defineComponent({
  props: {
    config: {
      type: Object,
      default: () => {},
    },
    modelValue: {
      type: [String, Boolean],
    },
    form: {
      type: Object,
      default: () => {},
    },
  },
  emits: ['update:modelValue'],
  setup(props, { emit }) {
    const router = useRouter();
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
        emit('update:modelValue', props.config.value);
        return;
      }
      return h(ElFormItem, {
        label: props.config.label,
      }, () => {
        if (props.config.type.name === 'ElButton') {
          return h(
            props.config.type,
            {
              type: props.config._type,
              size: props.config.size,
              onClick() {
                emit('update:modelValue', true);
                props.config.clickEvent.map((event: Function) => event.call(null, {
                  props: { title: 'hello world!', router },
                  component: DialogTemplate,
                }));
              },
            },
            () => props.config._value,
          );
        }
        return h(props.config.type, {
          modelValue: props.modelValue,
          'onUpdate:modelValue': (value: string) => {
            emit('update:modelValue', value);
          },
        }, () => props.config?.children?.optionData
          .map(
            (option: any) => h(
              props.config.children.type,
              option,
              props.config.children.needShowTag ? () => option.value : '',
            ),
          ));
      });
    };
  },
});
</script>
