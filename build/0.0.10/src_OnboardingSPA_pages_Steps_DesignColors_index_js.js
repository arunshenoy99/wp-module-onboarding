"use strict";
(self["webpackChunknewfold_Onboarding"] = self["webpackChunknewfold_Onboarding"] || []).push([["src_OnboardingSPA_pages_Steps_DesignColors_index_js"],{

/***/ "./src/OnboardingSPA/components/Layouts/Base.js":
/*!******************************************************!*\
  !*** ./src/OnboardingSPA/components/Layouts/Base.js ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/a11y */ "@wordpress/a11y");
/* harmony import */ var _wordpress_a11y__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_router_dom__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-router-dom */ "./node_modules/react-router/index.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../constants */ "./src/constants.js");
/* harmony import */ var _utils_api_events__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/api/events */ "./src/OnboardingSPA/utils/api/events.js");







/**
 * The Base Layout has no prescribed styles, only shared functionality like focus-management and analytics.
 *
 * @param {object} props
 * @returns
 */

const BaseLayout = _ref => {
  let {
    className = 'nfd-onboarding-layout__base',
    children
  } = _ref;
  const location = (0,react_router_dom__WEBPACK_IMPORTED_MODULE_5__.useLocation)();
  const mainContainer = document.querySelector('.nfd-onboard-content');

  const speakRouteTitle = function (location) {
    let title = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'Showing new Onboarding Page';
    // [TODO]: Determine if some routes should not speak the title
    (0,_wordpress_a11y__WEBPACK_IMPORTED_MODULE_2__.speak)(title, 'assertive');
  };

  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    mainContainer === null || mainContainer === void 0 ? void 0 : mainContainer.focus({
      preventScroll: true
    });
    speakRouteTitle(location, 'Override');
    new _utils_api_events__WEBPACK_IMPORTED_MODULE_4__["default"](`${_constants__WEBPACK_IMPORTED_MODULE_3__.NFD_ONBOARDING_EVENT_PREFIX}-pageview`, {
      stepID: location.pathname,
      previousStepID: window.nfdOnboarding.previousStepID
    }).send();
    window.nfdOnboarding.previousStepID = location.pathname;
  }, [location.pathname]);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
    className: classnames__WEBPACK_IMPORTED_MODULE_1___default()('nfd-onboarding-layout', className)
  }, children);
};

/* harmony default export */ __webpack_exports__["default"] = (BaseLayout);

/***/ }),

/***/ "./src/OnboardingSPA/components/Layouts/Common.js":
/*!********************************************************!*\
  !*** ./src/OnboardingSPA/components/Layouts/Common.js ***!
  \********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Base__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Base */ "./src/OnboardingSPA/components/Layouts/Base.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);





/**
 *
 * @param {*} param0
 * @returns
 */

const InnerContainer = _ref => {
  let {
    children
  } = _ref;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)("section", {
    className: "is-contained"
  }, children);
};
/**
 * The Common Layout extends the Base Layout and applies structural styles and animations.
 *
 * @param {object} props
 * @returns
 */


const CommonLayout = _ref2 => {
  let {
    className = '',
    children,
    isBgPrimary = false,
    isCentered = false,
    isVerticallyCentered = false,
    isContained = false,
    isPadded = false,
    isFadeIn = true
  } = _ref2;
  const Container = isContained ? InnerContainer : _wordpress_element__WEBPACK_IMPORTED_MODULE_0__.Fragment;
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_Base__WEBPACK_IMPORTED_MODULE_2__["default"], {
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()('nfd-onboarding-layout__common', className, {
      'is-layout-fade-in': isFadeIn
    }, {
      'is-bg-primary': isBgPrimary
    }, {
      'is-centered': isCentered
    }, {
      'is-vertically-centered': isVerticallyCentered
    }, {
      'is-padded': isPadded
    })
  }, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(Container, null, children));
};

/* harmony default export */ __webpack_exports__["default"] = (CommonLayout);

/***/ }),

/***/ "./src/OnboardingSPA/pages/Steps/DesignColors/index.js":
/*!*************************************************************!*\
  !*** ./src/OnboardingSPA/pages/Steps/DesignColors/index.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Layouts_Common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../components/Layouts/Common */ "./src/OnboardingSPA/components/Layouts/Common.js");
/* harmony import */ var _constants__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../constants */ "./src/constants.js");
/* harmony import */ var _store__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../store */ "./src/OnboardingSPA/store/index.js");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_LivePreview__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../../components/LivePreview */ "./src/OnboardingSPA/components/LivePreview/index.js");








const StepDesignColors = () => {
  const {
    setDrawerActiveView,
    setIsDrawerOpened,
    setIsSidebarOpened
  } = (0,_wordpress_data__WEBPACK_IMPORTED_MODULE_4__.useDispatch)(_store__WEBPACK_IMPORTED_MODULE_3__.store); // [TODO] Once design is finalized replace this with block grammer from API's/files.

  const blockGrammer = "<!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"30px\",\"bottom\":\"30px\"}}},\"backgroundColor\":\"secondary-background\",\"textColor\":\"secondary-foreground\",\"layout\":{\"inherit\":true}} --><div class=\"wp-block-group alignfull has-secondary-foreground-color has-secondary-background-background-color has-text-color has-background\" style=\"padding-top:30px;padding-bottom:30px\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"50px\"}},\"layout\":{\"type\":\"flex\",\"justifyContent\":\"space-between\"}} --><div class=\"wp-block-group\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"30px\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\"}} --><div class=\"wp-block-group\"><!-- wp:site-logo {\"width\":150} /--><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"}} --><div class=\"wp-block-group\"><!-- wp:site-title {\"style\":{\"elements\":{\"link\":{\"color\":{\"text\":\"var:preset|color|secondary-foreground\"}}}}} /--><!-- wp:site-tagline /--></div><!-- /wp:group --></div><!-- /wp:group --><!-- wp:navigation {\"textColor\":\"secondary-foreground\",\"style\":{\"typography\":{\"textTransform\":\"uppercase\",\"fontStyle\":\"normal\",\"fontWeight\":\"600\"},\"spacing\":{\"blockGap\":\"30px\"}},\"fontSize\":\"x-small\"} /--><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"30px\"}},\"layout\":{\"type\":\"flex\",\"flexWrap\":\"nowrap\",\"justifyContent\":\"right\"}} --><div class=\"wp-block-group\"></div><!-- /wp:group --></div><!-- /wp:group --></div><!-- /wp:group --><!-- wp:group {\"align\":\"full\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"layout\":{\"type\":\"default\"}} --><div class=\"wp-block-group alignfull\"><!-- wp:group {\"align\":\"full\",\"style\":{\"color\":{\"background\":\"#e8e8e8\"},\"spacing\":{\"blockGap\":\"0px\",\"padding\":{\"top\":\"0px\",\"bottom\":\"0px\"}}},\"layout\":{\"inherit\":true}} --><div class=\"wp-block-group alignfull has-background\" style=\"background-color:#e8e8e8;padding-top:0px;padding-bottom:0px\"><!-- wp:spacer {\"height\":\"50px\"} --><div style=\"height:50px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:columns {\"style\":{\"spacing\":{\"blockGap\":\"100px\"}}} --><div class=\"wp-block-columns\"><!-- wp:column {\"verticalAlignment\":\"center\",\"width\":\"40%\"} --><div class=\"wp-block-column is-vertically-aligned-center\" style=\"flex-basis:40%\"><!-- wp:heading {\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"textColor\":\"primary\",\"fontSize\":\"huge\"} --><h2 class=\"has-primary-color has-text-color has-huge-font-size\" style=\"font-style:normal;font-weight:600\">New Spring Casuals</h2><!-- /wp:heading --><!-- wp:paragraph {\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"500\"}}} --><p style=\"font-style:normal;font-weight:500\">Fusce gravida ut nisi et facilisis. Nullam ut mi fermentum, posuere dolor id, ultricies ipsum. Duis urna ipsum, tincidunt ut lorem.</p><!-- /wp:paragraph --><!-- wp:spacer {\"height\":\"20px\"} --><div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:buttons --><div class=\"wp-block-buttons\"><!-- wp:button {\"style\":{\"spacing\":{\"padding\":{\"top\":\"15px\",\"right\":\"50px\",\"bottom\":\"15px\",\"left\":\"50px\"}}},\"fontSize\":\"normal\"} --><div class=\"wp-block-button has-custom-font-size has-normal-font-size\"><a class=\"wp-block-button__link\" style=\"padding-top:15px;padding-right:50px;padding-bottom:15px;padding-left:50px\"><strong>Shop now</strong></a></div><!-- /wp:button --></div><!-- /wp:buttons --></div><!-- /wp:column --><!-- wp:column {\"verticalAlignment\":\"bottom\",\"width\":\"60%\"} --><div class=\"wp-block-column is-vertically-aligned-bottom\" style=\"flex-basis:60%\"><!-- wp:image {\"sizeSlug\":\"large\",\"linkDestination\":\"none\",\"className\":\"is-style-default\"} --><figure class=\"wp-block-image size-large is-style-default\"><img src=\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/banner-image.png\" alt=\"\"/></figure><!-- /wp:image --></div><!-- /wp:column --></div><!-- /wp:columns --></div><!-- /wp:group --><!-- wp:columns {\"verticalAlignment\":null,\"align\":\"full\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"}}} --><div class=\"wp-block-columns alignfull\"><!-- wp:column --><div class=\"wp-block-column\"><!-- wp:cover {\"url\":\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/black.jpg\",\"dimRatio\":0,\"minHeight\":100,\"minHeightUnit\":\"%\",\"align\":\"center\"} --><div class=\"wp-block-cover aligncenter\" style=\"min-height:100%\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background\" alt=\"\" src=\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/black.jpg\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"large\"} --><p class=\"has-text-align-center has-large-font-size\"></p><!-- /wp:paragraph --></div></div><!-- /wp:cover --></div><!-- /wp:column --><!-- wp:column {\"verticalAlignment\":\"center\",\"layout\":{\"inherit\":false,\"contentSize\":\"70%\"}} --><div class=\"wp-block-column is-vertically-aligned-center\"><!-- wp:spacer --><div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:heading {\"level\":3,\"textColor\":\"primary\",\"fontSize\":\"large\"} --><h3 class=\"has-primary-color has-text-color has-large-font-size\">Black is the new black.</h3><!-- /wp:heading --><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"2\"}}} --><p style=\"line-height:2\">Gumbo beet greens corn soko endive gumbo gourd. </p><!-- /wp:paragraph --><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"2\"}}} --><p style=\"line-height:2\">Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. </p><!-- /wp:paragraph --><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"2\"}}} --><p style=\"line-height:2\">Dandelion cucumber earthnut pea peanut soko zucchini.</p><!-- /wp:paragraph --><!-- wp:spacer {\"height\":\"20px\"} --><div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:buttons --><div class=\"wp-block-buttons\"><!-- wp:button {\"style\":{\"spacing\":{\"padding\":{\"top\":\"16px\",\"right\":\"30px\",\"bottom\":\"16px\",\"left\":\"30px\"}}}} --><div class=\"wp-block-button\"><a class=\"wp-block-button__link\" href=\"#\" style=\"padding-top:16px;padding-right:30px;padding-bottom:16px;padding-left:30px\"><strong>VIEW OUR ACCESSORIES</strong></a></div><!-- /wp:button --></div><!-- /wp:buttons --><!-- wp:spacer --><div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --></div><!-- /wp:column --></div><!-- /wp:columns --><!-- wp:columns {\"verticalAlignment\":null,\"align\":\"full\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"}}} --><div class=\"wp-block-columns alignfull\"><!-- wp:column {\"verticalAlignment\":\"center\",\"layout\":{\"inherit\":false,\"contentSize\":\"70%\"}} --><div class=\"wp-block-column is-vertically-aligned-center\"><!-- wp:spacer --><div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:heading {\"level\":3,\"textColor\":\"primary\",\"fontSize\":\"large\"} --><h3 class=\"has-primary-color has-text-color has-large-font-size\">Jeans &amp; Denim collection</h3><!-- /wp:heading --><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"2\"}}} --><p style=\"line-height:2\">Gumbo beet greens corn soko endive gumbo gourd. </p><!-- /wp:paragraph --><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"2\"}}} --><p style=\"line-height:2\">Parsley shallot courgette tatsoi pea sprouts fava bean collard greens dandelion okra wakame tomato. </p><!-- /wp:paragraph --><!-- wp:paragraph {\"style\":{\"typography\":{\"lineHeight\":\"2\"}}} --><p style=\"line-height:2\">Dandelion cucumber earthnut pea peanut soko zucchini.</p><!-- /wp:paragraph --><!-- wp:spacer {\"height\":\"20px\"} --><div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:buttons --><div class=\"wp-block-buttons\"><!-- wp:button {\"style\":{\"spacing\":{\"padding\":{\"top\":\"16px\",\"right\":\"30px\",\"bottom\":\"16px\",\"left\":\"30px\"}}}} --><div class=\"wp-block-button\"><a class=\"wp-block-button__link\" href=\"#\" style=\"padding-top:16px;padding-right:30px;padding-bottom:16px;padding-left:30px\"><strong>SHOP NOW</strong></a></div><!-- /wp:button --></div><!-- /wp:buttons --><!-- wp:spacer --><div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --></div><!-- /wp:column --><!-- wp:column --><div class=\"wp-block-column\"><!-- wp:cover {\"url\":\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/denim.jpg\",\"dimRatio\":0,\"minHeight\":100,\"minHeightUnit\":\"%\",\"align\":\"center\"} --><div class=\"wp-block-cover aligncenter\" style=\"min-height:100%\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-0 has-background-dim\"></span><img class=\"wp-block-cover__image-background\" alt=\"\" src=\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/denim.jpg\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:paragraph {\"align\":\"center\",\"fontSize\":\"large\"} --><p class=\"has-text-align-center has-large-font-size\"></p><!-- /wp:paragraph --></div></div><!-- /wp:cover --></div><!-- /wp:column --></div><!-- /wp:columns --></div><!-- /wp:group --><!-- wp:spacer --><div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:heading {\"textAlign\":\"center\",\"level\":3,\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"textColor\":\"primary\",\"fontSize\":\"large\"} --><h3 class=\"has-text-align-center has-primary-color has-text-color has-large-font-size\" style=\"font-style:normal;font-weight:600\">This week’s deals</h3><!-- /wp:heading --><!-- wp:spacer {\"height\":\"50px\"} --><div style=\"height:50px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:woocommerce/product-new {\"columns\":5,\"rows\":1,\"alignButtons\":true,\"contentVisibility\":{\"image\":true,\"title\":true,\"price\":true,\"rating\":false,\"button\":false}} /--><!-- wp:spacer {\"height\":\"60px\"} --><div style=\"height:60px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:columns {\"className\":\"has-2-columns\"} --><div class=\"wp-block-columns has-2-columns\"><!-- wp:column {\"width\":\"34%\",\"className\":\"animate-fade-right\",\"layout\":{\"inherit\":true}} --><div class=\"wp-block-column animate-fade-right\" style=\"flex-basis:34%\"><!-- wp:cover {\"customOverlayColor\":\"#f0f0f0\",\"isDark\":false} --><div class=\"wp-block-cover is-light\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-background-dim-100 has-background-dim\" style=\"background-color:#f0f0f0\"></span><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"0px\"}}} --><div class=\"wp-block-group\"><!-- wp:image {\"sizeSlug\":\"large\"} --><figure class=\"wp-block-image size-large is-resized\"><img src=\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/glasses.jpg\" alt=\"\"/></figure><!-- /wp:image --><!-- wp:paragraph {\"align\":\"center\",\"textColor\":\"very-dark-gray\"} --><p class=\"has-text-align-center has-very-dark-gray-color has-text-color\">DISCOVERY THE TREND OF</p><!-- /wp:paragraph --><!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontSize\":50,\"fontStyle\":\"normal\",\"fontWeight\":\"800\"}},\"textColor\":\"very-dark-gray\"} --><p class=\"has-text-align-center has-very-dark-gray-color has-text-color\" style=\"font-size:50px;font-style:normal;font-weight:800\">GLASSES</p><!-- /wp:paragraph --></div><!-- /wp:group --></div></div><!-- /wp:cover --></div><!-- /wp:column --><!-- wp:column {\"width\":\"66%\",\"className\":\"animate-fade-left\",\"layout\":{\"inherit\":true}} --><div class=\"wp-block-column animate-fade-left\" style=\"flex-basis:66%\"><!-- wp:cover {\"url\":\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/Intersection-1@2x.jpg\",\"dimRatio\":80,\"overlayColor\":\"primary\",\"minHeight\":100,\"minHeightUnit\":\"%\"} --><div class=\"wp-block-cover\" style=\"min-height:100%\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-primary-background-color has-background-dim-80 has-background-dim\"></span><img class=\"wp-block-cover__image-background\" alt=\"\" src=\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/Intersection-1@2x.jpg\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"style\":{\"spacing\":{\"blockGap\":\"30px\"}}} --><div class=\"wp-block-group\"><!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontSize\":50,\"fontStyle\":\"normal\",\"fontWeight\":\"700\",\"lineHeight\":1.2}},\"textColor\":\"background\"} --><p class=\"has-text-align-center has-background-color has-text-color\" style=\"font-size:50px;font-style:normal;font-weight:700;line-height:1.2\">SAVE 20% IN<br>MAN CLOTHING</p><!-- /wp:paragraph --><!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontSize\":18}},\"textColor\":\"background\"} --><p class=\"has-text-align-center has-background-color has-text-color\" style=\"font-size:18px\">Enjoy a special -20% discount on man category</p><!-- /wp:paragraph --></div><!-- /wp:group --></div></div><!-- /wp:cover --></div><!-- /wp:column --></div><!-- /wp:columns --><!-- wp:spacer --><div style=\"height:100px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:cover {\"url\":\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/testimonials-bg.jpg\",\"dimRatio\":80,\"overlayColor\":\"primary\",\"align\":\"full\",\"style\":{\"spacing\":{\"padding\":{\"top\":\"100px\",\"right\":\"100px\",\"bottom\":\"0px\",\"left\":\"100px\"}}}} --><div class=\"wp-block-cover alignfull\" style=\"padding-top:100px;padding-right:100px;padding-bottom:0px;padding-left:100px\"><span aria-hidden=\"true\" class=\"wp-block-cover__background has-primary-background-color has-background-dim-80 has-background-dim\"></span><img class=\"wp-block-cover__image-background\" alt=\"\" src=\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/testimonials-bg.jpg\" data-object-fit=\"cover\"/><div class=\"wp-block-cover__inner-container\"><!-- wp:group {\"layout\":{\"inherit\":true}} --><div class=\"wp-block-group\"><!-- wp:media-text {\"align\":\"\",\"mediaPosition\":\"right\",\"mediaType\":\"image\"} --><div class=\"wp-block-media-text has-media-on-the-right is-stacked-on-mobile\"><figure class=\"wp-block-media-text__media\"><img src=\"http://bluehost-plugin.local/wp-content/themes/yith-wonder/assets/images/demo-content/home-1/martharamos.jpg\" alt=\"\"/></figure><div class=\"wp-block-media-text__content\"><!-- wp:paragraph {\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"700\"}},\"fontSize\":\"huge\"} --><p class=\"has-huge-font-size\" style=\"font-style:normal;font-weight:700\">“ Here I can find original items, low prices without to lose quality or sustainability.<br>Love it! “</p><!-- /wp:paragraph --><!-- wp:spacer {\"height\":\"50px\"} --><div style=\"height:50px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:paragraph --><p>Martha Ramos <br>Customer from 2007</p><!-- /wp:paragraph --></div></div><!-- /wp:media-text --><!-- wp:html --><div style=\"margin-bottom:-100px\"></div><!-- /wp:html --></div><!-- /wp:group --></div></div><!-- /wp:cover --><!-- wp:spacer {\"height\":\"150px\"} --><div style=\"height:150px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:group {\"align\":\"full\",\"layout\":{\"inherit\":true}} --><div class=\"wp-block-group alignfull\"><!-- wp:spacer {\"height\":\"40px\"} --><div style=\"height:40px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:columns {\"style\":{\"spacing\":{\"blockGap\":\"50px\"}}} --><div class=\"wp-block-columns\"><!-- wp:column --><div class=\"wp-block-column\"><!-- wp:heading {\"level\":3,\"textColor\":\"secondary\"} --><h3 class=\"has-secondary-color has-text-color\">Our company</h3><!-- /wp:heading --><!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"},\"overlayMenu\":\"never\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"fontSize\":\"small\"} /--></div><!-- /wp:column --><!-- wp:column --><div class=\"wp-block-column\"><!-- wp:heading {\"level\":3,\"textColor\":\"secondary\"} --><h3 class=\"has-secondary-color has-text-color\">Our products</h3><!-- /wp:heading --><!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"},\"overlayMenu\":\"never\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"fontSize\":\"small\"} /--></div><!-- /wp:column --><!-- wp:column --><div class=\"wp-block-column\"><!-- wp:heading {\"level\":3,\"textColor\":\"secondary\"} --><h3 class=\"has-secondary-color has-text-color\">Special sales</h3><!-- /wp:heading --><!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"},\"overlayMenu\":\"never\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"fontSize\":\"small\"} /--></div><!-- /wp:column --><!-- wp:column --><div class=\"wp-block-column\"><!-- wp:heading {\"level\":3,\"textColor\":\"secondary\"} --><h3 class=\"has-secondary-color has-text-color\">Customer service</h3><!-- /wp:heading --><!-- wp:navigation {\"layout\":{\"type\":\"flex\",\"orientation\":\"vertical\"},\"overlayMenu\":\"never\",\"style\":{\"spacing\":{\"blockGap\":\"0px\"}},\"fontSize\":\"small\"} /--></div><!-- /wp:column --><!-- wp:column {\"width\":\"33%\"} --><div class=\"wp-block-column\" style=\"flex-basis:33%\"><!-- wp:heading {\"level\":3,\"textColor\":\"secondary\"} --><h3 class=\"has-secondary-color has-text-color\">Stay connected</h3><!-- /wp:heading --><!-- wp:paragraph {\"fontSize\":\"small\"} --><p class=\"has-small-font-size\">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sagittis tincidunt tortor in bibendum. Phasellus tellus elit, placerat et orci id, commodo finibus tortor.</p><!-- /wp:paragraph --></div><!-- /wp:column --></div><!-- /wp:columns --><!-- wp:spacer {\"height\":\"50px\"} --><div style=\"height:50px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:social-links {\"iconColor\":\"foreground\",\"iconColorValue\":\"#404040\",\"customIconBackgroundColor\":\"#f7f7f7\",\"iconBackgroundColorValue\":\"#f7f7f7\",\"openInNewTab\":true,\"className\":\"is-style-default\",\"layout\":{\"type\":\"flex\",\"justifyContent\":\"center\"}} --><ul class=\"wp-block-social-links has-icon-color has-icon-background-color is-style-default\"><!-- wp:social-link {\"url\":\"#\",\"service\":\"facebook\"} /--><!-- wp:social-link {\"url\":\"#\",\"service\":\"youtube\"} /--><!-- wp:social-link {\"url\":\"#\",\"service\":\"tiktok\"} /--><!-- wp:social-link {\"url\":\"#\",\"service\":\"linkedin\"} /--><!-- wp:social-link {\"url\":\"#\",\"service\":\"pinterest\"} /--><!-- wp:social-link {\"url\":\"#\",\"service\":\"twitter\"} /--><!-- wp:social-link {\"url\":\"#\",\"service\":\"instagram\"} /--></ul><!-- /wp:social-links --><!-- wp:spacer {\"height\":\"20px\"} --><div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --><!-- wp:paragraph {\"align\":\"center\",\"style\":{\"typography\":{\"fontStyle\":\"normal\",\"fontWeight\":\"600\"}},\"fontSize\":\"x-small\"} --><p class=\"has-text-align-center has-x-small-font-size\" style=\"font-style:normal;font-weight:600\">Wonder – A WordPress Block theme by YITH</p><!-- /wp:paragraph --><!-- wp:spacer {\"height\":\"20px\"} --><div style=\"height:20px\" aria-hidden=\"true\" class=\"wp-block-spacer\"></div><!-- /wp:spacer --></div><!-- /wp:group -->";
  (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.useEffect)(() => {
    setIsSidebarOpened(false);
    setIsDrawerOpened(true);
    setDrawerActiveView(_constants__WEBPACK_IMPORTED_MODULE_2__.VIEW_DESIGN_COLORS);
  }, []);
  return (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_Layouts_Common__WEBPACK_IMPORTED_MODULE_1__["default"], null, (0,_wordpress_element__WEBPACK_IMPORTED_MODULE_0__.createElement)(_components_LivePreview__WEBPACK_IMPORTED_MODULE_5__["default"], {
    blockGrammer: blockGrammer,
    styling: 'custom',
    viewportWidth: 1300
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (StepDesignColors);

/***/ }),

/***/ "./src/OnboardingSPA/utils/api/events.js":
/*!***********************************************!*\
  !*** ./src/OnboardingSPA/utils/api/events.js ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/api-fetch */ "@wordpress/api-fetch");
/* harmony import */ var _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common */ "./src/OnboardingSPA/utils/api/common.js");



class Event {
  constructor(eventSlug) {
    let eventData = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    this.eventSlug = eventSlug;
    this.eventData = eventData;
  }

  send() {
    _wordpress_api_fetch__WEBPACK_IMPORTED_MODULE_0___default()({
      url: (0,_common__WEBPACK_IMPORTED_MODULE_1__.onboardingRestURL)('events'),
      method: 'POST',
      data: {
        slug: this.eventSlug,
        data: this.eventData
      }
    }).catch(error => {
      console.error(error);
    });
  }

}

/* harmony default export */ __webpack_exports__["default"] = (Event);

/***/ })

}]);
//# sourceMappingURL=src_OnboardingSPA_pages_Steps_DesignColors_index_js.js.map