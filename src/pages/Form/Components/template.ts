import {
  ElInput, ElSelect, ElOption, ElRadioGroup, ElRadio, ElButton, ElTag,
} from 'element-plus';
import useDialog from '@/utils/useDialog';

const config = [
  {
    type: ElInput,
    label: '活动名称',
    formKey: 'active',
    value: '111',
    options: {
      vIf: [
        {
          relationKey: 'area',
          value: 'area1',
        },
        {
          relationKey: 'type',
          value: '0',
        },
      ],
    },
  },
  {
    type: ElSelect,
    label: '活动区域',
    formKey: 'area',
    value: 'area1',
    children: {
      type: ElOption,
      optionData: [
        {
          label: '区域一',
          value: 'area1',
        },
        {
          label: '区域二',
          value: 'area2',
        },
      ],
    },
  },
  {
    type: ElRadioGroup,
    label: '活动类型',
    formKey: 'type',
    value: '1',
    children: {
      type: ElRadio,
      needShowTag: true,
      optionData: [
        {
          label: '0',
          value: '默认',
        },
        {
          label: '1',
          value: '自选',
        },
      ],
    },
  },
  {
    type: ElButton,
    label: '具体类型',
    formKey: 'specificType',
    _value: '选择类型',
    _type: 'primary',
    size: 'large',
    value: [],
    clickEvent: [useDialog],
    options: {
      vIf: [
        {
          relationKey: 'specificType',
          value: (arr: any[]) => arr.length === 0,
        },
      ],
    },
  },
  {
    type: ElTag,
    label: '具体类型',
    formKey: 'specificType',
    value: [],
    options: {
      vIf: [
        {
          relationKey: 'specificType',
          value: (arr: any[]) => arr.length > 0,
        },
      ],
    },
  },
];

export default config;
