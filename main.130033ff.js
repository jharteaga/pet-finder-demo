parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"hRTX":[function(require,module,exports) {
"use strict";module.exports=function(r,n){return function(){for(var t=new Array(arguments.length),e=0;e<t.length;e++)t[e]=arguments[e];return r.apply(n,t)}};
},{}],"yQtW":[function(require,module,exports) {
module.exports=function(o){return null!=o&&null!=o.constructor&&"function"==typeof o.constructor.isBuffer&&o.constructor.isBuffer(o)};
},{}],"Feqj":[function(require,module,exports) {
"use strict";var e=require("./helpers/bind"),r=require("is-buffer"),n=Object.prototype.toString;function t(e){return"[object Array]"===n.call(e)}function i(e){return"[object ArrayBuffer]"===n.call(e)}function o(e){return"undefined"!=typeof FormData&&e instanceof FormData}function f(e){return"undefined"!=typeof ArrayBuffer&&ArrayBuffer.isView?ArrayBuffer.isView(e):e&&e.buffer&&e.buffer instanceof ArrayBuffer}function u(e){return"string"==typeof e}function c(e){return"number"==typeof e}function a(e){return void 0===e}function l(e){return null!==e&&"object"==typeof e}function s(e){return"[object Date]"===n.call(e)}function p(e){return"[object File]"===n.call(e)}function y(e){return"[object Blob]"===n.call(e)}function d(e){return"[object Function]"===n.call(e)}function b(e){return l(e)&&d(e.pipe)}function j(e){return"undefined"!=typeof URLSearchParams&&e instanceof URLSearchParams}function m(e){return e.replace(/^\s*/,"").replace(/\s*$/,"")}function B(){return("undefined"==typeof navigator||"ReactNative"!==navigator.product)&&("undefined"!=typeof window&&"undefined"!=typeof document)}function v(e,r){if(null!=e)if("object"!=typeof e&&(e=[e]),t(e))for(var n=0,i=e.length;n<i;n++)r.call(null,e[n],n,e);else for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&r.call(null,e[o],o,e)}function A(){var e={};function r(r,n){"object"==typeof e[n]&&"object"==typeof r?e[n]=A(e[n],r):e[n]=r}for(var n=0,t=arguments.length;n<t;n++)v(arguments[n],r);return e}function g(r,n,t){return v(n,function(n,i){r[i]=t&&"function"==typeof n?e(n,t):n}),r}module.exports={isArray:t,isArrayBuffer:i,isBuffer:r,isFormData:o,isArrayBufferView:f,isString:u,isNumber:c,isObject:l,isUndefined:a,isDate:s,isFile:p,isBlob:y,isFunction:d,isStream:b,isURLSearchParams:j,isStandardBrowserEnv:B,forEach:v,merge:A,extend:g,trim:m};
},{"./helpers/bind":"hRTX","is-buffer":"yQtW"}],"njyv":[function(require,module,exports) {
"use strict";var e=require("../utils");module.exports=function(t,r){e.forEach(t,function(e,o){o!==r&&o.toUpperCase()===r.toUpperCase()&&(t[r]=e,delete t[o])})};
},{"../utils":"Feqj"}],"Lpyz":[function(require,module,exports) {
"use strict";module.exports=function(e,o,r,s,t){return e.config=o,r&&(e.code=r),e.request=s,e.response=t,e};
},{}],"NZT3":[function(require,module,exports) {
"use strict";var r=require("./enhanceError");module.exports=function(e,n,o,t,u){var a=new Error(e);return r(a,n,o,t,u)};
},{"./enhanceError":"Lpyz"}],"Ztkp":[function(require,module,exports) {
"use strict";var t=require("./createError");module.exports=function(e,s,u){var a=u.config.validateStatus;u.status&&a&&!a(u.status)?s(t("Request failed with status code "+u.status,u.config,null,u.request,u)):e(u)};
},{"./createError":"NZT3"}],"phSU":[function(require,module,exports) {
"use strict";var e=require("./../utils");function r(e){return encodeURIComponent(e).replace(/%40/gi,"@").replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}module.exports=function(i,n,t){if(!n)return i;var a;if(t)a=t(n);else if(e.isURLSearchParams(n))a=n.toString();else{var c=[];e.forEach(n,function(i,n){null!=i&&(e.isArray(i)?n+="[]":i=[i],e.forEach(i,function(i){e.isDate(i)?i=i.toISOString():e.isObject(i)&&(i=JSON.stringify(i)),c.push(r(n)+"="+r(i))}))}),a=c.join("&")}return a&&(i+=(-1===i.indexOf("?")?"?":"&")+a),i};
},{"./../utils":"Feqj"}],"Zn5P":[function(require,module,exports) {
"use strict";var e=require("./../utils"),t=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"];module.exports=function(r){var i,o,n,s={};return r?(e.forEach(r.split("\n"),function(r){if(n=r.indexOf(":"),i=e.trim(r.substr(0,n)).toLowerCase(),o=e.trim(r.substr(n+1)),i){if(s[i]&&t.indexOf(i)>=0)return;s[i]="set-cookie"===i?(s[i]?s[i]:[]).concat([o]):s[i]?s[i]+", "+o:o}}),s):s};
},{"./../utils":"Feqj"}],"Rpqp":[function(require,module,exports) {
"use strict";var t=require("./../utils");module.exports=t.isStandardBrowserEnv()?function(){var r,e=/(msie|trident)/i.test(navigator.userAgent),o=document.createElement("a");function a(t){var r=t;return e&&(o.setAttribute("href",r),r=o.href),o.setAttribute("href",r),{href:o.href,protocol:o.protocol?o.protocol.replace(/:$/,""):"",host:o.host,search:o.search?o.search.replace(/^\?/,""):"",hash:o.hash?o.hash.replace(/^#/,""):"",hostname:o.hostname,port:o.port,pathname:"/"===o.pathname.charAt(0)?o.pathname:"/"+o.pathname}}return r=a(window.location.href),function(e){var o=t.isString(e)?a(e):e;return o.protocol===r.protocol&&o.host===r.host}}():function(){return!0};
},{"./../utils":"Feqj"}],"MLCl":[function(require,module,exports) {
"use strict";var e=require("./../utils");module.exports=e.isStandardBrowserEnv()?{write:function(n,t,o,r,i,u){var s=[];s.push(n+"="+encodeURIComponent(t)),e.isNumber(o)&&s.push("expires="+new Date(o).toGMTString()),e.isString(r)&&s.push("path="+r),e.isString(i)&&s.push("domain="+i),!0===u&&s.push("secure"),document.cookie=s.join("; ")},read:function(e){var n=document.cookie.match(new RegExp("(^|;\\s*)("+e+")=([^;]*)"));return n?decodeURIComponent(n[3]):null},remove:function(e){this.write(e,"",Date.now()-864e5)}}:{write:function(){},read:function(){return null},remove:function(){}};
},{"./../utils":"Feqj"}],"akUF":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./../core/settle"),s=require("./../helpers/buildURL"),t=require("./../helpers/parseHeaders"),o=require("./../helpers/isURLSameOrigin"),n=require("../core/createError");module.exports=function(a){return new Promise(function(i,u){var l=a.data,p=a.headers;e.isFormData(l)&&delete p["Content-Type"];var d=new XMLHttpRequest;if(a.auth){var c=a.auth.username||"",f=a.auth.password||"";p.Authorization="Basic "+btoa(c+":"+f)}if(d.open(a.method.toUpperCase(),s(a.url,a.params,a.paramsSerializer),!0),d.timeout=a.timeout,d.onreadystatechange=function(){if(d&&4===d.readyState&&(0!==d.status||d.responseURL&&0===d.responseURL.indexOf("file:"))){var e="getAllResponseHeaders"in d?t(d.getAllResponseHeaders()):null,s={data:a.responseType&&"text"!==a.responseType?d.response:d.responseText,status:d.status,statusText:d.statusText,headers:e,config:a,request:d};r(i,u,s),d=null}},d.onerror=function(){u(n("Network Error",a,null,d)),d=null},d.ontimeout=function(){u(n("timeout of "+a.timeout+"ms exceeded",a,"ECONNABORTED",d)),d=null},e.isStandardBrowserEnv()){var h=require("./../helpers/cookies"),m=(a.withCredentials||o(a.url))&&a.xsrfCookieName?h.read(a.xsrfCookieName):void 0;m&&(p[a.xsrfHeaderName]=m)}if("setRequestHeader"in d&&e.forEach(p,function(e,r){void 0===l&&"content-type"===r.toLowerCase()?delete p[r]:d.setRequestHeader(r,e)}),a.withCredentials&&(d.withCredentials=!0),a.responseType)try{d.responseType=a.responseType}catch(y){if("json"!==a.responseType)throw y}"function"==typeof a.onDownloadProgress&&d.addEventListener("progress",a.onDownloadProgress),"function"==typeof a.onUploadProgress&&d.upload&&d.upload.addEventListener("progress",a.onUploadProgress),a.cancelToken&&a.cancelToken.promise.then(function(e){d&&(d.abort(),u(e),d=null)}),void 0===l&&(l=null),d.send(l)})};
},{"./../utils":"Feqj","./../core/settle":"Ztkp","./../helpers/buildURL":"phSU","./../helpers/parseHeaders":"Zn5P","./../helpers/isURLSameOrigin":"Rpqp","../core/createError":"NZT3","./../helpers/cookies":"MLCl"}],"lwAM":[function(require,module,exports) {

var t,e,n=module.exports={};function r(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function i(e){if(t===setTimeout)return setTimeout(e,0);if((t===r||!t)&&setTimeout)return t=setTimeout,setTimeout(e,0);try{return t(e,0)}catch(n){try{return t.call(null,e,0)}catch(n){return t.call(this,e,0)}}}function u(t){if(e===clearTimeout)return clearTimeout(t);if((e===o||!e)&&clearTimeout)return e=clearTimeout,clearTimeout(t);try{return e(t)}catch(n){try{return e.call(null,t)}catch(n){return e.call(this,t)}}}!function(){try{t="function"==typeof setTimeout?setTimeout:r}catch(n){t=r}try{e="function"==typeof clearTimeout?clearTimeout:o}catch(n){e=o}}();var c,s=[],l=!1,a=-1;function f(){l&&c&&(l=!1,c.length?s=c.concat(s):a=-1,s.length&&h())}function h(){if(!l){var t=i(f);l=!0;for(var e=s.length;e;){for(c=s,s=[];++a<e;)c&&c[a].run();a=-1,e=s.length}c=null,l=!1,u(t)}}function m(t,e){this.fun=t,this.array=e}function p(){}n.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];s.push(new m(t,e)),1!==s.length||l||i(h)},m.prototype.run=function(){this.fun.apply(null,this.array)},n.title="browser",n.env={},n.argv=[],n.version="",n.versions={},n.on=p,n.addListener=p,n.once=p,n.off=p,n.removeListener=p,n.removeAllListeners=p,n.emit=p,n.prependListener=p,n.prependOnceListener=p,n.listeners=function(t){return[]},n.binding=function(t){throw new Error("process.binding is not supported")},n.cwd=function(){return"/"},n.chdir=function(t){throw new Error("process.chdir is not supported")},n.umask=function(){return 0};
},{}],"A14q":[function(require,module,exports) {
var process = require("process");
var e=require("process"),t=require("./utils"),r=require("./helpers/normalizeHeaderName"),n={"Content-Type":"application/x-www-form-urlencoded"};function a(e,r){!t.isUndefined(e)&&t.isUndefined(e["Content-Type"])&&(e["Content-Type"]=r)}function i(){var t;return"undefined"!=typeof XMLHttpRequest?t=require("./adapters/xhr"):void 0!==e&&(t=require("./adapters/http")),t}var o={adapter:i(),transformRequest:[function(e,n){return r(n,"Content-Type"),t.isFormData(e)||t.isArrayBuffer(e)||t.isBuffer(e)||t.isStream(e)||t.isFile(e)||t.isBlob(e)?e:t.isArrayBufferView(e)?e.buffer:t.isURLSearchParams(e)?(a(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):t.isObject(e)?(a(n,"application/json;charset=utf-8"),JSON.stringify(e)):e}],transformResponse:[function(e){if("string"==typeof e)try{e=JSON.parse(e)}catch(t){}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};t.forEach(["delete","get","head"],function(e){o.headers[e]={}}),t.forEach(["post","put","patch"],function(e){o.headers[e]=t.merge(n)}),module.exports=o;
},{"./utils":"Feqj","./helpers/normalizeHeaderName":"njyv","./adapters/xhr":"akUF","./adapters/http":"akUF","process":"lwAM"}],"xpeW":[function(require,module,exports) {
"use strict";var t=require("./../utils");function e(){this.handlers=[]}e.prototype.use=function(t,e){return this.handlers.push({fulfilled:t,rejected:e}),this.handlers.length-1},e.prototype.eject=function(t){this.handlers[t]&&(this.handlers[t]=null)},e.prototype.forEach=function(e){t.forEach(this.handlers,function(t){null!==t&&e(t)})},module.exports=e;
},{"./../utils":"Feqj"}],"IAOH":[function(require,module,exports) {
"use strict";var r=require("./../utils");module.exports=function(t,u,e){return r.forEach(e,function(r){t=r(t,u)}),t};
},{"./../utils":"Feqj"}],"mXc0":[function(require,module,exports) {
"use strict";module.exports=function(t){return!(!t||!t.__CANCEL__)};
},{}],"R56a":[function(require,module,exports) {
"use strict";module.exports=function(t){return/^([a-z][a-z\d\+\-\.]*:)?\/\//i.test(t)};
},{}],"uRyQ":[function(require,module,exports) {
"use strict";module.exports=function(e,r){return r?e.replace(/\/+$/,"")+"/"+r.replace(/^\/+/,""):e};
},{}],"HALK":[function(require,module,exports) {
"use strict";var e=require("./../utils"),r=require("./transformData"),a=require("../cancel/isCancel"),s=require("../defaults"),t=require("./../helpers/isAbsoluteURL"),n=require("./../helpers/combineURLs");function o(e){e.cancelToken&&e.cancelToken.throwIfRequested()}module.exports=function(d){return o(d),d.baseURL&&!t(d.url)&&(d.url=n(d.baseURL,d.url)),d.headers=d.headers||{},d.data=r(d.data,d.headers,d.transformRequest),d.headers=e.merge(d.headers.common||{},d.headers[d.method]||{},d.headers||{}),e.forEach(["delete","get","head","post","put","patch","common"],function(e){delete d.headers[e]}),(d.adapter||s.adapter)(d).then(function(e){return o(d),e.data=r(e.data,e.headers,d.transformResponse),e},function(e){return a(e)||(o(d),e&&e.response&&(e.response.data=r(e.response.data,e.response.headers,d.transformResponse))),Promise.reject(e)})};
},{"./../utils":"Feqj","./transformData":"IAOH","../cancel/isCancel":"mXc0","../defaults":"A14q","./../helpers/isAbsoluteURL":"R56a","./../helpers/combineURLs":"uRyQ"}],"trUU":[function(require,module,exports) {
"use strict";var e=require("./../defaults"),t=require("./../utils"),r=require("./InterceptorManager"),o=require("./dispatchRequest");function s(e){this.defaults=e,this.interceptors={request:new r,response:new r}}s.prototype.request=function(r){"string"==typeof r&&(r=t.merge({url:arguments[0]},arguments[1])),(r=t.merge(e,{method:"get"},this.defaults,r)).method=r.method.toLowerCase();var s=[o,void 0],u=Promise.resolve(r);for(this.interceptors.request.forEach(function(e){s.unshift(e.fulfilled,e.rejected)}),this.interceptors.response.forEach(function(e){s.push(e.fulfilled,e.rejected)});s.length;)u=u.then(s.shift(),s.shift());return u},t.forEach(["delete","get","head","options"],function(e){s.prototype[e]=function(r,o){return this.request(t.merge(o||{},{method:e,url:r}))}}),t.forEach(["post","put","patch"],function(e){s.prototype[e]=function(r,o,s){return this.request(t.merge(s||{},{method:e,url:r,data:o}))}}),module.exports=s;
},{"./../defaults":"A14q","./../utils":"Feqj","./InterceptorManager":"xpeW","./dispatchRequest":"HALK"}],"qFUg":[function(require,module,exports) {
"use strict";function t(t){this.message=t}t.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")},t.prototype.__CANCEL__=!0,module.exports=t;
},{}],"VgQU":[function(require,module,exports) {
"use strict";var e=require("./Cancel");function n(n){if("function"!=typeof n)throw new TypeError("executor must be a function.");var o;this.promise=new Promise(function(e){o=e});var r=this;n(function(n){r.reason||(r.reason=new e(n),o(r.reason))})}n.prototype.throwIfRequested=function(){if(this.reason)throw this.reason},n.source=function(){var e;return{token:new n(function(n){e=n}),cancel:e}},module.exports=n;
},{"./Cancel":"qFUg"}],"yisB":[function(require,module,exports) {
"use strict";module.exports=function(n){return function(t){return n.apply(null,t)}};
},{}],"Wzmt":[function(require,module,exports) {
"use strict";var e=require("./utils"),r=require("./helpers/bind"),n=require("./core/Axios"),t=require("./defaults");function u(t){var u=new n(t),l=r(n.prototype.request,u);return e.extend(l,n.prototype,u),e.extend(l,u),l}var l=u(t);l.Axios=n,l.create=function(r){return u(e.merge(t,r))},l.Cancel=require("./cancel/Cancel"),l.CancelToken=require("./cancel/CancelToken"),l.isCancel=require("./cancel/isCancel"),l.all=function(e){return Promise.all(e)},l.spread=require("./helpers/spread"),module.exports=l,module.exports.default=l;
},{"./utils":"Feqj","./helpers/bind":"hRTX","./core/Axios":"trUU","./defaults":"A14q","./cancel/Cancel":"qFUg","./cancel/CancelToken":"VgQU","./cancel/isCancel":"mXc0","./helpers/spread":"yisB"}],"O4Aa":[function(require,module,exports) {
module.exports=require("./lib/axios");
},{"./lib/axios":"Wzmt"}],"iWG5":[function(require,module,exports) {
var define;
var global = arguments[3];
var t,e=arguments[3];!function(e,n){"object"==typeof exports&&"undefined"!=typeof module?n(exports,require("axios")):"function"==typeof t&&t.amd?t(["exports","axios"],n):n((e=e||self).petfinder={},e.axios)}(this,function(t,e){"use strict";e=e&&e.hasOwnProperty("default")?e.default:e;var n=function(t,e){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};function r(t,e){function r(){this.constructor=t}n(t,e),t.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}function i(t,e,n,r){return new(n||(n=Promise))(function(i,o){function s(t){try{a(r.next(t))}catch(e){o(e)}}function u(t){try{a(r.throw(t))}catch(e){o(e)}}function a(t){t.done?i(t.value):new n(function(e){e(t.value)}).then(s,u)}a((r=r.apply(t,e||[])).next())})}function o(t,e){var n,r,i,o,s={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(i=2&o[0]?r.return:o[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,o[1])).done)return i;switch(r=0,i&&(o=[2&o[0],i.value]),o[0]){case 0:case 1:i=o;break;case 4:return s.label++,{value:o[1],done:!1};case 5:s.label++,r=o[1],o=[0];continue;case 7:o=s.ops.pop(),s.trys.pop();continue;default:if(!(i=(i=s.trys).length>0&&i[i.length-1])&&(6===o[0]||2===o[0])){s=0;continue}if(3===o[0]&&(!i||o[1]>i[0]&&o[1]<i[3])){s.label=o[1];break}if(6===o[0]&&s.label<i[1]){s.label=i[1],i=o;break}if(i&&s.label<i[2]){s.label=i[2],s.ops.push(o);break}i[2]&&s.ops.pop(),s.trys.pop();continue}o=e.call(t,s)}catch(u){o=[6,u],r=0}finally{n=i=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}}var s=function(){function t(t){this.client=t,this.http=t.http}return t.prototype.ensureAuthenticated=function(){return i(this,void 0,Promise,function(){return o(this,function(t){switch(t.label){case 0:return"Authorization"in this.http.defaults.headers.common?[3,2]:[4,this.client.authenticate()];case 1:t.sent(),t.label=2;case 2:return[2]}})})},t}(),u=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.search=function(t){return void 0===t&&(t={}),i(this,void 0,Promise,function(){return o(this,function(e){switch(e.label){case 0:return[4,this.ensureAuthenticated()];case 1:return e.sent(),[2,this.http.get("/animals",{params:t})]}})})},e.prototype.show=function(t){return i(this,void 0,Promise,function(){return o(this,function(e){switch(e.label){case 0:return[4,this.ensureAuthenticated()];case 1:return e.sent(),[2,this.http.get("/animals/"+t)]}})})},e}(s),a=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.types=function(){return i(this,void 0,Promise,function(){return o(this,function(t){switch(t.label){case 0:return[4,this.ensureAuthenticated()];case 1:return t.sent(),[2,this.http.get("/types")]}})})},e.prototype.type=function(t){return i(this,void 0,Promise,function(){return o(this,function(e){switch(e.label){case 0:return[4,this.ensureAuthenticated()];case 1:return e.sent(),[2,this.http.get("/types/"+t)]}})})},e.prototype.breeds=function(t){return i(this,void 0,Promise,function(){return o(this,function(e){switch(e.label){case 0:return[4,this.ensureAuthenticated()];case 1:return e.sent(),[2,this.http.get("/types/"+t+"/breeds")]}})})},e}(s),c=function(t){function e(){return null!==t&&t.apply(this,arguments)||this}return r(e,t),e.prototype.search=function(t){return void 0===t&&(t={}),i(this,void 0,Promise,function(){return o(this,function(e){switch(e.label){case 0:return[4,this.ensureAuthenticated()];case 1:return e.sent(),[2,this.http.get("/organizations",{params:t})]}})})},e.prototype.show=function(t){return i(this,void 0,Promise,function(){return o(this,function(e){switch(e.label){case 0:return[4,this.ensureAuthenticated()];case 1:return e.sent(),[2,this.http.get("/organizations/"+t)]}})})},e}(s),h=function(t){function e(n,r){var i=t.call(this,r.data.title)||this;return i.request=n,i.response=r,i.type=r.data.type,i.status=r.data.status,i.details=r.data.detail,i.invalidParams=r.data["invalid-params"],Object.setPrototypeOf(i,e.prototype),i}return r(e,t),e}(Error),p=function(){function t(t){var n=this;this.config=t,this.http=e.create({baseURL:t.baseUrl||"https://api.petfinder.com/v2",headers:{"x-api-sdk":"petfinder-js-sdk/v1.0 (https://github.com/petfinder-com/petfinder-js-sdk)"}}),this.http.interceptors.response.use(function(t){return t},function(t){return t.response&&n.isProblemDetailsResponse(t.response)?Promise.reject(new h(t.request,t.response)):Promise.reject(t)})}return Object.defineProperty(t.prototype,"animalData",{get:function(){return new a(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"animal",{get:function(){return new u(this)},enumerable:!0,configurable:!0}),Object.defineProperty(t.prototype,"organization",{get:function(){return new c(this)},enumerable:!0,configurable:!0}),t.prototype.authenticate=function(t){return i(this,void 0,Promise,function(){var e,n;return o(this,function(r){switch(r.label){case 0:return(n=t||this.config.token)?[3,2]:[4,this.http.post("/oauth2/token",{client_id:this.config.apiKey,client_secret:this.config.secret,grant_type:"client_credentials"})];case 1:e=r.sent(),n=e.data.access_token,r.label=2;case 2:return this.config.token=n,this.http.defaults.headers.common.Authorization="Bearer "+n,[2,e]}})})},t.prototype.isProblemDetailsResponse=function(t){return((t.headers||{})["content-type"]||"").includes("application/problem+json")},t}();t.Client=p,Object.defineProperty(t,"__esModule",{value:!0})});
},{"axios":"O4Aa"}],"qa4v":[function(require,module,exports) {
"use strict";function e(e){return/^\d{5}(-\d{4})?$/.test(e)}function t(e,t){var r=document.createElement("div");r.className="alert alert-".concat(t),r.appendChild(document.createTextNode(e));var o=document.querySelector(".container"),n=document.querySelector("#pet-form");o.insertBefore(r,n),setTimeout(function(){return document.querySelector(".alert").remove()},3e3)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.isValidZip=e,exports.showAlert=t;
},{}],"d6sW":[function(require,module,exports) {
"use strict";var e=require("@petfinder/petfinder-js"),t=require("./validate"),a=document.querySelector("#pet-form");function n(a){a.preventDefault();var n=document.querySelector("#animal").value,i=document.querySelector("#zip").value;(0,t.isValidZip)(i)?new e.Client({apiKey:"xw5Ep51ErqO6MAru21udyz6ALBWZE6FxFOHYriotpg60duM2zQ",secret:"yLK8V27fN3DQB84HBSlXXpBfts1tcBv3clvEm2vK"}).animal.search({type:n,location:i}).then(function(e){e.data.animals.length>0?c(e.data.animals):(0,t.showAlert)("There are any ".concat(n," in this region. Verify the Zip Code"),"info")}).catch(function(e){return(0,t.showAlert)("The Zip Code ".concat(i," doesn't exist"),"danger")}):(0,t.showAlert)("Please enter a valid Zip Code","danger")}function c(e){document.querySelector("#results");results.innerHTML="",e.forEach(function(e){var t=document.createElement("div");t.classList.add("card","card-body","mb-3"),t.innerHTML='\n        <div class="row">\n            <div class="col-sm-6">\n                <h4>'.concat(e.name," (").concat(e.age,')</h4>\n                <p class="text-secondary">').concat(e.breeds.primary,"</p>\n                <p>").concat(e.contact.address.address1?e.contact.address.address1:""," ").concat(e.contact.address.city,", ").concat(e.contact.address.state,", ").concat(e.contact.address.zip,'</p>\n                <ul class="list-group">\n                    <li class="list-group-item">Phone: ').concat(e.contact.phone,"</li>\n                    ").concat(e.contact.email?'<li class="list-group-item">Email: '.concat(e.contact.email,"</li>"):"",'\n                    <li class="list-group-item">Shelter ID: ').concat(e.organization_id,'</li>\n                </ul>\n            </div>\n            <div class="col-sm-6 text-center">\n                <img class="img-fluid rounded-circle mt-2" src="').concat(void 0!==e.photos[0]?e.photos[0].medium:"",'" alt="No image" />\n            </div>\n        </div>\n    '),results.appendChild(t)})}a.addEventListener("submit",n);
},{"@petfinder/petfinder-js":"iWG5","./validate":"qa4v"}]},{},["d6sW"], null)
//# sourceMappingURL=main.130033ff.js.map