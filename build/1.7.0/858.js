"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[858],{4401:(e,t,r)=>{r.d(t,{V:()=>l});var a=r(9307),s=r(1996),o=r(4316),n=r(950);const l=e=>{let{title:t,subtitle:r,error:l}=e;return(0,a.createElement)(s.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(o.Z,{title:t,subtitle:r}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},l),(0,a.createElement)(n.Z,null))}},9291:(e,t,r)=>{r.d(t,{L:()=>n,Y:()=>a.Z});var a=r(35),s=r(9307),o=r(682);const n=()=>(0,s.createElement)("div",{className:"image-upload-loader--loading-box"},(0,s.createElement)(o.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},1340:(e,t,r)=>{r.d(t,{U:()=>w,g:()=>b});var a=r(9307),s=r(9818),o=r(4333),n=r(5736),l=r(9291),i=r(6831),u=r(7625),c=r(2200),d=r(4401);var m=r(1589);const w=e=>{let{children:t,navigationStateCallback:r=!1}=e;const w=(0,o.useViewportMatch)("medium"),{storedThemeStatus:h,brandName:p}=(0,s.useSelect)((e=>({storedThemeStatus:e(i.h).getThemeStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),g=(e=>({loader:{title:(0,n.sprintf)(
/* translators: %s: Brand */
(0,n.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,n.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,n.sprintf)(
/* translators: %s: Brand */
(0,n.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,n.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,n.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(p),{updateThemeStatus:b,setIsDrawerOpened:_,setIsDrawerSuppressed:f,setIsHeaderNavigationEnabled:v}=(0,s.useDispatch)(i.h),S=async()=>{const e=await(0,u.YL)(c.DY);return null!=e&&e.error?c.vv:e.body.status},y=()=>{switch(h){case c.Rq:case c.GV:return(()=>{if("function"==typeof r)return r();w&&_(!0),f(!1),v(!0)})();default:_(!1),f(!0),v(!1)}};(0,a.useEffect)((()=>{y(),h===c.a0&&(async()=>{const e=await S();switch(e){case c.Zh:setTimeout((async()=>{if(await S()!==c.GV)return b(c.vv);window.location.reload()}),c.YU);break;case c.GV:window.location.reload();break;default:b(e)}})()}),[h]);const E=async()=>(b(c.Zh),(await(0,u.N9)(c.DY,!0,!1)).error?b(c.Rq):window.location.reload());return(0,a.createElement)(a.Fragment,null,(()=>{switch(h){case c.vv:return(0,a.createElement)(m.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,n.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,n.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:E,modalExitButtonText:(0,n.__)("Exit to WordPress","wp-module-onboarding")});case c.Rq:return(0,a.createElement)(d.V,{title:g.errorState.title,subtitle:g.errorState.subtitle,error:g.errorState.error});case c.GV:return t;default:return(0,a.createElement)(l.Y,{title:g.loader.title,subtitle:g.loader.subtitle})}})())};var h=r(3421),p=r(1392);var g=r(9884);const b=e=>{let{children:t,navigationStateCallback:r=!1}=e;const l=(0,o.useViewportMatch)("medium"),[u,m]=(0,a.useState)(c.Sr),{storedPluginsStatus:w,brandName:b}=(0,s.useSelect)((e=>({storedPluginsStatus:e(i.h).getPluginsStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),_=(e=>({errorState:{title:(0,n.sprintf)(
/* translators: 1: Brand 2: Site */
(0,n.__)("Making the keys to your %1$s Online %2$s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,n.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,n.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updatePluginsStatus:f,setIsDrawerOpened:v,setIsDrawerSuppressed:S,setIsHeaderNavigationEnabled:y}=(0,s.useDispatch)(i.h),E=async()=>{const e=await(0,h.qC)(c.Gv);return null!=e&&e.error?c.sG:e.body.status},N=e=>{switch(e){case c.sG:case c.ye:return(()=>{if("function"==typeof r)return r();l&&v(!0),S(!1),y(!0)})();default:v(!1),S(!0),y(!1)}};(0,a.useEffect)((()=>{N(u)}),[u]);return(0,a.useEffect)((()=>{m(w[c.Gv]),w[c.Gv]===c.Ck&&(async e=>{const t=await E();switch(t){case c.Sr:setTimeout((async()=>{if(await E()!==c.ye)return w[c.Gv]=c.sG,f(w),m(c.sG);window.location.reload()}),c.sr);break;case c.ye:window.location.reload();break;default:e[c.Gv]=t,m(t),f(e)}})(w)}),[w]),(0,a.createElement)(a.Fragment,null,(()=>{switch(u){case c.sG:return(0,a.createElement)(d.V,{title:_.errorState.title,subtitle:_.errorState.subtitle,error:_.errorState.error});case c.ye:return t;default:return(0,a.createElement)(g.Z,null)}})())}},8858:(e,t,r)=>{r.r(t),r.d(t,{default:()=>m});var a=r(9307),s=r(9250),o=r(9818),n=r(6138),l=r(6831),i=r(1996),u=r(2200),c=r(1340),d=r(6332);const m=()=>{const e=(0,s.TH)(),[t,r]=(0,a.useState)(),{currentStep:m,themeStatus:w}=(0,o.useSelect)((t=>({currentStep:t(l.h).getStepFromPath(e.pathname),themeStatus:t(l.h).getThemeStatus()})),[]),{updateThemeStatus:h,setDrawerActiveView:p,setSidebarActiveView:g}=(0,o.useDispatch)(l.h);return(0,a.useEffect)((()=>{g(u.Jq),p(u.jN)}),[]),(0,a.useEffect)((()=>{u.GV===w&&(async()=>{const e=await(0,n.C)(m.patternId,!0);if(null!=e&&e.error)return h(u.a0);r(null==e?void 0:e.body)})()}),[w]),(0,a.createElement)(c.U,null,(0,a.createElement)(d.V3,null,(0,a.createElement)(i.Z,{className:"theme-fonts-preview"},(0,a.createElement)("div",{className:"theme-fonts-preview__title-bar"},(0,a.createElement)("div",{className:"theme-fonts-preview__title-bar__browser"},(0,a.createElement)("span",{className:"theme-fonts-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-fonts-preview__title-bar__browser__dot"}),(0,a.createElement)("span",{className:"theme-fonts-preview__title-bar__browser__dot"}))),!t&&(0,a.createElement)(d.i5,{styling:"large",viewportWidth:1300}),t&&(0,a.createElement)(d.i5,{blockGrammer:t,styling:"large",viewportWidth:1300}))))}}}]);