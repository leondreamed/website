import{r as p,o as f,c as _,a as m,b as h,d as y,s as v}from"./vendor.e6c57a86.js";const g=function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const o of t.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&r(o)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}};g();var E=(c,s)=>{const n=c.__vccOpts||c;for(const[r,e]of s)n[r]=e;return n};const L={};function O(c,s){const n=p("router-view");return f(),_(n)}var b=E(L,[["render",O]]);const P="modulepreload",l={},k="/",i=function(s,n){return!n||n.length===0?s():Promise.all(n.map(r=>{if(r=`${k}${r}`,r in l)return;l[r]=!0;const e=r.endsWith(".css"),t=e?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${r}"]${t}`))return;const o=document.createElement("link");if(o.rel=e?"stylesheet":P,e||(o.as="script",o.crossOrigin=""),o.href=r,document.head.appendChild(o),e)return new Promise((u,d)=>{o.addEventListener("load",u),o.addEventListener("error",d)})})).then(()=>s())},A=[{path:"/discord",redirect:"https://discord.gg/cysqhWcv69"},{path:"/",component:async()=>i(()=>import("./basic-landing-page.ef3ad569.js"),["assets/basic-landing-page.ef3ad569.js","assets/basic-landing-page.dddae32e.css","assets/selfie.3047be2c.js","assets/vendor.e6c57a86.js","assets/vendor.41cdac3e.css"])},{path:"/experimental",component:async()=>i(()=>import("./landing-page.e0f893b7.js"),["assets/landing-page.e0f893b7.js","assets/vendor.e6c57a86.js","assets/vendor.41cdac3e.css","assets/transparent-video.7475ec7c.js","assets/selfie.3047be2c.js"])},{path:"/test",component:async()=>i(()=>import("./test-page.cadd46b9.js"),["assets/test-page.cadd46b9.js","assets/transparent-video.7475ec7c.js","assets/vendor.e6c57a86.js","assets/vendor.41cdac3e.css"])}],w=m({history:h(),routes:A});const a=y(b);a.use(v);a.use(w);a.mount("#app");export{E as _};
