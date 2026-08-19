(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,726536,e=>{"use strict";var t=e.i(409579),r=e.i(192175),s=e.i(62505),a=e.i(643825),i=e.i(648534);let n=i.default.createContext(null);function o(){let e=i.default.useContext(n);return e||null}function l(e){let t=(0,r.useDashboardInternalUser)(),i=t.useOwnedProjects(),n=o();if(!e)return n??(0,s.throwErr)("useAdminApp must be used within an AdminInterfaceProvider");{let r=i.find(t=>t.id===e);return r?r.app:(console.warn(`Project ${e} does not exist, or ${t.id} does not have access to it`),(0,a.notFound)())}}function c(){let e=(0,a.usePathname)();if(!e.startsWith("/projects/"))throw new s.HexclaveAssertionError("useProjectId must be used within a project route");return e.split("/")[2]}e.s(["AdminAppProvider",0,function(e){let r=l(c());return(0,t.jsx)(n.Provider,{value:r,children:e.children})},"useAdminApp",0,l,"useAdminAppIfExists",0,o,"useProjectId",0,c,"useServerApp",0,function(e){return l(e)},"useServerAppIfExists",0,function(){return o()}])},286036,e=>{"use strict";var t=e.i(92535),r=e.i(62505);e.s(["getApiBaseUrl",0,function(){return new URL("/api/v1",(0,t.getPublicEnvVar)("NEXT_PUBLIC_STACK_API_URL")??(0,r.throwErr)("NEXT_PUBLIC_STACK_API_URL is not set")).toString()}])},18587,e=>{"use strict";var t=e.i(409579),r=e.i(180839);e.i(786487);var s=e.i(841384);e.i(403150);var a=e.i(757905),i=e.i(92535),n=e.i(368886),o=e.i(286036),l=e.i(671197),c=e.i(310563),u=e.i(312279);e.i(652676);var m=e.i(339322),d=e.i(643825),p=e.i(648534);let f=(0,i.getPublicEnvVar)("NEXT_PUBLIC_STACK_STRIPE_PUBLISHABLE_KEY")??"";e.s(["default",0,function(){let[e,i]=(0,p.useState)({kind:"loading"}),h=(0,d.useSearchParams)(),y=h.get("return_url"),x=h.get("payment_intent_client_secret")??void 0,g=h.get("setup_intent_client_secret")??void 0,A=x??g,b=h.get("stripe_account_id")??void 0,v=h.get("purchase_full_code")??void 0,j=h.get("bypass")??void 0,T=h.get("free")??void 0,P=(0,p.useCallback)(async()=>{if(!y||!v)return;let e=(0,o.getApiBaseUrl)(),t=new URL(`${e}/payments/purchases/validate-code`);t.searchParams.set("full_code",v),t.searchParams.set("return_url",y),(await fetch(t)).ok&&window.location.assign(y)},[y,v]),w=(0,p.useCallback)(async()=>{try{if("1"===j){(0,n.runAsynchronously)(P());let e=`Bypassed in test mode. No payment processed.${y?" You will be redirected shortly.":""}`;i({kind:"success",message:e});return}if("1"===T){(0,n.runAsynchronously)(P());let e=`Free subscription activated. No payment required.${y?" You will be redirected shortly.":""}`;i({kind:"success",message:e});return}let e=await (0,m.loadStripe)(f,{stripeAccount:b});if(!e)throw Error("Stripe failed to initialize");if(!A)return;if(g){let t=await e.retrieveSetupIntent(g),r=t.setupIntent?.status,s=t.setupIntent?.last_setup_error?.message;if("succeeded"===r){(0,n.runAsynchronously)(P());let e=`Payment method saved. Your free trial has started.${y?" You will be redirected shortly.":" You can safely close this page."}`;i({kind:"success",message:e});return}if("processing"===r)return void i({kind:"success",message:"Setup is processing. You'll receive an update shortly."});if("requires_payment_method"===r)return void i({kind:"error",message:s??"Setup failed. Please try another payment method."});if("requires_action"===r)return void i({kind:"error",message:"Additional authentication required. Please try again."});if("canceled"===r)return void i({kind:"error",message:"Setup was canceled."});i({kind:"error",message:"Unexpected setup state."});return}let t=await e.retrievePaymentIntent(A),r=t.paymentIntent?.status,s=t.paymentIntent?.last_payment_error?.message;if("succeeded"===r){(0,n.runAsynchronously)(P());let e=`Payment succeeded.${y?" You will be redirected shortly.":" You can safely close this page."}`;i({kind:"success",message:e});return}if("processing"===r)return void i({kind:"success",message:"Payment is processing. You'll receive an update shortly."});if("requires_payment_method"===r)return void i({kind:"error",message:s??"Payment failed. Please try another payment method."});if("requires_action"===r)return void i({kind:"error",message:"Additional authentication required. Please try again."});if("canceled"===r)return void i({kind:"error",message:"Payment was canceled."});i({kind:"error",message:"Unexpected payment state."})}catch(e){i({kind:"error",message:e instanceof Error?e.message:"Unexpected error retrieving payment."})}},[A,g,b,j,T,y,P]);return(0,p.useEffect)(()=>{(0,n.runAsynchronously)(w())},[w]),(0,t.jsx)("div",{"data-hexclave-purchase-page":!0,className:"relative flex min-h-screen items-center justify-center bg-white px-4 py-12 dark:bg-black",children:(0,t.jsxs)(s.DesignCard,{glassmorphic:!0,className:"relative w-full max-w-md",contentClassName:"flex flex-col items-center gap-5 p-8 text-center",children:["loading"===e.kind&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex size-14 items-center justify-center rounded-full bg-primary/10",children:(0,t.jsx)(c.SpinnerGapIcon,{className:"size-7 animate-spin text-primary"})}),(0,t.jsx)(a.Typography,{type:"h2",className:"text-xl font-semibold tracking-tight",children:"Finalizing purchase…"}),(0,t.jsx)(a.Typography,{type:"label",className:"text-sm text-muted-foreground",children:"Please wait while we verify your payment."})]}),"success"===e.kind&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex size-14 items-center justify-center rounded-full bg-emerald-500/10",children:(0,t.jsx)(l.CheckCircleIcon,{className:"size-7 text-emerald-600 dark:text-emerald-400",weight:"fill"})}),(0,t.jsx)(a.Typography,{type:"h2",className:"text-xl font-semibold tracking-tight",children:"Purchase successful"}),(0,t.jsx)(a.Typography,{type:"label",className:"text-sm text-muted-foreground",children:e.message})]}),"error"===e.kind&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("div",{className:"flex size-14 items-center justify-center rounded-full bg-destructive/10",children:(0,t.jsx)(u.XCircleIcon,{className:"size-7 text-destructive",weight:"fill"})}),(0,t.jsx)(a.Typography,{type:"h2",className:"text-xl font-semibold tracking-tight",children:"Purchase failed"}),(0,t.jsxs)(a.Typography,{type:"label",className:"text-sm text-muted-foreground",children:['The following error occurred: "',e.message,'"']}),(0,t.jsxs)(a.Typography,{type:"label",className:"text-sm text-muted-foreground",children:[(0,t.jsx)(r.StyledLink,{href:`/purchase/${v}`,children:"Click here"})," to try making your purchase again."]})]})]})})}])},786487,e=>{"use strict";e.i(52031),e.s([])},180839,e=>{"use strict";var t=e.i(409579),r=e.i(841664),s=e.i(803327),a=e.i(648534),i=e.i(838497),n=e.i(526190);let o=a.default.forwardRef(({onClick:e,href:a,children:i,prefetch:o,...l},c)=>{let u=(0,n.useRouter)(),{needConfirm:m}=(0,n.useRouterConfirm)();return(0,t.jsxs)(r.default,{ref:c,href:a,prefetch:o,...l,onClick:t=>{m?(t.preventDefault(),e?.(t),u.push(a.toString())):e?.(t)},children:[!1!==o?(0,t.jsx)(s.UrlPrefetcher,{href:a}):null,i]})});o.displayName="Link",e.s(["Link",0,o,"StyledLink",0,function(e){return(0,t.jsx)(o,{...e,className:(0,i.cn)("text-blue-500 underline",e.className),children:e.children})}])},192175,e=>{"use strict";var t=e.i(92535);e.i(138738);var r=e.i(354470),s=e.i(62505);function a(){return"true"===(0,t.getPublicEnvVar)("NEXT_PUBLIC_STACK_IS_REMOTE_DEVELOPMENT_ENVIRONMENT")}e.s(["useDashboardInternalUser",0,function(){return(0,r.useUser)({or:a()?"anonymous-if-exists[deprecated]":"redirect",projectIdMustMatch:"internal"})??(0,s.throwErr)("Dashboard expected an internal user because the protected dashboard auth gate should have installed or redirected the user.")},"useDashboardUser",0,function(){return(0,r.useUser)({or:a()?"anonymous-if-exists[deprecated]":"redirect"})??(0,s.throwErr)("Dashboard expected a signed-in user because the protected dashboard auth gate should have installed or redirected the user.")}])},803327,350721,e=>{"use strict";var t=e.i(409579),r=e.i(726536),s=e.i(192175);e.i(138738);var a=e.i(860982),i=e.i(506170);i.deindent`
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
`;let n=i.deindent`
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
`;i.deindent`
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
`,c=`import { Html, Head, Tailwind, Body, Container, Section } from '@react-email/components';
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
`,u="1df07ae6-abf3-4a40-83a5-a1a2cbe336ac";e.s(["DEFAULT_EMAIL_THEMES",0,{[u]:{displayName:"Default Light",tsxSource:o},"a0172b5d-cff0-463b-83bb-85124697373a":{displayName:"Default Dark",tsxSource:l},"c7e2d94f-8a1b-4e6d-b3f5-9d0a2e7c1b8f":{displayName:"Default Colorful",tsxSource:c}},"DEFAULT_EMAIL_THEME_ID",0,u,"previewTemplateSource",0,n],350721);let m=new Map;var d=e.i(648534),p=e.i(62505);e.i(477466);var f=e.i(222277);let h=0,y=(0,d.memo)(function(e){return(0,t.jsx)(t.Fragment,{children:e.callbacks.map((e,r)=>(0,t.jsx)(x,{callback:e},r))})}),x=(0,d.memo)(function({callback:e}){return(0,t.jsx)(f.ErrorBoundary,{errorComponent:b,children:(0,t.jsx)(d.Suspense,{fallback:null,children:(0,t.jsx)(g,{callback:e})})})});function g({callback:e}){h++;try{let r=e();if(r)return(0,t.jsx)(y,{callbacks:r});return null}finally{h--}}function A(e){return(0,d.useEffect)(()=>{},[]),(0,t.jsx)(y,{callbacks:e.callbacks})}function b(e){return(0,d.useEffect)(()=>{(0,p.captureError)("hook-prefetcher",e.error)},[e.error]),null}let v={"/projects/*":[([e,t])=>{(0,r.useAdminApp)(t)[a.hexclaveAppInternalsSymbol].useMetrics(!1)},([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:1})}],"/projects/*/**":[([e,t])=>{(0,r.useAdminApp)(t).useProject().useConfig()}],"/projects/*/users":[([e,t])=>{(0,r.useAdminApp)(t)[a.hexclaveAppInternalsSymbol].useMetricsUserCounts()},([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:1})},([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:10,orderBy:"signedUpAt",desc:!0,includeAnonymous:!1})}],"/projects/*/users/*":[([e,t,s])=>{let a=(0,r.useAdminApp)(t).useUser(s);if(a)return[()=>{a.useContactChannels()},()=>{a.useTeams()},()=>{a.useOAuthProviders()}]}],"/projects/*/team-settings":[([e,t])=>{(0,r.useAdminApp)(t).useTeamPermissionDefinitions()}],"/projects/*/team-permissions":[([e,t])=>{(0,r.useAdminApp)(t).useTeamPermissionDefinitions()},([e,t])=>{(0,r.useAdminApp)(t).useProjectPermissionDefinitions()}],"/projects/*/project-permissions":[([e,t])=>{(0,r.useAdminApp)(t).useProjectPermissionDefinitions()},([e,t])=>{(0,r.useAdminApp)(t).useTeamPermissionDefinitions()}],"/projects/*/teams":[([e,t])=>{(0,r.useAdminApp)(t).useTeams({limit:1})}],"/projects/*/teams/*":[([e,t])=>{(0,r.useAdminApp)(t).useTeamPermissionDefinitions()},([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:10})},([e,t,s])=>{let a=(0,r.useAdminApp)(t).useTeam(s);if(a)return[()=>{a.useUsers()}]}],"/projects/*/api-keys":[([e,t])=>{(0,r.useAdminApp)(t).useInternalApiKeys()}],"/projects/*/webhooks":[([e,t])=>{(0,r.useAdminApp)(t).useSvixToken()}],"/projects/*/webhooks/*":[([e,t])=>{(0,r.useAdminApp)(t).useSvixToken()}],"/projects/*/email-drafts":[([e,t])=>{(0,r.useAdminApp)(t).useEmailDrafts()}],"/projects/*/email-drafts/*":[([e,t])=>{(0,r.useAdminApp)(t).useEmailDrafts()},([e,t])=>{(0,r.useAdminApp)(t).useEmailThemes()},([e,t,s])=>{let a=(0,r.useAdminApp)(t),i=a.useEmailDrafts().find(e=>e.id===s);if(i)return[()=>{a.useEmailPreview({themeId:i.themeId,templateTsxSource:i.tsxSource})}]}],"/projects/*/emails":[([e,t])=>{(0,r.useAdminApp)(t).useUsers({limit:10})}],"/projects/*/email-templates":[([e,t])=>{(0,r.useAdminApp)(t).useEmailTemplates()}],"/projects/*/email-templates/*":[([e,t])=>{(0,r.useAdminApp)(t).useEmailTemplates()},([e,t])=>{(0,r.useAdminApp)(t).useEmailThemes()},([e,t,s])=>{let a=(0,r.useAdminApp)(t),i=a.useEmailTemplates().find(e=>e.id===s);if(i)return[()=>{a.useEmailPreview({themeId:i.themeId,templateTsxSource:i.tsxSource})}]}],"/projects/*/email-themes":[([e,t])=>{(0,r.useAdminApp)(t).useProject().useConfig()},([e,t])=>{(0,r.useAdminApp)(t).useEmailThemes()},([e,t])=>{let s=(0,r.useAdminApp)(t);return s.useEmailThemes().map(e=>()=>{s.useEmailPreview({themeId:e.id,templateTsxSource:n})})}],"/projects/*/email-themes/*":[([e,t,s])=>{(0,r.useAdminApp)(t).useEmailTheme(s)},([e,t,s])=>{let a=(0,r.useAdminApp)(t),i=a.useEmailTheme(s);return[()=>{a.useEmailPreview({themeTsxSource:i.tsxSource,templateTsxSource:n})}]}],"/projects/*/project-settings":[([e,t])=>{(0,r.useAdminApp)(t).useProject()},([e,t])=>{(0,r.useAdminApp)(t).useProject().useProductionModeErrors()},()=>{(0,s.useDashboardInternalUser)()}],"/projects/*/payments/**":[([e,t])=>{(0,r.useAdminApp)(t).useStripeAccountInfo()}],"/projects/*/payments/transactions":[([e,t])=>{(0,r.useAdminApp)(t).useTransactions({limit:10})}]},j=(0,d.memo)(function(e){let[r,s]=(0,d.useState)(null);(0,d.useEffect)(()=>{s(new URL(e.href.toString(),window.location.href))},[e.href]);let a=(0,d.useMemo)(()=>r?r.origin!==window.location.origin?[]:Object.entries(v).map(([e,t])=>{var s;let a;return[e,t,(s=r.pathname,(a=function(e){let t=m.get(e);if(t)return t;let r=new RegExp(e);return m.set(e,r),r}(`^${e.replace(/[-/\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*\*/g,"\x01").replace(/\*/g,"([^/]+)").replace(/\u0001/g,"(.*)")}/?$`)).exec(s)||!s.endsWith("/")&&a.exec(`${s}/`))]}).flatMap(([e,t,s])=>s?t.map(e=>()=>e(s,r.searchParams,r.hash)):[]):[],[r]);return r?(0,t.jsx)(A,{callbacks:a},r.toString()):null});e.s(["UrlPrefetcher",0,j],803327)},310563,e=>{"use strict";var t=e.i(648534),r=e.i(485082);let s=new Map([["bold",t.createElement(t.Fragment,null,t.createElement("path",{d:"M140,32V64a12,12,0,0,1-24,0V32a12,12,0,0,1,24,0Zm84,84H192a12,12,0,0,0,0,24h32a12,12,0,0,0,0-24Zm-42.26,48.77a12,12,0,1,0-17,17l22.63,22.63a12,12,0,0,0,17-17ZM128,180a12,12,0,0,0-12,12v32a12,12,0,0,0,24,0V192A12,12,0,0,0,128,180ZM74.26,164.77,51.63,187.4a12,12,0,0,0,17,17l22.63-22.63a12,12,0,1,0-17-17ZM76,128a12,12,0,0,0-12-12H32a12,12,0,0,0,0,24H64A12,12,0,0,0,76,128ZM68.6,51.63a12,12,0,1,0-17,17L74.26,91.23a12,12,0,0,0,17-17Z"}))],["duotone",t.createElement(t.Fragment,null,t.createElement("path",{d:"M224,128a96,96,0,1,1-96-96A96,96,0,0,1,224,128Z",opacity:"0.2"}),t.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"}))],["fill",t.createElement(t.Fragment,null,t.createElement("path",{d:"M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM48,136a8,8,0,0,1,0-16H72a8,8,0,0,1,0,16Zm46.06,37.25-17,17a8,8,0,0,1-11.32-11.32l17-17a8,8,0,0,1,11.31,11.31Zm0-79.19a8,8,0,0,1-11.31,0l-17-17A8,8,0,0,1,77.09,65.77l17,17A8,8,0,0,1,94.06,94.06ZM136,208a8,8,0,0,1-16,0V184a8,8,0,0,1,16,0Zm0-136a8,8,0,0,1-16,0V48a8,8,0,0,1,16,0Zm54.23,118.23a8,8,0,0,1-11.32,0l-17-17a8,8,0,0,1,11.31-11.31l17,17A8,8,0,0,1,190.23,190.23ZM208,136H184a8,8,0,0,1,0-16h24a8,8,0,0,1,0,16Z"}))],["light",t.createElement(t.Fragment,null,t.createElement("path",{d:"M134,32V64a6,6,0,0,1-12,0V32a6,6,0,0,1,12,0Zm90,90H192a6,6,0,0,0,0,12h32a6,6,0,0,0,0-12Zm-46.5,47A6,6,0,0,0,169,177.5l22.63,22.62a6,6,0,0,0,8.48-8.48ZM128,186a6,6,0,0,0-6,6v32a6,6,0,0,0,12,0V192A6,6,0,0,0,128,186ZM78.5,169,55.88,191.64a6,6,0,1,0,8.48,8.48L87,177.5A6,6,0,1,0,78.5,169ZM70,128a6,6,0,0,0-6-6H32a6,6,0,0,0,0,12H64A6,6,0,0,0,70,128ZM64.36,55.88a6,6,0,0,0-8.48,8.48L78.5,87A6,6,0,1,0,87,78.5Z"}))],["regular",t.createElement(t.Fragment,null,t.createElement("path",{d:"M136,32V64a8,8,0,0,1-16,0V32a8,8,0,0,1,16,0Zm88,88H192a8,8,0,0,0,0,16h32a8,8,0,0,0,0-16Zm-45.09,47.6a8,8,0,0,0-11.31,11.31l22.62,22.63a8,8,0,0,0,11.32-11.32ZM128,184a8,8,0,0,0-8,8v32a8,8,0,0,0,16,0V192A8,8,0,0,0,128,184ZM77.09,167.6,54.46,190.22a8,8,0,0,0,11.32,11.32L88.4,178.91A8,8,0,0,0,77.09,167.6ZM72,128a8,8,0,0,0-8-8H32a8,8,0,0,0,0,16H64A8,8,0,0,0,72,128ZM65.78,54.46A8,8,0,0,0,54.46,65.78L77.09,88.4A8,8,0,0,0,88.4,77.09Z"}))],["thin",t.createElement(t.Fragment,null,t.createElement("path",{d:"M132,32V64a4,4,0,0,1-8,0V32a4,4,0,0,1,8,0Zm92,92H192a4,4,0,0,0,0,8h32a4,4,0,0,0,0-8Zm-47.92,46.43a4,4,0,1,0-5.65,5.65l22.62,22.63a4,4,0,0,0,5.66-5.66ZM128,188a4,4,0,0,0-4,4v32a4,4,0,0,0,8,0V192A4,4,0,0,0,128,188ZM79.92,170.43,57.29,193.05A4,4,0,0,0,63,198.71l22.62-22.63a4,4,0,1,0-5.65-5.65ZM68,128a4,4,0,0,0-4-4H32a4,4,0,0,0,0,8H64A4,4,0,0,0,68,128ZM63,57.29A4,4,0,0,0,57.29,63L79.92,85.57a4,4,0,1,0,5.65-5.65Z"}))]]),a=t.forwardRef((e,a)=>t.createElement(r.default,{ref:a,...e,weights:s}));a.displayName="SpinnerGapIcon",e.s(["SpinnerGapIcon",0,a],310563)}]);