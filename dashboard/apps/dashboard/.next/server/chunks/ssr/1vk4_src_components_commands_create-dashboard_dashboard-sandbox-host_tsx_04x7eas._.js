module.exports=[810480,234949,a=>{"use strict";var b=a.i(340139),c=a.i(867388),d=a.i(95805),e=a.i(929665),f=a.i(767854),g=a.i(591888),h=a.i(643599),i=a.i(82244);function j(a,...b){return a.reduce((a,c,d)=>a+c+(b[d]??""),"")}let k="// @stack-esm-version:",l=/^\/\/\s*@stack-esm-version:\s*(\S+)\s*$/m,m=(0,h.memo)(function({artifact:a,onBack:k,onEditToggle:m,onNavigate:n,onReady:o,onRuntimeError:p,onWidgetSelected:q,isChatOpen:r}){let s=(0,h.useRef)(null),t=(0,h.useRef)(k);t.current=k;let u=(0,h.useRef)(m);u.current=m;let v=(0,h.useRef)(n);v.current=n;let w=(0,h.useRef)(o);w.current=o;let x=(0,h.useRef)(p);x.current=p;let y=(0,h.useRef)(q);y.current=q;let z=(0,c.useDashboardUser)(),{resolvedTheme:A}=(0,e.useTheme)(),B=(0,h.useMemo)(()=>{let a=(0,d.getPublicEnvVar)("NEXT_PUBLIC_STACK_API_URL");if(!a)throw Error("NEXT_PUBLIC_STACK_API_URL is not set");return a},[]),C=(0,h.useMemo)(()=>"",[]),D=(0,h.useRef)("dark"===A?"dark":"light"),E=(0,h.useRef)(!!r),F=null!=k||null!=m,G=(0,h.useMemo)(()=>(function(a,b,c,d,e){let f,g=JSON.stringify(a.runtimeCodegen.uiRuntimeSourceCode).replace(/</g,"\\u003c"),h=((f=a.runtimeCodegen.uiRuntimeSourceCode.match(l))?f[1]:null)??i.default.version,k=function(a){let b=a.split(".");if(3!==b.length)return a;let c=Number(b[2]);return!Number.isInteger(c)||c<=0?a:`${b[0]}.${b[1]}.${c-1}`}(h);return j`<!doctype html>
<html class="${"dark"===c?"dark":""}">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <meta http-equiv="Content-Security-Policy" content="default-src 'none'; script-src 'unsafe-inline' 'unsafe-eval' https://unpkg.com https://cdn.jsdelivr.net https://cdn.tailwindcss.com https://esm.sh https://js.stripe.com${""}; style-src 'unsafe-inline' https://cdn.jsdelivr.net; img-src data: https:; connect-src ${b} https://unpkg.com https://cdn.jsdelivr.net https://esm.sh https://api.stripe.com https://m.stripe.com https://m.stripe.network${""}; font-src 'none'; frame-src https://js.stripe.com https://hooks.stripe.com https://m.stripe.network; worker-src 'none';" />
    
    <!-- Tailwind CSS Play CDN (for on-the-fly processing) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = {
        darkMode: 'class',
        theme: {
          extend: {
            colors: {
              border: 'hsl(var(--border))',
              input: 'hsl(var(--input))',
              ring: 'hsl(var(--ring))',
              background: 'hsl(var(--background))',
              foreground: 'hsl(var(--foreground))',
              primary: {
                DEFAULT: 'hsl(var(--primary))',
                foreground: 'hsl(var(--primary-foreground))',
              },
              secondary: {
                DEFAULT: 'hsl(var(--secondary))',
                foreground: 'hsl(var(--secondary-foreground))',
              },
              destructive: {
                DEFAULT: 'hsl(var(--destructive))',
                foreground: 'hsl(var(--destructive-foreground))',
              },
              muted: {
                DEFAULT: 'hsl(var(--muted))',
                foreground: 'hsl(var(--muted-foreground))',
              },
              accent: {
                DEFAULT: 'hsl(var(--accent))',
                foreground: 'hsl(var(--accent-foreground))',
              },
              card: {
                DEFAULT: 'hsl(var(--card))',
                foreground: 'hsl(var(--card-foreground))',
              },
            },
          }
        }
      }
    </script>
    
    <style>
      :root {
        --background: 0 0% 100%;
        --foreground: 240 10% 3.9%;
        --card: 0 0% 100%;
        --card-foreground: 240 10% 3.9%;
        --primary: 240 5.9% 10%;
        --primary-foreground: 0 0% 98%;
        --secondary: 240 4.8% 95.9%;
        --secondary-foreground: 240 5.9% 10%;
        --muted: 240 4.8% 95.9%;
        --muted-foreground: 240 3.8% 46.1%;
        --accent: 240 4.8% 95.9%;
        --accent-foreground: 240 5.9% 10%;
        --destructive: 0 84.2% 60.2%;
        --destructive-foreground: 0 0% 98%;
        --border: 240 5.9% 90%;
        --input: 240 5.9% 90%;
        --ring: 240 10% 3.9%;
      }
      .dark {
        --background: 240 10% 3.9%;
        --foreground: 0 0% 98%;
        --card: 240 10% 9.4%;
        --card-foreground: 0 0% 98%;
        --primary: 0 0% 98%;
        --primary-foreground: 240 5.9% 10%;
        --secondary: 240 3.7% 15.9%;
        --secondary-foreground: 0 0% 98%;
        --muted: 240 3.7% 15.9%;
        --muted-foreground: 240 5% 64.9%;
        --accent: 240 3.7% 15.9%;
        --accent-foreground: 0 0% 98%;
        --destructive: 0 62.8% 50%;
        --destructive-foreground: 0 0% 98%;
        --border: 240 3.7% 35.9%;
        --input: 240 3.7% 25.9%;
        --ring: 240 4.9% 83.9%;
      }
      :root, .dark { --page-background: transparent; }
      html, body {
        margin: 0;
        padding: 0;
        width: 100%;
        height: 100%;
        overflow-x: hidden;
        font-family: Inter, system-ui, -apple-system, Segoe UI, sans-serif;
        background: var(--page-background);
        color: hsl(var(--foreground));
      }
      #root { width: 100%; height: 100%; overflow-x: hidden; }
      * { box-sizing: border-box; }
      .dark { color-scheme: dark; }
      html, body, #root { scrollbar-width: none; }
      html::-webkit-scrollbar, body::-webkit-scrollbar, #root::-webkit-scrollbar { display: none; }

      /* Widget selection overlay — active only when chat panel is open */
      .widget-overlay {
        position: fixed;
        pointer-events: none;
        border: 2px dashed hsl(var(--primary) / 0.35);
        border-radius: 10px;
        z-index: 9999;
        transition: top 0.12s ease, left 0.12s ease, width 0.12s ease, height 0.12s ease;
        display: none;
        background: hsl(var(--primary) / 0.03);
      }
      .widget-overlay-btn {
        position: absolute;
        top: 6px;
        right: 6px;
        pointer-events: auto;
        width: 28px;
        height: 28px;
        border-radius: 8px;
        background: hsl(var(--primary));
        color: hsl(var(--primary-foreground));
        border: none;
        cursor: pointer;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        transition: opacity 0.15s ease, transform 0.15s ease;
        box-shadow: 0 2px 8px rgba(0,0,0,0.18);
      }
      .widget-overlay-btn:hover { transform: scale(1.08); }
      .widget-overlay.active .widget-overlay-btn { opacity: 1; }
    </style>
  </head>
  <body>
    <div id="root"></div>
    <script src="https://unpkg.com/@babel/standalone@7.29.7/babel.min.js" crossorigin="anonymous"></script>

    <!-- Install a global error listener BEFORE any AI code runs so that Babel parse
         errors, uncaught runtime throws, and async rejections all reach the parent.
         Without this, a JSX SyntaxError in the AI-generated code would surface only
         as a console error and the user would see a blank iframe. -->
    <script>
      (function () {
        function postError(message, stack) {
          try {
            window.parent.postMessage({
              type: 'dashboard-error-boundary',
              message: message || 'Unknown dashboard error',
              stack: stack || undefined,
            }, '*');
          } catch (_) { /* parent may be gone */ }
        }
        window.__postDashboardError = postError;
        window.addEventListener('error', function (event) {
          var err = event && event.error;
          postError((err && err.message) || (event && event.message) || 'Unknown runtime error', err && err.stack);
        });
        window.addEventListener('unhandledrejection', function (event) {
          var reason = event && event.reason;
          postError((reason && (reason.message || String(reason))) || 'Unhandled promise rejection', reason && reason.stack);
        });
      })();
    </script>

    ${j`
    <script type="module">
      const CUSTOM_DASHBOARD_LOAD_ERROR_MESSAGE = 'There was a problem loading custom dashboards. Please refresh the page and try again.';

      function formatDependencyError(error) {
        return error instanceof Error ? error.message : String(error);
      }

      function reportDependencyError(message, error) {
        window.parent.postMessage({
          type: 'dashboard-sandbox-dependency-error',
          message,
          stack: error instanceof Error ? error.stack : undefined,
        }, '*');
      }

      function failDependencyLoad(message, error) {
        reportDependencyError(message, error);
        window.__depsError = {
          message: CUSTOM_DASHBOARD_LOAD_ERROR_MESSAGE,
          stack: error instanceof Error ? error.stack : undefined,
        };
        window.__depsReady = true;
        window.dispatchEvent(new Event('deps-ready'));
      }

      import React from 'https://esm.sh/react@19.2.3';
      import * as ReactDOM from 'https://esm.sh/react-dom@19.2.3?deps=react@19.2.3';
      import * as ReactDOMClient from 'https://esm.sh/react-dom@19.2.3/client?deps=react@19.2.3';
      import * as Recharts from 'https://esm.sh/recharts@2.15.4?deps=react@19.2.3,react-dom@19.2.3';

      window.React = React;
      window.ReactDOM = { ...ReactDOM, ...ReactDOMClient };
      window.Recharts = Recharts;

      // Try current version first, fall back to last known good version
      let DashboardUIComponents, StackSDK;
      try {
        [DashboardUIComponents, StackSDK] = await Promise.all([
          import('https://esm.sh/@hexclave/dashboard-ui-components@${h}?deps=react@19.2.3,react-dom@19.2.3'),
          import('https://esm.sh/@hexclave/js@${h}'),
        ]);
      } catch (e) {
        reportDependencyError('[sandbox] Custom dashboard packages failed at version ${h}; trying fallback ${k}: ' + formatDependencyError(e), e);
        try {
          [DashboardUIComponents, StackSDK] = await Promise.all([
            import('https://esm.sh/@hexclave/dashboard-ui-components@${k}?deps=react@19.2.3,react-dom@19.2.3'),
            import('https://esm.sh/@hexclave/js@${k}'),
          ]);
        } catch (e2) {
          failDependencyLoad('[sandbox] Custom dashboard package fallback failed at version ${k}: ' + formatDependencyError(e2), e2);
        }
      }

      if (!window.__depsError) {
        window.DashboardUI = DashboardUIComponents;
        window.StackAdminApp = StackSDK.StackAdminApp;
        window.StackServerApp = StackSDK.StackServerApp;
        window.StackSDK = StackSDK;
        window.generateUuid = () => crypto.randomUUID();

        window.__depsReady = true;
        window.dispatchEvent(new Event('deps-ready'));
      }
    </script>`}

    <script type="application/json" id="ai-dashboard-source">${g}</script>

    <script type="text/babel">
      // Navigation API for AI-generated code
      window.dashboardNavigate = function(path) {
        window.parent.postMessage({ type: 'dashboard-navigate', path: path }, '*');
      };
      window.dashboardBack = function() {
        window.parent.postMessage({ type: 'dashboard-back' }, '*');
      };
      window.dashboardEdit = function() {
        window.parent.postMessage({ type: 'dashboard-edit' }, '*');
      };
      // Controls visibility flag — only true in the full dashboard viewer (not cmd+K preview)
      window.__showControls = ${d};
      window.__chatOpen = ${e};

      // Theme syncing and chat state from parent window
      window.addEventListener('message', (event) => {
        if (event.data?.type === 'stack-theme-change') {
          const theme = event.data.theme;
          if (theme === 'dark') {
            document.documentElement.classList.add('dark');
          } else {
            document.documentElement.classList.remove('dark');
          }
        }
        if (event.data?.type === 'dashboard-controls-update') {
          window.__chatOpen = !!event.data.chatOpen;
          window.dispatchEvent(new Event('chat-state-change'));
        }
      });

      const STACK_CONFIG = {
        baseUrl: ${JSON.stringify(b)},
        projectId: ${JSON.stringify(a.projectId)},
      };

      async function waitForDeps() {
        if (!window.__depsReady) {
          await new Promise(resolve => {
            window.addEventListener('deps-ready', resolve, { once: true });
          });
        }
        if (window.__depsError) {
          const error = new Error(window.__depsError.message || 'There was a problem loading custom dashboards. Please refresh the page and try again.');
          if (window.__depsError.stack) {
            error.stack = window.__depsError.stack;
          }
          throw error;
        }
      }

      async function requestAccessToken() {
        return new Promise((resolve, reject) => {
          const requestId = window.generateUuid();
          const timeout = setTimeout(() => {
            window.removeEventListener('message', handler);
            reject(new Error('Token request timeout'));
          }, 5000);

          const handler = (event) => {
            if (event.data?.type === 'stack-access-token-response' && event.data?.requestId === requestId) {
              clearTimeout(timeout);
              window.removeEventListener('message', handler);

              if (event.data.accessToken) {
                resolve(event.data.accessToken);
              } else {
                reject(new Error('No access token received from parent'));
              }
            }
          };

          window.addEventListener('message', handler);
          window.parent.postMessage({
            type: 'stack-access-token-request',
            requestId
          }, '*');
        });
      }

      async function initializeStackApp() {
        await waitForDeps();

        if (!window.StackAdminApp) {
          throw new Error("Stack SDK failed to load. The SDK should expose window.StackAdminApp.");
        }

        const hexclaveServerApp = new window.StackAdminApp({
          projectId: STACK_CONFIG.projectId,
          baseUrl: STACK_CONFIG.baseUrl,
          projectOwnerSession: async () => {
            return await requestAccessToken();
          },
          automaticSideEffects: false,
          analytics: { enabled: false },
        });

        // Expose under both names. AI-generated dashboards (post-PR2 prompt)
        // reference hexclaveServerApp; pre-rebrand saved dashboards still
        // reference stackServerApp. Both must resolve at runtime.
        window.hexclaveServerApp = hexclaveServerApp;
        window.stackServerApp = hexclaveServerApp;

        return hexclaveServerApp;
      }

      // Uncaught runtime errors and unhandled rejections are forwarded by the
      // early global listener installed before Babel loads (see top of <head>).

      // Error Boundary Component
      class ErrorBoundary extends React.Component {
        constructor(props) {
          super(props);
          this.state = { hasError: false, error: null };
        }

        static getDerivedStateFromError(error) {
          return { hasError: true, error };
        }

        componentDidCatch(error, errorInfo) {
          window.parent.postMessage({
            type: 'dashboard-error-boundary',
            message: error?.message,
            stack: error?.stack,
            componentStack: errorInfo?.componentStack,
          }, '*');
        }

        render() {
          if (this.state.hasError) {
            return (
              <div className="p-6 text-red-500">
                <h2 className="text-xl font-bold mb-2">Dashboard Error</h2>
                <pre className="text-sm bg-red-950/20 p-4 rounded overflow-auto">
                  {this.state.error?.message || 'Unknown error'}
                </pre>
                {this.state.error?.stack && (
                  <pre className="text-xs bg-red-950/10 p-4 rounded overflow-auto mt-2">
                    {this.state.error.stack}
                  </pre>
                )}
              </div>
            );
          }
          return this.props.children;
        }
      }

      // Boot the dashboard
      const rootElement = document.getElementById('root');
      if (!rootElement) {
        throw new Error('Root element not found');
      }

      // Initialize deps and boot the dashboard
      initializeStackApp().then(() => {
        const DashboardUI = window.DashboardUI;
        const Recharts = window.Recharts;

        if (!DashboardUI) {
          throw new Error("Dashboard UI components failed to load in sandbox.");
        }
        if (!Recharts) {
          throw new Error("Recharts failed to load in sandbox.");
        }

        // Execute AI-generated code with DashboardUI and Recharts in scope.
        // We compile here (rather than via <script type="text/babel">) so that
        // a JSX SyntaxError in the AI output surfaces as a normal throw — the
        // window 'error' listener picks it up and forwards it to the parent
        // composer instead of leaving the iframe blank.
        const aiSourceEl = document.getElementById('ai-dashboard-source');
        if (!aiSourceEl || !aiSourceEl.textContent) {
          throw new Error('Failed to parse aiSource from aiSourceEl: #ai-dashboard-source script tag is missing or empty');
        }
        let aiSource;
        try {
          aiSource = JSON.parse(aiSourceEl.textContent);
        } catch (parseErr) {
          const original = parseErr && parseErr.message ? parseErr.message : String(parseErr);
          const preview = aiSourceEl.textContent.slice(0, 500);
          const wrapped = new Error('Failed to parse aiSource from aiSourceEl: ' + original + ' | textContent preview: ' + preview);
          if (parseErr && parseErr.stack) wrapped.stack = parseErr.stack;
          throw wrapped;
        }
        if (typeof aiSource !== 'string') {
          throw new Error('Failed to parse aiSource from aiSourceEl: expected JSON-encoded string, got ' + typeof aiSource);
        }
        let compiledSource;
        try {
          compiledSource = window.Babel.transform(aiSource, { presets: ['react'], sourceType: 'script' }).code;
        } catch (err) {
          const message = err && err.message ? 'Dashboard code failed to compile: ' + err.message : 'Dashboard code failed to compile';
          const stack = err && err.stack ? err.stack : undefined;
          window.__postDashboardError && window.__postDashboardError(message, stack);
          const root = ReactDOM.createRoot(rootElement);
          root.render(
            <div className="p-6 text-red-500">
              <h2 className="text-xl font-bold mb-2">Dashboard failed to compile</h2>
              <pre className="text-sm bg-red-950/20 p-4 rounded overflow-auto whitespace-pre-wrap">
                {message}
              </pre>
            </div>
          );
          return;
        }
        // eslint-disable-next-line no-new-func
        const Dashboard = new Function('React', 'ReactDOM', 'DashboardUI', 'Recharts', 'hexclaveServerApp', compiledSource + '\\nreturn Dashboard;')(
          React, ReactDOM, DashboardUI, Recharts, window.hexclaveServerApp,
        );
        
        if (typeof Dashboard !== 'function') {
          throw new Error('Dashboard component not found in generated code');
        }
        
        const root = ReactDOM.createRoot(rootElement);
        root.render(
          <ErrorBoundary>
            <Dashboard />
          </ErrorBoundary>
        );
        
        parent.postMessage({ type: "stack-ai-dashboard-ready" }, "*");
      }).catch(error => {
        const message = error instanceof Error ? error.message : "Failed to initialize dashboard";
        parent.postMessage({
          type: "stack-ai-dashboard-error",
          message: message,
          stack: error instanceof Error ? error.stack : undefined,
        }, "*");
        
        const root = ReactDOM.createRoot(rootElement);
        root.render(
          <div className="p-6 text-red-500">
            <h2 className="text-xl font-bold mb-2">Failed to load dashboard</h2>
            <pre className="text-sm bg-red-950/20 p-4 rounded">
              {message}
            </pre>
          </div>
        );
      });
    </script>

    <!-- Widget selection overlay — lets the user pick a widget and send it to the chat panel -->
    <script>
    (function () {
      var overlay = document.createElement('div');
      overlay.className = 'widget-overlay';
      var btn = document.createElement('button');
      btn.className = 'widget-overlay-btn';
      btn.setAttribute('aria-label', 'Add to chat');
      btn.title = 'Add to chat';
      btn.innerHTML = '<svg width="14" height="14" viewBox="0 0 256 256" fill="currentColor"><path d="M216,48H40A16,16,0,0,0,24,64V176a16,16,0,0,0,16,16H96l32,32a8,8,0,0,0,11.31,0L171.31,192H216a16,16,0,0,0,16-16V64A16,16,0,0,0,216,48ZM160,136H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Zm0-32H96a8,8,0,0,1,0-16h64a8,8,0,0,1,0,16Z"/></svg>';
      overlay.appendChild(btn);

      var currentWidget = null;
      var mounted = false;

      function mount() {
        if (mounted) return;
        document.body.appendChild(overlay);
        mounted = true;
      }

      /* ── Widget detection heuristic ── */
      function findWidget(el) {
        var current = el;
        var root = document.getElementById('root');
        while (current && current !== root && current !== document.body) {
          if (current === overlay || overlay.contains(current)) {
            current = current.parentElement;
            continue;
          }
          var rect = current.getBoundingClientRect();
          if (rect.width < 80 || rect.height < 50) { current = current.parentElement; continue; }
          if (rect.width > window.innerWidth * 0.85 && rect.height > window.innerHeight * 0.85) {
            current = current.parentElement; continue;
          }
          var hasContent = current.querySelector('svg, h1, h2, h3, h4, h5, h6, table, img, canvas');
          var cls = typeof current.className === 'string' ? current.className : '';
          var isCard = /rounded|shadow|border|card|bg-/.test(cls);
          var parent = current.parentElement;
          var isLayoutChild = false;
          if (parent && parent !== root) {
            var ps = getComputedStyle(parent).display;
            isLayoutChild = ps === 'grid' || ps === 'flex';
          }
          if (hasContent || isCard || isLayoutChild) return current;
          current = current.parentElement;
        }
        return null;
      }

      function showOverlay(widget) {
        mount();
        var rect = widget.getBoundingClientRect();
        overlay.style.display = 'block';
        overlay.style.top = rect.top - 2 + 'px';
        overlay.style.left = rect.left - 2 + 'px';
        overlay.style.width = rect.width + 4 + 'px';
        overlay.style.height = rect.height + 4 + 'px';
        overlay.classList.add('active');
        currentWidget = widget;
      }

      function hideOverlay() {
        overlay.style.display = 'none';
        overlay.classList.remove('active');
        currentWidget = null;
      }

      document.addEventListener('mousemove', function (e) {
        if (!window.__chatOpen) return;
        if (overlay.contains(e.target)) return;
        var widget = findWidget(e.target);
        if (widget && widget !== currentWidget) showOverlay(widget);
        else if (!widget) hideOverlay();
      });

      document.addEventListener('mouseleave', function () { hideOverlay(); });
      window.addEventListener('chat-state-change', function () { if (!window.__chatOpen) hideOverlay(); });

      /* ── Send DOM metadata to parent ── */
      btn.addEventListener('click', function (e) {
        e.stopPropagation();
        e.preventDefault();
        if (!currentWidget) return;

        var heading = currentWidget.querySelector('h1,h2,h3,h4,h5,h6');
        var widgetRect = currentWidget.getBoundingClientRect();
        var metadata = {
          heading: heading ? heading.textContent.trim() : null,
          tagName: currentWidget.tagName.toLowerCase(),
          classes: (typeof currentWidget.className === 'string' ? currentWidget.className : '').slice(0, 300),
          textPreview: (currentWidget.textContent || '').trim().slice(0, 500),
          rect: { width: Math.round(widgetRect.width), height: Math.round(widgetRect.height) },
        };

        window.parent.postMessage({ type: 'dashboard-widget-selected', metadata: metadata }, '*');
        hideOverlay();
      });
    })();
    </script>
  </body>
</html>`})(a,B,D.current,F,E.current),[a,B,C,F]);return(0,h.useEffect)(()=>{s.current?.contentWindow&&s.current.contentWindow.postMessage({type:"stack-theme-change",theme:A},"*")},[A]),(0,h.useEffect)(()=>{s.current?.contentWindow&&s.current.contentWindow.postMessage({type:"dashboard-controls-update",chatOpen:!!r},"*")},[r]),(0,h.useEffect)(()=>{let a=a=>{if("object"!=typeof a.data||null===a.data||"null"!==a.origin||!s.current?.contentWindow||a.source!==s.current.contentWindow)return;let b=a.data.type;if("stack-access-token-request"===b){let b=a.data.requestId;(0,g.runAsynchronously)(async()=>{let c=await z.getAccessToken();if(!c){let c=Error("[DashboardSandboxHost] Failed to get access token: access token is null");(0,f.captureError)("dashboard-sandbox-host",c),a.source?.postMessage({type:"stack-access-token-response",requestId:b,accessToken:null,error:c.message},{targetOrigin:"*"});return}a.source?.postMessage({type:"stack-access-token-response",requestId:b,accessToken:c},{targetOrigin:"*"})});return}if("dashboard-navigate"===b)return void v.current?.(a.data.path);if("dashboard-back"===b)return void t.current?.();if("dashboard-edit"===b)return void u.current?.();if("dashboard-sandbox-dependency-error"===b){let b=Error(a.data.message??"Unknown custom dashboard dependency error");a.data.stack&&(b.stack=a.data.stack),(0,f.captureError)("dashboard-sandbox-dependency-error",b);return}if("dashboard-error-boundary"===b){let b=Error(a.data.message??"Unknown dashboard error");a.data.stack&&(b.stack=a.data.stack),(0,f.captureError)("dashboard-sandbox-error-boundary",b),x.current?.({message:"string"==typeof a.data.message?a.data.message:"Unknown dashboard error",stack:"string"==typeof a.data.stack?a.data.stack:void 0,componentStack:"string"==typeof a.data.componentStack?a.data.componentStack:void 0});return}"stack-ai-dashboard-error"===b?x.current?.({message:"string"==typeof a.data.message?a.data.message:"Failed to initialize dashboard",stack:"string"==typeof a.data.stack?a.data.stack:void 0}):"dashboard-widget-selected"===b?y.current?.({metadata:{heading:"string"==typeof a.data.metadata?.heading?a.data.metadata.heading:null,tagName:"string"==typeof a.data.metadata?.tagName?a.data.metadata.tagName:"div",classes:"string"==typeof a.data.metadata?.classes?a.data.metadata.classes:"",textPreview:"string"==typeof a.data.metadata?.textPreview?a.data.metadata.textPreview:"",rect:{width:"number"==typeof a.data.metadata?.rect?.width?a.data.metadata.rect.width:0,height:"number"==typeof a.data.metadata?.rect?.height?a.data.metadata.rect.height:0}}}):"stack-ai-dashboard-ready"===b&&w.current?.()};return window.addEventListener("message",a),()=>{window.removeEventListener("message",a)}},[z]),(0,b.jsx)("iframe",{ref:s,title:"AI Dashboard Preview",sandbox:"allow-scripts",srcDoc:G,className:"h-full w-full bg-transparent"})});a.s(["DashboardSandboxHost",0,m,"stampEsmVersion",0,function(a,b){return l.test(a)?a.replace(l,`${k} ${b}`):`${k} ${b}
${a}`}],810480);var n=a.i(766850);let o=["Understanding your query...","Analyzing project structure...","Writing dashboard code...","Generating components...","Assembling layout..."],p=(0,h.memo)(function({code:a,isStreaming:c,onComplete:d}){let e=(0,h.useRef)(d);e.current=d;let f=(0,h.useRef)(null),[g,i]=(0,h.useState)(0),j=(0,h.useRef)(0);(0,h.useEffect)(()=>{j.current=a.length},[a]),(0,h.useEffect)(()=>{0===a.length&&(i(0),j.current=0)},[a.length]);let k=g<a.length;(0,h.useEffect)(()=>{if(!k)return;let a=setInterval(()=>{i(a=>{let b=j.current;return a>=b?a:Math.min(a+8,b)})},16);return()=>clearInterval(a)},[k]);let l=(0,h.useRef)(!1);(0,h.useEffect)(()=>{k||c||!(a.length>0)||l.current||(l.current=!0,e.current?.())},[k,c,a.length]),(0,h.useEffect)(()=>{0===a.length&&(l.current=!1)},[a.length]);let m=a.slice(0,g),p=g>0,q=a.length>0,r=c||k;(0,h.useEffect)(()=>{let a=f.current;a&&(a.scrollTop=a.scrollHeight)},[m]);let[s,t]=(0,h.useState)(0);return(0,h.useEffect)(()=>{if(q)return;let a=setInterval(()=>{t(a=>(a+1)%o.length)},2e3);return()=>clearInterval(a)},[q]),(0,h.useEffect)(()=>{q||t(0)},[q]),(0,b.jsxs)("div",{className:"flex h-full w-full flex-col rounded-lg overflow-hidden bg-zinc-50 dark:bg-zinc-950 ring-1 ring-zinc-200 dark:ring-white/[0.06]",children:[(0,b.jsxs)("div",{className:"flex items-center gap-2 px-3 py-2 bg-zinc-100/80 dark:bg-zinc-900/80 border-b border-zinc-200 dark:border-white/[0.06]",children:[(0,b.jsxs)("div",{className:"flex gap-1.5",children:[(0,b.jsx)("div",{className:"w-2.5 h-2.5 rounded-full bg-red-500/70"}),(0,b.jsx)("div",{className:"w-2.5 h-2.5 rounded-full bg-yellow-500/70"}),(0,b.jsx)("div",{className:"w-2.5 h-2.5 rounded-full bg-green-500/70"})]}),(0,b.jsx)("span",{className:"text-[10px] text-zinc-400 dark:text-zinc-500 font-mono ml-1",children:"Dashboard.tsx"})]}),(0,b.jsx)("div",{ref:f,className:"flex-1 min-h-0 overflow-hidden p-3 font-mono text-[11px] leading-relaxed text-zinc-700 dark:text-zinc-300",children:p?(0,b.jsxs)("div",{children:[m.split("\n").map((a,c)=>(0,b.jsx)("div",{className:"whitespace-pre",children:function(a){let c,d=[],e=/(\/\/.*$|\/\*[\s\S]*?\*\/|"(?:[^"\\]|\\.)*"|'(?:[^'\\]|\\.)*'|`(?:[^`\\]|\\.)*`|\b(?:import|export|from|const|let|var|function|return|if|else|for|while|async|await|new|class|extends|typeof|interface|type)\b|\b\d+(?:\.\d+)?\b|<\/?[A-Z][A-Za-z0-9.]*|[{}()[\];,.])/gm,f=0;for(;null!==(c=e.exec(a));){c.index>f&&d.push(a.slice(f,c.index));let e=c[0];e.startsWith("//")||e.startsWith("/*")?d.push((0,b.jsx)("span",{className:"text-zinc-400 dark:text-zinc-500",children:e},`${f}-c`)):e.startsWith('"')||e.startsWith("'")||e.startsWith("`")?d.push((0,b.jsx)("span",{className:"text-green-600 dark:text-green-400",children:e},`${f}-s`)):/^<\/?[A-Z]/.test(e)?d.push((0,b.jsx)("span",{className:"text-amber-600 dark:text-amber-400",children:e},`${f}-j`)):/^\b(?:import|export|from|const|let|var|function|return|if|else|for|while|async|await|new|class|extends|typeof|interface|type)\b$/.test(e)?d.push((0,b.jsx)("span",{className:"text-blue-600 dark:text-blue-400",children:e},`${f}-k`)):/^\d/.test(e)?d.push((0,b.jsx)("span",{className:"text-orange-600 dark:text-orange-400",children:e},`${f}-n`)):d.push(e),f=c.index+e.length}return f<a.length&&d.push(a.slice(f)),d}(a)},c)),r&&(0,b.jsx)("span",{className:(0,n.cn)("inline-block w-[6px] h-[14px] bg-cyan-500 dark:bg-cyan-400 ml-0.5 align-middle","animate-pulse")})]}):(0,b.jsx)("div",{className:"flex h-full items-center justify-center",children:(0,b.jsxs)("div",{className:"flex flex-col items-center gap-3",children:[(0,b.jsxs)("div",{className:"flex gap-1",children:[(0,b.jsx)("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"}),(0,b.jsx)("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse",style:{animationDelay:"150ms"}}),(0,b.jsx)("div",{className:"w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse",style:{animationDelay:"300ms"}})]}),(0,b.jsx)("span",{className:"text-[11px] text-zinc-400 dark:text-zinc-500 transition-opacity duration-300",children:o[s]})]})})}),r&&p&&(0,b.jsx)("div",{className:"h-8 bg-gradient-to-t from-cyan-500/[0.04] dark:from-cyan-500/[0.06] to-transparent pointer-events-none"})]})});a.s(["StreamingCodeViewer",0,p],234949)}];

//# sourceMappingURL=1vk4_src_components_commands_create-dashboard_dashboard-sandbox-host_tsx_04x7eas._.js.map