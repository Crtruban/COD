import{U as u,z as i,x as c,V as _,B as m}from"./CU9eU2zF.js";import{l as p}from"./DIeogL5L.js";function k(t){c===null&&u(),p&&c.l!==null?d(c).m.push(t):i(()=>{const e=m(t);if(typeof e=="function")return e})}function v(t,e,{bubbles:o=!1,cancelable:s=!1}={}){return new CustomEvent(t,{detail:e,bubbles:o,cancelable:s})}function y(){const t=c;return t===null&&u(),(e,o,s)=>{var a;const n=(a=t.s.$$events)==null?void 0:a[e];if(n){const l=_(n)?n.slice():[n],r=v(e,o,s);for(const f of l)f.call(t.x,r);return!r.defaultPrevented}return!0}}function d(t){var e=t.l;return e.u??(e.u={a:[],b:[],m:[]})}export{y as c,k as o};
