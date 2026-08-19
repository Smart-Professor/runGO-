(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,182736,r=>{"use strict";var e=r.i(409579),o=r.i(573748);let t="hexclave-global-error-recovery-attempts";var n=r.i(648534);r.s(["default",0,function({error:r}){let a=(0,n.useRef)(null);return(0,n.useEffect)(()=>{o.captureException(r)},[r]),(0,n.useEffect)(()=>{let r,e,o;if(a.current??=(r=performance.timeOrigin+performance.now(),!((o=null!==(e=function(){let r=window.sessionStorage.getItem(t);if(null===r)return null;try{let e=JSON.parse(r);if("object"==typeof e&&null!==e){let r=Object.getOwnPropertyDescriptor(e,"attempts")?.value,o=Object.getOwnPropertyDescriptor(e,"lastAttemptAt")?.value;if("number"==typeof r&&Number.isInteger(r)&&r>=0&&"number"==typeof o&&Number.isFinite(o))return{attempts:r,lastAttemptAt:o}}}catch(r){if(r instanceof SyntaxError)return null;throw r}return null}())&&r>=e.lastAttemptAt&&r-e.lastAttemptAt<=3e4?e.attempts:0)>=2)&&(window.sessionStorage.setItem(t,JSON.stringify({attempts:o+1,lastAttemptAt:r})),!0)),!a.current)return;let n=!1;return setTimeout(()=>{n||window.location.assign("/")},3e3),()=>{n=!0}},[]),(0,e.jsxs)("html",{children:[(0,e.jsx)("head",{children:(0,e.jsx)("style",{children:`
          :root {
            color-scheme: light;
            --error-background: #f8fafc;
            --error-foreground: #0f172a;
            --error-muted: #475569;
            --error-card: #ffffff;
            --error-border: #cbd5e1;
            --error-action: #0f172a;
            --error-action-foreground: #ffffff;
          }
          @media (prefers-color-scheme: dark) {
            :root {
              color-scheme: dark;
              --error-background: #0f172a;
              --error-foreground: #f8fafc;
              --error-muted: #cbd5e1;
              --error-card: #1e293b;
              --error-border: #475569;
              --error-action: #f8fafc;
              --error-action-foreground: #0f172a;
            }
          }
          /*
           * The app stylesheet can still load when this boundary replaces the root layout.
           * Keep its ambient pseudo-elements from washing out the recovery UI.
           */
          html {
            background: var(--error-background);
          }
          body {
            box-sizing: border-box;
            min-height: 100vh;
            margin: 0;
            padding: 24px;
            display: grid;
            place-items: center;
            position: relative;
            z-index: 0;
            isolation: isolate;
            background: var(--error-background);
            background-image: none;
            background-blend-mode: normal;
            color: var(--error-foreground);
            font-family: system-ui, sans-serif;
          }
          body::before,
          body::after {
            content: none;
          }
          .error-card {
            position: relative;
            z-index: 1;
            width: min(100%, 440px);
            box-sizing: border-box;
            padding: 32px;
            border: 1px solid var(--error-border);
            border-radius: 16px;
            background: var(--error-card);
            text-align: center;
            box-shadow: 0 12px 32px rgb(15 23 42 / 12%);
          }
          .error-title {
            margin: 0;
            font-size: 24px;
            line-height: 1.25;
          }
          .error-copy {
            margin: 12px 0 24px;
            color: var(--error-muted);
            font-size: 16px;
            line-height: 1.5;
          }
          .error-action {
            border: 0;
            border-radius: 8px;
            padding: 10px 18px;
            background: var(--error-action);
            color: var(--error-action-foreground);
            cursor: pointer;
            font: inherit;
            font-weight: 600;
          }
        `})}),(0,e.jsx)("body",{children:(0,e.jsxs)("main",{className:"error-card",children:[(0,e.jsx)("h1",{className:"error-title",children:"Something went wrong"}),(0,e.jsx)("p",{className:"error-copy",children:"The dashboard could not load this page. Try again, or reload the page manually later."}),(0,e.jsx)("button",{type:"button",className:"error-action",onClick:()=>window.location.assign("/"),children:"Try again"})]})})]})}],182736)}]);