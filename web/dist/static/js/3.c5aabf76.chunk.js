(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{566:
/*!*****************************************************!*\
  !*** ./src/components/RemoveButton/RemoveButton.js ***!
  \*****************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var r=n(/*! @babel/runtime-corejs3/helpers/toConsumableArray */573),o=n.n(r),a=n(/*! react */0),c=n.n(a),i=(n(/*! core-js/modules/es.array.join.js */274),n(/*! @babel/runtime-corejs3/core-js/instance/filter */31)),l=n.n(i),u=n(/*! @babel/runtime-corejs3/core-js/instance/concat */45),s=n.n(u),f=n(/*! @redwoodjs/router */6),p=n(/*! @heroicons/react/solid */574),d=function(e,t,n){var r,a,c=l()(r=o()(t)).call(r,(function(t){return t!==e.id})),i=1==c.length?s()(a="/".concat(n,"/")).call(a,c[0]):c.length>1?f.routes.multiselect({id:n,ids:c.join(",")}):f.routes.home();return i};t.a=function(e){var t=e.item,n=e.hover,r=e.ids,o=e.type;return n&&n.id==t.id?c.a.createElement(f.Link,{to:d(t,r,o)},c.a.createElement(p.a,{className:"inline-block w-5 h-5 ml-1 -mt-1 text-gray-400 hover:text-tg-blue-darker"})):c.a.createElement(c.a.Fragment,null)}},567:
/*!*******************************************************!*\
  !*** ./src/components/ResultsHeader/ResultsHeader.js ***!
  \*******************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";n(/*! core-js/modules/web.dom-collections.for-each.js */180);var r=n(/*! @babel/runtime-corejs3/core-js/object/keys */53),o=n.n(r),a=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-symbols */134),c=n.n(a),i=n(/*! @babel/runtime-corejs3/core-js/instance/filter */31),l=n.n(i),u=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-descriptor */99),s=n.n(u),f=n(/*! @babel/runtime-corejs3/core-js/object/get-own-property-descriptors */135),p=n.n(f),d=n(/*! @babel/runtime-corejs3/helpers/defineProperty */181),b=n.n(d),y=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */26),m=n.n(y),v=(n(/*! core-js/modules/es.function.name.js */273),n(/*! react */0)),g=n.n(v),h=n(/*! @redwoodjs/router */6),C=n(/*! react-copy-to-clipboard */568),x=n(/*! @heroicons/react/outline */12);function w(e,t){var n=o()(e);if(c.a){var r=c()(e);t&&(r=l()(r).call(r,(function(t){return s()(e,t).enumerable}))),n.push.apply(n,r)}return n}function O(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?w(Object(n),!0).forEach((function(t){b()(e,t,n[t])})):p.a?Object.defineProperties(e,p()(n)):w(Object(n)).forEach((function(t){Object.defineProperty(e,t,s()(n,t))}))}return e}t.a=function(e){var t=e.name,n=Object(h.useParams)(),r=Object(v.useState)({value:window.location.href,copied:!1}),o=m()(r,2),a=o[0],c=o[1];Object(v.useEffect)((function(){c(O(O({},a),{},{copied:!1}))}),[n]);return g.a.createElement("div",{className:"my-4"},g.a.createElement("h2",null,t),g.a.createElement(C.CopyToClipboard,{text:a.value,onCopy:function(){return c(O(O({},a),{},{copied:!0})),void ga("send","event","Copy","Copied",a.value)}},g.a.createElement("span",{className:"text-sm inline-block leading-4 "+(a.copied?"text-gray-500 hover:text-gray-500 cursor-default":"text-tg-blue hover:text-tg-blue-darker cursor-pointer")},g.a.createElement(x.c,{className:"w-4 h-4 mr-1 float-left"})," ",a.copied?"Copied":"Copy link")))}},568:
/*!************************************************************!*\
  !*** ../node_modules/react-copy-to-clipboard/lib/index.js ***!
  \************************************************************/
/*! no static exports found */
/*! exports used: CopyToClipboard */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var r=n(/*! ./Component */569).CopyToClipboard;r.CopyToClipboard=r,e.exports=r},569:
/*!****************************************************************!*\
  !*** ../node_modules/react-copy-to-clipboard/lib/Component.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CopyToClipboard=void 0;var r=a(n(/*! react */0)),o=a(n(/*! copy-to-clipboard */570));function a(e){return e&&e.__esModule?e:{default:e}}function c(e){return(c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t){return!t||"object"!==c(t)&&"function"!=typeof t?d(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function y(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var m=function(e){function t(){var e,n;u(this,t);for(var a=arguments.length,c=new Array(a),i=0;i<a;i++)c[i]=arguments[i];return y(d(n=f(this,(e=p(t)).call.apply(e,[this].concat(c)))),"onClick",(function(e){var t=n.props,a=t.text,c=t.onCopy,i=t.children,l=t.options,u=r.default.Children.only(i),s=(0,o.default)(a,l);c&&c(a,s),u&&u.props&&"function"==typeof u.props.onClick&&u.props.onClick(e)})),n}var n,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}(t,e),n=t,(a=[{key:"render",value:function(){var e=this.props,t=(e.text,e.onCopy,e.options,e.children),n=l(e,["text","onCopy","options","children"]),o=r.default.Children.only(t);return r.default.cloneElement(o,function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(n,!0).forEach((function(t){y(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},n,{onClick:this.onClick}))}}])&&s(n.prototype,a),c&&s(n,c),t}(r.default.PureComponent);t.CopyToClipboard=m,y(m,"defaultProps",{onCopy:void 0,options:void 0})},570:
/*!**************************************************!*\
  !*** ../node_modules/copy-to-clipboard/index.js ***!
  \**************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var r=n(/*! toggle-selection */571),o={"text/plain":"Text","text/html":"Url",default:"Text"};e.exports=function(e,t){var n,a,c,i,l,u,s=!1;t||(t={}),n=t.debug||!1;try{if(c=r(),i=document.createRange(),l=document.getSelection(),(u=document.createElement("span")).textContent=e,u.style.all="unset",u.style.position="fixed",u.style.top=0,u.style.clip="rect(0, 0, 0, 0)",u.style.whiteSpace="pre",u.style.webkitUserSelect="text",u.style.MozUserSelect="text",u.style.msUserSelect="text",u.style.userSelect="text",u.addEventListener("copy",(function(r){if(r.stopPropagation(),t.format)if(r.preventDefault(),void 0===r.clipboardData){n&&console.warn("unable to use e.clipboardData"),n&&console.warn("trying IE specific stuff"),window.clipboardData.clearData();var a=o[t.format]||o.default;window.clipboardData.setData(a,e)}else r.clipboardData.clearData(),r.clipboardData.setData(t.format,e);t.onCopy&&(r.preventDefault(),t.onCopy(r.clipboardData))})),document.body.appendChild(u),i.selectNodeContents(u),l.addRange(i),!document.execCommand("copy"))throw new Error("copy command was unsuccessful");s=!0}catch(r){n&&console.error("unable to copy using execCommand: ",r),n&&console.warn("trying IE specific stuff");try{window.clipboardData.setData(t.format||"text",e),t.onCopy&&t.onCopy(window.clipboardData),s=!0}catch(r){n&&console.error("unable to copy using clipboardData: ",r),n&&console.error("falling back to prompt"),a=function(e){var t=(/mac os x/i.test(navigator.userAgent)?"⌘":"Ctrl")+"+C";return e.replace(/#{\s*key\s*}/g,t)}("message"in t?t.message:"Copy to clipboard: #{key}, Enter"),window.prompt(a,e)}}finally{l&&("function"==typeof l.removeRange?l.removeRange(i):l.removeAllRanges()),u&&document.body.removeChild(u),c()}return s}},571:
/*!*************************************************!*\
  !*** ../node_modules/toggle-selection/index.js ***!
  \*************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){e.exports=function(){var e=document.getSelection();if(!e.rangeCount)return function(){};for(var t=document.activeElement,n=[],r=0;r<e.rangeCount;r++)n.push(e.getRangeAt(r));switch(t.tagName.toUpperCase()){case"INPUT":case"TEXTAREA":t.blur();break;default:t=null}return e.removeAllRanges(),function(){"Caret"===e.type&&e.removeAllRanges(),e.rangeCount||n.forEach((function(t){e.addRange(t)})),t&&t.focus()}}},572:
/*!*****************************************************************!*\
  !*** ./src/components/SubmarineCableList/SubmarineCableList.js ***!
  \*****************************************************************/
/*! exports provided: default */
/*! exports used: default */function(e,t,n){"use strict";var r=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */26),o=n.n(r),a=(n(/*! core-js/modules/es.function.name.js */273),n(/*! @babel/runtime-corejs3/core-js/instance/concat */45)),c=n.n(a),i=n(/*! @babel/runtime-corejs3/core-js/instance/map */14),l=n.n(i),u=n(/*! react */0),s=n.n(u),f=n(/*! @redwoodjs/router */6),p=n(/*! ../../contexts/MapContext/MapContext */96),d=n(/*! ../RemoveButton/RemoveButton */566);t.a=function(e){var t=e.submarineCables,n=e.xl,r=e.ids,a=e.toggleLandingTooltip,i=e.rfs,b=e.group_by_rfs,y=Object(u.useState)(null),m=o()(y,2),v=m[0],g=m[1],h=Object(u.useContext)(p.a);return Object(u.useEffect)((function(){if(v){var e,t,n=h.getSubmarineCableCentroid(v.id+"-0"),r=h.getSubmarineCableColor(v.id+"-0");h.openInfoWindowHover({position:n,content:c()(e=c()(t='<div class="cable tooltip" style="background-color:'.concat(r,";border-top-color:")).call(t,r,';">')).call(e,v.name,'<div class="tooltip-pointer"></div></div>')}),ga("send","event","Cable","Sidebar Mouseover",v.id)}else h.infoWindowHover.close();a&&a(!v||null)}),[v]),n?s.a.createElement(s.a.Fragment,null,l()(t).call(t,(function(e){return s.a.createElement(f.Link,{key:e.id,to:f.routes.submarineCable({id:e.id}),onMouseEnter:function(){return g(e)},onMouseLeave:function(){return g(null)},className:"block bg-gray-50 text-black hover:bg-gray-150 hover:text-black py-2 px-8 border-b border-gray-200"},e.name)}))):s.a.createElement(s.a.Fragment,null,s.a.createElement("h3",null,r?"Selection":b?"RFS "+i:"Submarine Cables"),s.a.createElement("ul",null,l()(t).call(t,(function(e){return s.a.createElement("li",{key:e.id,onMouseEnter:function(){return g(e)},onMouseLeave:function(){return g(null)}},s.a.createElement(f.Link,{to:f.routes.submarineCable({id:e.id}),className:"text-tg-blue hover:text-tg-blue-darker"},e.name,!i&&e.is_planned?s.a.createElement("span",{className:"inline-block align-middle ml-1 -mt-1 px-1.5 rounded-full border border-gray-400 text-xs text-gray-500"},e.rfs_year):""),r&&s.a.createElement(d.a,{item:e,hover:v,ids:r,type:"submarine-cable"}))}))))}},576:
/*!***********************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/sort.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports=n(/*! core-js-pure/features/instance/sort */581)},581:
/*!**************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/sort.js ***!
  \**************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r=n(/*! ../../es/instance/sort */582);e.exports=r},582:
/*!********************************************************!*\
  !*** ../node_modules/core-js-pure/es/instance/sort.js ***!
  \********************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r=n(/*! ../array/virtual/sort */583),o=Array.prototype;e.exports=function(e){var t=e.sort;return e===o||e instanceof Array&&t===o.sort?r:t}},583:
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/sort.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){n(/*! ../../../modules/es.array.sort */584);var r=n(/*! ../../../internals/entry-virtual */23);e.exports=r("Array").sort},584:
/*!*************************************************************!*\
  !*** ../node_modules/core-js-pure/modules/es.array.sort.js ***!
  \*************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){"use strict";var r=n(/*! ../internals/export */5),o=n(/*! ../internals/a-function */38),a=n(/*! ../internals/to-object */40),c=n(/*! ../internals/to-length */39),i=n(/*! ../internals/fails */17),l=n(/*! ../internals/array-sort */585),u=n(/*! ../internals/array-method-is-strict */81),s=n(/*! ../internals/engine-ff-version */586),f=n(/*! ../internals/engine-is-ie-or-edge */587),p=n(/*! ../internals/engine-v8-version */68),d=n(/*! ../internals/engine-webkit-version */588),b=[],y=b.sort,m=i((function(){b.sort(void 0)})),v=i((function(){b.sort(null)})),g=u("sort"),h=!i((function(){if(p)return p<70;if(!(s&&s>3)){if(f)return!0;if(d)return d<603;var e,t,n,r,o="";for(e=65;e<76;e++){switch(t=String.fromCharCode(e),e){case 66:case 69:case 70:case 72:n=3;break;case 68:case 71:n=4;break;default:n=2}for(r=0;r<47;r++)b.push({k:t+r,v:n})}for(b.sort((function(e,t){return t.v-e.v})),r=0;r<b.length;r++)t=b[r].k.charAt(0),o.charAt(o.length-1)!==t&&(o+=t);return"DGBEFHACIJK"!==o}}));r({target:"Array",proto:!0,forced:m||!v||!g||!h},{sort:function(e){void 0!==e&&o(e);var t=a(this);if(h)return void 0===e?y.call(t):y.call(t,e);var n,r,i=[],u=c(t.length);for(r=0;r<u;r++)r in t&&i.push(t[r]);for(n=(i=l(i,function(e){return function(t,n){return void 0===n?-1:void 0===t?1:void 0!==e?+e(t,n)||0:String(t)>String(n)?1:-1}}(e))).length,r=0;r<n;)t[r]=i[r++];for(;r<u;)delete t[r++];return t}})},585:
/*!************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/array-sort.js ***!
  \************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t){var n=Math.floor,r=function(e,t){var c=e.length,i=n(c/2);return c<8?o(e,t):a(r(e.slice(0,i),t),r(e.slice(i),t),t)},o=function(e,t){for(var n,r,o=e.length,a=1;a<o;){for(r=a,n=e[a];r&&t(e[r-1],n)>0;)e[r]=e[--r];r!==a++&&(e[r]=n)}return e},a=function(e,t,n){for(var r=e.length,o=t.length,a=0,c=0,i=[];a<r||c<o;)a<r&&c<o?i.push(n(e[a],t[c])<=0?e[a++]:t[c++]):i.push(a<r?e[a++]:t[c++]);return i};e.exports=r},586:
/*!*******************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/engine-ff-version.js ***!
  \*******************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r=n(/*! ../internals/engine-user-agent */97).match(/firefox\/(\d+)/i);e.exports=!!r&&+r[1]},587:
/*!**********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/engine-is-ie-or-edge.js ***!
  \**********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r=n(/*! ../internals/engine-user-agent */97);e.exports=/MSIE|Trident/.test(r)},588:
/*!***********************************************************************!*\
  !*** ../node_modules/core-js-pure/internals/engine-webkit-version.js ***!
  \***********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r=n(/*! ../internals/engine-user-agent */97).match(/AppleWebKit\/(\d+)\./);e.exports=!!r&&+r[1]},625:
/*!**************************************************************************!*\
  !*** ../node_modules/@babel/runtime-corejs3/core-js/instance/entries.js ***!
  \**************************************************************************/
/*! no static exports found */
/*! exports used: default */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){e.exports=n(/*! core-js-pure/features/instance/entries */626)},626:
/*!*****************************************************************!*\
  !*** ../node_modules/core-js-pure/features/instance/entries.js ***!
  \*****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r=n(/*! ../../stable/instance/entries */627);e.exports=r},627:
/*!***************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/instance/entries.js ***!
  \***************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){n(/*! ../../modules/web.dom-collections.iterator */55);var r=n(/*! ../array/virtual/entries */628),o=n(/*! ../../internals/classof */54),a=Array.prototype,c={DOMTokenList:!0,NodeList:!0};e.exports=function(e){var t=e.entries;return e===a||e instanceof Array&&t===a.entries||c.hasOwnProperty(o(e))?r:t}},628:
/*!********************************************************************!*\
  !*** ../node_modules/core-js-pure/stable/array/virtual/entries.js ***!
  \********************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){var r=n(/*! ../../../es/array/virtual/entries */629);e.exports=r},629:
/*!****************************************************************!*\
  !*** ../node_modules/core-js-pure/es/array/virtual/entries.js ***!
  \****************************************************************/
/*! no static exports found */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is not an ECMAScript module */function(e,t,n){n(/*! ../../../modules/es.array.iterator */104);var r=n(/*! ../../../internals/entry-virtual */23);e.exports=r("Array").entries},635:
/*!********************************************!*\
  !*** ./src/pages/StatusPage/StatusPage.js ***!
  \********************************************/
/*! exports provided: default */
/*! all exports used */
/*! ModuleConcatenation bailout: Module is referenced from these modules with unsupported syntax: ./src/Routes.js (referenced with import()) */function(e,t,n){"use strict";n.r(t);var r=n(/*! @babel/runtime-corejs3/helpers/slicedToArray */26),o=n.n(r),a=(n(/*! core-js/modules/es.function.name.js */273),n(/*! @babel/runtime-corejs3/core-js/instance/entries */625)),c=n.n(a),i=n(/*! @babel/runtime-corejs3/core-js/instance/sort */576),l=n.n(i),u=n(/*! @babel/runtime-corejs3/core-js/instance/map */14),s=n.n(u),f=n(/*! @babel/runtime-corejs3/core-js/instance/values */186),p=n.n(f),d=n(/*! react */0),b=n.n(d),y=n(/*! react-fetch-hook */48),m=n.n(y),v=n(/*! ../../contexts/MapContext/MapContext */96),g=n(/*! ../../contexts/ResultsContext/ResultsContext */98),h=n(/*! ../../components/ResultsHeader/ResultsHeader */567),C=n(/*! ../../components/SubmarineCableList/SubmarineCableList */572),x=n(/*! d3-collection */95);t.default=function(e){var t=e.id,n=m()("/api/v3/status/".concat(t,".json")).data,r=Object(d.useContext)(v.a),a=Object(d.useContext)(g.a),i=o()(a,2),u=(i[0],i[1]),f=Object(d.useState)(null),y=o()(f,2);y[0],y[1];Object(d.useEffect)((function(){n&&(u({type:"reset",payload:n}),r.selectSubmarineCables(n),ga&&(ga("send","pageview","/status/".concat(t)),ga("send","event","Status","Select",t)))}),[n]);var w=function(){if("planned"==t){var e,r,o=c()(e=x.b().key((function(e){return e.rfs}))).call(e,l()(r=n.cables).call(r,(function(e,t){return e.rfs>t.rfs?1:-1})));return s()(o).call(o,(function(e){var t;return b.a.createElement(C.a,{key:e.key,submarineCables:l()(t=p()(e)).call(t,(function(e,t){return e.id>t.id?1:-1})),group_by_rfs:!0,rfs:e.key})}))}return b.a.createElement(C.a,{submarineCables:n.cables})};return n?b.a.createElement(b.a.Fragment,null,b.a.createElement(h.a,{name:n.name}),b.a.createElement(w,null)):b.a.createElement(b.a.Fragment,null)}}}]);