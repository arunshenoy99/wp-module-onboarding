"use strict";(globalThis.webpackChunknewfold_Onboarding=globalThis.webpackChunknewfold_Onboarding||[]).push([[419],{1211:(e,t,n)=>{n.d(t,{Z:()=>d});var a=n(9307),s=n(6974),o=n(9818),i=n(9685);const r=e=>{let{text:t,handleClick:n,disabled:s,className:o}=e;return(0,a.createElement)("button",{type:"button",className:`${o} nfd-card-button`,onClick:()=>{n()},disabled:s},t)};var l=n(7533),c=n(2200);const d=e=>{let{text:t,disabled:n}=e;const d=(0,s.s0)(),m=(0,s.TH)(),{nextStep:u,currentData:b}=(0,o.useSelect)((e=>({nextStep:e(i.h).getNextStep(),currentData:e(i.h).getCurrentOnboardingData()})),[m.path]),p=null===u||!1===u;return(0,a.createElement)(r,{className:"nfd-nav-card-button",text:t,handleClick:()=>p?async function(){b&&(b.isComplete=(new Date).getTime(),(0,l.kB)(b));const e="ecommerce"===window.nfdOnboarding.currentFlow?c.br:c.hF;window.location.replace(e)}():d(u.path),disabled:n})}},9519:(e,t,n)=>{n.d(t,{Z:()=>s});var a=n(9307);const s=(0,a.memo)((e=>{let{heading:t,subHeading:n,question:s}=e;return(0,a.createElement)("div",null,t&&(0,a.createElement)("h2",{className:"nfd-step-card-heading"},t),n&&(0,a.createElement)("h3",{className:s?"nfd-step-card-subheading-other":"nfd-step-card-subheading"},n),s&&(0,a.createElement)("h3",{className:"nfd-step-card-question"},s))}))},5791:(e,t,n)=>{n.d(t,{Z:()=>h});var a=n(9307),s=n(4184),o=n.n(s),i=n(5158),r=n(6974),l=n(2200),c=n(6989),d=n.n(c),m=n(4704);const u=e=>{let{className:t="nfd-onboarding-layout__base",children:n}=e;const s=(0,r.TH)(),c=document.querySelector(".nfd-onboard-content");return(0,a.useEffect)((()=>{null==c||c.focus({preventScroll:!0}),function(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"Showing new Onboarding Page";(0,i.speak)(t,"assertive")}(s,"Override"),new class{constructor(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};this.eventSlug=e,this.eventData=t}send(){d()({url:(0,m.F)("events"),method:"POST",data:{slug:this.eventSlug,data:this.eventData}}).catch((e=>{console.error(e)}))}}(`${l.Db}-pageview`,{stepID:s.pathname,previousStepID:window.nfdOnboarding.previousStepID}).send(),window.nfdOnboarding.previousStepID=s.pathname}),[s.pathname]),(0,a.createElement)("div",{className:o()("nfd-onboarding-layout",t)},n)};var b=n(682);const p=e=>{let{children:t}=e;return(0,a.createElement)("section",{className:"is-contained"},t)},h=e=>{let{className:t="",children:n,isBgPrimary:s=!1,isCentered:i=!1,isVerticallyCentered:r=!1,isContained:l=!1,isPadded:c=!1,isFadeIn:d=!0}=e;const m=l?p:a.Fragment;return(0,a.createElement)(b.Z,{type:d&&"fade-in",duration:"233ms",timingFunction:"ease-in-out"},(0,a.createElement)(u,{className:o()("nfd-onboarding-layout__common",t,{"is-bg-primary":s},{"is-centered":i},{"is-vertically-centered":r},{"is-padded":c})},(0,a.createElement)(m,null,n)))}},349:(e,t,n)=>{n.d(t,{Z:()=>i});var a=n(9307),s=(n(5736),n(4184)),o=n.n(s);const i=e=>{let{className:t="",children:n}=e;return(0,a.createElement)("div",{className:o()("nfd-onboarding-large-card",t)},n)}},2452:(e,t,n)=>{n.d(t,{Z:()=>o});var a=n(9307),s=n(682);const o=e=>{let{title:t,text:n,imgType:o,className:i,animationName:r}=e;return(0,a.createElement)("div",{className:i},(0,a.createElement)("div",{className:"tab-text"},(0,a.createElement)("h4",null,t),n),(0,a.createElement)("div",{className:"tab-image"},(0,a.createElement)("div",{className:"tab-img"},(0,a.createElement)(s.Z,{type:r},(0,a.createElement)("div",{className:o})))))}},1056:(e,t,n)=>{n.d(t,{Z:()=>f});var a=n(7462),s=n(9307),o=(n(4184),n(2819)),i=n(4333),r=n(9630),l=n(5904);const c=()=>{},d=["menuitem","menuitemradio","menuitemcheckbox"];class m extends s.Component{constructor(){super(...arguments),this.onKeyDown=this.onKeyDown.bind(this),this.bindContainer=this.bindContainer.bind(this),this.getFocusableContext=this.getFocusableContext.bind(this),this.getFocusableIndex=this.getFocusableIndex.bind(this)}componentDidMount(){this.container.addEventListener("keydown",this.onKeyDown),this.container.addEventListener("focus",this.onFocus)}componentWillUnmount(){this.container.removeEventListener("keydown",this.onKeyDown),this.container.removeEventListener("focus",this.onFocus)}bindContainer(e){const{forwardedRef:t}=this.props;this.container=e,"function"==typeof t?t(e):t&&"current"in t&&(t.current=e)}getFocusableContext(e){const{onlyBrowserTabstops:t}=this.props,n=(t?l.focus.tabbable:l.focus.focusable).find(this.container),a=this.getFocusableIndex(n,e);return a>-1&&e?{index:a,target:e,focusables:n}:null}getFocusableIndex(e,t){const n=e.indexOf(t);if(-1!==n)return n}onKeyDown(e){this.props.onKeyDown&&this.props.onKeyDown(e);const{getFocusableContext:t}=this,{cycle:n=!0,eventToOffset:a,onNavigate:s=c,stopNavigationEvents:o}=this.props,i=a(e);if(void 0!==i&&o){e.stopImmediatePropagation();const t=e.target.getAttribute("role");d.includes(t)&&e.preventDefault()}if(!i)return;const r=t(e.target.ownerDocument.activeElement);if(!r)return;const{index:l,focusables:m}=r,u=n?function(e,t,n){const a=e+n;return a<0?t+a:a>=t?a-t:a}(l,m.length,i):l+i;u>=0&&u<m.length&&(m[u].focus(),s(u,m[u]))}render(){const{children:e,...t}=this.props;return(0,s.createElement)("div",(0,a.Z)({ref:this.bindContainer},(0,o.omit)(t,["stopNavigationEvents","eventToOffset","onNavigate","onKeyDown","cycle","onlyBrowserTabstops","forwardedRef"])),e)}}const u=(e,t)=>(0,s.createElement)(m,(0,a.Z)({},e,{forwardedRef:t}));u.displayName="NavigableContainer";const b=(0,s.forwardRef)(u),p=(0,s.forwardRef)((function(e,t){let{role:n="menu",orientation:i="vertical",...l}=e;return(0,s.createElement)(b,(0,a.Z)({ref:t,stopNavigationEvents:!0,onlyBrowserTabstops:!1,role:n,"aria-orientation":"presentation"===n?null:i,eventToOffset:e=>{const{keyCode:t}=e;let n=[r.DOWN],a=[r.UP];return"horizontal"===i&&(n=[r.RIGHT],a=[r.LEFT]),"both"===i&&(n=[r.RIGHT,r.DOWN],a=[r.LEFT,r.UP]),(0,o.includes)(n,t)?1:(0,o.includes)(a,t)?-1:(0,o.includes)([r.DOWN,r.UP,r.LEFT,r.RIGHT],t)?0:void 0}},l))}));(0,s.forwardRef)((function(e,t){let{eventToOffset:n,...o}=e;return(0,s.createElement)(b,(0,a.Z)({ref:t,stopNavigationEvents:!0,onlyBrowserTabstops:!0,eventToOffset:e=>{const{keyCode:t,shiftKey:a}=e;return r.TAB===t?a?-1:1:n?n(e):void 0}},o))}));var h=n(5609);const g=()=>{},v=e=>{let{tabId:t,onClick:n,children:o,selected:i,...r}=e;return(0,s.createElement)(h.Button,(0,a.Z)({role:"tab",tabIndex:i?null:-1,"aria-selected":i,id:t,onClick:n},r),o)};function f(e){var t;let{className:n,children:a,tabs:r,initialTabName:l,orientation:c="horizontal",activeClass:d="is-active",notActiveClass:m="is-not-active",onSelect:u=g}=e;const b=(0,i.useInstanceId)(f,"tab-panel"),[h,E]=(0,s.useState)(null),w=e=>{E(e),u(e)},N=(0,o.find)(r,{name:h}),y=`${b}-${null!==(t=null==N?void 0:N.name)&&void 0!==t?t:"none"}`;return(0,s.useEffect)((()=>{(0,o.find)(r,{name:h})||E(l||(r.length>0?r[0].name:null))}),[r]),(0,s.createElement)("div",{className:n},(0,s.createElement)(p,{role:"tablist",orientation:c,onNavigate:(e,t)=>{t.click()},className:"components-tab-panel__tabs"},r.map((e=>(0,s.createElement)(v,{className:`components-tab-panel__tabs-item ${e.name===h&&d} ${e.name!==h&&m}`,tabId:`${b}-${e.name}`,"aria-controls":`${b}-${e.name}-view`,selected:e.name===h,key:e.name,onMouseOver:(0,o.partial)(w,e.name)},e.title)))),N&&(0,s.createElement)("div",{key:y,"aria-labelledby":y,role:"tabpanel",id:`${y}-view`,className:"components-tab-panel__tab-content"},a(N)))}},6419:(e,t,n)=>{n.r(t),n.d(t,{default:()=>v});var a=n(9307),s=n(5736),o=n(9685),i=n(6974),r=n(9818),l=n(1392),c=n(5791),d=n(349),m=n(9519),u=n(1211),b=n(2452);const p=JSON.parse('{"e":[{"name":"tab1","title":"YOUR CONTENT","subtitle":"Publish boldly with WordPress Blocks.","text":"Build a beautiful %s using a visual builder. Block Patterns accelerate telling your story or tending your store with professional designs.","imgType":"content-img","animationName":"fade-in-right"},{"name":"tab2","title":"POWERFUL FEATURES","subtitle":"Proven, easy-to-use solutions.","text":"Reach for your %s goals using proven WordPress Plugins & %s solutions. Send a newsletter, host a podcast, book clients, take payments and more.","imgType":"features-img","animationName":"fade-in-up"},{"name":"tab3","title":"MODERN DESIGN","subtitle":"Paint trim. Move walls. No sweat.","text":"Establish your %s\'s unique design. Use the WordPress Editor to refine over time with professionally-designed patterns, parts, templates, colors and type.","imgType":"design-img","animationName":"fade-in-left"}]}');var h=n(1056),g=n(2200);const v=()=>{const e=(0,i.TH)(),{currentStep:t,brandName:n}=(0,r.useSelect)((e=>({currentStep:e(o.h).getCurrentStep(),brandName:e(o.h).getNewfoldBrandName()})),[e.pathname]),{setDrawerActiveView:v,setSidebarActiveView:f,setIsDrawerSuppressed:E,setIsHeaderNavigationEnabled:w}=(0,r.useDispatch)(o.h);return(0,a.useEffect)((()=>{f(g.Jq),w(!0),E(!0),v(g.mz)}),[]),(0,a.createElement)(c.Z,{isBgPrimary:!0,isCentered:!0},(0,a.createElement)(d.Z,null,(0,a.createElement)("div",{className:"welcome-card"},(0,a.createElement)(m.Z,{heading:null==t?void 0:t.heading,subHeading:(null==t?void 0:t.subheading)+n+"."}),(0,a.createElement)(h.Z,{className:"nfd-onboarding-overview__tab-panel",tabs:p.e.map((e=>({name:(0,s.__)(e.name,"wp-module-onboarding"),title:(0,s.__)(e.title,"wp-module-onboarding"),content:(0,a.createElement)(b.Z,{title:(0,s.__)(e.subtitle,"wp-module-onboarding"),text:(0,s.sprintf)((0,s.__)(e.text,"wp-module-onboarding"),(0,l.I)("site"),n),imgType:e.imgType,animationName:e.animationName,className:"tab-data"})})))},(e=>(0,a.createElement)("div",null,e.content))),(0,a.createElement)(u.Z,{text:(0,s.__)("Start Setup","wp-module-onboarding")}))))}}}]);