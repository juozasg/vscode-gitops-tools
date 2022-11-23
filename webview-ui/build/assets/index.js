const Cr=function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))n(i);new MutationObserver(i=>{for(const r of i)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function t(i){const r={};return i.integrity&&(r.integrity=i.integrity),i.referrerpolicy&&(r.referrerPolicy=i.referrerpolicy),i.crossorigin==="use-credentials"?r.credentials="include":i.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(i){if(i.ep)return;i.ep=!0;const r=t(i);fetch(i.href,r)}};Cr();const q={};function Sr(o){q.context=o}const Ir=(o,e)=>o===e,Ne=Symbol("solid-proxy"),co={equals:Ir};let mi=Ci;const st={},ze=1,ao=2,yi={owned:null,cleanups:null,context:null,owner:null};var M=null;let jt=null,L=null,It=null,J=null,me=null,sn=0;function no(o,e){const t=L,n=M,i=o.length===0?yi:{owned:null,cleanups:null,context:null,owner:e||n};M=i,L=null;try{return ln(()=>o(()=>dn(i)),!0)}finally{L=t,M=n}}function je(o,e){e=e?Object.assign({},co,e):co;const t={value:o,observers:null,observerSlots:null,pending:st,comparator:e.equals||void 0},n=i=>(typeof i=="function"&&(i=i(t.pending!==st?t.pending:t.value)),cn(t,i));return[$i.bind(t),n]}function Ce(o,e,t){const n=an(o,e,!1,ze);qt(n)}function qe(o,e,t){mi=Ar;const n=an(o,e,!1,ze),i=Bn&&Ti(M,Bn.id);i&&(n.suspense=i),n.user=!0,me?me.push(n):queueMicrotask(()=>qt(n))}function _t(o,e,t){t=t?Object.assign({},co,t):co;const n=an(o,e,!0,0);return n.pending=st,n.observers=null,n.observerSlots=null,n.comparator=t.equals||void 0,qt(n),$i.bind(n)}function xi(o){if(It)return o();let e;const t=It=[];try{e=o()}finally{It=null}return ln(()=>{for(let n=0;n<t.length;n+=1){const i=t[n];if(i.pending!==st){const r=i.pending;i.pending=st,cn(i,r)}}},!1),e}function Ue(o){let e,t=L;return L=null,e=o(),L=t,e}function ke(o){qe(()=>Ue(o))}function wi(o){return M===null||(M.cleanups===null?M.cleanups=[o]:M.cleanups.push(o)),o}function ki(){return L}function v(){return M}let Bn;function $i(){const o=jt;if(this.sources&&(this.state||o)){const e=J;J=null,this.state===ze||o?qt(this):lo(this),J=e}if(L){const e=this.observers?this.observers.length:0;L.sources?(L.sources.push(this),L.sourceSlots.push(e)):(L.sources=[this],L.sourceSlots=[e]),this.observers?(this.observers.push(L),this.observerSlots.push(L.sources.length-1)):(this.observers=[L],this.observerSlots=[L.sources.length-1])}return this.value}function cn(o,e,t){if(It)return o.pending===st&&It.push(o),o.pending=e,e;if(o.comparator&&o.comparator(o.value,e))return e;let n=!1;return o.value=e,o.observers&&o.observers.length&&ln(()=>{for(let i=0;i<o.observers.length;i+=1){const r=o.observers[i];n&&jt.disposed.has(r),(n&&!r.tState||!n&&!r.state)&&(r.pure?J.push(r):me.push(r),r.observers&&Si(r)),n||(r.state=ze)}if(J.length>1e6)throw J=[],new Error},!1),e}function qt(o){if(!o.fn)return;dn(o);const e=M,t=L,n=sn;L=M=o,Tr(o,o.value,n),L=t,M=e}function Tr(o,e,t){let n;try{n=o.fn(e)}catch(i){Ii(i)}(!o.updatedAt||o.updatedAt<=t)&&(o.observers&&o.observers.length?cn(o,n):o.value=n,o.updatedAt=t)}function an(o,e,t,n=ze,i){const r={fn:o,state:n,updatedAt:null,owned:null,sources:null,sourceSlots:null,cleanups:null,value:e,owner:M,context:null,pure:t};return M===null||M!==yi&&(M.owned?M.owned.push(r):M.owned=[r]),r}function Tt(o){const e=jt;if(o.state===0||e)return;if(o.state===ao||e)return lo(o);if(o.suspense&&Ue(o.suspense.inFallback))return o.suspense.effects.push(o);const t=[o];for(;(o=o.owner)&&(!o.updatedAt||o.updatedAt<sn);)(o.state||e)&&t.push(o);for(let n=t.length-1;n>=0;n--)if(o=t[n],o.state===ze||e)qt(o);else if(o.state===ao||e){const i=J;J=null,lo(o,t[0]),J=i}}function ln(o,e){if(J)return o();let t=!1;e||(J=[]),me?t=!0:me=[],sn++;try{return o()}catch(n){Ii(n)}finally{Br(t)}}function Br(o){J&&(Ci(J),J=null),!o&&(me.length?xi(()=>{mi(me),me=null}):me=null)}function Ci(o){for(let e=0;e<o.length;e++)Tt(o[e])}function Ar(o){let e,t=0;for(e=0;e<o.length;e++){const i=o[e];i.user?o[t++]=i:Tt(i)}q.context&&Sr();const n=o.length;for(e=0;e<t;e++)Tt(o[e]);for(e=n;e<o.length;e++)Tt(o[e])}function lo(o,e){const t=jt;o.state=0;for(let n=0;n<o.sources.length;n+=1){const i=o.sources[n];i.sources&&(i.state===ze||t?i!==e&&Tt(i):(i.state===ao||t)&&lo(i,e))}}function Si(o){const e=jt;for(let t=0;t<o.observers.length;t+=1){const n=o.observers[t];(!n.state||e)&&(n.state=ao,n.pure?J.push(n):me.push(n),n.observers&&Si(n))}}function dn(o){let e;if(o.sources)for(;o.sources.length;){const t=o.sources.pop(),n=o.sourceSlots.pop(),i=t.observers;if(i&&i.length){const r=i.pop(),s=t.observerSlots.pop();n<i.length&&(r.sourceSlots[s]=n,i[n]=r,t.observerSlots[n]=s)}}if(o.owned){for(e=0;e<o.owned.length;e++)dn(o.owned[e]);o.owned=null}if(o.cleanups){for(e=0;e<o.cleanups.length;e++)o.cleanups[e]();o.cleanups=null}o.state=0,o.context=null}function Ii(o){throw o}function Ti(o,e){return o?o.context&&o.context[e]!==void 0?o.context[e]:Ti(o.owner,e):void 0}const Rr=Symbol("fallback");function An(o){for(let e=0;e<o.length;e++)o[e]()}function Or(o,e,t={}){let n=[],i=[],r=[],s=0,c=e.length>1?[]:null;return wi(()=>An(r)),()=>{let a=o()||[],l,d;return Ue(()=>{let b=a.length,m,w,A,N,ue,X,re,he,Xe;if(b===0)s!==0&&(An(r),r=[],n=[],i=[],s=0,c&&(c=[])),t.fallback&&(n=[Rr],i[0]=no($r=>(r[0]=$r,t.fallback())),s=1);else if(s===0){for(i=new Array(b),d=0;d<b;d++)n[d]=a[d],i[d]=no(u);s=b}else{for(A=new Array(b),N=new Array(b),c&&(ue=new Array(b)),X=0,re=Math.min(s,b);X<re&&n[X]===a[X];X++);for(re=s-1,he=b-1;re>=X&&he>=X&&n[re]===a[he];re--,he--)A[he]=i[re],N[he]=r[re],c&&(ue[he]=c[re]);for(m=new Map,w=new Array(he+1),d=he;d>=X;d--)Xe=a[d],l=m.get(Xe),w[d]=l===void 0?-1:l,m.set(Xe,d);for(l=X;l<=re;l++)Xe=n[l],d=m.get(Xe),d!==void 0&&d!==-1?(A[d]=i[l],N[d]=r[l],c&&(ue[d]=c[l]),d=w[d],m.set(Xe,d)):r[l]();for(d=X;d<b;d++)d in A?(i[d]=A[d],r[d]=N[d],c&&(c[d]=ue[d],c[d](d))):i[d]=no(u);i=i.slice(0,s=b),n=a.slice(0)}return i});function u(b){if(r[d]=b,c){const[m,w]=je(d);return c[d]=w,e(a[d],m)}return e(a[d])}}}function k(o,e){return Ue(()=>o(e))}function Xt(){return!0}const Bi={get(o,e,t){return e===Ne?t:o.get(e)},has(o,e){return o.has(e)},set:Xt,deleteProperty:Xt,getOwnPropertyDescriptor(o,e){return{configurable:!0,enumerable:!0,get(){return o.get(e)},set:Xt,deleteProperty:Xt}},ownKeys(o){return o.keys()}};function Ro(o){return typeof o=="function"?o():o}function _r(...o){return new Proxy({get(e){for(let t=o.length-1;t>=0;t--){const n=Ro(o[t])[e];if(n!==void 0)return n}},has(e){for(let t=o.length-1;t>=0;t--)if(e in Ro(o[t]))return!0;return!1},keys(){const e=[];for(let t=0;t<o.length;t++)e.push(...Object.keys(Ro(o[t])));return[...new Set(e)]}},Bi)}function Fr(o,...e){const t=new Set(e.flat()),n=Object.getOwnPropertyDescriptors(o),i=e.map(r=>{const s={};for(let c=0;c<r.length;c++){const a=r[c];Object.defineProperty(s,a,n[a]?n[a]:{get(){return o[a]},set(){return!0}})}return s});return i.push(new Proxy({get(r){return t.has(r)?void 0:o[r]},has(r){return t.has(r)?!1:r in o},keys(){return Object.keys(o).filter(r=>!t.has(r))}},Bi)),i}function Ft(o){const e="fallback"in o&&{fallback:()=>o.fallback};return _t(Or(()=>o.each,o.children,e||void 0))}function se(o){let e=!1;const t=_t(()=>o.when,void 0,{equals:(n,i)=>e?n===i:!n==!i});return _t(()=>{const n=t();if(n){const i=o.children;return(e=typeof i=="function"&&i.length>0)?Ue(()=>i(n)):i}return o.fallback})}const Er=["allowfullscreen","async","autofocus","autoplay","checked","controls","default","disabled","formnovalidate","hidden","indeterminate","ismap","loop","multiple","muted","nomodule","novalidate","open","playsinline","readonly","required","reversed","seamless","selected"],Dr=new Set(["className","value","readOnly","formNoValidate","isMap","noModule","playsInline",...Er]),Pr=new Set(["innerHTML","textContent","innerText","children"]),Lr={className:"class",htmlFor:"for"},Rn={class:"className",formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"},Hr=new Set(["beforeinput","click","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"]),Nr=new Set(["altGlyph","altGlyphDef","altGlyphItem","animate","animateColor","animateMotion","animateTransform","circle","clipPath","color-profile","cursor","defs","desc","ellipse","feBlend","feColorMatrix","feComponentTransfer","feComposite","feConvolveMatrix","feDiffuseLighting","feDisplacementMap","feDistantLight","feFlood","feFuncA","feFuncB","feFuncG","feFuncR","feGaussianBlur","feImage","feMerge","feMergeNode","feMorphology","feOffset","fePointLight","feSpecularLighting","feSpotLight","feTile","feTurbulence","filter","font","font-face","font-face-format","font-face-name","font-face-src","font-face-uri","foreignObject","g","glyph","glyphRef","hkern","image","line","linearGradient","marker","mask","metadata","missing-glyph","mpath","path","pattern","polygon","polyline","radialGradient","rect","set","stop","svg","switch","symbol","text","textPath","tref","tspan","use","view","vkern"]),Vr={xlink:"http://www.w3.org/1999/xlink",xml:"http://www.w3.org/XML/1998/namespace"};function Mr(o,e){return _t(o,void 0,e?void 0:{equals:e})}function zr(o,e,t){let n=t.length,i=e.length,r=n,s=0,c=0,a=e[i-1].nextSibling,l=null;for(;s<i||c<r;){if(e[s]===t[c]){s++,c++;continue}for(;e[i-1]===t[r-1];)i--,r--;if(i===s){const d=r<n?c?t[c-1].nextSibling:t[r-c]:a;for(;c<r;)o.insertBefore(t[c++],d)}else if(r===c)for(;s<i;)(!l||!l.has(e[s]))&&e[s].remove(),s++;else if(e[s]===t[r-1]&&t[c]===e[i-1]){const d=e[--i].nextSibling;o.insertBefore(t[c++],e[s++].nextSibling),o.insertBefore(t[--r],d),e[i]=t[r]}else{if(!l){l=new Map;let u=c;for(;u<r;)l.set(t[u],u++)}const d=l.get(e[s]);if(d!=null)if(c<d&&d<r){let u=s,b=1,m;for(;++u<i&&u<r&&!((m=l.get(e[u]))==null||m!==d+b);)b++;if(b>d-c){const w=e[s];for(;c<d;)o.insertBefore(t[c++],w)}else o.replaceChild(t[c++],e[s++])}else s++;else e[s++].remove()}}}const On="_$DX_DELEGATE";function jr(o,e,t){let n;return no(i=>{n=i,e===document?o():y(e,o(),e.firstChild?null:void 0,t)}),()=>{n(),e.textContent=""}}function C(o,e,t){const n=document.createElement("template");n.innerHTML=o;let i=n.content.firstChild;return t&&(i=i.firstChild),i}function wo(o,e=window.document){const t=e[On]||(e[On]=new Set);for(let n=0,i=o.length;n<i;n++){const r=o[n];t.has(r)||(t.add(r),e.addEventListener(r,Kr))}}function qr(o,e,t){t==null?o.removeAttribute(e):o.setAttribute(e,t)}function Ur(o,e,t,n){n==null?o.removeAttributeNS(e,t):o.setAttributeNS(e,t,n)}function Gr(o,e,t,n){n?Array.isArray(t)?(o[`$$${e}`]=t[0],o[`$$${e}Data`]=t[1]):o[`$$${e}`]=t:Array.isArray(t)?o.addEventListener(e,i=>t[0](t[1],i)):o.addEventListener(e,t)}function Wr(o,e,t={}){const n=Object.keys(e||{}),i=Object.keys(t);let r,s;for(r=0,s=i.length;r<s;r++){const c=i[r];!c||c==="undefined"||e[c]||(_n(o,c,!1),delete t[c])}for(r=0,s=n.length;r<s;r++){const c=n[r],a=!!e[c];!c||c==="undefined"||t[c]===a||!a||(_n(o,c,!0),t[c]=a)}return t}function Qr(o,e,t={}){const n=o.style,i=typeof t=="string";if(e==null&&i||typeof e=="string")return n.cssText=e;i&&(n.cssText=void 0,t={}),e||(e={});let r,s;for(s in t)e[s]==null&&n.removeProperty(s),delete t[s];for(s in e)r=e[s],r!==t[s]&&(n.setProperty(s,r),t[s]=r);return t}function Xr(o,e,t,n){typeof e=="function"?Ce(i=>En(o,e(),i,t,n)):En(o,e,void 0,t,n)}function y(o,e,t,n){if(t!==void 0&&!n&&(n=[]),typeof e!="function")return ct(o,e,n,t);Ce(i=>ct(o,e(),i,t),n)}function Yr(o,e,t,n,i={},r=!1){e||(e={});for(const s in i)if(!(s in e)){if(s==="children")continue;Fn(o,s,null,i[s],t,r)}for(const s in e){if(s==="children"){n||ct(o,e.children);continue}const c=e[s];i[s]=Fn(o,s,c,i[s],t,r)}}function Jr(o){let e,t;return!q.context||!(e=q.registry.get(t=es()))?o.cloneNode(!0):(q.completed&&q.completed.add(e),q.registry.delete(t),e)}function Zr(o){return o.toLowerCase().replace(/-([a-z])/g,(e,t)=>t.toUpperCase())}function _n(o,e,t){const n=e.trim().split(/\s+/);for(let i=0,r=n.length;i<r;i++)o.classList.toggle(n[i],t)}function Fn(o,e,t,n,i,r){let s,c,a;if(e==="style")return Qr(o,t,n);if(e==="classList")return Wr(o,t,n);if(t===n)return n;if(e==="ref")r||t(o);else if(e.slice(0,3)==="on:")o.addEventListener(e.slice(3),t);else if(e.slice(0,10)==="oncapture:")o.addEventListener(e.slice(10),t,!0);else if(e.slice(0,2)==="on"){const l=e.slice(2).toLowerCase(),d=Hr.has(l);Gr(o,l,t,d),d&&wo([l])}else if((a=Pr.has(e))||!i&&(Rn[e]||(c=Dr.has(e)))||(s=o.nodeName.includes("-")))s&&!c&&!a?o[Zr(e)]=t:o[Rn[e]||e]=t;else{const l=i&&e.indexOf(":")>-1&&Vr[e.split(":")[0]];l?Ur(o,l,e,t):qr(o,Lr[e]||e,t)}return t}function Kr(o){const e=`$$${o.type}`;let t=o.composedPath&&o.composedPath()[0]||o.target;for(o.target!==t&&Object.defineProperty(o,"target",{configurable:!0,value:t}),Object.defineProperty(o,"currentTarget",{configurable:!0,get(){return t||document}}),q.registry&&!q.done&&(q.done=!0,document.querySelectorAll("[id^=pl-]").forEach(n=>n.remove()));t!==null;){const n=t[e];if(n&&!t.disabled){const i=t[`${e}Data`];if(i!==void 0?n(i,o):n(o),o.cancelBubble)return}t=t.host&&t.host!==t&&t.host instanceof Node?t.host:t.parentNode}}function En(o,e,t={},n,i){return e||(e={}),!i&&"children"in e&&Ce(()=>t.children=ct(o,e.children,t.children)),e.ref&&e.ref(o),Ce(()=>Yr(o,e,n,!0,t,!0)),t}function ct(o,e,t,n,i){for(q.context&&!t&&(t=[...o.childNodes]);typeof t=="function";)t=t();if(e===t)return t;const r=typeof e,s=n!==void 0;if(o=s&&t[0]&&t[0].parentNode||o,r==="string"||r==="number"){if(q.context)return t;if(r==="number"&&(e=e.toString()),s){let c=t[0];c&&c.nodeType===3?c.data=e:c=document.createTextNode(e),t=Ye(o,t,n,c)}else t!==""&&typeof t=="string"?t=o.firstChild.data=e:t=o.textContent=e}else if(e==null||r==="boolean"){if(q.context)return t;t=Ye(o,t,n)}else{if(r==="function")return Ce(()=>{let c=e();for(;typeof c=="function";)c=c();t=ct(o,c,t,n)}),()=>t;if(Array.isArray(e)){const c=[];if(Jo(c,e,i))return Ce(()=>t=ct(o,c,t,n,!0)),()=>t;if(q.context){for(let a=0;a<c.length;a++)if(c[a].parentNode)return t=c}if(c.length===0){if(t=Ye(o,t,n),s)return t}else Array.isArray(t)?t.length===0?Dn(o,c,n):zr(o,t,c):(t&&Ye(o),Dn(o,c));t=c}else if(e instanceof Node){if(q.context&&e.parentNode)return t=s?[e]:e;if(Array.isArray(t)){if(s)return t=Ye(o,t,n,e);Ye(o,t,null,e)}else t==null||t===""||!o.firstChild?o.appendChild(e):o.replaceChild(e,o.firstChild);t=e}}return t}function Jo(o,e,t){let n=!1;for(let i=0,r=e.length;i<r;i++){let s=e[i],c;if(s instanceof Node)o.push(s);else if(!(s==null||s===!0||s===!1))if(Array.isArray(s))n=Jo(o,s)||n;else if((c=typeof s)=="string")o.push(document.createTextNode(s));else if(c==="function")if(t){for(;typeof s=="function";)s=s();n=Jo(o,Array.isArray(s)?s:[s])||n}else o.push(s),n=!0;else o.push(document.createTextNode(s.toString()))}return n}function Dn(o,e,t){for(let n=0,i=e.length;n<i;n++)o.insertBefore(e[n],t)}function Ye(o,e,t,n){if(t===void 0)return o.textContent="";const i=n||document.createTextNode("");if(e.length){let r=!1;for(let s=e.length-1;s>=0;s--){const c=e[s];if(i!==c){const a=c.parentNode===o;!r&&!s?a?o.replaceChild(i,c):o.insertBefore(i,t):a&&c.remove()}else r=!0}}else o.insertBefore(i,t);return[i]}function es(){const o=q.context;return`${o.id}${o.count++}`}const ts="http://www.w3.org/2000/svg";function os(o,e=!1){return e?document.createElementNS(ts,o):document.createElement(o)}function ns(o){const[e,t]=Fr(o,["component"]);return _t(()=>{const n=e.component;switch(typeof n){case"function":return Ue(()=>n(t));case"string":const i=Nr.has(n),r=q.context?Jr():os(n,i);return Xr(r,t,i),r}})}const Be=function(){if(typeof globalThis<"u")return globalThis;if(typeof global<"u")return global;if(typeof self<"u")return self;if(typeof window<"u")return window;try{return new Function("return this")()}catch{return{}}}();Be.trustedTypes===void 0&&(Be.trustedTypes={createPolicy:(o,e)=>e});const Ai={configurable:!1,enumerable:!1,writable:!1};Be.FAST===void 0&&Reflect.defineProperty(Be,"FAST",Object.assign({value:Object.create(null)},Ai));const Et=Be.FAST;if(Et.getById===void 0){const o=Object.create(null);Reflect.defineProperty(Et,"getById",Object.assign({value(e,t){let n=o[e];return n===void 0&&(n=t?o[e]=t():null),n}},Ai))}const Le=Object.freeze([]),Oo=Be.FAST.getById(1,()=>{const o=[],e=[];function t(){if(e.length)throw e.shift()}function n(s){try{s.call()}catch(c){e.push(c),setTimeout(t,0)}}function i(){let c=0;for(;c<o.length;)if(n(o[c]),c++,c>1024){for(let a=0,l=o.length-c;a<l;a++)o[a]=o[a+c];o.length-=c,c=0}o.length=0}function r(s){o.length<1&&Be.requestAnimationFrame(i),o.push(s)}return Object.freeze({enqueue:r,process:i})}),Ri=Be.trustedTypes.createPolicy("fast-html",{createHTML:o=>o});let _o=Ri;const Bt=`fast-${Math.random().toString(36).substring(2,8)}`,Oi=`${Bt}{`,un=`}${Bt}`,I=Object.freeze({supportsAdoptedStyleSheets:Array.isArray(document.adoptedStyleSheets)&&"replace"in CSSStyleSheet.prototype,setHTMLPolicy(o){if(_o!==Ri)throw new Error("The HTML policy can only be set once.");_o=o},createHTML(o){return _o.createHTML(o)},isMarker(o){return o&&o.nodeType===8&&o.data.startsWith(Bt)},extractDirectiveIndexFromMarker(o){return parseInt(o.data.replace(`${Bt}:`,""))},createInterpolationPlaceholder(o){return`${Oi}${o}${un}`},createCustomAttributePlaceholder(o,e){return`${o}="${this.createInterpolationPlaceholder(e)}"`},createBlockPlaceholder(o){return`<!--${Bt}:${o}-->`},queueUpdate:Oo.enqueue,processUpdates:Oo.process,nextUpdate(){return new Promise(Oo.enqueue)},setAttribute(o,e,t){t==null?o.removeAttribute(e):o.setAttribute(e,t)},setBooleanAttribute(o,e,t){t?o.setAttribute(e,""):o.removeAttribute(e)},removeChildNodes(o){for(let e=o.firstChild;e!==null;e=o.firstChild)o.removeChild(e)},createTemplateWalker(o){return document.createTreeWalker(o,133,null,!1)}});function is(o){const e=this.spillover;e.indexOf(o)===-1&&e.push(o)}function rs(o){const e=this.spillover,t=e.indexOf(o);t!==-1&&e.splice(t,1)}function ss(o){const e=this.spillover,t=this.source;for(let n=0,i=e.length;n<i;++n)e[n].handleChange(t,o)}function cs(o){return this.spillover.indexOf(o)!==-1}class uo{constructor(e,t){this.sub1=void 0,this.sub2=void 0,this.spillover=void 0,this.source=e,this.sub1=t}has(e){return this.sub1===e||this.sub2===e}subscribe(e){if(!this.has(e)){if(this.sub1===void 0){this.sub1=e;return}if(this.sub2===void 0){this.sub2=e;return}this.spillover=[this.sub1,this.sub2,e],this.subscribe=is,this.unsubscribe=rs,this.notify=ss,this.has=cs,this.sub1=void 0,this.sub2=void 0}}unsubscribe(e){this.sub1===e?this.sub1=void 0:this.sub2===e&&(this.sub2=void 0)}notify(e){const t=this.sub1,n=this.sub2,i=this.source;t!==void 0&&t.handleChange(i,e),n!==void 0&&n.handleChange(i,e)}}class _i{constructor(e){this.subscribers={},this.sourceSubscribers=null,this.source=e}notify(e){var t;const n=this.subscribers[e];n!==void 0&&n.notify(e),(t=this.sourceSubscribers)===null||t===void 0||t.notify(e)}subscribe(e,t){var n;if(t){let i=this.subscribers[t];i===void 0&&(this.subscribers[t]=i=new uo(this.source)),i.subscribe(e)}else this.sourceSubscribers=(n=this.sourceSubscribers)!==null&&n!==void 0?n:new uo(this.source),this.sourceSubscribers.subscribe(e)}unsubscribe(e,t){var n;if(t){const i=this.subscribers[t];i!==void 0&&i.unsubscribe(e)}else(n=this.sourceSubscribers)===null||n===void 0||n.unsubscribe(e)}}const S=Et.getById(2,()=>{const o=/(:|&&|\|\||if)/,e=new WeakMap,t=new WeakMap,n=I.queueUpdate;let i,r=d=>{throw new Error("Must call enableArrayObservation before observing arrays.")};function s(d){let u=d.$fastController||e.get(d);return u===void 0&&(Array.isArray(d)?u=r(d):e.set(d,u=new _i(d))),u}function c(d){let u=t.get(d);if(u===void 0){let b=Reflect.getPrototypeOf(d);for(;u===void 0&&b!==null;)u=t.get(b),b=Reflect.getPrototypeOf(b);u===void 0?u=[]:u=u.slice(0),t.set(d,u)}return u}class a{constructor(u){this.name=u,this.field=`_${u}`,this.callback=`${u}Changed`}getValue(u){return i!==void 0&&i.watch(u,this.name),u[this.field]}setValue(u,b){const m=this.field,w=u[m];if(w!==b){u[m]=b;const A=u[this.callback];typeof A=="function"&&A.call(u,w,b),s(u).notify(this.name)}}}class l extends uo{constructor(u,b,m=!1){super(u,b),this.binding=u,this.isVolatileBinding=m,this.needsRefresh=!0,this.needsQueue=!0,this.first=this,this.last=null,this.propertySource=void 0,this.propertyName=void 0,this.notifier=void 0,this.next=void 0}observe(u,b){this.needsRefresh&&this.last!==null&&this.disconnect();const m=i;i=this.needsRefresh?this:void 0,this.needsRefresh=this.isVolatileBinding;const w=this.binding(u,b);return i=m,w}disconnect(){if(this.last!==null){let u=this.first;for(;u!==void 0;)u.notifier.unsubscribe(this,u.propertyName),u=u.next;this.last=null,this.needsRefresh=this.needsQueue=!0}}watch(u,b){const m=this.last,w=s(u),A=m===null?this.first:{};if(A.propertySource=u,A.propertyName=b,A.notifier=w,w.subscribe(this,b),m!==null){if(!this.needsRefresh){let N;i=void 0,N=m.propertySource[m.propertyName],i=this,u===N&&(this.needsRefresh=!0)}m.next=A}this.last=A}handleChange(){this.needsQueue&&(this.needsQueue=!1,n(this))}call(){this.last!==null&&(this.needsQueue=!0,this.notify(this))}records(){let u=this.first;return{next:()=>{const b=u;return b===void 0?{value:void 0,done:!0}:(u=u.next,{value:b,done:!1})},[Symbol.iterator]:function(){return this}}}}return Object.freeze({setArrayObserverFactory(d){r=d},getNotifier:s,track(d,u){i!==void 0&&i.watch(d,u)},trackVolatile(){i!==void 0&&(i.needsRefresh=!0)},notify(d,u){s(d).notify(u)},defineProperty(d,u){typeof u=="string"&&(u=new a(u)),c(d).push(u),Reflect.defineProperty(d,u.name,{enumerable:!0,get:function(){return u.getValue(this)},set:function(b){u.setValue(this,b)}})},getAccessors:c,binding(d,u,b=this.isVolatileBinding(d)){return new l(d,u,b)},isVolatileBinding(d){return o.test(d.toString())}})});function g(o,e){S.defineProperty(o,e)}function as(o,e,t){return Object.assign({},t,{get:function(){return S.trackVolatile(),t.get.apply(this)}})}const Pn=Et.getById(3,()=>{let o=null;return{get(){return o},set(e){o=e}}});class Dt{constructor(){this.index=0,this.length=0,this.parent=null,this.parentContext=null}get event(){return Pn.get()}get isEven(){return this.index%2===0}get isOdd(){return this.index%2!==0}get isFirst(){return this.index===0}get isInMiddle(){return!this.isFirst&&!this.isLast}get isLast(){return this.index===this.length-1}static setEvent(e){Pn.set(e)}}S.defineProperty(Dt.prototype,"index");S.defineProperty(Dt.prototype,"length");const At=Object.seal(new Dt);class ko{constructor(){this.targetIndex=0}}class Fi extends ko{constructor(){super(...arguments),this.createPlaceholder=I.createInterpolationPlaceholder}}class hn extends ko{constructor(e,t,n){super(),this.name=e,this.behavior=t,this.options=n}createPlaceholder(e){return I.createCustomAttributePlaceholder(this.name,e)}createBehavior(e){return new this.behavior(e,this.options)}}function ls(o,e){this.source=o,this.context=e,this.bindingObserver===null&&(this.bindingObserver=S.binding(this.binding,this,this.isBindingVolatile)),this.updateTarget(this.bindingObserver.observe(o,e))}function ds(o,e){this.source=o,this.context=e,this.target.addEventListener(this.targetName,this)}function us(){this.bindingObserver.disconnect(),this.source=null,this.context=null}function hs(){this.bindingObserver.disconnect(),this.source=null,this.context=null;const o=this.target.$fastView;o!==void 0&&o.isComposed&&(o.unbind(),o.needsBindOnly=!0)}function fs(){this.target.removeEventListener(this.targetName,this),this.source=null,this.context=null}function bs(o){I.setAttribute(this.target,this.targetName,o)}function ps(o){I.setBooleanAttribute(this.target,this.targetName,o)}function gs(o){if(o==null&&(o=""),o.create){this.target.textContent="";let e=this.target.$fastView;e===void 0?e=o.create():this.target.$fastTemplate!==o&&(e.isComposed&&(e.remove(),e.unbind()),e=o.create()),e.isComposed?e.needsBindOnly&&(e.needsBindOnly=!1,e.bind(this.source,this.context)):(e.isComposed=!0,e.bind(this.source,this.context),e.insertBefore(this.target),this.target.$fastView=e,this.target.$fastTemplate=o)}else{const e=this.target.$fastView;e!==void 0&&e.isComposed&&(e.isComposed=!1,e.remove(),e.needsBindOnly?e.needsBindOnly=!1:e.unbind()),this.target.textContent=o}}function vs(o){this.target[this.targetName]=o}function ms(o){const e=this.classVersions||Object.create(null),t=this.target;let n=this.version||0;if(o!=null&&o.length){const i=o.split(/\s+/);for(let r=0,s=i.length;r<s;++r){const c=i[r];c!==""&&(e[c]=n,t.classList.add(c))}}if(this.classVersions=e,this.version=n+1,n!==0){n-=1;for(const i in e)e[i]===n&&t.classList.remove(i)}}class fn extends Fi{constructor(e){super(),this.binding=e,this.bind=ls,this.unbind=us,this.updateTarget=bs,this.isBindingVolatile=S.isVolatileBinding(this.binding)}get targetName(){return this.originalTargetName}set targetName(e){if(this.originalTargetName=e,e!==void 0)switch(e[0]){case":":if(this.cleanedTargetName=e.substr(1),this.updateTarget=vs,this.cleanedTargetName==="innerHTML"){const t=this.binding;this.binding=(n,i)=>I.createHTML(t(n,i))}break;case"?":this.cleanedTargetName=e.substr(1),this.updateTarget=ps;break;case"@":this.cleanedTargetName=e.substr(1),this.bind=ds,this.unbind=fs;break;default:this.cleanedTargetName=e,e==="class"&&(this.updateTarget=ms);break}}targetAtContent(){this.updateTarget=gs,this.unbind=hs}createBehavior(e){return new ys(e,this.binding,this.isBindingVolatile,this.bind,this.unbind,this.updateTarget,this.cleanedTargetName)}}class ys{constructor(e,t,n,i,r,s,c){this.source=null,this.context=null,this.bindingObserver=null,this.target=e,this.binding=t,this.isBindingVolatile=n,this.bind=i,this.unbind=r,this.updateTarget=s,this.targetName=c}handleChange(){this.updateTarget(this.bindingObserver.observe(this.source,this.context))}handleEvent(e){Dt.setEvent(e);const t=this.binding(this.source,this.context);Dt.setEvent(null),t!==!0&&e.preventDefault()}}let Fo=null;class bn{addFactory(e){e.targetIndex=this.targetIndex,this.behaviorFactories.push(e)}captureContentBinding(e){e.targetAtContent(),this.addFactory(e)}reset(){this.behaviorFactories=[],this.targetIndex=-1}release(){Fo=this}static borrow(e){const t=Fo||new bn;return t.directives=e,t.reset(),Fo=null,t}}function xs(o){if(o.length===1)return o[0];let e;const t=o.length,n=o.map(s=>typeof s=="string"?()=>s:(e=s.targetName||e,s.binding)),i=(s,c)=>{let a="";for(let l=0;l<t;++l)a+=n[l](s,c);return a},r=new fn(i);return r.targetName=e,r}const ws=un.length;function Ei(o,e){const t=e.split(Oi);if(t.length===1)return null;const n=[];for(let i=0,r=t.length;i<r;++i){const s=t[i],c=s.indexOf(un);let a;if(c===-1)a=s;else{const l=parseInt(s.substring(0,c));n.push(o.directives[l]),a=s.substring(c+ws)}a!==""&&n.push(a)}return n}function Ln(o,e,t=!1){const n=e.attributes;for(let i=0,r=n.length;i<r;++i){const s=n[i],c=s.value,a=Ei(o,c);let l=null;a===null?t&&(l=new fn(()=>c),l.targetName=s.name):l=xs(a),l!==null&&(e.removeAttributeNode(s),i--,r--,o.addFactory(l))}}function ks(o,e,t){const n=Ei(o,e.textContent);if(n!==null){let i=e;for(let r=0,s=n.length;r<s;++r){const c=n[r],a=r===0?e:i.parentNode.insertBefore(document.createTextNode(""),i.nextSibling);typeof c=="string"?a.textContent=c:(a.textContent=" ",o.captureContentBinding(c)),i=a,o.targetIndex++,a!==e&&t.nextNode()}o.targetIndex--}}function $s(o,e){const t=o.content;document.adoptNode(t);const n=bn.borrow(e);Ln(n,o,!0);const i=n.behaviorFactories;n.reset();const r=I.createTemplateWalker(t);let s;for(;s=r.nextNode();)switch(n.targetIndex++,s.nodeType){case 1:Ln(n,s);break;case 3:ks(n,s,r);break;case 8:I.isMarker(s)&&n.addFactory(e[I.extractDirectiveIndexFromMarker(s)])}let c=0;(I.isMarker(t.firstChild)||t.childNodes.length===1&&e.length)&&(t.insertBefore(document.createComment(""),t.firstChild),c=-1);const a=n.behaviorFactories;return n.release(),{fragment:t,viewBehaviorFactories:a,hostBehaviorFactories:i,targetOffset:c}}const Eo=document.createRange();class Di{constructor(e,t){this.fragment=e,this.behaviors=t,this.source=null,this.context=null,this.firstChild=e.firstChild,this.lastChild=e.lastChild}appendTo(e){e.appendChild(this.fragment)}insertBefore(e){if(this.fragment.hasChildNodes())e.parentNode.insertBefore(this.fragment,e);else{const t=e.parentNode,n=this.lastChild;let i=this.firstChild,r;for(;i!==n;)r=i.nextSibling,t.insertBefore(i,e),i=r;t.insertBefore(n,e)}}remove(){const e=this.fragment,t=this.lastChild;let n=this.firstChild,i;for(;n!==t;)i=n.nextSibling,e.appendChild(n),n=i;e.appendChild(t)}dispose(){const e=this.firstChild.parentNode,t=this.lastChild;let n=this.firstChild,i;for(;n!==t;)i=n.nextSibling,e.removeChild(n),n=i;e.removeChild(t);const r=this.behaviors,s=this.source;for(let c=0,a=r.length;c<a;++c)r[c].unbind(s)}bind(e,t){const n=this.behaviors;if(this.source!==e)if(this.source!==null){const i=this.source;this.source=e,this.context=t;for(let r=0,s=n.length;r<s;++r){const c=n[r];c.unbind(i),c.bind(e,t)}}else{this.source=e,this.context=t;for(let i=0,r=n.length;i<r;++i)n[i].bind(e,t)}}unbind(){if(this.source===null)return;const e=this.behaviors,t=this.source;for(let n=0,i=e.length;n<i;++n)e[n].unbind(t);this.source=null}static disposeContiguousBatch(e){if(e.length!==0){Eo.setStartBefore(e[0].firstChild),Eo.setEndAfter(e[e.length-1].lastChild),Eo.deleteContents();for(let t=0,n=e.length;t<n;++t){const i=e[t],r=i.behaviors,s=i.source;for(let c=0,a=r.length;c<a;++c)r[c].unbind(s)}}}}class Hn{constructor(e,t){this.behaviorCount=0,this.hasHostBehaviors=!1,this.fragment=null,this.targetOffset=0,this.viewBehaviorFactories=null,this.hostBehaviorFactories=null,this.html=e,this.directives=t}create(e){if(this.fragment===null){let l;const d=this.html;if(typeof d=="string"){l=document.createElement("template"),l.innerHTML=I.createHTML(d);const b=l.content.firstElementChild;b!==null&&b.tagName==="TEMPLATE"&&(l=b)}else l=d;const u=$s(l,this.directives);this.fragment=u.fragment,this.viewBehaviorFactories=u.viewBehaviorFactories,this.hostBehaviorFactories=u.hostBehaviorFactories,this.targetOffset=u.targetOffset,this.behaviorCount=this.viewBehaviorFactories.length+this.hostBehaviorFactories.length,this.hasHostBehaviors=this.hostBehaviorFactories.length>0}const t=this.fragment.cloneNode(!0),n=this.viewBehaviorFactories,i=new Array(this.behaviorCount),r=I.createTemplateWalker(t);let s=0,c=this.targetOffset,a=r.nextNode();for(let l=n.length;s<l;++s){const d=n[s],u=d.targetIndex;for(;a!==null;)if(c===u){i[s]=d.createBehavior(a);break}else a=r.nextNode(),c++}if(this.hasHostBehaviors){const l=this.hostBehaviorFactories;for(let d=0,u=l.length;d<u;++d,++s)i[s]=l[d].createBehavior(e)}return new Di(t,i)}render(e,t,n){typeof t=="string"&&(t=document.getElementById(t)),n===void 0&&(n=t);const i=this.create(n);return i.bind(e,At),i.appendTo(t),i}}const Cs=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;function B(o,...e){const t=[];let n="";for(let i=0,r=o.length-1;i<r;++i){const s=o[i];let c=e[i];if(n+=s,c instanceof Hn){const a=c;c=()=>a}if(typeof c=="function"&&(c=new fn(c)),c instanceof Fi){const a=Cs.exec(s);a!==null&&(c.targetName=a[2])}c instanceof ko?(n+=c.createPlaceholder(t.length),t.push(c)):n+=c}return n+=o[o.length-1],new Hn(n,t)}class oe{constructor(){this.targets=new WeakSet}addStylesTo(e){this.targets.add(e)}removeStylesFrom(e){this.targets.delete(e)}isAttachedTo(e){return this.targets.has(e)}withBehaviors(...e){return this.behaviors=this.behaviors===null?e:this.behaviors.concat(e),this}}oe.create=(()=>{if(I.supportsAdoptedStyleSheets){const o=new Map;return e=>new Ss(e,o)}return o=>new Bs(o)})();function pn(o){return o.map(e=>e instanceof oe?pn(e.styles):[e]).reduce((e,t)=>e.concat(t),[])}function Pi(o){return o.map(e=>e instanceof oe?e.behaviors:null).reduce((e,t)=>t===null?e:(e===null&&(e=[]),e.concat(t)),null)}class Ss extends oe{constructor(e,t){super(),this.styles=e,this.styleSheetCache=t,this._styleSheets=void 0,this.behaviors=Pi(e)}get styleSheets(){if(this._styleSheets===void 0){const e=this.styles,t=this.styleSheetCache;this._styleSheets=pn(e).map(n=>{if(n instanceof CSSStyleSheet)return n;let i=t.get(n);return i===void 0&&(i=new CSSStyleSheet,i.replaceSync(n),t.set(n,i)),i})}return this._styleSheets}addStylesTo(e){e.adoptedStyleSheets=[...e.adoptedStyleSheets,...this.styleSheets],super.addStylesTo(e)}removeStylesFrom(e){const t=this.styleSheets;e.adoptedStyleSheets=e.adoptedStyleSheets.filter(n=>t.indexOf(n)===-1),super.removeStylesFrom(e)}}let Is=0;function Ts(){return`fast-style-class-${++Is}`}class Bs extends oe{constructor(e){super(),this.styles=e,this.behaviors=null,this.behaviors=Pi(e),this.styleSheets=pn(e),this.styleClass=Ts()}addStylesTo(e){const t=this.styleSheets,n=this.styleClass;e=this.normalizeTarget(e);for(let i=0;i<t.length;i++){const r=document.createElement("style");r.innerHTML=t[i],r.className=n,e.append(r)}super.addStylesTo(e)}removeStylesFrom(e){e=this.normalizeTarget(e);const t=e.querySelectorAll(`.${this.styleClass}`);for(let n=0,i=t.length;n<i;++n)e.removeChild(t[n]);super.removeStylesFrom(e)}isAttachedTo(e){return super.isAttachedTo(this.normalizeTarget(e))}normalizeTarget(e){return e===document?document.body:e}}const Li={toView(o){return o?"true":"false"},fromView(o){return!(o==null||o==="false"||o===!1||o===0)}},be={toView(o){if(o==null)return null;const e=o*1;return isNaN(e)?null:e.toString()},fromView(o){if(o==null)return null;const e=o*1;return isNaN(e)?null:e}};class ho{constructor(e,t,n=t.toLowerCase(),i="reflect",r){this.guards=new Set,this.Owner=e,this.name=t,this.attribute=n,this.mode=i,this.converter=r,this.fieldName=`_${t}`,this.callbackName=`${t}Changed`,this.hasCallback=this.callbackName in e.prototype,i==="boolean"&&r===void 0&&(this.converter=Li)}setValue(e,t){const n=e[this.fieldName],i=this.converter;i!==void 0&&(t=i.fromView(t)),n!==t&&(e[this.fieldName]=t,this.tryReflectToAttribute(e),this.hasCallback&&e[this.callbackName](n,t),e.$fastController.notify(this.name))}getValue(e){return S.track(e,this.name),e[this.fieldName]}onAttributeChangedCallback(e,t){this.guards.has(e)||(this.guards.add(e),this.setValue(e,t),this.guards.delete(e))}tryReflectToAttribute(e){const t=this.mode,n=this.guards;n.has(e)||t==="fromView"||I.queueUpdate(()=>{n.add(e);const i=e[this.fieldName];switch(t){case"reflect":const r=this.converter;I.setAttribute(e,this.attribute,r!==void 0?r.toView(i):i);break;case"boolean":I.setBooleanAttribute(e,this.attribute,i);break}n.delete(e)})}static collect(e,...t){const n=[];t.push(e.attributes);for(let i=0,r=t.length;i<r;++i){const s=t[i];if(s!==void 0)for(let c=0,a=s.length;c<a;++c){const l=s[c];typeof l=="string"?n.push(new ho(e,l)):n.push(new ho(e,l.property,l.attribute,l.mode,l.converter))}}return n}}function f(o,e){let t;function n(i,r){arguments.length>1&&(t.property=r),(i.constructor.attributes||(i.constructor.attributes=[])).push(t)}if(arguments.length>1){t={},n(o,e);return}return t=o===void 0?{}:o,n}const Nn={mode:"open"},Vn={},Zo=Et.getById(4,()=>{const o=new Map;return Object.freeze({register(e){return o.has(e.type)?!1:(o.set(e.type,e),!0)},getByType(e){return o.get(e)}})});class $o{constructor(e,t=e.definition){typeof t=="string"&&(t={name:t}),this.type=e,this.name=t.name,this.template=t.template;const n=ho.collect(e,t.attributes),i=new Array(n.length),r={},s={};for(let c=0,a=n.length;c<a;++c){const l=n[c];i[c]=l.attribute,r[l.name]=l,s[l.attribute]=l}this.attributes=n,this.observedAttributes=i,this.propertyLookup=r,this.attributeLookup=s,this.shadowOptions=t.shadowOptions===void 0?Nn:t.shadowOptions===null?void 0:Object.assign(Object.assign({},Nn),t.shadowOptions),this.elementOptions=t.elementOptions===void 0?Vn:Object.assign(Object.assign({},Vn),t.elementOptions),this.styles=t.styles===void 0?void 0:Array.isArray(t.styles)?oe.create(t.styles):t.styles instanceof oe?t.styles:oe.create([t.styles])}get isDefined(){return!!Zo.getByType(this.type)}define(e=customElements){const t=this.type;if(Zo.register(this)){const n=this.attributes,i=t.prototype;for(let r=0,s=n.length;r<s;++r)S.defineProperty(i,n[r]);Reflect.defineProperty(t,"observedAttributes",{value:this.observedAttributes,enumerable:!0})}return e.get(this.name)||e.define(this.name,t,this.elementOptions),this}}$o.forType=Zo.getByType;const Hi=new WeakMap,As={bubbles:!0,composed:!0,cancelable:!0};function Do(o){return o.shadowRoot||Hi.get(o)||null}class gn extends _i{constructor(e,t){super(e),this.boundObservables=null,this.behaviors=null,this.needsInitialization=!0,this._template=null,this._styles=null,this._isConnected=!1,this.$fastController=this,this.view=null,this.element=e,this.definition=t;const n=t.shadowOptions;if(n!==void 0){const r=e.attachShadow(n);n.mode==="closed"&&Hi.set(e,r)}const i=S.getAccessors(e);if(i.length>0){const r=this.boundObservables=Object.create(null);for(let s=0,c=i.length;s<c;++s){const a=i[s].name,l=e[a];l!==void 0&&(delete e[a],r[a]=l)}}}get isConnected(){return S.track(this,"isConnected"),this._isConnected}setIsConnected(e){this._isConnected=e,S.notify(this,"isConnected")}get template(){return this._template}set template(e){this._template!==e&&(this._template=e,this.needsInitialization||this.renderTemplate(e))}get styles(){return this._styles}set styles(e){this._styles!==e&&(this._styles!==null&&this.removeStyles(this._styles),this._styles=e,!this.needsInitialization&&e!==null&&this.addStyles(e))}addStyles(e){const t=Do(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.append(e);else if(!e.isAttachedTo(t)){const n=e.behaviors;e.addStylesTo(t),n!==null&&this.addBehaviors(n)}}removeStyles(e){const t=Do(this.element)||this.element.getRootNode();if(e instanceof HTMLStyleElement)t.removeChild(e);else if(e.isAttachedTo(t)){const n=e.behaviors;e.removeStylesFrom(t),n!==null&&this.removeBehaviors(n)}}addBehaviors(e){const t=this.behaviors||(this.behaviors=new Map),n=e.length,i=[];for(let r=0;r<n;++r){const s=e[r];t.has(s)?t.set(s,t.get(s)+1):(t.set(s,1),i.push(s))}if(this._isConnected){const r=this.element;for(let s=0;s<i.length;++s)i[s].bind(r,At)}}removeBehaviors(e,t=!1){const n=this.behaviors;if(n===null)return;const i=e.length,r=[];for(let s=0;s<i;++s){const c=e[s];if(n.has(c)){const a=n.get(c)-1;a===0||t?n.delete(c)&&r.push(c):n.set(c,a)}}if(this._isConnected){const s=this.element;for(let c=0;c<r.length;++c)r[c].unbind(s)}}onConnectedCallback(){if(this._isConnected)return;const e=this.element;this.needsInitialization?this.finishInitialization():this.view!==null&&this.view.bind(e,At);const t=this.behaviors;if(t!==null)for(const[n]of t)n.bind(e,At);this.setIsConnected(!0)}onDisconnectedCallback(){if(!this._isConnected)return;this.setIsConnected(!1);const e=this.view;e!==null&&e.unbind();const t=this.behaviors;if(t!==null){const n=this.element;for(const[i]of t)i.unbind(n)}}onAttributeChangedCallback(e,t,n){const i=this.definition.attributeLookup[e];i!==void 0&&i.onAttributeChangedCallback(this.element,n)}emit(e,t,n){return this._isConnected?this.element.dispatchEvent(new CustomEvent(e,Object.assign(Object.assign({detail:t},As),n))):!1}finishInitialization(){const e=this.element,t=this.boundObservables;if(t!==null){const i=Object.keys(t);for(let r=0,s=i.length;r<s;++r){const c=i[r];e[c]=t[c]}this.boundObservables=null}const n=this.definition;this._template===null&&(this.element.resolveTemplate?this._template=this.element.resolveTemplate():n.template&&(this._template=n.template||null)),this._template!==null&&this.renderTemplate(this._template),this._styles===null&&(this.element.resolveStyles?this._styles=this.element.resolveStyles():n.styles&&(this._styles=n.styles||null)),this._styles!==null&&this.addStyles(this._styles),this.needsInitialization=!1}renderTemplate(e){const t=this.element,n=Do(t)||t;this.view!==null?(this.view.dispose(),this.view=null):this.needsInitialization||I.removeChildNodes(n),e&&(this.view=e.render(t,n,t))}static forCustomElement(e){const t=e.$fastController;if(t!==void 0)return t;const n=$o.forType(e.constructor);if(n===void 0)throw new Error("Missing FASTElement definition.");return e.$fastController=new gn(e,n)}}function Mn(o){return class extends o{constructor(){super(),gn.forCustomElement(this)}$emit(e,t,n){return this.$fastController.emit(e,t,n)}connectedCallback(){this.$fastController.onConnectedCallback()}disconnectedCallback(){this.$fastController.onDisconnectedCallback()}attributeChangedCallback(e,t,n){this.$fastController.onAttributeChangedCallback(e,t,n)}}}const Co=Object.assign(Mn(HTMLElement),{from(o){return Mn(o)},define(o,e){return new $o(o,e).define().type}});class Ni{createCSS(){return""}createBehavior(){}}function Rs(o,e){const t=[];let n="";const i=[];for(let r=0,s=o.length-1;r<s;++r){n+=o[r];let c=e[r];if(c instanceof Ni){const a=c.createBehavior();c=c.createCSS(),a&&i.push(a)}c instanceof oe||c instanceof CSSStyleSheet?(n.trim()!==""&&(t.push(n),n=""),t.push(c)):n+=c}return n+=o[o.length-1],n.trim()!==""&&t.push(n),{styles:t,behaviors:i}}function D(o,...e){const{styles:t,behaviors:n}=Rs(o,e),i=oe.create(t);return n.length&&i.withBehaviors(...n),i}function fe(o,e,t){return{index:o,removed:e,addedCount:t}}const Vi=0,Mi=1,Ko=2,en=3;function Os(o,e,t,n,i,r){const s=r-i+1,c=t-e+1,a=new Array(s);let l,d;for(let u=0;u<s;++u)a[u]=new Array(c),a[u][0]=u;for(let u=0;u<c;++u)a[0][u]=u;for(let u=1;u<s;++u)for(let b=1;b<c;++b)o[e+b-1]===n[i+u-1]?a[u][b]=a[u-1][b-1]:(l=a[u-1][b]+1,d=a[u][b-1]+1,a[u][b]=l<d?l:d);return a}function _s(o){let e=o.length-1,t=o[0].length-1,n=o[e][t];const i=[];for(;e>0||t>0;){if(e===0){i.push(Ko),t--;continue}if(t===0){i.push(en),e--;continue}const r=o[e-1][t-1],s=o[e-1][t],c=o[e][t-1];let a;s<c?a=s<r?s:r:a=c<r?c:r,a===r?(r===n?i.push(Vi):(i.push(Mi),n=r),e--,t--):a===s?(i.push(en),e--,n=s):(i.push(Ko),t--,n=c)}return i.reverse(),i}function Fs(o,e,t){for(let n=0;n<t;++n)if(o[n]!==e[n])return n;return t}function Es(o,e,t){let n=o.length,i=e.length,r=0;for(;r<t&&o[--n]===e[--i];)r++;return r}function Ds(o,e,t,n){return e<t||n<o?-1:e===t||n===o?0:o<t?e<n?e-t:n-t:n<e?n-o:e-o}function zi(o,e,t,n,i,r){let s=0,c=0;const a=Math.min(t-e,r-i);if(e===0&&i===0&&(s=Fs(o,n,a)),t===o.length&&r===n.length&&(c=Es(o,n,a-s)),e+=s,i+=s,t-=c,r-=c,t-e===0&&r-i===0)return Le;if(e===t){const w=fe(e,[],0);for(;i<r;)w.removed.push(n[i++]);return[w]}else if(i===r)return[fe(e,[],t-e)];const l=_s(Os(o,e,t,n,i,r)),d=[];let u,b=e,m=i;for(let w=0;w<l.length;++w)switch(l[w]){case Vi:u!==void 0&&(d.push(u),u=void 0),b++,m++;break;case Mi:u===void 0&&(u=fe(b,[],0)),u.addedCount++,b++,u.removed.push(n[m]),m++;break;case Ko:u===void 0&&(u=fe(b,[],0)),u.addedCount++,b++;break;case en:u===void 0&&(u=fe(b,[],0)),u.removed.push(n[m]),m++;break}return u!==void 0&&d.push(u),d}const zn=Array.prototype.push;function Ps(o,e,t,n){const i=fe(e,t,n);let r=!1,s=0;for(let c=0;c<o.length;c++){const a=o[c];if(a.index+=s,r)continue;const l=Ds(i.index,i.index+i.removed.length,a.index,a.index+a.addedCount);if(l>=0){o.splice(c,1),c--,s-=a.addedCount-a.removed.length,i.addedCount+=a.addedCount-l;const d=i.removed.length+a.removed.length-l;if(!i.addedCount&&!d)r=!0;else{let u=a.removed;if(i.index<a.index){const b=i.removed.slice(0,a.index-i.index);zn.apply(b,u),u=b}if(i.index+i.removed.length>a.index+a.addedCount){const b=i.removed.slice(a.index+a.addedCount-i.index);zn.apply(u,b)}i.removed=u,a.index<i.index&&(i.index=a.index)}}else if(i.index<a.index){r=!0,o.splice(c,0,i),c++;const d=i.addedCount-i.removed.length;a.index+=d,s+=d}}r||o.push(i)}function Ls(o){const e=[];for(let t=0,n=o.length;t<n;t++){const i=o[t];Ps(e,i.index,i.removed,i.addedCount)}return e}function Hs(o,e){let t=[];const n=Ls(e);for(let i=0,r=n.length;i<r;++i){const s=n[i];if(s.addedCount===1&&s.removed.length===1){s.removed[0]!==o[s.index]&&t.push(s);continue}t=t.concat(zi(o,s.index,s.index+s.addedCount,s.removed,0,s.removed.length))}return t}let jn=!1;function Po(o,e){let t=o.index;const n=e.length;return t>n?t=n-o.addedCount:t<0&&(t=n+o.removed.length+t-o.addedCount),t<0&&(t=0),o.index=t,o}class Ns extends uo{constructor(e){super(e),this.oldCollection=void 0,this.splices=void 0,this.needsQueue=!0,this.call=this.flush,Reflect.defineProperty(e,"$fastController",{value:this,enumerable:!1})}addSplice(e){this.splices===void 0?this.splices=[e]:this.splices.push(e),this.needsQueue&&(this.needsQueue=!1,I.queueUpdate(this))}reset(e){this.oldCollection=e,this.needsQueue&&(this.needsQueue=!1,I.queueUpdate(this))}flush(){const e=this.splices,t=this.oldCollection;if(e===void 0&&t===void 0)return;this.needsQueue=!0,this.splices=void 0,this.oldCollection=void 0;const n=t===void 0?Hs(this.source,e):zi(this.source,0,this.source.length,t,0,t.length);this.notify(n)}}function Vs(){if(jn)return;jn=!0,S.setArrayObserverFactory(a=>new Ns(a));const o=Array.prototype;if(o.$fastPatch)return;Reflect.defineProperty(o,"$fastPatch",{value:1,enumerable:!1});const e=o.pop,t=o.push,n=o.reverse,i=o.shift,r=o.sort,s=o.splice,c=o.unshift;o.pop=function(){const a=this.length>0,l=e.apply(this,arguments),d=this.$fastController;return d!==void 0&&a&&d.addSplice(fe(this.length,[l],0)),l},o.push=function(){const a=t.apply(this,arguments),l=this.$fastController;return l!==void 0&&l.addSplice(Po(fe(this.length-arguments.length,[],arguments.length),this)),a},o.reverse=function(){let a;const l=this.$fastController;l!==void 0&&(l.flush(),a=this.slice());const d=n.apply(this,arguments);return l!==void 0&&l.reset(a),d},o.shift=function(){const a=this.length>0,l=i.apply(this,arguments),d=this.$fastController;return d!==void 0&&a&&d.addSplice(fe(0,[l],0)),l},o.sort=function(){let a;const l=this.$fastController;l!==void 0&&(l.flush(),a=this.slice());const d=r.apply(this,arguments);return l!==void 0&&l.reset(a),d},o.splice=function(){const a=s.apply(this,arguments),l=this.$fastController;return l!==void 0&&l.addSplice(Po(fe(+arguments[0],a,arguments.length>2?arguments.length-2:0),this)),a},o.unshift=function(){const a=c.apply(this,arguments),l=this.$fastController;return l!==void 0&&l.addSplice(Po(fe(0,[],arguments.length),this)),a}}class Ms{constructor(e,t){this.target=e,this.propertyName=t}bind(e){e[this.propertyName]=this.target}unbind(){}}function K(o){return new hn("fast-ref",Ms,o)}function fo(o,e){const t=typeof e=="function"?e:()=>e;return(n,i)=>o(n,i)?t(n,i):null}Object.freeze({positioning:!1,recycle:!0});function zs(o,e,t,n){o.bind(e[t],n)}function js(o,e,t,n){const i=Object.create(n);i.index=t,i.length=e.length,o.bind(e[t],i)}class qs{constructor(e,t,n,i,r,s){this.location=e,this.itemsBinding=t,this.templateBinding=i,this.options=s,this.source=null,this.views=[],this.items=null,this.itemsObserver=null,this.originalContext=void 0,this.childContext=void 0,this.bindView=zs,this.itemsBindingObserver=S.binding(t,this,n),this.templateBindingObserver=S.binding(i,this,r),s.positioning&&(this.bindView=js)}bind(e,t){this.source=e,this.originalContext=t,this.childContext=Object.create(t),this.childContext.parent=e,this.childContext.parentContext=this.originalContext,this.items=this.itemsBindingObserver.observe(e,this.originalContext),this.template=this.templateBindingObserver.observe(e,this.originalContext),this.observeItems(!0),this.refreshAllViews()}unbind(){this.source=null,this.items=null,this.itemsObserver!==null&&this.itemsObserver.unsubscribe(this),this.unbindAllViews(),this.itemsBindingObserver.disconnect(),this.templateBindingObserver.disconnect()}handleChange(e,t){e===this.itemsBinding?(this.items=this.itemsBindingObserver.observe(this.source,this.originalContext),this.observeItems(),this.refreshAllViews()):e===this.templateBinding?(this.template=this.templateBindingObserver.observe(this.source,this.originalContext),this.refreshAllViews(!0)):this.updateViews(t)}observeItems(e=!1){if(!this.items){this.items=Le;return}const t=this.itemsObserver,n=this.itemsObserver=S.getNotifier(this.items),i=t!==n;i&&t!==null&&t.unsubscribe(this),(i||e)&&n.subscribe(this)}updateViews(e){const t=this.childContext,n=this.views,i=[],r=this.bindView;let s=0;for(let l=0,d=e.length;l<d;++l){const u=e[l],b=u.removed;i.push(...n.splice(u.index+s,b.length)),s-=u.addedCount}const c=this.items,a=this.template;for(let l=0,d=e.length;l<d;++l){const u=e[l];let b=u.index;const m=b+u.addedCount;for(;b<m;++b){const w=n[b],A=w?w.firstChild:this.location,N=this.options.recycle&&i.length>0?i.shift():a.create();n.splice(b,0,N),r(N,c,b,t),N.insertBefore(A)}}for(let l=0,d=i.length;l<d;++l)i[l].dispose();if(this.options.positioning)for(let l=0,d=n.length;l<d;++l){const u=n[l].context;u.length=d,u.index=l}}refreshAllViews(e=!1){const t=this.items,n=this.childContext,i=this.template,r=this.location,s=this.bindView;let c=t.length,a=this.views,l=a.length;if((c===0||e)&&(Di.disposeContiguousBatch(a),l=0),l===0){this.views=a=new Array(c);for(let d=0;d<c;++d){const u=i.create();s(u,t,d,n),a[d]=u,u.insertBefore(r)}}else{let d=0;for(;d<c;++d)if(d<l){const b=a[d];s(b,t,d,n)}else{const b=i.create();s(b,t,d,n),a.push(b),b.insertBefore(r)}const u=a.splice(d,l-d);for(d=0,c=u.length;d<c;++d)u[d].dispose()}}unbindAllViews(){const e=this.views;for(let t=0,n=e.length;t<n;++t)e[t].unbind()}}class ji extends ko{constructor(e,t,n){super(),this.itemsBinding=e,this.templateBinding=t,this.options=n,this.createPlaceholder=I.createBlockPlaceholder,Vs(),this.isItemsBindingVolatile=S.isVolatileBinding(e),this.isTemplateBindingVolatile=S.isVolatileBinding(t)}createBehavior(e){return new qs(e,this.itemsBinding,this.isItemsBindingVolatile,this.templateBinding,this.isTemplateBindingVolatile,this.options)}}function vn(o){return o?function(e,t,n){return e.nodeType===1&&e.matches(o)}:function(e,t,n){return e.nodeType===1}}class qi{constructor(e,t){this.target=e,this.options=t,this.source=null}bind(e){const t=this.options.property;this.shouldUpdate=S.getAccessors(e).some(n=>n.name===t),this.source=e,this.updateTarget(this.computeNodes()),this.shouldUpdate&&this.observe()}unbind(){this.updateTarget(Le),this.source=null,this.shouldUpdate&&this.disconnect()}handleEvent(){this.updateTarget(this.computeNodes())}computeNodes(){let e=this.getNodes();return this.options.filter!==void 0&&(e=e.filter(this.options.filter)),e}updateTarget(e){this.source[this.options.property]=e}}class Us extends qi{constructor(e,t){super(e,t)}observe(){this.target.addEventListener("slotchange",this)}disconnect(){this.target.removeEventListener("slotchange",this)}getNodes(){return this.target.assignedNodes(this.options)}}function le(o){return typeof o=="string"&&(o={property:o}),new hn("fast-slotted",Us,o)}class Gs extends qi{constructor(e,t){super(e,t),this.observer=null,t.childList=!0}observe(){this.observer===null&&(this.observer=new MutationObserver(this.handleEvent.bind(this))),this.observer.observe(this.target,this.options)}disconnect(){this.observer.disconnect()}getNodes(){return"subtree"in this.options?Array.from(this.target.querySelectorAll(this.options.selector)):Array.from(this.target.childNodes)}}function Ui(o){return typeof o=="string"&&(o={property:o}),new hn("fast-children",Gs,o)}class ut{handleStartContentChange(){this.startContainer.classList.toggle("start",this.start.assignedNodes().length>0)}handleEndContentChange(){this.endContainer.classList.toggle("end",this.end.assignedNodes().length>0)}}const ht=(o,e)=>B`
    <span
        part="end"
        ${K("endContainer")}
        class=${t=>e.end?"end":void 0}
    >
        <slot name="end" ${K("end")} @slotchange="${t=>t.handleEndContentChange()}">
            ${e.end||""}
        </slot>
    </span>
`,ft=(o,e)=>B`
    <span
        part="start"
        ${K("startContainer")}
        class="${t=>e.start?"start":void 0}"
    >
        <slot
            name="start"
            ${K("start")}
            @slotchange="${t=>t.handleStartContentChange()}"
        >
            ${e.start||""}
        </slot>
    </span>
`;B`
    <span part="end" ${K("endContainer")}>
        <slot
            name="end"
            ${K("end")}
            @slotchange="${o=>o.handleEndContentChange()}"
        ></slot>
    </span>
`;B`
    <span part="start" ${K("startContainer")}>
        <slot
            name="start"
            ${K("start")}
            @slotchange="${o=>o.handleStartContentChange()}"
        ></slot>
    </span>
`;/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function h(o,e,t,n){var i=arguments.length,r=i<3?e:n===null?n=Object.getOwnPropertyDescriptor(e,t):n,s;if(typeof Reflect=="object"&&typeof Reflect.decorate=="function")r=Reflect.decorate(o,e,t,n);else for(var c=o.length-1;c>=0;c--)(s=o[c])&&(r=(i<3?s(r):i>3?s(e,t,r):s(e,t))||r);return i>3&&r&&Object.defineProperty(e,t,r),r}const Lo=new Map;"metadata"in Reflect||(Reflect.metadata=function(o,e){return function(t){Reflect.defineMetadata(o,e,t)}},Reflect.defineMetadata=function(o,e,t){let n=Lo.get(t);n===void 0&&Lo.set(t,n=new Map),n.set(o,e)},Reflect.getOwnMetadata=function(o,e){const t=Lo.get(e);if(t!==void 0)return t.get(o)});class Ws{constructor(e,t){this.container=e,this.key=t}instance(e){return this.registerResolver(0,e)}singleton(e){return this.registerResolver(1,e)}transient(e){return this.registerResolver(2,e)}callback(e){return this.registerResolver(3,e)}cachedCallback(e){return this.registerResolver(3,Wi(e))}aliasTo(e){return this.registerResolver(5,e)}registerResolver(e,t){const{container:n,key:i}=this;return this.container=this.key=void 0,n.registerResolver(i,new ae(i,e,t))}}function xt(o){const e=o.slice(),t=Object.keys(o),n=t.length;let i;for(let r=0;r<n;++r)i=t[r],Qi(i)||(e[i]=o[i]);return e}const Qs=Object.freeze({none(o){throw Error(`${o.toString()} not registered, did you forget to add @singleton()?`)},singleton(o){return new ae(o,1,o)},transient(o){return new ae(o,2,o)}}),Ho=Object.freeze({default:Object.freeze({parentLocator:()=>null,responsibleForOwnerRequests:!1,defaultResolver:Qs.singleton})}),qn=new Map;function Un(o){return e=>Reflect.getOwnMetadata(o,e)}let Gn=null;const E=Object.freeze({createContainer(o){return new Rt(null,Object.assign({},Ho.default,o))},findResponsibleContainer(o){const e=o.$$container$$;return e&&e.responsibleForOwnerRequests?e:E.findParentContainer(o)},findParentContainer(o){const e=new CustomEvent(Gi,{bubbles:!0,composed:!0,cancelable:!0,detail:{container:void 0}});return o.dispatchEvent(e),e.detail.container||E.getOrCreateDOMContainer()},getOrCreateDOMContainer(o,e){return o?o.$$container$$||new Rt(o,Object.assign({},Ho.default,e,{parentLocator:E.findParentContainer})):Gn||(Gn=new Rt(null,Object.assign({},Ho.default,e,{parentLocator:()=>null})))},getDesignParamtypes:Un("design:paramtypes"),getAnnotationParamtypes:Un("di:paramtypes"),getOrCreateAnnotationParamTypes(o){let e=this.getAnnotationParamtypes(o);return e===void 0&&Reflect.defineMetadata("di:paramtypes",e=[],o),e},getDependencies(o){let e=qn.get(o);if(e===void 0){const t=o.inject;if(t===void 0){const n=E.getDesignParamtypes(o),i=E.getAnnotationParamtypes(o);if(n===void 0)if(i===void 0){const r=Object.getPrototypeOf(o);typeof r=="function"&&r!==Function.prototype?e=xt(E.getDependencies(r)):e=[]}else e=xt(i);else if(i===void 0)e=xt(n);else{e=xt(n);let r=i.length,s;for(let l=0;l<r;++l)s=i[l],s!==void 0&&(e[l]=s);const c=Object.keys(i);r=c.length;let a;for(let l=0;l<r;++l)a=c[l],Qi(a)||(e[a]=i[a])}}else e=xt(t);qn.set(o,e)}return e},defineProperty(o,e,t,n=!1){const i=`$di_${e}`;Reflect.defineProperty(o,e,{get:function(){let r=this[i];if(r===void 0&&(r=(this instanceof HTMLElement?E.findResponsibleContainer(this):E.getOrCreateDOMContainer()).get(t),this[i]=r,n&&this instanceof Co)){const c=this.$fastController,a=()=>{const d=E.findResponsibleContainer(this).get(t),u=this[i];d!==u&&(this[i]=r,c.notify(e))};c.subscribe({handleChange:a},"isConnected")}return r}})},createInterface(o,e){const t=typeof o=="function"?o:e,n=typeof o=="string"?o:o&&"friendlyName"in o&&o.friendlyName||Yn,i=typeof o=="string"?!1:o&&"respectConnection"in o&&o.respectConnection||!1,r=function(s,c,a){if(s==null||new.target!==void 0)throw new Error(`No registration for interface: '${r.friendlyName}'`);if(c)E.defineProperty(s,c,r,i);else{const l=E.getOrCreateAnnotationParamTypes(s);l[a]=r}};return r.$isInterface=!0,r.friendlyName=n??"(anonymous)",t!=null&&(r.register=function(s,c){return t(new Ws(s,c??r))}),r.toString=function(){return`InterfaceSymbol<${r.friendlyName}>`},r},inject(...o){return function(e,t,n){if(typeof n=="number"){const i=E.getOrCreateAnnotationParamTypes(e),r=o[0];r!==void 0&&(i[n]=r)}else if(t)E.defineProperty(e,t,o[0]);else{const i=n?E.getOrCreateAnnotationParamTypes(n.value):E.getOrCreateAnnotationParamTypes(e);let r;for(let s=0;s<o.length;++s)r=o[s],r!==void 0&&(i[s]=r)}}},transient(o){return o.register=function(t){return Pt.transient(o,o).register(t)},o.registerInRequestor=!1,o},singleton(o,e=Ys){return o.register=function(n){return Pt.singleton(o,o).register(n)},o.registerInRequestor=e.scoped,o}}),Xs=E.createInterface("Container");E.inject;const Ys={scoped:!1};class ae{constructor(e,t,n){this.key=e,this.strategy=t,this.state=n,this.resolving=!1}get $isResolver(){return!0}register(e){return e.registerResolver(this.key,this)}resolve(e,t){switch(this.strategy){case 0:return this.state;case 1:{if(this.resolving)throw new Error(`Cyclic dependency found: ${this.state.name}`);return this.resolving=!0,this.state=e.getFactory(this.state).construct(t),this.strategy=0,this.resolving=!1,this.state}case 2:{const n=e.getFactory(this.state);if(n===null)throw new Error(`Resolver for ${String(this.key)} returned a null factory`);return n.construct(t)}case 3:return this.state(e,t,this);case 4:return this.state[0].resolve(e,t);case 5:return t.get(this.state);default:throw new Error(`Invalid resolver strategy specified: ${this.strategy}.`)}}getFactory(e){var t,n,i;switch(this.strategy){case 1:case 2:return e.getFactory(this.state);case 5:return(i=(n=(t=e.getResolver(this.state))===null||t===void 0?void 0:t.getFactory)===null||n===void 0?void 0:n.call(t,e))!==null&&i!==void 0?i:null;default:return null}}}function Wn(o){return this.get(o)}function Js(o,e){return e(o)}class Zs{constructor(e,t){this.Type=e,this.dependencies=t,this.transformers=null}construct(e,t){let n;return t===void 0?n=new this.Type(...this.dependencies.map(Wn,e)):n=new this.Type(...this.dependencies.map(Wn,e),...t),this.transformers==null?n:this.transformers.reduce(Js,n)}registerTransformer(e){(this.transformers||(this.transformers=[])).push(e)}}const Ks={$isResolver:!0,resolve(o,e){return e}};function io(o){return typeof o.register=="function"}function ec(o){return io(o)&&typeof o.registerInRequestor=="boolean"}function Qn(o){return ec(o)&&o.registerInRequestor}function tc(o){return o.prototype!==void 0}const oc=new Set(["Array","ArrayBuffer","Boolean","DataView","Date","Error","EvalError","Float32Array","Float64Array","Function","Int8Array","Int16Array","Int32Array","Map","Number","Object","Promise","RangeError","ReferenceError","RegExp","Set","SharedArrayBuffer","String","SyntaxError","TypeError","Uint8Array","Uint8ClampedArray","Uint16Array","Uint32Array","URIError","WeakMap","WeakSet"]),Gi="__DI_LOCATE_PARENT__",No=new Map;class Rt{constructor(e,t){this.owner=e,this.config=t,this._parent=void 0,this.registerDepth=0,this.context=null,e!==null&&(e.$$container$$=this),this.resolvers=new Map,this.resolvers.set(Xs,Ks),e instanceof Node&&e.addEventListener(Gi,n=>{n.composedPath()[0]!==this.owner&&(n.detail.container=this,n.stopImmediatePropagation())})}get parent(){return this._parent===void 0&&(this._parent=this.config.parentLocator(this.owner)),this._parent}get depth(){return this.parent===null?0:this.parent.depth+1}get responsibleForOwnerRequests(){return this.config.responsibleForOwnerRequests}registerWithContext(e,...t){return this.context=e,this.register(...t),this.context=null,this}register(...e){if(++this.registerDepth===100)throw new Error("Unable to autoregister dependency");let t,n,i,r,s;const c=this.context;for(let a=0,l=e.length;a<l;++a)if(t=e[a],!!Jn(t))if(io(t))t.register(this,c);else if(tc(t))Pt.singleton(t,t).register(this);else for(n=Object.keys(t),r=0,s=n.length;r<s;++r)i=t[n[r]],Jn(i)&&(io(i)?i.register(this,c):this.register(i));return--this.registerDepth,this}registerResolver(e,t){Yt(e);const n=this.resolvers,i=n.get(e);return i==null?n.set(e,t):i instanceof ae&&i.strategy===4?i.state.push(t):n.set(e,new ae(e,4,[i,t])),t}registerTransformer(e,t){const n=this.getResolver(e);if(n==null)return!1;if(n.getFactory){const i=n.getFactory(this);return i==null?!1:(i.registerTransformer(t),!0)}return!1}getResolver(e,t=!0){if(Yt(e),e.resolve!==void 0)return e;let n=this,i;for(;n!=null;)if(i=n.resolvers.get(e),i==null){if(n.parent==null){const r=Qn(e)?this:n;return t?this.jitRegister(e,r):null}n=n.parent}else return i;return null}has(e,t=!1){return this.resolvers.has(e)?!0:t&&this.parent!=null?this.parent.has(e,!0):!1}get(e){if(Yt(e),e.$isResolver)return e.resolve(this,this);let t=this,n;for(;t!=null;)if(n=t.resolvers.get(e),n==null){if(t.parent==null){const i=Qn(e)?this:t;return n=this.jitRegister(e,i),n.resolve(t,this)}t=t.parent}else return n.resolve(t,this);throw new Error(`Unable to resolve key: ${e}`)}getAll(e,t=!1){Yt(e);const n=this;let i=n,r;if(t){let s=Le;for(;i!=null;)r=i.resolvers.get(e),r!=null&&(s=s.concat(Xn(r,i,n))),i=i.parent;return s}else for(;i!=null;)if(r=i.resolvers.get(e),r==null){if(i=i.parent,i==null)return Le}else return Xn(r,i,n);return Le}getFactory(e){let t=No.get(e);if(t===void 0){if(nc(e))throw new Error(`${e.name} is a native function and therefore cannot be safely constructed by DI. If this is intentional, please use a callback or cachedCallback resolver.`);No.set(e,t=new Zs(e,E.getDependencies(e)))}return t}registerFactory(e,t){No.set(e,t)}createChild(e){return new Rt(null,Object.assign({},this.config,e,{parentLocator:()=>this}))}jitRegister(e,t){if(typeof e!="function")throw new Error(`Attempted to jitRegister something that is not a constructor: '${e}'. Did you forget to register this dependency?`);if(oc.has(e.name))throw new Error(`Attempted to jitRegister an intrinsic type: ${e.name}. Did you forget to add @inject(Key)`);if(io(e)){const n=e.register(t);if(!(n instanceof Object)||n.resolve==null){const i=t.resolvers.get(e);if(i!=null)return i;throw new Error("A valid resolver was not returned from the static register method")}return n}else{if(e.$isInterface)throw new Error(`Attempted to jitRegister an interface: ${e.friendlyName}`);{const n=this.config.defaultResolver(e,t);return t.resolvers.set(e,n),n}}}}const Vo=new WeakMap;function Wi(o){return function(e,t,n){if(Vo.has(n))return Vo.get(n);const i=o(e,t,n);return Vo.set(n,i),i}}const Pt=Object.freeze({instance(o,e){return new ae(o,0,e)},singleton(o,e){return new ae(o,1,e)},transient(o,e){return new ae(o,2,e)},callback(o,e){return new ae(o,3,e)},cachedCallback(o,e){return new ae(o,3,Wi(e))},aliasTo(o,e){return new ae(e,5,o)}});function Yt(o){if(o==null)throw new Error("key/value cannot be null or undefined. Are you trying to inject/register something that doesn't exist with DI?")}function Xn(o,e,t){if(o instanceof ae&&o.strategy===4){const n=o.state;let i=n.length;const r=new Array(i);for(;i--;)r[i]=n[i].resolve(e,t);return r}return[o.resolve(e,t)]}const Yn="(anonymous)";function Jn(o){return typeof o=="object"&&o!==null||typeof o=="function"}const nc=function(){const o=new WeakMap;let e=!1,t="",n=0;return function(i){return e=o.get(i),e===void 0&&(t=i.toString(),n=t.length,e=n>=29&&n<=100&&t.charCodeAt(n-1)===125&&t.charCodeAt(n-2)<=32&&t.charCodeAt(n-3)===93&&t.charCodeAt(n-4)===101&&t.charCodeAt(n-5)===100&&t.charCodeAt(n-6)===111&&t.charCodeAt(n-7)===99&&t.charCodeAt(n-8)===32&&t.charCodeAt(n-9)===101&&t.charCodeAt(n-10)===118&&t.charCodeAt(n-11)===105&&t.charCodeAt(n-12)===116&&t.charCodeAt(n-13)===97&&t.charCodeAt(n-14)===110&&t.charCodeAt(n-15)===88,o.set(i,e)),e}}(),Jt={};function Qi(o){switch(typeof o){case"number":return o>=0&&(o|0)===o;case"string":{const e=Jt[o];if(e!==void 0)return e;const t=o.length;if(t===0)return Jt[o]=!1;let n=0;for(let i=0;i<t;++i)if(n=o.charCodeAt(i),i===0&&n===48&&t>1||n<48||n>57)return Jt[o]=!1;return Jt[o]=!0}default:return!1}}function Zn(o){return`${o.toLowerCase()}:presentation`}const Zt=new Map,Xi=Object.freeze({define(o,e,t){const n=Zn(o);Zt.get(n)===void 0?Zt.set(n,e):Zt.set(n,!1),t.register(Pt.instance(n,e))},forTag(o,e){const t=Zn(o),n=Zt.get(t);return n===!1?E.findResponsibleContainer(e).get(t):n||null}});class ic{constructor(e,t){this.template=e||null,this.styles=t===void 0?null:Array.isArray(t)?oe.create(t):t instanceof oe?t:oe.create([t])}applyTo(e){const t=e.$fastController;t.template===null&&(t.template=this.template),t.styles===null&&(t.styles=this.styles)}}class _ extends Co{constructor(){super(...arguments),this._presentation=void 0}get $presentation(){return this._presentation===void 0&&(this._presentation=Xi.forTag(this.tagName,this)),this._presentation}templateChanged(){this.template!==void 0&&(this.$fastController.template=this.template)}stylesChanged(){this.styles!==void 0&&(this.$fastController.styles=this.styles)}connectedCallback(){this.$presentation!==null&&this.$presentation.applyTo(this),super.connectedCallback()}static compose(e){return(t={})=>new rc(this===_?class extends _{}:this,e,t)}}h([g],_.prototype,"template",void 0);h([g],_.prototype,"styles",void 0);function wt(o,e,t){return typeof o=="function"?o(e,t):o}class rc{constructor(e,t,n){this.type=e,this.elementDefinition=t,this.overrideDefinition=n,this.definition=Object.assign(Object.assign({},this.elementDefinition),this.overrideDefinition)}register(e,t){const n=this.definition,i=this.overrideDefinition,s=`${n.prefix||t.elementPrefix}-${n.baseName}`;t.tryDefineElement({name:s,type:this.type,baseClass:this.elementDefinition.baseClass,callback:c=>{const a=new ic(wt(n.template,c,n),wt(n.styles,c,n));c.definePresentation(a);let l=wt(n.shadowOptions,c,n);c.shadowRootMode&&(l?i.shadowOptions||(l.mode=c.shadowRootMode):l!==null&&(l={mode:c.shadowRootMode})),c.defineElement({elementOptions:wt(n.elementOptions,c,n),shadowOptions:l,attributes:wt(n.attributes,c,n)})}})}}function ie(o,...e){e.forEach(t=>{if(Object.getOwnPropertyNames(t.prototype).forEach(n=>{n!=="constructor"&&Object.defineProperty(o.prototype,n,Object.getOwnPropertyDescriptor(t.prototype,n))}),t.attributes){const n=o.attributes||[];o.attributes=n.concat(t.attributes)}})}var Lt;(function(o){o.horizontal="horizontal",o.vertical="vertical"})(Lt||(Lt={}));function sc(o,e){let t=o.length;for(;t--;)if(e(o[t],t,o))return t;return-1}function cc(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}function ac(...o){return o.every(e=>e instanceof HTMLElement)}function lc(){const o=document.querySelector('meta[property="csp-nonce"]');return o?o.getAttribute("content"):null}let Fe;function dc(){if(typeof Fe=="boolean")return Fe;if(!cc())return Fe=!1,Fe;const o=document.createElement("style"),e=lc();e!==null&&o.setAttribute("nonce",e),document.head.appendChild(o);try{o.sheet.insertRule("foo:focus-visible {color:inherit}",0),Fe=!0}catch{Fe=!1}finally{document.head.removeChild(o)}return Fe}const Kn="focus",ei="focusin",at="focusout",lt="keydown";var ti;(function(o){o[o.alt=18]="alt",o[o.arrowDown=40]="arrowDown",o[o.arrowLeft=37]="arrowLeft",o[o.arrowRight=39]="arrowRight",o[o.arrowUp=38]="arrowUp",o[o.back=8]="back",o[o.backSlash=220]="backSlash",o[o.break=19]="break",o[o.capsLock=20]="capsLock",o[o.closeBracket=221]="closeBracket",o[o.colon=186]="colon",o[o.colon2=59]="colon2",o[o.comma=188]="comma",o[o.ctrl=17]="ctrl",o[o.delete=46]="delete",o[o.end=35]="end",o[o.enter=13]="enter",o[o.equals=187]="equals",o[o.equals2=61]="equals2",o[o.equals3=107]="equals3",o[o.escape=27]="escape",o[o.forwardSlash=191]="forwardSlash",o[o.function1=112]="function1",o[o.function10=121]="function10",o[o.function11=122]="function11",o[o.function12=123]="function12",o[o.function2=113]="function2",o[o.function3=114]="function3",o[o.function4=115]="function4",o[o.function5=116]="function5",o[o.function6=117]="function6",o[o.function7=118]="function7",o[o.function8=119]="function8",o[o.function9=120]="function9",o[o.home=36]="home",o[o.insert=45]="insert",o[o.menu=93]="menu",o[o.minus=189]="minus",o[o.minus2=109]="minus2",o[o.numLock=144]="numLock",o[o.numPad0=96]="numPad0",o[o.numPad1=97]="numPad1",o[o.numPad2=98]="numPad2",o[o.numPad3=99]="numPad3",o[o.numPad4=100]="numPad4",o[o.numPad5=101]="numPad5",o[o.numPad6=102]="numPad6",o[o.numPad7=103]="numPad7",o[o.numPad8=104]="numPad8",o[o.numPad9=105]="numPad9",o[o.numPadDivide=111]="numPadDivide",o[o.numPadDot=110]="numPadDot",o[o.numPadMinus=109]="numPadMinus",o[o.numPadMultiply=106]="numPadMultiply",o[o.numPadPlus=107]="numPadPlus",o[o.openBracket=219]="openBracket",o[o.pageDown=34]="pageDown",o[o.pageUp=33]="pageUp",o[o.period=190]="period",o[o.print=44]="print",o[o.quote=222]="quote",o[o.scrollLock=145]="scrollLock",o[o.shift=16]="shift",o[o.space=32]="space",o[o.tab=9]="tab",o[o.tilde=192]="tilde",o[o.windowsLeft=91]="windowsLeft",o[o.windowsOpera=219]="windowsOpera",o[o.windowsRight=92]="windowsRight"})(ti||(ti={}));const bt="ArrowDown",Ht="ArrowLeft",Nt="ArrowRight",pt="ArrowUp",Ut="Enter",So="Escape",gt="Home",vt="End",uc="F2",hc="PageDown",fc="PageUp",Gt=" ",mn="Tab",Yi={ArrowDown:bt,ArrowLeft:Ht,ArrowRight:Nt,ArrowUp:pt};var dt;(function(o){o.ltr="ltr",o.rtl="rtl"})(dt||(dt={}));function bc(o,e,t){return t<o?e:t>e?o:t}function Kt(o,e,t=0){return[e,t]=[e,t].sort((n,i)=>n-i),e<=o&&o<t}let pc=0;function bo(o=""){return`${o}${pc++}`}const gc=(o,e)=>B`
    <a
        class="control"
        part="control"
        download="${t=>t.download}"
        href="${t=>t.href}"
        hreflang="${t=>t.hreflang}"
        ping="${t=>t.ping}"
        referrerpolicy="${t=>t.referrerpolicy}"
        rel="${t=>t.rel}"
        target="${t=>t.target}"
        type="${t=>t.type}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${K("control")}
    >
        ${ft(o,e)}
        <span class="content" part="content">
            <slot ${le("defaultSlottedContent")}></slot>
        </span>
        ${ht(o,e)}
    </a>
`;class F{}h([f({attribute:"aria-atomic"})],F.prototype,"ariaAtomic",void 0);h([f({attribute:"aria-busy"})],F.prototype,"ariaBusy",void 0);h([f({attribute:"aria-controls"})],F.prototype,"ariaControls",void 0);h([f({attribute:"aria-current"})],F.prototype,"ariaCurrent",void 0);h([f({attribute:"aria-describedby"})],F.prototype,"ariaDescribedby",void 0);h([f({attribute:"aria-details"})],F.prototype,"ariaDetails",void 0);h([f({attribute:"aria-disabled"})],F.prototype,"ariaDisabled",void 0);h([f({attribute:"aria-errormessage"})],F.prototype,"ariaErrormessage",void 0);h([f({attribute:"aria-flowto"})],F.prototype,"ariaFlowto",void 0);h([f({attribute:"aria-haspopup"})],F.prototype,"ariaHaspopup",void 0);h([f({attribute:"aria-hidden"})],F.prototype,"ariaHidden",void 0);h([f({attribute:"aria-invalid"})],F.prototype,"ariaInvalid",void 0);h([f({attribute:"aria-keyshortcuts"})],F.prototype,"ariaKeyshortcuts",void 0);h([f({attribute:"aria-label"})],F.prototype,"ariaLabel",void 0);h([f({attribute:"aria-labelledby"})],F.prototype,"ariaLabelledby",void 0);h([f({attribute:"aria-live"})],F.prototype,"ariaLive",void 0);h([f({attribute:"aria-owns"})],F.prototype,"ariaOwns",void 0);h([f({attribute:"aria-relevant"})],F.prototype,"ariaRelevant",void 0);h([f({attribute:"aria-roledescription"})],F.prototype,"ariaRoledescription",void 0);class pe extends _{constructor(){super(...arguments),this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((e=this.$fastController.definition.shadowOptions)===null||e===void 0?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}connectedCallback(){super.connectedCallback(),this.handleUnsupportedDelegatesFocus()}}h([f],pe.prototype,"download",void 0);h([f],pe.prototype,"href",void 0);h([f],pe.prototype,"hreflang",void 0);h([f],pe.prototype,"ping",void 0);h([f],pe.prototype,"referrerpolicy",void 0);h([f],pe.prototype,"rel",void 0);h([f],pe.prototype,"target",void 0);h([f],pe.prototype,"type",void 0);h([g],pe.prototype,"defaultSlottedContent",void 0);class yn{}h([f({attribute:"aria-expanded"})],yn.prototype,"ariaExpanded",void 0);ie(yn,F);ie(pe,ut,yn);const vc=o=>{const e=o.closest("[dir]");return e!==null&&e.dir==="rtl"?dt.rtl:dt.ltr},Ji=(o,e)=>B`
    <template class="${t=>t.circular?"circular":""}">
        <div class="control" part="control" style="${t=>t.generateBadgeStyle()}">
            <slot></slot>
        </div>
    </template>
`;class Wt extends _{constructor(){super(...arguments),this.generateBadgeStyle=()=>{if(!this.fill&&!this.color)return;const e=`background-color: var(--badge-fill-${this.fill});`,t=`color: var(--badge-color-${this.color});`;return this.fill&&!this.color?e:this.color&&!this.fill?t:`${t} ${e}`}}}h([f({attribute:"fill"})],Wt.prototype,"fill",void 0);h([f({attribute:"color"})],Wt.prototype,"color",void 0);h([f({mode:"boolean"})],Wt.prototype,"circular",void 0);const mc=(o,e)=>B`
    <button
        class="control"
        part="control"
        ?autofocus="${t=>t.autofocus}"
        ?disabled="${t=>t.disabled}"
        form="${t=>t.formId}"
        formaction="${t=>t.formaction}"
        formenctype="${t=>t.formenctype}"
        formmethod="${t=>t.formmethod}"
        formnovalidate="${t=>t.formnovalidate}"
        formtarget="${t=>t.formtarget}"
        name="${t=>t.name}"
        type="${t=>t.type}"
        value="${t=>t.value}"
        aria-atomic="${t=>t.ariaAtomic}"
        aria-busy="${t=>t.ariaBusy}"
        aria-controls="${t=>t.ariaControls}"
        aria-current="${t=>t.ariaCurrent}"
        aria-describedby="${t=>t.ariaDescribedby}"
        aria-details="${t=>t.ariaDetails}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-errormessage="${t=>t.ariaErrormessage}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-flowto="${t=>t.ariaFlowto}"
        aria-haspopup="${t=>t.ariaHaspopup}"
        aria-hidden="${t=>t.ariaHidden}"
        aria-invalid="${t=>t.ariaInvalid}"
        aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
        aria-label="${t=>t.ariaLabel}"
        aria-labelledby="${t=>t.ariaLabelledby}"
        aria-live="${t=>t.ariaLive}"
        aria-owns="${t=>t.ariaOwns}"
        aria-pressed="${t=>t.ariaPressed}"
        aria-relevant="${t=>t.ariaRelevant}"
        aria-roledescription="${t=>t.ariaRoledescription}"
        ${K("control")}
    >
        ${ft(o,e)}
        <span class="content" part="content">
            <slot ${le("defaultSlottedContent")}></slot>
        </span>
        ${ht(o,e)}
    </button>
`,oi="form-associated-proxy",ni="ElementInternals",ii=ni in window&&"setFormValue"in window[ni].prototype,ri=new WeakMap;function Qt(o){const e=class extends o{constructor(...t){super(...t),this.dirtyValue=!1,this.disabled=!1,this.proxyEventsToBlock=["change","click"],this.proxyInitialized=!1,this.required=!1,this.initialValue=this.initialValue||"",this.elementInternals||(this.formResetCallback=this.formResetCallback.bind(this))}static get formAssociated(){return ii}get validity(){return this.elementInternals?this.elementInternals.validity:this.proxy.validity}get form(){return this.elementInternals?this.elementInternals.form:this.proxy.form}get validationMessage(){return this.elementInternals?this.elementInternals.validationMessage:this.proxy.validationMessage}get willValidate(){return this.elementInternals?this.elementInternals.willValidate:this.proxy.willValidate}get labels(){if(this.elementInternals)return Object.freeze(Array.from(this.elementInternals.labels));if(this.proxy instanceof HTMLElement&&this.proxy.ownerDocument&&this.id){const t=this.proxy.labels,n=Array.from(this.proxy.getRootNode().querySelectorAll(`[for='${this.id}']`)),i=t?n.concat(Array.from(t)):n;return Object.freeze(i)}else return Le}valueChanged(t,n){this.dirtyValue=!0,this.proxy instanceof HTMLElement&&(this.proxy.value=this.value),this.currentValue=this.value,this.setFormValue(this.value),this.validate()}currentValueChanged(){this.value=this.currentValue}initialValueChanged(t,n){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}disabledChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.disabled=this.disabled),I.queueUpdate(()=>this.classList.toggle("disabled",this.disabled))}nameChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.name=this.name)}requiredChanged(t,n){this.proxy instanceof HTMLElement&&(this.proxy.required=this.required),I.queueUpdate(()=>this.classList.toggle("required",this.required)),this.validate()}get elementInternals(){if(!ii)return null;let t=ri.get(this);return t||(t=this.attachInternals(),ri.set(this,t)),t}connectedCallback(){super.connectedCallback(),this.addEventListener("keypress",this._keypressHandler),this.value||(this.value=this.initialValue,this.dirtyValue=!1),this.elementInternals||(this.attachProxy(),this.form&&this.form.addEventListener("reset",this.formResetCallback))}disconnectedCallback(){this.proxyEventsToBlock.forEach(t=>this.proxy.removeEventListener(t,this.stopPropagation)),!this.elementInternals&&this.form&&this.form.removeEventListener("reset",this.formResetCallback)}checkValidity(){return this.elementInternals?this.elementInternals.checkValidity():this.proxy.checkValidity()}reportValidity(){return this.elementInternals?this.elementInternals.reportValidity():this.proxy.reportValidity()}setValidity(t,n,i){this.elementInternals?this.elementInternals.setValidity(t,n,i):typeof n=="string"&&this.proxy.setCustomValidity(n)}formDisabledCallback(t){this.disabled=t}formResetCallback(){this.value=this.initialValue,this.dirtyValue=!1}attachProxy(){var t;this.proxyInitialized||(this.proxyInitialized=!0,this.proxy.style.display="none",this.proxyEventsToBlock.forEach(n=>this.proxy.addEventListener(n,this.stopPropagation)),this.proxy.disabled=this.disabled,this.proxy.required=this.required,typeof this.name=="string"&&(this.proxy.name=this.name),typeof this.value=="string"&&(this.proxy.value=this.value),this.proxy.setAttribute("slot",oi),this.proxySlot=document.createElement("slot"),this.proxySlot.setAttribute("name",oi)),(t=this.shadowRoot)===null||t===void 0||t.appendChild(this.proxySlot),this.appendChild(this.proxy)}detachProxy(){var t;this.removeChild(this.proxy),(t=this.shadowRoot)===null||t===void 0||t.removeChild(this.proxySlot)}validate(){this.proxy instanceof HTMLElement&&this.setValidity(this.proxy.validity,this.proxy.validationMessage)}setFormValue(t,n){this.elementInternals&&this.elementInternals.setFormValue(t,n||t)}_keypressHandler(t){switch(t.key){case Ut:if(this.form instanceof HTMLFormElement){const n=this.form.querySelector("[type=submit]");n?.click()}break}}stopPropagation(t){t.stopPropagation()}};return f({mode:"boolean"})(e.prototype,"disabled"),f({mode:"fromView",attribute:"value"})(e.prototype,"initialValue"),f({attribute:"current-value"})(e.prototype,"currentValue"),f(e.prototype,"name"),f({mode:"boolean"})(e.prototype,"required"),g(e.prototype,"value"),e}function Zi(o){class e extends Qt(o){}class t extends e{constructor(...i){super(i),this.dirtyChecked=!1,this.checkedAttribute=!1,this.checked=!1,this.dirtyChecked=!1}checkedAttributeChanged(){this.defaultChecked=this.checkedAttribute}defaultCheckedChanged(){this.dirtyChecked||(this.checked=this.defaultChecked,this.dirtyChecked=!1)}checkedChanged(i,r){this.dirtyChecked||(this.dirtyChecked=!0),this.currentChecked=this.checked,this.updateForm(),this.proxy instanceof HTMLInputElement&&(this.proxy.checked=this.checked),i!==void 0&&this.$emit("change"),this.validate()}currentCheckedChanged(i,r){this.checked=this.currentChecked}updateForm(){const i=this.checked?this.value:null;this.setFormValue(i,i)}connectedCallback(){super.connectedCallback(),this.updateForm()}formResetCallback(){super.formResetCallback(),this.checked=!!this.checkedAttribute,this.dirtyChecked=!1}}return f({attribute:"checked",mode:"boolean"})(t.prototype,"checkedAttribute"),f({attribute:"current-checked",converter:Li})(t.prototype,"currentChecked"),g(t.prototype,"defaultChecked"),g(t.prototype,"checked"),t}class yc extends _{}class xc extends Qt(yc){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class ge extends xc{constructor(){super(...arguments),this.handleClick=e=>{var t;this.disabled&&((t=this.defaultSlottedContent)===null||t===void 0?void 0:t.length)<=1&&e.stopPropagation()},this.handleSubmission=()=>{if(!this.form)return;const e=this.proxy.isConnected;e||this.attachProxy(),typeof this.form.requestSubmit=="function"?this.form.requestSubmit(this.proxy):this.proxy.click(),e||this.detachProxy()},this.handleFormReset=()=>{var e;(e=this.form)===null||e===void 0||e.reset()},this.handleUnsupportedDelegatesFocus=()=>{var e;window.ShadowRoot&&!window.ShadowRoot.prototype.hasOwnProperty("delegatesFocus")&&((e=this.$fastController.definition.shadowOptions)===null||e===void 0?void 0:e.delegatesFocus)&&(this.focus=()=>{this.control.focus()})}}formactionChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formAction=this.formaction)}formenctypeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formEnctype=this.formenctype)}formmethodChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formMethod=this.formmethod)}formnovalidateChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formNoValidate=this.formnovalidate)}formtargetChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.formTarget=this.formtarget)}typeChanged(e,t){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type),t==="submit"&&this.addEventListener("click",this.handleSubmission),e==="submit"&&this.removeEventListener("click",this.handleSubmission),t==="reset"&&this.addEventListener("click",this.handleFormReset),e==="reset"&&this.removeEventListener("click",this.handleFormReset)}connectedCallback(){var e;super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.handleUnsupportedDelegatesFocus();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(n=>{n.addEventListener("click",this.handleClick)})}disconnectedCallback(){var e;super.disconnectedCallback();const t=Array.from((e=this.control)===null||e===void 0?void 0:e.children);t&&t.forEach(n=>{n.removeEventListener("click",this.handleClick)})}}h([f({mode:"boolean"})],ge.prototype,"autofocus",void 0);h([f({attribute:"form"})],ge.prototype,"formId",void 0);h([f],ge.prototype,"formaction",void 0);h([f],ge.prototype,"formenctype",void 0);h([f],ge.prototype,"formmethod",void 0);h([f({mode:"boolean"})],ge.prototype,"formnovalidate",void 0);h([f],ge.prototype,"formtarget",void 0);h([f],ge.prototype,"type",void 0);h([g],ge.prototype,"defaultSlottedContent",void 0);class Io{}h([f({attribute:"aria-expanded"})],Io.prototype,"ariaExpanded",void 0);h([f({attribute:"aria-pressed"})],Io.prototype,"ariaPressed",void 0);ie(Io,F);ie(ge,ut,Io);var Ke;(function(o){o.none="none",o.default="default",o.sticky="sticky"})(Ke||(Ke={}));var ve;(function(o){o.default="default",o.columnHeader="columnheader",o.rowHeader="rowheader"})(ve||(ve={}));var He;(function(o){o.default="default",o.header="header",o.stickyHeader="sticky-header"})(He||(He={}));class W extends _{constructor(){super(...arguments),this.rowType=He.default,this.rowData=null,this.columnDefinitions=null,this.isActiveRow=!1,this.cellsRepeatBehavior=null,this.cellsPlaceholder=null,this.focusColumnIndex=0,this.refocusOnLoad=!1,this.updateRowStyle=()=>{this.style.gridTemplateColumns=this.gridTemplateColumns}}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowStyle()}rowTypeChanged(){this.$fastController.isConnected&&this.updateItemTemplate()}rowDataChanged(){if(this.rowData!==null&&this.isActiveRow){this.refocusOnLoad=!0;return}}cellItemTemplateChanged(){this.updateItemTemplate()}headerCellItemTemplateChanged(){this.updateItemTemplate()}connectedCallback(){super.connectedCallback(),this.cellsRepeatBehavior===null&&(this.cellsPlaceholder=document.createComment(""),this.appendChild(this.cellsPlaceholder),this.updateItemTemplate(),this.cellsRepeatBehavior=new ji(e=>e.columnDefinitions,e=>e.activeCellItemTemplate,{positioning:!0}).createBehavior(this.cellsPlaceholder),this.$fastController.addBehaviors([this.cellsRepeatBehavior])),this.addEventListener("cell-focused",this.handleCellFocus),this.addEventListener(at,this.handleFocusout),this.addEventListener(lt,this.handleKeydown),this.updateRowStyle(),this.refocusOnLoad&&(this.refocusOnLoad=!1,this.cellElements.length>this.focusColumnIndex&&this.cellElements[this.focusColumnIndex].focus())}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("cell-focused",this.handleCellFocus),this.removeEventListener(at,this.handleFocusout),this.removeEventListener(lt,this.handleKeydown)}handleFocusout(e){this.contains(e.target)||(this.isActiveRow=!1,this.focusColumnIndex=0)}handleCellFocus(e){this.isActiveRow=!0,this.focusColumnIndex=this.cellElements.indexOf(e.target),this.$emit("row-focused",this)}handleKeydown(e){if(e.defaultPrevented)return;let t=0;switch(e.key){case Ht:t=Math.max(0,this.focusColumnIndex-1),this.cellElements[t].focus(),e.preventDefault();break;case Nt:t=Math.min(this.cellElements.length-1,this.focusColumnIndex+1),this.cellElements[t].focus(),e.preventDefault();break;case gt:e.ctrlKey||(this.cellElements[0].focus(),e.preventDefault());break;case vt:e.ctrlKey||(this.cellElements[this.cellElements.length-1].focus(),e.preventDefault());break}}updateItemTemplate(){this.activeCellItemTemplate=this.rowType===He.default&&this.cellItemTemplate!==void 0?this.cellItemTemplate:this.rowType===He.default&&this.cellItemTemplate===void 0?this.defaultCellItemTemplate:this.headerCellItemTemplate!==void 0?this.headerCellItemTemplate:this.defaultHeaderCellItemTemplate}}h([f({attribute:"grid-template-columns"})],W.prototype,"gridTemplateColumns",void 0);h([f({attribute:"row-type"})],W.prototype,"rowType",void 0);h([g],W.prototype,"rowData",void 0);h([g],W.prototype,"columnDefinitions",void 0);h([g],W.prototype,"cellItemTemplate",void 0);h([g],W.prototype,"headerCellItemTemplate",void 0);h([g],W.prototype,"rowIndex",void 0);h([g],W.prototype,"isActiveRow",void 0);h([g],W.prototype,"activeCellItemTemplate",void 0);h([g],W.prototype,"defaultCellItemTemplate",void 0);h([g],W.prototype,"defaultHeaderCellItemTemplate",void 0);h([g],W.prototype,"cellElements",void 0);function wc(o){const e=o.tagFor(W);return B`
    <${e}
        :rowData="${t=>t}"
        :cellItemTemplate="${(t,n)=>n.parent.cellItemTemplate}"
        :headerCellItemTemplate="${(t,n)=>n.parent.headerCellItemTemplate}"
    ></${e}>
`}const kc=(o,e)=>{const t=wc(o),n=o.tagFor(W);return B`
        <template
            role="grid"
            tabindex="0"
            :rowElementTag="${()=>n}"
            :defaultRowItemTemplate="${t}"
            ${Ui({property:"rowElements",filter:vn("[role=row]")})}
        >
            <slot></slot>
        </template>
    `};class H extends _{constructor(){super(),this.noTabbing=!1,this.generateHeader=Ke.default,this.rowsData=[],this.columnDefinitions=null,this.focusRowIndex=0,this.focusColumnIndex=0,this.rowsPlaceholder=null,this.generatedHeader=null,this.isUpdatingFocus=!1,this.pendingFocusUpdate=!1,this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!0,this.generatedGridTemplateColumns="",this.focusOnCell=(e,t,n)=>{if(this.rowElements.length===0){this.focusRowIndex=0,this.focusColumnIndex=0;return}const i=Math.max(0,Math.min(this.rowElements.length-1,e)),s=this.rowElements[i].querySelectorAll('[role="cell"], [role="gridcell"], [role="columnheader"], [role="rowheader"]'),c=Math.max(0,Math.min(s.length-1,t)),a=s[c];n&&this.scrollHeight!==this.clientHeight&&(i<this.focusRowIndex&&this.scrollTop>0||i>this.focusRowIndex&&this.scrollTop<this.scrollHeight-this.clientHeight)&&a.scrollIntoView({block:"center",inline:"center"}),a.focus()},this.onChildListChange=(e,t)=>{e&&e.length&&(e.forEach(n=>{n.addedNodes.forEach(i=>{i.nodeType===1&&i.getAttribute("role")==="row"&&(i.columnDefinitions=this.columnDefinitions)})}),this.queueRowIndexUpdate())},this.queueRowIndexUpdate=()=>{this.rowindexUpdateQueued||(this.rowindexUpdateQueued=!0,I.queueUpdate(this.updateRowIndexes))},this.updateRowIndexes=()=>{let e=this.gridTemplateColumns;if(e===void 0){if(this.generatedGridTemplateColumns===""&&this.rowElements.length>0){const t=this.rowElements[0];this.generatedGridTemplateColumns=new Array(t.cellElements.length).fill("1fr").join(" ")}e=this.generatedGridTemplateColumns}this.rowElements.forEach((t,n)=>{const i=t;i.rowIndex=n,i.gridTemplateColumns=e,this.columnDefinitionsStale&&(i.columnDefinitions=this.columnDefinitions)}),this.rowindexUpdateQueued=!1,this.columnDefinitionsStale=!1}}static generateTemplateColumns(e){let t="";return e.forEach(n=>{t=`${t}${t===""?"":" "}1fr`}),t}noTabbingChanged(){this.$fastController.isConnected&&(this.noTabbing?this.setAttribute("tabIndex","-1"):this.setAttribute("tabIndex",this.contains(document.activeElement)||this===document.activeElement?"-1":"0"))}generateHeaderChanged(){this.$fastController.isConnected&&this.toggleGeneratedHeader()}gridTemplateColumnsChanged(){this.$fastController.isConnected&&this.updateRowIndexes()}rowsDataChanged(){this.columnDefinitions===null&&this.rowsData.length>0&&(this.columnDefinitions=H.generateColumns(this.rowsData[0])),this.$fastController.isConnected&&this.toggleGeneratedHeader()}columnDefinitionsChanged(){if(this.columnDefinitions===null){this.generatedGridTemplateColumns="";return}this.generatedGridTemplateColumns=H.generateTemplateColumns(this.columnDefinitions),this.$fastController.isConnected&&(this.columnDefinitionsStale=!0,this.queueRowIndexUpdate())}headerCellItemTemplateChanged(){this.$fastController.isConnected&&this.generatedHeader!==null&&(this.generatedHeader.headerCellItemTemplate=this.headerCellItemTemplate)}focusRowIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}focusColumnIndexChanged(){this.$fastController.isConnected&&this.queueFocusUpdate()}connectedCallback(){super.connectedCallback(),this.rowItemTemplate===void 0&&(this.rowItemTemplate=this.defaultRowItemTemplate),this.rowsPlaceholder=document.createComment(""),this.appendChild(this.rowsPlaceholder),this.toggleGeneratedHeader(),this.rowsRepeatBehavior=new ji(e=>e.rowsData,e=>e.rowItemTemplate,{positioning:!0}).createBehavior(this.rowsPlaceholder),this.$fastController.addBehaviors([this.rowsRepeatBehavior]),this.addEventListener("row-focused",this.handleRowFocus),this.addEventListener(Kn,this.handleFocus),this.addEventListener(lt,this.handleKeydown),this.addEventListener(at,this.handleFocusOut),this.observer=new MutationObserver(this.onChildListChange),this.observer.observe(this,{childList:!0}),this.noTabbing&&this.setAttribute("tabindex","-1"),I.queueUpdate(this.queueRowIndexUpdate)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener("row-focused",this.handleRowFocus),this.removeEventListener(Kn,this.handleFocus),this.removeEventListener(lt,this.handleKeydown),this.removeEventListener(at,this.handleFocusOut),this.observer.disconnect(),this.rowsPlaceholder=null,this.generatedHeader=null}handleRowFocus(e){this.isUpdatingFocus=!0;const t=e.target;this.focusRowIndex=this.rowElements.indexOf(t),this.focusColumnIndex=t.focusColumnIndex,this.setAttribute("tabIndex","-1"),this.isUpdatingFocus=!1}handleFocus(e){this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}handleFocusOut(e){(e.relatedTarget===null||!this.contains(e.relatedTarget))&&this.setAttribute("tabIndex",this.noTabbing?"-1":"0")}handleKeydown(e){if(e.defaultPrevented)return;let t;const n=this.rowElements.length-1,i=this.offsetHeight+this.scrollTop,r=this.rowElements[n];switch(e.key){case pt:e.preventDefault(),this.focusOnCell(this.focusRowIndex-1,this.focusColumnIndex,!0);break;case bt:e.preventDefault(),this.focusOnCell(this.focusRowIndex+1,this.focusColumnIndex,!0);break;case fc:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex===0){this.focusOnCell(0,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex-1,t;t>=0;t--){const s=this.rowElements[t];if(s.offsetTop<this.scrollTop){this.scrollTop=s.offsetTop+s.clientHeight-this.clientHeight;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case hc:if(e.preventDefault(),this.rowElements.length===0){this.focusOnCell(0,0,!1);break}if(this.focusRowIndex>=n||r.offsetTop+r.offsetHeight<=i){this.focusOnCell(n,this.focusColumnIndex,!1);return}for(t=this.focusRowIndex+1,t;t<=n;t++){const s=this.rowElements[t];if(s.offsetTop+s.offsetHeight>i){let c=0;this.generateHeader===Ke.sticky&&this.generatedHeader!==null&&(c=this.generatedHeader.clientHeight),this.scrollTop=s.offsetTop-c;break}}this.focusOnCell(t,this.focusColumnIndex,!1);break;case gt:e.ctrlKey&&(e.preventDefault(),this.focusOnCell(0,0,!0));break;case vt:e.ctrlKey&&this.columnDefinitions!==null&&(e.preventDefault(),this.focusOnCell(this.rowElements.length-1,this.columnDefinitions.length-1,!0));break}}queueFocusUpdate(){this.isUpdatingFocus&&(this.contains(document.activeElement)||this===document.activeElement)||this.pendingFocusUpdate===!1&&(this.pendingFocusUpdate=!0,I.queueUpdate(()=>this.updateFocus()))}updateFocus(){this.pendingFocusUpdate=!1,this.focusOnCell(this.focusRowIndex,this.focusColumnIndex,!0)}toggleGeneratedHeader(){if(this.generatedHeader!==null&&(this.removeChild(this.generatedHeader),this.generatedHeader=null),this.generateHeader!==Ke.none&&this.rowsData.length>0){const e=document.createElement(this.rowElementTag);this.generatedHeader=e,this.generatedHeader.columnDefinitions=this.columnDefinitions,this.generatedHeader.gridTemplateColumns=this.gridTemplateColumns,this.generatedHeader.rowType=this.generateHeader===Ke.sticky?He.stickyHeader:He.header,(this.firstChild!==null||this.rowsPlaceholder!==null)&&this.insertBefore(e,this.firstChild!==null?this.firstChild:this.rowsPlaceholder);return}}}H.generateColumns=o=>Object.getOwnPropertyNames(o).map((e,t)=>({columnDataKey:e,gridColumn:`${t}`}));h([f({attribute:"no-tabbing",mode:"boolean"})],H.prototype,"noTabbing",void 0);h([f({attribute:"generate-header"})],H.prototype,"generateHeader",void 0);h([f({attribute:"grid-template-columns"})],H.prototype,"gridTemplateColumns",void 0);h([g],H.prototype,"rowsData",void 0);h([g],H.prototype,"columnDefinitions",void 0);h([g],H.prototype,"rowItemTemplate",void 0);h([g],H.prototype,"cellItemTemplate",void 0);h([g],H.prototype,"headerCellItemTemplate",void 0);h([g],H.prototype,"focusRowIndex",void 0);h([g],H.prototype,"focusColumnIndex",void 0);h([g],H.prototype,"defaultRowItemTemplate",void 0);h([g],H.prototype,"rowElementTag",void 0);h([g],H.prototype,"rowElements",void 0);const $c=B`
    <template>
        ${o=>o.rowData===null||o.columnDefinition===null||o.columnDefinition.columnDataKey===null?null:o.rowData[o.columnDefinition.columnDataKey]}
    </template>
`,Cc=B`
    <template>
        ${o=>o.columnDefinition===null?null:o.columnDefinition.title===void 0?o.columnDefinition.columnDataKey:o.columnDefinition.title}
    </template>
`;class Re extends _{constructor(){super(...arguments),this.cellType=ve.default,this.rowData=null,this.columnDefinition=null,this.isActiveCell=!1,this.customCellView=null,this.updateCellStyle=()=>{this.style.gridColumn=this.gridColumn}}cellTypeChanged(){this.$fastController.isConnected&&this.updateCellView()}gridColumnChanged(){this.$fastController.isConnected&&this.updateCellStyle()}columnDefinitionChanged(e,t){this.$fastController.isConnected&&this.updateCellView()}connectedCallback(){var e;super.connectedCallback(),this.addEventListener(ei,this.handleFocusin),this.addEventListener(at,this.handleFocusout),this.addEventListener(lt,this.handleKeydown),this.style.gridColumn=`${((e=this.columnDefinition)===null||e===void 0?void 0:e.gridColumn)===void 0?0:this.columnDefinition.gridColumn}`,this.updateCellView(),this.updateCellStyle()}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(ei,this.handleFocusin),this.removeEventListener(at,this.handleFocusout),this.removeEventListener(lt,this.handleKeydown),this.disconnectCellView()}handleFocusin(e){if(!this.isActiveCell){switch(this.isActiveCell=!0,this.cellType){case ve.columnHeader:if(this.columnDefinition!==null&&this.columnDefinition.headerCellInternalFocusQueue!==!0&&typeof this.columnDefinition.headerCellFocusTargetCallback=="function"){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus()}break;default:if(this.columnDefinition!==null&&this.columnDefinition.cellInternalFocusQueue!==!0&&typeof this.columnDefinition.cellFocusTargetCallback=="function"){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus()}break}this.$emit("cell-focused",this)}}handleFocusout(e){this!==document.activeElement&&!this.contains(document.activeElement)&&(this.isActiveCell=!1)}handleKeydown(e){if(!(e.defaultPrevented||this.columnDefinition===null||this.cellType===ve.default&&this.columnDefinition.cellInternalFocusQueue!==!0||this.cellType===ve.columnHeader&&this.columnDefinition.headerCellInternalFocusQueue!==!0))switch(e.key){case Ut:case uc:if(this.contains(document.activeElement)&&document.activeElement!==this)return;switch(this.cellType){case ve.columnHeader:if(this.columnDefinition.headerCellFocusTargetCallback!==void 0){const t=this.columnDefinition.headerCellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break;default:if(this.columnDefinition.cellFocusTargetCallback!==void 0){const t=this.columnDefinition.cellFocusTargetCallback(this);t!==null&&t.focus(),e.preventDefault()}break}break;case So:this.contains(document.activeElement)&&document.activeElement!==this&&(this.focus(),e.preventDefault());break}}updateCellView(){if(this.disconnectCellView(),this.columnDefinition!==null)switch(this.cellType){case ve.columnHeader:this.columnDefinition.headerCellTemplate!==void 0?this.customCellView=this.columnDefinition.headerCellTemplate.render(this,this):this.customCellView=Cc.render(this,this);break;case void 0:case ve.rowHeader:case ve.default:this.columnDefinition.cellTemplate!==void 0?this.customCellView=this.columnDefinition.cellTemplate.render(this,this):this.customCellView=$c.render(this,this);break}}disconnectCellView(){this.customCellView!==null&&(this.customCellView.dispose(),this.customCellView=null)}}h([f({attribute:"cell-type"})],Re.prototype,"cellType",void 0);h([f({attribute:"grid-column"})],Re.prototype,"gridColumn",void 0);h([g],Re.prototype,"rowData",void 0);h([g],Re.prototype,"columnDefinition",void 0);function Sc(o){const e=o.tagFor(Re);return B`
    <${e}
        cell-type="${t=>t.isRowHeader?"rowheader":void 0}"
        grid-column="${(t,n)=>n.index+1}"
        :rowData="${(t,n)=>n.parent.rowData}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}function Ic(o){const e=o.tagFor(Re);return B`
    <${e}
        cell-type="columnheader"
        grid-column="${(t,n)=>n.index+1}"
        :columnDefinition="${t=>t}"
    ></${e}>
`}const Tc=(o,e)=>{const t=Sc(o),n=Ic(o);return B`
        <template
            role="row"
            class="${i=>i.rowType!=="default"?i.rowType:""}"
            :defaultCellItemTemplate="${t}"
            :defaultHeaderCellItemTemplate="${n}"
            ${Ui({property:"cellElements",filter:vn('[role="cell"],[role="gridcell"],[role="columnheader"],[role="rowheader"]')})}
        >
            <slot ${le("slottedCellElements")}></slot>
        </template>
    `},Bc=(o,e)=>B`
        <template
            tabindex="-1"
            role="${t=>!t.cellType||t.cellType==="default"?"gridcell":t.cellType}"
            class="
            ${t=>t.cellType==="columnheader"?"column-header":t.cellType==="rowheader"?"row-header":""}
            "
        >
            <slot></slot>
        </template>
    `,Ac=(o,e)=>B`
    <template
        role="checkbox"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        tabindex="${t=>t.disabled?null:0}"
        @keypress="${(t,n)=>t.keypressHandler(n.event)}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        class="${t=>t.readOnly?"readonly":""} ${t=>t.checked?"checked":""} ${t=>t.indeterminate?"indeterminate":""}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
            <slot name="indeterminate-indicator">
                ${e.indeterminateIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${le("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Rc extends _{}class Oc extends Zi(Rc){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class To extends Oc{constructor(){super(),this.initialValue="on",this.indeterminate=!1,this.keypressHandler=e=>{switch(e.key){case Gt:this.checked=!this.checked;break}},this.clickHandler=e=>{!this.disabled&&!this.readOnly&&(this.checked=!this.checked)},this.proxy.setAttribute("type","checkbox")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}}h([f({attribute:"readonly",mode:"boolean"})],To.prototype,"readOnly",void 0);h([g],To.prototype,"defaultSlottedNodes",void 0);h([g],To.prototype,"indeterminate",void 0);function Ki(o){return ac(o)&&(o.getAttribute("role")==="option"||o instanceof HTMLOptionElement)}class Se extends _{constructor(e,t,n,i){super(),this.defaultSelected=!1,this.dirtySelected=!1,this.selected=this.defaultSelected,this.dirtyValue=!1,e&&(this.textContent=e),t&&(this.initialValue=t),n&&(this.defaultSelected=n),i&&(this.selected=i),this.proxy=new Option(`${this.textContent}`,this.initialValue,this.defaultSelected,this.selected),this.proxy.disabled=this.disabled}checkedChanged(e,t){if(typeof t=="boolean"){this.ariaChecked=t?"true":"false";return}this.ariaChecked=null}contentChanged(e,t){this.proxy instanceof HTMLOptionElement&&(this.proxy.textContent=this.textContent),this.$emit("contentchange",null,{bubbles:!0})}defaultSelectedChanged(){this.dirtySelected||(this.selected=this.defaultSelected,this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.defaultSelected))}disabledChanged(e,t){this.ariaDisabled=this.disabled?"true":"false",this.proxy instanceof HTMLOptionElement&&(this.proxy.disabled=this.disabled)}selectedAttributeChanged(){this.defaultSelected=this.selectedAttribute,this.proxy instanceof HTMLOptionElement&&(this.proxy.defaultSelected=this.defaultSelected)}selectedChanged(){this.ariaSelected=this.selected?"true":"false",this.dirtySelected||(this.dirtySelected=!0),this.proxy instanceof HTMLOptionElement&&(this.proxy.selected=this.selected)}initialValueChanged(e,t){this.dirtyValue||(this.value=this.initialValue,this.dirtyValue=!1)}get label(){var e;return(e=this.value)!==null&&e!==void 0?e:this.text}get text(){var e,t;return(t=(e=this.textContent)===null||e===void 0?void 0:e.replace(/\s+/g," ").trim())!==null&&t!==void 0?t:""}set value(e){const t=`${e??""}`;this._value=t,this.dirtyValue=!0,this.proxy instanceof HTMLOptionElement&&(this.proxy.value=t),S.notify(this,"value")}get value(){var e;return S.track(this,"value"),(e=this._value)!==null&&e!==void 0?e:this.text}get form(){return this.proxy?this.proxy.form:null}}h([g],Se.prototype,"checked",void 0);h([g],Se.prototype,"content",void 0);h([g],Se.prototype,"defaultSelected",void 0);h([f({mode:"boolean"})],Se.prototype,"disabled",void 0);h([f({attribute:"selected",mode:"boolean"})],Se.prototype,"selectedAttribute",void 0);h([g],Se.prototype,"selected",void 0);h([f({attribute:"value",mode:"fromView"})],Se.prototype,"initialValue",void 0);class mt{}h([g],mt.prototype,"ariaChecked",void 0);h([g],mt.prototype,"ariaPosInSet",void 0);h([g],mt.prototype,"ariaSelected",void 0);h([g],mt.prototype,"ariaSetSize",void 0);ie(mt,F);ie(Se,ut,mt);class Z extends _{constructor(){super(...arguments),this._options=[],this.selectedIndex=-1,this.selectedOptions=[],this.shouldSkipFocus=!1,this.typeaheadBuffer="",this.typeaheadExpired=!0,this.typeaheadTimeout=-1}get firstSelectedOption(){var e;return(e=this.selectedOptions[0])!==null&&e!==void 0?e:null}get hasSelectableOptions(){return this.options.length>0&&!this.options.every(e=>e.disabled)}get length(){var e,t;return(t=(e=this.options)===null||e===void 0?void 0:e.length)!==null&&t!==void 0?t:0}get options(){return S.track(this,"options"),this._options}set options(e){this._options=e,S.notify(this,"options")}get typeAheadExpired(){return this.typeaheadExpired}set typeAheadExpired(e){this.typeaheadExpired=e}clickHandler(e){const t=e.target.closest("option,[role=option]");if(t&&!t.disabled)return this.selectedIndex=this.options.indexOf(t),!0}focusAndScrollOptionIntoView(e=this.firstSelectedOption){this.contains(document.activeElement)&&e!==null&&(e.focus(),requestAnimationFrame(()=>{e.scrollIntoView({block:"nearest"})}))}focusinHandler(e){!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}getTypeaheadMatches(){const e=this.typeaheadBuffer.replace(/[.*+\-?^${}()|[\]\\]/g,"\\$&"),t=new RegExp(`^${e}`,"gi");return this.options.filter(n=>n.text.trim().match(t))}getSelectableIndex(e=this.selectedIndex,t){const n=e>t?-1:e<t?1:0,i=e+n;let r=null;switch(n){case-1:{r=this.options.reduceRight((s,c,a)=>!s&&!c.disabled&&a<i?c:s,r);break}case 1:{r=this.options.reduce((s,c,a)=>!s&&!c.disabled&&a>i?c:s,r);break}}return this.options.indexOf(r)}handleChange(e,t){switch(t){case"selected":{Z.slottedOptionFilter(e)&&(this.selectedIndex=this.options.indexOf(e)),this.setSelectedOptions();break}}}handleTypeAhead(e){this.typeaheadTimeout&&window.clearTimeout(this.typeaheadTimeout),this.typeaheadTimeout=window.setTimeout(()=>this.typeaheadExpired=!0,Z.TYPE_AHEAD_TIMEOUT_MS),!(e.length>1)&&(this.typeaheadBuffer=`${this.typeaheadExpired?"":this.typeaheadBuffer}${e}`)}keydownHandler(e){if(this.disabled)return!0;this.shouldSkipFocus=!1;const t=e.key;switch(t){case gt:{e.shiftKey||(e.preventDefault(),this.selectFirstOption());break}case bt:{e.shiftKey||(e.preventDefault(),this.selectNextOption());break}case pt:{e.shiftKey||(e.preventDefault(),this.selectPreviousOption());break}case vt:{e.preventDefault(),this.selectLastOption();break}case mn:return this.focusAndScrollOptionIntoView(),!0;case Ut:case So:return!0;case Gt:if(this.typeaheadExpired)return!0;default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){return this.shouldSkipFocus=!this.contains(document.activeElement),!0}multipleChanged(e,t){this.ariaMultiSelectable=t?"true":null}selectedIndexChanged(e,t){var n;if(!this.hasSelectableOptions){this.selectedIndex=-1;return}if(((n=this.options[this.selectedIndex])===null||n===void 0?void 0:n.disabled)&&typeof e=="number"){const i=this.getSelectableIndex(e,t),r=i>-1?i:e;this.selectedIndex=r,t===r&&this.selectedIndexChanged(t,r);return}this.setSelectedOptions()}selectedOptionsChanged(e,t){var n;const i=t.filter(Z.slottedOptionFilter);(n=this.options)===null||n===void 0||n.forEach(r=>{const s=S.getNotifier(r);s.unsubscribe(this,"selected"),r.selected=i.includes(r),s.subscribe(this,"selected")})}selectFirstOption(){var e,t;this.disabled||(this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(n=>!n.disabled))!==null&&t!==void 0?t:-1)}selectLastOption(){this.disabled||(this.selectedIndex=sc(this.options,e=>!e.disabled))}selectNextOption(){!this.disabled&&this.selectedIndex<this.options.length-1&&(this.selectedIndex+=1)}selectPreviousOption(){!this.disabled&&this.selectedIndex>0&&(this.selectedIndex=this.selectedIndex-1)}setDefaultSelectedOption(){var e,t;this.selectedIndex=(t=(e=this.options)===null||e===void 0?void 0:e.findIndex(n=>n.defaultSelected))!==null&&t!==void 0?t:-1}setSelectedOptions(){var e,t,n;!((e=this.options)===null||e===void 0)&&e.length&&(this.selectedOptions=[this.options[this.selectedIndex]],this.ariaActiveDescendant=(n=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.id)!==null&&n!==void 0?n:"",this.focusAndScrollOptionIntoView())}slottedOptionsChanged(e,t){this.options=t.reduce((i,r)=>(Ki(r)&&i.push(r),i),[]);const n=`${this.options.length}`;this.options.forEach((i,r)=>{i.id||(i.id=bo("option-")),i.ariaPosInSet=`${r+1}`,i.ariaSetSize=n}),this.$fastController.isConnected&&(this.setSelectedOptions(),this.setDefaultSelectedOption())}typeaheadBufferChanged(e,t){if(this.$fastController.isConnected){const n=this.getTypeaheadMatches();if(n.length){const i=this.options.indexOf(n[0]);i>-1&&(this.selectedIndex=i)}this.typeaheadExpired=!1}}}Z.slottedOptionFilter=o=>Ki(o)&&!o.hidden;Z.TYPE_AHEAD_TIMEOUT_MS=1e3;h([f({mode:"boolean"})],Z.prototype,"disabled",void 0);h([g],Z.prototype,"selectedIndex",void 0);h([g],Z.prototype,"selectedOptions",void 0);h([g],Z.prototype,"slottedOptions",void 0);h([g],Z.prototype,"typeaheadBuffer",void 0);class Ge{}h([g],Ge.prototype,"ariaActiveDescendant",void 0);h([g],Ge.prototype,"ariaDisabled",void 0);h([g],Ge.prototype,"ariaExpanded",void 0);h([g],Ge.prototype,"ariaMultiSelectable",void 0);ie(Ge,F);ie(Z,Ge);var et;(function(o){o.above="above",o.below="below"})(et||(et={}));function tn(o){const e=o.parentElement;if(e)return e;{const t=o.getRootNode();if(t.host instanceof HTMLElement)return t.host}return null}function _c(o,e){let t=e;for(;t!==null;){if(t===o)return!0;t=tn(t)}return!1}const we=document.createElement("div");function Fc(o){return o instanceof Co}class xn{setProperty(e,t){I.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){I.queueUpdate(()=>this.target.removeProperty(e))}}class Ec extends xn{constructor(e){super();const t=new CSSStyleSheet;this.target=t.cssRules[t.insertRule(":host{}")].style,e.$fastController.addStyles(oe.create([t]))}}class Dc extends xn{constructor(){super();const e=new CSSStyleSheet;this.target=e.cssRules[e.insertRule(":root{}")].style,document.adoptedStyleSheets=[...document.adoptedStyleSheets,e]}}class Pc extends xn{constructor(){super(),this.style=document.createElement("style"),document.head.appendChild(this.style);const{sheet:e}=this.style;if(e){const t=e.insertRule(":root{}",e.cssRules.length);this.target=e.cssRules[t].style}}}class er{constructor(e){this.store=new Map,this.target=null;const t=e.$fastController;this.style=document.createElement("style"),t.addStyles(this.style),S.getNotifier(t).subscribe(this,"isConnected"),this.handleChange(t,"isConnected")}targetChanged(){if(this.target!==null)for(const[e,t]of this.store.entries())this.target.setProperty(e,t)}setProperty(e,t){this.store.set(e,t),I.queueUpdate(()=>{this.target!==null&&this.target.setProperty(e,t)})}removeProperty(e){this.store.delete(e),I.queueUpdate(()=>{this.target!==null&&this.target.removeProperty(e)})}handleChange(e,t){const{sheet:n}=this.style;if(n){const i=n.insertRule(":host{}",n.cssRules.length);this.target=n.cssRules[i].style}else this.target=null}}h([g],er.prototype,"target",void 0);class Lc{constructor(e){this.target=e.style}setProperty(e,t){I.queueUpdate(()=>this.target.setProperty(e,t))}removeProperty(e){I.queueUpdate(()=>this.target.removeProperty(e))}}class V{setProperty(e,t){V.properties[e]=t;for(const n of V.roots.values())tt.getOrCreate(V.normalizeRoot(n)).setProperty(e,t)}removeProperty(e){delete V.properties[e];for(const t of V.roots.values())tt.getOrCreate(V.normalizeRoot(t)).removeProperty(e)}static registerRoot(e){const{roots:t}=V;if(!t.has(e)){t.add(e);const n=tt.getOrCreate(this.normalizeRoot(e));for(const i in V.properties)n.setProperty(i,V.properties[i])}}static unregisterRoot(e){const{roots:t}=V;if(t.has(e)){t.delete(e);const n=tt.getOrCreate(V.normalizeRoot(e));for(const i in V.properties)n.removeProperty(i)}}static normalizeRoot(e){return e===we?document:e}}V.roots=new Set;V.properties={};const Mo=new WeakMap,Hc=I.supportsAdoptedStyleSheets?Ec:er,tt=Object.freeze({getOrCreate(o){if(Mo.has(o))return Mo.get(o);let e;return o===we?e=new V:o instanceof Document?e=I.supportsAdoptedStyleSheets?new Dc:new Pc:Fc(o)?e=new Hc(o):e=new Lc(o),Mo.set(o,e),e}});class Y extends Ni{constructor(e){super(),this.subscribers=new WeakMap,this._appliedTo=new Set,this.name=e.name,e.cssCustomPropertyName!==null&&(this.cssCustomProperty=`--${e.cssCustomPropertyName}`,this.cssVar=`var(${this.cssCustomProperty})`),this.id=Y.uniqueId(),Y.tokensById.set(this.id,this)}get appliedTo(){return[...this._appliedTo]}static from(e){return new Y({name:typeof e=="string"?e:e.name,cssCustomPropertyName:typeof e=="string"?e:e.cssCustomPropertyName===void 0?e.name:e.cssCustomPropertyName})}static isCSSDesignToken(e){return typeof e.cssCustomProperty=="string"}static isDerivedDesignTokenValue(e){return typeof e=="function"}static getTokenById(e){return Y.tokensById.get(e)}getOrCreateSubscriberSet(e=this){return this.subscribers.get(e)||this.subscribers.set(e,new Set)&&this.subscribers.get(e)}createCSS(){return this.cssVar||""}getValueFor(e){const t=P.getOrCreate(e).get(this);if(t!==void 0)return t;throw new Error(`Value could not be retrieved for token named "${this.name}". Ensure the value is set for ${e} or an ancestor of ${e}.`)}setValueFor(e,t){return this._appliedTo.add(e),t instanceof Y&&(t=this.alias(t)),P.getOrCreate(e).set(this,t),this}deleteValueFor(e){return this._appliedTo.delete(e),P.existsFor(e)&&P.getOrCreate(e).delete(this),this}withDefault(e){return this.setValueFor(we,e),this}subscribe(e,t){const n=this.getOrCreateSubscriberSet(t);t&&!P.existsFor(t)&&P.getOrCreate(t),n.has(e)||n.add(e)}unsubscribe(e,t){const n=this.subscribers.get(t||this);n&&n.has(e)&&n.delete(e)}notify(e){const t=Object.freeze({token:this,target:e});this.subscribers.has(this)&&this.subscribers.get(this).forEach(n=>n.handleChange(t)),this.subscribers.has(e)&&this.subscribers.get(e).forEach(n=>n.handleChange(t))}alias(e){return t=>e.getValueFor(t)}}Y.uniqueId=(()=>{let o=0;return()=>(o++,o.toString(16))})();Y.tokensById=new Map;class Nc{startReflection(e,t){e.subscribe(this,t),this.handleChange({token:e,target:t})}stopReflection(e,t){e.unsubscribe(this,t),this.remove(e,t)}handleChange(e){const{token:t,target:n}=e;this.add(t,n)}add(e,t){tt.getOrCreate(t).setProperty(e.cssCustomProperty,this.resolveCSSValue(P.getOrCreate(t).get(e)))}remove(e,t){tt.getOrCreate(t).removeProperty(e.cssCustomProperty)}resolveCSSValue(e){return e&&typeof e.createCSS=="function"?e.createCSS():e}}class Vc{constructor(e,t,n){this.source=e,this.token=t,this.node=n,this.dependencies=new Set,this.observer=S.binding(e,this,!1),this.observer.handleChange=this.observer.call,this.handleChange()}disconnect(){this.observer.disconnect()}handleChange(){this.node.store.set(this.token,this.observer.observe(this.node.target,At))}}class Mc{constructor(){this.values=new Map}set(e,t){this.values.get(e)!==t&&(this.values.set(e,t),S.getNotifier(this).notify(e.id))}get(e){return S.track(this,e.id),this.values.get(e)}delete(e){this.values.delete(e)}all(){return this.values.entries()}}const kt=new WeakMap,$t=new WeakMap;class P{constructor(e){this.target=e,this.store=new Mc,this.children=[],this.assignedValues=new Map,this.reflecting=new Set,this.bindingObservers=new Map,this.tokenValueChangeHandler={handleChange:(t,n)=>{const i=Y.getTokenById(n);if(i&&(i.notify(this.target),Y.isCSSDesignToken(i))){const r=this.parent,s=this.isReflecting(i);if(r){const c=r.get(i),a=t.get(i);c!==a&&!s?this.reflectToCSS(i):c===a&&s&&this.stopReflectToCSS(i)}else s||this.reflectToCSS(i)}}},kt.set(e,this),S.getNotifier(this.store).subscribe(this.tokenValueChangeHandler),e instanceof Co?e.$fastController.addBehaviors([this]):e.isConnected&&this.bind()}static getOrCreate(e){return kt.get(e)||new P(e)}static existsFor(e){return kt.has(e)}static findParent(e){if(we!==e.target){let t=tn(e.target);for(;t!==null;){if(kt.has(t))return kt.get(t);t=tn(t)}return P.getOrCreate(we)}return null}static findClosestAssignedNode(e,t){let n=t;do{if(n.has(e))return n;n=n.parent?n.parent:n.target!==we?P.getOrCreate(we):null}while(n!==null);return null}get parent(){return $t.get(this)||null}has(e){return this.assignedValues.has(e)}get(e){const t=this.store.get(e);if(t!==void 0)return t;const n=this.getRaw(e);if(n!==void 0)return this.hydrate(e,n),this.get(e)}getRaw(e){var t;return this.assignedValues.has(e)?this.assignedValues.get(e):(t=P.findClosestAssignedNode(e,this))===null||t===void 0?void 0:t.getRaw(e)}set(e,t){Y.isDerivedDesignTokenValue(this.assignedValues.get(e))&&this.tearDownBindingObserver(e),this.assignedValues.set(e,t),Y.isDerivedDesignTokenValue(t)?this.setupBindingObserver(e,t):this.store.set(e,t)}delete(e){this.assignedValues.delete(e),this.tearDownBindingObserver(e);const t=this.getRaw(e);t?this.hydrate(e,t):this.store.delete(e)}bind(){const e=P.findParent(this);e&&e.appendChild(this);for(const t of this.assignedValues.keys())t.notify(this.target)}unbind(){this.parent&&$t.get(this).removeChild(this)}appendChild(e){e.parent&&$t.get(e).removeChild(e);const t=this.children.filter(n=>e.contains(n));$t.set(e,this),this.children.push(e),t.forEach(n=>e.appendChild(n)),S.getNotifier(this.store).subscribe(e);for(const[n,i]of this.store.all())e.hydrate(n,this.bindingObservers.has(n)?this.getRaw(n):i)}removeChild(e){const t=this.children.indexOf(e);return t!==-1&&this.children.splice(t,1),S.getNotifier(this.store).unsubscribe(e),e.parent===this?$t.delete(e):!1}contains(e){return _c(this.target,e.target)}reflectToCSS(e){this.isReflecting(e)||(this.reflecting.add(e),P.cssCustomPropertyReflector.startReflection(e,this.target))}stopReflectToCSS(e){this.isReflecting(e)&&(this.reflecting.delete(e),P.cssCustomPropertyReflector.stopReflection(e,this.target))}isReflecting(e){return this.reflecting.has(e)}handleChange(e,t){const n=Y.getTokenById(t);!n||this.hydrate(n,this.getRaw(n))}hydrate(e,t){if(!this.has(e)){const n=this.bindingObservers.get(e);Y.isDerivedDesignTokenValue(t)?n?n.source!==t&&(this.tearDownBindingObserver(e),this.setupBindingObserver(e,t)):this.setupBindingObserver(e,t):(n&&this.tearDownBindingObserver(e),this.store.set(e,t))}}setupBindingObserver(e,t){const n=new Vc(t,e,this);return this.bindingObservers.set(e,n),n}tearDownBindingObserver(e){return this.bindingObservers.has(e)?(this.bindingObservers.get(e).disconnect(),this.bindingObservers.delete(e),!0):!1}}P.cssCustomPropertyReflector=new Nc;h([g],P.prototype,"children",void 0);function zc(o){return Y.from(o)}const tr=Object.freeze({create:zc,notifyConnection(o){return!o.isConnected||!P.existsFor(o)?!1:(P.getOrCreate(o).bind(),!0)},notifyDisconnection(o){return o.isConnected||!P.existsFor(o)?!1:(P.getOrCreate(o).unbind(),!0)},registerRoot(o=we){V.registerRoot(o)},unregisterRoot(o=we){V.unregisterRoot(o)}}),zo=Object.freeze({definitionCallbackOnly:null,ignoreDuplicate:Symbol()}),jo=new Map,ro=new Map;let nt=null;const Ct=E.createInterface(o=>o.cachedCallback(e=>(nt===null&&(nt=new nr(null,e)),nt))),or=Object.freeze({tagFor(o){return ro.get(o)},responsibleFor(o){const e=o.$$designSystem$$;return e||E.findResponsibleContainer(o).get(Ct)},getOrCreate(o){if(!o)return nt===null&&(nt=E.getOrCreateDOMContainer().get(Ct)),nt;const e=o.$$designSystem$$;if(e)return e;const t=E.getOrCreateDOMContainer(o);if(t.has(Ct,!1))return t.get(Ct);{const n=new nr(o,t);return t.register(Pt.instance(Ct,n)),n}}});function jc(o,e,t){return typeof o=="string"?{name:o,type:e,callback:t}:o}class nr{constructor(e,t){this.owner=e,this.container=t,this.designTokensInitialized=!1,this.prefix="fast",this.shadowRootMode=void 0,this.disambiguate=()=>zo.definitionCallbackOnly,e!==null&&(e.$$designSystem$$=this)}withPrefix(e){return this.prefix=e,this}withShadowRootMode(e){return this.shadowRootMode=e,this}withElementDisambiguation(e){return this.disambiguate=e,this}withDesignTokenRoot(e){return this.designTokenRoot=e,this}register(...e){const t=this.container,n=[],i=this.disambiguate,r=this.shadowRootMode,s={elementPrefix:this.prefix,tryDefineElement(c,a,l){const d=jc(c,a,l),{name:u,callback:b,baseClass:m}=d;let{type:w}=d,A=u,N=jo.get(A),ue=!0;for(;N;){const X=i(A,w,N);switch(X){case zo.ignoreDuplicate:return;case zo.definitionCallbackOnly:ue=!1,N=void 0;break;default:A=X,N=jo.get(A);break}}ue&&((ro.has(w)||w===_)&&(w=class extends w{}),jo.set(A,w),ro.set(w,A),m&&ro.set(m,A)),n.push(new qc(t,A,w,r,b,ue))}};this.designTokensInitialized||(this.designTokensInitialized=!0,this.designTokenRoot!==null&&tr.registerRoot(this.designTokenRoot)),t.registerWithContext(s,...e);for(const c of n)c.callback(c),c.willDefine&&c.definition!==null&&c.definition.define();return this}}class qc{constructor(e,t,n,i,r,s){this.container=e,this.name=t,this.type=n,this.shadowRootMode=i,this.callback=r,this.willDefine=s,this.definition=null}definePresentation(e){Xi.define(this.name,e,this.container)}defineElement(e){this.definition=new $o(this.type,Object.assign(Object.assign({},e),{name:this.name}))}tagFor(e){return or.tagFor(e)}}const Uc=(o,e)=>B`
    <template role="${t=>t.role}" aria-orientation="${t=>t.orientation}"></template>
`;var on;(function(o){o.separator="separator",o.presentation="presentation"})(on||(on={}));class wn extends _{constructor(){super(...arguments),this.role=on.separator,this.orientation=Lt.horizontal}}h([f],wn.prototype,"role",void 0);h([f],wn.prototype,"orientation",void 0);const Gc=(o,e)=>B`
    <template
        aria-checked="${t=>t.ariaChecked}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-posinset="${t=>t.ariaPosInSet}"
        aria-selected="${t=>t.ariaSelected}"
        aria-setsize="${t=>t.ariaSetSize}"
        class="${t=>[t.checked&&"checked",t.selected&&"selected",t.disabled&&"disabled"].filter(Boolean).join(" ")}"
        role="option"
    >
        ${ft(o,e)}
        <span class="content" part="content">
            <slot ${le("content")}></slot>
        </span>
        ${ht(o,e)}
    </template>
`;class Bo extends Z{constructor(){super(...arguments),this.activeIndex=-1,this.rangeStartIndex=-1}get activeOption(){return this.options[this.activeIndex]}get checkedOptions(){var e;return(e=this.options)===null||e===void 0?void 0:e.filter(t=>t.checked)}get firstSelectedOptionIndex(){return this.options.indexOf(this.firstSelectedOption)}activeIndexChanged(e,t){var n,i;this.ariaActiveDescendant=(i=(n=this.options[t])===null||n===void 0?void 0:n.id)!==null&&i!==void 0?i:"",this.focusAndScrollOptionIntoView()}checkActiveIndex(){if(!this.multiple)return;const e=this.activeOption;e&&(e.checked=!0)}checkFirstOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex+1),this.options.forEach((t,n)=>{t.checked=Kt(n,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex=0,this.checkActiveIndex()}checkLastOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,n)=>{t.checked=Kt(n,this.rangeStartIndex,this.options.length)})):this.uncheckAllOptions(),this.activeIndex=this.options.length-1,this.checkActiveIndex()}connectedCallback(){super.connectedCallback(),this.addEventListener("focusout",this.focusoutHandler)}disconnectedCallback(){this.removeEventListener("focusout",this.focusoutHandler),super.disconnectedCallback()}checkNextOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.options.forEach((t,n)=>{t.checked=Kt(n,this.rangeStartIndex,this.activeIndex+1)})):this.uncheckAllOptions(),this.activeIndex+=this.activeIndex<this.options.length-1?1:0,this.checkActiveIndex()}checkPreviousOption(e=!1){e?(this.rangeStartIndex===-1&&(this.rangeStartIndex=this.activeIndex),this.checkedOptions.length===1&&(this.rangeStartIndex+=1),this.options.forEach((t,n)=>{t.checked=Kt(n,this.activeIndex,this.rangeStartIndex)})):this.uncheckAllOptions(),this.activeIndex-=this.activeIndex>0?1:0,this.checkActiveIndex()}clickHandler(e){var t;if(!this.multiple)return super.clickHandler(e);const n=(t=e.target)===null||t===void 0?void 0:t.closest("[role=option]");if(!(!n||n.disabled))return this.uncheckAllOptions(),this.activeIndex=this.options.indexOf(n),this.checkActiveIndex(),this.toggleSelectedForAllCheckedOptions(),!0}focusAndScrollOptionIntoView(){super.focusAndScrollOptionIntoView(this.activeOption)}focusinHandler(e){if(!this.multiple)return super.focusinHandler(e);!this.shouldSkipFocus&&e.target===e.currentTarget&&(this.uncheckAllOptions(),this.activeIndex===-1&&(this.activeIndex=this.firstSelectedOptionIndex!==-1?this.firstSelectedOptionIndex:0),this.checkActiveIndex(),this.setSelectedOptions(),this.focusAndScrollOptionIntoView()),this.shouldSkipFocus=!1}focusoutHandler(e){this.multiple&&this.uncheckAllOptions()}keydownHandler(e){if(!this.multiple)return super.keydownHandler(e);if(this.disabled)return!0;const{key:t,shiftKey:n}=e;switch(this.shouldSkipFocus=!1,t){case gt:{this.checkFirstOption(n);return}case bt:{this.checkNextOption(n);return}case pt:{this.checkPreviousOption(n);return}case vt:{this.checkLastOption(n);return}case mn:return this.focusAndScrollOptionIntoView(),!0;case So:return this.uncheckAllOptions(),this.checkActiveIndex(),!0;case Gt:if(e.preventDefault(),this.typeAheadExpired){this.toggleSelectedForAllCheckedOptions();return}default:return t.length===1&&this.handleTypeAhead(`${t}`),!0}}mousedownHandler(e){if(e.offsetX>=0&&e.offsetX<=this.scrollWidth)return super.mousedownHandler(e)}multipleChanged(e,t){var n;this.ariaMultiSelectable=t?"true":null,(n=this.options)===null||n===void 0||n.forEach(i=>{i.checked=t?!1:void 0}),this.setSelectedOptions()}setSelectedOptions(){if(!this.multiple){super.setSelectedOptions();return}this.$fastController.isConnected&&this.options&&(this.selectedOptions=this.options.filter(e=>e.selected),this.focusAndScrollOptionIntoView())}sizeChanged(e,t){var n;const i=Math.max(0,parseInt((n=t?.toFixed())!==null&&n!==void 0?n:"",10));i!==t&&I.queueUpdate(()=>{this.size=i})}toggleSelectedForAllCheckedOptions(){const e=this.checkedOptions.filter(n=>!n.disabled),t=!e.every(n=>n.selected);e.forEach(n=>n.selected=t),this.selectedIndex=this.options.indexOf(e[e.length-1]),this.setSelectedOptions()}typeaheadBufferChanged(e,t){if(!this.multiple){super.typeaheadBufferChanged(e,t);return}if(this.$fastController.isConnected){const n=this.getTypeaheadMatches(),i=this.options.indexOf(n[0]);i>-1&&(this.activeIndex=i,this.uncheckAllOptions(),this.checkActiveIndex()),this.typeAheadExpired=!1}}uncheckAllOptions(e=!1){this.options.forEach(t=>t.checked=this.multiple?!1:void 0),e||(this.rangeStartIndex=-1)}}h([g],Bo.prototype,"activeIndex",void 0);h([f({mode:"boolean"})],Bo.prototype,"multiple",void 0);h([f({converter:be})],Bo.prototype,"size",void 0);class Wc extends _{}class Qc extends Qt(Wc){constructor(){super(...arguments),this.proxy=document.createElement("input")}}var nn;(function(o){o.email="email",o.password="password",o.tel="tel",o.text="text",o.url="url"})(nn||(nn={}));class ce extends Qc{constructor(){super(...arguments),this.type=nn.text}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly,this.validate())}autofocusChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.autofocus=this.autofocus,this.validate())}placeholderChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.placeholder=this.placeholder)}typeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.type=this.type,this.validate())}listChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.setAttribute("list",this.list),this.validate())}maxlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.maxLength=this.maxlength,this.validate())}minlengthChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.minLength=this.minlength,this.validate())}patternChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.pattern=this.pattern,this.validate())}sizeChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.size=this.size)}spellcheckChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.spellcheck=this.spellcheck)}connectedCallback(){super.connectedCallback(),this.proxy.setAttribute("type",this.type),this.validate(),this.autofocus&&I.queueUpdate(()=>{this.focus()})}select(){this.control.select(),this.$emit("select")}handleTextInput(){this.value=this.control.value}handleChange(){this.$emit("change")}}h([f({attribute:"readonly",mode:"boolean"})],ce.prototype,"readOnly",void 0);h([f({mode:"boolean"})],ce.prototype,"autofocus",void 0);h([f],ce.prototype,"placeholder",void 0);h([f],ce.prototype,"type",void 0);h([f],ce.prototype,"list",void 0);h([f({converter:be})],ce.prototype,"maxlength",void 0);h([f({converter:be})],ce.prototype,"minlength",void 0);h([f],ce.prototype,"pattern",void 0);h([f({converter:be})],ce.prototype,"size",void 0);h([f({mode:"boolean"})],ce.prototype,"spellcheck",void 0);h([g],ce.prototype,"defaultSlottedNodes",void 0);class kn{}ie(kn,F);ie(ce,ut,kn);const si=44,Xc=(o,e)=>B`
    <template
        role="progressbar"
        aria-valuenow="${t=>t.value}"
        aria-valuemin="${t=>t.min}"
        aria-valuemax="${t=>t.max}"
        class="${t=>t.paused?"paused":""}"
    >
        ${fo(t=>typeof t.value=="number",B`
                <svg
                    class="progress"
                    part="progress"
                    viewBox="0 0 16 16"
                    slot="determinate"
                >
                    <circle
                        class="background"
                        part="background"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                    <circle
                        class="determinate"
                        part="determinate"
                        style="stroke-dasharray: ${t=>si*t.percentComplete/100}px ${si}px"
                        cx="8px"
                        cy="8px"
                        r="7px"
                    ></circle>
                </svg>
            `)}
        ${fo(t=>typeof t.value!="number",B`
                <slot name="indeterminate" slot="indeterminate">
                    ${e.indeterminateIndicator||""}
                </slot>
            `)}
    </template>
`;class yt extends _{constructor(){super(...arguments),this.percentComplete=0}valueChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}minChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}maxChanged(){this.$fastController.isConnected&&this.updatePercentComplete()}connectedCallback(){super.connectedCallback(),this.updatePercentComplete()}updatePercentComplete(){const e=typeof this.min=="number"?this.min:0,t=typeof this.max=="number"?this.max:100,n=typeof this.value=="number"?this.value:0,i=t-e;this.percentComplete=i===0?0:Math.fround((n-e)/i*100)}}h([f({converter:be})],yt.prototype,"value",void 0);h([f({converter:be})],yt.prototype,"min",void 0);h([f({converter:be})],yt.prototype,"max",void 0);h([f({mode:"boolean"})],yt.prototype,"paused",void 0);h([g],yt.prototype,"percentComplete",void 0);const Yc=(o,e)=>B`
    <template
        role="radiogroup"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        @keydown="${(t,n)=>t.keydownHandler(n.event)}"
        @focusout="${(t,n)=>t.focusOutHandler(n.event)}"
    >
        <slot name="label"></slot>
        <div
            class="positioning-region ${t=>t.orientation===Lt.horizontal?"horizontal":"vertical"}"
            part="positioning-region"
        >
            <slot
                ${le({property:"slottedRadioButtons",filter:vn("[role=radio]")})}
            ></slot>
        </div>
    </template>
`;class Oe extends _{constructor(){super(...arguments),this.orientation=Lt.horizontal,this.radioChangeHandler=e=>{const t=e.target;t.checked&&(this.slottedRadioButtons.forEach(n=>{n!==t&&(n.checked=!1,this.isInsideFoundationToolbar||n.setAttribute("tabindex","-1"))}),this.selectedRadio=t,this.value=t.value,t.setAttribute("tabindex","0"),this.focusedRadio=t),e.stopPropagation()},this.moveToRadioByIndex=(e,t)=>{const n=e[t];this.isInsideToolbar||(n.setAttribute("tabindex","0"),n.readOnly?this.slottedRadioButtons.forEach(i=>{i!==n&&i.setAttribute("tabindex","-1")}):(n.checked=!0,this.selectedRadio=n)),this.focusedRadio=n,n.focus()},this.moveRightOffGroup=()=>{var e;(e=this.nextElementSibling)===null||e===void 0||e.focus()},this.moveLeftOffGroup=()=>{var e;(e=this.previousElementSibling)===null||e===void 0||e.focus()},this.focusOutHandler=e=>{const t=this.slottedRadioButtons,n=e.target,i=n!==null?t.indexOf(n):0,r=this.focusedRadio?t.indexOf(this.focusedRadio):-1;return(r===0&&i===r||r===t.length-1&&r===i)&&(this.selectedRadio?(this.focusedRadio=this.selectedRadio,this.isInsideFoundationToolbar||(this.selectedRadio.setAttribute("tabindex","0"),t.forEach(s=>{s!==this.selectedRadio&&s.setAttribute("tabindex","-1")}))):(this.focusedRadio=t[0],this.focusedRadio.setAttribute("tabindex","0"),t.forEach(s=>{s!==this.focusedRadio&&s.setAttribute("tabindex","-1")}))),!0},this.clickHandler=e=>{const t=e.target;if(t){const n=this.slottedRadioButtons;t.checked||n.indexOf(t)===0?(t.setAttribute("tabindex","0"),this.selectedRadio=t):(t.setAttribute("tabindex","-1"),this.selectedRadio=null),this.focusedRadio=t}e.preventDefault()},this.shouldMoveOffGroupToTheRight=(e,t,n)=>e===t.length&&this.isInsideToolbar&&n===Nt,this.shouldMoveOffGroupToTheLeft=(e,t)=>(this.focusedRadio?e.indexOf(this.focusedRadio)-1:0)<0&&this.isInsideToolbar&&t===Ht,this.checkFocusedRadio=()=>{this.focusedRadio!==null&&!this.focusedRadio.readOnly&&!this.focusedRadio.checked&&(this.focusedRadio.checked=!0,this.focusedRadio.setAttribute("tabindex","0"),this.focusedRadio.focus(),this.selectedRadio=this.focusedRadio)},this.moveRight=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)+1:1,this.shouldMoveOffGroupToTheRight(n,t,e.key)){this.moveRightOffGroup();return}else n===t.length&&(n=0);for(;n<t.length&&t.length>1;)if(t[n].disabled){if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;if(n+1>=t.length){if(this.isInsideToolbar)break;n=0}else n+=1}else{this.moveToRadioByIndex(t,n);break}},this.moveLeft=e=>{const t=this.slottedRadioButtons;let n=0;if(n=this.focusedRadio?t.indexOf(this.focusedRadio)-1:0,n=n<0?t.length-1:n,this.shouldMoveOffGroupToTheLeft(t,e.key)){this.moveLeftOffGroup();return}for(;n>=0&&t.length>1;)if(t[n].disabled){if(this.focusedRadio&&n===t.indexOf(this.focusedRadio))break;n-1<0?n=t.length-1:n-=1}else{this.moveToRadioByIndex(t,n);break}},this.keydownHandler=e=>{const t=e.key;if(t in Yi&&this.isInsideFoundationToolbar)return!0;switch(t){case Ut:{this.checkFocusedRadio();break}case Nt:case bt:{this.direction===dt.ltr?this.moveRight(e):this.moveLeft(e);break}case Ht:case pt:{this.direction===dt.ltr?this.moveLeft(e):this.moveRight(e);break}default:return!0}}}readOnlyChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.readOnly?e.readOnly=!0:e.readOnly=!1})}disabledChanged(){this.slottedRadioButtons!==void 0&&this.slottedRadioButtons.forEach(e=>{this.disabled?e.disabled=!0:e.disabled=!1})}nameChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.setAttribute("name",this.name)})}valueChanged(){this.slottedRadioButtons&&this.slottedRadioButtons.forEach(e=>{e.getAttribute("value")===this.value&&(e.checked=!0,this.selectedRadio=e)}),this.$emit("change")}slottedRadioButtonsChanged(e,t){this.slottedRadioButtons&&this.slottedRadioButtons.length>0&&this.setupRadioButtons()}get parentToolbar(){return this.closest('[role="toolbar"]')}get isInsideToolbar(){var e;return(e=this.parentToolbar)!==null&&e!==void 0?e:!1}get isInsideFoundationToolbar(){var e;return!!(!((e=this.parentToolbar)===null||e===void 0)&&e.$fastController)}connectedCallback(){super.connectedCallback(),this.direction=vc(this),this.setupRadioButtons()}disconnectedCallback(){this.slottedRadioButtons.forEach(e=>{e.removeEventListener("change",this.radioChangeHandler)})}setupRadioButtons(){const e=this.slottedRadioButtons.filter(i=>i.hasAttribute("checked")),t=e?e.length:0;if(t>1){const i=e[t-1];i.checked=!0}let n=!1;if(this.slottedRadioButtons.forEach(i=>{this.name!==void 0&&i.setAttribute("name",this.name),this.disabled&&(i.disabled=!0),this.readOnly&&(i.readOnly=!0),this.value&&this.value===i.value?(this.selectedRadio=i,this.focusedRadio=i,i.checked=!0,i.setAttribute("tabindex","0"),n=!0):(this.isInsideFoundationToolbar||i.setAttribute("tabindex","-1"),i.checked=!1),i.addEventListener("change",this.radioChangeHandler)}),this.value===void 0&&this.slottedRadioButtons.length>0){const i=this.slottedRadioButtons.filter(s=>s.hasAttribute("checked")),r=i!==null?i.length:0;if(r>0&&!n){const s=i[r-1];s.checked=!0,this.focusedRadio=s,s.setAttribute("tabindex","0")}else this.slottedRadioButtons[0].setAttribute("tabindex","0"),this.focusedRadio=this.slottedRadioButtons[0]}}}h([f({attribute:"readonly",mode:"boolean"})],Oe.prototype,"readOnly",void 0);h([f({attribute:"disabled",mode:"boolean"})],Oe.prototype,"disabled",void 0);h([f],Oe.prototype,"name",void 0);h([f],Oe.prototype,"value",void 0);h([f],Oe.prototype,"orientation",void 0);h([g],Oe.prototype,"childItems",void 0);h([g],Oe.prototype,"slottedRadioButtons",void 0);const Jc=(o,e)=>B`
    <template
        role="radio"
        class="${t=>t.checked?"checked":""} ${t=>t.readOnly?"readonly":""}"
        aria-checked="${t=>t.checked}"
        aria-required="${t=>t.required}"
        aria-disabled="${t=>t.disabled}"
        aria-readonly="${t=>t.readOnly}"
        @keypress="${(t,n)=>t.keypressHandler(n.event)}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
    >
        <div part="control" class="control">
            <slot name="checked-indicator">
                ${e.checkedIndicator||""}
            </slot>
        </div>
        <label
            part="label"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${le("defaultSlottedNodes")}></slot>
        </label>
    </template>
`;class Zc extends _{}class Kc extends Zi(Zc){constructor(){super(...arguments),this.proxy=document.createElement("input")}}class Ao extends Kc{constructor(){super(),this.initialValue="on",this.keypressHandler=e=>{switch(e.key){case Gt:!this.checked&&!this.readOnly&&(this.checked=!0);return}return!0},this.proxy.setAttribute("type","radio")}readOnlyChanged(){this.proxy instanceof HTMLInputElement&&(this.proxy.readOnly=this.readOnly)}defaultCheckedChanged(){var e;this.$fastController.isConnected&&!this.dirtyChecked&&(this.isInsideRadioGroup()||(this.checked=(e=this.defaultChecked)!==null&&e!==void 0?e:!1,this.dirtyChecked=!1))}connectedCallback(){var e,t;super.connectedCallback(),this.validate(),((e=this.parentElement)===null||e===void 0?void 0:e.getAttribute("role"))!=="radiogroup"&&this.getAttribute("tabindex")===null&&(this.disabled||this.setAttribute("tabindex","0")),this.checkedAttribute&&(this.dirtyChecked||this.isInsideRadioGroup()||(this.checked=(t=this.defaultChecked)!==null&&t!==void 0?t:!1,this.dirtyChecked=!1))}isInsideRadioGroup(){return this.closest("[role=radiogroup]")!==null}clickHandler(e){!this.disabled&&!this.readOnly&&!this.checked&&(this.checked=!0)}}h([f({attribute:"readonly",mode:"boolean"})],Ao.prototype,"readOnly",void 0);h([g],Ao.prototype,"name",void 0);h([g],Ao.prototype,"defaultSlottedNodes",void 0);function ea(o,e,t){return o.nodeType!==Node.TEXT_NODE?!0:typeof o.nodeValue=="string"&&!!o.nodeValue.trim().length}class ta extends Bo{}class oa extends Qt(ta){constructor(){super(...arguments),this.proxy=document.createElement("select")}}class _e extends oa{constructor(){super(...arguments),this.open=!1,this.forcedPosition=!1,this.position=et.below,this.listboxId=bo("listbox-"),this.maxHeight=0}openChanged(e,t){if(!!this.collapsible){if(this.open){this.ariaControls=this.listboxId,this.ariaExpanded="true",this.setPositioning(),this.focusAndScrollOptionIntoView(),this.indexWhenOpened=this.selectedIndex,I.queueUpdate(()=>this.focus());return}this.ariaControls="",this.ariaExpanded="false"}}get collapsible(){return!(this.multiple||typeof this.size=="number")}get value(){return S.track(this,"value"),this._value}set value(e){var t,n,i,r,s,c,a;const l=`${this._value}`;if(!((t=this._options)===null||t===void 0)&&t.length){const d=this._options.findIndex(m=>m.value===e),u=(i=(n=this._options[this.selectedIndex])===null||n===void 0?void 0:n.value)!==null&&i!==void 0?i:null,b=(s=(r=this._options[d])===null||r===void 0?void 0:r.value)!==null&&s!==void 0?s:null;(d===-1||u!==b)&&(e="",this.selectedIndex=d),e=(a=(c=this.firstSelectedOption)===null||c===void 0?void 0:c.value)!==null&&a!==void 0?a:e}l!==e&&(this._value=e,super.valueChanged(l,e),S.notify(this,"value"),this.updateDisplayValue())}updateValue(e){var t,n;this.$fastController.isConnected&&(this.value=(n=(t=this.firstSelectedOption)===null||t===void 0?void 0:t.value)!==null&&n!==void 0?n:""),e&&(this.$emit("input"),this.$emit("change",this,{bubbles:!0,composed:void 0}))}selectedIndexChanged(e,t){super.selectedIndexChanged(e,t),this.updateValue()}positionChanged(){this.positionAttribute=this.position,this.setPositioning()}setPositioning(){const e=this.getBoundingClientRect(),n=window.innerHeight-e.bottom;this.position=this.forcedPosition?this.positionAttribute:e.top>n?et.above:et.below,this.positionAttribute=this.forcedPosition?this.positionAttribute:this.position,this.maxHeight=this.position===et.above?~~e.top:~~n}get displayValue(){var e,t;return S.track(this,"displayValue"),(t=(e=this.firstSelectedOption)===null||e===void 0?void 0:e.text)!==null&&t!==void 0?t:""}disabledChanged(e,t){super.disabledChanged&&super.disabledChanged(e,t),this.ariaDisabled=this.disabled?"true":"false"}formResetCallback(){this.setProxyOptions(),super.setDefaultSelectedOption(),this.selectedIndex===-1&&(this.selectedIndex=0)}clickHandler(e){if(!this.disabled){if(this.open){const t=e.target.closest("option,[role=option]");if(t&&t.disabled)return}return super.clickHandler(e),this.open=this.collapsible&&!this.open,!this.open&&this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0),!0}}focusoutHandler(e){var t;if(super.focusoutHandler(e),!this.open)return!0;const n=e.relatedTarget;if(this.isSameNode(n)){this.focus();return}!((t=this.options)===null||t===void 0)&&t.includes(n)||(this.open=!1,this.indexWhenOpened!==this.selectedIndex&&this.updateValue(!0))}handleChange(e,t){super.handleChange(e,t),t==="value"&&this.updateValue()}slottedOptionsChanged(e,t){this.options.forEach(n=>{S.getNotifier(n).unsubscribe(this,"value")}),super.slottedOptionsChanged(e,t),this.options.forEach(n=>{S.getNotifier(n).subscribe(this,"value")}),this.setProxyOptions(),this.updateValue()}mousedownHandler(e){var t;return e.offsetX>=0&&e.offsetX<=((t=this.listbox)===null||t===void 0?void 0:t.scrollWidth)?super.mousedownHandler(e):this.collapsible}multipleChanged(e,t){super.multipleChanged(e,t),this.proxy&&(this.proxy.multiple=t)}selectedOptionsChanged(e,t){var n;super.selectedOptionsChanged(e,t),(n=this.options)===null||n===void 0||n.forEach((i,r)=>{var s;const c=(s=this.proxy)===null||s===void 0?void 0:s.options.item(r);c&&(c.selected=i.selected)})}setDefaultSelectedOption(){var e;const t=(e=this.options)!==null&&e!==void 0?e:Array.from(this.children).filter(Z.slottedOptionFilter),n=t?.findIndex(i=>i.hasAttribute("selected")||i.selected||i.value===this.value);if(n!==-1){this.selectedIndex=n;return}this.selectedIndex=0}setProxyOptions(){this.proxy instanceof HTMLSelectElement&&this.options&&(this.proxy.options.length=0,this.options.forEach(e=>{const t=e.proxy||(e instanceof HTMLOptionElement?e.cloneNode():null);t&&this.proxy.options.add(t)}))}keydownHandler(e){super.keydownHandler(e);const t=e.key||e.key.charCodeAt(0);switch(t){case Gt:{e.preventDefault(),this.collapsible&&this.typeAheadExpired&&(this.open=!this.open);break}case gt:case vt:{e.preventDefault();break}case Ut:{e.preventDefault(),this.open=!this.open;break}case So:{this.collapsible&&this.open&&(e.preventDefault(),this.open=!1);break}case mn:return this.collapsible&&this.open&&(e.preventDefault(),this.open=!1),!0}return!this.open&&this.indexWhenOpened!==this.selectedIndex&&(this.updateValue(!0),this.indexWhenOpened=this.selectedIndex),!(t in Yi)}connectedCallback(){super.connectedCallback(),this.forcedPosition=!!this.positionAttribute,this.addEventListener("contentchange",this.updateDisplayValue)}disconnectedCallback(){this.removeEventListener("contentchange",this.updateDisplayValue),super.disconnectedCallback()}sizeChanged(e,t){super.sizeChanged(e,t),this.proxy&&(this.proxy.size=t)}updateDisplayValue(){this.collapsible&&S.notify(this,"displayValue")}}h([f({attribute:"open",mode:"boolean"})],_e.prototype,"open",void 0);h([as],_e.prototype,"collapsible",null);h([g],_e.prototype,"control",void 0);h([f({attribute:"position"})],_e.prototype,"positionAttribute",void 0);h([g],_e.prototype,"position",void 0);h([g],_e.prototype,"maxHeight",void 0);class $n{}h([g],$n.prototype,"ariaControls",void 0);ie($n,Ge);ie(_e,ut,$n);const na=(o,e)=>B`
    <template
        class="${t=>[t.collapsible&&"collapsible",t.collapsible&&t.open&&"open",t.disabled&&"disabled",t.collapsible&&t.position].filter(Boolean).join(" ")}"
        aria-activedescendant="${t=>t.ariaActiveDescendant}"
        aria-controls="${t=>t.ariaControls}"
        aria-disabled="${t=>t.ariaDisabled}"
        aria-expanded="${t=>t.ariaExpanded}"
        aria-haspopup="${t=>t.collapsible?"listbox":null}"
        aria-multiselectable="${t=>t.ariaMultiSelectable}"
        ?open="${t=>t.open}"
        role="combobox"
        tabindex="${t=>t.disabled?null:"0"}"
        @click="${(t,n)=>t.clickHandler(n.event)}"
        @focusin="${(t,n)=>t.focusinHandler(n.event)}"
        @focusout="${(t,n)=>t.focusoutHandler(n.event)}"
        @keydown="${(t,n)=>t.keydownHandler(n.event)}"
        @mousedown="${(t,n)=>t.mousedownHandler(n.event)}"
    >
        ${fo(t=>t.collapsible,B`
                <div
                    class="control"
                    part="control"
                    ?disabled="${t=>t.disabled}"
                    ${K("control")}
                >
                    ${ft(o,e)}
                    <slot name="button-container">
                        <div class="selected-value" part="selected-value">
                            <slot name="selected-value">${t=>t.displayValue}</slot>
                        </div>
                        <div aria-hidden="true" class="indicator" part="indicator">
                            <slot name="indicator">
                                ${e.indicator||""}
                            </slot>
                        </div>
                    </slot>
                    ${ht(o,e)}
                </div>
            `)}
        <div
            class="listbox"
            id="${t=>t.listboxId}"
            part="listbox"
            role="listbox"
            ?disabled="${t=>t.disabled}"
            ?hidden="${t=>t.collapsible?!t.open:!1}"
            ${K("listbox")}
        >
            <slot
                ${le({filter:Z.slottedOptionFilter,flatten:!0,property:"slottedOptions"})}
            ></slot>
        </div>
    </template>
`,ia=(o,e)=>B`
    <template slot="tabpanel" role="tabpanel">
        <slot></slot>
    </template>
`;class ra extends _{}const sa=(o,e)=>B`
    <template slot="tab" role="tab" aria-disabled="${t=>t.disabled}">
        <slot></slot>
    </template>
`;class ir extends _{}h([f({mode:"boolean"})],ir.prototype,"disabled",void 0);const ca=(o,e)=>B`
    <template class="${t=>t.orientation}">
        ${ft(o,e)}
        <div class="tablist" part="tablist" role="tablist">
            <slot class="tab" name="tab" part="tab" ${le("tabs")}></slot>

            ${fo(t=>t.showActiveIndicator,B`
                    <div
                        ${K("activeIndicatorRef")}
                        class="activeIndicator"
                        part="activeIndicator"
                    ></div>
                `)}
        </div>
        ${ht(o,e)}
        <div class="tabpanel">
            <slot name="tabpanel" part="tabpanel" ${le("tabpanels")}></slot>
        </div>
    </template>
`;var Vt;(function(o){o.vertical="vertical",o.horizontal="horizontal"})(Vt||(Vt={}));class Ie extends _{constructor(){super(...arguments),this.orientation=Vt.horizontal,this.activeindicator=!0,this.showActiveIndicator=!0,this.prevActiveTabIndex=0,this.activeTabIndex=0,this.ticking=!1,this.change=()=>{this.$emit("change",this.activetab)},this.isDisabledElement=e=>e.getAttribute("aria-disabled")==="true",this.isFocusableElement=e=>!this.isDisabledElement(e),this.setTabs=()=>{const e="gridColumn",t="gridRow",n=this.isHorizontal()?e:t;this.activeTabIndex=this.getActiveIndex(),this.showActiveIndicator=!1,this.tabs.forEach((i,r)=>{if(i.slot==="tab"){const s=this.activeTabIndex===r&&this.isFocusableElement(i);this.activeindicator&&this.isFocusableElement(i)&&(this.showActiveIndicator=!0);const c=this.tabIds[r],a=this.tabpanelIds[r];i.setAttribute("id",c),i.setAttribute("aria-selected",s?"true":"false"),i.setAttribute("aria-controls",a),i.addEventListener("click",this.handleTabClick),i.addEventListener("keydown",this.handleTabKeyDown),i.setAttribute("tabindex",s?"0":"-1"),s&&(this.activetab=i)}i.style[e]="",i.style[t]="",i.style[n]=`${r+1}`,this.isHorizontal()?i.classList.remove("vertical"):i.classList.add("vertical")})},this.setTabPanels=()=>{this.tabpanels.forEach((e,t)=>{const n=this.tabIds[t],i=this.tabpanelIds[t];e.setAttribute("id",i),e.setAttribute("aria-labelledby",n),this.activeTabIndex!==t?e.setAttribute("hidden",""):e.removeAttribute("hidden")})},this.handleTabClick=e=>{const t=e.currentTarget;t.nodeType===1&&this.isFocusableElement(t)&&(this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=this.tabs.indexOf(t),this.setComponent())},this.handleTabKeyDown=e=>{if(this.isHorizontal())switch(e.key){case Ht:e.preventDefault(),this.adjustBackward(e);break;case Nt:e.preventDefault(),this.adjustForward(e);break}else switch(e.key){case pt:e.preventDefault(),this.adjustBackward(e);break;case bt:e.preventDefault(),this.adjustForward(e);break}switch(e.key){case gt:e.preventDefault(),this.adjust(-this.activeTabIndex);break;case vt:e.preventDefault(),this.adjust(this.tabs.length-this.activeTabIndex-1);break}},this.adjustForward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)+1:1,n===t.length&&(n=0);n<t.length&&t.length>1;)if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}else{if(this.activetab&&n===t.indexOf(this.activetab))break;n+1>=t.length?n=0:n+=1}},this.adjustBackward=e=>{const t=this.tabs;let n=0;for(n=this.activetab?t.indexOf(this.activetab)-1:0,n=n<0?t.length-1:n;n>=0&&t.length>1;)if(this.isFocusableElement(t[n])){this.moveToTabByIndex(t,n);break}else n-1<0?n=t.length-1:n-=1},this.moveToTabByIndex=(e,t)=>{const n=e[t];this.activetab=n,this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=t,n.focus(),this.setComponent()}}orientationChanged(){this.$fastController.isConnected&&(this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}activeidChanged(e,t){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.prevActiveTabIndex=this.tabs.findIndex(n=>n.id===e),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabsChanged(){this.$fastController.isConnected&&this.tabs.length<=this.tabpanels.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}tabpanelsChanged(){this.$fastController.isConnected&&this.tabpanels.length<=this.tabs.length&&(this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.setTabs(),this.setTabPanels(),this.handleActiveIndicatorPosition())}getActiveIndex(){return this.activeid!==void 0?this.tabIds.indexOf(this.activeid)===-1?0:this.tabIds.indexOf(this.activeid):0}getTabIds(){return this.tabs.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`tab-${bo()}`})}getTabPanelIds(){return this.tabpanels.map(e=>{var t;return(t=e.getAttribute("id"))!==null&&t!==void 0?t:`panel-${bo()}`})}setComponent(){this.activeTabIndex!==this.prevActiveTabIndex&&(this.activeid=this.tabIds[this.activeTabIndex],this.focusTab(),this.change())}isHorizontal(){return this.orientation===Vt.horizontal}handleActiveIndicatorPosition(){this.showActiveIndicator&&this.activeindicator&&this.activeTabIndex!==this.prevActiveTabIndex&&(this.ticking?this.ticking=!1:(this.ticking=!0,this.animateActiveIndicator()))}animateActiveIndicator(){this.ticking=!0;const e=this.isHorizontal()?"gridColumn":"gridRow",t=this.isHorizontal()?"translateX":"translateY",n=this.isHorizontal()?"offsetLeft":"offsetTop",i=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`;const r=this.activeIndicatorRef[n];this.activeIndicatorRef.style[e]=`${this.prevActiveTabIndex+1}`;const s=r-i;this.activeIndicatorRef.style.transform=`${t}(${s}px)`,this.activeIndicatorRef.classList.add("activeIndicatorTransition"),this.activeIndicatorRef.addEventListener("transitionend",()=>{this.ticking=!1,this.activeIndicatorRef.style[e]=`${this.activeTabIndex+1}`,this.activeIndicatorRef.style.transform=`${t}(0px)`,this.activeIndicatorRef.classList.remove("activeIndicatorTransition")})}adjust(e){this.prevActiveTabIndex=this.activeTabIndex,this.activeTabIndex=bc(0,this.tabs.length-1,this.activeTabIndex+e),this.setComponent()}focusTab(){this.tabs[this.activeTabIndex].focus()}connectedCallback(){super.connectedCallback(),this.tabIds=this.getTabIds(),this.tabpanelIds=this.getTabPanelIds(),this.activeTabIndex=this.getActiveIndex()}}h([f],Ie.prototype,"orientation",void 0);h([f],Ie.prototype,"activeid",void 0);h([g],Ie.prototype,"tabs",void 0);h([g],Ie.prototype,"tabpanels",void 0);h([f({mode:"boolean"})],Ie.prototype,"activeindicator",void 0);h([g],Ie.prototype,"activeIndicatorRef",void 0);h([g],Ie.prototype,"showActiveIndicator",void 0);ie(Ie,ut);class aa extends _{}class la extends Qt(aa){constructor(){super(...arguments),this.proxy=document.createElement("textarea")}}var po;(function(o){o.none="none",o.both="both",o.horizontal="horizontal",o.vertical="vertical"})(po||(po={}));class te extends la{constructor(){super(...arguments),this.resize=po.none,this.cols=20,this.handleTextInput=()=>{this.value=this.control.value}}readOnlyChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.readOnly=this.readOnly)}autofocusChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.autofocus=this.autofocus)}listChanged(){this.proxy instanceof HTMLTextAreaElement&&this.proxy.setAttribute("list",this.list)}maxlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.maxLength=this.maxlength)}minlengthChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.minLength=this.minlength)}spellcheckChanged(){this.proxy instanceof HTMLTextAreaElement&&(this.proxy.spellcheck=this.spellcheck)}select(){this.control.select(),this.$emit("select")}handleChange(){this.$emit("change")}}h([f({mode:"boolean"})],te.prototype,"readOnly",void 0);h([f],te.prototype,"resize",void 0);h([f({mode:"boolean"})],te.prototype,"autofocus",void 0);h([f({attribute:"form"})],te.prototype,"formId",void 0);h([f],te.prototype,"list",void 0);h([f({converter:be})],te.prototype,"maxlength",void 0);h([f({converter:be})],te.prototype,"minlength",void 0);h([f],te.prototype,"name",void 0);h([f],te.prototype,"placeholder",void 0);h([f({converter:be,mode:"fromView"})],te.prototype,"cols",void 0);h([f({converter:be,mode:"fromView"})],te.prototype,"rows",void 0);h([f({mode:"boolean"})],te.prototype,"spellcheck",void 0);h([g],te.prototype,"defaultSlottedNodes",void 0);ie(te,kn);const da=(o,e)=>B`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
            ${t=>t.resize!==po.none?`resize-${t.resize}`:""}"
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot ${le("defaultSlottedNodes")}></slot>
        </label>
        <textarea
            part="control"
            class="control"
            id="control"
            ?autofocus="${t=>t.autofocus}"
            cols="${t=>t.cols}"
            ?disabled="${t=>t.disabled}"
            form="${t=>t.form}"
            list="${t=>t.list}"
            maxlength="${t=>t.maxlength}"
            minlength="${t=>t.minlength}"
            name="${t=>t.name}"
            placeholder="${t=>t.placeholder}"
            ?readonly="${t=>t.readOnly}"
            ?required="${t=>t.required}"
            rows="${t=>t.rows}"
            ?spellcheck="${t=>t.spellcheck}"
            :value="${t=>t.value}"
            aria-atomic="${t=>t.ariaAtomic}"
            aria-busy="${t=>t.ariaBusy}"
            aria-controls="${t=>t.ariaControls}"
            aria-current="${t=>t.ariaCurrent}"
            aria-describedby="${t=>t.ariaDescribedby}"
            aria-details="${t=>t.ariaDetails}"
            aria-disabled="${t=>t.ariaDisabled}"
            aria-errormessage="${t=>t.ariaErrormessage}"
            aria-flowto="${t=>t.ariaFlowto}"
            aria-haspopup="${t=>t.ariaHaspopup}"
            aria-hidden="${t=>t.ariaHidden}"
            aria-invalid="${t=>t.ariaInvalid}"
            aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
            aria-label="${t=>t.ariaLabel}"
            aria-labelledby="${t=>t.ariaLabelledby}"
            aria-live="${t=>t.ariaLive}"
            aria-owns="${t=>t.ariaOwns}"
            aria-relevant="${t=>t.ariaRelevant}"
            aria-roledescription="${t=>t.ariaRoledescription}"
            @input="${(t,n)=>t.handleTextInput()}"
            @change="${t=>t.handleChange()}"
            ${K("control")}
        ></textarea>
    </template>
`,ua=(o,e)=>B`
    <template
        class="
            ${t=>t.readOnly?"readonly":""}
        "
    >
        <label
            part="label"
            for="control"
            class="${t=>t.defaultSlottedNodes&&t.defaultSlottedNodes.length?"label":"label label__hidden"}"
        >
            <slot
                ${le({property:"defaultSlottedNodes",filter:ea})}
            ></slot>
        </label>
        <div class="root" part="root">
            ${ft(o,e)}
            <input
                class="control"
                part="control"
                id="control"
                @input="${t=>t.handleTextInput()}"
                @change="${t=>t.handleChange()}"
                ?autofocus="${t=>t.autofocus}"
                ?disabled="${t=>t.disabled}"
                list="${t=>t.list}"
                maxlength="${t=>t.maxlength}"
                minlength="${t=>t.minlength}"
                pattern="${t=>t.pattern}"
                placeholder="${t=>t.placeholder}"
                ?readonly="${t=>t.readOnly}"
                ?required="${t=>t.required}"
                size="${t=>t.size}"
                ?spellcheck="${t=>t.spellcheck}"
                :value="${t=>t.value}"
                type="${t=>t.type}"
                aria-atomic="${t=>t.ariaAtomic}"
                aria-busy="${t=>t.ariaBusy}"
                aria-controls="${t=>t.ariaControls}"
                aria-current="${t=>t.ariaCurrent}"
                aria-describedby="${t=>t.ariaDescribedby}"
                aria-details="${t=>t.ariaDetails}"
                aria-disabled="${t=>t.ariaDisabled}"
                aria-errormessage="${t=>t.ariaErrormessage}"
                aria-flowto="${t=>t.ariaFlowto}"
                aria-haspopup="${t=>t.ariaHaspopup}"
                aria-hidden="${t=>t.ariaHidden}"
                aria-invalid="${t=>t.ariaInvalid}"
                aria-keyshortcuts="${t=>t.ariaKeyshortcuts}"
                aria-label="${t=>t.ariaLabel}"
                aria-labelledby="${t=>t.ariaLabelledby}"
                aria-live="${t=>t.ariaLive}"
                aria-owns="${t=>t.ariaOwns}"
                aria-relevant="${t=>t.ariaRelevant}"
                aria-roledescription="${t=>t.ariaRoledescription}"
                ${K("control")}
            />
            ${ht(o,e)}
        </div>
    </template>
`,Ae="not-allowed",ha=":host([hidden]){display:none}";function Q(o){return`${ha}:host{display:${o}}`}const G=dc()?"focus-visible":"focus";function fa(o){return or.getOrCreate(o).withPrefix("vscode")}function ba(o){window.addEventListener("load",()=>{new MutationObserver(()=>{ci(o)}).observe(document.body,{attributes:!0,attributeFilter:["class"]}),ci(o)})}function ci(o){const e=getComputedStyle(document.body),t=document.querySelector("body");if(t){const n=t.getAttribute("data-vscode-theme-kind");for(const[i,r]of o){let s=e.getPropertyValue(i).toString();n==="vscode-high-contrast"?(s.length===0&&r.name.includes("background")&&(s="transparent"),r.name==="button-icon-hover-background"&&(s="transparent")):r.name==="contrast-active-border"&&(s="transparent"),r.setValueFor(t,s)}}}const ai=new Map;let li=!1;function p(o,e){const t=tr.create(o);if(e){if(e.includes("--fake-vscode-token")){const n="id"+Math.random().toString(16).slice(2);e=`${e}-${n}`}ai.set(e,t)}return li||(ba(ai),li=!0),t}const pa=p("background","--vscode-editor-background").withDefault("#1e1e1e"),T=p("border-width").withDefault(1),rr=p("contrast-active-border","--vscode-contrastActiveBorder").withDefault("#f38518");p("contrast-border","--vscode-contrastBorder").withDefault("#6fc3df");const ye=p("corner-radius").withDefault(0),x=p("design-unit").withDefault(4),We=p("disabled-opacity").withDefault(.4),O=p("focus-border","--vscode-focusBorder").withDefault("#007fd4"),de=p("font-family","--vscode-font-family").withDefault("-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol");p("font-weight","--vscode-font-weight").withDefault("400");const U=p("foreground","--vscode-foreground").withDefault("#cccccc"),so=p("input-height").withDefault("26"),Cn=p("input-min-width").withDefault("100px"),ee=p("type-ramp-base-font-size","--vscode-font-size").withDefault("13px"),ne=p("type-ramp-base-line-height").withDefault("normal"),sr=p("type-ramp-minus1-font-size").withDefault("11px"),cr=p("type-ramp-minus1-line-height").withDefault("16px");p("type-ramp-minus2-font-size").withDefault("9px");p("type-ramp-minus2-line-height").withDefault("16px");p("type-ramp-plus1-font-size").withDefault("16px");p("type-ramp-plus1-line-height").withDefault("24px");const ga=p("scrollbarWidth").withDefault("10px"),va=p("scrollbarHeight").withDefault("10px"),ma=p("scrollbar-slider-background","--vscode-scrollbarSlider-background").withDefault("#79797966"),ya=p("scrollbar-slider-hover-background","--vscode-scrollbarSlider-hoverBackground").withDefault("#646464b3"),xa=p("scrollbar-slider-active-background","--vscode-scrollbarSlider-activeBackground").withDefault("#bfbfbf66"),ar=p("badge-background","--vscode-badge-background").withDefault("#4d4d4d"),lr=p("badge-foreground","--vscode-badge-foreground").withDefault("#ffffff"),Sn=p("button-border","--vscode-button-border").withDefault("transparent"),di=p("button-icon-background").withDefault("transparent"),wa=p("button-icon-corner-radius").withDefault("5px"),ka=p("button-icon-outline-offset").withDefault(0),ui=p("button-icon-hover-background","--fake-vscode-token").withDefault("rgba(90, 93, 94, 0.31)"),$a=p("button-icon-padding").withDefault("3px"),it=p("button-primary-background","--vscode-button-background").withDefault("#0e639c"),dr=p("button-primary-foreground","--vscode-button-foreground").withDefault("#ffffff"),ur=p("button-primary-hover-background","--vscode-button-hoverBackground").withDefault("#1177bb"),qo=p("button-secondary-background","--vscode-button-secondaryBackground").withDefault("#3a3d41"),Ca=p("button-secondary-foreground","--vscode-button-secondaryForeground").withDefault("#ffffff"),Sa=p("button-secondary-hover-background","--vscode-button-secondaryHoverBackground").withDefault("#45494e"),Ia=p("button-padding-horizontal").withDefault("11px"),Ta=p("button-padding-vertical").withDefault("4px"),xe=p("checkbox-background","--vscode-checkbox-background").withDefault("#3c3c3c"),ot=p("checkbox-border","--vscode-checkbox-border").withDefault("#3c3c3c"),Ba=p("checkbox-corner-radius").withDefault(3);p("checkbox-foreground","--vscode-checkbox-foreground").withDefault("#f0f0f0");const Ee=p("list-active-selection-background","--vscode-list-activeSelectionBackground").withDefault("#094771"),rt=p("list-active-selection-foreground","--vscode-list-activeSelectionForeground").withDefault("#ffffff"),Aa=p("list-hover-background","--vscode-list-hoverBackground").withDefault("#2a2d2e"),Ra=p("divider-background","--vscode-settings-dropdownListBorder").withDefault("#454545"),eo=p("dropdown-background","--vscode-dropdown-background").withDefault("#3c3c3c"),Te=p("dropdown-border","--vscode-dropdown-border").withDefault("#3c3c3c");p("dropdown-foreground","--vscode-dropdown-foreground").withDefault("#f0f0f0");const Oa=p("dropdown-list-max-height").withDefault("200px"),De=p("input-background","--vscode-input-background").withDefault("#3c3c3c"),hr=p("input-foreground","--vscode-input-foreground").withDefault("#cccccc");p("input-placeholder-foreground","--vscode-input-placeholderForeground").withDefault("#cccccc");const hi=p("link-active-foreground","--vscode-textLink-activeForeground").withDefault("#3794ff"),_a=p("link-foreground","--vscode-textLink-foreground").withDefault("#3794ff"),Fa=p("progress-background","--vscode-progressBar-background").withDefault("#0e70c0"),Ea=p("panel-tab-active-border","--vscode-panelTitle-activeBorder").withDefault("#e7e7e7"),Ze=p("panel-tab-active-foreground","--vscode-panelTitle-activeForeground").withDefault("#e7e7e7"),Da=p("panel-tab-foreground","--vscode-panelTitle-inactiveForeground").withDefault("#e7e7e799");p("panel-view-background","--vscode-panel-background").withDefault("#1e1e1e");p("panel-view-border","--vscode-panel-border").withDefault("#80808059");const Pa=p("tag-corner-radius").withDefault("2px"),La=(o,e)=>D`
	${Q("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${de};
		font-size: ${sr};
		line-height: ${cr};
		text-align: center;
	}
	.control {
		align-items: center;
		background-color: ${ar};
		border: calc(${T} * 1px) solid ${Sn};
		border-radius: 11px;
		box-sizing: border-box;
		color: ${lr};
		display: flex;
		height: calc(${x} * 4px);
		justify-content: center;
		min-width: calc(${x} * 4px + 2px);
		min-height: calc(${x} * 4px + 2px);
		padding: 3px 6px;
	}
`;class Ha extends Wt{connectedCallback(){super.connectedCallback(),this.circular||(this.circular=!0)}}const Na=Ha.compose({baseName:"badge",template:Ji,styles:La}),Va=D`
	${Q("inline-flex")} :host {
		outline: none;
		font-family: ${de};
		font-size: ${ee};
		line-height: ${ne};
		color: ${dr};
		background: ${it};
		border-radius: calc(${ye} * 1px);
		fill: currentColor;
		cursor: pointer;
	}
	.control {
		background: transparent;
		height: inherit;
		flex-grow: 1;
		box-sizing: border-box;
		display: inline-flex;
		justify-content: center;
		align-items: center;
		padding: ${Ta} ${Ia};
		white-space: wrap;
		outline: none;
		text-decoration: none;
		border: calc(${T} * 1px) solid ${Sn};
		color: inherit;
		border-radius: inherit;
		fill: inherit;
		cursor: inherit;
		font-family: inherit;
		max-width: 300px;
	}
	:host(:hover) {
		background: ${ur};
	}
	:host(:active) {
		background: ${it};
	}
	.control:${G} {
		outline: calc(${T} * 1px) solid ${O};
		outline-offset: calc(${T} * 2px);
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host([disabled]) {
		opacity: ${We};
		background: ${it};
		cursor: ${Ae};
	}
	.content {
		display: flex;
	}
	.start {
		display: flex;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${x} * 4px);
		height: calc(${x} * 4px);
	}
	.start {
		margin-inline-end: 8px;
	}
`,Ma=D`
	:host([appearance='primary']) {
		background: ${it};
		color: ${dr};
	}
	:host([appearance='primary']:hover) {
		background: ${ur};
	}
	:host([appearance='primary']:active) .control:active {
		background: ${it};
	}
	:host([appearance='primary']) .control:${G} {
		outline: calc(${T} * 1px) solid ${O};
		outline-offset: calc(${T} * 2px);
	}
	:host([appearance='primary'][disabled]) {
		background: ${it};
	}
`,za=D`
	:host([appearance='secondary']) {
		background: ${qo};
		color: ${Ca};
	}
	:host([appearance='secondary']:hover) {
		background: ${Sa};
	}
	:host([appearance='secondary']:active) .control:active {
		background: ${qo};
	}
	:host([appearance='secondary']) .control:${G} {
		outline: calc(${T} * 1px) solid ${O};
		outline-offset: calc(${T} * 2px);
	}
	:host([appearance='secondary'][disabled]) {
		background: ${qo};
	}
`,ja=D`
	:host([appearance='icon']) {
		background: ${di};
		border-radius: ${wa};
		color: ${U};
	}
	:host([appearance='icon']:hover) {
		background: ${ui};
		outline: 1px dotted ${rr};
		outline-offset: -1px;
	}
	:host([appearance='icon']) .control {
		padding: ${$a};
		border: none;
	}
	:host([appearance='icon']:active) .control:active {
		background: ${ui};
	}
	:host([appearance='icon']) .control:${G} {
		outline: calc(${T} * 1px) solid ${O};
		outline-offset: ${ka};
	}
	:host([appearance='icon'][disabled]) {
		background: ${di};
	}
`,qa=(o,e)=>D`
	${Va}
	${Ma}
	${za}
	${ja}
`;class fr extends ge{connectedCallback(){if(super.connectedCallback(),!this.appearance){const e=this.getAttribute("appearance");this.appearance=e}}attributeChangedCallback(e,t,n){e==="appearance"&&n==="icon"&&(this.getAttribute("aria-label")||(this.ariaLabel="Icon Button")),e==="aria-label"&&(this.ariaLabel=n),e==="disabled"&&(this.disabled=n!==null)}}h([f],fr.prototype,"appearance",void 0);const Ua=fr.compose({baseName:"button",template:mc,styles:qa,shadowOptions:{delegatesFocus:!0}}),Ga=(o,e)=>D`
	${Q("inline-flex")} :host {
		align-items: center;
		outline: none;
		margin: calc(${x} * 1px) 0;
		user-select: none;
		font-size: ${ee};
		line-height: ${ne};
	}
	.control {
		position: relative;
		width: calc(${x} * 4px + 2px);
		height: calc(${x} * 4px + 2px);
		box-sizing: border-box;
		border-radius: calc(${Ba} * 1px);
		border: calc(${T} * 1px) solid ${ot};
		background: ${xe};
		outline: none;
		cursor: pointer;
	}
	.label {
		font-family: ${de};
		color: ${U};
		padding-inline-start: calc(${x} * 2px + 2px);
		margin-inline-end: calc(${x} * 2px + 2px);
		cursor: pointer;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.checked-indicator {
		width: 100%;
		height: 100%;
		display: block;
		fill: ${U};
		opacity: 0;
		pointer-events: none;
	}
	.indeterminate-indicator {
		border-radius: 2px;
		background: ${U};
		position: absolute;
		top: 50%;
		left: 50%;
		width: 50%;
		height: 50%;
		transform: translate(-50%, -50%);
		opacity: 0;
	}
	:host(:enabled) .control:hover {
		background: ${xe};
		border-color: ${ot};
	}
	:host(:enabled) .control:active {
		background: ${xe};
		border-color: ${O};
	}
	:host(:${G}) .control {
		border: calc(${T} * 1px) solid ${O};
	}
	:host(.disabled) .label,
	:host(.readonly) .label,
	:host(.readonly) .control,
	:host(.disabled) .control {
		cursor: ${Ae};
	}
	:host(.checked:not(.indeterminate)) .checked-indicator,
	:host(.indeterminate) .indeterminate-indicator {
		opacity: 1;
	}
	:host(.disabled) {
		opacity: ${We};
	}
`;class Wa extends To{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Checkbox")}}const Qa=Wa.compose({baseName:"checkbox",template:Ac,styles:Ga,checkedIndicator:`
		<svg 
			part="checked-indicator"
			class="checked-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M14.431 3.323l-8.47 10-.79-.036-3.35-4.77.818-.574 2.978 4.24 8.051-9.506.764.646z"
			/>
		</svg>
	`,indeterminateIndicator:`
		<div part="indeterminate-indicator" class="indeterminate-indicator"></div>
	`}),Xa=(o,e)=>D`
	:host {
		display: flex;
		position: relative;
		flex-direction: column;
		width: 100%;
	}
`,Ya=(o,e)=>D`
	:host {
		display: grid;
		padding: calc((${x} / 4) * 1px) 0;
		box-sizing: border-box;
		width: 100%;
		background: transparent;
	}
	:host(.header) {
	}
	:host(.sticky-header) {
		background: ${pa};
		position: sticky;
		top: 0;
	}
	:host(:hover) {
		background: ${Aa};
		outline: 1px dotted ${rr};
		outline-offset: -1px;
	}
`,Ja=(o,e)=>D`
	:host {
		padding: calc(${x} * 1px) calc(${x} * 3px);
		color: ${U};
		opacity: 1;
		box-sizing: border-box;
		font-family: ${de};
		font-size: ${ee};
		line-height: ${ne};
		font-weight: 400;
		border: solid calc(${T} * 1px) transparent;
		border-radius: calc(${ye} * 1px);
		white-space: wrap;
		overflow-wrap: anywhere;
	}
	:host(.column-header) {
		font-weight: 600;
		overflow-wrap: normal;
	}
	:host(:${G}),
	:host(:focus),
	:host(:active) {
		background: ${Ee};
		border: solid calc(${T} * 1px) ${O};
		color: ${rt};
		outline: none;
	}
	:host(:${G}) ::slotted(*),
	:host(:focus) ::slotted(*),
	:host(:active) ::slotted(*) {
		color: ${rt} !important;
	}
`;class Za extends H{connectedCallback(){super.connectedCallback(),this.getAttribute("aria-label")||this.setAttribute("aria-label","Data Grid")}}const Ka=Za.compose({baseName:"data-grid",baseClass:H,template:kc,styles:Xa});class el extends W{}const tl=el.compose({baseName:"data-grid-row",baseClass:W,template:Tc,styles:Ya});class ol extends Re{}const nl=ol.compose({baseName:"data-grid-cell",baseClass:Re,template:Bc,styles:Ja}),il=(o,e)=>D`
	${Q("block")} :host {
		border: none;
		border-top: calc(${T} * 1px) solid ${Ra};
		box-sizing: content-box;
		height: 0;
		margin: calc(${x} * 1px) 0;
		width: 100%;
	}
`;class rl extends wn{}const sl=rl.compose({baseName:"divider",template:Uc,styles:il}),cl=(o,e)=>D`
	${Q("inline-flex")} :host {
		background: ${eo};
		box-sizing: border-box;
		color: ${U};
		contain: contents;
		font-family: ${de};
		height: calc(${so} * 1px);
		position: relative;
		user-select: none;
		min-width: ${Cn};
		outline: none;
		vertical-align: top;
	}
	.control {
		align-items: center;
		box-sizing: border-box;
		border: calc(${T} * 1px) solid ${Te};
		border-radius: calc(${ye} * 1px);
		cursor: pointer;
		display: flex;
		font-family: inherit;
		font-size: ${ee};
		line-height: ${ne};
		min-height: 100%;
		padding: 2px 6px 2px 8px;
		width: 100%;
	}
	.listbox {
		background: ${eo};
		border: calc(${T} * 1px) solid ${O};
		border-radius: calc(${ye} * 1px);
		box-sizing: border-box;
		display: inline-flex;
		flex-direction: column;
		left: 0;
		max-height: ${Oa};
		padding: 0 0 calc(${x} * 1px) 0;
		overflow-y: auto;
		position: absolute;
		width: 100%;
		z-index: 1;
	}
	.listbox[hidden] {
		display: none;
	}
	:host(:${G}) .control {
		border-color: ${O};
	}
	:host(:not([disabled]):hover) {
		background: ${eo};
		border-color: ${Te};
	}
	:host(:${G}) ::slotted([aria-selected="true"][role="option"]:not([disabled])) {
		background: ${Ee};
		border: calc(${T} * 1px) solid ${O};
		color: ${rt};
	}
	:host([disabled]) {
		cursor: ${Ae};
		opacity: ${We};
	}
	:host([disabled]) .control {
		cursor: ${Ae};
		user-select: none;
	}
	:host([disabled]:hover) {
		background: ${eo};
		color: ${U};
		fill: currentcolor;
	}
	:host(:not([disabled])) .control:active {
		border-color: ${O};
	}
	:host(:empty) .listbox {
		display: none;
	}
	:host([open]) .control {
		border-color: ${O};
	}
	:host([open][position='above']) .listbox,
	:host([open][position='below']) .control {
		border-bottom-left-radius: 0;
		border-bottom-right-radius: 0;
	}
	:host([open][position='above']) .control,
	:host([open][position='below']) .listbox {
		border-top-left-radius: 0;
		border-top-right-radius: 0;
	}
	:host([open][position='above']) .listbox {
		bottom: calc(${so} * 1px);
	}
	:host([open][position='below']) .listbox {
		top: calc(${so} * 1px);
	}
	.selected-value {
		flex: 1 1 auto;
		font-family: inherit;
		overflow: hidden;
		text-align: start;
		text-overflow: ellipsis;
		white-space: nowrap;
	}
	.indicator {
		flex: 0 0 auto;
		margin-inline-start: 1em;
	}
	slot[name='listbox'] {
		display: none;
		width: 100%;
	}
	:host([open]) slot[name='listbox'] {
		display: flex;
		position: absolute;
	}
	.end {
		margin-inline-start: auto;
	}
	.start,
	.end,
	.indicator,
	.select-indicator,
	::slotted(svg),
	::slotted(span) {
		fill: currentcolor;
		height: 1em;
		min-height: calc(${x} * 4px);
		min-width: calc(${x} * 4px);
		width: 1em;
	}
	::slotted([role='option']),
	::slotted(option) {
		flex: 0 0 auto;
	}
`;class al extends _e{}const ll=al.compose({baseName:"dropdown",template:na,styles:cl,indicator:`
		<svg 
			class="select-indicator"
			part="select-indicator"
			width="16" 
			height="16" 
			viewBox="0 0 16 16" 
			xmlns="http://www.w3.org/2000/svg" 
			fill="currentColor"
		>
			<path 
				fill-rule="evenodd" 
				clip-rule="evenodd" 
				d="M7.976 10.072l4.357-4.357.62.618L8.284 11h-.618L3 6.333l.619-.618 4.357 4.357z"
			/>
		</svg>
	`}),dl=(o,e)=>D`
	${Q("inline-flex")} :host {
		background: transparent;
		box-sizing: border-box;
		color: ${_a};
		cursor: pointer;
		fill: currentcolor;
		font-family: ${de};
		font-size: ${ee};
		line-height: ${ne};
		outline: none;
	}
	.control {
		background: transparent;
		border: calc(${T} * 1px) solid transparent;
		border-radius: calc(${ye} * 1px);
		box-sizing: border-box;
		color: inherit;
		cursor: inherit;
		fill: inherit;
		font-family: inherit;
		height: inherit;
		padding: 0;
		outline: none;
		text-decoration: none;
		white-space: nowrap;
	}
	.control::-moz-focus-inner {
		border: 0;
	}
	:host(:hover) {
		color: ${hi};
	}
	:host(:hover) .content {
		text-decoration: underline;
	}
	:host(:active) {
		background: transparent;
		color: ${hi};
	}
	:host(:${G}) .control {
		border: calc(${T} * 1px) solid ${O};
	}
`;class ul extends pe{}const hl=ul.compose({baseName:"link",template:gc,styles:dl,shadowOptions:{delegatesFocus:!0}}),fl=(o,e)=>D`
	${Q("inline-flex")} :host {
		font-family: var(--body-font);
		border-radius: ${ye};
		border: calc(${T} * 1px) solid transparent;
		box-sizing: border-box;
		color: ${U};
		cursor: pointer;
		fill: currentcolor;
		font-size: ${ee};
		line-height: ${ne};
		margin: 0;
		outline: none;
		overflow: hidden;
		padding: 0 calc((${x} / 2) * 1px)
			calc((${x} / 4) * 1px);
		user-select: none;
		white-space: nowrap;
	}
	:host(:${G}) {
		border-color: ${O};
		background: ${Ee};
		color: ${U};
	}
	:host([aria-selected='true']) {
		background: ${Ee};
		border: calc(${T} * 1px) solid ${O};
		color: ${rt};
	}
	:host(:active) {
		background: ${Ee};
		color: ${rt};
	}
	:host(:not([aria-selected='true']):hover) {
		background: ${Ee};
		border: calc(${T} * 1px) solid ${O};
		color: ${rt};
	}
	:host(:not([aria-selected='true']):active) {
		background: ${Ee};
		color: ${U};
	}
	:host([disabled]) {
		cursor: ${Ae};
		opacity: ${We};
	}
	:host([disabled]:hover) {
		background-color: inherit;
	}
	.content {
		grid-column-start: 2;
		justify-self: start;
		overflow: hidden;
		text-overflow: ellipsis;
	}
`;class bl extends Se{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Option")}}const pl=bl.compose({baseName:"option",template:Gc,styles:fl}),gl=(o,e)=>D`
	${Q("grid")} :host {
		box-sizing: border-box;
		font-family: ${de};
		font-size: ${ee};
		line-height: ${ne};
		color: ${U};
		grid-template-columns: auto 1fr auto;
		grid-template-rows: auto 1fr;
		overflow-x: auto;
	}
	.tablist {
		display: grid;
		grid-template-rows: auto auto;
		grid-template-columns: auto;
		column-gap: calc(${x} * 8px);
		position: relative;
		width: max-content;
		align-self: end;
		padding: calc(${x} * 1px) calc(${x} * 1px) 0;
		box-sizing: border-box;
	}
	.start,
	.end {
		align-self: center;
	}
	.activeIndicator {
		grid-row: 2;
		grid-column: 1;
		width: 100%;
		height: calc((${x} / 4) * 1px);
		justify-self: center;
		background: ${Ze};
		margin: 0;
		border-radius: calc(${ye} * 1px);
	}
	.activeIndicatorTransition {
		transition: transform 0.01s linear;
	}
	.tabpanel {
		grid-row: 2;
		grid-column-start: 1;
		grid-column-end: 4;
		position: relative;
	}
`,vl=(o,e)=>D`
	${Q("inline-flex")} :host {
		box-sizing: border-box;
		font-family: ${de};
		font-size: ${ee};
		line-height: ${ne};
		height: calc(${x} * 7px);
		padding: calc(${x} * 1px) 0;
		color: ${Da};
		fill: currentcolor;
		border-radius: calc(${ye} * 1px);
		border: solid calc(${T} * 1px) transparent;
		align-items: center;
		justify-content: center;
		grid-row: 1;
		cursor: pointer;
	}
	:host(:hover) {
		color: ${Ze};
		fill: currentcolor;
	}
	:host(:active) {
		color: ${Ze};
		fill: currentcolor;
	}
	:host([aria-selected='true']) {
		background: transparent;
		color: ${Ze};
		fill: currentcolor;
	}
	:host([aria-selected='true']:hover) {
		background: transparent;
		color: ${Ze};
		fill: currentcolor;
	}
	:host([aria-selected='true']:active) {
		background: transparent;
		color: ${Ze};
		fill: currentcolor;
	}
	:host(:${G}) {
		outline: none;
		border: solid calc(${T} * 1px) ${Ea};
	}
	:host(:focus) {
		outline: none;
	}
	::slotted(vscode-badge) {
		margin-inline-start: calc(${x} * 2px);
	}
`,ml=(o,e)=>D`
	${Q("flex")} :host {
		color: inherit;
		background-color: transparent;
		border: solid calc(${T} * 1px) transparent;
		box-sizing: border-box;
		font-size: ${ee};
		line-height: ${ne};
		padding: 10px calc((${x} + 2) * 1px);
	}
`;class yl extends Ie{connectedCallback(){super.connectedCallback(),this.orientation&&(this.orientation=Vt.horizontal),this.getAttribute("aria-label")||this.setAttribute("aria-label","Panels")}}const xl=yl.compose({baseName:"panels",template:ca,styles:gl});class wl extends ir{connectedCallback(){super.connectedCallback(),this.disabled&&(this.disabled=!1),this.textContent&&this.setAttribute("aria-label",this.textContent)}}const kl=wl.compose({baseName:"panel-tab",template:sa,styles:vl});class $l extends ra{}const Cl=$l.compose({baseName:"panel-view",template:ia,styles:ml}),Sl=(o,e)=>D`
	${Q("flex")} :host {
		align-items: center;
		outline: none;
		height: calc(${x} * 7px);
		width: calc(${x} * 7px);
		margin: 0;
	}
	.progress {
		height: 100%;
		width: 100%;
	}
	.background {
		fill: none;
		stroke: transparent;
		stroke-width: calc(${x} / 2 * 1px);
	}
	.indeterminate-indicator-1 {
		fill: none;
		stroke: ${Fa};
		stroke-width: calc(${x} / 2 * 1px);
		stroke-linecap: square;
		transform-origin: 50% 50%;
		transform: rotate(-90deg);
		transition: all 0.2s ease-in-out;
		animation: spin-infinite 2s linear infinite;
	}
	@keyframes spin-infinite {
		0% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(0deg);
		}
		50% {
			stroke-dasharray: 21.99px 21.99px;
			transform: rotate(450deg);
		}
		100% {
			stroke-dasharray: 0.01px 43.97px;
			transform: rotate(1080deg);
		}
	}
`;class Il extends yt{connectedCallback(){super.connectedCallback(),this.paused&&(this.paused=!1),this.setAttribute("aria-label","Loading"),this.setAttribute("aria-live","assertive"),this.setAttribute("role","alert")}attributeChangedCallback(e,t,n){e==="value"&&this.removeAttribute("value")}}const Tl=Il.compose({baseName:"progress-ring",template:Xc,styles:Sl,indeterminateIndicator:`
		<svg class="progress" part="progress" viewBox="0 0 16 16">
			<circle
				class="background"
				part="background"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
			<circle
				class="indeterminate-indicator-1"
				part="indeterminate-indicator-1"
				cx="8px"
				cy="8px"
				r="7px"
			></circle>
		</svg>
	`}),Bl=(o,e)=>D`
	${Q("flex")} :host {
		align-items: flex-start;
		margin: calc(${x} * 1px) 0;
		flex-direction: column;
	}
	.positioning-region {
		display: flex;
		flex-wrap: wrap;
	}
	:host([orientation='vertical']) .positioning-region {
		flex-direction: column;
	}
	:host([orientation='horizontal']) .positioning-region {
		flex-direction: row;
	}
	::slotted([slot='label']) {
		color: ${U};
		font-size: ${ee};
		margin: calc(${x} * 1px) 0;
	}
`;class Al extends Oe{connectedCallback(){super.connectedCallback();const e=this.querySelector("label");if(e){const t="radio-group-"+Math.random().toString(16).slice(2);e.setAttribute("id",t),this.setAttribute("aria-labelledby",t)}}}const Rl=Al.compose({baseName:"radio-group",template:Yc,styles:Bl}),Ol=(o,e)=>D`
	${Q("inline-flex")} :host {
		align-items: center;
		flex-direction: row;
		font-size: ${ee};
		line-height: ${ne};
		margin: calc(${x} * 1px) 0;
		outline: none;
		position: relative;
		transition: all 0.2s ease-in-out;
		user-select: none;
	}
	.control {
		background: ${xe};
		border-radius: 999px;
		border: calc(${T} * 1px) solid ${ot};
		box-sizing: border-box;
		cursor: pointer;
		height: calc(${x} * 4px);
		position: relative;
		outline: none;
		width: calc(${x} * 4px);
	}
	.label {
		color: ${U};
		cursor: pointer;
		font-family: ${de};
		margin-inline-end: calc(${x} * 2px + 2px);
		padding-inline-start: calc(${x} * 2px + 2px);
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.control,
	.checked-indicator {
		flex-shrink: 0;
	}
	.checked-indicator {
		background: ${U};
		border-radius: 999px;
		display: inline-block;
		inset: calc(${x} * 1px);
		opacity: 0;
		pointer-events: none;
		position: absolute;
	}
	:host(:not([disabled])) .control:hover {
		background: ${xe};
		border-color: ${ot};
	}
	:host(:not([disabled])) .control:active {
		background: ${xe};
		border-color: ${O};
	}
	:host(:${G}) .control {
		border: calc(${T} * 1px) solid ${O};
	}
	:host([aria-checked='true']) .control {
		background: ${xe};
		border: calc(${T} * 1px) solid ${ot};
	}
	:host([aria-checked='true']:not([disabled])) .control:hover {
		background: ${xe};
		border: calc(${T} * 1px) solid ${ot};
	}
	:host([aria-checked='true']:not([disabled])) .control:active {
		background: ${xe};
		border: calc(${T} * 1px) solid ${O};
	}
	:host([aria-checked="true"]:${G}:not([disabled])) .control {
		border: calc(${T} * 1px) solid ${O};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ae};
	}
	:host([aria-checked='true']) .checked-indicator {
		opacity: 1;
	}
	:host([disabled]) {
		opacity: ${We};
	}
`;class _l extends Ao{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Radio")}}const Fl=_l.compose({baseName:"radio",template:Jc,styles:Ol,checkedIndicator:`
		<div part="checked-indicator" class="checked-indicator"></div>
	`}),El=(o,e)=>D`
	${Q("inline-block")} :host {
		box-sizing: border-box;
		font-family: ${de};
		font-size: ${sr};
		line-height: ${cr};
	}
	.control {
		background-color: ${ar};
		border: calc(${T} * 1px) solid ${Sn};
		border-radius: ${Pa};
		color: ${lr};
		padding: calc(${x} * 0.5px) calc(${x} * 1px);
		text-transform: uppercase;
	}
`;class Dl extends Wt{connectedCallback(){super.connectedCallback(),this.circular&&(this.circular=!1)}}const Pl=Dl.compose({baseName:"tag",template:Ji,styles:El}),Ll=(o,e)=>D`
	${Q("inline-block")} :host {
		font-family: ${de};
		outline: none;
		user-select: none;
	}
	.control {
		box-sizing: border-box;
		position: relative;
		color: ${hr};
		background: ${De};
		border-radius: calc(${ye} * 1px);
		border: calc(${T} * 1px) solid ${Te};
		font: inherit;
		font-size: ${ee};
		line-height: ${ne};
		padding: calc(${x} * 2px + 1px);
		width: 100%;
		min-width: ${Cn};
		resize: none;
	}
	.control:hover:enabled {
		background: ${De};
		border-color: ${Te};
	}
	.control:active:enabled {
		background: ${De};
		border-color: ${O};
	}
	.control:hover,
	.control:${G},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.control::-webkit-scrollbar {
		width: ${ga};
		height: ${va};
	}
	.control::-webkit-scrollbar-corner {
		background: ${De};
	}
	.control::-webkit-scrollbar-thumb {
		background: ${ma};
	}
	.control::-webkit-scrollbar-thumb:hover {
		background: ${ya};
	}
	.control::-webkit-scrollbar-thumb:active {
		background: ${xa};
	}
	:host(:focus-within:not([disabled])) .control {
		border-color: ${O};
	}
	:host([resize='both']) .control {
		resize: both;
	}
	:host([resize='horizontal']) .control {
		resize: horizontal;
	}
	:host([resize='vertical']) .control {
		resize: vertical;
	}
	.label {
		display: block;
		color: ${U};
		cursor: pointer;
		font-size: ${ee};
		line-height: ${ne};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ae};
	}
	:host([disabled]) {
		opacity: ${We};
	}
	:host([disabled]) .control {
		border-color: ${Te};
	}
`;class Hl extends te{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text area")}}const Nl=Hl.compose({baseName:"text-area",template:da,styles:Ll,shadowOptions:{delegatesFocus:!0}}),Vl=(o,e)=>D`
	${Q("inline-block")} :host {
		font-family: ${de};
		outline: none;
		user-select: none;
	}
	.root {
		box-sizing: border-box;
		position: relative;
		display: flex;
		flex-direction: row;
		color: ${hr};
		background: ${De};
		border-radius: calc(${ye} * 1px);
		border: calc(${T} * 1px) solid ${Te};
		height: calc(${so} * 1px);
		min-width: ${Cn};
	}
	.control {
		-webkit-appearance: none;
		font: inherit;
		background: transparent;
		border: 0;
		color: inherit;
		height: calc(100% - (${x} * 1px));
		width: 100%;
		margin-top: auto;
		margin-bottom: auto;
		border: none;
		padding: 0 calc(${x} * 2px + 1px);
		font-size: ${ee};
		line-height: ${ne};
	}
	.control:hover,
	.control:${G},
	.control:disabled,
	.control:active {
		outline: none;
	}
	.label {
		display: block;
		color: ${U};
		cursor: pointer;
		font-size: ${ee};
		line-height: ${ne};
		margin-bottom: 2px;
	}
	.label__hidden {
		display: none;
		visibility: hidden;
	}
	.start,
	.end {
		display: flex;
		margin: auto;
		fill: currentcolor;
	}
	::slotted(svg),
	::slotted(span) {
		width: calc(${x} * 4px);
		height: calc(${x} * 4px);
	}
	.start {
		margin-inline-start: calc(${x} * 2px);
	}
	.end {
		margin-inline-end: calc(${x} * 2px);
	}
	:host(:hover:not([disabled])) .root {
		background: ${De};
		border-color: ${Te};
	}
	:host(:active:not([disabled])) .root {
		background: ${De};
		border-color: ${O};
	}
	:host(:focus-within:not([disabled])) .root {
		border-color: ${O};
	}
	:host([disabled]) .label,
	:host([readonly]) .label,
	:host([readonly]) .control,
	:host([disabled]) .control {
		cursor: ${Ae};
	}
	:host([disabled]) {
		opacity: ${We};
	}
	:host([disabled]) .control {
		border-color: ${Te};
	}
`;class Ml extends ce{connectedCallback(){super.connectedCallback(),this.textContent?this.setAttribute("aria-label",this.textContent):this.setAttribute("aria-label","Text field")}}const zl=Ml.compose({baseName:"text-field",template:ua,styles:Vl,shadowOptions:{delegatesFocus:!0}}),jl={vsCodeBadge:Na,vsCodeButton:Ua,vsCodeCheckbox:Qa,vsCodeDataGrid:Ka,vsCodeDataGridCell:nl,vsCodeDataGridRow:tl,vsCodeDivider:sl,vsCodeDropdown:ll,vsCodeLink:hl,vsCodeOption:pl,vsCodePanels:xl,vsCodePanelTab:kl,vsCodePanelView:Cl,vsCodeProgressRing:Tl,vsCodeRadioGroup:Rl,vsCodeRadio:Fl,vsCodeTag:Pl,vsCodeTextArea:Nl,vsCodeTextField:zl,register(o,...e){if(!!o)for(const t in this)t!=="register"&&this[t]().register(o,...e)}};class ql{constructor(){typeof acquireVsCodeApi=="function"&&(this.vsCodeApi=acquireVsCodeApi())}postMessage(e){this.vsCodeApi?this.vsCodeApi.postMessage(e):console.log(e)}getState(){if(this.vsCodeApi)return this.vsCodeApi.getState();{const e=localStorage.getItem("vscodeState");return e?JSON.parse(e):void 0}}setState(e){return this.vsCodeApi?this.vsCodeApi.setState(e):(localStorage.setItem("vscodeState",JSON.stringify(e)),e)}}const go=new ql,br=Symbol("store-raw"),vo=Symbol("store-node"),Ul=Symbol("store-name");function pr(o,e){let t=o[Ne];if(!t){Object.defineProperty(o,Ne,{value:t=new Proxy(o,Ql)});const n=Object.keys(o),i=Object.getOwnPropertyDescriptors(o);for(let r=0,s=n.length;r<s;r++){const c=n[r];if(i[c].get){const a=i[c].get.bind(t);Object.defineProperty(o,c,{get:a})}}}return t}function mo(o){return o!=null&&typeof o=="object"&&(o[Ne]||!o.__proto__||o.__proto__===Object.prototype||Array.isArray(o))}function Ve(o,e=new Set){let t,n,i,r;if(t=o!=null&&o[br])return t;if(!mo(o)||e.has(o))return o;if(Array.isArray(o)){Object.isFrozen(o)?o=o.slice(0):e.add(o);for(let s=0,c=o.length;s<c;s++)i=o[s],(n=Ve(i,e))!==i&&(o[s]=n)}else{Object.isFrozen(o)?o=Object.assign({},o):e.add(o);const s=Object.keys(o),c=Object.getOwnPropertyDescriptors(o);for(let a=0,l=s.length;a<l;a++)r=s[a],!c[r].get&&(i=o[r],(n=Ve(i,e))!==i&&(o[r]=n))}return o}function yo(o){let e=o[vo];return e||Object.defineProperty(o,vo,{value:e={}}),e}function Gl(o,e){const t=Reflect.getOwnPropertyDescriptor(o,e);return!t||t.get||!t.configurable||e===Ne||e===vo||e===Ul||(delete t.value,delete t.writable,t.get=()=>o[Ne][e]),t}function Wl(o){if(ki()){const e=yo(o);(e._||(e._=rn()))()}return Reflect.ownKeys(o)}function rn(){const[o,e]=je(void 0,{equals:!1,internal:!0});return o.$=e,o}const Ql={get(o,e,t){if(e===br)return o;if(e===Ne)return t;const n=o[e];if(e===vo||e==="__proto__")return n;const i=mo(n);if(ki()&&(typeof n!="function"||o.hasOwnProperty(e))){let r,s;i&&(r=yo(n))&&(s=r._||(r._=rn()),s()),r=yo(o),s=r[e]||(r[e]=rn()),s()}return i?pr(n):n},set(){return!0},deleteProperty(){return!0},ownKeys:Wl,getOwnPropertyDescriptor:Gl};function gr(o,e,t){if(o[e]===t)return;const n=Array.isArray(o),i=o.length,r=t===void 0,s=n||r===e in o;r?delete o[e]:o[e]=t;let c=yo(o),a;(a=c[e])&&a.$(),n&&o.length!==i&&(a=c.length)&&a.$(),s&&(a=c._)&&a.$()}function Xl(o,e){const t=Object.keys(e);for(let n=0;n<t.length;n+=1){const i=t[n];gr(o,i,e[i])}}function St(o,e,t=[]){let n,i=o;if(e.length>1){n=e.shift();const s=typeof n,c=Array.isArray(o);if(Array.isArray(n)){for(let a=0;a<n.length;a++)St(o,[n[a]].concat(e),t);return}else if(c&&s==="function"){for(let a=0;a<o.length;a++)n(o[a],a)&&St(o,[a].concat(e),t);return}else if(c&&s==="object"){const{from:a=0,to:l=o.length-1,by:d=1}=n;for(let u=a;u<=l;u+=d)St(o,[u].concat(e),t);return}else if(e.length>1){St(o[n],e,[n].concat(t));return}i=o[n],t=[n].concat(t)}let r=e[0];typeof r=="function"&&(r=r(i,t),r===i)||n===void 0&&r==null||(r=Ve(r),n===void 0||mo(i)&&mo(r)&&!Array.isArray(r)?Xl(i,r):gr(o,n,r))}function In(o,e){const t=Ve(o||{}),n=pr(t);function i(...r){xi(()=>St(t,r))}return[n,i]}function xo(o){const e=document.getElementById("debug");e&&(e.innerHTML=`${e.innerHTML}
${o}`,e.scrollTop=e.scrollHeight)}function Yl(){const o={clusterInfo:{contextName:"kind-context",clusterName:"kind-cluster",clusterProvider:"Azure Arc",isClusterProviderUserOverride:!1,isAzure:!0},gitInfo:{name:"debug-standalone",url:"ssh://git@github.com/juozasg/pooodinfo.git",branch:"master"},namespaces:["default","flux-system","foobar"],sources:["podinfo","podinfo2","podinfo11"],selectSourceTab:!1,selectedSource:"podinfo2"};setTimeout(()=>{for(const[e,t]of Object.entries(o))vr(e,t)},100)}const[z,vr]=In({});function Jl(o){for(const[e,t]of Object.entries(o))vr(e,t);xo("params set:"),xo(JSON.stringify(z))}const[$e,fi]=je(!0),[Qe,Tn]=je(""),[$,R]=In({kind:"GitRepository",name:"podinfo",namespace:"flux-system",gitUrl:"https://github.com/stefanprodan/podinfo1",helmUrl:"https://stefanprodan.github.io/podinfo",ociUrl:"oci://ghcr.io/stefanprodan/manifests/podinfo",bucketEndpoint:"minio.minio.svc.cluster.local:9000",bucketName:"podinfo",bucketAccessKey:"",bucketSecretKey:"",bucketSecretRef:"",gitRef:"master",gitRefType:"branch",helmPassCredentials:!1,ociRef:"latest",ociRefType:"tag",ociProvider:"generic",interval:"1m0s",timeout:"5m0s",createFluxConfig:!0,azureScope:"cluster",insecure:!1,passCredentials:!1,username:"",password:"",secretRef:"",serviceAccount:"",caFile:"",certFile:"",certRef:"",privateKeyFile:"",keyFile:"",recurseSubmodules:!1}),[Mt,Zl]=je(!0),[Ot,Pe]=In({name:"podinfo",namespace:"flux-system",path:"/kustomize",targetNamespace:"default",dependsOn:"",prune:!0});function Uo(o,e){e&&R(o,e)}qe(()=>{Uo("name",z.gitInfo?.name),Uo("gitUrl",z.gitInfo?.url),Uo("gitRef",z.gitInfo?.branch),z.selectedSource&&z.selectedSource!==""&&Tn(z.selectedSource)});function Kl(){const o=Ve($);switch(o.kind){case"GitRepository":o[o.gitRefType]=o.gitRef;break;case"OCIRepository":o[o.ociRefType]=o.ociRef;break}for(const e in o)o[e]===""&&delete o[e];return o}function bi(){const o={};return $e()?o.source=Kl():o.selectedSource=Qe(),Mt()&&(o.kustomization=Ve(Ot)),o.clusterInfo=Ve(z).clusterInfo,o}function Me(o,e){o.addEventListener("change",t=>{e()(o.currentValue)})}function zt(o,e){o.addEventListener("change",t=>{e()(o.checked)})}function ed(o,e){const[t,n]=e();qe(()=>o.currentValue=t()),o.addEventListener("change",i=>n(o.currentValue))}function j(o,e){const[t,n,i]=e();qe(()=>o.value=t[i]),o.addEventListener("input",r=>n(i,o.value))}const td=C("<vscode-checkbox>Create a <code>Kustomization</code></vscode-checkbox>"),od=C("<div><label><code>Kustomization</code> Name</label><input></div>"),nd=C('<div><label>Namespace</label><div><vscode-dropdown class="medium"></vscode-dropdown></div></div>'),id=C(`<div><label>File path in <code>GitRepository</code> '<!>'</label><input class="long"></div>`),rd=C('<div><label>Target Namespace</label><div><vscode-dropdown class="medium" style="margin-bottom: 0.5rem"></vscode-dropdown><div><i>Namespace for objects reconciled by the <code>Kustomization</code></i></div></div></div>'),sd=C('<div style="margin-top: 1.5rem"><label>Depends on <code>Kustomizations</code></label><input class="long"></div>'),cd=C("<div><vscode-checkbox checked>Prune (remove stale resources)</vscode-checkbox></div>"),ad=C('<div><h2>Create Kustomization <a href="https://fluxcd.io/flux/components/kustomize/kustomization/"><span class="codicon codicon-question"></span></a></h2><div style="margin-top: 1rem; margin-bottom: 2rem"></div></div>'),pi=C("<vscode-option></vscode-option>");let Go,Wo,Qo;const ld=o=>Pe("namespace",o),dd=o=>{o==="<unset>"?Pe("targetNamespace",""):Pe("targetNamespace",o)};function ud(){const o=()=>$e()?$.name:Qe(),e=()=>z.clusterInfo?.isAzure&&(!$e()||$.createFluxConfig);ke(()=>Qo.checked=Mt()),ke(()=>Go.currentValue=$.namespace),ke(()=>{e||(Wo.currentValue="default")});const t=()=>[...z.namespaces?.values()||[],"<unset>"];return(()=>{const n=ad.cloneNode(!0),i=n.firstChild,r=i.nextSibling;return y(r,k(se,{get when(){return $e()},get children(){const s=td.cloneNode(!0);zt(s,()=>Zl);const c=Qo;return typeof c=="function"?c(s):Qo=s,s._$owner=v(),s}})),y(n,k(se,{get when(){return Mt()},get children(){return[(()=>{const s=od.cloneNode(!0),c=s.firstChild,a=c.nextSibling;return j(a,()=>[Ot,Pe,"name"]),s})(),k(se,{get when(){return!e()},get children(){const s=nd.cloneNode(!0),c=s.firstChild,a=c.nextSibling,l=a.firstChild;Me(l,()=>ld);const d=Go;return typeof d=="function"?d(l):Go=l,l._$owner=v(),y(l,k(Ft,{get each(){return z.namespaces},children:(u,b)=>(()=>{const m=pi.cloneNode(!0);return m._$owner=v(),y(m,u),m})()})),s}}),(()=>{const s=id.cloneNode(!0),c=s.firstChild,a=c.firstChild,l=a.nextSibling,d=l.nextSibling,u=d.nextSibling;u.nextSibling;const b=c.nextSibling;return y(c,o,u),j(b,()=>[Ot,Pe,"path"]),s})(),k(se,{get when(){return!e()},get children(){const s=rd.cloneNode(!0),c=s.firstChild,a=c.nextSibling,l=a.firstChild;Me(l,()=>dd);const d=Wo;return typeof d=="function"?d(l):Wo=l,l._$owner=v(),y(l,k(Ft,{get each(){return t()},children:(u,b)=>(()=>{const m=pi.cloneNode(!0);return m._$owner=v(),y(m,u),m})()})),s}}),(()=>{const s=sd.cloneNode(!0),c=s.firstChild,a=c.nextSibling;return j(a,()=>[Ot,Pe,"dependsOn"]),s})(),(()=>{const s=cd.cloneNode(!0),c=s.firstChild;return zt(c,()=>a=>Pe("prune",a)),c._$owner=v(),s})()]}}),null),n})()}const mr=o=>{let e;const t=_r({class:"",as:"div",value:!1},o);ke(()=>{t.value||(e.style.overflow="hidden",e.style.height="0px",e.style.display="none"),e.style.margin="0px",e.style.padding="0px",e.style.border="0px"}),qe(i=>{const r=t.value;return Ue(()=>{if(i!==r){let s,c;const a=l=>{if(typeof c>"u")return c=l,r?(e.style.height="0px",requestAnimationFrame(a)):(e.style.height=`${e.scrollHeight}px`,requestAnimationFrame(a));typeof c=="number"&&(r?(e.style.display="block",e.style.height=`${e.scrollHeight}px`):(e.style.overflow="hidden",e.style.height="0px"))};s=requestAnimationFrame(a),wi(()=>cancelAnimationFrame(s))}}),r});const n=()=>{t.value?(e.style.overflow="visible",e.style.height="auto"):e.style.display="none"};return k(ns,{get id(){return t.id},ref:i=>e=i,get["aria-labelledby"](){return t["aria-labelledby"]},get role(){return t.role},get component(){return t.as},get class(){return t.class},onTransitionEnd:n,get children(){return t.children}})},hd=C('<div><div><label>Repository sync interval</label><div class="flex-row"><input class="short-number"></div></div><div><label>Repository sync timeout</label><div class="flex-row"><input class="short-number"></div></div></div>');function yr(){return(()=>{const o=hd.cloneNode(!0),e=o.firstChild,t=e.firstChild,n=t.nextSibling,i=n.firstChild,r=e.nextSibling,s=r.firstChild,c=s.nextSibling,a=c.firstChild;return j(i,()=>[$,R,"interval"]),j(a,()=>[$,R,"timeout"]),o})()}const fd=C('<div><div><label>The name of an existing secret containing SSH or basic credentials</label><input class="medium"></div><vscode-divider></vscode-divider><div><label>Path to TLS CA cert file </label><input class="long"></div><div><label>Path to a passwordless SSH private key file</label><input class="long"></div><div><label>Basic authentication username</label><input class="medium"></div><div><label>Basic authentication password</label><input type="password" class="medium"></div><vscode-divider></vscode-divider><div style="margin-top: 1rem"><vscode-checkbox>Recurse submodules</vscode-checkbox><div><i>When enabled, configures the GitRepository source to initialize and include Git submodules in the artifact it produces</i></div></div></div>');function bd(){return(()=>{const o=fd.cloneNode(!0),e=o.firstChild,t=e.firstChild,n=t.nextSibling,i=e.nextSibling,r=i.nextSibling,s=r.firstChild,c=s.nextSibling,a=r.nextSibling,l=a.firstChild,d=l.nextSibling,u=a.nextSibling,b=u.firstChild,m=b.nextSibling,w=u.nextSibling,A=w.firstChild,N=A.nextSibling,ue=w.nextSibling,X=ue.nextSibling,re=X.firstChild;return j(n,()=>[$,R,"secretRef"]),i._$owner=v(),j(c,()=>[$,R,"caFile"]),j(d,()=>[$,R,"privateKeyFile"]),j(m,()=>[$,R,"username"]),j(N,()=>[$,R,"password"]),ue._$owner=v(),zt(re,()=>he=>R("recurseSubmodules",he)),re._$owner=v(),o})()}const pd=C('<div style="margin-top: 1rem"><div><vscode-checkbox>Create with FluxConfig</vscode-checkbox><div><i>A new <code>FluxConfig</code> resource will be created to manage this <code>Kustomization</code></i></div></div><div style="margin-top: 1.5rem"><label>Scope</label><div><vscode-dropdown><vscode-option>cluster</vscode-option><vscode-option>namespace</vscode-option></vscode-dropdown></div></div></div>');let Xo;const gd=o=>R("azureScope",o);function vd(){return ke(()=>Xo.checked=$.createFluxConfig),(()=>{const o=pd.cloneNode(!0),e=o.firstChild,t=e.firstChild,n=e.nextSibling,i=n.firstChild,r=i.nextSibling,s=r.firstChild,c=s.firstChild,a=c.nextSibling;zt(t,()=>d=>R("createFluxConfig",d));const l=Xo;return typeof l=="function"?l(t):Xo=t,t._$owner=v(),Me(s,()=>gd),s._$owner=v(),c._$owner=v(),a._$owner=v(),o})()}const md=C('<vscode-panel-tab id="git-azure-tab">Azure</vscode-panel-tab>'),yd=C("<vscode-panel-view></vscode-panel-view>"),xd=C('<div><vscode-panels activeid="git-intervals-tab" aria-label="Advanced GitRepository source settings"><vscode-panel-tab id="git-intervals-tab">Intervals</vscode-panel-tab><vscode-panel-tab id="git-connection-tab">Connection</vscode-panel-tab><vscode-panel-view></vscode-panel-view><vscode-panel-view></vscode-panel-view></vscode-panels></div>'),wd=C('<div class="collapsable"><h3 class="collapse-toggle"><span></span> Advanced Settings</h3></div>');function kd(){const[o,e]=je(!1);return(()=>{const t=wd.cloneNode(!0),n=t.firstChild,i=n.firstChild;return n.$$click=()=>e(!o()),y(t,k(mr,{get value(){return o()},class:"collapse-transition",get children(){const r=xd.cloneNode(!0),s=r.firstChild,c=s.firstChild,a=c.nextSibling,l=a.nextSibling,d=l.nextSibling;return s._$owner=v(),c._$owner=v(),a._$owner=v(),y(s,k(se,{get when(){return z.clusterInfo?.isAzure},get children(){const u=md.cloneNode(!0);return u._$owner=v(),u}}),l),l._$owner=v(),y(l,k(yr,{})),d._$owner=v(),y(d,k(bd,{})),y(s,k(se,{get when(){return z.clusterInfo?.isAzure},get children(){const u=yd.cloneNode(!0);return u._$owner=v(),y(u,k(vd,{})),u}}),null),r}}),null),Ce(r=>{const s=o(),c=`codicon ${o()?"codicon-chevron-down":"codicon-chevron-right"}`;return s!==r._v$&&n.classList.toggle("open",r._v$=s),c!==r._v$2&&(i.className=r._v$2=c),r},{_v$:void 0,_v$2:void 0}),t})()}wo(["click"]);const $d=C('<div><label><code></code> Name</label><input class="medium"></div>');function xr(){return(()=>{const o=$d.cloneNode(!0),e=o.firstChild,t=e.firstChild,n=e.nextSibling;return y(t,()=>$.kind),j(n,()=>[$,R,"name"]),o})()}const Cd=C('<div><label>Namespace</label><div><vscode-dropdown class="medium"></vscode-dropdown></div></div>'),Sd=C("<vscode-option></vscode-option>");let to;const Id=o=>R("namespace",o);function wr(){return ke(()=>{console.log(to),console.log($.namespace),to.currentValue=$.namespace}),(()=>{const o=Cd.cloneNode(!0),e=o.firstChild,t=e.nextSibling,n=t.firstChild;Me(n,()=>Id);const i=to;return typeof i=="function"?i(n):to=n,n._$owner=v(),y(n,k(Ft,{get each(){return z.namespaces},children:(r,s)=>(()=>{const c=Sd.cloneNode(!0);return c._$owner=v(),y(c,r),c})()})),o})()}const Td=C('<div><div><label>Repository URL</label><input class="long"></div><div><label>Reference</label><div class="flex-row"><vscode-dropdown><vscode-option>branch</vscode-option><vscode-option>tag</vscode-option><vscode-option>semver</vscode-option></vscode-dropdown><input style="margin-left: 4px; width: 23rem !important"></div></div></div>'),Bd=o=>R("gitRefType",o);function Ad(){return(()=>{const o=Td.cloneNode(!0),e=o.firstChild,t=e.firstChild,n=t.nextSibling,i=e.nextSibling,r=i.firstChild,s=r.nextSibling,c=s.firstChild,a=c.firstChild,l=a.nextSibling,d=l.nextSibling,u=c.nextSibling;return y(o,k(xr,{}),e),y(o,k(wr,{}),e),j(n,()=>[$,R,"gitUrl"]),Me(c,()=>Bd),c._$owner=v(),a._$owner=v(),l._$owner=v(),d._$owner=v(),j(u,()=>[$,R,"gitRef"]),y(o,k(kd,{}),null),o})()}const Rd=C('<div><div style="margin-bottom: 1rem"><i>Authentication settings for private repositories</i></div><div><label>OCI Provider</label><div class="flex-row"><vscode-dropdown><vscode-option>generic</vscode-option><vscode-option>aws</vscode-option><vscode-option>azure</vscode-option><vscode-option>gcp</vscode-option></vscode-dropdown></div></div><div><label><code>Secret</code> with authentication credentials for the repository <a href="https://fluxcd.io/flux/components/source/ocirepositories/#secret-reference"><span class="codicon codicon-question"></span></a></label><input class="long"></div><div><label><code>ServiceAccount</code> with image pull secrets for authentication</label><input class="long"></div></div>'),Od=o=>R("ociProvider",o);function _d(){return(()=>{const o=Rd.cloneNode(!0),e=o.firstChild,t=e.nextSibling,n=t.firstChild,i=n.nextSibling,r=i.firstChild,s=r.firstChild,c=s.nextSibling,a=c.nextSibling,l=a.nextSibling,d=t.nextSibling,u=d.firstChild,b=u.nextSibling,m=d.nextSibling,w=m.firstChild,A=w.nextSibling;return Me(r,()=>Od),r._$owner=v(),s._$owner=v(),c._$owner=v(),a._$owner=v(),l._$owner=v(),j(b,()=>[$,R,"secretRef"]),j(A,()=>[$,R,"serviceAccount"]),o})()}const Fd=C('<div><div style="margin-bottom: 1rem"><vscode-checkbox>Allow insecure (non-TLS) connection to the registry</vscode-checkbox></div><div><label><code>Secret</code> used for TLS certificates <a href="https://fluxcd.io/flux/components/source/ocirepositories/#tls-certificates"><span class="codicon codicon-question"></span></a></label><input class="long"></div></div>');function Ed(){return(()=>{const o=Fd.cloneNode(!0),e=o.firstChild,t=e.firstChild,n=e.nextSibling,i=n.firstChild,r=i.nextSibling;return zt(t,()=>s=>R("insecure",s)),t._$owner=v(),j(r,()=>[$,R,"certRef"]),o})()}const Dd=C('<div><vscode-panels activeid="oci-intervals-tab" aria-label="Advanced OCIRepository source settings"><vscode-panel-tab id="oci-intervals-tab">Intervals</vscode-panel-tab><vscode-panel-tab id="oci-connection-tab">Connection</vscode-panel-tab><vscode-panel-tab id="oci-tls-tab">TLS</vscode-panel-tab><vscode-panel-view></vscode-panel-view><vscode-panel-view></vscode-panel-view><vscode-panel-view></vscode-panel-view></vscode-panels></div>'),Pd=C('<div class="collapsable"><h3 class="collapse-toggle"><span></span> Advanced Settings</h3></div>');function Ld(){const[o,e]=je(!1);return(()=>{const t=Pd.cloneNode(!0),n=t.firstChild,i=n.firstChild;return n.$$click=()=>e(!o()),y(t,k(mr,{get value(){return o()},class:"collapse-transition",get children(){const r=Dd.cloneNode(!0),s=r.firstChild,c=s.firstChild,a=c.nextSibling,l=a.nextSibling,d=l.nextSibling,u=d.nextSibling,b=u.nextSibling;return s._$owner=v(),c._$owner=v(),a._$owner=v(),l._$owner=v(),d._$owner=v(),y(d,k(yr,{})),u._$owner=v(),y(u,k(_d,{})),b._$owner=v(),y(b,k(Ed,{})),r}}),null),Ce(r=>{const s=o(),c=`codicon ${o()?"codicon-chevron-down":"codicon-chevron-right"}`;return s!==r._v$&&n.classList.toggle("open",r._v$=s),c!==r._v$2&&(i.className=r._v$2=c),r},{_v$:void 0,_v$2:void 0}),t})()}wo(["click"]);const Hd=C('<div><div><label>Repository URL</label><input class="long"></div><div><label>Reference</label><div class="flex-row"><vscode-dropdown><vscode-option>tag</vscode-option><vscode-option>semver</vscode-option><vscode-option>digest</vscode-option></vscode-dropdown><input style="margin-left: 4px; width: 23rem !important"></div></div></div>'),Nd=o=>R("ociRefType",o);function Vd(){return(()=>{const o=Hd.cloneNode(!0),e=o.firstChild,t=e.firstChild,n=t.nextSibling,i=e.nextSibling,r=i.firstChild,s=r.nextSibling,c=s.firstChild,a=c.firstChild,l=a.nextSibling,d=l.nextSibling,u=c.nextSibling;return y(o,k(xr,{}),e),y(o,k(wr,{}),e),j(n,()=>[$,R,"ociUrl"]),Me(c,()=>Nd),c._$owner=v(),a._$owner=v(),l._$owner=v(),d._$owner=v(),j(u,()=>[$,R,"ociRef"]),y(o,k(Ld,{}),null),o})()}const Md=C('<div><vscode-panels aria-label="Type of source"><vscode-panel-tab id="GitRepository-tab">GitRepository&nbsp;<a href="https://fluxcd.io/flux/components/source/gitrepositories/"><span class="codicon codicon-question"></span></a></vscode-panel-tab><vscode-panel-tab id="OCIRepository-tab">OCIRepository&nbsp;<a href="https://fluxcd.io/flux/components/source/ocirepositories/"><span class="codicon codicon-question"></span></a></vscode-panel-tab><vscode-panel-view></vscode-panel-view><vscode-panel-view></vscode-panel-view></vscode-panels></div>');let oo;function zd(){return ke(()=>{oo.addEventListener("change",o=>{const e=oo.activeid.slice(0,-4);R("kind",e)})}),(()=>{const o=Md.cloneNode(!0),e=o.firstChild,t=e.firstChild,n=t.nextSibling,i=n.nextSibling,r=i.nextSibling,s=oo;return typeof s=="function"?s(e):oo=e,e._$owner=v(),t._$owner=v(),n._$owner=v(),i._$owner=v(),y(i,k(Ad,{})),r._$owner=v(),y(r,k(Vd,{})),Ce(()=>e.activeid=`${$.kind}-tab`),o})()}const jd=C("<vscode-option></vscode-option>"),qd=C('<div><vscode-dropdown position="below" class="medium"></vscode-dropdown></div>');qe(()=>{xo(`selectedSource()=${Qe()}`)});function Ud(o,e){return e()===0&&Qe()===""&&Tn(o),(()=>{const t=jd.cloneNode(!0);return t._$owner=v(),y(t,o),t})()}function Gd(){return(()=>{const o=qd.cloneNode(!0),e=o.firstChild;return ed(e,()=>[Qe,Tn]),e._$owner=v(),y(e,k(Ft,{get each(){return z.sources},children:(t,n)=>Ud(t,n)})),o})()}const Wd=C('<vscode-panel-tab id="select-source-tab">Select Source</vscode-panel-tab>'),Qd=C("<vscode-panel-view></vscode-panel-view>"),Xd=C('<div><h2 style="margin-bottom: 0.5rem !important">Source Repository</h2><vscode-panels id="source-panel" aria-label="New or select source?" activeid="new-source-tab"><vscode-panel-tab id="new-source-tab">New Source...</vscode-panel-tab><vscode-panel-view></vscode-panel-view></vscode-panels></div>');let Je;function Yd(){const o=()=>z.sources?.length>0;return ke(()=>{Je.addEventListener("change",e=>fi(Je.activeid==="new-source-tab"))}),qe(()=>{const e=z.selectSourceTab&&z.sources?.length>0?"select-source-tab":"new-source-tab";Je.activeid=e,fi(Je.activeid==="new-source-tab")}),(()=>{const e=Xd.cloneNode(!0),t=e.firstChild,n=t.nextSibling,i=n.firstChild,r=i.nextSibling,s=Je;return typeof s=="function"?s(n):Je=n,n._$owner=v(),i._$owner=v(),y(n,k(se,{get when(){return o()},get children(){const c=Wd.cloneNode(!0);return c._$owner=v(),c}}),r),r._$owner=v(),y(r,k(zd,{})),y(n,k(se,{get when(){return o()},get children(){const c=Qd.cloneNode(!0);return c._$owner=v(),y(c,k(Gd,{})),c}}),null),e})()}const Jd=C("<p> <code></code> '<!>'</p>"),Zd=C("<p>Create new <code>Kustomization</code> '<!>' for the <code></code></p>"),Kd=C("<p>No actions selected</p>"),eu=C('<vscode-button class="big"><span class="yaml">YAML</span><span slot="start" class="codicon codicon-output"></span></vscode-button>'),tu=C('<vscode-button class="big"><span class="create">Create</span><span slot="start" class="codicon codicon-add"></span></vscode-button>'),ou=C('<main><textarea id="debug" style="display: none; height:220px">---</textarea><h1>Configure GitOps </h1><vscode-divider></vscode-divider><vscode-divider></vscode-divider><vscode-divider></vscode-divider><div class="actions"><h2 style="margin-bottom: 2rem">Actions</h2></div></main>'),nu=C('<p class="error"> missing</p>'),gi=()=>$e()?$.kind:Qe().split("/")[0],iu=()=>$e()?$.name:Qe().split("/")[1],ru=()=>$e()?"Create new":"Use existing",Yo=()=>!Mt()&&!$e();function su(){const o=go.vsCodeApi?"":"| DEBUG";return(()=>{const e=ou.cloneNode(!0),t=e.firstChild,n=t.nextSibling;n.firstChild;const i=n.nextSibling,r=i.nextSibling,s=r.nextSibling,c=s.nextSibling;return c.firstChild,y(n,o,null),i._$owner=v(),y(e,k(Yd,{}),r),r._$owner=v(),y(e,k(ud,{}),s),s._$owner=v(),y(c,k(se,{get when(){return!Yo()},get children(){const a=Jd.cloneNode(!0),l=a.firstChild,d=l.nextSibling,u=d.nextSibling,b=u.nextSibling;return b.nextSibling,y(a,ru,l),y(d,gi),y(a,iu,b),a}}),null),y(c,k(se,{get when(){return Mt()},get children(){const a=Zd.cloneNode(!0),l=a.firstChild,d=l.nextSibling,u=d.nextSibling,b=u.nextSibling,m=b.nextSibling,w=m.nextSibling;return y(a,()=>Ot.name,b),y(w,gi),a}}),null),y(c,k(se,{get when(){return Yo()},get children(){return Kd.cloneNode(!0)}}),null),y(c,k(se,{get when(){return Mr(()=>!Yo(),!0)()&&kr().length===0},get children(){return[(()=>{const a=eu.cloneNode(!0);return a.$$click=()=>vi("show-yaml"),a._$owner=v(),a})(),(()=>{const a=tu.cloneNode(!0);return a.$$click=()=>vi("create"),a._$owner=v(),a})()]}}),null),y(c,cu,null),e})()}function cu(){const o=kr();return k(se,{get when(){return o.length>0},get children(){return k(Ft,{each:o,children:(e,t)=>(()=>{const n=nu.cloneNode(!0),i=n.firstChild;return y(n,e,i),n})()})}})}function kr(){if(!$e())return[];const o=[];switch($.name?.length>0||o.push("Source name"),$.kind){case"GitRepository":$.gitUrl?.length>0||o.push("Repository URL"),$.gitRef?.length>0||o.push("Source branch, tag or semver");break;case"HelmRepository":$.helmUrl?.length>0||o.push("Repository URL");break;case"OCIRepository":$.ociUrl?.length>0||o.push("Repository URL"),$.ociRef?.length>0||o.push("Source tag, semver or digest");break;case"Bucket":$.bucketName?.length>0||o.push("Bucket name"),$.bucketEndpoint?.length>0||o.push("Bucket endpoint"),$.bucketInsecure&&($.bucketAccessKey?.length>0||o.push("Bucket Access Key"),(!($.bucketSecretKey?.length>0)||!($.bucketSecretRef?.length>0))&&o.push("Bucket Secret Key or Secret Ref"));break}return o}wo(["click"]);fa().register(jl);function au(){window.addEventListener("message",o=>{const e=o.data;switch(e.type){case"set-params":Jl(e.params);break}})}function vi(o){go.postMessage({action:o,data:bi()}),console.log(bi())}function lu(){return ke(()=>{xo("App mounted"),go.postMessage({action:"init-view"}),au(),go.vsCodeApi||Yl()}),k(su,{})}jr(()=>k(lu,{}),document.getElementById("root"));
