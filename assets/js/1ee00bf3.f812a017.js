/*! For license information please see 1ee00bf3.f812a017.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[19841],{70576:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>l,toc:()=>p});var t=n(74848),s=n(28453);const i={sidebar_label:"JSHandle.getProperty"},a="JSHandle.getProperty() method",l={id:"api/puppeteer.jshandle.getproperty",title:"JSHandle.getProperty() method",description:"getProperty(): Promise&lt;HandleFor&lt;T\\[K\\]&gt;&gt;",source:"@site/versioned_docs/version-23.4.1/api/puppeteer.jshandle.getproperty.md",sourceDirName:"api",slug:"/api/puppeteer.jshandle.getproperty",permalink:"/api/puppeteer.jshandle.getproperty",draft:!1,unlisted:!1,tags:[],version:"23.4.1",frontMatter:{sidebar_label:"JSHandle.getProperty"},sidebar:"api",previous:{title:"JSHandle.getProperties",permalink:"/api/puppeteer.jshandle.getproperties"},next:{title:"JSHandle.jsonValue",permalink:"/api/puppeteer.jshandle.jsonvalue"}},d={},p=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Signature",id:"signature-1",level:3},{value:"Parameters",id:"parameters-1",level:2}];function o(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.header,{children:(0,t.jsx)(r.h1,{id:"jshandlegetproperty-method",children:"JSHandle.getProperty() method"})}),"\n",(0,t.jsx)("h2",{id:"getProperty",children:"getProperty(): Promise<HandleFor<T[K]>>"}),"\n",(0,t.jsx)(r.p,{children:"Fetches a single property from the referenced object."}),"\n",(0,t.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class JSHandle {\n  getProperty<K extends keyof T>(\n    propertyName: HandleOr<K>\n  ): Promise<HandleFor<T[K]>>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"propertyName"})}),(0,t.jsx)("td",{children:(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/api/puppeteer.handleor",children:"HandleOr"}),"<K>"]})}),(0,t.jsx)("td",{})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/api/puppeteer.handlefor",children:"HandleFor"}),"<T[K]>>"]}),"\n",(0,t.jsx)("h2",{id:"getProperty-1",children:"getProperty(): Promise<JSHandle<unknown>>"}),"\n",(0,t.jsx)(r.h3,{id:"signature-1",children:"Signature"}),"\n",(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-typescript",children:"class JSHandle {\n  getProperty(propertyName: string): Promise<JSHandle<unknown>>;\n}\n"})}),"\n",(0,t.jsx)(r.h2,{id:"parameters-1",children:"Parameters"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Parameter"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Type"})}),(0,t.jsx)("th",{children:(0,t.jsx)(r.p,{children:"Description"})})]})}),(0,t.jsx)("tbody",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"propertyName"})}),(0,t.jsx)("td",{children:(0,t.jsx)(r.p,{children:"string"})}),(0,t.jsx)("td",{})]})})]}),"\n",(0,t.jsx)(r.p,{children:(0,t.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,t.jsxs)(r.p,{children:["Promise<",(0,t.jsx)(r.a,{href:"/api/puppeteer.jshandle",children:"JSHandle"}),"<unknown>>"]})]})}function c(e={}){const{wrapper:r}={...(0,s.R)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(o,{...e})}):o(e)}},21020:(e,r,n)=>{var t=n(96540),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,l=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,n){var t,i={},p=null,o=null;for(t in void 0!==n&&(p=""+n),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(o=r.ref),r)a.call(r,t)&&!d.hasOwnProperty(t)&&(i[t]=r[t]);if(e&&e.defaultProps)for(t in r=e.defaultProps)void 0===i[t]&&(i[t]=r[t]);return{$$typeof:s,type:e,key:p,ref:o,props:i,_owner:l.current}}r.Fragment=i,r.jsx=p,r.jsxs=p},74848:(e,r,n)=>{e.exports=n(21020)},28453:(e,r,n)=>{n.d(r,{R:()=>a,x:()=>l});var t=n(96540);const s={},i=t.createContext(s);function a(e){const r=t.useContext(i);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),t.createElement(i.Provider,{value:r},e.children)}}}]);