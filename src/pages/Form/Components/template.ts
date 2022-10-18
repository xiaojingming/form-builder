import { ElInput, ElSelect } from 'element-plus';

const config = [
  {
    type: ElInput,
    label: '活动名称',
    formKey: 'active',
    options: {
      vIf: [
        {
          relationKey: 'area',
          value: 'area1',
        },
      ],
    },
  },
  {
    type: ElSelect,
    label: '活动区域',
    formKey: 'area',
    optionData: [
      {
        label: '区域1',
        value: 'area1',
      },
      {
        label: '区域2',
        value: 'area2',
      },
    ],
  },
];

export default config;
