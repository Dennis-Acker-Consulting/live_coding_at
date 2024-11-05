import Plugin from 'src/plugin-system/plugin.class'

export default class FaqPlugin extends Plugin {
  static options = {
    items: []
  }

  init() {
    this.searchInputEl = this.el.querySelector('#search-input')
    this.searchBtnEl = this.el.querySelector('#search-btn')
    this.categorySelectEl = this.el.querySelector('#categories')
    this.listEl = this.el.querySelector('.items')

    this.initListeners()
  }

  initListeners() {
    this.searchBtnEl.addEventListener('click', this.onSearchBtnClick.bind(this))
  }

  onSearchBtnClick() {
    console.log('start search')
    this.search(this.searchInputEl.value)
    console.log(this.options.items)
  }

  search(query) {
    console.log(query)
  }
}