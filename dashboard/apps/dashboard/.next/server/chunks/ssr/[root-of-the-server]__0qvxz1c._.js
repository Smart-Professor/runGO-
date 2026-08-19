module.exports=[449719,(a,b,c)=>{b.exports=a.x("assert",()=>require("assert"))},522734,(a,b,c)=>{b.exports=a.x("fs",()=>require("fs"))},918622,(a,b,c)=>{b.exports=a.x("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js",()=>require("next/dist/compiled/next-server/app-page-turbo.runtime.prod.js"))},120635,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/action-async-storage.external.js",()=>require("next/dist/server/app-render/action-async-storage.external.js"))},324725,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/after-task-async-storage.external.js",()=>require("next/dist/server/app-render/after-task-async-storage.external.js"))},434270,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/module-loading/track-module-loading.external.js",()=>require("next/dist/server/app-render/module-loading/track-module-loading.external.js"))},556704,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-async-storage.external.js",()=>require("next/dist/server/app-render/work-async-storage.external.js"))},832319,(a,b,c)=>{b.exports=a.x("next/dist/server/app-render/work-unit-async-storage.external.js",()=>require("next/dist/server/app-render/work-unit-async-storage.external.js"))},559043,(a,b,c)=>{b.exports=a.x("next/dist/server/runtime-reacts.external.js",()=>require("next/dist/server/runtime-reacts.external.js"))},224361,(a,b,c)=>{b.exports=a.x("util",()=>require("util"))},557788,(a,b,c)=>{"use strict";function d(a,b=!0){return a.pathname+a.search+(b?a.hash:"")}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"createHrefFromUrl",{enumerable:!0,get:function(){return d}}),("function"==typeof c.default||"object"==typeof c.default&&null!==c.default)&&void 0===c.default.__esModule&&(Object.defineProperty(c.default,"__esModule",{value:!0}),Object.assign(c.default,c),b.exports=c.default)},497189,(a,b,c)=>{"use strict";var d=Object.defineProperty,e=Object.getOwnPropertyDescriptor,f=Object.getOwnPropertyNames,g=Object.prototype.hasOwnProperty,h={},i={RequestCookies:()=>p,ResponseCookies:()=>q,parseCookie:()=>l,parseSetCookie:()=>m,stringifyCookie:()=>k};for(var j in i)d(h,j,{get:i[j],enumerable:!0});function k(a){var b;let c=["path"in a&&a.path&&`Path=${a.path}`,"expires"in a&&(a.expires||0===a.expires)&&`Expires=${("number"==typeof a.expires?new Date(a.expires):a.expires).toUTCString()}`,"maxAge"in a&&"number"==typeof a.maxAge&&`Max-Age=${a.maxAge}`,"domain"in a&&a.domain&&`Domain=${a.domain}`,"secure"in a&&a.secure&&"Secure","httpOnly"in a&&a.httpOnly&&"HttpOnly","sameSite"in a&&a.sameSite&&`SameSite=${a.sameSite}`,"partitioned"in a&&a.partitioned&&"Partitioned","priority"in a&&a.priority&&`Priority=${a.priority}`].filter(Boolean),d=`${a.name}=${encodeURIComponent(null!=(b=a.value)?b:"")}`;return 0===c.length?d:`${d}; ${c.join("; ")}`}function l(a){let b=new Map;for(let c of a.split(/; */)){if(!c)continue;let a=c.indexOf("=");if(-1===a){b.set(c,"true");continue}let[d,e]=[c.slice(0,a),c.slice(a+1)];try{b.set(d,decodeURIComponent(null!=e?e:"true"))}catch{}}return b}function m(a){if(!a)return;let[[b,c],...d]=l(a),{domain:e,expires:f,httponly:g,maxage:h,path:i,samesite:j,secure:k,partitioned:m,priority:p}=Object.fromEntries(d.map(([a,b])=>[a.toLowerCase().replace(/-/g,""),b]));{var q,r,s={name:b,value:decodeURIComponent(c),domain:e,...f&&{expires:new Date(f)},...g&&{httpOnly:!0},..."string"==typeof h&&{maxAge:Number(h)},path:i,...j&&{sameSite:n.includes(q=(q=j).toLowerCase())?q:void 0},...k&&{secure:!0},...p&&{priority:o.includes(r=(r=p).toLowerCase())?r:void 0},...m&&{partitioned:!0}};let a={};for(let b in s)s[b]&&(a[b]=s[b]);return a}}b.exports=((a,b,c)=>{if(b&&"object"==typeof b||"function"==typeof b)for(let h of f(b))g.call(a,h)||void 0===h||d(a,h,{get:()=>b[h],enumerable:!(c=e(b,h))||c.enumerable});return a})(d({},"__esModule",{value:!0}),h);var n=["strict","lax","none"],o=["low","medium","high"],p=class{constructor(a){this._parsed=new Map,this._headers=a;const b=a.get("cookie");if(b)for(const[a,c]of l(b))this._parsed.set(a,{name:a,value:c})}[Symbol.iterator](){return this._parsed[Symbol.iterator]()}get size(){return this._parsed.size}get(...a){let b="string"==typeof a[0]?a[0]:a[0].name;return this._parsed.get(b)}getAll(...a){var b;let c=Array.from(this._parsed);if(!a.length)return c.map(([a,b])=>b);let d="string"==typeof a[0]?a[0]:null==(b=a[0])?void 0:b.name;return c.filter(([a])=>a===d).map(([a,b])=>b)}has(a){return this._parsed.has(a)}set(...a){let[b,c]=1===a.length?[a[0].name,a[0].value]:a,d=this._parsed;return d.set(b,{name:b,value:c}),this._headers.set("cookie",Array.from(d).map(([a,b])=>k(b)).join("; ")),this}delete(a){let b=this._parsed,c=Array.isArray(a)?a.map(a=>b.delete(a)):b.delete(a);return this._headers.set("cookie",Array.from(b).map(([a,b])=>k(b)).join("; ")),c}clear(){return this.delete(Array.from(this._parsed.keys())),this}[Symbol.for("edge-runtime.inspect.custom")](){return`RequestCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(a=>`${a.name}=${encodeURIComponent(a.value)}`).join("; ")}},q=class{constructor(a){var b,c,d;this._parsed=new Map,this._headers=a;const e=null!=(d=null!=(c=null==(b=a.getSetCookie)?void 0:b.call(a))?c:a.get("set-cookie"))?d:[];for(const a of Array.isArray(e)?e:function(a){if(!a)return[];var b,c,d,e,f,g=[],h=0;function i(){for(;h<a.length&&/\s/.test(a.charAt(h));)h+=1;return h<a.length}for(;h<a.length;){for(b=h,f=!1;i();)if(","===(c=a.charAt(h))){for(d=h,h+=1,i(),e=h;h<a.length&&"="!==(c=a.charAt(h))&&";"!==c&&","!==c;)h+=1;h<a.length&&"="===a.charAt(h)?(f=!0,h=e,g.push(a.substring(b,d)),b=h):h=d+1}else h+=1;(!f||h>=a.length)&&g.push(a.substring(b,a.length))}return g}(e)){const b=m(a);b&&this._parsed.set(b.name,b)}}get(...a){let b="string"==typeof a[0]?a[0]:a[0].name;return this._parsed.get(b)}getAll(...a){var b;let c=Array.from(this._parsed.values());if(!a.length)return c;let d="string"==typeof a[0]?a[0]:null==(b=a[0])?void 0:b.name;return c.filter(a=>a.name===d)}has(a){return this._parsed.has(a)}set(...a){let[b,c,d]=1===a.length?[a[0].name,a[0].value,a[0]]:a,e=this._parsed;return e.set(b,function(a={name:"",value:""}){return"number"==typeof a.expires&&(a.expires=new Date(a.expires)),a.maxAge&&(a.expires=new Date(Date.now()+1e3*a.maxAge)),(null===a.path||void 0===a.path)&&(a.path="/"),a}({name:b,value:c,...d})),function(a,b){for(let[,c]of(b.delete("set-cookie"),a)){let a=k(c);b.append("set-cookie",a)}}(e,this._headers),this}delete(...a){let[b,c]="string"==typeof a[0]?[a[0]]:[a[0].name,a[0]];return this.set({...c,name:b,value:"",expires:new Date(0)})}[Symbol.for("edge-runtime.inspect.custom")](){return`ResponseCookies ${JSON.stringify(Object.fromEntries(this._parsed))}`}toString(){return[...this._parsed.values()].map(k).join("; ")}}},670419,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"trackDynamicImport",{enumerable:!0,get:function(){return g}});let d=a.r(532491),e=a.r(359184),f=a.r(434270);function g(a){if(!(0,e.isThenable)(a))throw Object.defineProperty(new d.InvariantError("`trackDynamicImport` should always receive a promise. Something went wrong in the dynamic imports transform."),"__NEXT_ERROR_CODE",{value:"E677",enumerable:!1,configurable:!0});return(0,f.trackPendingImport)(a),a}},892730,(a,b,c)=>{"use strict";Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"trackDynamicImport",{enumerable:!0,get:function(){return d.trackDynamicImport}});let d=a.r(670419)},487840,(a,b,c)=>{"use strict";b.exports=a.r(918622)},509372,(a,b,c)=>{"use strict";b.exports=a.r(487840).vendored.contexts.AppRouterContext},490444,(a,b,c)=>{"use strict";b.exports=a.r(487840).vendored.contexts.HooksClientContext},19e4,(a,b,c)=>{"use strict";b.exports=a.r(487840).vendored.contexts.ServerInsertedHtml},484006,(a,b,c)=>{"use strict";b.exports=a.r(487840).vendored["react-ssr"].ReactDOM},340139,(a,b,c)=>{"use strict";b.exports=a.r(487840).vendored["react-ssr"].ReactJsxRuntime},705529,(a,b,c)=>{"use strict";b.exports=a.r(487840).vendored["react-ssr"].ReactServerDOMTurbopackClient},643599,(a,b,c)=>{"use strict";b.exports=a.r(487840).vendored["react-ssr"].React},359184,(a,b,c)=>{"use strict";function d(a){return null!==a&&"object"==typeof a&&"then"in a&&"function"==typeof a.then}Object.defineProperty(c,"__esModule",{value:!0}),Object.defineProperty(c,"isThenable",{enumerable:!0,get:function(){return d}})},624597,a=>{"use strict";let b=Symbol.for("StackAuth--DO-NOT-USE-OR-YOU-WILL-BE-FIRED--StackAppInternals");a.s(["hexclaveAppInternalsSymbol",0,b])},623858,338451,a=>{"use strict";a.s(["CLICKMAP_OVERLAY_RESUME_STORAGE_KEY",0,"hexclave-clickmap-resume","CLICKMAP_OVERLAY_TOKEN_STORAGE_KEY",0,"hexclave-clickmap-token","CLICKMAP_OVERLAY_TOKEN_UPDATED_EVENT",0,"hexclave:clickmap-token-updated"],623858);let b=["id","data-testid","data-test-id","data-hexclave-id","name","type","role","aria-label","placeholder","title"];function c(a){return a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function d(a){return a.replace(/\\/g,"\\\\").replace(/\./g,"\\.").replace(/:/g,"\\:")}function e(a,b){if("nth-child"===a){let a=Number.parseInt(b,10);return Number.isFinite(a)?{nthChild:a}:{}}if("nth-of-type"===a){let a=Number.parseInt(b,10);return Number.isFinite(a)?{nthOfType:a}:{}}return"text"===a?{text:b}:"href"===a?{href:b,attrKey:a,attrValue:b}:a.startsWith("attr__")?{attrKey:a.slice(6),attrValue:b}:{attrKey:a,attrValue:b}}function f(a){let b=a.trim();if(""===b)return null;let c=b.length,d=!1;for(let a=0;a<b.length;a++){let e=b[a];if("\\"===e&&a+1<b.length){a+=1;continue}if('"'===e){d=!d;continue}if(":"===e&&!d){c=a;break}}let f=b.slice(0,c),g=b.slice(c),h=function(a){let b=[],c="";for(let d=0;d<a.length;d++){let e=a[d];if("\\"===e&&d+1<a.length){c+=a[d+1],d+=1;continue}if("."===e){b.push(c),c="";continue}c+=e}return b.push(c),b}(f),i=h[0].trim().toLowerCase();if(""===i)return null;let j=h.slice(1).map(a=>a.trim()).filter(a=>""!==a),k={},l=null,m=null,n=null,o=null,p=0;for(;p<g.length;){if(":"!==g[p]){p+=1;continue}let a=p+=1;for(;a<g.length&&"="!==g[a]&&":"!==g[a];)a+=1;let b=g.slice(p,a).trim();if(a>=g.length||"="!==g[a]){p=a;continue}let c=a+1;if('"'!==g[c]){let a=c;for(;a<g.length&&":"!==g[a];)a+=1;let d=e(b,g.slice(c,a));null!=d.nthChild&&(l=d.nthChild),null!=d.nthOfType&&(m=d.nthOfType),null!=d.text&&(n=d.text),null!=d.href&&(o=d.href),null!=d.attrKey&&(k[d.attrKey]=d.attrValue??""),p=a;continue}let d=c+=1,f="";for(;d<g.length;){let a=g[d];if("\\"===a&&d+1<g.length){let b=g[d+1];if('"'===b||"\\"===b){f+=b,d+=2;continue}f+=a,d+=1;continue}if('"'===a)break;f+=a,d+=1}let h=e(b,f);null!=h.nthChild&&(l=h.nthChild),null!=h.nthOfType&&(m=h.nthOfType),null!=h.text&&(n=h.text),null!=h.href&&(o=h.href),null!=h.attrKey&&(k[h.attrKey]=h.attrValue??""),p=d+1}return{tag:i,classes:j,attrs:k,text:n,nthChild:l,nthOfType:m,href:o}}a.s(["ELEMENTS_CHAIN_MAX_DEPTH",0,8,"buildElementsChain",0,function(a){let e=[],f=a,g=0;for(;null!=f&&g<8&&f!==document.documentElement;)e.push(function(a){let e,f=[];f.push(a.tagName.toLowerCase());let g="string"!=typeof(e=a.className)||""===e.trim()?[]:e.trim().split(/\s+/).filter(Boolean).slice(0,4);g.length>0&&f.push(`.${g.map(d).join(".")}`);let h=a.textContent.trim().replace(/\s+/g," ").slice(0,80),i=function(a){let b=a.parentElement;if(null==b)return null;let c=Array.prototype.indexOf.call(b.children,a);return c>=0?c+1:null}(a),j=function(a){let b=a.parentElement;if(null==b)return null;let c=a.tagName,d=Array.from(b.children).filter(a=>a.tagName===c);if(d.length<=1)return null;let e=d.indexOf(a);return e>=0?e+1:null}(a),k=[];for(let d of(null!=i&&k.push(`nth-child="${i}"`),null!=j&&k.push(`nth-of-type="${j}"`),""!==h&&k.push(`text="${c(h)}"`),b)){let b=a.getAttribute(d);null!=b&&""!==b&&k.push(`attr__${d}="${c(b.slice(0,200))}"`)}if("A"===a.tagName){let b=a.getAttribute("href");null!=b&&""!==b&&k.push(`href="${c(b.slice(0,200))}"`)}return k.length>0&&f.push(`:${k.join(":")}`),f.join("")}(f)),f=f.parentElement,g+=1;return e.join(";")},"parseElementsChain",0,function(a){let b=[],c="",d=!1;for(let e=0;e<a.length;e++){let f=a[e];if("\\"===f&&e+1<a.length){c+=f+a[e+1],e+=1;continue}if('"'===f){d=!d,c+=f;continue}if(";"===f&&!d){b.push(c),c="";continue}c+=f}return c.length>0&&b.push(c),b.map(f).filter(a=>null!=a)}],338451)},666778,898536,79768,a=>{"use strict";a.s(["CLICKMAP_ROOT_ID",0,"__hexclave-clickmap-root","DEV_TOOL_ROOT_ID",0,"__hexclave-dev-tool-root"],666778),a.s(["canMountIntoDom",0,function(){return!1},"getGlobalUiInstance",0,function(a){return null},"h",0,function(a,b,...c){let d=document.createElement(a);if(b)for(let[a,c]of Object.entries(b))null!=c&&("className"===a?d.className=c:"style"===a&&"object"==typeof c?Object.assign(d.style,c):a.startsWith("on")&&"function"==typeof c?d.addEventListener(a.slice(2).toLowerCase(),c):d.setAttribute(a,String(c)));for(let a of c)null!=a&&d.appendChild("string"==typeof a?document.createTextNode(a):a);return d},"hasAppendChild",0,function(a){return"object"==typeof a&&null!==a&&"function"==typeof Reflect.get(a,"appendChild")},"setGlobalUiInstance",0,function(a,b){},"setHtml",0,function(a,b){a.innerHTML=b}],898536),a.s(["getInPageUiBaseCSS",0,function(a){return`
  ${a} {
    --sdt-bg: #0a0a0b;
    --sdt-bg-elevated: #141416;
    --sdt-bg-hover: #1c1c1f;
    --sdt-bg-active: #232326;
    --sdt-bg-subtle: #111113;
    --sdt-border: #2a2a2e;
    --sdt-border-subtle: #1e1e22;
    --sdt-text: #ececef;
    --sdt-text-secondary: #8b8b93;
    --sdt-text-tertiary: #5c5c66;
    --sdt-accent: #6366f1;
    --sdt-accent-hover: #818cf8;
    --sdt-accent-muted: rgba(99, 102, 241, 0.15);
    --sdt-success: #22c55e;
    --sdt-success-muted: rgba(34, 197, 94, 0.15);
    --sdt-warning: #eab308;
    --sdt-warning-muted: rgba(234, 179, 8, 0.15);
    --sdt-error: #ef4444;
    --sdt-error-muted: rgba(239, 68, 68, 0.15);
    --sdt-info: #3b82f6;
    --sdt-info-muted: rgba(59, 130, 246, 0.15);
    --sdt-overlay-bg: rgba(17, 17, 19, 0.92);
    --sdt-radius: 8px;
    --sdt-radius-sm: 4px;
    --sdt-radius-lg: 12px;
    --sdt-font: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
    --sdt-font-mono: 'SF Mono', SFMono-Regular, ui-monospace, 'DejaVu Sans Mono', Menlo, Consolas, monospace;
    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08);

    all: initial;
    font-family: var(--sdt-font);
    color: var(--sdt-text);
    font-size: 13px;
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    box-sizing: border-box;
  }

  ${a} *, ${a} *::before, ${a} *::after {
    box-sizing: border-box;
  }

  /* Thin, unobtrusive scrollbars for every scroll container */
  ${a} * {
    scrollbar-width: thin;
    scrollbar-color: var(--sdt-border) transparent;
  }

  ${a} *::-webkit-scrollbar {
    width: 6px;
    height: 6px;
  }

  ${a} *::-webkit-scrollbar-track {
    background: transparent;
  }

  ${a} *::-webkit-scrollbar-thumb {
    background: var(--sdt-border);
    border-radius: 3px;
  }

  ${a} *::-webkit-scrollbar-thumb:hover {
    background: var(--sdt-text-tertiary);
  }

  ${a} *::-webkit-scrollbar-corner {
    background: transparent;
  }

  /* --- Light theme: system preference fallback --- */
  @media (prefers-color-scheme: light) {
    ${a} {
      --sdt-bg: #ffffff;
      --sdt-bg-elevated: #f8f8fa;
      --sdt-bg-hover: #f0f0f3;
      --sdt-bg-active: #e8e8ec;
      --sdt-bg-subtle: #fafafa;
      --sdt-border: #e0e0e5;
      --sdt-border-subtle: #eaeaef;
      --sdt-text: #111113;
      --sdt-text-secondary: #6b6b73;
      --sdt-text-tertiary: #9b9ba3;
      --sdt-accent: #6366f1;
      --sdt-accent-hover: #4f46e5;
      --sdt-accent-muted: rgba(99, 102, 241, 0.1);
      --sdt-success: #16a34a;
      --sdt-success-muted: rgba(22, 163, 74, 0.1);
      --sdt-warning: #ca8a04;
      --sdt-warning-muted: rgba(202, 138, 4, 0.1);
      --sdt-error: #dc2626;
      --sdt-error-muted: rgba(220, 38, 38, 0.1);
      --sdt-info: #2563eb;
      --sdt-info-muted: rgba(37, 99, 235, 0.1);
      --sdt-overlay-bg: rgba(255, 255, 255, 0.92);
      --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
      --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06);
    }
  }

  /* --- Stack theme explicit overrides (take priority over system preference) --- */
  html:has(head > [data-stack-theme="light"]) ${a} {
    --sdt-bg: #ffffff;
    --sdt-bg-elevated: #f8f8fa;
    --sdt-bg-hover: #f0f0f3;
    --sdt-bg-active: #e8e8ec;
    --sdt-bg-subtle: #fafafa;
    --sdt-border: #e0e0e5;
    --sdt-border-subtle: #eaeaef;
    --sdt-text: #111113;
    --sdt-text-secondary: #6b6b73;
    --sdt-text-tertiary: #9b9ba3;
    --sdt-accent: #6366f1;
    --sdt-accent-hover: #4f46e5;
    --sdt-accent-muted: rgba(99, 102, 241, 0.1);
    --sdt-success: #16a34a;
    --sdt-success-muted: rgba(22, 163, 74, 0.1);
    --sdt-warning: #ca8a04;
    --sdt-warning-muted: rgba(202, 138, 4, 0.1);
    --sdt-error: #dc2626;
    --sdt-error-muted: rgba(220, 38, 38, 0.1);
    --sdt-info: #2563eb;
    --sdt-info-muted: rgba(37, 99, 235, 0.1);
    --sdt-overlay-bg: rgba(255, 255, 255, 0.92);
    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.06);
    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.08), 0 0 0 1px rgba(0, 0, 0, 0.06);
  }

  html:has(head > [data-stack-theme="dark"]) ${a} {
    --sdt-bg: #0a0a0b;
    --sdt-bg-elevated: #141416;
    --sdt-bg-hover: #1c1c1f;
    --sdt-bg-active: #232326;
    --sdt-bg-subtle: #111113;
    --sdt-border: #2a2a2e;
    --sdt-border-subtle: #1e1e22;
    --sdt-text: #ececef;
    --sdt-text-secondary: #8b8b93;
    --sdt-text-tertiary: #5c5c66;
    --sdt-accent: #6366f1;
    --sdt-accent-hover: #818cf8;
    --sdt-accent-muted: rgba(99, 102, 241, 0.15);
    --sdt-success: #22c55e;
    --sdt-success-muted: rgba(34, 197, 94, 0.15);
    --sdt-warning: #eab308;
    --sdt-warning-muted: rgba(234, 179, 8, 0.15);
    --sdt-error: #ef4444;
    --sdt-error-muted: rgba(239, 68, 68, 0.15);
    --sdt-info: #3b82f6;
    --sdt-info-muted: rgba(59, 130, 246, 0.15);
    --sdt-overlay-bg: rgba(17, 17, 19, 0.92);
    --sdt-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.5), 0 0 0 1px rgba(255, 255, 255, 0.05);
    --sdt-trigger-shadow: 0 4px 12px rgba(0, 0, 0, 0.4), 0 0 0 1px rgba(255, 255, 255, 0.08);
  }
`}],79768)},282753,a=>{"use strict";a.s(["cssEscapeIdent",0,function(a){if("u">typeof CSS&&"function"==typeof CSS.escape)return CSS.escape(a);let b="";for(let c=0;c<a.length;c+=1){let d=a.charAt(c),e=a.charCodeAt(c);0===e?b+="�":e>=1&&e<=31||127===e||0===c&&e>=48&&e<=57||1===c&&e>=48&&e<=57&&45===a.charCodeAt(0)?b+=`\\${e.toString(16)} `:0===c&&45===e&&1===a.length?b+="\\-":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?b+=d:b+=`\\${d}`}return b},"hasClickableParent",0,function a(b){let c=b.parentElement;return!!c&&(!!c.dataset.n2Clickable||a(b.parentElement))}])},954886,a=>{"use strict";var b=a.i(767854),c=a.i(964569);function d(){return!1}let e={NEXT_PUBLIC_STACK_API_URL:["STACK_BASE_URL","NEXT_PUBLIC_STACK_URL"]};function f(a,b,c,d){if(c&&d&&c!==d)throw Error(`Environment variables ${a} and ${b} are both set to different values. Remove one of them or set them to the same value.`);return c||d||void 0}function g(a){if(a.includes("STACK_")){let b=a.replace("STACK_","HEXCLAVE_");return f(b,a,process.env[b],process.env[a])}if(a.includes("HEXCLAVE_")){let b=a.replace("HEXCLAVE_","STACK_");return f(a,b,process.env[a],process.env[b])}return process.env[a]}function h(a,f){if(d(),"NEXT_RUNTIME"===a)throw Error(c.deindent`
      Can't use getEnvVariable to access the NEXT_RUNTIME environment variable because it's compiled into the client bundle.
    
      Use getNextRuntime() instead.
    `);for(let[c,d]of Object.entries(e))d?.includes(a)&&(0,b.throwErr)(`Environment variable ${a} has been renamed to ${c}. Please update your configuration to use the new name.`);let h=g(a),i=e[a];if(!h&&null!=i){for(let a of i)if(h=g(a))break}return h||(void 0!==f?h=f:(0,b.throwErr)(`Missing environment variable: ${a}`)),h}a.s(["getEnvVariable",0,h,"getNodeEnvironment",0,function(){return h("NODE_ENV","")},"getProcessEnv",0,function(a){if("u">typeof process&&void 0!==process.env)return g(a)},"isBrowserLike",0,d])},704814,a=>{"use strict";var b=a.i(643599),c=a.i(591888);let d=new WeakMap;function e(a){if("use"in b.default)return b.default.use(a);if(d.has(a)){let b=d.get(a);if("pending"===b.status)throw a;if("ok"===b.status)return b.data;throw b.error}throw d.set(a,{status:"pending",progress:void 0}),(0,c.runAsynchronously)(async()=>{try{let b=await a;d.set(a,{status:"ok",data:b})}catch(b){d.set(a,{status:"error",error:b})}}),a}function f(a){return 19>parseInt(b.default.version.split(".")[0])?b.default.forwardRef(a):b=>a(b,b.ref)}a.s(["componentWrapper",0,function(a,b){let c=f(b);return c.displayName=a,c},"forwardRefIfNeeded",0,f,"getNodeText",0,function a(c){if(["number","string"].includes(typeof c))return`${c}`;if(!c)return"";if(Array.isArray(c))return c.map(a).join("");if(b.default.isValidElement(c))return a(c.props.children);throw Error(`Unknown node type: ${typeof c}`)},"mapRefState",0,function(a,b,c){let d=null;return{get current(){let c=a.current;return(null===d||c!==d[0])&&(d=[c,b(c)]),d[1]},set(b){let d="function"==typeof b?b(this.current):b;a.set(c(a.current,d))}}},"suspend",0,function(){throw e((0,c.neverResolve)()),Error("Somehow a Promise that never resolves was resolved?")},"use",0,e,"useQueryState",0,function(a,c){let d=()=>new URLSearchParams(window.location.search).get(a)??c??null,[e,f]=b.default.useState(d);return b.default.useEffect(()=>{let a=()=>f(d());return window.addEventListener("popstate",a),()=>window.removeEventListener("popstate",a)},[]),[e,b=>{let c=new URLSearchParams(window.location.search);null!==b?c.set(a,b):c.delete(a);let d=c.toString()?`${window.location.pathname}?${c.toString()}`:window.location.pathname;window.history.pushState(null,"",d),f(b)}]},"useRefState",0,function(a){let c=b.default.useRef(null);null===c.current&&(c.current={v:"function"==typeof a?a():a});let d=c.current.v,[,e]=b.default.useState(()=>d),f=b.default.useRef(d),g=b.default.useCallback(a=>{let b="function"==typeof a?a(f.current):a;f.current=b,e(b)},[]);return b.default.useMemo(()=>({get current(){return f.current},set:g}),[g])}])}];

//# sourceMappingURL=%5Broot-of-the-server%5D__0qvxz1c._.js.map