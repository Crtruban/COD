import{b as G,h as O,a as Z,E as $,H as z,a5 as V,a6 as y,L as J,K as q,a7 as K,c as Y,p as x,a8 as Q,d as W,a9 as X,aa as k,B as D,a3 as ee,ab as L,ac as m,ad as re,ae as se,D as B,w as ne,af as H,o as v,ag as ie,ah as ae,q as ue,ai as fe,aj as te,ak as M,al as le,am as ce,t as oe,an as U,ao as P,ap as pe}from"./CU9eU2zF.js";import{l as _e}from"./DIeogL5L.js";function Re(e,r,[n,s]=[0,0]){O&&n===0&&Z();var i=e,a=null,f=null,d=Q,I=n>0?$:0,l=!1;const w=(t,c=!0)=>{l=!0,_(c,t)},_=(t,c)=>{if(d===(d=t))return;let h=!1;if(O&&s!==-1){if(n===0){const o=i.data;o===z?s=0:o===V?s=1/0:(s=parseInt(o.substring(1)),s!==s&&(s=d?1/0:-1))}const S=s>n;!!d===S&&(i=y(),J(i),q(!1),h=!0,s=-1)}d?(a?K(a):c&&(a=Y(()=>c(i))),f&&x(f,()=>{f=null})):(f?K(f):c&&(f=Y(()=>c(i,[n+1,s]))),a&&x(a,()=>{a=null})),h&&q(!0)};G(()=>{l=!1,r(w),l||_(null,null)},I),O&&(i=W)}function j(e,r){return e===r||(e==null?void 0:e[L])===r}function we(e={},r,n,s){return X(()=>{var i,a;return k(()=>{i=a,a=[],D(()=>{e!==n(...a)&&(r(e,...a),i&&j(n(...i),e)&&r(null,...i))})}),()=>{ee(()=>{a&&j(n(...a),e)&&r(null,...a)})}}),e}let R=!1;function de(e){var r=R;try{return R=!1,[e(),R]}finally{R=r}}const ve={get(e,r){if(!e.exclude.includes(r))return e.props[r]},set(e,r){return!1},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ee(e,r,n){return new Proxy({props:e,exclude:r},ve)}const he={get(e,r){if(!e.exclude.includes(r))return v(e.version),r in e.special?e.special[r]():e.props[r]},set(e,r,n){return r in e.special||(e.special[r]=Pe({get[r](){return e.props[r]}},r,H)),e.special[r](n),U(e.version),!0},getOwnPropertyDescriptor(e,r){if(!e.exclude.includes(r)&&r in e.props)return{enumerable:!0,configurable:!0,value:e.props[r]}},deleteProperty(e,r){return e.exclude.includes(r)||(e.exclude.push(r),U(e.version)),!0},has(e,r){return e.exclude.includes(r)?!1:r in e.props},ownKeys(e){return Reflect.ownKeys(e.props).filter(r=>!e.exclude.includes(r))}};function Ae(e,r){return new Proxy({props:e,exclude:r,special:{},version:fe(0)},he)}const be={get(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(P(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s)return s[r]}},set(e,r,n){let s=e.props.length;for(;s--;){let i=e.props[s];P(i)&&(i=i());const a=m(i,r);if(a&&a.set)return a.set(n),!0}return!1},getOwnPropertyDescriptor(e,r){let n=e.props.length;for(;n--;){let s=e.props[n];if(P(s)&&(s=s()),typeof s=="object"&&s!==null&&r in s){const i=m(s,r);return i&&!i.configurable&&(i.configurable=!0),i}}},has(e,r){if(r===L||r===M)return!1;for(let n of e.props)if(P(n)&&(n=n()),n!=null&&r in n)return!0;return!1},ownKeys(e){const r=[];for(let n of e.props){P(n)&&(n=n());for(const s in n)r.includes(s)||r.push(s)}return r}};function Te(...e){return new Proxy({props:e},be)}function C(e){var r;return((r=e.ctx)==null?void 0:r.d)??!1}function Pe(e,r,n,s){var g;var i=(n&ce)!==0,a=!_e||(n&le)!==0,f=(n&te)!==0,d=(n&pe)!==0,I=!1,l;f?[l,I]=de(()=>e[r]):l=e[r];var w=L in e||M in e,_=f&&(((g=m(e,r))==null?void 0:g.set)??(w&&r in e&&(u=>e[r]=u)))||void 0,t=s,c=!0,h=!1,S=()=>(h=!0,c&&(c=!1,d?t=D(s):t=s),t);l===void 0&&s!==void 0&&(_&&a&&re(),l=S(),_&&_(l));var o;if(a)o=()=>{var u=e[r];return u===void 0?S():(c=!0,h=!1,u)};else{var N=(i?B:ne)(()=>e[r]);N.f|=se,o=()=>{var u=v(N);return u!==void 0&&(t=void 0),u===void 0?t:u}}if((n&H)===0)return o;if(_){var F=e.$$legacy;return function(u,b){return arguments.length>0?((!a||!b||F||I)&&_(b?o():u),u):o()}}var E=!1,A=oe(l),p=B(()=>{var u=o(),b=v(A);return E?(E=!1,b):A.v=u});return f&&v(p),i||(p.equals=ie),function(u,b){if(arguments.length>0){const T=b?v(p):a&&f?ae(u):u;if(!p.equals(T)){if(E=!0,ue(A,T),h&&t!==void 0&&(t=T),C(p))return u;D(()=>v(p))}return u}return C(p)?p.v:v(p)}}export{we as b,Re as i,Ae as l,Pe as p,Ee as r,Te as s};
