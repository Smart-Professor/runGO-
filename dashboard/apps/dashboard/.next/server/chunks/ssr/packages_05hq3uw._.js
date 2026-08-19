module.exports=[374636,a=>{"use strict";a.s(["getInPageUiBaseCSS",0,function(a){return`
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
`}])},648812,a=>{"use strict";let b=Symbol.for("StackAuth--DO-NOT-USE-OR-YOU-WILL-BE-FIRED--StackAppInternals");a.s(["hexclaveAppInternalsSymbol",0,b])},494537,a=>{"use strict";a.s(["ALL_APPS",0,{authentication:{displayName:"Authentication",subtitle:"User sign-in and account management",tags:["auth","security"],stage:"stable",softRequirements:["emails"]},"fraud-protection":{displayName:"Fraud Protection",subtitle:"Protect your project from fraud and abuse",tags:["auth","security"],stage:"stable",softRequirements:["authentication"],parentAppId:"authentication"},onboarding:{displayName:"Onboarding",subtitle:"Configure user onboarding requirements",tags:["auth"],stage:"alpha",softRequirements:["authentication"]},teams:{displayName:"Teams",subtitle:"Team collaboration and management",tags:["auth","security"],stage:"stable",softRequirements:["authentication"]},rbac:{displayName:"RBAC",subtitle:"Role-based access control and permissions",tags:["auth","security"],stage:"stable",softRequirements:["authentication"]},"api-keys":{displayName:"API Keys",subtitle:"API key generation and management",tags:["auth","security","developers"],stage:"stable",softRequirements:["authentication"]},payments:{displayName:"Payments",subtitle:"Payment processing and subscription management",tags:["operations","gtm"],stage:"stable",softRequirements:["authentication"]},emails:{displayName:"Emails",subtitle:"Email template configuration and management",tags:["comms"],stage:"stable",softRequirements:[]},support:{displayName:"Support",subtitle:"Customer conversations, team replies, and internal notes",tags:["comms","operations"],stage:"alpha",softRequirements:["authentication","emails"]},"email-api":{displayName:"Email API",subtitle:"Programmatic email sending and delivery",tags:["comms","developers","expert"],stage:"alpha",softRequirements:["emails"]},"data-vault":{displayName:"Data Vault",subtitle:"Secure storage for sensitive user data",tags:["security","storage"],stage:"beta",softRequirements:["authentication"]},webhooks:{displayName:"Webhooks",subtitle:"Real-time event notifications and integrations",tags:["developers"],stage:"stable",softRequirements:[]},"tv-mode":{displayName:"TV mode",subtitle:"Dashboard display for large screens",tags:["various"],stage:"alpha",softRequirements:[]},"launch-checklist":{displayName:"Launch Checklist",subtitle:"Pre-launch verification and readiness checks",tags:["various"],stage:"stable",softRequirements:[]},catalyst:{displayName:"Catalyst",subtitle:"Project scaffolding and rapid development",tags:["various"],stage:"alpha",softRequirements:[]},neon:{displayName:"Neon Integration",subtitle:"Serverless Postgres database integration",tags:["integration","storage"],stage:"alpha",softRequirements:[]},convex:{displayName:"Convex Integration",subtitle:"Real-time backend platform integration",tags:["integration","storage"],stage:"alpha",softRequirements:[]},vercel:{displayName:"Vercel Integration",subtitle:"Deploy your Hexclave project to Vercel",tags:["integration","developers"],stage:"stable",softRequirements:[]},"tanstack-start":{displayName:"TanStack Start",subtitle:"Use Hexclave in TanStack Start apps",tags:["integration","developers"],stage:"alpha",softRequirements:[]},analytics:{displayName:"Analytics",subtitle:"View and explore analytics data",tags:["developers","operations"],stage:"stable",softRequirements:[]},clickmaps:{displayName:"Clickmaps",subtitle:"Visualize where users click across your app",tags:["developers","operations"],stage:"stable",softRequirements:["analytics"],parentAppId:"analytics"},"session-replays":{displayName:"Session Replays",subtitle:"Watch real user sessions to understand how people use your app",tags:["developers","operations"],stage:"stable",softRequirements:["analytics"],parentAppId:"analytics"},gtm:{displayName:"GTM",subtitle:"Internal go-to-market workspace",tags:["gtm","operations"],stage:"alpha",softRequirements:["analytics"]},"cli-auth":{displayName:"CLI Auth",subtitle:"Monitor CLI authentication sessions and active tokens",tags:["auth","developers"],stage:"alpha",softRequirements:["authentication"]},compliance:{displayName:"Compliance Center",subtitle:"Review access, denials, and compliance posture",tags:["auth","security","operations"],stage:"alpha",softRequirements:["authentication","analytics"]},deploy:{displayName:"Deploy",subtitle:"Configure and connect the services that run your app",tags:["developers","operations"],stage:"alpha",softRequirements:[]},"workflows-alpha":{displayName:"Workflows",subtitle:"Durable, code-defined automations that react to events in your project",tags:["automation","developers"],stage:"alpha",softRequirements:[]}}])},334676,328455,938660,a=>{"use strict";a.s(["CLICKMAP_OVERLAY_RESUME_STORAGE_KEY",0,"hexclave-clickmap-resume","CLICKMAP_OVERLAY_TOKEN_STORAGE_KEY",0,"hexclave-clickmap-token","CLICKMAP_OVERLAY_TOKEN_UPDATED_EVENT",0,"hexclave:clickmap-token-updated"],334676),a.s(["cssEscapeIdent",0,function(a){if("u">typeof CSS&&"function"==typeof CSS.escape)return CSS.escape(a);let b="";for(let c=0;c<a.length;c+=1){let d=a.charAt(c),e=a.charCodeAt(c);0===e?b+="�":e>=1&&e<=31||127===e||0===c&&e>=48&&e<=57||1===c&&e>=48&&e<=57&&45===a.charCodeAt(0)?b+=`\\${e.toString(16)} `:0===c&&45===e&&1===a.length?b+="\\-":e>=128||45===e||95===e||e>=48&&e<=57||e>=65&&e<=90||e>=97&&e<=122?b+=d:b+=`\\${d}`}return b}],328455);let b=["id","data-testid","data-test-id","data-hexclave-id","name","type","role","aria-label","placeholder","title"];function c(a){return a.replace(/\\/g,"\\\\").replace(/"/g,'\\"')}function d(a){return a.replace(/\\/g,"\\\\").replace(/\./g,"\\.").replace(/:/g,"\\:")}function e(a,b){if("nth-child"===a){let a=Number.parseInt(b,10);return Number.isFinite(a)?{nthChild:a}:{}}if("nth-of-type"===a){let a=Number.parseInt(b,10);return Number.isFinite(a)?{nthOfType:a}:{}}return"text"===a?{text:b}:"href"===a?{href:b,attrKey:a,attrValue:b}:a.startsWith("attr__")?{attrKey:a.slice(6),attrValue:b}:{attrKey:a,attrValue:b}}function f(a){let b=a.trim();if(""===b)return null;let c=b.length,d=!1;for(let a=0;a<b.length;a++){let e=b[a];if("\\"===e&&a+1<b.length){a+=1;continue}if('"'===e){d=!d;continue}if(":"===e&&!d){c=a;break}}let f=b.slice(0,c),g=b.slice(c),h=function(a){let b=[],c="";for(let d=0;d<a.length;d++){let e=a[d];if("\\"===e&&d+1<a.length){c+=a[d+1],d+=1;continue}if("."===e){b.push(c),c="";continue}c+=e}return b.push(c),b}(f),i=h[0].trim().toLowerCase();if(""===i)return null;let j=h.slice(1).map(a=>a.trim()).filter(a=>""!==a),k={},l=null,m=null,n=null,o=null,p=0;for(;p<g.length;){if(":"!==g[p]){p+=1;continue}let a=p+=1;for(;a<g.length&&"="!==g[a]&&":"!==g[a];)a+=1;let b=g.slice(p,a).trim();if(a>=g.length||"="!==g[a]){p=a;continue}let c=a+1;if('"'!==g[c]){let a=c;for(;a<g.length&&":"!==g[a];)a+=1;let d=e(b,g.slice(c,a));null!=d.nthChild&&(l=d.nthChild),null!=d.nthOfType&&(m=d.nthOfType),null!=d.text&&(n=d.text),null!=d.href&&(o=d.href),null!=d.attrKey&&(k[d.attrKey]=d.attrValue??""),p=a;continue}let d=c+=1,f="";for(;d<g.length;){let a=g[d];if("\\"===a&&d+1<g.length){let b=g[d+1];if('"'===b||"\\"===b){f+=b,d+=2;continue}f+=a,d+=1;continue}if('"'===a)break;f+=a,d+=1}let h=e(b,f);null!=h.nthChild&&(l=h.nthChild),null!=h.nthOfType&&(m=h.nthOfType),null!=h.text&&(n=h.text),null!=h.href&&(o=h.href),null!=h.attrKey&&(k[h.attrKey]=h.attrValue??""),p=d+1}return{tag:i,classes:j,attrs:k,text:n,nthChild:l,nthOfType:m,href:o}}a.s(["ELEMENTS_CHAIN_MAX_DEPTH",0,8,"buildElementsChain",0,function(a){let e=[],f=a,g=0;for(;null!=f&&g<8&&f!==document.documentElement;)e.push(function(a){let e,f=[];f.push(a.tagName.toLowerCase());let g="string"!=typeof(e=a.className)||""===e.trim()?[]:e.trim().split(/\s+/).filter(Boolean).slice(0,4);g.length>0&&f.push(`.${g.map(d).join(".")}`);let h=a.textContent.trim().replace(/\s+/g," ").slice(0,80),i=function(a){let b=a.parentElement;if(null==b)return null;let c=Array.prototype.indexOf.call(b.children,a);return c>=0?c+1:null}(a),j=function(a){let b=a.parentElement;if(null==b)return null;let c=a.tagName,d=Array.from(b.children).filter(a=>a.tagName===c);if(d.length<=1)return null;let e=d.indexOf(a);return e>=0?e+1:null}(a),k=[];for(let d of(null!=i&&k.push(`nth-child="${i}"`),null!=j&&k.push(`nth-of-type="${j}"`),""!==h&&k.push(`text="${c(h)}"`),b)){let b=a.getAttribute(d);null!=b&&""!==b&&k.push(`attr__${d}="${c(b.slice(0,200))}"`)}if("A"===a.tagName){let b=a.getAttribute("href");null!=b&&""!==b&&k.push(`href="${c(b.slice(0,200))}"`)}return k.length>0&&f.push(`:${k.join(":")}`),f.join("")}(f)),f=f.parentElement,g+=1;return e.join(";")},"parseElementsChain",0,function(a){let b=[],c="",d=!1;for(let e=0;e<a.length;e++){let f=a[e];if("\\"===f&&e+1<a.length){c+=f+a[e+1],e+=1;continue}if('"'===f){d=!d,c+=f;continue}if(";"===f&&!d){b.push(c),c="";continue}c+=f}return c.length>0&&b.push(c),b.map(f).filter(a=>null!=a)}],938660)},46508,317683,a=>{"use strict";a.s(["CLICKMAP_ROOT_ID",0,"__hexclave-clickmap-root","DEV_TOOL_ROOT_ID",0,"__hexclave-dev-tool-root"],46508),a.s(["canMountIntoDom",0,function(){return!1},"getGlobalUiInstance",0,function(a){return null},"h",0,function(a,b,...c){let d=document.createElement(a);if(b)for(let[a,c]of Object.entries(b))null!=c&&("className"===a?d.className=c:"style"===a&&"object"==typeof c?Object.assign(d.style,c):a.startsWith("on")&&"function"==typeof c?d.addEventListener(a.slice(2).toLowerCase(),c):d.setAttribute(a,String(c)));for(let a of c)null!=a&&d.appendChild("string"==typeof a?document.createTextNode(a):a);return d},"hasAppendChild",0,function(a){return"object"==typeof a&&null!==a&&"function"==typeof Reflect.get(a,"appendChild")},"setGlobalUiInstance",0,function(a,b){},"setHtml",0,function(a,b){a.innerHTML=b}],317683)}];

//# sourceMappingURL=packages_05hq3uw._.js.map