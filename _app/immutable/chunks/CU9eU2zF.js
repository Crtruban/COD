import{l as mt,t as cn}from"./DIeogL5L.js";const It=!1;var vn=Array.isArray,pn=Array.prototype.indexOf,ne=Array.from,ee=Object.defineProperty,K=Object.getOwnPropertyDescriptor,hn=Object.getOwnPropertyDescriptors,dn=Object.prototype,wn=Array.prototype,Ft=Object.getPrototypeOf,St=Object.isExtensible;function re(t){return typeof t=="function"}const ae=()=>{};function le(t){return t()}function Mt(t){for(var n=0;n<t.length;n++)t[n]()}const I=2,Lt=4,it=8,Tt=16,S=32,U=64,et=128,x=256,rt=512,E=1024,D=2048,q=4096,B=8192,ot=16384,yn=32768,qt=65536,se=1<<17,En=1<<19,jt=1<<20,dt=1<<21,Z=Symbol("$state"),ue=Symbol("legacy props"),fe=Symbol("");function Yt(t){return t===this.v}function gn(t,n){return t!=t?n==n:t!==n||t!==null&&typeof t=="object"||typeof t=="function"}function Bt(t){return!gn(t,this.v)}function mn(t){throw new Error("https://svelte.dev/e/effect_in_teardown")}function Tn(){throw new Error("https://svelte.dev/e/effect_in_unowned_derived")}function xn(t){throw new Error("https://svelte.dev/e/effect_orphan")}function An(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function ie(){throw new Error("https://svelte.dev/e/hydration_failed")}function oe(t){throw new Error("https://svelte.dev/e/props_invalid_value")}function Rn(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function bn(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function On(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}const _e=1,ce=2,ve=16,pe=1,he=2,de=4,we=8,ye=16,Ee=4,ge=1,me=2,In="[",Sn="[!",Dn="]",Ht={},g=Symbol(),Te="http://www.w3.org/1999/xhtml",xe="http://www.w3.org/2000/svg";function Ut(t){console.warn("https://svelte.dev/e/hydration_mismatch")}function Ae(){throw new Error("https://svelte.dev/e/invalid_default_snippet")}function Nn(t){throw new Error("https://svelte.dev/e/lifecycle_outside_component")}let p=null;function Dt(t){p=t}function Re(t){return Gt().get(t)}function be(t,n){return Gt().set(t,n),n}function Oe(t,n=!1,e){var r=p={p,c:null,d:!1,e:null,m:!1,s:t,x:null,l:null};mt&&!n&&(p.l={s:null,u:null,r1:[],r2:xt(!1)}),qn(()=>{r.d=!0})}function Ie(t){const n=p;if(n!==null){const _=n.e;if(_!==null){var e=h,r=v;n.e=null;try{for(var l=0;l<_.length;l++){var a=_[l];st(a.effect),H(a.reaction),Wt(a.fn)}}finally{st(e),H(r)}}p=n.p,n.m=!0}return{}}function _t(){return!mt||p!==null&&p.l===null}function Gt(t){return p===null&&Nn(),p.c??(p.c=new Map(kn(p)||void 0))}function kn(t){let n=t.p;for(;n!==null;){const e=n.c;if(e!==null)return e;n=n.p}return null}function Y(t,n){if(typeof t!="object"||t===null||Z in t)return t;const e=Ft(t);if(e!==dn&&e!==wn)return t;var r=new Map,l=vn(t),a=k(0),_=v,c=f=>{var s=v;H(_);var u;return u=f(),H(s),u};return l&&r.set("length",k(t.length)),new Proxy(t,{defineProperty(f,s,u){(!("value"in u)||u.configurable===!1||u.enumerable===!1||u.writable===!1)&&Rn();var i=r.get(s);return i===void 0?(i=c(()=>k(u.value)),r.set(s,i)):A(i,c(()=>Y(u.value))),!0},deleteProperty(f,s){var u=r.get(s);if(u===void 0)s in f&&r.set(s,c(()=>k(g)));else{if(l&&typeof s=="string"){var i=r.get("length"),o=Number(s);Number.isInteger(o)&&o<i.v&&A(i,o)}A(u,g),Nt(a)}return!0},get(f,s,u){var N;if(s===Z)return t;var i=r.get(s),o=s in f;if(i===void 0&&(!o||(N=K(f,s))!=null&&N.writable)&&(i=c(()=>k(Y(o?f[s]:g))),r.set(s,i)),i!==void 0){var d=C(i);return d===g?void 0:d}return Reflect.get(f,s,u)},getOwnPropertyDescriptor(f,s){var u=Reflect.getOwnPropertyDescriptor(f,s);if(u&&"value"in u){var i=r.get(s);i&&(u.value=C(i))}else if(u===void 0){var o=r.get(s),d=o==null?void 0:o.v;if(o!==void 0&&d!==g)return{enumerable:!0,configurable:!0,value:d,writable:!0}}return u},has(f,s){var d;if(s===Z)return!0;var u=r.get(s),i=u!==void 0&&u.v!==g||Reflect.has(f,s);if(u!==void 0||h!==null&&(!i||(d=K(f,s))!=null&&d.writable)){u===void 0&&(u=c(()=>k(i?Y(f[s]):g)),r.set(s,u));var o=C(u);if(o===g)return!1}return i},set(f,s,u,i){var Ot;var o=r.get(s),d=s in f;if(l&&s==="length")for(var N=u;N<o.v;N+=1){var Q=r.get(N+"");Q!==void 0?A(Q,g):N in f&&(Q=c(()=>k(g)),r.set(N+"",Q))}o===void 0?(!d||(Ot=K(f,s))!=null&&Ot.writable)&&(o=c(()=>k(void 0)),A(o,c(()=>Y(u))),r.set(s,o)):(d=o.v!==g,A(o,c(()=>Y(u))));var tt=Reflect.getOwnPropertyDescriptor(f,s);if(tt!=null&&tt.set&&tt.set.call(i,u),!d){if(l&&typeof s=="string"){var bt=r.get("length"),ht=Number(s);Number.isInteger(ht)&&ht>=bt.v&&A(bt,ht+1)}Nt(a)}return!0},ownKeys(f){C(a);var s=Reflect.ownKeys(f).filter(o=>{var d=r.get(o);return d===void 0||d.v!==g});for(var[u,i]of r)i.v!==g&&!(u in f)&&s.push(u);return s},setPrototypeOf(){bn()}})}function Nt(t,n=1){A(t,t.v+n)}const z=new Map;function xt(t,n){var e={f:0,v:t,reactions:null,equals:Yt,rv:0,wv:0};return e}function k(t,n){const e=xt(t);return an(e),e}function Se(t,n=!1){var r;const e=xt(t);return n||(e.equals=Bt),mt&&p!==null&&p.l!==null&&((r=p.l).s??(r.s=[])).push(e),e}function De(t,n){return A(t,_n(()=>C(t))),n}function A(t,n,e=!1){v!==null&&!O&&_t()&&(v.f&(I|Tt))!==0&&!(y!=null&&y.includes(t))&&On();let r=e?Y(n):n;return Pn(t,r)}function Pn(t,n){if(!t.equals(n)){var e=t.v;X?z.set(t,n):z.set(t,e),t.v=n,t.wv=sn(),Vt(t,D),_t()&&h!==null&&(h.f&E)!==0&&(h.f&(S|U))===0&&(T===null?Vn([t]):T.push(t))}return n}function Ne(t,n=1){var e=C(t),r=n===1?e++:e--;return A(t,e),r}function Vt(t,n){var e=t.reactions;if(e!==null)for(var r=_t(),l=e.length,a=0;a<l;a++){var _=e[a],c=_.f;(c&D)===0&&(!r&&_===h||(b(_,n),(c&(E|x))!==0&&((c&I)!==0?Vt(_,q):pt(_))))}}let M=!1;function ke(t){M=t}let R;function J(t){if(t===null)throw Ut(),Ht;return R=t}function Pe(){return J(j(R))}function Ce(t){if(M){if(j(R)!==null)throw Ut(),Ht;R=t}}function Fe(t=1){if(M){for(var n=t,e=R;n--;)e=j(e);R=e}}function Me(){for(var t=0,n=R;;){if(n.nodeType===8){var e=n.data;if(e===Dn){if(t===0)return n;t-=1}else(e===In||e===Sn)&&(t+=1)}var r=j(n);n.remove(),n=r}}var kt,Cn,Kt,Zt;function Le(){if(kt===void 0){kt=window,Cn=/Firefox/.test(navigator.userAgent);var t=Element.prototype,n=Node.prototype,e=Text.prototype;Kt=K(n,"firstChild").get,Zt=K(n,"nextSibling").get,St(t)&&(t.__click=void 0,t.__className=void 0,t.__attributes=null,t.__style=void 0,t.__e=void 0),St(e)&&(e.__t=void 0)}}function wt(t=""){return document.createTextNode(t)}function yt(t){return Kt.call(t)}function j(t){return Zt.call(t)}function qe(t,n){if(!M)return yt(t);var e=yt(R);if(e===null)e=R.appendChild(wt());else if(n&&e.nodeType!==3){var r=wt();return e==null||e.before(r),J(r),r}return J(e),e}function je(t,n){if(!M){var e=yt(t);return e instanceof Comment&&e.data===""?j(e):e}return R}function Ye(t,n=1,e=!1){let r=M?R:t;for(var l;n--;)l=r,r=j(r);if(!M)return r;var a=r==null?void 0:r.nodeType;if(e&&a!==3){var _=wt();return r===null?l==null||l.after(_):r.before(_),J(_),_}return J(r),r}function Be(t){t.textContent=""}function At(t){var n=I|D,e=v!==null&&(v.f&I)!==0?v:null;return h===null||e!==null&&(e.f&x)!==0?n|=x:h.f|=jt,{ctx:p,deps:null,effects:null,equals:Yt,f:n,fn:t,reactions:null,rv:0,v:null,wv:0,parent:e??h}}function He(t){const n=At(t);return an(n),n}function Ue(t){const n=At(t);return n.equals=Bt,n}function $t(t){var n=t.effects;if(n!==null){t.effects=null;for(var e=0;e<n.length;e+=1)L(n[e])}}function Fn(t){for(var n=t.parent;n!==null;){if((n.f&I)===0)return n;n=n.parent}return null}function Mn(t){var n,e=h;st(Fn(t));try{$t(t),n=fn(t)}finally{st(e)}return n}function zt(t){var n=Mn(t),e=(P||(t.f&x)!==0)&&t.deps!==null?q:E;b(t,e),t.equals(n)||(t.v=n,t.wv=sn())}function Jt(t){h===null&&v===null&&xn(),v!==null&&(v.f&x)!==0&&h===null&&Tn(),X&&mn()}function Ln(t,n){var e=n.last;e===null?n.last=n.first=t:(e.next=t,t.prev=e,n.last=t)}function G(t,n,e,r=!0){var l=h,a={ctx:p,deps:null,nodes_start:null,nodes_end:null,f:t|D,first:null,fn:n,last:null,next:null,parent:l,prev:null,teardown:null,transitions:null,wv:0};if(e)try{vt(a),a.f|=yn}catch(f){throw L(a),f}else n!==null&&pt(a);var _=e&&a.deps===null&&a.first===null&&a.nodes_start===null&&a.teardown===null&&(a.f&(jt|et))===0;if(!_&&r&&(l!==null&&Ln(a,l),v!==null&&(v.f&I)!==0)){var c=v;(c.effects??(c.effects=[])).push(a)}return a}function qn(t){const n=G(it,null,!1);return b(n,E),n.teardown=t,n}function Ge(t){Jt();var n=h!==null&&(h.f&S)!==0&&p!==null&&!p.m;if(n){var e=p;(e.e??(e.e=[])).push({fn:t,effect:h,reaction:v})}else{var r=Wt(t);return r}}function Ve(t){return Jt(),Rt(t)}function Ke(t){const n=G(U,t,!0);return(e={})=>new Promise(r=>{e.outro?Bn(n,()=>{L(n),r(void 0)}):(L(n),r(void 0))})}function Wt(t){return G(Lt,t,!1)}function Ze(t,n){var e=p,r={effect:null,ran:!1};e.l.r1.push(r),r.effect=Rt(()=>{t(),!r.ran&&(r.ran=!0,A(e.l.r2,!0),_n(n))})}function $e(){var t=p;Rt(()=>{if(C(t.l.r2)){for(var n of t.l.r1){var e=n.effect;(e.f&E)!==0&&b(e,q),V(e)&&vt(e),n.ran=!1}t.l.r2.v=!1}})}function Rt(t){return G(it,t,!0)}function ze(t,n=[],e=At){const r=n.map(e);return jn(()=>t(...r.map(C)))}function jn(t,n=0){return G(it|Tt|n,t,!0)}function Je(t,n=!0){return G(it|S,t,!0,n)}function Xt(t){var n=t.teardown;if(n!==null){const e=X,r=v;Ct(!0),H(null);try{n.call(null)}finally{Ct(e),H(r)}}}function Qt(t,n=!1){var e=t.first;for(t.first=t.last=null;e!==null;){var r=e.next;(e.f&U)!==0?e.parent=null:L(e,n),e=r}}function Yn(t){for(var n=t.first;n!==null;){var e=n.next;(n.f&S)===0&&L(n),n=e}}function L(t,n=!0){var e=!1;if((n||(t.f&En)!==0)&&t.nodes_start!==null){for(var r=t.nodes_start,l=t.nodes_end;r!==null;){var a=r===l?null:j(r);r.remove(),r=a}e=!0}Qt(t,n&&!e),ft(t,0),b(t,ot);var _=t.transitions;if(_!==null)for(const f of _)f.stop();Xt(t);var c=t.parent;c!==null&&c.first!==null&&tn(t),t.next=t.prev=t.teardown=t.ctx=t.deps=t.fn=t.nodes_start=t.nodes_end=null}function tn(t){var n=t.parent,e=t.prev,r=t.next;e!==null&&(e.next=r),r!==null&&(r.prev=e),n!==null&&(n.first===t&&(n.first=r),n.last===t&&(n.last=e))}function Bn(t,n){var e=[];nn(t,e,!0),Hn(e,()=>{L(t),n&&n()})}function Hn(t,n){var e=t.length;if(e>0){var r=()=>--e||n();for(var l of t)l.out(r)}else n()}function nn(t,n,e){if((t.f&B)===0){if(t.f^=B,t.transitions!==null)for(const _ of t.transitions)(_.is_global||e)&&n.push(_);for(var r=t.first;r!==null;){var l=r.next,a=(r.f&qt)!==0||(r.f&S)!==0;nn(r,n,a?e:!1),r=l}}}function We(t){en(t,!0)}function en(t,n){if((t.f&B)!==0){t.f^=B,(t.f&E)===0&&(t.f^=E),V(t)&&(b(t,D),pt(t));for(var e=t.first;e!==null;){var r=e.next,l=(e.f&qt)!==0||(e.f&S)!==0;en(e,l?n:!1),e=r}if(t.transitions!==null)for(const a of t.transitions)(a.is_global||n)&&a.in()}}let W=[],Et=[];function rn(){var t=W;W=[],Mt(t)}function Un(){var t=Et;Et=[],Mt(t)}function Xe(t){W.length===0&&queueMicrotask(rn),W.push(t)}function Pt(){W.length>0&&rn(),Et.length>0&&Un()}let nt=!1,at=!1,lt=null,F=!1,X=!1;function Ct(t){X=t}let $=[];let v=null,O=!1;function H(t){v=t}let h=null;function st(t){h=t}let y=null;function Gn(t){y=t}function an(t){v!==null&&v.f&dt&&(y===null?Gn([t]):y.push(t))}let w=null,m=0,T=null;function Vn(t){T=t}let ln=1,ut=0,P=!1;function sn(){return++ln}function V(t){var i;var n=t.f;if((n&D)!==0)return!0;if((n&q)!==0){var e=t.deps,r=(n&x)!==0;if(e!==null){var l,a,_=(n&rt)!==0,c=r&&h!==null&&!P,f=e.length;if(_||c){var s=t,u=s.parent;for(l=0;l<f;l++)a=e[l],(_||!((i=a==null?void 0:a.reactions)!=null&&i.includes(s)))&&(a.reactions??(a.reactions=[])).push(s);_&&(s.f^=rt),c&&u!==null&&(u.f&x)===0&&(s.f^=x)}for(l=0;l<f;l++)if(a=e[l],V(a)&&zt(a),a.wv>t.wv)return!0}(!r||h!==null&&!P)&&b(t,E)}return!1}function Kn(t,n){for(var e=n;e!==null;){if((e.f&et)!==0)try{e.fn(t);return}catch{e.f^=et}e=e.parent}throw nt=!1,t}function Zn(t){return(t.f&ot)===0&&(t.parent===null||(t.parent.f&et)===0)}function ct(t,n,e,r){if(nt){if(e===null&&(nt=!1),Zn(n))throw t;return}e!==null&&(nt=!0);{Kn(t,n);return}}function un(t,n,e=!0){var r=t.reactions;if(r!==null)for(var l=0;l<r.length;l++){var a=r[l];y!=null&&y.includes(t)||((a.f&I)!==0?un(a,n,!1):n===a&&(e?b(a,D):(a.f&E)!==0&&b(a,q),pt(a)))}}function fn(t){var d;var n=w,e=m,r=T,l=v,a=P,_=y,c=p,f=O,s=t.f;w=null,m=0,T=null,P=(s&x)!==0&&(O||!F||v===null),v=(s&(S|U))===0?t:null,y=null,Dt(t.ctx),O=!1,ut++,t.f|=dt;try{var u=(0,t.fn)(),i=t.deps;if(w!==null){var o;if(ft(t,m),i!==null&&m>0)for(i.length=m+w.length,o=0;o<w.length;o++)i[m+o]=w[o];else t.deps=i=w;if(!P)for(o=m;o<i.length;o++)((d=i[o]).reactions??(d.reactions=[])).push(t)}else i!==null&&m<i.length&&(ft(t,m),i.length=m);if(_t()&&T!==null&&!O&&i!==null&&(t.f&(I|q|D))===0)for(o=0;o<T.length;o++)un(T[o],t);return l!==null&&(ut++,T!==null&&(r===null?r=T:r.push(...T))),u}finally{w=n,m=e,T=r,v=l,P=a,y=_,Dt(c),O=f,t.f^=dt}}function $n(t,n){let e=n.reactions;if(e!==null){var r=pn.call(e,t);if(r!==-1){var l=e.length-1;l===0?e=n.reactions=null:(e[r]=e[l],e.pop())}}e===null&&(n.f&I)!==0&&(w===null||!w.includes(n))&&(b(n,q),(n.f&(x|rt))===0&&(n.f^=rt),$t(n),ft(n,0))}function ft(t,n){var e=t.deps;if(e!==null)for(var r=n;r<e.length;r++)$n(t,e[r])}function vt(t){var n=t.f;if((n&ot)===0){b(t,E);var e=h,r=p,l=F;h=t,F=!0;try{(n&Tt)!==0?Yn(t):Qt(t),Xt(t);var a=fn(t);t.teardown=typeof a=="function"?a:null,t.wv=ln;var _=t.deps,c;It&&cn&&t.f&D}catch(f){ct(f,t,e,r||t.ctx)}finally{F=l,h=e}}}function zn(){try{An()}catch(t){if(lt!==null)ct(t,lt,null);else throw t}}function on(){var t=F;try{var n=0;for(F=!0;$.length>0;){n++>1e3&&zn();var e=$,r=e.length;$=[];for(var l=0;l<r;l++){var a=Wn(e[l]);Jn(a)}}}finally{at=!1,F=t,lt=null,z.clear()}}function Jn(t){var n=t.length;if(n!==0)for(var e=0;e<n;e++){var r=t[e];if((r.f&(ot|B))===0)try{V(r)&&(vt(r),r.deps===null&&r.first===null&&r.nodes_start===null&&(r.teardown===null?tn(r):r.fn=null))}catch(l){ct(l,r,null,r.ctx)}}}function pt(t){at||(at=!0,queueMicrotask(on));for(var n=lt=t;n.parent!==null;){n=n.parent;var e=n.f;if((e&(U|S))!==0){if((e&E)===0)return;n.f^=E}}$.push(n)}function Wn(t){for(var n=[],e=t;e!==null;){var r=e.f,l=(r&(S|U))!==0,a=l&&(r&E)!==0;if(!a&&(r&B)===0){if((r&Lt)!==0)n.push(e);else if(l)e.f^=E;else{var _=v;try{v=e,V(e)&&vt(e)}catch(s){ct(s,e,null,e.ctx)}finally{v=_}}var c=e.first;if(c!==null){e=c;continue}}var f=e.parent;for(e=e.next;e===null&&f!==null;)e=f.next,f=f.parent}return n}function Xn(t){var n;for(Pt();$.length>0;)at=!0,on(),Pt();return n}async function Qe(){await Promise.resolve(),Xn()}function C(t){var n=t.f,e=(n&I)!==0;if(v!==null&&!O){if(!(y!=null&&y.includes(t))){var r=v.deps;t.rv<ut&&(t.rv=ut,w===null&&r!==null&&r[m]===t?m++:w===null?w=[t]:(!P||!w.includes(t))&&w.push(t))}}else if(e&&t.deps===null&&t.effects===null){var l=t,a=l.parent;a!==null&&(a.f&x)===0&&(l.f^=x)}return e&&(l=t,V(l)&&zt(l)),X&&z.has(t)?z.get(t):t.v}function _n(t){var n=O;try{return O=!0,t()}finally{O=n}}const Qn=-7169;function b(t,n){t.f=t.f&Qn|n}function tr(t){if(!(typeof t!="object"||!t||t instanceof EventTarget)){if(Z in t)gt(t);else if(!Array.isArray(t))for(let n in t){const e=t[n];typeof e=="object"&&e&&Z in e&&gt(e)}}}function gt(t,n=new Set){if(typeof t=="object"&&t!==null&&!(t instanceof EventTarget)&&!n.has(t)){n.add(t),t instanceof Date&&t.getTime();for(let r in t)try{gt(t[r],n)}catch{}const e=Ft(t);if(e!==Object.prototype&&e!==Array.prototype&&e!==Map.prototype&&e!==Set.prototype&&e!==Date.prototype){const r=hn(e);for(let l in r){const a=r[l].get;if(a)try{a.call(t)}catch{}}}}}export{H as $,Mt as A,_n as B,le as C,At as D,qt as E,Le as F,yt as G,In as H,j as I,Ht as J,ke as K,J as L,Dn as M,Ut as N,ie as O,Be as P,ne as Q,Ke as R,wt as S,h as T,Nn as U,vn as V,Re as W,be as X,Cn as Y,ge as Z,me as _,Pe as a,st as a0,v as a1,qn as a2,Xe as a3,ee as a4,Sn as a5,Me as a6,We as a7,g as a8,Wt as a9,Tt as aA,yn as aB,Ee as aC,B as aD,Pn as aE,ce as aF,nn as aG,Hn as aH,_e as aI,ve as aJ,Ae as aK,De as aL,Rt as aa,Z as ab,K as ac,oe as ad,se as ae,de as af,Bt as ag,Y as ah,xt as ai,we as aj,ue as ak,he as al,pe as am,Ne as an,re as ao,ye as ap,Xn as aq,k as ar,Qe as as,He as at,fe as au,Te as av,Ft as aw,hn as ax,L as ay,xe as az,jn as b,Je as c,R as d,qe as e,je as f,ae as g,M as h,gn as i,Oe as j,$e as k,Ze as l,Ie as m,Fe as n,C as o,Bn as p,A as q,Ce as r,Ye as s,Se as t,tr as u,ze as v,Ue as w,p as x,Ve as y,Ge as z};
