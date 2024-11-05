import './component'
import './preview'

Shopware.Service('cmsService').registerCmsBlock({
  name: 'alphatrail-faq',
  label: 'Faq',
  category: 'alphatrail',
  component: 'sw-cms-block-alphatrail-faq',
  previewComponent: 'sw-cms-preview-alphatrail-faq',
  defaultConfig: {
      marginBottom: '0px',
      marginTop: '0px',
      marginLeft: '0px',
      marginRight: '0px',
      sizingMode: 'boxed'
  },
  slots: {
    'items': {
      type: 'alphatrail-faq'
    }
  }
})