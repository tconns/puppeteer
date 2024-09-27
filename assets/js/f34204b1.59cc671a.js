/*! For license information please see f34204b1.59cc671a.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[97863],{64185:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>l,frontMatter:()=>n,metadata:()=>c,toc:()=>d});var i=r(74848),s=r(28453);const n={sidebar_label:"DeviceRequestPrompt.waitForDevice"},o="DeviceRequestPrompt.waitForDevice() method",c={id:"api/puppeteer.devicerequestprompt.waitfordevice",title:"DeviceRequestPrompt.waitForDevice() method",description:"Resolve to the first device in the prompt matching a filter.",source:"@site/versioned_docs/version-23.4.1/api/puppeteer.devicerequestprompt.waitfordevice.md",sourceDirName:"api",slug:"/api/puppeteer.devicerequestprompt.waitfordevice",permalink:"/api/puppeteer.devicerequestprompt.waitfordevice",draft:!1,unlisted:!1,tags:[],version:"23.4.1",frontMatter:{sidebar_label:"DeviceRequestPrompt.waitForDevice"},sidebar:"api",previous:{title:"DeviceRequestPrompt.select",permalink:"/api/puppeteer.devicerequestprompt.select"},next:{title:"DeviceRequestPromptDevice",permalink:"/api/puppeteer.devicerequestpromptdevice"}},p={},d=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function a(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"devicerequestpromptwaitfordevice-method",children:"DeviceRequestPrompt.waitForDevice() method"})}),"\n",(0,i.jsx)(t.p,{children:"Resolve to the first device in the prompt matching a filter."}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class DeviceRequestPrompt {\n  waitForDevice(\n    filter: (device: DeviceRequestPromptDevice) => boolean,\n    options?: WaitTimeoutOptions\n  ): Promise<DeviceRequestPromptDevice>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsxs)("tbody",{children:[(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"filter"})}),(0,i.jsx)("td",{children:(0,i.jsxs)(t.p,{children:["(device: ",(0,i.jsx)(t.a,{href:"/api/puppeteer.devicerequestpromptdevice",children:"DeviceRequestPromptDevice"}),") => boolean"]})}),(0,i.jsx)("td",{})]}),(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(t.p,{children:["Promise<",(0,i.jsx)(t.a,{href:"/api/puppeteer.devicerequestpromptdevice",children:"DeviceRequestPromptDevice"}),">"]})]})}function l(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},21020:(e,t,r)=>{var i=r(96540),s=Symbol.for("react.element"),n=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,c=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,r){var i,n={},d=null,a=null;for(i in void 0!==r&&(d=""+r),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)o.call(t,i)&&!p.hasOwnProperty(i)&&(n[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===n[i]&&(n[i]=t[i]);return{$$typeof:s,type:e,key:d,ref:a,props:n,_owner:c.current}}t.Fragment=n,t.jsx=d,t.jsxs=d},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>c});var i=r(96540);const s={},n=i.createContext(s);function o(e){const t=i.useContext(n);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),i.createElement(n.Provider,{value:t},e.children)}}}]);