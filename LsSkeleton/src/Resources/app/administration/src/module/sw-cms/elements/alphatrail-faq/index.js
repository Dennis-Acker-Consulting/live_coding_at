import './component'
import './config'
import './preview'

Shopware.Service('cmsService').registerCmsElement({
  name: 'alphatrail-faq',
  label: 'Faq',
  category: 'alphatrail',
  component: 'sw-cms-el-alphatrail-faq',
  configComponent: 'sw-cms-el-config-alphatrail-faq',
  previewComponent: 'sw-cms-el-preview-alphatrail-faq',
  defaultConfig: {
    items: {
      source: 'static',
      value: []
    },
    title: {
      source: 'static',
      value: 'Default Title'
    }
  }
});