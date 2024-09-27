/*! For license information please see ced31b4f.30c98ee1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[27035],{21775:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>p,contentTitle:()=>o,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>c});var i=r(74848),n=r(28453);const a={sidebar_label:"Page.waitForDevicePrompt"},o="Page.waitForDevicePrompt() method",s={id:"api/puppeteer.page.waitfordeviceprompt",title:"Page.waitForDevicePrompt() method",description:"This method is typically coupled with an action that triggers a device request from an api such as WebBluetooth.",source:"@site/versioned_docs/version-23.4.1/api/puppeteer.page.waitfordeviceprompt.md",sourceDirName:"api",slug:"/api/puppeteer.page.waitfordeviceprompt",permalink:"/api/puppeteer.page.waitfordeviceprompt",draft:!1,unlisted:!1,tags:[],version:"23.4.1",frontMatter:{sidebar_label:"Page.waitForDevicePrompt"},sidebar:"api",previous:{title:"Page.viewport",permalink:"/api/puppeteer.page.viewport"},next:{title:"Page.waitForFileChooser",permalink:"/api/puppeteer.page.waitforfilechooser"}},p={},c=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,n.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.header,{children:(0,i.jsx)(t.h1,{id:"pagewaitfordeviceprompt-method",children:"Page.waitForDevicePrompt() method"})}),"\n",(0,i.jsx)(t.p,{children:"This method is typically coupled with an action that triggers a device request from an api such as WebBluetooth."}),"\n",(0,i.jsx)(t.admonition,{type:"caution",children:(0,i.jsx)(t.p,{children:"This must be called before the device request is made. It will not return a currently active device prompt."})}),"\n",(0,i.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract waitForDevicePrompt(\n    options?: WaitTimeoutOptions\n  ): Promise<DeviceRequestPrompt>;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"options"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.waittimeoutoptions",children:"WaitTimeoutOptions"})})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:(0,i.jsx)(t.em,{children:"(Optional)"})})})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsxs)(t.p,{children:["Promise<",(0,i.jsx)(t.a,{href:"/api/puppeteer.devicerequestprompt",children:"DeviceRequestPrompt"}),">"]}),"\n",(0,i.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-ts",children:"const [devicePrompt] = Promise.all([\n  page.waitForDevicePrompt(),\n  page.click('#connect-bluetooth'),\n]);\nawait devicePrompt.select(\n  await devicePrompt.waitForDevice(({name}) => name.includes('My Device'))\n);\n"})})]})}function d(e={}){const{wrapper:t}={...(0,n.R)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(l,{...e})}):l(e)}},21020:(e,t,r)=>{var i=r(96540),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),o=Object.prototype.hasOwnProperty,s=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,r){var i,a={},c=null,l=null;for(i in void 0!==r&&(c=""+r),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)o.call(t,i)&&!p.hasOwnProperty(i)&&(a[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===a[i]&&(a[i]=t[i]);return{$$typeof:n,type:e,key:c,ref:l,props:a,_owner:s.current}}t.Fragment=a,t.jsx=c,t.jsxs=c},74848:(e,t,r)=>{e.exports=r(21020)},28453:(e,t,r)=>{r.d(t,{R:()=>o,x:()=>s});var i=r(96540);const n={},a=i.createContext(n);function o(e){const t=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:o(e.components),i.createElement(a.Provider,{value:t},e.children)}}}]);