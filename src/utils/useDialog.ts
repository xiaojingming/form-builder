import { h, createApp } from 'vue';

const useDialog = (
  { component, props }: { component: any, props?: any },
) => new Promise((resolve) => {
  const dom = document.createElement('div');
  dom.setAttribute('id', 'cus-dialog');
  document.body.appendChild(dom);
  createApp({
    el: dom,
    data() {
      return {
        showModal: true,
        loading: false,
      };
    },
    methods: {
      close() {
        const dialogDom = document.querySelector('#cus-dialog');
        if (dialogDom) {
          document.body.removeChild(dialogDom);
        }
      },
    },
    render() {
      const self = this;
      return h(
        this.showModal ? component : 'div',
        {
          modelValue: self.showModal,
          'onUpdate:modelValue': (v: boolean) => {
            self.showModal = v;
            if (!v) {
              self.close();
            }
          },
          onConfirm(v: any) {
            resolve(v);
          },
          ...props,
        },
      );
    },
  }).mount('#cus-dialog');
});

export default useDialog;
