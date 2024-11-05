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
    this.searchInputEl = this.el.querySelector('#search-input')
    this.searchBtnEl = this.el.querySelector('#search-btn')
    this.categorySelectEl = this.el.querySelector('#categories')
    this.listEl = this.el.querySelector('.items')

    this._columns = this.el.querySelectorAll(this.options.collapseColumnSelector);

    this.initListeners()
  }

  initListeners() {
    this._onViewportHasChanged()
    document.addEventListener('Viewport/hasChanged', this._onViewportHasChanged.bind(this))

    this.searchBtnEl.addEventListener('click', this.onSearchBtnClick.bind(this))
  }

  onSearchBtnClick() {
    console.log('start search')
    this.search(this.searchInputEl.value)
    console.log(this.options)
  }

  search(query) {
    console.log(query)
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
}