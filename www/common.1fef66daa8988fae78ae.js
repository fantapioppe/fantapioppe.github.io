(self.webpackChunkfantapioppe=self.webpackChunkfantapioppe||[]).push([[8592],{8225:(e,t,n)=>{"use strict";n.d(t,{c:()=>o});var i=n(3150),r=n(2954),s=n(9461);const o=(e,t)=>{let n,o;const c=(e,i,r)=>{if("undefined"==typeof document)return;const s=document.elementFromPoint(e,i);s&&t(s)?s!==n&&(l(),a(s,r)):l()},a=(e,t)=>{n=e,o||(o=n);const r=n;(0,i.c)(()=>r.classList.add("ion-activated")),t()},l=(e=!1)=>{if(!n)return;const t=n;(0,i.c)(()=>t.classList.remove("ion-activated")),e&&o!==n&&n.click(),n=void 0};return(0,s.createGesture)({el:e,gestureName:"buttonActiveDrag",threshold:0,onStart:e=>c(e.currentX,e.currentY,r.a),onMove:e=>c(e.currentX,e.currentY,r.b),onEnd:()=>{l(!0),(0,r.h)(),o=void 0}})}},7330:(e,t,n)=>{"use strict";n.d(t,{a:()=>r,d:()=>s});var i=n(2377);const r=async(e,t,n,r,s)=>{if(e)return e.attachViewToDom(t,n,s,r);if("string"!=typeof n&&!(n instanceof HTMLElement))throw new Error("framework delegate is missing");const o="string"==typeof n?t.ownerDocument&&t.ownerDocument.createElement(n):n;return r&&r.forEach(e=>o.classList.add(e)),s&&Object.assign(o,s),t.appendChild(o),await new Promise(e=>(0,i.c)(o,e)),o},s=(e,t)=>{if(t){if(e)return e.removeViewFromDom(t.parentElement,t);t.remove()}return Promise.resolve()}},2954:(e,t,n)=>{"use strict";n.d(t,{a:()=>s,b:()=>o,c:()=>r,d:()=>a,h:()=>c});const i={getEngine(){const e=window;return e.TapticEngine||e.Capacitor&&e.Capacitor.isPluginAvailable("Haptics")&&e.Capacitor.Plugins.Haptics},available(){return!!this.getEngine()},isCordova:()=>!!window.TapticEngine,isCapacitor:()=>!!window.Capacitor,impact(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.impact({style:n})},notification(e){const t=this.getEngine();if(!t)return;const n=this.isCapacitor()?e.style.toUpperCase():e.style;t.notification({style:n})},selection(){this.impact({style:"light"})},selectionStart(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionStart():e.gestureSelectionStart())},selectionChanged(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionChanged():e.gestureSelectionChanged())},selectionEnd(){const e=this.getEngine();e&&(this.isCapacitor()?e.selectionEnd():e.gestureSelectionEnd())}},r=()=>{i.selection()},s=()=>{i.selectionStart()},o=()=>{i.selectionChanged()},c=()=>{i.selectionEnd()},a=e=>{i.impact(e)}},6575:(e,t,n)=>{"use strict";n.d(t,{s:()=>i});const i=e=>{try{if(e instanceof class{constructor(e){this.value=e}})return e.value;if(!o()||"string"!=typeof e||""===e)return e;const t=document.createDocumentFragment(),n=document.createElement("div");t.appendChild(n),n.innerHTML=e,a.forEach(e=>{const n=t.querySelectorAll(e);for(let i=n.length-1;i>=0;i--){const e=n[i];e.parentNode?e.parentNode.removeChild(e):t.removeChild(e);const o=s(e);for(let t=0;t<o.length;t++)r(o[t])}});const i=s(t);for(let e=0;e<i.length;e++)r(i[e]);const c=document.createElement("div");c.appendChild(t);const l=c.querySelector("div");return null!==l?l.innerHTML:c.innerHTML}catch(t){return console.error(t),""}},r=e=>{if(e.nodeType&&1!==e.nodeType)return;for(let n=e.attributes.length-1;n>=0;n--){const t=e.attributes.item(n),i=t.name;if(!c.includes(i.toLowerCase())){e.removeAttribute(i);continue}const r=t.value;null!=r&&r.toLowerCase().includes("javascript:")&&e.removeAttribute(i)}const t=s(e);for(let n=0;n<t.length;n++)r(t[n])},s=e=>null!=e.children?e.children:e.childNodes,o=()=>{const e=window,t=e&&e.Ionic&&e.Ionic.config;return!t||(t.get?t.get("sanitizerEnabled",!0):!0===t.sanitizerEnabled||void 0===t.sanitizerEnabled)},c=["class","id","href","src","name","slot"],a=["script","style","iframe","meta","link","object","embed"]},408:(e,t,n)=>{"use strict";n.d(t,{S:()=>i});const i={bubbles:{dur:1e3,circles:9,fn:(e,t,n)=>{const i=e*t/n-e+"ms",r=2*Math.PI*t/n;return{r:5,style:{top:9*Math.sin(r)+"px",left:9*Math.cos(r)+"px","animation-delay":i}}}},circles:{dur:1e3,circles:8,fn:(e,t,n)=>{const i=t/n,r=e*i-e+"ms",s=2*Math.PI*i;return{r:5,style:{top:9*Math.sin(s)+"px",left:9*Math.cos(s)+"px","animation-delay":r}}}},circular:{dur:1400,elmDuration:!0,circles:1,fn:()=>({r:20,cx:48,cy:48,fill:"none",viewBox:"24 24 48 48",transform:"translate(0,0)",style:{}})},crescent:{dur:750,circles:1,fn:()=>({r:26,style:{}})},dots:{dur:750,circles:3,fn:(e,t)=>({r:6,style:{left:9-9*t+"px","animation-delay":-110*t+"ms"}})},lines:{dur:1e3,lines:12,fn:(e,t,n)=>({y1:17,y2:29,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})},"lines-small":{dur:1e3,lines:12,fn:(e,t,n)=>({y1:12,y2:20,style:{transform:`rotate(${30*t+(t<6?180:-180)}deg)`,"animation-delay":e*t/n-e+"ms"}})}}},1269:(e,t,n)=>{"use strict";n.d(t,{c:()=>r,g:()=>s,h:()=>i,o:()=>c});const i=(e,t)=>null!==t.closest(e),r=(e,t)=>"string"==typeof e&&e.length>0?Object.assign({"ion-color":!0,[`ion-color-${e}`]:!0},t):t,s=e=>{const t={};return(e=>void 0!==e?(Array.isArray(e)?e:e.split(" ")).filter(e=>null!=e).map(e=>e.trim()).filter(e=>""!==e):[])(e).forEach(e=>t[e]=!0),t},o=/^[a-z][a-z0-9+\-.]*:/,c=async(e,t,n,i)=>{if(null!=e&&"#"!==e[0]&&!o.test(e)){const r=document.querySelector("ion-router");if(r)return null!=t&&t.preventDefault(),r.push(e,n,i)}return!1}}}]);