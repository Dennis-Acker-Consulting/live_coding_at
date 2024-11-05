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
    // this.cancelBtnEl = this.el.querySelector('#cancel')
    this._columns = this.el.querySelectorAll(this.options.collapseColumnSelector)
    this.initListeners()
  }

  initListeners() {
    this._onViewportHasChanged()
    document.addEventListener('Viewport/hasChanged', this._onViewportHasChanged.bind(this))
    this.searchBtnEl.addEventListener('click', this.onSearchBtnClick.bind(this))
    // this.cancelBtnEl.addEventListener('click', this.cancel.bind(this))
    this.categorySelectEl.addEventListener('change', this.onCategorySelected.bind(this))
    this.searchInputEl.addEventListener('keypress', this.onEnter.bind(this));
  }

  onSearchBtnClick() {
    this.search(this.searchInputEl.value)
  }

  onEnter(e) {
    if(e.key === 'Enter') this.onSearchBtnClick()
  }
  
  search(query) {
    if(query) {
      if(this.categorySelectEl.value) {
        this.options.items = structuredClone(this.initialItems.filter(e => e.question.toLowerCase().includes(query.toLowerCase()) && e.category === this.categorySelectEl.value || e.answer.toLowerCase().includes(query.toLowerCase()) && e.category === this.categorySelectEl.value))
      } else {
        this.options.items = structuredClone(this.initialItems.filter(e => e.question.toLowerCase().includes(query.toLowerCase()) || e.answer.toLowerCase().includes(query.toLowerCase())))
      }
    } else {
      this.options.items = structuredClone(this.initialItems)
    }
  
    this.updateDom()    
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
          <div class="title">
            <span>${item.category}</span>
            <div>${item.question}</div>
          </div>
          <div class="product-row-toggle">
            <span class="toggle-plus-icon">
              <span class="icon icon-plus">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path d="M11 11V3c0-.5523.4477-1 1-1s1 .4477 1 1v8h8c.5523 0 1 .4477 1 1s-.4477 1-1 1h-8v8c0 .5523-.4477 1-1 1s-1-.4477-1-1v-8H3c-.5523 0-1-.4477-1-1s.4477-1 1-1h8z" id="icons-default-plus"></path></defs><use xlink:href="#icons-default-plus" fill="#758CA3" fill-rule="evenodd"></use></svg>
              </span>
            </span>
            <span class="toggle-minus-icon">
              <span class="icon icon-minus">
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="24" height="24" viewBox="0 0 24 24"><defs><path id="icons-default-minus" d="M3 13h18c.5523 0 1-.4477 1-1s-.4477-1-1-1H3c-.5523 0-1 .4477-1 1s.4477 1 1 1z"></path></defs><use xlink:href="#icons-default-minus" fill="#758CA3" fill-rule="evenodd"></use></svg>
              </span>
            </span>
          </div>
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
    
    this._onViewportHasChanged()
  }

  onCategorySelected(evt) {
    if(evt.target.value) {
      if(this.searchInputEl.value) {
        this.options.items = structuredClone(this.initialItems.filter(e => e.question.toLowerCase().includes(this.searchInputEl.value.toLowerCase()) && e.category.toLowerCase() === evt.target.value.toLowerCase() || e.question.toLowerCase().includes(this.searchInputEl.value.toLowerCase()) && e.category.toLowerCase() === evt.target.value.toLowerCase()))
      } else {
        this.options.items = structuredClone(this.initialItems.filter(e => e.category.toLowerCase() === evt.target.value.toLowerCase()))
      }
    } else {
      this.options.items = this.initialItems
    }
    this.updateDom()
  }

  _onViewportHasChanged() {
    this._columns = this.el.querySelectorAll(this.options.collapseColumnSelector)
    const event = 'click'

    Iterator.iterate(this._columns, column => {
      const trigger = DomAccess.querySelector(column, this.options.collapseColumnTriggerSelector)
      trigger.removeEventListener(event, this._onClickCollapseTrigger)
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

  // cancel() {
  //   this.searchInputEl.value = ''
  //   this.categorySelectEl.value = ''
  //   this.options.items = structuredClone(this.initialItems)
  //   this.updateDom()
  // }
}