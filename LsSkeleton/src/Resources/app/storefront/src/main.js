const PluginManager = window.PluginManager

PluginManager.register('FaqPlugin', () => import('./plugin/alphatrail/faq.plugin'), '[data-faq]')

if (module.hot) {
  module.hot.accept()
}