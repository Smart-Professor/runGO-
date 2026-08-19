(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,23345,e=>{"use strict";var t=e.i(180712),i=e.i(409579),n=e.i(585731),r=e.i(337327),s=e.i(838497),a=e.i(48057);let l=(0,n.componentWrapper)("PacificaSurface",({children:e,className:t,...n},r)=>(0,i.jsxs)("div",{ref:r,"data-pacifica-children-flex-grow":!0,className:(0,a.cn)("relative flex flex-col stretch min-h-0",t),...n,children:[(0,i.jsx)("div",{className:"absolute inset-0 rounded-[inherit]",style:{zIndex:-9999999},inert:!0,"data-pacifica-surface":!0}),e]})),o=(0,n.componentWrapper)("PacificaCard",({className:e,title:t,subtitle:n,header:a,footer:o,children:d,innerProps:c,...u},h)=>{let f=(t||n||a||o)&&(0,i.jsxs)(i.Fragment,{children:[a,t&&(0,i.jsx)("h3",{ref:h,className:(0,s.cn)("font-semibold leading-none tracking-tight capitalize",e),children:t}),n&&(0,i.jsx)("h4",{ref:h,className:(0,s.cn)("text-sm text-muted-foreground",e),children:n})]});return(0,i.jsx)(l,{ref:h,className:(0,s.cn)("rounded-xl",e),...(0,r.filterUndefined)(u),children:(0,i.jsxs)("div",{className:"p-6 overflow-y-auto rounded-[inherit] grow-1","data-pacifica-border":!0,children:[f&&(0,i.jsx)("div",{className:"flex flex-col space-y-0.5 pb-4",children:f}),(0,i.jsx)("div",{...c,children:d})]})})});o.displayName="PacificaCard",(0,n.forwardRefIfNeeded)(({className:e,...t},n)=>(0,i.jsx)("div",{ref:n,className:(0,s.cn)("flex flex-col space-y-1.5 p-6 pb-0",e),...t})).displayName="PacificaCardHeader",(0,n.forwardRefIfNeeded)(({className:e,...t},n)=>(0,i.jsx)("h3",{ref:n,className:(0,s.cn)("font-semibold leading-none tracking-tight capitalize",e),...t})).displayName="PacificaCardTitle",(0,n.forwardRefIfNeeded)(({className:e,...t},n)=>(0,i.jsx)("p",{ref:n,className:(0,s.cn)("text-sm text-muted-foreground",e),...t})).displayName="PacificaCardDescription",(0,n.forwardRefIfNeeded)(({className:e,...t},n)=>(0,i.jsx)("div",{ref:n,className:(0,s.cn)("p-6",e),...t})).displayName="PacificaCardContent",(0,n.forwardRefIfNeeded)(({className:e,...t},n)=>(0,i.jsx)("h4",{ref:n,className:(0,s.cn)("text-sm text-muted-foreground font-bold",e),...t})),(0,n.forwardRefIfNeeded)(({className:e,...t},n)=>(0,i.jsx)("div",{ref:n,className:(0,s.cn)("flex items-center p-6 pt-0",e),...t})).displayName="PacificaCardFooter",e.i(403150);var d=e.i(468759),c=e.i(624306),u=e.i(32693),h=e.i(419328),f=e.i(879499),g=e.i(909390),p=e.i(733600),m=e.i(62505),w=e.i(75930),y=e.i(7254),v=e.i(368886),b=e.i(477466),x=e.i(821358),E=e.i(902345),_=e.i(42327);let S=null==E.version&&null!=E.default?E.default:E;globalThis.self??=globalThis;let k=null;function j(){let e=`https://unpkg.com/esbuild-wasm@${S.version}/esbuild.wasm`;return null==k&&(k=(0,_.withTraceSpan)("initializeEsbuild",async()=>{try{let t;t=(0,y.isBrowserLike)()?{wasmURL:e}:{wasmModule:await (0,b.createGlobalAsync)("esbuildWasmModule",async()=>{let t=await fetch(e);if(!t.ok)throw new m.HexclaveAssertionError(`Failed to fetch esbuild.wasm: ${t.status} ${t.statusText}: ${await t.text()}`);let i=await t.arrayBuffer(),n=new Uint8Array(i);if(0!==n[0]||97!==n[1]||115!==n[2]||109!==n[3])throw new m.HexclaveAssertionError(`Invalid esbuild.wasm file: ${new TextDecoder().decode(n)}`);return new WebAssembly.Module(i)}),worker:!1};try{await S.initialize(t)}catch(e){if(e instanceof Error&&'Cannot call "initialize" more than once'===e.message);else throw e}}catch(e){throw k=null,new m.HexclaveAssertionError("Failed to initialize ESBuild",{cause:e})}})(),(0,v.ignoreUnhandledRejection)(k)),k}async function R(e,t={}){let i;await j();let n=new Map(Object.entries(e)),r=new Map(Object.entries(t.externalPackages??{})),s=t.keepAsImports??[],a=new Map,l=new Map([["tsx","tsx"],["ts","ts"],["js","js"],["jsx","jsx"],["json","json"],["css","css"]]);try{i=await (0,_.traceSpan)("bundleJavaScript",async()=>await S.build({entryPoints:["/entry.js"],bundle:!0,write:!1,format:t.format??"iife",platform:"browser",target:"es2015",jsx:"automatic",sourcemap:t.sourcemap??"inline",external:s,plugins:[...t.allowHttpImports?[{name:"esm-sh-only",setup(e){e.onResolve({filter:/.*/},e=>{let t=e.path.startsWith("http://")||e.path.startsWith("https://"),i="esm-sh"===e.namespace;if(!t&&!i)return null;let n=new URL(e.path,i?e.importer:void 0);if("https:"!==n.protocol||"esm.sh"!==n.host)throw Error(`Blocked non-esm.sh URL import: ${n.href}`);return{path:n.href,namespace:"esm-sh"}}),e.onLoad({filter:/.*/,namespace:"esm-sh"},async e=>{if(a.has(e.path))return a.get(e.path);let t=await fetch(e.path,{redirect:"follow"});if(!t.ok)throw Error(`Fetch ${t.status} ${t.statusText} for ${e.path}`);let i=new URL(t.url);if("esm.sh"!==i.host)throw Error(`Redirect escaped esm.sh: ${i.href}`);let n=(t.headers.get("content-type")||"").toLowerCase(),r=n.includes("css")?"css":n.includes("json")?"json":n.includes("typescript")?"ts":n.includes("jsx")?"jsx":n.includes("tsx")?"tsx":"js",s=i.pathname;s.endsWith(".css")?r="css":s.endsWith(".json")?r="json":s.endsWith(".ts")?r="ts":s.endsWith(".tsx")?r="tsx":s.endsWith(".jsx")&&(r="jsx");let l={contents:await t.text(),loader:r,resolveDir:new URL(".",i.href).toString(),watchFiles:[i.href]};return a.set(e.path,l),l})}}]:[],{name:"replace-packages-with-globals",setup(e){e.onResolve({filter:/.*/},e=>{if(!s.includes(e.path)&&r.has(e.path))return{path:e.path,namespace:"package-shim"}}),e.onLoad({filter:/.*/,namespace:"package-shim"},e=>{let t=r.get(e.path);if(null==t)throw new m.HexclaveAssertionError(`esbuild requested file ${e.path} that is not in the virtual file system`);return{contents:t,loader:"ts"}})}},{name:"virtual-fs",setup(e){e.onResolve({filter:/.*/},e=>{let t=(0,w.join)("/",e.path);if(n.has(t))return{path:t,namespace:"virtual"}}),e.onLoad({filter:/.*/,namespace:"virtual"},e=>{let t=n.get(e.path);if(null==t)throw new m.HexclaveAssertionError(`esbuild requested file ${e.path} that is not in the virtual file system`);let i=e.path.split(".").pop()??"";return{contents:t,loader:l.get(i)??(0,m.throwErr)(`esbuild requested file ${e.path} with unknown extension ${i}`)}})}}]}))}catch(e){if(e instanceof Error&&e.message.startsWith("Build failed with "))return x.Result.error(e.message);throw e}return i.errors.length>0?x.Result.error(i.errors.map(e=>e.text).join("\n")):i.outputFiles.length>0?x.Result.ok(i.outputFiles[0].text):(0,m.throwErr)("No output generated??")}void 0!==t.default&&"function"==typeof t.default.exit&&"development"===(0,y.getProcessEnv)("NODE_ENV")&&(0,v.runAsynchronously)(async()=>{try{await j()}catch(e){(0,m.captureError)("initialize-esbuild-in-dev",e)}});var $=e.i(657274),I=e.i(506170),T=e.i(175084),A=e.i(222277),C=e.i(648534),H=e.i(491990),N=e.i(96493);let M={React:C.default,jsxRuntime:i,Card:o,Button:d.Button,Input:u.Input};async function U(e){return await R({"/source.tsx":e,"/entry.js":`
      import * as widget from "./source.tsx";
      __STACK_WIDGET_RESOLVE(widget);
    `},{format:"iife",externalPackages:{react:"module.exports = React;","react/jsx-runtime":"module.exports = jsxRuntime;"}})}async function O(e){let t=await U(e);return{id:(0,T.generateUuid)(),version:1,sourceJs:e,compilationResult:t}}let D=null;function P(e,t){return{id:e,MainComponent:()=>(0,i.jsx)(o,{style:{inset:"0",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,i.jsx)("div",{style:{fontSize:"16px",fontWeight:"bold",color:"red",fontFamily:"monospace",whiteSpace:"pre-wrap"},children:t})}),defaultSettings:null,defaultState:null}}async function W(e){if("ok"===e.compilationResult.status){let t,i=Object.entries(M),n=i.map(([e])=>e),r=i.map(([e,t])=>t),s=e.compilationResult.data;try{t=await new Promise(e=>Function(...n,"__STACK_WIDGET_RESOLVE",s)(...r,e))}catch(i){let t;return t=`Widget failed to run: ${(0,m.errorToNiceString)(i)}`,P(e.id,t)}let a=Object.entries(z).filter(([e,t])=>"never"!==t).map(([e])=>e),l=Object.entries(z).filter(([e,t])=>"required"===t).map(([e])=>e),o=Object.keys(t),d=o.filter(e=>!a.includes(e));if(d.length>0){let t;return t=`Widget has invalid exports: ${d.join(", ")}. Only these exports are allowed: ${Object.entries(z).filter(([e,t])=>"required"===t).map(([e])=>e).join(", ")}`,P(e.id,t)}let c=l.filter(e=>!o.includes(e));if(c.length>0){let t;return t=`Widget is missing required exports: ${c.join(", ")}`,P(e.id,t)}return t.id=e.id,t}{let t,i=e.compilationResult.error;return t=`Widget failed to compile: ${i}`,P(e.id,t)}}let z={id:"never",MainComponent:"required",SettingsComponent:"optional",defaultSettings:"required",defaultState:"required",calculateMinSize:"optional",hasSubGrid:"optional",isHeightVariable:"optional"};function V(e){return{id:(0,T.generateUuid)(),widget:e,settingsOrUndefined:void 0,stateOrUndefined:void 0}}function L(e){return{id:e.id,widgetId:e.widget.id,...void 0===e.settingsOrUndefined?{}:{settingsOrUndefined:e.settingsOrUndefined},...void 0===e.stateOrUndefined?{}:{stateOrUndefined:e.stateOrUndefined}}}function F(e,t){if("object"!=typeof t||null===t)throw new m.HexclaveAssertionError("Serialized widget instance is not an object!",{serialized:t});if("string"!=typeof t.id)throw new m.HexclaveAssertionError("Serialized widget instance id is not a string!",{serialized:t});return{id:t.id,widget:e.find(e=>e.id===t.widgetId)??P(t.id,`Widget ${t.widgetId} not found. Was it deleted?`),settingsOrUndefined:t.settingsOrUndefined,stateOrUndefined:t.stateOrUndefined}}function B(e){return void 0===e.settingsOrUndefined?e.widget.defaultSettings:e.settingsOrUndefined}function G(e){return void 0===e.stateOrUndefined?e.widget.defaultState:e.stateOrUndefined}class J{_nonEmptyElements;_varHeights;width;_fixedHeight;static DEFAULT_ELEMENT_WIDTH=12;static DEFAULT_ELEMENT_HEIGHT=8;static MIN_ELEMENT_WIDTH=4;static MIN_ELEMENT_HEIGHT=2;constructor(e,t,i,n){this._nonEmptyElements=e,this._varHeights=t,this.width=i,this._fixedHeight=n,this._elementsCache=null,this._as2dArrayCache=null,this._clampResizeCache=new Map,this._canAddVarHeightCache=new Map;const r=new Set,s=e=>{if(r.has(e.id))throw new m.HexclaveAssertionError(`Widget instance ${e.id} is duplicated!`,{instance:e});r.add(e.id);let t=B(e),i=G(e);if(!(0,$.isJsonSerializable)(t))throw new m.HexclaveAssertionError("Settings must be JSON serializable",{instance:e,settings:t});if(!(0,$.isJsonSerializable)(i))throw new m.HexclaveAssertionError("State must be JSON serializable",{instance:e,state:i})};for(const e of this._nonEmptyElements){if(null===e.instance)throw new m.HexclaveAssertionError("Non-empty element instance is null!",{element:e});if(e.width<J.MIN_ELEMENT_WIDTH)throw new m.HexclaveAssertionError(`Width must be at least ${J.MIN_ELEMENT_WIDTH}`,{width:e.width,element:e});if(e.height<J.MIN_ELEMENT_HEIGHT)throw new m.HexclaveAssertionError(`Height must be at least ${J.MIN_ELEMENT_HEIGHT}`,{height:e.height,element:e});if(e.x+e.width>i)throw new m.HexclaveAssertionError(`Element ${e.instance.id} is out of bounds: ${e.x+e.width} > ${i}`,{width:i,element:e});if("auto"!==this._fixedHeight&&e.y+e.height>this._fixedHeight)throw new m.HexclaveAssertionError(`Element ${e.instance.id} is out of bounds: ${e.y+e.height} > ${this._fixedHeight}`,{height:this._fixedHeight,element:e});if(e.instance.widget.isHeightVariable)throw new m.HexclaveAssertionError(`Element ${e.instance.id} is passed in as a grid element, but has a variable height!`,{element:e});s(e.instance)}for(const[e,t]of this._varHeights){if(0===t.length)throw new m.HexclaveAssertionError(`No variable height widgets found at y = ${e}!`,{varHeights:this._varHeights});for(const e of t)s(e)}}static fromSingleWidgetInstance(e){return J.fromWidgetInstances([e],{width:J.DEFAULT_ELEMENT_WIDTH,height:J.DEFAULT_ELEMENT_HEIGHT})}static fromWidgetInstances(e,t={}){let i=t.width??24,n=t.height??"auto",r=e.filter(e=>!e.widget.isHeightVariable).map((e,t)=>({instance:e,x:t*J.DEFAULT_ELEMENT_WIDTH%i,y:Math.floor(t/Math.floor(i/J.DEFAULT_ELEMENT_WIDTH))*J.DEFAULT_ELEMENT_HEIGHT,width:J.DEFAULT_ELEMENT_WIDTH,height:J.DEFAULT_ELEMENT_HEIGHT})).sort((e,t)=>Math.sign(e.x-t.x)+.1*Math.sign(e.y-t.y)),s=e.filter(e=>e.widget.isHeightVariable);return new J(r,new Map(0===s.length?[]:[[0,s]]),i,n)}serialize(){let e={className:"WidgetInstanceGrid",version:1,width:this.width,fixedHeight:this._fixedHeight,nonEmptyElements:this._nonEmptyElements.map(e=>({instance:e.instance?L(e.instance):null,x:e.x,y:e.y,width:e.width,height:e.height})),varHeights:[...this._varHeights.entries()].map(([e,t])=>({y:e,instances:t.map(L)}))},t=JSON.parse(JSON.stringify(e));if(!(0,r.deepPlainEquals)(t,e))throw new m.HexclaveAssertionError("WidgetInstanceGrid serialization is not JSON-serializable!",{beforeJsonSerialization:e,afterJsonSerialization:t});return e}static fromSerialized(e){if("object"!=typeof e||null===e)throw new m.HexclaveAssertionError("WidgetInstanceGrid serialization is not an object or is null!",{serialized:e});if(!("className"in e)||"string"!=typeof e.className||"WidgetInstanceGrid"!==e.className)throw new m.HexclaveAssertionError("WidgetInstanceGrid serialization is not a WidgetInstanceGrid!",{serialized:e});if(1===e.version)return new J(e.nonEmptyElements.map(e=>({instance:e.instance?F(q,e.instance):null,x:e.x,y:e.y,width:e.width,height:e.height})),new Map(e.varHeights.map(e=>[e.y,e.instances.map(e=>F(q,e))])),e.width,e.fixedHeight);throw new m.HexclaveAssertionError(`Unknown WidgetInstanceGrid version ${e.version}!`,{serialized:e})}get height(){return"auto"===this._fixedHeight?Math.max(0,...[...this._nonEmptyElements].map(({y:e,height:t})=>e+t))+J.DEFAULT_ELEMENT_HEIGHT:this._fixedHeight}static _withEmptyElements(e,t,i){let n=[...i],r=e.map((e,t)=>[...e]);for(let i=0;i<e.length;i++)for(let s=0;s<e[i].length;s++)if(null===r[i][s]){let a=i+1;for(;a<e.length&&a-i<J.DEFAULT_ELEMENT_WIDTH&&null===r[a][s];)a++;let l=s+1;e:for(;l<e[i].length&&l-s<J.DEFAULT_ELEMENT_HEIGHT&&!t.has(l);){for(let e=i;e<a;e++)if(null!==r[e][l])break e;l++}n.push({x:i,y:s,width:a-i,height:l-s,instance:null});for(let e=i;e<a;e++)for(let t=s;t<l;t++)r[e][t]="empty"}return n}_elementsCache;elements(){return null===this._elementsCache&&(this._elementsCache=J._withEmptyElements(this.as2dArray(),this._varHeights,this._nonEmptyElements)),this._elementsCache}varHeights(){return this._varHeights}_as2dArrayCache;as2dArray(){if(null!==this._as2dArrayCache)return this._as2dArrayCache;let e=Array(this.width).fill(null).map(()=>Array(this.height).fill(null));return[...this._nonEmptyElements].forEach(({x:t,y:i,width:n,height:r,instance:s})=>{if(t+n>this.width)throw new m.HexclaveAssertionError(`Widget instance ${s?.id} is out of bounds: ${t+n} > ${this.width}`);for(let a=0;a<n;a++)for(let n=0;n<r;n++)e[t+a][i+n]=s}),this._as2dArrayCache=e}getElementAt(e,t){if(e<0||e>=this.width||t<0||t>=this.height)throw new m.HexclaveAssertionError(`Invalid coordinates for getElementAt: ${e}, ${t}`);return[...this.elements()].find(i=>e>=i.x&&e<i.x+i.width&&t>=i.y&&t<i.y+i.height)??(0,m.throwErr)(`No element found at ${e}, ${t}`)}getElementByInstanceId(e){return[...this.elements()].find(t=>t.instance?.id===e)??null}getInstanceById(e){let t=this.getElementByInstanceId(e);if(t?.instance)return t.instance;let i=this.getVarHeightInstanceById(e);return i||null}getMinResizableSize(){return{width:Math.max(1,...[...this._nonEmptyElements].map(({x:e,width:t})=>e+t)),height:Math.max(1,...[...this._nonEmptyElements].map(({y:e,height:t})=>e+t))}}resize(e,t){if(this.width===e&&this._fixedHeight===t)return this;let i=this.getMinResizableSize();if(e<i.width)throw new m.HexclaveAssertionError(`Width must be at least ${i.width}`,{width:e});if("auto"!==t&&t<i.height)throw new m.HexclaveAssertionError(`Height must be at least ${i.height}`,{height:t});return new J(this._nonEmptyElements,this._varHeights,e,t)}elementMinSize(e){let t={width:J.MIN_ELEMENT_WIDTH,height:J.MIN_ELEMENT_HEIGHT};if(e.instance?.widget.calculateMinSize){let i=e.instance.widget.calculateMinSize({settings:e.instance.settingsOrUndefined,state:e.instance.stateOrUndefined});if(i.widthInGridUnits>e.width||i.heightInGridUnits>e.height)throw new m.HexclaveAssertionError(`Widget ${e.instance.widget.id} has a size of ${e.width}x${e.height}, but calculateMinSize returned a smaller value (${i.widthInGridUnits}x${i.heightInGridUnits}).`);t.width=Math.max(t.width,i.widthInGridUnits),t.height=Math.max(t.height,i.heightInGridUnits)}return t}_canFitSize(e,t,i,n,r){if(t<0||t+n>this.width||i<0||i+r>this.height)return!1;let s=this.elementMinSize(e);return!(n<s.width)&&!(r<s.height)}canSwap(e,t,i,n){let r=[this.getElementAt(e,t),this.getElementAt(i,n)];return(null===r[0].instance||this._canFitSize(r[0],r[1].x,r[1].y,r[1].width,r[1].height))&&(null===r[1].instance||this._canFitSize(r[1],r[0].x,r[0].y,r[0].width,r[0].height))}withSwappedElements(e,t,i,n){if(!this.canSwap(e,t,i,n))throw new m.HexclaveAssertionError(`Cannot swap elements at ${e}, ${t} and ${i}, ${n}`);let r=[this.getElementAt(e,t),this.getElementAt(i,n)];return new J([...this.elements()].map(e=>e.x===r[0].x&&e.y===r[0].y?{...e,instance:r[1].instance}:e.x===r[1].x&&e.y===r[1].y?{...e,instance:r[0].instance}:e).filter(e=>null!==e.instance),this._varHeights,this.width,this._fixedHeight)}_clampResizeCache;clampElementResize(e,t,i){let n=this.getElementAt(e,t),s=`${n.x},${n.y},${JSON.stringify(i)}`;if(!this._clampResizeCache.has(s)){let a=this.as2dArray(),l=n.x+i.left,o=n.y+i.top,d=n.width-i.left+i.right,c=n.height-i.top+i.bottom,u=this.elementMinSize(n),h=!1;if(d>=u.width&&c>=u.height&&l>=0&&o>=0&&l+d<=this.width&&o+c<=this.height){h=!0;e:for(let e=0;e<d;e++)for(let t=0;t<c;t++)if(null!==a[l+e][o+t]&&a[l+e][o+t]!==n.instance){h=!1;break e}}if(h)this._clampResizeCache.set(s,i);else{let n=e=>e>0?e-1:e<0?e+1:e,a=[0!==i.top?this.clampElementResize(e,t,{...i,top:n(i.top)}):null,0!==i.left?this.clampElementResize(e,t,{...i,left:n(i.left)}):null,0!==i.bottom?this.clampElementResize(e,t,{...i,bottom:n(i.bottom)}):null,0!==i.right?this.clampElementResize(e,t,{...i,right:n(i.right)}):null].filter(r.isNotNull),l=0,o={top:0,left:0,bottom:0,right:0};for(let e of a){let t=Math.abs(e.top)+Math.abs(e.left)+Math.abs(e.bottom)+Math.abs(e.right);t>l&&(l=t,o=e)}this._clampResizeCache.set(s,o)}}return this._clampResizeCache.get(s)}withResizedElement(e,t,i){let n=this.clampElementResize(e,t,i);if(!(0,r.deepPlainEquals)(n,i))throw new m.HexclaveAssertionError(`Resize is not allowed: ${JSON.stringify(i)} requested, but only ${JSON.stringify(n)} allowed`);if(0===n.top&&0===n.left&&0===n.bottom&&0===n.right)return this;let s=this.getElementAt(e,t);return new J([...this._nonEmptyElements].map(e=>e.x===s.x&&e.y===s.y?{...e,x:e.x+n.left,y:e.y+n.top,width:e.width-n.left+n.right,height:e.height-n.top+n.bottom}:e),this._varHeights,this.width,this._fixedHeight)}withAddedElement(e,t,i,n,r){return new J([...this._nonEmptyElements,{instance:V(e),x:t,y:i,width:n,height:r}],this._varHeights,this.width,this._fixedHeight)}_withUpdatedElementInstance(e,t,i){let n=this.getElementAt(e,t);return new J(this._nonEmptyElements.map(e=>e.x===n.x&&e.y===n.y?{...e,instance:i(e)}:e).filter(e=>null!==e.instance),this._varHeights,this.width,this._fixedHeight)}withRemovedElement(e,t){return this._withUpdatedElementInstance(e,t,e=>null)}withUpdatedElementSettings(e,t,i){if(!(0,$.isJsonSerializable)(i))throw new m.HexclaveAssertionError(`New settings are not JSON serializable: ${JSON.stringify(i)}`,{newSettings:i});return this._withUpdatedElementInstance(e,t,n=>n.instance?{...n.instance,settingsOrUndefined:i}:(0,m.throwErr)(`No widget instance at ${e}, ${t}`))}withUpdatedElementState(e,t,i){if(!(0,$.isJsonSerializable)(i))throw new m.HexclaveAssertionError(`New state are not JSON serializable: ${JSON.stringify(i)}`,{newState:i});return this._withUpdatedElementInstance(e,t,n=>n.instance?{...n.instance,stateOrUndefined:i}:(0,m.throwErr)(`No widget instance at ${e}, ${t}`))}getVarHeightInstanceById(e){return[...this.varHeights()].flatMap(([e,t])=>t).find(t=>t.id===e)}_withUpdatedVarHeightInstance(e,t){let i=new Map([...this.varHeights()].map(([i,n])=>[i,n.map(i=>i.id===e?t(i):i)]));return new J(this._nonEmptyElements,i,this.width,this._fixedHeight)}withUpdatedVarHeightSettings(e,t){return this._withUpdatedVarHeightInstance(e,e=>({...e,settingsOrUndefined:t}))}withUpdatedVarHeightState(e,t){return this._withUpdatedVarHeightInstance(e,e=>({...e,stateOrUndefined:t}))}withRemovedVarHeight(e){let t=new Map([...this.varHeights()].map(([t,i])=>[t,i.filter(t=>t.id!==e)]).filter(([e,t])=>t.length>0));return new J(this._nonEmptyElements,t,this.width,this._fixedHeight)}_canAddVarHeightCache;canAddVarHeight(e){if(this._canAddVarHeightCache.has(e))return this._canAddVarHeightCache.get(e);let t=!0;for(let i of this.elements())if(i.y<e&&i.y+i.height>e){t=!1;break}return this._canAddVarHeightCache.set(e,t),t}withAddedVarHeightWidget(e,t){return this.withAddedVarHeightAtEndOf(e,V(t))}withAddedVarHeightAtEndOf(e,t){if(!this.canAddVarHeight(e))throw new m.HexclaveAssertionError(`Cannot add var height instance at ${e}`,{y:e,instance:t});let i=new Map(this._varHeights);return i.set(e,[...i.get(e)??[],t]),new J(this._nonEmptyElements,i,this.width,this._fixedHeight)}withAddedVarHeightAtInstance(e,t,i){let n=new Map([...this.varHeights()].map(([n,r])=>[n,r.flatMap(n=>n.id===t?"before"===i?[e,n]:[n,e]:[n])]));return new J(this._nonEmptyElements,n,this.width,this._fixedHeight)}withMovedVarHeightToInstance(e,t,i){if(t===e)return this;let n=this.getVarHeightInstanceById(e)??(0,m.throwErr)(`Widget instance ${e} not found in var heights`,{oldId:e});return this.withRemovedVarHeight(e).withAddedVarHeightAtInstance(n,t,i)}withMovedVarHeightToEndOf(e,t){let i=this.getVarHeightInstanceById(e)??(0,m.throwErr)(`Widget instance ${e} not found in var heights`,{oldId:e});return this.withRemovedVarHeight(e).withAddedVarHeightAtEndOf(t,i)}}let q=[{id:"$sub-grid",MainComponent:({widthInGridUnits:e,heightInGridUnits:t,stateRef:r,isSingleColumnMode:s})=>{let a=(0,n.mapRefState)(r,e=>J.fromSerialized(e.serializedGrid),(e,t)=>({...e,serializedGrid:t.serialize()})),[l]=(0,C.useState)("#"+Math.floor(0xffffff*Math.random()).toString(16)+"22");return(0,C.useEffect)(()=>{let i=a.current.resize(e-1,t-1);i!==a.current&&a.set(i)},[e,t,a]),(0,i.jsx)("div",{style:{backgroundColor:l,padding:"16px"},children:(0,i.jsx)(X,{isSingleColumnMode:!!s&&"auto",gridRef:a,allowVariableHeight:!1,isStatic:!1})})},defaultSettings:{},defaultState:{serializedGrid:J.fromWidgetInstances([],{width:1,height:1}).serialize()},hasSubGrid:!0,calculateMinSize(e){let t=J.fromSerialized(e.state.serializedGrid).getMinResizableSize();return{widthInGridUnits:Math.max(t.width,J.MIN_ELEMENT_WIDTH)+1,heightInGridUnits:Math.max(t.height,J.MIN_ELEMENT_HEIGHT)+1}}},{id:"$compile-widget",MainComponent:()=>{let[e,t]=(0,C.useState)(I.deindent`
        export function MainComponent(props) {
          return <Card>Hello, {props.settings.name}!</Card>;
        }

        // export function SettingsComponent(props) {
        //   return <div>Name: <Input value={props.settings.name} onChange={(e) => props.setSettings((settings) => ({ ...settings, name: e.target.value }))} /></div>;
        // }

        export const defaultSettings = {name: "world"};
      `),[n,r]=(0,C.useState)(null);return(0,i.jsxs)(o,{title:"Widget compiler",subtitle:"This is a subtitle",children:[(0,i.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),style:{width:"100%",height:"35%",fontFamily:"monospace"}}),(0,i.jsx)(d.Button,{onClick:async()=>{r(await U(e))},children:"Compile"}),n?.status==="ok"&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("textarea",{style:{fontFamily:"monospace",width:"100%",height:"35%"},value:n.data,readOnly:!0}),(0,i.jsx)(d.Button,{onClick:async()=>{q.push(await W({id:(0,T.generateUuid)(),version:1,sourceJs:n.data,compilationResult:x.Result.ok(n.data)})),alert("Widget saved")},children:"Save as widget"})]}),n?.status==="error"&&(0,i.jsx)("div",{style:{color:"red"},children:n.error})]})},defaultSettings:{},defaultState:{}},{id:"$variable-height-widget",MainComponent:()=>(0,i.jsx)(o,{title:"Variable height widget",subtitle:"This widget has a variable height. It does not follow the regular grid pattern, and always takes up the grid's full width.",children:(0,i.jsx)("textarea",{value:"resize me",readOnly:!0})}),defaultSettings:{},defaultState:{},isHeightVariable:!0},{id:"$widget-builder",MainComponent:()=>{let[e,t]=(0,C.useState)(I.deindent`
        export function MainComponent(props) {
          return <Card>
            Hello, {props.settings.name}!
            You are <input value={props.state.value} onChange={(e) => props.setState((state) => ({ ...state, value: e.target.value }))} /> years old.
          </Card>;
        }

        export function SettingsComponent(props) {
          return <div>Name: <Input value={props.settings.name} onChange={(e) => props.setSettings((settings) => ({ ...settings, name: e.target.value }))} /></div>;
        }

        export const defaultSettings = {name: "world"};
        export const defaultState = {value: 1};
      `),r=function(e){let[t,i]=(0,C.useState)(x.AsyncResult.pending());return(0,C.useEffect)(()=>{let t=!1;return(0,v.runAsynchronously)(async()=>{for(i(x.AsyncResult.pending());D;){if(t)return;await D}D=(async()=>{let n=await O(e);if(t||("error"===n.compilationResult.status&&await (0,v.wait)(500),t))return;let r=await W(n);t||i(x.AsyncResult.ok(r))})(),await D,D=null}),()=>{t=!0}},[e]),t}(e),s="ok"===r.status?r.data:null,[a,l]=(0,C.useState)(s),d=(0,n.useRefState)(null);return(0,C.useEffect)(()=>{a!==s&&(s&&d.set(V(s)),l(s))},[s]),(0,i.jsxs)(o,{title:"Widget builder",children:[(0,i.jsx)("textarea",{value:e,onChange:e=>t(e.target.value),style:{width:"100%",height:"35%",fontFamily:"monospace"}}),d.current&&(0,i.jsx)(Y,{widgetInstanceRef:d})]})},defaultSettings:{},defaultState:{},hasSubGrid:!0}];function Y(e){let t=(0,n.mapRefState)(e.widgetInstanceRef,e=>J.fromSingleWidgetInstance(e),(e,t)=>t.getInstanceById(e.id)??e);return(0,i.jsx)(X,{gridRef:t,isSingleColumnMode:!0,allowVariableHeight:!0,isStatic:!0})}let K=C.default.createContext({isEditing:!1});function X(e){let[t,s]=(0,C.useState)(null),[a,l]=(0,C.useState)(null),[o,d]=(0,C.useState)(null),[c,u]=(0,C.useState)(null),[h,w]=(0,C.useState)(null),[y,v]=(0,C.useState)(null),b=(0,C.useRef)(null),x=C.default.use(K),[E,_]=(0,C.useState)(!1);(0,g.default)(b,(e,t)=>{let i=e.contentRect.width<768;E!==i&&_(i)});let S="auto"===e.isSingleColumnMode?E:e.isSingleColumnMode,k=!1,j=e.gridRef.current.varHeights();return(0,i.jsxs)("div",{ref:b,style:{...S?{display:"flex",flexDirection:"column"}:{display:"grid",gridTemplateColumns:`repeat(${e.gridRef.current.width}, 1fr)`,gridTemplateRows:`repeat(${2*e.gridRef.current.height+1}, auto)`},userSelect:"none",WebkitUserSelect:"none",overflow:"none",isolation:"isolate"},children:[!S&&(0,p.range)(e.gridRef.current.height).map(t=>(0,i.jsx)("div",{style:{height:48,gridColumn:`1 / ${e.gridRef.current.width+1}`,gridRow:`${2*t+2} / ${2*t+3}`}},t)),(0,i.jsx)(f.DndContext,{onDragStart:e=>{v(e.active.id),s("var-height")},onDragAbort:()=>{v(null),u(null),s(null)},onDragCancel:()=>{v(null),u(null),s(null)},onDragEnd:t=>{v(null),u(null),s(null);let i=t.active.id;if(t.over){let n=JSON.parse(`${t.over.id}`);"before"===n[0]?e.gridRef.set(e.gridRef.current.withMovedVarHeightToInstance(i,n[1],n[0])):e.gridRef.set(e.gridRef.current.withMovedVarHeightToEndOf(i,n[1]))}},onDragOver:e=>{let t=e.over;t?u(JSON.parse(`${t.id}`)):u(null)},collisionDetection:f.closestCenter,children:(0,p.range)(e.gridRef.current.height+1).map(t=>(0,i.jsx)("div",{style:{gridColumn:"1 / -1",gridRow:`${2*t+1} / ${2*t+2}`,display:"flex",flexDirection:"column"},children:[...j.get(t)??[],null].map((s,a)=>{if(null!==s&&!e.allowVariableHeight)throw new m.HexclaveAssertionError("Variable height widgets are not allowed in this component",{instance:s});let l=s?["before",s.id]:["end-of",t],o=(0,r.deepPlainEquals)(c,l);return(0,i.jsxs)(C.default.Fragment,{children:[e.gridRef.current.canAddVarHeight(t)&&(0,i.jsx)("div",{className:"relative",children:(0,i.jsx)(Q,{isOver:o,location:l})}),null!==s&&(0,i.jsx)("div",{style:{margin:16},children:(0,i.jsx)(ee,{isStatic:e.isStatic,type:"var-height",widgetInstance:s,activeWidgetId:y,isEditing:x.isEditing,isSingleColumnMode:S,onDeleteWidget:async()=>{e.gridRef.set(e.gridRef.current.withRemovedVarHeight(s.id))},settings:B(s),setSettings:async t=>{e.gridRef.set(e.gridRef.current.withUpdatedVarHeightSettings(s.id,t))},stateRef:(0,n.mapRefState)(e.gridRef,e=>G(e.getVarHeightInstanceById(s.id)??s),(t,i)=>e.gridRef.current.withUpdatedVarHeightState(s.id,i)),onResize:e=>{throw new m.HexclaveAssertionError("Cannot resize a var-height widget!")},x:0,y:t,width:e.gridRef.current.width,height:1,calculateUnitSize:()=>({width:Math.round(((b.current?.getBoundingClientRect()??(0,m.throwErr)("Grid container not found")).width-(e.gridRef.current.width-1)*32)/e.gridRef.current.width)+32,height:48})})})]},a)})},t))}),(0,i.jsx)(f.DndContext,{onDragStart:e=>{v(e.active.id),s("element"),l(e.activatorEvent.target.getBoundingClientRect())},onDragAbort:()=>{w(null),v(null),d(null),s(null),l(null)},onDragCancel:()=>{w(null),v(null),d(null),s(null),l(null)},onDragEnd:t=>{w(null),v(null),d(null),s(null),l(null);let i=t.active.id,n=[...e.gridRef.current.elements()].find(({instance:e})=>e?.id===i);if(!n)throw new m.HexclaveAssertionError(`Widget instance ${i} not found in grid`);if(t.over){let i=JSON.parse(`${t.over.id}`),r=[n.x,n.y,i[0],i[1]];if(e.gridRef.current.canSwap(...r)){let t=e.gridRef.current.withSwappedElements(...r);e.gridRef.set(t)}else alert("Cannot swap elements; make sure the new locations are big enough for the widgets")}},onDragOver:t=>{let i=t.active.id,n=[...e.gridRef.current.elements()].find(({instance:e})=>e?.id===i);if(!n)throw new m.HexclaveAssertionError(`Widget instance ${i} not found in grid`);if(t.over){if(t.active.rect.current.initial){let r=JSON.parse(`${t.over.id}`);e.gridRef.current.canSwap(n.x,n.y,r[0],r[1])?d([r[0],r[1]]):d(null);let s=e.gridRef.current.getElementAt(r[0],r[1]).instance?.id;s&&s!==i?w([s,[t.over.rect.left-a.left,t.over.rect.top-a.top,a.width,a.height,t.over.rect.width,t.over.rect.height]]):w(null)}}else d(null),w(null)},collisionDetection:f.pointerWithin,children:e.gridRef.current.elements().map(({instance:t,x:r,y:s,width:a,height:l})=>{let d=!!h&&!!t&&h[0]===t.id;if(S&&!t){if(k)return null;k=!0}return(0,i.jsx)(Z,{isSingleColumnMode:S,isEmpty:!t,isOver:o?.[0]===r&&o[1]===s,x:r,y:s,width:a,height:l,grid:e.gridRef.current,onAddWidget:()=>{let t=e.allowVariableHeight?q:q.filter(e=>!e.isHeightVariable),i=t[Math.floor(Math.random()*t.length)];i.isHeightVariable?e.gridRef.set(e.gridRef.current.withAddedVarHeightWidget(0,i)):e.gridRef.set(e.gridRef.current.withAddedElement(i,r,s,a,l))},children:t&&(0,i.jsx)(ee,{isStatic:e.isStatic,type:"element",widgetInstance:t,activeWidgetId:y,isEditing:x.isEditing,style:{transform:d?`translate(${-h[1][0]}px, ${-h[1][1]}px)`:void 0,minWidth:d?`${h[1][2]}px`:h&&y===t.id?`${h[1][4]}px`:void 0,minHeight:d?`${h[1][3]}px`:h&&y===t.id?`${h[1][5]}px`:void 0},isSingleColumnMode:S,onDeleteWidget:async()=>{e.gridRef.set(e.gridRef.current.withRemovedElement(r,s))},settings:B(t),setSettings:async t=>{e.gridRef.set(e.gridRef.current.withUpdatedElementSettings(r,s,t))},stateRef:(0,n.mapRefState)(e.gridRef,e=>{let i=e.getElementByInstanceId(t.id);return G(i?.instance??t)},(e,t)=>e.withUpdatedElementState(r,s,t)),onResize:t=>{let i=e.gridRef.current.clampElementResize(r,s,t);return e.gridRef.set(e.gridRef.current.withResizedElement(r,s,i)),i},x:r,y:s,width:a,height:l,calculateUnitSize:()=>({width:Math.round(((b.current?.getBoundingClientRect()??(0,m.throwErr)("Grid container not found")).width-(e.gridRef.current.width-1)*32)/e.gridRef.current.width)+32,height:48})})},t?.id??JSON.stringify({x:r,y:s}))})})]})}function Q(e){let{setNodeRef:t,active:n}=(0,f.useDroppable)({id:JSON.stringify(e.location)});return(0,i.jsx)("div",{inert:!0,ref:t,style:{position:"absolute",width:"100%",height:4,transform:"translateY(-50%)",backgroundColor:e.isOver?"#0000ff88":"transparent"}})}function Z(e){let{setNodeRef:t,active:n}=(0,f.useDroppable)({id:JSON.stringify([e.x,e.y])}),r=e.isEmpty&&e.width>=J.MIN_ELEMENT_WIDTH&&e.height>=J.MIN_ELEMENT_HEIGHT;return(0,i.jsxs)("div",{ref:t,style:{position:"relative",display:"flex",minWidth:0,backgroundColor:e.isOver?"#88888822":void 0,borderRadius:"8px",gridColumn:`${e.x+1} / span ${e.width}`,gridRow:`${2*e.y+2} / span ${2*e.height-1}`,margin:16,minHeight:e.isSingleColumnMode?384:void 0,...e.style},children:[(0,i.jsx)("style",{children:`
        @keyframes stack-animation-fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
    `}),r&&(0,i.jsx)(i.Fragment,{children:(0,i.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",border:"8px dotted #88888822",borderRadius:"16px",animation:"stack-animation-fade-in 400ms 50ms ease forwards",opacity:0},children:(0,i.jsx)(et,{icon:(0,i.jsx)(H.FaPlus,{size:24,opacity:.7}),onClick:()=>{e.onAddWidget()}})})}),e.children]})}function ee(e){let[t,n]=(0,C.useState)(!1),[a,l]=(0,C.useState)(e.settings),[o,u]=(0,C.useState)(0),[g,p]=(0,C.useState)(!1),[w,y]=(0,C.useState)(!1),b=e.isEditing&&!w,[x,E]=(0,C.useState)(null),_=(0,C.useCallback)(t=>{t?(E(null),l(e.settings),n(!0)):(E(x?{...x,revert:!0}:null),n(!1),u(e=>e+1),setTimeout(()=>u(e=>e-1),1e3))},[x,e.settings]),{attributes:S,listeners:k,setNodeRef:j,transform:R,isDragging:$,node:I}=(0,f.useDraggable)({id:e.widgetInstance.id,disabled:!b||e.isStatic}),T=(0,C.useRef)(null);(0,C.useEffect)(()=>{e.isEditing||y(!1)},[e.isEditing]);let N=!e.isSingleColumnMode&&"element"===e.type;(0,C.useEffect)(()=>{let e=!1;return t&&!x&&(0,v.runAsynchronouslyWithAlert)(async()=>{if(!I.current)throw new m.HexclaveAssertionError("Draggable container not found",{draggableContainerRef:I});for(let t=0;t<100;t++){if(e)return;if(T.current)break;await (0,v.wait)(10+3*t)}if(!T.current)throw new m.HexclaveAssertionError("Dialog ref not found even after waiting",{dialogRef:T});if(e)return;let t=I.current.getBoundingClientRect(),i=T.current.getBoundingClientRect(),n=[t.x+t.width/2,t.y+t.height/2],r=[i.x+i.width/2,i.y+i.height/2];E({translate:[n[0]-r[0],n[1]-r[1]],scale:[t.width/i.width,t.height/i.height],shouldStart:!1,revert:!1})}),()=>{e=!0}},[t,x,I]),(0,C.useEffect)(()=>{let e=!1;return x&&!x.shouldStart&&requestAnimationFrame(()=>{(0,v.runAsynchronously)(async()=>{e||E({...x,shouldStart:!0})})}),()=>{e=!0}},[x]);let M=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("style",{children:`
        /* note: Chrome and Safari have different behaviors when it comes to whether backface-visibility and/or transform-style is inherited by children, so we ensure it works with the style tag above + transformStyle */
        .stack-recursive-backface-hidden {
          backface-visibility: hidden;
          ${M?"":"transform-style: preserve-3d;"}
        }
        .stack-recursive-backface-hidden * {
          backface-visibility: hidden;
        }
      `}),(0,i.jsx)("div",{ref:j,className:"stack-recursive-backface-hidden",style:{position:"relative",minWidth:"100%",minHeight:"100%",display:"flex",zIndex:$?1e5:1,transition:["border-width 0.1s ease","box-shadow 0.1s ease",e.activeWidgetId!==e.widgetInstance.id&&null!==e.activeWidgetId?"transform 0.2s ease, min-width 0.2s ease, min-height 0.2s ease":void 0,e.activeWidgetId===e.widgetInstance.id?"min-width 0.2s ease, min-height 0.2s ease":void 0].filter(Boolean).join(", "),...(0,r.filterUndefined)(e.style??{}),transform:`translate3d(${R?.x??0}px, ${R?.y??0}px, 0) ${e.style?.transform??""}`},children:(0,i.jsxs)("div",{className:(0,s.cn)($&&"bg-white dark:bg-black border-black/20 dark:border-white/20"),style:{...N?{position:"absolute",inset:0}:{position:"relative",width:"100%",height:"100%"},overflow:"hidden",flexGrow:1,alignSelf:"stretch",boxShadow:b?"0 0 32px 0 #8882":"0 0 0 0 transparent",cursor:$?"grabbing":void 0,borderRadius:"8px",borderWidth:b&&!$?"1px":"0px",borderStyle:"solid",transition:g?"transform 0.3s ease, opacity 0.3s":"transform 0.6s ease",transform:[x?.shouldStart&&!x.revert?`
                translate(${-x.translate[0]}px, ${-x.translate[1]}px)
                scale(${1/x.scale[0]}, ${1/x.scale[1]})
                rotateY(180deg)
              `:"rotateY(0deg)",g?"scale(0.8)":""].filter(Boolean).join(" "),opacity:+!g,display:"flex",flexDirection:"row"},children:[(0,i.jsx)("div",{"data-pacifica-children-flex-grow":!0,"data-pacifica-children-min-width-0":!0,style:{flexGrow:1,display:"flex",flexDirection:"row"},children:(0,i.jsx)(K.Provider,{value:{isEditing:w},children:(0,i.jsx)(A.ErrorBoundary,{errorComponent:e=>(0,i.jsxs)("div",{className:"text-red-500 text-sm p-2 bg-red-500/10 font-mono whitespace-pre-wrap",children:["A runtime error occured while rendering this widget.",(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("button",{className:"text-blue-500 hover:underline",onClick:()=>{e.reset()},children:"Reload widget"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,m.errorToNiceString)(e.error)]}),children:(0,i.jsx)(e.widgetInstance.widget.MainComponent,{settings:B(e.widgetInstance),isSingleColumnMode:e.isSingleColumnMode,state:e.stateRef.current,stateRef:e.stateRef,setState:t=>e.stateRef.set(t(e.stateRef.current)),widthInGridUnits:e.width,heightInGridUnits:e.height})})})}),(0,i.jsx)("div",{inert:!0,style:{position:"absolute",inset:0,opacity:+!!b,transition:"opacity 0.2s ease",backgroundImage:g?void 0:"radial-gradient(circle at top, #ffffff08, #ffffff02), radial-gradient(circle at top right,  #ffffff04, transparent, transparent)",borderRadius:"inherit"}}),(0,i.jsx)("div",{inert:!0,className:(0,s.cn)(b&&!$&&"bg-white/50 dark:bg-black/50"),style:{position:"absolute",inset:0,backdropFilter:b&&!$?"drop-shadow(0 0 2px) blur(4px)":"none",borderRadius:"inherit"}}),!$&&(0,i.jsxs)("div",{style:{opacity:+!!b,transition:"opacity 0.2s ease"},inert:!b,children:[(0,i.jsxs)("div",{className:"",style:{position:"absolute",inset:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,i.jsx)("div",{...k,...S,style:{cursor:b?"move":void 0,position:"absolute",inset:0}}),e.widgetInstance.widget.hasSubGrid&&(0,i.jsx)(et,{icon:(0,i.jsx)(H.FaBorderNone,{size:24}),loadingStyle:"disabled",onClick:async()=>{y(!0)}}),(0,i.jsx)(h.SimpleTooltip,{tooltip:e.widgetInstance.widget.SettingsComponent?void 0:"This widget doesn't have any settings.",children:(0,i.jsx)(et,{disabled:!e.widgetInstance.widget.SettingsComponent,icon:(0,i.jsx)(H.FaPen,{size:24}),onClick:async()=>{_(!0)}})}),(0,i.jsx)(et,{icon:(0,i.jsx)(H.FaTrash,{size:24}),loadingStyle:"disabled",onClick:async()=>{p(!0);try{await (0,v.wait)(300),await e.onDeleteWidget()}catch(e){throw p(!1),e}}})]}),!e.isStatic&&N&&[-1,0,1].flatMap(t=>[-1,0,1].map(n=>(0!==t||0!==n)&&(0,i.jsx)(ei,{widgetInstance:e.widgetInstance,x:t,y:n,onResize:e.onResize,calculateUnitSize:e.calculateUnitSize},`${t},${n}`)))]})]})}),e.widgetInstance.widget.SettingsComponent&&(0,i.jsx)(c.Dialog,{open:t||o>0,onOpenChange:_,children:(0,i.jsxs)(c.DialogContent,{ref:T,overlayProps:{style:{opacity:x?.shouldStart&&!x.revert?1:0,transition:"opacity 0.4s ease",animation:"none"}},style:{transform:["translate(-50%, -50%)",!x?"":x.shouldStart&&!x.revert?"rotateY(0deg)":`
                    translate(${x.translate[0]}px, ${x.translate[1]}px)
                    scale(${x.scale[0]}, ${x.scale[1]})
                    rotateY(180deg)
                  `].filter(Boolean).join(" "),transition:x?.shouldStart?"transform 0.6s ease":"none",visibility:x?"visible":"hidden",animation:"none"},inert:!t,onInteractOutside:e=>e.preventDefault(),className:"[&>button]:hidden stack-recursive-backface-hidden",children:[(0,i.jsx)(c.DialogHeader,{children:(0,i.jsx)(c.DialogTitle,{className:"flex items-center",children:"Edit Widget"})}),(0,i.jsx)(c.DialogBody,{className:"pb-2",children:(0,i.jsx)(e.widgetInstance.widget.SettingsComponent,{settings:a,setSettings:l})}),(0,i.jsxs)(c.DialogFooter,{className:"gap-2",children:[(0,i.jsx)(d.Button,{variant:"secondary",color:"neutral",onClick:async()=>{_(!1)},children:"Cancel"}),(0,i.jsx)(d.Button,{variant:"default",onClick:async()=>{await e.setSettings(a),_(!1)},children:"Save"})]})]})})]})}function et({icon:e,children:t,...n}){return(0,i.jsxs)(d.Button,{variant:"outline",className:(0,s.cn)("h-20 w-20 p-1 rounded-full backdrop-blur-md bg-slate-200/20 dark:bg-black/20"),...n,children:[e,t]})}function ei({widgetInstance:e,x:t,y:r,...s}){let a=(0,n.useRefState)(null);if(![-1,0,1].includes(t)||![-1,0,1].includes(r))throw new m.HexclaveAssertionError(`Invalid resize handle coordinates, must be -1, 0, or 1: ${t}, ${r}`);let l=0!==t&&0!==r;(0,C.useEffect)(()=>{let e=e=>{if(!a.current)return;let i=[e.clientX-a.current[0],e.clientY-a.current[1]],{width:n,height:s}=d.current(),l=[Math.round(i[0]/n),Math.round(i[1]/s)];if(0!==l[0]||0!==l[1]){let e=o.current({top:-1===r?l[1]:0,left:-1===t?l[0]:0,bottom:1===r?l[1]:0,right:1===t?l[0]:0});a.set([a.current[0]+(e.left+e.right)*n,a.current[1]+(e.top+e.bottom)*s])}};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[t,r,s.onResize,s.calculateUnitSize,a]);let o=(0,C.useRef)(s.onResize);o.current=s.onResize;let d=(0,C.useRef)(s.calculateUnitSize);return d.current=s.calculateUnitSize,(0,i.jsx)("div",{className:"border-black dark:border-white",style:{position:"absolute",zIndex:100,left:-1===t?"-3px":0===t?"50%":void 0,top:-1===r?"-3px":0===r?"50%":void 0,right:1===t?"-3px":void 0,bottom:1===r?"-3px":void 0,transform:`translate(${0===t?"-50%":0}, ${0===r?"-50%":0})`,width:"36px",height:"36px",opacity:.8,borderWidth:"6px",borderTopStyle:-1===r?"solid":"none",borderRightStyle:1===t?"solid":"none",borderBottomStyle:1===r?"solid":"none",borderLeftStyle:-1===t?"solid":"none",borderTopLeftRadius:-1===t&&-1===r?"16px":void 0,borderTopRightRadius:1===t&&-1===r?"16px":void 0,borderBottomLeftRadius:-1===t&&1===r?"16px":void 0,borderBottomRightRadius:1===t&&1===r?"16px":void 0,cursor:l?t===r?"nwse-resize":"nesw-resize":0===t?"ns-resize":"ew-resize"},onMouseDown:e=>(a.set([e.clientX,e.clientY]),window.addEventListener("mouseup",()=>{a.set(null)},{once:!0}),e.preventDefault(),e.stopPropagation(),!1)})}e.s(["createWidgetInstance",0,V,"default",0,function(){let e=(0,n.useRefState)(J.fromWidgetInstances(q.map((e,t)=>V(e)))),[t,r]=(0,C.useState)(!1);return(0,C.useEffect)(()=>{let e=e=>{"Alt"===e.key&&r(!0)},t=e=>{"Alt"===e.key&&r(!1)};return window.addEventListener("keydown",e),window.addEventListener("keyup",t),()=>{window.removeEventListener("keydown",e),window.removeEventListener("keyup",t)}},[]),(0,i.jsx)(N.PageLayout,{title:"Widget Playground",fillWidth:!0,children:(0,i.jsx)(K.Provider,{value:{isEditing:t},children:(0,i.jsx)(X,{gridRef:e,isSingleColumnMode:"auto",allowVariableHeight:!0,isStatic:!1})})})},"deserializeWidgetInstance",0,F,"getSettings",0,B,"getState",0,G,"serializeWidgetInstance",0,L],23345)},902345,(e,t,i)=>{var n=e.i(612620);(e=>{"use strict";var t,i,r,s,a,l,o=Object.defineProperty,d=Object.getOwnPropertyDescriptor,c=Object.getOwnPropertyNames,u=Object.prototype.hasOwnProperty,h=(e,t,i)=>new Promise((n,r)=>{var s=e=>{try{l(i.next(e))}catch(e){r(e)}},a=e=>{try{l(i.throw(e))}catch(e){r(e)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,a);l((i=i.apply(e,t)).next())}),f={},g={analyzeMetafile:()=>el,analyzeMetafileSync:()=>eu,build:()=>en,buildSync:()=>eo,context:()=>er,default:()=>em,formatMessages:()=>ea,formatMessagesSync:()=>ec,initialize:()=>eg,stop:()=>eh,transform:()=>es,transformSync:()=>ed,version:()=>ei};for(var p in g)o(f,p,{get:g[p],enumerable:!0});function m(e){let i=e=>{if(null===e)n.write8(0);else if("boolean"==typeof e)n.write8(1),n.write8(+e);else if("number"==typeof e)n.write8(2),n.write32(0|e);else if("string"==typeof e)n.write8(3),n.write(t(e));else if(e instanceof Uint8Array)n.write8(4),n.write(e);else if(e instanceof Array)for(let t of(n.write8(5),n.write32(e.length),e))i(t);else{let r=Object.keys(e);for(let s of(n.write8(6),n.write32(r.length),r))n.write(t(s)),i(e[s])}},n=new w;return n.write32(0),n.write32(e.id<<1|!e.isRequest),i(e.value),v(n.buf,n.len-4,0),n.buf.subarray(0,n.len)}e.exports=((e,t,i)=>{if(t&&"object"==typeof t||"function"==typeof t)for(let n of c(t))u.call(e,n)||void 0===n||o(e,n,{get:()=>t[n],enumerable:!(i=d(t,n))||i.enumerable});return e})(o({},"__esModule",{value:!0}),f);var w=class{constructor(e=new Uint8Array(1024)){this.buf=e,this.len=0,this.ptr=0}_write(e){if(this.len+e>this.buf.length){let t=new Uint8Array((this.len+e)*2);t.set(this.buf),this.buf=t}return this.len+=e,this.len-e}write8(e){let t=this._write(1);this.buf[t]=e}write32(e){let t=this._write(4);v(this.buf,e,t)}write(e){let t=this._write(4+e.length);v(this.buf,e.length,t),this.buf.set(e,t+4)}_read(e){if(this.ptr+e>this.buf.length)throw Error("Invalid packet");return this.ptr+=e,this.ptr-e}read8(){return this.buf[this._read(1)]}read32(){return y(this.buf,this._read(4))}read(){let e=this.read32(),t=new Uint8Array(e),i=this._read(t.length);return t.set(this.buf.subarray(i,i+e)),t}};if("u">typeof TextEncoder&&"u">typeof TextDecoder){let e=new TextEncoder,n=new TextDecoder;t=t=>e.encode(t),i=e=>n.decode(e),r='new TextEncoder().encode("")'}else if(void 0!==n.Buffer)t=e=>n.Buffer.from(e),i=e=>{let{buffer:t,byteOffset:i,byteLength:r}=e;return n.Buffer.from(t,i,r).toString()},r='Buffer.from("")';else throw Error("No UTF-8 codec found");if(!(t("")instanceof Uint8Array))throw Error(`Invariant violation: "${r} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function y(e,t){return e[t++]|e[t++]<<8|e[t++]<<16|e[t++]<<24}function v(e,t,i){e[i++]=t,e[i++]=t>>8,e[i++]=t>>16,e[i++]=t>>24}var b=JSON.stringify,x="warning",E="silent";function _(e){if(F(e,"target"),e.indexOf(",")>=0)throw Error(`Invalid target: ${e}`);return e}var S=()=>null,k=e=>"boolean"==typeof e?null:"a boolean",j=e=>"string"==typeof e?null:"a string",R=e=>e instanceof RegExp?null:"a RegExp object",$=e=>"number"==typeof e&&e===(0|e)?null:"an integer",I=e=>"function"==typeof e?null:"a function",T=e=>Array.isArray(e)?null:"an array",A=e=>"object"!=typeof e||null===e||Array.isArray(e)?"an object":null,C=e=>"object"==typeof e&&null!==e?null:"an array or an object",H=e=>e instanceof WebAssembly.Module?null:"a WebAssembly.Module",N=e=>"object"!=typeof e||Array.isArray(e)?"an object or null":null,M=e=>"string"==typeof e||"boolean"==typeof e?null:"a string or a boolean",U=e=>"string"!=typeof e&&("object"!=typeof e||null===e||Array.isArray(e))?"a string or an object":null,O=e=>"string"==typeof e||Array.isArray(e)?null:"a string or an array",D=e=>"string"==typeof e||e instanceof Uint8Array?null:"a string or a Uint8Array",P=e=>"string"==typeof e||e instanceof URL?null:"a string or a URL";function W(e,t,i,n){let r=e[i];if(t[i+""]=!0,void 0===r)return;let s=n(r);if(null!==s)throw Error(`${b(i)} must be ${s}`);return r}function z(e,t,i){for(let n in e)if(!(n in t))throw Error(`Invalid option ${i}: ${b(n)}`)}function V(e){let t;if(void 0!==e)for(let i in t=Object.create(null),e){let n=e[i];if("string"==typeof n||!1===n)t[i]=n;else throw Error(`Expected ${b(i)} in mangle cache to map to either a string or false`)}return t}function L(e,t,i,n,r){let s=W(t,i,"color",k),a=W(t,i,"logLevel",j),l=W(t,i,"logLimit",$);void 0!==s?e.push(`--color=${s}`):n&&e.push("--color=true"),e.push(`--log-level=${a||r}`),e.push(`--log-limit=${l||0}`)}function F(e,t,i){if("string"!=typeof e)throw Error(`Expected value for ${t}${void 0!==i?" "+b(i):""} to be a string, got ${typeof e} instead`);return e}function B(e,t,i){let n=W(t,i,"legalComments",j),r=W(t,i,"sourceRoot",j),s=W(t,i,"sourcesContent",k),a=W(t,i,"target",O),l=W(t,i,"format",j),o=W(t,i,"globalName",j),d=W(t,i,"mangleProps",R),c=W(t,i,"reserveProps",R),u=W(t,i,"mangleQuoted",k),h=W(t,i,"minify",k),f=W(t,i,"minifySyntax",k),g=W(t,i,"minifyWhitespace",k),p=W(t,i,"minifyIdentifiers",k),m=W(t,i,"lineLimit",$),w=W(t,i,"drop",T),y=W(t,i,"dropLabels",T),v=W(t,i,"charset",j),x=W(t,i,"treeShaking",k),E=W(t,i,"ignoreAnnotations",k),S=W(t,i,"jsx",j),I=W(t,i,"jsxFactory",j),C=W(t,i,"jsxFragment",j),H=W(t,i,"jsxImportSource",j),N=W(t,i,"jsxDev",k),M=W(t,i,"jsxSideEffects",k),D=W(t,i,"define",A),P=W(t,i,"logOverride",A),z=W(t,i,"supported",A),V=W(t,i,"pure",T),L=W(t,i,"keepNames",k),B=W(t,i,"platform",j),G=W(t,i,"tsconfigRaw",U);if(n&&e.push(`--legal-comments=${n}`),void 0!==r&&e.push(`--source-root=${r}`),void 0!==s&&e.push(`--sources-content=${s}`),a&&(Array.isArray(a)?e.push(`--target=${Array.from(a).map(_).join(",")}`):e.push(`--target=${_(a)}`)),l&&e.push(`--format=${l}`),o&&e.push(`--global-name=${o}`),B&&e.push(`--platform=${B}`),G&&e.push(`--tsconfig-raw=${"string"==typeof G?G:JSON.stringify(G)}`),h&&e.push("--minify"),f&&e.push("--minify-syntax"),g&&e.push("--minify-whitespace"),p&&e.push("--minify-identifiers"),m&&e.push(`--line-limit=${m}`),v&&e.push(`--charset=${v}`),void 0!==x&&e.push(`--tree-shaking=${x}`),E&&e.push("--ignore-annotations"),w)for(let t of w)e.push(`--drop:${F(t,"drop")}`);if(y&&e.push(`--drop-labels=${Array.from(y).map(e=>F(e,"dropLabels")).join(",")}`),d&&e.push(`--mangle-props=${d.source}`),c&&e.push(`--reserve-props=${c.source}`),void 0!==u&&e.push(`--mangle-quoted=${u}`),S&&e.push(`--jsx=${S}`),I&&e.push(`--jsx-factory=${I}`),C&&e.push(`--jsx-fragment=${C}`),H&&e.push(`--jsx-import-source=${H}`),N&&e.push("--jsx-dev"),M&&e.push("--jsx-side-effects"),D)for(let t in D){if(t.indexOf("=")>=0)throw Error(`Invalid define: ${t}`);e.push(`--define:${t}=${F(D[t],"define",t)}`)}if(P)for(let t in P){if(t.indexOf("=")>=0)throw Error(`Invalid log override: ${t}`);e.push(`--log-override:${t}=${F(P[t],"log override",t)}`)}if(z)for(let t in z){if(t.indexOf("=")>=0)throw Error(`Invalid supported: ${t}`);let i=z[t];if("boolean"!=typeof i)throw Error(`Expected value for supported ${b(t)} to be a boolean, got ${typeof i} instead`);e.push(`--supported:${t}=${i}`)}if(V)for(let t of V)e.push(`--pure:${F(t,"pure")}`);L&&e.push("--keep-names")}function G(){let e=new Map,t=0;return{load:t=>e.get(t),store(i){if(void 0===i)return -1;let n=t++;return e.set(n,i),n}}}function J(e,t,i){let n,r=!1;return()=>{if(r)return n;r=!0;try{let r=(e.stack+"").split("\n");r.splice(1,1);let s=Y(t,r,i);if(s)return n={text:e.message,location:s}}catch(e){}}}function q(e,t,i,n,r){let s="Internal error",a=null;try{s=(e&&e.message||e)+""}catch(e){}try{a=Y(t,(e.stack+"").split("\n"),"")}catch(e){}return{id:"",pluginName:r,text:s,location:a,notes:n?[n]:[],detail:i?i.store(e):-1}}function Y(e,i,n){let r="    at ";if(e.readFileSync&&!i[0].startsWith(r)&&i[1].startsWith(r))for(let s=1;s<i.length;s++){let a=i[s];if(a.startsWith(r))for(a=a.slice(r.length);;){let r=/^(?:new |async )?\S+ \((.*)\)$/.exec(a);if(r||(r=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(a))){a=r[1];continue}if(r=/^(\S+):(\d+):(\d+)$/.exec(a)){let s;try{s=e.readFileSync(r[1],"utf8")}catch(e){break}let a=s.split(/\r\n|\r|\n|\u2028|\u2029/)[r[2]-1]||"",l=r[3]-1,o=a.slice(l,l+n.length)===n?n.length:0;return{file:r[1],namespace:"file",line:+r[2],column:t(a.slice(0,l)).length,length:t(a.slice(l,l+o)).length,lineText:a+"\n"+i.slice(1).join("\n"),suggestion:""}}break}}return null}function K(e,t,i){let n=Error(e+=t.length<1?"":` with ${t.length} error${t.length<2?"":"s"}:`+t.slice(0,6).map((e,t)=>{if(5===t)return"\n...";if(!e.location)return`
error: ${e.text}`;let{file:i,line:n,column:r}=e.location,s=e.pluginName?`[plugin: ${e.pluginName}] `:"";return`
${i}:${n}:${r}: ERROR: ${s}${e.text}`}).join(""));for(let[e,r]of[["errors",t],["warnings",i]])Object.defineProperty(n,e,{configurable:!0,enumerable:!0,get:()=>r,set:t=>Object.defineProperty(n,e,{configurable:!0,enumerable:!0,value:t})});return n}function X(e,t){for(let i of e)i.detail=t.load(i.detail);return e}function Q(e,t,i){if(null==e)return null;let n={},r=W(e,n,"file",j),s=W(e,n,"namespace",j),a=W(e,n,"line",$),l=W(e,n,"column",$),o=W(e,n,"length",$),d=W(e,n,"lineText",j),c=W(e,n,"suggestion",j);if(z(e,n,t),d){let e=d.slice(0,(l&&l>0?l:0)+(o&&o>0?o:0)+(i&&i>0?i:80));/[\x7F-\uFFFF]/.test(e)||/\n/.test(d)||(d=e)}return{file:r||"",namespace:s||"",line:a||0,column:l||0,length:o||0,lineText:d||"",suggestion:c||""}}function Z(e,t,i,n,r){let s=[],a=0;for(let l of e){let e={},o=W(l,e,"id",j),d=W(l,e,"pluginName",j),c=W(l,e,"text",j),u=W(l,e,"location",N),h=W(l,e,"notes",T),f=W(l,e,"detail",S),g=`in element ${a} of "${t}"`;z(l,e,g);let p=[];if(h)for(let e of h){let t={},i=W(e,t,"text",j),n=W(e,t,"location",N);z(e,t,g),p.push({text:i||"",location:Q(n,g,r)})}s.push({id:o||"",pluginName:d||n,text:c||"",location:Q(u,g,r),notes:p,detail:i?i.store(f):-1}),a++}return s}function ee(e,t){let i=[];for(let n of e){if("string"!=typeof n)throw Error(`${b(t)} must be an array of strings`);i.push(n)}return i}function et({path:e,contents:t,hash:n}){let r=null;return{path:e,contents:t,hash:n,get text(){let e=this.contents;return(null===r||e!==t)&&(t=e,r=i(e)),r}}}var ei="0.20.2",en=e=>ef().build(e),er=e=>ef().context(e),es=(e,t)=>ef().transform(e,t),ea=(e,t)=>ef().formatMessages(e,t),el=(e,t)=>ef().analyzeMetafile(e,t),eo=()=>{throw Error('The "buildSync" API only works in node')},ed=()=>{throw Error('The "transformSync" API only works in node')},ec=()=>{throw Error('The "formatMessagesSync" API only works in node')},eu=()=>{throw Error('The "analyzeMetafileSync" API only works in node')},eh=()=>(a&&a(),Promise.resolve()),ef=()=>{if(l)return l;if(s)throw Error('You need to wait for the promise returned from "initialize" to be resolved before calling this');throw Error('You need to call "initialize" before calling this')},eg=e=>{var t;let i,n,r,a;n=W(t=e||{},i=Object.create(null),"wasmURL",P),r=W(t,i,"wasmModule",H),a=W(t,i,"worker",k),z(t,i,"in initialize() call");let l=(e={wasmURL:n,wasmModule:r,worker:a}).wasmURL,o=e.wasmModule,d=!1!==e.worker;if(!l&&!o)throw Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(s)throw Error('Cannot call "initialize" more than once');return(s=ep(l||"",o,d)).catch(()=>{s=void 0}),s},ep=(e,n,r)=>h(void 0,null,function*(){let o,d,c;if(r){let e=new Blob([`onmessage=((postMessage) => {
      // Copyright 2018 The Go Authors. All rights reserved.
      // Use of this source code is governed by a BSD-style
      // license that can be found in the LICENSE file.
      var __async = (__this, __arguments, generator) => {
        return new Promise((resolve, reject) => {
          var fulfilled = (value) => {
            try {
              step(generator.next(value));
            } catch (e) {
              reject(e);
            }
          };
          var rejected = (value) => {
            try {
              step(generator.throw(value));
            } catch (e) {
              reject(e);
            }
          };
          var step = (x) => x.done ? resolve(x.value) : Promise.resolve(x.value).then(fulfilled, rejected);
          step((generator = generator.apply(__this, __arguments)).next());
        });
      };
      let onmessage;
      let globalThis = {};
      for (let o = self; o; o = Object.getPrototypeOf(o))
        for (let k of Object.getOwnPropertyNames(o))
          if (!(k in globalThis))
            Object.defineProperty(globalThis, k, { get: () => self[k] });
      "use strict";
      (() => {
        const enosys = () => {
          const err = new Error("not implemented");
          err.code = "ENOSYS";
          return err;
        };
        if (!globalThis.fs) {
          let outputBuf = "";
          globalThis.fs = {
            constants: { O_WRONLY: -1, O_RDWR: -1, O_CREAT: -1, O_TRUNC: -1, O_APPEND: -1, O_EXCL: -1 },
            // unused
            writeSync(fd, buf) {
              outputBuf += decoder.decode(buf);
              const nl = outputBuf.lastIndexOf("\\n");
              if (nl != -1) {
                console.log(outputBuf.substring(0, nl));
                outputBuf = outputBuf.substring(nl + 1);
              }
              return buf.length;
            },
            write(fd, buf, offset, length, position, callback) {
              if (offset !== 0 || length !== buf.length || position !== null) {
                callback(enosys());
                return;
              }
              const n = this.writeSync(fd, buf);
              callback(null, n);
            },
            chmod(path, mode, callback) {
              callback(enosys());
            },
            chown(path, uid, gid, callback) {
              callback(enosys());
            },
            close(fd, callback) {
              callback(enosys());
            },
            fchmod(fd, mode, callback) {
              callback(enosys());
            },
            fchown(fd, uid, gid, callback) {
              callback(enosys());
            },
            fstat(fd, callback) {
              callback(enosys());
            },
            fsync(fd, callback) {
              callback(null);
            },
            ftruncate(fd, length, callback) {
              callback(enosys());
            },
            lchown(path, uid, gid, callback) {
              callback(enosys());
            },
            link(path, link, callback) {
              callback(enosys());
            },
            lstat(path, callback) {
              callback(enosys());
            },
            mkdir(path, perm, callback) {
              callback(enosys());
            },
            open(path, flags, mode, callback) {
              callback(enosys());
            },
            read(fd, buffer, offset, length, position, callback) {
              callback(enosys());
            },
            readdir(path, callback) {
              callback(enosys());
            },
            readlink(path, callback) {
              callback(enosys());
            },
            rename(from, to, callback) {
              callback(enosys());
            },
            rmdir(path, callback) {
              callback(enosys());
            },
            stat(path, callback) {
              callback(enosys());
            },
            symlink(path, link, callback) {
              callback(enosys());
            },
            truncate(path, length, callback) {
              callback(enosys());
            },
            unlink(path, callback) {
              callback(enosys());
            },
            utimes(path, atime, mtime, callback) {
              callback(enosys());
            }
          };
        }
        if (!globalThis.process) {
          globalThis.process = {
            getuid() {
              return -1;
            },
            getgid() {
              return -1;
            },
            geteuid() {
              return -1;
            },
            getegid() {
              return -1;
            },
            getgroups() {
              throw enosys();
            },
            pid: -1,
            ppid: -1,
            umask() {
              throw enosys();
            },
            cwd() {
              throw enosys();
            },
            chdir() {
              throw enosys();
            }
          };
        }
        if (!globalThis.crypto) {
          throw new Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");
        }
        if (!globalThis.performance) {
          throw new Error("globalThis.performance is not available, polyfill required (performance.now only)");
        }
        if (!globalThis.TextEncoder) {
          throw new Error("globalThis.TextEncoder is not available, polyfill required");
        }
        if (!globalThis.TextDecoder) {
          throw new Error("globalThis.TextDecoder is not available, polyfill required");
        }
        const encoder = new TextEncoder("utf-8");
        const decoder = new TextDecoder("utf-8");
        globalThis.Go = class {
          constructor() {
            this.argv = ["js"];
            this.env = {};
            this.exit = (code) => {
              if (code !== 0) {
                console.warn("exit code:", code);
              }
            };
            this._exitPromise = new Promise((resolve) => {
              this._resolveExitPromise = resolve;
            });
            this._pendingEvent = null;
            this._scheduledTimeouts = /* @__PURE__ */ new Map();
            this._nextCallbackTimeoutID = 1;
            const setInt64 = (addr, v) => {
              this.mem.setUint32(addr + 0, v, true);
              this.mem.setUint32(addr + 4, Math.floor(v / 4294967296), true);
            };
            const getInt64 = (addr) => {
              const low = this.mem.getUint32(addr + 0, true);
              const high = this.mem.getInt32(addr + 4, true);
              return low + high * 4294967296;
            };
            const loadValue = (addr) => {
              const f = this.mem.getFloat64(addr, true);
              if (f === 0) {
                return void 0;
              }
              if (!isNaN(f)) {
                return f;
              }
              const id = this.mem.getUint32(addr, true);
              return this._values[id];
            };
            const storeValue = (addr, v) => {
              const nanHead = 2146959360;
              if (typeof v === "number" && v !== 0) {
                if (isNaN(v)) {
                  this.mem.setUint32(addr + 4, nanHead, true);
                  this.mem.setUint32(addr, 0, true);
                  return;
                }
                this.mem.setFloat64(addr, v, true);
                return;
              }
              if (v === void 0) {
                this.mem.setFloat64(addr, 0, true);
                return;
              }
              let id = this._ids.get(v);
              if (id === void 0) {
                id = this._idPool.pop();
                if (id === void 0) {
                  id = this._values.length;
                }
                this._values[id] = v;
                this._goRefCounts[id] = 0;
                this._ids.set(v, id);
              }
              this._goRefCounts[id]++;
              let typeFlag = 0;
              switch (typeof v) {
                case "object":
                  if (v !== null) {
                    typeFlag = 1;
                  }
                  break;
                case "string":
                  typeFlag = 2;
                  break;
                case "symbol":
                  typeFlag = 3;
                  break;
                case "function":
                  typeFlag = 4;
                  break;
              }
              this.mem.setUint32(addr + 4, nanHead | typeFlag, true);
              this.mem.setUint32(addr, id, true);
            };
            const loadSlice = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return new Uint8Array(this._inst.exports.mem.buffer, array, len);
            };
            const loadSliceOfValues = (addr) => {
              const array = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              const a = new Array(len);
              for (let i = 0; i < len; i++) {
                a[i] = loadValue(array + i * 8);
              }
              return a;
            };
            const loadString = (addr) => {
              const saddr = getInt64(addr + 0);
              const len = getInt64(addr + 8);
              return decoder.decode(new DataView(this._inst.exports.mem.buffer, saddr, len));
            };
            const timeOrigin = Date.now() - performance.now();
            this.importObject = {
              go: {
                // Go's SP does not change as long as no Go code is running. Some operations (e.g. calls, getters and setters)
                // may synchronously trigger a Go event handler. This makes Go code get executed in the middle of the imported
                // function. A goroutine can switch to a new stack if the current stack is too small (see morestack function).
                // This changes the SP, thus we have to update the SP used by the imported function.
                // func wasmExit(code int32)
                "runtime.wasmExit": (sp) => {
                  sp >>>= 0;
                  const code = this.mem.getInt32(sp + 8, true);
                  this.exited = true;
                  delete this._inst;
                  delete this._values;
                  delete this._goRefCounts;
                  delete this._ids;
                  delete this._idPool;
                  this.exit(code);
                },
                // func wasmWrite(fd uintptr, p unsafe.Pointer, n int32)
                "runtime.wasmWrite": (sp) => {
                  sp >>>= 0;
                  const fd = getInt64(sp + 8);
                  const p = getInt64(sp + 16);
                  const n = this.mem.getInt32(sp + 24, true);
                  globalThis.fs.writeSync(fd, new Uint8Array(this._inst.exports.mem.buffer, p, n));
                },
                // func resetMemoryDataView()
                "runtime.resetMemoryDataView": (sp) => {
                  sp >>>= 0;
                  this.mem = new DataView(this._inst.exports.mem.buffer);
                },
                // func nanotime1() int64
                "runtime.nanotime1": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 8, (timeOrigin + performance.now()) * 1e6);
                },
                // func walltime() (sec int64, nsec int32)
                "runtime.walltime": (sp) => {
                  sp >>>= 0;
                  const msec = (/* @__PURE__ */ new Date()).getTime();
                  setInt64(sp + 8, msec / 1e3);
                  this.mem.setInt32(sp + 16, msec % 1e3 * 1e6, true);
                },
                // func scheduleTimeoutEvent(delay int64) int32
                "runtime.scheduleTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this._nextCallbackTimeoutID;
                  this._nextCallbackTimeoutID++;
                  this._scheduledTimeouts.set(id, setTimeout(
                    () => {
                      this._resume();
                      while (this._scheduledTimeouts.has(id)) {
                        console.warn("scheduleTimeoutEvent: missed timeout event");
                        this._resume();
                      }
                    },
                    getInt64(sp + 8) + 1
                    // setTimeout has been seen to fire up to 1 millisecond early
                  ));
                  this.mem.setInt32(sp + 16, id, true);
                },
                // func clearTimeoutEvent(id int32)
                "runtime.clearTimeoutEvent": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getInt32(sp + 8, true);
                  clearTimeout(this._scheduledTimeouts.get(id));
                  this._scheduledTimeouts.delete(id);
                },
                // func getRandomData(r []byte)
                "runtime.getRandomData": (sp) => {
                  sp >>>= 0;
                  crypto.getRandomValues(loadSlice(sp + 8));
                },
                // func finalizeRef(v ref)
                "syscall/js.finalizeRef": (sp) => {
                  sp >>>= 0;
                  const id = this.mem.getUint32(sp + 8, true);
                  this._goRefCounts[id]--;
                  if (this._goRefCounts[id] === 0) {
                    const v = this._values[id];
                    this._values[id] = null;
                    this._ids.delete(v);
                    this._idPool.push(id);
                  }
                },
                // func stringVal(value string) ref
                "syscall/js.stringVal": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, loadString(sp + 8));
                },
                // func valueGet(v ref, p string) ref
                "syscall/js.valueGet": (sp) => {
                  sp >>>= 0;
                  const result = Reflect.get(loadValue(sp + 8), loadString(sp + 16));
                  sp = this._inst.exports.getsp() >>> 0;
                  storeValue(sp + 32, result);
                },
                // func valueSet(v ref, p string, x ref)
                "syscall/js.valueSet": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), loadString(sp + 16), loadValue(sp + 32));
                },
                // func valueDelete(v ref, p string)
                "syscall/js.valueDelete": (sp) => {
                  sp >>>= 0;
                  Reflect.deleteProperty(loadValue(sp + 8), loadString(sp + 16));
                },
                // func valueIndex(v ref, i int) ref
                "syscall/js.valueIndex": (sp) => {
                  sp >>>= 0;
                  storeValue(sp + 24, Reflect.get(loadValue(sp + 8), getInt64(sp + 16)));
                },
                // valueSetIndex(v ref, i int, x ref)
                "syscall/js.valueSetIndex": (sp) => {
                  sp >>>= 0;
                  Reflect.set(loadValue(sp + 8), getInt64(sp + 16), loadValue(sp + 24));
                },
                // func valueCall(v ref, m string, args []ref) (ref, bool)
                "syscall/js.valueCall": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const m = Reflect.get(v, loadString(sp + 16));
                    const args = loadSliceOfValues(sp + 32);
                    const result = Reflect.apply(m, v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, result);
                    this.mem.setUint8(sp + 64, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 56, err);
                    this.mem.setUint8(sp + 64, 0);
                  }
                },
                // func valueInvoke(v ref, args []ref) (ref, bool)
                "syscall/js.valueInvoke": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.apply(v, void 0, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueNew(v ref, args []ref) (ref, bool)
                "syscall/js.valueNew": (sp) => {
                  sp >>>= 0;
                  try {
                    const v = loadValue(sp + 8);
                    const args = loadSliceOfValues(sp + 16);
                    const result = Reflect.construct(v, args);
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, result);
                    this.mem.setUint8(sp + 48, 1);
                  } catch (err) {
                    sp = this._inst.exports.getsp() >>> 0;
                    storeValue(sp + 40, err);
                    this.mem.setUint8(sp + 48, 0);
                  }
                },
                // func valueLength(v ref) int
                "syscall/js.valueLength": (sp) => {
                  sp >>>= 0;
                  setInt64(sp + 16, parseInt(loadValue(sp + 8).length));
                },
                // valuePrepareString(v ref) (ref, int)
                "syscall/js.valuePrepareString": (sp) => {
                  sp >>>= 0;
                  const str = encoder.encode(String(loadValue(sp + 8)));
                  storeValue(sp + 16, str);
                  setInt64(sp + 24, str.length);
                },
                // valueLoadString(v ref, b []byte)
                "syscall/js.valueLoadString": (sp) => {
                  sp >>>= 0;
                  const str = loadValue(sp + 8);
                  loadSlice(sp + 16).set(str);
                },
                // func valueInstanceOf(v ref, t ref) bool
                "syscall/js.valueInstanceOf": (sp) => {
                  sp >>>= 0;
                  this.mem.setUint8(sp + 24, loadValue(sp + 8) instanceof loadValue(sp + 16) ? 1 : 0);
                },
                // func copyBytesToGo(dst []byte, src ref) (int, bool)
                "syscall/js.copyBytesToGo": (sp) => {
                  sp >>>= 0;
                  const dst = loadSlice(sp + 8);
                  const src = loadValue(sp + 32);
                  if (!(src instanceof Uint8Array || src instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                // func copyBytesToJS(dst ref, src []byte) (int, bool)
                "syscall/js.copyBytesToJS": (sp) => {
                  sp >>>= 0;
                  const dst = loadValue(sp + 8);
                  const src = loadSlice(sp + 16);
                  if (!(dst instanceof Uint8Array || dst instanceof Uint8ClampedArray)) {
                    this.mem.setUint8(sp + 48, 0);
                    return;
                  }
                  const toCopy = src.subarray(0, dst.length);
                  dst.set(toCopy);
                  setInt64(sp + 40, toCopy.length);
                  this.mem.setUint8(sp + 48, 1);
                },
                "debug": (value) => {
                  console.log(value);
                }
              }
            };
          }
          run(instance) {
            return __async(this, null, function* () {
              if (!(instance instanceof WebAssembly.Instance)) {
                throw new Error("Go.run: WebAssembly.Instance expected");
              }
              this._inst = instance;
              this.mem = new DataView(this._inst.exports.mem.buffer);
              this._values = [
                // JS values that Go currently has references to, indexed by reference id
                NaN,
                0,
                null,
                true,
                false,
                globalThis,
                this
              ];
              this._goRefCounts = new Array(this._values.length).fill(Infinity);
              this._ids = /* @__PURE__ */ new Map([
                // mapping from JS values to reference ids
                [0, 1],
                [null, 2],
                [true, 3],
                [false, 4],
                [globalThis, 5],
                [this, 6]
              ]);
              this._idPool = [];
              this.exited = false;
              let offset = 4096;
              const strPtr = (str) => {
                const ptr = offset;
                const bytes = encoder.encode(str + "\\0");
                new Uint8Array(this.mem.buffer, offset, bytes.length).set(bytes);
                offset += bytes.length;
                if (offset % 8 !== 0) {
                  offset += 8 - offset % 8;
                }
                return ptr;
              };
              const argc = this.argv.length;
              const argvPtrs = [];
              this.argv.forEach((arg) => {
                argvPtrs.push(strPtr(arg));
              });
              argvPtrs.push(0);
              const keys = Object.keys(this.env).sort();
              keys.forEach((key) => {
                argvPtrs.push(strPtr(\`\${key}=\${this.env[key]}\`));
              });
              argvPtrs.push(0);
              const argv = offset;
              argvPtrs.forEach((ptr) => {
                this.mem.setUint32(offset, ptr, true);
                this.mem.setUint32(offset + 4, 0, true);
                offset += 8;
              });
              const wasmMinDataAddr = 4096 + 8192;
              if (offset >= wasmMinDataAddr) {
                throw new Error("total length of command line and environment variables exceeds limit");
              }
              this._inst.exports.run(argc, argv);
              if (this.exited) {
                this._resolveExitPromise();
              }
              yield this._exitPromise;
            });
          }
          _resume() {
            if (this.exited) {
              throw new Error("Go program has already exited");
            }
            this._inst.exports.resume();
            if (this.exited) {
              this._resolveExitPromise();
            }
          }
          _makeFuncWrapper(id) {
            const go = this;
            return function() {
              const event = { id, this: this, args: arguments };
              go._pendingEvent = event;
              go._resume();
              return event.result;
            };
          }
        };
      })();
      onmessage = ({ data: wasm }) => {
        let decoder = new TextDecoder();
        let fs = globalThis.fs;
        let stderr = "";
        fs.writeSync = (fd, buffer) => {
          if (fd === 1) {
            postMessage(buffer);
          } else if (fd === 2) {
            stderr += decoder.decode(buffer);
            let parts = stderr.split("\\n");
            if (parts.length > 1)
              console.log(parts.slice(0, -1).join("\\n"));
            stderr = parts[parts.length - 1];
          } else {
            throw new Error("Bad write");
          }
          return buffer.length;
        };
        let stdin = [];
        let resumeStdin;
        let stdinPos = 0;
        onmessage = ({ data }) => {
          if (data.length > 0) {
            stdin.push(data);
            if (resumeStdin)
              resumeStdin();
          }
          return go;
        };
        fs.read = (fd, buffer, offset, length, position, callback) => {
          if (fd !== 0 || offset !== 0 || length !== buffer.length || position !== null) {
            throw new Error("Bad read");
          }
          if (stdin.length === 0) {
            resumeStdin = () => fs.read(fd, buffer, offset, length, position, callback);
            return;
          }
          let first = stdin[0];
          let count = Math.max(0, Math.min(length, first.length - stdinPos));
          buffer.set(first.subarray(stdinPos, stdinPos + count), offset);
          stdinPos += count;
          if (stdinPos === first.length) {
            stdin.shift();
            stdinPos = 0;
          }
          callback(null, count);
        };
        let go = new globalThis.Go();
        go.argv = ["", \`--service=\${"0.20.2"}\`];
        tryToInstantiateModule(wasm, go).then(
          (instance) => {
            postMessage(null);
            go.run(instance);
          },
          (error) => {
            postMessage(error);
          }
        );
        return go;
      };
      function tryToInstantiateModule(wasm, go) {
        return __async(this, null, function* () {
          if (wasm instanceof WebAssembly.Module) {
            return WebAssembly.instantiate(wasm, go.importObject);
          }
          const res = yield fetch(wasm);
          if (!res.ok)
            throw new Error(\`Failed to download \${JSON.stringify(wasm)}\`);
          if ("instantiateStreaming" in WebAssembly && /^application\\/wasm($|;)/i.test(res.headers.get("Content-Type") || "")) {
            const result2 = yield WebAssembly.instantiateStreaming(res, go.importObject);
            return result2.instance;
          }
          const bytes = yield res.arrayBuffer();
          const result = yield WebAssembly.instantiate(bytes, go.importObject);
          return result.instance;
        });
      }
      return (m) => onmessage(m);
    })(postMessage)`],{type:"text/javascript"});o=new Worker(URL.createObjectURL(e))}else{let e,t=(e=>{let t;var i=(e,t,i)=>new Promise((n,r)=>{var s=e=>{try{l(i.next(e))}catch(e){r(e)}},a=e=>{try{l(i.throw(e))}catch(e){r(e)}},l=e=>e.done?n(e.value):Promise.resolve(e.value).then(s,a);l((i=i.apply(e,t)).next())});let n={};for(let e=self;e;e=Object.getPrototypeOf(e))for(let t of Object.getOwnPropertyNames(e))t in n||Object.defineProperty(n,t,{get:()=>self[t]});let r=()=>{let e=Error("not implemented");return e.code="ENOSYS",e};if(!n.fs){let e="";n.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(t,i){let n=(e+=a.decode(i)).lastIndexOf("\n");return -1!=n&&(console.log(e.substring(0,n)),e=e.substring(n+1)),i.length},write(e,t,i,n,s,a){0!==i||n!==t.length||null!==s?a(r()):a(null,this.writeSync(e,t))},chmod(e,t,i){i(r())},chown(e,t,i,n){n(r())},close(e,t){t(r())},fchmod(e,t,i){i(r())},fchown(e,t,i,n){n(r())},fstat(e,t){t(r())},fsync(e,t){t(null)},ftruncate(e,t,i){i(r())},lchown(e,t,i,n){n(r())},link(e,t,i){i(r())},lstat(e,t){t(r())},mkdir(e,t,i){i(r())},open(e,t,i,n){n(r())},read(e,t,i,n,s,a){a(r())},readdir(e,t){t(r())},readlink(e,t){t(r())},rename(e,t,i){i(r())},rmdir(e,t){t(r())},stat(e,t){t(r())},symlink(e,t,i){i(r())},truncate(e,t,i){i(r())},unlink(e,t){t(r())},utimes(e,t,i,n){n(r())}}}if(n.process||(n.process={getuid:()=>-1,getgid:()=>-1,geteuid:()=>-1,getegid:()=>-1,getgroups(){throw r()},pid:-1,ppid:-1,umask(){throw r()},cwd(){throw r()},chdir(){throw r()}}),!n.crypto)throw Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!n.performance)throw Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!n.TextEncoder)throw Error("globalThis.TextEncoder is not available, polyfill required");if(!n.TextDecoder)throw Error("globalThis.TextDecoder is not available, polyfill required");let s=new TextEncoder("utf-8"),a=new TextDecoder("utf-8");return n.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=e=>{0!==e&&console.warn("exit code:",e)},this._exitPromise=new Promise(e=>{this._resolveExitPromise=e}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const e=(e,t)=>{this.mem.setUint32(e+0,t,!0),this.mem.setUint32(e+4,Math.floor(t/0x100000000),!0)},t=e=>this.mem.getUint32(e+0,!0)+0x100000000*this.mem.getInt32(e+4,!0),i=e=>{let t=this.mem.getFloat64(e,!0);if(0===t)return;if(!isNaN(t))return t;let i=this.mem.getUint32(e,!0);return this._values[i]},r=(e,t)=>{if("number"==typeof t&&0!==t){if(isNaN(t)){this.mem.setUint32(e+4,0x7ff80000,!0),this.mem.setUint32(e,0,!0);return}this.mem.setFloat64(e,t,!0);return}if(void 0===t)return void this.mem.setFloat64(e,0,!0);let i=this._ids.get(t);void 0===i&&(void 0===(i=this._idPool.pop())&&(i=this._values.length),this._values[i]=t,this._goRefCounts[i]=0,this._ids.set(t,i)),this._goRefCounts[i]++;let n=0;switch(typeof t){case"object":null!==t&&(n=1);break;case"string":n=2;break;case"symbol":n=3;break;case"function":n=4}this.mem.setUint32(e+4,0x7ff80000|n,!0),this.mem.setUint32(e,i,!0)},l=e=>{let i=t(e+0),n=t(e+8);return new Uint8Array(this._inst.exports.mem.buffer,i,n)},o=e=>{let n=t(e+0),r=t(e+8),s=Array(r);for(let e=0;e<r;e++)s[e]=i(n+8*e);return s},d=e=>{let i=t(e+0),n=t(e+8);return a.decode(new DataView(this._inst.exports.mem.buffer,i,n))},c=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":e=>{e>>>=0;let t=this.mem.getInt32(e+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(t)},"runtime.wasmWrite":e=>{let i=t((e>>>=0)+8),r=t(e+16),s=this.mem.getInt32(e+24,!0);n.fs.writeSync(i,new Uint8Array(this._inst.exports.mem.buffer,r,s))},"runtime.resetMemoryDataView":e=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":t=>{e((t>>>=0)+8,(c+performance.now())*1e6)},"runtime.walltime":t=>{t>>>=0;let i=new Date().getTime();e(t+8,i/1e3),this.mem.setInt32(t+16,i%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":e=>{e>>>=0;let i=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(i,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(i);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},t(e+8)+1)),this.mem.setInt32(e+16,i,!0)},"runtime.clearTimeoutEvent":e=>{e>>>=0;let t=this.mem.getInt32(e+8,!0);clearTimeout(this._scheduledTimeouts.get(t)),this._scheduledTimeouts.delete(t)},"runtime.getRandomData":e=>{e>>>=0,crypto.getRandomValues(l(e+8))},"syscall/js.finalizeRef":e=>{e>>>=0;let t=this.mem.getUint32(e+8,!0);if(this._goRefCounts[t]--,0===this._goRefCounts[t]){let e=this._values[t];this._values[t]=null,this._ids.delete(e),this._idPool.push(t)}},"syscall/js.stringVal":e=>{r((e>>>=0)+24,d(e+8))},"syscall/js.valueGet":e=>{let t=Reflect.get(i((e>>>=0)+8),d(e+16));r((e=this._inst.exports.getsp()>>>0)+32,t)},"syscall/js.valueSet":e=>{Reflect.set(i((e>>>=0)+8),d(e+16),i(e+32))},"syscall/js.valueDelete":e=>{Reflect.deleteProperty(i((e>>>=0)+8),d(e+16))},"syscall/js.valueIndex":e=>{r((e>>>=0)+24,Reflect.get(i(e+8),t(e+16)))},"syscall/js.valueSetIndex":e=>{Reflect.set(i((e>>>=0)+8),t(e+16),i(e+24))},"syscall/js.valueCall":e=>{e>>>=0;try{let t=i(e+8),n=Reflect.get(t,d(e+16)),s=o(e+32),a=Reflect.apply(n,t,s);e=this._inst.exports.getsp()>>>0,r(e+56,a),this.mem.setUint8(e+64,1)}catch(t){r((e=this._inst.exports.getsp()>>>0)+56,t),this.mem.setUint8(e+64,0)}},"syscall/js.valueInvoke":e=>{e>>>=0;try{let t=i(e+8),n=o(e+16),s=Reflect.apply(t,void 0,n);e=this._inst.exports.getsp()>>>0,r(e+40,s),this.mem.setUint8(e+48,1)}catch(t){r((e=this._inst.exports.getsp()>>>0)+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueNew":e=>{e>>>=0;try{let t=i(e+8),n=o(e+16),s=Reflect.construct(t,n);e=this._inst.exports.getsp()>>>0,r(e+40,s),this.mem.setUint8(e+48,1)}catch(t){r((e=this._inst.exports.getsp()>>>0)+40,t),this.mem.setUint8(e+48,0)}},"syscall/js.valueLength":t=>{e((t>>>=0)+16,parseInt(i(t+8).length))},"syscall/js.valuePrepareString":t=>{t>>>=0;let n=s.encode(String(i(t+8)));r(t+16,n),e(t+24,n.length)},"syscall/js.valueLoadString":e=>{let t=i((e>>>=0)+8);l(e+16).set(t)},"syscall/js.valueInstanceOf":e=>{e>>>=0,this.mem.setUint8(e+24,+(i(e+8)instanceof i(e+16)))},"syscall/js.copyBytesToGo":t=>{let n=l((t>>>=0)+8),r=i(t+32);if(!(r instanceof Uint8Array||r instanceof Uint8ClampedArray))return void this.mem.setUint8(t+48,0);let s=r.subarray(0,n.length);n.set(s),e(t+40,s.length),this.mem.setUint8(t+48,1)},"syscall/js.copyBytesToJS":t=>{let n=i((t>>>=0)+8),r=l(t+16);if(!(n instanceof Uint8Array||n instanceof Uint8ClampedArray))return void this.mem.setUint8(t+48,0);let s=r.subarray(0,n.length);n.set(s),e(t+40,s.length),this.mem.setUint8(t+48,1)},debug:e=>{console.log(e)}}}}run(e){return i(this,null,function*(){if(!(e instanceof WebAssembly.Instance))throw Error("Go.run: WebAssembly.Instance expected");this._inst=e,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,n,this],this._goRefCounts=Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[n,5],[this,6]]),this._idPool=[],this.exited=!1;let t=4096,i=e=>{let i=t,n=s.encode(e+"\0");return new Uint8Array(this.mem.buffer,t,n.length).set(n),(t+=n.length)%8!=0&&(t+=8-t%8),i},r=this.argv.length,a=[];this.argv.forEach(e=>{a.push(i(e))}),a.push(0),Object.keys(this.env).sort().forEach(e=>{a.push(i(`${e}=${this.env[e]}`))}),a.push(0);let l=t;if(a.forEach(e=>{this.mem.setUint32(t,e,!0),this.mem.setUint32(t+4,0,!0),t+=8}),t>=12288)throw Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(r,l),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(e){let t=this;return function(){let i={id:e,this:this,args:arguments};return t._pendingEvent=i,t._resume(),i.result}}},t=({data:r})=>{let s,a=new TextDecoder,l=n.fs,o="";l.writeSync=(t,i)=>{if(1===t)e(i);else if(2===t){let e=(o+=a.decode(i)).split("\n");e.length>1&&console.log(e.slice(0,-1).join("\n")),o=e[e.length-1]}else throw Error("Bad write");return i.length};let d=[],c=0;t=({data:e})=>(e.length>0&&(d.push(e),s&&s()),u),l.read=(e,t,i,n,r,a)=>{if(0!==e||0!==i||n!==t.length||null!==r)throw Error("Bad read");if(0===d.length){s=()=>l.read(e,t,i,n,r,a);return}let o=d[0],u=Math.max(0,Math.min(n,o.length-c));t.set(o.subarray(c,c+u),i),(c+=u)===o.length&&(d.shift(),c=0),a(null,u)};let u=new n.Go;return u.argv=["","--service=0.20.2"],(function(e,t){return i(this,null,function*(){if(e instanceof WebAssembly.Module)return WebAssembly.instantiate(e,t.importObject);let i=yield fetch(e);if(!i.ok)throw Error(`Failed to download ${JSON.stringify(e)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(i.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(i,t.importObject)).instance;let n=yield i.arrayBuffer();return(yield WebAssembly.instantiate(n,t.importObject)).instance})})(r,u).then(t=>{e(null),u.run(t)},t=>{e(t)}),u},e=>t(e)})(e=>o.onmessage({data:e}));o={onmessage:null,postMessage:i=>setTimeout(()=>e=t({data:i})),terminate(){if(e)for(let t of e._scheduledTimeouts.values())clearTimeout(t)}}}let u=new Promise((e,t)=>{d=e,c=t});o.onmessage=({data:e})=>{o.onmessage=({data:e})=>g(e),e?c(e):d()},o.postMessage(n||new URL(e,location.href).toString());let{readFromStdout:g,service:p}=function(e){let n={},r={didClose:!1,reason:""},s={},a=0,l=0,o=new Uint8Array(16384),d=0,c=(t,i,n)=>{if(r.didClose)return n("The service is no longer running"+r.reason,null);let l=a++;s[l]=(e,i)=>{try{n(e,i)}finally{t&&t.unref()}},t&&t.ref(),e.writeToStdin(m({id:l,isRequest:!0,value:i}))},u=(t,i)=>{if(r.didClose)throw Error("The service is no longer running"+r.reason);e.writeToStdin(m({id:t,isRequest:!1,value:i}))},f=(t,i)=>h(this,null,function*(){try{if("ping"===i.command)return void u(t,{});if("number"==typeof i.key){let e=n[i.key];if(!e)return;let r=e[i.command];if(r)return void(yield r(t,i))}throw Error("Invalid command: "+i.command)}catch(n){let i=[q(n,e,null,void 0,"")];try{u(t,{errors:i})}catch(e){}}}),g=!0,p=e=>{if(g){g=!1;let t=String.fromCharCode(...e);if("0.20.2"!==t)throw Error(`Cannot start service: Host version "0.20.2" does not match binary version ${b(t)}`);return}let t=function(e){let t=()=>{switch(n.read8()){case 0:return null;case 1:return!!n.read8();case 2:return n.read32();case 3:return i(n.read());case 4:return n.read();case 5:{let e=n.read32(),i=[];for(let n=0;n<e;n++)i.push(t());return i}case 6:{let e=n.read32(),r={};for(let s=0;s<e;s++)r[i(n.read())]=t();return r}default:throw Error("Invalid packet")}},n=new w(e),r=n.read32(),s=(1&r)==0;r>>>=1;let a=t();if(n.ptr!==e.length)throw Error("Invalid packet");return{id:r,isRequest:s,value:a}}(e);if(t.isRequest)f(t.id,t.value);else{let e=s[t.id];delete s[t.id],t.value.error?e(t.value.error,{}):e(null,t.value)}};return{readFromStdout:e=>{let t=d+e.length;if(t>o.length){let e=new Uint8Array(2*t);e.set(o),o=e}o.set(e,d),d+=e.length;let i=0;for(;i+4<=d;){let e=y(o,i);if(i+4+e>d)break;i+=4,p(o.subarray(i,i+e)),i+=e}i>0&&(o.copyWithin(0,i,d),d-=i)},afterClose:e=>{r.didClose=!0,e&&(r.reason=": "+(e.message||e));let t="The service was stopped"+r.reason;for(let e in s)s[e](t,null);s={}},service:{buildOrContext:({callName:r,refs:s,options:a,isTTY:o,defaultWD:d,callback:f})=>{let g=0,p=l++,m={},w={ref(){1==++g&&s&&s.ref()},unref(){0==--g&&(delete n[p],s&&s.unref())}};n[p]=m,w.ref(),function(e,n,r,s,a,l,o,d,c,u,f){let g,p=G(),m="context"===e,w=(e,t)=>{let i=[];try{L(i,d,{},c,x)}catch(e){}let n=q(e,l,p,void 0,t);r(a,{command:"error",flags:i,error:n},()=>{n.detail=p.load(n.detail),f(K(m?"Context failed":"Build failed",[n],[]),null)})};if("object"==typeof d){let e=d.plugins;if(void 0!==e){if(!Array.isArray(e))return w(Error('"plugins" must be an array'),"");g=e}}if(g&&g.length>0){let e,i,c,u,f,m,v,x,E;return l.isSync?w(Error("Cannot use plugins in synchronous API calls"),""):(e=n,i=r,c=s,u=a,f=l,m=o,v=d,x=g,E=p,h(void 0,null,function*(){let n=[],r=[],s={},a={},l=[],o=0,d=0,g=[],p=!1;for(let t of x=[...x]){let c={};if("object"!=typeof t)throw Error(`Plugin at index ${d} must be an object`);let h=W(t,c,"name",j);if("string"!=typeof h||""===h)throw Error(`Plugin at index ${d} is missing a name`);try{let m=W(t,c,"setup",I);if("function"!=typeof m)throw Error("Plugin is missing a setup function");z(t,c,`on plugin ${b(h)}`);let w={name:h,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};d++;let y=(t,n={})=>{if(!p)throw Error('Cannot call "resolve" before plugin setup has completed');if("string"!=typeof t)throw Error("The path to resolve must be a string");let r=Object.create(null),s=W(n,r,"pluginName",j),a=W(n,r,"importer",j),l=W(n,r,"namespace",j),o=W(n,r,"resolveDir",j),d=W(n,r,"kind",j),c=W(n,r,"pluginData",S);return z(n,r,"in resolve() call"),new Promise((n,r)=>{let f={command:"resolve",path:t,key:e,pluginName:h};if(null!=s&&(f.pluginName=s),null!=a&&(f.importer=a),null!=l&&(f.namespace=l),null!=o&&(f.resolveDir=o),null!=d)f.kind=d;else throw Error('Must specify "kind" when calling "resolve"');null!=c&&(f.pluginData=E.store(c)),i(u,f,(e,t)=>{null!==e?r(Error(e)):n({errors:X(t.errors,E),warnings:X(t.warnings,E),path:t.path,external:t.external,sideEffects:t.sideEffects,namespace:t.namespace,suffix:t.suffix,pluginData:E.load(t.pluginData)})})})},x=m({initialOptions:v,resolve:y,onStart(e){let t=J(Error('This error came from the "onStart" callback registered here:'),f,"onStart");n.push({name:h,callback:e,note:t}),w.onStart=!0},onEnd(e){let t=J(Error('This error came from the "onEnd" callback registered here:'),f,"onEnd");r.push({name:h,callback:e,note:t}),w.onEnd=!0},onResolve(e,t){let i=J(Error('This error came from the "onResolve" callback registered here:'),f,"onResolve"),n={},r=W(e,n,"filter",R),a=W(e,n,"namespace",j);if(z(e,n,`in onResolve() call for plugin ${b(h)}`),null==r)throw Error("onResolve() call is missing a filter");let l=o++;s[l]={name:h,callback:t,note:i},w.onResolve.push({id:l,filter:r.source,namespace:a||""})},onLoad(e,t){let i=J(Error('This error came from the "onLoad" callback registered here:'),f,"onLoad"),n={},r=W(e,n,"filter",R),s=W(e,n,"namespace",j);if(z(e,n,`in onLoad() call for plugin ${b(h)}`),null==r)throw Error("onLoad() call is missing a filter");let l=o++;a[l]={name:h,callback:t,note:i},w.onLoad.push({id:l,filter:r.source,namespace:s||""})},onDispose(e){l.push(e)},esbuild:f.esbuild});x&&(yield x),g.push(w)}catch(e){return{ok:!1,error:e,pluginName:h}}}m["on-start"]=(e,t)=>h(void 0,null,function*(){let t={errors:[],warnings:[]};yield Promise.all(n.map(e=>h(void 0,[e],function*({name:e,callback:i,note:n}){try{let n=yield i();if(null!=n){if("object"!=typeof n)throw Error(`Expected onStart() callback in plugin ${b(e)} to return an object`);let i={},r=W(n,i,"errors",T),s=W(n,i,"warnings",T);z(n,i,`from onStart() callback in plugin ${b(e)}`),null!=r&&t.errors.push(...Z(r,"errors",E,e,void 0)),null!=s&&t.warnings.push(...Z(s,"warnings",E,e,void 0))}}catch(i){t.errors.push(q(i,f,E,n&&n(),e))}}))),c(e,t)}),m["on-resolve"]=(e,t)=>h(void 0,null,function*(){let i={},n="",r,a;for(let e of t.ids)try{({name:n,callback:r,note:a}=s[e]);let l=yield r({path:t.path,importer:t.importer,namespace:t.namespace,resolveDir:t.resolveDir,kind:t.kind,pluginData:E.load(t.pluginData)});if(null!=l){if("object"!=typeof l)throw Error(`Expected onResolve() callback in plugin ${b(n)} to return an object`);let t={},r=W(l,t,"pluginName",j),s=W(l,t,"path",j),a=W(l,t,"namespace",j),o=W(l,t,"suffix",j),d=W(l,t,"external",k),c=W(l,t,"sideEffects",k),u=W(l,t,"pluginData",S),h=W(l,t,"errors",T),f=W(l,t,"warnings",T),g=W(l,t,"watchFiles",T),p=W(l,t,"watchDirs",T);z(l,t,`from onResolve() callback in plugin ${b(n)}`),i.id=e,null!=r&&(i.pluginName=r),null!=s&&(i.path=s),null!=a&&(i.namespace=a),null!=o&&(i.suffix=o),null!=d&&(i.external=d),null!=c&&(i.sideEffects=c),null!=u&&(i.pluginData=E.store(u)),null!=h&&(i.errors=Z(h,"errors",E,n,void 0)),null!=f&&(i.warnings=Z(f,"warnings",E,n,void 0)),null!=g&&(i.watchFiles=ee(g,"watchFiles")),null!=p&&(i.watchDirs=ee(p,"watchDirs"));break}}catch(t){i={id:e,errors:[q(t,f,E,a&&a(),n)]};break}c(e,i)}),m["on-load"]=(e,i)=>h(void 0,null,function*(){let n={},r="",s,l;for(let e of i.ids)try{({name:r,callback:s,note:l}=a[e]);let o=yield s({path:i.path,namespace:i.namespace,suffix:i.suffix,pluginData:E.load(i.pluginData),with:i.with});if(null!=o){if("object"!=typeof o)throw Error(`Expected onLoad() callback in plugin ${b(r)} to return an object`);let i={},s=W(o,i,"pluginName",j),a=W(o,i,"contents",D),l=W(o,i,"resolveDir",j),d=W(o,i,"pluginData",S),c=W(o,i,"loader",j),u=W(o,i,"errors",T),h=W(o,i,"warnings",T),f=W(o,i,"watchFiles",T),g=W(o,i,"watchDirs",T);z(o,i,`from onLoad() callback in plugin ${b(r)}`),n.id=e,null!=s&&(n.pluginName=s),a instanceof Uint8Array?n.contents=a:null!=a&&(n.contents=t(a)),null!=l&&(n.resolveDir=l),null!=d&&(n.pluginData=E.store(d)),null!=c&&(n.loader=c),null!=u&&(n.errors=Z(u,"errors",E,r,void 0)),null!=h&&(n.warnings=Z(h,"warnings",E,r,void 0)),null!=f&&(n.watchFiles=ee(f,"watchFiles")),null!=g&&(n.watchDirs=ee(g,"watchDirs"));break}}catch(t){n={id:e,errors:[q(t,f,E,l&&l(),r)]};break}c(e,n)});let w=(e,t)=>t([],[]);return r.length>0&&(w=(e,t)=>{h(void 0,null,function*(){let i=[],n=[];for(let{name:t,callback:s,note:a}of r){let r,l;try{let i=yield s(e);if(null!=i){if("object"!=typeof i)throw Error(`Expected onEnd() callback in plugin ${b(t)} to return an object`);let e={},n=W(i,e,"errors",T),s=W(i,e,"warnings",T);z(i,e,`from onEnd() callback in plugin ${b(t)}`),null!=n&&(r=Z(n,"errors",E,t,void 0)),null!=s&&(l=Z(s,"warnings",E,t,void 0))}}catch(e){r=[q(e,f,E,a&&a(),t)]}if(r){i.push(...r);try{e.errors.push(...r)}catch(e){}}if(l){n.push(...l);try{e.warnings.push(...l)}catch(e){}}}t(i,n)})}),p=!0,{ok:!0,requestPlugins:g,runOnEndCallbacks:w,scheduleOnDisposeCallbacks:()=>{for(let e of l)setTimeout(()=>e(),0)}}})).then(e=>{if(!e.ok)return w(e.error,e.pluginName);try{y(e.requestPlugins,e.runOnEndCallbacks,e.scheduleOnDisposeCallbacks)}catch(e){w(e,"")}},e=>w(e,""))}try{y(null,(e,t)=>t([],[]),()=>{})}catch(e){w(e,"")}function y(h,g,w){let y,v,{entries:b,flags:E,write:_,stdinContents:S,stdinResolveDir:R,absWorkingDir:H,nodePaths:N,mangleCache:U}=function(e,i,n,r,s){var a;let l=[],o=[],d=Object.create(null),c=null,u=null;L(l,i,d,n,r),B(l,i,d);let h=W(i,d,"sourcemap",M),f=W(i,d,"bundle",k),g=W(i,d,"splitting",k),p=W(i,d,"preserveSymlinks",k),m=W(i,d,"metafile",k),w=W(i,d,"outfile",j),y=W(i,d,"outdir",j),v=W(i,d,"outbase",j),b=W(i,d,"tsconfig",j),x=W(i,d,"resolveExtensions",T),E=W(i,d,"nodePaths",T),_=W(i,d,"mainFields",T),S=W(i,d,"conditions",T),R=W(i,d,"external",T),$=W(i,d,"packages",j),I=W(i,d,"alias",A),H=W(i,d,"loader",A),N=W(i,d,"outExtension",A),U=W(i,d,"publicPath",j),O=W(i,d,"entryNames",j),P=W(i,d,"chunkNames",j),G=W(i,d,"assetNames",j),J=W(i,d,"inject",T),q=W(i,d,"banner",A),Y=W(i,d,"footer",A),K=W(i,d,"entryPoints",C),X=W(i,d,"absWorkingDir",j),Q=W(i,d,"stdin",A),Z=null!=(a=W(i,d,"write",k))?a:s,ee=W(i,d,"allowOverwrite",k),et=W(i,d,"mangleCache",A);if(d.plugins=!0,z(i,d,`in ${e}() call`),h&&l.push(`--sourcemap${!0===h?"":`=${h}`}`),f&&l.push("--bundle"),ee&&l.push("--allow-overwrite"),g&&l.push("--splitting"),p&&l.push("--preserve-symlinks"),m&&l.push("--metafile"),w&&l.push(`--outfile=${w}`),y&&l.push(`--outdir=${y}`),v&&l.push(`--outbase=${v}`),b&&l.push(`--tsconfig=${b}`),$&&l.push(`--packages=${$}`),x){let e=[];for(let t of x){if(F(t,"resolve extension"),t.indexOf(",")>=0)throw Error(`Invalid resolve extension: ${t}`);e.push(t)}l.push(`--resolve-extensions=${e.join(",")}`)}if(U&&l.push(`--public-path=${U}`),O&&l.push(`--entry-names=${O}`),P&&l.push(`--chunk-names=${P}`),G&&l.push(`--asset-names=${G}`),_){let e=[];for(let t of _){if(F(t,"main field"),t.indexOf(",")>=0)throw Error(`Invalid main field: ${t}`);e.push(t)}l.push(`--main-fields=${e.join(",")}`)}if(S){let e=[];for(let t of S){if(F(t,"condition"),t.indexOf(",")>=0)throw Error(`Invalid condition: ${t}`);e.push(t)}l.push(`--conditions=${e.join(",")}`)}if(R)for(let e of R)l.push(`--external:${F(e,"external")}`);if(I)for(let e in I){if(e.indexOf("=")>=0)throw Error(`Invalid package name in alias: ${e}`);l.push(`--alias:${e}=${F(I[e],"alias",e)}`)}if(q)for(let e in q){if(e.indexOf("=")>=0)throw Error(`Invalid banner file type: ${e}`);l.push(`--banner:${e}=${F(q[e],"banner",e)}`)}if(Y)for(let e in Y){if(e.indexOf("=")>=0)throw Error(`Invalid footer file type: ${e}`);l.push(`--footer:${e}=${F(Y[e],"footer",e)}`)}if(J)for(let e of J)l.push(`--inject:${F(e,"inject")}`);if(H)for(let e in H){if(e.indexOf("=")>=0)throw Error(`Invalid loader extension: ${e}`);l.push(`--loader:${e}=${F(H[e],"loader",e)}`)}if(N)for(let e in N){if(e.indexOf("=")>=0)throw Error(`Invalid out extension: ${e}`);l.push(`--out-extension:${e}=${F(N[e],"out extension",e)}`)}if(K)if(Array.isArray(K))for(let e=0,t=K.length;e<t;e++){let t=K[e];if("object"==typeof t&&null!==t){let i=Object.create(null),n=W(t,i,"in",j),r=W(t,i,"out",j);if(z(t,i,"in entry point at index "+e),void 0===n)throw Error('Missing property "in" for entry point at index '+e);if(void 0===r)throw Error('Missing property "out" for entry point at index '+e);o.push([r,n])}else o.push(["",F(t,"entry point at index "+e)])}else for(let e in K)o.push([e,F(K[e],"entry point",e)]);if(Q){let e=Object.create(null),i=W(Q,e,"contents",D),n=W(Q,e,"resolveDir",j),r=W(Q,e,"sourcefile",j),s=W(Q,e,"loader",j);z(Q,e,'in "stdin" object'),r&&l.push(`--sourcefile=${r}`),s&&l.push(`--loader=${s}`),n&&(u=n),"string"==typeof i?c=t(i):i instanceof Uint8Array&&(c=i)}let ei=[];if(E)for(let e of E)e+="",ei.push(e);return{entries:o,flags:l,write:Z,stdinContents:c,stdinResolveDir:u,absWorkingDir:X,nodePaths:ei,mangleCache:V(et)}}(e,d,c,x,l.hasFS);if(_&&!l.hasFS)throw Error('The "write" option is unavailable in this environment');let O={command:"build",key:n,entries:b,flags:E,write:_,stdinContents:S,stdinResolveDir:R,absWorkingDir:H||u,nodePaths:N,context:m};h&&(O.plugins=h),U&&(O.mangleCache=U);let P=(e,t)=>{let n={errors:X(e.errors,p),warnings:X(e.warnings,p),outputFiles:void 0,metafile:void 0,mangleCache:void 0},r=n.errors.slice(),s=n.warnings.slice();e.outputFiles&&(n.outputFiles=e.outputFiles.map(et)),e.metafile&&(n.metafile=JSON.parse(e.metafile)),e.mangleCache&&(n.mangleCache=e.mangleCache),void 0!==e.writeToStdout&&console.log(i(e.writeToStdout).replace(/\n$/,"")),g(n,(e,i)=>{if(r.length>0||e.length>0)return t(K("Build failed",r.concat(e),s.concat(i)),null,e,i);t(null,n,e,i)})};m&&(o["on-end"]=(e,t)=>new Promise(i=>{P(t,(t,n,r,a)=>{v&&v(t,n),y=void 0,v=void 0,s(e,{errors:r,warnings:a}),i()})})),r(a,O,(e,t)=>{if(e)return f(Error(e),null);if(!m)return P(t,(e,t)=>(w(),f(e,t)));if(t.errors.length>0)return f(K("Context failed",t.errors,t.warnings),null);let i=!1;a.ref(),f(null,{rebuild:()=>(y||(y=new Promise((e,t)=>{let i;v=(n,r)=>{i||(i=()=>n?t(n):e(r))};let s=()=>{r(a,{command:"rebuild",key:n},(e,n)=>{e?t(Error(e)):i?i():s()})};s()})),y),watch:(e={})=>new Promise((t,i)=>{if(!l.hasFS)throw Error('Cannot use the "watch" API in this environment');z(e,{},"in watch() call"),r(a,{command:"watch",key:n},e=>{e?i(Error(e)):t(void 0)})}),serve:(e={})=>new Promise((t,i)=>{if(!l.hasFS)throw Error('Cannot use the "serve" API in this environment');let d={},c=W(e,d,"port",$),u=W(e,d,"host",j),h=W(e,d,"servedir",j),f=W(e,d,"keyfile",j),g=W(e,d,"certfile",j),p=W(e,d,"fallback",j),m=W(e,d,"onRequest",I);z(e,d,"in serve() call");let w={command:"serve",key:n,onRequest:!!m};void 0!==c&&(w.port=c),void 0!==u&&(w.host=u),void 0!==h&&(w.servedir=h),void 0!==f&&(w.keyfile=f),void 0!==g&&(w.certfile=g),void 0!==p&&(w.fallback=p),r(a,w,(e,n)=>{if(e)return i(Error(e));m&&(o["serve-request"]=(e,t)=>{m(t.args),s(e,{})}),t(n)})}),cancel:()=>new Promise(e=>{if(i)return e();r(a,{command:"cancel",key:n},()=>{e()})}),dispose:()=>new Promise(e=>{if(i)return e();i=!0,r(a,{command:"dispose",key:n},()=>{e(),w(),a.unref()})})})})}}(r,p,c,u,w,e,m,a,o,d,(e,t)=>{try{f(e,t)}finally{w.unref()}})},transform:({callName:i,refs:n,input:r,options:s,isTTY:a,fs:l,callback:o})=>{let d=G(),u=u=>{try{let e,h,f,g,p,m,w,y;if("string"!=typeof r&&!(r instanceof Uint8Array))throw Error('The input to "transform" must be a string or a Uint8Array');let{flags:v,mangleCache:b}=(e=[],h=Object.create(null),L(e,s,h,a,E),B(e,s,h),f=W(s,h,"sourcemap",M),g=W(s,h,"sourcefile",j),p=W(s,h,"loader",j),m=W(s,h,"banner",j),w=W(s,h,"footer",j),y=W(s,h,"mangleCache",A),z(s,h,`in ${i}() call`),f&&e.push(`--sourcemap=${!0===f?"external":f}`),g&&e.push(`--sourcefile=${g}`),p&&e.push(`--loader=${p}`),m&&e.push(`--banner=${m}`),w&&e.push(`--footer=${w}`),{flags:e,mangleCache:V(y)}),x={command:"transform",flags:v,inputFS:null!==u,input:null!==u?t(u):"string"==typeof r?t(r):r};b&&(x.mangleCache=b),c(n,x,(e,t)=>{if(e)return o(Error(e),null);let i=X(t.errors,d),n=X(t.warnings,d),r=1,s=()=>{if(0==--r){let e={warnings:n,code:t.code,map:t.map,mangleCache:void 0,legalComments:void 0};"legalComments"in t&&(e.legalComments=null==t?void 0:t.legalComments),t.mangleCache&&(e.mangleCache=null==t?void 0:t.mangleCache),o(null,e)}};if(i.length>0)return o(K("Transform failed",i,n),null);t.codeFS&&(r++,l.readFile(t.code,(e,i)=>{null!==e?o(e,null):(t.code=i,s())})),t.mapFS&&(r++,l.readFile(t.map,(e,i)=>{null!==e?o(e,null):(t.map=i,s())})),s()})}catch(r){let t=[];try{L(t,s,{},a,E)}catch(e){}let i=q(r,e,d,void 0,"");c(n,{command:"error",flags:t,error:i},()=>{i.detail=d.load(i.detail),o(K("Transform failed",[i],[]),null)})}};if(("string"==typeof r||r instanceof Uint8Array)&&r.length>1048576){let e=u;u=()=>l.writeFile(r,e)}u(null)},formatMessages:({callName:e,refs:t,messages:i,options:n,callback:r})=>{if(!n)throw Error(`Missing second argument in ${e}() call`);let s={},a=W(n,s,"kind",j),l=W(n,s,"color",k),o=W(n,s,"terminalWidth",$);if(z(n,s,`in ${e}() call`),void 0===a)throw Error(`Missing "kind" in ${e}() call`);if("error"!==a&&"warning"!==a)throw Error(`Expected "kind" to be "error" or "warning" in ${e}() call`);let d={command:"format-msgs",messages:Z(i,"messages",null,"",o),isWarning:"warning"===a};void 0!==l&&(d.color=l),void 0!==o&&(d.terminalWidth=o),c(t,d,(e,t)=>{if(e)return r(Error(e),null);r(null,t.messages)})},analyzeMetafile:({callName:e,refs:t,metafile:i,options:n,callback:r})=>{void 0===n&&(n={});let s={},a=W(n,s,"color",k),l=W(n,s,"verbose",k);z(n,s,`in ${e}() call`);let o={command:"analyze-metafile",metafile:i};void 0!==a&&(o.color=a),void 0!==l&&(o.verbose=l),c(t,o,(e,t)=>{if(e)return r(Error(e),null);r(null,t.result)})}}}}({writeToStdin(e){o.postMessage(e)},isSync:!1,hasFS:!1,esbuild:f});yield u,a=()=>{o.terminate(),s=void 0,a=void 0,l=void 0},l={build:e=>new Promise((t,i)=>p.buildOrContext({callName:"build",refs:null,options:e,isTTY:!1,defaultWD:"/",callback:(e,n)=>e?i(e):t(n)})),context:e=>new Promise((t,i)=>p.buildOrContext({callName:"context",refs:null,options:e,isTTY:!1,defaultWD:"/",callback:(e,n)=>e?i(e):t(n)})),transform:(e,t)=>new Promise((i,n)=>p.transform({callName:"transform",refs:null,input:e,options:t||{},isTTY:!1,fs:{readFile(e,t){t(Error("Internal error"),null)},writeFile(e,t){t(null)}},callback:(e,t)=>e?n(e):i(t)})),formatMessages:(e,t)=>new Promise((i,n)=>p.formatMessages({callName:"formatMessages",refs:null,messages:e,options:t,callback:(e,t)=>e?n(e):i(t)})),analyzeMetafile:(e,t)=>new Promise((i,n)=>p.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:"string"==typeof e?e:JSON.stringify(e),options:t,callback:(e,t)=>e?n(e):i(t)}))}}),em=f})(t)},75930,(e,t,i)=>{!function(){"use strict";var e={431:function(e){function t(e){if("string"!=typeof e)throw TypeError("Path must be a string. Received "+JSON.stringify(e))}function i(e,t){for(var i,n="",r=0,s=-1,a=0,l=0;l<=e.length;++l){if(l<e.length)i=e.charCodeAt(l);else if(47===i)break;else i=47;if(47===i){if(s===l-1||1===a);else if(s!==l-1&&2===a){if(n.length<2||2!==r||46!==n.charCodeAt(n.length-1)||46!==n.charCodeAt(n.length-2)){if(n.length>2){var o=n.lastIndexOf("/");if(o!==n.length-1){-1===o?(n="",r=0):r=(n=n.slice(0,o)).length-1-n.lastIndexOf("/"),s=l,a=0;continue}}else if(2===n.length||1===n.length){n="",r=0,s=l,a=0;continue}}t&&(n.length>0?n+="/..":n="..",r=2)}else n.length>0?n+="/"+e.slice(s+1,l):n=e.slice(s+1,l),r=l-s-1;s=l,a=0}else 46===i&&-1!==a?++a:a=-1}return n}var n={resolve:function(){for(var e,n,r="",s=!1,a=arguments.length-1;a>=-1&&!s;a--)a>=0?n=arguments[a]:(void 0===e&&(e=""),n=e),t(n),0!==n.length&&(r=n+"/"+r,s=47===n.charCodeAt(0));if(r=i(r,!s),s)if(r.length>0)return"/"+r;else return"/";return r.length>0?r:"."},normalize:function(e){if(t(e),0===e.length)return".";var n=47===e.charCodeAt(0),r=47===e.charCodeAt(e.length-1);return(0!==(e=i(e,!n)).length||n||(e="."),e.length>0&&r&&(e+="/"),n)?"/"+e:e},isAbsolute:function(e){return t(e),e.length>0&&47===e.charCodeAt(0)},join:function(){if(0==arguments.length)return".";for(var e,i=0;i<arguments.length;++i){var r=arguments[i];t(r),r.length>0&&(void 0===e?e=r:e+="/"+r)}return void 0===e?".":n.normalize(e)},relative:function(e,i){if(t(e),t(i),e===i||(e=n.resolve(e))===(i=n.resolve(i)))return"";for(var r=1;r<e.length&&47===e.charCodeAt(r);++r);for(var s=e.length,a=s-r,l=1;l<i.length&&47===i.charCodeAt(l);++l);for(var o=i.length-l,d=a<o?a:o,c=-1,u=0;u<=d;++u){if(u===d){if(o>d){if(47===i.charCodeAt(l+u))return i.slice(l+u+1);else if(0===u)return i.slice(l+u)}else a>d&&(47===e.charCodeAt(r+u)?c=u:0===u&&(c=0));break}var h=e.charCodeAt(r+u);if(h!==i.charCodeAt(l+u))break;47===h&&(c=u)}var f="";for(u=r+c+1;u<=s;++u)(u===s||47===e.charCodeAt(u))&&(0===f.length?f+="..":f+="/..");return f.length>0?f+i.slice(l+c):(l+=c,47===i.charCodeAt(l)&&++l,i.slice(l))},_makeLong:function(e){return e},dirname:function(e){if(t(e),0===e.length)return".";for(var i=e.charCodeAt(0),n=47===i,r=-1,s=!0,a=e.length-1;a>=1;--a)if(47===(i=e.charCodeAt(a))){if(!s){r=a;break}}else s=!1;return -1===r?n?"/":".":n&&1===r?"//":e.slice(0,r)},basename:function(e,i){if(void 0!==i&&"string"!=typeof i)throw TypeError('"ext" argument must be a string');t(e);var n,r=0,s=-1,a=!0;if(void 0!==i&&i.length>0&&i.length<=e.length){if(i.length===e.length&&i===e)return"";var l=i.length-1,o=-1;for(n=e.length-1;n>=0;--n){var d=e.charCodeAt(n);if(47===d){if(!a){r=n+1;break}}else -1===o&&(a=!1,o=n+1),l>=0&&(d===i.charCodeAt(l)?-1==--l&&(s=n):(l=-1,s=o))}return r===s?s=o:-1===s&&(s=e.length),e.slice(r,s)}for(n=e.length-1;n>=0;--n)if(47===e.charCodeAt(n)){if(!a){r=n+1;break}}else -1===s&&(a=!1,s=n+1);return -1===s?"":e.slice(r,s)},extname:function(e){t(e);for(var i=-1,n=0,r=-1,s=!0,a=0,l=e.length-1;l>=0;--l){var o=e.charCodeAt(l);if(47===o){if(!s){n=l+1;break}continue}-1===r&&(s=!1,r=l+1),46===o?-1===i?i=l:1!==a&&(a=1):-1!==i&&(a=-1)}return -1===i||-1===r||0===a||1===a&&i===r-1&&i===n+1?"":e.slice(i,r)},format:function(e){var t,i;if(null===e||"object"!=typeof e)throw TypeError('The "pathObject" argument must be of type Object. Received type '+typeof e);return t=e.dir||e.root,i=e.base||(e.name||"")+(e.ext||""),t?t===e.root?t+i:t+"/"+i:i},parse:function(e){t(e);var i,n={root:"",dir:"",base:"",ext:"",name:""};if(0===e.length)return n;var r=e.charCodeAt(0),s=47===r;s?(n.root="/",i=1):i=0;for(var a=-1,l=0,o=-1,d=!0,c=e.length-1,u=0;c>=i;--c){if(47===(r=e.charCodeAt(c))){if(!d){l=c+1;break}continue}-1===o&&(d=!1,o=c+1),46===r?-1===a?a=c:1!==u&&(u=1):-1!==a&&(u=-1)}return -1===a||-1===o||0===u||1===u&&a===o-1&&a===l+1?-1!==o&&(0===l&&s?n.base=n.name=e.slice(1,o):n.base=n.name=e.slice(l,o)):(0===l&&s?(n.name=e.slice(1,a),n.base=e.slice(1,o)):(n.name=e.slice(l,a),n.base=e.slice(l,o)),n.ext=e.slice(a,o)),l>0?n.dir=e.slice(0,l-1):s&&(n.dir="/"),n},sep:"/",delimiter:":",win32:null,posix:null};n.posix=n,e.exports=n}},i={};function n(t){var r=i[t];if(void 0!==r)return r.exports;var s=i[t]={exports:{}},a=!0;try{e[t](s,s.exports,n),a=!1}finally{a&&delete i[t]}return s.exports}n.ab="/ROOT/node_modules/.pnpm/next@16.3.1_@babel+core@7.29.0_@opentelemetry+api@1.9.1_@types+node@20.17.6_react-dom@19.2.3_react@19.2.3__react@19.2.3/node_modules/next/dist/compiled/path-browserify/",t.exports=n(431)}()}]);