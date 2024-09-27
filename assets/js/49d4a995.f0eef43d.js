/*! For license information please see 49d4a995.f0eef43d.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3242],{98923:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>l,contentTitle:()=>s,default:()=>d,frontMatter:()=>a,metadata:()=>c,toc:()=>i});var n=t(74848),o=t(28453);const a={sidebar_label:"Locator.race"},s="Locator.race() method",c={id:"api/puppeteer.locator.race",title:"Locator.race() method",description:"Creates a race between multiple locators trying to locate elements in parallel but ensures that only a single element receives the action.",source:"@site/versioned_docs/version-23.4.1/api/puppeteer.locator.race.md",sourceDirName:"api",slug:"/api/puppeteer.locator.race",permalink:"/api/puppeteer.locator.race",draft:!1,unlisted:!1,tags:[],version:"23.4.1",frontMatter:{sidebar_label:"Locator.race"},sidebar:"api",previous:{title:"Locator.map",permalink:"/api/puppeteer.locator.map"},next:{title:"Locator.scroll",permalink:"/api/puppeteer.locator.scroll"}},l={},i=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,o.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"locatorrace-method",children:"Locator.race() method"})}),"\n",(0,n.jsx)(r.p,{children:"Creates a race between multiple locators trying to locate elements in parallel but ensures that only a single element receives the action."}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"class Locator {\n  static race<Locators extends readonly unknown[] | []>(\n    locators: Locators\n  ): Locator<AwaitedLocator<Locators[number]>>;\n}\n"})}),"\n",(0,n.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsx)("tbody",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"locators"})}),(0,n.jsx)("td",{children:(0,n.jsx)(r.p,{children:"Locators"})}),(0,n.jsx)("td",{})]})})]}),"\n",(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,n.jsxs)(r.p,{children:[(0,n.jsx)(r.a,{href:"/api/puppeteer.locator",children:"Locator"}),"<",(0,n.jsx)(r.a,{href:"/api/puppeteer.awaitedlocator",children:"AwaitedLocator"}),"<Locators[number]>>"]})]})}function d(e={}){const{wrapper:r}={...(0,o.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},21020:(e,r,t)=>{var n=t(96540),o=Symbol.for("react.element"),a=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,c=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,r,t){var n,a={},i=null,p=null;for(n in void 0!==t&&(i=""+t),void 0!==r.key&&(i=""+r.key),void 0!==r.ref&&(p=r.ref),r)s.call(r,n)&&!l.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:o,type:e,key:i,ref:p,props:a,_owner:c.current}}r.Fragment=a,r.jsx=i,r.jsxs=i},74848:(e,r,t)=>{e.exports=t(21020)},28453:(e,r,t)=>{t.d(r,{R:()=>s,x:()=>c});var n=t(96540);const o={},a=n.createContext(o);function s(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function c(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);