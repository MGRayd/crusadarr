import{r as H,u as ft,j as b}from"./index-B3TWa7dk.js";import{N as dt,A as ne,a as re,E as se,b as oe,L as ie,c as ae}from"./Navbar-D4IAW48D.js";import{C as pt,B as I,T as v,a as ht,b as mt,L as ce}from"./TextField-BQnlWjKZ.js";function qe(e,t){return function(){return e.apply(t,arguments)}}const{toString:yt}=Object.prototype,{getPrototypeOf:Ee}=Object,Z=(e=>t=>{const n=yt.call(t);return e[n]||(e[n]=n.slice(8,-1).toLowerCase())})(Object.create(null)),F=e=>(e=e.toLowerCase(),t=>Z(t)===e),Q=e=>t=>typeof t===e,{isArray:M}=Array,J=Q("undefined");function bt(e){return e!==null&&!J(e)&&e.constructor!==null&&!J(e.constructor)&&C(e.constructor.isBuffer)&&e.constructor.isBuffer(e)}const He=F("ArrayBuffer");function wt(e){let t;return typeof ArrayBuffer<"u"&&ArrayBuffer.isView?t=ArrayBuffer.isView(e):t=e&&e.buffer&&He(e.buffer),t}const gt=Q("string"),C=Q("function"),ve=Q("number"),Y=e=>e!==null&&typeof e=="object",Et=e=>e===!0||e===!1,W=e=>{if(Z(e)!=="object")return!1;const t=Ee(e);return(t===null||t===Object.prototype||Object.getPrototypeOf(t)===null)&&!(Symbol.toStringTag in e)&&!(Symbol.iterator in e)},St=F("Date"),xt=F("File"),Rt=F("Blob"),Tt=F("FileList"),Ot=e=>Y(e)&&C(e.pipe),At=e=>{let t;return e&&(typeof FormData=="function"&&e instanceof FormData||C(e.append)&&((t=Z(e))==="formdata"||t==="object"&&C(e.toString)&&e.toString()==="[object FormData]"))},Ct=F("URLSearchParams"),[Nt,Pt,jt,Ft]=["ReadableStream","Request","Response","Headers"].map(F),Bt=e=>e.trim?e.trim():e.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,"");function V(e,t,{allOwnKeys:n=!1}={}){if(e===null||typeof e>"u")return;let r,s;if(typeof e!="object"&&(e=[e]),M(e))for(r=0,s=e.length;r<s;r++)t.call(null,e[r],r,e);else{const o=n?Object.getOwnPropertyNames(e):Object.keys(e),i=o.length;let c;for(r=0;r<i;r++)c=o[r],t.call(null,e[c],c,e)}}function ze(e,t){t=t.toLowerCase();const n=Object.keys(e);let r=n.length,s;for(;r-- >0;)if(s=n[r],t===s.toLowerCase())return s;return null}const _=typeof globalThis<"u"?globalThis:typeof self<"u"?self:typeof window<"u"?window:global,Je=e=>!J(e)&&e!==_;function pe(){const{caseless:e}=Je(this)&&this||{},t={},n=(r,s)=>{const o=e&&ze(t,s)||s;W(t[o])&&W(r)?t[o]=pe(t[o],r):W(r)?t[o]=pe({},r):M(r)?t[o]=r.slice():t[o]=r};for(let r=0,s=arguments.length;r<s;r++)arguments[r]&&V(arguments[r],n);return t}const kt=(e,t,n,{allOwnKeys:r}={})=>(V(t,(s,o)=>{n&&C(s)?e[o]=qe(s,n):e[o]=s},{allOwnKeys:r}),e),_t=e=>(e.charCodeAt(0)===65279&&(e=e.slice(1)),e),Lt=(e,t,n,r)=>{e.prototype=Object.create(t.prototype,r),e.prototype.constructor=e,Object.defineProperty(e,"super",{value:t.prototype}),n&&Object.assign(e.prototype,n)},Dt=(e,t,n,r)=>{let s,o,i;const c={};if(t=t||{},e==null)return t;do{for(s=Object.getOwnPropertyNames(e),o=s.length;o-- >0;)i=s[o],(!r||r(i,e,t))&&!c[i]&&(t[i]=e[i],c[i]=!0);e=n!==!1&&Ee(e)}while(e&&(!n||n(e,t))&&e!==Object.prototype);return t},Ut=(e,t,n)=>{e=String(e),(n===void 0||n>e.length)&&(n=e.length),n-=t.length;const r=e.indexOf(t,n);return r!==-1&&r===n},It=e=>{if(!e)return null;if(M(e))return e;let t=e.length;if(!ve(t))return null;const n=new Array(t);for(;t-- >0;)n[t]=e[t];return n},Mt=(e=>t=>e&&t instanceof e)(typeof Uint8Array<"u"&&Ee(Uint8Array)),qt=(e,t)=>{const r=(e&&e[Symbol.iterator]).call(e);let s;for(;(s=r.next())&&!s.done;){const o=s.value;t.call(e,o[0],o[1])}},Ht=(e,t)=>{let n;const r=[];for(;(n=e.exec(t))!==null;)r.push(n);return r},vt=F("HTMLFormElement"),zt=e=>e.toLowerCase().replace(/[-_\s]([a-z\d])(\w*)/g,function(n,r,s){return r.toUpperCase()+s}),Oe=(({hasOwnProperty:e})=>(t,n)=>e.call(t,n))(Object.prototype),Jt=F("RegExp"),Ve=(e,t)=>{const n=Object.getOwnPropertyDescriptors(e),r={};V(n,(s,o)=>{let i;(i=t(s,o,e))!==!1&&(r[o]=i||s)}),Object.defineProperties(e,r)},Vt=e=>{Ve(e,(t,n)=>{if(C(e)&&["arguments","caller","callee"].indexOf(n)!==-1)return!1;const r=e[n];if(C(r)){if(t.enumerable=!1,"writable"in t){t.writable=!1;return}t.set||(t.set=()=>{throw Error("Can not rewrite read-only method '"+n+"'")})}})},$t=(e,t)=>{const n={},r=s=>{s.forEach(o=>{n[o]=!0})};return M(e)?r(e):r(String(e).split(t)),n},Wt=()=>{},Kt=(e,t)=>e!=null&&Number.isFinite(e=+e)?e:t,le="abcdefghijklmnopqrstuvwxyz",Ae="0123456789",$e={DIGIT:Ae,ALPHA:le,ALPHA_DIGIT:le+le.toUpperCase()+Ae},Xt=(e=16,t=$e.ALPHA_DIGIT)=>{let n="";const{length:r}=t;for(;e--;)n+=t[Math.random()*r|0];return n};function Gt(e){return!!(e&&C(e.append)&&e[Symbol.toStringTag]==="FormData"&&e[Symbol.iterator])}const Zt=e=>{const t=new Array(10),n=(r,s)=>{if(Y(r)){if(t.indexOf(r)>=0)return;if(!("toJSON"in r)){t[s]=r;const o=M(r)?[]:{};return V(r,(i,c)=>{const p=n(i,s+1);!J(p)&&(o[c]=p)}),t[s]=void 0,o}}return r};return n(e,0)},Qt=F("AsyncFunction"),Yt=e=>e&&(Y(e)||C(e))&&C(e.then)&&C(e.catch),We=((e,t)=>e?setImmediate:t?((n,r)=>(_.addEventListener("message",({source:s,data:o})=>{s===_&&o===n&&r.length&&r.shift()()},!1),s=>{r.push(s),_.postMessage(n,"*")}))(`axios@${Math.random()}`,[]):n=>setTimeout(n))(typeof setImmediate=="function",C(_.postMessage)),en=typeof queueMicrotask<"u"?queueMicrotask.bind(_):typeof process<"u"&&process.nextTick||We,a={isArray:M,isArrayBuffer:He,isBuffer:bt,isFormData:At,isArrayBufferView:wt,isString:gt,isNumber:ve,isBoolean:Et,isObject:Y,isPlainObject:W,isReadableStream:Nt,isRequest:Pt,isResponse:jt,isHeaders:Ft,isUndefined:J,isDate:St,isFile:xt,isBlob:Rt,isRegExp:Jt,isFunction:C,isStream:Ot,isURLSearchParams:Ct,isTypedArray:Mt,isFileList:Tt,forEach:V,merge:pe,extend:kt,trim:Bt,stripBOM:_t,inherits:Lt,toFlatObject:Dt,kindOf:Z,kindOfTest:F,endsWith:Ut,toArray:It,forEachEntry:qt,matchAll:Ht,isHTMLForm:vt,hasOwnProperty:Oe,hasOwnProp:Oe,reduceDescriptors:Ve,freezeMethods:Vt,toObjectSet:$t,toCamelCase:zt,noop:Wt,toFiniteNumber:Kt,findKey:ze,global:_,isContextDefined:Je,ALPHABET:$e,generateString:Xt,isSpecCompliantForm:Gt,toJSONObject:Zt,isAsyncFn:Qt,isThenable:Yt,setImmediate:We,asap:en};function y(e,t,n,r,s){Error.call(this),Error.captureStackTrace?Error.captureStackTrace(this,this.constructor):this.stack=new Error().stack,this.message=e,this.name="AxiosError",t&&(this.code=t),n&&(this.config=n),r&&(this.request=r),s&&(this.response=s,this.status=s.status?s.status:null)}a.inherits(y,Error,{toJSON:function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:a.toJSONObject(this.config),code:this.code,status:this.status}}});const Ke=y.prototype,Xe={};["ERR_BAD_OPTION_VALUE","ERR_BAD_OPTION","ECONNABORTED","ETIMEDOUT","ERR_NETWORK","ERR_FR_TOO_MANY_REDIRECTS","ERR_DEPRECATED","ERR_BAD_RESPONSE","ERR_BAD_REQUEST","ERR_CANCELED","ERR_NOT_SUPPORT","ERR_INVALID_URL"].forEach(e=>{Xe[e]={value:e}});Object.defineProperties(y,Xe);Object.defineProperty(Ke,"isAxiosError",{value:!0});y.from=(e,t,n,r,s,o)=>{const i=Object.create(Ke);return a.toFlatObject(e,i,function(p){return p!==Error.prototype},c=>c!=="isAxiosError"),y.call(i,e.message,t,n,r,s),i.cause=e,i.name=e.name,o&&Object.assign(i,o),i};const tn=null;function he(e){return a.isPlainObject(e)||a.isArray(e)}function Ge(e){return a.endsWith(e,"[]")?e.slice(0,-2):e}function Ce(e,t,n){return e?e.concat(t).map(function(s,o){return s=Ge(s),!n&&o?"["+s+"]":s}).join(n?".":""):t}function nn(e){return a.isArray(e)&&!e.some(he)}const rn=a.toFlatObject(a,{},null,function(t){return/^is[A-Z]/.test(t)});function ee(e,t,n){if(!a.isObject(e))throw new TypeError("target must be an object");t=t||new FormData,n=a.toFlatObject(n,{metaTokens:!0,dots:!1,indexes:!1},!1,function(m,f){return!a.isUndefined(f[m])});const r=n.metaTokens,s=n.visitor||u,o=n.dots,i=n.indexes,p=(n.Blob||typeof Blob<"u"&&Blob)&&a.isSpecCompliantForm(t);if(!a.isFunction(s))throw new TypeError("visitor must be a function");function l(d){if(d===null)return"";if(a.isDate(d))return d.toISOString();if(!p&&a.isBlob(d))throw new y("Blob is not supported. Use a Buffer instead.");return a.isArrayBuffer(d)||a.isTypedArray(d)?p&&typeof Blob=="function"?new Blob([d]):Buffer.from(d):d}function u(d,m,f){let w=d;if(d&&!f&&typeof d=="object"){if(a.endsWith(m,"{}"))m=r?m:m.slice(0,-2),d=JSON.stringify(d);else if(a.isArray(d)&&nn(d)||(a.isFileList(d)||a.endsWith(m,"[]"))&&(w=a.toArray(d)))return m=Ge(m),w.forEach(function(x,P){!(a.isUndefined(x)||x===null)&&t.append(i===!0?Ce([m],P,o):i===null?m:m+"[]",l(x))}),!1}return he(d)?!0:(t.append(Ce(f,m,o),l(d)),!1)}const h=[],g=Object.assign(rn,{defaultVisitor:u,convertValue:l,isVisitable:he});function E(d,m){if(!a.isUndefined(d)){if(h.indexOf(d)!==-1)throw Error("Circular reference detected in "+m.join("."));h.push(d),a.forEach(d,function(w,S){(!(a.isUndefined(w)||w===null)&&s.call(t,w,a.isString(S)?S.trim():S,m,g))===!0&&E(w,m?m.concat(S):[S])}),h.pop()}}if(!a.isObject(e))throw new TypeError("data must be an object");return E(e),t}function Ne(e){const t={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+","%00":"\0"};return encodeURIComponent(e).replace(/[!'()~]|%20|%00/g,function(r){return t[r]})}function Se(e,t){this._pairs=[],e&&ee(e,this,t)}const Ze=Se.prototype;Ze.append=function(t,n){this._pairs.push([t,n])};Ze.toString=function(t){const n=t?function(r){return t.call(this,r,Ne)}:Ne;return this._pairs.map(function(s){return n(s[0])+"="+n(s[1])},"").join("&")};function sn(e){return encodeURIComponent(e).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}function Qe(e,t,n){if(!t)return e;const r=n&&n.encode||sn,s=n&&n.serialize;let o;if(s?o=s(t,n):o=a.isURLSearchParams(t)?t.toString():new Se(t,n).toString(r),o){const i=e.indexOf("#");i!==-1&&(e=e.slice(0,i)),e+=(e.indexOf("?")===-1?"?":"&")+o}return e}class Pe{constructor(){this.handlers=[]}use(t,n,r){return this.handlers.push({fulfilled:t,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1}eject(t){this.handlers[t]&&(this.handlers[t]=null)}clear(){this.handlers&&(this.handlers=[])}forEach(t){a.forEach(this.handlers,function(r){r!==null&&t(r)})}}const Ye={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},on=typeof URLSearchParams<"u"?URLSearchParams:Se,an=typeof FormData<"u"?FormData:null,cn=typeof Blob<"u"?Blob:null,ln={isBrowser:!0,classes:{URLSearchParams:on,FormData:an,Blob:cn},protocols:["http","https","file","blob","url","data"]},xe=typeof window<"u"&&typeof document<"u",me=typeof navigator=="object"&&navigator||void 0,un=xe&&(!me||["ReactNative","NativeScript","NS"].indexOf(me.product)<0),fn=typeof WorkerGlobalScope<"u"&&self instanceof WorkerGlobalScope&&typeof self.importScripts=="function",dn=xe&&window.location.href||"http://localhost",pn=Object.freeze(Object.defineProperty({__proto__:null,hasBrowserEnv:xe,hasStandardBrowserEnv:un,hasStandardBrowserWebWorkerEnv:fn,navigator:me,origin:dn},Symbol.toStringTag,{value:"Module"})),O={...pn,...ln};function hn(e,t){return ee(e,new O.classes.URLSearchParams,Object.assign({visitor:function(n,r,s,o){return O.isNode&&a.isBuffer(n)?(this.append(r,n.toString("base64")),!1):o.defaultVisitor.apply(this,arguments)}},t))}function mn(e){return a.matchAll(/\w+|\[(\w*)]/g,e).map(t=>t[0]==="[]"?"":t[1]||t[0])}function yn(e){const t={},n=Object.keys(e);let r;const s=n.length;let o;for(r=0;r<s;r++)o=n[r],t[o]=e[o];return t}function et(e){function t(n,r,s,o){let i=n[o++];if(i==="__proto__")return!0;const c=Number.isFinite(+i),p=o>=n.length;return i=!i&&a.isArray(s)?s.length:i,p?(a.hasOwnProp(s,i)?s[i]=[s[i],r]:s[i]=r,!c):((!s[i]||!a.isObject(s[i]))&&(s[i]=[]),t(n,r,s[i],o)&&a.isArray(s[i])&&(s[i]=yn(s[i])),!c)}if(a.isFormData(e)&&a.isFunction(e.entries)){const n={};return a.forEachEntry(e,(r,s)=>{t(mn(r),s,n,0)}),n}return null}function bn(e,t,n){if(a.isString(e))try{return(t||JSON.parse)(e),a.trim(e)}catch(r){if(r.name!=="SyntaxError")throw r}return(0,JSON.stringify)(e)}const $={transitional:Ye,adapter:["xhr","http","fetch"],transformRequest:[function(t,n){const r=n.getContentType()||"",s=r.indexOf("application/json")>-1,o=a.isObject(t);if(o&&a.isHTMLForm(t)&&(t=new FormData(t)),a.isFormData(t))return s?JSON.stringify(et(t)):t;if(a.isArrayBuffer(t)||a.isBuffer(t)||a.isStream(t)||a.isFile(t)||a.isBlob(t)||a.isReadableStream(t))return t;if(a.isArrayBufferView(t))return t.buffer;if(a.isURLSearchParams(t))return n.setContentType("application/x-www-form-urlencoded;charset=utf-8",!1),t.toString();let c;if(o){if(r.indexOf("application/x-www-form-urlencoded")>-1)return hn(t,this.formSerializer).toString();if((c=a.isFileList(t))||r.indexOf("multipart/form-data")>-1){const p=this.env&&this.env.FormData;return ee(c?{"files[]":t}:t,p&&new p,this.formSerializer)}}return o||s?(n.setContentType("application/json",!1),bn(t)):t}],transformResponse:[function(t){const n=this.transitional||$.transitional,r=n&&n.forcedJSONParsing,s=this.responseType==="json";if(a.isResponse(t)||a.isReadableStream(t))return t;if(t&&a.isString(t)&&(r&&!this.responseType||s)){const i=!(n&&n.silentJSONParsing)&&s;try{return JSON.parse(t)}catch(c){if(i)throw c.name==="SyntaxError"?y.from(c,y.ERR_BAD_RESPONSE,this,null,this.response):c}}return t}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,env:{FormData:O.classes.FormData,Blob:O.classes.Blob},validateStatus:function(t){return t>=200&&t<300},headers:{common:{Accept:"application/json, text/plain, */*","Content-Type":void 0}}};a.forEach(["delete","get","head","post","put","patch"],e=>{$.headers[e]={}});const wn=a.toObjectSet(["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"]),gn=e=>{const t={};let n,r,s;return e&&e.split(`
`).forEach(function(i){s=i.indexOf(":"),n=i.substring(0,s).trim().toLowerCase(),r=i.substring(s+1).trim(),!(!n||t[n]&&wn[n])&&(n==="set-cookie"?t[n]?t[n].push(r):t[n]=[r]:t[n]=t[n]?t[n]+", "+r:r)}),t},je=Symbol("internals");function z(e){return e&&String(e).trim().toLowerCase()}function K(e){return e===!1||e==null?e:a.isArray(e)?e.map(K):String(e)}function En(e){const t=Object.create(null),n=/([^\s,;=]+)\s*(?:=\s*([^,;]+))?/g;let r;for(;r=n.exec(e);)t[r[1]]=r[2];return t}const Sn=e=>/^[-_a-zA-Z0-9^`|~,!#$%&'*+.]+$/.test(e.trim());function ue(e,t,n,r,s){if(a.isFunction(r))return r.call(this,t,n);if(s&&(t=n),!!a.isString(t)){if(a.isString(r))return t.indexOf(r)!==-1;if(a.isRegExp(r))return r.test(t)}}function xn(e){return e.trim().toLowerCase().replace(/([a-z\d])(\w*)/g,(t,n,r)=>n.toUpperCase()+r)}function Rn(e,t){const n=a.toCamelCase(" "+t);["get","set","has"].forEach(r=>{Object.defineProperty(e,r+n,{value:function(s,o,i){return this[r].call(this,t,s,o,i)},configurable:!0})})}class A{constructor(t){t&&this.set(t)}set(t,n,r){const s=this;function o(c,p,l){const u=z(p);if(!u)throw new Error("header name must be a non-empty string");const h=a.findKey(s,u);(!h||s[h]===void 0||l===!0||l===void 0&&s[h]!==!1)&&(s[h||p]=K(c))}const i=(c,p)=>a.forEach(c,(l,u)=>o(l,u,p));if(a.isPlainObject(t)||t instanceof this.constructor)i(t,n);else if(a.isString(t)&&(t=t.trim())&&!Sn(t))i(gn(t),n);else if(a.isHeaders(t))for(const[c,p]of t.entries())o(p,c,r);else t!=null&&o(n,t,r);return this}get(t,n){if(t=z(t),t){const r=a.findKey(this,t);if(r){const s=this[r];if(!n)return s;if(n===!0)return En(s);if(a.isFunction(n))return n.call(this,s,r);if(a.isRegExp(n))return n.exec(s);throw new TypeError("parser must be boolean|regexp|function")}}}has(t,n){if(t=z(t),t){const r=a.findKey(this,t);return!!(r&&this[r]!==void 0&&(!n||ue(this,this[r],r,n)))}return!1}delete(t,n){const r=this;let s=!1;function o(i){if(i=z(i),i){const c=a.findKey(r,i);c&&(!n||ue(r,r[c],c,n))&&(delete r[c],s=!0)}}return a.isArray(t)?t.forEach(o):o(t),s}clear(t){const n=Object.keys(this);let r=n.length,s=!1;for(;r--;){const o=n[r];(!t||ue(this,this[o],o,t,!0))&&(delete this[o],s=!0)}return s}normalize(t){const n=this,r={};return a.forEach(this,(s,o)=>{const i=a.findKey(r,o);if(i){n[i]=K(s),delete n[o];return}const c=t?xn(o):String(o).trim();c!==o&&delete n[o],n[c]=K(s),r[c]=!0}),this}concat(...t){return this.constructor.concat(this,...t)}toJSON(t){const n=Object.create(null);return a.forEach(this,(r,s)=>{r!=null&&r!==!1&&(n[s]=t&&a.isArray(r)?r.join(", "):r)}),n}[Symbol.iterator](){return Object.entries(this.toJSON())[Symbol.iterator]()}toString(){return Object.entries(this.toJSON()).map(([t,n])=>t+": "+n).join(`
`)}get[Symbol.toStringTag](){return"AxiosHeaders"}static from(t){return t instanceof this?t:new this(t)}static concat(t,...n){const r=new this(t);return n.forEach(s=>r.set(s)),r}static accessor(t){const r=(this[je]=this[je]={accessors:{}}).accessors,s=this.prototype;function o(i){const c=z(i);r[c]||(Rn(s,i),r[c]=!0)}return a.isArray(t)?t.forEach(o):o(t),this}}A.accessor(["Content-Type","Content-Length","Accept","Accept-Encoding","User-Agent","Authorization"]);a.reduceDescriptors(A.prototype,({value:e},t)=>{let n=t[0].toUpperCase()+t.slice(1);return{get:()=>e,set(r){this[n]=r}}});a.freezeMethods(A);function fe(e,t){const n=this||$,r=t||n,s=A.from(r.headers);let o=r.data;return a.forEach(e,function(c){o=c.call(n,o,s.normalize(),t?t.status:void 0)}),s.normalize(),o}function tt(e){return!!(e&&e.__CANCEL__)}function q(e,t,n){y.call(this,e??"canceled",y.ERR_CANCELED,t,n),this.name="CanceledError"}a.inherits(q,y,{__CANCEL__:!0});function nt(e,t,n){const r=n.config.validateStatus;!n.status||!r||r(n.status)?e(n):t(new y("Request failed with status code "+n.status,[y.ERR_BAD_REQUEST,y.ERR_BAD_RESPONSE][Math.floor(n.status/100)-4],n.config,n.request,n))}function Tn(e){const t=/^([-+\w]{1,25})(:?\/\/|:)/.exec(e);return t&&t[1]||""}function On(e,t){e=e||10;const n=new Array(e),r=new Array(e);let s=0,o=0,i;return t=t!==void 0?t:1e3,function(p){const l=Date.now(),u=r[o];i||(i=l),n[s]=p,r[s]=l;let h=o,g=0;for(;h!==s;)g+=n[h++],h=h%e;if(s=(s+1)%e,s===o&&(o=(o+1)%e),l-i<t)return;const E=u&&l-u;return E?Math.round(g*1e3/E):void 0}}function An(e,t){let n=0,r=1e3/t,s,o;const i=(l,u=Date.now())=>{n=u,s=null,o&&(clearTimeout(o),o=null),e.apply(null,l)};return[(...l)=>{const u=Date.now(),h=u-n;h>=r?i(l,u):(s=l,o||(o=setTimeout(()=>{o=null,i(s)},r-h)))},()=>s&&i(s)]}const X=(e,t,n=3)=>{let r=0;const s=On(50,250);return An(o=>{const i=o.loaded,c=o.lengthComputable?o.total:void 0,p=i-r,l=s(p),u=i<=c;r=i;const h={loaded:i,total:c,progress:c?i/c:void 0,bytes:p,rate:l||void 0,estimated:l&&c&&u?(c-i)/l:void 0,event:o,lengthComputable:c!=null,[t?"download":"upload"]:!0};e(h)},n)},Fe=(e,t)=>{const n=e!=null;return[r=>t[0]({lengthComputable:n,total:e,loaded:r}),t[1]]},Be=e=>(...t)=>a.asap(()=>e(...t)),Cn=O.hasStandardBrowserEnv?function(){const t=O.navigator&&/(msie|trident)/i.test(O.navigator.userAgent),n=document.createElement("a");let r;function s(o){let i=o;return t&&(n.setAttribute("href",i),i=n.href),n.setAttribute("href",i),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=s(window.location.href),function(i){const c=a.isString(i)?s(i):i;return c.protocol===r.protocol&&c.host===r.host}}():function(){return function(){return!0}}(),Nn=O.hasStandardBrowserEnv?{write(e,t,n,r,s,o){const i=[e+"="+encodeURIComponent(t)];a.isNumber(n)&&i.push("expires="+new Date(n).toGMTString()),a.isString(r)&&i.push("path="+r),a.isString(s)&&i.push("domain="+s),o===!0&&i.push("secure"),document.cookie=i.join("; ")},read(e){const t=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return t?decodeURIComponent(t[3]):null},remove(e){this.write(e,"",Date.now()-864e5)}}:{write(){},read(){return null},remove(){}};function Pn(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)}function jn(e,t){return t?e.replace(/\/?\/$/,"")+"/"+t.replace(/^\/+/,""):e}function rt(e,t){return e&&!Pn(t)?jn(e,t):t}const ke=e=>e instanceof A?{...e}:e;function D(e,t){t=t||{};const n={};function r(l,u,h){return a.isPlainObject(l)&&a.isPlainObject(u)?a.merge.call({caseless:h},l,u):a.isPlainObject(u)?a.merge({},u):a.isArray(u)?u.slice():u}function s(l,u,h){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l,h)}else return r(l,u,h)}function o(l,u){if(!a.isUndefined(u))return r(void 0,u)}function i(l,u){if(a.isUndefined(u)){if(!a.isUndefined(l))return r(void 0,l)}else return r(void 0,u)}function c(l,u,h){if(h in t)return r(l,u);if(h in e)return r(void 0,l)}const p={url:o,method:o,data:o,baseURL:i,transformRequest:i,transformResponse:i,paramsSerializer:i,timeout:i,timeoutMessage:i,withCredentials:i,withXSRFToken:i,adapter:i,responseType:i,xsrfCookieName:i,xsrfHeaderName:i,onUploadProgress:i,onDownloadProgress:i,decompress:i,maxContentLength:i,maxBodyLength:i,beforeRedirect:i,transport:i,httpAgent:i,httpsAgent:i,cancelToken:i,socketPath:i,responseEncoding:i,validateStatus:c,headers:(l,u)=>s(ke(l),ke(u),!0)};return a.forEach(Object.keys(Object.assign({},e,t)),function(u){const h=p[u]||s,g=h(e[u],t[u],u);a.isUndefined(g)&&h!==c||(n[u]=g)}),n}const st=e=>{const t=D({},e);let{data:n,withXSRFToken:r,xsrfHeaderName:s,xsrfCookieName:o,headers:i,auth:c}=t;t.headers=i=A.from(i),t.url=Qe(rt(t.baseURL,t.url),e.params,e.paramsSerializer),c&&i.set("Authorization","Basic "+btoa((c.username||"")+":"+(c.password?unescape(encodeURIComponent(c.password)):"")));let p;if(a.isFormData(n)){if(O.hasStandardBrowserEnv||O.hasStandardBrowserWebWorkerEnv)i.setContentType(void 0);else if((p=i.getContentType())!==!1){const[l,...u]=p?p.split(";").map(h=>h.trim()).filter(Boolean):[];i.setContentType([l||"multipart/form-data",...u].join("; "))}}if(O.hasStandardBrowserEnv&&(r&&a.isFunction(r)&&(r=r(t)),r||r!==!1&&Cn(t.url))){const l=s&&o&&Nn.read(o);l&&i.set(s,l)}return t},Fn=typeof XMLHttpRequest<"u",Bn=Fn&&function(e){return new Promise(function(n,r){const s=st(e);let o=s.data;const i=A.from(s.headers).normalize();let{responseType:c,onUploadProgress:p,onDownloadProgress:l}=s,u,h,g,E,d;function m(){E&&E(),d&&d(),s.cancelToken&&s.cancelToken.unsubscribe(u),s.signal&&s.signal.removeEventListener("abort",u)}let f=new XMLHttpRequest;f.open(s.method.toUpperCase(),s.url,!0),f.timeout=s.timeout;function w(){if(!f)return;const x=A.from("getAllResponseHeaders"in f&&f.getAllResponseHeaders()),T={data:!c||c==="text"||c==="json"?f.responseText:f.response,status:f.status,statusText:f.statusText,headers:x,config:e,request:f};nt(function(B){n(B),m()},function(B){r(B),m()},T),f=null}"onloadend"in f?f.onloadend=w:f.onreadystatechange=function(){!f||f.readyState!==4||f.status===0&&!(f.responseURL&&f.responseURL.indexOf("file:")===0)||setTimeout(w)},f.onabort=function(){f&&(r(new y("Request aborted",y.ECONNABORTED,e,f)),f=null)},f.onerror=function(){r(new y("Network Error",y.ERR_NETWORK,e,f)),f=null},f.ontimeout=function(){let P=s.timeout?"timeout of "+s.timeout+"ms exceeded":"timeout exceeded";const T=s.transitional||Ye;s.timeoutErrorMessage&&(P=s.timeoutErrorMessage),r(new y(P,T.clarifyTimeoutError?y.ETIMEDOUT:y.ECONNABORTED,e,f)),f=null},o===void 0&&i.setContentType(null),"setRequestHeader"in f&&a.forEach(i.toJSON(),function(P,T){f.setRequestHeader(T,P)}),a.isUndefined(s.withCredentials)||(f.withCredentials=!!s.withCredentials),c&&c!=="json"&&(f.responseType=s.responseType),l&&([g,d]=X(l,!0),f.addEventListener("progress",g)),p&&f.upload&&([h,E]=X(p),f.upload.addEventListener("progress",h),f.upload.addEventListener("loadend",E)),(s.cancelToken||s.signal)&&(u=x=>{f&&(r(!x||x.type?new q(null,e,f):x),f.abort(),f=null)},s.cancelToken&&s.cancelToken.subscribe(u),s.signal&&(s.signal.aborted?u():s.signal.addEventListener("abort",u)));const S=Tn(s.url);if(S&&O.protocols.indexOf(S)===-1){r(new y("Unsupported protocol "+S+":",y.ERR_BAD_REQUEST,e));return}f.send(o||null)})},kn=(e,t)=>{const{length:n}=e=e?e.filter(Boolean):[];if(t||n){let r=new AbortController,s;const o=function(l){if(!s){s=!0,c();const u=l instanceof Error?l:this.reason;r.abort(u instanceof y?u:new q(u instanceof Error?u.message:u))}};let i=t&&setTimeout(()=>{i=null,o(new y(`timeout ${t} of ms exceeded`,y.ETIMEDOUT))},t);const c=()=>{e&&(i&&clearTimeout(i),i=null,e.forEach(l=>{l.unsubscribe?l.unsubscribe(o):l.removeEventListener("abort",o)}),e=null)};e.forEach(l=>l.addEventListener("abort",o));const{signal:p}=r;return p.unsubscribe=()=>a.asap(c),p}},_n=function*(e,t){let n=e.byteLength;if(n<t){yield e;return}let r=0,s;for(;r<n;)s=r+t,yield e.slice(r,s),r=s},Ln=async function*(e,t){for await(const n of Dn(e))yield*_n(n,t)},Dn=async function*(e){if(e[Symbol.asyncIterator]){yield*e;return}const t=e.getReader();try{for(;;){const{done:n,value:r}=await t.read();if(n)break;yield r}}finally{await t.cancel()}},_e=(e,t,n,r)=>{const s=Ln(e,t);let o=0,i,c=p=>{i||(i=!0,r&&r(p))};return new ReadableStream({async pull(p){try{const{done:l,value:u}=await s.next();if(l){c(),p.close();return}let h=u.byteLength;if(n){let g=o+=h;n(g)}p.enqueue(new Uint8Array(u))}catch(l){throw c(l),l}},cancel(p){return c(p),s.return()}},{highWaterMark:2})},te=typeof fetch=="function"&&typeof Request=="function"&&typeof Response=="function",ot=te&&typeof ReadableStream=="function",Un=te&&(typeof TextEncoder=="function"?(e=>t=>e.encode(t))(new TextEncoder):async e=>new Uint8Array(await new Response(e).arrayBuffer())),it=(e,...t)=>{try{return!!e(...t)}catch{return!1}},In=ot&&it(()=>{let e=!1;const t=new Request(O.origin,{body:new ReadableStream,method:"POST",get duplex(){return e=!0,"half"}}).headers.has("Content-Type");return e&&!t}),Le=64*1024,ye=ot&&it(()=>a.isReadableStream(new Response("").body)),G={stream:ye&&(e=>e.body)};te&&(e=>{["text","arrayBuffer","blob","formData","stream"].forEach(t=>{!G[t]&&(G[t]=a.isFunction(e[t])?n=>n[t]():(n,r)=>{throw new y(`Response type '${t}' is not supported`,y.ERR_NOT_SUPPORT,r)})})})(new Response);const Mn=async e=>{if(e==null)return 0;if(a.isBlob(e))return e.size;if(a.isSpecCompliantForm(e))return(await new Request(O.origin,{method:"POST",body:e}).arrayBuffer()).byteLength;if(a.isArrayBufferView(e)||a.isArrayBuffer(e))return e.byteLength;if(a.isURLSearchParams(e)&&(e=e+""),a.isString(e))return(await Un(e)).byteLength},qn=async(e,t)=>{const n=a.toFiniteNumber(e.getContentLength());return n??Mn(t)},Hn=te&&(async e=>{let{url:t,method:n,data:r,signal:s,cancelToken:o,timeout:i,onDownloadProgress:c,onUploadProgress:p,responseType:l,headers:u,withCredentials:h="same-origin",fetchOptions:g}=st(e);l=l?(l+"").toLowerCase():"text";let E=kn([s,o&&o.toAbortSignal()],i),d;const m=E&&E.unsubscribe&&(()=>{E.unsubscribe()});let f;try{if(p&&In&&n!=="get"&&n!=="head"&&(f=await qn(u,r))!==0){let T=new Request(t,{method:"POST",body:r,duplex:"half"}),j;if(a.isFormData(r)&&(j=T.headers.get("content-type"))&&u.setContentType(j),T.body){const[B,U]=Fe(f,X(Be(p)));r=_e(T.body,Le,B,U)}}a.isString(h)||(h=h?"include":"omit");const w="credentials"in Request.prototype;d=new Request(t,{...g,signal:E,method:n.toUpperCase(),headers:u.normalize().toJSON(),body:r,duplex:"half",credentials:w?h:void 0});let S=await fetch(d);const x=ye&&(l==="stream"||l==="response");if(ye&&(c||x&&m)){const T={};["status","statusText","headers"].forEach(N=>{T[N]=S[N]});const j=a.toFiniteNumber(S.headers.get("content-length")),[B,U]=c&&Fe(j,X(Be(c),!0))||[];S=new Response(_e(S.body,Le,B,()=>{U&&U(),m&&m()}),T)}l=l||"text";let P=await G[a.findKey(G,l)||"text"](S,e);return!x&&m&&m(),await new Promise((T,j)=>{nt(T,j,{data:P,headers:A.from(S.headers),status:S.status,statusText:S.statusText,config:e,request:d})})}catch(w){throw m&&m(),w&&w.name==="TypeError"&&/fetch/i.test(w.message)?Object.assign(new y("Network Error",y.ERR_NETWORK,e,d),{cause:w.cause||w}):y.from(w,w&&w.code,e,d)}}),be={http:tn,xhr:Bn,fetch:Hn};a.forEach(be,(e,t)=>{if(e){try{Object.defineProperty(e,"name",{value:t})}catch{}Object.defineProperty(e,"adapterName",{value:t})}});const De=e=>`- ${e}`,vn=e=>a.isFunction(e)||e===null||e===!1,at={getAdapter:e=>{e=a.isArray(e)?e:[e];const{length:t}=e;let n,r;const s={};for(let o=0;o<t;o++){n=e[o];let i;if(r=n,!vn(n)&&(r=be[(i=String(n)).toLowerCase()],r===void 0))throw new y(`Unknown adapter '${i}'`);if(r)break;s[i||"#"+o]=r}if(!r){const o=Object.entries(s).map(([c,p])=>`adapter ${c} `+(p===!1?"is not supported by the environment":"is not available in the build"));let i=t?o.length>1?`since :
`+o.map(De).join(`
`):" "+De(o[0]):"as no adapter specified";throw new y("There is no suitable adapter to dispatch the request "+i,"ERR_NOT_SUPPORT")}return r},adapters:be};function de(e){if(e.cancelToken&&e.cancelToken.throwIfRequested(),e.signal&&e.signal.aborted)throw new q(null,e)}function Ue(e){return de(e),e.headers=A.from(e.headers),e.data=fe.call(e,e.transformRequest),["post","put","patch"].indexOf(e.method)!==-1&&e.headers.setContentType("application/x-www-form-urlencoded",!1),at.getAdapter(e.adapter||$.adapter)(e).then(function(r){return de(e),r.data=fe.call(e,e.transformResponse,r),r.headers=A.from(r.headers),r},function(r){return tt(r)||(de(e),r&&r.response&&(r.response.data=fe.call(e,e.transformResponse,r.response),r.response.headers=A.from(r.response.headers))),Promise.reject(r)})}const ct="1.7.7",Re={};["object","boolean","number","function","string","symbol"].forEach((e,t)=>{Re[e]=function(r){return typeof r===e||"a"+(t<1?"n ":" ")+e}});const Ie={};Re.transitional=function(t,n,r){function s(o,i){return"[Axios v"+ct+"] Transitional option '"+o+"'"+i+(r?". "+r:"")}return(o,i,c)=>{if(t===!1)throw new y(s(i," has been removed"+(n?" in "+n:"")),y.ERR_DEPRECATED);return n&&!Ie[i]&&(Ie[i]=!0,console.warn(s(i," has been deprecated since v"+n+" and will be removed in the near future"))),t?t(o,i,c):!0}};function zn(e,t,n){if(typeof e!="object")throw new y("options must be an object",y.ERR_BAD_OPTION_VALUE);const r=Object.keys(e);let s=r.length;for(;s-- >0;){const o=r[s],i=t[o];if(i){const c=e[o],p=c===void 0||i(c,o,e);if(p!==!0)throw new y("option "+o+" must be "+p,y.ERR_BAD_OPTION_VALUE);continue}if(n!==!0)throw new y("Unknown option "+o,y.ERR_BAD_OPTION)}}const we={assertOptions:zn,validators:Re},k=we.validators;class L{constructor(t){this.defaults=t,this.interceptors={request:new Pe,response:new Pe}}async request(t,n){try{return await this._request(t,n)}catch(r){if(r instanceof Error){let s;Error.captureStackTrace?Error.captureStackTrace(s={}):s=new Error;const o=s.stack?s.stack.replace(/^.+\n/,""):"";try{r.stack?o&&!String(r.stack).endsWith(o.replace(/^.+\n.+\n/,""))&&(r.stack+=`
`+o):r.stack=o}catch{}}throw r}}_request(t,n){typeof t=="string"?(n=n||{},n.url=t):n=t||{},n=D(this.defaults,n);const{transitional:r,paramsSerializer:s,headers:o}=n;r!==void 0&&we.assertOptions(r,{silentJSONParsing:k.transitional(k.boolean),forcedJSONParsing:k.transitional(k.boolean),clarifyTimeoutError:k.transitional(k.boolean)},!1),s!=null&&(a.isFunction(s)?n.paramsSerializer={serialize:s}:we.assertOptions(s,{encode:k.function,serialize:k.function},!0)),n.method=(n.method||this.defaults.method||"get").toLowerCase();let i=o&&a.merge(o.common,o[n.method]);o&&a.forEach(["delete","get","head","post","put","patch","common"],d=>{delete o[d]}),n.headers=A.concat(i,o);const c=[];let p=!0;this.interceptors.request.forEach(function(m){typeof m.runWhen=="function"&&m.runWhen(n)===!1||(p=p&&m.synchronous,c.unshift(m.fulfilled,m.rejected))});const l=[];this.interceptors.response.forEach(function(m){l.push(m.fulfilled,m.rejected)});let u,h=0,g;if(!p){const d=[Ue.bind(this),void 0];for(d.unshift.apply(d,c),d.push.apply(d,l),g=d.length,u=Promise.resolve(n);h<g;)u=u.then(d[h++],d[h++]);return u}g=c.length;let E=n;for(h=0;h<g;){const d=c[h++],m=c[h++];try{E=d(E)}catch(f){m.call(this,f);break}}try{u=Ue.call(this,E)}catch(d){return Promise.reject(d)}for(h=0,g=l.length;h<g;)u=u.then(l[h++],l[h++]);return u}getUri(t){t=D(this.defaults,t);const n=rt(t.baseURL,t.url);return Qe(n,t.params,t.paramsSerializer)}}a.forEach(["delete","get","head","options"],function(t){L.prototype[t]=function(n,r){return this.request(D(r||{},{method:t,url:n,data:(r||{}).data}))}});a.forEach(["post","put","patch"],function(t){function n(r){return function(o,i,c){return this.request(D(c||{},{method:t,headers:r?{"Content-Type":"multipart/form-data"}:{},url:o,data:i}))}}L.prototype[t]=n(),L.prototype[t+"Form"]=n(!0)});class Te{constructor(t){if(typeof t!="function")throw new TypeError("executor must be a function.");let n;this.promise=new Promise(function(o){n=o});const r=this;this.promise.then(s=>{if(!r._listeners)return;let o=r._listeners.length;for(;o-- >0;)r._listeners[o](s);r._listeners=null}),this.promise.then=s=>{let o;const i=new Promise(c=>{r.subscribe(c),o=c}).then(s);return i.cancel=function(){r.unsubscribe(o)},i},t(function(o,i,c){r.reason||(r.reason=new q(o,i,c),n(r.reason))})}throwIfRequested(){if(this.reason)throw this.reason}subscribe(t){if(this.reason){t(this.reason);return}this._listeners?this._listeners.push(t):this._listeners=[t]}unsubscribe(t){if(!this._listeners)return;const n=this._listeners.indexOf(t);n!==-1&&this._listeners.splice(n,1)}toAbortSignal(){const t=new AbortController,n=r=>{t.abort(r)};return this.subscribe(n),t.signal.unsubscribe=()=>this.unsubscribe(n),t.signal}static source(){let t;return{token:new Te(function(s){t=s}),cancel:t}}}function Jn(e){return function(n){return e.apply(null,n)}}function Vn(e){return a.isObject(e)&&e.isAxiosError===!0}const ge={Continue:100,SwitchingProtocols:101,Processing:102,EarlyHints:103,Ok:200,Created:201,Accepted:202,NonAuthoritativeInformation:203,NoContent:204,ResetContent:205,PartialContent:206,MultiStatus:207,AlreadyReported:208,ImUsed:226,MultipleChoices:300,MovedPermanently:301,Found:302,SeeOther:303,NotModified:304,UseProxy:305,Unused:306,TemporaryRedirect:307,PermanentRedirect:308,BadRequest:400,Unauthorized:401,PaymentRequired:402,Forbidden:403,NotFound:404,MethodNotAllowed:405,NotAcceptable:406,ProxyAuthenticationRequired:407,RequestTimeout:408,Conflict:409,Gone:410,LengthRequired:411,PreconditionFailed:412,PayloadTooLarge:413,UriTooLong:414,UnsupportedMediaType:415,RangeNotSatisfiable:416,ExpectationFailed:417,ImATeapot:418,MisdirectedRequest:421,UnprocessableEntity:422,Locked:423,FailedDependency:424,TooEarly:425,UpgradeRequired:426,PreconditionRequired:428,TooManyRequests:429,RequestHeaderFieldsTooLarge:431,UnavailableForLegalReasons:451,InternalServerError:500,NotImplemented:501,BadGateway:502,ServiceUnavailable:503,GatewayTimeout:504,HttpVersionNotSupported:505,VariantAlsoNegotiates:506,InsufficientStorage:507,LoopDetected:508,NotExtended:510,NetworkAuthenticationRequired:511};Object.entries(ge).forEach(([e,t])=>{ge[t]=e});function lt(e){const t=new L(e),n=qe(L.prototype.request,t);return a.extend(n,L.prototype,t,{allOwnKeys:!0}),a.extend(n,t,null,{allOwnKeys:!0}),n.create=function(s){return lt(D(e,s))},n}const R=lt($);R.Axios=L;R.CanceledError=q;R.CancelToken=Te;R.isCancel=tt;R.VERSION=ct;R.toFormData=ee;R.AxiosError=y;R.Cancel=R.CanceledError;R.all=function(t){return Promise.all(t)};R.spread=Jn;R.isAxiosError=Vn;R.mergeConfig=D;R.AxiosHeaders=A;R.formToJSON=e=>et(a.isHTMLForm(e)?new FormData(e):e);R.getAdapter=at.getAdapter;R.HttpStatusCode=ge;R.default=R;const Me="missionsCache",$n=24*60*60*1e3,Gn=()=>{const[e,t]=H.useState([]),[n,r]=H.useState(null),[s,o]=H.useState(""),i="1gizwwE0gqZy30G0pZ1dMo2Nj8pxCEv9k",c="AIzaSyBNb0_gNZn-N_VHXelkO4TjFlSQXhGD2p0",p=ft(),l=H.useRef(null),u=async()=>{try{const w=(await R.get(`https://www.googleapis.com/drive/v3/files?q='${i}'+in+parents&key=${c}&fields=files(id,name,mimeType)`)).data.files.filter(N=>N.mimeType==="application/pdf").sort((N,ut)=>N.name.localeCompare(ut.name)),S=/^(January|February|March|April|May|June|July|August|September|October|November|December)\b/i,x=/\d+a\b/i,P=/\d+b\b/i,T=w.filter(N=>S.test(N.name)),j=w.filter(N=>x.test(N.name)),B=w.filter(N=>P.test(N.name));t({customMissions:T,incursionStrikeForceA:j,incursionStrikeForceB:B});const U=new Date().getTime();localStorage.setItem(Me,JSON.stringify({missions:{customMissions:T,incursionStrikeForceA:j,incursionStrikeForceB:B},timestamp:U}))}catch(f){console.error("Error fetching missions:",f)}},h=()=>{const f=JSON.parse(localStorage.getItem(Me)),w=new Date().getTime();f&&w-f.timestamp<$n?t(f.missions):u()};H.useEffect(()=>{h()},[]);const g=()=>{u()},E=f=>`https://drive.google.com/file/d/${f}/preview`,d=f=>f.filter(w=>w.name.toLowerCase().includes(s.toLowerCase())),m=f=>{r(f),setTimeout(()=>{var w;(w=l.current)==null||w.scrollIntoView({behavior:"smooth",block:"start"})},100)};return b.jsxs(b.Fragment,{children:[b.jsx(dt,{onExportPDF:null,onNavigateHome:()=>p("/"),context:"Missions",currentPage:"Missions"}),b.jsxs(pt,{sx:{paddingTop:{xs:"56px",sm:"64px"},maxWidth:"100%"},children:[b.jsx(I,{display:"flex",justifyContent:"space-between",alignItems:"center",width:"100%",marginTop:4,children:b.jsx(v,{variant:"h4",gutterBottom:!0,children:"Missions"})}),b.jsxs(I,{display:"flex",justifyContent:"space-between",marginBottom:2,children:[b.jsx(ht,{fullWidth:!0,label:"Search Missions",variant:"outlined",value:s,onChange:f=>o(f.target.value),placeholder:"Search for missions...",InputLabelProps:{style:{color:"#ffffff"}},InputProps:{style:{color:"#ffffff",backgroundColor:"#424242",borderRadius:"8px"}},sx:{"& .MuiOutlinedInput-root":{"& fieldset":{borderColor:"#ffffff"},"&:hover fieldset":{borderColor:"#90caf9"},"&.Mui-focused fieldset":{borderColor:"#90caf9"}}}}),b.jsx(mt,{variant:"contained",color:"primary",onClick:g,sx:{marginLeft:2},children:"Refresh Data"})]}),e.customMissions&&d(e.customMissions).length>0&&b.jsxs(ne,{sx:{borderRadius:"8px",overflow:"hidden",backgroundColor:"#333333",color:"#ffffff"},children:[b.jsx(re,{expandIcon:b.jsx(se,{}),sx:{backgroundColor:"#333333",color:"#ffffff"},children:b.jsx(v,{variant:"h5",children:"Custom Missions"})}),b.jsx(oe,{sx:{padding:0},children:b.jsx(I,{sx:{backgroundColor:"#424242",width:"100%"},children:b.jsx(ce,{sx:{padding:0},children:d(e.customMissions).map((f,w)=>b.jsx(ie,{component:"button",onClick:()=>m(f),sx:{borderBottom:"1px solid #333",width:"100%",margin:0,padding:"8px 16px","&:hover":{backgroundColor:"#555555"}},children:b.jsx(ae,{primary:f.name})},w))})})})]}),e.incursionStrikeForceA&&d(e.incursionStrikeForceA).length>0&&b.jsxs(ne,{sx:{borderRadius:"8px",overflow:"hidden",backgroundColor:"#333333",color:"#ffffff"},children:[b.jsx(re,{expandIcon:b.jsx(se,{}),sx:{backgroundColor:"#333333",color:"#ffffff"},children:b.jsx(v,{variant:"h5",children:"Incursion/Strike Force A"})}),b.jsx(oe,{sx:{padding:0},children:b.jsx(I,{sx:{backgroundColor:"#424242",width:"100%"},children:b.jsx(ce,{sx:{padding:0},children:d(e.incursionStrikeForceA).map((f,w)=>b.jsx(ie,{component:"button",onClick:()=>m(f),sx:{borderBottom:"1px solid #333",width:"100%",margin:0,padding:"8px 16px","&:hover":{backgroundColor:"#555555"}},children:b.jsx(ae,{primary:f.name})},w))})})})]}),e.incursionStrikeForceB&&d(e.incursionStrikeForceB).length>0&&b.jsxs(ne,{sx:{borderRadius:"8px",overflow:"hidden",backgroundColor:"#333333",color:"#ffffff"},children:[b.jsx(re,{expandIcon:b.jsx(se,{}),sx:{backgroundColor:"#333333",color:"#ffffff"},children:b.jsx(v,{variant:"h5",children:"Incursion/Strike Force B"})}),b.jsx(oe,{sx:{padding:0},children:b.jsx(I,{sx:{backgroundColor:"#424242",width:"100%"},children:b.jsx(ce,{sx:{padding:0},children:d(e.incursionStrikeForceB).map((f,w)=>b.jsx(ie,{component:"button",onClick:()=>m(f),sx:{borderBottom:"1px solid #333",width:"100%",margin:0,padding:"8px 16px","&:hover":{backgroundColor:"#555555"}},children:b.jsx(ae,{primary:f.name})},w))})})})]}),n&&b.jsxs(I,{ref:l,marginTop:4,width:"100%",children:[b.jsxs(v,{variant:"h6",gutterBottom:!0,children:["Viewing: ",n.name]}),b.jsx("iframe",{src:E(n.id),width:"100%",height:"600px",style:{border:"none"},title:n.name,onError:()=>console.error("Error loading PDF in iframe")},n==null?void 0:n.id)]})]})]})};export{Gn as default};
