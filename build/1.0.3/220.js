"use strict";(self.webpackChunknewfold_Onboarding=self.webpackChunknewfold_Onboarding||[]).push([[220],{9519:function(e,t,n){var a=n(9307);n(9196),t.Z=e=>{let{heading:t,subHeading:n,question:o}=e;return(0,a.createElement)("div",null,t&&(0,a.createElement)("h2",{className:"nfd-step-card-heading"},t),n&&(0,a.createElement)("h3",{className:o?"nfd-step-card-subheading-other":"nfd-step-card-subheading"},n),o&&(0,a.createElement)("h3",{className:"nfd-step-card-question"},o))}},4401:function(e,t,n){n.d(t,{V:function(){return s}});var a=n(9307),o=n(5791),r=n(4316),l=n(950),s=e=>{let{title:t,subtitle:n,error:s}=e;return(0,a.createElement)(o.Z,{className:"step-error-state",isVerticallyCentered:!0},(0,a.createElement)(r.Z,{title:t,subtitle:n}),(0,a.createElement)("div",{className:"step-error-state__logo"}),(0,a.createElement)("h3",{className:"step-error-state__error"},s),(0,a.createElement)(l.Z,null))}},4316:function(e,t,n){var a=n(9307),o=n(5736);t.Z=e=>{let{title:t,subtitle:n}=e;return(0,a.createElement)("div",{className:"nfd-main-heading"},(0,a.createElement)("h2",{className:"nfd-main-heading__title"},(0,o.__)(t,"wp-module-onboarding")),(0,a.createElement)("h3",{className:"nfd-main-heading__subtitle"},(0,o.__)(n,"wp-module-onboarding")))}},5791:function(e,t,n){n.d(t,{Z:function(){return g}});var a=n(9307),o=(n(5609),n(4184)),r=n.n(o),l=n(5158),s=n(6974),i=n(2200),c=n(6989),u=n.n(c),d=n(4704),m=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const o=(0,s.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,l.speak)(t,"assertive")}(o,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){u()({url:(0,d.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${i.Db}-pageview`,{stepID:o.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=o.pathname}),[o.pathname]),(0,a.createElement)("div",{className:r()("nfd-onboarding-layout",t)},n)};const p=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)};var g=e=>{let{className:t="",children:n,isBgPrimary:o=!1,isCentered:l=!1,isVerticallyCentered:s=!1,isContained:i=!1,isPadded:c=!1,isFadeIn:u=!0}=e;const d=i?p:a.Fragment;return(0,a.createElement)(m,{className:r()("nfd-onboarding-layout__common",t,{"is-layout-fade-in":u},{"is-bg-primary":o},{"is-centered":l},{"is-vertically-centered":s},{"is-padded":c})},(0,a.createElement)(d,null,n))}},7004:function(e,t,n){n.d(t,{L:function(){return i},Y:function(){return s}});var a=n(9307),o=n(5791),r=n(4316),l=n(950),s=e=>{let{title:t,subtitle:n}=e;return(0,a.createElement)(o.Z,{className:"step-loader",isVerticallyCentered:!0},(0,a.createElement)(r.Z,{title:t,subtitle:n}),(0,a.createElement)("div",{className:"step-loader__logo-container"},(0,a.createElement)("div",{className:"step-loader__logo"})),(0,a.createElement)(l.Z,null))},i=()=>(0,a.createElement)("div",{className:"image-upload-loader--loading-box"},(0,a.createElement)("div",{className:"image-upload-loader--loading-box__loader"}))},950:function(e,t,n){var a=n(9307),o=n(9685),r=n(9818),l=n(5736);t.Z=e=>{let{question:t=(0,l.__)("Need Help?","wp-module-onboarding"),urlLabel:n=(0,l.__)("Hire our Experts","wp-module-onboarding")}=e;const s=(0,r.select)(o.h).getHireExpertsUrl();return(0,a.createElement)("div",{className:"nfd-card-need-help-tag"},t,(0,a.createElement)("a",{href:s,target:"_blank"},n))}},349:function(e,t,n){var a=n(9307),o=(n(5736),n(4184)),r=n.n(o);t.Z=e=>{let{className:t="",children:n}=e;return(0,a.createElement)("div",{className:r()("nfd-onboarding-large-card",t)},n)}},225:function(e,t,n){n.d(t,{f:function(){return r}});var a=n(9307),o=e=>{let{options:t}=e;return(0,a.createElement)("div",{className:"radio-control-skeleton"},t.map((e=>(0,a.createElement)("div",{className:"radio-control-skeleton-item"}))))},r=e=>{let{options:t,watch:n,children:r}=e;const[l,s]=(0,a.useState)(0);return(0,a.useEffect)((()=>s(1)),[n]),n?(0,a.createElement)(a.Fragment,null,(0,a.createElement)("div",{style:{display:"none"}},l),r):(0,a.createElement)(o,{options:t})}},1340:function(e,t,n){n.d(t,{U:function(){return d},g:function(){return g}});var a=n(9307),o=n(9818),r=n(7004),l=n(9685),s=n(7625),i=n(2200),c=n(4401),u=n(5736),d=e=>{let{children:t}=e;const{storedThemeStatus:n,brandName:d}=(0,o.useSelect)((e=>({storedThemeStatus:e(l.h).getThemeStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),m=(e=>({loader:{title:(0,u.sprintf)(
/* translators: %s: Brand */
(0,u.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,u.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding")},errorState:{title:(0,u.sprintf)(
/* translators: %s: Brand */
(0,u.__)("Preparing your %s design studio","wp-module-onboarding"),e),subtitle:(0,u.__)("Hang tight while we show you some of the best WordPress has to offer!","wp-module-onboarding"),error:(0,u.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(d),{updateThemeStatus:p}=(0,o.useDispatch)(l.h),g=async()=>{const e=await(0,s.YL)(i.DY);return null!=e&&e.error?i.vv:e.body.status};return(0,a.useEffect)((async()=>{if(n===i.a0){const e=await g();switch(e){case i.Zh:setTimeout((async()=>{if(await g()!==i.GV)return p(i.vv);window.location.reload()}),i.YU);break;case i.GV:window.location.reload();break;default:p(e)}}}),[n]),(0,a.createElement)(a.Fragment,null,(()=>{switch(n){case i.vv:return(0,a.createElement)(c.V,{title:m.errorState.title,subtitle:m.errorState.subtitle,error:m.errorState.error});case i.GV:return t;default:return(0,a.createElement)(r.Y,{title:m.loader.title,subtitle:m.loader.subtitle})}})())},m=n(3421),p=n(1392),g=e=>{let{children:t}=e;const[n,s]=(0,a.useState)(i.Sr),{storedPluginsStatus:d,brandName:g}=(0,o.useSelect)((e=>({storedPluginsStatus:e(l.h).getPluginsStatus(),brandName:e(l.h).getNewfoldBrandName()})),[]),b=(e=>({loader:{title:(0,u.sprintf)(
/* translators: 1: Brand 2: Site */
(0,u.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,u.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding")},errorState:{title:(0,u.sprintf)(
/* translators: 1: Brand 2: Site */
(0,u.__)("Making the keys to your %s Online %s","wp-module-onboarding"),e,(0,p.I)("Site")),subtitle:(0,u.__)("We’re installing WooCommerce for you to fill with your amazing products & services!","wp-module-onboarding"),error:(0,u.__)("Uh-oh, something went wrong. Please contact support.","wp-module-onboarding")}}))(g),{updatePluginsStatus:f}=(0,o.useDispatch)(l.h),h=async()=>{const e=await(0,m.qC)(i.Gv);return null!=e&&e.error?i.sG:e.body.status};return(0,a.useEffect)((async()=>{if(s(d[i.Gv]),d[i.Gv]===i.Ck){const e=await h();switch(e){case i.Sr:setTimeout((async()=>{if(await h()!==i.ye)return s(i.sG);window.location.reload()}),i.sr);break;case i.ye:window.location.reload();break;default:d[i.Gv]=e,s(e),f(d)}}}),[d]),(0,a.createElement)(a.Fragment,null,(()=>{switch(n){case i.sG:return(0,a.createElement)(c.V,{title:b.errorState.title,subtitle:b.errorState.subtitle,error:b.errorState.error});case i.ye:return t;default:return(0,a.createElement)(r.Y,{title:b.loader.title,subtitle:b.loader.subtitle})}})())}},7220:function(e,t,n){n.r(t);var a=n(9307),o=n(5609),r=n(4333),l=n(9818),s=n(5736),i=n(6974),c=n(2200),u=n(9519),d=n(5791),m=n(950),p=n(349),g=n(1340),b=n(9685),f=n(9371),h=n(7282),v=n(225);t.default=()=>{const e=(0,r.useViewportMatch)("medium"),{setDrawerActiveView:t,setIsDrawerOpened:n,setIsDrawerSuppressed:w,setSidebarActiveView:_,setCurrentOnboardingData:y}=(0,l.useDispatch)(b.h),E=(0,i.s0)();let S=(0,l.useSelect)((e=>e(b.h).getCurrentOnboardingData()));(0,a.useEffect)((()=>{e&&n(!0),_(c.Jq),w(!1),t(c.dv)}),[]);const N=(0,h.e)();(0,a.useEffect)((()=>{if(null!==N&&void 0===S.storeDetails.tax){var e,t;let a=f.kM.find((n=N,e=>Object.entries(e.data).every((e=>{let[t,a]=e;return(null==n?void 0:n[t])===a})))),o=null!==(e=null==a?void 0:a.data)&&void 0!==e?e:{};y({storeDetails:{...S.storeDetails,tax:{...null!==(t=S.storeDetails.tax)&&void 0!==t?t:{},...o,option:null==a?void 0:a.value,isStoreDetailsFilled:null!==N.woocommerce_store_postcode}}})}var n}),[N,S.storeDetails]);let{tax:D}=S.storeDetails;return(0,a.createElement)(g.g,null,(0,a.createElement)(d.Z,{isBgPrimary:!0,isCentered:!0},(0,a.createElement)(p.Z,{className:"ecommerce-step"},(0,a.createElement)("div",{className:"nfd-onboarding-experience-step onboarding-ecommerce-step"},(0,a.createElement)("div",{className:"nfd-card-heading center onboarding-ecommerce-step"},(0,a.createElement)(u.Z,{heading:(0,s.__)(f.OB,"wp-module-onboarding"),subHeading:(0,s.__)(f.pm,"wp-module-onboarding"),question:(0,s.__)(f.question,"wp-module-onboarding")})),(0,a.createElement)(v.f,{watch:N,options:f.kM},(0,a.createElement)(o.RadioControl,{className:"nfd-onboarding-experience-step-tabs components-radio-control__input radio-control-tax-step radio-control-main",selected:null==D?void 0:D.option,options:f.kM.map((e=>({label:(0,s.__)(e.content,"wp-module-onboarding"),value:(0,s.__)(e.value,"wp-module-onboarding")}))),onChange:e=>(e=>{let t=f.kM.find((t=>t.value===e));y({storeDetails:{...S.storeDetails,tax:{...t.data,option:t.value,isStoreDetailsFilled:null==D?void 0:D.isStoreDetailsFilled}}})})(e)})),(0,a.createElement)("button",{className:"nfd-nav-card-button nfd-card-button",disabled:null===N||void 0===(null==D?void 0:D.option),onClick:()=>{E("/ecommerce/step/products")}},(0,s.__)("Continue Setup","wp-module-onboarding")),(0,a.createElement)(m.Z,null)))))}},7282:function(e,t,n){n.d(t,{e:function(){return r}});var a=n(9307),o=n(3768);function r(){const[e,t]=(0,a.useState)(null);return(0,a.useEffect)((()=>{!async function(){let e=await(0,o.pn)().catch((()=>({})));t(e)}()}),[]),e}},9371:function(e){e.exports=JSON.parse('{"F6":"Tell us about your products","fA":"What type of products will you be selling?","xs":"How many products will you be selling?","OB":"Configure your tax information","pm":"Do you want to enable tax rates and calculations?","Q4":"Confirm your business or store address","Ds":"We’ll use this information to help you setup your online store","kM":[{"content":"Yes, enable tax rates and calculations","value":"1","data":{"wc_connect_taxes_enabled":"yes","woocommerce_calc_taxes":"yes"}},{"content":"I will configure my own tax information later","value":"3","data":{"wc_connect_taxes_enabled":"no","woocommerce_calc_taxes":"yes"}},{"content":"I don\'t charge sales tax","value":"5","data":{"woocommerce_no_sales_tax":true,"woocommerce_calc_taxes":"no","wc_connect_taxes_enabled":"no"}}],"q5":"Continue Setup","GE":[{"content":"Physical products","value":"physical"},{"content":"Digital / Downloadable products","value":"downloads"},{"content":"Subscriptions","value":"subscriptions"},{"content":"Book rooms, houses or rent products","value":"bookings"},{"content":"Membership","value":"memberships"},{"content":"Customizable products","value":"product-add-ons"},{"content":"Bundles of products","value":"product-bundles"},{"content":"Let your users ask a quote for your products","value":"product-quotes"}],"XY":[{"content":"0","value":"0"},{"content":"1 - 10","value":"1-10"},{"content":"11 - 100","value":"11-100"},{"content":"101 - 1000","value":"101-1000"},{"content":"1000 +","value":"1000+"}]}')}}]);