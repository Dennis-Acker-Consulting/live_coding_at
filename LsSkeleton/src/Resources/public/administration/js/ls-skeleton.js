(function(){var e={472:function(){},129:function(){},260:function(){},514:function(){},19:function(e,t,a){var n=a(472);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(346).Z("46c4a53a",n,!0,{})},786:function(e,t,a){var n=a(129);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(346).Z("51194b46",n,!0,{})},916:function(e,t,a){var n=a(260);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(346).Z("6f42181f",n,!0,{})},571:function(e,t,a){var n=a(514);n.__esModule&&(n=n.default),"string"==typeof n&&(n=[[e.id,n,""]]),n.locals&&(e.exports=n.locals),a(346).Z("d213d21e",n,!0,{})},346:function(e,t,a){"use strict";function n(e,t){for(var a=[],n={},i=0;i<t.length;i++){var s=t[i],r=s[0],o={id:e+":"+i,css:s[1],media:s[2],sourceMap:s[3]};n[r]?n[r].parts.push(o):a.push(n[r]={id:r,parts:[o]})}return a}a.d(t,{Z:function(){return u}});var i="undefined"!=typeof document;if("undefined"!=typeof DEBUG&&DEBUG&&!i)throw Error("vue-style-loader cannot be used in a non-browser environment. Use { target: 'node' } in your Webpack config to indicate a server-rendering environment.");var s={},r=i&&(document.head||document.getElementsByTagName("head")[0]),o=null,l=0,c=!1,d=function(){},m=null,p="data-vue-ssr-id",f="undefined"!=typeof navigator&&/msie [6-9]\b/.test(navigator.userAgent.toLowerCase());function u(e,t,a,i){c=a,m=i||{};var r=n(e,t);return h(r),function(t){for(var a=[],i=0;i<r.length;i++){var o=s[r[i].id];o.refs--,a.push(o)}t?h(r=n(e,t)):r=[];for(var i=0;i<a.length;i++){var o=a[i];if(0===o.refs){for(var l=0;l<o.parts.length;l++)o.parts[l]();delete s[o.id]}}}}function h(e){for(var t=0;t<e.length;t++){var a=e[t],n=s[a.id];if(n){n.refs++;for(var i=0;i<n.parts.length;i++)n.parts[i](a.parts[i]);for(;i<a.parts.length;i++)n.parts.push(w(a.parts[i]));n.parts.length>a.parts.length&&(n.parts.length=a.parts.length)}else{for(var r=[],i=0;i<a.parts.length;i++)r.push(w(a.parts[i]));s[a.id]={id:a.id,refs:1,parts:r}}}}function v(){var e=document.createElement("style");return e.type="text/css",r.appendChild(e),e}function w(e){var t,a,n=document.querySelector("style["+p+'~="'+e.id+'"]');if(n){if(c)return d;n.parentNode.removeChild(n)}if(f){var i=l++;t=g.bind(null,n=o||(o=v()),i,!1),a=g.bind(null,n,i,!0)}else t=b.bind(null,n=v()),a=function(){n.parentNode.removeChild(n)};return t(e),function(n){n?(n.css!==e.css||n.media!==e.media||n.sourceMap!==e.sourceMap)&&t(e=n):a()}}var q=function(){var e=[];return function(t,a){return e[t]=a,e.filter(Boolean).join("\n")}}();function g(e,t,a,n){var i=a?"":n.css;if(e.styleSheet)e.styleSheet.cssText=q(t,i);else{var s=document.createTextNode(i),r=e.childNodes;r[t]&&e.removeChild(r[t]),r.length?e.insertBefore(s,r[t]):e.appendChild(s)}}function b(e,t){var a=t.css,n=t.media,i=t.sourceMap;if(n&&e.setAttribute("media",n),m.ssrId&&e.setAttribute(p,t.id),i&&(a+="\n/*# sourceURL="+i.sources[0]+" */\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(i))))+" */"),e.styleSheet)e.styleSheet.cssText=a;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(a))}}}},t={};function a(n){var i=t[n];if(void 0!==i)return i.exports;var s=t[n]={id:n,exports:{}};return e[n](s,s.exports,a),s.exports}a.d=function(e,t){for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="bundles/lsskeleton/",window?.__sw__?.assetPath&&(a.p=window.__sw__.assetPath+"/bundles/lsskeleton/"),function(){"use strict";Shopware.Component.override("sw-cms-sidebar",{template:'{% block sw_cms_sidebar_block_overview_category_options %}\n  {% parent() %}\n  <option value="alphatrail">Alphatrail</option>\n{% endblock %}'}),Shopware.Component.register("sw-cms-block-alphatrail-faq",{template:'{% block sw_cms_block_alphatrail_faq %}\n  <div class="sw-cms-block-alphatrail-faq">\n    <slot name="items"></slot>\n  </div>\n{% endblock %}'}),a(19),Shopware.Component.register("sw-cms-preview-alphatrail-faq",{template:'{% block sw_cms_block_alphatrail_faq_preview %}\n  <div class="sw-cms-preview-alphatrail-faq">\n    <div>\n      <h2>alphatrail faq</h2>\n    </div>\n  </div>\n{% endblock %}'}),Shopware.Service("cmsService").registerCmsBlock({name:"alphatrail-faq",label:"Faq",category:"alphatrail",component:"sw-cms-block-alphatrail-faq",previewComponent:"sw-cms-preview-alphatrail-faq",defaultConfig:{marginBottom:"0px",marginTop:"0px",marginLeft:"0px",marginRight:"0px",sizingMode:"boxed"},slots:{items:{type:"alphatrail-faq"}}}),a(786);let{Mixin:e}=Shopware;Shopware.Component.register("sw-cms-el-alphatrail-faq",{template:'{% block sw_cms_element_alphatrail_faq %}\n  <div class="sw-cms-el-alphatrail-faq">\n    Alphatrail Faq\n  </div>\n{% endblock %}',mixins:[e.getByName("cms-element")],created(){this.createdComponent()},methods:{createdComponent(){this.initElementConfig("alphatrail-faq"),this.initElementData("alphatrail-faq")}}}),a(916);let{Component:t,Mixin:n}=Shopware;t.register("sw-cms-el-config-alphatrail-faq",{template:'<div class="sw-cms-el-config-alphatrail-faq">\n  <sw-tabs default-item="content">\n    <template #default="{ active }" >\n      <sw-tabs-item\n        title="Elemente"\n        name="content"\n        :active-tab="active"\n      >\n        Elemente\n      </sw-tabs-item>\n      <sw-tabs-item\n        :title="$tc(\'sw-cms.elements.general.config.tab.settings\')"\n        name="settings"\n        :active-tab="active"\n      >\n        {{ $tc(\'sw-cms.elements.general.config.tab.settings\') }}\n      </sw-tabs-item>\n    </template>\n\n    <template #content="{ active }">\n      <sw-container v-if="active === \'content\'">\n        <sw-card title="FAQ">\n          <template v-slot:header-right>\n            <sw-button @click.native="openFaqModal" variant="primary" :block="true">\n              Artikel hinzuf\xfcgen\n            </sw-button>\n          </template>\n\n          <div class="items">\n            <div v-for="(item, i) in element.config.items.value" :key="item.id" class="item">\n              <div class="name">{{ item.question }}</div>\n              <sw-button variant="ghost-default" size="small" @click.native="editFaq(item)">Bearbeiten</sw-button>\n              <sw-button variant="ghost-danger" size="small" @click.native="deleteFaq(i)">L\xf6schen</sw-button>\n            </div>\n          </div>\n        </sw-card>\n      </sw-container>\n    </template>\n  </sw-tabs>\n\n  <sw-modal\n    v-if="faqModalIsOpen"\n    :title="currentFaq ? \'Artikel bearbeiten\' : \'Neuen Artikel erstellen\'"\n    @modal-close="closeFaqModal"\n  >\n    <sw-text-field\n      v-model:value="faqForm.id"\n      label="ID"\n    >\n    </sw-text-field>\n    <sw-text-editor\n      v-model:value="faqForm.question"\n      label="Frage">\n    </sw-text-editor>\n\n    <sw-text-editor\n      v-model:value="faqForm.answer"\n      label="Antwort">\n    </sw-text-editor>\n\n    <sw-select-field\n      placeholder="Kategorie w\xe4hlen"\n      label="Kategorie"\n      v-model:value="faqForm.category"\n    >\n      <option value="pumps">Bicycle Mini Pumps</option>\n      <option value="tubes">Bicycle Inner Tubes</option>\n    </sw-select-field>\n\n    <sw-button\n      variant="primary"\n      :block="true"\n      @click.native="saveFaq"\n    >\n      {{ currentFaq ? \'Aktualisieren\' : \'Hinzuf\xfcgen\' }}\n    </sw-button\n   >\n  </sw-modal>\n</div>',emits:["element-update"],mixins:[n.getByName("cms-element")],data(){return{faqModalIsOpen:!1,faqForm:{id:"",question:"",answer:"",category:""},currentFaq:null}},created(){this.createdComponent()},methods:{async createdComponent(){this.initElementConfig("alphatrail-faq")},openFaqModal(){this.resetFaqForm(),this.faqModalIsOpen=!0},editFaq(e){this.currentFaq=e,this.faqForm.question=e.question,this.faqForm.answer=e.answer,this.faqForm.category=e.category,this.faqForm.id=e.id,this.faqModalIsOpen=!0},saveFaq(){if(this.currentFaq){let e=this.element.config.items.value.find(e=>e.id===this.currentFaq.id);e.question=this.faqForm.question,e.answer=this.faqForm.answer,e.id=this.faqForm.id,e.category=this.faqForm.category}else this.element.config.items.value.push({id:this.faqForm.id,question:this.faqForm.question,answer:this.faqForm.answer,category:this.faqForm.category});setTimeout(()=>{this.closeFaqModal()},300)},closeFaqModal(){this.faqModalIsOpen=!1,this.currentFaq=null},resetFaqForm(){this.faqForm.question="",this.faqForm.answer="",this.faqForm.id="",this.faqForm.category=""},deleteFaq(e){this.element.config.items.value.splice(e,1)}}}),a(571);let{Component:i}=Shopware;i.register("sw-cms-el-preview-alphatrail-faq",{template:'{% block sw_cms_element_alphatrail_faq_preview %}\n  <div class="sw-cms-el-preview-alphatrail-faq">\n    faq\n  </div>\n{% endblock %}'}),Shopware.Service("cmsService").registerCmsElement({name:"alphatrail-faq",label:"Faq",category:"alphatrail",component:"sw-cms-el-alphatrail-faq",configComponent:"sw-cms-el-config-alphatrail-faq",previewComponent:"sw-cms-el-preview-alphatrail-faq",defaultConfig:{items:{source:"static",value:[]},title:{source:"static",value:"Default Title"}}})}()})();