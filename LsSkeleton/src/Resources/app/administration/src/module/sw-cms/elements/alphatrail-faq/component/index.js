import template from './sw-cms-el-alphatrail-faq.html.twig'
import './sw-cms-el-alphatrail-faq.scss'

const { Mixin } = Shopware;

Shopware.Component.register('sw-cms-el-alphatrail-faq', {
  template,

  mixins: [
    Mixin.getByName('cms-element')
  ],

  created() {
    this.createdComponent()
  },

  methods: {
    createdComponent() {
      this.initElementConfig('alphatrail-faq')
      this.initElementData('alphatrail-faq')
    }
  }
})