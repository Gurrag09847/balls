(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[931],{8785:function(e,t,r){Promise.resolve().then(r.bind(r,6663))},4492:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},l=n.useState,a=n.useEffect,o=n.useLayoutEffect,i=n.useDebugValue;function u(e){var t=e.getSnapshot;e=e.value;try{var r=t();return!s(e,r)}catch(e){return!0}}var c="undefined"==typeof window||void 0===window.document||void 0===window.document.createElement?function(e,t){return t()}:function(e,t){var r=t(),n=l({inst:{value:r,getSnapshot:t}}),s=n[0].inst,c=n[1];return o(function(){s.value=r,s.getSnapshot=t,u(s)&&c({inst:s})},[e,r,t]),a(function(){return u(s)&&c({inst:s}),e(function(){u(s)&&c({inst:s})})},[e]),i(r),r};t.useSyncExternalStore=void 0!==n.useSyncExternalStore?n.useSyncExternalStore:c},5107:function(e,t,r){"use strict";/**
 * @license React
 * use-sync-external-store-shim/with-selector.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var n=r(2265),s=r(554),l="function"==typeof Object.is?Object.is:function(e,t){return e===t&&(0!==e||1/e==1/t)||e!=e&&t!=t},a=s.useSyncExternalStore,o=n.useRef,i=n.useEffect,u=n.useMemo,c=n.useDebugValue;t.useSyncExternalStoreWithSelector=function(e,t,r,n,s){var d=o(null);if(null===d.current){var f={hasValue:!1,value:null};d.current=f}else f=d.current;var g=a(e,(d=u(function(){function e(e){if(!i){if(i=!0,a=e,e=n(e),void 0!==s&&f.hasValue){var t=f.value;if(s(t,e))return o=t}return o=e}if(t=o,l(a,e))return t;var r=n(e);return void 0!==s&&s(t,r)?t:(a=e,o=r)}var a,o,i=!1,u=void 0===r?null:r;return[function(){return e(t())},null===u?void 0:function(){return e(u())}]},[t,r,n,s]))[0],d[1]);return i(function(){f.hasValue=!0,f.value=g},[g]),c(g),g}},554:function(e,t,r){"use strict";e.exports=r(4492)},5006:function(e,t,r){"use strict";e.exports=r(5107)},6663:function(e,t,r){"use strict";let n;r.d(t,{default:function(){return w}});var s=r(7437),l=r(2265),a=r(9354);let o=l.forwardRef((e,t)=>{let{className:r,type:n,...l}=e;return(0,s.jsx)("input",{type:n,className:(0,a.cn)("flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50",r),ref:t,...l})});o.displayName="Input";/**
 * @license lucide-react v0.379.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */let i=(0,r(8030).Z)("Search",[["circle",{cx:"11",cy:"11",r:"8",key:"4ej97u"}],["path",{d:"m21 21-4.3-4.3",key:"1qie3q"}]]);var u=e=>{let{searchValue:t,setSearchValue:r}=e;return(0,s.jsx)("div",{className:"w-full max-w-xl",children:(0,s.jsxs)("div",{className:"w-full relative",children:[(0,s.jsx)(o,{className:"w-full",placeholder:"Search for blog a title or tags...",value:t,onChange:e=>r(e.target.value)}),(0,s.jsx)("div",{className:"absolute bg-background border border-l-0 h-full w-10 flex justify-center items-center rounded-r-md  top-1/2 -translate-y-1/2 right-0 ",children:(0,s.jsx)(i,{className:"w-4 h-4 "})})]})})};let c=e=>{let t;let r=new Set,n=(e,n)=>{let s="function"==typeof e?e(t):e;if(!Object.is(s,t)){let e=t;t=(null!=n?n:"object"!=typeof s||null===s)?s:Object.assign({},t,s),r.forEach(r=>r(t,e))}},s=()=>t,l={setState:n,getState:s,getInitialState:()=>a,subscribe:e=>(r.add(e),()=>r.delete(e)),destroy:()=>{console.warn("[DEPRECATED] The `destroy` method will be unsupported in a future version. Instead use unsubscribe function returned by subscribe. Everything will be garbage-collected if store is garbage-collected."),r.clear()}},a=t=e(n,s,l);return l},d=e=>e?c(e):c;var f=r(5006);let{useDebugValue:g}=l,{useSyncExternalStoreWithSelector:p}=f,b=!1,v=e=>e,h=e=>{"function"!=typeof e&&console.warn("[DEPRECATED] Passing a vanilla store will be unsupported in a future version. Instead use `import { useStore } from 'zustand'`.");let t="function"==typeof e?d(e):e,r=(e,r)=>(function(e,t=v,r){r&&!b&&(console.warn("[DEPRECATED] Use `createWithEqualityFn` instead of `create` or use `useStoreWithEqualityFn` instead of `useStore`. They can be imported from 'zustand/traditional'. https://github.com/pmndrs/zustand/discussions/1937"),b=!0);let n=p(e.subscribe,e.getState,e.getServerState||e.getInitialState,t,r);return g(n),n})(t,e,r);return Object.assign(r,t),r},m=(n?h(n):h)(e=>({value:"",setValue:t=>e({value:t})}));var x=e=>{let{blog:t}=e,r=new Date(t.created),{setValue:n}=m();return(0,s.jsxs)("a",{href:"/blog/".concat(t.slug),className:"w-full h-full group blog-card",children:[(0,s.jsx)("div",{className:"h-[200px] w-full overflow-hidden rounded-lg aspect-video",children:(0,s.jsx)("img",{src:t.coverImage,alt:"image of ".concat(t.title),className:"h-[200px] w-full rounded-lg aspect-video object-cover group-hover:scale-105 transition-transform"})}),(0,s.jsxs)("div",{className:"flex flex-col w-full mt-4",children:[(0,s.jsx)("div",{className:"flex gap-1",children:t.tags.length>0&&t.tags.slice(0,3).map((e,r)=>(0,s.jsxs)("span",{className:"uppercase text-purple-600 hover:text-purple-500 dark:text-purple-400 dark:hover:text-purple-300 transition-colors font-semibold text-xs sm:text-sm",onClick:t=>{t.preventDefault(),t.stopPropagation(),n(e)},children:[e,null!==t.tags[1]&&r+1!==t.tags.length?",":""]},e))}),(0,s.jsx)("a",{className:"inline-block my-1",href:"/blogs/js-frameworks-comparison",children:(0,s.jsx)("h2",{className:"font-semibold capitalize  text-base sm:text-lg",children:(0,s.jsx)("span",{className:"bg-gradient-to-r from-purple-500 to-purple-400  bg-[length:0px_6px] group-hover:bg-[length:100%_6px] bg-left-bottom bg-no-repeat transition-[background-size] duration-500 ",children:t.title})})}),(0,s.jsx)("span",{className:"text-sm text-gray-500 font-semibold",children:r.toDateString()})]})]})},w=e=>{let{blogs:t}=e,{value:r,setValue:n}=m();return(0,s.jsxs)("div",{children:[(0,s.jsx)("div",{className:"flex justify-center pb-6",children:(0,s.jsx)(u,{searchValue:r,setSearchValue:n})}),(0,s.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4",children:t.filter(e=>e.title.toLowerCase().includes(r.toLowerCase())||e.tags.some(e=>e.toLowerCase().includes(r.toLowerCase()))).map(e=>(0,s.jsx)(x,{blog:e},e.slug))})]})}},9354:function(e,t,r){"use strict";r.d(t,{cn:function(){return l}});var n=r(4839),s=r(6164);function l(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return(0,s.m6)((0,n.W)(t))}}},function(e){e.O(0,[502,971,23,744],function(){return e(e.s=8785)}),_N_E=e.O()}]);