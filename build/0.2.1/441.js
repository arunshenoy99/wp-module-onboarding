"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[441],{1526:function(e,t,n){var a=n(9307),i=n(5736);t.Z=e=>{let{title:t,subtitle:n}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,i.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,i.__)(n,"wp-module-onboarding")))}},5791:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(9307),i=(n(5609),n(4184)),r=n.n(i),o=n(5158),l=n(6974),s=n(2200),c=n(6989),d=n.n(c),u=n(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const i=(0,l.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,o.speak)(t,"assertive")}(i,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){d()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${s.Db}-pageview`,{stepID:i.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=i.pathname}),[i.pathname]),(0,a.createElement)("div",{className:r()("nfd-onboarding-layout",t)},n)};const p=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var g=e=>{let{className:t="",children:n,isBgPrimary:i=!1,isCentered:o=!1,isVerticallyCentered:l=!1,isContained:s=!1,isPadded:c=!1,isFadeIn:d=!0}=e;const u=s?p:a.Fragment;return(0,a.createElement)(m,{className:r()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":d},{"is-bg-primary":i},{"is-centered":o},{"is-vertically-centered":l},{"is-padded":c})},(0,a.createElement)(u,null,n))}},676:function(e,t,n){var a=n(9307),i=n(5736),r=n(9818),o=n(5609),l=n(6974),s=n(7533),c=n(9685),d=n(8395),u=n(2200);t.Z=()=>{const e=(0,l.s0)(),t=(0,l.TH)(),{previousStep:n,nextStep:m,currentData:p}=(0,r.useSelect)((e=>({previousStep:e(c.h).getPreviousStep(),nextStep:e(c.h).getNextStep(),currentData:e(c.h).getCurrentOnboardingData()})),[]);async function g(e,t){if(t){if(t.isComplete=(new Date).getTime(),null!=e&&e.includes("basic-info")){const e=await async function(e){var t;const n=await(0,d.Gw)(),a=await(0,d.I2)(null==e||null===(t=e.data)||void 0===t?void 0:t.socialData);return null!=(null==a?void 0:a.error)?(console.error("Unable to Save Social Data!"),null==n?void 0:n.body):null==a?void 0:a.body}(t);e&&null!=t&&t.data&&(t.data.socialData=e)}(0,s.k)(t)}const n="ecommerce"==window.nfdOnboarding.currentFlow?u.Nj:u.hF;window.location.replace(n)}return null===m||!1===m?(0,a.createElement)(o.Button,{className:"skip-button",onClick:e=>g(t.pathname,p)},(0,i.__)("Skip this Step","wp-module-onboarding")):(0,a.createElement)(o.Button,{className:"skip-button",onClick:t=>e(m.path)},(0,i.__)("Skip this Step","wp-module-onboarding"))}},6441:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var a=n(9307),i=n(5736),r=n(6974),o=n(4333),l=n(9818),s=n(2200),c=n(676),d=n(9685),u=n(5791),m=n(1526),p=n(1984),g=n(444),f=(0,a.createElement)(g.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,a.createElement)(g.Path,{d:"M16.7 7.1l-6.3 8.5-3.3-2.5-.9 1.2 4.5 3.4L17.9 8z"})),h=n(5609),_=e=>{let{id:t,path:n,title:r,desc:o,isSelected:l,onSelectedChange:s}=e;return(0,a.createElement)(h.Card,{className:`nfd-card ${l&&"nfd-selected-card-box"}`,onClick:e=>s(t)},(0,a.createElement)("div",{className:"nfd-card__top_row"},(0,a.createElement)("div",{className:"nfd-card__icon"},(0,a.createElement)("div",{className:l?"nfd-card__icon_box nfd-card__icon_box-selected":"nfd-card__icon_box",style:{backgroundImage:`var(${n})`}})),(0,a.createElement)("div",{className:l?"nfd-card__icon_selected":"nfd-card__icon_unselected"},(0,a.createElement)(p.Z,{className:"nfd-card__icon_selected_path",icon:f,size:64}))),(0,a.createElement)("div",{className:`nfd-card__body ${l&&"nfd-selected-card"}`},(0,a.createElement)("h2",{className:"nfd-card__body_title"},(0,i.__)(r,"wp-module-onboarding")),(0,a.createElement)("p",{className:"nfd-card__body_description"},(0,i.__)(o,"wp-module-onboarding"))))},b=e=>{let{contents:t,selected:n,onSelectedChange:i}=e;const r=t.map(((e,t)=>(0,a.createElement)(_,{id:t,key:t,path:e.icon,title:e.title,desc:e.desc,onSelectedChange:i,isSelected:t===n})));return(0,a.createElement)("div",{className:"selectable_cards"},r)},v=e=>{const t={0:"publishing",1:"selling",2:"designing"},[n,p]=((0,r.s0)(),(0,a.useState)(0)),[g,f]=(0,a.useState)(!1),h=(0,o.useViewportMatch)("medium"),{setDrawerActiveView:_,setIsDrawerOpened:v,setIsSidebarOpened:w,setCurrentOnboardingData:S,setIsDrawerSuppressed:E}=(0,l.useDispatch)(d.h),{currentStep:y,currentData:N}=(0,l.useSelect)((e=>({currentStep:e(d.h).getCurrentStep(),currentData:e(d.h).getCurrentOnboardingData()})),[]);return(0,a.useEffect)((()=>{h&&v(!0),w(!1),E(!1),_(s.tM)}),[]),(0,a.useEffect)((()=>{g||async function(){if(N){const e=await(null==N?void 0:N.data.topPriority.priority1);""!=e?p(parseInt(((e,t)=>null==Object?void 0:Object.keys(e).find((n=>e[n]===t)))(t,e))):(N.data.topPriority.priority1=t[n],S(N))}f(!0)}()}),[g]),(0,a.useEffect)((()=>{g&&(N.data.topPriority.priority1=t[n],S(N))}),[n]),(0,a.createElement)(u.Z,{isVerticallyCentered:!0},(0,a.createElement)(m.Z,{title:null==y?void 0:y.heading,subtitle:null==y?void 0:y.subheading}),(0,a.createElement)(b,{contents:[{icon:"--nfd-publish-icon",title:"Publishing",desc:"From blogs, to newsletters, to podcasts and videos, we help the web find your content."},{icon:"--nfd-selling-icon",title:"Selling",desc:"Startup or seasoned business, drop-shipping or downloads, we've got ecommerce covered."},{icon:"--nfd-design-icon",title:"Designing",desc:"With smart style presets and powerful options, we help your site look and feel polished."}],selected:n,onSelectedChange:p}),(0,a.createElement)("div",{className:"center"},(0,a.createElement)("p",{className:"info-top-priority"},(0,i.__)("Where would you like to start? We'll start ","wp-module-onboarding"),(0,a.createElement)("br",null),(0,i.__)("there and then move into next steps.","wp-module-onboarding")),(0,a.createElement)(c.Z,null)))}}}]);