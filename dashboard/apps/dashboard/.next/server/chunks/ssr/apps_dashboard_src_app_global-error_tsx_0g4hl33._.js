module.exports=[537273,a=>{"use strict";var b=a.i(340139),c=a.i(383171);let d="hexclave-global-error-recovery-attempts";var e=a.i(643599);a.s(["default",0,function({error:a}){let f=(0,e.useRef)(null);return(0,e.useEffect)(()=>{c.captureException(a)},[a]),(0,e.useEffect)(()=>{let a,b,c;if(f.current??=(a=performance.timeOrigin+performance.now(),!((c=null!==(b=function(){let a=window.sessionStorage.getItem(d);if(null===a)return null;try{let b=JSON.parse(a);if("object"==typeof b&&null!==b){let a=Object.getOwnPropertyDescriptor(b,"attempts")?.value,c=Object.getOwnPropertyDescriptor(b,"lastAttemptAt")?.value;if("number"==typeof a&&Number.isInteger(a)&&a>=0&&"number"==typeof c&&Number.isFinite(c))return{attempts:a,lastAttemptAt:c}}}catch(a){if(a instanceof SyntaxError)return null;throw a}return null}())&&a>=b.lastAttemptAt&&a-b.lastAttemptAt<=3e4?b.attempts:0)>=2)&&(window.sessionStorage.setItem(d,JSON.stringify({attempts:c+1,lastAttemptAt:a})),!0)),!f.current)return;let e=!1;return setTimeout(()=>{e||window.location.assign("/")},3e3),()=>{e=!0}},[]),(0,b.jsxs)("html",{children:[(0,b.jsx)("head",{children:(0,b.jsx)("style",{children:`
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
        `})}),(0,b.jsx)("body",{children:(0,b.jsxs)("main",{className:"error-card",children:[(0,b.jsx)("h1",{className:"error-title",children:"Something went wrong"}),(0,b.jsx)("p",{className:"error-copy",children:"The dashboard could not load this page. Try again, or reload the page manually later."}),(0,b.jsx)("button",{type:"button",className:"error-action",onClick:()=>window.location.assign("/"),children:"Try again"})]})})]})}],537273)}];

//# sourceMappingURL=apps_dashboard_src_app_global-error_tsx_0g4hl33._.js.map