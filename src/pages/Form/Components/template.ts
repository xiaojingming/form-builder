import { ElInput, ElSelect } from 'element-plus';

const config = [
  {
    type: ElInput,
    label: '活动名称',
    formKey: 'active',
    value: '',
  },
  {
    type: ElSelect,
    label: '活动区域',
    formKey: 'area',
    value: 'area1',
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
