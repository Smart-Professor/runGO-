(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,726536,e=>{"use strict";var t=e.i(409579),r=e.i(192175),i=e.i(62505),s=e.i(643825),n=e.i(648534);let a=n.default.createContext(null);function o(){let e=n.default.useContext(a);return e||null}function l(e){let t=(0,r.useDashboardInternalUser)(),n=t.useOwnedProjects(),a=o();if(!e)return a??(0,i.throwErr)("useAdminApp must be used within an AdminInterfaceProvider");{let r=n.find(t=>t.id===e);return r?r.app:(console.warn(`Project ${e} does not exist, or ${t.id} does not have access to it`),(0,s.notFound)())}}function u(){let e=(0,s.usePathname)();if(!e.startsWith("/projects/"))throw new i.HexclaveAssertionError("useProjectId must be used within a project route");return e.split("/")[2]}e.s(["AdminAppProvider",0,function(e){let r=l(u());return(0,t.jsx)(a.Provider,{value:r,children:e.children})},"useAdminApp",0,l,"useAdminAppIfExists",0,o,"useProjectId",0,u,"useServerApp",0,function(e){return l(e)},"useServerAppIfExists",0,function(){return o()}])},180839,e=>{"use strict";var t=e.i(409579),r=e.i(841664),i=e.i(803327),s=e.i(648534),n=e.i(838497),a=e.i(526190);let o=s.default.forwardRef(({onClick:e,href:s,children:n,prefetch:o,...l},u)=>{let c=(0,a.useRouter)(),{needConfirm:d}=(0,a.useRouterConfirm)();return(0,t.jsxs)(r.default,{ref:u,href:s,prefetch:o,...l,onClick:t=>{d?(t.preventDefault(),e?.(t),c.push(s.toString())):e?.(t)},children:[!1!==o?(0,t.jsx)(i.UrlPrefetcher,{href:s}):null,n]})});o.displayName="Link",e.s(["Link",0,o,"StyledLink",0,function(e){return(0,t.jsx)(o,{...e,className:(0,n.cn)("text-blue-500 underline",e.className),children:e.children})}])},192175,e=>{"use strict";var t=e.i(92535);e.i(138738);var r=e.i(354470),i=e.i(62505);function s(){return"true"===(0,t.getPublicEnvVar)("NEXT_PUBLIC_STACK_IS_REMOTE_DEVELOPMENT_ENVIRONMENT")}e.s(["useDashboardInternalUser",0,function(){return(0,r.useUser)({or:s()?"anonymous-if-exists[deprecated]":"redirect",projectIdMustMatch:"internal"})??(0,i.throwErr)("Dashboard expected an internal user because the protected dashboard auth gate should have installed or redirected the user.")},"useDashboardUser",0,function(){return(0,r.useUser)({or:s()?"anonymous-if-exists[deprecated]":"redirect"})??(0,i.throwErr)("Dashboard expected a signed-in user because the protected dashboard auth gate should have installed or redirected the user.")}])},803327,350721,e=>{"use strict";var t=e.i(409579),r=e.i(726536),i=e.i(192175);e.i(138738);var s=e.i(860982),n=e.i(506170);n.deindent`
  import { type } from "arktype"
  import { Container } from "@react-email/components";
  import { Subject, NotificationCategory, Props } from "@stackframe/emails";

  export const variablesSchema = type({
    count: "number"
  });

  export function EmailTemplate({ user, variables }: Props<typeof variablesSchema.infer>) {
    return (
      <Container>
        <Subject value={\`Hello \${user.displayName}!\`} />
        <NotificationCategory value="Transactional" />
        <div className="font-bold">Hi {user.displayName}!</div>
        <br />
        count is {variables.count}
      </Container>
    );
  }

  EmailTemplate.PreviewVariables = {
    count: 10
  } satisfies typeof variablesSchema.infer
`;let a=n.deindent`
  import { Button, Section, Hr, Text, Heading } from "@react-email/components";
  import { Subject, NotificationCategory } from "@stackframe/emails";

  export const variablesSchema = v => v;

  export function EmailTemplate({ user, project }) {
    return (
      <>
        <Subject value={\`Verify your email at \${project.displayName}\`} />
        <NotificationCategory value="Transactional" />
        <div className="font-sans text-base font-normal tracking-[0.15008px] leading-[1.5] m-0 py-8 w-full min-h-full">
          <Section>
            <Heading as="h3" className="font-sans font-bold text-[20px] text-center py-4 px-6 m-0">
              Verify your email at {project.displayName}
            </Heading>
            <Text className="font-sans font-normal text-[14px] text-center pt-2 px-6 pb-4 m-0 opacity-80">
              Hi{user.displayName ? (", " + user.displayName) : ''}! Please click on the following button to verify your email.
            </Text>
            <div className="text-center py-3 px-6">
              <Button
                href="#"
                className="text-black font-sans font-bold text-[14px] inline-block bg-[#f0f0f0] rounded-[4px] py-3 px-5 no-underline border-0"
              >
                Verify my email
              </Button>
            </div>
            <div className="py-4 px-6">
              <Hr className="opacity-20" />
            </div>
            <Text className="font-sans font-normal text-[12px] text-center pt-1 px-6 pb-6 m-0 opacity-60">
              If you were not expecting this email, you can safely ignore it. 
            </Text>
          </Section>
        </div>
      </>
    )
  }
`;n.deindent`
  import { Html, Tailwind, Body } from '@react-email/components';
  export function EmailTheme({ children }: { children: React.ReactNode }) {
    return (
      <Html>
        <Tailwind>
          <Body>
            {children}
          </Body>
        </Tailwind>
      </Html>
    );
  }
`;let o=`import { Html, Head, Tailwind, Body, Container, Section } from '@react-email/components';
import { ThemeProps, ProjectLogo } from "@stackframe/emails";

export function EmailTheme({ children, unsubscribeLink, projectLogos }: ThemeProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#fafbfb] font-sans text-base m-0 p-0" style={{ overflowX: 'hidden' }}>
          <div className="py-8 px-4 flex justify-center">
            <Container className="bg-white p-[45px] rounded-lg shadow-sm mx-auto" style={{ width: '100%', maxWidth: '600px' }}>
              <ProjectLogo data={projectLogos} mode="light" />
              {children}
            </Container>
          </div>
          {unsubscribeLink && (
            <Section className="p-4 opacity-60 text-center" style={{ textAlign: 'center' }}>
              <a href={unsubscribeLink} className="text-blue-600" target="_blank" rel="noopener noreferrer">Click here</a> to unsubscribe from these emails
            </Section>
          )}
        </Body>
      </Tailwind>
    </Html>
  );
}

EmailTheme.PreviewProps = {
  unsubscribeLink: "https://example.com",
} satisfies Partial<ThemeProps>
`,l=`import { Html, Head, Tailwind, Body, Container, Section } from '@react-email/components';
import { ThemeProps, ProjectLogo } from "@stackframe/emails";

export function EmailTheme({ children, unsubscribeLink, projectLogos }: ThemeProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#323232] font-sans text-white m-0 p-0" style={{ overflowX: 'hidden' }}>
          <div className="py-8 px-4 flex justify-center">
            <Container className="bg-black p-[45px] rounded-lg shadow-sm mx-auto" style={{ width: '100%', maxWidth: '600px' }}>
              <ProjectLogo data={projectLogos} mode="dark" />
              {children}
            </Container>
          </div>
          {unsubscribeLink && (
            <Section className="p-4 opacity-60 text-center" style={{ textAlign: 'center' }}>
              <a href={unsubscribeLink} className="text-blue-600" target="_blank" rel="noopener noreferrer">Click here</a> to unsubscribe from these emails
            </Section>
          )}
        </Body>
      </Tailwind>
    </Html>
  );
}

EmailTheme.PreviewProps = {
  unsubscribeLink: "https://example.com",
} satisfies Partial<ThemeProps>
`,u=`import { Html, Head, Tailwind, Body, Container, Section } from '@react-email/components';
import { ThemeProps, ProjectLogo } from "@stackframe/emails";

export function EmailTheme({ children, unsubscribeLink, projectLogos }: ThemeProps) {
  return (
    <Html>
      <Head />
      <Tailwind>
        <Body className="bg-[#f0eef6] font-sans text-base m-0 p-0" style={{ overflowX: 'hidden' }}>
          <div className="py-8 px-4 flex justify-center">
            <Container className="bg-white p-[45px] rounded-2xl mx-auto" style={{ width: '100%', maxWidth: '600px', borderTop: '4px solid #7c5ce0' }}>
              <ProjectLogo data={projectLogos} mode="light" />
              {children}
            </Container>
          </div>
          {unsubscribeLink && (
            <Section className="p-4 opacity-60 text-center" style={{ textAlign: 'center' }}>
              <a href={unsubscribeLink} className="text-[#7c5ce0]" target="_blank" rel="noopener noreferrer">Click here</a> to unsubscribe from these emails
            </Section>
          )}
        </Body>
      </Tailwind>
    </Html>
  );
}

EmailTheme.PreviewProps = {
  unsubscribeLink: "https://example.com",
} satisfies Partial<ThemeProps>
`,c="1df07ae6-abf3-4a40-83a5-a1a2cbe336ac";e.s(["DEFAULT_EMAIL_THEMES",0,{[c]:{displayName:"Default Light",tsxSource:o},"a0172b5d-cff0-463b-83bb-85124697373a":{displayName:"Default Dark",tsxSource:l},"c7e2d94f-8a1b-4e6d-b3f5-9d0a2e7c1b8f":{displayName:"Default Colorful",tsxSource:u}},"DEFAULT_EMAIL_THEME_ID",0,c,"previewTemplateSource",0,a],350721);let d=new Map;var m=e.i(648534),p=e.i(62505);e.i(477466);var f=e.i(222277);let h=0,g=(0,m.memo)(function(e){return(0,t.jsx)(t.Fragment,{children:e.callbacks.map((e,r)=>(0,t.jsx)(b,{callback:e},r))})}),b=(0,m.memo)(function({callback:e}){return(0,t.jsx)(f.ErrorBoundary,{errorComponent:v,children:(0,t.jsx)(m.Suspense,{fallback:null,children:(0,t.jsx)(y,{callback:e})})})});function y({callback:e}){h++;try{let r=e();if(r)return(0,t.jsx)(g,{callbacks:r});return null}finally{h--}}function x(e){return(0,m.useEffect)(()=>{},[]),(0,t.jsx)(g,{callbacks:e.callbacks})}function v(e){return(0,m.useEffect)(()=>{(0,p.captureError)("hook-prefetcher",e.error)},[e.error]),null}let j={"/projects/*":[([e,t])=>{(0,r.useAdminApp)(t)[s.hexclaveAppInternalsSymbol].useMetrics(!1)},([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:1})}],"/projects/*/**":[([e,t])=>{(0,r.useAdminApp)(t).useProject().useConfig()}],"/projects/*/users":[([e,t])=>{(0,r.useAdminApp)(t)[s.hexclaveAppInternalsSymbol].useMetricsUserCounts()},([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:1})},([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:10,orderBy:"signedUpAt",desc:!0,includeAnonymous:!1})}],"/projects/*/users/*":[([e,t,i])=>{let s=(0,r.useAdminApp)(t).useUser(i);if(s)return[()=>{s.useContactChannels()},()=>{s.useTeams()},()=>{s.useOAuthProviders()}]}],"/projects/*/team-settings":[([e,t])=>{(0,r.useAdminApp)(t).useTeamPermissionDefinitions()}],"/projects/*/team-permissions":[([e,t])=>{(0,r.useAdminApp)(t).useTeamPermissionDefinitions()},([e,t])=>{(0,r.useAdminApp)(t).useProjectPermissionDefinitions()}],"/projects/*/project-permissions":[([e,t])=>{(0,r.useAdminApp)(t).useProjectPermissionDefinitions()},([e,t])=>{(0,r.useAdminApp)(t).useTeamPermissionDefinitions()}],"/projects/*/teams":[([e,t])=>{(0,r.useAdminApp)(t).useTeams({limit:1})}],"/projects/*/teams/*":[([e,t])=>{(0,r.useAdminApp)(t).useTeamPermissionDefinitions()},([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:10})},([e,t,i])=>{let s=(0,r.useAdminApp)(t).useTeam(i);if(s)return[()=>{s.useUsers()}]}],"/projects/*/api-keys":[([e,t])=>{(0,r.useAdminApp)(t).useInternalApiKeys()}],"/projects/*/webhooks":[([e,t])=>{(0,r.useAdminApp)(t).useSvixToken()}],"/projects/*/webhooks/*":[([e,t])=>{(0,r.useAdminApp)(t).useSvixToken()}],"/projects/*/email-drafts":[([e,t])=>{(0,r.useAdminApp)(t).useEmailDrafts()}],"/projects/*/email-drafts/*":[([e,t])=>{(0,r.useAdminApp)(t).useEmailDrafts()},([e,t])=>{(0,r.useAdminApp)(t).useEmailThemes()},([e,t,i])=>{let s=(0,r.useAdminApp)(t),n=s.useEmailDrafts().find(e=>e.id===i);if(n)return[()=>{s.useEmailPreview({themeId:n.themeId,templateTsxSource:n.tsxSource})}]}],"/projects/*/emails":[([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:10})}],"/projects/*/email-templates":[([e,t])=>{(0,r.useAdminApp)(t).useEmailTemplates()}],"/projects/*/email-templates/*":[([e,t])=>{(0,r.useAdminApp)(t).useEmailTemplates()},([e,t])=>{(0,r.useAdminApp)(t).useEmailThemes()},([e,t,i])=>{let s=(0,r.useAdminApp)(t),n=s.useEmailTemplates().find(e=>e.id===i);if(n)return[()=>{s.useEmailPreview({themeId:n.themeId,templateTsxSource:n.tsxSource})}]}],"/projects/*/email-themes":[([e,t])=>{(0,r.useAdminApp)(t).useProject().useConfig()},([e,t])=>{(0,r.useAdminApp)(t).useEmailThemes()},([e,t])=>{let i=(0,r.useAdminApp)(t);return i.useEmailThemes().map(e=>()=>{i.useEmailPreview({themeId:e.id,templateTsxSource:a})})}],"/projects/*/email-themes/*":[([e,t,i])=>{(0,r.useAdminApp)(t).useEmailTheme(i)},([e,t,i])=>{let s=(0,r.useAdminApp)(t),n=s.useEmailTheme(i);return[()=>{s.useEmailPreview({themeTsxSource:n.tsxSource,templateTsxSource:a})}]}],"/projects/*/project-settings":[([e,t])=>{(0,r.useAdminApp)(t).useProject()},([e,t])=>{(0,r.useAdminApp)(t).useProject().useProductionModeErrors()},()=>{(0,i.useDashboardInternalUser)()}],"/projects/*/payments/**":[([e,t])=>{(0,r.useAdminApp)(t).useStripeAccountInfo()}],"/projects/*/payments/transactions":[([e,t])=>{(0,r.useAdminApp)(t).useTransactions({limit:10})}]},w=(0,m.memo)(function(e){let[r,i]=(0,m.useState)(null);(0,m.useEffect)(()=>{i(new URL(e.href.toString(),window.location.href))},[e.href]);let s=(0,m.useMemo)(()=>r?r.origin!==window.location.origin?[]:Object.entries(j).map(([e,t])=>{var i;let s;return[e,t,(i=r.pathname,(s=function(e){let t=d.get(e);if(t)return t;let r=new RegExp(e);return d.set(e,r),r}(`^${e.replace(/[-/\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*\*/g,"\x01").replace(/\*/g,"([^/]+)").replace(/\u0001/g,"(.*)")}/?$`)).exec(i)||!i.endsWith("/")&&s.exec(`${i}/`))]}).flatMap(([e,t,i])=>i?t.map(e=>()=>e(i,r.searchParams,r.hash)):[]):[],[r]);return r?(0,t.jsx)(x,{callbacks:s},r.toString()):null});e.s(["UrlPrefetcher",0,w],803327)},955448,(e,t,r)=>{"use strict";e.i(180712),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"Image",{enumerable:!0,get:function(){return j}});let i=e.r(481258),s=e.r(744066),n=e.r(409579),a=s._(e.r(648534)),o=i._(e.r(940715)),l=i._(e.r(873928)),u=e.r(111971),c=e.r(749739),d=e.r(713725),m=e.r(906667),p=i._(e.r(446465)),f=e.r(729626),h={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0};function g(e,t,r,i,s,n,a){let o=e?.src;e&&e["data-loaded-src"]!==o&&(e["data-loaded-src"]=o,("decode"in e?e.decode():Promise.resolve()).catch(()=>{}).then(()=>{if(e.parentElement&&e.isConnected){if("empty"!==t&&s(!0),r?.current){let t=new Event("load");Object.defineProperty(t,"target",{writable:!1,value:e});let i=!1,s=!1;r.current({...t,nativeEvent:t,currentTarget:e,target:e,isDefaultPrevented:()=>i,isPropagationStopped:()=>s,persist:()=>{},preventDefault:()=>{i=!0,t.preventDefault()},stopPropagation:()=>{s=!0,t.stopPropagation()}})}i?.current&&i.current(e)}}))}function b(e){return a.use?{fetchPriority:e}:{fetchpriority:e}}"u"<typeof window&&(globalThis.__NEXT_IMAGE_IMPORTED=!0);let y="u"<typeof window?a.useEffect:a.useLayoutEffect,x=(0,a.forwardRef)(({src:e,srcSet:t,sizes:r,height:i,width:s,decoding:o,className:l,style:u,fetchPriority:c,placeholder:d,loading:m,unoptimized:p,fill:h,onLoadRef:x,onLoadingCompleteRef:v,setBlurComplete:j,setShowAltText:w,sizesInput:A,onLoad:P,onError:E,...S},_)=>{let T=(0,a.useRef)(!1),C=(0,a.useRef)(null);y(()=>{let{current:e}=T,{current:t}=C;e||null===t||(E&&(t.src=t.src),t.complete&&g(t,d,x,v,j,p,A),T.current=!0)},[e,d,x,v,E,p,A]);let k=(0,f.useMergedRef)(_,C);return(0,n.jsx)("img",{...S,...b(c),loading:m,width:s,height:i,decoding:o,"data-nimg":h?"fill":"1",className:l,style:u,sizes:r,srcSet:t,src:e,ref:k,onLoad:e=>{g(e.currentTarget,d,x,v,j,p,A)},onError:e=>{w(!0),"empty"!==d&&j(!0),E&&E(e)}})});function v({isAppRouter:e,imgAttributes:t}){let r={as:"image",imageSrcSet:t.srcSet,imageSizes:t.sizes,crossOrigin:t.crossOrigin,referrerPolicy:t.referrerPolicy,...b(t.fetchPriority)};return e&&o.default.preload?(o.default.preload(t.src,r),null):(0,n.jsx)(l.default,{children:(0,n.jsx)("link",{rel:"preload",href:t.srcSet?void 0:t.src,...r},"__nimg-"+t.src+t.srcSet+t.sizes)})}let j=(0,a.forwardRef)((e,t)=>{let r=(0,a.useContext)(m.RouterContext),i=(0,a.useContext)(d.ImageConfigContext),s=(0,a.useMemo)(()=>{let e=h||i||c.imageConfigDefault,t=[...e.deviceSizes,...e.imageSizes].sort((e,t)=>e-t),r=e.deviceSizes.sort((e,t)=>e-t),s=e.qualities?.sort((e,t)=>e-t);return{...e,allSizes:t,deviceSizes:r,qualities:s,localPatterns:"u"<typeof window?i?.localPatterns:e.localPatterns}},[i]),{onLoad:o,onLoadingComplete:l}=e,f=(0,a.useRef)(o);(0,a.useEffect)(()=>{f.current=o},[o]);let g=(0,a.useRef)(l);(0,a.useEffect)(()=>{g.current=l},[l]);let[b,y]=(0,a.useState)(!1),[j,w]=(0,a.useState)(!1),{props:A,meta:P}=(0,u.getImgProps)(e,{defaultLoader:p.default,imgConf:s,blurComplete:b,showAltText:j});return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(x,{...A,unoptimized:P.unoptimized,placeholder:P.placeholder,fill:P.fill,onLoadRef:f,onLoadingCompleteRef:g,setBlurComplete:y,setShowAltText:w,sizesInput:e.sizes,ref:t}),P.preload?(0,n.jsx)(v,{isAppRouter:!r,imgAttributes:A}):null]})});("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},422805,(e,t,r)=>{"use strict";e.i(180712),Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return c},getImageProps:function(){return u}};for(var s in i)Object.defineProperty(r,s,{enumerable:!0,get:i[s]});let n=e.r(481258),a=e.r(111971),o=e.r(955448),l=n._(e.r(446465));function u(e){let{props:t}=(0,a.getImgProps)(e,{defaultLoader:l.default,imgConf:{deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],qualities:[75],path:"/_next/image",loader:"default",dangerouslyAllowSVG:!1,unoptimized:!0}});for(let[e,r]of Object.entries(t))void 0===r&&delete t[e];return{props:t}}let c=o.Image},727059,(e,t,r)=>{t.exports=e.r(422805)},377779,(e,t,r)=>{"use strict";function i(e,t){let r=e||75;return t?.qualities?.length?t.qualities.reduce((e,t)=>Math.abs(t-r)<Math.abs(e-r)?t:e,t.qualities[0]):r}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"findClosestQuality",{enumerable:!0,get:function(){return i}})},446465,(e,t,r)=>{"use strict";e.i(180712),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return a}});let i=e.r(377779),s=e.r(696050);function n({config:e,src:t,width:r,quality:a}){let o=(0,s.getDeploymentId)();if(t.startsWith("/")&&!t.startsWith("//"))if(t.includes("/_next/static/immutable")&&!(0,s.getAssetToken)())o=void 0;else{let e=t.indexOf("?");if(-1!==e){let r=new URLSearchParams(t.slice(e+1)),i=r.get("dpl");if(i){o=i,r.delete("dpl");let s=r.toString();t=t.slice(0,e)+(s?"?"+s:"")}}}if(t.startsWith("/")&&t.includes("?")&&e.localPatterns?.length===1&&"**"===e.localPatterns[0].pathname&&""===e.localPatterns[0].search)throw Object.defineProperty(Error(`Image with src "${t}" is using a query string which is not configured in images.localPatterns.
Read more: https://nextjs.org/docs/messages/next-image-unconfigured-localpatterns`),"__NEXT_ERROR_CODE",{value:"E871",enumerable:!1,configurable:!0});let l=(0,i.findClosestQuality)(a,e);return`${e.path}?url=${encodeURIComponent(t)}&w=${r}&q=${l}${t.startsWith("/")&&o?`&dpl=${o}`:""}`}n.__next_img_default=!0;let a=n},873928,(e,t,r)=>{"use strict";e.i(180712),Object.defineProperty(r,"__esModule",{value:!0});var i={default:function(){return h},defaultHead:function(){return d}};for(var s in i)Object.defineProperty(r,s,{enumerable:!0,get:i[s]});let n=e.r(481258),a=e.r(744066),o=e.r(409579),l=a._(e.r(648534)),u=n._(e.r(56559)),c=e.r(648468);function d(){return[(0,o.jsx)("meta",{charSet:"utf-8"},"charset"),(0,o.jsx)("meta",{name:"viewport",content:"width=device-width"},"viewport")]}function m(e,t){return"string"==typeof t||"number"==typeof t?e:t.type===l.default.Fragment?e.concat(l.default.Children.toArray(t.props.children).reduce((e,t)=>"string"==typeof t||"number"==typeof t?e:e.concat(t),[])):e.concat(t)}let p=["name","httpEquiv","charSet","itemProp"];function f(e){let t,r,i,s;return e.reduce(m,[]).reverse().concat(d().reverse()).filter((t=new Set,r=new Set,i=new Set,s={},e=>{let n=!0,a=!1;if(e.key&&"number"!=typeof e.key&&e.key.indexOf("$")>0){a=!0;let r=e.key.slice(e.key.indexOf("$")+1);t.has(r)?n=!1:t.add(r)}switch(e.type){case"title":case"base":r.has(e.type)?n=!1:r.add(e.type);break;case"meta":for(let t=0,r=p.length;t<r;t++){let r=p[t];if(e.props.hasOwnProperty(r))if("charSet"===r)i.has(r)?n=!1:i.add(r);else{let t=e.props[r],i=s[r]||new Set;("name"!==r||!a)&&i.has(t)?n=!1:(i.add(t),s[r]=i)}}}return n})).reverse().map((e,t)=>{let r=e.key||t;return l.default.cloneElement(e,{key:r})})}let h=function({children:e}){let t=(0,l.useContext)(c.HeadManagerContext);return(0,o.jsx)(u.default,{reduceComponentsToState:f,headManager:t,children:e})};("function"==typeof r.default||"object"==typeof r.default&&null!==r.default)&&void 0===r.default.__esModule&&(Object.defineProperty(r.default,"__esModule",{value:!0}),Object.assign(r.default,r),t.exports=r.default)},713725,(e,t,r)=>{"use strict";e.i(180712),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"ImageConfigContext",{enumerable:!0,get:function(){return n}});let i=e.r(481258)._(e.r(648534)),s=e.r(749739),n=i.default.createContext(s.imageConfigDefault)},232548,(e,t,r)=>{"use strict";function i({widthInt:e,heightInt:t,blurWidth:r,blurHeight:s,blurDataURL:n,objectFit:a}){let o=r?40*r:e,l=s?40*s:t,u=o&&l?`viewBox='0 0 ${o} ${l}'`:"";return`%3Csvg xmlns='http://www.w3.org/2000/svg' ${u}%3E%3Cfilter id='b' color-interpolation-filters='sRGB'%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3CfeColorMatrix values='1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 100 -1' result='s'/%3E%3CfeFlood x='0' y='0' width='100%25' height='100%25'/%3E%3CfeComposite operator='out' in='s'/%3E%3CfeComposite in2='SourceGraphic'/%3E%3CfeGaussianBlur stdDeviation='20'/%3E%3C/filter%3E%3Cimage width='100%25' height='100%25' x='0' y='0' preserveAspectRatio='${u?"none":"contain"===a?"xMidYMid":"cover"===a?"xMidYMid slice":"none"}' style='filter: url(%23b);' href='${n}'/%3E%3C/svg%3E`}Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImageBlurSvg",{enumerable:!0,get:function(){return i}})},749739,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i={VALID_LOADERS:function(){return n},imageConfigDefault:function(){return a}};for(var s in i)Object.defineProperty(r,s,{enumerable:!0,get:i[s]});let n=["default","imgix","cloudinary","akamai","custom"],a={deviceSizes:[640,750,828,1080,1200,1920,2048,3840],imageSizes:[32,48,64,96,128,256,384],path:"/_next/image",loader:"default",loaderFile:"",domains:[],disableStaticImages:!1,minimumCacheTTL:14400,formats:["image/webp"],maximumDiskCacheSize:void 0,maximumRedirects:3,maximumResponseBody:5e7,dangerouslyAllowLocalIP:!1,dangerouslyAllowSVG:!1,contentSecurityPolicy:"script-src 'none'; frame-src 'none'; sandbox;",contentDispositionType:"attachment",localPatterns:void 0,remotePatterns:[],qualities:[75],unoptimized:!1,customCacheHandler:!1}},111971,(e,t,r)=>{"use strict";e.i(180712),Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"getImgProps",{enumerable:!0,get:function(){return u}});let i=e.r(696050),s=e.r(232548),n=e.r(749739),a=["-moz-initial","fill","none","scale-down",void 0];function o(e){return void 0!==e.default}function l(e){return void 0===e?e:"number"==typeof e?Number.isFinite(e)?e:NaN:"string"==typeof e&&/^[0-9]+$/.test(e)?parseInt(e,10):NaN}function u({src:e,sizes:t,unoptimized:r=!1,priority:c=!1,preload:d=!1,loading:m,className:p,quality:f,width:h,height:g,fill:b=!1,style:y,overrideSrc:x,onLoad:v,onLoadingComplete:j,placeholder:w="empty",blurDataURL:A,fetchPriority:P,decoding:E="async",layout:S,objectFit:_,objectPosition:T,lazyBoundary:C,lazyRoot:k,...O},N){var I;let R,L,D,{imgConf:M,showAltText:U,blurComplete:H,defaultLoader:z}=N,$=M||n.imageConfigDefault;if("allSizes"in $)R=$;else{let e=[...$.deviceSizes,...$.imageSizes].sort((e,t)=>e-t),t=$.deviceSizes.sort((e,t)=>e-t),r=$.qualities?.sort((e,t)=>e-t);R={...$,allSizes:e,deviceSizes:t,qualities:r}}if(void 0===z)throw Object.defineProperty(Error("images.loaderFile detected but the file is missing default export.\nRead more: https://nextjs.org/docs/messages/invalid-images-config"),"__NEXT_ERROR_CODE",{value:"E163",enumerable:!1,configurable:!0});let B=O.loader||z;delete O.loader,delete O.srcSet;let W="__next_img_default"in B;if(W){if("custom"===R.loader)throw Object.defineProperty(Error(`Image with src "${e}" is missing "loader" prop.
Read more: https://nextjs.org/docs/messages/next-image-missing-loader`),"__NEXT_ERROR_CODE",{value:"E252",enumerable:!1,configurable:!0})}else{let e=B;B=t=>{let{config:r,...i}=t;return e(i)}}if(S){"fill"===S&&(b=!0);let e={intrinsic:{maxWidth:"100%",height:"auto"},responsive:{width:"100%",height:"auto"}}[S];e&&(y={...y,...e});let r={responsive:"100vw",fill:"100vw"}[S];r&&!t&&(t=r)}let F="",q=l(h),V=l(g);if((I=e)&&"object"==typeof I&&(o(I)||void 0!==I.src)){let t=o(e)?e.default:e;if(!t.src)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include src. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E460",enumerable:!1,configurable:!0});if(!t.height||!t.width)throw Object.defineProperty(Error(`An object should only be passed to the image component src parameter if it comes from a static image import. It must include height and width. Received ${JSON.stringify(t)}`),"__NEXT_ERROR_CODE",{value:"E48",enumerable:!1,configurable:!0});if(L=t.blurWidth,D=t.blurHeight,A=A||t.blurDataURL,F=t.src,!b)if(q||V){if(q&&!V){let e=q/t.width;V=Math.round(t.height*e)}else if(!q&&V){let e=V/t.height;q=Math.round(t.width*e)}}else q=t.width,V=t.height}let X=!c&&!d&&("lazy"===m||void 0===m);(!(e="string"==typeof e?e:F)||e.startsWith("data:")||e.startsWith("blob:"))&&(r=!0,X=!1),R.unoptimized&&(r=!0),W&&!R.dangerouslyAllowSVG&&e.split("?",1)[0].endsWith(".svg")&&(r=!0);let G=l(f),K=Object.assign(b?{position:"absolute",height:"100%",width:"100%",left:0,top:0,right:0,bottom:0,objectFit:_,objectPosition:T}:{},U?{}:{color:"transparent"},y),J=H||"empty"===w?null:"blur"===w?`url("data:image/svg+xml;charset=utf-8,${(0,s.getImageBlurSvg)({widthInt:q,heightInt:V,blurWidth:L,blurHeight:D,blurDataURL:A||"",objectFit:K.objectFit})}")`:`url("${w}")`,Q=a.includes(K.objectFit)?"fill"===K.objectFit?"100% 100%":"cover":K.objectFit,Y=J?{backgroundSize:Q,backgroundPosition:K.objectPosition||"50% 50%",backgroundRepeat:"no-repeat",backgroundImage:J}:{},Z=function({config:e,src:t,unoptimized:r,width:s,quality:n,sizes:a,loader:o}){if(r){if(t.startsWith("/")&&!t.startsWith("//")){let e=(0,i.getDeploymentId)();if(t.includes("/_next/static/immutable")&&!(0,i.getAssetToken)())e=void 0;else if(e){let r=t.indexOf("?");if(-1!==r){let i=new URLSearchParams(t.slice(r+1));i.get("dpl")||(i.append("dpl",e),t=t.slice(0,r)+"?"+i.toString())}else t+=`?dpl=${e}`}}return{src:t,srcSet:void 0,sizes:void 0}}let{widths:l,kind:u}=function({deviceSizes:e,allSizes:t},r,i){if(i){let r=/(^|\s)(1?\d?\d)vw/g,s=[];for(let e;e=r.exec(i);)s.push(parseInt(e[2]));if(s.length){let r=.01*Math.min(...s);return{widths:t.filter(t=>t>=e[0]*r),kind:"w"}}return{widths:t,kind:"w"}}return"number"!=typeof r?{widths:e,kind:"w"}:{widths:[...new Set([r,2*r].map(e=>t.find(t=>t>=e)||t[t.length-1]))],kind:"x"}}(e,s,a),c=l.length-1;return{sizes:a||"w"!==u?a:"100vw",srcSet:l.map((r,i)=>`${o({config:e,src:t,quality:n,width:r})} ${"w"===u?r:i+1}${u}`).join(", "),src:o({config:e,src:t,quality:n,width:l[c]})}}({config:R,src:e,unoptimized:r,width:q,quality:G,sizes:t,loader:B}),ee=X?"lazy":m;return{props:{...O,loading:ee,fetchPriority:P,width:q,height:V,decoding:E,className:p,style:{...K,...Y},sizes:Z.sizes,srcSet:Z.srcSet,src:x||Z.src},meta:{unoptimized:r,preload:d||c,placeholder:w,fill:b}}}},56559,(e,t,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),Object.defineProperty(r,"default",{enumerable:!0,get:function(){return o}});let i=e.r(648534),s="u"<typeof window,n=s?()=>{}:i.useLayoutEffect,a=s?()=>{}:i.useEffect;function o(e){let{headManager:t,reduceComponentsToState:r}=e;function o(){if(t&&t.mountedInstances){let e=i.Children.toArray(Array.from(t.mountedInstances).filter(Boolean));t.updateHead(r(e))}}return s&&(t?.mountedInstances?.add(e.children),o()),n(()=>(t?.mountedInstances?.add(e.children),()=>{t?.mountedInstances?.delete(e.children)})),n(()=>(t&&(t._pendingUpdate=o),()=>{t&&(t._pendingUpdate=o)})),a(()=>(t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null),()=>{t&&t._pendingUpdate&&(t._pendingUpdate(),t._pendingUpdate=null)})),null}}]);