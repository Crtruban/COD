import{a3 as D,h as S,au as G,av as _,aw as F,K as w,ax as J}from"./CU9eU2zF.js";import{b as Q,c as W,d as X,n as Z,f as k}from"./cruRbeHN.js";function y(r,f){if(f){const i=document.body;r.autofocus=!0,D(()=>{document.activeElement===i&&r.focus()})}}function V(r){var f,i,s="";if(typeof r=="string"||typeof r=="number")s+=r;else if(typeof r=="object")if(Array.isArray(r)){var u=r.length;for(f=0;f<u;f++)r[f]&&(i=V(r[f]))&&(s&&(s+=" "),s+=i)}else for(i in r)r[i]&&(s&&(s+=" "),s+=i);return s}function m(){for(var r,f,i=0,s="",u=arguments.length;i<u;i++)(r=arguments[i])&&(f=V(r))&&(s&&(s+=" "),s+=f);return s}function x(r){return typeof r=="object"?m(r):r??""}const j=[...` 	
\r\f \v\uFEFF`];function rr(r,f,i){var s=r==null?"":""+r;if(i){for(var u in i)if(i[u])s=s?s+" "+u:u;else if(s.length)for(var t=u.length,c=0;(c=s.indexOf(u,c))>=0;){var n=c+t;(c===0||j.includes(s[c-1]))&&(n===s.length||j.includes(s[n]))?s=(c===0?"":s.substring(0,c))+s.substring(n+1):c=n}}return s===""?null:s}function P(r,f=!1){var i=f?" !important;":";",s="";for(var u in r){var t=r[u];t!=null&&t!==""&&(s+=" "+u+": "+t+i)}return s}function I(r){return r[0]!=="-"||r[1]!=="-"?r.toLowerCase():r}function ir(r,f){if(f){var i="",s,u;if(Array.isArray(f)?(s=f[0],u=f[1]):s=f,r){r=String(r).replaceAll(/\s*\/\*.*?\*\/\s*/g,"").trim();var t=!1,c=0,n=!1,A=[];s&&A.push(...Object.keys(s).map(I)),u&&A.push(...Object.keys(u).map(I));var l=0,d=-1;const N=r.length;for(var g=0;g<N;g++){var h=r[g];if(n?h==="/"&&r[g-1]==="*"&&(n=!1):t?t===h&&(t=!1):h==="/"&&r[g+1]==="*"?n=!0:h==='"'||h==="'"?t=h:h==="("?c++:h===")"&&c--,!n&&t===!1&&c===0){if(h===":"&&d===-1)d=g;else if(h===";"||g===N-1){if(d!==-1){var O=I(r.substring(l,d).trim());if(!A.includes(O)){h!==";"&&g++;var T=r.substring(l,g).trim();i+=" "+T+";"}}l=g+1,d=-1}}}}return s&&(i+=P(s)),u&&(i+=P(u,!0)),i=i.trim(),i===""?null:i}return r==null?null:String(r)}function fr(r,f,i,s,u,t){var c=r.__className;if(S||c!==i){var n=rr(i,s,t);(!S||n!==r.getAttribute("class"))&&(n==null?r.removeAttribute("class"):f?r.className=n:r.setAttribute("class",n)),r.__className=i}else if(t&&u!==t)for(var A in t){var l=!!t[A];(u==null||l!==!!u[A])&&r.classList.toggle(A,l)}return t}function M(r,f={},i,s){for(var u in i){var t=i[u];f[u]!==t&&(i[u]==null?r.style.removeProperty(u):r.style.setProperty(u,t,s))}}function sr(r,f,i,s){var u=r.__style;if(S||u!==f){var t=ir(f,s);(!S||t!==r.getAttribute("style"))&&(t==null?r.removeAttribute("style"):r.style.cssText=t),r.__style=f}else s&&(Array.isArray(s)?(M(r,i==null?void 0:i[0],s[0]),M(r,i==null?void 0:i[1],s[1],"important")):M(r,i,s));return s}const L=Symbol("class"),E=Symbol("style"),B=Symbol("is custom element"),H=Symbol("is html");function ur(r,f){f?r.hasAttribute("selected")||r.setAttribute("selected",""):r.removeAttribute("selected")}function R(r,f,i,s){var u=K(r);S&&(u[f]=r.getAttribute(f),f==="src"||f==="srcset"||f==="href"&&r.nodeName==="LINK")||u[f]!==(u[f]=i)&&(f==="loading"&&(r[G]=i),i==null?r.removeAttribute(f):typeof i!="string"&&Y(r).includes(f)?r[f]=i:r.setAttribute(f,i))}function or(r,f,i,s,u=!1){var t=K(r),c=t[B],n=!t[H];let A=S&&c;A&&w(!1);var l=f||{},d=r.tagName==="OPTION";for(var g in f)g in i||(i[g]=null);i.class?i.class=x(i.class):i[L]&&(i.class=null),i[E]&&(i.style??(i.style=null));var h=Y(r);for(const a in i){let o=i[a];if(d&&a==="value"&&o==null){r.value=r.__value="",l[a]=o;continue}if(a==="class"){var O=r.namespaceURI==="http://www.w3.org/1999/xhtml";fr(r,O,o,s,f==null?void 0:f[L],i[L]),l[a]=o,l[L]=i[L];continue}if(a==="style"){sr(r,o,f==null?void 0:f[E],i[E]),l[a]=o,l[E]=i[E];continue}var T=l[a];if(o!==T){l[a]=o;var N=a[0]+a[1];if(N!=="$$")if(N==="on"){const v={},p="$$"+a;let e=a.slice(2);var C=k(e);if(Q(e)&&(e=e.slice(0,-7),v.capture=!0),!C&&T){if(o!=null)continue;r.removeEventListener(e,l[p],v),l[p]=null}if(o!=null)if(C)r[`__${e}`]=o,X([e]);else{let q=function(z){l[a].call(this,z)};l[p]=W(e,r,q,v)}else C&&(r[`__${e}`]=void 0)}else if(a==="style")R(r,a,o);else if(a==="autofocus")y(r,!!o);else if(!c&&(a==="__value"||a==="value"&&o!=null))r.value=r.__value=o;else if(a==="selected"&&d)ur(r,o);else{var b=a;n||(b=Z(b));var $=b==="defaultValue"||b==="defaultChecked";if(o==null&&!c&&!$)if(t[a]=null,b==="value"||b==="checked"){let v=r;const p=f===void 0;if(b==="value"){let e=v.defaultValue;v.removeAttribute(b),v.defaultValue=e,v.value=v.__value=p?e:null}else{let e=v.defaultChecked;v.removeAttribute(b),v.defaultChecked=e,v.checked=p?e:!1}}else r.removeAttribute(a);else $||h.includes(b)&&(c||typeof o!="string")?r[b]=o:typeof o!="function"&&R(r,b,o)}}}return A&&w(!0),l}function K(r){return r.__attributes??(r.__attributes={[B]:r.nodeName.includes("-"),[H]:r.namespaceURI===_})}var U=new Map;function Y(r){var f=U.get(r.nodeName);if(f)return f;U.set(r.nodeName,f=[]);for(var i,s=r,u=Element.prototype;u!==s;){i=J(s);for(var t in i)i[t].set&&f.push(t);s=F(s)}return f}export{R as a,fr as b,x as c,or as d,sr as s};
