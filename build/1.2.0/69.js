"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[69],{1211:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(9307),r=n(6974),o=n(9818),s=n(9685),l=e=>{let{text:t,handleClick:n,disabled:r,className:o}=e;return(0,a.createElement)("button",{type:"button",className:`${o} nfd-card-button`,onClick:()=>{n()},disabled:r},t)},i=n(7533),c=n(2200),d=e=>{let{text:t,disabled:n}=e;const d=(0,r.s0)(),u=(0,r.TH)(),{nextStep:m,currentData:p}=(0,o.useSelect)((e=>({nextStep:e(s.h).getNextStep(),currentData:e(s.h).getCurrentOnboardingData()})),[u.path]),g=null===m||!1===m;return(0,a.createElement)(l,{className:"nfd-nav-card-button",text:t,handleClick:()=>g?async function(){p&&(p.isComplete=(new Date).getTime(),(0,i.kB)(p));const e="ecommerce"===window.nfdOnboarding.currentFlow?c.Nj:c.hF;window.location.replace(e)}():d(m.path),disabled:n})}},9519:function(e,t,n){var a=n(9307);t.Z=(0,a.memo)((e=>{let{heading:t,subHeading:n,question:r}=e;return(0,a.createElement)("div",null,t&&(0,a.createElement)("h2",{className:"nfd-step-card-heading"},t),n&&(0,a.createElement)("h3",{className:r?"nfd-step-card-subheading-other":"nfd-step-card-subheading"},n),r&&(0,a.createElement)("h3",{className:"nfd-step-card-question"},r))}))},4401:function(e,t,n){n.d(t,{V:function(){return l}});var a=n(9307),r=n(5791),o=n(4316),s=n(950),l=e=>{let{title:t,subtitle:n,error:l}=e;return(0,a.createElement)(r.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(o.Z,{title:t,subtitle:n}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},l),(0,a.createElement)(s.Z,null))}},4316:function(e,t,n){var a=n(9307),r=n(5736);t.Z=e=>{let{title:t,subtitle:n}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,r.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,r.__)(n,"wp-module-onboarding")))}},5791:function(e,t,n){n.d(t,{Z:function(){return b}});var a=n(9307),r=n(4184),o=n.n(r),s=n(5158),l=n(6974),i=n(2200),c=n(6989),d=n.n(c),u=n(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const r=(0,l.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,s.speak)(t,"assertive")}(r,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){d()({url:(0,u.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:r.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=r.pathname}),[r.pathname]),(0,a.createElement)("div",{className:o()("nfd-onboarding-layout",t)},n)},p=n(682);const g=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var b=e=>{let{className:t="",children:n,isBgPrimary:r=!1,isCentered:s=!1,isVerticallyCentered:l=!1,isContained:i=!1,isPadded:c=!1,isFadeIn:d=!0}=e;const u=i?g:a.Fragment;return(0,a.createElement)(p.Z,{type:d&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,a.createElement)(m,{className:o()("nfd-onboarding-layout__common",t,{"is-bg-primary":r},{"is-centered":s},{"is-vertically-centered":l},{"is-padded":c})},(0,a.createElement)(u,null,n)))}},7004:function(e,t,n){n.d(t,{L:function(){return c},Y:function(){return l}});var a=n(9307),r=n(5791),o=n(4316),s=n(950),l=e=>{let{title:t,subtitle:n}=e;return(0,a.createElement)(r.Z,{className:"step-loader",isVerticallyCentered:!0},(0,a.createElement)(o.Z,{title:t,subtitle:n}),(0,a.createElement)("div",{className:"step-loader__logo-container"},(0,a.createElement)("div",{className:"step-loader__logo"})),(0,a.createElement)(s.Z,null))},i=n(682),c=()=>(0,a.createElement)("div",{className:"image-upload-loader--loading-box"},(0,a.createElement)(i.Z,{type:"load",className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,n){var a=n(9307),r=n(9685),o=n(9818),s=n(5736);t.Z=e=>{let{question:t=(0,s.__)("Need Help?","wp-module-onboarding"),urlLabel:n=(0,s.__)("Hire our Experts","wp-module-onboarding")}=e;const l=(0,o.select)(r.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:l,target:"_blank"},n))}},349:function(e,t,n){var a=n(9307),r=(n(5736),n(4184)),o=n.n(r);t.Z=e=>{let{className:t="",children:n}=e;return(0,a.createElement)("div",{className:o()("nfd-onboarding-large-card",t)},n)}},1340:function(e,t,n){n.d(t,{U:function(){return p},g:function(){return h}});var a=n(9307),r=n(9818),o=n(4333),s=n(5736),l=n(7004),i=n(9685),c=n(7625),d=n(2200),u=n(4401),m=n(1589),p=e=>{let{children:t,navigationStateCallback:n=!1}=e;const p=(0,o.useViewportMatch)("medium"),{storedThemeStatus:g,brandName:b}=(0,r.useSelect)((e=>({storedThemeStatus:e(i.h).getThemeStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),h=(e=>({loader:{title:(0,s.sprintf)(
/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(
/* translators: %s: Brand */
(0,s.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,s.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(b),{updateThemeStatus:w,setIsDrawerOpened:f,setIsDrawerSuppressed:_,setIsHeaderNavigationEnabled:v}=(0,r.useDispatch)(i.h),y=async()=>{const e=await(0,c.YL)(d.DY);return null!=e&&e.error?d.vv:e.body.status},E=()=>{switch(g){case d.Rq:case d.GV:return(()=>{if("function"==typeof n)return n();p&&f(!0),_(!1),v(!0)})();default:f(!1),_(!0),v(!1)}};(0,a.useEffect)((async()=>{if(E(),g===d.a0){const e=await y();switch(e){case d.Zh:setTimeout((async()=>{if(await y()!==d.GV)return w(d.vv);window.location.reload()}),d.YU);break;case d.GV:window.location.reload();break;default:w(e)}}}),[g]);const N=async()=>(w(d.Zh),(await(0,c.N9)(d.DY,!0,!1)).error?w(d.Rq):window.location.reload());return(0,a.createElement)(a.Fragment,null,(()=>{switch(g){case d.vv:return(0,a.createElement)(m.Z,{showButton:!1,isModalOpen:!0,modalTitle:(0,s.__)("It looks like you may have an existing website","wp-module-onboarding"),modalText:(0,s.__)("Going through this setup will change your active theme, WordPress settings, add content – would you like to continue?","wp-module-onboarding"),modalOnClose:N,modalExitButtonText:(0,s.__)("Exit to WordPress","wp-module-onboarding")});case d.Rq:return(0,a.createElement)(u.V,{title:h.errorState.title,subtitle:h.errorState.subtitle,error:h.errorState.error});case d.GV:return t;default:return(0,a.createElement)(l.Y,{title:h.loader.title,subtitle:h.loader.subtitle})}})())},g=n(3421),b=n(1392),h=e=>{let{children:t,navigationStateCallback:n=!1}=e;const c=(0,o.useViewportMatch)("medium"),[m,p]=(0,a.useState)(d.Sr),{storedPluginsStatus:h,brandName:w}=(0,r.useSelect)((e=>({storedPluginsStatus:e(i.h).getPluginsStatus(),brandName:e(i.h).getNewfoldBrandName()})),[]),f=(e=>({loader:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: Site */
(0,s.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,b.I)("Site")),subtitle:(0,s.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,s.sprintf)(
/* translators: 1: Brand 2: Site */
(0,s.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,b.I)("Site")),subtitle:(0,s.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,s.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(w),{updatePluginsStatus:_,setIsDrawerOpened:v,setIsDrawerSuppressed:y,setIsHeaderNavigationEnabled:E}=(0,r.useDispatch)(i.h),N=async()=>{const e=await(0,g.qC)(d.Gv);return null!=e&&e.error?d.sG:e.body.status},S=e=>{switch(e){case d.sG:case d.ye:return(()=>{if("function"==typeof n)return n();c&&v(!0),y(!1),E(!0)})();default:v(!1),y(!0),E(!1)}};return(0,a.useEffect)((()=>{S(m)}),[m]),(0,a.useEffect)((async()=>{if(p(h[d.Gv]),h[d.Gv]===d.Ck){const e=await N();switch(e){case d.Sr:setTimeout((async()=>{if(await N()!==d.ye)return h[d.Gv]=d.sG,_(h),p(d.sG);window.location.reload()}),d.sr);break;case d.ye:window.location.reload();break;default:h[d.Gv]=e,p(e),_(h)}}}),[h]),(0,a.createElement)(a.Fragment,null,(()=>{switch(m){case d.sG:return(0,a.createElement)(u.V,{title:f.errorState.title,subtitle:f.errorState.subtitle,error:f.errorState.error});case d.ye:return t;default:return(0,a.createElement)(l.Y,{title:f.loader.title,subtitle:f.loader.subtitle})}})())}},4069:function(e,t,n){n.r(t);var a=n(9307),r=n(5609),o=n(9818),s=n(5736),l=n(2200),i=n(1211),c=n(9519),d=n(5791),u=n(950),m=n(349),p=n(1340),g=n(9685),b=n(9371);t.default=()=>{const{setDrawerActiveView:e,setSidebarActiveView:t,setCurrentOnboardingData:n}=(0,o.useDispatch)(g.h);let h=(0,o.useSelect)((e=>e(g.h).getCurrentOnboardingData())),w=h.storeDetails.productInfo;return(0,a.useEffect)((()=>{t(l.Jq),e(l.dv)}),[]),(0,a.createElement)(p.g,null,(0,a.createElement)(d.Z,{isBgPrimary:!0,isCentered:!0},(0,a.createElement)(m.Z,{className:"ecommerce-step"},(0,a.createElement)("div",{className:"nfd-onboarding-experience-step onboarding-product-step onboarding-ecommerce-step"},(0,a.createElement)("div",{className:"nfd-card-heading center"},(0,a.createElement)(c.Z,{heading:(0,s.__)(b.F6,"wp-module-onboarding"),subHeading:(0,s.__)(b.fA,"wp-module-onboarding")})),(0,a.createElement)("div",{className:"nfd-product-step-options"},b.GE.map((e=>(0,a.createElement)(r.CheckboxControl,{key:e.value,checked:w.product_types.includes(e.value),label:e.content,onChange:t=>{return a=e.value,r=t,n({storeDetails:{...h.storeDetails,productInfo:{...w,product_types:r?[...null==w?void 0:w.product_types,a]:null==w?void 0:w.product_types.filter((e=>e!==a))}}});var a,r}})))),(0,a.createElement)("div",{className:"step-product-numbers"},(0,a.createElement)("span",{style:{fontSize:"16px"}},(0,s.__)(b.xs,"wp-module-onboarding")),(0,a.createElement)(r.RadioControl,{className:"components-radio-control__input",selected:null==w?void 0:w.product_count,options:b.XY.map((e=>({label:(0,s.__)(e.content,"wp-module-onboarding"),value:(0,s.__)(e.value,"wp-module-onboarding")}))),onChange:e=>n({storeDetails:{...h.storeDetails,productInfo:{...w,product_count:e}}})})),(0,a.createElement)(i.Z,{text:(0,s.__)(b.q5,"wp-module-onboarding")}),(0,a.createElement)(u.Z,null)))))}},9371:function(e){e.exports=JSON.parse('{"F6":"Tell us about your products","fA":"What type of products will you be selling?","xs":"How many products will you be selling?","OB":"Configure your tax information","pm":"Do you want to enable tax rates and calculations?","kM":[{"content":"Yes, enable tax rates and calculations","value":"1","data":{"wc_connect_taxes_enabled":"yes","woocommerce_calc_taxes":"yes"}},{"content":"I will configure my own tax information later","value":"3","data":{"wc_connect_taxes_enabled":"no","woocommerce_calc_taxes":"yes"}},{"content":"I don\'t charge sales tax","value":"5","data":{"woocommerce_no_sales_tax":true,"woocommerce_calc_taxes":"no","wc_connect_taxes_enabled":"no"}}],"q5":"Continue Setup","GE":[{"content":"Physical products","value":"physical"},{"content":"Digital / Downloadable products","value":"downloads"},{"content":"Subscriptions","value":"subscriptions"},{"content":"Book rooms, houses or rent products","value":"bookings"},{"content":"Membership","value":"memberships"},{"content":"Customizable products","value":"product-add-ons"},{"content":"Bundles of products","value":"product-bundles"},{"content":"Let your users ask a quote for your products","value":"product-quotes"}],"XY":[{"content":"0","value":"0"},{"content":"1 - 10","value":"1-10"},{"content":"11 - 100","value":"11-100"},{"content":"101 - 1000","value":"101-1000"},{"content":"1000 +","value":"1000+"}]}')}}]);