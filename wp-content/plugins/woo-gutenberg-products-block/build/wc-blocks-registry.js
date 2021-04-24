this.wc=this.wc||{},this.wc.wcBlocksRegistry=function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}return n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(n.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)n.d(o,r,function(t){return e[t]}.bind(null,r));return o},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=168)}({0:function(e,t){!function(){e.exports=this.wp.element}()},10:function(e,t){function n(t){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?(e.exports=n=function(e){return typeof e},e.exports.default=e.exports,e.exports.__esModule=!0):(e.exports=n=function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},e.exports.default=e.exports,e.exports.__esModule=!0),n(t)}e.exports=n,e.exports.default=e.exports,e.exports.__esModule=!0},12:function(e,t){!function(){e.exports=this.wp.deprecated}()},168:function(e,t,n){"use strict";n.r(t),n.d(t,"registerPaymentMethod",(function(){return b})),n.d(t,"registerExpressPaymentMethod",(function(){return g})),n.d(t,"__experimentalDeRegisterPaymentMethod",(function(){return v})),n.d(t,"__experimentalDeRegisterExpressPaymentMethod",(function(){return w})),n.d(t,"getPaymentMethods",(function(){return O})),n.d(t,"getExpressPaymentMethods",(function(){return P})),n.d(t,"getRegisteredBlockComponents",(function(){return S})),n.d(t,"getRegisteredInnerBlocks",(function(){return T})),n.d(t,"registerBlockComponent",(function(){return C})),n.d(t,"registerInnerBlock",(function(){return R}));var o=n(12),r=n.n(o),i=n(22),a=n.n(i),s=n(3),u=n.n(s),c=n(0),p=function(e,t){if(null!==e&&!Object(c.isValidElement)(e))throw new TypeError("The ".concat(t," property for the payment method must be a React element or null."))},l=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],n=t.reduce((function(t,n){return e.hasOwnProperty(n)||t.push(n),t}),[]);if(n.length>0){var o="The payment method configuration object is missing the following properties:";throw new TypeError(o+n.join(", "))}},f=function(e,t){return function(n){return(n.paymentRequirements||[]).every((function(e){return t.includes(e)}))&&e(n)}},d=function e(t){var n,o,r,i;a()(this,e),e.assertValidConfig(t),this.name=t.name,this.label=t.label,this.placeOrderButtonLabel=t.placeOrderButtonLabel,this.ariaLabel=t.ariaLabel,this.content=t.content,this.icons=t.icons,this.edit=t.edit,this.paymentMethodId=t.paymentMethodId||this.name,this.supports={showSavedCards:(null==t||null===(n=t.supports)||void 0===n?void 0:n.showSavedCards)||(null==t||null===(o=t.supports)||void 0===o?void 0:o.savePaymentInfo)||!1,showSaveOption:(null==t||null===(r=t.supports)||void 0===r?void 0:r.showSaveOption)||!1,features:(null==t||null===(i=t.supports)||void 0===i?void 0:i.features)||["products"]},this.canMakePayment=f(t.canMakePayment,this.supports.features)};u()(d,"assertValidConfig",(function(e){var t,n,o,i,a,s,u;if(l(e,["name","label","ariaLabel","content","edit","canMakePayment"]),"string"!=typeof e.name)throw new Error("The name property for the payment method must be a string");if(void 0!==e.icons&&!Array.isArray(e.icons)&&null!==e.icons)throw new Error("The icons property for the payment method must be an array or null.");if("string"!=typeof e.paymentMethodId&&void 0!==e.paymentMethodId)throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");if("string"!=typeof e.placeOrderButtonLabel&&void 0!==e.placeOrderButtonLabel)throw new TypeError("The placeOrderButtonLabel property for the payment method must be a string");if(function(e,t){if(null!==e&&!Object(c.isValidElement)(e)&&"string"!=typeof e)throw new TypeError("The ".concat(t," property for the payment method must be a React element, a string, or null."))}(e.label,"label"),p(e.content,"content"),p(e.edit,"edit"),"string"!=typeof e.ariaLabel)throw new TypeError("The ariaLabel property for the payment method must be a string");if("function"!=typeof e.canMakePayment)throw new TypeError("The canMakePayment property for the payment method must be a function.");if(void 0!==(null===(t=e.supports)||void 0===t?void 0:t.showSavedCards)&&"boolean"!=typeof(null===(n=e.supports)||void 0===n?void 0:n.showSavedCards))throw new TypeError("If the payment method includes the `supports.showSavedCards` property, it must be a boolean");if(void 0!==(null===(o=e.supports)||void 0===o?void 0:o.savePaymentInfo)&&r()("Passing savePaymentInfo when registering a payment method.",{alternative:"Pass showSavedCards and showSaveOption",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3686"}),void 0!==(null===(i=e.supports)||void 0===i?void 0:i.features)&&!Array.isArray(null===(a=e.supports)||void 0===a?void 0:a.features))throw new Error("The features property for the payment method must be an array or undefined.");if(void 0!==(null===(s=e.supports)||void 0===s?void 0:s.showSaveOption)&&"boolean"!=typeof(null===(u=e.supports)||void 0===u?void 0:u.showSaveOption))throw new TypeError("If the payment method includes the `supports.showSaveOption` property, it must be a boolean")}));var m=function e(t){var n;a()(this,e),e.assertValidConfig(t),this.name=t.name,this.content=t.content,this.edit=t.edit,this.paymentMethodId=t.paymentMethodId||this.name,this.supports={features:(null==t||null===(n=t.supports)||void 0===n?void 0:n.features)||["products"]},this.canMakePayment=f(t.canMakePayment,this.supports.features)};u()(m,"assertValidConfig",(function(e){var t,n;if(l(e,["name","content","edit"]),"string"!=typeof e.name)throw new TypeError("The name property for the express payment method must be a string");if("string"!=typeof e.paymentMethodId&&void 0!==e.paymentMethodId)throw new Error("The paymentMethodId property for the payment method must be a string or undefined (in which case it will be the value of the name property).");if(void 0!==(null===(t=e.supports)||void 0===t?void 0:t.features)&&!Array.isArray(null===(n=e.supports)||void 0===n?void 0:n.features))throw new Error("The features property for the payment method must be an array or undefined.");if(p(e.content,"content"),p(e.edit,"edit"),"function"!=typeof e.canMakePayment)throw new TypeError("The canMakePayment property for the express payment method must be a function.")}));var h={},y={},b=function(e){var t;"function"==typeof e?(t=e(d),r()("Passing a callback to registerPaymentMethod()",{alternative:"a config options object",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404"})):t=new d(e),t instanceof d&&(h[t.name]=t)},g=function(e){var t;"function"==typeof e?(t=e(m),r()("Passing a callback to registerExpressPaymentMethod()",{alternative:"a config options object",plugin:"woocommerce-gutenberg-products-block",link:"https://github.com/woocommerce/woocommerce-gutenberg-products-block/pull/3404"})):t=new m(e),t instanceof m&&(y[t.name]=t)},v=function(e){delete h[e]},w=function(e){delete y[e]},O=function(){return h},P=function(){return y},x=n(10),k=n.n(x),j={};function M(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function E(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?M(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):M(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function S(e){return E(E({},"object"===k()(j[e])&&Object.keys(j[e]).length>0?j[e]:{}),j.any)}function T(e){return r()("getRegisteredInnerBlocks",{version:"2.8.0",alternative:"getRegisteredBlockComponents",plugin:"WooCommerce Blocks"}),S(e)}function I(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function _(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?I(Object(n),!0).forEach((function(t){u()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):I(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function C(e){e.context||(e.context="any"),L(e,"context","string"),L(e,"blockName","string"),B(e,"component");var t=e.context,n=e.blockName,o=e.component;j[t]||(j[t]={}),j[t][n]=o}var B=function(e,t){if(e[t]){if("function"==typeof e[t])return;if(e[t].$$typeof&&e[t].$$typeof===Symbol.for("react.lazy"))return}throw new Error("Incorrect value for the ".concat(t," argument when registering a block component. Component must be a valid React Element or Lazy callback."))},L=function(e,t,n){var o=k()(e[t]);if(o!==n)throw new Error("Incorrect value for the ".concat(t," argument when registering a block component. It was a ").concat(o,", but must be a ").concat(n,"."))};function R(e){r()("registerInnerBlock",{version:"2.8.0",alternative:"registerBlockComponent",plugin:"WooCommerce Blocks",hint:'"main" has been replaced with "context" and is now optional.'}),L(e,"main","string"),C(_(_({},e),{},{context:e.main}))}},22:function(e,t){e.exports=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},e.exports.default=e.exports,e.exports.__esModule=!0},3:function(e,t){e.exports=function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e},e.exports.default=e.exports,e.exports.__esModule=!0}});