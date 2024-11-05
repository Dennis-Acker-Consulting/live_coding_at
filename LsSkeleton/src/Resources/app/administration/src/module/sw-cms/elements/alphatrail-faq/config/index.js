import template from './sw-cms-el-config-alphatrail-faq.html.twig'
import './sw-cms-el-config-alphatrail-faq.scss'

const { Component, Mixin } = Shopware

Component.register('sw-cms-el-config-alphatrail-faq', {
  template,
  emits: ['element-update'],
  mixins: [Mixin.getByName('cms-element')],

  data() {
    return {
      faqModalIsOpen: false,

      faqForm: {
        id: '',
        question: '',
        answer: '',
        category: ''
      },

      currentFaq: null
    }
  },

  created() {
    this.createdComponent()
  },

  methods: {
    async createdComponent() {
      this.initElementConfig('alphatrail-faq')
    },

    openFaqModal() {
      this.resetFaqForm()
      this.faqModalIsOpen = true
    },

    editFaq(item) {
      this.currentFaq = item

      this.faqForm.question = item.question
      this.faqForm.answer = item.answer
      this.faqForm.category = item.category
      this.faqForm.id = item.id

      this.faqModalIsOpen = true
    },

    saveFaq() {
      if(this.currentFaq) {
        let item = this.element.config.items.value.find(e => e.id === this.currentFaq.id)
        item.question = this.faqForm.question
        item.answer = this.faqForm.answer
        item.id = this.faqForm.id
        item.category = this.faqForm.category
      } else {
        this.element.config.items.value.push({
          id: this.faqForm.id,
          question: this.faqForm.question,
          answer: this.faqForm.answer,
          category: this.faqForm.category
        })
      }

      setTimeout(() => {
        this.closeFaqModal()
      }, 300)
    },

    closeFaqModal() {
      this.faqModalIsOpen = false
      this.currentFaq = null
    },

    resetFaqForm() {
      this.faqForm.question = ''
      this.faqForm.answer = ''
      this.faqForm.id = ''
      this.faqForm.category = ''
    },

    deleteFaq(i) {
      this.element.config.items.value.splice(i,1)
    }
  }
})