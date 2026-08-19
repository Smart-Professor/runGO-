module.exports=[221591,a=>{"use strict";var b=a.i(340139),c=a.i(704814),d=a.i(921872),e=a.i(766850),f=a.i(396437);let g=(0,c.componentWrapper)("PacificaSurface",({children:a,className:c,...d},e)=>(0,b.jsxs)("div",{ref:e,"data-pacifica-children-flex-grow":!0,className:(0,f.cn)("relative flex flex-col stretch min-h-0",c),...d,children:[(0,b.jsx)("div",{className:"absolute inset-0 rounded-[inherit]",style:{zIndex:-9999999},inert:!0,"data-pacifica-surface":!0}),a]})),h=(0,c.componentWrapper)("PacificaCard",({className:a,title:c,subtitle:f,header:h,footer:i,children:j,innerProps:k,...l},m)=>{let n=(c||f||h||i)&&(0,b.jsxs)(b.Fragment,{children:[h,c&&(0,b.jsx)("h3",{ref:m,className:(0,e.cn)("font-semibold leading-none tracking-tight capitalize",a),children:c}),f&&(0,b.jsx)("h4",{ref:m,className:(0,e.cn)("text-sm text-muted-foreground",a),children:f})]});return(0,b.jsx)(g,{ref:m,className:(0,e.cn)("rounded-xl",a),...(0,d.filterUndefined)(l),children:(0,b.jsxs)("div",{className:"p-6 overflow-y-auto rounded-[inherit] grow-1","data-pacifica-border":!0,children:[n&&(0,b.jsx)("div",{className:"flex flex-col space-y-0.5 pb-4",children:n}),(0,b.jsx)("div",{...k,children:j})]})})});h.displayName="PacificaCard",(0,c.forwardRefIfNeeded)(({className:a,...c},d)=>(0,b.jsx)("div",{ref:d,className:(0,e.cn)("flex flex-col space-y-1.5 p-6 pb-0",a),...c})).displayName="PacificaCardHeader",(0,c.forwardRefIfNeeded)(({className:a,...c},d)=>(0,b.jsx)("h3",{ref:d,className:(0,e.cn)("font-semibold leading-none tracking-tight capitalize",a),...c})).displayName="PacificaCardTitle",(0,c.forwardRefIfNeeded)(({className:a,...c},d)=>(0,b.jsx)("p",{ref:d,className:(0,e.cn)("text-sm text-muted-foreground",a),...c})).displayName="PacificaCardDescription",(0,c.forwardRefIfNeeded)(({className:a,...c},d)=>(0,b.jsx)("div",{ref:d,className:(0,e.cn)("p-6",a),...c})).displayName="PacificaCardContent",(0,c.forwardRefIfNeeded)(({className:a,...c},d)=>(0,b.jsx)("h4",{ref:d,className:(0,e.cn)("text-sm text-muted-foreground font-bold",a),...c})),(0,c.forwardRefIfNeeded)(({className:a,...c},d)=>(0,b.jsx)("div",{ref:d,className:(0,e.cn)("flex items-center p-6 pt-0",a),...c})).displayName="PacificaCardFooter",a.i(990559);var i=a.i(268415),j=a.i(792024),k=a.i(49060),l=a.i(45624),m=a.i(915346),n=a.i(116329),o=a.i(161228),p=a.i(767854),q=a.i(814747),r=a.i(954886),s=a.i(591888),t=a.i(865781),u=a.i(648470),v=a.i(348082),w=a.i(485492);let x=null==v.version&&null!=v.default?v.default:v;globalThis.self??=globalThis;let y=null;function z(){let a=`https://unpkg.com/esbuild-wasm@${x.version}/esbuild.wasm`;return null==y&&(y=(0,w.withTraceSpan)("initializeEsbuild",async()=>{try{let b;b=(0,r.isBrowserLike)()?{wasmURL:a}:{wasmModule:await (0,t.createGlobalAsync)("esbuildWasmModule",async()=>{let b=await fetch(a);if(!b.ok)throw new p.HexclaveAssertionError(`Failed to fetch esbuild.wasm: ${b.status} ${b.statusText}: ${await b.text()}`);let c=await b.arrayBuffer(),d=new Uint8Array(c);if(0!==d[0]||97!==d[1]||115!==d[2]||109!==d[3])throw new p.HexclaveAssertionError(`Invalid esbuild.wasm file: ${new TextDecoder().decode(d)}`);return new WebAssembly.Module(c)}),worker:!1};try{await x.initialize(b)}catch(a){if(a instanceof Error&&'Cannot call "initialize" more than once'===a.message);else throw a}}catch(a){throw y=null,new p.HexclaveAssertionError("Failed to initialize ESBuild",{cause:a})}})(),(0,s.ignoreUnhandledRejection)(y)),y}async function A(a,b={}){let c;await z();let d=new Map(Object.entries(a)),e=new Map(Object.entries(b.externalPackages??{})),f=b.keepAsImports??[],g=new Map,h=new Map([["tsx","tsx"],["ts","ts"],["js","js"],["jsx","jsx"],["json","json"],["css","css"]]);try{c=await (0,w.traceSpan)("bundleJavaScript",async()=>await x.build({entryPoints:["/entry.js"],bundle:!0,write:!1,format:b.format??"iife",platform:"browser",target:"es2015",jsx:"automatic",sourcemap:b.sourcemap??"inline",external:f,plugins:[...b.allowHttpImports?[{name:"esm-sh-only",setup(a){a.onResolve({filter:/.*/},a=>{let b=a.path.startsWith("http://")||a.path.startsWith("https://"),c="esm-sh"===a.namespace;if(!b&&!c)return null;let d=new URL(a.path,c?a.importer:void 0);if("https:"!==d.protocol||"esm.sh"!==d.host)throw Error(`Blocked non-esm.sh URL import: ${d.href}`);return{path:d.href,namespace:"esm-sh"}}),a.onLoad({filter:/.*/,namespace:"esm-sh"},async a=>{if(g.has(a.path))return g.get(a.path);let b=await fetch(a.path,{redirect:"follow"});if(!b.ok)throw Error(`Fetch ${b.status} ${b.statusText} for ${a.path}`);let c=new URL(b.url);if("esm.sh"!==c.host)throw Error(`Redirect escaped esm.sh: ${c.href}`);let d=(b.headers.get("content-type")||"").toLowerCase(),e=d.includes("css")?"css":d.includes("json")?"json":d.includes("typescript")?"ts":d.includes("jsx")?"jsx":d.includes("tsx")?"tsx":"js",f=c.pathname;f.endsWith(".css")?e="css":f.endsWith(".json")?e="json":f.endsWith(".ts")?e="ts":f.endsWith(".tsx")?e="tsx":f.endsWith(".jsx")&&(e="jsx");let h={contents:await b.text(),loader:e,resolveDir:new URL(".",c.href).toString(),watchFiles:[c.href]};return g.set(a.path,h),h})}}]:[],{name:"replace-packages-with-globals",setup(a){a.onResolve({filter:/.*/},a=>{if(!f.includes(a.path)&&e.has(a.path))return{path:a.path,namespace:"package-shim"}}),a.onLoad({filter:/.*/,namespace:"package-shim"},a=>{let b=e.get(a.path);if(null==b)throw new p.HexclaveAssertionError(`esbuild requested file ${a.path} that is not in the virtual file system`);return{contents:b,loader:"ts"}})}},{name:"virtual-fs",setup(a){a.onResolve({filter:/.*/},a=>{let b=(0,q.join)("/",a.path);if(d.has(b))return{path:b,namespace:"virtual"}}),a.onLoad({filter:/.*/,namespace:"virtual"},a=>{let b=d.get(a.path);if(null==b)throw new p.HexclaveAssertionError(`esbuild requested file ${a.path} that is not in the virtual file system`);let c=a.path.split(".").pop()??"";return{contents:b,loader:h.get(c)??(0,p.throwErr)(`esbuild requested file ${a.path} with unknown extension ${c}`)}})}}]}))}catch(a){if(a instanceof Error&&a.message.startsWith("Build failed with "))return u.Result.error(a.message);throw a}return c.errors.length>0?u.Result.error(c.errors.map(a=>a.text).join("\n")):c.outputFiles.length>0?u.Result.ok(c.outputFiles[0].text):(0,p.throwErr)("No output generated??")}"u">typeof process&&"function"==typeof process.exit&&"development"===(0,r.getProcessEnv)("NODE_ENV")&&(0,s.runAsynchronously)(async()=>{try{await z()}catch(a){(0,p.captureError)("initialize-esbuild-in-dev",a)}});var B=a.i(116623),C=a.i(964569),D=a.i(48571),E=a.i(348089),F=a.i(643599),G=a.i(373438),H=a.i(419931);let I={React:F.default,jsxRuntime:b,Card:h,Button:i.Button,Input:k.Input};async function J(a){return await A({"/source.tsx":a,"/entry.js":`
      import * as widget from "./source.tsx";
      __STACK_WIDGET_RESOLVE(widget);
    `},{format:"iife",externalPackages:{react:"module.exports = React;","react/jsx-runtime":"module.exports = jsxRuntime;"}})}async function K(a){let b=await J(a);return{id:(0,D.generateUuid)(),version:1,sourceJs:a,compilationResult:b}}let L=null;function M(a,c){return{id:a,MainComponent:()=>(0,b.jsx)(h,{style:{inset:"0",position:"absolute",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},children:(0,b.jsx)("div",{style:{fontSize:"16px",fontWeight:"bold",color:"red",fontFamily:"monospace",whiteSpace:"pre-wrap"},children:c})}),defaultSettings:null,defaultState:null}}async function N(a){if("ok"===a.compilationResult.status){let b,c=Object.entries(I),d=c.map(([a])=>a),e=c.map(([a,b])=>b),f=a.compilationResult.data;try{b=await new Promise(a=>Function(...d,"__STACK_WIDGET_RESOLVE",f)(...e,a))}catch(c){let b;return b=`Widget failed to run: ${(0,p.errorToNiceString)(c)}`,M(a.id,b)}let g=Object.entries(O).filter(([a,b])=>"never"!==b).map(([a])=>a),h=Object.entries(O).filter(([a,b])=>"required"===b).map(([a])=>a),i=Object.keys(b),j=i.filter(a=>!g.includes(a));if(j.length>0){let b;return b=`Widget has invalid exports: ${j.join(", ")}. Only these exports are allowed: ${Object.entries(O).filter(([a,b])=>"required"===b).map(([a])=>a).join(", ")}`,M(a.id,b)}let k=h.filter(a=>!i.includes(a));if(k.length>0){let b;return b=`Widget is missing required exports: ${k.join(", ")}`,M(a.id,b)}return b.id=a.id,b}{let b,c=a.compilationResult.error;return b=`Widget failed to compile: ${c}`,M(a.id,b)}}let O={id:"never",MainComponent:"required",SettingsComponent:"optional",defaultSettings:"required",defaultState:"required",calculateMinSize:"optional",hasSubGrid:"optional",isHeightVariable:"optional"};function P(a){return{id:(0,D.generateUuid)(),widget:a,settingsOrUndefined:void 0,stateOrUndefined:void 0}}function Q(a){return{id:a.id,widgetId:a.widget.id,...void 0===a.settingsOrUndefined?{}:{settingsOrUndefined:a.settingsOrUndefined},...void 0===a.stateOrUndefined?{}:{stateOrUndefined:a.stateOrUndefined}}}function R(a,b){if("object"!=typeof b||null===b)throw new p.HexclaveAssertionError("Serialized widget instance is not an object!",{serialized:b});if("string"!=typeof b.id)throw new p.HexclaveAssertionError("Serialized widget instance id is not a string!",{serialized:b});return{id:b.id,widget:a.find(a=>a.id===b.widgetId)??M(b.id,`Widget ${b.widgetId} not found. Was it deleted?`),settingsOrUndefined:b.settingsOrUndefined,stateOrUndefined:b.stateOrUndefined}}function S(a){return void 0===a.settingsOrUndefined?a.widget.defaultSettings:a.settingsOrUndefined}function T(a){return void 0===a.stateOrUndefined?a.widget.defaultState:a.stateOrUndefined}class U{_nonEmptyElements;_varHeights;width;_fixedHeight;static DEFAULT_ELEMENT_WIDTH=12;static DEFAULT_ELEMENT_HEIGHT=8;static MIN_ELEMENT_WIDTH=4;static MIN_ELEMENT_HEIGHT=2;constructor(a,b,c,d){this._nonEmptyElements=a,this._varHeights=b,this.width=c,this._fixedHeight=d,this._elementsCache=null,this._as2dArrayCache=null,this._clampResizeCache=new Map,this._canAddVarHeightCache=new Map;const e=new Set,f=a=>{if(e.has(a.id))throw new p.HexclaveAssertionError(`Widget instance ${a.id} is duplicated!`,{instance:a});e.add(a.id);let b=S(a),c=T(a);if(!(0,B.isJsonSerializable)(b))throw new p.HexclaveAssertionError("Settings must be JSON serializable",{instance:a,settings:b});if(!(0,B.isJsonSerializable)(c))throw new p.HexclaveAssertionError("State must be JSON serializable",{instance:a,state:c})};for(const a of this._nonEmptyElements){if(null===a.instance)throw new p.HexclaveAssertionError("Non-empty element instance is null!",{element:a});if(a.width<U.MIN_ELEMENT_WIDTH)throw new p.HexclaveAssertionError(`Width must be at least ${U.MIN_ELEMENT_WIDTH}`,{width:a.width,element:a});if(a.height<U.MIN_ELEMENT_HEIGHT)throw new p.HexclaveAssertionError(`Height must be at least ${U.MIN_ELEMENT_HEIGHT}`,{height:a.height,element:a});if(a.x+a.width>c)throw new p.HexclaveAssertionError(`Element ${a.instance.id} is out of bounds: ${a.x+a.width} > ${c}`,{width:c,element:a});if("auto"!==this._fixedHeight&&a.y+a.height>this._fixedHeight)throw new p.HexclaveAssertionError(`Element ${a.instance.id} is out of bounds: ${a.y+a.height} > ${this._fixedHeight}`,{height:this._fixedHeight,element:a});if(a.instance.widget.isHeightVariable)throw new p.HexclaveAssertionError(`Element ${a.instance.id} is passed in as a grid element, but has a variable height!`,{element:a});f(a.instance)}for(const[a,b]of this._varHeights){if(0===b.length)throw new p.HexclaveAssertionError(`No variable height widgets found at y = ${a}!`,{varHeights:this._varHeights});for(const a of b)f(a)}}static fromSingleWidgetInstance(a){return U.fromWidgetInstances([a],{width:U.DEFAULT_ELEMENT_WIDTH,height:U.DEFAULT_ELEMENT_HEIGHT})}static fromWidgetInstances(a,b={}){let c=b.width??24,d=b.height??"auto",e=a.filter(a=>!a.widget.isHeightVariable).map((a,b)=>({instance:a,x:b*U.DEFAULT_ELEMENT_WIDTH%c,y:Math.floor(b/Math.floor(c/U.DEFAULT_ELEMENT_WIDTH))*U.DEFAULT_ELEMENT_HEIGHT,width:U.DEFAULT_ELEMENT_WIDTH,height:U.DEFAULT_ELEMENT_HEIGHT})).sort((a,b)=>Math.sign(a.x-b.x)+.1*Math.sign(a.y-b.y)),f=a.filter(a=>a.widget.isHeightVariable);return new U(e,new Map(0===f.length?[]:[[0,f]]),c,d)}serialize(){let a={className:"WidgetInstanceGrid",version:1,width:this.width,fixedHeight:this._fixedHeight,nonEmptyElements:this._nonEmptyElements.map(a=>({instance:a.instance?Q(a.instance):null,x:a.x,y:a.y,width:a.width,height:a.height})),varHeights:[...this._varHeights.entries()].map(([a,b])=>({y:a,instances:b.map(Q)}))},b=JSON.parse(JSON.stringify(a));if(!(0,d.deepPlainEquals)(b,a))throw new p.HexclaveAssertionError("WidgetInstanceGrid serialization is not JSON-serializable!",{beforeJsonSerialization:a,afterJsonSerialization:b});return a}static fromSerialized(a){if("object"!=typeof a||null===a)throw new p.HexclaveAssertionError("WidgetInstanceGrid serialization is not an object or is null!",{serialized:a});if(!("className"in a)||"string"!=typeof a.className||"WidgetInstanceGrid"!==a.className)throw new p.HexclaveAssertionError("WidgetInstanceGrid serialization is not a WidgetInstanceGrid!",{serialized:a});if(1===a.version)return new U(a.nonEmptyElements.map(a=>({instance:a.instance?R(V,a.instance):null,x:a.x,y:a.y,width:a.width,height:a.height})),new Map(a.varHeights.map(a=>[a.y,a.instances.map(a=>R(V,a))])),a.width,a.fixedHeight);throw new p.HexclaveAssertionError(`Unknown WidgetInstanceGrid version ${a.version}!`,{serialized:a})}get height(){return"auto"===this._fixedHeight?Math.max(0,...[...this._nonEmptyElements].map(({y:a,height:b})=>a+b))+U.DEFAULT_ELEMENT_HEIGHT:this._fixedHeight}static _withEmptyElements(a,b,c){let d=[...c],e=a.map((a,b)=>[...a]);for(let c=0;c<a.length;c++)for(let f=0;f<a[c].length;f++)if(null===e[c][f]){let g=c+1;for(;g<a.length&&g-c<U.DEFAULT_ELEMENT_WIDTH&&null===e[g][f];)g++;let h=f+1;a:for(;h<a[c].length&&h-f<U.DEFAULT_ELEMENT_HEIGHT&&!b.has(h);){for(let a=c;a<g;a++)if(null!==e[a][h])break a;h++}d.push({x:c,y:f,width:g-c,height:h-f,instance:null});for(let a=c;a<g;a++)for(let b=f;b<h;b++)e[a][b]="empty"}return d}_elementsCache;elements(){return null===this._elementsCache&&(this._elementsCache=U._withEmptyElements(this.as2dArray(),this._varHeights,this._nonEmptyElements)),this._elementsCache}varHeights(){return this._varHeights}_as2dArrayCache;as2dArray(){if(null!==this._as2dArrayCache)return this._as2dArrayCache;let a=Array(this.width).fill(null).map(()=>Array(this.height).fill(null));return[...this._nonEmptyElements].forEach(({x:b,y:c,width:d,height:e,instance:f})=>{if(b+d>this.width)throw new p.HexclaveAssertionError(`Widget instance ${f?.id} is out of bounds: ${b+d} > ${this.width}`);for(let g=0;g<d;g++)for(let d=0;d<e;d++)a[b+g][c+d]=f}),this._as2dArrayCache=a}getElementAt(a,b){if(a<0||a>=this.width||b<0||b>=this.height)throw new p.HexclaveAssertionError(`Invalid coordinates for getElementAt: ${a}, ${b}`);return[...this.elements()].find(c=>a>=c.x&&a<c.x+c.width&&b>=c.y&&b<c.y+c.height)??(0,p.throwErr)(`No element found at ${a}, ${b}`)}getElementByInstanceId(a){return[...this.elements()].find(b=>b.instance?.id===a)??null}getInstanceById(a){let b=this.getElementByInstanceId(a);if(b?.instance)return b.instance;let c=this.getVarHeightInstanceById(a);return c||null}getMinResizableSize(){return{width:Math.max(1,...[...this._nonEmptyElements].map(({x:a,width:b})=>a+b)),height:Math.max(1,...[...this._nonEmptyElements].map(({y:a,height:b})=>a+b))}}resize(a,b){if(this.width===a&&this._fixedHeight===b)return this;let c=this.getMinResizableSize();if(a<c.width)throw new p.HexclaveAssertionError(`Width must be at least ${c.width}`,{width:a});if("auto"!==b&&b<c.height)throw new p.HexclaveAssertionError(`Height must be at least ${c.height}`,{height:b});return new U(this._nonEmptyElements,this._varHeights,a,b)}elementMinSize(a){let b={width:U.MIN_ELEMENT_WIDTH,height:U.MIN_ELEMENT_HEIGHT};if(a.instance?.widget.calculateMinSize){let c=a.instance.widget.calculateMinSize({settings:a.instance.settingsOrUndefined,state:a.instance.stateOrUndefined});if(c.widthInGridUnits>a.width||c.heightInGridUnits>a.height)throw new p.HexclaveAssertionError(`Widget ${a.instance.widget.id} has a size of ${a.width}x${a.height}, but calculateMinSize returned a smaller value (${c.widthInGridUnits}x${c.heightInGridUnits}).`);b.width=Math.max(b.width,c.widthInGridUnits),b.height=Math.max(b.height,c.heightInGridUnits)}return b}_canFitSize(a,b,c,d,e){if(b<0||b+d>this.width||c<0||c+e>this.height)return!1;let f=this.elementMinSize(a);return!(d<f.width)&&!(e<f.height)}canSwap(a,b,c,d){let e=[this.getElementAt(a,b),this.getElementAt(c,d)];return(null===e[0].instance||this._canFitSize(e[0],e[1].x,e[1].y,e[1].width,e[1].height))&&(null===e[1].instance||this._canFitSize(e[1],e[0].x,e[0].y,e[0].width,e[0].height))}withSwappedElements(a,b,c,d){if(!this.canSwap(a,b,c,d))throw new p.HexclaveAssertionError(`Cannot swap elements at ${a}, ${b} and ${c}, ${d}`);let e=[this.getElementAt(a,b),this.getElementAt(c,d)];return new U([...this.elements()].map(a=>a.x===e[0].x&&a.y===e[0].y?{...a,instance:e[1].instance}:a.x===e[1].x&&a.y===e[1].y?{...a,instance:e[0].instance}:a).filter(a=>null!==a.instance),this._varHeights,this.width,this._fixedHeight)}_clampResizeCache;clampElementResize(a,b,c){let e=this.getElementAt(a,b),f=`${e.x},${e.y},${JSON.stringify(c)}`;if(!this._clampResizeCache.has(f)){let g=this.as2dArray(),h=e.x+c.left,i=e.y+c.top,j=e.width-c.left+c.right,k=e.height-c.top+c.bottom,l=this.elementMinSize(e),m=!1;if(j>=l.width&&k>=l.height&&h>=0&&i>=0&&h+j<=this.width&&i+k<=this.height){m=!0;a:for(let a=0;a<j;a++)for(let b=0;b<k;b++)if(null!==g[h+a][i+b]&&g[h+a][i+b]!==e.instance){m=!1;break a}}if(m)this._clampResizeCache.set(f,c);else{let e=a=>a>0?a-1:a<0?a+1:a,g=[0!==c.top?this.clampElementResize(a,b,{...c,top:e(c.top)}):null,0!==c.left?this.clampElementResize(a,b,{...c,left:e(c.left)}):null,0!==c.bottom?this.clampElementResize(a,b,{...c,bottom:e(c.bottom)}):null,0!==c.right?this.clampElementResize(a,b,{...c,right:e(c.right)}):null].filter(d.isNotNull),h=0,i={top:0,left:0,bottom:0,right:0};for(let a of g){let b=Math.abs(a.top)+Math.abs(a.left)+Math.abs(a.bottom)+Math.abs(a.right);b>h&&(h=b,i=a)}this._clampResizeCache.set(f,i)}}return this._clampResizeCache.get(f)}withResizedElement(a,b,c){let e=this.clampElementResize(a,b,c);if(!(0,d.deepPlainEquals)(e,c))throw new p.HexclaveAssertionError(`Resize is not allowed: ${JSON.stringify(c)} requested, but only ${JSON.stringify(e)} allowed`);if(0===e.top&&0===e.left&&0===e.bottom&&0===e.right)return this;let f=this.getElementAt(a,b);return new U([...this._nonEmptyElements].map(a=>a.x===f.x&&a.y===f.y?{...a,x:a.x+e.left,y:a.y+e.top,width:a.width-e.left+e.right,height:a.height-e.top+e.bottom}:a),this._varHeights,this.width,this._fixedHeight)}withAddedElement(a,b,c,d,e){return new U([...this._nonEmptyElements,{instance:P(a),x:b,y:c,width:d,height:e}],this._varHeights,this.width,this._fixedHeight)}_withUpdatedElementInstance(a,b,c){let d=this.getElementAt(a,b);return new U(this._nonEmptyElements.map(a=>a.x===d.x&&a.y===d.y?{...a,instance:c(a)}:a).filter(a=>null!==a.instance),this._varHeights,this.width,this._fixedHeight)}withRemovedElement(a,b){return this._withUpdatedElementInstance(a,b,a=>null)}withUpdatedElementSettings(a,b,c){if(!(0,B.isJsonSerializable)(c))throw new p.HexclaveAssertionError(`New settings are not JSON serializable: ${JSON.stringify(c)}`,{newSettings:c});return this._withUpdatedElementInstance(a,b,d=>d.instance?{...d.instance,settingsOrUndefined:c}:(0,p.throwErr)(`No widget instance at ${a}, ${b}`))}withUpdatedElementState(a,b,c){if(!(0,B.isJsonSerializable)(c))throw new p.HexclaveAssertionError(`New state are not JSON serializable: ${JSON.stringify(c)}`,{newState:c});return this._withUpdatedElementInstance(a,b,d=>d.instance?{...d.instance,stateOrUndefined:c}:(0,p.throwErr)(`No widget instance at ${a}, ${b}`))}getVarHeightInstanceById(a){return[...this.varHeights()].flatMap(([a,b])=>b).find(b=>b.id===a)}_withUpdatedVarHeightInstance(a,b){let c=new Map([...this.varHeights()].map(([c,d])=>[c,d.map(c=>c.id===a?b(c):c)]));return new U(this._nonEmptyElements,c,this.width,this._fixedHeight)}withUpdatedVarHeightSettings(a,b){return this._withUpdatedVarHeightInstance(a,a=>({...a,settingsOrUndefined:b}))}withUpdatedVarHeightState(a,b){return this._withUpdatedVarHeightInstance(a,a=>({...a,stateOrUndefined:b}))}withRemovedVarHeight(a){let b=new Map([...this.varHeights()].map(([b,c])=>[b,c.filter(b=>b.id!==a)]).filter(([a,b])=>b.length>0));return new U(this._nonEmptyElements,b,this.width,this._fixedHeight)}_canAddVarHeightCache;canAddVarHeight(a){if(this._canAddVarHeightCache.has(a))return this._canAddVarHeightCache.get(a);let b=!0;for(let c of this.elements())if(c.y<a&&c.y+c.height>a){b=!1;break}return this._canAddVarHeightCache.set(a,b),b}withAddedVarHeightWidget(a,b){return this.withAddedVarHeightAtEndOf(a,P(b))}withAddedVarHeightAtEndOf(a,b){if(!this.canAddVarHeight(a))throw new p.HexclaveAssertionError(`Cannot add var height instance at ${a}`,{y:a,instance:b});let c=new Map(this._varHeights);return c.set(a,[...c.get(a)??[],b]),new U(this._nonEmptyElements,c,this.width,this._fixedHeight)}withAddedVarHeightAtInstance(a,b,c){let d=new Map([...this.varHeights()].map(([d,e])=>[d,e.flatMap(d=>d.id===b?"before"===c?[a,d]:[d,a]:[d])]));return new U(this._nonEmptyElements,d,this.width,this._fixedHeight)}withMovedVarHeightToInstance(a,b,c){if(b===a)return this;let d=this.getVarHeightInstanceById(a)??(0,p.throwErr)(`Widget instance ${a} not found in var heights`,{oldId:a});return this.withRemovedVarHeight(a).withAddedVarHeightAtInstance(d,b,c)}withMovedVarHeightToEndOf(a,b){let c=this.getVarHeightInstanceById(a)??(0,p.throwErr)(`Widget instance ${a} not found in var heights`,{oldId:a});return this.withRemovedVarHeight(a).withAddedVarHeightAtEndOf(b,c)}}let V=[{id:"$sub-grid",MainComponent:({widthInGridUnits:a,heightInGridUnits:d,stateRef:e,isSingleColumnMode:f})=>{let g=(0,c.mapRefState)(e,a=>U.fromSerialized(a.serializedGrid),(a,b)=>({...a,serializedGrid:b.serialize()})),[h]=(0,F.useState)("#"+Math.floor(0xffffff*Math.random()).toString(16)+"22");return(0,F.useEffect)(()=>{let b=g.current.resize(a-1,d-1);b!==g.current&&g.set(b)},[a,d,g]),(0,b.jsx)("div",{style:{backgroundColor:h,padding:"16px"},children:(0,b.jsx)(Y,{isSingleColumnMode:!!f&&"auto",gridRef:g,allowVariableHeight:!1,isStatic:!1})})},defaultSettings:{},defaultState:{serializedGrid:U.fromWidgetInstances([],{width:1,height:1}).serialize()},hasSubGrid:!0,calculateMinSize(a){let b=U.fromSerialized(a.state.serializedGrid).getMinResizableSize();return{widthInGridUnits:Math.max(b.width,U.MIN_ELEMENT_WIDTH)+1,heightInGridUnits:Math.max(b.height,U.MIN_ELEMENT_HEIGHT)+1}}},{id:"$compile-widget",MainComponent:()=>{let[a,c]=(0,F.useState)(C.deindent`
        export function MainComponent(props) {
          return <Card>Hello, {props.settings.name}!</Card>;
        }

        // export function SettingsComponent(props) {
        //   return <div>Name: <Input value={props.settings.name} onChange={(e) => props.setSettings((settings) => ({ ...settings, name: e.target.value }))} /></div>;
        // }

        export const defaultSettings = {name: "world"};
      `),[d,e]=(0,F.useState)(null);return(0,b.jsxs)(h,{title:"Widget compiler",subtitle:"This is a subtitle",children:[(0,b.jsx)("textarea",{value:a,onChange:a=>c(a.target.value),style:{width:"100%",height:"35%",fontFamily:"monospace"}}),(0,b.jsx)(i.Button,{onClick:async()=>{e(await J(a))},children:"Compile"}),d?.status==="ok"&&(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("textarea",{style:{fontFamily:"monospace",width:"100%",height:"35%"},value:d.data,readOnly:!0}),(0,b.jsx)(i.Button,{onClick:async()=>{V.push(await N({id:(0,D.generateUuid)(),version:1,sourceJs:d.data,compilationResult:u.Result.ok(d.data)})),alert("Widget saved")},children:"Save as widget"})]}),d?.status==="error"&&(0,b.jsx)("div",{style:{color:"red"},children:d.error})]})},defaultSettings:{},defaultState:{}},{id:"$variable-height-widget",MainComponent:()=>(0,b.jsx)(h,{title:"Variable height widget",subtitle:"This widget has a variable height. It does not follow the regular grid pattern, and always takes up the grid's full width.",children:(0,b.jsx)("textarea",{value:"resize me",readOnly:!0})}),defaultSettings:{},defaultState:{},isHeightVariable:!0},{id:"$widget-builder",MainComponent:()=>{let[a,d]=(0,F.useState)(C.deindent`
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
      `),e=function(a){let[b,c]=(0,F.useState)(u.AsyncResult.pending());return(0,F.useEffect)(()=>{let b=!1;return(0,s.runAsynchronously)(async()=>{for(c(u.AsyncResult.pending());L;){if(b)return;await L}L=(async()=>{let d=await K(a);if(b||("error"===d.compilationResult.status&&await (0,s.wait)(500),b))return;let e=await N(d);b||c(u.AsyncResult.ok(e))})(),await L,L=null}),()=>{b=!0}},[a]),b}(a),f="ok"===e.status?e.data:null,[g,i]=(0,F.useState)(f),j=(0,c.useRefState)(null);return(0,F.useEffect)(()=>{g!==f&&(f&&j.set(P(f)),i(f))},[f]),(0,b.jsxs)(h,{title:"Widget builder",children:[(0,b.jsx)("textarea",{value:a,onChange:a=>d(a.target.value),style:{width:"100%",height:"35%",fontFamily:"monospace"}}),j.current&&(0,b.jsx)(W,{widgetInstanceRef:j})]})},defaultSettings:{},defaultState:{},hasSubGrid:!0}];function W(a){let d=(0,c.mapRefState)(a.widgetInstanceRef,a=>U.fromSingleWidgetInstance(a),(a,b)=>b.getInstanceById(a.id)??a);return(0,b.jsx)(Y,{gridRef:d,isSingleColumnMode:!0,allowVariableHeight:!0,isStatic:!0})}let X=F.default.createContext({isEditing:!1});function Y(a){let[e,f]=(0,F.useState)(null),[g,h]=(0,F.useState)(null),[i,j]=(0,F.useState)(null),[k,l]=(0,F.useState)(null),[q,r]=(0,F.useState)(null),[s,t]=(0,F.useState)(null),u=(0,F.useRef)(null),v=F.default.use(X),[w,x]=(0,F.useState)(!1);(0,n.default)(u,(a,b)=>{let c=a.contentRect.width<768;w!==c&&x(c)});let y="auto"===a.isSingleColumnMode?w:a.isSingleColumnMode,z=!1,A=a.gridRef.current.varHeights();return(0,b.jsxs)("div",{ref:u,style:{...y?{display:"flex",flexDirection:"column"}:{display:"grid",gridTemplateColumns:`repeat(${a.gridRef.current.width}, 1fr)`,gridTemplateRows:`repeat(${2*a.gridRef.current.height+1}, auto)`},userSelect:"none",WebkitUserSelect:"none",overflow:"none",isolation:"isolate"},children:[!y&&(0,o.range)(a.gridRef.current.height).map(c=>(0,b.jsx)("div",{style:{height:48,gridColumn:`1 / ${a.gridRef.current.width+1}`,gridRow:`${2*c+2} / ${2*c+3}`}},c)),(0,b.jsx)(m.DndContext,{onDragStart:a=>{t(a.active.id),f("var-height")},onDragAbort:()=>{t(null),l(null),f(null)},onDragCancel:()=>{t(null),l(null),f(null)},onDragEnd:b=>{t(null),l(null),f(null);let c=b.active.id;if(b.over){let d=JSON.parse(`${b.over.id}`);"before"===d[0]?a.gridRef.set(a.gridRef.current.withMovedVarHeightToInstance(c,d[1],d[0])):a.gridRef.set(a.gridRef.current.withMovedVarHeightToEndOf(c,d[1]))}},onDragOver:a=>{let b=a.over;b?l(JSON.parse(`${b.id}`)):l(null)},collisionDetection:m.closestCenter,children:(0,o.range)(a.gridRef.current.height+1).map(e=>(0,b.jsx)("div",{style:{gridColumn:"1 / -1",gridRow:`${2*e+1} / ${2*e+2}`,display:"flex",flexDirection:"column"},children:[...A.get(e)??[],null].map((f,g)=>{if(null!==f&&!a.allowVariableHeight)throw new p.HexclaveAssertionError("Variable height widgets are not allowed in this component",{instance:f});let h=f?["before",f.id]:["end-of",e],i=(0,d.deepPlainEquals)(k,h);return(0,b.jsxs)(F.default.Fragment,{children:[a.gridRef.current.canAddVarHeight(e)&&(0,b.jsx)("div",{className:"relative",children:(0,b.jsx)(Z,{isOver:i,location:h})}),null!==f&&(0,b.jsx)("div",{style:{margin:16},children:(0,b.jsx)(_,{isStatic:a.isStatic,type:"var-height",widgetInstance:f,activeWidgetId:s,isEditing:v.isEditing,isSingleColumnMode:y,onDeleteWidget:async()=>{a.gridRef.set(a.gridRef.current.withRemovedVarHeight(f.id))},settings:S(f),setSettings:async b=>{a.gridRef.set(a.gridRef.current.withUpdatedVarHeightSettings(f.id,b))},stateRef:(0,c.mapRefState)(a.gridRef,a=>T(a.getVarHeightInstanceById(f.id)??f),(b,c)=>a.gridRef.current.withUpdatedVarHeightState(f.id,c)),onResize:a=>{throw new p.HexclaveAssertionError("Cannot resize a var-height widget!")},x:0,y:e,width:a.gridRef.current.width,height:1,calculateUnitSize:()=>({width:Math.round(((u.current?.getBoundingClientRect()??(0,p.throwErr)("Grid container not found")).width-(a.gridRef.current.width-1)*32)/a.gridRef.current.width)+32,height:48})})})]},g)})},e))}),(0,b.jsx)(m.DndContext,{onDragStart:a=>{t(a.active.id),f("element"),h(a.activatorEvent.target.getBoundingClientRect())},onDragAbort:()=>{r(null),t(null),j(null),f(null),h(null)},onDragCancel:()=>{r(null),t(null),j(null),f(null),h(null)},onDragEnd:b=>{r(null),t(null),j(null),f(null),h(null);let c=b.active.id,d=[...a.gridRef.current.elements()].find(({instance:a})=>a?.id===c);if(!d)throw new p.HexclaveAssertionError(`Widget instance ${c} not found in grid`);if(b.over){let c=JSON.parse(`${b.over.id}`),e=[d.x,d.y,c[0],c[1]];if(a.gridRef.current.canSwap(...e)){let b=a.gridRef.current.withSwappedElements(...e);a.gridRef.set(b)}else alert("Cannot swap elements; make sure the new locations are big enough for the widgets")}},onDragOver:b=>{let c=b.active.id,d=[...a.gridRef.current.elements()].find(({instance:a})=>a?.id===c);if(!d)throw new p.HexclaveAssertionError(`Widget instance ${c} not found in grid`);if(b.over){if(b.active.rect.current.initial){let e=JSON.parse(`${b.over.id}`);a.gridRef.current.canSwap(d.x,d.y,e[0],e[1])?j([e[0],e[1]]):j(null);let f=a.gridRef.current.getElementAt(e[0],e[1]).instance?.id;f&&f!==c?r([f,[b.over.rect.left-g.left,b.over.rect.top-g.top,g.width,g.height,b.over.rect.width,b.over.rect.height]]):r(null)}}else j(null),r(null)},collisionDetection:m.pointerWithin,children:a.gridRef.current.elements().map(({instance:d,x:e,y:f,width:g,height:h})=>{let j=!!q&&!!d&&q[0]===d.id;if(y&&!d){if(z)return null;z=!0}return(0,b.jsx)($,{isSingleColumnMode:y,isEmpty:!d,isOver:i?.[0]===e&&i[1]===f,x:e,y:f,width:g,height:h,grid:a.gridRef.current,onAddWidget:()=>{let b=a.allowVariableHeight?V:V.filter(a=>!a.isHeightVariable),c=b[Math.floor(Math.random()*b.length)];c.isHeightVariable?a.gridRef.set(a.gridRef.current.withAddedVarHeightWidget(0,c)):a.gridRef.set(a.gridRef.current.withAddedElement(c,e,f,g,h))},children:d&&(0,b.jsx)(_,{isStatic:a.isStatic,type:"element",widgetInstance:d,activeWidgetId:s,isEditing:v.isEditing,style:{transform:j?`translate(${-q[1][0]}px, ${-q[1][1]}px)`:void 0,minWidth:j?`${q[1][2]}px`:q&&s===d.id?`${q[1][4]}px`:void 0,minHeight:j?`${q[1][3]}px`:q&&s===d.id?`${q[1][5]}px`:void 0},isSingleColumnMode:y,onDeleteWidget:async()=>{a.gridRef.set(a.gridRef.current.withRemovedElement(e,f))},settings:S(d),setSettings:async b=>{a.gridRef.set(a.gridRef.current.withUpdatedElementSettings(e,f,b))},stateRef:(0,c.mapRefState)(a.gridRef,a=>{let b=a.getElementByInstanceId(d.id);return T(b?.instance??d)},(a,b)=>a.withUpdatedElementState(e,f,b)),onResize:b=>{let c=a.gridRef.current.clampElementResize(e,f,b);return a.gridRef.set(a.gridRef.current.withResizedElement(e,f,c)),c},x:e,y:f,width:g,height:h,calculateUnitSize:()=>({width:Math.round(((u.current?.getBoundingClientRect()??(0,p.throwErr)("Grid container not found")).width-(a.gridRef.current.width-1)*32)/a.gridRef.current.width)+32,height:48})})},d?.id??JSON.stringify({x:e,y:f}))})})]})}function Z(a){let{setNodeRef:c,active:d}=(0,m.useDroppable)({id:JSON.stringify(a.location)});return(0,b.jsx)("div",{inert:!0,ref:c,style:{position:"absolute",width:"100%",height:4,transform:"translateY(-50%)",backgroundColor:a.isOver?"#0000ff88":"transparent"}})}function $(a){let{setNodeRef:c,active:d}=(0,m.useDroppable)({id:JSON.stringify([a.x,a.y])}),e=a.isEmpty&&a.width>=U.MIN_ELEMENT_WIDTH&&a.height>=U.MIN_ELEMENT_HEIGHT;return(0,b.jsxs)("div",{ref:c,style:{position:"relative",display:"flex",minWidth:0,backgroundColor:a.isOver?"#88888822":void 0,borderRadius:"8px",gridColumn:`${a.x+1} / span ${a.width}`,gridRow:`${2*a.y+2} / span ${2*a.height-1}`,margin:16,minHeight:a.isSingleColumnMode?384:void 0,...a.style},children:[(0,b.jsx)("style",{children:`
        @keyframes stack-animation-fade-in {
          0% {
            opacity: 0;
          }
          100% {
            opacity: 1;
          }
        }
    `}),e&&(0,b.jsx)(b.Fragment,{children:(0,b.jsx)("div",{style:{position:"absolute",inset:0,display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center",gap:"16px",border:"8px dotted #88888822",borderRadius:"16px",animation:"stack-animation-fade-in 400ms 50ms ease forwards",opacity:0},children:(0,b.jsx)(aa,{icon:(0,b.jsx)(G.FaPlus,{size:24,opacity:.7}),onClick:()=>{a.onAddWidget()}})})}),a.children]})}function _(a){let[c,f]=(0,F.useState)(!1),[g,h]=(0,F.useState)(a.settings),[k,n]=(0,F.useState)(0),[o,q]=(0,F.useState)(!1),[r,t]=(0,F.useState)(!1),u=a.isEditing&&!r,[v,w]=(0,F.useState)(null),x=(0,F.useCallback)(b=>{b?(w(null),h(a.settings),f(!0)):(w(v?{...v,revert:!0}:null),f(!1),n(a=>a+1),setTimeout(()=>n(a=>a-1),1e3))},[v,a.settings]),{attributes:y,listeners:z,setNodeRef:A,transform:B,isDragging:C,node:D}=(0,m.useDraggable)({id:a.widgetInstance.id,disabled:!u||a.isStatic}),H=(0,F.useRef)(null);(0,F.useEffect)(()=>{a.isEditing||t(!1)},[a.isEditing]);let I=!a.isSingleColumnMode&&"element"===a.type;(0,F.useEffect)(()=>{let a=!1;return c&&!v&&(0,s.runAsynchronouslyWithAlert)(async()=>{if(!D.current)throw new p.HexclaveAssertionError("Draggable container not found",{draggableContainerRef:D});for(let b=0;b<100;b++){if(a)return;if(H.current)break;await (0,s.wait)(10+3*b)}if(!H.current)throw new p.HexclaveAssertionError("Dialog ref not found even after waiting",{dialogRef:H});if(a)return;let b=D.current.getBoundingClientRect(),c=H.current.getBoundingClientRect(),d=[b.x+b.width/2,b.y+b.height/2],e=[c.x+c.width/2,c.y+c.height/2];w({translate:[d[0]-e[0],d[1]-e[1]],scale:[b.width/c.width,b.height/c.height],shouldStart:!1,revert:!1})}),()=>{a=!0}},[c,v,D]),(0,F.useEffect)(()=>{let a=!1;return v&&!v.shouldStart&&requestAnimationFrame(()=>{(0,s.runAsynchronously)(async()=>{a||w({...v,shouldStart:!0})})}),()=>{a=!0}},[v]);let J=/^((?!chrome|android).)*safari/i.test(navigator.userAgent);return(0,b.jsxs)(b.Fragment,{children:[(0,b.jsx)("style",{children:`
        /* note: Chrome and Safari have different behaviors when it comes to whether backface-visibility and/or transform-style is inherited by children, so we ensure it works with the style tag above + transformStyle */
        .stack-recursive-backface-hidden {
          backface-visibility: hidden;
          ${J?"":"transform-style: preserve-3d;"}
        }
        .stack-recursive-backface-hidden * {
          backface-visibility: hidden;
        }
      `}),(0,b.jsx)("div",{ref:A,className:"stack-recursive-backface-hidden",style:{position:"relative",minWidth:"100%",minHeight:"100%",display:"flex",zIndex:C?1e5:1,transition:["border-width 0.1s ease","box-shadow 0.1s ease",a.activeWidgetId!==a.widgetInstance.id&&null!==a.activeWidgetId?"transform 0.2s ease, min-width 0.2s ease, min-height 0.2s ease":void 0,a.activeWidgetId===a.widgetInstance.id?"min-width 0.2s ease, min-height 0.2s ease":void 0].filter(Boolean).join(", "),...(0,d.filterUndefined)(a.style??{}),transform:`translate3d(${B?.x??0}px, ${B?.y??0}px, 0) ${a.style?.transform??""}`},children:(0,b.jsxs)("div",{className:(0,e.cn)(C&&"bg-white dark:bg-black border-black/20 dark:border-white/20"),style:{...I?{position:"absolute",inset:0}:{position:"relative",width:"100%",height:"100%"},overflow:"hidden",flexGrow:1,alignSelf:"stretch",boxShadow:u?"0 0 32px 0 #8882":"0 0 0 0 transparent",cursor:C?"grabbing":void 0,borderRadius:"8px",borderWidth:u&&!C?"1px":"0px",borderStyle:"solid",transition:o?"transform 0.3s ease, opacity 0.3s":"transform 0.6s ease",transform:[v?.shouldStart&&!v.revert?`
                translate(${-v.translate[0]}px, ${-v.translate[1]}px)
                scale(${1/v.scale[0]}, ${1/v.scale[1]})
                rotateY(180deg)
              `:"rotateY(0deg)",o?"scale(0.8)":""].filter(Boolean).join(" "),opacity:+!o,display:"flex",flexDirection:"row"},children:[(0,b.jsx)("div",{"data-pacifica-children-flex-grow":!0,"data-pacifica-children-min-width-0":!0,style:{flexGrow:1,display:"flex",flexDirection:"row"},children:(0,b.jsx)(X.Provider,{value:{isEditing:r},children:(0,b.jsx)(E.ErrorBoundary,{errorComponent:a=>(0,b.jsxs)("div",{className:"text-red-500 text-sm p-2 bg-red-500/10 font-mono whitespace-pre-wrap",children:["A runtime error occured while rendering this widget.",(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,b.jsx)("button",{className:"text-blue-500 hover:underline",onClick:()=>{a.reset()},children:"Reload widget"}),(0,b.jsx)("br",{}),(0,b.jsx)("br",{}),(0,p.errorToNiceString)(a.error)]}),children:(0,b.jsx)(a.widgetInstance.widget.MainComponent,{settings:S(a.widgetInstance),isSingleColumnMode:a.isSingleColumnMode,state:a.stateRef.current,stateRef:a.stateRef,setState:b=>a.stateRef.set(b(a.stateRef.current)),widthInGridUnits:a.width,heightInGridUnits:a.height})})})}),(0,b.jsx)("div",{inert:!0,style:{position:"absolute",inset:0,opacity:+!!u,transition:"opacity 0.2s ease",backgroundImage:o?void 0:"radial-gradient(circle at top, #ffffff08, #ffffff02), radial-gradient(circle at top right,  #ffffff04, transparent, transparent)",borderRadius:"inherit"}}),(0,b.jsx)("div",{inert:!0,className:(0,e.cn)(u&&!C&&"bg-white/50 dark:bg-black/50"),style:{position:"absolute",inset:0,backdropFilter:u&&!C?"drop-shadow(0 0 2px) blur(4px)":"none",borderRadius:"inherit"}}),!C&&(0,b.jsxs)("div",{style:{opacity:+!!u,transition:"opacity 0.2s ease"},inert:!u,children:[(0,b.jsxs)("div",{className:"",style:{position:"absolute",inset:0,display:"flex",flexDirection:"row",alignItems:"center",justifyContent:"center",gap:"16px"},children:[(0,b.jsx)("div",{...z,...y,style:{cursor:u?"move":void 0,position:"absolute",inset:0}}),a.widgetInstance.widget.hasSubGrid&&(0,b.jsx)(aa,{icon:(0,b.jsx)(G.FaBorderNone,{size:24}),loadingStyle:"disabled",onClick:async()=>{t(!0)}}),(0,b.jsx)(l.SimpleTooltip,{tooltip:a.widgetInstance.widget.SettingsComponent?void 0:"This widget doesn't have any settings.",children:(0,b.jsx)(aa,{disabled:!a.widgetInstance.widget.SettingsComponent,icon:(0,b.jsx)(G.FaPen,{size:24}),onClick:async()=>{x(!0)}})}),(0,b.jsx)(aa,{icon:(0,b.jsx)(G.FaTrash,{size:24}),loadingStyle:"disabled",onClick:async()=>{q(!0);try{await (0,s.wait)(300),await a.onDeleteWidget()}catch(a){throw q(!1),a}}})]}),!a.isStatic&&I&&[-1,0,1].flatMap(c=>[-1,0,1].map(d=>(0!==c||0!==d)&&(0,b.jsx)(ab,{widgetInstance:a.widgetInstance,x:c,y:d,onResize:a.onResize,calculateUnitSize:a.calculateUnitSize},`${c},${d}`)))]})]})}),a.widgetInstance.widget.SettingsComponent&&(0,b.jsx)(j.Dialog,{open:c||k>0,onOpenChange:x,children:(0,b.jsxs)(j.DialogContent,{ref:H,overlayProps:{style:{opacity:v?.shouldStart&&!v.revert?1:0,transition:"opacity 0.4s ease",animation:"none"}},style:{transform:["translate(-50%, -50%)",!v?"":v.shouldStart&&!v.revert?"rotateY(0deg)":`
                    translate(${v.translate[0]}px, ${v.translate[1]}px)
                    scale(${v.scale[0]}, ${v.scale[1]})
                    rotateY(180deg)
                  `].filter(Boolean).join(" "),transition:v?.shouldStart?"transform 0.6s ease":"none",visibility:v?"visible":"hidden",animation:"none"},inert:!c,onInteractOutside:a=>a.preventDefault(),className:"[&>button]:hidden stack-recursive-backface-hidden",children:[(0,b.jsx)(j.DialogHeader,{children:(0,b.jsx)(j.DialogTitle,{className:"flex items-center",children:"Edit Widget"})}),(0,b.jsx)(j.DialogBody,{className:"pb-2",children:(0,b.jsx)(a.widgetInstance.widget.SettingsComponent,{settings:g,setSettings:h})}),(0,b.jsxs)(j.DialogFooter,{className:"gap-2",children:[(0,b.jsx)(i.Button,{variant:"secondary",color:"neutral",onClick:async()=>{x(!1)},children:"Cancel"}),(0,b.jsx)(i.Button,{variant:"default",onClick:async()=>{await a.setSettings(g),x(!1)},children:"Save"})]})]})})]})}function aa({icon:a,children:c,...d}){return(0,b.jsxs)(i.Button,{variant:"outline",className:(0,e.cn)("h-20 w-20 p-1 rounded-full backdrop-blur-md bg-slate-200/20 dark:bg-black/20"),...d,children:[a,c]})}function ab({widgetInstance:a,x:d,y:e,...f}){let g=(0,c.useRefState)(null);if(![-1,0,1].includes(d)||![-1,0,1].includes(e))throw new p.HexclaveAssertionError(`Invalid resize handle coordinates, must be -1, 0, or 1: ${d}, ${e}`);let h=0!==d&&0!==e;(0,F.useEffect)(()=>{let a=a=>{if(!g.current)return;let b=[a.clientX-g.current[0],a.clientY-g.current[1]],{width:c,height:f}=j.current(),h=[Math.round(b[0]/c),Math.round(b[1]/f)];if(0!==h[0]||0!==h[1]){let a=i.current({top:-1===e?h[1]:0,left:-1===d?h[0]:0,bottom:1===e?h[1]:0,right:1===d?h[0]:0});g.set([g.current[0]+(a.left+a.right)*c,g.current[1]+(a.top+a.bottom)*f])}};return window.addEventListener("mousemove",a),()=>{window.removeEventListener("mousemove",a)}},[d,e,f.onResize,f.calculateUnitSize,g]);let i=(0,F.useRef)(f.onResize);i.current=f.onResize;let j=(0,F.useRef)(f.calculateUnitSize);return j.current=f.calculateUnitSize,(0,b.jsx)("div",{className:"border-black dark:border-white",style:{position:"absolute",zIndex:100,left:-1===d?"-3px":0===d?"50%":void 0,top:-1===e?"-3px":0===e?"50%":void 0,right:1===d?"-3px":void 0,bottom:1===e?"-3px":void 0,transform:`translate(${0===d?"-50%":0}, ${0===e?"-50%":0})`,width:"36px",height:"36px",opacity:.8,borderWidth:"6px",borderTopStyle:-1===e?"solid":"none",borderRightStyle:1===d?"solid":"none",borderBottomStyle:1===e?"solid":"none",borderLeftStyle:-1===d?"solid":"none",borderTopLeftRadius:-1===d&&-1===e?"16px":void 0,borderTopRightRadius:1===d&&-1===e?"16px":void 0,borderBottomLeftRadius:-1===d&&1===e?"16px":void 0,borderBottomRightRadius:1===d&&1===e?"16px":void 0,cursor:h?d===e?"nwse-resize":"nesw-resize":0===d?"ns-resize":"ew-resize"},onMouseDown:a=>(g.set([a.clientX,a.clientY]),window.addEventListener("mouseup",()=>{g.set(null)},{once:!0}),a.preventDefault(),a.stopPropagation(),!1)})}a.s(["createWidgetInstance",0,P,"default",0,function(){let a=(0,c.useRefState)(U.fromWidgetInstances(V.map((a,b)=>P(a)))),[d,e]=(0,F.useState)(!1);return(0,F.useEffect)(()=>{let a=a=>{"Alt"===a.key&&e(!0)},b=a=>{"Alt"===a.key&&e(!1)};return window.addEventListener("keydown",a),window.addEventListener("keyup",b),()=>{window.removeEventListener("keydown",a),window.removeEventListener("keyup",b)}},[]),(0,b.jsx)(H.PageLayout,{title:"Widget Playground",fillWidth:!0,children:(0,b.jsx)(X.Provider,{value:{isEditing:d},children:(0,b.jsx)(Y,{gridRef:a,isSingleColumnMode:"auto",allowVariableHeight:!0,isStatic:!1})})})},"deserializeWidgetInstance",0,R,"getSettings",0,S,"getState",0,T,"serializeWidgetInstance",0,Q],221591)},880444,(a,b,c)=>{function d(){for(var a,b,c=0,d="",e=arguments.length;c<e;c++)(a=arguments[c])&&(b=function a(b){var c,d,e="";if("string"==typeof b||"number"==typeof b)e+=b;else if("object"==typeof b)if(Array.isArray(b)){var f=b.length;for(c=0;c<f;c++)b[c]&&(d=a(b[c]))&&(e&&(e+=" "),e+=d)}else for(d in b)b[d]&&(e&&(e+=" "),e+=d);return e}(a))&&(d&&(d+=" "),d+=b);return d}b.exports=d,b.exports.clsx=d},420095,(a,b,c)=>{"use strict";Object.defineProperty(c,Symbol.toStringTag,{value:"Module"});let d=(a,b)=>{if(0===a.length)return b.classGroupId;let c=a[0],e=b.nextPart.get(c),f=e?d(a.slice(1),e):void 0;if(f)return f;if(0===b.validators.length)return;let g=a.join("-");return b.validators.find(({validator:a})=>a(g))?.classGroupId},e=/^\[(.+)\]$/,f=(a,b,c,d)=>{a.forEach(a=>{if("string"==typeof a){(""===a?b:g(b,a)).classGroupId=c;return}"function"==typeof a?h(a)?f(a(d),b,c,d):b.validators.push({validator:a,classGroupId:c}):Object.entries(a).forEach(([a,e])=>{f(e,g(b,a),c,d)})})},g=(a,b)=>{let c=a;return b.split("-").forEach(a=>{c.nextPart.has(a)||c.nextPart.set(a,{nextPart:new Map,validators:[]}),c=c.nextPart.get(a)}),c},h=a=>a.isThemeGetter,i=(a,b)=>b?a.map(([a,c])=>[a,c.map(a=>"string"==typeof a?b+a:"object"==typeof a?Object.fromEntries(Object.entries(a).map(([a,c])=>[b+a,c])):a)]):a,j=a=>{if(a.length<=1)return a;let b=[],c=[];return a.forEach(a=>{"["===a[0]?(b.push(...c.sort(),a),c=[]):c.push(a)}),b.push(...c.sort()),b},k=/\s+/;function l(){let a,b,c=0,d="";for(;c<arguments.length;)(a=arguments[c++])&&(b=m(a))&&(d&&(d+=" "),d+=b);return d}let m=a=>{let b;if("string"==typeof a)return a;let c="";for(let d=0;d<a.length;d++)a[d]&&(b=m(a[d]))&&(c&&(c+=" "),c+=b);return c};function n(a,...b){let c,g,h,m=function(j){let k;return g=(c={cache:(a=>{if(a<1)return{get:()=>void 0,set:()=>{}};let b=0,c=new Map,d=new Map,e=(e,f)=>{c.set(e,f),++b>a&&(b=0,d=c,c=new Map)};return{get(a){let b=c.get(a);return void 0!==b?b:void 0!==(b=d.get(a))?(e(a,b),b):void 0},set(a,b){c.has(a)?c.set(a,b):e(a,b)}}})((k=b.reduce((a,b)=>b(a),a())).cacheSize),parseClassName:(a=>{let{separator:b,experimentalParseClassName:c}=a,d=1===b.length,e=b[0],f=b.length,g=a=>{let c,g=[],h=0,i=0;for(let j=0;j<a.length;j++){let k=a[j];if(0===h){if(k===e&&(d||a.slice(j,j+f)===b)){g.push(a.slice(i,j)),i=j+f;continue}if("/"===k){c=j;continue}}"["===k?h++:"]"===k&&h--}let j=0===g.length?a:a.substring(i),k=j.startsWith("!"),l=k?j.substring(1):j;return{modifiers:g,hasImportantModifier:k,baseClassName:l,maybePostfixModifierPosition:c&&c>i?c-i:void 0}};return c?a=>c({className:a,parseClassName:g}):g})(k),...(a=>{let b=(a=>{let{theme:b,prefix:c}=a,d={nextPart:new Map,validators:[]};return i(Object.entries(a.classGroups),c).forEach(([a,c])=>{f(c,d,a,b)}),d})(a),{conflictingClassGroups:c,conflictingClassGroupModifiers:g}=a;return{getClassGroupId:a=>{let c=a.split("-");return""===c[0]&&1!==c.length&&c.shift(),d(c,b)||(a=>{if(e.test(a)){let b=e.exec(a)[1],c=b?.substring(0,b.indexOf(":"));if(c)return"arbitrary.."+c}})(a)},getConflictingClassGroupIds:(a,b)=>{let d=c[a]||[];return b&&g[a]?[...d,...g[a]]:d}}})(k)}).cache.get,h=c.cache.set,m=o,o(j)};function o(a){let b=g(a);if(b)return b;let d=((a,b)=>{let{parseClassName:c,getClassGroupId:d,getConflictingClassGroupIds:e}=b,f=[],g=a.trim().split(k),h="";for(let a=g.length-1;a>=0;a-=1){let b=g[a],{modifiers:i,hasImportantModifier:k,baseClassName:l,maybePostfixModifierPosition:m}=c(b),n=!!m,o=d(n?l.substring(0,m):l);if(!o){if(!n||!(o=d(l))){h=b+(h.length>0?" "+h:h);continue}n=!1}let p=j(i).join(":"),q=k?p+"!":p,r=q+o;if(f.includes(r))continue;f.push(r);let s=e(o,n);for(let a=0;a<s.length;++a){let b=s[a];f.push(q+b)}h=b+(h.length>0?" "+h:h)}return h})(a,c);return h(a,d),d}return function(){return m(l.apply(null,arguments))}}let o=a=>{let b=b=>b[a]||[];return b.isThemeGetter=!0,b},p=/^\[(?:([a-z-]+):)?(.+)\]$/i,q=/^\d+\/\d+$/,r=new Set(["px","full","screen"]),s=/^(\d+(\.\d+)?)?(xs|sm|md|lg|xl)$/,t=/\d+(%|px|r?em|[sdl]?v([hwib]|min|max)|pt|pc|in|cm|mm|cap|ch|ex|r?lh|cq(w|h|i|b|min|max))|\b(calc|min|max|clamp)\(.+\)|^0$/,u=/^(rgba?|hsla?|hwb|(ok)?(lab|lch))\(.+\)$/,v=/^(inset_)?-?((\d+)?\.?(\d+)[a-z]+|0)_-?((\d+)?\.?(\d+)[a-z]+|0)/,w=/^(url|image|image-set|cross-fade|element|(repeating-)?(linear|radial|conic)-gradient)\(.+\)$/,x=a=>z(a)||r.has(a)||q.test(a),y=a=>M(a,"length",N),z=a=>!!a&&!Number.isNaN(Number(a)),A=a=>M(a,"number",z),B=a=>!!a&&Number.isInteger(Number(a)),C=a=>a.endsWith("%")&&z(a.slice(0,-1)),D=a=>p.test(a),E=a=>s.test(a),F=new Set(["length","size","percentage"]),G=a=>M(a,F,O),H=a=>M(a,"position",O),I=new Set(["image","url"]),J=a=>M(a,I,Q),K=a=>M(a,"",P),L=()=>!0,M=(a,b,c)=>{let d=p.exec(a);return!!d&&(d[1]?"string"==typeof b?d[1]===b:b.has(d[1]):c(d[2]))},N=a=>t.test(a)&&!u.test(a),O=()=>!1,P=a=>v.test(a),Q=a=>w.test(a),R=Object.defineProperty({__proto__:null,isAny:L,isArbitraryImage:J,isArbitraryLength:y,isArbitraryNumber:A,isArbitraryPosition:H,isArbitraryShadow:K,isArbitrarySize:G,isArbitraryValue:D,isInteger:B,isLength:x,isNumber:z,isPercent:C,isTshirtSize:E},Symbol.toStringTag,{value:"Module"}),S=()=>{let a=o("colors"),b=o("spacing"),c=o("blur"),d=o("brightness"),e=o("borderColor"),f=o("borderRadius"),g=o("borderSpacing"),h=o("borderWidth"),i=o("contrast"),j=o("grayscale"),k=o("hueRotate"),l=o("invert"),m=o("gap"),n=o("gradientColorStops"),p=o("gradientColorStopPositions"),q=o("inset"),r=o("margin"),s=o("opacity"),t=o("padding"),u=o("saturate"),v=o("scale"),w=o("sepia"),F=o("skew"),I=o("space"),M=o("translate"),N=()=>["auto","contain","none"],O=()=>["auto","hidden","clip","visible","scroll"],P=()=>["auto",D,b],Q=()=>[D,b],R=()=>["",x,y],S=()=>["auto",z,D],T=()=>["bottom","center","left","left-bottom","left-top","right","right-bottom","right-top","top"],U=()=>["solid","dashed","dotted","double","none"],V=()=>["normal","multiply","screen","overlay","darken","lighten","color-dodge","color-burn","hard-light","soft-light","difference","exclusion","hue","saturation","color","luminosity"],W=()=>["start","end","center","between","around","evenly","stretch"],X=()=>["","0",D],Y=()=>["auto","avoid","all","avoid-page","page","left","right","column"],Z=()=>[z,D];return{cacheSize:500,separator:":",theme:{colors:[L],spacing:[x,y],blur:["none","",E,D],brightness:Z(),borderColor:[a],borderRadius:["none","","full",E,D],borderSpacing:Q(),borderWidth:R(),contrast:Z(),grayscale:X(),hueRotate:Z(),invert:X(),gap:Q(),gradientColorStops:[a],gradientColorStopPositions:[C,y],inset:P(),margin:P(),opacity:Z(),padding:Q(),saturate:Z(),scale:Z(),sepia:X(),skew:Z(),space:Q(),translate:Q()},classGroups:{aspect:[{aspect:["auto","square","video",D]}],container:["container"],columns:[{columns:[E]}],"break-after":[{"break-after":Y()}],"break-before":[{"break-before":Y()}],"break-inside":[{"break-inside":["auto","avoid","avoid-page","avoid-column"]}],"box-decoration":[{"box-decoration":["slice","clone"]}],box:[{box:["border","content"]}],display:["block","inline-block","inline","flex","inline-flex","table","inline-table","table-caption","table-cell","table-column","table-column-group","table-footer-group","table-header-group","table-row-group","table-row","flow-root","grid","inline-grid","contents","list-item","hidden"],float:[{float:["right","left","none","start","end"]}],clear:[{clear:["left","right","both","none","start","end"]}],isolation:["isolate","isolation-auto"],"object-fit":[{object:["contain","cover","fill","none","scale-down"]}],"object-position":[{object:[...T(),D]}],overflow:[{overflow:O()}],"overflow-x":[{"overflow-x":O()}],"overflow-y":[{"overflow-y":O()}],overscroll:[{overscroll:N()}],"overscroll-x":[{"overscroll-x":N()}],"overscroll-y":[{"overscroll-y":N()}],position:["static","fixed","absolute","relative","sticky"],inset:[{inset:[q]}],"inset-x":[{"inset-x":[q]}],"inset-y":[{"inset-y":[q]}],start:[{start:[q]}],end:[{end:[q]}],top:[{top:[q]}],right:[{right:[q]}],bottom:[{bottom:[q]}],left:[{left:[q]}],visibility:["visible","invisible","collapse"],z:[{z:["auto",B,D]}],basis:[{basis:P()}],"flex-direction":[{flex:["row","row-reverse","col","col-reverse"]}],"flex-wrap":[{flex:["wrap","wrap-reverse","nowrap"]}],flex:[{flex:["1","auto","initial","none",D]}],grow:[{grow:X()}],shrink:[{shrink:X()}],order:[{order:["first","last","none",B,D]}],"grid-cols":[{"grid-cols":[L]}],"col-start-end":[{col:["auto",{span:["full",B,D]},D]}],"col-start":[{"col-start":S()}],"col-end":[{"col-end":S()}],"grid-rows":[{"grid-rows":[L]}],"row-start-end":[{row:["auto",{span:[B,D]},D]}],"row-start":[{"row-start":S()}],"row-end":[{"row-end":S()}],"grid-flow":[{"grid-flow":["row","col","dense","row-dense","col-dense"]}],"auto-cols":[{"auto-cols":["auto","min","max","fr",D]}],"auto-rows":[{"auto-rows":["auto","min","max","fr",D]}],gap:[{gap:[m]}],"gap-x":[{"gap-x":[m]}],"gap-y":[{"gap-y":[m]}],"justify-content":[{justify:["normal",...W()]}],"justify-items":[{"justify-items":["start","end","center","stretch"]}],"justify-self":[{"justify-self":["auto","start","end","center","stretch"]}],"align-content":[{content:["normal",...W(),"baseline"]}],"align-items":[{items:["start","end","center","baseline","stretch"]}],"align-self":[{self:["auto","start","end","center","stretch","baseline"]}],"place-content":[{"place-content":[...W(),"baseline"]}],"place-items":[{"place-items":["start","end","center","baseline","stretch"]}],"place-self":[{"place-self":["auto","start","end","center","stretch"]}],p:[{p:[t]}],px:[{px:[t]}],py:[{py:[t]}],ps:[{ps:[t]}],pe:[{pe:[t]}],pt:[{pt:[t]}],pr:[{pr:[t]}],pb:[{pb:[t]}],pl:[{pl:[t]}],m:[{m:[r]}],mx:[{mx:[r]}],my:[{my:[r]}],ms:[{ms:[r]}],me:[{me:[r]}],mt:[{mt:[r]}],mr:[{mr:[r]}],mb:[{mb:[r]}],ml:[{ml:[r]}],"space-x":[{"space-x":[I]}],"space-x-reverse":["space-x-reverse"],"space-y":[{"space-y":[I]}],"space-y-reverse":["space-y-reverse"],w:[{w:["auto","min","max","fit","svw","lvw","dvw",D,b]}],"min-w":[{"min-w":[D,b,"min","max","fit"]}],"max-w":[{"max-w":[D,b,"none","full","min","max","fit","prose",{screen:[E]},E]}],h:[{h:[D,b,"auto","min","max","fit","svh","lvh","dvh"]}],"min-h":[{"min-h":[D,b,"min","max","fit","svh","lvh","dvh"]}],"max-h":[{"max-h":[D,b,"min","max","fit","svh","lvh","dvh"]}],size:[{size:[D,b,"auto","min","max","fit"]}],"font-size":[{text:["base",E,y]}],"font-smoothing":["antialiased","subpixel-antialiased"],"font-style":["italic","not-italic"],"font-weight":[{font:["thin","extralight","light","normal","medium","semibold","bold","extrabold","black",A]}],"font-family":[{font:[L]}],"fvn-normal":["normal-nums"],"fvn-ordinal":["ordinal"],"fvn-slashed-zero":["slashed-zero"],"fvn-figure":["lining-nums","oldstyle-nums"],"fvn-spacing":["proportional-nums","tabular-nums"],"fvn-fraction":["diagonal-fractions","stacked-fractions"],tracking:[{tracking:["tighter","tight","normal","wide","wider","widest",D]}],"line-clamp":[{"line-clamp":["none",z,A]}],leading:[{leading:["none","tight","snug","normal","relaxed","loose",x,D]}],"list-image":[{"list-image":["none",D]}],"list-style-type":[{list:["none","disc","decimal",D]}],"list-style-position":[{list:["inside","outside"]}],"placeholder-color":[{placeholder:[a]}],"placeholder-opacity":[{"placeholder-opacity":[s]}],"text-alignment":[{text:["left","center","right","justify","start","end"]}],"text-color":[{text:[a]}],"text-opacity":[{"text-opacity":[s]}],"text-decoration":["underline","overline","line-through","no-underline"],"text-decoration-style":[{decoration:[...U(),"wavy"]}],"text-decoration-thickness":[{decoration:["auto","from-font",x,y]}],"underline-offset":[{"underline-offset":["auto",x,D]}],"text-decoration-color":[{decoration:[a]}],"text-transform":["uppercase","lowercase","capitalize","normal-case"],"text-overflow":["truncate","text-ellipsis","text-clip"],"text-wrap":[{text:["wrap","nowrap","balance","pretty"]}],indent:[{indent:Q()}],"vertical-align":[{align:["baseline","top","middle","bottom","text-top","text-bottom","sub","super",D]}],whitespace:[{whitespace:["normal","nowrap","pre","pre-line","pre-wrap","break-spaces"]}],break:[{break:["normal","words","all","keep"]}],hyphens:[{hyphens:["none","manual","auto"]}],content:[{content:["none",D]}],"bg-attachment":[{bg:["fixed","local","scroll"]}],"bg-clip":[{"bg-clip":["border","padding","content","text"]}],"bg-opacity":[{"bg-opacity":[s]}],"bg-origin":[{"bg-origin":["border","padding","content"]}],"bg-position":[{bg:[...T(),H]}],"bg-repeat":[{bg:["no-repeat",{repeat:["","x","y","round","space"]}]}],"bg-size":[{bg:["auto","cover","contain",G]}],"bg-image":[{bg:["none",{"gradient-to":["t","tr","r","br","b","bl","l","tl"]},J]}],"bg-color":[{bg:[a]}],"gradient-from-pos":[{from:[p]}],"gradient-via-pos":[{via:[p]}],"gradient-to-pos":[{to:[p]}],"gradient-from":[{from:[n]}],"gradient-via":[{via:[n]}],"gradient-to":[{to:[n]}],rounded:[{rounded:[f]}],"rounded-s":[{"rounded-s":[f]}],"rounded-e":[{"rounded-e":[f]}],"rounded-t":[{"rounded-t":[f]}],"rounded-r":[{"rounded-r":[f]}],"rounded-b":[{"rounded-b":[f]}],"rounded-l":[{"rounded-l":[f]}],"rounded-ss":[{"rounded-ss":[f]}],"rounded-se":[{"rounded-se":[f]}],"rounded-ee":[{"rounded-ee":[f]}],"rounded-es":[{"rounded-es":[f]}],"rounded-tl":[{"rounded-tl":[f]}],"rounded-tr":[{"rounded-tr":[f]}],"rounded-br":[{"rounded-br":[f]}],"rounded-bl":[{"rounded-bl":[f]}],"border-w":[{border:[h]}],"border-w-x":[{"border-x":[h]}],"border-w-y":[{"border-y":[h]}],"border-w-s":[{"border-s":[h]}],"border-w-e":[{"border-e":[h]}],"border-w-t":[{"border-t":[h]}],"border-w-r":[{"border-r":[h]}],"border-w-b":[{"border-b":[h]}],"border-w-l":[{"border-l":[h]}],"border-opacity":[{"border-opacity":[s]}],"border-style":[{border:[...U(),"hidden"]}],"divide-x":[{"divide-x":[h]}],"divide-x-reverse":["divide-x-reverse"],"divide-y":[{"divide-y":[h]}],"divide-y-reverse":["divide-y-reverse"],"divide-opacity":[{"divide-opacity":[s]}],"divide-style":[{divide:U()}],"border-color":[{border:[e]}],"border-color-x":[{"border-x":[e]}],"border-color-y":[{"border-y":[e]}],"border-color-s":[{"border-s":[e]}],"border-color-e":[{"border-e":[e]}],"border-color-t":[{"border-t":[e]}],"border-color-r":[{"border-r":[e]}],"border-color-b":[{"border-b":[e]}],"border-color-l":[{"border-l":[e]}],"divide-color":[{divide:[e]}],"outline-style":[{outline:["",...U()]}],"outline-offset":[{"outline-offset":[x,D]}],"outline-w":[{outline:[x,y]}],"outline-color":[{outline:[a]}],"ring-w":[{ring:R()}],"ring-w-inset":["ring-inset"],"ring-color":[{ring:[a]}],"ring-opacity":[{"ring-opacity":[s]}],"ring-offset-w":[{"ring-offset":[x,y]}],"ring-offset-color":[{"ring-offset":[a]}],shadow:[{shadow:["","inner","none",E,K]}],"shadow-color":[{shadow:[L]}],opacity:[{opacity:[s]}],"mix-blend":[{"mix-blend":[...V(),"plus-lighter","plus-darker"]}],"bg-blend":[{"bg-blend":V()}],filter:[{filter:["","none"]}],blur:[{blur:[c]}],brightness:[{brightness:[d]}],contrast:[{contrast:[i]}],"drop-shadow":[{"drop-shadow":["","none",E,D]}],grayscale:[{grayscale:[j]}],"hue-rotate":[{"hue-rotate":[k]}],invert:[{invert:[l]}],saturate:[{saturate:[u]}],sepia:[{sepia:[w]}],"backdrop-filter":[{"backdrop-filter":["","none"]}],"backdrop-blur":[{"backdrop-blur":[c]}],"backdrop-brightness":[{"backdrop-brightness":[d]}],"backdrop-contrast":[{"backdrop-contrast":[i]}],"backdrop-grayscale":[{"backdrop-grayscale":[j]}],"backdrop-hue-rotate":[{"backdrop-hue-rotate":[k]}],"backdrop-invert":[{"backdrop-invert":[l]}],"backdrop-opacity":[{"backdrop-opacity":[s]}],"backdrop-saturate":[{"backdrop-saturate":[u]}],"backdrop-sepia":[{"backdrop-sepia":[w]}],"border-collapse":[{border:["collapse","separate"]}],"border-spacing":[{"border-spacing":[g]}],"border-spacing-x":[{"border-spacing-x":[g]}],"border-spacing-y":[{"border-spacing-y":[g]}],"table-layout":[{table:["auto","fixed"]}],caption:[{caption:["top","bottom"]}],transition:[{transition:["none","all","","colors","opacity","shadow","transform",D]}],duration:[{duration:Z()}],ease:[{ease:["linear","in","out","in-out",D]}],delay:[{delay:Z()}],animate:[{animate:["none","spin","ping","pulse","bounce",D]}],transform:[{transform:["","gpu","none"]}],scale:[{scale:[v]}],"scale-x":[{"scale-x":[v]}],"scale-y":[{"scale-y":[v]}],rotate:[{rotate:[B,D]}],"translate-x":[{"translate-x":[M]}],"translate-y":[{"translate-y":[M]}],"skew-x":[{"skew-x":[F]}],"skew-y":[{"skew-y":[F]}],"transform-origin":[{origin:["center","top","top-right","right","bottom-right","bottom","bottom-left","left","top-left",D]}],accent:[{accent:["auto",a]}],appearance:[{appearance:["none","auto"]}],cursor:[{cursor:["auto","default","pointer","wait","text","move","help","not-allowed","none","context-menu","progress","cell","crosshair","vertical-text","alias","copy","no-drop","grab","grabbing","all-scroll","col-resize","row-resize","n-resize","e-resize","s-resize","w-resize","ne-resize","nw-resize","se-resize","sw-resize","ew-resize","ns-resize","nesw-resize","nwse-resize","zoom-in","zoom-out",D]}],"caret-color":[{caret:[a]}],"pointer-events":[{"pointer-events":["none","auto"]}],resize:[{resize:["none","y","x",""]}],"scroll-behavior":[{scroll:["auto","smooth"]}],"scroll-m":[{"scroll-m":Q()}],"scroll-mx":[{"scroll-mx":Q()}],"scroll-my":[{"scroll-my":Q()}],"scroll-ms":[{"scroll-ms":Q()}],"scroll-me":[{"scroll-me":Q()}],"scroll-mt":[{"scroll-mt":Q()}],"scroll-mr":[{"scroll-mr":Q()}],"scroll-mb":[{"scroll-mb":Q()}],"scroll-ml":[{"scroll-ml":Q()}],"scroll-p":[{"scroll-p":Q()}],"scroll-px":[{"scroll-px":Q()}],"scroll-py":[{"scroll-py":Q()}],"scroll-ps":[{"scroll-ps":Q()}],"scroll-pe":[{"scroll-pe":Q()}],"scroll-pt":[{"scroll-pt":Q()}],"scroll-pr":[{"scroll-pr":Q()}],"scroll-pb":[{"scroll-pb":Q()}],"scroll-pl":[{"scroll-pl":Q()}],"snap-align":[{snap:["start","end","center","align-none"]}],"snap-stop":[{snap:["normal","always"]}],"snap-type":[{snap:["none","x","y","both"]}],"snap-strictness":[{snap:["mandatory","proximity"]}],touch:[{touch:["auto","none","manipulation"]}],"touch-x":[{"touch-pan":["x","left","right"]}],"touch-y":[{"touch-pan":["y","up","down"]}],"touch-pz":["touch-pinch-zoom"],select:[{select:["none","text","all","auto"]}],"will-change":[{"will-change":["auto","scroll","contents","transform",D]}],fill:[{fill:[a,"none"]}],"stroke-w":[{stroke:[x,y,A]}],stroke:[{stroke:[a,"none"]}],sr:["sr-only","not-sr-only"],"forced-color-adjust":[{"forced-color-adjust":["auto","none"]}]},conflictingClassGroups:{overflow:["overflow-x","overflow-y"],overscroll:["overscroll-x","overscroll-y"],inset:["inset-x","inset-y","start","end","top","right","bottom","left"],"inset-x":["right","left"],"inset-y":["top","bottom"],flex:["basis","grow","shrink"],gap:["gap-x","gap-y"],p:["px","py","ps","pe","pt","pr","pb","pl"],px:["pr","pl"],py:["pt","pb"],m:["mx","my","ms","me","mt","mr","mb","ml"],mx:["mr","ml"],my:["mt","mb"],size:["w","h"],"font-size":["leading"],"fvn-normal":["fvn-ordinal","fvn-slashed-zero","fvn-figure","fvn-spacing","fvn-fraction"],"fvn-ordinal":["fvn-normal"],"fvn-slashed-zero":["fvn-normal"],"fvn-figure":["fvn-normal"],"fvn-spacing":["fvn-normal"],"fvn-fraction":["fvn-normal"],"line-clamp":["display","overflow"],rounded:["rounded-s","rounded-e","rounded-t","rounded-r","rounded-b","rounded-l","rounded-ss","rounded-se","rounded-ee","rounded-es","rounded-tl","rounded-tr","rounded-br","rounded-bl"],"rounded-s":["rounded-ss","rounded-es"],"rounded-e":["rounded-se","rounded-ee"],"rounded-t":["rounded-tl","rounded-tr"],"rounded-r":["rounded-tr","rounded-br"],"rounded-b":["rounded-br","rounded-bl"],"rounded-l":["rounded-tl","rounded-bl"],"border-spacing":["border-spacing-x","border-spacing-y"],"border-w":["border-w-s","border-w-e","border-w-t","border-w-r","border-w-b","border-w-l"],"border-w-x":["border-w-r","border-w-l"],"border-w-y":["border-w-t","border-w-b"],"border-color":["border-color-s","border-color-e","border-color-t","border-color-r","border-color-b","border-color-l"],"border-color-x":["border-color-r","border-color-l"],"border-color-y":["border-color-t","border-color-b"],"scroll-m":["scroll-mx","scroll-my","scroll-ms","scroll-me","scroll-mt","scroll-mr","scroll-mb","scroll-ml"],"scroll-mx":["scroll-mr","scroll-ml"],"scroll-my":["scroll-mt","scroll-mb"],"scroll-p":["scroll-px","scroll-py","scroll-ps","scroll-pe","scroll-pt","scroll-pr","scroll-pb","scroll-pl"],"scroll-px":["scroll-pr","scroll-pl"],"scroll-py":["scroll-pt","scroll-pb"],touch:["touch-x","touch-y","touch-pz"],"touch-x":["touch"],"touch-y":["touch"],"touch-pz":["touch"]},conflictingClassGroupModifiers:{"font-size":["leading"]}}},T=(a,{cacheSize:b,prefix:c,separator:d,experimentalParseClassName:e,extend:f={},override:g={}})=>{for(let f in U(a,"cacheSize",b),U(a,"prefix",c),U(a,"separator",d),U(a,"experimentalParseClassName",e),g)V(a[f],g[f]);for(let b in f)W(a[b],f[b]);return a},U=(a,b,c)=>{void 0!==c&&(a[b]=c)},V=(a,b)=>{if(b)for(let c in b)U(a,c,b[c])},W=(a,b)=>{if(b)for(let c in b){let d=b[c];void 0!==d&&(a[c]=(a[c]||[]).concat(d))}},X=n(S);c.createTailwindMerge=n,c.extendTailwindMerge=(a,...b)=>"function"==typeof a?n(S,a,...b):n(()=>T(S(),a),...b),c.fromTheme=o,c.getDefaultConfig=S,c.mergeConfigs=T,c.twJoin=l,c.twMerge=X,c.validators=R},396437,(a,b,c)=>{Object.defineProperty(c,Symbol.toStringTag,{value:"Module"});let d=a.r(880444),e=a.r(420095);c.cn=function(...a){return(0,e.twMerge)((0,d.clsx)(a))}},348082,(a,b,c)=>{(a=>{"use strict";var b,c,d,e,f,g,h=Object.defineProperty,i=Object.getOwnPropertyDescriptor,j=Object.getOwnPropertyNames,k=Object.prototype.hasOwnProperty,l=(a,b,c)=>new Promise((d,e)=>{var f=a=>{try{h(c.next(a))}catch(a){e(a)}},g=a=>{try{h(c.throw(a))}catch(a){e(a)}},h=a=>a.done?d(a.value):Promise.resolve(a.value).then(f,g);h((c=c.apply(a,b)).next())}),m={},n={analyzeMetafile:()=>ag,analyzeMetafileSync:()=>ak,build:()=>ac,buildSync:()=>ah,context:()=>ad,default:()=>ap,formatMessages:()=>af,formatMessagesSync:()=>aj,initialize:()=>an,stop:()=>al,transform:()=>ae,transformSync:()=>ai,version:()=>ab};for(var o in n)h(m,o,{get:n[o],enumerable:!0});function p(a){let c=a=>{if(null===a)d.write8(0);else if("boolean"==typeof a)d.write8(1),d.write8(+a);else if("number"==typeof a)d.write8(2),d.write32(0|a);else if("string"==typeof a)d.write8(3),d.write(b(a));else if(a instanceof Uint8Array)d.write8(4),d.write(a);else if(a instanceof Array)for(let b of(d.write8(5),d.write32(a.length),a))c(b);else{let e=Object.keys(a);for(let f of(d.write8(6),d.write32(e.length),e))d.write(b(f)),c(a[f])}},d=new q;return d.write32(0),d.write32(a.id<<1|!a.isRequest),c(a.value),s(d.buf,d.len-4,0),d.buf.subarray(0,d.len)}a.exports=((a,b,c)=>{if(b&&"object"==typeof b||"function"==typeof b)for(let d of j(b))k.call(a,d)||void 0===d||h(a,d,{get:()=>b[d],enumerable:!(c=i(b,d))||c.enumerable});return a})(h({},"__esModule",{value:!0}),m);var q=class{constructor(a=new Uint8Array(1024)){this.buf=a,this.len=0,this.ptr=0}_write(a){if(this.len+a>this.buf.length){let b=new Uint8Array((this.len+a)*2);b.set(this.buf),this.buf=b}return this.len+=a,this.len-a}write8(a){let b=this._write(1);this.buf[b]=a}write32(a){let b=this._write(4);s(this.buf,a,b)}write(a){let b=this._write(4+a.length);s(this.buf,a.length,b),this.buf.set(a,b+4)}_read(a){if(this.ptr+a>this.buf.length)throw Error("Invalid packet");return this.ptr+=a,this.ptr-a}read8(){return this.buf[this._read(1)]}read32(){return r(this.buf,this._read(4))}read(){let a=this.read32(),b=new Uint8Array(a),c=this._read(b.length);return b.set(this.buf.subarray(c,c+a)),b}};if("u">typeof TextEncoder&&"u">typeof TextDecoder){let a=new TextEncoder,e=new TextDecoder;b=b=>a.encode(b),c=a=>e.decode(a),d='new TextEncoder().encode("")'}else if("u">typeof Buffer)b=a=>Buffer.from(a),c=a=>{let{buffer:b,byteOffset:c,byteLength:d}=a;return Buffer.from(b,c,d).toString()},d='Buffer.from("")';else throw Error("No UTF-8 codec found");if(!(b("")instanceof Uint8Array))throw Error(`Invariant violation: "${d} instanceof Uint8Array" is incorrectly false

This indicates that your JavaScript environment is broken. You cannot use
esbuild in this environment because esbuild relies on this invariant. This
is not a problem with esbuild. You need to fix your environment instead.
`);function r(a,b){return a[b++]|a[b++]<<8|a[b++]<<16|a[b++]<<24}function s(a,b,c){a[c++]=b,a[c++]=b>>8,a[c++]=b>>16,a[c++]=b>>24}var t=JSON.stringify,u="warning",v="silent";function w(a){if(R(a,"target"),a.indexOf(",")>=0)throw Error(`Invalid target: ${a}`);return a}var x=()=>null,y=a=>"boolean"==typeof a?null:"a boolean",z=a=>"string"==typeof a?null:"a string",A=a=>a instanceof RegExp?null:"a RegExp object",B=a=>"number"==typeof a&&a===(0|a)?null:"an integer",C=a=>"function"==typeof a?null:"a function",D=a=>Array.isArray(a)?null:"an array",E=a=>"object"!=typeof a||null===a||Array.isArray(a)?"an object":null,F=a=>"object"==typeof a&&null!==a?null:"an array or an object",G=a=>a instanceof WebAssembly.Module?null:"a WebAssembly.Module",H=a=>"object"!=typeof a||Array.isArray(a)?"an object or null":null,I=a=>"string"==typeof a||"boolean"==typeof a?null:"a string or a boolean",J=a=>"string"!=typeof a&&("object"!=typeof a||null===a||Array.isArray(a))?"a string or an object":null,K=a=>"string"==typeof a||Array.isArray(a)?null:"a string or an array",L=a=>"string"==typeof a||a instanceof Uint8Array?null:"a string or a Uint8Array",M=a=>"string"==typeof a||a instanceof URL?null:"a string or a URL";function N(a,b,c,d){let e=a[c];if(b[c+""]=!0,void 0===e)return;let f=d(e);if(null!==f)throw Error(`${t(c)} must be ${f}`);return e}function O(a,b,c){for(let d in a)if(!(d in b))throw Error(`Invalid option ${c}: ${t(d)}`)}function P(a){let b;if(void 0!==a)for(let c in b=Object.create(null),a){let d=a[c];if("string"==typeof d||!1===d)b[c]=d;else throw Error(`Expected ${t(c)} in mangle cache to map to either a string or false`)}return b}function Q(a,b,c,d,e){let f=N(b,c,"color",y),g=N(b,c,"logLevel",z),h=N(b,c,"logLimit",B);void 0!==f?a.push(`--color=${f}`):d&&a.push("--color=true"),a.push(`--log-level=${g||e}`),a.push(`--log-limit=${h||0}`)}function R(a,b,c){if("string"!=typeof a)throw Error(`Expected value for ${b}${void 0!==c?" "+t(c):""} to be a string, got ${typeof a} instead`);return a}function S(a,b,c){let d=N(b,c,"legalComments",z),e=N(b,c,"sourceRoot",z),f=N(b,c,"sourcesContent",y),g=N(b,c,"target",K),h=N(b,c,"format",z),i=N(b,c,"globalName",z),j=N(b,c,"mangleProps",A),k=N(b,c,"reserveProps",A),l=N(b,c,"mangleQuoted",y),m=N(b,c,"minify",y),n=N(b,c,"minifySyntax",y),o=N(b,c,"minifyWhitespace",y),p=N(b,c,"minifyIdentifiers",y),q=N(b,c,"lineLimit",B),r=N(b,c,"drop",D),s=N(b,c,"dropLabels",D),u=N(b,c,"charset",z),v=N(b,c,"treeShaking",y),x=N(b,c,"ignoreAnnotations",y),C=N(b,c,"jsx",z),F=N(b,c,"jsxFactory",z),G=N(b,c,"jsxFragment",z),H=N(b,c,"jsxImportSource",z),I=N(b,c,"jsxDev",y),L=N(b,c,"jsxSideEffects",y),M=N(b,c,"define",E),O=N(b,c,"logOverride",E),P=N(b,c,"supported",E),Q=N(b,c,"pure",D),S=N(b,c,"keepNames",y),T=N(b,c,"platform",z),U=N(b,c,"tsconfigRaw",J);if(d&&a.push(`--legal-comments=${d}`),void 0!==e&&a.push(`--source-root=${e}`),void 0!==f&&a.push(`--sources-content=${f}`),g&&(Array.isArray(g)?a.push(`--target=${Array.from(g).map(w).join(",")}`):a.push(`--target=${w(g)}`)),h&&a.push(`--format=${h}`),i&&a.push(`--global-name=${i}`),T&&a.push(`--platform=${T}`),U&&a.push(`--tsconfig-raw=${"string"==typeof U?U:JSON.stringify(U)}`),m&&a.push("--minify"),n&&a.push("--minify-syntax"),o&&a.push("--minify-whitespace"),p&&a.push("--minify-identifiers"),q&&a.push(`--line-limit=${q}`),u&&a.push(`--charset=${u}`),void 0!==v&&a.push(`--tree-shaking=${v}`),x&&a.push("--ignore-annotations"),r)for(let b of r)a.push(`--drop:${R(b,"drop")}`);if(s&&a.push(`--drop-labels=${Array.from(s).map(a=>R(a,"dropLabels")).join(",")}`),j&&a.push(`--mangle-props=${j.source}`),k&&a.push(`--reserve-props=${k.source}`),void 0!==l&&a.push(`--mangle-quoted=${l}`),C&&a.push(`--jsx=${C}`),F&&a.push(`--jsx-factory=${F}`),G&&a.push(`--jsx-fragment=${G}`),H&&a.push(`--jsx-import-source=${H}`),I&&a.push("--jsx-dev"),L&&a.push("--jsx-side-effects"),M)for(let b in M){if(b.indexOf("=")>=0)throw Error(`Invalid define: ${b}`);a.push(`--define:${b}=${R(M[b],"define",b)}`)}if(O)for(let b in O){if(b.indexOf("=")>=0)throw Error(`Invalid log override: ${b}`);a.push(`--log-override:${b}=${R(O[b],"log override",b)}`)}if(P)for(let b in P){if(b.indexOf("=")>=0)throw Error(`Invalid supported: ${b}`);let c=P[b];if("boolean"!=typeof c)throw Error(`Expected value for supported ${t(b)} to be a boolean, got ${typeof c} instead`);a.push(`--supported:${b}=${c}`)}if(Q)for(let b of Q)a.push(`--pure:${R(b,"pure")}`);S&&a.push("--keep-names")}function T(){let a=new Map,b=0;return{load:b=>a.get(b),store(c){if(void 0===c)return -1;let d=b++;return a.set(d,c),d}}}function U(a,b,c){let d,e=!1;return()=>{if(e)return d;e=!0;try{let e=(a.stack+"").split("\n");e.splice(1,1);let f=W(b,e,c);if(f)return d={text:a.message,location:f}}catch(a){}}}function V(a,b,c,d,e){let f="Internal error",g=null;try{f=(a&&a.message||a)+""}catch(a){}try{g=W(b,(a.stack+"").split("\n"),"")}catch(a){}return{id:"",pluginName:e,text:f,location:g,notes:d?[d]:[],detail:c?c.store(a):-1}}function W(a,c,d){let e="    at ";if(a.readFileSync&&!c[0].startsWith(e)&&c[1].startsWith(e))for(let f=1;f<c.length;f++){let g=c[f];if(g.startsWith(e))for(g=g.slice(e.length);;){let e=/^(?:new |async )?\S+ \((.*)\)$/.exec(g);if(e||(e=/^eval at \S+ \((.*)\)(?:, \S+:\d+:\d+)?$/.exec(g))){g=e[1];continue}if(e=/^(\S+):(\d+):(\d+)$/.exec(g)){let f;try{f=a.readFileSync(e[1],"utf8")}catch(a){break}let g=f.split(/\r\n|\r|\n|\u2028|\u2029/)[e[2]-1]||"",h=e[3]-1,i=g.slice(h,h+d.length)===d?d.length:0;return{file:e[1],namespace:"file",line:+e[2],column:b(g.slice(0,h)).length,length:b(g.slice(h,h+i)).length,lineText:g+"\n"+c.slice(1).join("\n"),suggestion:""}}break}}return null}function X(a,b,c){let d=Error(a+=b.length<1?"":` with ${b.length} error${b.length<2?"":"s"}:`+b.slice(0,6).map((a,b)=>{if(5===b)return"\n...";if(!a.location)return`
error: ${a.text}`;let{file:c,line:d,column:e}=a.location,f=a.pluginName?`[plugin: ${a.pluginName}] `:"";return`
${c}:${d}:${e}: ERROR: ${f}${a.text}`}).join(""));for(let[a,e]of[["errors",b],["warnings",c]])Object.defineProperty(d,a,{configurable:!0,enumerable:!0,get:()=>e,set:b=>Object.defineProperty(d,a,{configurable:!0,enumerable:!0,value:b})});return d}function Y(a,b){for(let c of a)c.detail=b.load(c.detail);return a}function Z(a,b,c){if(null==a)return null;let d={},e=N(a,d,"file",z),f=N(a,d,"namespace",z),g=N(a,d,"line",B),h=N(a,d,"column",B),i=N(a,d,"length",B),j=N(a,d,"lineText",z),k=N(a,d,"suggestion",z);if(O(a,d,b),j){let a=j.slice(0,(h&&h>0?h:0)+(i&&i>0?i:0)+(c&&c>0?c:80));/[\x7F-\uFFFF]/.test(a)||/\n/.test(j)||(j=a)}return{file:e||"",namespace:f||"",line:g||0,column:h||0,length:i||0,lineText:j||"",suggestion:k||""}}function $(a,b,c,d,e){let f=[],g=0;for(let h of a){let a={},i=N(h,a,"id",z),j=N(h,a,"pluginName",z),k=N(h,a,"text",z),l=N(h,a,"location",H),m=N(h,a,"notes",D),n=N(h,a,"detail",x),o=`in element ${g} of "${b}"`;O(h,a,o);let p=[];if(m)for(let a of m){let b={},c=N(a,b,"text",z),d=N(a,b,"location",H);O(a,b,o),p.push({text:c||"",location:Z(d,o,e)})}f.push({id:i||"",pluginName:j||d,text:k||"",location:Z(l,o,e),notes:p,detail:c?c.store(n):-1}),g++}return f}function _(a,b){let c=[];for(let d of a){if("string"!=typeof d)throw Error(`${t(b)} must be an array of strings`);c.push(d)}return c}function aa({path:a,contents:b,hash:d}){let e=null;return{path:a,contents:b,hash:d,get text(){let a=this.contents;return(null===e||a!==b)&&(b=a,e=c(a)),e}}}var ab="0.20.2",ac=a=>am().build(a),ad=a=>am().context(a),ae=(a,b)=>am().transform(a,b),af=(a,b)=>am().formatMessages(a,b),ag=(a,b)=>am().analyzeMetafile(a,b),ah=()=>{throw Error('The "buildSync" API only works in node')},ai=()=>{throw Error('The "transformSync" API only works in node')},aj=()=>{throw Error('The "formatMessagesSync" API only works in node')},ak=()=>{throw Error('The "analyzeMetafileSync" API only works in node')},al=()=>(f&&f(),Promise.resolve()),am=()=>{if(g)return g;if(e)throw Error('You need to wait for the promise returned from "initialize" to be resolved before calling this');throw Error('You need to call "initialize" before calling this')},an=a=>{var b;let c,d,f,g;d=N(b=a||{},c=Object.create(null),"wasmURL",M),f=N(b,c,"wasmModule",G),g=N(b,c,"worker",y),O(b,c,"in initialize() call");let h=(a={wasmURL:d,wasmModule:f,worker:g}).wasmURL,i=a.wasmModule,j=!1!==a.worker;if(!h&&!i)throw Error('Must provide either the "wasmURL" option or the "wasmModule" option');if(e)throw Error('Cannot call "initialize" more than once');return(e=ao(h||"",i,j)).catch(()=>{e=void 0}),e},ao=(a,d,h)=>l(void 0,null,function*(){let i,j,k;if(h){let a=new Blob([`onmessage=((postMessage) => {
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
    })(postMessage)`],{type:"text/javascript"});i=new Worker(URL.createObjectURL(a))}else{let a,b=(a=>{let b;var c=(a,b,c)=>new Promise((d,e)=>{var f=a=>{try{h(c.next(a))}catch(a){e(a)}},g=a=>{try{h(c.throw(a))}catch(a){e(a)}},h=a=>a.done?d(a.value):Promise.resolve(a.value).then(f,g);h((c=c.apply(a,b)).next())});let d={};for(let a=self;a;a=Object.getPrototypeOf(a))for(let b of Object.getOwnPropertyNames(a))b in d||Object.defineProperty(d,b,{get:()=>self[b]});let e=()=>{let a=Error("not implemented");return a.code="ENOSYS",a};if(!d.fs){let a="";d.fs={constants:{O_WRONLY:-1,O_RDWR:-1,O_CREAT:-1,O_TRUNC:-1,O_APPEND:-1,O_EXCL:-1},writeSync(b,c){let d=(a+=g.decode(c)).lastIndexOf("\n");return -1!=d&&(console.log(a.substring(0,d)),a=a.substring(d+1)),c.length},write(a,b,c,d,f,g){0!==c||d!==b.length||null!==f?g(e()):g(null,this.writeSync(a,b))},chmod(a,b,c){c(e())},chown(a,b,c,d){d(e())},close(a,b){b(e())},fchmod(a,b,c){c(e())},fchown(a,b,c,d){d(e())},fstat(a,b){b(e())},fsync(a,b){b(null)},ftruncate(a,b,c){c(e())},lchown(a,b,c,d){d(e())},link(a,b,c){c(e())},lstat(a,b){b(e())},mkdir(a,b,c){c(e())},open(a,b,c,d){d(e())},read(a,b,c,d,f,g){g(e())},readdir(a,b){b(e())},readlink(a,b){b(e())},rename(a,b,c){c(e())},rmdir(a,b){b(e())},stat(a,b){b(e())},symlink(a,b,c){c(e())},truncate(a,b,c){c(e())},unlink(a,b){b(e())},utimes(a,b,c,d){d(e())}}}if(d.process||(d.process={getuid:()=>-1,getgid:()=>-1,geteuid:()=>-1,getegid:()=>-1,getgroups(){throw e()},pid:-1,ppid:-1,umask(){throw e()},cwd(){throw e()},chdir(){throw e()}}),!d.crypto)throw Error("globalThis.crypto is not available, polyfill required (crypto.getRandomValues only)");if(!d.performance)throw Error("globalThis.performance is not available, polyfill required (performance.now only)");if(!d.TextEncoder)throw Error("globalThis.TextEncoder is not available, polyfill required");if(!d.TextDecoder)throw Error("globalThis.TextDecoder is not available, polyfill required");let f=new TextEncoder("utf-8"),g=new TextDecoder("utf-8");return d.Go=class{constructor(){this.argv=["js"],this.env={},this.exit=a=>{0!==a&&console.warn("exit code:",a)},this._exitPromise=new Promise(a=>{this._resolveExitPromise=a}),this._pendingEvent=null,this._scheduledTimeouts=new Map,this._nextCallbackTimeoutID=1;const a=(a,b)=>{this.mem.setUint32(a+0,b,!0),this.mem.setUint32(a+4,Math.floor(b/0x100000000),!0)},b=a=>this.mem.getUint32(a+0,!0)+0x100000000*this.mem.getInt32(a+4,!0),c=a=>{let b=this.mem.getFloat64(a,!0);if(0===b)return;if(!isNaN(b))return b;let c=this.mem.getUint32(a,!0);return this._values[c]},e=(a,b)=>{if("number"==typeof b&&0!==b){if(isNaN(b)){this.mem.setUint32(a+4,0x7ff80000,!0),this.mem.setUint32(a,0,!0);return}this.mem.setFloat64(a,b,!0);return}if(void 0===b)return void this.mem.setFloat64(a,0,!0);let c=this._ids.get(b);void 0===c&&(void 0===(c=this._idPool.pop())&&(c=this._values.length),this._values[c]=b,this._goRefCounts[c]=0,this._ids.set(b,c)),this._goRefCounts[c]++;let d=0;switch(typeof b){case"object":null!==b&&(d=1);break;case"string":d=2;break;case"symbol":d=3;break;case"function":d=4}this.mem.setUint32(a+4,0x7ff80000|d,!0),this.mem.setUint32(a,c,!0)},h=a=>{let c=b(a+0),d=b(a+8);return new Uint8Array(this._inst.exports.mem.buffer,c,d)},i=a=>{let d=b(a+0),e=b(a+8),f=Array(e);for(let a=0;a<e;a++)f[a]=c(d+8*a);return f},j=a=>{let c=b(a+0),d=b(a+8);return g.decode(new DataView(this._inst.exports.mem.buffer,c,d))},k=Date.now()-performance.now();this.importObject={go:{"runtime.wasmExit":a=>{a>>>=0;let b=this.mem.getInt32(a+8,!0);this.exited=!0,delete this._inst,delete this._values,delete this._goRefCounts,delete this._ids,delete this._idPool,this.exit(b)},"runtime.wasmWrite":a=>{let c=b((a>>>=0)+8),e=b(a+16),f=this.mem.getInt32(a+24,!0);d.fs.writeSync(c,new Uint8Array(this._inst.exports.mem.buffer,e,f))},"runtime.resetMemoryDataView":a=>{this.mem=new DataView(this._inst.exports.mem.buffer)},"runtime.nanotime1":b=>{a((b>>>=0)+8,(k+performance.now())*1e6)},"runtime.walltime":b=>{b>>>=0;let c=new Date().getTime();a(b+8,c/1e3),this.mem.setInt32(b+16,c%1e3*1e6,!0)},"runtime.scheduleTimeoutEvent":a=>{a>>>=0;let c=this._nextCallbackTimeoutID;this._nextCallbackTimeoutID++,this._scheduledTimeouts.set(c,setTimeout(()=>{for(this._resume();this._scheduledTimeouts.has(c);)console.warn("scheduleTimeoutEvent: missed timeout event"),this._resume()},b(a+8)+1)),this.mem.setInt32(a+16,c,!0)},"runtime.clearTimeoutEvent":a=>{a>>>=0;let b=this.mem.getInt32(a+8,!0);clearTimeout(this._scheduledTimeouts.get(b)),this._scheduledTimeouts.delete(b)},"runtime.getRandomData":a=>{a>>>=0,crypto.getRandomValues(h(a+8))},"syscall/js.finalizeRef":a=>{a>>>=0;let b=this.mem.getUint32(a+8,!0);if(this._goRefCounts[b]--,0===this._goRefCounts[b]){let a=this._values[b];this._values[b]=null,this._ids.delete(a),this._idPool.push(b)}},"syscall/js.stringVal":a=>{e((a>>>=0)+24,j(a+8))},"syscall/js.valueGet":a=>{let b=Reflect.get(c((a>>>=0)+8),j(a+16));e((a=this._inst.exports.getsp()>>>0)+32,b)},"syscall/js.valueSet":a=>{Reflect.set(c((a>>>=0)+8),j(a+16),c(a+32))},"syscall/js.valueDelete":a=>{Reflect.deleteProperty(c((a>>>=0)+8),j(a+16))},"syscall/js.valueIndex":a=>{e((a>>>=0)+24,Reflect.get(c(a+8),b(a+16)))},"syscall/js.valueSetIndex":a=>{Reflect.set(c((a>>>=0)+8),b(a+16),c(a+24))},"syscall/js.valueCall":a=>{a>>>=0;try{let b=c(a+8),d=Reflect.get(b,j(a+16)),f=i(a+32),g=Reflect.apply(d,b,f);a=this._inst.exports.getsp()>>>0,e(a+56,g),this.mem.setUint8(a+64,1)}catch(b){e((a=this._inst.exports.getsp()>>>0)+56,b),this.mem.setUint8(a+64,0)}},"syscall/js.valueInvoke":a=>{a>>>=0;try{let b=c(a+8),d=i(a+16),f=Reflect.apply(b,void 0,d);a=this._inst.exports.getsp()>>>0,e(a+40,f),this.mem.setUint8(a+48,1)}catch(b){e((a=this._inst.exports.getsp()>>>0)+40,b),this.mem.setUint8(a+48,0)}},"syscall/js.valueNew":a=>{a>>>=0;try{let b=c(a+8),d=i(a+16),f=Reflect.construct(b,d);a=this._inst.exports.getsp()>>>0,e(a+40,f),this.mem.setUint8(a+48,1)}catch(b){e((a=this._inst.exports.getsp()>>>0)+40,b),this.mem.setUint8(a+48,0)}},"syscall/js.valueLength":b=>{a((b>>>=0)+16,parseInt(c(b+8).length))},"syscall/js.valuePrepareString":b=>{b>>>=0;let d=f.encode(String(c(b+8)));e(b+16,d),a(b+24,d.length)},"syscall/js.valueLoadString":a=>{let b=c((a>>>=0)+8);h(a+16).set(b)},"syscall/js.valueInstanceOf":a=>{a>>>=0,this.mem.setUint8(a+24,+(c(a+8)instanceof c(a+16)))},"syscall/js.copyBytesToGo":b=>{let d=h((b>>>=0)+8),e=c(b+32);if(!(e instanceof Uint8Array||e instanceof Uint8ClampedArray))return void this.mem.setUint8(b+48,0);let f=e.subarray(0,d.length);d.set(f),a(b+40,f.length),this.mem.setUint8(b+48,1)},"syscall/js.copyBytesToJS":b=>{let d=c((b>>>=0)+8),e=h(b+16);if(!(d instanceof Uint8Array||d instanceof Uint8ClampedArray))return void this.mem.setUint8(b+48,0);let f=e.subarray(0,d.length);d.set(f),a(b+40,f.length),this.mem.setUint8(b+48,1)},debug:a=>{console.log(a)}}}}run(a){return c(this,null,function*(){if(!(a instanceof WebAssembly.Instance))throw Error("Go.run: WebAssembly.Instance expected");this._inst=a,this.mem=new DataView(this._inst.exports.mem.buffer),this._values=[NaN,0,null,!0,!1,d,this],this._goRefCounts=Array(this._values.length).fill(1/0),this._ids=new Map([[0,1],[null,2],[!0,3],[!1,4],[d,5],[this,6]]),this._idPool=[],this.exited=!1;let b=4096,c=a=>{let c=b,d=f.encode(a+"\0");return new Uint8Array(this.mem.buffer,b,d.length).set(d),(b+=d.length)%8!=0&&(b+=8-b%8),c},e=this.argv.length,g=[];this.argv.forEach(a=>{g.push(c(a))}),g.push(0),Object.keys(this.env).sort().forEach(a=>{g.push(c(`${a}=${this.env[a]}`))}),g.push(0);let h=b;if(g.forEach(a=>{this.mem.setUint32(b,a,!0),this.mem.setUint32(b+4,0,!0),b+=8}),b>=12288)throw Error("total length of command line and environment variables exceeds limit");this._inst.exports.run(e,h),this.exited&&this._resolveExitPromise(),yield this._exitPromise})}_resume(){if(this.exited)throw Error("Go program has already exited");this._inst.exports.resume(),this.exited&&this._resolveExitPromise()}_makeFuncWrapper(a){let b=this;return function(){let c={id:a,this:this,args:arguments};return b._pendingEvent=c,b._resume(),c.result}}},b=({data:e})=>{let f,g=new TextDecoder,h=d.fs,i="";h.writeSync=(b,c)=>{if(1===b)a(c);else if(2===b){let a=(i+=g.decode(c)).split("\n");a.length>1&&console.log(a.slice(0,-1).join("\n")),i=a[a.length-1]}else throw Error("Bad write");return c.length};let j=[],k=0;b=({data:a})=>(a.length>0&&(j.push(a),f&&f()),l),h.read=(a,b,c,d,e,g)=>{if(0!==a||0!==c||d!==b.length||null!==e)throw Error("Bad read");if(0===j.length){f=()=>h.read(a,b,c,d,e,g);return}let i=j[0],l=Math.max(0,Math.min(d,i.length-k));b.set(i.subarray(k,k+l),c),(k+=l)===i.length&&(j.shift(),k=0),g(null,l)};let l=new d.Go;return l.argv=["","--service=0.20.2"],(function(a,b){return c(this,null,function*(){if(a instanceof WebAssembly.Module)return WebAssembly.instantiate(a,b.importObject);let c=yield fetch(a);if(!c.ok)throw Error(`Failed to download ${JSON.stringify(a)}`);if("instantiateStreaming"in WebAssembly&&/^application\/wasm($|;)/i.test(c.headers.get("Content-Type")||""))return(yield WebAssembly.instantiateStreaming(c,b.importObject)).instance;let d=yield c.arrayBuffer();return(yield WebAssembly.instantiate(d,b.importObject)).instance})})(e,l).then(b=>{a(null),l.run(b)},b=>{a(b)}),l},a=>b(a)})(a=>i.onmessage({data:a}));i={onmessage:null,postMessage:c=>setTimeout(()=>a=b({data:c})),terminate(){if(a)for(let b of a._scheduledTimeouts.values())clearTimeout(b)}}}let n=new Promise((a,b)=>{j=a,k=b});i.onmessage=({data:a})=>{i.onmessage=({data:a})=>o(a),a?k(a):j()},i.postMessage(d||new URL(a,location.href).toString());let{readFromStdout:o,service:s}=function(a){let d={},e={didClose:!1,reason:""},f={},g=0,h=0,i=new Uint8Array(16384),j=0,k=(b,c,d)=>{if(e.didClose)return d("The service is no longer running"+e.reason,null);let h=g++;f[h]=(a,c)=>{try{d(a,c)}finally{b&&b.unref()}},b&&b.ref(),a.writeToStdin(p({id:h,isRequest:!0,value:c}))},m=(b,c)=>{if(e.didClose)throw Error("The service is no longer running"+e.reason);a.writeToStdin(p({id:b,isRequest:!1,value:c}))},n=(b,c)=>l(this,null,function*(){try{if("ping"===c.command)return void m(b,{});if("number"==typeof c.key){let a=d[c.key];if(!a)return;let e=a[c.command];if(e)return void(yield e(b,c))}throw Error("Invalid command: "+c.command)}catch(d){let c=[V(d,a,null,void 0,"")];try{m(b,{errors:c})}catch(a){}}}),o=!0,s=a=>{if(o){o=!1;let b=String.fromCharCode(...a);if("0.20.2"!==b)throw Error(`Cannot start service: Host version "0.20.2" does not match binary version ${t(b)}`);return}let b=function(a){let b=()=>{switch(d.read8()){case 0:return null;case 1:return!!d.read8();case 2:return d.read32();case 3:return c(d.read());case 4:return d.read();case 5:{let a=d.read32(),c=[];for(let d=0;d<a;d++)c.push(b());return c}case 6:{let a=d.read32(),e={};for(let f=0;f<a;f++)e[c(d.read())]=b();return e}default:throw Error("Invalid packet")}},d=new q(a),e=d.read32(),f=(1&e)==0;e>>>=1;let g=b();if(d.ptr!==a.length)throw Error("Invalid packet");return{id:e,isRequest:f,value:g}}(a);if(b.isRequest)n(b.id,b.value);else{let a=f[b.id];delete f[b.id],b.value.error?a(b.value.error,{}):a(null,b.value)}};return{readFromStdout:a=>{let b=j+a.length;if(b>i.length){let a=new Uint8Array(2*b);a.set(i),i=a}i.set(a,j),j+=a.length;let c=0;for(;c+4<=j;){let a=r(i,c);if(c+4+a>j)break;c+=4,s(i.subarray(c,c+a)),c+=a}c>0&&(i.copyWithin(0,c,j),j-=c)},afterClose:a=>{e.didClose=!0,a&&(e.reason=": "+(a.message||a));let b="The service was stopped"+e.reason;for(let a in f)f[a](b,null);f={}},service:{buildOrContext:({callName:e,refs:f,options:g,isTTY:i,defaultWD:j,callback:n})=>{let o=0,p=h++,q={},r={ref(){1==++o&&f&&f.ref()},unref(){0==--o&&(delete d[p],f&&f.unref())}};d[p]=q,r.ref(),function(a,d,e,f,g,h,i,j,k,m,n){let o,p=T(),q="context"===a,r=(a,b)=>{let c=[];try{Q(c,j,{},k,u)}catch(a){}let d=V(a,h,p,void 0,b);e(g,{command:"error",flags:c,error:d},()=>{d.detail=p.load(d.detail),n(X(q?"Context failed":"Build failed",[d],[]),null)})};if("object"==typeof j){let a=j.plugins;if(void 0!==a){if(!Array.isArray(a))return r(Error('"plugins" must be an array'),"");o=a}}if(o&&o.length>0){let a,c,k,m,n,q,u,v,w;return h.isSync?r(Error("Cannot use plugins in synchronous API calls"),""):(a=d,c=e,k=f,m=g,n=h,q=i,u=j,v=o,w=p,l(void 0,null,function*(){let d=[],e=[],f={},g={},h=[],i=0,j=0,o=[],p=!1;for(let b of v=[...v]){let k={};if("object"!=typeof b)throw Error(`Plugin at index ${j} must be an object`);let l=N(b,k,"name",z);if("string"!=typeof l||""===l)throw Error(`Plugin at index ${j} is missing a name`);try{let q=N(b,k,"setup",C);if("function"!=typeof q)throw Error("Plugin is missing a setup function");O(b,k,`on plugin ${t(l)}`);let r={name:l,onStart:!1,onEnd:!1,onResolve:[],onLoad:[]};j++;let s=(b,d={})=>{if(!p)throw Error('Cannot call "resolve" before plugin setup has completed');if("string"!=typeof b)throw Error("The path to resolve must be a string");let e=Object.create(null),f=N(d,e,"pluginName",z),g=N(d,e,"importer",z),h=N(d,e,"namespace",z),i=N(d,e,"resolveDir",z),j=N(d,e,"kind",z),k=N(d,e,"pluginData",x);return O(d,e,"in resolve() call"),new Promise((d,e)=>{let n={command:"resolve",path:b,key:a,pluginName:l};if(null!=f&&(n.pluginName=f),null!=g&&(n.importer=g),null!=h&&(n.namespace=h),null!=i&&(n.resolveDir=i),null!=j)n.kind=j;else throw Error('Must specify "kind" when calling "resolve"');null!=k&&(n.pluginData=w.store(k)),c(m,n,(a,b)=>{null!==a?e(Error(a)):d({errors:Y(b.errors,w),warnings:Y(b.warnings,w),path:b.path,external:b.external,sideEffects:b.sideEffects,namespace:b.namespace,suffix:b.suffix,pluginData:w.load(b.pluginData)})})})},v=q({initialOptions:u,resolve:s,onStart(a){let b=U(Error('This error came from the "onStart" callback registered here:'),n,"onStart");d.push({name:l,callback:a,note:b}),r.onStart=!0},onEnd(a){let b=U(Error('This error came from the "onEnd" callback registered here:'),n,"onEnd");e.push({name:l,callback:a,note:b}),r.onEnd=!0},onResolve(a,b){let c=U(Error('This error came from the "onResolve" callback registered here:'),n,"onResolve"),d={},e=N(a,d,"filter",A),g=N(a,d,"namespace",z);if(O(a,d,`in onResolve() call for plugin ${t(l)}`),null==e)throw Error("onResolve() call is missing a filter");let h=i++;f[h]={name:l,callback:b,note:c},r.onResolve.push({id:h,filter:e.source,namespace:g||""})},onLoad(a,b){let c=U(Error('This error came from the "onLoad" callback registered here:'),n,"onLoad"),d={},e=N(a,d,"filter",A),f=N(a,d,"namespace",z);if(O(a,d,`in onLoad() call for plugin ${t(l)}`),null==e)throw Error("onLoad() call is missing a filter");let h=i++;g[h]={name:l,callback:b,note:c},r.onLoad.push({id:h,filter:e.source,namespace:f||""})},onDispose(a){h.push(a)},esbuild:n.esbuild});v&&(yield v),o.push(r)}catch(a){return{ok:!1,error:a,pluginName:l}}}q["on-start"]=(a,b)=>l(void 0,null,function*(){let b={errors:[],warnings:[]};yield Promise.all(d.map(a=>l(void 0,[a],function*({name:a,callback:c,note:d}){try{let d=yield c();if(null!=d){if("object"!=typeof d)throw Error(`Expected onStart() callback in plugin ${t(a)} to return an object`);let c={},e=N(d,c,"errors",D),f=N(d,c,"warnings",D);O(d,c,`from onStart() callback in plugin ${t(a)}`),null!=e&&b.errors.push(...$(e,"errors",w,a,void 0)),null!=f&&b.warnings.push(...$(f,"warnings",w,a,void 0))}}catch(c){b.errors.push(V(c,n,w,d&&d(),a))}}))),k(a,b)}),q["on-resolve"]=(a,b)=>l(void 0,null,function*(){let c={},d="",e,g;for(let a of b.ids)try{({name:d,callback:e,note:g}=f[a]);let h=yield e({path:b.path,importer:b.importer,namespace:b.namespace,resolveDir:b.resolveDir,kind:b.kind,pluginData:w.load(b.pluginData)});if(null!=h){if("object"!=typeof h)throw Error(`Expected onResolve() callback in plugin ${t(d)} to return an object`);let b={},e=N(h,b,"pluginName",z),f=N(h,b,"path",z),g=N(h,b,"namespace",z),i=N(h,b,"suffix",z),j=N(h,b,"external",y),k=N(h,b,"sideEffects",y),l=N(h,b,"pluginData",x),m=N(h,b,"errors",D),n=N(h,b,"warnings",D),o=N(h,b,"watchFiles",D),p=N(h,b,"watchDirs",D);O(h,b,`from onResolve() callback in plugin ${t(d)}`),c.id=a,null!=e&&(c.pluginName=e),null!=f&&(c.path=f),null!=g&&(c.namespace=g),null!=i&&(c.suffix=i),null!=j&&(c.external=j),null!=k&&(c.sideEffects=k),null!=l&&(c.pluginData=w.store(l)),null!=m&&(c.errors=$(m,"errors",w,d,void 0)),null!=n&&(c.warnings=$(n,"warnings",w,d,void 0)),null!=o&&(c.watchFiles=_(o,"watchFiles")),null!=p&&(c.watchDirs=_(p,"watchDirs"));break}}catch(b){c={id:a,errors:[V(b,n,w,g&&g(),d)]};break}k(a,c)}),q["on-load"]=(a,c)=>l(void 0,null,function*(){let d={},e="",f,h;for(let a of c.ids)try{({name:e,callback:f,note:h}=g[a]);let i=yield f({path:c.path,namespace:c.namespace,suffix:c.suffix,pluginData:w.load(c.pluginData),with:c.with});if(null!=i){if("object"!=typeof i)throw Error(`Expected onLoad() callback in plugin ${t(e)} to return an object`);let c={},f=N(i,c,"pluginName",z),g=N(i,c,"contents",L),h=N(i,c,"resolveDir",z),j=N(i,c,"pluginData",x),k=N(i,c,"loader",z),l=N(i,c,"errors",D),m=N(i,c,"warnings",D),n=N(i,c,"watchFiles",D),o=N(i,c,"watchDirs",D);O(i,c,`from onLoad() callback in plugin ${t(e)}`),d.id=a,null!=f&&(d.pluginName=f),g instanceof Uint8Array?d.contents=g:null!=g&&(d.contents=b(g)),null!=h&&(d.resolveDir=h),null!=j&&(d.pluginData=w.store(j)),null!=k&&(d.loader=k),null!=l&&(d.errors=$(l,"errors",w,e,void 0)),null!=m&&(d.warnings=$(m,"warnings",w,e,void 0)),null!=n&&(d.watchFiles=_(n,"watchFiles")),null!=o&&(d.watchDirs=_(o,"watchDirs"));break}}catch(b){d={id:a,errors:[V(b,n,w,h&&h(),e)]};break}k(a,d)});let r=(a,b)=>b([],[]);return e.length>0&&(r=(a,b)=>{l(void 0,null,function*(){let c=[],d=[];for(let{name:b,callback:f,note:g}of e){let e,h;try{let c=yield f(a);if(null!=c){if("object"!=typeof c)throw Error(`Expected onEnd() callback in plugin ${t(b)} to return an object`);let a={},d=N(c,a,"errors",D),f=N(c,a,"warnings",D);O(c,a,`from onEnd() callback in plugin ${t(b)}`),null!=d&&(e=$(d,"errors",w,b,void 0)),null!=f&&(h=$(f,"warnings",w,b,void 0))}}catch(a){e=[V(a,n,w,g&&g(),b)]}if(e){c.push(...e);try{a.errors.push(...e)}catch(a){}}if(h){d.push(...h);try{a.warnings.push(...h)}catch(a){}}}b(c,d)})}),p=!0,{ok:!0,requestPlugins:o,runOnEndCallbacks:r,scheduleOnDisposeCallbacks:()=>{for(let a of h)setTimeout(()=>a(),0)}}})).then(a=>{if(!a.ok)return r(a.error,a.pluginName);try{s(a.requestPlugins,a.runOnEndCallbacks,a.scheduleOnDisposeCallbacks)}catch(a){r(a,"")}},a=>r(a,""))}try{s(null,(a,b)=>b([],[]),()=>{})}catch(a){r(a,"")}function s(l,o,r){let s,t,{entries:v,flags:w,write:x,stdinContents:A,stdinResolveDir:G,absWorkingDir:H,nodePaths:J,mangleCache:K}=function(a,c,d,e,f){var g;let h=[],i=[],j=Object.create(null),k=null,l=null;Q(h,c,j,d,e),S(h,c,j);let m=N(c,j,"sourcemap",I),n=N(c,j,"bundle",y),o=N(c,j,"splitting",y),p=N(c,j,"preserveSymlinks",y),q=N(c,j,"metafile",y),r=N(c,j,"outfile",z),s=N(c,j,"outdir",z),t=N(c,j,"outbase",z),u=N(c,j,"tsconfig",z),v=N(c,j,"resolveExtensions",D),w=N(c,j,"nodePaths",D),x=N(c,j,"mainFields",D),A=N(c,j,"conditions",D),B=N(c,j,"external",D),C=N(c,j,"packages",z),G=N(c,j,"alias",E),H=N(c,j,"loader",E),J=N(c,j,"outExtension",E),K=N(c,j,"publicPath",z),M=N(c,j,"entryNames",z),T=N(c,j,"chunkNames",z),U=N(c,j,"assetNames",z),V=N(c,j,"inject",D),W=N(c,j,"banner",E),X=N(c,j,"footer",E),Y=N(c,j,"entryPoints",F),Z=N(c,j,"absWorkingDir",z),$=N(c,j,"stdin",E),_=null!=(g=N(c,j,"write",y))?g:f,aa=N(c,j,"allowOverwrite",y),ab=N(c,j,"mangleCache",E);if(j.plugins=!0,O(c,j,`in ${a}() call`),m&&h.push(`--sourcemap${!0===m?"":`=${m}`}`),n&&h.push("--bundle"),aa&&h.push("--allow-overwrite"),o&&h.push("--splitting"),p&&h.push("--preserve-symlinks"),q&&h.push("--metafile"),r&&h.push(`--outfile=${r}`),s&&h.push(`--outdir=${s}`),t&&h.push(`--outbase=${t}`),u&&h.push(`--tsconfig=${u}`),C&&h.push(`--packages=${C}`),v){let a=[];for(let b of v){if(R(b,"resolve extension"),b.indexOf(",")>=0)throw Error(`Invalid resolve extension: ${b}`);a.push(b)}h.push(`--resolve-extensions=${a.join(",")}`)}if(K&&h.push(`--public-path=${K}`),M&&h.push(`--entry-names=${M}`),T&&h.push(`--chunk-names=${T}`),U&&h.push(`--asset-names=${U}`),x){let a=[];for(let b of x){if(R(b,"main field"),b.indexOf(",")>=0)throw Error(`Invalid main field: ${b}`);a.push(b)}h.push(`--main-fields=${a.join(",")}`)}if(A){let a=[];for(let b of A){if(R(b,"condition"),b.indexOf(",")>=0)throw Error(`Invalid condition: ${b}`);a.push(b)}h.push(`--conditions=${a.join(",")}`)}if(B)for(let a of B)h.push(`--external:${R(a,"external")}`);if(G)for(let a in G){if(a.indexOf("=")>=0)throw Error(`Invalid package name in alias: ${a}`);h.push(`--alias:${a}=${R(G[a],"alias",a)}`)}if(W)for(let a in W){if(a.indexOf("=")>=0)throw Error(`Invalid banner file type: ${a}`);h.push(`--banner:${a}=${R(W[a],"banner",a)}`)}if(X)for(let a in X){if(a.indexOf("=")>=0)throw Error(`Invalid footer file type: ${a}`);h.push(`--footer:${a}=${R(X[a],"footer",a)}`)}if(V)for(let a of V)h.push(`--inject:${R(a,"inject")}`);if(H)for(let a in H){if(a.indexOf("=")>=0)throw Error(`Invalid loader extension: ${a}`);h.push(`--loader:${a}=${R(H[a],"loader",a)}`)}if(J)for(let a in J){if(a.indexOf("=")>=0)throw Error(`Invalid out extension: ${a}`);h.push(`--out-extension:${a}=${R(J[a],"out extension",a)}`)}if(Y)if(Array.isArray(Y))for(let a=0,b=Y.length;a<b;a++){let b=Y[a];if("object"==typeof b&&null!==b){let c=Object.create(null),d=N(b,c,"in",z),e=N(b,c,"out",z);if(O(b,c,"in entry point at index "+a),void 0===d)throw Error('Missing property "in" for entry point at index '+a);if(void 0===e)throw Error('Missing property "out" for entry point at index '+a);i.push([e,d])}else i.push(["",R(b,"entry point at index "+a)])}else for(let a in Y)i.push([a,R(Y[a],"entry point",a)]);if($){let a=Object.create(null),c=N($,a,"contents",L),d=N($,a,"resolveDir",z),e=N($,a,"sourcefile",z),f=N($,a,"loader",z);O($,a,'in "stdin" object'),e&&h.push(`--sourcefile=${e}`),f&&h.push(`--loader=${f}`),d&&(l=d),"string"==typeof c?k=b(c):c instanceof Uint8Array&&(k=c)}let ac=[];if(w)for(let a of w)a+="",ac.push(a);return{entries:i,flags:h,write:_,stdinContents:k,stdinResolveDir:l,absWorkingDir:Z,nodePaths:ac,mangleCache:P(ab)}}(a,j,k,u,h.hasFS);if(x&&!h.hasFS)throw Error('The "write" option is unavailable in this environment');let M={command:"build",key:d,entries:v,flags:w,write:x,stdinContents:A,stdinResolveDir:G,absWorkingDir:H||m,nodePaths:J,context:q};l&&(M.plugins=l),K&&(M.mangleCache=K);let T=(a,b)=>{let d={errors:Y(a.errors,p),warnings:Y(a.warnings,p),outputFiles:void 0,metafile:void 0,mangleCache:void 0},e=d.errors.slice(),f=d.warnings.slice();a.outputFiles&&(d.outputFiles=a.outputFiles.map(aa)),a.metafile&&(d.metafile=JSON.parse(a.metafile)),a.mangleCache&&(d.mangleCache=a.mangleCache),void 0!==a.writeToStdout&&console.log(c(a.writeToStdout).replace(/\n$/,"")),o(d,(a,c)=>{if(e.length>0||a.length>0)return b(X("Build failed",e.concat(a),f.concat(c)),null,a,c);b(null,d,a,c)})};q&&(i["on-end"]=(a,b)=>new Promise(c=>{T(b,(b,d,e,g)=>{t&&t(b,d),s=void 0,t=void 0,f(a,{errors:e,warnings:g}),c()})})),e(g,M,(a,b)=>{if(a)return n(Error(a),null);if(!q)return T(b,(a,b)=>(r(),n(a,b)));if(b.errors.length>0)return n(X("Context failed",b.errors,b.warnings),null);let c=!1;g.ref(),n(null,{rebuild:()=>(s||(s=new Promise((a,b)=>{let c;t=(d,e)=>{c||(c=()=>d?b(d):a(e))};let f=()=>{e(g,{command:"rebuild",key:d},(a,d)=>{a?b(Error(a)):c?c():f()})};f()})),s),watch:(a={})=>new Promise((b,c)=>{if(!h.hasFS)throw Error('Cannot use the "watch" API in this environment');O(a,{},"in watch() call"),e(g,{command:"watch",key:d},a=>{a?c(Error(a)):b(void 0)})}),serve:(a={})=>new Promise((b,c)=>{if(!h.hasFS)throw Error('Cannot use the "serve" API in this environment');let j={},k=N(a,j,"port",B),l=N(a,j,"host",z),m=N(a,j,"servedir",z),n=N(a,j,"keyfile",z),o=N(a,j,"certfile",z),p=N(a,j,"fallback",z),q=N(a,j,"onRequest",C);O(a,j,"in serve() call");let r={command:"serve",key:d,onRequest:!!q};void 0!==k&&(r.port=k),void 0!==l&&(r.host=l),void 0!==m&&(r.servedir=m),void 0!==n&&(r.keyfile=n),void 0!==o&&(r.certfile=o),void 0!==p&&(r.fallback=p),e(g,r,(a,d)=>{if(a)return c(Error(a));q&&(i["serve-request"]=(a,b)=>{q(b.args),f(a,{})}),b(d)})}),cancel:()=>new Promise(a=>{if(c)return a();e(g,{command:"cancel",key:d},()=>{a()})}),dispose:()=>new Promise(a=>{if(c)return a();c=!0,e(g,{command:"dispose",key:d},()=>{a(),r(),g.unref()})})})})}}(e,p,k,m,r,a,q,g,i,j,(a,b)=>{try{n(a,b)}finally{r.unref()}})},transform:({callName:c,refs:d,input:e,options:f,isTTY:g,fs:h,callback:i})=>{let j=T(),l=l=>{try{let a,m,n,o,p,q,r,s;if("string"!=typeof e&&!(e instanceof Uint8Array))throw Error('The input to "transform" must be a string or a Uint8Array');let{flags:t,mangleCache:u}=(a=[],m=Object.create(null),Q(a,f,m,g,v),S(a,f,m),n=N(f,m,"sourcemap",I),o=N(f,m,"sourcefile",z),p=N(f,m,"loader",z),q=N(f,m,"banner",z),r=N(f,m,"footer",z),s=N(f,m,"mangleCache",E),O(f,m,`in ${c}() call`),n&&a.push(`--sourcemap=${!0===n?"external":n}`),o&&a.push(`--sourcefile=${o}`),p&&a.push(`--loader=${p}`),q&&a.push(`--banner=${q}`),r&&a.push(`--footer=${r}`),{flags:a,mangleCache:P(s)}),w={command:"transform",flags:t,inputFS:null!==l,input:null!==l?b(l):"string"==typeof e?b(e):e};u&&(w.mangleCache=u),k(d,w,(a,b)=>{if(a)return i(Error(a),null);let c=Y(b.errors,j),d=Y(b.warnings,j),e=1,f=()=>{if(0==--e){let a={warnings:d,code:b.code,map:b.map,mangleCache:void 0,legalComments:void 0};"legalComments"in b&&(a.legalComments=null==b?void 0:b.legalComments),b.mangleCache&&(a.mangleCache=null==b?void 0:b.mangleCache),i(null,a)}};if(c.length>0)return i(X("Transform failed",c,d),null);b.codeFS&&(e++,h.readFile(b.code,(a,c)=>{null!==a?i(a,null):(b.code=c,f())})),b.mapFS&&(e++,h.readFile(b.map,(a,c)=>{null!==a?i(a,null):(b.map=c,f())})),f()})}catch(e){let b=[];try{Q(b,f,{},g,v)}catch(a){}let c=V(e,a,j,void 0,"");k(d,{command:"error",flags:b,error:c},()=>{c.detail=j.load(c.detail),i(X("Transform failed",[c],[]),null)})}};if(("string"==typeof e||e instanceof Uint8Array)&&e.length>1048576){let a=l;l=()=>h.writeFile(e,a)}l(null)},formatMessages:({callName:a,refs:b,messages:c,options:d,callback:e})=>{if(!d)throw Error(`Missing second argument in ${a}() call`);let f={},g=N(d,f,"kind",z),h=N(d,f,"color",y),i=N(d,f,"terminalWidth",B);if(O(d,f,`in ${a}() call`),void 0===g)throw Error(`Missing "kind" in ${a}() call`);if("error"!==g&&"warning"!==g)throw Error(`Expected "kind" to be "error" or "warning" in ${a}() call`);let j={command:"format-msgs",messages:$(c,"messages",null,"",i),isWarning:"warning"===g};void 0!==h&&(j.color=h),void 0!==i&&(j.terminalWidth=i),k(b,j,(a,b)=>{if(a)return e(Error(a),null);e(null,b.messages)})},analyzeMetafile:({callName:a,refs:b,metafile:c,options:d,callback:e})=>{void 0===d&&(d={});let f={},g=N(d,f,"color",y),h=N(d,f,"verbose",y);O(d,f,`in ${a}() call`);let i={command:"analyze-metafile",metafile:c};void 0!==g&&(i.color=g),void 0!==h&&(i.verbose=h),k(b,i,(a,b)=>{if(a)return e(Error(a),null);e(null,b.result)})}}}}({writeToStdin(a){i.postMessage(a)},isSync:!1,hasFS:!1,esbuild:m});yield n,f=()=>{i.terminate(),e=void 0,f=void 0,g=void 0},g={build:a=>new Promise((b,c)=>s.buildOrContext({callName:"build",refs:null,options:a,isTTY:!1,defaultWD:"/",callback:(a,d)=>a?c(a):b(d)})),context:a=>new Promise((b,c)=>s.buildOrContext({callName:"context",refs:null,options:a,isTTY:!1,defaultWD:"/",callback:(a,d)=>a?c(a):b(d)})),transform:(a,b)=>new Promise((c,d)=>s.transform({callName:"transform",refs:null,input:a,options:b||{},isTTY:!1,fs:{readFile(a,b){b(Error("Internal error"),null)},writeFile(a,b){b(null)}},callback:(a,b)=>a?d(a):c(b)})),formatMessages:(a,b)=>new Promise((c,d)=>s.formatMessages({callName:"formatMessages",refs:null,messages:a,options:b,callback:(a,b)=>a?d(a):c(b)})),analyzeMetafile:(a,b)=>new Promise((c,d)=>s.analyzeMetafile({callName:"analyzeMetafile",refs:null,metafile:"string"==typeof a?a:JSON.stringify(a),options:b,callback:(a,b)=>a?d(a):c(b)}))}}),ap=m})(b)}];

//# sourceMappingURL=_14ys9ir._.js.map