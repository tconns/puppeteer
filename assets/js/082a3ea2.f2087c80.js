/*! For license information please see 082a3ea2.f2087c80.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[64609],{64929:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>p,default:()=>m,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var r=n(74848),o=n(28453);const a={sidebar_label:"ElementFor"},p="ElementFor type",s={id:"api/puppeteer.elementfor",title:"ElementFor type",description:"Signature",source:"@site/versioned_docs/version-23.4.1/api/puppeteer.elementfor.md",sourceDirName:"api",slug:"/api/puppeteer.elementfor",permalink:"/api/puppeteer.elementfor",draft:!1,unlisted:!1,tags:[],version:"23.4.1",frontMatter:{sidebar_label:"ElementFor"},sidebar:"api",previous:{title:"DeviceRequestPromptDevice",permalink:"/api/puppeteer.devicerequestpromptdevice"},next:{title:"ElementScreenshotOptions",permalink:"/api/puppeteer.elementscreenshotoptions"}},i={},l=[{value:"Signature",id:"signature",level:3}];function c(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,o.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"elementfor-type",children:"ElementFor type"})}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type ElementFor<\n  TagName extends keyof HTMLElementTagNameMap | keyof SVGElementTagNameMap,\n> = TagName extends keyof HTMLElementTagNameMap\n  ? HTMLElementTagNameMap[TagName]\n  : TagName extends keyof SVGElementTagNameMap\n    ? SVGElementTagNameMap[TagName]\n    : never;\n"})})]})}function m(e={}){const{wrapper:t}={...(0,o.R)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},21020:(e,t,n)=>{var r=n(96540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),p=Object.prototype.hasOwnProperty,s=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,i={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var r,a={},l=null,c=null;for(r in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(c=t.ref),t)p.call(t,r)&&!i.hasOwnProperty(r)&&(a[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===a[r]&&(a[r]=t[r]);return{$$typeof:o,type:e,key:l,ref:c,props:a,_owner:s.current}}t.Fragment=a,t.jsx=l,t.jsxs=l},74848:(e,t,n)=>{e.exports=n(21020)},28453:(e,t,n)=>{n.d(t,{R:()=>p,x:()=>s});var r=n(96540);const o={},a=r.createContext(o);function p(e){const t=r.useContext(a);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:p(e.components),r.createElement(a.Provider,{value:t},e.children)}}}]);