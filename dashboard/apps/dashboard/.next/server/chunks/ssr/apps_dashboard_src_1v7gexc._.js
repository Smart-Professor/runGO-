module.exports=[938734,a=>{"use strict";var b=a.i(340139),c=a.i(222451),d=a.i(340260),e=a.i(643599),f=a.i(766850),g=a.i(564581);let h=e.default.forwardRef(({onClick:a,href:e,children:f,prefetch:h,...i},j)=>{let k=(0,g.useRouter)(),{needConfirm:l}=(0,g.useRouterConfirm)();return(0,b.jsxs)(c.default,{ref:j,href:e,prefetch:h,...i,onClick:b=>{l?(b.preventDefault(),a?.(b),k.push(e.toString())):a?.(b)},children:[!1!==h?(0,b.jsx)(d.UrlPrefetcher,{href:e}):null,f]})});h.displayName="Link",a.s(["Link",0,h,"StyledLink",0,function(a){return(0,b.jsx)(h,{...a,className:(0,f.cn)("text-blue-500 underline",a.className),children:a.children})}])},340260,23104,a=>{"use strict";var b=a.i(340139),c=a.i(594585),d=a.i(867388);a.i(370143);var e=a.i(624597),f=a.i(964569);f.deindent`
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
`;let g=f.deindent`
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
`;f.deindent`
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
`;let h=`import { Html, Head, Tailwind, Body, Container, Section } from '@react-email/components';
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
`,i=`import { Html, Head, Tailwind, Body, Container, Section } from '@react-email/components';
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
`,j=`import { Html, Head, Tailwind, Body, Container, Section } from '@react-email/components';
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
`,k="1df07ae6-abf3-4a40-83a5-a1a2cbe336ac";a.s(["DEFAULT_EMAIL_THEMES",0,{[k]:{displayName:"Default Light",tsxSource:h},"a0172b5d-cff0-463b-83bb-85124697373a":{displayName:"Default Dark",tsxSource:i},"c7e2d94f-8a1b-4e6d-b3f5-9d0a2e7c1b8f":{displayName:"Default Colorful",tsxSource:j}},"DEFAULT_EMAIL_THEME_ID",0,k,"previewTemplateSource",0,g],23104);let l=new Map;var m=a.i(643599),n=a.i(767854);a.i(865781);var o=a.i(348089);let p=0,q=(0,m.memo)(function(a){return(0,b.jsx)(b.Fragment,{children:a.callbacks.map((a,c)=>(0,b.jsx)(r,{callback:a},c))})}),r=(0,m.memo)(function({callback:a}){return(0,b.jsx)(o.ErrorBoundary,{errorComponent:u,children:(0,b.jsx)(m.Suspense,{fallback:null,children:(0,b.jsx)(s,{callback:a})})})});function s({callback:a}){p++;try{let c=a();if(c)return(0,b.jsx)(q,{callbacks:c});return null}finally{p--}}function t(a){return(0,m.useEffect)(()=>{},[]),(0,b.jsx)(q,{callbacks:a.callbacks})}function u(a){return(0,m.useEffect)(()=>{(0,n.captureError)("hook-prefetcher",a.error)},[a.error]),null}let v={"/projects/*":[([a,b])=>{(0,c.useAdminApp)(b)[e.hexclaveAppInternalsSymbol].useMetrics(!1)},([a,b])=>{(0,c.useAdminApp)(b).useUsers({limit:1})}],"/projects/*/**":[([a,b])=>{(0,c.useAdminApp)(b).useProject().useConfig()}],"/projects/*/users":[([a,b])=>{(0,c.useAdminApp)(b)[e.hexclaveAppInternalsSymbol].useMetricsUserCounts()},([a,b])=>{(0,c.useAdminApp)(b).useUsers({limit:1})},([a,b])=>{(0,c.useAdminApp)(b).useUsers({limit:10,orderBy:"signedUpAt",desc:!0,includeAnonymous:!1})}],"/projects/*/users/*":[([a,b,d])=>{let e=(0,c.useAdminApp)(b).useUser(d);if(e)return[()=>{e.useContactChannels()},()=>{e.useTeams()},()=>{e.useOAuthProviders()}]}],"/projects/*/team-settings":[([a,b])=>{(0,c.useAdminApp)(b).useTeamPermissionDefinitions()}],"/projects/*/team-permissions":[([a,b])=>{(0,c.useAdminApp)(b).useTeamPermissionDefinitions()},([a,b])=>{(0,c.useAdminApp)(b).useProjectPermissionDefinitions()}],"/projects/*/project-permissions":[([a,b])=>{(0,c.useAdminApp)(b).useProjectPermissionDefinitions()},([a,b])=>{(0,c.useAdminApp)(b).useTeamPermissionDefinitions()}],"/projects/*/teams":[([a,b])=>{(0,c.useAdminApp)(b).useTeams({limit:1})}],"/projects/*/teams/*":[([a,b])=>{(0,c.useAdminApp)(b).useTeamPermissionDefinitions()},([a,b])=>{(0,c.useAdminApp)(b).useUsers({limit:10})},([a,b,d])=>{let e=(0,c.useAdminApp)(b).useTeam(d);if(e)return[()=>{e.useUsers()}]}],"/projects/*/api-keys":[([a,b])=>{(0,c.useAdminApp)(b).useInternalApiKeys()}],"/projects/*/webhooks":[([a,b])=>{(0,c.useAdminApp)(b).useSvixToken()}],"/projects/*/webhooks/*":[([a,b])=>{(0,c.useAdminApp)(b).useSvixToken()}],"/projects/*/email-drafts":[([a,b])=>{(0,c.useAdminApp)(b).useEmailDrafts()}],"/projects/*/email-drafts/*":[([a,b])=>{(0,c.useAdminApp)(b).useEmailDrafts()},([a,b])=>{(0,c.useAdminApp)(b).useEmailThemes()},([a,b,d])=>{let e=(0,c.useAdminApp)(b),f=e.useEmailDrafts().find(a=>a.id===d);if(f)return[()=>{e.useEmailPreview({themeId:f.themeId,templateTsxSource:f.tsxSource})}]}],"/projects/*/emails":[([a,b])=>{(0,c.useAdminApp)(b).useUsers({limit:10})}],"/projects/*/email-templates":[([a,b])=>{(0,c.useAdminApp)(b).useEmailTemplates()}],"/projects/*/email-templates/*":[([a,b])=>{(0,c.useAdminApp)(b).useEmailTemplates()},([a,b])=>{(0,c.useAdminApp)(b).useEmailThemes()},([a,b,d])=>{let e=(0,c.useAdminApp)(b),f=e.useEmailTemplates().find(a=>a.id===d);if(f)return[()=>{e.useEmailPreview({themeId:f.themeId,templateTsxSource:f.tsxSource})}]}],"/projects/*/email-themes":[([a,b])=>{(0,c.useAdminApp)(b).useProject().useConfig()},([a,b])=>{(0,c.useAdminApp)(b).useEmailThemes()},([a,b])=>{let d=(0,c.useAdminApp)(b);return d.useEmailThemes().map(a=>()=>{d.useEmailPreview({themeId:a.id,templateTsxSource:g})})}],"/projects/*/email-themes/*":[([a,b,d])=>{(0,c.useAdminApp)(b).useEmailTheme(d)},([a,b,d])=>{let e=(0,c.useAdminApp)(b),f=e.useEmailTheme(d);return[()=>{e.useEmailPreview({themeTsxSource:f.tsxSource,templateTsxSource:g})}]}],"/projects/*/project-settings":[([a,b])=>{(0,c.useAdminApp)(b).useProject()},([a,b])=>{(0,c.useAdminApp)(b).useProject().useProductionModeErrors()},()=>{(0,d.useDashboardInternalUser)()}],"/projects/*/payments/**":[([a,b])=>{(0,c.useAdminApp)(b).useStripeAccountInfo()}],"/projects/*/payments/transactions":[([a,b])=>{(0,c.useAdminApp)(b).useTransactions({limit:10})}]},w=(0,m.memo)(function(a){let[c,d]=(0,m.useState)(null);(0,m.useEffect)(()=>{d(new URL(a.href.toString(),window.location.href))},[a.href]);let e=(0,m.useMemo)(()=>c?c.origin!==window.location.origin?[]:Object.entries(v).map(([a,b])=>{var d;let e;return[a,b,(d=c.pathname,(e=function(a){let b=l.get(a);if(b)return b;let c=new RegExp(a);return l.set(a,c),c}(`^${a.replace(/[-/\\^$+?.()|[\]{}]/g,"\\$&").replace(/\*\*/g,"\x01").replace(/\*/g,"([^/]+)").replace(/\u0001/g,"(.*)")}/?$`)).exec(d)||!d.endsWith("/")&&e.exec(`${d}/`))]}).flatMap(([a,b,d])=>d?b.map(a=>()=>a(d,c.searchParams,c.hash)):[]):[],[c]);return c?(0,b.jsx)(t,{callbacks:e},c.toString()):null});a.s(["UrlPrefetcher",0,w],340260)}];

//# sourceMappingURL=apps_dashboard_src_1v7gexc._.js.map