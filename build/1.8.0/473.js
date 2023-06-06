"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[473],{4401:(e,t,a)=>{a.d(t,{V:()=>i});var r=a(9307),s=a(5634),o=a(4316),n=a(950);const i=e=>{let{title:t,subtitle:a,error:i}=e;return(0,r.createElement)(s.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,r.createElement)(o.Z,{title:t,subtitle:a}),(0,r.createElement)("div",{className:"step-error-state__logo"}),(0,r.createElement)("h3",{className:"step-error-state__error"},i),(0,r.createElement)(n.Z,null))}},9291:(e,t,a)=>{a.d(t,{L:()=>n,Y:()=>r.Z});var r=a(35),s=a(9307),o=a(682);const n=()=>(0,s.createElement)("div",{className:"image-upload-loader--loading-box"},(0,s.createElement)(o.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},1340:(e,t,a)=>{a.d(t,{U:()=>h,g:()=>b});var r=a(9307),s=a(9818),o=a(4333),n=a(5736),i=a(9291),l=a(6831),u=a(7625),d=a(2200),c=a(4401);var m=a(1589);const h=e=>{let{children:t,navigationStateCallback:a=!1}=e;const h=(0,o.useViewportMatch)("medium"),{storedThemeStatus:p,brandName:g}=(0,s.useSelect)((e=>({storedThemeStatus:e(l.h).getThemeStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),w=(e=>({loader:{title:(0,n.sprintf)(
/* translators: %s: Brand */
(0,n.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,n.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,n.sprintf)(
/* translators: %s: Brand */
(0,n.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,n.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,n.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(g),{updateThemeStatus:b,setIsDrawerOpened:S,setIsDrawerSuppressed:_,setIsHeaderNavigationEnabled:y}=(0,s.useDispatch)(l.h),v=async()=>{const e=await(0,u.YL)(d.DY);return null!=e&&e.error?d.vv:e.body.status},f=()=>{switch(p){case d.Rq:case d.GV:return(()=>{if("function"==typeof a)return a();h&&S(!0),_(!1),y(!0)})();default:S(!1),_(!0),y(!1)}};(0,r.useEffect)((()=>{f(),p===d.a0&&(async()=>{const e=await v();switch(e){case d.Zh:setTimeout((async()=>{if(await v()!==d.GV)return b(d.vv);window.location.reload()}),d.YU);break;case d.GV:window.location.reload();break;default:b(e)}})()}),[p]);const E=async()=>(b(d.Zh),(await(0,u.N9)(d.DY,!0,!1)).error?b(d.Rq):window.location.reload());return(0,r.createElement)(r.Fragment,null,(()=>{switch(p){case d.vv:return(0,r.createElement)(m.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,n.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,n.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:E,modalExitButtonText:(0,n.__)("Exit to WordPress","wp-module-onboarding")});case d.Rq:return(0,r.createElement)(c.V,{title:w.errorState.title,subtitle:w.errorState.subtitle,error:w.errorState.error});case d.GV:return t;default:return(0,r.createElement)(i.Y,{title:w.loader.title,subtitle:w.loader.subtitle})}})())};var p=a(3421),g=a(1392);var w=a(9884);const b=e=>{let{children:t,navigationStateCallback:a=!1}=e;const i=(0,o.useViewportMatch)("medium"),{storedPluginsStatus:u,brandName:m}=(0,s.useSelect)((e=>({storedPluginsStatus:e(l.h).getPluginsStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),h=(e=>({errorState:{title:(0,n.sprintf)(
/* translators: 1: Brand 2: Site */
(0,n.__)("Making the keys to your %1$s Online %2$s","wp-module-onboarding"),e,(0,g.I)("Site")),subtitle:(0,n.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,n.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(m),b=u[d.Gv],{updatePluginsStatus:S,setIsDrawerOpened:_,setIsDrawerSuppressed:y,setIsHeaderNavigationEnabled:v}=(0,s.useDispatch)(l.h),f=async()=>{const e=await(0,p.qC)(d.Gv);return null!=e&&e.error?d.sG:e.body.status},E=e=>{switch(e){case d.sG:case d.ye:return(()=>{if("function"==typeof a)return a();i&&_(!0),y(!1),v(!0)})();default:_(!1),y(!0),v(!1)}};(0,r.useEffect)((()=>{E(b)}),[u]);return(0,r.useEffect)((()=>{u[d.Gv]===d.Ck&&(async e=>{const t=await f();switch(t){case d.Sr:setTimeout((async()=>{await f()!==d.ye&&(u[d.Gv]=d.sG,S(u)),window.location.reload()}),d.sr);break;case d.ye:window.location.reload();break;default:e[d.Gv]=t,S(e)}})(u)}),[u]),(0,r.createElement)(r.Fragment,null,(()=>{switch(b){case d.sG:return(0,r.createElement)(c.V,{title:h.errorState.title,subtitle:h.errorState.subtitle,error:h.errorState.error});case d.ye:return t;default:return(0,r.createElement)(w.Z,null)}})())}},7473:(e,t,a)=>{a.r(t),a.d(t,{default:()=>_});var r=a(9307),s=a(9818),o=a(9250),n=a(284),i=a(6831),l=a(5634),u=a(4316),d=a(6690),c=a(6138),m=a(7625),h=a(6510),p=a(2200),g=a(1340),w=a(6332),b=a(7946),S=a(6202);const _=()=>{var e;const t=(0,n.Z)(),a=(0,o.TH)(),[_,y]=(0,r.useState)(),[v,f]=(0,r.useState)(),[E,k]=(0,r.useState)(),T=(0,o.s0)(),{currentStep:C,nextStep:N,currentData:D,storedPreviewSettings:P,routes:G,allSteps:V,designSteps:x,themeStatus:Z,themeVariations:I}=(0,s.useSelect)((e=>({currentStep:e(i.h).getStepFromPath(a.pathname),nextStep:e(i.h).getNextStep(),currentData:e(i.h).getCurrentOnboardingData(),storedPreviewSettings:e(i.h).getPreviewSettings(),routes:e(i.h).getRoutes(),allSteps:e(i.h).getAllSteps(),designSteps:e(i.h).getDesignSteps(),themeStatus:e(i.h).getThemeStatus(),themeVariations:e(i.h).getStepPreviewData()})),[]),{setDrawerActiveView:O,setSidebarActiveView:W,updatePreviewSettings:B,setCurrentOnboardingData:U,updateThemeStatus:Y,updateRoutes:H,updateDesignSteps:q,updateAllSteps:F}=(0,s.useDispatch)(i.h);return(0,r.useEffect)((()=>{W(p.Jq),O(p.Yl)}),[]),(0,r.useEffect)((()=>{Z===p.GV&&(async()=>{const e=await(0,c.C)(C.patternId,!0);if(null!=e&&e.error)return Y(p.a0);const t=await(0,m.oC)(!0);if(null!=t&&t.error)return Y(p.a0);k(D.data.theme.variation),y(null==e?void 0:e.body),f(null==t?void 0:t.body),k(D.data.theme.variation),""===D.data.theme.variation&&(0,S._)("default-style",t.body[0].title)})()}),[Z]),(0,r.createElement)(g.U,null,(0,r.createElement)(l.Z,null,(0,r.createElement)("div",{className:"theme-styles-menu"},(0,r.createElement)(u.Z,{title:t.heading},(0,r.createElement)("h3",{className:"nfd-main-heading__subtitle"},`${t.subheading} `,(0,r.createElement)("button",{className:"theme-styles-menu__custom-pages-link",onClick:()=>{const e=(0,b.U)(G,V,x);H(e.routes),q(e.designSteps),F(e.allSteps),D.data.customDesign=!0,U(D),(0,S._)("customize-design",!0),T(h.mT.designColors.path)}},t.subheading_link))),(0,r.createElement)("div",{className:"theme-styles-menu__list"},(0,r.createElement)(w.r9,{className:"theme-styles-menu__list__item",count:null===(e=I[null==C?void 0:C.patternId])||void 0===e?void 0:e.previewCount,watch:_&&v,callback:()=>null==v?void 0:v.map(((e,t)=>(0,r.createElement)(w.H,{key:t,className:"theme-styles-menu__list__item",selected:e.title===E,blockGrammer:_,viewportWidth:900,styling:"custom",previewSettings:e,overlay:!0,onClick:()=>(e=>{const t=v[e];B((0,d.NF)(t,P)),k(t.title),D.data.theme.variation=t.title,U(D),T(N.path),(0,S._)("selected-style",t.title)})(t)}))),viewportWidth:900})))))}},284:(e,t,a)=>{a.d(t,{Z:()=>s});var r=a(5736);const s=()=>({heading:(0,r.__)("Lets tailor your theme for the perfect fit","wp-module-onboarding"),subheading:(0,r.__)("Start with a style preset or","wp-module-onboarding"),subheading_link:(0,r.__)("build a custom design.","wp-module-onboarding"),checkbox_label:(0,r.__)("Customize Colors & Fonts?","wp-module-onboarding"),checkbox_hint:(0,r.__)("Check to customize in the next few steps (or leave empty and use the Site Editor later)","wp-module-onboarding")})},7946:(e,t,a)=>{a.d(t,{U:()=>o,o:()=>n});var r=a(2819),s=a(6510);const o=(e,t,a)=>{const o=n(e,t,a),i=[s.mT.designColors,s.mT.designTypography];return{routes:(0,r.orderBy)(o.routes.concat(i),["priority"],["asc"]),allSteps:(0,r.orderBy)(o.allSteps.concat(i),["priority"],["asc"]),designSteps:(0,r.orderBy)(o.designSteps.concat(i),["priority"],["asc"])}},n=(e,t,a)=>({routes:(0,r.filter)(e,(e=>!e.path.includes(s.mT.designColors.path)&&!e.path.includes(s.mT.designTypography.path))),allSteps:(0,r.filter)(t,(e=>!e.path.includes(s.mT.designColors.path)&&!e.path.includes(s.mT.designTypography.path))),designSteps:(0,r.filter)(a,(e=>!e.path.includes(s.mT.designColors.path)&&!e.path.includes(s.mT.designTypography.path)))})}}]);