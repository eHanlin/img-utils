!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.imageCropper=t():e.imageCropper=t()}("undefined"!=typeof self?self:this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var o=n[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,t),o.l=!0,o.exports}var n={};return t.m=e,t.c=n,t.d=function(e,n,r){t.o(e,n)||Object.defineProperty(e,n,{configurable:!1,enumerable:!0,get:r})},t.n=function(e){var n=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(n,"a",n),n},t.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},t.p="",t(t.s=0)}([function(e,t,n){e.exports=n(1)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.crop=t.setup=void 0;var r=n(2),o={createCanvas:function(){return document.createElement("canvas")}},u=function(e,t,n){for(var o=arguments.length>3&&void 0!==arguments[3]?arguments[3]:0,u=0,i=e.width,c=e.data,f=o;t(f,c);f=n(f)){if(c[f+r.R]+c[f+r.G]+c[f+r.B]+c[f+r.A]>0){u=f;break}}return Math.round(u/(i*r.POINT_OFFSET))},i=function(e){return u(e,function(e,t){return e<t.length},function(e){return e+r.POINT_OFFSET})},c=function(e){return u(e,function(e,t){return e>0},function(e){return e-r.POINT_OFFSET},e.data.length-1)},f=function(e,t,n,r,u){var i=o.createCanvas();return i.width=r,i.height=u,i.getContext("2d").drawImage(e,t,n,r,u,0,0,r,u),i};t.setup=function(e){for(var t in e)o[t]=e[t]},t.crop=function(e){var t=e.getContext("2d"),n=e.width,r=e.height,o=t.getImageData(0,0,n,r),u=i(o),a=c(o);return f(e,0,u,n,r-u-(r-a))}},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.R=0,t.G=1,t.B=2,t.A=3,t.POINT_OFFSET=4}])});
//# sourceMappingURL=bundle.js.map