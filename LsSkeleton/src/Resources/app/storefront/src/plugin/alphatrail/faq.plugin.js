import Plugin from 'src/plugin-system/plugin.class'
import DomAccess from 'src/helper/dom-access.helper'
import Iterator from 'src/helper/iterator.helper'

export default class FaqPlugin extends Plugin {
  static options = {
    items: [],
    collapseShowClass: 'show',
    collapseColumnSelector: '.accordion',
    collapseColumnTriggerSelector: '.faq-trigger',
    collapseColumnContentSelector: '.faq-content',
  }

  init() {
    this.initialItems = this.options.items
    this.searchInputEl = this.el.querySelector('#search-input')
    this.searchBtnEl = this.el.querySelector('#search-btn')
    this.categorySelectEl = this.el.querySelector('#categories')
    this.listEl = this.el.querySelector('.items')
    this.cancelBtnEl = this.el.querySelector('#cancel')

    this._columns = this.el.querySelectorAll(this.options.collapseColumnSelector);

    this.initListeners()
  }

  initListeners() {
    this._onViewportHasChanged()
    document.addEventListener('Viewport/hasChanged', this._onViewportHasChanged.bind(this))

    this.searchBtnEl.addEventListener('click', this.onSearchBtnClick.bind(this))
    this.cancelBtnEl.addEventListener('click', this.cancel.bind(this))
    this.categorySelectEl.addEventListener('change', this.onCategorySelected.bind(this))
  }

  onSearchBtnClick() {
    console.log('start search')
    this.search(this.searchInputEl.value)
  }
  
  search(query) {
    if(query) {
      this.options.items = structuredClone(this.options.items.filter(e => e.question.toLowerCase().includes(query.toLowerCase()) || e.answer.toLowerCase().includes(query.toLowerCase())))
    } else {
      this.options.items = structuredClone(this.initialItems)
    }
  
    this.updateDom()
    
    console.log(this.options)
    this._onViewportHasChanged()
  }

  updateDom() {
    this.listEl.innerHTML = ''
    this.options.items.forEach((item, i) => {
      const el = document.createElement('div')
      el.classList.add('accordion')
      el.classList.add('item')
      el.innerHTML = `
        <div
          class="faq-headline faq-trigger"
          id="title-${i}"
          data-bs-target="#collapse-${i}"
          aria-expanded="true"
          role="listitem"
        >
          ${item.question} <span>${item.category}</span>
        </div>

        <div id="collapse-${i}"
          class="faq-content collapse"
          aria-labelledby="title-${i}"
          role="listitem"
        >
          <div class="faq-content-inner">
              ${item.answer}
          </div>
        </div>
      `

      this.listEl.append(el)
    })
  }

  onCategorySelected(evt) {
    console.log('cat selected', evt.target.value)
    this.options.items = structuredClone(this.initialItems.filter(e => e.category.toLowerCase() === evt.target.value.toLowerCase()))
    this.updateDom()
  }

  _onViewportHasChanged() {
    const event = 'click'

    Iterator.iterate(this._columns, column => {
        const trigger = DomAccess.querySelector(column, this.options.collapseColumnTriggerSelector)

        // remove possibly existing event listeners
        trigger.removeEventListener(event, this._onClickCollapseTrigger)

        // add event listener
        trigger.addEventListener(event, this._onClickCollapseTrigger.bind(this))
    });

    this.$emitter.publish('onViewportHasChanged')
  }

  /**
     * On clicking the collapse trigger (column headline) the columns
     * content area shall be toggled open/close
     * @param {Event} event
     * @private
     */
  _onClickCollapseTrigger(event) {
    const trigger = event.target;
    const collapseEl = trigger.parentNode.querySelector(this.options.collapseColumnContentSelector);
    const collapseShowClass = this.options.collapseShowClass;

    new bootstrap.Collapse(collapseEl, {
        toggle: true,
    });

    collapseEl.addEventListener('shown.bs.collapse', () => {
        trigger.classList.add(collapseShowClass);

        this.$emitter.publish('onCollapseShown');
    });

    collapseEl.addEventListener('hidden.bs.collapse', () => {
        trigger.classList.remove(collapseShowClass);

        this.$emitter.publish('onCollapseHidden');
    });

    this.$emitter.publish('onClickCollapseTrigger');
  }

  cancel() {
    this.categorySelectEl.value = ''
    this.options.items = structuredClone(this.initialItems)
    this.updateDom()
  }
}