import{j as a,r as c,R as l,a as m,b as u,B as f}from"./vendor-CchAOOHR.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&n(s)}).observe(document,{childList:!0,subtree:!0});function o(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function n(e){if(e.ep)return;e.ep=!0;const t=o(e);fetch(e.href,t)}})();function d(){return a.jsxDEV("div",{children:"test"},void 0,!1,{fileName:"/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/pages/HomePage.tsx",lineNumber:23,columnNumber:5},this)}function p(){return c.useEffect(()=>{(async()=>{try{const o=await(await fetch("https://sabkaqr.com/api/getdomains",{headers:{}})).json();o.status&&o.data&&(setDomains(o.data.domain),setPaths(o.data.path))}catch(r){r instanceof Error?console.log(r.message):console.log(String(r))}})()},[]),a.jsxDEV(l,{children:a.jsxDEV(m,{index:!0,element:a.jsxDEV(d,{},void 0,!1,{fileName:"/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/App.tsx",lineNumber:116,columnNumber:33},this)},void 0,!1,{fileName:"/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/App.tsx",lineNumber:116,columnNumber:11},this)},void 0,!1,{fileName:"/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/App.tsx",lineNumber:95,columnNumber:9},this)}u.hydrateRoot(document.getElementById("root"),a.jsxDEV(f,{children:a.jsxDEV(p,{},void 0,!1,{fileName:"/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/entry-client.tsx",lineNumber:23,columnNumber:7},void 0)},void 0,!1,{fileName:"/home/invtm-lp-14/Priyanka Raval/Work/sabka-react-frontend/src/entry-client.tsx",lineNumber:21,columnNumber:3},void 0),document.documentElement);
//# sourceMappingURL=index-jCSluO-_.js.map
