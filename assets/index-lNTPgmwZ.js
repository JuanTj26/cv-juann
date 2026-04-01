(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))i(r);new MutationObserver(r=>{for(const s of r)if(s.type==="childList")for(const o of s.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function n(r){const s={};return r.integrity&&(s.integrity=r.integrity),r.referrerPolicy&&(s.referrerPolicy=r.referrerPolicy),r.crossOrigin==="use-credentials"?s.credentials="include":r.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function i(r){if(r.ep)return;r.ep=!0;const s=n(r);fetch(r.href,s)}})();var KU=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function z_(t){return t&&t.__esModule&&Object.prototype.hasOwnProperty.call(t,"default")?t.default:t}var H_={exports:{}},au={},G_={exports:{}},Ye={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ja=Symbol.for("react.element"),FE=Symbol.for("react.portal"),OE=Symbol.for("react.fragment"),kE=Symbol.for("react.strict_mode"),BE=Symbol.for("react.profiler"),VE=Symbol.for("react.provider"),zE=Symbol.for("react.context"),HE=Symbol.for("react.forward_ref"),GE=Symbol.for("react.suspense"),WE=Symbol.for("react.memo"),jE=Symbol.for("react.lazy"),lg=Symbol.iterator;function XE(t){return t===null||typeof t!="object"?null:(t=lg&&t[lg]||t["@@iterator"],typeof t=="function"?t:null)}var W_={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},j_=Object.assign,X_={};function Ao(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||W_}Ao.prototype.isReactComponent={};Ao.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")};Ao.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function Y_(){}Y_.prototype=Ao.prototype;function Sp(t,e,n){this.props=t,this.context=e,this.refs=X_,this.updater=n||W_}var Mp=Sp.prototype=new Y_;Mp.constructor=Sp;j_(Mp,Ao.prototype);Mp.isPureReactComponent=!0;var cg=Array.isArray,$_=Object.prototype.hasOwnProperty,Ep={current:null},q_={key:!0,ref:!0,__self:!0,__source:!0};function K_(t,e,n){var i,r={},s=null,o=null;if(e!=null)for(i in e.ref!==void 0&&(o=e.ref),e.key!==void 0&&(s=""+e.key),e)$_.call(e,i)&&!q_.hasOwnProperty(i)&&(r[i]=e[i]);var a=arguments.length-2;if(a===1)r.children=n;else if(1<a){for(var l=Array(a),c=0;c<a;c++)l[c]=arguments[c+2];r.children=l}if(t&&t.defaultProps)for(i in a=t.defaultProps,a)r[i]===void 0&&(r[i]=a[i]);return{$$typeof:ja,type:t,key:s,ref:o,props:r,_owner:Ep.current}}function YE(t,e){return{$$typeof:ja,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}function Tp(t){return typeof t=="object"&&t!==null&&t.$$typeof===ja}function $E(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var ug=/\/+/g;function Ou(t,e){return typeof t=="object"&&t!==null&&t.key!=null?$E(""+t.key):e.toString(36)}function nc(t,e,n,i,r){var s=typeof t;(s==="undefined"||s==="boolean")&&(t=null);var o=!1;if(t===null)o=!0;else switch(s){case"string":case"number":o=!0;break;case"object":switch(t.$$typeof){case ja:case FE:o=!0}}if(o)return o=t,r=r(o),t=i===""?"."+Ou(o,0):i,cg(r)?(n="",t!=null&&(n=t.replace(ug,"$&/")+"/"),nc(r,e,n,"",function(c){return c})):r!=null&&(Tp(r)&&(r=YE(r,n+(!r.key||o&&o.key===r.key?"":(""+r.key).replace(ug,"$&/")+"/")+t)),e.push(r)),1;if(o=0,i=i===""?".":i+":",cg(t))for(var a=0;a<t.length;a++){s=t[a];var l=i+Ou(s,a);o+=nc(s,e,n,l,r)}else if(l=XE(t),typeof l=="function")for(t=l.call(t),a=0;!(s=t.next()).done;)s=s.value,l=i+Ou(s,a++),o+=nc(s,e,n,l,r);else if(s==="object")throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.");return o}function ll(t,e,n){if(t==null)return t;var i=[],r=0;return nc(t,i,"","",function(s){return e.call(n,s,r++)}),i}function qE(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var gn={current:null},ic={transition:null},KE={ReactCurrentDispatcher:gn,ReactCurrentBatchConfig:ic,ReactCurrentOwner:Ep};function Z_(){throw Error("act(...) is not supported in production builds of React.")}Ye.Children={map:ll,forEach:function(t,e,n){ll(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return ll(t,function(){e++}),e},toArray:function(t){return ll(t,function(e){return e})||[]},only:function(t){if(!Tp(t))throw Error("React.Children.only expected to receive a single React element child.");return t}};Ye.Component=Ao;Ye.Fragment=OE;Ye.Profiler=BE;Ye.PureComponent=Sp;Ye.StrictMode=kE;Ye.Suspense=GE;Ye.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=KE;Ye.act=Z_;Ye.cloneElement=function(t,e,n){if(t==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+t+".");var i=j_({},t.props),r=t.key,s=t.ref,o=t._owner;if(e!=null){if(e.ref!==void 0&&(s=e.ref,o=Ep.current),e.key!==void 0&&(r=""+e.key),t.type&&t.type.defaultProps)var a=t.type.defaultProps;for(l in e)$_.call(e,l)&&!q_.hasOwnProperty(l)&&(i[l]=e[l]===void 0&&a!==void 0?a[l]:e[l])}var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){a=Array(l);for(var c=0;c<l;c++)a[c]=arguments[c+2];i.children=a}return{$$typeof:ja,type:t.type,key:r,ref:s,props:i,_owner:o}};Ye.createContext=function(t){return t={$$typeof:zE,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},t.Provider={$$typeof:VE,_context:t},t.Consumer=t};Ye.createElement=K_;Ye.createFactory=function(t){var e=K_.bind(null,t);return e.type=t,e};Ye.createRef=function(){return{current:null}};Ye.forwardRef=function(t){return{$$typeof:HE,render:t}};Ye.isValidElement=Tp;Ye.lazy=function(t){return{$$typeof:jE,_payload:{_status:-1,_result:t},_init:qE}};Ye.memo=function(t,e){return{$$typeof:WE,type:t,compare:e===void 0?null:e}};Ye.startTransition=function(t){var e=ic.transition;ic.transition={};try{t()}finally{ic.transition=e}};Ye.unstable_act=Z_;Ye.useCallback=function(t,e){return gn.current.useCallback(t,e)};Ye.useContext=function(t){return gn.current.useContext(t)};Ye.useDebugValue=function(){};Ye.useDeferredValue=function(t){return gn.current.useDeferredValue(t)};Ye.useEffect=function(t,e){return gn.current.useEffect(t,e)};Ye.useId=function(){return gn.current.useId()};Ye.useImperativeHandle=function(t,e,n){return gn.current.useImperativeHandle(t,e,n)};Ye.useInsertionEffect=function(t,e){return gn.current.useInsertionEffect(t,e)};Ye.useLayoutEffect=function(t,e){return gn.current.useLayoutEffect(t,e)};Ye.useMemo=function(t,e){return gn.current.useMemo(t,e)};Ye.useReducer=function(t,e,n){return gn.current.useReducer(t,e,n)};Ye.useRef=function(t){return gn.current.useRef(t)};Ye.useState=function(t){return gn.current.useState(t)};Ye.useSyncExternalStore=function(t,e,n){return gn.current.useSyncExternalStore(t,e,n)};Ye.useTransition=function(){return gn.current.useTransition()};Ye.version="18.3.1";G_.exports=Ye;var ue=G_.exports;const ce=z_(ue);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var ZE=ue,QE=Symbol.for("react.element"),JE=Symbol.for("react.fragment"),e1=Object.prototype.hasOwnProperty,t1=ZE.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,n1={key:!0,ref:!0,__self:!0,__source:!0};function Q_(t,e,n){var i,r={},s=null,o=null;n!==void 0&&(s=""+n),e.key!==void 0&&(s=""+e.key),e.ref!==void 0&&(o=e.ref);for(i in e)e1.call(e,i)&&!n1.hasOwnProperty(i)&&(r[i]=e[i]);if(t&&t.defaultProps)for(i in e=t.defaultProps,e)r[i]===void 0&&(r[i]=e[i]);return{$$typeof:QE,type:t,key:s,ref:o,props:r,_owner:t1.current}}au.Fragment=JE;au.jsx=Q_;au.jsxs=Q_;H_.exports=au;var V=H_.exports,J_={exports:{}},Vn={},ex={exports:{}},tx={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(t){function e(P,K){var Y=P.length;P.push(K);e:for(;0<Y;){var te=Y-1>>>1,be=P[te];if(0<r(be,K))P[te]=K,P[Y]=be,Y=te;else break e}}function n(P){return P.length===0?null:P[0]}function i(P){if(P.length===0)return null;var K=P[0],Y=P.pop();if(Y!==K){P[0]=Y;e:for(var te=0,be=P.length,he=be>>>1;te<he;){var Ie=2*(te+1)-1,Ne=P[Ie],q=Ie+1,J=P[q];if(0>r(Ne,Y))q<be&&0>r(J,Ne)?(P[te]=J,P[q]=Y,te=q):(P[te]=Ne,P[Ie]=Y,te=Ie);else if(q<be&&0>r(J,Y))P[te]=J,P[q]=Y,te=q;else break e}}return K}function r(P,K){var Y=P.sortIndex-K.sortIndex;return Y!==0?Y:P.id-K.id}if(typeof performance=="object"&&typeof performance.now=="function"){var s=performance;t.unstable_now=function(){return s.now()}}else{var o=Date,a=o.now();t.unstable_now=function(){return o.now()-a}}var l=[],c=[],f=1,u=null,h=3,p=!1,g=!1,x=!1,m=typeof setTimeout=="function"?setTimeout:null,d=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function _(P){for(var K=n(c);K!==null;){if(K.callback===null)i(c);else if(K.startTime<=P)i(c),K.sortIndex=K.expirationTime,e(l,K);else break;K=n(c)}}function S(P){if(x=!1,_(P),!g)if(n(l)!==null)g=!0,k(E);else{var K=n(c);K!==null&&O(S,K.startTime-P)}}function E(P,K){g=!1,x&&(x=!1,d(R),R=-1),p=!0;var Y=h;try{for(_(K),u=n(l);u!==null&&(!(u.expirationTime>K)||P&&!L());){var te=u.callback;if(typeof te=="function"){u.callback=null,h=u.priorityLevel;var be=te(u.expirationTime<=K);K=t.unstable_now(),typeof be=="function"?u.callback=be:u===n(l)&&i(l),_(K)}else i(l);u=n(l)}if(u!==null)var he=!0;else{var Ie=n(c);Ie!==null&&O(S,Ie.startTime-K),he=!1}return he}finally{u=null,h=Y,p=!1}}var A=!1,b=null,R=-1,M=5,T=-1;function L(){return!(t.unstable_now()-T<M)}function H(){if(b!==null){var P=t.unstable_now();T=P;var K=!0;try{K=b(!0,P)}finally{K?N():(A=!1,b=null)}}else A=!1}var N;if(typeof v=="function")N=function(){v(H)};else if(typeof MessageChannel<"u"){var X=new MessageChannel,$=X.port2;X.port1.onmessage=H,N=function(){$.postMessage(null)}}else N=function(){m(H,0)};function k(P){b=P,A||(A=!0,N())}function O(P,K){R=m(function(){P(t.unstable_now())},K)}t.unstable_IdlePriority=5,t.unstable_ImmediatePriority=1,t.unstable_LowPriority=4,t.unstable_NormalPriority=3,t.unstable_Profiling=null,t.unstable_UserBlockingPriority=2,t.unstable_cancelCallback=function(P){P.callback=null},t.unstable_continueExecution=function(){g||p||(g=!0,k(E))},t.unstable_forceFrameRate=function(P){0>P||125<P?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<P?Math.floor(1e3/P):5},t.unstable_getCurrentPriorityLevel=function(){return h},t.unstable_getFirstCallbackNode=function(){return n(l)},t.unstable_next=function(P){switch(h){case 1:case 2:case 3:var K=3;break;default:K=h}var Y=h;h=K;try{return P()}finally{h=Y}},t.unstable_pauseExecution=function(){},t.unstable_requestPaint=function(){},t.unstable_runWithPriority=function(P,K){switch(P){case 1:case 2:case 3:case 4:case 5:break;default:P=3}var Y=h;h=P;try{return K()}finally{h=Y}},t.unstable_scheduleCallback=function(P,K,Y){var te=t.unstable_now();switch(typeof Y=="object"&&Y!==null?(Y=Y.delay,Y=typeof Y=="number"&&0<Y?te+Y:te):Y=te,P){case 1:var be=-1;break;case 2:be=250;break;case 5:be=1073741823;break;case 4:be=1e4;break;default:be=5e3}return be=Y+be,P={id:f++,callback:K,priorityLevel:P,startTime:Y,expirationTime:be,sortIndex:-1},Y>te?(P.sortIndex=Y,e(c,P),n(l)===null&&P===n(c)&&(x?(d(R),R=-1):x=!0,O(S,Y-te))):(P.sortIndex=be,e(l,P),g||p||(g=!0,k(E))),P},t.unstable_shouldYield=L,t.unstable_wrapCallback=function(P){var K=h;return function(){var Y=h;h=K;try{return P.apply(this,arguments)}finally{h=Y}}}})(tx);ex.exports=tx;var i1=ex.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r1=ue,Bn=i1;function se(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var nx=new Set,xa={};function _s(t,e){ho(t,e),ho(t+"Capture",e)}function ho(t,e){for(xa[t]=e,t=0;t<e.length;t++)nx.add(e[t])}var Zi=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),ad=Object.prototype.hasOwnProperty,s1=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,fg={},dg={};function o1(t){return ad.call(dg,t)?!0:ad.call(fg,t)?!1:s1.test(t)?dg[t]=!0:(fg[t]=!0,!1)}function a1(t,e,n,i){if(n!==null&&n.type===0)return!1;switch(typeof e){case"function":case"symbol":return!0;case"boolean":return i?!1:n!==null?!n.acceptsBooleans:(t=t.toLowerCase().slice(0,5),t!=="data-"&&t!=="aria-");default:return!1}}function l1(t,e,n,i){if(e===null||typeof e>"u"||a1(t,e,n,i))return!0;if(i)return!1;if(n!==null)switch(n.type){case 3:return!e;case 4:return e===!1;case 5:return isNaN(e);case 6:return isNaN(e)||1>e}return!1}function vn(t,e,n,i,r,s,o){this.acceptsBooleans=e===2||e===3||e===4,this.attributeName=i,this.attributeNamespace=r,this.mustUseProperty=n,this.propertyName=t,this.type=e,this.sanitizeURL=s,this.removeEmptyString=o}var Qt={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(t){Qt[t]=new vn(t,0,!1,t,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(t){var e=t[0];Qt[e]=new vn(e,1,!1,t[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(t){Qt[t]=new vn(t,2,!1,t.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(t){Qt[t]=new vn(t,2,!1,t,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(t){Qt[t]=new vn(t,3,!1,t.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(t){Qt[t]=new vn(t,3,!0,t,null,!1,!1)});["capture","download"].forEach(function(t){Qt[t]=new vn(t,4,!1,t,null,!1,!1)});["cols","rows","size","span"].forEach(function(t){Qt[t]=new vn(t,6,!1,t,null,!1,!1)});["rowSpan","start"].forEach(function(t){Qt[t]=new vn(t,5,!1,t.toLowerCase(),null,!1,!1)});var wp=/[\-:]([a-z])/g;function Ap(t){return t[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(t){var e=t.replace(wp,Ap);Qt[e]=new vn(e,1,!1,t,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(t){var e=t.replace(wp,Ap);Qt[e]=new vn(e,1,!1,t,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(t){var e=t.replace(wp,Ap);Qt[e]=new vn(e,1,!1,t,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(t){Qt[t]=new vn(t,1,!1,t.toLowerCase(),null,!1,!1)});Qt.xlinkHref=new vn("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(t){Qt[t]=new vn(t,1,!1,t.toLowerCase(),null,!0,!0)});function bp(t,e,n,i){var r=Qt.hasOwnProperty(e)?Qt[e]:null;(r!==null?r.type!==0:i||!(2<e.length)||e[0]!=="o"&&e[0]!=="O"||e[1]!=="n"&&e[1]!=="N")&&(l1(e,n,r,i)&&(n=null),i||r===null?o1(e)&&(n===null?t.removeAttribute(e):t.setAttribute(e,""+n)):r.mustUseProperty?t[r.propertyName]=n===null?r.type===3?!1:"":n:(e=r.attributeName,i=r.attributeNamespace,n===null?t.removeAttribute(e):(r=r.type,n=r===3||r===4&&n===!0?"":""+n,i?t.setAttributeNS(i,e,n):t.setAttribute(e,n))))}var or=r1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,cl=Symbol.for("react.element"),Vs=Symbol.for("react.portal"),zs=Symbol.for("react.fragment"),Cp=Symbol.for("react.strict_mode"),ld=Symbol.for("react.profiler"),ix=Symbol.for("react.provider"),rx=Symbol.for("react.context"),Rp=Symbol.for("react.forward_ref"),cd=Symbol.for("react.suspense"),ud=Symbol.for("react.suspense_list"),Pp=Symbol.for("react.memo"),gr=Symbol.for("react.lazy"),sx=Symbol.for("react.offscreen"),hg=Symbol.iterator;function Fo(t){return t===null||typeof t!="object"?null:(t=hg&&t[hg]||t["@@iterator"],typeof t=="function"?t:null)}var At=Object.assign,ku;function Qo(t){if(ku===void 0)try{throw Error()}catch(n){var e=n.stack.trim().match(/\n( *(at )?)/);ku=e&&e[1]||""}return`
`+ku+t}var Bu=!1;function Vu(t,e){if(!t||Bu)return"";Bu=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(e)if(e=function(){throw Error()},Object.defineProperty(e.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(e,[])}catch(c){var i=c}Reflect.construct(t,[],e)}else{try{e.call()}catch(c){i=c}t.call(e.prototype)}else{try{throw Error()}catch(c){i=c}t()}}catch(c){if(c&&i&&typeof c.stack=="string"){for(var r=c.stack.split(`
`),s=i.stack.split(`
`),o=r.length-1,a=s.length-1;1<=o&&0<=a&&r[o]!==s[a];)a--;for(;1<=o&&0<=a;o--,a--)if(r[o]!==s[a]){if(o!==1||a!==1)do if(o--,a--,0>a||r[o]!==s[a]){var l=`
`+r[o].replace(" at new "," at ");return t.displayName&&l.includes("<anonymous>")&&(l=l.replace("<anonymous>",t.displayName)),l}while(1<=o&&0<=a);break}}}finally{Bu=!1,Error.prepareStackTrace=n}return(t=t?t.displayName||t.name:"")?Qo(t):""}function c1(t){switch(t.tag){case 5:return Qo(t.type);case 16:return Qo("Lazy");case 13:return Qo("Suspense");case 19:return Qo("SuspenseList");case 0:case 2:case 15:return t=Vu(t.type,!1),t;case 11:return t=Vu(t.type.render,!1),t;case 1:return t=Vu(t.type,!0),t;default:return""}}function fd(t){if(t==null)return null;if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t;switch(t){case zs:return"Fragment";case Vs:return"Portal";case ld:return"Profiler";case Cp:return"StrictMode";case cd:return"Suspense";case ud:return"SuspenseList"}if(typeof t=="object")switch(t.$$typeof){case rx:return(t.displayName||"Context")+".Consumer";case ix:return(t._context.displayName||"Context")+".Provider";case Rp:var e=t.render;return t=t.displayName,t||(t=e.displayName||e.name||"",t=t!==""?"ForwardRef("+t+")":"ForwardRef"),t;case Pp:return e=t.displayName||null,e!==null?e:fd(t.type)||"Memo";case gr:e=t._payload,t=t._init;try{return fd(t(e))}catch{}}return null}function u1(t){var e=t.type;switch(t.tag){case 24:return"Cache";case 9:return(e.displayName||"Context")+".Consumer";case 10:return(e._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return t=e.render,t=t.displayName||t.name||"",e.displayName||(t!==""?"ForwardRef("+t+")":"ForwardRef");case 7:return"Fragment";case 5:return e;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return fd(e);case 8:return e===Cp?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e}return null}function Ir(t){switch(typeof t){case"boolean":case"number":case"string":case"undefined":return t;case"object":return t;default:return""}}function ox(t){var e=t.type;return(t=t.nodeName)&&t.toLowerCase()==="input"&&(e==="checkbox"||e==="radio")}function f1(t){var e=ox(t)?"checked":"value",n=Object.getOwnPropertyDescriptor(t.constructor.prototype,e),i=""+t[e];if(!t.hasOwnProperty(e)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var r=n.get,s=n.set;return Object.defineProperty(t,e,{configurable:!0,get:function(){return r.call(this)},set:function(o){i=""+o,s.call(this,o)}}),Object.defineProperty(t,e,{enumerable:n.enumerable}),{getValue:function(){return i},setValue:function(o){i=""+o},stopTracking:function(){t._valueTracker=null,delete t[e]}}}}function ul(t){t._valueTracker||(t._valueTracker=f1(t))}function ax(t){if(!t)return!1;var e=t._valueTracker;if(!e)return!0;var n=e.getValue(),i="";return t&&(i=ox(t)?t.checked?"true":"false":t.value),t=i,t!==n?(e.setValue(t),!0):!1}function Ac(t){if(t=t||(typeof document<"u"?document:void 0),typeof t>"u")return null;try{return t.activeElement||t.body}catch{return t.body}}function dd(t,e){var n=e.checked;return At({},e,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??t._wrapperState.initialChecked})}function pg(t,e){var n=e.defaultValue==null?"":e.defaultValue,i=e.checked!=null?e.checked:e.defaultChecked;n=Ir(e.value!=null?e.value:n),t._wrapperState={initialChecked:i,initialValue:n,controlled:e.type==="checkbox"||e.type==="radio"?e.checked!=null:e.value!=null}}function lx(t,e){e=e.checked,e!=null&&bp(t,"checked",e,!1)}function hd(t,e){lx(t,e);var n=Ir(e.value),i=e.type;if(n!=null)i==="number"?(n===0&&t.value===""||t.value!=n)&&(t.value=""+n):t.value!==""+n&&(t.value=""+n);else if(i==="submit"||i==="reset"){t.removeAttribute("value");return}e.hasOwnProperty("value")?pd(t,e.type,n):e.hasOwnProperty("defaultValue")&&pd(t,e.type,Ir(e.defaultValue)),e.checked==null&&e.defaultChecked!=null&&(t.defaultChecked=!!e.defaultChecked)}function mg(t,e,n){if(e.hasOwnProperty("value")||e.hasOwnProperty("defaultValue")){var i=e.type;if(!(i!=="submit"&&i!=="reset"||e.value!==void 0&&e.value!==null))return;e=""+t._wrapperState.initialValue,n||e===t.value||(t.value=e),t.defaultValue=e}n=t.name,n!==""&&(t.name=""),t.defaultChecked=!!t._wrapperState.initialChecked,n!==""&&(t.name=n)}function pd(t,e,n){(e!=="number"||Ac(t.ownerDocument)!==t)&&(n==null?t.defaultValue=""+t._wrapperState.initialValue:t.defaultValue!==""+n&&(t.defaultValue=""+n))}var Jo=Array.isArray;function io(t,e,n,i){if(t=t.options,e){e={};for(var r=0;r<n.length;r++)e["$"+n[r]]=!0;for(n=0;n<t.length;n++)r=e.hasOwnProperty("$"+t[n].value),t[n].selected!==r&&(t[n].selected=r),r&&i&&(t[n].defaultSelected=!0)}else{for(n=""+Ir(n),e=null,r=0;r<t.length;r++){if(t[r].value===n){t[r].selected=!0,i&&(t[r].defaultSelected=!0);return}e!==null||t[r].disabled||(e=t[r])}e!==null&&(e.selected=!0)}}function md(t,e){if(e.dangerouslySetInnerHTML!=null)throw Error(se(91));return At({},e,{value:void 0,defaultValue:void 0,children:""+t._wrapperState.initialValue})}function gg(t,e){var n=e.value;if(n==null){if(n=e.children,e=e.defaultValue,n!=null){if(e!=null)throw Error(se(92));if(Jo(n)){if(1<n.length)throw Error(se(93));n=n[0]}e=n}e==null&&(e=""),n=e}t._wrapperState={initialValue:Ir(n)}}function cx(t,e){var n=Ir(e.value),i=Ir(e.defaultValue);n!=null&&(n=""+n,n!==t.value&&(t.value=n),e.defaultValue==null&&t.defaultValue!==n&&(t.defaultValue=n)),i!=null&&(t.defaultValue=""+i)}function vg(t){var e=t.textContent;e===t._wrapperState.initialValue&&e!==""&&e!==null&&(t.value=e)}function ux(t){switch(t){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function gd(t,e){return t==null||t==="http://www.w3.org/1999/xhtml"?ux(e):t==="http://www.w3.org/2000/svg"&&e==="foreignObject"?"http://www.w3.org/1999/xhtml":t}var fl,fx=function(t){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(e,n,i,r){MSApp.execUnsafeLocalFunction(function(){return t(e,n,i,r)})}:t}(function(t,e){if(t.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in t)t.innerHTML=e;else{for(fl=fl||document.createElement("div"),fl.innerHTML="<svg>"+e.valueOf().toString()+"</svg>",e=fl.firstChild;t.firstChild;)t.removeChild(t.firstChild);for(;e.firstChild;)t.appendChild(e.firstChild)}});function ya(t,e){if(e){var n=t.firstChild;if(n&&n===t.lastChild&&n.nodeType===3){n.nodeValue=e;return}}t.textContent=e}var sa={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},d1=["Webkit","ms","Moz","O"];Object.keys(sa).forEach(function(t){d1.forEach(function(e){e=e+t.charAt(0).toUpperCase()+t.substring(1),sa[e]=sa[t]})});function dx(t,e,n){return e==null||typeof e=="boolean"||e===""?"":n||typeof e!="number"||e===0||sa.hasOwnProperty(t)&&sa[t]?(""+e).trim():e+"px"}function hx(t,e){t=t.style;for(var n in e)if(e.hasOwnProperty(n)){var i=n.indexOf("--")===0,r=dx(n,e[n],i);n==="float"&&(n="cssFloat"),i?t.setProperty(n,r):t[n]=r}}var h1=At({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function vd(t,e){if(e){if(h1[t]&&(e.children!=null||e.dangerouslySetInnerHTML!=null))throw Error(se(137,t));if(e.dangerouslySetInnerHTML!=null){if(e.children!=null)throw Error(se(60));if(typeof e.dangerouslySetInnerHTML!="object"||!("__html"in e.dangerouslySetInnerHTML))throw Error(se(61))}if(e.style!=null&&typeof e.style!="object")throw Error(se(62))}}function _d(t,e){if(t.indexOf("-")===-1)return typeof e.is=="string";switch(t){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var xd=null;function Dp(t){return t=t.target||t.srcElement||window,t.correspondingUseElement&&(t=t.correspondingUseElement),t.nodeType===3?t.parentNode:t}var yd=null,ro=null,so=null;function _g(t){if(t=$a(t)){if(typeof yd!="function")throw Error(se(280));var e=t.stateNode;e&&(e=du(e),yd(t.stateNode,t.type,e))}}function px(t){ro?so?so.push(t):so=[t]:ro=t}function mx(){if(ro){var t=ro,e=so;if(so=ro=null,_g(t),e)for(t=0;t<e.length;t++)_g(e[t])}}function gx(t,e){return t(e)}function vx(){}var zu=!1;function _x(t,e,n){if(zu)return t(e,n);zu=!0;try{return gx(t,e,n)}finally{zu=!1,(ro!==null||so!==null)&&(vx(),mx())}}function Sa(t,e){var n=t.stateNode;if(n===null)return null;var i=du(n);if(i===null)return null;n=i[e];e:switch(e){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(i=!i.disabled)||(t=t.type,i=!(t==="button"||t==="input"||t==="select"||t==="textarea")),t=!i;break e;default:t=!1}if(t)return null;if(n&&typeof n!="function")throw Error(se(231,e,typeof n));return n}var Sd=!1;if(Zi)try{var Oo={};Object.defineProperty(Oo,"passive",{get:function(){Sd=!0}}),window.addEventListener("test",Oo,Oo),window.removeEventListener("test",Oo,Oo)}catch{Sd=!1}function p1(t,e,n,i,r,s,o,a,l){var c=Array.prototype.slice.call(arguments,3);try{e.apply(n,c)}catch(f){this.onError(f)}}var oa=!1,bc=null,Cc=!1,Md=null,m1={onError:function(t){oa=!0,bc=t}};function g1(t,e,n,i,r,s,o,a,l){oa=!1,bc=null,p1.apply(m1,arguments)}function v1(t,e,n,i,r,s,o,a,l){if(g1.apply(this,arguments),oa){if(oa){var c=bc;oa=!1,bc=null}else throw Error(se(198));Cc||(Cc=!0,Md=c)}}function xs(t){var e=t,n=t;if(t.alternate)for(;e.return;)e=e.return;else{t=e;do e=t,e.flags&4098&&(n=e.return),t=e.return;while(t)}return e.tag===3?n:null}function xx(t){if(t.tag===13){var e=t.memoizedState;if(e===null&&(t=t.alternate,t!==null&&(e=t.memoizedState)),e!==null)return e.dehydrated}return null}function xg(t){if(xs(t)!==t)throw Error(se(188))}function _1(t){var e=t.alternate;if(!e){if(e=xs(t),e===null)throw Error(se(188));return e!==t?null:t}for(var n=t,i=e;;){var r=n.return;if(r===null)break;var s=r.alternate;if(s===null){if(i=r.return,i!==null){n=i;continue}break}if(r.child===s.child){for(s=r.child;s;){if(s===n)return xg(r),t;if(s===i)return xg(r),e;s=s.sibling}throw Error(se(188))}if(n.return!==i.return)n=r,i=s;else{for(var o=!1,a=r.child;a;){if(a===n){o=!0,n=r,i=s;break}if(a===i){o=!0,i=r,n=s;break}a=a.sibling}if(!o){for(a=s.child;a;){if(a===n){o=!0,n=s,i=r;break}if(a===i){o=!0,i=s,n=r;break}a=a.sibling}if(!o)throw Error(se(189))}}if(n.alternate!==i)throw Error(se(190))}if(n.tag!==3)throw Error(se(188));return n.stateNode.current===n?t:e}function yx(t){return t=_1(t),t!==null?Sx(t):null}function Sx(t){if(t.tag===5||t.tag===6)return t;for(t=t.child;t!==null;){var e=Sx(t);if(e!==null)return e;t=t.sibling}return null}var Mx=Bn.unstable_scheduleCallback,yg=Bn.unstable_cancelCallback,x1=Bn.unstable_shouldYield,y1=Bn.unstable_requestPaint,Lt=Bn.unstable_now,S1=Bn.unstable_getCurrentPriorityLevel,Lp=Bn.unstable_ImmediatePriority,Ex=Bn.unstable_UserBlockingPriority,Rc=Bn.unstable_NormalPriority,M1=Bn.unstable_LowPriority,Tx=Bn.unstable_IdlePriority,lu=null,Ri=null;function E1(t){if(Ri&&typeof Ri.onCommitFiberRoot=="function")try{Ri.onCommitFiberRoot(lu,t,void 0,(t.current.flags&128)===128)}catch{}}var hi=Math.clz32?Math.clz32:A1,T1=Math.log,w1=Math.LN2;function A1(t){return t>>>=0,t===0?32:31-(T1(t)/w1|0)|0}var dl=64,hl=4194304;function ea(t){switch(t&-t){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return t&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return t}}function Pc(t,e){var n=t.pendingLanes;if(n===0)return 0;var i=0,r=t.suspendedLanes,s=t.pingedLanes,o=n&268435455;if(o!==0){var a=o&~r;a!==0?i=ea(a):(s&=o,s!==0&&(i=ea(s)))}else o=n&~r,o!==0?i=ea(o):s!==0&&(i=ea(s));if(i===0)return 0;if(e!==0&&e!==i&&!(e&r)&&(r=i&-i,s=e&-e,r>=s||r===16&&(s&4194240)!==0))return e;if(i&4&&(i|=n&16),e=t.entangledLanes,e!==0)for(t=t.entanglements,e&=i;0<e;)n=31-hi(e),r=1<<n,i|=t[n],e&=~r;return i}function b1(t,e){switch(t){case 1:case 2:case 4:return e+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function C1(t,e){for(var n=t.suspendedLanes,i=t.pingedLanes,r=t.expirationTimes,s=t.pendingLanes;0<s;){var o=31-hi(s),a=1<<o,l=r[o];l===-1?(!(a&n)||a&i)&&(r[o]=b1(a,e)):l<=e&&(t.expiredLanes|=a),s&=~a}}function Ed(t){return t=t.pendingLanes&-1073741825,t!==0?t:t&1073741824?1073741824:0}function wx(){var t=dl;return dl<<=1,!(dl&4194240)&&(dl=64),t}function Hu(t){for(var e=[],n=0;31>n;n++)e.push(t);return e}function Xa(t,e,n){t.pendingLanes|=e,e!==536870912&&(t.suspendedLanes=0,t.pingedLanes=0),t=t.eventTimes,e=31-hi(e),t[e]=n}function R1(t,e){var n=t.pendingLanes&~e;t.pendingLanes=e,t.suspendedLanes=0,t.pingedLanes=0,t.expiredLanes&=e,t.mutableReadLanes&=e,t.entangledLanes&=e,e=t.entanglements;var i=t.eventTimes;for(t=t.expirationTimes;0<n;){var r=31-hi(n),s=1<<r;e[r]=0,i[r]=-1,t[r]=-1,n&=~s}}function Ip(t,e){var n=t.entangledLanes|=e;for(t=t.entanglements;n;){var i=31-hi(n),r=1<<i;r&e|t[i]&e&&(t[i]|=e),n&=~r}}var ut=0;function Ax(t){return t&=-t,1<t?4<t?t&268435455?16:536870912:4:1}var bx,Np,Cx,Rx,Px,Td=!1,pl=[],wr=null,Ar=null,br=null,Ma=new Map,Ea=new Map,_r=[],P1="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function Sg(t,e){switch(t){case"focusin":case"focusout":wr=null;break;case"dragenter":case"dragleave":Ar=null;break;case"mouseover":case"mouseout":br=null;break;case"pointerover":case"pointerout":Ma.delete(e.pointerId);break;case"gotpointercapture":case"lostpointercapture":Ea.delete(e.pointerId)}}function ko(t,e,n,i,r,s){return t===null||t.nativeEvent!==s?(t={blockedOn:e,domEventName:n,eventSystemFlags:i,nativeEvent:s,targetContainers:[r]},e!==null&&(e=$a(e),e!==null&&Np(e)),t):(t.eventSystemFlags|=i,e=t.targetContainers,r!==null&&e.indexOf(r)===-1&&e.push(r),t)}function D1(t,e,n,i,r){switch(e){case"focusin":return wr=ko(wr,t,e,n,i,r),!0;case"dragenter":return Ar=ko(Ar,t,e,n,i,r),!0;case"mouseover":return br=ko(br,t,e,n,i,r),!0;case"pointerover":var s=r.pointerId;return Ma.set(s,ko(Ma.get(s)||null,t,e,n,i,r)),!0;case"gotpointercapture":return s=r.pointerId,Ea.set(s,ko(Ea.get(s)||null,t,e,n,i,r)),!0}return!1}function Dx(t){var e=ns(t.target);if(e!==null){var n=xs(e);if(n!==null){if(e=n.tag,e===13){if(e=xx(n),e!==null){t.blockedOn=e,Px(t.priority,function(){Cx(n)});return}}else if(e===3&&n.stateNode.current.memoizedState.isDehydrated){t.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}t.blockedOn=null}function rc(t){if(t.blockedOn!==null)return!1;for(var e=t.targetContainers;0<e.length;){var n=wd(t.domEventName,t.eventSystemFlags,e[0],t.nativeEvent);if(n===null){n=t.nativeEvent;var i=new n.constructor(n.type,n);xd=i,n.target.dispatchEvent(i),xd=null}else return e=$a(n),e!==null&&Np(e),t.blockedOn=n,!1;e.shift()}return!0}function Mg(t,e,n){rc(t)&&n.delete(e)}function L1(){Td=!1,wr!==null&&rc(wr)&&(wr=null),Ar!==null&&rc(Ar)&&(Ar=null),br!==null&&rc(br)&&(br=null),Ma.forEach(Mg),Ea.forEach(Mg)}function Bo(t,e){t.blockedOn===e&&(t.blockedOn=null,Td||(Td=!0,Bn.unstable_scheduleCallback(Bn.unstable_NormalPriority,L1)))}function Ta(t){function e(r){return Bo(r,t)}if(0<pl.length){Bo(pl[0],t);for(var n=1;n<pl.length;n++){var i=pl[n];i.blockedOn===t&&(i.blockedOn=null)}}for(wr!==null&&Bo(wr,t),Ar!==null&&Bo(Ar,t),br!==null&&Bo(br,t),Ma.forEach(e),Ea.forEach(e),n=0;n<_r.length;n++)i=_r[n],i.blockedOn===t&&(i.blockedOn=null);for(;0<_r.length&&(n=_r[0],n.blockedOn===null);)Dx(n),n.blockedOn===null&&_r.shift()}var oo=or.ReactCurrentBatchConfig,Dc=!0;function I1(t,e,n,i){var r=ut,s=oo.transition;oo.transition=null;try{ut=1,Up(t,e,n,i)}finally{ut=r,oo.transition=s}}function N1(t,e,n,i){var r=ut,s=oo.transition;oo.transition=null;try{ut=4,Up(t,e,n,i)}finally{ut=r,oo.transition=s}}function Up(t,e,n,i){if(Dc){var r=wd(t,e,n,i);if(r===null)Qu(t,e,i,Lc,n),Sg(t,i);else if(D1(r,t,e,n,i))i.stopPropagation();else if(Sg(t,i),e&4&&-1<P1.indexOf(t)){for(;r!==null;){var s=$a(r);if(s!==null&&bx(s),s=wd(t,e,n,i),s===null&&Qu(t,e,i,Lc,n),s===r)break;r=s}r!==null&&i.stopPropagation()}else Qu(t,e,i,null,n)}}var Lc=null;function wd(t,e,n,i){if(Lc=null,t=Dp(i),t=ns(t),t!==null)if(e=xs(t),e===null)t=null;else if(n=e.tag,n===13){if(t=xx(e),t!==null)return t;t=null}else if(n===3){if(e.stateNode.current.memoizedState.isDehydrated)return e.tag===3?e.stateNode.containerInfo:null;t=null}else e!==t&&(t=null);return Lc=t,null}function Lx(t){switch(t){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(S1()){case Lp:return 1;case Ex:return 4;case Rc:case M1:return 16;case Tx:return 536870912;default:return 16}default:return 16}}var Sr=null,Fp=null,sc=null;function Ix(){if(sc)return sc;var t,e=Fp,n=e.length,i,r="value"in Sr?Sr.value:Sr.textContent,s=r.length;for(t=0;t<n&&e[t]===r[t];t++);var o=n-t;for(i=1;i<=o&&e[n-i]===r[s-i];i++);return sc=r.slice(t,1<i?1-i:void 0)}function oc(t){var e=t.keyCode;return"charCode"in t?(t=t.charCode,t===0&&e===13&&(t=13)):t=e,t===10&&(t=13),32<=t||t===13?t:0}function ml(){return!0}function Eg(){return!1}function zn(t){function e(n,i,r,s,o){this._reactName=n,this._targetInst=r,this.type=i,this.nativeEvent=s,this.target=o,this.currentTarget=null;for(var a in t)t.hasOwnProperty(a)&&(n=t[a],this[a]=n?n(s):s[a]);return this.isDefaultPrevented=(s.defaultPrevented!=null?s.defaultPrevented:s.returnValue===!1)?ml:Eg,this.isPropagationStopped=Eg,this}return At(e.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=ml)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=ml)},persist:function(){},isPersistent:ml}),e}var bo={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(t){return t.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},Op=zn(bo),Ya=At({},bo,{view:0,detail:0}),U1=zn(Ya),Gu,Wu,Vo,cu=At({},Ya,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:kp,button:0,buttons:0,relatedTarget:function(t){return t.relatedTarget===void 0?t.fromElement===t.srcElement?t.toElement:t.fromElement:t.relatedTarget},movementX:function(t){return"movementX"in t?t.movementX:(t!==Vo&&(Vo&&t.type==="mousemove"?(Gu=t.screenX-Vo.screenX,Wu=t.screenY-Vo.screenY):Wu=Gu=0,Vo=t),Gu)},movementY:function(t){return"movementY"in t?t.movementY:Wu}}),Tg=zn(cu),F1=At({},cu,{dataTransfer:0}),O1=zn(F1),k1=At({},Ya,{relatedTarget:0}),ju=zn(k1),B1=At({},bo,{animationName:0,elapsedTime:0,pseudoElement:0}),V1=zn(B1),z1=At({},bo,{clipboardData:function(t){return"clipboardData"in t?t.clipboardData:window.clipboardData}}),H1=zn(z1),G1=At({},bo,{data:0}),wg=zn(G1),W1={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},j1={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},X1={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Y1(t){var e=this.nativeEvent;return e.getModifierState?e.getModifierState(t):(t=X1[t])?!!e[t]:!1}function kp(){return Y1}var $1=At({},Ya,{key:function(t){if(t.key){var e=W1[t.key]||t.key;if(e!=="Unidentified")return e}return t.type==="keypress"?(t=oc(t),t===13?"Enter":String.fromCharCode(t)):t.type==="keydown"||t.type==="keyup"?j1[t.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:kp,charCode:function(t){return t.type==="keypress"?oc(t):0},keyCode:function(t){return t.type==="keydown"||t.type==="keyup"?t.keyCode:0},which:function(t){return t.type==="keypress"?oc(t):t.type==="keydown"||t.type==="keyup"?t.keyCode:0}}),q1=zn($1),K1=At({},cu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Ag=zn(K1),Z1=At({},Ya,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:kp}),Q1=zn(Z1),J1=At({},bo,{propertyName:0,elapsedTime:0,pseudoElement:0}),eT=zn(J1),tT=At({},cu,{deltaX:function(t){return"deltaX"in t?t.deltaX:"wheelDeltaX"in t?-t.wheelDeltaX:0},deltaY:function(t){return"deltaY"in t?t.deltaY:"wheelDeltaY"in t?-t.wheelDeltaY:"wheelDelta"in t?-t.wheelDelta:0},deltaZ:0,deltaMode:0}),nT=zn(tT),iT=[9,13,27,32],Bp=Zi&&"CompositionEvent"in window,aa=null;Zi&&"documentMode"in document&&(aa=document.documentMode);var rT=Zi&&"TextEvent"in window&&!aa,Nx=Zi&&(!Bp||aa&&8<aa&&11>=aa),bg=" ",Cg=!1;function Ux(t,e){switch(t){case"keyup":return iT.indexOf(e.keyCode)!==-1;case"keydown":return e.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function Fx(t){return t=t.detail,typeof t=="object"&&"data"in t?t.data:null}var Hs=!1;function sT(t,e){switch(t){case"compositionend":return Fx(e);case"keypress":return e.which!==32?null:(Cg=!0,bg);case"textInput":return t=e.data,t===bg&&Cg?null:t;default:return null}}function oT(t,e){if(Hs)return t==="compositionend"||!Bp&&Ux(t,e)?(t=Ix(),sc=Fp=Sr=null,Hs=!1,t):null;switch(t){case"paste":return null;case"keypress":if(!(e.ctrlKey||e.altKey||e.metaKey)||e.ctrlKey&&e.altKey){if(e.char&&1<e.char.length)return e.char;if(e.which)return String.fromCharCode(e.which)}return null;case"compositionend":return Nx&&e.locale!=="ko"?null:e.data;default:return null}}var aT={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function Rg(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e==="input"?!!aT[t.type]:e==="textarea"}function Ox(t,e,n,i){px(i),e=Ic(e,"onChange"),0<e.length&&(n=new Op("onChange","change",null,n,i),t.push({event:n,listeners:e}))}var la=null,wa=null;function lT(t){$x(t,0)}function uu(t){var e=js(t);if(ax(e))return t}function cT(t,e){if(t==="change")return e}var kx=!1;if(Zi){var Xu;if(Zi){var Yu="oninput"in document;if(!Yu){var Pg=document.createElement("div");Pg.setAttribute("oninput","return;"),Yu=typeof Pg.oninput=="function"}Xu=Yu}else Xu=!1;kx=Xu&&(!document.documentMode||9<document.documentMode)}function Dg(){la&&(la.detachEvent("onpropertychange",Bx),wa=la=null)}function Bx(t){if(t.propertyName==="value"&&uu(wa)){var e=[];Ox(e,wa,t,Dp(t)),_x(lT,e)}}function uT(t,e,n){t==="focusin"?(Dg(),la=e,wa=n,la.attachEvent("onpropertychange",Bx)):t==="focusout"&&Dg()}function fT(t){if(t==="selectionchange"||t==="keyup"||t==="keydown")return uu(wa)}function dT(t,e){if(t==="click")return uu(e)}function hT(t,e){if(t==="input"||t==="change")return uu(e)}function pT(t,e){return t===e&&(t!==0||1/t===1/e)||t!==t&&e!==e}var gi=typeof Object.is=="function"?Object.is:pT;function Aa(t,e){if(gi(t,e))return!0;if(typeof t!="object"||t===null||typeof e!="object"||e===null)return!1;var n=Object.keys(t),i=Object.keys(e);if(n.length!==i.length)return!1;for(i=0;i<n.length;i++){var r=n[i];if(!ad.call(e,r)||!gi(t[r],e[r]))return!1}return!0}function Lg(t){for(;t&&t.firstChild;)t=t.firstChild;return t}function Ig(t,e){var n=Lg(t);t=0;for(var i;n;){if(n.nodeType===3){if(i=t+n.textContent.length,t<=e&&i>=e)return{node:n,offset:e-t};t=i}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=Lg(n)}}function Vx(t,e){return t&&e?t===e?!0:t&&t.nodeType===3?!1:e&&e.nodeType===3?Vx(t,e.parentNode):"contains"in t?t.contains(e):t.compareDocumentPosition?!!(t.compareDocumentPosition(e)&16):!1:!1}function zx(){for(var t=window,e=Ac();e instanceof t.HTMLIFrameElement;){try{var n=typeof e.contentWindow.location.href=="string"}catch{n=!1}if(n)t=e.contentWindow;else break;e=Ac(t.document)}return e}function Vp(t){var e=t&&t.nodeName&&t.nodeName.toLowerCase();return e&&(e==="input"&&(t.type==="text"||t.type==="search"||t.type==="tel"||t.type==="url"||t.type==="password")||e==="textarea"||t.contentEditable==="true")}function mT(t){var e=zx(),n=t.focusedElem,i=t.selectionRange;if(e!==n&&n&&n.ownerDocument&&Vx(n.ownerDocument.documentElement,n)){if(i!==null&&Vp(n)){if(e=i.start,t=i.end,t===void 0&&(t=e),"selectionStart"in n)n.selectionStart=e,n.selectionEnd=Math.min(t,n.value.length);else if(t=(e=n.ownerDocument||document)&&e.defaultView||window,t.getSelection){t=t.getSelection();var r=n.textContent.length,s=Math.min(i.start,r);i=i.end===void 0?s:Math.min(i.end,r),!t.extend&&s>i&&(r=i,i=s,s=r),r=Ig(n,s);var o=Ig(n,i);r&&o&&(t.rangeCount!==1||t.anchorNode!==r.node||t.anchorOffset!==r.offset||t.focusNode!==o.node||t.focusOffset!==o.offset)&&(e=e.createRange(),e.setStart(r.node,r.offset),t.removeAllRanges(),s>i?(t.addRange(e),t.extend(o.node,o.offset)):(e.setEnd(o.node,o.offset),t.addRange(e)))}}for(e=[],t=n;t=t.parentNode;)t.nodeType===1&&e.push({element:t,left:t.scrollLeft,top:t.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<e.length;n++)t=e[n],t.element.scrollLeft=t.left,t.element.scrollTop=t.top}}var gT=Zi&&"documentMode"in document&&11>=document.documentMode,Gs=null,Ad=null,ca=null,bd=!1;function Ng(t,e,n){var i=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;bd||Gs==null||Gs!==Ac(i)||(i=Gs,"selectionStart"in i&&Vp(i)?i={start:i.selectionStart,end:i.selectionEnd}:(i=(i.ownerDocument&&i.ownerDocument.defaultView||window).getSelection(),i={anchorNode:i.anchorNode,anchorOffset:i.anchorOffset,focusNode:i.focusNode,focusOffset:i.focusOffset}),ca&&Aa(ca,i)||(ca=i,i=Ic(Ad,"onSelect"),0<i.length&&(e=new Op("onSelect","select",null,e,n),t.push({event:e,listeners:i}),e.target=Gs)))}function gl(t,e){var n={};return n[t.toLowerCase()]=e.toLowerCase(),n["Webkit"+t]="webkit"+e,n["Moz"+t]="moz"+e,n}var Ws={animationend:gl("Animation","AnimationEnd"),animationiteration:gl("Animation","AnimationIteration"),animationstart:gl("Animation","AnimationStart"),transitionend:gl("Transition","TransitionEnd")},$u={},Hx={};Zi&&(Hx=document.createElement("div").style,"AnimationEvent"in window||(delete Ws.animationend.animation,delete Ws.animationiteration.animation,delete Ws.animationstart.animation),"TransitionEvent"in window||delete Ws.transitionend.transition);function fu(t){if($u[t])return $u[t];if(!Ws[t])return t;var e=Ws[t],n;for(n in e)if(e.hasOwnProperty(n)&&n in Hx)return $u[t]=e[n];return t}var Gx=fu("animationend"),Wx=fu("animationiteration"),jx=fu("animationstart"),Xx=fu("transitionend"),Yx=new Map,Ug="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Or(t,e){Yx.set(t,e),_s(e,[t])}for(var qu=0;qu<Ug.length;qu++){var Ku=Ug[qu],vT=Ku.toLowerCase(),_T=Ku[0].toUpperCase()+Ku.slice(1);Or(vT,"on"+_T)}Or(Gx,"onAnimationEnd");Or(Wx,"onAnimationIteration");Or(jx,"onAnimationStart");Or("dblclick","onDoubleClick");Or("focusin","onFocus");Or("focusout","onBlur");Or(Xx,"onTransitionEnd");ho("onMouseEnter",["mouseout","mouseover"]);ho("onMouseLeave",["mouseout","mouseover"]);ho("onPointerEnter",["pointerout","pointerover"]);ho("onPointerLeave",["pointerout","pointerover"]);_s("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));_s("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));_s("onBeforeInput",["compositionend","keypress","textInput","paste"]);_s("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));_s("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var ta="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),xT=new Set("cancel close invalid load scroll toggle".split(" ").concat(ta));function Fg(t,e,n){var i=t.type||"unknown-event";t.currentTarget=n,v1(i,e,void 0,t),t.currentTarget=null}function $x(t,e){e=(e&4)!==0;for(var n=0;n<t.length;n++){var i=t[n],r=i.event;i=i.listeners;e:{var s=void 0;if(e)for(var o=i.length-1;0<=o;o--){var a=i[o],l=a.instance,c=a.currentTarget;if(a=a.listener,l!==s&&r.isPropagationStopped())break e;Fg(r,a,c),s=l}else for(o=0;o<i.length;o++){if(a=i[o],l=a.instance,c=a.currentTarget,a=a.listener,l!==s&&r.isPropagationStopped())break e;Fg(r,a,c),s=l}}}if(Cc)throw t=Md,Cc=!1,Md=null,t}function yt(t,e){var n=e[Ld];n===void 0&&(n=e[Ld]=new Set);var i=t+"__bubble";n.has(i)||(qx(e,t,2,!1),n.add(i))}function Zu(t,e,n){var i=0;e&&(i|=4),qx(n,t,i,e)}var vl="_reactListening"+Math.random().toString(36).slice(2);function ba(t){if(!t[vl]){t[vl]=!0,nx.forEach(function(n){n!=="selectionchange"&&(xT.has(n)||Zu(n,!1,t),Zu(n,!0,t))});var e=t.nodeType===9?t:t.ownerDocument;e===null||e[vl]||(e[vl]=!0,Zu("selectionchange",!1,e))}}function qx(t,e,n,i){switch(Lx(e)){case 1:var r=I1;break;case 4:r=N1;break;default:r=Up}n=r.bind(null,e,n,t),r=void 0,!Sd||e!=="touchstart"&&e!=="touchmove"&&e!=="wheel"||(r=!0),i?r!==void 0?t.addEventListener(e,n,{capture:!0,passive:r}):t.addEventListener(e,n,!0):r!==void 0?t.addEventListener(e,n,{passive:r}):t.addEventListener(e,n,!1)}function Qu(t,e,n,i,r){var s=i;if(!(e&1)&&!(e&2)&&i!==null)e:for(;;){if(i===null)return;var o=i.tag;if(o===3||o===4){var a=i.stateNode.containerInfo;if(a===r||a.nodeType===8&&a.parentNode===r)break;if(o===4)for(o=i.return;o!==null;){var l=o.tag;if((l===3||l===4)&&(l=o.stateNode.containerInfo,l===r||l.nodeType===8&&l.parentNode===r))return;o=o.return}for(;a!==null;){if(o=ns(a),o===null)return;if(l=o.tag,l===5||l===6){i=s=o;continue e}a=a.parentNode}}i=i.return}_x(function(){var c=s,f=Dp(n),u=[];e:{var h=Yx.get(t);if(h!==void 0){var p=Op,g=t;switch(t){case"keypress":if(oc(n)===0)break e;case"keydown":case"keyup":p=q1;break;case"focusin":g="focus",p=ju;break;case"focusout":g="blur",p=ju;break;case"beforeblur":case"afterblur":p=ju;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":p=Tg;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":p=O1;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":p=Q1;break;case Gx:case Wx:case jx:p=V1;break;case Xx:p=eT;break;case"scroll":p=U1;break;case"wheel":p=nT;break;case"copy":case"cut":case"paste":p=H1;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":p=Ag}var x=(e&4)!==0,m=!x&&t==="scroll",d=x?h!==null?h+"Capture":null:h;x=[];for(var v=c,_;v!==null;){_=v;var S=_.stateNode;if(_.tag===5&&S!==null&&(_=S,d!==null&&(S=Sa(v,d),S!=null&&x.push(Ca(v,S,_)))),m)break;v=v.return}0<x.length&&(h=new p(h,g,null,n,f),u.push({event:h,listeners:x}))}}if(!(e&7)){e:{if(h=t==="mouseover"||t==="pointerover",p=t==="mouseout"||t==="pointerout",h&&n!==xd&&(g=n.relatedTarget||n.fromElement)&&(ns(g)||g[Qi]))break e;if((p||h)&&(h=f.window===f?f:(h=f.ownerDocument)?h.defaultView||h.parentWindow:window,p?(g=n.relatedTarget||n.toElement,p=c,g=g?ns(g):null,g!==null&&(m=xs(g),g!==m||g.tag!==5&&g.tag!==6)&&(g=null)):(p=null,g=c),p!==g)){if(x=Tg,S="onMouseLeave",d="onMouseEnter",v="mouse",(t==="pointerout"||t==="pointerover")&&(x=Ag,S="onPointerLeave",d="onPointerEnter",v="pointer"),m=p==null?h:js(p),_=g==null?h:js(g),h=new x(S,v+"leave",p,n,f),h.target=m,h.relatedTarget=_,S=null,ns(f)===c&&(x=new x(d,v+"enter",g,n,f),x.target=_,x.relatedTarget=m,S=x),m=S,p&&g)t:{for(x=p,d=g,v=0,_=x;_;_=Ms(_))v++;for(_=0,S=d;S;S=Ms(S))_++;for(;0<v-_;)x=Ms(x),v--;for(;0<_-v;)d=Ms(d),_--;for(;v--;){if(x===d||d!==null&&x===d.alternate)break t;x=Ms(x),d=Ms(d)}x=null}else x=null;p!==null&&Og(u,h,p,x,!1),g!==null&&m!==null&&Og(u,m,g,x,!0)}}e:{if(h=c?js(c):window,p=h.nodeName&&h.nodeName.toLowerCase(),p==="select"||p==="input"&&h.type==="file")var E=cT;else if(Rg(h))if(kx)E=hT;else{E=fT;var A=uT}else(p=h.nodeName)&&p.toLowerCase()==="input"&&(h.type==="checkbox"||h.type==="radio")&&(E=dT);if(E&&(E=E(t,c))){Ox(u,E,n,f);break e}A&&A(t,h,c),t==="focusout"&&(A=h._wrapperState)&&A.controlled&&h.type==="number"&&pd(h,"number",h.value)}switch(A=c?js(c):window,t){case"focusin":(Rg(A)||A.contentEditable==="true")&&(Gs=A,Ad=c,ca=null);break;case"focusout":ca=Ad=Gs=null;break;case"mousedown":bd=!0;break;case"contextmenu":case"mouseup":case"dragend":bd=!1,Ng(u,n,f);break;case"selectionchange":if(gT)break;case"keydown":case"keyup":Ng(u,n,f)}var b;if(Bp)e:{switch(t){case"compositionstart":var R="onCompositionStart";break e;case"compositionend":R="onCompositionEnd";break e;case"compositionupdate":R="onCompositionUpdate";break e}R=void 0}else Hs?Ux(t,n)&&(R="onCompositionEnd"):t==="keydown"&&n.keyCode===229&&(R="onCompositionStart");R&&(Nx&&n.locale!=="ko"&&(Hs||R!=="onCompositionStart"?R==="onCompositionEnd"&&Hs&&(b=Ix()):(Sr=f,Fp="value"in Sr?Sr.value:Sr.textContent,Hs=!0)),A=Ic(c,R),0<A.length&&(R=new wg(R,t,null,n,f),u.push({event:R,listeners:A}),b?R.data=b:(b=Fx(n),b!==null&&(R.data=b)))),(b=rT?sT(t,n):oT(t,n))&&(c=Ic(c,"onBeforeInput"),0<c.length&&(f=new wg("onBeforeInput","beforeinput",null,n,f),u.push({event:f,listeners:c}),f.data=b))}$x(u,e)})}function Ca(t,e,n){return{instance:t,listener:e,currentTarget:n}}function Ic(t,e){for(var n=e+"Capture",i=[];t!==null;){var r=t,s=r.stateNode;r.tag===5&&s!==null&&(r=s,s=Sa(t,n),s!=null&&i.unshift(Ca(t,s,r)),s=Sa(t,e),s!=null&&i.push(Ca(t,s,r))),t=t.return}return i}function Ms(t){if(t===null)return null;do t=t.return;while(t&&t.tag!==5);return t||null}function Og(t,e,n,i,r){for(var s=e._reactName,o=[];n!==null&&n!==i;){var a=n,l=a.alternate,c=a.stateNode;if(l!==null&&l===i)break;a.tag===5&&c!==null&&(a=c,r?(l=Sa(n,s),l!=null&&o.unshift(Ca(n,l,a))):r||(l=Sa(n,s),l!=null&&o.push(Ca(n,l,a)))),n=n.return}o.length!==0&&t.push({event:e,listeners:o})}var yT=/\r\n?/g,ST=/\u0000|\uFFFD/g;function kg(t){return(typeof t=="string"?t:""+t).replace(yT,`
`).replace(ST,"")}function _l(t,e,n){if(e=kg(e),kg(t)!==e&&n)throw Error(se(425))}function Nc(){}var Cd=null,Rd=null;function Pd(t,e){return t==="textarea"||t==="noscript"||typeof e.children=="string"||typeof e.children=="number"||typeof e.dangerouslySetInnerHTML=="object"&&e.dangerouslySetInnerHTML!==null&&e.dangerouslySetInnerHTML.__html!=null}var Dd=typeof setTimeout=="function"?setTimeout:void 0,MT=typeof clearTimeout=="function"?clearTimeout:void 0,Bg=typeof Promise=="function"?Promise:void 0,ET=typeof queueMicrotask=="function"?queueMicrotask:typeof Bg<"u"?function(t){return Bg.resolve(null).then(t).catch(TT)}:Dd;function TT(t){setTimeout(function(){throw t})}function Ju(t,e){var n=e,i=0;do{var r=n.nextSibling;if(t.removeChild(n),r&&r.nodeType===8)if(n=r.data,n==="/$"){if(i===0){t.removeChild(r),Ta(e);return}i--}else n!=="$"&&n!=="$?"&&n!=="$!"||i++;n=r}while(n);Ta(e)}function Cr(t){for(;t!=null;t=t.nextSibling){var e=t.nodeType;if(e===1||e===3)break;if(e===8){if(e=t.data,e==="$"||e==="$!"||e==="$?")break;if(e==="/$")return null}}return t}function Vg(t){t=t.previousSibling;for(var e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="$"||n==="$!"||n==="$?"){if(e===0)return t;e--}else n==="/$"&&e++}t=t.previousSibling}return null}var Co=Math.random().toString(36).slice(2),Ai="__reactFiber$"+Co,Ra="__reactProps$"+Co,Qi="__reactContainer$"+Co,Ld="__reactEvents$"+Co,wT="__reactListeners$"+Co,AT="__reactHandles$"+Co;function ns(t){var e=t[Ai];if(e)return e;for(var n=t.parentNode;n;){if(e=n[Qi]||n[Ai]){if(n=e.alternate,e.child!==null||n!==null&&n.child!==null)for(t=Vg(t);t!==null;){if(n=t[Ai])return n;t=Vg(t)}return e}t=n,n=t.parentNode}return null}function $a(t){return t=t[Ai]||t[Qi],!t||t.tag!==5&&t.tag!==6&&t.tag!==13&&t.tag!==3?null:t}function js(t){if(t.tag===5||t.tag===6)return t.stateNode;throw Error(se(33))}function du(t){return t[Ra]||null}var Id=[],Xs=-1;function kr(t){return{current:t}}function St(t){0>Xs||(t.current=Id[Xs],Id[Xs]=null,Xs--)}function _t(t,e){Xs++,Id[Xs]=t.current,t.current=e}var Nr={},on=kr(Nr),An=kr(!1),ds=Nr;function po(t,e){var n=t.type.contextTypes;if(!n)return Nr;var i=t.stateNode;if(i&&i.__reactInternalMemoizedUnmaskedChildContext===e)return i.__reactInternalMemoizedMaskedChildContext;var r={},s;for(s in n)r[s]=e[s];return i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=e,t.__reactInternalMemoizedMaskedChildContext=r),r}function bn(t){return t=t.childContextTypes,t!=null}function Uc(){St(An),St(on)}function zg(t,e,n){if(on.current!==Nr)throw Error(se(168));_t(on,e),_t(An,n)}function Kx(t,e,n){var i=t.stateNode;if(e=e.childContextTypes,typeof i.getChildContext!="function")return n;i=i.getChildContext();for(var r in i)if(!(r in e))throw Error(se(108,u1(t)||"Unknown",r));return At({},n,i)}function Fc(t){return t=(t=t.stateNode)&&t.__reactInternalMemoizedMergedChildContext||Nr,ds=on.current,_t(on,t),_t(An,An.current),!0}function Hg(t,e,n){var i=t.stateNode;if(!i)throw Error(se(169));n?(t=Kx(t,e,ds),i.__reactInternalMemoizedMergedChildContext=t,St(An),St(on),_t(on,t)):St(An),_t(An,n)}var Hi=null,hu=!1,ef=!1;function Zx(t){Hi===null?Hi=[t]:Hi.push(t)}function bT(t){hu=!0,Zx(t)}function Br(){if(!ef&&Hi!==null){ef=!0;var t=0,e=ut;try{var n=Hi;for(ut=1;t<n.length;t++){var i=n[t];do i=i(!0);while(i!==null)}Hi=null,hu=!1}catch(r){throw Hi!==null&&(Hi=Hi.slice(t+1)),Mx(Lp,Br),r}finally{ut=e,ef=!1}}return null}var Ys=[],$s=0,Oc=null,kc=0,jn=[],Xn=0,hs=null,Wi=1,ji="";function Kr(t,e){Ys[$s++]=kc,Ys[$s++]=Oc,Oc=t,kc=e}function Qx(t,e,n){jn[Xn++]=Wi,jn[Xn++]=ji,jn[Xn++]=hs,hs=t;var i=Wi;t=ji;var r=32-hi(i)-1;i&=~(1<<r),n+=1;var s=32-hi(e)+r;if(30<s){var o=r-r%5;s=(i&(1<<o)-1).toString(32),i>>=o,r-=o,Wi=1<<32-hi(e)+r|n<<r|i,ji=s+t}else Wi=1<<s|n<<r|i,ji=t}function zp(t){t.return!==null&&(Kr(t,1),Qx(t,1,0))}function Hp(t){for(;t===Oc;)Oc=Ys[--$s],Ys[$s]=null,kc=Ys[--$s],Ys[$s]=null;for(;t===hs;)hs=jn[--Xn],jn[Xn]=null,ji=jn[--Xn],jn[Xn]=null,Wi=jn[--Xn],jn[Xn]=null}var kn=null,On=null,Mt=!1,ci=null;function Jx(t,e){var n=qn(5,null,null,0);n.elementType="DELETED",n.stateNode=e,n.return=t,e=t.deletions,e===null?(t.deletions=[n],t.flags|=16):e.push(n)}function Gg(t,e){switch(t.tag){case 5:var n=t.type;return e=e.nodeType!==1||n.toLowerCase()!==e.nodeName.toLowerCase()?null:e,e!==null?(t.stateNode=e,kn=t,On=Cr(e.firstChild),!0):!1;case 6:return e=t.pendingProps===""||e.nodeType!==3?null:e,e!==null?(t.stateNode=e,kn=t,On=null,!0):!1;case 13:return e=e.nodeType!==8?null:e,e!==null?(n=hs!==null?{id:Wi,overflow:ji}:null,t.memoizedState={dehydrated:e,treeContext:n,retryLane:1073741824},n=qn(18,null,null,0),n.stateNode=e,n.return=t,t.child=n,kn=t,On=null,!0):!1;default:return!1}}function Nd(t){return(t.mode&1)!==0&&(t.flags&128)===0}function Ud(t){if(Mt){var e=On;if(e){var n=e;if(!Gg(t,e)){if(Nd(t))throw Error(se(418));e=Cr(n.nextSibling);var i=kn;e&&Gg(t,e)?Jx(i,n):(t.flags=t.flags&-4097|2,Mt=!1,kn=t)}}else{if(Nd(t))throw Error(se(418));t.flags=t.flags&-4097|2,Mt=!1,kn=t}}}function Wg(t){for(t=t.return;t!==null&&t.tag!==5&&t.tag!==3&&t.tag!==13;)t=t.return;kn=t}function xl(t){if(t!==kn)return!1;if(!Mt)return Wg(t),Mt=!0,!1;var e;if((e=t.tag!==3)&&!(e=t.tag!==5)&&(e=t.type,e=e!=="head"&&e!=="body"&&!Pd(t.type,t.memoizedProps)),e&&(e=On)){if(Nd(t))throw ey(),Error(se(418));for(;e;)Jx(t,e),e=Cr(e.nextSibling)}if(Wg(t),t.tag===13){if(t=t.memoizedState,t=t!==null?t.dehydrated:null,!t)throw Error(se(317));e:{for(t=t.nextSibling,e=0;t;){if(t.nodeType===8){var n=t.data;if(n==="/$"){if(e===0){On=Cr(t.nextSibling);break e}e--}else n!=="$"&&n!=="$!"&&n!=="$?"||e++}t=t.nextSibling}On=null}}else On=kn?Cr(t.stateNode.nextSibling):null;return!0}function ey(){for(var t=On;t;)t=Cr(t.nextSibling)}function mo(){On=kn=null,Mt=!1}function Gp(t){ci===null?ci=[t]:ci.push(t)}var CT=or.ReactCurrentBatchConfig;function zo(t,e,n){if(t=n.ref,t!==null&&typeof t!="function"&&typeof t!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(se(309));var i=n.stateNode}if(!i)throw Error(se(147,t));var r=i,s=""+t;return e!==null&&e.ref!==null&&typeof e.ref=="function"&&e.ref._stringRef===s?e.ref:(e=function(o){var a=r.refs;o===null?delete a[s]:a[s]=o},e._stringRef=s,e)}if(typeof t!="string")throw Error(se(284));if(!n._owner)throw Error(se(290,t))}return t}function yl(t,e){throw t=Object.prototype.toString.call(e),Error(se(31,t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t))}function jg(t){var e=t._init;return e(t._payload)}function ty(t){function e(d,v){if(t){var _=d.deletions;_===null?(d.deletions=[v],d.flags|=16):_.push(v)}}function n(d,v){if(!t)return null;for(;v!==null;)e(d,v),v=v.sibling;return null}function i(d,v){for(d=new Map;v!==null;)v.key!==null?d.set(v.key,v):d.set(v.index,v),v=v.sibling;return d}function r(d,v){return d=Lr(d,v),d.index=0,d.sibling=null,d}function s(d,v,_){return d.index=_,t?(_=d.alternate,_!==null?(_=_.index,_<v?(d.flags|=2,v):_):(d.flags|=2,v)):(d.flags|=1048576,v)}function o(d){return t&&d.alternate===null&&(d.flags|=2),d}function a(d,v,_,S){return v===null||v.tag!==6?(v=lf(_,d.mode,S),v.return=d,v):(v=r(v,_),v.return=d,v)}function l(d,v,_,S){var E=_.type;return E===zs?f(d,v,_.props.children,S,_.key):v!==null&&(v.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gr&&jg(E)===v.type)?(S=r(v,_.props),S.ref=zo(d,v,_),S.return=d,S):(S=hc(_.type,_.key,_.props,null,d.mode,S),S.ref=zo(d,v,_),S.return=d,S)}function c(d,v,_,S){return v===null||v.tag!==4||v.stateNode.containerInfo!==_.containerInfo||v.stateNode.implementation!==_.implementation?(v=cf(_,d.mode,S),v.return=d,v):(v=r(v,_.children||[]),v.return=d,v)}function f(d,v,_,S,E){return v===null||v.tag!==7?(v=us(_,d.mode,S,E),v.return=d,v):(v=r(v,_),v.return=d,v)}function u(d,v,_){if(typeof v=="string"&&v!==""||typeof v=="number")return v=lf(""+v,d.mode,_),v.return=d,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case cl:return _=hc(v.type,v.key,v.props,null,d.mode,_),_.ref=zo(d,null,v),_.return=d,_;case Vs:return v=cf(v,d.mode,_),v.return=d,v;case gr:var S=v._init;return u(d,S(v._payload),_)}if(Jo(v)||Fo(v))return v=us(v,d.mode,_,null),v.return=d,v;yl(d,v)}return null}function h(d,v,_,S){var E=v!==null?v.key:null;if(typeof _=="string"&&_!==""||typeof _=="number")return E!==null?null:a(d,v,""+_,S);if(typeof _=="object"&&_!==null){switch(_.$$typeof){case cl:return _.key===E?l(d,v,_,S):null;case Vs:return _.key===E?c(d,v,_,S):null;case gr:return E=_._init,h(d,v,E(_._payload),S)}if(Jo(_)||Fo(_))return E!==null?null:f(d,v,_,S,null);yl(d,_)}return null}function p(d,v,_,S,E){if(typeof S=="string"&&S!==""||typeof S=="number")return d=d.get(_)||null,a(v,d,""+S,E);if(typeof S=="object"&&S!==null){switch(S.$$typeof){case cl:return d=d.get(S.key===null?_:S.key)||null,l(v,d,S,E);case Vs:return d=d.get(S.key===null?_:S.key)||null,c(v,d,S,E);case gr:var A=S._init;return p(d,v,_,A(S._payload),E)}if(Jo(S)||Fo(S))return d=d.get(_)||null,f(v,d,S,E,null);yl(v,S)}return null}function g(d,v,_,S){for(var E=null,A=null,b=v,R=v=0,M=null;b!==null&&R<_.length;R++){b.index>R?(M=b,b=null):M=b.sibling;var T=h(d,b,_[R],S);if(T===null){b===null&&(b=M);break}t&&b&&T.alternate===null&&e(d,b),v=s(T,v,R),A===null?E=T:A.sibling=T,A=T,b=M}if(R===_.length)return n(d,b),Mt&&Kr(d,R),E;if(b===null){for(;R<_.length;R++)b=u(d,_[R],S),b!==null&&(v=s(b,v,R),A===null?E=b:A.sibling=b,A=b);return Mt&&Kr(d,R),E}for(b=i(d,b);R<_.length;R++)M=p(b,d,R,_[R],S),M!==null&&(t&&M.alternate!==null&&b.delete(M.key===null?R:M.key),v=s(M,v,R),A===null?E=M:A.sibling=M,A=M);return t&&b.forEach(function(L){return e(d,L)}),Mt&&Kr(d,R),E}function x(d,v,_,S){var E=Fo(_);if(typeof E!="function")throw Error(se(150));if(_=E.call(_),_==null)throw Error(se(151));for(var A=E=null,b=v,R=v=0,M=null,T=_.next();b!==null&&!T.done;R++,T=_.next()){b.index>R?(M=b,b=null):M=b.sibling;var L=h(d,b,T.value,S);if(L===null){b===null&&(b=M);break}t&&b&&L.alternate===null&&e(d,b),v=s(L,v,R),A===null?E=L:A.sibling=L,A=L,b=M}if(T.done)return n(d,b),Mt&&Kr(d,R),E;if(b===null){for(;!T.done;R++,T=_.next())T=u(d,T.value,S),T!==null&&(v=s(T,v,R),A===null?E=T:A.sibling=T,A=T);return Mt&&Kr(d,R),E}for(b=i(d,b);!T.done;R++,T=_.next())T=p(b,d,R,T.value,S),T!==null&&(t&&T.alternate!==null&&b.delete(T.key===null?R:T.key),v=s(T,v,R),A===null?E=T:A.sibling=T,A=T);return t&&b.forEach(function(H){return e(d,H)}),Mt&&Kr(d,R),E}function m(d,v,_,S){if(typeof _=="object"&&_!==null&&_.type===zs&&_.key===null&&(_=_.props.children),typeof _=="object"&&_!==null){switch(_.$$typeof){case cl:e:{for(var E=_.key,A=v;A!==null;){if(A.key===E){if(E=_.type,E===zs){if(A.tag===7){n(d,A.sibling),v=r(A,_.props.children),v.return=d,d=v;break e}}else if(A.elementType===E||typeof E=="object"&&E!==null&&E.$$typeof===gr&&jg(E)===A.type){n(d,A.sibling),v=r(A,_.props),v.ref=zo(d,A,_),v.return=d,d=v;break e}n(d,A);break}else e(d,A);A=A.sibling}_.type===zs?(v=us(_.props.children,d.mode,S,_.key),v.return=d,d=v):(S=hc(_.type,_.key,_.props,null,d.mode,S),S.ref=zo(d,v,_),S.return=d,d=S)}return o(d);case Vs:e:{for(A=_.key;v!==null;){if(v.key===A)if(v.tag===4&&v.stateNode.containerInfo===_.containerInfo&&v.stateNode.implementation===_.implementation){n(d,v.sibling),v=r(v,_.children||[]),v.return=d,d=v;break e}else{n(d,v);break}else e(d,v);v=v.sibling}v=cf(_,d.mode,S),v.return=d,d=v}return o(d);case gr:return A=_._init,m(d,v,A(_._payload),S)}if(Jo(_))return g(d,v,_,S);if(Fo(_))return x(d,v,_,S);yl(d,_)}return typeof _=="string"&&_!==""||typeof _=="number"?(_=""+_,v!==null&&v.tag===6?(n(d,v.sibling),v=r(v,_),v.return=d,d=v):(n(d,v),v=lf(_,d.mode,S),v.return=d,d=v),o(d)):n(d,v)}return m}var go=ty(!0),ny=ty(!1),Bc=kr(null),Vc=null,qs=null,Wp=null;function jp(){Wp=qs=Vc=null}function Xp(t){var e=Bc.current;St(Bc),t._currentValue=e}function Fd(t,e,n){for(;t!==null;){var i=t.alternate;if((t.childLanes&e)!==e?(t.childLanes|=e,i!==null&&(i.childLanes|=e)):i!==null&&(i.childLanes&e)!==e&&(i.childLanes|=e),t===n)break;t=t.return}}function ao(t,e){Vc=t,Wp=qs=null,t=t.dependencies,t!==null&&t.firstContext!==null&&(t.lanes&e&&(Tn=!0),t.firstContext=null)}function Qn(t){var e=t._currentValue;if(Wp!==t)if(t={context:t,memoizedValue:e,next:null},qs===null){if(Vc===null)throw Error(se(308));qs=t,Vc.dependencies={lanes:0,firstContext:t}}else qs=qs.next=t;return e}var is=null;function Yp(t){is===null?is=[t]:is.push(t)}function iy(t,e,n,i){var r=e.interleaved;return r===null?(n.next=n,Yp(e)):(n.next=r.next,r.next=n),e.interleaved=n,Ji(t,i)}function Ji(t,e){t.lanes|=e;var n=t.alternate;for(n!==null&&(n.lanes|=e),n=t,t=t.return;t!==null;)t.childLanes|=e,n=t.alternate,n!==null&&(n.childLanes|=e),n=t,t=t.return;return n.tag===3?n.stateNode:null}var vr=!1;function $p(t){t.updateQueue={baseState:t.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function ry(t,e){t=t.updateQueue,e.updateQueue===t&&(e.updateQueue={baseState:t.baseState,firstBaseUpdate:t.firstBaseUpdate,lastBaseUpdate:t.lastBaseUpdate,shared:t.shared,effects:t.effects})}function Yi(t,e){return{eventTime:t,lane:e,tag:0,payload:null,callback:null,next:null}}function Rr(t,e,n){var i=t.updateQueue;if(i===null)return null;if(i=i.shared,Je&2){var r=i.pending;return r===null?e.next=e:(e.next=r.next,r.next=e),i.pending=e,Ji(t,n)}return r=i.interleaved,r===null?(e.next=e,Yp(i)):(e.next=r.next,r.next=e),i.interleaved=e,Ji(t,n)}function ac(t,e,n){if(e=e.updateQueue,e!==null&&(e=e.shared,(n&4194240)!==0)){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ip(t,n)}}function Xg(t,e){var n=t.updateQueue,i=t.alternate;if(i!==null&&(i=i.updateQueue,n===i)){var r=null,s=null;if(n=n.firstBaseUpdate,n!==null){do{var o={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};s===null?r=s=o:s=s.next=o,n=n.next}while(n!==null);s===null?r=s=e:s=s.next=e}else r=s=e;n={baseState:i.baseState,firstBaseUpdate:r,lastBaseUpdate:s,shared:i.shared,effects:i.effects},t.updateQueue=n;return}t=n.lastBaseUpdate,t===null?n.firstBaseUpdate=e:t.next=e,n.lastBaseUpdate=e}function zc(t,e,n,i){var r=t.updateQueue;vr=!1;var s=r.firstBaseUpdate,o=r.lastBaseUpdate,a=r.shared.pending;if(a!==null){r.shared.pending=null;var l=a,c=l.next;l.next=null,o===null?s=c:o.next=c,o=l;var f=t.alternate;f!==null&&(f=f.updateQueue,a=f.lastBaseUpdate,a!==o&&(a===null?f.firstBaseUpdate=c:a.next=c,f.lastBaseUpdate=l))}if(s!==null){var u=r.baseState;o=0,f=c=l=null,a=s;do{var h=a.lane,p=a.eventTime;if((i&h)===h){f!==null&&(f=f.next={eventTime:p,lane:0,tag:a.tag,payload:a.payload,callback:a.callback,next:null});e:{var g=t,x=a;switch(h=e,p=n,x.tag){case 1:if(g=x.payload,typeof g=="function"){u=g.call(p,u,h);break e}u=g;break e;case 3:g.flags=g.flags&-65537|128;case 0:if(g=x.payload,h=typeof g=="function"?g.call(p,u,h):g,h==null)break e;u=At({},u,h);break e;case 2:vr=!0}}a.callback!==null&&a.lane!==0&&(t.flags|=64,h=r.effects,h===null?r.effects=[a]:h.push(a))}else p={eventTime:p,lane:h,tag:a.tag,payload:a.payload,callback:a.callback,next:null},f===null?(c=f=p,l=u):f=f.next=p,o|=h;if(a=a.next,a===null){if(a=r.shared.pending,a===null)break;h=a,a=h.next,h.next=null,r.lastBaseUpdate=h,r.shared.pending=null}}while(!0);if(f===null&&(l=u),r.baseState=l,r.firstBaseUpdate=c,r.lastBaseUpdate=f,e=r.shared.interleaved,e!==null){r=e;do o|=r.lane,r=r.next;while(r!==e)}else s===null&&(r.shared.lanes=0);ms|=o,t.lanes=o,t.memoizedState=u}}function Yg(t,e,n){if(t=e.effects,e.effects=null,t!==null)for(e=0;e<t.length;e++){var i=t[e],r=i.callback;if(r!==null){if(i.callback=null,i=n,typeof r!="function")throw Error(se(191,r));r.call(i)}}}var qa={},Pi=kr(qa),Pa=kr(qa),Da=kr(qa);function rs(t){if(t===qa)throw Error(se(174));return t}function qp(t,e){switch(_t(Da,e),_t(Pa,t),_t(Pi,qa),t=e.nodeType,t){case 9:case 11:e=(e=e.documentElement)?e.namespaceURI:gd(null,"");break;default:t=t===8?e.parentNode:e,e=t.namespaceURI||null,t=t.tagName,e=gd(e,t)}St(Pi),_t(Pi,e)}function vo(){St(Pi),St(Pa),St(Da)}function sy(t){rs(Da.current);var e=rs(Pi.current),n=gd(e,t.type);e!==n&&(_t(Pa,t),_t(Pi,n))}function Kp(t){Pa.current===t&&(St(Pi),St(Pa))}var Et=kr(0);function Hc(t){for(var e=t;e!==null;){if(e.tag===13){var n=e.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return e}else if(e.tag===19&&e.memoizedProps.revealOrder!==void 0){if(e.flags&128)return e}else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return null;e=e.return}e.sibling.return=e.return,e=e.sibling}return null}var tf=[];function Zp(){for(var t=0;t<tf.length;t++)tf[t]._workInProgressVersionPrimary=null;tf.length=0}var lc=or.ReactCurrentDispatcher,nf=or.ReactCurrentBatchConfig,ps=0,wt=null,Bt=null,jt=null,Gc=!1,ua=!1,La=0,RT=0;function Jt(){throw Error(se(321))}function Qp(t,e){if(e===null)return!1;for(var n=0;n<e.length&&n<t.length;n++)if(!gi(t[n],e[n]))return!1;return!0}function Jp(t,e,n,i,r,s){if(ps=s,wt=e,e.memoizedState=null,e.updateQueue=null,e.lanes=0,lc.current=t===null||t.memoizedState===null?IT:NT,t=n(i,r),ua){s=0;do{if(ua=!1,La=0,25<=s)throw Error(se(301));s+=1,jt=Bt=null,e.updateQueue=null,lc.current=UT,t=n(i,r)}while(ua)}if(lc.current=Wc,e=Bt!==null&&Bt.next!==null,ps=0,jt=Bt=wt=null,Gc=!1,e)throw Error(se(300));return t}function em(){var t=La!==0;return La=0,t}function Ei(){var t={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return jt===null?wt.memoizedState=jt=t:jt=jt.next=t,jt}function Jn(){if(Bt===null){var t=wt.alternate;t=t!==null?t.memoizedState:null}else t=Bt.next;var e=jt===null?wt.memoizedState:jt.next;if(e!==null)jt=e,Bt=t;else{if(t===null)throw Error(se(310));Bt=t,t={memoizedState:Bt.memoizedState,baseState:Bt.baseState,baseQueue:Bt.baseQueue,queue:Bt.queue,next:null},jt===null?wt.memoizedState=jt=t:jt=jt.next=t}return jt}function Ia(t,e){return typeof e=="function"?e(t):e}function rf(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=Bt,r=i.baseQueue,s=n.pending;if(s!==null){if(r!==null){var o=r.next;r.next=s.next,s.next=o}i.baseQueue=r=s,n.pending=null}if(r!==null){s=r.next,i=i.baseState;var a=o=null,l=null,c=s;do{var f=c.lane;if((ps&f)===f)l!==null&&(l=l.next={lane:0,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null}),i=c.hasEagerState?c.eagerState:t(i,c.action);else{var u={lane:f,action:c.action,hasEagerState:c.hasEagerState,eagerState:c.eagerState,next:null};l===null?(a=l=u,o=i):l=l.next=u,wt.lanes|=f,ms|=f}c=c.next}while(c!==null&&c!==s);l===null?o=i:l.next=a,gi(i,e.memoizedState)||(Tn=!0),e.memoizedState=i,e.baseState=o,e.baseQueue=l,n.lastRenderedState=i}if(t=n.interleaved,t!==null){r=t;do s=r.lane,wt.lanes|=s,ms|=s,r=r.next;while(r!==t)}else r===null&&(n.lanes=0);return[e.memoizedState,n.dispatch]}function sf(t){var e=Jn(),n=e.queue;if(n===null)throw Error(se(311));n.lastRenderedReducer=t;var i=n.dispatch,r=n.pending,s=e.memoizedState;if(r!==null){n.pending=null;var o=r=r.next;do s=t(s,o.action),o=o.next;while(o!==r);gi(s,e.memoizedState)||(Tn=!0),e.memoizedState=s,e.baseQueue===null&&(e.baseState=s),n.lastRenderedState=s}return[s,i]}function oy(){}function ay(t,e){var n=wt,i=Jn(),r=e(),s=!gi(i.memoizedState,r);if(s&&(i.memoizedState=r,Tn=!0),i=i.queue,tm(uy.bind(null,n,i,t),[t]),i.getSnapshot!==e||s||jt!==null&&jt.memoizedState.tag&1){if(n.flags|=2048,Na(9,cy.bind(null,n,i,r,e),void 0,null),Yt===null)throw Error(se(349));ps&30||ly(n,e,r)}return r}function ly(t,e,n){t.flags|=16384,t={getSnapshot:e,value:n},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.stores=[t]):(n=e.stores,n===null?e.stores=[t]:n.push(t))}function cy(t,e,n,i){e.value=n,e.getSnapshot=i,fy(e)&&dy(t)}function uy(t,e,n){return n(function(){fy(e)&&dy(t)})}function fy(t){var e=t.getSnapshot;t=t.value;try{var n=e();return!gi(t,n)}catch{return!0}}function dy(t){var e=Ji(t,1);e!==null&&pi(e,t,1,-1)}function $g(t){var e=Ei();return typeof t=="function"&&(t=t()),e.memoizedState=e.baseState=t,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Ia,lastRenderedState:t},e.queue=t,t=t.dispatch=LT.bind(null,wt,t),[e.memoizedState,t]}function Na(t,e,n,i){return t={tag:t,create:e,destroy:n,deps:i,next:null},e=wt.updateQueue,e===null?(e={lastEffect:null,stores:null},wt.updateQueue=e,e.lastEffect=t.next=t):(n=e.lastEffect,n===null?e.lastEffect=t.next=t:(i=n.next,n.next=t,t.next=i,e.lastEffect=t)),t}function hy(){return Jn().memoizedState}function cc(t,e,n,i){var r=Ei();wt.flags|=t,r.memoizedState=Na(1|e,n,void 0,i===void 0?null:i)}function pu(t,e,n,i){var r=Jn();i=i===void 0?null:i;var s=void 0;if(Bt!==null){var o=Bt.memoizedState;if(s=o.destroy,i!==null&&Qp(i,o.deps)){r.memoizedState=Na(e,n,s,i);return}}wt.flags|=t,r.memoizedState=Na(1|e,n,s,i)}function qg(t,e){return cc(8390656,8,t,e)}function tm(t,e){return pu(2048,8,t,e)}function py(t,e){return pu(4,2,t,e)}function my(t,e){return pu(4,4,t,e)}function gy(t,e){if(typeof e=="function")return t=t(),e(t),function(){e(null)};if(e!=null)return t=t(),e.current=t,function(){e.current=null}}function vy(t,e,n){return n=n!=null?n.concat([t]):null,pu(4,4,gy.bind(null,e,t),n)}function nm(){}function _y(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qp(e,i[1])?i[0]:(n.memoizedState=[t,e],t)}function xy(t,e){var n=Jn();e=e===void 0?null:e;var i=n.memoizedState;return i!==null&&e!==null&&Qp(e,i[1])?i[0]:(t=t(),n.memoizedState=[t,e],t)}function yy(t,e,n){return ps&21?(gi(n,e)||(n=wx(),wt.lanes|=n,ms|=n,t.baseState=!0),e):(t.baseState&&(t.baseState=!1,Tn=!0),t.memoizedState=n)}function PT(t,e){var n=ut;ut=n!==0&&4>n?n:4,t(!0);var i=nf.transition;nf.transition={};try{t(!1),e()}finally{ut=n,nf.transition=i}}function Sy(){return Jn().memoizedState}function DT(t,e,n){var i=Dr(t);if(n={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null},My(t))Ey(e,n);else if(n=iy(t,e,n,i),n!==null){var r=pn();pi(n,t,i,r),Ty(n,e,i)}}function LT(t,e,n){var i=Dr(t),r={lane:i,action:n,hasEagerState:!1,eagerState:null,next:null};if(My(t))Ey(e,r);else{var s=t.alternate;if(t.lanes===0&&(s===null||s.lanes===0)&&(s=e.lastRenderedReducer,s!==null))try{var o=e.lastRenderedState,a=s(o,n);if(r.hasEagerState=!0,r.eagerState=a,gi(a,o)){var l=e.interleaved;l===null?(r.next=r,Yp(e)):(r.next=l.next,l.next=r),e.interleaved=r;return}}catch{}finally{}n=iy(t,e,r,i),n!==null&&(r=pn(),pi(n,t,i,r),Ty(n,e,i))}}function My(t){var e=t.alternate;return t===wt||e!==null&&e===wt}function Ey(t,e){ua=Gc=!0;var n=t.pending;n===null?e.next=e:(e.next=n.next,n.next=e),t.pending=e}function Ty(t,e,n){if(n&4194240){var i=e.lanes;i&=t.pendingLanes,n|=i,e.lanes=n,Ip(t,n)}}var Wc={readContext:Qn,useCallback:Jt,useContext:Jt,useEffect:Jt,useImperativeHandle:Jt,useInsertionEffect:Jt,useLayoutEffect:Jt,useMemo:Jt,useReducer:Jt,useRef:Jt,useState:Jt,useDebugValue:Jt,useDeferredValue:Jt,useTransition:Jt,useMutableSource:Jt,useSyncExternalStore:Jt,useId:Jt,unstable_isNewReconciler:!1},IT={readContext:Qn,useCallback:function(t,e){return Ei().memoizedState=[t,e===void 0?null:e],t},useContext:Qn,useEffect:qg,useImperativeHandle:function(t,e,n){return n=n!=null?n.concat([t]):null,cc(4194308,4,gy.bind(null,e,t),n)},useLayoutEffect:function(t,e){return cc(4194308,4,t,e)},useInsertionEffect:function(t,e){return cc(4,2,t,e)},useMemo:function(t,e){var n=Ei();return e=e===void 0?null:e,t=t(),n.memoizedState=[t,e],t},useReducer:function(t,e,n){var i=Ei();return e=n!==void 0?n(e):e,i.memoizedState=i.baseState=e,t={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:t,lastRenderedState:e},i.queue=t,t=t.dispatch=DT.bind(null,wt,t),[i.memoizedState,t]},useRef:function(t){var e=Ei();return t={current:t},e.memoizedState=t},useState:$g,useDebugValue:nm,useDeferredValue:function(t){return Ei().memoizedState=t},useTransition:function(){var t=$g(!1),e=t[0];return t=PT.bind(null,t[1]),Ei().memoizedState=t,[e,t]},useMutableSource:function(){},useSyncExternalStore:function(t,e,n){var i=wt,r=Ei();if(Mt){if(n===void 0)throw Error(se(407));n=n()}else{if(n=e(),Yt===null)throw Error(se(349));ps&30||ly(i,e,n)}r.memoizedState=n;var s={value:n,getSnapshot:e};return r.queue=s,qg(uy.bind(null,i,s,t),[t]),i.flags|=2048,Na(9,cy.bind(null,i,s,n,e),void 0,null),n},useId:function(){var t=Ei(),e=Yt.identifierPrefix;if(Mt){var n=ji,i=Wi;n=(i&~(1<<32-hi(i)-1)).toString(32)+n,e=":"+e+"R"+n,n=La++,0<n&&(e+="H"+n.toString(32)),e+=":"}else n=RT++,e=":"+e+"r"+n.toString(32)+":";return t.memoizedState=e},unstable_isNewReconciler:!1},NT={readContext:Qn,useCallback:_y,useContext:Qn,useEffect:tm,useImperativeHandle:vy,useInsertionEffect:py,useLayoutEffect:my,useMemo:xy,useReducer:rf,useRef:hy,useState:function(){return rf(Ia)},useDebugValue:nm,useDeferredValue:function(t){var e=Jn();return yy(e,Bt.memoizedState,t)},useTransition:function(){var t=rf(Ia)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:Sy,unstable_isNewReconciler:!1},UT={readContext:Qn,useCallback:_y,useContext:Qn,useEffect:tm,useImperativeHandle:vy,useInsertionEffect:py,useLayoutEffect:my,useMemo:xy,useReducer:sf,useRef:hy,useState:function(){return sf(Ia)},useDebugValue:nm,useDeferredValue:function(t){var e=Jn();return Bt===null?e.memoizedState=t:yy(e,Bt.memoizedState,t)},useTransition:function(){var t=sf(Ia)[0],e=Jn().memoizedState;return[t,e]},useMutableSource:oy,useSyncExternalStore:ay,useId:Sy,unstable_isNewReconciler:!1};function ai(t,e){if(t&&t.defaultProps){e=At({},e),t=t.defaultProps;for(var n in t)e[n]===void 0&&(e[n]=t[n]);return e}return e}function Od(t,e,n,i){e=t.memoizedState,n=n(i,e),n=n==null?e:At({},e,n),t.memoizedState=n,t.lanes===0&&(t.updateQueue.baseState=n)}var mu={isMounted:function(t){return(t=t._reactInternals)?xs(t)===t:!1},enqueueSetState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Dr(t),s=Yi(i,r);s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(pi(e,t,r,i),ac(e,t,r))},enqueueReplaceState:function(t,e,n){t=t._reactInternals;var i=pn(),r=Dr(t),s=Yi(i,r);s.tag=1,s.payload=e,n!=null&&(s.callback=n),e=Rr(t,s,r),e!==null&&(pi(e,t,r,i),ac(e,t,r))},enqueueForceUpdate:function(t,e){t=t._reactInternals;var n=pn(),i=Dr(t),r=Yi(n,i);r.tag=2,e!=null&&(r.callback=e),e=Rr(t,r,i),e!==null&&(pi(e,t,i,n),ac(e,t,i))}};function Kg(t,e,n,i,r,s,o){return t=t.stateNode,typeof t.shouldComponentUpdate=="function"?t.shouldComponentUpdate(i,s,o):e.prototype&&e.prototype.isPureReactComponent?!Aa(n,i)||!Aa(r,s):!0}function wy(t,e,n){var i=!1,r=Nr,s=e.contextType;return typeof s=="object"&&s!==null?s=Qn(s):(r=bn(e)?ds:on.current,i=e.contextTypes,s=(i=i!=null)?po(t,r):Nr),e=new e(n,s),t.memoizedState=e.state!==null&&e.state!==void 0?e.state:null,e.updater=mu,t.stateNode=e,e._reactInternals=t,i&&(t=t.stateNode,t.__reactInternalMemoizedUnmaskedChildContext=r,t.__reactInternalMemoizedMaskedChildContext=s),e}function Zg(t,e,n,i){t=e.state,typeof e.componentWillReceiveProps=="function"&&e.componentWillReceiveProps(n,i),typeof e.UNSAFE_componentWillReceiveProps=="function"&&e.UNSAFE_componentWillReceiveProps(n,i),e.state!==t&&mu.enqueueReplaceState(e,e.state,null)}function kd(t,e,n,i){var r=t.stateNode;r.props=n,r.state=t.memoizedState,r.refs={},$p(t);var s=e.contextType;typeof s=="object"&&s!==null?r.context=Qn(s):(s=bn(e)?ds:on.current,r.context=po(t,s)),r.state=t.memoizedState,s=e.getDerivedStateFromProps,typeof s=="function"&&(Od(t,e,s,n),r.state=t.memoizedState),typeof e.getDerivedStateFromProps=="function"||typeof r.getSnapshotBeforeUpdate=="function"||typeof r.UNSAFE_componentWillMount!="function"&&typeof r.componentWillMount!="function"||(e=r.state,typeof r.componentWillMount=="function"&&r.componentWillMount(),typeof r.UNSAFE_componentWillMount=="function"&&r.UNSAFE_componentWillMount(),e!==r.state&&mu.enqueueReplaceState(r,r.state,null),zc(t,n,r,i),r.state=t.memoizedState),typeof r.componentDidMount=="function"&&(t.flags|=4194308)}function _o(t,e){try{var n="",i=e;do n+=c1(i),i=i.return;while(i);var r=n}catch(s){r=`
Error generating stack: `+s.message+`
`+s.stack}return{value:t,source:e,stack:r,digest:null}}function of(t,e,n){return{value:t,source:null,stack:n??null,digest:e??null}}function Bd(t,e){try{console.error(e.value)}catch(n){setTimeout(function(){throw n})}}var FT=typeof WeakMap=="function"?WeakMap:Map;function Ay(t,e,n){n=Yi(-1,n),n.tag=3,n.payload={element:null};var i=e.value;return n.callback=function(){Xc||(Xc=!0,qd=i),Bd(t,e)},n}function by(t,e,n){n=Yi(-1,n),n.tag=3;var i=t.type.getDerivedStateFromError;if(typeof i=="function"){var r=e.value;n.payload=function(){return i(r)},n.callback=function(){Bd(t,e)}}var s=t.stateNode;return s!==null&&typeof s.componentDidCatch=="function"&&(n.callback=function(){Bd(t,e),typeof i!="function"&&(Pr===null?Pr=new Set([this]):Pr.add(this));var o=e.stack;this.componentDidCatch(e.value,{componentStack:o!==null?o:""})}),n}function Qg(t,e,n){var i=t.pingCache;if(i===null){i=t.pingCache=new FT;var r=new Set;i.set(e,r)}else r=i.get(e),r===void 0&&(r=new Set,i.set(e,r));r.has(n)||(r.add(n),t=KT.bind(null,t,e,n),e.then(t,t))}function Jg(t){do{var e;if((e=t.tag===13)&&(e=t.memoizedState,e=e!==null?e.dehydrated!==null:!0),e)return t;t=t.return}while(t!==null);return null}function e0(t,e,n,i,r){return t.mode&1?(t.flags|=65536,t.lanes=r,t):(t===e?t.flags|=65536:(t.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(e=Yi(-1,1),e.tag=2,Rr(n,e,1))),n.lanes|=1),t)}var OT=or.ReactCurrentOwner,Tn=!1;function fn(t,e,n,i){e.child=t===null?ny(e,null,n,i):go(e,t.child,n,i)}function t0(t,e,n,i,r){n=n.render;var s=e.ref;return ao(e,r),i=Jp(t,e,n,i,s,r),n=em(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(Mt&&n&&zp(e),e.flags|=1,fn(t,e,i,r),e.child)}function n0(t,e,n,i,r){if(t===null){var s=n.type;return typeof s=="function"&&!um(s)&&s.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(e.tag=15,e.type=s,Cy(t,e,s,i,r)):(t=hc(n.type,null,i,e,e.mode,r),t.ref=e.ref,t.return=e,e.child=t)}if(s=t.child,!(t.lanes&r)){var o=s.memoizedProps;if(n=n.compare,n=n!==null?n:Aa,n(o,i)&&t.ref===e.ref)return er(t,e,r)}return e.flags|=1,t=Lr(s,i),t.ref=e.ref,t.return=e,e.child=t}function Cy(t,e,n,i,r){if(t!==null){var s=t.memoizedProps;if(Aa(s,i)&&t.ref===e.ref)if(Tn=!1,e.pendingProps=i=s,(t.lanes&r)!==0)t.flags&131072&&(Tn=!0);else return e.lanes=t.lanes,er(t,e,r)}return Vd(t,e,n,i,r)}function Ry(t,e,n){var i=e.pendingProps,r=i.children,s=t!==null?t.memoizedState:null;if(i.mode==="hidden")if(!(e.mode&1))e.memoizedState={baseLanes:0,cachePool:null,transitions:null},_t(Zs,Fn),Fn|=n;else{if(!(n&1073741824))return t=s!==null?s.baseLanes|n:n,e.lanes=e.childLanes=1073741824,e.memoizedState={baseLanes:t,cachePool:null,transitions:null},e.updateQueue=null,_t(Zs,Fn),Fn|=t,null;e.memoizedState={baseLanes:0,cachePool:null,transitions:null},i=s!==null?s.baseLanes:n,_t(Zs,Fn),Fn|=i}else s!==null?(i=s.baseLanes|n,e.memoizedState=null):i=n,_t(Zs,Fn),Fn|=i;return fn(t,e,r,n),e.child}function Py(t,e){var n=e.ref;(t===null&&n!==null||t!==null&&t.ref!==n)&&(e.flags|=512,e.flags|=2097152)}function Vd(t,e,n,i,r){var s=bn(n)?ds:on.current;return s=po(e,s),ao(e,r),n=Jp(t,e,n,i,s,r),i=em(),t!==null&&!Tn?(e.updateQueue=t.updateQueue,e.flags&=-2053,t.lanes&=~r,er(t,e,r)):(Mt&&i&&zp(e),e.flags|=1,fn(t,e,n,r),e.child)}function i0(t,e,n,i,r){if(bn(n)){var s=!0;Fc(e)}else s=!1;if(ao(e,r),e.stateNode===null)uc(t,e),wy(e,n,i),kd(e,n,i,r),i=!0;else if(t===null){var o=e.stateNode,a=e.memoizedProps;o.props=a;var l=o.context,c=n.contextType;typeof c=="object"&&c!==null?c=Qn(c):(c=bn(n)?ds:on.current,c=po(e,c));var f=n.getDerivedStateFromProps,u=typeof f=="function"||typeof o.getSnapshotBeforeUpdate=="function";u||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==i||l!==c)&&Zg(e,o,i,c),vr=!1;var h=e.memoizedState;o.state=h,zc(e,i,o,r),l=e.memoizedState,a!==i||h!==l||An.current||vr?(typeof f=="function"&&(Od(e,n,f,i),l=e.memoizedState),(a=vr||Kg(e,n,a,i,h,l,c))?(u||typeof o.UNSAFE_componentWillMount!="function"&&typeof o.componentWillMount!="function"||(typeof o.componentWillMount=="function"&&o.componentWillMount(),typeof o.UNSAFE_componentWillMount=="function"&&o.UNSAFE_componentWillMount()),typeof o.componentDidMount=="function"&&(e.flags|=4194308)):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),e.memoizedProps=i,e.memoizedState=l),o.props=i,o.state=l,o.context=c,i=a):(typeof o.componentDidMount=="function"&&(e.flags|=4194308),i=!1)}else{o=e.stateNode,ry(t,e),a=e.memoizedProps,c=e.type===e.elementType?a:ai(e.type,a),o.props=c,u=e.pendingProps,h=o.context,l=n.contextType,typeof l=="object"&&l!==null?l=Qn(l):(l=bn(n)?ds:on.current,l=po(e,l));var p=n.getDerivedStateFromProps;(f=typeof p=="function"||typeof o.getSnapshotBeforeUpdate=="function")||typeof o.UNSAFE_componentWillReceiveProps!="function"&&typeof o.componentWillReceiveProps!="function"||(a!==u||h!==l)&&Zg(e,o,i,l),vr=!1,h=e.memoizedState,o.state=h,zc(e,i,o,r);var g=e.memoizedState;a!==u||h!==g||An.current||vr?(typeof p=="function"&&(Od(e,n,p,i),g=e.memoizedState),(c=vr||Kg(e,n,c,i,h,g,l)||!1)?(f||typeof o.UNSAFE_componentWillUpdate!="function"&&typeof o.componentWillUpdate!="function"||(typeof o.componentWillUpdate=="function"&&o.componentWillUpdate(i,g,l),typeof o.UNSAFE_componentWillUpdate=="function"&&o.UNSAFE_componentWillUpdate(i,g,l)),typeof o.componentDidUpdate=="function"&&(e.flags|=4),typeof o.getSnapshotBeforeUpdate=="function"&&(e.flags|=1024)):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),e.memoizedProps=i,e.memoizedState=g),o.props=i,o.state=g,o.context=l,i=c):(typeof o.componentDidUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=4),typeof o.getSnapshotBeforeUpdate!="function"||a===t.memoizedProps&&h===t.memoizedState||(e.flags|=1024),i=!1)}return zd(t,e,n,i,s,r)}function zd(t,e,n,i,r,s){Py(t,e);var o=(e.flags&128)!==0;if(!i&&!o)return r&&Hg(e,n,!1),er(t,e,s);i=e.stateNode,OT.current=e;var a=o&&typeof n.getDerivedStateFromError!="function"?null:i.render();return e.flags|=1,t!==null&&o?(e.child=go(e,t.child,null,s),e.child=go(e,null,a,s)):fn(t,e,a,s),e.memoizedState=i.state,r&&Hg(e,n,!0),e.child}function Dy(t){var e=t.stateNode;e.pendingContext?zg(t,e.pendingContext,e.pendingContext!==e.context):e.context&&zg(t,e.context,!1),qp(t,e.containerInfo)}function r0(t,e,n,i,r){return mo(),Gp(r),e.flags|=256,fn(t,e,n,i),e.child}var Hd={dehydrated:null,treeContext:null,retryLane:0};function Gd(t){return{baseLanes:t,cachePool:null,transitions:null}}function Ly(t,e,n){var i=e.pendingProps,r=Et.current,s=!1,o=(e.flags&128)!==0,a;if((a=o)||(a=t!==null&&t.memoizedState===null?!1:(r&2)!==0),a?(s=!0,e.flags&=-129):(t===null||t.memoizedState!==null)&&(r|=1),_t(Et,r&1),t===null)return Ud(e),t=e.memoizedState,t!==null&&(t=t.dehydrated,t!==null)?(e.mode&1?t.data==="$!"?e.lanes=8:e.lanes=1073741824:e.lanes=1,null):(o=i.children,t=i.fallback,s?(i=e.mode,s=e.child,o={mode:"hidden",children:o},!(i&1)&&s!==null?(s.childLanes=0,s.pendingProps=o):s=_u(o,i,0,null),t=us(t,i,n,null),s.return=e,t.return=e,s.sibling=t,e.child=s,e.child.memoizedState=Gd(n),e.memoizedState=Hd,t):im(e,o));if(r=t.memoizedState,r!==null&&(a=r.dehydrated,a!==null))return kT(t,e,o,i,a,r,n);if(s){s=i.fallback,o=e.mode,r=t.child,a=r.sibling;var l={mode:"hidden",children:i.children};return!(o&1)&&e.child!==r?(i=e.child,i.childLanes=0,i.pendingProps=l,e.deletions=null):(i=Lr(r,l),i.subtreeFlags=r.subtreeFlags&14680064),a!==null?s=Lr(a,s):(s=us(s,o,n,null),s.flags|=2),s.return=e,i.return=e,i.sibling=s,e.child=i,i=s,s=e.child,o=t.child.memoizedState,o=o===null?Gd(n):{baseLanes:o.baseLanes|n,cachePool:null,transitions:o.transitions},s.memoizedState=o,s.childLanes=t.childLanes&~n,e.memoizedState=Hd,i}return s=t.child,t=s.sibling,i=Lr(s,{mode:"visible",children:i.children}),!(e.mode&1)&&(i.lanes=n),i.return=e,i.sibling=null,t!==null&&(n=e.deletions,n===null?(e.deletions=[t],e.flags|=16):n.push(t)),e.child=i,e.memoizedState=null,i}function im(t,e){return e=_u({mode:"visible",children:e},t.mode,0,null),e.return=t,t.child=e}function Sl(t,e,n,i){return i!==null&&Gp(i),go(e,t.child,null,n),t=im(e,e.pendingProps.children),t.flags|=2,e.memoizedState=null,t}function kT(t,e,n,i,r,s,o){if(n)return e.flags&256?(e.flags&=-257,i=of(Error(se(422))),Sl(t,e,o,i)):e.memoizedState!==null?(e.child=t.child,e.flags|=128,null):(s=i.fallback,r=e.mode,i=_u({mode:"visible",children:i.children},r,0,null),s=us(s,r,o,null),s.flags|=2,i.return=e,s.return=e,i.sibling=s,e.child=i,e.mode&1&&go(e,t.child,null,o),e.child.memoizedState=Gd(o),e.memoizedState=Hd,s);if(!(e.mode&1))return Sl(t,e,o,null);if(r.data==="$!"){if(i=r.nextSibling&&r.nextSibling.dataset,i)var a=i.dgst;return i=a,s=Error(se(419)),i=of(s,i,void 0),Sl(t,e,o,i)}if(a=(o&t.childLanes)!==0,Tn||a){if(i=Yt,i!==null){switch(o&-o){case 4:r=2;break;case 16:r=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:r=32;break;case 536870912:r=268435456;break;default:r=0}r=r&(i.suspendedLanes|o)?0:r,r!==0&&r!==s.retryLane&&(s.retryLane=r,Ji(t,r),pi(i,t,r,-1))}return cm(),i=of(Error(se(421))),Sl(t,e,o,i)}return r.data==="$?"?(e.flags|=128,e.child=t.child,e=ZT.bind(null,t),r._reactRetry=e,null):(t=s.treeContext,On=Cr(r.nextSibling),kn=e,Mt=!0,ci=null,t!==null&&(jn[Xn++]=Wi,jn[Xn++]=ji,jn[Xn++]=hs,Wi=t.id,ji=t.overflow,hs=e),e=im(e,i.children),e.flags|=4096,e)}function s0(t,e,n){t.lanes|=e;var i=t.alternate;i!==null&&(i.lanes|=e),Fd(t.return,e,n)}function af(t,e,n,i,r){var s=t.memoizedState;s===null?t.memoizedState={isBackwards:e,rendering:null,renderingStartTime:0,last:i,tail:n,tailMode:r}:(s.isBackwards=e,s.rendering=null,s.renderingStartTime=0,s.last=i,s.tail=n,s.tailMode=r)}function Iy(t,e,n){var i=e.pendingProps,r=i.revealOrder,s=i.tail;if(fn(t,e,i.children,n),i=Et.current,i&2)i=i&1|2,e.flags|=128;else{if(t!==null&&t.flags&128)e:for(t=e.child;t!==null;){if(t.tag===13)t.memoizedState!==null&&s0(t,n,e);else if(t.tag===19)s0(t,n,e);else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break e;for(;t.sibling===null;){if(t.return===null||t.return===e)break e;t=t.return}t.sibling.return=t.return,t=t.sibling}i&=1}if(_t(Et,i),!(e.mode&1))e.memoizedState=null;else switch(r){case"forwards":for(n=e.child,r=null;n!==null;)t=n.alternate,t!==null&&Hc(t)===null&&(r=n),n=n.sibling;n=r,n===null?(r=e.child,e.child=null):(r=n.sibling,n.sibling=null),af(e,!1,r,n,s);break;case"backwards":for(n=null,r=e.child,e.child=null;r!==null;){if(t=r.alternate,t!==null&&Hc(t)===null){e.child=r;break}t=r.sibling,r.sibling=n,n=r,r=t}af(e,!0,n,null,s);break;case"together":af(e,!1,null,null,void 0);break;default:e.memoizedState=null}return e.child}function uc(t,e){!(e.mode&1)&&t!==null&&(t.alternate=null,e.alternate=null,e.flags|=2)}function er(t,e,n){if(t!==null&&(e.dependencies=t.dependencies),ms|=e.lanes,!(n&e.childLanes))return null;if(t!==null&&e.child!==t.child)throw Error(se(153));if(e.child!==null){for(t=e.child,n=Lr(t,t.pendingProps),e.child=n,n.return=e;t.sibling!==null;)t=t.sibling,n=n.sibling=Lr(t,t.pendingProps),n.return=e;n.sibling=null}return e.child}function BT(t,e,n){switch(e.tag){case 3:Dy(e),mo();break;case 5:sy(e);break;case 1:bn(e.type)&&Fc(e);break;case 4:qp(e,e.stateNode.containerInfo);break;case 10:var i=e.type._context,r=e.memoizedProps.value;_t(Bc,i._currentValue),i._currentValue=r;break;case 13:if(i=e.memoizedState,i!==null)return i.dehydrated!==null?(_t(Et,Et.current&1),e.flags|=128,null):n&e.child.childLanes?Ly(t,e,n):(_t(Et,Et.current&1),t=er(t,e,n),t!==null?t.sibling:null);_t(Et,Et.current&1);break;case 19:if(i=(n&e.childLanes)!==0,t.flags&128){if(i)return Iy(t,e,n);e.flags|=128}if(r=e.memoizedState,r!==null&&(r.rendering=null,r.tail=null,r.lastEffect=null),_t(Et,Et.current),i)break;return null;case 22:case 23:return e.lanes=0,Ry(t,e,n)}return er(t,e,n)}var Ny,Wd,Uy,Fy;Ny=function(t,e){for(var n=e.child;n!==null;){if(n.tag===5||n.tag===6)t.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===e)break;for(;n.sibling===null;){if(n.return===null||n.return===e)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};Wd=function(){};Uy=function(t,e,n,i){var r=t.memoizedProps;if(r!==i){t=e.stateNode,rs(Pi.current);var s=null;switch(n){case"input":r=dd(t,r),i=dd(t,i),s=[];break;case"select":r=At({},r,{value:void 0}),i=At({},i,{value:void 0}),s=[];break;case"textarea":r=md(t,r),i=md(t,i),s=[];break;default:typeof r.onClick!="function"&&typeof i.onClick=="function"&&(t.onclick=Nc)}vd(n,i);var o;n=null;for(c in r)if(!i.hasOwnProperty(c)&&r.hasOwnProperty(c)&&r[c]!=null)if(c==="style"){var a=r[c];for(o in a)a.hasOwnProperty(o)&&(n||(n={}),n[o]="")}else c!=="dangerouslySetInnerHTML"&&c!=="children"&&c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&c!=="autoFocus"&&(xa.hasOwnProperty(c)?s||(s=[]):(s=s||[]).push(c,null));for(c in i){var l=i[c];if(a=r!=null?r[c]:void 0,i.hasOwnProperty(c)&&l!==a&&(l!=null||a!=null))if(c==="style")if(a){for(o in a)!a.hasOwnProperty(o)||l&&l.hasOwnProperty(o)||(n||(n={}),n[o]="");for(o in l)l.hasOwnProperty(o)&&a[o]!==l[o]&&(n||(n={}),n[o]=l[o])}else n||(s||(s=[]),s.push(c,n)),n=l;else c==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,a=a?a.__html:void 0,l!=null&&a!==l&&(s=s||[]).push(c,l)):c==="children"?typeof l!="string"&&typeof l!="number"||(s=s||[]).push(c,""+l):c!=="suppressContentEditableWarning"&&c!=="suppressHydrationWarning"&&(xa.hasOwnProperty(c)?(l!=null&&c==="onScroll"&&yt("scroll",t),s||a===l||(s=[])):(s=s||[]).push(c,l))}n&&(s=s||[]).push("style",n);var c=s;(e.updateQueue=c)&&(e.flags|=4)}};Fy=function(t,e,n,i){n!==i&&(e.flags|=4)};function Ho(t,e){if(!Mt)switch(t.tailMode){case"hidden":e=t.tail;for(var n=null;e!==null;)e.alternate!==null&&(n=e),e=e.sibling;n===null?t.tail=null:n.sibling=null;break;case"collapsed":n=t.tail;for(var i=null;n!==null;)n.alternate!==null&&(i=n),n=n.sibling;i===null?e||t.tail===null?t.tail=null:t.tail.sibling=null:i.sibling=null}}function en(t){var e=t.alternate!==null&&t.alternate.child===t.child,n=0,i=0;if(e)for(var r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags&14680064,i|=r.flags&14680064,r.return=t,r=r.sibling;else for(r=t.child;r!==null;)n|=r.lanes|r.childLanes,i|=r.subtreeFlags,i|=r.flags,r.return=t,r=r.sibling;return t.subtreeFlags|=i,t.childLanes=n,e}function VT(t,e,n){var i=e.pendingProps;switch(Hp(e),e.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return en(e),null;case 1:return bn(e.type)&&Uc(),en(e),null;case 3:return i=e.stateNode,vo(),St(An),St(on),Zp(),i.pendingContext&&(i.context=i.pendingContext,i.pendingContext=null),(t===null||t.child===null)&&(xl(e)?e.flags|=4:t===null||t.memoizedState.isDehydrated&&!(e.flags&256)||(e.flags|=1024,ci!==null&&(Qd(ci),ci=null))),Wd(t,e),en(e),null;case 5:Kp(e);var r=rs(Da.current);if(n=e.type,t!==null&&e.stateNode!=null)Uy(t,e,n,i,r),t.ref!==e.ref&&(e.flags|=512,e.flags|=2097152);else{if(!i){if(e.stateNode===null)throw Error(se(166));return en(e),null}if(t=rs(Pi.current),xl(e)){i=e.stateNode,n=e.type;var s=e.memoizedProps;switch(i[Ai]=e,i[Ra]=s,t=(e.mode&1)!==0,n){case"dialog":yt("cancel",i),yt("close",i);break;case"iframe":case"object":case"embed":yt("load",i);break;case"video":case"audio":for(r=0;r<ta.length;r++)yt(ta[r],i);break;case"source":yt("error",i);break;case"img":case"image":case"link":yt("error",i),yt("load",i);break;case"details":yt("toggle",i);break;case"input":pg(i,s),yt("invalid",i);break;case"select":i._wrapperState={wasMultiple:!!s.multiple},yt("invalid",i);break;case"textarea":gg(i,s),yt("invalid",i)}vd(n,s),r=null;for(var o in s)if(s.hasOwnProperty(o)){var a=s[o];o==="children"?typeof a=="string"?i.textContent!==a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,t),r=["children",a]):typeof a=="number"&&i.textContent!==""+a&&(s.suppressHydrationWarning!==!0&&_l(i.textContent,a,t),r=["children",""+a]):xa.hasOwnProperty(o)&&a!=null&&o==="onScroll"&&yt("scroll",i)}switch(n){case"input":ul(i),mg(i,s,!0);break;case"textarea":ul(i),vg(i);break;case"select":case"option":break;default:typeof s.onClick=="function"&&(i.onclick=Nc)}i=r,e.updateQueue=i,i!==null&&(e.flags|=4)}else{o=r.nodeType===9?r:r.ownerDocument,t==="http://www.w3.org/1999/xhtml"&&(t=ux(n)),t==="http://www.w3.org/1999/xhtml"?n==="script"?(t=o.createElement("div"),t.innerHTML="<script><\/script>",t=t.removeChild(t.firstChild)):typeof i.is=="string"?t=o.createElement(n,{is:i.is}):(t=o.createElement(n),n==="select"&&(o=t,i.multiple?o.multiple=!0:i.size&&(o.size=i.size))):t=o.createElementNS(t,n),t[Ai]=e,t[Ra]=i,Ny(t,e,!1,!1),e.stateNode=t;e:{switch(o=_d(n,i),n){case"dialog":yt("cancel",t),yt("close",t),r=i;break;case"iframe":case"object":case"embed":yt("load",t),r=i;break;case"video":case"audio":for(r=0;r<ta.length;r++)yt(ta[r],t);r=i;break;case"source":yt("error",t),r=i;break;case"img":case"image":case"link":yt("error",t),yt("load",t),r=i;break;case"details":yt("toggle",t),r=i;break;case"input":pg(t,i),r=dd(t,i),yt("invalid",t);break;case"option":r=i;break;case"select":t._wrapperState={wasMultiple:!!i.multiple},r=At({},i,{value:void 0}),yt("invalid",t);break;case"textarea":gg(t,i),r=md(t,i),yt("invalid",t);break;default:r=i}vd(n,r),a=r;for(s in a)if(a.hasOwnProperty(s)){var l=a[s];s==="style"?hx(t,l):s==="dangerouslySetInnerHTML"?(l=l?l.__html:void 0,l!=null&&fx(t,l)):s==="children"?typeof l=="string"?(n!=="textarea"||l!=="")&&ya(t,l):typeof l=="number"&&ya(t,""+l):s!=="suppressContentEditableWarning"&&s!=="suppressHydrationWarning"&&s!=="autoFocus"&&(xa.hasOwnProperty(s)?l!=null&&s==="onScroll"&&yt("scroll",t):l!=null&&bp(t,s,l,o))}switch(n){case"input":ul(t),mg(t,i,!1);break;case"textarea":ul(t),vg(t);break;case"option":i.value!=null&&t.setAttribute("value",""+Ir(i.value));break;case"select":t.multiple=!!i.multiple,s=i.value,s!=null?io(t,!!i.multiple,s,!1):i.defaultValue!=null&&io(t,!!i.multiple,i.defaultValue,!0);break;default:typeof r.onClick=="function"&&(t.onclick=Nc)}switch(n){case"button":case"input":case"select":case"textarea":i=!!i.autoFocus;break e;case"img":i=!0;break e;default:i=!1}}i&&(e.flags|=4)}e.ref!==null&&(e.flags|=512,e.flags|=2097152)}return en(e),null;case 6:if(t&&e.stateNode!=null)Fy(t,e,t.memoizedProps,i);else{if(typeof i!="string"&&e.stateNode===null)throw Error(se(166));if(n=rs(Da.current),rs(Pi.current),xl(e)){if(i=e.stateNode,n=e.memoizedProps,i[Ai]=e,(s=i.nodeValue!==n)&&(t=kn,t!==null))switch(t.tag){case 3:_l(i.nodeValue,n,(t.mode&1)!==0);break;case 5:t.memoizedProps.suppressHydrationWarning!==!0&&_l(i.nodeValue,n,(t.mode&1)!==0)}s&&(e.flags|=4)}else i=(n.nodeType===9?n:n.ownerDocument).createTextNode(i),i[Ai]=e,e.stateNode=i}return en(e),null;case 13:if(St(Et),i=e.memoizedState,t===null||t.memoizedState!==null&&t.memoizedState.dehydrated!==null){if(Mt&&On!==null&&e.mode&1&&!(e.flags&128))ey(),mo(),e.flags|=98560,s=!1;else if(s=xl(e),i!==null&&i.dehydrated!==null){if(t===null){if(!s)throw Error(se(318));if(s=e.memoizedState,s=s!==null?s.dehydrated:null,!s)throw Error(se(317));s[Ai]=e}else mo(),!(e.flags&128)&&(e.memoizedState=null),e.flags|=4;en(e),s=!1}else ci!==null&&(Qd(ci),ci=null),s=!0;if(!s)return e.flags&65536?e:null}return e.flags&128?(e.lanes=n,e):(i=i!==null,i!==(t!==null&&t.memoizedState!==null)&&i&&(e.child.flags|=8192,e.mode&1&&(t===null||Et.current&1?Vt===0&&(Vt=3):cm())),e.updateQueue!==null&&(e.flags|=4),en(e),null);case 4:return vo(),Wd(t,e),t===null&&ba(e.stateNode.containerInfo),en(e),null;case 10:return Xp(e.type._context),en(e),null;case 17:return bn(e.type)&&Uc(),en(e),null;case 19:if(St(Et),s=e.memoizedState,s===null)return en(e),null;if(i=(e.flags&128)!==0,o=s.rendering,o===null)if(i)Ho(s,!1);else{if(Vt!==0||t!==null&&t.flags&128)for(t=e.child;t!==null;){if(o=Hc(t),o!==null){for(e.flags|=128,Ho(s,!1),i=o.updateQueue,i!==null&&(e.updateQueue=i,e.flags|=4),e.subtreeFlags=0,i=n,n=e.child;n!==null;)s=n,t=i,s.flags&=14680066,o=s.alternate,o===null?(s.childLanes=0,s.lanes=t,s.child=null,s.subtreeFlags=0,s.memoizedProps=null,s.memoizedState=null,s.updateQueue=null,s.dependencies=null,s.stateNode=null):(s.childLanes=o.childLanes,s.lanes=o.lanes,s.child=o.child,s.subtreeFlags=0,s.deletions=null,s.memoizedProps=o.memoizedProps,s.memoizedState=o.memoizedState,s.updateQueue=o.updateQueue,s.type=o.type,t=o.dependencies,s.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext}),n=n.sibling;return _t(Et,Et.current&1|2),e.child}t=t.sibling}s.tail!==null&&Lt()>xo&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304)}else{if(!i)if(t=Hc(o),t!==null){if(e.flags|=128,i=!0,n=t.updateQueue,n!==null&&(e.updateQueue=n,e.flags|=4),Ho(s,!0),s.tail===null&&s.tailMode==="hidden"&&!o.alternate&&!Mt)return en(e),null}else 2*Lt()-s.renderingStartTime>xo&&n!==1073741824&&(e.flags|=128,i=!0,Ho(s,!1),e.lanes=4194304);s.isBackwards?(o.sibling=e.child,e.child=o):(n=s.last,n!==null?n.sibling=o:e.child=o,s.last=o)}return s.tail!==null?(e=s.tail,s.rendering=e,s.tail=e.sibling,s.renderingStartTime=Lt(),e.sibling=null,n=Et.current,_t(Et,i?n&1|2:n&1),e):(en(e),null);case 22:case 23:return lm(),i=e.memoizedState!==null,t!==null&&t.memoizedState!==null!==i&&(e.flags|=8192),i&&e.mode&1?Fn&1073741824&&(en(e),e.subtreeFlags&6&&(e.flags|=8192)):en(e),null;case 24:return null;case 25:return null}throw Error(se(156,e.tag))}function zT(t,e){switch(Hp(e),e.tag){case 1:return bn(e.type)&&Uc(),t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 3:return vo(),St(An),St(on),Zp(),t=e.flags,t&65536&&!(t&128)?(e.flags=t&-65537|128,e):null;case 5:return Kp(e),null;case 13:if(St(Et),t=e.memoizedState,t!==null&&t.dehydrated!==null){if(e.alternate===null)throw Error(se(340));mo()}return t=e.flags,t&65536?(e.flags=t&-65537|128,e):null;case 19:return St(Et),null;case 4:return vo(),null;case 10:return Xp(e.type._context),null;case 22:case 23:return lm(),null;case 24:return null;default:return null}}var Ml=!1,rn=!1,HT=typeof WeakSet=="function"?WeakSet:Set,Se=null;function Ks(t,e){var n=t.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(i){Dt(t,e,i)}else n.current=null}function jd(t,e,n){try{n()}catch(i){Dt(t,e,i)}}var o0=!1;function GT(t,e){if(Cd=Dc,t=zx(),Vp(t)){if("selectionStart"in t)var n={start:t.selectionStart,end:t.selectionEnd};else e:{n=(n=t.ownerDocument)&&n.defaultView||window;var i=n.getSelection&&n.getSelection();if(i&&i.rangeCount!==0){n=i.anchorNode;var r=i.anchorOffset,s=i.focusNode;i=i.focusOffset;try{n.nodeType,s.nodeType}catch{n=null;break e}var o=0,a=-1,l=-1,c=0,f=0,u=t,h=null;t:for(;;){for(var p;u!==n||r!==0&&u.nodeType!==3||(a=o+r),u!==s||i!==0&&u.nodeType!==3||(l=o+i),u.nodeType===3&&(o+=u.nodeValue.length),(p=u.firstChild)!==null;)h=u,u=p;for(;;){if(u===t)break t;if(h===n&&++c===r&&(a=o),h===s&&++f===i&&(l=o),(p=u.nextSibling)!==null)break;u=h,h=u.parentNode}u=p}n=a===-1||l===-1?null:{start:a,end:l}}else n=null}n=n||{start:0,end:0}}else n=null;for(Rd={focusedElem:t,selectionRange:n},Dc=!1,Se=e;Se!==null;)if(e=Se,t=e.child,(e.subtreeFlags&1028)!==0&&t!==null)t.return=e,Se=t;else for(;Se!==null;){e=Se;try{var g=e.alternate;if(e.flags&1024)switch(e.tag){case 0:case 11:case 15:break;case 1:if(g!==null){var x=g.memoizedProps,m=g.memoizedState,d=e.stateNode,v=d.getSnapshotBeforeUpdate(e.elementType===e.type?x:ai(e.type,x),m);d.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var _=e.stateNode.containerInfo;_.nodeType===1?_.textContent="":_.nodeType===9&&_.documentElement&&_.removeChild(_.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(se(163))}}catch(S){Dt(e,e.return,S)}if(t=e.sibling,t!==null){t.return=e.return,Se=t;break}Se=e.return}return g=o0,o0=!1,g}function fa(t,e,n){var i=e.updateQueue;if(i=i!==null?i.lastEffect:null,i!==null){var r=i=i.next;do{if((r.tag&t)===t){var s=r.destroy;r.destroy=void 0,s!==void 0&&jd(e,n,s)}r=r.next}while(r!==i)}}function gu(t,e){if(e=e.updateQueue,e=e!==null?e.lastEffect:null,e!==null){var n=e=e.next;do{if((n.tag&t)===t){var i=n.create;n.destroy=i()}n=n.next}while(n!==e)}}function Xd(t){var e=t.ref;if(e!==null){var n=t.stateNode;switch(t.tag){case 5:t=n;break;default:t=n}typeof e=="function"?e(t):e.current=t}}function Oy(t){var e=t.alternate;e!==null&&(t.alternate=null,Oy(e)),t.child=null,t.deletions=null,t.sibling=null,t.tag===5&&(e=t.stateNode,e!==null&&(delete e[Ai],delete e[Ra],delete e[Ld],delete e[wT],delete e[AT])),t.stateNode=null,t.return=null,t.dependencies=null,t.memoizedProps=null,t.memoizedState=null,t.pendingProps=null,t.stateNode=null,t.updateQueue=null}function ky(t){return t.tag===5||t.tag===3||t.tag===4}function a0(t){e:for(;;){for(;t.sibling===null;){if(t.return===null||ky(t.return))return null;t=t.return}for(t.sibling.return=t.return,t=t.sibling;t.tag!==5&&t.tag!==6&&t.tag!==18;){if(t.flags&2||t.child===null||t.tag===4)continue e;t.child.return=t,t=t.child}if(!(t.flags&2))return t.stateNode}}function Yd(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.nodeType===8?n.parentNode.insertBefore(t,e):n.insertBefore(t,e):(n.nodeType===8?(e=n.parentNode,e.insertBefore(t,n)):(e=n,e.appendChild(t)),n=n._reactRootContainer,n!=null||e.onclick!==null||(e.onclick=Nc));else if(i!==4&&(t=t.child,t!==null))for(Yd(t,e,n),t=t.sibling;t!==null;)Yd(t,e,n),t=t.sibling}function $d(t,e,n){var i=t.tag;if(i===5||i===6)t=t.stateNode,e?n.insertBefore(t,e):n.appendChild(t);else if(i!==4&&(t=t.child,t!==null))for($d(t,e,n),t=t.sibling;t!==null;)$d(t,e,n),t=t.sibling}var $t=null,li=!1;function ar(t,e,n){for(n=n.child;n!==null;)By(t,e,n),n=n.sibling}function By(t,e,n){if(Ri&&typeof Ri.onCommitFiberUnmount=="function")try{Ri.onCommitFiberUnmount(lu,n)}catch{}switch(n.tag){case 5:rn||Ks(n,e);case 6:var i=$t,r=li;$t=null,ar(t,e,n),$t=i,li=r,$t!==null&&(li?(t=$t,n=n.stateNode,t.nodeType===8?t.parentNode.removeChild(n):t.removeChild(n)):$t.removeChild(n.stateNode));break;case 18:$t!==null&&(li?(t=$t,n=n.stateNode,t.nodeType===8?Ju(t.parentNode,n):t.nodeType===1&&Ju(t,n),Ta(t)):Ju($t,n.stateNode));break;case 4:i=$t,r=li,$t=n.stateNode.containerInfo,li=!0,ar(t,e,n),$t=i,li=r;break;case 0:case 11:case 14:case 15:if(!rn&&(i=n.updateQueue,i!==null&&(i=i.lastEffect,i!==null))){r=i=i.next;do{var s=r,o=s.destroy;s=s.tag,o!==void 0&&(s&2||s&4)&&jd(n,e,o),r=r.next}while(r!==i)}ar(t,e,n);break;case 1:if(!rn&&(Ks(n,e),i=n.stateNode,typeof i.componentWillUnmount=="function"))try{i.props=n.memoizedProps,i.state=n.memoizedState,i.componentWillUnmount()}catch(a){Dt(n,e,a)}ar(t,e,n);break;case 21:ar(t,e,n);break;case 22:n.mode&1?(rn=(i=rn)||n.memoizedState!==null,ar(t,e,n),rn=i):ar(t,e,n);break;default:ar(t,e,n)}}function l0(t){var e=t.updateQueue;if(e!==null){t.updateQueue=null;var n=t.stateNode;n===null&&(n=t.stateNode=new HT),e.forEach(function(i){var r=QT.bind(null,t,i);n.has(i)||(n.add(i),i.then(r,r))})}}function ti(t,e){var n=e.deletions;if(n!==null)for(var i=0;i<n.length;i++){var r=n[i];try{var s=t,o=e,a=o;e:for(;a!==null;){switch(a.tag){case 5:$t=a.stateNode,li=!1;break e;case 3:$t=a.stateNode.containerInfo,li=!0;break e;case 4:$t=a.stateNode.containerInfo,li=!0;break e}a=a.return}if($t===null)throw Error(se(160));By(s,o,r),$t=null,li=!1;var l=r.alternate;l!==null&&(l.return=null),r.return=null}catch(c){Dt(r,e,c)}}if(e.subtreeFlags&12854)for(e=e.child;e!==null;)Vy(e,t),e=e.sibling}function Vy(t,e){var n=t.alternate,i=t.flags;switch(t.tag){case 0:case 11:case 14:case 15:if(ti(e,t),yi(t),i&4){try{fa(3,t,t.return),gu(3,t)}catch(x){Dt(t,t.return,x)}try{fa(5,t,t.return)}catch(x){Dt(t,t.return,x)}}break;case 1:ti(e,t),yi(t),i&512&&n!==null&&Ks(n,n.return);break;case 5:if(ti(e,t),yi(t),i&512&&n!==null&&Ks(n,n.return),t.flags&32){var r=t.stateNode;try{ya(r,"")}catch(x){Dt(t,t.return,x)}}if(i&4&&(r=t.stateNode,r!=null)){var s=t.memoizedProps,o=n!==null?n.memoizedProps:s,a=t.type,l=t.updateQueue;if(t.updateQueue=null,l!==null)try{a==="input"&&s.type==="radio"&&s.name!=null&&lx(r,s),_d(a,o);var c=_d(a,s);for(o=0;o<l.length;o+=2){var f=l[o],u=l[o+1];f==="style"?hx(r,u):f==="dangerouslySetInnerHTML"?fx(r,u):f==="children"?ya(r,u):bp(r,f,u,c)}switch(a){case"input":hd(r,s);break;case"textarea":cx(r,s);break;case"select":var h=r._wrapperState.wasMultiple;r._wrapperState.wasMultiple=!!s.multiple;var p=s.value;p!=null?io(r,!!s.multiple,p,!1):h!==!!s.multiple&&(s.defaultValue!=null?io(r,!!s.multiple,s.defaultValue,!0):io(r,!!s.multiple,s.multiple?[]:"",!1))}r[Ra]=s}catch(x){Dt(t,t.return,x)}}break;case 6:if(ti(e,t),yi(t),i&4){if(t.stateNode===null)throw Error(se(162));r=t.stateNode,s=t.memoizedProps;try{r.nodeValue=s}catch(x){Dt(t,t.return,x)}}break;case 3:if(ti(e,t),yi(t),i&4&&n!==null&&n.memoizedState.isDehydrated)try{Ta(e.containerInfo)}catch(x){Dt(t,t.return,x)}break;case 4:ti(e,t),yi(t);break;case 13:ti(e,t),yi(t),r=t.child,r.flags&8192&&(s=r.memoizedState!==null,r.stateNode.isHidden=s,!s||r.alternate!==null&&r.alternate.memoizedState!==null||(om=Lt())),i&4&&l0(t);break;case 22:if(f=n!==null&&n.memoizedState!==null,t.mode&1?(rn=(c=rn)||f,ti(e,t),rn=c):ti(e,t),yi(t),i&8192){if(c=t.memoizedState!==null,(t.stateNode.isHidden=c)&&!f&&t.mode&1)for(Se=t,f=t.child;f!==null;){for(u=Se=f;Se!==null;){switch(h=Se,p=h.child,h.tag){case 0:case 11:case 14:case 15:fa(4,h,h.return);break;case 1:Ks(h,h.return);var g=h.stateNode;if(typeof g.componentWillUnmount=="function"){i=h,n=h.return;try{e=i,g.props=e.memoizedProps,g.state=e.memoizedState,g.componentWillUnmount()}catch(x){Dt(i,n,x)}}break;case 5:Ks(h,h.return);break;case 22:if(h.memoizedState!==null){u0(u);continue}}p!==null?(p.return=h,Se=p):u0(u)}f=f.sibling}e:for(f=null,u=t;;){if(u.tag===5){if(f===null){f=u;try{r=u.stateNode,c?(s=r.style,typeof s.setProperty=="function"?s.setProperty("display","none","important"):s.display="none"):(a=u.stateNode,l=u.memoizedProps.style,o=l!=null&&l.hasOwnProperty("display")?l.display:null,a.style.display=dx("display",o))}catch(x){Dt(t,t.return,x)}}}else if(u.tag===6){if(f===null)try{u.stateNode.nodeValue=c?"":u.memoizedProps}catch(x){Dt(t,t.return,x)}}else if((u.tag!==22&&u.tag!==23||u.memoizedState===null||u===t)&&u.child!==null){u.child.return=u,u=u.child;continue}if(u===t)break e;for(;u.sibling===null;){if(u.return===null||u.return===t)break e;f===u&&(f=null),u=u.return}f===u&&(f=null),u.sibling.return=u.return,u=u.sibling}}break;case 19:ti(e,t),yi(t),i&4&&l0(t);break;case 21:break;default:ti(e,t),yi(t)}}function yi(t){var e=t.flags;if(e&2){try{e:{for(var n=t.return;n!==null;){if(ky(n)){var i=n;break e}n=n.return}throw Error(se(160))}switch(i.tag){case 5:var r=i.stateNode;i.flags&32&&(ya(r,""),i.flags&=-33);var s=a0(t);$d(t,s,r);break;case 3:case 4:var o=i.stateNode.containerInfo,a=a0(t);Yd(t,a,o);break;default:throw Error(se(161))}}catch(l){Dt(t,t.return,l)}t.flags&=-3}e&4096&&(t.flags&=-4097)}function WT(t,e,n){Se=t,zy(t)}function zy(t,e,n){for(var i=(t.mode&1)!==0;Se!==null;){var r=Se,s=r.child;if(r.tag===22&&i){var o=r.memoizedState!==null||Ml;if(!o){var a=r.alternate,l=a!==null&&a.memoizedState!==null||rn;a=Ml;var c=rn;if(Ml=o,(rn=l)&&!c)for(Se=r;Se!==null;)o=Se,l=o.child,o.tag===22&&o.memoizedState!==null?f0(r):l!==null?(l.return=o,Se=l):f0(r);for(;s!==null;)Se=s,zy(s),s=s.sibling;Se=r,Ml=a,rn=c}c0(t)}else r.subtreeFlags&8772&&s!==null?(s.return=r,Se=s):c0(t)}}function c0(t){for(;Se!==null;){var e=Se;if(e.flags&8772){var n=e.alternate;try{if(e.flags&8772)switch(e.tag){case 0:case 11:case 15:rn||gu(5,e);break;case 1:var i=e.stateNode;if(e.flags&4&&!rn)if(n===null)i.componentDidMount();else{var r=e.elementType===e.type?n.memoizedProps:ai(e.type,n.memoizedProps);i.componentDidUpdate(r,n.memoizedState,i.__reactInternalSnapshotBeforeUpdate)}var s=e.updateQueue;s!==null&&Yg(e,s,i);break;case 3:var o=e.updateQueue;if(o!==null){if(n=null,e.child!==null)switch(e.child.tag){case 5:n=e.child.stateNode;break;case 1:n=e.child.stateNode}Yg(e,o,n)}break;case 5:var a=e.stateNode;if(n===null&&e.flags&4){n=a;var l=e.memoizedProps;switch(e.type){case"button":case"input":case"select":case"textarea":l.autoFocus&&n.focus();break;case"img":l.src&&(n.src=l.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(e.memoizedState===null){var c=e.alternate;if(c!==null){var f=c.memoizedState;if(f!==null){var u=f.dehydrated;u!==null&&Ta(u)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(se(163))}rn||e.flags&512&&Xd(e)}catch(h){Dt(e,e.return,h)}}if(e===t){Se=null;break}if(n=e.sibling,n!==null){n.return=e.return,Se=n;break}Se=e.return}}function u0(t){for(;Se!==null;){var e=Se;if(e===t){Se=null;break}var n=e.sibling;if(n!==null){n.return=e.return,Se=n;break}Se=e.return}}function f0(t){for(;Se!==null;){var e=Se;try{switch(e.tag){case 0:case 11:case 15:var n=e.return;try{gu(4,e)}catch(l){Dt(e,n,l)}break;case 1:var i=e.stateNode;if(typeof i.componentDidMount=="function"){var r=e.return;try{i.componentDidMount()}catch(l){Dt(e,r,l)}}var s=e.return;try{Xd(e)}catch(l){Dt(e,s,l)}break;case 5:var o=e.return;try{Xd(e)}catch(l){Dt(e,o,l)}}}catch(l){Dt(e,e.return,l)}if(e===t){Se=null;break}var a=e.sibling;if(a!==null){a.return=e.return,Se=a;break}Se=e.return}}var jT=Math.ceil,jc=or.ReactCurrentDispatcher,rm=or.ReactCurrentOwner,Zn=or.ReactCurrentBatchConfig,Je=0,Yt=null,Ot=null,Zt=0,Fn=0,Zs=kr(0),Vt=0,Ua=null,ms=0,vu=0,sm=0,da=null,En=null,om=0,xo=1/0,zi=null,Xc=!1,qd=null,Pr=null,El=!1,Mr=null,Yc=0,ha=0,Kd=null,fc=-1,dc=0;function pn(){return Je&6?Lt():fc!==-1?fc:fc=Lt()}function Dr(t){return t.mode&1?Je&2&&Zt!==0?Zt&-Zt:CT.transition!==null?(dc===0&&(dc=wx()),dc):(t=ut,t!==0||(t=window.event,t=t===void 0?16:Lx(t.type)),t):1}function pi(t,e,n,i){if(50<ha)throw ha=0,Kd=null,Error(se(185));Xa(t,n,i),(!(Je&2)||t!==Yt)&&(t===Yt&&(!(Je&2)&&(vu|=n),Vt===4&&xr(t,Zt)),Cn(t,i),n===1&&Je===0&&!(e.mode&1)&&(xo=Lt()+500,hu&&Br()))}function Cn(t,e){var n=t.callbackNode;C1(t,e);var i=Pc(t,t===Yt?Zt:0);if(i===0)n!==null&&yg(n),t.callbackNode=null,t.callbackPriority=0;else if(e=i&-i,t.callbackPriority!==e){if(n!=null&&yg(n),e===1)t.tag===0?bT(d0.bind(null,t)):Zx(d0.bind(null,t)),ET(function(){!(Je&6)&&Br()}),n=null;else{switch(Ax(i)){case 1:n=Lp;break;case 4:n=Ex;break;case 16:n=Rc;break;case 536870912:n=Tx;break;default:n=Rc}n=qy(n,Hy.bind(null,t))}t.callbackPriority=e,t.callbackNode=n}}function Hy(t,e){if(fc=-1,dc=0,Je&6)throw Error(se(327));var n=t.callbackNode;if(lo()&&t.callbackNode!==n)return null;var i=Pc(t,t===Yt?Zt:0);if(i===0)return null;if(i&30||i&t.expiredLanes||e)e=$c(t,i);else{e=i;var r=Je;Je|=2;var s=Wy();(Yt!==t||Zt!==e)&&(zi=null,xo=Lt()+500,cs(t,e));do try{$T();break}catch(a){Gy(t,a)}while(!0);jp(),jc.current=s,Je=r,Ot!==null?e=0:(Yt=null,Zt=0,e=Vt)}if(e!==0){if(e===2&&(r=Ed(t),r!==0&&(i=r,e=Zd(t,r))),e===1)throw n=Ua,cs(t,0),xr(t,i),Cn(t,Lt()),n;if(e===6)xr(t,i);else{if(r=t.current.alternate,!(i&30)&&!XT(r)&&(e=$c(t,i),e===2&&(s=Ed(t),s!==0&&(i=s,e=Zd(t,s))),e===1))throw n=Ua,cs(t,0),xr(t,i),Cn(t,Lt()),n;switch(t.finishedWork=r,t.finishedLanes=i,e){case 0:case 1:throw Error(se(345));case 2:Zr(t,En,zi);break;case 3:if(xr(t,i),(i&130023424)===i&&(e=om+500-Lt(),10<e)){if(Pc(t,0)!==0)break;if(r=t.suspendedLanes,(r&i)!==i){pn(),t.pingedLanes|=t.suspendedLanes&r;break}t.timeoutHandle=Dd(Zr.bind(null,t,En,zi),e);break}Zr(t,En,zi);break;case 4:if(xr(t,i),(i&4194240)===i)break;for(e=t.eventTimes,r=-1;0<i;){var o=31-hi(i);s=1<<o,o=e[o],o>r&&(r=o),i&=~s}if(i=r,i=Lt()-i,i=(120>i?120:480>i?480:1080>i?1080:1920>i?1920:3e3>i?3e3:4320>i?4320:1960*jT(i/1960))-i,10<i){t.timeoutHandle=Dd(Zr.bind(null,t,En,zi),i);break}Zr(t,En,zi);break;case 5:Zr(t,En,zi);break;default:throw Error(se(329))}}}return Cn(t,Lt()),t.callbackNode===n?Hy.bind(null,t):null}function Zd(t,e){var n=da;return t.current.memoizedState.isDehydrated&&(cs(t,e).flags|=256),t=$c(t,e),t!==2&&(e=En,En=n,e!==null&&Qd(e)),t}function Qd(t){En===null?En=t:En.push.apply(En,t)}function XT(t){for(var e=t;;){if(e.flags&16384){var n=e.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var i=0;i<n.length;i++){var r=n[i],s=r.getSnapshot;r=r.value;try{if(!gi(s(),r))return!1}catch{return!1}}}if(n=e.child,e.subtreeFlags&16384&&n!==null)n.return=e,e=n;else{if(e===t)break;for(;e.sibling===null;){if(e.return===null||e.return===t)return!0;e=e.return}e.sibling.return=e.return,e=e.sibling}}return!0}function xr(t,e){for(e&=~sm,e&=~vu,t.suspendedLanes|=e,t.pingedLanes&=~e,t=t.expirationTimes;0<e;){var n=31-hi(e),i=1<<n;t[n]=-1,e&=~i}}function d0(t){if(Je&6)throw Error(se(327));lo();var e=Pc(t,0);if(!(e&1))return Cn(t,Lt()),null;var n=$c(t,e);if(t.tag!==0&&n===2){var i=Ed(t);i!==0&&(e=i,n=Zd(t,i))}if(n===1)throw n=Ua,cs(t,0),xr(t,e),Cn(t,Lt()),n;if(n===6)throw Error(se(345));return t.finishedWork=t.current.alternate,t.finishedLanes=e,Zr(t,En,zi),Cn(t,Lt()),null}function am(t,e){var n=Je;Je|=1;try{return t(e)}finally{Je=n,Je===0&&(xo=Lt()+500,hu&&Br())}}function gs(t){Mr!==null&&Mr.tag===0&&!(Je&6)&&lo();var e=Je;Je|=1;var n=Zn.transition,i=ut;try{if(Zn.transition=null,ut=1,t)return t()}finally{ut=i,Zn.transition=n,Je=e,!(Je&6)&&Br()}}function lm(){Fn=Zs.current,St(Zs)}function cs(t,e){t.finishedWork=null,t.finishedLanes=0;var n=t.timeoutHandle;if(n!==-1&&(t.timeoutHandle=-1,MT(n)),Ot!==null)for(n=Ot.return;n!==null;){var i=n;switch(Hp(i),i.tag){case 1:i=i.type.childContextTypes,i!=null&&Uc();break;case 3:vo(),St(An),St(on),Zp();break;case 5:Kp(i);break;case 4:vo();break;case 13:St(Et);break;case 19:St(Et);break;case 10:Xp(i.type._context);break;case 22:case 23:lm()}n=n.return}if(Yt=t,Ot=t=Lr(t.current,null),Zt=Fn=e,Vt=0,Ua=null,sm=vu=ms=0,En=da=null,is!==null){for(e=0;e<is.length;e++)if(n=is[e],i=n.interleaved,i!==null){n.interleaved=null;var r=i.next,s=n.pending;if(s!==null){var o=s.next;s.next=r,i.next=o}n.pending=i}is=null}return t}function Gy(t,e){do{var n=Ot;try{if(jp(),lc.current=Wc,Gc){for(var i=wt.memoizedState;i!==null;){var r=i.queue;r!==null&&(r.pending=null),i=i.next}Gc=!1}if(ps=0,jt=Bt=wt=null,ua=!1,La=0,rm.current=null,n===null||n.return===null){Vt=1,Ua=e,Ot=null;break}e:{var s=t,o=n.return,a=n,l=e;if(e=Zt,a.flags|=32768,l!==null&&typeof l=="object"&&typeof l.then=="function"){var c=l,f=a,u=f.tag;if(!(f.mode&1)&&(u===0||u===11||u===15)){var h=f.alternate;h?(f.updateQueue=h.updateQueue,f.memoizedState=h.memoizedState,f.lanes=h.lanes):(f.updateQueue=null,f.memoizedState=null)}var p=Jg(o);if(p!==null){p.flags&=-257,e0(p,o,a,s,e),p.mode&1&&Qg(s,c,e),e=p,l=c;var g=e.updateQueue;if(g===null){var x=new Set;x.add(l),e.updateQueue=x}else g.add(l);break e}else{if(!(e&1)){Qg(s,c,e),cm();break e}l=Error(se(426))}}else if(Mt&&a.mode&1){var m=Jg(o);if(m!==null){!(m.flags&65536)&&(m.flags|=256),e0(m,o,a,s,e),Gp(_o(l,a));break e}}s=l=_o(l,a),Vt!==4&&(Vt=2),da===null?da=[s]:da.push(s),s=o;do{switch(s.tag){case 3:s.flags|=65536,e&=-e,s.lanes|=e;var d=Ay(s,l,e);Xg(s,d);break e;case 1:a=l;var v=s.type,_=s.stateNode;if(!(s.flags&128)&&(typeof v.getDerivedStateFromError=="function"||_!==null&&typeof _.componentDidCatch=="function"&&(Pr===null||!Pr.has(_)))){s.flags|=65536,e&=-e,s.lanes|=e;var S=by(s,a,e);Xg(s,S);break e}}s=s.return}while(s!==null)}Xy(n)}catch(E){e=E,Ot===n&&n!==null&&(Ot=n=n.return);continue}break}while(!0)}function Wy(){var t=jc.current;return jc.current=Wc,t===null?Wc:t}function cm(){(Vt===0||Vt===3||Vt===2)&&(Vt=4),Yt===null||!(ms&268435455)&&!(vu&268435455)||xr(Yt,Zt)}function $c(t,e){var n=Je;Je|=2;var i=Wy();(Yt!==t||Zt!==e)&&(zi=null,cs(t,e));do try{YT();break}catch(r){Gy(t,r)}while(!0);if(jp(),Je=n,jc.current=i,Ot!==null)throw Error(se(261));return Yt=null,Zt=0,Vt}function YT(){for(;Ot!==null;)jy(Ot)}function $T(){for(;Ot!==null&&!x1();)jy(Ot)}function jy(t){var e=$y(t.alternate,t,Fn);t.memoizedProps=t.pendingProps,e===null?Xy(t):Ot=e,rm.current=null}function Xy(t){var e=t;do{var n=e.alternate;if(t=e.return,e.flags&32768){if(n=zT(n,e),n!==null){n.flags&=32767,Ot=n;return}if(t!==null)t.flags|=32768,t.subtreeFlags=0,t.deletions=null;else{Vt=6,Ot=null;return}}else if(n=VT(n,e,Fn),n!==null){Ot=n;return}if(e=e.sibling,e!==null){Ot=e;return}Ot=e=t}while(e!==null);Vt===0&&(Vt=5)}function Zr(t,e,n){var i=ut,r=Zn.transition;try{Zn.transition=null,ut=1,qT(t,e,n,i)}finally{Zn.transition=r,ut=i}return null}function qT(t,e,n,i){do lo();while(Mr!==null);if(Je&6)throw Error(se(327));n=t.finishedWork;var r=t.finishedLanes;if(n===null)return null;if(t.finishedWork=null,t.finishedLanes=0,n===t.current)throw Error(se(177));t.callbackNode=null,t.callbackPriority=0;var s=n.lanes|n.childLanes;if(R1(t,s),t===Yt&&(Ot=Yt=null,Zt=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||El||(El=!0,qy(Rc,function(){return lo(),null})),s=(n.flags&15990)!==0,n.subtreeFlags&15990||s){s=Zn.transition,Zn.transition=null;var o=ut;ut=1;var a=Je;Je|=4,rm.current=null,GT(t,n),Vy(n,t),mT(Rd),Dc=!!Cd,Rd=Cd=null,t.current=n,WT(n),y1(),Je=a,ut=o,Zn.transition=s}else t.current=n;if(El&&(El=!1,Mr=t,Yc=r),s=t.pendingLanes,s===0&&(Pr=null),E1(n.stateNode),Cn(t,Lt()),e!==null)for(i=t.onRecoverableError,n=0;n<e.length;n++)r=e[n],i(r.value,{componentStack:r.stack,digest:r.digest});if(Xc)throw Xc=!1,t=qd,qd=null,t;return Yc&1&&t.tag!==0&&lo(),s=t.pendingLanes,s&1?t===Kd?ha++:(ha=0,Kd=t):ha=0,Br(),null}function lo(){if(Mr!==null){var t=Ax(Yc),e=Zn.transition,n=ut;try{if(Zn.transition=null,ut=16>t?16:t,Mr===null)var i=!1;else{if(t=Mr,Mr=null,Yc=0,Je&6)throw Error(se(331));var r=Je;for(Je|=4,Se=t.current;Se!==null;){var s=Se,o=s.child;if(Se.flags&16){var a=s.deletions;if(a!==null){for(var l=0;l<a.length;l++){var c=a[l];for(Se=c;Se!==null;){var f=Se;switch(f.tag){case 0:case 11:case 15:fa(8,f,s)}var u=f.child;if(u!==null)u.return=f,Se=u;else for(;Se!==null;){f=Se;var h=f.sibling,p=f.return;if(Oy(f),f===c){Se=null;break}if(h!==null){h.return=p,Se=h;break}Se=p}}}var g=s.alternate;if(g!==null){var x=g.child;if(x!==null){g.child=null;do{var m=x.sibling;x.sibling=null,x=m}while(x!==null)}}Se=s}}if(s.subtreeFlags&2064&&o!==null)o.return=s,Se=o;else e:for(;Se!==null;){if(s=Se,s.flags&2048)switch(s.tag){case 0:case 11:case 15:fa(9,s,s.return)}var d=s.sibling;if(d!==null){d.return=s.return,Se=d;break e}Se=s.return}}var v=t.current;for(Se=v;Se!==null;){o=Se;var _=o.child;if(o.subtreeFlags&2064&&_!==null)_.return=o,Se=_;else e:for(o=v;Se!==null;){if(a=Se,a.flags&2048)try{switch(a.tag){case 0:case 11:case 15:gu(9,a)}}catch(E){Dt(a,a.return,E)}if(a===o){Se=null;break e}var S=a.sibling;if(S!==null){S.return=a.return,Se=S;break e}Se=a.return}}if(Je=r,Br(),Ri&&typeof Ri.onPostCommitFiberRoot=="function")try{Ri.onPostCommitFiberRoot(lu,t)}catch{}i=!0}return i}finally{ut=n,Zn.transition=e}}return!1}function h0(t,e,n){e=_o(n,e),e=Ay(t,e,1),t=Rr(t,e,1),e=pn(),t!==null&&(Xa(t,1,e),Cn(t,e))}function Dt(t,e,n){if(t.tag===3)h0(t,t,n);else for(;e!==null;){if(e.tag===3){h0(e,t,n);break}else if(e.tag===1){var i=e.stateNode;if(typeof e.type.getDerivedStateFromError=="function"||typeof i.componentDidCatch=="function"&&(Pr===null||!Pr.has(i))){t=_o(n,t),t=by(e,t,1),e=Rr(e,t,1),t=pn(),e!==null&&(Xa(e,1,t),Cn(e,t));break}}e=e.return}}function KT(t,e,n){var i=t.pingCache;i!==null&&i.delete(e),e=pn(),t.pingedLanes|=t.suspendedLanes&n,Yt===t&&(Zt&n)===n&&(Vt===4||Vt===3&&(Zt&130023424)===Zt&&500>Lt()-om?cs(t,0):sm|=n),Cn(t,e)}function Yy(t,e){e===0&&(t.mode&1?(e=hl,hl<<=1,!(hl&130023424)&&(hl=4194304)):e=1);var n=pn();t=Ji(t,e),t!==null&&(Xa(t,e,n),Cn(t,n))}function ZT(t){var e=t.memoizedState,n=0;e!==null&&(n=e.retryLane),Yy(t,n)}function QT(t,e){var n=0;switch(t.tag){case 13:var i=t.stateNode,r=t.memoizedState;r!==null&&(n=r.retryLane);break;case 19:i=t.stateNode;break;default:throw Error(se(314))}i!==null&&i.delete(e),Yy(t,n)}var $y;$y=function(t,e,n){if(t!==null)if(t.memoizedProps!==e.pendingProps||An.current)Tn=!0;else{if(!(t.lanes&n)&&!(e.flags&128))return Tn=!1,BT(t,e,n);Tn=!!(t.flags&131072)}else Tn=!1,Mt&&e.flags&1048576&&Qx(e,kc,e.index);switch(e.lanes=0,e.tag){case 2:var i=e.type;uc(t,e),t=e.pendingProps;var r=po(e,on.current);ao(e,n),r=Jp(null,e,i,t,r,n);var s=em();return e.flags|=1,typeof r=="object"&&r!==null&&typeof r.render=="function"&&r.$$typeof===void 0?(e.tag=1,e.memoizedState=null,e.updateQueue=null,bn(i)?(s=!0,Fc(e)):s=!1,e.memoizedState=r.state!==null&&r.state!==void 0?r.state:null,$p(e),r.updater=mu,e.stateNode=r,r._reactInternals=e,kd(e,i,t,n),e=zd(null,e,i,!0,s,n)):(e.tag=0,Mt&&s&&zp(e),fn(null,e,r,n),e=e.child),e;case 16:i=e.elementType;e:{switch(uc(t,e),t=e.pendingProps,r=i._init,i=r(i._payload),e.type=i,r=e.tag=ew(i),t=ai(i,t),r){case 0:e=Vd(null,e,i,t,n);break e;case 1:e=i0(null,e,i,t,n);break e;case 11:e=t0(null,e,i,t,n);break e;case 14:e=n0(null,e,i,ai(i.type,t),n);break e}throw Error(se(306,i,""))}return e;case 0:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),Vd(t,e,i,r,n);case 1:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),i0(t,e,i,r,n);case 3:e:{if(Dy(e),t===null)throw Error(se(387));i=e.pendingProps,s=e.memoizedState,r=s.element,ry(t,e),zc(e,i,null,n);var o=e.memoizedState;if(i=o.element,s.isDehydrated)if(s={element:i,isDehydrated:!1,cache:o.cache,pendingSuspenseBoundaries:o.pendingSuspenseBoundaries,transitions:o.transitions},e.updateQueue.baseState=s,e.memoizedState=s,e.flags&256){r=_o(Error(se(423)),e),e=r0(t,e,i,n,r);break e}else if(i!==r){r=_o(Error(se(424)),e),e=r0(t,e,i,n,r);break e}else for(On=Cr(e.stateNode.containerInfo.firstChild),kn=e,Mt=!0,ci=null,n=ny(e,null,i,n),e.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(mo(),i===r){e=er(t,e,n);break e}fn(t,e,i,n)}e=e.child}return e;case 5:return sy(e),t===null&&Ud(e),i=e.type,r=e.pendingProps,s=t!==null?t.memoizedProps:null,o=r.children,Pd(i,r)?o=null:s!==null&&Pd(i,s)&&(e.flags|=32),Py(t,e),fn(t,e,o,n),e.child;case 6:return t===null&&Ud(e),null;case 13:return Ly(t,e,n);case 4:return qp(e,e.stateNode.containerInfo),i=e.pendingProps,t===null?e.child=go(e,null,i,n):fn(t,e,i,n),e.child;case 11:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),t0(t,e,i,r,n);case 7:return fn(t,e,e.pendingProps,n),e.child;case 8:return fn(t,e,e.pendingProps.children,n),e.child;case 12:return fn(t,e,e.pendingProps.children,n),e.child;case 10:e:{if(i=e.type._context,r=e.pendingProps,s=e.memoizedProps,o=r.value,_t(Bc,i._currentValue),i._currentValue=o,s!==null)if(gi(s.value,o)){if(s.children===r.children&&!An.current){e=er(t,e,n);break e}}else for(s=e.child,s!==null&&(s.return=e);s!==null;){var a=s.dependencies;if(a!==null){o=s.child;for(var l=a.firstContext;l!==null;){if(l.context===i){if(s.tag===1){l=Yi(-1,n&-n),l.tag=2;var c=s.updateQueue;if(c!==null){c=c.shared;var f=c.pending;f===null?l.next=l:(l.next=f.next,f.next=l),c.pending=l}}s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),Fd(s.return,n,e),a.lanes|=n;break}l=l.next}}else if(s.tag===10)o=s.type===e.type?null:s.child;else if(s.tag===18){if(o=s.return,o===null)throw Error(se(341));o.lanes|=n,a=o.alternate,a!==null&&(a.lanes|=n),Fd(o,n,e),o=s.sibling}else o=s.child;if(o!==null)o.return=s;else for(o=s;o!==null;){if(o===e){o=null;break}if(s=o.sibling,s!==null){s.return=o.return,o=s;break}o=o.return}s=o}fn(t,e,r.children,n),e=e.child}return e;case 9:return r=e.type,i=e.pendingProps.children,ao(e,n),r=Qn(r),i=i(r),e.flags|=1,fn(t,e,i,n),e.child;case 14:return i=e.type,r=ai(i,e.pendingProps),r=ai(i.type,r),n0(t,e,i,r,n);case 15:return Cy(t,e,e.type,e.pendingProps,n);case 17:return i=e.type,r=e.pendingProps,r=e.elementType===i?r:ai(i,r),uc(t,e),e.tag=1,bn(i)?(t=!0,Fc(e)):t=!1,ao(e,n),wy(e,i,r),kd(e,i,r,n),zd(null,e,i,!0,t,n);case 19:return Iy(t,e,n);case 22:return Ry(t,e,n)}throw Error(se(156,e.tag))};function qy(t,e){return Mx(t,e)}function JT(t,e,n,i){this.tag=t,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=e,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=i,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function qn(t,e,n,i){return new JT(t,e,n,i)}function um(t){return t=t.prototype,!(!t||!t.isReactComponent)}function ew(t){if(typeof t=="function")return um(t)?1:0;if(t!=null){if(t=t.$$typeof,t===Rp)return 11;if(t===Pp)return 14}return 2}function Lr(t,e){var n=t.alternate;return n===null?(n=qn(t.tag,e,t.key,t.mode),n.elementType=t.elementType,n.type=t.type,n.stateNode=t.stateNode,n.alternate=t,t.alternate=n):(n.pendingProps=e,n.type=t.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=t.flags&14680064,n.childLanes=t.childLanes,n.lanes=t.lanes,n.child=t.child,n.memoizedProps=t.memoizedProps,n.memoizedState=t.memoizedState,n.updateQueue=t.updateQueue,e=t.dependencies,n.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext},n.sibling=t.sibling,n.index=t.index,n.ref=t.ref,n}function hc(t,e,n,i,r,s){var o=2;if(i=t,typeof t=="function")um(t)&&(o=1);else if(typeof t=="string")o=5;else e:switch(t){case zs:return us(n.children,r,s,e);case Cp:o=8,r|=8;break;case ld:return t=qn(12,n,e,r|2),t.elementType=ld,t.lanes=s,t;case cd:return t=qn(13,n,e,r),t.elementType=cd,t.lanes=s,t;case ud:return t=qn(19,n,e,r),t.elementType=ud,t.lanes=s,t;case sx:return _u(n,r,s,e);default:if(typeof t=="object"&&t!==null)switch(t.$$typeof){case ix:o=10;break e;case rx:o=9;break e;case Rp:o=11;break e;case Pp:o=14;break e;case gr:o=16,i=null;break e}throw Error(se(130,t==null?t:typeof t,""))}return e=qn(o,n,e,r),e.elementType=t,e.type=i,e.lanes=s,e}function us(t,e,n,i){return t=qn(7,t,i,e),t.lanes=n,t}function _u(t,e,n,i){return t=qn(22,t,i,e),t.elementType=sx,t.lanes=n,t.stateNode={isHidden:!1},t}function lf(t,e,n){return t=qn(6,t,null,e),t.lanes=n,t}function cf(t,e,n){return e=qn(4,t.children!==null?t.children:[],t.key,e),e.lanes=n,e.stateNode={containerInfo:t.containerInfo,pendingChildren:null,implementation:t.implementation},e}function tw(t,e,n,i,r){this.tag=e,this.containerInfo=t,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Hu(0),this.expirationTimes=Hu(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Hu(0),this.identifierPrefix=i,this.onRecoverableError=r,this.mutableSourceEagerHydrationData=null}function fm(t,e,n,i,r,s,o,a,l){return t=new tw(t,e,n,a,l),e===1?(e=1,s===!0&&(e|=8)):e=0,s=qn(3,null,null,e),t.current=s,s.stateNode=t,s.memoizedState={element:i,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},$p(s),t}function nw(t,e,n){var i=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:Vs,key:i==null?null:""+i,children:t,containerInfo:e,implementation:n}}function Ky(t){if(!t)return Nr;t=t._reactInternals;e:{if(xs(t)!==t||t.tag!==1)throw Error(se(170));var e=t;do{switch(e.tag){case 3:e=e.stateNode.context;break e;case 1:if(bn(e.type)){e=e.stateNode.__reactInternalMemoizedMergedChildContext;break e}}e=e.return}while(e!==null);throw Error(se(171))}if(t.tag===1){var n=t.type;if(bn(n))return Kx(t,n,e)}return e}function Zy(t,e,n,i,r,s,o,a,l){return t=fm(n,i,!0,t,r,s,o,a,l),t.context=Ky(null),n=t.current,i=pn(),r=Dr(n),s=Yi(i,r),s.callback=e??null,Rr(n,s,r),t.current.lanes=r,Xa(t,r,i),Cn(t,i),t}function xu(t,e,n,i){var r=e.current,s=pn(),o=Dr(r);return n=Ky(n),e.context===null?e.context=n:e.pendingContext=n,e=Yi(s,o),e.payload={element:t},i=i===void 0?null:i,i!==null&&(e.callback=i),t=Rr(r,e,o),t!==null&&(pi(t,r,o,s),ac(t,r,o)),o}function qc(t){if(t=t.current,!t.child)return null;switch(t.child.tag){case 5:return t.child.stateNode;default:return t.child.stateNode}}function p0(t,e){if(t=t.memoizedState,t!==null&&t.dehydrated!==null){var n=t.retryLane;t.retryLane=n!==0&&n<e?n:e}}function dm(t,e){p0(t,e),(t=t.alternate)&&p0(t,e)}function iw(){return null}var Qy=typeof reportError=="function"?reportError:function(t){console.error(t)};function hm(t){this._internalRoot=t}yu.prototype.render=hm.prototype.render=function(t){var e=this._internalRoot;if(e===null)throw Error(se(409));xu(t,e,null,null)};yu.prototype.unmount=hm.prototype.unmount=function(){var t=this._internalRoot;if(t!==null){this._internalRoot=null;var e=t.containerInfo;gs(function(){xu(null,t,null,null)}),e[Qi]=null}};function yu(t){this._internalRoot=t}yu.prototype.unstable_scheduleHydration=function(t){if(t){var e=Rx();t={blockedOn:null,target:t,priority:e};for(var n=0;n<_r.length&&e!==0&&e<_r[n].priority;n++);_r.splice(n,0,t),n===0&&Dx(t)}};function pm(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11)}function Su(t){return!(!t||t.nodeType!==1&&t.nodeType!==9&&t.nodeType!==11&&(t.nodeType!==8||t.nodeValue!==" react-mount-point-unstable "))}function m0(){}function rw(t,e,n,i,r){if(r){if(typeof i=="function"){var s=i;i=function(){var c=qc(o);s.call(c)}}var o=Zy(e,i,t,0,null,!1,!1,"",m0);return t._reactRootContainer=o,t[Qi]=o.current,ba(t.nodeType===8?t.parentNode:t),gs(),o}for(;r=t.lastChild;)t.removeChild(r);if(typeof i=="function"){var a=i;i=function(){var c=qc(l);a.call(c)}}var l=fm(t,0,!1,null,null,!1,!1,"",m0);return t._reactRootContainer=l,t[Qi]=l.current,ba(t.nodeType===8?t.parentNode:t),gs(function(){xu(e,l,n,i)}),l}function Mu(t,e,n,i,r){var s=n._reactRootContainer;if(s){var o=s;if(typeof r=="function"){var a=r;r=function(){var l=qc(o);a.call(l)}}xu(e,o,t,r)}else o=rw(n,e,t,r,i);return qc(o)}bx=function(t){switch(t.tag){case 3:var e=t.stateNode;if(e.current.memoizedState.isDehydrated){var n=ea(e.pendingLanes);n!==0&&(Ip(e,n|1),Cn(e,Lt()),!(Je&6)&&(xo=Lt()+500,Br()))}break;case 13:gs(function(){var i=Ji(t,1);if(i!==null){var r=pn();pi(i,t,1,r)}}),dm(t,1)}};Np=function(t){if(t.tag===13){var e=Ji(t,134217728);if(e!==null){var n=pn();pi(e,t,134217728,n)}dm(t,134217728)}};Cx=function(t){if(t.tag===13){var e=Dr(t),n=Ji(t,e);if(n!==null){var i=pn();pi(n,t,e,i)}dm(t,e)}};Rx=function(){return ut};Px=function(t,e){var n=ut;try{return ut=t,e()}finally{ut=n}};yd=function(t,e,n){switch(e){case"input":if(hd(t,n),e=n.name,n.type==="radio"&&e!=null){for(n=t;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+e)+'][type="radio"]'),e=0;e<n.length;e++){var i=n[e];if(i!==t&&i.form===t.form){var r=du(i);if(!r)throw Error(se(90));ax(i),hd(i,r)}}}break;case"textarea":cx(t,n);break;case"select":e=n.value,e!=null&&io(t,!!n.multiple,e,!1)}};gx=am;vx=gs;var sw={usingClientEntryPoint:!1,Events:[$a,js,du,px,mx,am]},Go={findFiberByHostInstance:ns,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},ow={bundleType:Go.bundleType,version:Go.version,rendererPackageName:Go.rendererPackageName,rendererConfig:Go.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:or.ReactCurrentDispatcher,findHostInstanceByFiber:function(t){return t=yx(t),t===null?null:t.stateNode},findFiberByHostInstance:Go.findFiberByHostInstance||iw,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Tl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Tl.isDisabled&&Tl.supportsFiber)try{lu=Tl.inject(ow),Ri=Tl}catch{}}Vn.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sw;Vn.createPortal=function(t,e){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!pm(e))throw Error(se(200));return nw(t,e,null,n)};Vn.createRoot=function(t,e){if(!pm(t))throw Error(se(299));var n=!1,i="",r=Qy;return e!=null&&(e.unstable_strictMode===!0&&(n=!0),e.identifierPrefix!==void 0&&(i=e.identifierPrefix),e.onRecoverableError!==void 0&&(r=e.onRecoverableError)),e=fm(t,1,!1,null,null,n,!1,i,r),t[Qi]=e.current,ba(t.nodeType===8?t.parentNode:t),new hm(e)};Vn.findDOMNode=function(t){if(t==null)return null;if(t.nodeType===1)return t;var e=t._reactInternals;if(e===void 0)throw typeof t.render=="function"?Error(se(188)):(t=Object.keys(t).join(","),Error(se(268,t)));return t=yx(e),t=t===null?null:t.stateNode,t};Vn.flushSync=function(t){return gs(t)};Vn.hydrate=function(t,e,n){if(!Su(e))throw Error(se(200));return Mu(null,t,e,!0,n)};Vn.hydrateRoot=function(t,e,n){if(!pm(t))throw Error(se(405));var i=n!=null&&n.hydratedSources||null,r=!1,s="",o=Qy;if(n!=null&&(n.unstable_strictMode===!0&&(r=!0),n.identifierPrefix!==void 0&&(s=n.identifierPrefix),n.onRecoverableError!==void 0&&(o=n.onRecoverableError)),e=Zy(e,null,t,1,n??null,r,!1,s,o),t[Qi]=e.current,ba(t),i)for(t=0;t<i.length;t++)n=i[t],r=n._getVersion,r=r(n._source),e.mutableSourceEagerHydrationData==null?e.mutableSourceEagerHydrationData=[n,r]:e.mutableSourceEagerHydrationData.push(n,r);return new yu(e)};Vn.render=function(t,e,n){if(!Su(e))throw Error(se(200));return Mu(null,t,e,!1,n)};Vn.unmountComponentAtNode=function(t){if(!Su(t))throw Error(se(40));return t._reactRootContainer?(gs(function(){Mu(null,null,t,!1,function(){t._reactRootContainer=null,t[Qi]=null})}),!0):!1};Vn.unstable_batchedUpdates=am;Vn.unstable_renderSubtreeIntoContainer=function(t,e,n,i){if(!Su(n))throw Error(se(200));if(t==null||t._reactInternals===void 0)throw Error(se(38));return Mu(t,e,n,!1,i)};Vn.version="18.3.1-next-f1338f8080-20240426";function Jy(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(Jy)}catch(t){console.error(t)}}Jy(),J_.exports=Vn;var eS=J_.exports;const aw=z_(eS);var tS,g0=eS;tS=g0.createRoot,g0.hydrateRoot;const lw="modulepreload",cw=function(t){return"/cv-juann/"+t},v0={},uw=function(e,n,i){let r=Promise.resolve();if(n&&n.length>0){document.getElementsByTagName("link");const o=document.querySelector("meta[property=csp-nonce]"),a=(o==null?void 0:o.nonce)||(o==null?void 0:o.getAttribute("nonce"));r=Promise.allSettled(n.map(l=>{if(l=cw(l),l in v0)return;v0[l]=!0;const c=l.endsWith(".css"),f=c?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${l}"]${f}`))return;const u=document.createElement("link");if(u.rel=c?"stylesheet":lw,c||(u.as="script"),u.crossOrigin="",u.href=l,a&&u.setAttribute("nonce",a),document.head.appendChild(u),c)return new Promise((h,p)=>{u.addEventListener("load",h),u.addEventListener("error",()=>p(new Error(`Unable to preload CSS for ${l}`)))})}))}function s(o){const a=new Event("vite:preloadError",{cancelable:!0});if(a.payload=o,window.dispatchEvent(a),!a.defaultPrevented)throw o}return r.then(o=>{for(const a of o||[])a.status==="rejected"&&s(a.reason);return e().catch(s)})};/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */const mm="182",fw=0,_0=1,dw=2,pc=1,hw=2,na=3,Ur=0,Rn=1,Gi=2,$i=0,co=1,Jd=2,x0=3,y0=4,pw=5,es=100,mw=101,gw=102,vw=103,_w=104,xw=200,yw=201,Sw=202,Mw=203,eh=204,th=205,Ew=206,Tw=207,ww=208,Aw=209,bw=210,Cw=211,Rw=212,Pw=213,Dw=214,nh=0,ih=1,rh=2,yo=3,sh=4,oh=5,ah=6,lh=7,nS=0,Lw=1,Iw=2,Di=0,iS=1,rS=2,sS=3,oS=4,aS=5,lS=6,cS=7,uS=300,vs=301,So=302,ch=303,uh=304,Eu=306,fh=1e3,Xi=1001,dh=1002,Kt=1003,Nw=1004,wl=1005,sn=1006,uf=1007,ss=1008,$n=1009,fS=1010,dS=1011,Fa=1012,gm=1013,Ni=1014,bi=1015,tr=1016,vm=1017,_m=1018,Oa=1020,hS=35902,pS=35899,mS=1021,gS=1022,fi=1023,nr=1026,os=1027,vS=1028,xm=1029,Mo=1030,ym=1031,Sm=1033,mc=33776,gc=33777,vc=33778,_c=33779,hh=35840,ph=35841,mh=35842,gh=35843,vh=36196,_h=37492,xh=37496,yh=37488,Sh=37489,Mh=37490,Eh=37491,Th=37808,wh=37809,Ah=37810,bh=37811,Ch=37812,Rh=37813,Ph=37814,Dh=37815,Lh=37816,Ih=37817,Nh=37818,Uh=37819,Fh=37820,Oh=37821,kh=36492,Bh=36494,Vh=36495,zh=36283,Hh=36284,Gh=36285,Wh=36286,Uw=3200,Fw=0,Ow=1,yr="",Wn="srgb",Eo="srgb-linear",Kc="linear",lt="srgb",Es=7680,S0=519,kw=512,Bw=513,Vw=514,Mm=515,zw=516,Hw=517,Em=518,Gw=519,M0=35044,E0="300 es",Ci=2e3,Zc=2001;function _S(t){for(let e=t.length-1;e>=0;--e)if(t[e]>=65535)return!0;return!1}function Qc(t){return document.createElementNS("http://www.w3.org/1999/xhtml",t)}function Ww(){const t=Qc("canvas");return t.style.display="block",t}const T0={};function w0(...t){const e="THREE."+t.shift();console.log(e,...t)}function Be(...t){const e="THREE."+t.shift();console.warn(e,...t)}function it(...t){const e="THREE."+t.shift();console.error(e,...t)}function ka(...t){const e=t.join(" ");e in T0||(T0[e]=!0,Be(...t))}function jw(t,e,n){return new Promise(function(i,r){function s(){switch(t.clientWaitSync(e,t.SYNC_FLUSH_COMMANDS_BIT,0)){case t.WAIT_FAILED:r();break;case t.TIMEOUT_EXPIRED:setTimeout(s,n);break;default:i()}}setTimeout(s,n)})}class Ro{addEventListener(e,n){this._listeners===void 0&&(this._listeners={});const i=this._listeners;i[e]===void 0&&(i[e]=[]),i[e].indexOf(n)===-1&&i[e].push(n)}hasEventListener(e,n){const i=this._listeners;return i===void 0?!1:i[e]!==void 0&&i[e].indexOf(n)!==-1}removeEventListener(e,n){const i=this._listeners;if(i===void 0)return;const r=i[e];if(r!==void 0){const s=r.indexOf(n);s!==-1&&r.splice(s,1)}}dispatchEvent(e){const n=this._listeners;if(n===void 0)return;const i=n[e.type];if(i!==void 0){e.target=this;const r=i.slice(0);for(let s=0,o=r.length;s<o;s++)r[s].call(this,e);e.target=null}}}const tn=["00","01","02","03","04","05","06","07","08","09","0a","0b","0c","0d","0e","0f","10","11","12","13","14","15","16","17","18","19","1a","1b","1c","1d","1e","1f","20","21","22","23","24","25","26","27","28","29","2a","2b","2c","2d","2e","2f","30","31","32","33","34","35","36","37","38","39","3a","3b","3c","3d","3e","3f","40","41","42","43","44","45","46","47","48","49","4a","4b","4c","4d","4e","4f","50","51","52","53","54","55","56","57","58","59","5a","5b","5c","5d","5e","5f","60","61","62","63","64","65","66","67","68","69","6a","6b","6c","6d","6e","6f","70","71","72","73","74","75","76","77","78","79","7a","7b","7c","7d","7e","7f","80","81","82","83","84","85","86","87","88","89","8a","8b","8c","8d","8e","8f","90","91","92","93","94","95","96","97","98","99","9a","9b","9c","9d","9e","9f","a0","a1","a2","a3","a4","a5","a6","a7","a8","a9","aa","ab","ac","ad","ae","af","b0","b1","b2","b3","b4","b5","b6","b7","b8","b9","ba","bb","bc","bd","be","bf","c0","c1","c2","c3","c4","c5","c6","c7","c8","c9","ca","cb","cc","cd","ce","cf","d0","d1","d2","d3","d4","d5","d6","d7","d8","d9","da","db","dc","dd","de","df","e0","e1","e2","e3","e4","e5","e6","e7","e8","e9","ea","eb","ec","ed","ee","ef","f0","f1","f2","f3","f4","f5","f6","f7","f8","f9","fa","fb","fc","fd","fe","ff"],ff=Math.PI/180,jh=180/Math.PI;function Ka(){const t=Math.random()*4294967295|0,e=Math.random()*4294967295|0,n=Math.random()*4294967295|0,i=Math.random()*4294967295|0;return(tn[t&255]+tn[t>>8&255]+tn[t>>16&255]+tn[t>>24&255]+"-"+tn[e&255]+tn[e>>8&255]+"-"+tn[e>>16&15|64]+tn[e>>24&255]+"-"+tn[n&63|128]+tn[n>>8&255]+"-"+tn[n>>16&255]+tn[n>>24&255]+tn[i&255]+tn[i>>8&255]+tn[i>>16&255]+tn[i>>24&255]).toLowerCase()}function qe(t,e,n){return Math.max(e,Math.min(n,t))}function Xw(t,e){return(t%e+e)%e}function df(t,e,n){return(1-n)*t+n*e}function Wo(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return t/4294967295;case Uint16Array:return t/65535;case Uint8Array:return t/255;case Int32Array:return Math.max(t/2147483647,-1);case Int16Array:return Math.max(t/32767,-1);case Int8Array:return Math.max(t/127,-1);default:throw new Error("Invalid component type.")}}function Sn(t,e){switch(e.constructor){case Float32Array:return t;case Uint32Array:return Math.round(t*4294967295);case Uint16Array:return Math.round(t*65535);case Uint8Array:return Math.round(t*255);case Int32Array:return Math.round(t*2147483647);case Int16Array:return Math.round(t*32767);case Int8Array:return Math.round(t*127);default:throw new Error("Invalid component type.")}}class pt{constructor(e=0,n=0){pt.prototype.isVector2=!0,this.x=e,this.y=n}get width(){return this.x}set width(e){this.x=e}get height(){return this.y}set height(e){this.y=e}set(e,n){return this.x=e,this.y=n,this}setScalar(e){return this.x=e,this.y=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y)}copy(e){return this.x=e.x,this.y=e.y,this}add(e){return this.x+=e.x,this.y+=e.y,this}addScalar(e){return this.x+=e,this.y+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this}subScalar(e){return this.x-=e,this.y-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this}multiply(e){return this.x*=e.x,this.y*=e.y,this}multiplyScalar(e){return this.x*=e,this.y*=e,this}divide(e){return this.x/=e.x,this.y/=e.y,this}divideScalar(e){return this.multiplyScalar(1/e)}applyMatrix3(e){const n=this.x,i=this.y,r=e.elements;return this.x=r[0]*n+r[3]*i+r[6],this.y=r[1]*n+r[4]*i+r[7],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this}negate(){return this.x=-this.x,this.y=-this.y,this}dot(e){return this.x*e.x+this.y*e.y}cross(e){return this.x*e.y-this.y*e.x}lengthSq(){return this.x*this.x+this.y*this.y}length(){return Math.sqrt(this.x*this.x+this.y*this.y)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)}normalize(){return this.divideScalar(this.length()||1)}angle(){return Math.atan2(-this.y,-this.x)+Math.PI}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y;return n*n+i*i}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this}equals(e){return e.x===this.x&&e.y===this.y}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this}rotateAround(e,n){const i=Math.cos(n),r=Math.sin(n),s=this.x-e.x,o=this.y-e.y;return this.x=s*i-o*r+e.x,this.y=s*r+o*i+e.y,this}random(){return this.x=Math.random(),this.y=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y}}class Za{constructor(e=0,n=0,i=0,r=1){this.isQuaternion=!0,this._x=e,this._y=n,this._z=i,this._w=r}static slerpFlat(e,n,i,r,s,o,a){let l=i[r+0],c=i[r+1],f=i[r+2],u=i[r+3],h=s[o+0],p=s[o+1],g=s[o+2],x=s[o+3];if(a<=0){e[n+0]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u;return}if(a>=1){e[n+0]=h,e[n+1]=p,e[n+2]=g,e[n+3]=x;return}if(u!==x||l!==h||c!==p||f!==g){let m=l*h+c*p+f*g+u*x;m<0&&(h=-h,p=-p,g=-g,x=-x,m=-m);let d=1-a;if(m<.9995){const v=Math.acos(m),_=Math.sin(v);d=Math.sin(d*v)/_,a=Math.sin(a*v)/_,l=l*d+h*a,c=c*d+p*a,f=f*d+g*a,u=u*d+x*a}else{l=l*d+h*a,c=c*d+p*a,f=f*d+g*a,u=u*d+x*a;const v=1/Math.sqrt(l*l+c*c+f*f+u*u);l*=v,c*=v,f*=v,u*=v}}e[n]=l,e[n+1]=c,e[n+2]=f,e[n+3]=u}static multiplyQuaternionsFlat(e,n,i,r,s,o){const a=i[r],l=i[r+1],c=i[r+2],f=i[r+3],u=s[o],h=s[o+1],p=s[o+2],g=s[o+3];return e[n]=a*g+f*u+l*p-c*h,e[n+1]=l*g+f*h+c*u-a*p,e[n+2]=c*g+f*p+a*h-l*u,e[n+3]=f*g-a*u-l*h-c*p,e}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get w(){return this._w}set w(e){this._w=e,this._onChangeCallback()}set(e,n,i,r){return this._x=e,this._y=n,this._z=i,this._w=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._w)}copy(e){return this._x=e.x,this._y=e.y,this._z=e.z,this._w=e.w,this._onChangeCallback(),this}setFromEuler(e,n=!0){const i=e._x,r=e._y,s=e._z,o=e._order,a=Math.cos,l=Math.sin,c=a(i/2),f=a(r/2),u=a(s/2),h=l(i/2),p=l(r/2),g=l(s/2);switch(o){case"XYZ":this._x=h*f*u+c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u-h*p*g;break;case"YXZ":this._x=h*f*u+c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u+h*p*g;break;case"ZXY":this._x=h*f*u-c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u-h*p*g;break;case"ZYX":this._x=h*f*u-c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u+h*p*g;break;case"YZX":this._x=h*f*u+c*p*g,this._y=c*p*u+h*f*g,this._z=c*f*g-h*p*u,this._w=c*f*u-h*p*g;break;case"XZY":this._x=h*f*u-c*p*g,this._y=c*p*u-h*f*g,this._z=c*f*g+h*p*u,this._w=c*f*u+h*p*g;break;default:Be("Quaternion: .setFromEuler() encountered an unknown order: "+o)}return n===!0&&this._onChangeCallback(),this}setFromAxisAngle(e,n){const i=n/2,r=Math.sin(i);return this._x=e.x*r,this._y=e.y*r,this._z=e.z*r,this._w=Math.cos(i),this._onChangeCallback(),this}setFromRotationMatrix(e){const n=e.elements,i=n[0],r=n[4],s=n[8],o=n[1],a=n[5],l=n[9],c=n[2],f=n[6],u=n[10],h=i+a+u;if(h>0){const p=.5/Math.sqrt(h+1);this._w=.25/p,this._x=(f-l)*p,this._y=(s-c)*p,this._z=(o-r)*p}else if(i>a&&i>u){const p=2*Math.sqrt(1+i-a-u);this._w=(f-l)/p,this._x=.25*p,this._y=(r+o)/p,this._z=(s+c)/p}else if(a>u){const p=2*Math.sqrt(1+a-i-u);this._w=(s-c)/p,this._x=(r+o)/p,this._y=.25*p,this._z=(l+f)/p}else{const p=2*Math.sqrt(1+u-i-a);this._w=(o-r)/p,this._x=(s+c)/p,this._y=(l+f)/p,this._z=.25*p}return this._onChangeCallback(),this}setFromUnitVectors(e,n){let i=e.dot(n)+1;return i<1e-8?(i=0,Math.abs(e.x)>Math.abs(e.z)?(this._x=-e.y,this._y=e.x,this._z=0,this._w=i):(this._x=0,this._y=-e.z,this._z=e.y,this._w=i)):(this._x=e.y*n.z-e.z*n.y,this._y=e.z*n.x-e.x*n.z,this._z=e.x*n.y-e.y*n.x,this._w=i),this.normalize()}angleTo(e){return 2*Math.acos(Math.abs(qe(this.dot(e),-1,1)))}rotateTowards(e,n){const i=this.angleTo(e);if(i===0)return this;const r=Math.min(1,n/i);return this.slerp(e,r),this}identity(){return this.set(0,0,0,1)}invert(){return this.conjugate()}conjugate(){return this._x*=-1,this._y*=-1,this._z*=-1,this._onChangeCallback(),this}dot(e){return this._x*e._x+this._y*e._y+this._z*e._z+this._w*e._w}lengthSq(){return this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w}length(){return Math.sqrt(this._x*this._x+this._y*this._y+this._z*this._z+this._w*this._w)}normalize(){let e=this.length();return e===0?(this._x=0,this._y=0,this._z=0,this._w=1):(e=1/e,this._x=this._x*e,this._y=this._y*e,this._z=this._z*e,this._w=this._w*e),this._onChangeCallback(),this}multiply(e){return this.multiplyQuaternions(this,e)}premultiply(e){return this.multiplyQuaternions(e,this)}multiplyQuaternions(e,n){const i=e._x,r=e._y,s=e._z,o=e._w,a=n._x,l=n._y,c=n._z,f=n._w;return this._x=i*f+o*a+r*c-s*l,this._y=r*f+o*l+s*a-i*c,this._z=s*f+o*c+i*l-r*a,this._w=o*f-i*a-r*l-s*c,this._onChangeCallback(),this}slerp(e,n){if(n<=0)return this;if(n>=1)return this.copy(e);let i=e._x,r=e._y,s=e._z,o=e._w,a=this.dot(e);a<0&&(i=-i,r=-r,s=-s,o=-o,a=-a);let l=1-n;if(a<.9995){const c=Math.acos(a),f=Math.sin(c);l=Math.sin(l*c)/f,n=Math.sin(n*c)/f,this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this._onChangeCallback()}else this._x=this._x*l+i*n,this._y=this._y*l+r*n,this._z=this._z*l+s*n,this._w=this._w*l+o*n,this.normalize();return this}slerpQuaternions(e,n,i){return this.copy(e).slerp(n,i)}random(){const e=2*Math.PI*Math.random(),n=2*Math.PI*Math.random(),i=Math.random(),r=Math.sqrt(1-i),s=Math.sqrt(i);return this.set(r*Math.sin(e),r*Math.cos(e),s*Math.sin(n),s*Math.cos(n))}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._w===this._w}fromArray(e,n=0){return this._x=e[n],this._y=e[n+1],this._z=e[n+2],this._w=e[n+3],this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._w,e}fromBufferAttribute(e,n){return this._x=e.getX(n),this._y=e.getY(n),this._z=e.getZ(n),this._w=e.getW(n),this._onChangeCallback(),this}toJSON(){return this.toArray()}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._w}}class G{constructor(e=0,n=0,i=0){G.prototype.isVector3=!0,this.x=e,this.y=n,this.z=i}set(e,n,i){return i===void 0&&(i=this.z),this.x=e,this.y=n,this.z=i,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this}multiplyVectors(e,n){return this.x=e.x*n.x,this.y=e.y*n.y,this.z=e.z*n.z,this}applyEuler(e){return this.applyQuaternion(A0.setFromEuler(e))}applyAxisAngle(e,n){return this.applyQuaternion(A0.setFromAxisAngle(e,n))}applyMatrix3(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[3]*i+s[6]*r,this.y=s[1]*n+s[4]*i+s[7]*r,this.z=s[2]*n+s[5]*i+s[8]*r,this}applyNormalMatrix(e){return this.applyMatrix3(e).normalize()}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=e.elements,o=1/(s[3]*n+s[7]*i+s[11]*r+s[15]);return this.x=(s[0]*n+s[4]*i+s[8]*r+s[12])*o,this.y=(s[1]*n+s[5]*i+s[9]*r+s[13])*o,this.z=(s[2]*n+s[6]*i+s[10]*r+s[14])*o,this}applyQuaternion(e){const n=this.x,i=this.y,r=this.z,s=e.x,o=e.y,a=e.z,l=e.w,c=2*(o*r-a*i),f=2*(a*n-s*r),u=2*(s*i-o*n);return this.x=n+l*c+o*u-a*f,this.y=i+l*f+a*c-s*u,this.z=r+l*u+s*f-o*c,this}project(e){return this.applyMatrix4(e.matrixWorldInverse).applyMatrix4(e.projectionMatrix)}unproject(e){return this.applyMatrix4(e.projectionMatrixInverse).applyMatrix4(e.matrixWorld)}transformDirection(e){const n=this.x,i=this.y,r=this.z,s=e.elements;return this.x=s[0]*n+s[4]*i+s[8]*r,this.y=s[1]*n+s[5]*i+s[9]*r,this.z=s[2]*n+s[6]*i+s[10]*r,this.normalize()}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this}divideScalar(e){return this.multiplyScalar(1/e)}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this}cross(e){return this.crossVectors(this,e)}crossVectors(e,n){const i=e.x,r=e.y,s=e.z,o=n.x,a=n.y,l=n.z;return this.x=r*l-s*a,this.y=s*o-i*l,this.z=i*a-r*o,this}projectOnVector(e){const n=e.lengthSq();if(n===0)return this.set(0,0,0);const i=e.dot(this)/n;return this.copy(e).multiplyScalar(i)}projectOnPlane(e){return hf.copy(this).projectOnVector(e),this.sub(hf)}reflect(e){return this.sub(hf.copy(e).multiplyScalar(2*this.dot(e)))}angleTo(e){const n=Math.sqrt(this.lengthSq()*e.lengthSq());if(n===0)return Math.PI/2;const i=this.dot(e)/n;return Math.acos(qe(i,-1,1))}distanceTo(e){return Math.sqrt(this.distanceToSquared(e))}distanceToSquared(e){const n=this.x-e.x,i=this.y-e.y,r=this.z-e.z;return n*n+i*i+r*r}manhattanDistanceTo(e){return Math.abs(this.x-e.x)+Math.abs(this.y-e.y)+Math.abs(this.z-e.z)}setFromSpherical(e){return this.setFromSphericalCoords(e.radius,e.phi,e.theta)}setFromSphericalCoords(e,n,i){const r=Math.sin(n)*e;return this.x=r*Math.sin(i),this.y=Math.cos(n)*e,this.z=r*Math.cos(i),this}setFromCylindrical(e){return this.setFromCylindricalCoords(e.radius,e.theta,e.y)}setFromCylindricalCoords(e,n,i){return this.x=e*Math.sin(n),this.y=i,this.z=e*Math.cos(n),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this}setFromMatrixScale(e){const n=this.setFromMatrixColumn(e,0).length(),i=this.setFromMatrixColumn(e,1).length(),r=this.setFromMatrixColumn(e,2).length();return this.x=n,this.y=i,this.z=r,this}setFromMatrixColumn(e,n){return this.fromArray(e.elements,n*4)}setFromMatrix3Column(e,n){return this.fromArray(e.elements,n*3)}setFromEuler(e){return this.x=e._x,this.y=e._y,this.z=e._z,this}setFromColor(e){return this.x=e.r,this.y=e.g,this.z=e.b,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this}randomDirection(){const e=Math.random()*Math.PI*2,n=Math.random()*2-1,i=Math.sqrt(1-n*n);return this.x=i*Math.cos(e),this.y=n,this.z=i*Math.sin(e),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z}}const hf=new G,A0=new Za;class He{constructor(e,n,i,r,s,o,a,l,c){He.prototype.isMatrix3=!0,this.elements=[1,0,0,0,1,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c)}set(e,n,i,r,s,o,a,l,c){const f=this.elements;return f[0]=e,f[1]=r,f[2]=a,f[3]=n,f[4]=s,f[5]=l,f[6]=i,f[7]=o,f[8]=c,this}identity(){return this.set(1,0,0,0,1,0,0,0,1),this}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],this}extractBasis(e,n,i){return e.setFromMatrix3Column(this,0),n.setFromMatrix3Column(this,1),i.setFromMatrix3Column(this,2),this}setFromMatrix4(e){const n=e.elements;return this.set(n[0],n[4],n[8],n[1],n[5],n[9],n[2],n[6],n[10]),this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[3],l=i[6],c=i[1],f=i[4],u=i[7],h=i[2],p=i[5],g=i[8],x=r[0],m=r[3],d=r[6],v=r[1],_=r[4],S=r[7],E=r[2],A=r[5],b=r[8];return s[0]=o*x+a*v+l*E,s[3]=o*m+a*_+l*A,s[6]=o*d+a*S+l*b,s[1]=c*x+f*v+u*E,s[4]=c*m+f*_+u*A,s[7]=c*d+f*S+u*b,s[2]=h*x+p*v+g*E,s[5]=h*m+p*_+g*A,s[8]=h*d+p*S+g*b,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[3]*=e,n[6]*=e,n[1]*=e,n[4]*=e,n[7]*=e,n[2]*=e,n[5]*=e,n[8]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8];return n*o*f-n*a*c-i*s*f+i*a*l+r*s*c-r*o*l}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=f*o-a*c,h=a*l-f*s,p=c*s-o*l,g=n*u+i*h+r*p;if(g===0)return this.set(0,0,0,0,0,0,0,0,0);const x=1/g;return e[0]=u*x,e[1]=(r*c-f*i)*x,e[2]=(a*i-r*o)*x,e[3]=h*x,e[4]=(f*n-r*l)*x,e[5]=(r*s-a*n)*x,e[6]=p*x,e[7]=(i*l-c*n)*x,e[8]=(o*n-i*s)*x,this}transpose(){let e;const n=this.elements;return e=n[1],n[1]=n[3],n[3]=e,e=n[2],n[2]=n[6],n[6]=e,e=n[5],n[5]=n[7],n[7]=e,this}getNormalMatrix(e){return this.setFromMatrix4(e).invert().transpose()}transposeIntoArray(e){const n=this.elements;return e[0]=n[0],e[1]=n[3],e[2]=n[6],e[3]=n[1],e[4]=n[4],e[5]=n[7],e[6]=n[2],e[7]=n[5],e[8]=n[8],this}setUvTransform(e,n,i,r,s,o,a){const l=Math.cos(s),c=Math.sin(s);return this.set(i*l,i*c,-i*(l*o+c*a)+o+e,-r*c,r*l,-r*(-c*o+l*a)+a+n,0,0,1),this}scale(e,n){return this.premultiply(pf.makeScale(e,n)),this}rotate(e){return this.premultiply(pf.makeRotation(-e)),this}translate(e,n){return this.premultiply(pf.makeTranslation(e,n)),this}makeTranslation(e,n){return e.isVector2?this.set(1,0,e.x,0,1,e.y,0,0,1):this.set(1,0,e,0,1,n,0,0,1),this}makeRotation(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,i,n,0,0,0,1),this}makeScale(e,n){return this.set(e,0,0,0,n,0,0,0,1),this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<9;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<9;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e}clone(){return new this.constructor().fromArray(this.elements)}}const pf=new He,b0=new He().set(.4123908,.3575843,.1804808,.212639,.7151687,.0721923,.0193308,.1191948,.9505322),C0=new He().set(3.2409699,-1.5373832,-.4986108,-.9692436,1.8759675,.0415551,.0556301,-.203977,1.0569715);function Yw(){const t={enabled:!0,workingColorSpace:Eo,spaces:{},convert:function(r,s,o){return this.enabled===!1||s===o||!s||!o||(this.spaces[s].transfer===lt&&(r.r=qi(r.r),r.g=qi(r.g),r.b=qi(r.b)),this.spaces[s].primaries!==this.spaces[o].primaries&&(r.applyMatrix3(this.spaces[s].toXYZ),r.applyMatrix3(this.spaces[o].fromXYZ)),this.spaces[o].transfer===lt&&(r.r=uo(r.r),r.g=uo(r.g),r.b=uo(r.b))),r},workingToColorSpace:function(r,s){return this.convert(r,this.workingColorSpace,s)},colorSpaceToWorking:function(r,s){return this.convert(r,s,this.workingColorSpace)},getPrimaries:function(r){return this.spaces[r].primaries},getTransfer:function(r){return r===yr?Kc:this.spaces[r].transfer},getToneMappingMode:function(r){return this.spaces[r].outputColorSpaceConfig.toneMappingMode||"standard"},getLuminanceCoefficients:function(r,s=this.workingColorSpace){return r.fromArray(this.spaces[s].luminanceCoefficients)},define:function(r){Object.assign(this.spaces,r)},_getMatrix:function(r,s,o){return r.copy(this.spaces[s].toXYZ).multiply(this.spaces[o].fromXYZ)},_getDrawingBufferColorSpace:function(r){return this.spaces[r].outputColorSpaceConfig.drawingBufferColorSpace},_getUnpackColorSpace:function(r=this.workingColorSpace){return this.spaces[r].workingColorSpaceConfig.unpackColorSpace},fromWorkingColorSpace:function(r,s){return ka("ColorManagement: .fromWorkingColorSpace() has been renamed to .workingToColorSpace()."),t.workingToColorSpace(r,s)},toWorkingColorSpace:function(r,s){return ka("ColorManagement: .toWorkingColorSpace() has been renamed to .colorSpaceToWorking()."),t.colorSpaceToWorking(r,s)}},e=[.64,.33,.3,.6,.15,.06],n=[.2126,.7152,.0722],i=[.3127,.329];return t.define({[Eo]:{primaries:e,whitePoint:i,transfer:Kc,toXYZ:b0,fromXYZ:C0,luminanceCoefficients:n,workingColorSpaceConfig:{unpackColorSpace:Wn},outputColorSpaceConfig:{drawingBufferColorSpace:Wn}},[Wn]:{primaries:e,whitePoint:i,transfer:lt,toXYZ:b0,fromXYZ:C0,luminanceCoefficients:n,outputColorSpaceConfig:{drawingBufferColorSpace:Wn}}}),t}const Qe=Yw();function qi(t){return t<.04045?t*.0773993808:Math.pow(t*.9478672986+.0521327014,2.4)}function uo(t){return t<.0031308?t*12.92:1.055*Math.pow(t,.41666)-.055}let Ts;class $w{static getDataURL(e,n="image/png"){if(/^data:/i.test(e.src)||typeof HTMLCanvasElement>"u")return e.src;let i;if(e instanceof HTMLCanvasElement)i=e;else{Ts===void 0&&(Ts=Qc("canvas")),Ts.width=e.width,Ts.height=e.height;const r=Ts.getContext("2d");e instanceof ImageData?r.putImageData(e,0,0):r.drawImage(e,0,0,e.width,e.height),i=Ts}return i.toDataURL(n)}static sRGBToLinear(e){if(typeof HTMLImageElement<"u"&&e instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&e instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&e instanceof ImageBitmap){const n=Qc("canvas");n.width=e.width,n.height=e.height;const i=n.getContext("2d");i.drawImage(e,0,0,e.width,e.height);const r=i.getImageData(0,0,e.width,e.height),s=r.data;for(let o=0;o<s.length;o++)s[o]=qi(s[o]/255)*255;return i.putImageData(r,0,0),n}else if(e.data){const n=e.data.slice(0);for(let i=0;i<n.length;i++)n instanceof Uint8Array||n instanceof Uint8ClampedArray?n[i]=Math.floor(qi(n[i]/255)*255):n[i]=qi(n[i]);return{data:n,width:e.width,height:e.height}}else return Be("ImageUtils.sRGBToLinear(): Unsupported image type. No color space conversion applied."),e}}let qw=0;class Tm{constructor(e=null){this.isSource=!0,Object.defineProperty(this,"id",{value:qw++}),this.uuid=Ka(),this.data=e,this.dataReady=!0,this.version=0}getSize(e){const n=this.data;return typeof HTMLVideoElement<"u"&&n instanceof HTMLVideoElement?e.set(n.videoWidth,n.videoHeight,0):typeof VideoFrame<"u"&&n instanceof VideoFrame?e.set(n.displayHeight,n.displayWidth,0):n!==null?e.set(n.width,n.height,n.depth||0):e.set(0,0,0),e}set needsUpdate(e){e===!0&&this.version++}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.images[this.uuid]!==void 0)return e.images[this.uuid];const i={uuid:this.uuid,url:""},r=this.data;if(r!==null){let s;if(Array.isArray(r)){s=[];for(let o=0,a=r.length;o<a;o++)r[o].isDataTexture?s.push(mf(r[o].image)):s.push(mf(r[o]))}else s=mf(r);i.url=s}return n||(e.images[this.uuid]=i),i}}function mf(t){return typeof HTMLImageElement<"u"&&t instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&t instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&t instanceof ImageBitmap?$w.getDataURL(t):t.data?{data:Array.from(t.data),width:t.width,height:t.height,type:t.data.constructor.name}:(Be("Texture: Unable to serialize Texture."),{})}let Kw=0;const gf=new G;class mn extends Ro{constructor(e=mn.DEFAULT_IMAGE,n=mn.DEFAULT_MAPPING,i=Xi,r=Xi,s=sn,o=ss,a=fi,l=$n,c=mn.DEFAULT_ANISOTROPY,f=yr){super(),this.isTexture=!0,Object.defineProperty(this,"id",{value:Kw++}),this.uuid=Ka(),this.name="",this.source=new Tm(e),this.mipmaps=[],this.mapping=n,this.channel=0,this.wrapS=i,this.wrapT=r,this.magFilter=s,this.minFilter=o,this.anisotropy=c,this.format=a,this.internalFormat=null,this.type=l,this.offset=new pt(0,0),this.repeat=new pt(1,1),this.center=new pt(0,0),this.rotation=0,this.matrixAutoUpdate=!0,this.matrix=new He,this.generateMipmaps=!0,this.premultiplyAlpha=!1,this.flipY=!0,this.unpackAlignment=4,this.colorSpace=f,this.userData={},this.updateRanges=[],this.version=0,this.onUpdate=null,this.renderTarget=null,this.isRenderTargetTexture=!1,this.isArrayTexture=!!(e&&e.depth&&e.depth>1),this.pmremVersion=0}get width(){return this.source.getSize(gf).x}get height(){return this.source.getSize(gf).y}get depth(){return this.source.getSize(gf).z}get image(){return this.source.data}set image(e=null){this.source.data=e}updateMatrix(){this.matrix.setUvTransform(this.offset.x,this.offset.y,this.repeat.x,this.repeat.y,this.rotation,this.center.x,this.center.y)}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}clone(){return new this.constructor().copy(this)}copy(e){return this.name=e.name,this.source=e.source,this.mipmaps=e.mipmaps.slice(0),this.mapping=e.mapping,this.channel=e.channel,this.wrapS=e.wrapS,this.wrapT=e.wrapT,this.magFilter=e.magFilter,this.minFilter=e.minFilter,this.anisotropy=e.anisotropy,this.format=e.format,this.internalFormat=e.internalFormat,this.type=e.type,this.offset.copy(e.offset),this.repeat.copy(e.repeat),this.center.copy(e.center),this.rotation=e.rotation,this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrix.copy(e.matrix),this.generateMipmaps=e.generateMipmaps,this.premultiplyAlpha=e.premultiplyAlpha,this.flipY=e.flipY,this.unpackAlignment=e.unpackAlignment,this.colorSpace=e.colorSpace,this.renderTarget=e.renderTarget,this.isRenderTargetTexture=e.isRenderTargetTexture,this.isArrayTexture=e.isArrayTexture,this.userData=JSON.parse(JSON.stringify(e.userData)),this.needsUpdate=!0,this}setValues(e){for(const n in e){const i=e[n];if(i===void 0){Be(`Texture.setValues(): parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Texture.setValues(): property '${n}' does not exist.`);continue}r&&i&&r.isVector2&&i.isVector2||r&&i&&r.isVector3&&i.isVector3||r&&i&&r.isMatrix3&&i.isMatrix3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";if(!n&&e.textures[this.uuid]!==void 0)return e.textures[this.uuid];const i={metadata:{version:4.7,type:"Texture",generator:"Texture.toJSON"},uuid:this.uuid,name:this.name,image:this.source.toJSON(e).uuid,mapping:this.mapping,channel:this.channel,repeat:[this.repeat.x,this.repeat.y],offset:[this.offset.x,this.offset.y],center:[this.center.x,this.center.y],rotation:this.rotation,wrap:[this.wrapS,this.wrapT],format:this.format,internalFormat:this.internalFormat,type:this.type,colorSpace:this.colorSpace,minFilter:this.minFilter,magFilter:this.magFilter,anisotropy:this.anisotropy,flipY:this.flipY,generateMipmaps:this.generateMipmaps,premultiplyAlpha:this.premultiplyAlpha,unpackAlignment:this.unpackAlignment};return Object.keys(this.userData).length>0&&(i.userData=this.userData),n||(e.textures[this.uuid]=i),i}dispose(){this.dispatchEvent({type:"dispose"})}transformUv(e){if(this.mapping!==uS)return e;if(e.applyMatrix3(this.matrix),e.x<0||e.x>1)switch(this.wrapS){case fh:e.x=e.x-Math.floor(e.x);break;case Xi:e.x=e.x<0?0:1;break;case dh:Math.abs(Math.floor(e.x)%2)===1?e.x=Math.ceil(e.x)-e.x:e.x=e.x-Math.floor(e.x);break}if(e.y<0||e.y>1)switch(this.wrapT){case fh:e.y=e.y-Math.floor(e.y);break;case Xi:e.y=e.y<0?0:1;break;case dh:Math.abs(Math.floor(e.y)%2)===1?e.y=Math.ceil(e.y)-e.y:e.y=e.y-Math.floor(e.y);break}return this.flipY&&(e.y=1-e.y),e}set needsUpdate(e){e===!0&&(this.version++,this.source.needsUpdate=!0)}set needsPMREMUpdate(e){e===!0&&this.pmremVersion++}}mn.DEFAULT_IMAGE=null;mn.DEFAULT_MAPPING=uS;mn.DEFAULT_ANISOTROPY=1;class It{constructor(e=0,n=0,i=0,r=1){It.prototype.isVector4=!0,this.x=e,this.y=n,this.z=i,this.w=r}get width(){return this.z}set width(e){this.z=e}get height(){return this.w}set height(e){this.w=e}set(e,n,i,r){return this.x=e,this.y=n,this.z=i,this.w=r,this}setScalar(e){return this.x=e,this.y=e,this.z=e,this.w=e,this}setX(e){return this.x=e,this}setY(e){return this.y=e,this}setZ(e){return this.z=e,this}setW(e){return this.w=e,this}setComponent(e,n){switch(e){case 0:this.x=n;break;case 1:this.y=n;break;case 2:this.z=n;break;case 3:this.w=n;break;default:throw new Error("index is out of range: "+e)}return this}getComponent(e){switch(e){case 0:return this.x;case 1:return this.y;case 2:return this.z;case 3:return this.w;default:throw new Error("index is out of range: "+e)}}clone(){return new this.constructor(this.x,this.y,this.z,this.w)}copy(e){return this.x=e.x,this.y=e.y,this.z=e.z,this.w=e.w!==void 0?e.w:1,this}add(e){return this.x+=e.x,this.y+=e.y,this.z+=e.z,this.w+=e.w,this}addScalar(e){return this.x+=e,this.y+=e,this.z+=e,this.w+=e,this}addVectors(e,n){return this.x=e.x+n.x,this.y=e.y+n.y,this.z=e.z+n.z,this.w=e.w+n.w,this}addScaledVector(e,n){return this.x+=e.x*n,this.y+=e.y*n,this.z+=e.z*n,this.w+=e.w*n,this}sub(e){return this.x-=e.x,this.y-=e.y,this.z-=e.z,this.w-=e.w,this}subScalar(e){return this.x-=e,this.y-=e,this.z-=e,this.w-=e,this}subVectors(e,n){return this.x=e.x-n.x,this.y=e.y-n.y,this.z=e.z-n.z,this.w=e.w-n.w,this}multiply(e){return this.x*=e.x,this.y*=e.y,this.z*=e.z,this.w*=e.w,this}multiplyScalar(e){return this.x*=e,this.y*=e,this.z*=e,this.w*=e,this}applyMatrix4(e){const n=this.x,i=this.y,r=this.z,s=this.w,o=e.elements;return this.x=o[0]*n+o[4]*i+o[8]*r+o[12]*s,this.y=o[1]*n+o[5]*i+o[9]*r+o[13]*s,this.z=o[2]*n+o[6]*i+o[10]*r+o[14]*s,this.w=o[3]*n+o[7]*i+o[11]*r+o[15]*s,this}divide(e){return this.x/=e.x,this.y/=e.y,this.z/=e.z,this.w/=e.w,this}divideScalar(e){return this.multiplyScalar(1/e)}setAxisAngleFromQuaternion(e){this.w=2*Math.acos(e.w);const n=Math.sqrt(1-e.w*e.w);return n<1e-4?(this.x=1,this.y=0,this.z=0):(this.x=e.x/n,this.y=e.y/n,this.z=e.z/n),this}setAxisAngleFromRotationMatrix(e){let n,i,r,s;const l=e.elements,c=l[0],f=l[4],u=l[8],h=l[1],p=l[5],g=l[9],x=l[2],m=l[6],d=l[10];if(Math.abs(f-h)<.01&&Math.abs(u-x)<.01&&Math.abs(g-m)<.01){if(Math.abs(f+h)<.1&&Math.abs(u+x)<.1&&Math.abs(g+m)<.1&&Math.abs(c+p+d-3)<.1)return this.set(1,0,0,0),this;n=Math.PI;const _=(c+1)/2,S=(p+1)/2,E=(d+1)/2,A=(f+h)/4,b=(u+x)/4,R=(g+m)/4;return _>S&&_>E?_<.01?(i=0,r=.707106781,s=.707106781):(i=Math.sqrt(_),r=A/i,s=b/i):S>E?S<.01?(i=.707106781,r=0,s=.707106781):(r=Math.sqrt(S),i=A/r,s=R/r):E<.01?(i=.707106781,r=.707106781,s=0):(s=Math.sqrt(E),i=b/s,r=R/s),this.set(i,r,s,n),this}let v=Math.sqrt((m-g)*(m-g)+(u-x)*(u-x)+(h-f)*(h-f));return Math.abs(v)<.001&&(v=1),this.x=(m-g)/v,this.y=(u-x)/v,this.z=(h-f)/v,this.w=Math.acos((c+p+d-1)/2),this}setFromMatrixPosition(e){const n=e.elements;return this.x=n[12],this.y=n[13],this.z=n[14],this.w=n[15],this}min(e){return this.x=Math.min(this.x,e.x),this.y=Math.min(this.y,e.y),this.z=Math.min(this.z,e.z),this.w=Math.min(this.w,e.w),this}max(e){return this.x=Math.max(this.x,e.x),this.y=Math.max(this.y,e.y),this.z=Math.max(this.z,e.z),this.w=Math.max(this.w,e.w),this}clamp(e,n){return this.x=qe(this.x,e.x,n.x),this.y=qe(this.y,e.y,n.y),this.z=qe(this.z,e.z,n.z),this.w=qe(this.w,e.w,n.w),this}clampScalar(e,n){return this.x=qe(this.x,e,n),this.y=qe(this.y,e,n),this.z=qe(this.z,e,n),this.w=qe(this.w,e,n),this}clampLength(e,n){const i=this.length();return this.divideScalar(i||1).multiplyScalar(qe(i,e,n))}floor(){return this.x=Math.floor(this.x),this.y=Math.floor(this.y),this.z=Math.floor(this.z),this.w=Math.floor(this.w),this}ceil(){return this.x=Math.ceil(this.x),this.y=Math.ceil(this.y),this.z=Math.ceil(this.z),this.w=Math.ceil(this.w),this}round(){return this.x=Math.round(this.x),this.y=Math.round(this.y),this.z=Math.round(this.z),this.w=Math.round(this.w),this}roundToZero(){return this.x=Math.trunc(this.x),this.y=Math.trunc(this.y),this.z=Math.trunc(this.z),this.w=Math.trunc(this.w),this}negate(){return this.x=-this.x,this.y=-this.y,this.z=-this.z,this.w=-this.w,this}dot(e){return this.x*e.x+this.y*e.y+this.z*e.z+this.w*e.w}lengthSq(){return this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w}length(){return Math.sqrt(this.x*this.x+this.y*this.y+this.z*this.z+this.w*this.w)}manhattanLength(){return Math.abs(this.x)+Math.abs(this.y)+Math.abs(this.z)+Math.abs(this.w)}normalize(){return this.divideScalar(this.length()||1)}setLength(e){return this.normalize().multiplyScalar(e)}lerp(e,n){return this.x+=(e.x-this.x)*n,this.y+=(e.y-this.y)*n,this.z+=(e.z-this.z)*n,this.w+=(e.w-this.w)*n,this}lerpVectors(e,n,i){return this.x=e.x+(n.x-e.x)*i,this.y=e.y+(n.y-e.y)*i,this.z=e.z+(n.z-e.z)*i,this.w=e.w+(n.w-e.w)*i,this}equals(e){return e.x===this.x&&e.y===this.y&&e.z===this.z&&e.w===this.w}fromArray(e,n=0){return this.x=e[n],this.y=e[n+1],this.z=e[n+2],this.w=e[n+3],this}toArray(e=[],n=0){return e[n]=this.x,e[n+1]=this.y,e[n+2]=this.z,e[n+3]=this.w,e}fromBufferAttribute(e,n){return this.x=e.getX(n),this.y=e.getY(n),this.z=e.getZ(n),this.w=e.getW(n),this}random(){return this.x=Math.random(),this.y=Math.random(),this.z=Math.random(),this.w=Math.random(),this}*[Symbol.iterator](){yield this.x,yield this.y,yield this.z,yield this.w}}class Zw extends Ro{constructor(e=1,n=1,i={}){super(),i=Object.assign({generateMipmaps:!1,internalFormat:null,minFilter:sn,depthBuffer:!0,stencilBuffer:!1,resolveDepthBuffer:!0,resolveStencilBuffer:!0,depthTexture:null,samples:0,count:1,depth:1,multiview:!1},i),this.isRenderTarget=!0,this.width=e,this.height=n,this.depth=i.depth,this.scissor=new It(0,0,e,n),this.scissorTest=!1,this.viewport=new It(0,0,e,n);const r={width:e,height:n,depth:i.depth},s=new mn(r);this.textures=[];const o=i.count;for(let a=0;a<o;a++)this.textures[a]=s.clone(),this.textures[a].isRenderTargetTexture=!0,this.textures[a].renderTarget=this;this._setTextureOptions(i),this.depthBuffer=i.depthBuffer,this.stencilBuffer=i.stencilBuffer,this.resolveDepthBuffer=i.resolveDepthBuffer,this.resolveStencilBuffer=i.resolveStencilBuffer,this._depthTexture=null,this.depthTexture=i.depthTexture,this.samples=i.samples,this.multiview=i.multiview}_setTextureOptions(e={}){const n={minFilter:sn,generateMipmaps:!1,flipY:!1,internalFormat:null};e.mapping!==void 0&&(n.mapping=e.mapping),e.wrapS!==void 0&&(n.wrapS=e.wrapS),e.wrapT!==void 0&&(n.wrapT=e.wrapT),e.wrapR!==void 0&&(n.wrapR=e.wrapR),e.magFilter!==void 0&&(n.magFilter=e.magFilter),e.minFilter!==void 0&&(n.minFilter=e.minFilter),e.format!==void 0&&(n.format=e.format),e.type!==void 0&&(n.type=e.type),e.anisotropy!==void 0&&(n.anisotropy=e.anisotropy),e.colorSpace!==void 0&&(n.colorSpace=e.colorSpace),e.flipY!==void 0&&(n.flipY=e.flipY),e.generateMipmaps!==void 0&&(n.generateMipmaps=e.generateMipmaps),e.internalFormat!==void 0&&(n.internalFormat=e.internalFormat);for(let i=0;i<this.textures.length;i++)this.textures[i].setValues(n)}get texture(){return this.textures[0]}set texture(e){this.textures[0]=e}set depthTexture(e){this._depthTexture!==null&&(this._depthTexture.renderTarget=null),e!==null&&(e.renderTarget=this),this._depthTexture=e}get depthTexture(){return this._depthTexture}setSize(e,n,i=1){if(this.width!==e||this.height!==n||this.depth!==i){this.width=e,this.height=n,this.depth=i;for(let r=0,s=this.textures.length;r<s;r++)this.textures[r].image.width=e,this.textures[r].image.height=n,this.textures[r].image.depth=i,this.textures[r].isData3DTexture!==!0&&(this.textures[r].isArrayTexture=this.textures[r].image.depth>1);this.dispose()}this.viewport.set(0,0,e,n),this.scissor.set(0,0,e,n)}clone(){return new this.constructor().copy(this)}copy(e){this.width=e.width,this.height=e.height,this.depth=e.depth,this.scissor.copy(e.scissor),this.scissorTest=e.scissorTest,this.viewport.copy(e.viewport),this.textures.length=0;for(let n=0,i=e.textures.length;n<i;n++){this.textures[n]=e.textures[n].clone(),this.textures[n].isRenderTargetTexture=!0,this.textures[n].renderTarget=this;const r=Object.assign({},e.textures[n].image);this.textures[n].source=new Tm(r)}return this.depthBuffer=e.depthBuffer,this.stencilBuffer=e.stencilBuffer,this.resolveDepthBuffer=e.resolveDepthBuffer,this.resolveStencilBuffer=e.resolveStencilBuffer,e.depthTexture!==null&&(this.depthTexture=e.depthTexture.clone()),this.samples=e.samples,this}dispose(){this.dispatchEvent({type:"dispose"})}}class Li extends Zw{constructor(e=1,n=1,i={}){super(e,n,i),this.isWebGLRenderTarget=!0}}class xS extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isDataArrayTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1,this.layerUpdates=new Set}addLayerUpdate(e){this.layerUpdates.add(e)}clearLayerUpdates(){this.layerUpdates.clear()}}class Qw extends mn{constructor(e=null,n=1,i=1,r=1){super(null),this.isData3DTexture=!0,this.image={data:e,width:n,height:i,depth:r},this.magFilter=Kt,this.minFilter=Kt,this.wrapR=Xi,this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}class Qa{constructor(e=new G(1/0,1/0,1/0),n=new G(-1/0,-1/0,-1/0)){this.isBox3=!0,this.min=e,this.max=n}set(e,n){return this.min.copy(e),this.max.copy(n),this}setFromArray(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n+=3)this.expandByPoint(ni.fromArray(e,n));return this}setFromBufferAttribute(e){this.makeEmpty();for(let n=0,i=e.count;n<i;n++)this.expandByPoint(ni.fromBufferAttribute(e,n));return this}setFromPoints(e){this.makeEmpty();for(let n=0,i=e.length;n<i;n++)this.expandByPoint(e[n]);return this}setFromCenterAndSize(e,n){const i=ni.copy(n).multiplyScalar(.5);return this.min.copy(e).sub(i),this.max.copy(e).add(i),this}setFromObject(e,n=!1){return this.makeEmpty(),this.expandByObject(e,n)}clone(){return new this.constructor().copy(this)}copy(e){return this.min.copy(e.min),this.max.copy(e.max),this}makeEmpty(){return this.min.x=this.min.y=this.min.z=1/0,this.max.x=this.max.y=this.max.z=-1/0,this}isEmpty(){return this.max.x<this.min.x||this.max.y<this.min.y||this.max.z<this.min.z}getCenter(e){return this.isEmpty()?e.set(0,0,0):e.addVectors(this.min,this.max).multiplyScalar(.5)}getSize(e){return this.isEmpty()?e.set(0,0,0):e.subVectors(this.max,this.min)}expandByPoint(e){return this.min.min(e),this.max.max(e),this}expandByVector(e){return this.min.sub(e),this.max.add(e),this}expandByScalar(e){return this.min.addScalar(-e),this.max.addScalar(e),this}expandByObject(e,n=!1){e.updateWorldMatrix(!1,!1);const i=e.geometry;if(i!==void 0){const s=i.getAttribute("position");if(n===!0&&s!==void 0&&e.isInstancedMesh!==!0)for(let o=0,a=s.count;o<a;o++)e.isMesh===!0?e.getVertexPosition(o,ni):ni.fromBufferAttribute(s,o),ni.applyMatrix4(e.matrixWorld),this.expandByPoint(ni);else e.boundingBox!==void 0?(e.boundingBox===null&&e.computeBoundingBox(),Al.copy(e.boundingBox)):(i.boundingBox===null&&i.computeBoundingBox(),Al.copy(i.boundingBox)),Al.applyMatrix4(e.matrixWorld),this.union(Al)}const r=e.children;for(let s=0,o=r.length;s<o;s++)this.expandByObject(r[s],n);return this}containsPoint(e){return e.x>=this.min.x&&e.x<=this.max.x&&e.y>=this.min.y&&e.y<=this.max.y&&e.z>=this.min.z&&e.z<=this.max.z}containsBox(e){return this.min.x<=e.min.x&&e.max.x<=this.max.x&&this.min.y<=e.min.y&&e.max.y<=this.max.y&&this.min.z<=e.min.z&&e.max.z<=this.max.z}getParameter(e,n){return n.set((e.x-this.min.x)/(this.max.x-this.min.x),(e.y-this.min.y)/(this.max.y-this.min.y),(e.z-this.min.z)/(this.max.z-this.min.z))}intersectsBox(e){return e.max.x>=this.min.x&&e.min.x<=this.max.x&&e.max.y>=this.min.y&&e.min.y<=this.max.y&&e.max.z>=this.min.z&&e.min.z<=this.max.z}intersectsSphere(e){return this.clampPoint(e.center,ni),ni.distanceToSquared(e.center)<=e.radius*e.radius}intersectsPlane(e){let n,i;return e.normal.x>0?(n=e.normal.x*this.min.x,i=e.normal.x*this.max.x):(n=e.normal.x*this.max.x,i=e.normal.x*this.min.x),e.normal.y>0?(n+=e.normal.y*this.min.y,i+=e.normal.y*this.max.y):(n+=e.normal.y*this.max.y,i+=e.normal.y*this.min.y),e.normal.z>0?(n+=e.normal.z*this.min.z,i+=e.normal.z*this.max.z):(n+=e.normal.z*this.max.z,i+=e.normal.z*this.min.z),n<=-e.constant&&i>=-e.constant}intersectsTriangle(e){if(this.isEmpty())return!1;this.getCenter(jo),bl.subVectors(this.max,jo),ws.subVectors(e.a,jo),As.subVectors(e.b,jo),bs.subVectors(e.c,jo),lr.subVectors(As,ws),cr.subVectors(bs,As),Gr.subVectors(ws,bs);let n=[0,-lr.z,lr.y,0,-cr.z,cr.y,0,-Gr.z,Gr.y,lr.z,0,-lr.x,cr.z,0,-cr.x,Gr.z,0,-Gr.x,-lr.y,lr.x,0,-cr.y,cr.x,0,-Gr.y,Gr.x,0];return!vf(n,ws,As,bs,bl)||(n=[1,0,0,0,1,0,0,0,1],!vf(n,ws,As,bs,bl))?!1:(Cl.crossVectors(lr,cr),n=[Cl.x,Cl.y,Cl.z],vf(n,ws,As,bs,bl))}clampPoint(e,n){return n.copy(e).clamp(this.min,this.max)}distanceToPoint(e){return this.clampPoint(e,ni).distanceTo(e)}getBoundingSphere(e){return this.isEmpty()?e.makeEmpty():(this.getCenter(e.center),e.radius=this.getSize(ni).length()*.5),e}intersect(e){return this.min.max(e.min),this.max.min(e.max),this.isEmpty()&&this.makeEmpty(),this}union(e){return this.min.min(e.min),this.max.max(e.max),this}applyMatrix4(e){return this.isEmpty()?this:(Fi[0].set(this.min.x,this.min.y,this.min.z).applyMatrix4(e),Fi[1].set(this.min.x,this.min.y,this.max.z).applyMatrix4(e),Fi[2].set(this.min.x,this.max.y,this.min.z).applyMatrix4(e),Fi[3].set(this.min.x,this.max.y,this.max.z).applyMatrix4(e),Fi[4].set(this.max.x,this.min.y,this.min.z).applyMatrix4(e),Fi[5].set(this.max.x,this.min.y,this.max.z).applyMatrix4(e),Fi[6].set(this.max.x,this.max.y,this.min.z).applyMatrix4(e),Fi[7].set(this.max.x,this.max.y,this.max.z).applyMatrix4(e),this.setFromPoints(Fi),this)}translate(e){return this.min.add(e),this.max.add(e),this}equals(e){return e.min.equals(this.min)&&e.max.equals(this.max)}toJSON(){return{min:this.min.toArray(),max:this.max.toArray()}}fromJSON(e){return this.min.fromArray(e.min),this.max.fromArray(e.max),this}}const Fi=[new G,new G,new G,new G,new G,new G,new G,new G],ni=new G,Al=new Qa,ws=new G,As=new G,bs=new G,lr=new G,cr=new G,Gr=new G,jo=new G,bl=new G,Cl=new G,Wr=new G;function vf(t,e,n,i,r){for(let s=0,o=t.length-3;s<=o;s+=3){Wr.fromArray(t,s);const a=r.x*Math.abs(Wr.x)+r.y*Math.abs(Wr.y)+r.z*Math.abs(Wr.z),l=e.dot(Wr),c=n.dot(Wr),f=i.dot(Wr);if(Math.max(-Math.max(l,c,f),Math.min(l,c,f))>a)return!1}return!0}const Jw=new Qa,Xo=new G,_f=new G;class Tu{constructor(e=new G,n=-1){this.isSphere=!0,this.center=e,this.radius=n}set(e,n){return this.center.copy(e),this.radius=n,this}setFromPoints(e,n){const i=this.center;n!==void 0?i.copy(n):Jw.setFromPoints(e).getCenter(i);let r=0;for(let s=0,o=e.length;s<o;s++)r=Math.max(r,i.distanceToSquared(e[s]));return this.radius=Math.sqrt(r),this}copy(e){return this.center.copy(e.center),this.radius=e.radius,this}isEmpty(){return this.radius<0}makeEmpty(){return this.center.set(0,0,0),this.radius=-1,this}containsPoint(e){return e.distanceToSquared(this.center)<=this.radius*this.radius}distanceToPoint(e){return e.distanceTo(this.center)-this.radius}intersectsSphere(e){const n=this.radius+e.radius;return e.center.distanceToSquared(this.center)<=n*n}intersectsBox(e){return e.intersectsSphere(this)}intersectsPlane(e){return Math.abs(e.distanceToPoint(this.center))<=this.radius}clampPoint(e,n){const i=this.center.distanceToSquared(e);return n.copy(e),i>this.radius*this.radius&&(n.sub(this.center).normalize(),n.multiplyScalar(this.radius).add(this.center)),n}getBoundingBox(e){return this.isEmpty()?(e.makeEmpty(),e):(e.set(this.center,this.center),e.expandByScalar(this.radius),e)}applyMatrix4(e){return this.center.applyMatrix4(e),this.radius=this.radius*e.getMaxScaleOnAxis(),this}translate(e){return this.center.add(e),this}expandByPoint(e){if(this.isEmpty())return this.center.copy(e),this.radius=0,this;Xo.subVectors(e,this.center);const n=Xo.lengthSq();if(n>this.radius*this.radius){const i=Math.sqrt(n),r=(i-this.radius)*.5;this.center.addScaledVector(Xo,r/i),this.radius+=r}return this}union(e){return e.isEmpty()?this:this.isEmpty()?(this.copy(e),this):(this.center.equals(e.center)===!0?this.radius=Math.max(this.radius,e.radius):(_f.subVectors(e.center,this.center).setLength(e.radius),this.expandByPoint(Xo.copy(e.center).add(_f)),this.expandByPoint(Xo.copy(e.center).sub(_f))),this)}equals(e){return e.center.equals(this.center)&&e.radius===this.radius}clone(){return new this.constructor().copy(this)}toJSON(){return{radius:this.radius,center:this.center.toArray()}}fromJSON(e){return this.radius=e.radius,this.center.fromArray(e.center),this}}const Oi=new G,xf=new G,Rl=new G,ur=new G,yf=new G,Pl=new G,Sf=new G;class yS{constructor(e=new G,n=new G(0,0,-1)){this.origin=e,this.direction=n}set(e,n){return this.origin.copy(e),this.direction.copy(n),this}copy(e){return this.origin.copy(e.origin),this.direction.copy(e.direction),this}at(e,n){return n.copy(this.origin).addScaledVector(this.direction,e)}lookAt(e){return this.direction.copy(e).sub(this.origin).normalize(),this}recast(e){return this.origin.copy(this.at(e,Oi)),this}closestPointToPoint(e,n){n.subVectors(e,this.origin);const i=n.dot(this.direction);return i<0?n.copy(this.origin):n.copy(this.origin).addScaledVector(this.direction,i)}distanceToPoint(e){return Math.sqrt(this.distanceSqToPoint(e))}distanceSqToPoint(e){const n=Oi.subVectors(e,this.origin).dot(this.direction);return n<0?this.origin.distanceToSquared(e):(Oi.copy(this.origin).addScaledVector(this.direction,n),Oi.distanceToSquared(e))}distanceSqToSegment(e,n,i,r){xf.copy(e).add(n).multiplyScalar(.5),Rl.copy(n).sub(e).normalize(),ur.copy(this.origin).sub(xf);const s=e.distanceTo(n)*.5,o=-this.direction.dot(Rl),a=ur.dot(this.direction),l=-ur.dot(Rl),c=ur.lengthSq(),f=Math.abs(1-o*o);let u,h,p,g;if(f>0)if(u=o*l-a,h=o*a-l,g=s*f,u>=0)if(h>=-g)if(h<=g){const x=1/f;u*=x,h*=x,p=u*(u+o*h+2*a)+h*(o*u+h+2*l)+c}else h=s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h=-s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;else h<=-g?(u=Math.max(0,-(-o*s+a)),h=u>0?-s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c):h<=g?(u=0,h=Math.min(Math.max(-s,-l),s),p=h*(h+2*l)+c):(u=Math.max(0,-(o*s+a)),h=u>0?s:Math.min(Math.max(-s,-l),s),p=-u*u+h*(h+2*l)+c);else h=o>0?-s:s,u=Math.max(0,-(o*h+a)),p=-u*u+h*(h+2*l)+c;return i&&i.copy(this.origin).addScaledVector(this.direction,u),r&&r.copy(xf).addScaledVector(Rl,h),p}intersectSphere(e,n){Oi.subVectors(e.center,this.origin);const i=Oi.dot(this.direction),r=Oi.dot(Oi)-i*i,s=e.radius*e.radius;if(r>s)return null;const o=Math.sqrt(s-r),a=i-o,l=i+o;return l<0?null:a<0?this.at(l,n):this.at(a,n)}intersectsSphere(e){return e.radius<0?!1:this.distanceSqToPoint(e.center)<=e.radius*e.radius}distanceToPlane(e){const n=e.normal.dot(this.direction);if(n===0)return e.distanceToPoint(this.origin)===0?0:null;const i=-(this.origin.dot(e.normal)+e.constant)/n;return i>=0?i:null}intersectPlane(e,n){const i=this.distanceToPlane(e);return i===null?null:this.at(i,n)}intersectsPlane(e){const n=e.distanceToPoint(this.origin);return n===0||e.normal.dot(this.direction)*n<0}intersectBox(e,n){let i,r,s,o,a,l;const c=1/this.direction.x,f=1/this.direction.y,u=1/this.direction.z,h=this.origin;return c>=0?(i=(e.min.x-h.x)*c,r=(e.max.x-h.x)*c):(i=(e.max.x-h.x)*c,r=(e.min.x-h.x)*c),f>=0?(s=(e.min.y-h.y)*f,o=(e.max.y-h.y)*f):(s=(e.max.y-h.y)*f,o=(e.min.y-h.y)*f),i>o||s>r||((s>i||isNaN(i))&&(i=s),(o<r||isNaN(r))&&(r=o),u>=0?(a=(e.min.z-h.z)*u,l=(e.max.z-h.z)*u):(a=(e.max.z-h.z)*u,l=(e.min.z-h.z)*u),i>l||a>r)||((a>i||i!==i)&&(i=a),(l<r||r!==r)&&(r=l),r<0)?null:this.at(i>=0?i:r,n)}intersectsBox(e){return this.intersectBox(e,Oi)!==null}intersectTriangle(e,n,i,r,s){yf.subVectors(n,e),Pl.subVectors(i,e),Sf.crossVectors(yf,Pl);let o=this.direction.dot(Sf),a;if(o>0){if(r)return null;a=1}else if(o<0)a=-1,o=-o;else return null;ur.subVectors(this.origin,e);const l=a*this.direction.dot(Pl.crossVectors(ur,Pl));if(l<0)return null;const c=a*this.direction.dot(yf.cross(ur));if(c<0||l+c>o)return null;const f=-a*ur.dot(Sf);return f<0?null:this.at(f/o,s)}applyMatrix4(e){return this.origin.applyMatrix4(e),this.direction.transformDirection(e),this}equals(e){return e.origin.equals(this.origin)&&e.direction.equals(this.direction)}clone(){return new this.constructor().copy(this)}}class Nt{constructor(e,n,i,r,s,o,a,l,c,f,u,h,p,g,x,m){Nt.prototype.isMatrix4=!0,this.elements=[1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1],e!==void 0&&this.set(e,n,i,r,s,o,a,l,c,f,u,h,p,g,x,m)}set(e,n,i,r,s,o,a,l,c,f,u,h,p,g,x,m){const d=this.elements;return d[0]=e,d[4]=n,d[8]=i,d[12]=r,d[1]=s,d[5]=o,d[9]=a,d[13]=l,d[2]=c,d[6]=f,d[10]=u,d[14]=h,d[3]=p,d[7]=g,d[11]=x,d[15]=m,this}identity(){return this.set(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1),this}clone(){return new Nt().fromArray(this.elements)}copy(e){const n=this.elements,i=e.elements;return n[0]=i[0],n[1]=i[1],n[2]=i[2],n[3]=i[3],n[4]=i[4],n[5]=i[5],n[6]=i[6],n[7]=i[7],n[8]=i[8],n[9]=i[9],n[10]=i[10],n[11]=i[11],n[12]=i[12],n[13]=i[13],n[14]=i[14],n[15]=i[15],this}copyPosition(e){const n=this.elements,i=e.elements;return n[12]=i[12],n[13]=i[13],n[14]=i[14],this}setFromMatrix3(e){const n=e.elements;return this.set(n[0],n[3],n[6],0,n[1],n[4],n[7],0,n[2],n[5],n[8],0,0,0,0,1),this}extractBasis(e,n,i){return this.determinant()===0?(e.set(1,0,0),n.set(0,1,0),i.set(0,0,1),this):(e.setFromMatrixColumn(this,0),n.setFromMatrixColumn(this,1),i.setFromMatrixColumn(this,2),this)}makeBasis(e,n,i){return this.set(e.x,n.x,i.x,0,e.y,n.y,i.y,0,e.z,n.z,i.z,0,0,0,0,1),this}extractRotation(e){if(e.determinant()===0)return this.identity();const n=this.elements,i=e.elements,r=1/Cs.setFromMatrixColumn(e,0).length(),s=1/Cs.setFromMatrixColumn(e,1).length(),o=1/Cs.setFromMatrixColumn(e,2).length();return n[0]=i[0]*r,n[1]=i[1]*r,n[2]=i[2]*r,n[3]=0,n[4]=i[4]*s,n[5]=i[5]*s,n[6]=i[6]*s,n[7]=0,n[8]=i[8]*o,n[9]=i[9]*o,n[10]=i[10]*o,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromEuler(e){const n=this.elements,i=e.x,r=e.y,s=e.z,o=Math.cos(i),a=Math.sin(i),l=Math.cos(r),c=Math.sin(r),f=Math.cos(s),u=Math.sin(s);if(e.order==="XYZ"){const h=o*f,p=o*u,g=a*f,x=a*u;n[0]=l*f,n[4]=-l*u,n[8]=c,n[1]=p+g*c,n[5]=h-x*c,n[9]=-a*l,n[2]=x-h*c,n[6]=g+p*c,n[10]=o*l}else if(e.order==="YXZ"){const h=l*f,p=l*u,g=c*f,x=c*u;n[0]=h+x*a,n[4]=g*a-p,n[8]=o*c,n[1]=o*u,n[5]=o*f,n[9]=-a,n[2]=p*a-g,n[6]=x+h*a,n[10]=o*l}else if(e.order==="ZXY"){const h=l*f,p=l*u,g=c*f,x=c*u;n[0]=h-x*a,n[4]=-o*u,n[8]=g+p*a,n[1]=p+g*a,n[5]=o*f,n[9]=x-h*a,n[2]=-o*c,n[6]=a,n[10]=o*l}else if(e.order==="ZYX"){const h=o*f,p=o*u,g=a*f,x=a*u;n[0]=l*f,n[4]=g*c-p,n[8]=h*c+x,n[1]=l*u,n[5]=x*c+h,n[9]=p*c-g,n[2]=-c,n[6]=a*l,n[10]=o*l}else if(e.order==="YZX"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*f,n[4]=x-h*u,n[8]=g*u+p,n[1]=u,n[5]=o*f,n[9]=-a*f,n[2]=-c*f,n[6]=p*u+g,n[10]=h-x*u}else if(e.order==="XZY"){const h=o*l,p=o*c,g=a*l,x=a*c;n[0]=l*f,n[4]=-u,n[8]=c*f,n[1]=h*u+x,n[5]=o*f,n[9]=p*u-g,n[2]=g*u-p,n[6]=a*f,n[10]=x*u+h}return n[3]=0,n[7]=0,n[11]=0,n[12]=0,n[13]=0,n[14]=0,n[15]=1,this}makeRotationFromQuaternion(e){return this.compose(eA,e,tA)}lookAt(e,n,i){const r=this.elements;return Nn.subVectors(e,n),Nn.lengthSq()===0&&(Nn.z=1),Nn.normalize(),fr.crossVectors(i,Nn),fr.lengthSq()===0&&(Math.abs(i.z)===1?Nn.x+=1e-4:Nn.z+=1e-4,Nn.normalize(),fr.crossVectors(i,Nn)),fr.normalize(),Dl.crossVectors(Nn,fr),r[0]=fr.x,r[4]=Dl.x,r[8]=Nn.x,r[1]=fr.y,r[5]=Dl.y,r[9]=Nn.y,r[2]=fr.z,r[6]=Dl.z,r[10]=Nn.z,this}multiply(e){return this.multiplyMatrices(this,e)}premultiply(e){return this.multiplyMatrices(e,this)}multiplyMatrices(e,n){const i=e.elements,r=n.elements,s=this.elements,o=i[0],a=i[4],l=i[8],c=i[12],f=i[1],u=i[5],h=i[9],p=i[13],g=i[2],x=i[6],m=i[10],d=i[14],v=i[3],_=i[7],S=i[11],E=i[15],A=r[0],b=r[4],R=r[8],M=r[12],T=r[1],L=r[5],H=r[9],N=r[13],X=r[2],$=r[6],k=r[10],O=r[14],P=r[3],K=r[7],Y=r[11],te=r[15];return s[0]=o*A+a*T+l*X+c*P,s[4]=o*b+a*L+l*$+c*K,s[8]=o*R+a*H+l*k+c*Y,s[12]=o*M+a*N+l*O+c*te,s[1]=f*A+u*T+h*X+p*P,s[5]=f*b+u*L+h*$+p*K,s[9]=f*R+u*H+h*k+p*Y,s[13]=f*M+u*N+h*O+p*te,s[2]=g*A+x*T+m*X+d*P,s[6]=g*b+x*L+m*$+d*K,s[10]=g*R+x*H+m*k+d*Y,s[14]=g*M+x*N+m*O+d*te,s[3]=v*A+_*T+S*X+E*P,s[7]=v*b+_*L+S*$+E*K,s[11]=v*R+_*H+S*k+E*Y,s[15]=v*M+_*N+S*O+E*te,this}multiplyScalar(e){const n=this.elements;return n[0]*=e,n[4]*=e,n[8]*=e,n[12]*=e,n[1]*=e,n[5]*=e,n[9]*=e,n[13]*=e,n[2]*=e,n[6]*=e,n[10]*=e,n[14]*=e,n[3]*=e,n[7]*=e,n[11]*=e,n[15]*=e,this}determinant(){const e=this.elements,n=e[0],i=e[4],r=e[8],s=e[12],o=e[1],a=e[5],l=e[9],c=e[13],f=e[2],u=e[6],h=e[10],p=e[14],g=e[3],x=e[7],m=e[11],d=e[15],v=l*p-c*h,_=a*p-c*u,S=a*h-l*u,E=o*p-c*f,A=o*h-l*f,b=o*u-a*f;return n*(x*v-m*_+d*S)-i*(g*v-m*E+d*A)+r*(g*_-x*E+d*b)-s*(g*S-x*A+m*b)}transpose(){const e=this.elements;let n;return n=e[1],e[1]=e[4],e[4]=n,n=e[2],e[2]=e[8],e[8]=n,n=e[6],e[6]=e[9],e[9]=n,n=e[3],e[3]=e[12],e[12]=n,n=e[7],e[7]=e[13],e[13]=n,n=e[11],e[11]=e[14],e[14]=n,this}setPosition(e,n,i){const r=this.elements;return e.isVector3?(r[12]=e.x,r[13]=e.y,r[14]=e.z):(r[12]=e,r[13]=n,r[14]=i),this}invert(){const e=this.elements,n=e[0],i=e[1],r=e[2],s=e[3],o=e[4],a=e[5],l=e[6],c=e[7],f=e[8],u=e[9],h=e[10],p=e[11],g=e[12],x=e[13],m=e[14],d=e[15],v=u*m*c-x*h*c+x*l*p-a*m*p-u*l*d+a*h*d,_=g*h*c-f*m*c-g*l*p+o*m*p+f*l*d-o*h*d,S=f*x*c-g*u*c+g*a*p-o*x*p-f*a*d+o*u*d,E=g*u*l-f*x*l-g*a*h+o*x*h+f*a*m-o*u*m,A=n*v+i*_+r*S+s*E;if(A===0)return this.set(0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0);const b=1/A;return e[0]=v*b,e[1]=(x*h*s-u*m*s-x*r*p+i*m*p+u*r*d-i*h*d)*b,e[2]=(a*m*s-x*l*s+x*r*c-i*m*c-a*r*d+i*l*d)*b,e[3]=(u*l*s-a*h*s-u*r*c+i*h*c+a*r*p-i*l*p)*b,e[4]=_*b,e[5]=(f*m*s-g*h*s+g*r*p-n*m*p-f*r*d+n*h*d)*b,e[6]=(g*l*s-o*m*s-g*r*c+n*m*c+o*r*d-n*l*d)*b,e[7]=(o*h*s-f*l*s+f*r*c-n*h*c-o*r*p+n*l*p)*b,e[8]=S*b,e[9]=(g*u*s-f*x*s-g*i*p+n*x*p+f*i*d-n*u*d)*b,e[10]=(o*x*s-g*a*s+g*i*c-n*x*c-o*i*d+n*a*d)*b,e[11]=(f*a*s-o*u*s-f*i*c+n*u*c+o*i*p-n*a*p)*b,e[12]=E*b,e[13]=(f*x*r-g*u*r+g*i*h-n*x*h-f*i*m+n*u*m)*b,e[14]=(g*a*r-o*x*r-g*i*l+n*x*l+o*i*m-n*a*m)*b,e[15]=(o*u*r-f*a*r+f*i*l-n*u*l-o*i*h+n*a*h)*b,this}scale(e){const n=this.elements,i=e.x,r=e.y,s=e.z;return n[0]*=i,n[4]*=r,n[8]*=s,n[1]*=i,n[5]*=r,n[9]*=s,n[2]*=i,n[6]*=r,n[10]*=s,n[3]*=i,n[7]*=r,n[11]*=s,this}getMaxScaleOnAxis(){const e=this.elements,n=e[0]*e[0]+e[1]*e[1]+e[2]*e[2],i=e[4]*e[4]+e[5]*e[5]+e[6]*e[6],r=e[8]*e[8]+e[9]*e[9]+e[10]*e[10];return Math.sqrt(Math.max(n,i,r))}makeTranslation(e,n,i){return e.isVector3?this.set(1,0,0,e.x,0,1,0,e.y,0,0,1,e.z,0,0,0,1):this.set(1,0,0,e,0,1,0,n,0,0,1,i,0,0,0,1),this}makeRotationX(e){const n=Math.cos(e),i=Math.sin(e);return this.set(1,0,0,0,0,n,-i,0,0,i,n,0,0,0,0,1),this}makeRotationY(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,0,i,0,0,1,0,0,-i,0,n,0,0,0,0,1),this}makeRotationZ(e){const n=Math.cos(e),i=Math.sin(e);return this.set(n,-i,0,0,i,n,0,0,0,0,1,0,0,0,0,1),this}makeRotationAxis(e,n){const i=Math.cos(n),r=Math.sin(n),s=1-i,o=e.x,a=e.y,l=e.z,c=s*o,f=s*a;return this.set(c*o+i,c*a-r*l,c*l+r*a,0,c*a+r*l,f*a+i,f*l-r*o,0,c*l-r*a,f*l+r*o,s*l*l+i,0,0,0,0,1),this}makeScale(e,n,i){return this.set(e,0,0,0,0,n,0,0,0,0,i,0,0,0,0,1),this}makeShear(e,n,i,r,s,o){return this.set(1,i,s,0,e,1,o,0,n,r,1,0,0,0,0,1),this}compose(e,n,i){const r=this.elements,s=n._x,o=n._y,a=n._z,l=n._w,c=s+s,f=o+o,u=a+a,h=s*c,p=s*f,g=s*u,x=o*f,m=o*u,d=a*u,v=l*c,_=l*f,S=l*u,E=i.x,A=i.y,b=i.z;return r[0]=(1-(x+d))*E,r[1]=(p+S)*E,r[2]=(g-_)*E,r[3]=0,r[4]=(p-S)*A,r[5]=(1-(h+d))*A,r[6]=(m+v)*A,r[7]=0,r[8]=(g+_)*b,r[9]=(m-v)*b,r[10]=(1-(h+x))*b,r[11]=0,r[12]=e.x,r[13]=e.y,r[14]=e.z,r[15]=1,this}decompose(e,n,i){const r=this.elements;if(e.x=r[12],e.y=r[13],e.z=r[14],this.determinant()===0)return i.set(1,1,1),n.identity(),this;let s=Cs.set(r[0],r[1],r[2]).length();const o=Cs.set(r[4],r[5],r[6]).length(),a=Cs.set(r[8],r[9],r[10]).length();this.determinant()<0&&(s=-s),ii.copy(this);const c=1/s,f=1/o,u=1/a;return ii.elements[0]*=c,ii.elements[1]*=c,ii.elements[2]*=c,ii.elements[4]*=f,ii.elements[5]*=f,ii.elements[6]*=f,ii.elements[8]*=u,ii.elements[9]*=u,ii.elements[10]*=u,n.setFromRotationMatrix(ii),i.x=s,i.y=o,i.z=a,this}makePerspective(e,n,i,r,s,o,a=Ci,l=!1){const c=this.elements,f=2*s/(n-e),u=2*s/(i-r),h=(n+e)/(n-e),p=(i+r)/(i-r);let g,x;if(l)g=s/(o-s),x=o*s/(o-s);else if(a===Ci)g=-(o+s)/(o-s),x=-2*o*s/(o-s);else if(a===Zc)g=-o/(o-s),x=-o*s/(o-s);else throw new Error("THREE.Matrix4.makePerspective(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=h,c[12]=0,c[1]=0,c[5]=u,c[9]=p,c[13]=0,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=-1,c[15]=0,this}makeOrthographic(e,n,i,r,s,o,a=Ci,l=!1){const c=this.elements,f=2/(n-e),u=2/(i-r),h=-(n+e)/(n-e),p=-(i+r)/(i-r);let g,x;if(l)g=1/(o-s),x=o/(o-s);else if(a===Ci)g=-2/(o-s),x=-(o+s)/(o-s);else if(a===Zc)g=-1/(o-s),x=-s/(o-s);else throw new Error("THREE.Matrix4.makeOrthographic(): Invalid coordinate system: "+a);return c[0]=f,c[4]=0,c[8]=0,c[12]=h,c[1]=0,c[5]=u,c[9]=0,c[13]=p,c[2]=0,c[6]=0,c[10]=g,c[14]=x,c[3]=0,c[7]=0,c[11]=0,c[15]=1,this}equals(e){const n=this.elements,i=e.elements;for(let r=0;r<16;r++)if(n[r]!==i[r])return!1;return!0}fromArray(e,n=0){for(let i=0;i<16;i++)this.elements[i]=e[i+n];return this}toArray(e=[],n=0){const i=this.elements;return e[n]=i[0],e[n+1]=i[1],e[n+2]=i[2],e[n+3]=i[3],e[n+4]=i[4],e[n+5]=i[5],e[n+6]=i[6],e[n+7]=i[7],e[n+8]=i[8],e[n+9]=i[9],e[n+10]=i[10],e[n+11]=i[11],e[n+12]=i[12],e[n+13]=i[13],e[n+14]=i[14],e[n+15]=i[15],e}}const Cs=new G,ii=new Nt,eA=new G(0,0,0),tA=new G(1,1,1),fr=new G,Dl=new G,Nn=new G,R0=new Nt,P0=new Za;class ir{constructor(e=0,n=0,i=0,r=ir.DEFAULT_ORDER){this.isEuler=!0,this._x=e,this._y=n,this._z=i,this._order=r}get x(){return this._x}set x(e){this._x=e,this._onChangeCallback()}get y(){return this._y}set y(e){this._y=e,this._onChangeCallback()}get z(){return this._z}set z(e){this._z=e,this._onChangeCallback()}get order(){return this._order}set order(e){this._order=e,this._onChangeCallback()}set(e,n,i,r=this._order){return this._x=e,this._y=n,this._z=i,this._order=r,this._onChangeCallback(),this}clone(){return new this.constructor(this._x,this._y,this._z,this._order)}copy(e){return this._x=e._x,this._y=e._y,this._z=e._z,this._order=e._order,this._onChangeCallback(),this}setFromRotationMatrix(e,n=this._order,i=!0){const r=e.elements,s=r[0],o=r[4],a=r[8],l=r[1],c=r[5],f=r[9],u=r[2],h=r[6],p=r[10];switch(n){case"XYZ":this._y=Math.asin(qe(a,-1,1)),Math.abs(a)<.9999999?(this._x=Math.atan2(-f,p),this._z=Math.atan2(-o,s)):(this._x=Math.atan2(h,c),this._z=0);break;case"YXZ":this._x=Math.asin(-qe(f,-1,1)),Math.abs(f)<.9999999?(this._y=Math.atan2(a,p),this._z=Math.atan2(l,c)):(this._y=Math.atan2(-u,s),this._z=0);break;case"ZXY":this._x=Math.asin(qe(h,-1,1)),Math.abs(h)<.9999999?(this._y=Math.atan2(-u,p),this._z=Math.atan2(-o,c)):(this._y=0,this._z=Math.atan2(l,s));break;case"ZYX":this._y=Math.asin(-qe(u,-1,1)),Math.abs(u)<.9999999?(this._x=Math.atan2(h,p),this._z=Math.atan2(l,s)):(this._x=0,this._z=Math.atan2(-o,c));break;case"YZX":this._z=Math.asin(qe(l,-1,1)),Math.abs(l)<.9999999?(this._x=Math.atan2(-f,c),this._y=Math.atan2(-u,s)):(this._x=0,this._y=Math.atan2(a,p));break;case"XZY":this._z=Math.asin(-qe(o,-1,1)),Math.abs(o)<.9999999?(this._x=Math.atan2(h,c),this._y=Math.atan2(a,s)):(this._x=Math.atan2(-f,p),this._y=0);break;default:Be("Euler: .setFromRotationMatrix() encountered an unknown order: "+n)}return this._order=n,i===!0&&this._onChangeCallback(),this}setFromQuaternion(e,n,i){return R0.makeRotationFromQuaternion(e),this.setFromRotationMatrix(R0,n,i)}setFromVector3(e,n=this._order){return this.set(e.x,e.y,e.z,n)}reorder(e){return P0.setFromEuler(this),this.setFromQuaternion(P0,e)}equals(e){return e._x===this._x&&e._y===this._y&&e._z===this._z&&e._order===this._order}fromArray(e){return this._x=e[0],this._y=e[1],this._z=e[2],e[3]!==void 0&&(this._order=e[3]),this._onChangeCallback(),this}toArray(e=[],n=0){return e[n]=this._x,e[n+1]=this._y,e[n+2]=this._z,e[n+3]=this._order,e}_onChange(e){return this._onChangeCallback=e,this}_onChangeCallback(){}*[Symbol.iterator](){yield this._x,yield this._y,yield this._z,yield this._order}}ir.DEFAULT_ORDER="XYZ";class SS{constructor(){this.mask=1}set(e){this.mask=(1<<e|0)>>>0}enable(e){this.mask|=1<<e|0}enableAll(){this.mask=-1}toggle(e){this.mask^=1<<e|0}disable(e){this.mask&=~(1<<e|0)}disableAll(){this.mask=0}test(e){return(this.mask&e.mask)!==0}isEnabled(e){return(this.mask&(1<<e|0))!==0}}let nA=0;const D0=new G,Rs=new Za,ki=new Nt,Ll=new G,Yo=new G,iA=new G,rA=new Za,L0=new G(1,0,0),I0=new G(0,1,0),N0=new G(0,0,1),U0={type:"added"},sA={type:"removed"},Ps={type:"childadded",child:null},Mf={type:"childremoved",child:null};class Pn extends Ro{constructor(){super(),this.isObject3D=!0,Object.defineProperty(this,"id",{value:nA++}),this.uuid=Ka(),this.name="",this.type="Object3D",this.parent=null,this.children=[],this.up=Pn.DEFAULT_UP.clone();const e=new G,n=new ir,i=new Za,r=new G(1,1,1);function s(){i.setFromEuler(n,!1)}function o(){n.setFromQuaternion(i,void 0,!1)}n._onChange(s),i._onChange(o),Object.defineProperties(this,{position:{configurable:!0,enumerable:!0,value:e},rotation:{configurable:!0,enumerable:!0,value:n},quaternion:{configurable:!0,enumerable:!0,value:i},scale:{configurable:!0,enumerable:!0,value:r},modelViewMatrix:{value:new Nt},normalMatrix:{value:new He}}),this.matrix=new Nt,this.matrixWorld=new Nt,this.matrixAutoUpdate=Pn.DEFAULT_MATRIX_AUTO_UPDATE,this.matrixWorldAutoUpdate=Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE,this.matrixWorldNeedsUpdate=!1,this.layers=new SS,this.visible=!0,this.castShadow=!1,this.receiveShadow=!1,this.frustumCulled=!0,this.renderOrder=0,this.animations=[],this.customDepthMaterial=void 0,this.customDistanceMaterial=void 0,this.userData={}}onBeforeShadow(){}onAfterShadow(){}onBeforeRender(){}onAfterRender(){}applyMatrix4(e){this.matrixAutoUpdate&&this.updateMatrix(),this.matrix.premultiply(e),this.matrix.decompose(this.position,this.quaternion,this.scale)}applyQuaternion(e){return this.quaternion.premultiply(e),this}setRotationFromAxisAngle(e,n){this.quaternion.setFromAxisAngle(e,n)}setRotationFromEuler(e){this.quaternion.setFromEuler(e,!0)}setRotationFromMatrix(e){this.quaternion.setFromRotationMatrix(e)}setRotationFromQuaternion(e){this.quaternion.copy(e)}rotateOnAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.multiply(Rs),this}rotateOnWorldAxis(e,n){return Rs.setFromAxisAngle(e,n),this.quaternion.premultiply(Rs),this}rotateX(e){return this.rotateOnAxis(L0,e)}rotateY(e){return this.rotateOnAxis(I0,e)}rotateZ(e){return this.rotateOnAxis(N0,e)}translateOnAxis(e,n){return D0.copy(e).applyQuaternion(this.quaternion),this.position.add(D0.multiplyScalar(n)),this}translateX(e){return this.translateOnAxis(L0,e)}translateY(e){return this.translateOnAxis(I0,e)}translateZ(e){return this.translateOnAxis(N0,e)}localToWorld(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(this.matrixWorld)}worldToLocal(e){return this.updateWorldMatrix(!0,!1),e.applyMatrix4(ki.copy(this.matrixWorld).invert())}lookAt(e,n,i){e.isVector3?Ll.copy(e):Ll.set(e,n,i);const r=this.parent;this.updateWorldMatrix(!0,!1),Yo.setFromMatrixPosition(this.matrixWorld),this.isCamera||this.isLight?ki.lookAt(Yo,Ll,this.up):ki.lookAt(Ll,Yo,this.up),this.quaternion.setFromRotationMatrix(ki),r&&(ki.extractRotation(r.matrixWorld),Rs.setFromRotationMatrix(ki),this.quaternion.premultiply(Rs.invert()))}add(e){if(arguments.length>1){for(let n=0;n<arguments.length;n++)this.add(arguments[n]);return this}return e===this?(it("Object3D.add: object can't be added as a child of itself.",e),this):(e&&e.isObject3D?(e.removeFromParent(),e.parent=this,this.children.push(e),e.dispatchEvent(U0),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null):it("Object3D.add: object not an instance of THREE.Object3D.",e),this)}remove(e){if(arguments.length>1){for(let i=0;i<arguments.length;i++)this.remove(arguments[i]);return this}const n=this.children.indexOf(e);return n!==-1&&(e.parent=null,this.children.splice(n,1),e.dispatchEvent(sA),Mf.child=e,this.dispatchEvent(Mf),Mf.child=null),this}removeFromParent(){const e=this.parent;return e!==null&&e.remove(this),this}clear(){return this.remove(...this.children)}attach(e){return this.updateWorldMatrix(!0,!1),ki.copy(this.matrixWorld).invert(),e.parent!==null&&(e.parent.updateWorldMatrix(!0,!1),ki.multiply(e.parent.matrixWorld)),e.applyMatrix4(ki),e.removeFromParent(),e.parent=this,this.children.push(e),e.updateWorldMatrix(!1,!0),e.dispatchEvent(U0),Ps.child=e,this.dispatchEvent(Ps),Ps.child=null,this}getObjectById(e){return this.getObjectByProperty("id",e)}getObjectByName(e){return this.getObjectByProperty("name",e)}getObjectByProperty(e,n){if(this[e]===n)return this;for(let i=0,r=this.children.length;i<r;i++){const o=this.children[i].getObjectByProperty(e,n);if(o!==void 0)return o}}getObjectsByProperty(e,n,i=[]){this[e]===n&&i.push(this);const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].getObjectsByProperty(e,n,i);return i}getWorldPosition(e){return this.updateWorldMatrix(!0,!1),e.setFromMatrixPosition(this.matrixWorld)}getWorldQuaternion(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,e,iA),e}getWorldScale(e){return this.updateWorldMatrix(!0,!1),this.matrixWorld.decompose(Yo,rA,e),e}getWorldDirection(e){this.updateWorldMatrix(!0,!1);const n=this.matrixWorld.elements;return e.set(n[8],n[9],n[10]).normalize()}raycast(){}traverse(e){e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverse(e)}traverseVisible(e){if(this.visible===!1)return;e(this);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].traverseVisible(e)}traverseAncestors(e){const n=this.parent;n!==null&&(e(n),n.traverseAncestors(e))}updateMatrix(){this.matrix.compose(this.position,this.quaternion,this.scale),this.matrixWorldNeedsUpdate=!0}updateMatrixWorld(e){this.matrixAutoUpdate&&this.updateMatrix(),(this.matrixWorldNeedsUpdate||e)&&(this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),this.matrixWorldNeedsUpdate=!1,e=!0);const n=this.children;for(let i=0,r=n.length;i<r;i++)n[i].updateMatrixWorld(e)}updateWorldMatrix(e,n){const i=this.parent;if(e===!0&&i!==null&&i.updateWorldMatrix(!0,!1),this.matrixAutoUpdate&&this.updateMatrix(),this.matrixWorldAutoUpdate===!0&&(this.parent===null?this.matrixWorld.copy(this.matrix):this.matrixWorld.multiplyMatrices(this.parent.matrixWorld,this.matrix)),n===!0){const r=this.children;for(let s=0,o=r.length;s<o;s++)r[s].updateWorldMatrix(!1,!0)}}toJSON(e){const n=e===void 0||typeof e=="string",i={};n&&(e={geometries:{},materials:{},textures:{},images:{},shapes:{},skeletons:{},animations:{},nodes:{}},i.metadata={version:4.7,type:"Object",generator:"Object3D.toJSON"});const r={};r.uuid=this.uuid,r.type=this.type,this.name!==""&&(r.name=this.name),this.castShadow===!0&&(r.castShadow=!0),this.receiveShadow===!0&&(r.receiveShadow=!0),this.visible===!1&&(r.visible=!1),this.frustumCulled===!1&&(r.frustumCulled=!1),this.renderOrder!==0&&(r.renderOrder=this.renderOrder),Object.keys(this.userData).length>0&&(r.userData=this.userData),r.layers=this.layers.mask,r.matrix=this.matrix.toArray(),r.up=this.up.toArray(),this.matrixAutoUpdate===!1&&(r.matrixAutoUpdate=!1),this.isInstancedMesh&&(r.type="InstancedMesh",r.count=this.count,r.instanceMatrix=this.instanceMatrix.toJSON(),this.instanceColor!==null&&(r.instanceColor=this.instanceColor.toJSON())),this.isBatchedMesh&&(r.type="BatchedMesh",r.perObjectFrustumCulled=this.perObjectFrustumCulled,r.sortObjects=this.sortObjects,r.drawRanges=this._drawRanges,r.reservedRanges=this._reservedRanges,r.geometryInfo=this._geometryInfo.map(a=>({...a,boundingBox:a.boundingBox?a.boundingBox.toJSON():void 0,boundingSphere:a.boundingSphere?a.boundingSphere.toJSON():void 0})),r.instanceInfo=this._instanceInfo.map(a=>({...a})),r.availableInstanceIds=this._availableInstanceIds.slice(),r.availableGeometryIds=this._availableGeometryIds.slice(),r.nextIndexStart=this._nextIndexStart,r.nextVertexStart=this._nextVertexStart,r.geometryCount=this._geometryCount,r.maxInstanceCount=this._maxInstanceCount,r.maxVertexCount=this._maxVertexCount,r.maxIndexCount=this._maxIndexCount,r.geometryInitialized=this._geometryInitialized,r.matricesTexture=this._matricesTexture.toJSON(e),r.indirectTexture=this._indirectTexture.toJSON(e),this._colorsTexture!==null&&(r.colorsTexture=this._colorsTexture.toJSON(e)),this.boundingSphere!==null&&(r.boundingSphere=this.boundingSphere.toJSON()),this.boundingBox!==null&&(r.boundingBox=this.boundingBox.toJSON()));function s(a,l){return a[l.uuid]===void 0&&(a[l.uuid]=l.toJSON(e)),l.uuid}if(this.isScene)this.background&&(this.background.isColor?r.background=this.background.toJSON():this.background.isTexture&&(r.background=this.background.toJSON(e).uuid)),this.environment&&this.environment.isTexture&&this.environment.isRenderTargetTexture!==!0&&(r.environment=this.environment.toJSON(e).uuid);else if(this.isMesh||this.isLine||this.isPoints){r.geometry=s(e.geometries,this.geometry);const a=this.geometry.parameters;if(a!==void 0&&a.shapes!==void 0){const l=a.shapes;if(Array.isArray(l))for(let c=0,f=l.length;c<f;c++){const u=l[c];s(e.shapes,u)}else s(e.shapes,l)}}if(this.isSkinnedMesh&&(r.bindMode=this.bindMode,r.bindMatrix=this.bindMatrix.toArray(),this.skeleton!==void 0&&(s(e.skeletons,this.skeleton),r.skeleton=this.skeleton.uuid)),this.material!==void 0)if(Array.isArray(this.material)){const a=[];for(let l=0,c=this.material.length;l<c;l++)a.push(s(e.materials,this.material[l]));r.material=a}else r.material=s(e.materials,this.material);if(this.children.length>0){r.children=[];for(let a=0;a<this.children.length;a++)r.children.push(this.children[a].toJSON(e).object)}if(this.animations.length>0){r.animations=[];for(let a=0;a<this.animations.length;a++){const l=this.animations[a];r.animations.push(s(e.animations,l))}}if(n){const a=o(e.geometries),l=o(e.materials),c=o(e.textures),f=o(e.images),u=o(e.shapes),h=o(e.skeletons),p=o(e.animations),g=o(e.nodes);a.length>0&&(i.geometries=a),l.length>0&&(i.materials=l),c.length>0&&(i.textures=c),f.length>0&&(i.images=f),u.length>0&&(i.shapes=u),h.length>0&&(i.skeletons=h),p.length>0&&(i.animations=p),g.length>0&&(i.nodes=g)}return i.object=r,i;function o(a){const l=[];for(const c in a){const f=a[c];delete f.metadata,l.push(f)}return l}}clone(e){return new this.constructor().copy(this,e)}copy(e,n=!0){if(this.name=e.name,this.up.copy(e.up),this.position.copy(e.position),this.rotation.order=e.rotation.order,this.quaternion.copy(e.quaternion),this.scale.copy(e.scale),this.matrix.copy(e.matrix),this.matrixWorld.copy(e.matrixWorld),this.matrixAutoUpdate=e.matrixAutoUpdate,this.matrixWorldAutoUpdate=e.matrixWorldAutoUpdate,this.matrixWorldNeedsUpdate=e.matrixWorldNeedsUpdate,this.layers.mask=e.layers.mask,this.visible=e.visible,this.castShadow=e.castShadow,this.receiveShadow=e.receiveShadow,this.frustumCulled=e.frustumCulled,this.renderOrder=e.renderOrder,this.animations=e.animations.slice(),this.userData=JSON.parse(JSON.stringify(e.userData)),n===!0)for(let i=0;i<e.children.length;i++){const r=e.children[i];this.add(r.clone())}return this}}Pn.DEFAULT_UP=new G(0,1,0);Pn.DEFAULT_MATRIX_AUTO_UPDATE=!0;Pn.DEFAULT_MATRIX_WORLD_AUTO_UPDATE=!0;const ri=new G,Bi=new G,Ef=new G,Vi=new G,Ds=new G,Ls=new G,F0=new G,Tf=new G,wf=new G,Af=new G,bf=new It,Cf=new It,Rf=new It;class ui{constructor(e=new G,n=new G,i=new G){this.a=e,this.b=n,this.c=i}static getNormal(e,n,i,r){r.subVectors(i,n),ri.subVectors(e,n),r.cross(ri);const s=r.lengthSq();return s>0?r.multiplyScalar(1/Math.sqrt(s)):r.set(0,0,0)}static getBarycoord(e,n,i,r,s){ri.subVectors(r,n),Bi.subVectors(i,n),Ef.subVectors(e,n);const o=ri.dot(ri),a=ri.dot(Bi),l=ri.dot(Ef),c=Bi.dot(Bi),f=Bi.dot(Ef),u=o*c-a*a;if(u===0)return s.set(0,0,0),null;const h=1/u,p=(c*l-a*f)*h,g=(o*f-a*l)*h;return s.set(1-p-g,g,p)}static containsPoint(e,n,i,r){return this.getBarycoord(e,n,i,r,Vi)===null?!1:Vi.x>=0&&Vi.y>=0&&Vi.x+Vi.y<=1}static getInterpolation(e,n,i,r,s,o,a,l){return this.getBarycoord(e,n,i,r,Vi)===null?(l.x=0,l.y=0,"z"in l&&(l.z=0),"w"in l&&(l.w=0),null):(l.setScalar(0),l.addScaledVector(s,Vi.x),l.addScaledVector(o,Vi.y),l.addScaledVector(a,Vi.z),l)}static getInterpolatedAttribute(e,n,i,r,s,o){return bf.setScalar(0),Cf.setScalar(0),Rf.setScalar(0),bf.fromBufferAttribute(e,n),Cf.fromBufferAttribute(e,i),Rf.fromBufferAttribute(e,r),o.setScalar(0),o.addScaledVector(bf,s.x),o.addScaledVector(Cf,s.y),o.addScaledVector(Rf,s.z),o}static isFrontFacing(e,n,i,r){return ri.subVectors(i,n),Bi.subVectors(e,n),ri.cross(Bi).dot(r)<0}set(e,n,i){return this.a.copy(e),this.b.copy(n),this.c.copy(i),this}setFromPointsAndIndices(e,n,i,r){return this.a.copy(e[n]),this.b.copy(e[i]),this.c.copy(e[r]),this}setFromAttributeAndIndices(e,n,i,r){return this.a.fromBufferAttribute(e,n),this.b.fromBufferAttribute(e,i),this.c.fromBufferAttribute(e,r),this}clone(){return new this.constructor().copy(this)}copy(e){return this.a.copy(e.a),this.b.copy(e.b),this.c.copy(e.c),this}getArea(){return ri.subVectors(this.c,this.b),Bi.subVectors(this.a,this.b),ri.cross(Bi).length()*.5}getMidpoint(e){return e.addVectors(this.a,this.b).add(this.c).multiplyScalar(1/3)}getNormal(e){return ui.getNormal(this.a,this.b,this.c,e)}getPlane(e){return e.setFromCoplanarPoints(this.a,this.b,this.c)}getBarycoord(e,n){return ui.getBarycoord(e,this.a,this.b,this.c,n)}getInterpolation(e,n,i,r,s){return ui.getInterpolation(e,this.a,this.b,this.c,n,i,r,s)}containsPoint(e){return ui.containsPoint(e,this.a,this.b,this.c)}isFrontFacing(e){return ui.isFrontFacing(this.a,this.b,this.c,e)}intersectsBox(e){return e.intersectsTriangle(this)}closestPointToPoint(e,n){const i=this.a,r=this.b,s=this.c;let o,a;Ds.subVectors(r,i),Ls.subVectors(s,i),Tf.subVectors(e,i);const l=Ds.dot(Tf),c=Ls.dot(Tf);if(l<=0&&c<=0)return n.copy(i);wf.subVectors(e,r);const f=Ds.dot(wf),u=Ls.dot(wf);if(f>=0&&u<=f)return n.copy(r);const h=l*u-f*c;if(h<=0&&l>=0&&f<=0)return o=l/(l-f),n.copy(i).addScaledVector(Ds,o);Af.subVectors(e,s);const p=Ds.dot(Af),g=Ls.dot(Af);if(g>=0&&p<=g)return n.copy(s);const x=p*c-l*g;if(x<=0&&c>=0&&g<=0)return a=c/(c-g),n.copy(i).addScaledVector(Ls,a);const m=f*g-p*u;if(m<=0&&u-f>=0&&p-g>=0)return F0.subVectors(s,r),a=(u-f)/(u-f+(p-g)),n.copy(r).addScaledVector(F0,a);const d=1/(m+x+h);return o=x*d,a=h*d,n.copy(i).addScaledVector(Ds,o).addScaledVector(Ls,a)}equals(e){return e.a.equals(this.a)&&e.b.equals(this.b)&&e.c.equals(this.c)}}const MS={aliceblue:15792383,antiquewhite:16444375,aqua:65535,aquamarine:8388564,azure:15794175,beige:16119260,bisque:16770244,black:0,blanchedalmond:16772045,blue:255,blueviolet:9055202,brown:10824234,burlywood:14596231,cadetblue:6266528,chartreuse:8388352,chocolate:13789470,coral:16744272,cornflowerblue:6591981,cornsilk:16775388,crimson:14423100,cyan:65535,darkblue:139,darkcyan:35723,darkgoldenrod:12092939,darkgray:11119017,darkgreen:25600,darkgrey:11119017,darkkhaki:12433259,darkmagenta:9109643,darkolivegreen:5597999,darkorange:16747520,darkorchid:10040012,darkred:9109504,darksalmon:15308410,darkseagreen:9419919,darkslateblue:4734347,darkslategray:3100495,darkslategrey:3100495,darkturquoise:52945,darkviolet:9699539,deeppink:16716947,deepskyblue:49151,dimgray:6908265,dimgrey:6908265,dodgerblue:2003199,firebrick:11674146,floralwhite:16775920,forestgreen:2263842,fuchsia:16711935,gainsboro:14474460,ghostwhite:16316671,gold:16766720,goldenrod:14329120,gray:8421504,green:32768,greenyellow:11403055,grey:8421504,honeydew:15794160,hotpink:16738740,indianred:13458524,indigo:4915330,ivory:16777200,khaki:15787660,lavender:15132410,lavenderblush:16773365,lawngreen:8190976,lemonchiffon:16775885,lightblue:11393254,lightcoral:15761536,lightcyan:14745599,lightgoldenrodyellow:16448210,lightgray:13882323,lightgreen:9498256,lightgrey:13882323,lightpink:16758465,lightsalmon:16752762,lightseagreen:2142890,lightskyblue:8900346,lightslategray:7833753,lightslategrey:7833753,lightsteelblue:11584734,lightyellow:16777184,lime:65280,limegreen:3329330,linen:16445670,magenta:16711935,maroon:8388608,mediumaquamarine:6737322,mediumblue:205,mediumorchid:12211667,mediumpurple:9662683,mediumseagreen:3978097,mediumslateblue:8087790,mediumspringgreen:64154,mediumturquoise:4772300,mediumvioletred:13047173,midnightblue:1644912,mintcream:16121850,mistyrose:16770273,moccasin:16770229,navajowhite:16768685,navy:128,oldlace:16643558,olive:8421376,olivedrab:7048739,orange:16753920,orangered:16729344,orchid:14315734,palegoldenrod:15657130,palegreen:10025880,paleturquoise:11529966,palevioletred:14381203,papayawhip:16773077,peachpuff:16767673,peru:13468991,pink:16761035,plum:14524637,powderblue:11591910,purple:8388736,rebeccapurple:6697881,red:16711680,rosybrown:12357519,royalblue:4286945,saddlebrown:9127187,salmon:16416882,sandybrown:16032864,seagreen:3050327,seashell:16774638,sienna:10506797,silver:12632256,skyblue:8900331,slateblue:6970061,slategray:7372944,slategrey:7372944,snow:16775930,springgreen:65407,steelblue:4620980,tan:13808780,teal:32896,thistle:14204888,tomato:16737095,turquoise:4251856,violet:15631086,wheat:16113331,white:16777215,whitesmoke:16119285,yellow:16776960,yellowgreen:10145074},dr={h:0,s:0,l:0},Il={h:0,s:0,l:0};function Pf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*6*(2/3-n):t}class ct{constructor(e,n,i){return this.isColor=!0,this.r=1,this.g=1,this.b=1,this.set(e,n,i)}set(e,n,i){if(n===void 0&&i===void 0){const r=e;r&&r.isColor?this.copy(r):typeof r=="number"?this.setHex(r):typeof r=="string"&&this.setStyle(r)}else this.setRGB(e,n,i);return this}setScalar(e){return this.r=e,this.g=e,this.b=e,this}setHex(e,n=Wn){return e=Math.floor(e),this.r=(e>>16&255)/255,this.g=(e>>8&255)/255,this.b=(e&255)/255,Qe.colorSpaceToWorking(this,n),this}setRGB(e,n,i,r=Qe.workingColorSpace){return this.r=e,this.g=n,this.b=i,Qe.colorSpaceToWorking(this,r),this}setHSL(e,n,i,r=Qe.workingColorSpace){if(e=Xw(e,1),n=qe(n,0,1),i=qe(i,0,1),n===0)this.r=this.g=this.b=i;else{const s=i<=.5?i*(1+n):i+n-i*n,o=2*i-s;this.r=Pf(o,s,e+1/3),this.g=Pf(o,s,e),this.b=Pf(o,s,e-1/3)}return Qe.colorSpaceToWorking(this,r),this}setStyle(e,n=Wn){function i(s){s!==void 0&&parseFloat(s)<1&&Be("Color: Alpha component of "+e+" will be ignored.")}let r;if(r=/^(\w+)\(([^\)]*)\)/.exec(e)){let s;const o=r[1],a=r[2];switch(o){case"rgb":case"rgba":if(s=/^\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(255,parseInt(s[1],10))/255,Math.min(255,parseInt(s[2],10))/255,Math.min(255,parseInt(s[3],10))/255,n);if(s=/^\s*(\d+)\%\s*,\s*(\d+)\%\s*,\s*(\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setRGB(Math.min(100,parseInt(s[1],10))/100,Math.min(100,parseInt(s[2],10))/100,Math.min(100,parseInt(s[3],10))/100,n);break;case"hsl":case"hsla":if(s=/^\s*(\d*\.?\d+)\s*,\s*(\d*\.?\d+)\%\s*,\s*(\d*\.?\d+)\%\s*(?:,\s*(\d*\.?\d+)\s*)?$/.exec(a))return i(s[4]),this.setHSL(parseFloat(s[1])/360,parseFloat(s[2])/100,parseFloat(s[3])/100,n);break;default:Be("Color: Unknown color model "+e)}}else if(r=/^\#([A-Fa-f\d]+)$/.exec(e)){const s=r[1],o=s.length;if(o===3)return this.setRGB(parseInt(s.charAt(0),16)/15,parseInt(s.charAt(1),16)/15,parseInt(s.charAt(2),16)/15,n);if(o===6)return this.setHex(parseInt(s,16),n);Be("Color: Invalid hex color "+e)}else if(e&&e.length>0)return this.setColorName(e,n);return this}setColorName(e,n=Wn){const i=MS[e.toLowerCase()];return i!==void 0?this.setHex(i,n):Be("Color: Unknown color "+e),this}clone(){return new this.constructor(this.r,this.g,this.b)}copy(e){return this.r=e.r,this.g=e.g,this.b=e.b,this}copySRGBToLinear(e){return this.r=qi(e.r),this.g=qi(e.g),this.b=qi(e.b),this}copyLinearToSRGB(e){return this.r=uo(e.r),this.g=uo(e.g),this.b=uo(e.b),this}convertSRGBToLinear(){return this.copySRGBToLinear(this),this}convertLinearToSRGB(){return this.copyLinearToSRGB(this),this}getHex(e=Wn){return Qe.workingToColorSpace(nn.copy(this),e),Math.round(qe(nn.r*255,0,255))*65536+Math.round(qe(nn.g*255,0,255))*256+Math.round(qe(nn.b*255,0,255))}getHexString(e=Wn){return("000000"+this.getHex(e).toString(16)).slice(-6)}getHSL(e,n=Qe.workingColorSpace){Qe.workingToColorSpace(nn.copy(this),n);const i=nn.r,r=nn.g,s=nn.b,o=Math.max(i,r,s),a=Math.min(i,r,s);let l,c;const f=(a+o)/2;if(a===o)l=0,c=0;else{const u=o-a;switch(c=f<=.5?u/(o+a):u/(2-o-a),o){case i:l=(r-s)/u+(r<s?6:0);break;case r:l=(s-i)/u+2;break;case s:l=(i-r)/u+4;break}l/=6}return e.h=l,e.s=c,e.l=f,e}getRGB(e,n=Qe.workingColorSpace){return Qe.workingToColorSpace(nn.copy(this),n),e.r=nn.r,e.g=nn.g,e.b=nn.b,e}getStyle(e=Wn){Qe.workingToColorSpace(nn.copy(this),e);const n=nn.r,i=nn.g,r=nn.b;return e!==Wn?`color(${e} ${n.toFixed(3)} ${i.toFixed(3)} ${r.toFixed(3)})`:`rgb(${Math.round(n*255)},${Math.round(i*255)},${Math.round(r*255)})`}offsetHSL(e,n,i){return this.getHSL(dr),this.setHSL(dr.h+e,dr.s+n,dr.l+i)}add(e){return this.r+=e.r,this.g+=e.g,this.b+=e.b,this}addColors(e,n){return this.r=e.r+n.r,this.g=e.g+n.g,this.b=e.b+n.b,this}addScalar(e){return this.r+=e,this.g+=e,this.b+=e,this}sub(e){return this.r=Math.max(0,this.r-e.r),this.g=Math.max(0,this.g-e.g),this.b=Math.max(0,this.b-e.b),this}multiply(e){return this.r*=e.r,this.g*=e.g,this.b*=e.b,this}multiplyScalar(e){return this.r*=e,this.g*=e,this.b*=e,this}lerp(e,n){return this.r+=(e.r-this.r)*n,this.g+=(e.g-this.g)*n,this.b+=(e.b-this.b)*n,this}lerpColors(e,n,i){return this.r=e.r+(n.r-e.r)*i,this.g=e.g+(n.g-e.g)*i,this.b=e.b+(n.b-e.b)*i,this}lerpHSL(e,n){this.getHSL(dr),e.getHSL(Il);const i=df(dr.h,Il.h,n),r=df(dr.s,Il.s,n),s=df(dr.l,Il.l,n);return this.setHSL(i,r,s),this}setFromVector3(e){return this.r=e.x,this.g=e.y,this.b=e.z,this}applyMatrix3(e){const n=this.r,i=this.g,r=this.b,s=e.elements;return this.r=s[0]*n+s[3]*i+s[6]*r,this.g=s[1]*n+s[4]*i+s[7]*r,this.b=s[2]*n+s[5]*i+s[8]*r,this}equals(e){return e.r===this.r&&e.g===this.g&&e.b===this.b}fromArray(e,n=0){return this.r=e[n],this.g=e[n+1],this.b=e[n+2],this}toArray(e=[],n=0){return e[n]=this.r,e[n+1]=this.g,e[n+2]=this.b,e}fromBufferAttribute(e,n){return this.r=e.getX(n),this.g=e.getY(n),this.b=e.getZ(n),this}toJSON(){return this.getHex()}*[Symbol.iterator](){yield this.r,yield this.g,yield this.b}}const nn=new ct;ct.NAMES=MS;let oA=0;class Ja extends Ro{constructor(){super(),this.isMaterial=!0,Object.defineProperty(this,"id",{value:oA++}),this.uuid=Ka(),this.name="",this.type="Material",this.blending=co,this.side=Ur,this.vertexColors=!1,this.opacity=1,this.transparent=!1,this.alphaHash=!1,this.blendSrc=eh,this.blendDst=th,this.blendEquation=es,this.blendSrcAlpha=null,this.blendDstAlpha=null,this.blendEquationAlpha=null,this.blendColor=new ct(0,0,0),this.blendAlpha=0,this.depthFunc=yo,this.depthTest=!0,this.depthWrite=!0,this.stencilWriteMask=255,this.stencilFunc=S0,this.stencilRef=0,this.stencilFuncMask=255,this.stencilFail=Es,this.stencilZFail=Es,this.stencilZPass=Es,this.stencilWrite=!1,this.clippingPlanes=null,this.clipIntersection=!1,this.clipShadows=!1,this.shadowSide=null,this.colorWrite=!0,this.precision=null,this.polygonOffset=!1,this.polygonOffsetFactor=0,this.polygonOffsetUnits=0,this.dithering=!1,this.alphaToCoverage=!1,this.premultipliedAlpha=!1,this.forceSinglePass=!1,this.allowOverride=!0,this.visible=!0,this.toneMapped=!0,this.userData={},this.version=0,this._alphaTest=0}get alphaTest(){return this._alphaTest}set alphaTest(e){this._alphaTest>0!=e>0&&this.version++,this._alphaTest=e}onBeforeRender(){}onBeforeCompile(){}customProgramCacheKey(){return this.onBeforeCompile.toString()}setValues(e){if(e!==void 0)for(const n in e){const i=e[n];if(i===void 0){Be(`Material: parameter '${n}' has value of undefined.`);continue}const r=this[n];if(r===void 0){Be(`Material: '${n}' is not a property of THREE.${this.type}.`);continue}r&&r.isColor?r.set(i):r&&r.isVector3&&i&&i.isVector3?r.copy(i):this[n]=i}}toJSON(e){const n=e===void 0||typeof e=="string";n&&(e={textures:{},images:{}});const i={metadata:{version:4.7,type:"Material",generator:"Material.toJSON"}};i.uuid=this.uuid,i.type=this.type,this.name!==""&&(i.name=this.name),this.color&&this.color.isColor&&(i.color=this.color.getHex()),this.roughness!==void 0&&(i.roughness=this.roughness),this.metalness!==void 0&&(i.metalness=this.metalness),this.sheen!==void 0&&(i.sheen=this.sheen),this.sheenColor&&this.sheenColor.isColor&&(i.sheenColor=this.sheenColor.getHex()),this.sheenRoughness!==void 0&&(i.sheenRoughness=this.sheenRoughness),this.emissive&&this.emissive.isColor&&(i.emissive=this.emissive.getHex()),this.emissiveIntensity!==void 0&&this.emissiveIntensity!==1&&(i.emissiveIntensity=this.emissiveIntensity),this.specular&&this.specular.isColor&&(i.specular=this.specular.getHex()),this.specularIntensity!==void 0&&(i.specularIntensity=this.specularIntensity),this.specularColor&&this.specularColor.isColor&&(i.specularColor=this.specularColor.getHex()),this.shininess!==void 0&&(i.shininess=this.shininess),this.clearcoat!==void 0&&(i.clearcoat=this.clearcoat),this.clearcoatRoughness!==void 0&&(i.clearcoatRoughness=this.clearcoatRoughness),this.clearcoatMap&&this.clearcoatMap.isTexture&&(i.clearcoatMap=this.clearcoatMap.toJSON(e).uuid),this.clearcoatRoughnessMap&&this.clearcoatRoughnessMap.isTexture&&(i.clearcoatRoughnessMap=this.clearcoatRoughnessMap.toJSON(e).uuid),this.clearcoatNormalMap&&this.clearcoatNormalMap.isTexture&&(i.clearcoatNormalMap=this.clearcoatNormalMap.toJSON(e).uuid,i.clearcoatNormalScale=this.clearcoatNormalScale.toArray()),this.sheenColorMap&&this.sheenColorMap.isTexture&&(i.sheenColorMap=this.sheenColorMap.toJSON(e).uuid),this.sheenRoughnessMap&&this.sheenRoughnessMap.isTexture&&(i.sheenRoughnessMap=this.sheenRoughnessMap.toJSON(e).uuid),this.dispersion!==void 0&&(i.dispersion=this.dispersion),this.iridescence!==void 0&&(i.iridescence=this.iridescence),this.iridescenceIOR!==void 0&&(i.iridescenceIOR=this.iridescenceIOR),this.iridescenceThicknessRange!==void 0&&(i.iridescenceThicknessRange=this.iridescenceThicknessRange),this.iridescenceMap&&this.iridescenceMap.isTexture&&(i.iridescenceMap=this.iridescenceMap.toJSON(e).uuid),this.iridescenceThicknessMap&&this.iridescenceThicknessMap.isTexture&&(i.iridescenceThicknessMap=this.iridescenceThicknessMap.toJSON(e).uuid),this.anisotropy!==void 0&&(i.anisotropy=this.anisotropy),this.anisotropyRotation!==void 0&&(i.anisotropyRotation=this.anisotropyRotation),this.anisotropyMap&&this.anisotropyMap.isTexture&&(i.anisotropyMap=this.anisotropyMap.toJSON(e).uuid),this.map&&this.map.isTexture&&(i.map=this.map.toJSON(e).uuid),this.matcap&&this.matcap.isTexture&&(i.matcap=this.matcap.toJSON(e).uuid),this.alphaMap&&this.alphaMap.isTexture&&(i.alphaMap=this.alphaMap.toJSON(e).uuid),this.lightMap&&this.lightMap.isTexture&&(i.lightMap=this.lightMap.toJSON(e).uuid,i.lightMapIntensity=this.lightMapIntensity),this.aoMap&&this.aoMap.isTexture&&(i.aoMap=this.aoMap.toJSON(e).uuid,i.aoMapIntensity=this.aoMapIntensity),this.bumpMap&&this.bumpMap.isTexture&&(i.bumpMap=this.bumpMap.toJSON(e).uuid,i.bumpScale=this.bumpScale),this.normalMap&&this.normalMap.isTexture&&(i.normalMap=this.normalMap.toJSON(e).uuid,i.normalMapType=this.normalMapType,i.normalScale=this.normalScale.toArray()),this.displacementMap&&this.displacementMap.isTexture&&(i.displacementMap=this.displacementMap.toJSON(e).uuid,i.displacementScale=this.displacementScale,i.displacementBias=this.displacementBias),this.roughnessMap&&this.roughnessMap.isTexture&&(i.roughnessMap=this.roughnessMap.toJSON(e).uuid),this.metalnessMap&&this.metalnessMap.isTexture&&(i.metalnessMap=this.metalnessMap.toJSON(e).uuid),this.emissiveMap&&this.emissiveMap.isTexture&&(i.emissiveMap=this.emissiveMap.toJSON(e).uuid),this.specularMap&&this.specularMap.isTexture&&(i.specularMap=this.specularMap.toJSON(e).uuid),this.specularIntensityMap&&this.specularIntensityMap.isTexture&&(i.specularIntensityMap=this.specularIntensityMap.toJSON(e).uuid),this.specularColorMap&&this.specularColorMap.isTexture&&(i.specularColorMap=this.specularColorMap.toJSON(e).uuid),this.envMap&&this.envMap.isTexture&&(i.envMap=this.envMap.toJSON(e).uuid,this.combine!==void 0&&(i.combine=this.combine)),this.envMapRotation!==void 0&&(i.envMapRotation=this.envMapRotation.toArray()),this.envMapIntensity!==void 0&&(i.envMapIntensity=this.envMapIntensity),this.reflectivity!==void 0&&(i.reflectivity=this.reflectivity),this.refractionRatio!==void 0&&(i.refractionRatio=this.refractionRatio),this.gradientMap&&this.gradientMap.isTexture&&(i.gradientMap=this.gradientMap.toJSON(e).uuid),this.transmission!==void 0&&(i.transmission=this.transmission),this.transmissionMap&&this.transmissionMap.isTexture&&(i.transmissionMap=this.transmissionMap.toJSON(e).uuid),this.thickness!==void 0&&(i.thickness=this.thickness),this.thicknessMap&&this.thicknessMap.isTexture&&(i.thicknessMap=this.thicknessMap.toJSON(e).uuid),this.attenuationDistance!==void 0&&this.attenuationDistance!==1/0&&(i.attenuationDistance=this.attenuationDistance),this.attenuationColor!==void 0&&(i.attenuationColor=this.attenuationColor.getHex()),this.size!==void 0&&(i.size=this.size),this.shadowSide!==null&&(i.shadowSide=this.shadowSide),this.sizeAttenuation!==void 0&&(i.sizeAttenuation=this.sizeAttenuation),this.blending!==co&&(i.blending=this.blending),this.side!==Ur&&(i.side=this.side),this.vertexColors===!0&&(i.vertexColors=!0),this.opacity<1&&(i.opacity=this.opacity),this.transparent===!0&&(i.transparent=!0),this.blendSrc!==eh&&(i.blendSrc=this.blendSrc),this.blendDst!==th&&(i.blendDst=this.blendDst),this.blendEquation!==es&&(i.blendEquation=this.blendEquation),this.blendSrcAlpha!==null&&(i.blendSrcAlpha=this.blendSrcAlpha),this.blendDstAlpha!==null&&(i.blendDstAlpha=this.blendDstAlpha),this.blendEquationAlpha!==null&&(i.blendEquationAlpha=this.blendEquationAlpha),this.blendColor&&this.blendColor.isColor&&(i.blendColor=this.blendColor.getHex()),this.blendAlpha!==0&&(i.blendAlpha=this.blendAlpha),this.depthFunc!==yo&&(i.depthFunc=this.depthFunc),this.depthTest===!1&&(i.depthTest=this.depthTest),this.depthWrite===!1&&(i.depthWrite=this.depthWrite),this.colorWrite===!1&&(i.colorWrite=this.colorWrite),this.stencilWriteMask!==255&&(i.stencilWriteMask=this.stencilWriteMask),this.stencilFunc!==S0&&(i.stencilFunc=this.stencilFunc),this.stencilRef!==0&&(i.stencilRef=this.stencilRef),this.stencilFuncMask!==255&&(i.stencilFuncMask=this.stencilFuncMask),this.stencilFail!==Es&&(i.stencilFail=this.stencilFail),this.stencilZFail!==Es&&(i.stencilZFail=this.stencilZFail),this.stencilZPass!==Es&&(i.stencilZPass=this.stencilZPass),this.stencilWrite===!0&&(i.stencilWrite=this.stencilWrite),this.rotation!==void 0&&this.rotation!==0&&(i.rotation=this.rotation),this.polygonOffset===!0&&(i.polygonOffset=!0),this.polygonOffsetFactor!==0&&(i.polygonOffsetFactor=this.polygonOffsetFactor),this.polygonOffsetUnits!==0&&(i.polygonOffsetUnits=this.polygonOffsetUnits),this.linewidth!==void 0&&this.linewidth!==1&&(i.linewidth=this.linewidth),this.dashSize!==void 0&&(i.dashSize=this.dashSize),this.gapSize!==void 0&&(i.gapSize=this.gapSize),this.scale!==void 0&&(i.scale=this.scale),this.dithering===!0&&(i.dithering=!0),this.alphaTest>0&&(i.alphaTest=this.alphaTest),this.alphaHash===!0&&(i.alphaHash=!0),this.alphaToCoverage===!0&&(i.alphaToCoverage=!0),this.premultipliedAlpha===!0&&(i.premultipliedAlpha=!0),this.forceSinglePass===!0&&(i.forceSinglePass=!0),this.allowOverride===!1&&(i.allowOverride=!1),this.wireframe===!0&&(i.wireframe=!0),this.wireframeLinewidth>1&&(i.wireframeLinewidth=this.wireframeLinewidth),this.wireframeLinecap!=="round"&&(i.wireframeLinecap=this.wireframeLinecap),this.wireframeLinejoin!=="round"&&(i.wireframeLinejoin=this.wireframeLinejoin),this.flatShading===!0&&(i.flatShading=!0),this.visible===!1&&(i.visible=!1),this.toneMapped===!1&&(i.toneMapped=!1),this.fog===!1&&(i.fog=!1),Object.keys(this.userData).length>0&&(i.userData=this.userData);function r(s){const o=[];for(const a in s){const l=s[a];delete l.metadata,o.push(l)}return o}if(n){const s=r(e.textures),o=r(e.images);s.length>0&&(i.textures=s),o.length>0&&(i.images=o)}return i}clone(){return new this.constructor().copy(this)}copy(e){this.name=e.name,this.blending=e.blending,this.side=e.side,this.vertexColors=e.vertexColors,this.opacity=e.opacity,this.transparent=e.transparent,this.blendSrc=e.blendSrc,this.blendDst=e.blendDst,this.blendEquation=e.blendEquation,this.blendSrcAlpha=e.blendSrcAlpha,this.blendDstAlpha=e.blendDstAlpha,this.blendEquationAlpha=e.blendEquationAlpha,this.blendColor.copy(e.blendColor),this.blendAlpha=e.blendAlpha,this.depthFunc=e.depthFunc,this.depthTest=e.depthTest,this.depthWrite=e.depthWrite,this.stencilWriteMask=e.stencilWriteMask,this.stencilFunc=e.stencilFunc,this.stencilRef=e.stencilRef,this.stencilFuncMask=e.stencilFuncMask,this.stencilFail=e.stencilFail,this.stencilZFail=e.stencilZFail,this.stencilZPass=e.stencilZPass,this.stencilWrite=e.stencilWrite;const n=e.clippingPlanes;let i=null;if(n!==null){const r=n.length;i=new Array(r);for(let s=0;s!==r;++s)i[s]=n[s].clone()}return this.clippingPlanes=i,this.clipIntersection=e.clipIntersection,this.clipShadows=e.clipShadows,this.shadowSide=e.shadowSide,this.colorWrite=e.colorWrite,this.precision=e.precision,this.polygonOffset=e.polygonOffset,this.polygonOffsetFactor=e.polygonOffsetFactor,this.polygonOffsetUnits=e.polygonOffsetUnits,this.dithering=e.dithering,this.alphaTest=e.alphaTest,this.alphaHash=e.alphaHash,this.alphaToCoverage=e.alphaToCoverage,this.premultipliedAlpha=e.premultipliedAlpha,this.forceSinglePass=e.forceSinglePass,this.allowOverride=e.allowOverride,this.visible=e.visible,this.toneMapped=e.toneMapped,this.userData=JSON.parse(JSON.stringify(e.userData)),this}dispose(){this.dispatchEvent({type:"dispose"})}set needsUpdate(e){e===!0&&this.version++}}class ES extends Ja{constructor(e){super(),this.isMeshBasicMaterial=!0,this.type="MeshBasicMaterial",this.color=new ct(16777215),this.map=null,this.lightMap=null,this.lightMapIntensity=1,this.aoMap=null,this.aoMapIntensity=1,this.specularMap=null,this.alphaMap=null,this.envMap=null,this.envMapRotation=new ir,this.combine=nS,this.reflectivity=1,this.refractionRatio=.98,this.wireframe=!1,this.wireframeLinewidth=1,this.wireframeLinecap="round",this.wireframeLinejoin="round",this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.lightMap=e.lightMap,this.lightMapIntensity=e.lightMapIntensity,this.aoMap=e.aoMap,this.aoMapIntensity=e.aoMapIntensity,this.specularMap=e.specularMap,this.alphaMap=e.alphaMap,this.envMap=e.envMap,this.envMapRotation.copy(e.envMapRotation),this.combine=e.combine,this.reflectivity=e.reflectivity,this.refractionRatio=e.refractionRatio,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.wireframeLinecap=e.wireframeLinecap,this.wireframeLinejoin=e.wireframeLinejoin,this.fog=e.fog,this}}const Ut=new G,Nl=new pt;let aA=0;class wn{constructor(e,n,i=!1){if(Array.isArray(e))throw new TypeError("THREE.BufferAttribute: array should be a Typed Array.");this.isBufferAttribute=!0,Object.defineProperty(this,"id",{value:aA++}),this.name="",this.array=e,this.itemSize=n,this.count=e!==void 0?e.length/n:0,this.normalized=i,this.usage=M0,this.updateRanges=[],this.gpuType=bi,this.version=0}onUploadCallback(){}set needsUpdate(e){e===!0&&this.version++}setUsage(e){return this.usage=e,this}addUpdateRange(e,n){this.updateRanges.push({start:e,count:n})}clearUpdateRanges(){this.updateRanges.length=0}copy(e){return this.name=e.name,this.array=new e.array.constructor(e.array),this.itemSize=e.itemSize,this.count=e.count,this.normalized=e.normalized,this.usage=e.usage,this.gpuType=e.gpuType,this}copyAt(e,n,i){e*=this.itemSize,i*=n.itemSize;for(let r=0,s=this.itemSize;r<s;r++)this.array[e+r]=n.array[i+r];return this}copyArray(e){return this.array.set(e),this}applyMatrix3(e){if(this.itemSize===2)for(let n=0,i=this.count;n<i;n++)Nl.fromBufferAttribute(this,n),Nl.applyMatrix3(e),this.setXY(n,Nl.x,Nl.y);else if(this.itemSize===3)for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix3(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyMatrix4(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyMatrix4(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}applyNormalMatrix(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.applyNormalMatrix(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}transformDirection(e){for(let n=0,i=this.count;n<i;n++)Ut.fromBufferAttribute(this,n),Ut.transformDirection(e),this.setXYZ(n,Ut.x,Ut.y,Ut.z);return this}set(e,n=0){return this.array.set(e,n),this}getComponent(e,n){let i=this.array[e*this.itemSize+n];return this.normalized&&(i=Wo(i,this.array)),i}setComponent(e,n,i){return this.normalized&&(i=Sn(i,this.array)),this.array[e*this.itemSize+n]=i,this}getX(e){let n=this.array[e*this.itemSize];return this.normalized&&(n=Wo(n,this.array)),n}setX(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize]=n,this}getY(e){let n=this.array[e*this.itemSize+1];return this.normalized&&(n=Wo(n,this.array)),n}setY(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+1]=n,this}getZ(e){let n=this.array[e*this.itemSize+2];return this.normalized&&(n=Wo(n,this.array)),n}setZ(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+2]=n,this}getW(e){let n=this.array[e*this.itemSize+3];return this.normalized&&(n=Wo(n,this.array)),n}setW(e,n){return this.normalized&&(n=Sn(n,this.array)),this.array[e*this.itemSize+3]=n,this}setXY(e,n,i){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array)),this.array[e+0]=n,this.array[e+1]=i,this}setXYZ(e,n,i,r){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this}setXYZW(e,n,i,r,s){return e*=this.itemSize,this.normalized&&(n=Sn(n,this.array),i=Sn(i,this.array),r=Sn(r,this.array),s=Sn(s,this.array)),this.array[e+0]=n,this.array[e+1]=i,this.array[e+2]=r,this.array[e+3]=s,this}onUpload(e){return this.onUploadCallback=e,this}clone(){return new this.constructor(this.array,this.itemSize).copy(this)}toJSON(){const e={itemSize:this.itemSize,type:this.array.constructor.name,array:Array.from(this.array),normalized:this.normalized};return this.name!==""&&(e.name=this.name),this.usage!==M0&&(e.usage=this.usage),e}}class TS extends wn{constructor(e,n,i){super(new Uint16Array(e),n,i)}}class wS extends wn{constructor(e,n,i){super(new Uint32Array(e),n,i)}}class Ki extends wn{constructor(e,n,i){super(new Float32Array(e),n,i)}}let lA=0;const Gn=new Nt,Df=new Pn,Is=new G,Un=new Qa,$o=new Qa,Gt=new G;class _i extends Ro{constructor(){super(),this.isBufferGeometry=!0,Object.defineProperty(this,"id",{value:lA++}),this.uuid=Ka(),this.name="",this.type="BufferGeometry",this.index=null,this.indirect=null,this.indirectOffset=0,this.attributes={},this.morphAttributes={},this.morphTargetsRelative=!1,this.groups=[],this.boundingBox=null,this.boundingSphere=null,this.drawRange={start:0,count:1/0},this.userData={}}getIndex(){return this.index}setIndex(e){return Array.isArray(e)?this.index=new(_S(e)?wS:TS)(e,1):this.index=e,this}setIndirect(e,n=0){return this.indirect=e,this.indirectOffset=n,this}getIndirect(){return this.indirect}getAttribute(e){return this.attributes[e]}setAttribute(e,n){return this.attributes[e]=n,this}deleteAttribute(e){return delete this.attributes[e],this}hasAttribute(e){return this.attributes[e]!==void 0}addGroup(e,n,i=0){this.groups.push({start:e,count:n,materialIndex:i})}clearGroups(){this.groups=[]}setDrawRange(e,n){this.drawRange.start=e,this.drawRange.count=n}applyMatrix4(e){const n=this.attributes.position;n!==void 0&&(n.applyMatrix4(e),n.needsUpdate=!0);const i=this.attributes.normal;if(i!==void 0){const s=new He().getNormalMatrix(e);i.applyNormalMatrix(s),i.needsUpdate=!0}const r=this.attributes.tangent;return r!==void 0&&(r.transformDirection(e),r.needsUpdate=!0),this.boundingBox!==null&&this.computeBoundingBox(),this.boundingSphere!==null&&this.computeBoundingSphere(),this}applyQuaternion(e){return Gn.makeRotationFromQuaternion(e),this.applyMatrix4(Gn),this}rotateX(e){return Gn.makeRotationX(e),this.applyMatrix4(Gn),this}rotateY(e){return Gn.makeRotationY(e),this.applyMatrix4(Gn),this}rotateZ(e){return Gn.makeRotationZ(e),this.applyMatrix4(Gn),this}translate(e,n,i){return Gn.makeTranslation(e,n,i),this.applyMatrix4(Gn),this}scale(e,n,i){return Gn.makeScale(e,n,i),this.applyMatrix4(Gn),this}lookAt(e){return Df.lookAt(e),Df.updateMatrix(),this.applyMatrix4(Df.matrix),this}center(){return this.computeBoundingBox(),this.boundingBox.getCenter(Is).negate(),this.translate(Is.x,Is.y,Is.z),this}setFromPoints(e){const n=this.getAttribute("position");if(n===void 0){const i=[];for(let r=0,s=e.length;r<s;r++){const o=e[r];i.push(o.x,o.y,o.z||0)}this.setAttribute("position",new Ki(i,3))}else{const i=Math.min(e.length,n.count);for(let r=0;r<i;r++){const s=e[r];n.setXYZ(r,s.x,s.y,s.z||0)}e.length>n.count&&Be("BufferGeometry: Buffer size too small for points data. Use .dispose() and create a new geometry."),n.needsUpdate=!0}return this}computeBoundingBox(){this.boundingBox===null&&(this.boundingBox=new Qa);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingBox(): GLBufferAttribute requires a manual bounding box.",this),this.boundingBox.set(new G(-1/0,-1/0,-1/0),new G(1/0,1/0,1/0));return}if(e!==void 0){if(this.boundingBox.setFromBufferAttribute(e),n)for(let i=0,r=n.length;i<r;i++){const s=n[i];Un.setFromBufferAttribute(s),this.morphTargetsRelative?(Gt.addVectors(this.boundingBox.min,Un.min),this.boundingBox.expandByPoint(Gt),Gt.addVectors(this.boundingBox.max,Un.max),this.boundingBox.expandByPoint(Gt)):(this.boundingBox.expandByPoint(Un.min),this.boundingBox.expandByPoint(Un.max))}}else this.boundingBox.makeEmpty();(isNaN(this.boundingBox.min.x)||isNaN(this.boundingBox.min.y)||isNaN(this.boundingBox.min.z))&&it('BufferGeometry.computeBoundingBox(): Computed min/max have NaN values. The "position" attribute is likely to have NaN values.',this)}computeBoundingSphere(){this.boundingSphere===null&&(this.boundingSphere=new Tu);const e=this.attributes.position,n=this.morphAttributes.position;if(e&&e.isGLBufferAttribute){it("BufferGeometry.computeBoundingSphere(): GLBufferAttribute requires a manual bounding sphere.",this),this.boundingSphere.set(new G,1/0);return}if(e){const i=this.boundingSphere.center;if(Un.setFromBufferAttribute(e),n)for(let s=0,o=n.length;s<o;s++){const a=n[s];$o.setFromBufferAttribute(a),this.morphTargetsRelative?(Gt.addVectors(Un.min,$o.min),Un.expandByPoint(Gt),Gt.addVectors(Un.max,$o.max),Un.expandByPoint(Gt)):(Un.expandByPoint($o.min),Un.expandByPoint($o.max))}Un.getCenter(i);let r=0;for(let s=0,o=e.count;s<o;s++)Gt.fromBufferAttribute(e,s),r=Math.max(r,i.distanceToSquared(Gt));if(n)for(let s=0,o=n.length;s<o;s++){const a=n[s],l=this.morphTargetsRelative;for(let c=0,f=a.count;c<f;c++)Gt.fromBufferAttribute(a,c),l&&(Is.fromBufferAttribute(e,c),Gt.add(Is)),r=Math.max(r,i.distanceToSquared(Gt))}this.boundingSphere.radius=Math.sqrt(r),isNaN(this.boundingSphere.radius)&&it('BufferGeometry.computeBoundingSphere(): Computed radius is NaN. The "position" attribute is likely to have NaN values.',this)}}computeTangents(){const e=this.index,n=this.attributes;if(e===null||n.position===void 0||n.normal===void 0||n.uv===void 0){it("BufferGeometry: .computeTangents() failed. Missing required attributes (index, position, normal or uv)");return}const i=n.position,r=n.normal,s=n.uv;this.hasAttribute("tangent")===!1&&this.setAttribute("tangent",new wn(new Float32Array(4*i.count),4));const o=this.getAttribute("tangent"),a=[],l=[];for(let R=0;R<i.count;R++)a[R]=new G,l[R]=new G;const c=new G,f=new G,u=new G,h=new pt,p=new pt,g=new pt,x=new G,m=new G;function d(R,M,T){c.fromBufferAttribute(i,R),f.fromBufferAttribute(i,M),u.fromBufferAttribute(i,T),h.fromBufferAttribute(s,R),p.fromBufferAttribute(s,M),g.fromBufferAttribute(s,T),f.sub(c),u.sub(c),p.sub(h),g.sub(h);const L=1/(p.x*g.y-g.x*p.y);isFinite(L)&&(x.copy(f).multiplyScalar(g.y).addScaledVector(u,-p.y).multiplyScalar(L),m.copy(u).multiplyScalar(p.x).addScaledVector(f,-g.x).multiplyScalar(L),a[R].add(x),a[M].add(x),a[T].add(x),l[R].add(m),l[M].add(m),l[T].add(m))}let v=this.groups;v.length===0&&(v=[{start:0,count:e.count}]);for(let R=0,M=v.length;R<M;++R){const T=v[R],L=T.start,H=T.count;for(let N=L,X=L+H;N<X;N+=3)d(e.getX(N+0),e.getX(N+1),e.getX(N+2))}const _=new G,S=new G,E=new G,A=new G;function b(R){E.fromBufferAttribute(r,R),A.copy(E);const M=a[R];_.copy(M),_.sub(E.multiplyScalar(E.dot(M))).normalize(),S.crossVectors(A,M);const L=S.dot(l[R])<0?-1:1;o.setXYZW(R,_.x,_.y,_.z,L)}for(let R=0,M=v.length;R<M;++R){const T=v[R],L=T.start,H=T.count;for(let N=L,X=L+H;N<X;N+=3)b(e.getX(N+0)),b(e.getX(N+1)),b(e.getX(N+2))}}computeVertexNormals(){const e=this.index,n=this.getAttribute("position");if(n!==void 0){let i=this.getAttribute("normal");if(i===void 0)i=new wn(new Float32Array(n.count*3),3),this.setAttribute("normal",i);else for(let h=0,p=i.count;h<p;h++)i.setXYZ(h,0,0,0);const r=new G,s=new G,o=new G,a=new G,l=new G,c=new G,f=new G,u=new G;if(e)for(let h=0,p=e.count;h<p;h+=3){const g=e.getX(h+0),x=e.getX(h+1),m=e.getX(h+2);r.fromBufferAttribute(n,g),s.fromBufferAttribute(n,x),o.fromBufferAttribute(n,m),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),a.fromBufferAttribute(i,g),l.fromBufferAttribute(i,x),c.fromBufferAttribute(i,m),a.add(f),l.add(f),c.add(f),i.setXYZ(g,a.x,a.y,a.z),i.setXYZ(x,l.x,l.y,l.z),i.setXYZ(m,c.x,c.y,c.z)}else for(let h=0,p=n.count;h<p;h+=3)r.fromBufferAttribute(n,h+0),s.fromBufferAttribute(n,h+1),o.fromBufferAttribute(n,h+2),f.subVectors(o,s),u.subVectors(r,s),f.cross(u),i.setXYZ(h+0,f.x,f.y,f.z),i.setXYZ(h+1,f.x,f.y,f.z),i.setXYZ(h+2,f.x,f.y,f.z);this.normalizeNormals(),i.needsUpdate=!0}}normalizeNormals(){const e=this.attributes.normal;for(let n=0,i=e.count;n<i;n++)Gt.fromBufferAttribute(e,n),Gt.normalize(),e.setXYZ(n,Gt.x,Gt.y,Gt.z)}toNonIndexed(){function e(a,l){const c=a.array,f=a.itemSize,u=a.normalized,h=new c.constructor(l.length*f);let p=0,g=0;for(let x=0,m=l.length;x<m;x++){a.isInterleavedBufferAttribute?p=l[x]*a.data.stride+a.offset:p=l[x]*f;for(let d=0;d<f;d++)h[g++]=c[p++]}return new wn(h,f,u)}if(this.index===null)return Be("BufferGeometry.toNonIndexed(): BufferGeometry is already non-indexed."),this;const n=new _i,i=this.index.array,r=this.attributes;for(const a in r){const l=r[a],c=e(l,i);n.setAttribute(a,c)}const s=this.morphAttributes;for(const a in s){const l=[],c=s[a];for(let f=0,u=c.length;f<u;f++){const h=c[f],p=e(h,i);l.push(p)}n.morphAttributes[a]=l}n.morphTargetsRelative=this.morphTargetsRelative;const o=this.groups;for(let a=0,l=o.length;a<l;a++){const c=o[a];n.addGroup(c.start,c.count,c.materialIndex)}return n}toJSON(){const e={metadata:{version:4.7,type:"BufferGeometry",generator:"BufferGeometry.toJSON"}};if(e.uuid=this.uuid,e.type=this.type,this.name!==""&&(e.name=this.name),Object.keys(this.userData).length>0&&(e.userData=this.userData),this.parameters!==void 0){const l=this.parameters;for(const c in l)l[c]!==void 0&&(e[c]=l[c]);return e}e.data={attributes:{}};const n=this.index;n!==null&&(e.data.index={type:n.array.constructor.name,array:Array.prototype.slice.call(n.array)});const i=this.attributes;for(const l in i){const c=i[l];e.data.attributes[l]=c.toJSON(e.data)}const r={};let s=!1;for(const l in this.morphAttributes){const c=this.morphAttributes[l],f=[];for(let u=0,h=c.length;u<h;u++){const p=c[u];f.push(p.toJSON(e.data))}f.length>0&&(r[l]=f,s=!0)}s&&(e.data.morphAttributes=r,e.data.morphTargetsRelative=this.morphTargetsRelative);const o=this.groups;o.length>0&&(e.data.groups=JSON.parse(JSON.stringify(o)));const a=this.boundingSphere;return a!==null&&(e.data.boundingSphere=a.toJSON()),e}clone(){return new this.constructor().copy(this)}copy(e){this.index=null,this.attributes={},this.morphAttributes={},this.groups=[],this.boundingBox=null,this.boundingSphere=null;const n={};this.name=e.name;const i=e.index;i!==null&&this.setIndex(i.clone());const r=e.attributes;for(const c in r){const f=r[c];this.setAttribute(c,f.clone(n))}const s=e.morphAttributes;for(const c in s){const f=[],u=s[c];for(let h=0,p=u.length;h<p;h++)f.push(u[h].clone(n));this.morphAttributes[c]=f}this.morphTargetsRelative=e.morphTargetsRelative;const o=e.groups;for(let c=0,f=o.length;c<f;c++){const u=o[c];this.addGroup(u.start,u.count,u.materialIndex)}const a=e.boundingBox;a!==null&&(this.boundingBox=a.clone());const l=e.boundingSphere;return l!==null&&(this.boundingSphere=l.clone()),this.drawRange.start=e.drawRange.start,this.drawRange.count=e.drawRange.count,this.userData=e.userData,this}dispose(){this.dispatchEvent({type:"dispose"})}}const O0=new Nt,jr=new yS,Ul=new Tu,k0=new G,Fl=new G,Ol=new G,kl=new G,Lf=new G,Bl=new G,B0=new G,Vl=new G;class rr extends Pn{constructor(e=new _i,n=new ES){super(),this.isMesh=!0,this.type="Mesh",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.count=1,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),e.morphTargetInfluences!==void 0&&(this.morphTargetInfluences=e.morphTargetInfluences.slice()),e.morphTargetDictionary!==void 0&&(this.morphTargetDictionary=Object.assign({},e.morphTargetDictionary)),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}getVertexPosition(e,n){const i=this.geometry,r=i.attributes.position,s=i.morphAttributes.position,o=i.morphTargetsRelative;n.fromBufferAttribute(r,e);const a=this.morphTargetInfluences;if(s&&a){Bl.set(0,0,0);for(let l=0,c=s.length;l<c;l++){const f=a[l],u=s[l];f!==0&&(Lf.fromBufferAttribute(u,e),o?Bl.addScaledVector(Lf,f):Bl.addScaledVector(Lf.sub(n),f))}n.add(Bl)}return n}raycast(e,n){const i=this.geometry,r=this.material,s=this.matrixWorld;r!==void 0&&(i.boundingSphere===null&&i.computeBoundingSphere(),Ul.copy(i.boundingSphere),Ul.applyMatrix4(s),jr.copy(e.ray).recast(e.near),!(Ul.containsPoint(jr.origin)===!1&&(jr.intersectSphere(Ul,k0)===null||jr.origin.distanceToSquared(k0)>(e.far-e.near)**2))&&(O0.copy(s).invert(),jr.copy(e.ray).applyMatrix4(O0),!(i.boundingBox!==null&&jr.intersectsBox(i.boundingBox)===!1)&&this._computeIntersections(e,n,jr)))}_computeIntersections(e,n,i){let r;const s=this.geometry,o=this.material,a=s.index,l=s.attributes.position,c=s.attributes.uv,f=s.attributes.uv1,u=s.attributes.normal,h=s.groups,p=s.drawRange;if(a!==null)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(a.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,E=_;S<E;S+=3){const A=a.getX(S),b=a.getX(S+1),R=a.getX(S+2);r=zl(this,d,e,i,c,f,u,A,b,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(a.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=a.getX(m),_=a.getX(m+1),S=a.getX(m+2);r=zl(this,o,e,i,c,f,u,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}else if(l!==void 0)if(Array.isArray(o))for(let g=0,x=h.length;g<x;g++){const m=h[g],d=o[m.materialIndex],v=Math.max(m.start,p.start),_=Math.min(l.count,Math.min(m.start+m.count,p.start+p.count));for(let S=v,E=_;S<E;S+=3){const A=S,b=S+1,R=S+2;r=zl(this,d,e,i,c,f,u,A,b,R),r&&(r.faceIndex=Math.floor(S/3),r.face.materialIndex=m.materialIndex,n.push(r))}}else{const g=Math.max(0,p.start),x=Math.min(l.count,p.start+p.count);for(let m=g,d=x;m<d;m+=3){const v=m,_=m+1,S=m+2;r=zl(this,o,e,i,c,f,u,v,_,S),r&&(r.faceIndex=Math.floor(m/3),n.push(r))}}}}function cA(t,e,n,i,r,s,o,a){let l;if(e.side===Rn?l=i.intersectTriangle(o,s,r,!0,a):l=i.intersectTriangle(r,s,o,e.side===Ur,a),l===null)return null;Vl.copy(a),Vl.applyMatrix4(t.matrixWorld);const c=n.ray.origin.distanceTo(Vl);return c<n.near||c>n.far?null:{distance:c,point:Vl.clone(),object:t}}function zl(t,e,n,i,r,s,o,a,l,c){t.getVertexPosition(a,Fl),t.getVertexPosition(l,Ol),t.getVertexPosition(c,kl);const f=cA(t,e,n,i,Fl,Ol,kl,B0);if(f){const u=new G;ui.getBarycoord(B0,Fl,Ol,kl,u),r&&(f.uv=ui.getInterpolatedAttribute(r,a,l,c,u,new pt)),s&&(f.uv1=ui.getInterpolatedAttribute(s,a,l,c,u,new pt)),o&&(f.normal=ui.getInterpolatedAttribute(o,a,l,c,u,new G),f.normal.dot(i.direction)>0&&f.normal.multiplyScalar(-1));const h={a,b:l,c,normal:new G,materialIndex:0};ui.getNormal(Fl,Ol,kl,h.normal),f.face=h,f.barycoord=u}return f}class el extends _i{constructor(e=1,n=1,i=1,r=1,s=1,o=1){super(),this.type="BoxGeometry",this.parameters={width:e,height:n,depth:i,widthSegments:r,heightSegments:s,depthSegments:o};const a=this;r=Math.floor(r),s=Math.floor(s),o=Math.floor(o);const l=[],c=[],f=[],u=[];let h=0,p=0;g("z","y","x",-1,-1,i,n,e,o,s,0),g("z","y","x",1,-1,i,n,-e,o,s,1),g("x","z","y",1,1,e,i,n,r,o,2),g("x","z","y",1,-1,e,i,-n,r,o,3),g("x","y","z",1,-1,e,n,i,r,s,4),g("x","y","z",-1,-1,e,n,-i,r,s,5),this.setIndex(l),this.setAttribute("position",new Ki(c,3)),this.setAttribute("normal",new Ki(f,3)),this.setAttribute("uv",new Ki(u,2));function g(x,m,d,v,_,S,E,A,b,R,M){const T=S/b,L=E/R,H=S/2,N=E/2,X=A/2,$=b+1,k=R+1;let O=0,P=0;const K=new G;for(let Y=0;Y<k;Y++){const te=Y*L-N;for(let be=0;be<$;be++){const he=be*T-H;K[x]=he*v,K[m]=te*_,K[d]=X,c.push(K.x,K.y,K.z),K[x]=0,K[m]=0,K[d]=A>0?1:-1,f.push(K.x,K.y,K.z),u.push(be/b),u.push(1-Y/R),O+=1}}for(let Y=0;Y<R;Y++)for(let te=0;te<b;te++){const be=h+te+$*Y,he=h+te+$*(Y+1),Ie=h+(te+1)+$*(Y+1),Ne=h+(te+1)+$*Y;l.push(be,he,Ne),l.push(he,Ie,Ne),P+=6}a.addGroup(p,P,M),p+=P,h+=O}}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new el(e.width,e.height,e.depth,e.widthSegments,e.heightSegments,e.depthSegments)}}function To(t){const e={};for(const n in t){e[n]={};for(const i in t[n]){const r=t[n][i];r&&(r.isColor||r.isMatrix3||r.isMatrix4||r.isVector2||r.isVector3||r.isVector4||r.isTexture||r.isQuaternion)?r.isRenderTargetTexture?(Be("UniformsUtils: Textures of render targets cannot be cloned via cloneUniforms() or mergeUniforms()."),e[n][i]=null):e[n][i]=r.clone():Array.isArray(r)?e[n][i]=r.slice():e[n][i]=r}}return e}function un(t){const e={};for(let n=0;n<t.length;n++){const i=To(t[n]);for(const r in i)e[r]=i[r]}return e}function uA(t){const e=[];for(let n=0;n<t.length;n++)e.push(t[n].clone());return e}function AS(t){const e=t.getRenderTarget();return e===null?t.outputColorSpace:e.isXRRenderTarget===!0?e.texture.colorSpace:Qe.workingColorSpace}const fA={clone:To,merge:un};var dA=`void main() {
	gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
}`,hA=`void main() {
	gl_FragColor = vec4( 1.0, 0.0, 0.0, 1.0 );
}`;class Ui extends Ja{constructor(e){super(),this.isShaderMaterial=!0,this.type="ShaderMaterial",this.defines={},this.uniforms={},this.uniformsGroups=[],this.vertexShader=dA,this.fragmentShader=hA,this.linewidth=1,this.wireframe=!1,this.wireframeLinewidth=1,this.fog=!1,this.lights=!1,this.clipping=!1,this.forceSinglePass=!0,this.extensions={clipCullDistance:!1,multiDraw:!1},this.defaultAttributeValues={color:[1,1,1],uv:[0,0],uv1:[0,0]},this.index0AttributeName=void 0,this.uniformsNeedUpdate=!1,this.glslVersion=null,e!==void 0&&this.setValues(e)}copy(e){return super.copy(e),this.fragmentShader=e.fragmentShader,this.vertexShader=e.vertexShader,this.uniforms=To(e.uniforms),this.uniformsGroups=uA(e.uniformsGroups),this.defines=Object.assign({},e.defines),this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this.fog=e.fog,this.lights=e.lights,this.clipping=e.clipping,this.extensions=Object.assign({},e.extensions),this.glslVersion=e.glslVersion,this.defaultAttributeValues=Object.assign({},e.defaultAttributeValues),this.index0AttributeName=e.index0AttributeName,this.uniformsNeedUpdate=e.uniformsNeedUpdate,this}toJSON(e){const n=super.toJSON(e);n.glslVersion=this.glslVersion,n.uniforms={};for(const r in this.uniforms){const o=this.uniforms[r].value;o&&o.isTexture?n.uniforms[r]={type:"t",value:o.toJSON(e).uuid}:o&&o.isColor?n.uniforms[r]={type:"c",value:o.getHex()}:o&&o.isVector2?n.uniforms[r]={type:"v2",value:o.toArray()}:o&&o.isVector3?n.uniforms[r]={type:"v3",value:o.toArray()}:o&&o.isVector4?n.uniforms[r]={type:"v4",value:o.toArray()}:o&&o.isMatrix3?n.uniforms[r]={type:"m3",value:o.toArray()}:o&&o.isMatrix4?n.uniforms[r]={type:"m4",value:o.toArray()}:n.uniforms[r]={value:o}}Object.keys(this.defines).length>0&&(n.defines=this.defines),n.vertexShader=this.vertexShader,n.fragmentShader=this.fragmentShader,n.lights=this.lights,n.clipping=this.clipping;const i={};for(const r in this.extensions)this.extensions[r]===!0&&(i[r]=!0);return Object.keys(i).length>0&&(n.extensions=i),n}}class bS extends Pn{constructor(){super(),this.isCamera=!0,this.type="Camera",this.matrixWorldInverse=new Nt,this.projectionMatrix=new Nt,this.projectionMatrixInverse=new Nt,this.coordinateSystem=Ci,this._reversedDepth=!1}get reversedDepth(){return this._reversedDepth}copy(e,n){return super.copy(e,n),this.matrixWorldInverse.copy(e.matrixWorldInverse),this.projectionMatrix.copy(e.projectionMatrix),this.projectionMatrixInverse.copy(e.projectionMatrixInverse),this.coordinateSystem=e.coordinateSystem,this}getWorldDirection(e){return super.getWorldDirection(e).negate()}updateMatrixWorld(e){super.updateMatrixWorld(e),this.matrixWorldInverse.copy(this.matrixWorld).invert()}updateWorldMatrix(e,n){super.updateWorldMatrix(e,n),this.matrixWorldInverse.copy(this.matrixWorld).invert()}clone(){return new this.constructor().copy(this)}}const hr=new G,V0=new pt,z0=new pt;class Yn extends bS{constructor(e=50,n=1,i=.1,r=2e3){super(),this.isPerspectiveCamera=!0,this.type="PerspectiveCamera",this.fov=e,this.zoom=1,this.near=i,this.far=r,this.focus=10,this.aspect=n,this.view=null,this.filmGauge=35,this.filmOffset=0,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.fov=e.fov,this.zoom=e.zoom,this.near=e.near,this.far=e.far,this.focus=e.focus,this.aspect=e.aspect,this.view=e.view===null?null:Object.assign({},e.view),this.filmGauge=e.filmGauge,this.filmOffset=e.filmOffset,this}setFocalLength(e){const n=.5*this.getFilmHeight()/e;this.fov=jh*2*Math.atan(n),this.updateProjectionMatrix()}getFocalLength(){const e=Math.tan(ff*.5*this.fov);return .5*this.getFilmHeight()/e}getEffectiveFOV(){return jh*2*Math.atan(Math.tan(ff*.5*this.fov)/this.zoom)}getFilmWidth(){return this.filmGauge*Math.min(this.aspect,1)}getFilmHeight(){return this.filmGauge/Math.max(this.aspect,1)}getViewBounds(e,n,i){hr.set(-1,-1,.5).applyMatrix4(this.projectionMatrixInverse),n.set(hr.x,hr.y).multiplyScalar(-e/hr.z),hr.set(1,1,.5).applyMatrix4(this.projectionMatrixInverse),i.set(hr.x,hr.y).multiplyScalar(-e/hr.z)}getViewSize(e,n){return this.getViewBounds(e,V0,z0),n.subVectors(z0,V0)}setViewOffset(e,n,i,r,s,o){this.aspect=e/n,this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=this.near;let n=e*Math.tan(ff*.5*this.fov)/this.zoom,i=2*n,r=this.aspect*i,s=-.5*r;const o=this.view;if(this.view!==null&&this.view.enabled){const l=o.fullWidth,c=o.fullHeight;s+=o.offsetX*r/l,n-=o.offsetY*i/c,r*=o.width/l,i*=o.height/c}const a=this.filmOffset;a!==0&&(s+=e*a/this.getFilmWidth()),this.projectionMatrix.makePerspective(s,s+r,n,n-i,e,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.fov=this.fov,n.object.zoom=this.zoom,n.object.near=this.near,n.object.far=this.far,n.object.focus=this.focus,n.object.aspect=this.aspect,this.view!==null&&(n.object.view=Object.assign({},this.view)),n.object.filmGauge=this.filmGauge,n.object.filmOffset=this.filmOffset,n}}const Ns=-90,Us=1;class pA extends Pn{constructor(e,n,i){super(),this.type="CubeCamera",this.renderTarget=i,this.coordinateSystem=null,this.activeMipmapLevel=0;const r=new Yn(Ns,Us,e,n);r.layers=this.layers,this.add(r);const s=new Yn(Ns,Us,e,n);s.layers=this.layers,this.add(s);const o=new Yn(Ns,Us,e,n);o.layers=this.layers,this.add(o);const a=new Yn(Ns,Us,e,n);a.layers=this.layers,this.add(a);const l=new Yn(Ns,Us,e,n);l.layers=this.layers,this.add(l);const c=new Yn(Ns,Us,e,n);c.layers=this.layers,this.add(c)}updateCoordinateSystem(){const e=this.coordinateSystem,n=this.children.concat(),[i,r,s,o,a,l]=n;for(const c of n)this.remove(c);if(e===Ci)i.up.set(0,1,0),i.lookAt(1,0,0),r.up.set(0,1,0),r.lookAt(-1,0,0),s.up.set(0,0,-1),s.lookAt(0,1,0),o.up.set(0,0,1),o.lookAt(0,-1,0),a.up.set(0,1,0),a.lookAt(0,0,1),l.up.set(0,1,0),l.lookAt(0,0,-1);else if(e===Zc)i.up.set(0,-1,0),i.lookAt(-1,0,0),r.up.set(0,-1,0),r.lookAt(1,0,0),s.up.set(0,0,1),s.lookAt(0,1,0),o.up.set(0,0,-1),o.lookAt(0,-1,0),a.up.set(0,-1,0),a.lookAt(0,0,1),l.up.set(0,-1,0),l.lookAt(0,0,-1);else throw new Error("THREE.CubeCamera.updateCoordinateSystem(): Invalid coordinate system: "+e);for(const c of n)this.add(c),c.updateMatrixWorld()}update(e,n){this.parent===null&&this.updateMatrixWorld();const{renderTarget:i,activeMipmapLevel:r}=this;this.coordinateSystem!==e.coordinateSystem&&(this.coordinateSystem=e.coordinateSystem,this.updateCoordinateSystem());const[s,o,a,l,c,f]=this.children,u=e.getRenderTarget(),h=e.getActiveCubeFace(),p=e.getActiveMipmapLevel(),g=e.xr.enabled;e.xr.enabled=!1;const x=i.texture.generateMipmaps;i.texture.generateMipmaps=!1,e.setRenderTarget(i,0,r),e.render(n,s),e.setRenderTarget(i,1,r),e.render(n,o),e.setRenderTarget(i,2,r),e.render(n,a),e.setRenderTarget(i,3,r),e.render(n,l),e.setRenderTarget(i,4,r),e.render(n,c),i.texture.generateMipmaps=x,e.setRenderTarget(i,5,r),e.render(n,f),e.setRenderTarget(u,h,p),e.xr.enabled=g,i.texture.needsPMREMUpdate=!0}}class CS extends mn{constructor(e=[],n=vs,i,r,s,o,a,l,c,f){super(e,n,i,r,s,o,a,l,c,f),this.isCubeTexture=!0,this.flipY=!1}get images(){return this.image}set images(e){this.image=e}}class RS extends Li{constructor(e=1,n={}){super(e,e,n),this.isWebGLCubeRenderTarget=!0;const i={width:e,height:e,depth:1},r=[i,i,i,i,i,i];this.texture=new CS(r),this._setTextureOptions(n),this.texture.isRenderTargetTexture=!0}fromEquirectangularTexture(e,n){this.texture.type=n.type,this.texture.colorSpace=n.colorSpace,this.texture.generateMipmaps=n.generateMipmaps,this.texture.minFilter=n.minFilter,this.texture.magFilter=n.magFilter;const i={uniforms:{tEquirect:{value:null}},vertexShader:`

				varying vec3 vWorldDirection;

				vec3 transformDirection( in vec3 dir, in mat4 matrix ) {

					return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );

				}

				void main() {

					vWorldDirection = transformDirection( position, modelMatrix );

					#include <begin_vertex>
					#include <project_vertex>

				}
			`,fragmentShader:`

				uniform sampler2D tEquirect;

				varying vec3 vWorldDirection;

				#include <common>

				void main() {

					vec3 direction = normalize( vWorldDirection );

					vec2 sampleUV = equirectUv( direction );

					gl_FragColor = texture2D( tEquirect, sampleUV );

				}
			`},r=new el(5,5,5),s=new Ui({name:"CubemapFromEquirect",uniforms:To(i.uniforms),vertexShader:i.vertexShader,fragmentShader:i.fragmentShader,side:Rn,blending:$i});s.uniforms.tEquirect.value=n;const o=new rr(r,s),a=n.minFilter;return n.minFilter===ss&&(n.minFilter=sn),new pA(1,10,this).update(e,o),n.minFilter=a,o.geometry.dispose(),o.material.dispose(),this}clear(e,n=!0,i=!0,r=!0){const s=e.getRenderTarget();for(let o=0;o<6;o++)e.setRenderTarget(this,o),e.clear(n,i,r);e.setRenderTarget(s)}}class Hl extends Pn{constructor(){super(),this.isGroup=!0,this.type="Group"}}const mA={type:"move"};class If{constructor(){this._targetRay=null,this._grip=null,this._hand=null}getHandSpace(){return this._hand===null&&(this._hand=new Hl,this._hand.matrixAutoUpdate=!1,this._hand.visible=!1,this._hand.joints={},this._hand.inputState={pinching:!1}),this._hand}getTargetRaySpace(){return this._targetRay===null&&(this._targetRay=new Hl,this._targetRay.matrixAutoUpdate=!1,this._targetRay.visible=!1,this._targetRay.hasLinearVelocity=!1,this._targetRay.linearVelocity=new G,this._targetRay.hasAngularVelocity=!1,this._targetRay.angularVelocity=new G),this._targetRay}getGripSpace(){return this._grip===null&&(this._grip=new Hl,this._grip.matrixAutoUpdate=!1,this._grip.visible=!1,this._grip.hasLinearVelocity=!1,this._grip.linearVelocity=new G,this._grip.hasAngularVelocity=!1,this._grip.angularVelocity=new G),this._grip}dispatchEvent(e){return this._targetRay!==null&&this._targetRay.dispatchEvent(e),this._grip!==null&&this._grip.dispatchEvent(e),this._hand!==null&&this._hand.dispatchEvent(e),this}connect(e){if(e&&e.hand){const n=this._hand;if(n)for(const i of e.hand.values())this._getHandJoint(n,i)}return this.dispatchEvent({type:"connected",data:e}),this}disconnect(e){return this.dispatchEvent({type:"disconnected",data:e}),this._targetRay!==null&&(this._targetRay.visible=!1),this._grip!==null&&(this._grip.visible=!1),this._hand!==null&&(this._hand.visible=!1),this}update(e,n,i){let r=null,s=null,o=null;const a=this._targetRay,l=this._grip,c=this._hand;if(e&&n.session.visibilityState!=="visible-blurred"){if(c&&e.hand){o=!0;for(const x of e.hand.values()){const m=n.getJointPose(x,i),d=this._getHandJoint(c,x);m!==null&&(d.matrix.fromArray(m.transform.matrix),d.matrix.decompose(d.position,d.rotation,d.scale),d.matrixWorldNeedsUpdate=!0,d.jointRadius=m.radius),d.visible=m!==null}const f=c.joints["index-finger-tip"],u=c.joints["thumb-tip"],h=f.position.distanceTo(u.position),p=.02,g=.005;c.inputState.pinching&&h>p+g?(c.inputState.pinching=!1,this.dispatchEvent({type:"pinchend",handedness:e.handedness,target:this})):!c.inputState.pinching&&h<=p-g&&(c.inputState.pinching=!0,this.dispatchEvent({type:"pinchstart",handedness:e.handedness,target:this}))}else l!==null&&e.gripSpace&&(s=n.getPose(e.gripSpace,i),s!==null&&(l.matrix.fromArray(s.transform.matrix),l.matrix.decompose(l.position,l.rotation,l.scale),l.matrixWorldNeedsUpdate=!0,s.linearVelocity?(l.hasLinearVelocity=!0,l.linearVelocity.copy(s.linearVelocity)):l.hasLinearVelocity=!1,s.angularVelocity?(l.hasAngularVelocity=!0,l.angularVelocity.copy(s.angularVelocity)):l.hasAngularVelocity=!1));a!==null&&(r=n.getPose(e.targetRaySpace,i),r===null&&s!==null&&(r=s),r!==null&&(a.matrix.fromArray(r.transform.matrix),a.matrix.decompose(a.position,a.rotation,a.scale),a.matrixWorldNeedsUpdate=!0,r.linearVelocity?(a.hasLinearVelocity=!0,a.linearVelocity.copy(r.linearVelocity)):a.hasLinearVelocity=!1,r.angularVelocity?(a.hasAngularVelocity=!0,a.angularVelocity.copy(r.angularVelocity)):a.hasAngularVelocity=!1,this.dispatchEvent(mA)))}return a!==null&&(a.visible=r!==null),l!==null&&(l.visible=s!==null),c!==null&&(c.visible=o!==null),this}_getHandJoint(e,n){if(e.joints[n.jointName]===void 0){const i=new Hl;i.matrixAutoUpdate=!1,i.visible=!1,e.joints[n.jointName]=i,e.add(i)}return e.joints[n.jointName]}}class gA extends Pn{constructor(){super(),this.isScene=!0,this.type="Scene",this.background=null,this.environment=null,this.fog=null,this.backgroundBlurriness=0,this.backgroundIntensity=1,this.backgroundRotation=new ir,this.environmentIntensity=1,this.environmentRotation=new ir,this.overrideMaterial=null,typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}copy(e,n){return super.copy(e,n),e.background!==null&&(this.background=e.background.clone()),e.environment!==null&&(this.environment=e.environment.clone()),e.fog!==null&&(this.fog=e.fog.clone()),this.backgroundBlurriness=e.backgroundBlurriness,this.backgroundIntensity=e.backgroundIntensity,this.backgroundRotation.copy(e.backgroundRotation),this.environmentIntensity=e.environmentIntensity,this.environmentRotation.copy(e.environmentRotation),e.overrideMaterial!==null&&(this.overrideMaterial=e.overrideMaterial.clone()),this.matrixAutoUpdate=e.matrixAutoUpdate,this}toJSON(e){const n=super.toJSON(e);return this.fog!==null&&(n.object.fog=this.fog.toJSON()),this.backgroundBlurriness>0&&(n.object.backgroundBlurriness=this.backgroundBlurriness),this.backgroundIntensity!==1&&(n.object.backgroundIntensity=this.backgroundIntensity),n.object.backgroundRotation=this.backgroundRotation.toArray(),this.environmentIntensity!==1&&(n.object.environmentIntensity=this.environmentIntensity),n.object.environmentRotation=this.environmentRotation.toArray(),n}}class vA extends mn{constructor(e=null,n=1,i=1,r,s,o,a,l,c=Kt,f=Kt,u,h){super(null,o,a,l,c,f,r,s,u,h),this.isDataTexture=!0,this.image={data:e,width:n,height:i},this.generateMipmaps=!1,this.flipY=!1,this.unpackAlignment=1}}const Nf=new G,_A=new G,xA=new He;class Qr{constructor(e=new G(1,0,0),n=0){this.isPlane=!0,this.normal=e,this.constant=n}set(e,n){return this.normal.copy(e),this.constant=n,this}setComponents(e,n,i,r){return this.normal.set(e,n,i),this.constant=r,this}setFromNormalAndCoplanarPoint(e,n){return this.normal.copy(e),this.constant=-n.dot(this.normal),this}setFromCoplanarPoints(e,n,i){const r=Nf.subVectors(i,n).cross(_A.subVectors(e,n)).normalize();return this.setFromNormalAndCoplanarPoint(r,e),this}copy(e){return this.normal.copy(e.normal),this.constant=e.constant,this}normalize(){const e=1/this.normal.length();return this.normal.multiplyScalar(e),this.constant*=e,this}negate(){return this.constant*=-1,this.normal.negate(),this}distanceToPoint(e){return this.normal.dot(e)+this.constant}distanceToSphere(e){return this.distanceToPoint(e.center)-e.radius}projectPoint(e,n){return n.copy(e).addScaledVector(this.normal,-this.distanceToPoint(e))}intersectLine(e,n){const i=e.delta(Nf),r=this.normal.dot(i);if(r===0)return this.distanceToPoint(e.start)===0?n.copy(e.start):null;const s=-(e.start.dot(this.normal)+this.constant)/r;return s<0||s>1?null:n.copy(e.start).addScaledVector(i,s)}intersectsLine(e){const n=this.distanceToPoint(e.start),i=this.distanceToPoint(e.end);return n<0&&i>0||i<0&&n>0}intersectsBox(e){return e.intersectsPlane(this)}intersectsSphere(e){return e.intersectsPlane(this)}coplanarPoint(e){return e.copy(this.normal).multiplyScalar(-this.constant)}applyMatrix4(e,n){const i=n||xA.getNormalMatrix(e),r=this.coplanarPoint(Nf).applyMatrix4(e),s=this.normal.applyMatrix3(i).normalize();return this.constant=-r.dot(s),this}translate(e){return this.constant-=e.dot(this.normal),this}equals(e){return e.normal.equals(this.normal)&&e.constant===this.constant}clone(){return new this.constructor().copy(this)}}const Xr=new Tu,yA=new pt(.5,.5),Gl=new G;class PS{constructor(e=new Qr,n=new Qr,i=new Qr,r=new Qr,s=new Qr,o=new Qr){this.planes=[e,n,i,r,s,o]}set(e,n,i,r,s,o){const a=this.planes;return a[0].copy(e),a[1].copy(n),a[2].copy(i),a[3].copy(r),a[4].copy(s),a[5].copy(o),this}copy(e){const n=this.planes;for(let i=0;i<6;i++)n[i].copy(e.planes[i]);return this}setFromProjectionMatrix(e,n=Ci,i=!1){const r=this.planes,s=e.elements,o=s[0],a=s[1],l=s[2],c=s[3],f=s[4],u=s[5],h=s[6],p=s[7],g=s[8],x=s[9],m=s[10],d=s[11],v=s[12],_=s[13],S=s[14],E=s[15];if(r[0].setComponents(c-o,p-f,d-g,E-v).normalize(),r[1].setComponents(c+o,p+f,d+g,E+v).normalize(),r[2].setComponents(c+a,p+u,d+x,E+_).normalize(),r[3].setComponents(c-a,p-u,d-x,E-_).normalize(),i)r[4].setComponents(l,h,m,S).normalize(),r[5].setComponents(c-l,p-h,d-m,E-S).normalize();else if(r[4].setComponents(c-l,p-h,d-m,E-S).normalize(),n===Ci)r[5].setComponents(c+l,p+h,d+m,E+S).normalize();else if(n===Zc)r[5].setComponents(l,h,m,S).normalize();else throw new Error("THREE.Frustum.setFromProjectionMatrix(): Invalid coordinate system: "+n);return this}intersectsObject(e){if(e.boundingSphere!==void 0)e.boundingSphere===null&&e.computeBoundingSphere(),Xr.copy(e.boundingSphere).applyMatrix4(e.matrixWorld);else{const n=e.geometry;n.boundingSphere===null&&n.computeBoundingSphere(),Xr.copy(n.boundingSphere).applyMatrix4(e.matrixWorld)}return this.intersectsSphere(Xr)}intersectsSprite(e){Xr.center.set(0,0,0);const n=yA.distanceTo(e.center);return Xr.radius=.7071067811865476+n,Xr.applyMatrix4(e.matrixWorld),this.intersectsSphere(Xr)}intersectsSphere(e){const n=this.planes,i=e.center,r=-e.radius;for(let s=0;s<6;s++)if(n[s].distanceToPoint(i)<r)return!1;return!0}intersectsBox(e){const n=this.planes;for(let i=0;i<6;i++){const r=n[i];if(Gl.x=r.normal.x>0?e.max.x:e.min.x,Gl.y=r.normal.y>0?e.max.y:e.min.y,Gl.z=r.normal.z>0?e.max.z:e.min.z,r.distanceToPoint(Gl)<0)return!1}return!0}containsPoint(e){const n=this.planes;for(let i=0;i<6;i++)if(n[i].distanceToPoint(e)<0)return!1;return!0}clone(){return new this.constructor().copy(this)}}class DS extends Ja{constructor(e){super(),this.isPointsMaterial=!0,this.type="PointsMaterial",this.color=new ct(16777215),this.map=null,this.alphaMap=null,this.size=1,this.sizeAttenuation=!0,this.fog=!0,this.setValues(e)}copy(e){return super.copy(e),this.color.copy(e.color),this.map=e.map,this.alphaMap=e.alphaMap,this.size=e.size,this.sizeAttenuation=e.sizeAttenuation,this.fog=e.fog,this}}const H0=new Nt,Xh=new yS,Wl=new Tu,jl=new G;class SA extends Pn{constructor(e=new _i,n=new DS){super(),this.isPoints=!0,this.type="Points",this.geometry=e,this.material=n,this.morphTargetDictionary=void 0,this.morphTargetInfluences=void 0,this.updateMorphTargets()}copy(e,n){return super.copy(e,n),this.material=Array.isArray(e.material)?e.material.slice():e.material,this.geometry=e.geometry,this}raycast(e,n){const i=this.geometry,r=this.matrixWorld,s=e.params.Points.threshold,o=i.drawRange;if(i.boundingSphere===null&&i.computeBoundingSphere(),Wl.copy(i.boundingSphere),Wl.applyMatrix4(r),Wl.radius+=s,e.ray.intersectsSphere(Wl)===!1)return;H0.copy(r).invert(),Xh.copy(e.ray).applyMatrix4(H0);const a=s/((this.scale.x+this.scale.y+this.scale.z)/3),l=a*a,c=i.index,u=i.attributes.position;if(c!==null){const h=Math.max(0,o.start),p=Math.min(c.count,o.start+o.count);for(let g=h,x=p;g<x;g++){const m=c.getX(g);jl.fromBufferAttribute(u,m),G0(jl,m,l,r,e,n,this)}}else{const h=Math.max(0,o.start),p=Math.min(u.count,o.start+o.count);for(let g=h,x=p;g<x;g++)jl.fromBufferAttribute(u,g),G0(jl,g,l,r,e,n,this)}}updateMorphTargets(){const n=this.geometry.morphAttributes,i=Object.keys(n);if(i.length>0){const r=n[i[0]];if(r!==void 0){this.morphTargetInfluences=[],this.morphTargetDictionary={};for(let s=0,o=r.length;s<o;s++){const a=r[s].name||String(s);this.morphTargetInfluences.push(0),this.morphTargetDictionary[a]=s}}}}}function G0(t,e,n,i,r,s,o){const a=Xh.distanceSqToPoint(t);if(a<n){const l=new G;Xh.closestPointToPoint(t,l),l.applyMatrix4(i);const c=r.ray.origin.distanceTo(l);if(c<r.near||c>r.far)return;s.push({distance:c,distanceToRay:Math.sqrt(a),point:l,index:e,face:null,faceIndex:null,barycoord:null,object:o})}}class Ba extends mn{constructor(e,n,i=Ni,r,s,o,a=Kt,l=Kt,c,f=nr,u=1){if(f!==nr&&f!==os)throw new Error("DepthTexture format must be either THREE.DepthFormat or THREE.DepthStencilFormat");const h={width:e,height:n,depth:u};super(h,r,s,o,a,l,f,i,c),this.isDepthTexture=!0,this.flipY=!1,this.generateMipmaps=!1,this.compareFunction=null}copy(e){return super.copy(e),this.source=new Tm(Object.assign({},e.image)),this.compareFunction=e.compareFunction,this}toJSON(e){const n=super.toJSON(e);return this.compareFunction!==null&&(n.compareFunction=this.compareFunction),n}}class MA extends Ba{constructor(e,n=Ni,i=vs,r,s,o=Kt,a=Kt,l,c=nr){const f={width:e,height:e,depth:1},u=[f,f,f,f,f,f];super(e,e,n,i,r,s,o,a,l,c),this.image=u,this.isCubeDepthTexture=!0,this.isCubeTexture=!0}get images(){return this.image}set images(e){this.image=e}}class LS extends mn{constructor(e=null){super(),this.sourceTexture=e,this.isExternalTexture=!0}copy(e){return super.copy(e),this.sourceTexture=e.sourceTexture,this}}class wu extends _i{constructor(e=1,n=1,i=1,r=1){super(),this.type="PlaneGeometry",this.parameters={width:e,height:n,widthSegments:i,heightSegments:r};const s=e/2,o=n/2,a=Math.floor(i),l=Math.floor(r),c=a+1,f=l+1,u=e/a,h=n/l,p=[],g=[],x=[],m=[];for(let d=0;d<f;d++){const v=d*h-o;for(let _=0;_<c;_++){const S=_*u-s;g.push(S,-v,0),x.push(0,0,1),m.push(_/a),m.push(1-d/l)}}for(let d=0;d<l;d++)for(let v=0;v<a;v++){const _=v+c*d,S=v+c*(d+1),E=v+1+c*(d+1),A=v+1+c*d;p.push(_,S,A),p.push(S,E,A)}this.setIndex(p),this.setAttribute("position",new Ki(g,3)),this.setAttribute("normal",new Ki(x,3)),this.setAttribute("uv",new Ki(m,2))}copy(e){return super.copy(e),this.parameters=Object.assign({},e.parameters),this}static fromJSON(e){return new wu(e.width,e.height,e.widthSegments,e.heightSegments)}}class EA extends Ui{constructor(e){super(e),this.isRawShaderMaterial=!0,this.type="RawShaderMaterial"}}class TA extends Ja{constructor(e){super(),this.isMeshDepthMaterial=!0,this.type="MeshDepthMaterial",this.depthPacking=Uw,this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.wireframe=!1,this.wireframeLinewidth=1,this.setValues(e)}copy(e){return super.copy(e),this.depthPacking=e.depthPacking,this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this.wireframe=e.wireframe,this.wireframeLinewidth=e.wireframeLinewidth,this}}class wA extends Ja{constructor(e){super(),this.isMeshDistanceMaterial=!0,this.type="MeshDistanceMaterial",this.map=null,this.alphaMap=null,this.displacementMap=null,this.displacementScale=1,this.displacementBias=0,this.setValues(e)}copy(e){return super.copy(e),this.map=e.map,this.alphaMap=e.alphaMap,this.displacementMap=e.displacementMap,this.displacementScale=e.displacementScale,this.displacementBias=e.displacementBias,this}}class IS extends bS{constructor(e=-1,n=1,i=1,r=-1,s=.1,o=2e3){super(),this.isOrthographicCamera=!0,this.type="OrthographicCamera",this.zoom=1,this.view=null,this.left=e,this.right=n,this.top=i,this.bottom=r,this.near=s,this.far=o,this.updateProjectionMatrix()}copy(e,n){return super.copy(e,n),this.left=e.left,this.right=e.right,this.top=e.top,this.bottom=e.bottom,this.near=e.near,this.far=e.far,this.zoom=e.zoom,this.view=e.view===null?null:Object.assign({},e.view),this}setViewOffset(e,n,i,r,s,o){this.view===null&&(this.view={enabled:!0,fullWidth:1,fullHeight:1,offsetX:0,offsetY:0,width:1,height:1}),this.view.enabled=!0,this.view.fullWidth=e,this.view.fullHeight=n,this.view.offsetX=i,this.view.offsetY=r,this.view.width=s,this.view.height=o,this.updateProjectionMatrix()}clearViewOffset(){this.view!==null&&(this.view.enabled=!1),this.updateProjectionMatrix()}updateProjectionMatrix(){const e=(this.right-this.left)/(2*this.zoom),n=(this.top-this.bottom)/(2*this.zoom),i=(this.right+this.left)/2,r=(this.top+this.bottom)/2;let s=i-e,o=i+e,a=r+n,l=r-n;if(this.view!==null&&this.view.enabled){const c=(this.right-this.left)/this.view.fullWidth/this.zoom,f=(this.top-this.bottom)/this.view.fullHeight/this.zoom;s+=c*this.view.offsetX,o=s+c*this.view.width,a-=f*this.view.offsetY,l=a-f*this.view.height}this.projectionMatrix.makeOrthographic(s,o,a,l,this.near,this.far,this.coordinateSystem,this.reversedDepth),this.projectionMatrixInverse.copy(this.projectionMatrix).invert()}toJSON(e){const n=super.toJSON(e);return n.object.zoom=this.zoom,n.object.left=this.left,n.object.right=this.right,n.object.top=this.top,n.object.bottom=this.bottom,n.object.near=this.near,n.object.far=this.far,this.view!==null&&(n.object.view=Object.assign({},this.view)),n}}class AA extends Yn{constructor(e=[]){super(),this.isArrayCamera=!0,this.isMultiViewCamera=!1,this.cameras=e}}class bA{constructor(e=!0){this.autoStart=e,this.startTime=0,this.oldTime=0,this.elapsedTime=0,this.running=!1}start(){this.startTime=performance.now(),this.oldTime=this.startTime,this.elapsedTime=0,this.running=!0}stop(){this.getElapsedTime(),this.running=!1,this.autoStart=!1}getElapsedTime(){return this.getDelta(),this.elapsedTime}getDelta(){let e=0;if(this.autoStart&&!this.running)return this.start(),0;if(this.running){const n=performance.now();e=(n-this.oldTime)/1e3,this.oldTime=n,this.elapsedTime+=e}return e}}function W0(t,e,n,i){const r=CA(i);switch(n){case mS:return t*e;case vS:return t*e/r.components*r.byteLength;case xm:return t*e/r.components*r.byteLength;case Mo:return t*e*2/r.components*r.byteLength;case ym:return t*e*2/r.components*r.byteLength;case gS:return t*e*3/r.components*r.byteLength;case fi:return t*e*4/r.components*r.byteLength;case Sm:return t*e*4/r.components*r.byteLength;case mc:case gc:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case vc:case _c:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case ph:case gh:return Math.max(t,16)*Math.max(e,8)/4;case hh:case mh:return Math.max(t,8)*Math.max(e,8)/2;case vh:case _h:case yh:case Sh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*8;case xh:case Mh:case Eh:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case Th:return Math.floor((t+3)/4)*Math.floor((e+3)/4)*16;case wh:return Math.floor((t+4)/5)*Math.floor((e+3)/4)*16;case Ah:return Math.floor((t+4)/5)*Math.floor((e+4)/5)*16;case bh:return Math.floor((t+5)/6)*Math.floor((e+4)/5)*16;case Ch:return Math.floor((t+5)/6)*Math.floor((e+5)/6)*16;case Rh:return Math.floor((t+7)/8)*Math.floor((e+4)/5)*16;case Ph:return Math.floor((t+7)/8)*Math.floor((e+5)/6)*16;case Dh:return Math.floor((t+7)/8)*Math.floor((e+7)/8)*16;case Lh:return Math.floor((t+9)/10)*Math.floor((e+4)/5)*16;case Ih:return Math.floor((t+9)/10)*Math.floor((e+5)/6)*16;case Nh:return Math.floor((t+9)/10)*Math.floor((e+7)/8)*16;case Uh:return Math.floor((t+9)/10)*Math.floor((e+9)/10)*16;case Fh:return Math.floor((t+11)/12)*Math.floor((e+9)/10)*16;case Oh:return Math.floor((t+11)/12)*Math.floor((e+11)/12)*16;case kh:case Bh:case Vh:return Math.ceil(t/4)*Math.ceil(e/4)*16;case zh:case Hh:return Math.ceil(t/4)*Math.ceil(e/4)*8;case Gh:case Wh:return Math.ceil(t/4)*Math.ceil(e/4)*16}throw new Error(`Unable to determine texture byte length for ${n} format.`)}function CA(t){switch(t){case $n:case fS:return{byteLength:1,components:1};case Fa:case dS:case tr:return{byteLength:2,components:1};case vm:case _m:return{byteLength:2,components:4};case Ni:case gm:case bi:return{byteLength:4,components:1};case hS:case pS:return{byteLength:4,components:3}}throw new Error(`Unknown texture type ${t}.`)}typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("register",{detail:{revision:mm}}));typeof window<"u"&&(window.__THREE__?Be("WARNING: Multiple instances of Three.js being imported."):window.__THREE__=mm);/**
 * @license
 * Copyright 2010-2025 Three.js Authors
 * SPDX-License-Identifier: MIT
 */function NS(){let t=null,e=!1,n=null,i=null;function r(s,o){n(s,o),i=t.requestAnimationFrame(r)}return{start:function(){e!==!0&&n!==null&&(i=t.requestAnimationFrame(r),e=!0)},stop:function(){t.cancelAnimationFrame(i),e=!1},setAnimationLoop:function(s){n=s},setContext:function(s){t=s}}}function RA(t){const e=new WeakMap;function n(a,l){const c=a.array,f=a.usage,u=c.byteLength,h=t.createBuffer();t.bindBuffer(l,h),t.bufferData(l,c,f),a.onUploadCallback();let p;if(c instanceof Float32Array)p=t.FLOAT;else if(typeof Float16Array<"u"&&c instanceof Float16Array)p=t.HALF_FLOAT;else if(c instanceof Uint16Array)a.isFloat16BufferAttribute?p=t.HALF_FLOAT:p=t.UNSIGNED_SHORT;else if(c instanceof Int16Array)p=t.SHORT;else if(c instanceof Uint32Array)p=t.UNSIGNED_INT;else if(c instanceof Int32Array)p=t.INT;else if(c instanceof Int8Array)p=t.BYTE;else if(c instanceof Uint8Array)p=t.UNSIGNED_BYTE;else if(c instanceof Uint8ClampedArray)p=t.UNSIGNED_BYTE;else throw new Error("THREE.WebGLAttributes: Unsupported buffer data format: "+c);return{buffer:h,type:p,bytesPerElement:c.BYTES_PER_ELEMENT,version:a.version,size:u}}function i(a,l,c){const f=l.array,u=l.updateRanges;if(t.bindBuffer(c,a),u.length===0)t.bufferSubData(c,0,f);else{u.sort((p,g)=>p.start-g.start);let h=0;for(let p=1;p<u.length;p++){const g=u[h],x=u[p];x.start<=g.start+g.count+1?g.count=Math.max(g.count,x.start+x.count-g.start):(++h,u[h]=x)}u.length=h+1;for(let p=0,g=u.length;p<g;p++){const x=u[p];t.bufferSubData(c,x.start*f.BYTES_PER_ELEMENT,f,x.start,x.count)}l.clearUpdateRanges()}l.onUploadCallback()}function r(a){return a.isInterleavedBufferAttribute&&(a=a.data),e.get(a)}function s(a){a.isInterleavedBufferAttribute&&(a=a.data);const l=e.get(a);l&&(t.deleteBuffer(l.buffer),e.delete(a))}function o(a,l){if(a.isInterleavedBufferAttribute&&(a=a.data),a.isGLBufferAttribute){const f=e.get(a);(!f||f.version<a.version)&&e.set(a,{buffer:a.buffer,type:a.type,bytesPerElement:a.elementSize,version:a.version});return}const c=e.get(a);if(c===void 0)e.set(a,n(a,l));else if(c.version<a.version){if(c.size!==a.array.byteLength)throw new Error("THREE.WebGLAttributes: The size of the buffer attribute's array buffer does not match the original size. Resizing buffer attributes is not supported.");i(c.buffer,a,l),c.version=a.version}}return{get:r,remove:s,update:o}}var PA=`#ifdef USE_ALPHAHASH
	if ( diffuseColor.a < getAlphaHashThreshold( vPosition ) ) discard;
#endif`,DA=`#ifdef USE_ALPHAHASH
	const float ALPHA_HASH_SCALE = 0.05;
	float hash2D( vec2 value ) {
		return fract( 1.0e4 * sin( 17.0 * value.x + 0.1 * value.y ) * ( 0.1 + abs( sin( 13.0 * value.y + value.x ) ) ) );
	}
	float hash3D( vec3 value ) {
		return hash2D( vec2( hash2D( value.xy ), value.z ) );
	}
	float getAlphaHashThreshold( vec3 position ) {
		float maxDeriv = max(
			length( dFdx( position.xyz ) ),
			length( dFdy( position.xyz ) )
		);
		float pixScale = 1.0 / ( ALPHA_HASH_SCALE * maxDeriv );
		vec2 pixScales = vec2(
			exp2( floor( log2( pixScale ) ) ),
			exp2( ceil( log2( pixScale ) ) )
		);
		vec2 alpha = vec2(
			hash3D( floor( pixScales.x * position.xyz ) ),
			hash3D( floor( pixScales.y * position.xyz ) )
		);
		float lerpFactor = fract( log2( pixScale ) );
		float x = ( 1.0 - lerpFactor ) * alpha.x + lerpFactor * alpha.y;
		float a = min( lerpFactor, 1.0 - lerpFactor );
		vec3 cases = vec3(
			x * x / ( 2.0 * a * ( 1.0 - a ) ),
			( x - 0.5 * a ) / ( 1.0 - a ),
			1.0 - ( ( 1.0 - x ) * ( 1.0 - x ) / ( 2.0 * a * ( 1.0 - a ) ) )
		);
		float threshold = ( x < ( 1.0 - a ) )
			? ( ( x < a ) ? cases.x : cases.y )
			: cases.z;
		return clamp( threshold , 1.0e-6, 1.0 );
	}
#endif`,LA=`#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, vAlphaMapUv ).g;
#endif`,IA=`#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,NA=`#ifdef USE_ALPHATEST
	#ifdef ALPHA_TO_COVERAGE
	diffuseColor.a = smoothstep( alphaTest, alphaTest + fwidth( diffuseColor.a ), diffuseColor.a );
	if ( diffuseColor.a == 0.0 ) discard;
	#else
	if ( diffuseColor.a < alphaTest ) discard;
	#endif
#endif`,UA=`#ifdef USE_ALPHATEST
	uniform float alphaTest;
#endif`,FA=`#ifdef USE_AOMAP
	float ambientOcclusion = ( texture2D( aoMap, vAoMapUv ).r - 1.0 ) * aoMapIntensity + 1.0;
	reflectedLight.indirectDiffuse *= ambientOcclusion;
	#if defined( USE_CLEARCOAT ) 
		clearcoatSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_SHEEN ) 
		sheenSpecularIndirect *= ambientOcclusion;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD )
		float dotNV = saturate( dot( geometryNormal, geometryViewDir ) );
		reflectedLight.indirectSpecular *= computeSpecularOcclusion( dotNV, ambientOcclusion, material.roughness );
	#endif
#endif`,OA=`#ifdef USE_AOMAP
	uniform sampler2D aoMap;
	uniform float aoMapIntensity;
#endif`,kA=`#ifdef USE_BATCHING
	#if ! defined( GL_ANGLE_multi_draw )
	#define gl_DrawID _gl_DrawID
	uniform int _gl_DrawID;
	#endif
	uniform highp sampler2D batchingTexture;
	uniform highp usampler2D batchingIdTexture;
	mat4 getBatchingMatrix( const in float i ) {
		int size = textureSize( batchingTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( batchingTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( batchingTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( batchingTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( batchingTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
	float getIndirectIndex( const in int i ) {
		int size = textureSize( batchingIdTexture, 0 ).x;
		int x = i % size;
		int y = i / size;
		return float( texelFetch( batchingIdTexture, ivec2( x, y ), 0 ).r );
	}
#endif
#ifdef USE_BATCHING_COLOR
	uniform sampler2D batchingColorTexture;
	vec3 getBatchingColor( const in float i ) {
		int size = textureSize( batchingColorTexture, 0 ).x;
		int j = int( i );
		int x = j % size;
		int y = j / size;
		return texelFetch( batchingColorTexture, ivec2( x, y ), 0 ).rgb;
	}
#endif`,BA=`#ifdef USE_BATCHING
	mat4 batchingMatrix = getBatchingMatrix( getIndirectIndex( gl_DrawID ) );
#endif`,VA=`vec3 transformed = vec3( position );
#ifdef USE_ALPHAHASH
	vPosition = vec3( position );
#endif`,zA=`vec3 objectNormal = vec3( normal );
#ifdef USE_TANGENT
	vec3 objectTangent = vec3( tangent.xyz );
#endif`,HA=`float G_BlinnPhong_Implicit( ) {
	return 0.25;
}
float D_BlinnPhong( const in float shininess, const in float dotNH ) {
	return RECIPROCAL_PI * ( shininess * 0.5 + 1.0 ) * pow( dotNH, shininess );
}
vec3 BRDF_BlinnPhong( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in vec3 specularColor, const in float shininess ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( specularColor, 1.0, dotVH );
	float G = G_BlinnPhong_Implicit( );
	float D = D_BlinnPhong( shininess, dotNH );
	return F * ( G * D );
} // validated`,GA=`#ifdef USE_IRIDESCENCE
	const mat3 XYZ_TO_REC709 = mat3(
		 3.2404542, -0.9692660,  0.0556434,
		-1.5371385,  1.8760108, -0.2040259,
		-0.4985314,  0.0415560,  1.0572252
	);
	vec3 Fresnel0ToIor( vec3 fresnel0 ) {
		vec3 sqrtF0 = sqrt( fresnel0 );
		return ( vec3( 1.0 ) + sqrtF0 ) / ( vec3( 1.0 ) - sqrtF0 );
	}
	vec3 IorToFresnel0( vec3 transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - vec3( incidentIor ) ) / ( transmittedIor + vec3( incidentIor ) ) );
	}
	float IorToFresnel0( float transmittedIor, float incidentIor ) {
		return pow2( ( transmittedIor - incidentIor ) / ( transmittedIor + incidentIor ));
	}
	vec3 evalSensitivity( float OPD, vec3 shift ) {
		float phase = 2.0 * PI * OPD * 1.0e-9;
		vec3 val = vec3( 5.4856e-13, 4.4201e-13, 5.2481e-13 );
		vec3 pos = vec3( 1.6810e+06, 1.7953e+06, 2.2084e+06 );
		vec3 var = vec3( 4.3278e+09, 9.3046e+09, 6.6121e+09 );
		vec3 xyz = val * sqrt( 2.0 * PI * var ) * cos( pos * phase + shift ) * exp( - pow2( phase ) * var );
		xyz.x += 9.7470e-14 * sqrt( 2.0 * PI * 4.5282e+09 ) * cos( 2.2399e+06 * phase + shift[ 0 ] ) * exp( - 4.5282e+09 * pow2( phase ) );
		xyz /= 1.0685e-7;
		vec3 rgb = XYZ_TO_REC709 * xyz;
		return rgb;
	}
	vec3 evalIridescence( float outsideIOR, float eta2, float cosTheta1, float thinFilmThickness, vec3 baseF0 ) {
		vec3 I;
		float iridescenceIOR = mix( outsideIOR, eta2, smoothstep( 0.0, 0.03, thinFilmThickness ) );
		float sinTheta2Sq = pow2( outsideIOR / iridescenceIOR ) * ( 1.0 - pow2( cosTheta1 ) );
		float cosTheta2Sq = 1.0 - sinTheta2Sq;
		if ( cosTheta2Sq < 0.0 ) {
			return vec3( 1.0 );
		}
		float cosTheta2 = sqrt( cosTheta2Sq );
		float R0 = IorToFresnel0( iridescenceIOR, outsideIOR );
		float R12 = F_Schlick( R0, 1.0, cosTheta1 );
		float T121 = 1.0 - R12;
		float phi12 = 0.0;
		if ( iridescenceIOR < outsideIOR ) phi12 = PI;
		float phi21 = PI - phi12;
		vec3 baseIOR = Fresnel0ToIor( clamp( baseF0, 0.0, 0.9999 ) );		vec3 R1 = IorToFresnel0( baseIOR, iridescenceIOR );
		vec3 R23 = F_Schlick( R1, 1.0, cosTheta2 );
		vec3 phi23 = vec3( 0.0 );
		if ( baseIOR[ 0 ] < iridescenceIOR ) phi23[ 0 ] = PI;
		if ( baseIOR[ 1 ] < iridescenceIOR ) phi23[ 1 ] = PI;
		if ( baseIOR[ 2 ] < iridescenceIOR ) phi23[ 2 ] = PI;
		float OPD = 2.0 * iridescenceIOR * thinFilmThickness * cosTheta2;
		vec3 phi = vec3( phi21 ) + phi23;
		vec3 R123 = clamp( R12 * R23, 1e-5, 0.9999 );
		vec3 r123 = sqrt( R123 );
		vec3 Rs = pow2( T121 ) * R23 / ( vec3( 1.0 ) - R123 );
		vec3 C0 = R12 + Rs;
		I = C0;
		vec3 Cm = Rs - T121;
		for ( int m = 1; m <= 2; ++ m ) {
			Cm *= r123;
			vec3 Sm = 2.0 * evalSensitivity( float( m ) * OPD, float( m ) * phi );
			I += Cm * Sm;
		}
		return max( I, vec3( 0.0 ) );
	}
#endif`,WA=`#ifdef USE_BUMPMAP
	uniform sampler2D bumpMap;
	uniform float bumpScale;
	vec2 dHdxy_fwd() {
		vec2 dSTdx = dFdx( vBumpMapUv );
		vec2 dSTdy = dFdy( vBumpMapUv );
		float Hll = bumpScale * texture2D( bumpMap, vBumpMapUv ).x;
		float dBx = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdx ).x - Hll;
		float dBy = bumpScale * texture2D( bumpMap, vBumpMapUv + dSTdy ).x - Hll;
		return vec2( dBx, dBy );
	}
	vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {
		vec3 vSigmaX = normalize( dFdx( surf_pos.xyz ) );
		vec3 vSigmaY = normalize( dFdy( surf_pos.xyz ) );
		vec3 vN = surf_norm;
		vec3 R1 = cross( vSigmaY, vN );
		vec3 R2 = cross( vN, vSigmaX );
		float fDet = dot( vSigmaX, R1 ) * faceDirection;
		vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
		return normalize( abs( fDet ) * surf_norm - vGrad );
	}
#endif`,jA=`#if NUM_CLIPPING_PLANES > 0
	vec4 plane;
	#ifdef ALPHA_TO_COVERAGE
		float distanceToPlane, distanceGradient;
		float clipOpacity = 1.0;
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
			distanceGradient = fwidth( distanceToPlane ) / 2.0;
			clipOpacity *= smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			if ( clipOpacity == 0.0 ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			float unionClipOpacity = 1.0;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				distanceToPlane = - dot( vClipPosition, plane.xyz ) + plane.w;
				distanceGradient = fwidth( distanceToPlane ) / 2.0;
				unionClipOpacity *= 1.0 - smoothstep( - distanceGradient, distanceGradient, distanceToPlane );
			}
			#pragma unroll_loop_end
			clipOpacity *= 1.0 - unionClipOpacity;
		#endif
		diffuseColor.a *= clipOpacity;
		if ( diffuseColor.a == 0.0 ) discard;
	#else
		#pragma unroll_loop_start
		for ( int i = 0; i < UNION_CLIPPING_PLANES; i ++ ) {
			plane = clippingPlanes[ i ];
			if ( dot( vClipPosition, plane.xyz ) > plane.w ) discard;
		}
		#pragma unroll_loop_end
		#if UNION_CLIPPING_PLANES < NUM_CLIPPING_PLANES
			bool clipped = true;
			#pragma unroll_loop_start
			for ( int i = UNION_CLIPPING_PLANES; i < NUM_CLIPPING_PLANES; i ++ ) {
				plane = clippingPlanes[ i ];
				clipped = ( dot( vClipPosition, plane.xyz ) > plane.w ) && clipped;
			}
			#pragma unroll_loop_end
			if ( clipped ) discard;
		#endif
	#endif
#endif`,XA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
	uniform vec4 clippingPlanes[ NUM_CLIPPING_PLANES ];
#endif`,YA=`#if NUM_CLIPPING_PLANES > 0
	varying vec3 vClipPosition;
#endif`,$A=`#if NUM_CLIPPING_PLANES > 0
	vClipPosition = - mvPosition.xyz;
#endif`,qA=`#if defined( USE_COLOR_ALPHA )
	diffuseColor *= vColor;
#elif defined( USE_COLOR )
	diffuseColor.rgb *= vColor;
#endif`,KA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR )
	varying vec3 vColor;
#endif`,ZA=`#if defined( USE_COLOR_ALPHA )
	varying vec4 vColor;
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	varying vec3 vColor;
#endif`,QA=`#if defined( USE_COLOR_ALPHA )
	vColor = vec4( 1.0 );
#elif defined( USE_COLOR ) || defined( USE_INSTANCING_COLOR ) || defined( USE_BATCHING_COLOR )
	vColor = vec3( 1.0 );
#endif
#ifdef USE_COLOR
	vColor *= color;
#endif
#ifdef USE_INSTANCING_COLOR
	vColor.xyz *= instanceColor.xyz;
#endif
#ifdef USE_BATCHING_COLOR
	vec3 batchingColor = getBatchingColor( getIndirectIndex( gl_DrawID ) );
	vColor.xyz *= batchingColor.xyz;
#endif`,JA=`#define PI 3.141592653589793
#define PI2 6.283185307179586
#define PI_HALF 1.5707963267948966
#define RECIPROCAL_PI 0.3183098861837907
#define RECIPROCAL_PI2 0.15915494309189535
#define EPSILON 1e-6
#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
#define whiteComplement( a ) ( 1.0 - saturate( a ) )
float pow2( const in float x ) { return x*x; }
vec3 pow2( const in vec3 x ) { return x*x; }
float pow3( const in float x ) { return x*x*x; }
float pow4( const in float x ) { float x2 = x*x; return x2*x2; }
float max3( const in vec3 v ) { return max( max( v.x, v.y ), v.z ); }
float average( const in vec3 v ) { return dot( v, vec3( 0.3333333 ) ); }
highp float rand( const in vec2 uv ) {
	const highp float a = 12.9898, b = 78.233, c = 43758.5453;
	highp float dt = dot( uv.xy, vec2( a,b ) ), sn = mod( dt, PI );
	return fract( sin( sn ) * c );
}
#ifdef HIGH_PRECISION
	float precisionSafeLength( vec3 v ) { return length( v ); }
#else
	float precisionSafeLength( vec3 v ) {
		float maxComponent = max3( abs( v ) );
		return length( v / maxComponent ) * maxComponent;
	}
#endif
struct IncidentLight {
	vec3 color;
	vec3 direction;
	bool visible;
};
struct ReflectedLight {
	vec3 directDiffuse;
	vec3 directSpecular;
	vec3 indirectDiffuse;
	vec3 indirectSpecular;
};
#ifdef USE_ALPHAHASH
	varying vec3 vPosition;
#endif
vec3 transformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( matrix * vec4( dir, 0.0 ) ).xyz );
}
vec3 inverseTransformDirection( in vec3 dir, in mat4 matrix ) {
	return normalize( ( vec4( dir, 0.0 ) * matrix ).xyz );
}
bool isPerspectiveMatrix( mat4 m ) {
	return m[ 2 ][ 3 ] == - 1.0;
}
vec2 equirectUv( in vec3 dir ) {
	float u = atan( dir.z, dir.x ) * RECIPROCAL_PI2 + 0.5;
	float v = asin( clamp( dir.y, - 1.0, 1.0 ) ) * RECIPROCAL_PI + 0.5;
	return vec2( u, v );
}
vec3 BRDF_Lambert( const in vec3 diffuseColor ) {
	return RECIPROCAL_PI * diffuseColor;
}
vec3 F_Schlick( const in vec3 f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
}
float F_Schlick( const in float f0, const in float f90, const in float dotVH ) {
	float fresnel = exp2( ( - 5.55473 * dotVH - 6.98316 ) * dotVH );
	return f0 * ( 1.0 - fresnel ) + ( f90 * fresnel );
} // validated`,eb=`#ifdef ENVMAP_TYPE_CUBE_UV
	#define cubeUV_minMipLevel 4.0
	#define cubeUV_minTileSize 16.0
	float getFace( vec3 direction ) {
		vec3 absDirection = abs( direction );
		float face = - 1.0;
		if ( absDirection.x > absDirection.z ) {
			if ( absDirection.x > absDirection.y )
				face = direction.x > 0.0 ? 0.0 : 3.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		} else {
			if ( absDirection.z > absDirection.y )
				face = direction.z > 0.0 ? 2.0 : 5.0;
			else
				face = direction.y > 0.0 ? 1.0 : 4.0;
		}
		return face;
	}
	vec2 getUV( vec3 direction, float face ) {
		vec2 uv;
		if ( face == 0.0 ) {
			uv = vec2( direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 1.0 ) {
			uv = vec2( - direction.x, - direction.z ) / abs( direction.y );
		} else if ( face == 2.0 ) {
			uv = vec2( - direction.x, direction.y ) / abs( direction.z );
		} else if ( face == 3.0 ) {
			uv = vec2( - direction.z, direction.y ) / abs( direction.x );
		} else if ( face == 4.0 ) {
			uv = vec2( - direction.x, direction.z ) / abs( direction.y );
		} else {
			uv = vec2( direction.x, direction.y ) / abs( direction.z );
		}
		return 0.5 * ( uv + 1.0 );
	}
	vec3 bilinearCubeUV( sampler2D envMap, vec3 direction, float mipInt ) {
		float face = getFace( direction );
		float filterInt = max( cubeUV_minMipLevel - mipInt, 0.0 );
		mipInt = max( mipInt, cubeUV_minMipLevel );
		float faceSize = exp2( mipInt );
		highp vec2 uv = getUV( direction, face ) * ( faceSize - 2.0 ) + 1.0;
		if ( face > 2.0 ) {
			uv.y += faceSize;
			face -= 3.0;
		}
		uv.x += face * faceSize;
		uv.x += filterInt * 3.0 * cubeUV_minTileSize;
		uv.y += 4.0 * ( exp2( CUBEUV_MAX_MIP ) - faceSize );
		uv.x *= CUBEUV_TEXEL_WIDTH;
		uv.y *= CUBEUV_TEXEL_HEIGHT;
		#ifdef texture2DGradEXT
			return texture2DGradEXT( envMap, uv, vec2( 0.0 ), vec2( 0.0 ) ).rgb;
		#else
			return texture2D( envMap, uv ).rgb;
		#endif
	}
	#define cubeUV_r0 1.0
	#define cubeUV_m0 - 2.0
	#define cubeUV_r1 0.8
	#define cubeUV_m1 - 1.0
	#define cubeUV_r4 0.4
	#define cubeUV_m4 2.0
	#define cubeUV_r5 0.305
	#define cubeUV_m5 3.0
	#define cubeUV_r6 0.21
	#define cubeUV_m6 4.0
	float roughnessToMip( float roughness ) {
		float mip = 0.0;
		if ( roughness >= cubeUV_r1 ) {
			mip = ( cubeUV_r0 - roughness ) * ( cubeUV_m1 - cubeUV_m0 ) / ( cubeUV_r0 - cubeUV_r1 ) + cubeUV_m0;
		} else if ( roughness >= cubeUV_r4 ) {
			mip = ( cubeUV_r1 - roughness ) * ( cubeUV_m4 - cubeUV_m1 ) / ( cubeUV_r1 - cubeUV_r4 ) + cubeUV_m1;
		} else if ( roughness >= cubeUV_r5 ) {
			mip = ( cubeUV_r4 - roughness ) * ( cubeUV_m5 - cubeUV_m4 ) / ( cubeUV_r4 - cubeUV_r5 ) + cubeUV_m4;
		} else if ( roughness >= cubeUV_r6 ) {
			mip = ( cubeUV_r5 - roughness ) * ( cubeUV_m6 - cubeUV_m5 ) / ( cubeUV_r5 - cubeUV_r6 ) + cubeUV_m5;
		} else {
			mip = - 2.0 * log2( 1.16 * roughness );		}
		return mip;
	}
	vec4 textureCubeUV( sampler2D envMap, vec3 sampleDir, float roughness ) {
		float mip = clamp( roughnessToMip( roughness ), cubeUV_m0, CUBEUV_MAX_MIP );
		float mipF = fract( mip );
		float mipInt = floor( mip );
		vec3 color0 = bilinearCubeUV( envMap, sampleDir, mipInt );
		if ( mipF == 0.0 ) {
			return vec4( color0, 1.0 );
		} else {
			vec3 color1 = bilinearCubeUV( envMap, sampleDir, mipInt + 1.0 );
			return vec4( mix( color0, color1, mipF ), 1.0 );
		}
	}
#endif`,tb=`vec3 transformedNormal = objectNormal;
#ifdef USE_TANGENT
	vec3 transformedTangent = objectTangent;
#endif
#ifdef USE_BATCHING
	mat3 bm = mat3( batchingMatrix );
	transformedNormal /= vec3( dot( bm[ 0 ], bm[ 0 ] ), dot( bm[ 1 ], bm[ 1 ] ), dot( bm[ 2 ], bm[ 2 ] ) );
	transformedNormal = bm * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = bm * transformedTangent;
	#endif
#endif
#ifdef USE_INSTANCING
	mat3 im = mat3( instanceMatrix );
	transformedNormal /= vec3( dot( im[ 0 ], im[ 0 ] ), dot( im[ 1 ], im[ 1 ] ), dot( im[ 2 ], im[ 2 ] ) );
	transformedNormal = im * transformedNormal;
	#ifdef USE_TANGENT
		transformedTangent = im * transformedTangent;
	#endif
#endif
transformedNormal = normalMatrix * transformedNormal;
#ifdef FLIP_SIDED
	transformedNormal = - transformedNormal;
#endif
#ifdef USE_TANGENT
	transformedTangent = ( modelViewMatrix * vec4( transformedTangent, 0.0 ) ).xyz;
	#ifdef FLIP_SIDED
		transformedTangent = - transformedTangent;
	#endif
#endif`,nb=`#ifdef USE_DISPLACEMENTMAP
	uniform sampler2D displacementMap;
	uniform float displacementScale;
	uniform float displacementBias;
#endif`,ib=`#ifdef USE_DISPLACEMENTMAP
	transformed += normalize( objectNormal ) * ( texture2D( displacementMap, vDisplacementMapUv ).x * displacementScale + displacementBias );
#endif`,rb=`#ifdef USE_EMISSIVEMAP
	vec4 emissiveColor = texture2D( emissiveMap, vEmissiveMapUv );
	#ifdef DECODE_VIDEO_TEXTURE_EMISSIVE
		emissiveColor = sRGBTransferEOTF( emissiveColor );
	#endif
	totalEmissiveRadiance *= emissiveColor.rgb;
#endif`,sb=`#ifdef USE_EMISSIVEMAP
	uniform sampler2D emissiveMap;
#endif`,ob="gl_FragColor = linearToOutputTexel( gl_FragColor );",ab=`vec4 LinearTransferOETF( in vec4 value ) {
	return value;
}
vec4 sRGBTransferEOTF( in vec4 value ) {
	return vec4( mix( pow( value.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), value.rgb * 0.0773993808, vec3( lessThanEqual( value.rgb, vec3( 0.04045 ) ) ) ), value.a );
}
vec4 sRGBTransferOETF( in vec4 value ) {
	return vec4( mix( pow( value.rgb, vec3( 0.41666 ) ) * 1.055 - vec3( 0.055 ), value.rgb * 12.92, vec3( lessThanEqual( value.rgb, vec3( 0.0031308 ) ) ) ), value.a );
}`,lb=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vec3 cameraToFrag;
		if ( isOrthographic ) {
			cameraToFrag = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToFrag = normalize( vWorldPosition - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vec3 reflectVec = reflect( cameraToFrag, worldNormal );
		#else
			vec3 reflectVec = refract( cameraToFrag, worldNormal, refractionRatio );
		#endif
	#else
		vec3 reflectVec = vReflect;
	#endif
	#ifdef ENVMAP_TYPE_CUBE
		vec4 envColor = textureCube( envMap, envMapRotation * vec3( flipEnvMap * reflectVec.x, reflectVec.yz ) );
	#else
		vec4 envColor = vec4( 0.0 );
	#endif
	#ifdef ENVMAP_BLENDING_MULTIPLY
		outgoingLight = mix( outgoingLight, outgoingLight * envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_MIX )
		outgoingLight = mix( outgoingLight, envColor.xyz, specularStrength * reflectivity );
	#elif defined( ENVMAP_BLENDING_ADD )
		outgoingLight += envColor.xyz * specularStrength * reflectivity;
	#endif
#endif`,cb=`#ifdef USE_ENVMAP
	uniform float envMapIntensity;
	uniform float flipEnvMap;
	uniform mat3 envMapRotation;
	#ifdef ENVMAP_TYPE_CUBE
		uniform samplerCube envMap;
	#else
		uniform sampler2D envMap;
	#endif
#endif`,ub=`#ifdef USE_ENVMAP
	uniform float reflectivity;
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		varying vec3 vWorldPosition;
		uniform float refractionRatio;
	#else
		varying vec3 vReflect;
	#endif
#endif`,fb=`#ifdef USE_ENVMAP
	#if defined( USE_BUMPMAP ) || defined( USE_NORMALMAP ) || defined( PHONG ) || defined( LAMBERT )
		#define ENV_WORLDPOS
	#endif
	#ifdef ENV_WORLDPOS
		
		varying vec3 vWorldPosition;
	#else
		varying vec3 vReflect;
		uniform float refractionRatio;
	#endif
#endif`,db=`#ifdef USE_ENVMAP
	#ifdef ENV_WORLDPOS
		vWorldPosition = worldPosition.xyz;
	#else
		vec3 cameraToVertex;
		if ( isOrthographic ) {
			cameraToVertex = normalize( vec3( - viewMatrix[ 0 ][ 2 ], - viewMatrix[ 1 ][ 2 ], - viewMatrix[ 2 ][ 2 ] ) );
		} else {
			cameraToVertex = normalize( worldPosition.xyz - cameraPosition );
		}
		vec3 worldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
		#ifdef ENVMAP_MODE_REFLECTION
			vReflect = reflect( cameraToVertex, worldNormal );
		#else
			vReflect = refract( cameraToVertex, worldNormal, refractionRatio );
		#endif
	#endif
#endif`,hb=`#ifdef USE_FOG
	vFogDepth = - mvPosition.z;
#endif`,pb=`#ifdef USE_FOG
	varying float vFogDepth;
#endif`,mb=`#ifdef USE_FOG
	#ifdef FOG_EXP2
		float fogFactor = 1.0 - exp( - fogDensity * fogDensity * vFogDepth * vFogDepth );
	#else
		float fogFactor = smoothstep( fogNear, fogFar, vFogDepth );
	#endif
	gl_FragColor.rgb = mix( gl_FragColor.rgb, fogColor, fogFactor );
#endif`,gb=`#ifdef USE_FOG
	uniform vec3 fogColor;
	varying float vFogDepth;
	#ifdef FOG_EXP2
		uniform float fogDensity;
	#else
		uniform float fogNear;
		uniform float fogFar;
	#endif
#endif`,vb=`#ifdef USE_GRADIENTMAP
	uniform sampler2D gradientMap;
#endif
vec3 getGradientIrradiance( vec3 normal, vec3 lightDirection ) {
	float dotNL = dot( normal, lightDirection );
	vec2 coord = vec2( dotNL * 0.5 + 0.5, 0.0 );
	#ifdef USE_GRADIENTMAP
		return vec3( texture2D( gradientMap, coord ).r );
	#else
		vec2 fw = fwidth( coord ) * 0.5;
		return mix( vec3( 0.7 ), vec3( 1.0 ), smoothstep( 0.7 - fw.x, 0.7 + fw.x, coord.x ) );
	#endif
}`,_b=`#ifdef USE_LIGHTMAP
	uniform sampler2D lightMap;
	uniform float lightMapIntensity;
#endif`,xb=`LambertMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularStrength = specularStrength;`,yb=`varying vec3 vViewPosition;
struct LambertMaterial {
	vec3 diffuseColor;
	float specularStrength;
};
void RE_Direct_Lambert( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Lambert( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in LambertMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Lambert
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Lambert`,Sb=`uniform bool receiveShadow;
uniform vec3 ambientLightColor;
#if defined( USE_LIGHT_PROBES )
	uniform vec3 lightProbe[ 9 ];
#endif
vec3 shGetIrradianceAt( in vec3 normal, in vec3 shCoefficients[ 9 ] ) {
	float x = normal.x, y = normal.y, z = normal.z;
	vec3 result = shCoefficients[ 0 ] * 0.886227;
	result += shCoefficients[ 1 ] * 2.0 * 0.511664 * y;
	result += shCoefficients[ 2 ] * 2.0 * 0.511664 * z;
	result += shCoefficients[ 3 ] * 2.0 * 0.511664 * x;
	result += shCoefficients[ 4 ] * 2.0 * 0.429043 * x * y;
	result += shCoefficients[ 5 ] * 2.0 * 0.429043 * y * z;
	result += shCoefficients[ 6 ] * ( 0.743125 * z * z - 0.247708 );
	result += shCoefficients[ 7 ] * 2.0 * 0.429043 * x * z;
	result += shCoefficients[ 8 ] * 0.429043 * ( x * x - y * y );
	return result;
}
vec3 getLightProbeIrradiance( const in vec3 lightProbe[ 9 ], const in vec3 normal ) {
	vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
	vec3 irradiance = shGetIrradianceAt( worldNormal, lightProbe );
	return irradiance;
}
vec3 getAmbientLightIrradiance( const in vec3 ambientLightColor ) {
	vec3 irradiance = ambientLightColor;
	return irradiance;
}
float getDistanceAttenuation( const in float lightDistance, const in float cutoffDistance, const in float decayExponent ) {
	float distanceFalloff = 1.0 / max( pow( lightDistance, decayExponent ), 0.01 );
	if ( cutoffDistance > 0.0 ) {
		distanceFalloff *= pow2( saturate( 1.0 - pow4( lightDistance / cutoffDistance ) ) );
	}
	return distanceFalloff;
}
float getSpotAttenuation( const in float coneCosine, const in float penumbraCosine, const in float angleCosine ) {
	return smoothstep( coneCosine, penumbraCosine, angleCosine );
}
#if NUM_DIR_LIGHTS > 0
	struct DirectionalLight {
		vec3 direction;
		vec3 color;
	};
	uniform DirectionalLight directionalLights[ NUM_DIR_LIGHTS ];
	void getDirectionalLightInfo( const in DirectionalLight directionalLight, out IncidentLight light ) {
		light.color = directionalLight.color;
		light.direction = directionalLight.direction;
		light.visible = true;
	}
#endif
#if NUM_POINT_LIGHTS > 0
	struct PointLight {
		vec3 position;
		vec3 color;
		float distance;
		float decay;
	};
	uniform PointLight pointLights[ NUM_POINT_LIGHTS ];
	void getPointLightInfo( const in PointLight pointLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = pointLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float lightDistance = length( lVector );
		light.color = pointLight.color;
		light.color *= getDistanceAttenuation( lightDistance, pointLight.distance, pointLight.decay );
		light.visible = ( light.color != vec3( 0.0 ) );
	}
#endif
#if NUM_SPOT_LIGHTS > 0
	struct SpotLight {
		vec3 position;
		vec3 direction;
		vec3 color;
		float distance;
		float decay;
		float coneCos;
		float penumbraCos;
	};
	uniform SpotLight spotLights[ NUM_SPOT_LIGHTS ];
	void getSpotLightInfo( const in SpotLight spotLight, const in vec3 geometryPosition, out IncidentLight light ) {
		vec3 lVector = spotLight.position - geometryPosition;
		light.direction = normalize( lVector );
		float angleCos = dot( light.direction, spotLight.direction );
		float spotAttenuation = getSpotAttenuation( spotLight.coneCos, spotLight.penumbraCos, angleCos );
		if ( spotAttenuation > 0.0 ) {
			float lightDistance = length( lVector );
			light.color = spotLight.color * spotAttenuation;
			light.color *= getDistanceAttenuation( lightDistance, spotLight.distance, spotLight.decay );
			light.visible = ( light.color != vec3( 0.0 ) );
		} else {
			light.color = vec3( 0.0 );
			light.visible = false;
		}
	}
#endif
#if NUM_RECT_AREA_LIGHTS > 0
	struct RectAreaLight {
		vec3 color;
		vec3 position;
		vec3 halfWidth;
		vec3 halfHeight;
	};
	uniform sampler2D ltc_1;	uniform sampler2D ltc_2;
	uniform RectAreaLight rectAreaLights[ NUM_RECT_AREA_LIGHTS ];
#endif
#if NUM_HEMI_LIGHTS > 0
	struct HemisphereLight {
		vec3 direction;
		vec3 skyColor;
		vec3 groundColor;
	};
	uniform HemisphereLight hemisphereLights[ NUM_HEMI_LIGHTS ];
	vec3 getHemisphereLightIrradiance( const in HemisphereLight hemiLight, const in vec3 normal ) {
		float dotNL = dot( normal, hemiLight.direction );
		float hemiDiffuseWeight = 0.5 * dotNL + 0.5;
		vec3 irradiance = mix( hemiLight.groundColor, hemiLight.skyColor, hemiDiffuseWeight );
		return irradiance;
	}
#endif`,Mb=`#ifdef USE_ENVMAP
	vec3 getIBLIrradiance( const in vec3 normal ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 worldNormal = inverseTransformDirection( normal, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * worldNormal, 1.0 );
			return PI * envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	vec3 getIBLRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness ) {
		#ifdef ENVMAP_TYPE_CUBE_UV
			vec3 reflectVec = reflect( - viewDir, normal );
			reflectVec = normalize( mix( reflectVec, normal, pow4( roughness ) ) );
			reflectVec = inverseTransformDirection( reflectVec, viewMatrix );
			vec4 envMapColor = textureCubeUV( envMap, envMapRotation * reflectVec, roughness );
			return envMapColor.rgb * envMapIntensity;
		#else
			return vec3( 0.0 );
		#endif
	}
	#ifdef USE_ANISOTROPY
		vec3 getIBLAnisotropyRadiance( const in vec3 viewDir, const in vec3 normal, const in float roughness, const in vec3 bitangent, const in float anisotropy ) {
			#ifdef ENVMAP_TYPE_CUBE_UV
				vec3 bentNormal = cross( bitangent, viewDir );
				bentNormal = normalize( cross( bentNormal, bitangent ) );
				bentNormal = normalize( mix( bentNormal, normal, pow2( pow2( 1.0 - anisotropy * ( 1.0 - roughness ) ) ) ) );
				return getIBLRadiance( viewDir, bentNormal, roughness );
			#else
				return vec3( 0.0 );
			#endif
		}
	#endif
#endif`,Eb=`ToonMaterial material;
material.diffuseColor = diffuseColor.rgb;`,Tb=`varying vec3 vViewPosition;
struct ToonMaterial {
	vec3 diffuseColor;
};
void RE_Direct_Toon( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 irradiance = getGradientIrradiance( geometryNormal, directLight.direction ) * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
void RE_IndirectDiffuse_Toon( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in ToonMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_Toon
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Toon`,wb=`BlinnPhongMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.specularColor = specular;
material.specularShininess = shininess;
material.specularStrength = specularStrength;`,Ab=`varying vec3 vViewPosition;
struct BlinnPhongMaterial {
	vec3 diffuseColor;
	vec3 specularColor;
	float specularShininess;
	float specularStrength;
};
void RE_Direct_BlinnPhong( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
	reflectedLight.directSpecular += irradiance * BRDF_BlinnPhong( directLight.direction, geometryViewDir, geometryNormal, material.specularColor, material.specularShininess ) * material.specularStrength;
}
void RE_IndirectDiffuse_BlinnPhong( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in BlinnPhongMaterial material, inout ReflectedLight reflectedLight ) {
	reflectedLight.indirectDiffuse += irradiance * BRDF_Lambert( material.diffuseColor );
}
#define RE_Direct				RE_Direct_BlinnPhong
#define RE_IndirectDiffuse		RE_IndirectDiffuse_BlinnPhong`,bb=`PhysicalMaterial material;
material.diffuseColor = diffuseColor.rgb;
material.diffuseContribution = diffuseColor.rgb * ( 1.0 - metalnessFactor );
material.metalness = metalnessFactor;
vec3 dxy = max( abs( dFdx( nonPerturbedNormal ) ), abs( dFdy( nonPerturbedNormal ) ) );
float geometryRoughness = max( max( dxy.x, dxy.y ), dxy.z );
material.roughness = max( roughnessFactor, 0.0525 );material.roughness += geometryRoughness;
material.roughness = min( material.roughness, 1.0 );
#ifdef IOR
	material.ior = ior;
	#ifdef USE_SPECULAR
		float specularIntensityFactor = specularIntensity;
		vec3 specularColorFactor = specularColor;
		#ifdef USE_SPECULAR_COLORMAP
			specularColorFactor *= texture2D( specularColorMap, vSpecularColorMapUv ).rgb;
		#endif
		#ifdef USE_SPECULAR_INTENSITYMAP
			specularIntensityFactor *= texture2D( specularIntensityMap, vSpecularIntensityMapUv ).a;
		#endif
		material.specularF90 = mix( specularIntensityFactor, 1.0, metalnessFactor );
	#else
		float specularIntensityFactor = 1.0;
		vec3 specularColorFactor = vec3( 1.0 );
		material.specularF90 = 1.0;
	#endif
	material.specularColor = min( pow2( ( material.ior - 1.0 ) / ( material.ior + 1.0 ) ) * specularColorFactor, vec3( 1.0 ) ) * specularIntensityFactor;
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
#else
	material.specularColor = vec3( 0.04 );
	material.specularColorBlended = mix( material.specularColor, diffuseColor.rgb, metalnessFactor );
	material.specularF90 = 1.0;
#endif
#ifdef USE_CLEARCOAT
	material.clearcoat = clearcoat;
	material.clearcoatRoughness = clearcoatRoughness;
	material.clearcoatF0 = vec3( 0.04 );
	material.clearcoatF90 = 1.0;
	#ifdef USE_CLEARCOATMAP
		material.clearcoat *= texture2D( clearcoatMap, vClearcoatMapUv ).x;
	#endif
	#ifdef USE_CLEARCOAT_ROUGHNESSMAP
		material.clearcoatRoughness *= texture2D( clearcoatRoughnessMap, vClearcoatRoughnessMapUv ).y;
	#endif
	material.clearcoat = saturate( material.clearcoat );	material.clearcoatRoughness = max( material.clearcoatRoughness, 0.0525 );
	material.clearcoatRoughness += geometryRoughness;
	material.clearcoatRoughness = min( material.clearcoatRoughness, 1.0 );
#endif
#ifdef USE_DISPERSION
	material.dispersion = dispersion;
#endif
#ifdef USE_IRIDESCENCE
	material.iridescence = iridescence;
	material.iridescenceIOR = iridescenceIOR;
	#ifdef USE_IRIDESCENCEMAP
		material.iridescence *= texture2D( iridescenceMap, vIridescenceMapUv ).r;
	#endif
	#ifdef USE_IRIDESCENCE_THICKNESSMAP
		material.iridescenceThickness = (iridescenceThicknessMaximum - iridescenceThicknessMinimum) * texture2D( iridescenceThicknessMap, vIridescenceThicknessMapUv ).g + iridescenceThicknessMinimum;
	#else
		material.iridescenceThickness = iridescenceThicknessMaximum;
	#endif
#endif
#ifdef USE_SHEEN
	material.sheenColor = sheenColor;
	#ifdef USE_SHEEN_COLORMAP
		material.sheenColor *= texture2D( sheenColorMap, vSheenColorMapUv ).rgb;
	#endif
	material.sheenRoughness = clamp( sheenRoughness, 0.0001, 1.0 );
	#ifdef USE_SHEEN_ROUGHNESSMAP
		material.sheenRoughness *= texture2D( sheenRoughnessMap, vSheenRoughnessMapUv ).a;
	#endif
#endif
#ifdef USE_ANISOTROPY
	#ifdef USE_ANISOTROPYMAP
		mat2 anisotropyMat = mat2( anisotropyVector.x, anisotropyVector.y, - anisotropyVector.y, anisotropyVector.x );
		vec3 anisotropyPolar = texture2D( anisotropyMap, vAnisotropyMapUv ).rgb;
		vec2 anisotropyV = anisotropyMat * normalize( 2.0 * anisotropyPolar.rg - vec2( 1.0 ) ) * anisotropyPolar.b;
	#else
		vec2 anisotropyV = anisotropyVector;
	#endif
	material.anisotropy = length( anisotropyV );
	if( material.anisotropy == 0.0 ) {
		anisotropyV = vec2( 1.0, 0.0 );
	} else {
		anisotropyV /= material.anisotropy;
		material.anisotropy = saturate( material.anisotropy );
	}
	material.alphaT = mix( pow2( material.roughness ), 1.0, pow2( material.anisotropy ) );
	material.anisotropyT = tbn[ 0 ] * anisotropyV.x + tbn[ 1 ] * anisotropyV.y;
	material.anisotropyB = tbn[ 1 ] * anisotropyV.x - tbn[ 0 ] * anisotropyV.y;
#endif`,Cb=`uniform sampler2D dfgLUT;
struct PhysicalMaterial {
	vec3 diffuseColor;
	vec3 diffuseContribution;
	vec3 specularColor;
	vec3 specularColorBlended;
	float roughness;
	float metalness;
	float specularF90;
	float dispersion;
	#ifdef USE_CLEARCOAT
		float clearcoat;
		float clearcoatRoughness;
		vec3 clearcoatF0;
		float clearcoatF90;
	#endif
	#ifdef USE_IRIDESCENCE
		float iridescence;
		float iridescenceIOR;
		float iridescenceThickness;
		vec3 iridescenceFresnel;
		vec3 iridescenceF0;
		vec3 iridescenceFresnelDielectric;
		vec3 iridescenceFresnelMetallic;
	#endif
	#ifdef USE_SHEEN
		vec3 sheenColor;
		float sheenRoughness;
	#endif
	#ifdef IOR
		float ior;
	#endif
	#ifdef USE_TRANSMISSION
		float transmission;
		float transmissionAlpha;
		float thickness;
		float attenuationDistance;
		vec3 attenuationColor;
	#endif
	#ifdef USE_ANISOTROPY
		float anisotropy;
		float alphaT;
		vec3 anisotropyT;
		vec3 anisotropyB;
	#endif
};
vec3 clearcoatSpecularDirect = vec3( 0.0 );
vec3 clearcoatSpecularIndirect = vec3( 0.0 );
vec3 sheenSpecularDirect = vec3( 0.0 );
vec3 sheenSpecularIndirect = vec3(0.0 );
vec3 Schlick_to_F0( const in vec3 f, const in float f90, const in float dotVH ) {
    float x = clamp( 1.0 - dotVH, 0.0, 1.0 );
    float x2 = x * x;
    float x5 = clamp( x * x2 * x2, 0.0, 0.9999 );
    return ( f - vec3( f90 ) * x5 ) / ( 1.0 - x5 );
}
float V_GGX_SmithCorrelated( const in float alpha, const in float dotNL, const in float dotNV ) {
	float a2 = pow2( alpha );
	float gv = dotNL * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNV ) );
	float gl = dotNV * sqrt( a2 + ( 1.0 - a2 ) * pow2( dotNL ) );
	return 0.5 / max( gv + gl, EPSILON );
}
float D_GGX( const in float alpha, const in float dotNH ) {
	float a2 = pow2( alpha );
	float denom = pow2( dotNH ) * ( a2 - 1.0 ) + 1.0;
	return RECIPROCAL_PI * a2 / pow2( denom );
}
#ifdef USE_ANISOTROPY
	float V_GGX_SmithCorrelated_Anisotropic( const in float alphaT, const in float alphaB, const in float dotTV, const in float dotBV, const in float dotTL, const in float dotBL, const in float dotNV, const in float dotNL ) {
		float gv = dotNL * length( vec3( alphaT * dotTV, alphaB * dotBV, dotNV ) );
		float gl = dotNV * length( vec3( alphaT * dotTL, alphaB * dotBL, dotNL ) );
		float v = 0.5 / ( gv + gl );
		return v;
	}
	float D_GGX_Anisotropic( const in float alphaT, const in float alphaB, const in float dotNH, const in float dotTH, const in float dotBH ) {
		float a2 = alphaT * alphaB;
		highp vec3 v = vec3( alphaB * dotTH, alphaT * dotBH, a2 * dotNH );
		highp float v2 = dot( v, v );
		float w2 = a2 / v2;
		return RECIPROCAL_PI * a2 * pow2 ( w2 );
	}
#endif
#ifdef USE_CLEARCOAT
	vec3 BRDF_GGX_Clearcoat( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material) {
		vec3 f0 = material.clearcoatF0;
		float f90 = material.clearcoatF90;
		float roughness = material.clearcoatRoughness;
		float alpha = pow2( roughness );
		vec3 halfDir = normalize( lightDir + viewDir );
		float dotNL = saturate( dot( normal, lightDir ) );
		float dotNV = saturate( dot( normal, viewDir ) );
		float dotNH = saturate( dot( normal, halfDir ) );
		float dotVH = saturate( dot( viewDir, halfDir ) );
		vec3 F = F_Schlick( f0, f90, dotVH );
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
		return F * ( V * D );
	}
#endif
vec3 BRDF_GGX( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 f0 = material.specularColorBlended;
	float f90 = material.specularF90;
	float roughness = material.roughness;
	float alpha = pow2( roughness );
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float dotVH = saturate( dot( viewDir, halfDir ) );
	vec3 F = F_Schlick( f0, f90, dotVH );
	#ifdef USE_IRIDESCENCE
		F = mix( F, material.iridescenceFresnel, material.iridescence );
	#endif
	#ifdef USE_ANISOTROPY
		float dotTL = dot( material.anisotropyT, lightDir );
		float dotTV = dot( material.anisotropyT, viewDir );
		float dotTH = dot( material.anisotropyT, halfDir );
		float dotBL = dot( material.anisotropyB, lightDir );
		float dotBV = dot( material.anisotropyB, viewDir );
		float dotBH = dot( material.anisotropyB, halfDir );
		float V = V_GGX_SmithCorrelated_Anisotropic( material.alphaT, alpha, dotTV, dotBV, dotTL, dotBL, dotNV, dotNL );
		float D = D_GGX_Anisotropic( material.alphaT, alpha, dotNH, dotTH, dotBH );
	#else
		float V = V_GGX_SmithCorrelated( alpha, dotNL, dotNV );
		float D = D_GGX( alpha, dotNH );
	#endif
	return F * ( V * D );
}
vec2 LTC_Uv( const in vec3 N, const in vec3 V, const in float roughness ) {
	const float LUT_SIZE = 64.0;
	const float LUT_SCALE = ( LUT_SIZE - 1.0 ) / LUT_SIZE;
	const float LUT_BIAS = 0.5 / LUT_SIZE;
	float dotNV = saturate( dot( N, V ) );
	vec2 uv = vec2( roughness, sqrt( 1.0 - dotNV ) );
	uv = uv * LUT_SCALE + LUT_BIAS;
	return uv;
}
float LTC_ClippedSphereFormFactor( const in vec3 f ) {
	float l = length( f );
	return max( ( l * l + f.z ) / ( l + 1.0 ), 0.0 );
}
vec3 LTC_EdgeVectorFormFactor( const in vec3 v1, const in vec3 v2 ) {
	float x = dot( v1, v2 );
	float y = abs( x );
	float a = 0.8543985 + ( 0.4965155 + 0.0145206 * y ) * y;
	float b = 3.4175940 + ( 4.1616724 + y ) * y;
	float v = a / b;
	float theta_sintheta = ( x > 0.0 ) ? v : 0.5 * inversesqrt( max( 1.0 - x * x, 1e-7 ) ) - v;
	return cross( v1, v2 ) * theta_sintheta;
}
vec3 LTC_Evaluate( const in vec3 N, const in vec3 V, const in vec3 P, const in mat3 mInv, const in vec3 rectCoords[ 4 ] ) {
	vec3 v1 = rectCoords[ 1 ] - rectCoords[ 0 ];
	vec3 v2 = rectCoords[ 3 ] - rectCoords[ 0 ];
	vec3 lightNormal = cross( v1, v2 );
	if( dot( lightNormal, P - rectCoords[ 0 ] ) < 0.0 ) return vec3( 0.0 );
	vec3 T1, T2;
	T1 = normalize( V - N * dot( V, N ) );
	T2 = - cross( N, T1 );
	mat3 mat = mInv * transpose( mat3( T1, T2, N ) );
	vec3 coords[ 4 ];
	coords[ 0 ] = mat * ( rectCoords[ 0 ] - P );
	coords[ 1 ] = mat * ( rectCoords[ 1 ] - P );
	coords[ 2 ] = mat * ( rectCoords[ 2 ] - P );
	coords[ 3 ] = mat * ( rectCoords[ 3 ] - P );
	coords[ 0 ] = normalize( coords[ 0 ] );
	coords[ 1 ] = normalize( coords[ 1 ] );
	coords[ 2 ] = normalize( coords[ 2 ] );
	coords[ 3 ] = normalize( coords[ 3 ] );
	vec3 vectorFormFactor = vec3( 0.0 );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 0 ], coords[ 1 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 1 ], coords[ 2 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 2 ], coords[ 3 ] );
	vectorFormFactor += LTC_EdgeVectorFormFactor( coords[ 3 ], coords[ 0 ] );
	float result = LTC_ClippedSphereFormFactor( vectorFormFactor );
	return vec3( result );
}
#if defined( USE_SHEEN )
float D_Charlie( float roughness, float dotNH ) {
	float alpha = pow2( roughness );
	float invAlpha = 1.0 / alpha;
	float cos2h = dotNH * dotNH;
	float sin2h = max( 1.0 - cos2h, 0.0078125 );
	return ( 2.0 + invAlpha ) * pow( sin2h, invAlpha * 0.5 ) / ( 2.0 * PI );
}
float V_Neubelt( float dotNV, float dotNL ) {
	return saturate( 1.0 / ( 4.0 * ( dotNL + dotNV - dotNL * dotNV ) ) );
}
vec3 BRDF_Sheen( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, vec3 sheenColor, const in float sheenRoughness ) {
	vec3 halfDir = normalize( lightDir + viewDir );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	float dotNH = saturate( dot( normal, halfDir ) );
	float D = D_Charlie( sheenRoughness, dotNH );
	float V = V_Neubelt( dotNV, dotNL );
	return sheenColor * ( D * V );
}
#endif
float IBLSheenBRDF( const in vec3 normal, const in vec3 viewDir, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	float r2 = roughness * roughness;
	float rInv = 1.0 / ( roughness + 0.1 );
	float a = -1.9362 + 1.0678 * roughness + 0.4573 * r2 - 0.8469 * rInv;
	float b = -0.6014 + 0.5538 * roughness - 0.4670 * r2 - 0.1255 * rInv;
	float DG = exp( a * dotNV + b );
	return saturate( DG );
}
vec3 EnvironmentBRDF( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness ) {
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	return specularColor * fab.x + specularF90 * fab.y;
}
#ifdef USE_IRIDESCENCE
void computeMultiscatteringIridescence( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float iridescence, const in vec3 iridescenceF0, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#else
void computeMultiscattering( const in vec3 normal, const in vec3 viewDir, const in vec3 specularColor, const in float specularF90, const in float roughness, inout vec3 singleScatter, inout vec3 multiScatter ) {
#endif
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 fab = texture2D( dfgLUT, vec2( roughness, dotNV ) ).rg;
	#ifdef USE_IRIDESCENCE
		vec3 Fr = mix( specularColor, iridescenceF0, iridescence );
	#else
		vec3 Fr = specularColor;
	#endif
	vec3 FssEss = Fr * fab.x + specularF90 * fab.y;
	float Ess = fab.x + fab.y;
	float Ems = 1.0 - Ess;
	vec3 Favg = Fr + ( 1.0 - Fr ) * 0.047619;	vec3 Fms = FssEss * Favg / ( 1.0 - Ems * Favg );
	singleScatter += FssEss;
	multiScatter += Fms * Ems;
}
vec3 BRDF_GGX_Multiscatter( const in vec3 lightDir, const in vec3 viewDir, const in vec3 normal, const in PhysicalMaterial material ) {
	vec3 singleScatter = BRDF_GGX( lightDir, viewDir, normal, material );
	float dotNL = saturate( dot( normal, lightDir ) );
	float dotNV = saturate( dot( normal, viewDir ) );
	vec2 dfgV = texture2D( dfgLUT, vec2( material.roughness, dotNV ) ).rg;
	vec2 dfgL = texture2D( dfgLUT, vec2( material.roughness, dotNL ) ).rg;
	vec3 FssEss_V = material.specularColorBlended * dfgV.x + material.specularF90 * dfgV.y;
	vec3 FssEss_L = material.specularColorBlended * dfgL.x + material.specularF90 * dfgL.y;
	float Ess_V = dfgV.x + dfgV.y;
	float Ess_L = dfgL.x + dfgL.y;
	float Ems_V = 1.0 - Ess_V;
	float Ems_L = 1.0 - Ess_L;
	vec3 Favg = material.specularColorBlended + ( 1.0 - material.specularColorBlended ) * 0.047619;
	vec3 Fms = FssEss_V * FssEss_L * Favg / ( 1.0 - Ems_V * Ems_L * Favg + EPSILON );
	float compensationFactor = Ems_V * Ems_L;
	vec3 multiScatter = Fms * compensationFactor;
	return singleScatter + multiScatter;
}
#if NUM_RECT_AREA_LIGHTS > 0
	void RE_Direct_RectArea_Physical( const in RectAreaLight rectAreaLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
		vec3 normal = geometryNormal;
		vec3 viewDir = geometryViewDir;
		vec3 position = geometryPosition;
		vec3 lightPos = rectAreaLight.position;
		vec3 halfWidth = rectAreaLight.halfWidth;
		vec3 halfHeight = rectAreaLight.halfHeight;
		vec3 lightColor = rectAreaLight.color;
		float roughness = material.roughness;
		vec3 rectCoords[ 4 ];
		rectCoords[ 0 ] = lightPos + halfWidth - halfHeight;		rectCoords[ 1 ] = lightPos - halfWidth - halfHeight;
		rectCoords[ 2 ] = lightPos - halfWidth + halfHeight;
		rectCoords[ 3 ] = lightPos + halfWidth + halfHeight;
		vec2 uv = LTC_Uv( normal, viewDir, roughness );
		vec4 t1 = texture2D( ltc_1, uv );
		vec4 t2 = texture2D( ltc_2, uv );
		mat3 mInv = mat3(
			vec3( t1.x, 0, t1.y ),
			vec3(    0, 1,    0 ),
			vec3( t1.z, 0, t1.w )
		);
		vec3 fresnel = ( material.specularColorBlended * t2.x + ( vec3( 1.0 ) - material.specularColorBlended ) * t2.y );
		reflectedLight.directSpecular += lightColor * fresnel * LTC_Evaluate( normal, viewDir, position, mInv, rectCoords );
		reflectedLight.directDiffuse += lightColor * material.diffuseContribution * LTC_Evaluate( normal, viewDir, position, mat3( 1.0 ), rectCoords );
	}
#endif
void RE_Direct_Physical( const in IncidentLight directLight, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	float dotNL = saturate( dot( geometryNormal, directLight.direction ) );
	vec3 irradiance = dotNL * directLight.color;
	#ifdef USE_CLEARCOAT
		float dotNLcc = saturate( dot( geometryClearcoatNormal, directLight.direction ) );
		vec3 ccIrradiance = dotNLcc * directLight.color;
		clearcoatSpecularDirect += ccIrradiance * BRDF_GGX_Clearcoat( directLight.direction, geometryViewDir, geometryClearcoatNormal, material );
	#endif
	#ifdef USE_SHEEN
 
 		sheenSpecularDirect += irradiance * BRDF_Sheen( directLight.direction, geometryViewDir, geometryNormal, material.sheenColor, material.sheenRoughness );
 
 		float sheenAlbedoV = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
 		float sheenAlbedoL = IBLSheenBRDF( geometryNormal, directLight.direction, material.sheenRoughness );
 
 		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * max( sheenAlbedoV, sheenAlbedoL );
 
 		irradiance *= sheenEnergyComp;
 
 	#endif
	reflectedLight.directSpecular += irradiance * BRDF_GGX_Multiscatter( directLight.direction, geometryViewDir, geometryNormal, material );
	reflectedLight.directDiffuse += irradiance * BRDF_Lambert( material.diffuseContribution );
}
void RE_IndirectDiffuse_Physical( const in vec3 irradiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight ) {
	vec3 diffuse = irradiance * BRDF_Lambert( material.diffuseContribution );
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		diffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectDiffuse += diffuse;
}
void RE_IndirectSpecular_Physical( const in vec3 radiance, const in vec3 irradiance, const in vec3 clearcoatRadiance, const in vec3 geometryPosition, const in vec3 geometryNormal, const in vec3 geometryViewDir, const in vec3 geometryClearcoatNormal, const in PhysicalMaterial material, inout ReflectedLight reflectedLight) {
	#ifdef USE_CLEARCOAT
		clearcoatSpecularIndirect += clearcoatRadiance * EnvironmentBRDF( geometryClearcoatNormal, geometryViewDir, material.clearcoatF0, material.clearcoatF90, material.clearcoatRoughness );
	#endif
	#ifdef USE_SHEEN
		sheenSpecularIndirect += irradiance * material.sheenColor * IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness ) * RECIPROCAL_PI;
 	#endif
	vec3 singleScatteringDielectric = vec3( 0.0 );
	vec3 multiScatteringDielectric = vec3( 0.0 );
	vec3 singleScatteringMetallic = vec3( 0.0 );
	vec3 multiScatteringMetallic = vec3( 0.0 );
	#ifdef USE_IRIDESCENCE
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.iridescence, material.iridescenceFresnelDielectric, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscatteringIridescence( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.iridescence, material.iridescenceFresnelMetallic, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#else
		computeMultiscattering( geometryNormal, geometryViewDir, material.specularColor, material.specularF90, material.roughness, singleScatteringDielectric, multiScatteringDielectric );
		computeMultiscattering( geometryNormal, geometryViewDir, material.diffuseColor, material.specularF90, material.roughness, singleScatteringMetallic, multiScatteringMetallic );
	#endif
	vec3 singleScattering = mix( singleScatteringDielectric, singleScatteringMetallic, material.metalness );
	vec3 multiScattering = mix( multiScatteringDielectric, multiScatteringMetallic, material.metalness );
	vec3 totalScatteringDielectric = singleScatteringDielectric + multiScatteringDielectric;
	vec3 diffuse = material.diffuseContribution * ( 1.0 - totalScatteringDielectric );
	vec3 cosineWeightedIrradiance = irradiance * RECIPROCAL_PI;
	vec3 indirectSpecular = radiance * singleScattering;
	indirectSpecular += multiScattering * cosineWeightedIrradiance;
	vec3 indirectDiffuse = diffuse * cosineWeightedIrradiance;
	#ifdef USE_SHEEN
		float sheenAlbedo = IBLSheenBRDF( geometryNormal, geometryViewDir, material.sheenRoughness );
		float sheenEnergyComp = 1.0 - max3( material.sheenColor ) * sheenAlbedo;
		indirectSpecular *= sheenEnergyComp;
		indirectDiffuse *= sheenEnergyComp;
	#endif
	reflectedLight.indirectSpecular += indirectSpecular;
	reflectedLight.indirectDiffuse += indirectDiffuse;
}
#define RE_Direct				RE_Direct_Physical
#define RE_Direct_RectArea		RE_Direct_RectArea_Physical
#define RE_IndirectDiffuse		RE_IndirectDiffuse_Physical
#define RE_IndirectSpecular		RE_IndirectSpecular_Physical
float computeSpecularOcclusion( const in float dotNV, const in float ambientOcclusion, const in float roughness ) {
	return saturate( pow( dotNV + ambientOcclusion, exp2( - 16.0 * roughness - 1.0 ) ) - 1.0 + ambientOcclusion );
}`,Rb=`
vec3 geometryPosition = - vViewPosition;
vec3 geometryNormal = normal;
vec3 geometryViewDir = ( isOrthographic ) ? vec3( 0, 0, 1 ) : normalize( vViewPosition );
vec3 geometryClearcoatNormal = vec3( 0.0 );
#ifdef USE_CLEARCOAT
	geometryClearcoatNormal = clearcoatNormal;
#endif
#ifdef USE_IRIDESCENCE
	float dotNVi = saturate( dot( normal, geometryViewDir ) );
	if ( material.iridescenceThickness == 0.0 ) {
		material.iridescence = 0.0;
	} else {
		material.iridescence = saturate( material.iridescence );
	}
	if ( material.iridescence > 0.0 ) {
		material.iridescenceFresnelDielectric = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.specularColor );
		material.iridescenceFresnelMetallic = evalIridescence( 1.0, material.iridescenceIOR, dotNVi, material.iridescenceThickness, material.diffuseColor );
		material.iridescenceFresnel = mix( material.iridescenceFresnelDielectric, material.iridescenceFresnelMetallic, material.metalness );
		material.iridescenceF0 = Schlick_to_F0( material.iridescenceFresnel, 1.0, dotNVi );
	}
#endif
IncidentLight directLight;
#if ( NUM_POINT_LIGHTS > 0 ) && defined( RE_Direct )
	PointLight pointLight;
	#if defined( USE_SHADOWMAP ) && NUM_POINT_LIGHT_SHADOWS > 0
	PointLightShadow pointLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHTS; i ++ ) {
		pointLight = pointLights[ i ];
		getPointLightInfo( pointLight, geometryPosition, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_POINT_LIGHT_SHADOWS ) && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
		pointLightShadow = pointLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getPointShadow( pointShadowMap[ i ], pointLightShadow.shadowMapSize, pointLightShadow.shadowIntensity, pointLightShadow.shadowBias, pointLightShadow.shadowRadius, vPointShadowCoord[ i ], pointLightShadow.shadowCameraNear, pointLightShadow.shadowCameraFar ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_SPOT_LIGHTS > 0 ) && defined( RE_Direct )
	SpotLight spotLight;
	vec4 spotColor;
	vec3 spotLightCoord;
	bool inSpotLightMap;
	#if defined( USE_SHADOWMAP ) && NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHTS; i ++ ) {
		spotLight = spotLights[ i ];
		getSpotLightInfo( spotLight, geometryPosition, directLight );
		#if ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#define SPOT_LIGHT_MAP_INDEX UNROLLED_LOOP_INDEX
		#elif ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		#define SPOT_LIGHT_MAP_INDEX NUM_SPOT_LIGHT_MAPS
		#else
		#define SPOT_LIGHT_MAP_INDEX ( UNROLLED_LOOP_INDEX - NUM_SPOT_LIGHT_SHADOWS + NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS )
		#endif
		#if ( SPOT_LIGHT_MAP_INDEX < NUM_SPOT_LIGHT_MAPS )
			spotLightCoord = vSpotLightCoord[ i ].xyz / vSpotLightCoord[ i ].w;
			inSpotLightMap = all( lessThan( abs( spotLightCoord * 2. - 1. ), vec3( 1.0 ) ) );
			spotColor = texture2D( spotLightMap[ SPOT_LIGHT_MAP_INDEX ], spotLightCoord.xy );
			directLight.color = inSpotLightMap ? directLight.color * spotColor.rgb : directLight.color;
		#endif
		#undef SPOT_LIGHT_MAP_INDEX
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
		spotLightShadow = spotLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowIntensity, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_DIR_LIGHTS > 0 ) && defined( RE_Direct )
	DirectionalLight directionalLight;
	#if defined( USE_SHADOWMAP ) && NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLightShadow;
	#endif
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHTS; i ++ ) {
		directionalLight = directionalLights[ i ];
		getDirectionalLightInfo( directionalLight, directLight );
		#if defined( USE_SHADOWMAP ) && ( UNROLLED_LOOP_INDEX < NUM_DIR_LIGHT_SHADOWS )
		directionalLightShadow = directionalLightShadows[ i ];
		directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowIntensity, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
		#endif
		RE_Direct( directLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if ( NUM_RECT_AREA_LIGHTS > 0 ) && defined( RE_Direct_RectArea )
	RectAreaLight rectAreaLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_RECT_AREA_LIGHTS; i ++ ) {
		rectAreaLight = rectAreaLights[ i ];
		RE_Direct_RectArea( rectAreaLight, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
	}
	#pragma unroll_loop_end
#endif
#if defined( RE_IndirectDiffuse )
	vec3 iblIrradiance = vec3( 0.0 );
	vec3 irradiance = getAmbientLightIrradiance( ambientLightColor );
	#if defined( USE_LIGHT_PROBES )
		irradiance += getLightProbeIrradiance( lightProbe, geometryNormal );
	#endif
	#if ( NUM_HEMI_LIGHTS > 0 )
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_HEMI_LIGHTS; i ++ ) {
			irradiance += getHemisphereLightIrradiance( hemisphereLights[ i ], geometryNormal );
		}
		#pragma unroll_loop_end
	#endif
#endif
#if defined( RE_IndirectSpecular )
	vec3 radiance = vec3( 0.0 );
	vec3 clearcoatRadiance = vec3( 0.0 );
#endif`,Pb=`#if defined( RE_IndirectDiffuse )
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		vec3 lightMapIrradiance = lightMapTexel.rgb * lightMapIntensity;
		irradiance += lightMapIrradiance;
	#endif
	#if defined( USE_ENVMAP ) && defined( STANDARD ) && defined( ENVMAP_TYPE_CUBE_UV )
		iblIrradiance += getIBLIrradiance( geometryNormal );
	#endif
#endif
#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )
	#ifdef USE_ANISOTROPY
		radiance += getIBLAnisotropyRadiance( geometryViewDir, geometryNormal, material.roughness, material.anisotropyB, material.anisotropy );
	#else
		radiance += getIBLRadiance( geometryViewDir, geometryNormal, material.roughness );
	#endif
	#ifdef USE_CLEARCOAT
		clearcoatRadiance += getIBLRadiance( geometryViewDir, geometryClearcoatNormal, material.clearcoatRoughness );
	#endif
#endif`,Db=`#if defined( RE_IndirectDiffuse )
	RE_IndirectDiffuse( irradiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif
#if defined( RE_IndirectSpecular )
	RE_IndirectSpecular( radiance, iblIrradiance, clearcoatRadiance, geometryPosition, geometryNormal, geometryViewDir, geometryClearcoatNormal, material, reflectedLight );
#endif`,Lb=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	gl_FragDepth = vIsPerspective == 0.0 ? gl_FragCoord.z : log2( vFragDepth ) * logDepthBufFC * 0.5;
#endif`,Ib=`#if defined( USE_LOGARITHMIC_DEPTH_BUFFER )
	uniform float logDepthBufFC;
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Nb=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	varying float vFragDepth;
	varying float vIsPerspective;
#endif`,Ub=`#ifdef USE_LOGARITHMIC_DEPTH_BUFFER
	vFragDepth = 1.0 + gl_Position.w;
	vIsPerspective = float( isPerspectiveMatrix( projectionMatrix ) );
#endif`,Fb=`#ifdef USE_MAP
	vec4 sampledDiffuseColor = texture2D( map, vMapUv );
	#ifdef DECODE_VIDEO_TEXTURE
		sampledDiffuseColor = sRGBTransferEOTF( sampledDiffuseColor );
	#endif
	diffuseColor *= sampledDiffuseColor;
#endif`,Ob=`#ifdef USE_MAP
	uniform sampler2D map;
#endif`,kb=`#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
	#if defined( USE_POINTS_UV )
		vec2 uv = vUv;
	#else
		vec2 uv = ( uvTransform * vec3( gl_PointCoord.x, 1.0 - gl_PointCoord.y, 1 ) ).xy;
	#endif
#endif
#ifdef USE_MAP
	diffuseColor *= texture2D( map, uv );
#endif
#ifdef USE_ALPHAMAP
	diffuseColor.a *= texture2D( alphaMap, uv ).g;
#endif`,Bb=`#if defined( USE_POINTS_UV )
	varying vec2 vUv;
#else
	#if defined( USE_MAP ) || defined( USE_ALPHAMAP )
		uniform mat3 uvTransform;
	#endif
#endif
#ifdef USE_MAP
	uniform sampler2D map;
#endif
#ifdef USE_ALPHAMAP
	uniform sampler2D alphaMap;
#endif`,Vb=`float metalnessFactor = metalness;
#ifdef USE_METALNESSMAP
	vec4 texelMetalness = texture2D( metalnessMap, vMetalnessMapUv );
	metalnessFactor *= texelMetalness.b;
#endif`,zb=`#ifdef USE_METALNESSMAP
	uniform sampler2D metalnessMap;
#endif`,Hb=`#ifdef USE_INSTANCING_MORPH
	float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	float morphTargetBaseInfluence = texelFetch( morphTexture, ivec2( 0, gl_InstanceID ), 0 ).r;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		morphTargetInfluences[i] =  texelFetch( morphTexture, ivec2( i + 1, gl_InstanceID ), 0 ).r;
	}
#endif`,Gb=`#if defined( USE_MORPHCOLORS )
	vColor *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		#if defined( USE_COLOR_ALPHA )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ) * morphTargetInfluences[ i ];
		#elif defined( USE_COLOR )
			if ( morphTargetInfluences[ i ] != 0.0 ) vColor += getMorph( gl_VertexID, i, 2 ).rgb * morphTargetInfluences[ i ];
		#endif
	}
#endif`,Wb=`#ifdef USE_MORPHNORMALS
	objectNormal *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) objectNormal += getMorph( gl_VertexID, i, 1 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,jb=`#ifdef USE_MORPHTARGETS
	#ifndef USE_INSTANCING_MORPH
		uniform float morphTargetBaseInfluence;
		uniform float morphTargetInfluences[ MORPHTARGETS_COUNT ];
	#endif
	uniform sampler2DArray morphTargetsTexture;
	uniform ivec2 morphTargetsTextureSize;
	vec4 getMorph( const in int vertexIndex, const in int morphTargetIndex, const in int offset ) {
		int texelIndex = vertexIndex * MORPHTARGETS_TEXTURE_STRIDE + offset;
		int y = texelIndex / morphTargetsTextureSize.x;
		int x = texelIndex - y * morphTargetsTextureSize.x;
		ivec3 morphUV = ivec3( x, y, morphTargetIndex );
		return texelFetch( morphTargetsTexture, morphUV, 0 );
	}
#endif`,Xb=`#ifdef USE_MORPHTARGETS
	transformed *= morphTargetBaseInfluence;
	for ( int i = 0; i < MORPHTARGETS_COUNT; i ++ ) {
		if ( morphTargetInfluences[ i ] != 0.0 ) transformed += getMorph( gl_VertexID, i, 0 ).xyz * morphTargetInfluences[ i ];
	}
#endif`,Yb=`float faceDirection = gl_FrontFacing ? 1.0 : - 1.0;
#ifdef FLAT_SHADED
	vec3 fdx = dFdx( vViewPosition );
	vec3 fdy = dFdy( vViewPosition );
	vec3 normal = normalize( cross( fdx, fdy ) );
#else
	vec3 normal = normalize( vNormal );
	#ifdef DOUBLE_SIDED
		normal *= faceDirection;
	#endif
#endif
#if defined( USE_NORMALMAP_TANGENTSPACE ) || defined( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY )
	#ifdef USE_TANGENT
		mat3 tbn = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn = getTangentFrame( - vViewPosition, normal,
		#if defined( USE_NORMALMAP )
			vNormalMapUv
		#elif defined( USE_CLEARCOAT_NORMALMAP )
			vClearcoatNormalMapUv
		#else
			vUv
		#endif
		);
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn[0] *= faceDirection;
		tbn[1] *= faceDirection;
	#endif
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	#ifdef USE_TANGENT
		mat3 tbn2 = mat3( normalize( vTangent ), normalize( vBitangent ), normal );
	#else
		mat3 tbn2 = getTangentFrame( - vViewPosition, normal, vClearcoatNormalMapUv );
	#endif
	#if defined( DOUBLE_SIDED ) && ! defined( FLAT_SHADED )
		tbn2[0] *= faceDirection;
		tbn2[1] *= faceDirection;
	#endif
#endif
vec3 nonPerturbedNormal = normal;`,$b=`#ifdef USE_NORMALMAP_OBJECTSPACE
	normal = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	#ifdef FLIP_SIDED
		normal = - normal;
	#endif
	#ifdef DOUBLE_SIDED
		normal = normal * faceDirection;
	#endif
	normal = normalize( normalMatrix * normal );
#elif defined( USE_NORMALMAP_TANGENTSPACE )
	vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;
	mapN.xy *= normalScale;
	normal = normalize( tbn * mapN );
#elif defined( USE_BUMPMAP )
	normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd(), faceDirection );
#endif`,qb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Kb=`#ifndef FLAT_SHADED
	varying vec3 vNormal;
	#ifdef USE_TANGENT
		varying vec3 vTangent;
		varying vec3 vBitangent;
	#endif
#endif`,Zb=`#ifndef FLAT_SHADED
	vNormal = normalize( transformedNormal );
	#ifdef USE_TANGENT
		vTangent = normalize( transformedTangent );
		vBitangent = normalize( cross( vNormal, vTangent ) * tangent.w );
	#endif
#endif`,Qb=`#ifdef USE_NORMALMAP
	uniform sampler2D normalMap;
	uniform vec2 normalScale;
#endif
#ifdef USE_NORMALMAP_OBJECTSPACE
	uniform mat3 normalMatrix;
#endif
#if ! defined ( USE_TANGENT ) && ( defined ( USE_NORMALMAP_TANGENTSPACE ) || defined ( USE_CLEARCOAT_NORMALMAP ) || defined( USE_ANISOTROPY ) )
	mat3 getTangentFrame( vec3 eye_pos, vec3 surf_norm, vec2 uv ) {
		vec3 q0 = dFdx( eye_pos.xyz );
		vec3 q1 = dFdy( eye_pos.xyz );
		vec2 st0 = dFdx( uv.st );
		vec2 st1 = dFdy( uv.st );
		vec3 N = surf_norm;
		vec3 q1perp = cross( q1, N );
		vec3 q0perp = cross( N, q0 );
		vec3 T = q1perp * st0.x + q0perp * st1.x;
		vec3 B = q1perp * st0.y + q0perp * st1.y;
		float det = max( dot( T, T ), dot( B, B ) );
		float scale = ( det == 0.0 ) ? 0.0 : inversesqrt( det );
		return mat3( T * scale, B * scale, N );
	}
#endif`,Jb=`#ifdef USE_CLEARCOAT
	vec3 clearcoatNormal = nonPerturbedNormal;
#endif`,eC=`#ifdef USE_CLEARCOAT_NORMALMAP
	vec3 clearcoatMapN = texture2D( clearcoatNormalMap, vClearcoatNormalMapUv ).xyz * 2.0 - 1.0;
	clearcoatMapN.xy *= clearcoatNormalScale;
	clearcoatNormal = normalize( tbn2 * clearcoatMapN );
#endif`,tC=`#ifdef USE_CLEARCOATMAP
	uniform sampler2D clearcoatMap;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform sampler2D clearcoatNormalMap;
	uniform vec2 clearcoatNormalScale;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform sampler2D clearcoatRoughnessMap;
#endif`,nC=`#ifdef USE_IRIDESCENCEMAP
	uniform sampler2D iridescenceMap;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform sampler2D iridescenceThicknessMap;
#endif`,iC=`#ifdef OPAQUE
diffuseColor.a = 1.0;
#endif
#ifdef USE_TRANSMISSION
diffuseColor.a *= material.transmissionAlpha;
#endif
gl_FragColor = vec4( outgoingLight, diffuseColor.a );`,rC=`vec3 packNormalToRGB( const in vec3 normal ) {
	return normalize( normal ) * 0.5 + 0.5;
}
vec3 unpackRGBToNormal( const in vec3 rgb ) {
	return 2.0 * rgb.xyz - 1.0;
}
const float PackUpscale = 256. / 255.;const float UnpackDownscale = 255. / 256.;const float ShiftRight8 = 1. / 256.;
const float Inv255 = 1. / 255.;
const vec4 PackFactors = vec4( 1.0, 256.0, 256.0 * 256.0, 256.0 * 256.0 * 256.0 );
const vec2 UnpackFactors2 = vec2( UnpackDownscale, 1.0 / PackFactors.g );
const vec3 UnpackFactors3 = vec3( UnpackDownscale / PackFactors.rg, 1.0 / PackFactors.b );
const vec4 UnpackFactors4 = vec4( UnpackDownscale / PackFactors.rgb, 1.0 / PackFactors.a );
vec4 packDepthToRGBA( const in float v ) {
	if( v <= 0.0 )
		return vec4( 0., 0., 0., 0. );
	if( v >= 1.0 )
		return vec4( 1., 1., 1., 1. );
	float vuf;
	float af = modf( v * PackFactors.a, vuf );
	float bf = modf( vuf * ShiftRight8, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec4( vuf * Inv255, gf * PackUpscale, bf * PackUpscale, af );
}
vec3 packDepthToRGB( const in float v ) {
	if( v <= 0.0 )
		return vec3( 0., 0., 0. );
	if( v >= 1.0 )
		return vec3( 1., 1., 1. );
	float vuf;
	float bf = modf( v * PackFactors.b, vuf );
	float gf = modf( vuf * ShiftRight8, vuf );
	return vec3( vuf * Inv255, gf * PackUpscale, bf );
}
vec2 packDepthToRG( const in float v ) {
	if( v <= 0.0 )
		return vec2( 0., 0. );
	if( v >= 1.0 )
		return vec2( 1., 1. );
	float vuf;
	float gf = modf( v * 256., vuf );
	return vec2( vuf * Inv255, gf );
}
float unpackRGBAToDepth( const in vec4 v ) {
	return dot( v, UnpackFactors4 );
}
float unpackRGBToDepth( const in vec3 v ) {
	return dot( v, UnpackFactors3 );
}
float unpackRGToDepth( const in vec2 v ) {
	return v.r * UnpackFactors2.r + v.g * UnpackFactors2.g;
}
vec4 pack2HalfToRGBA( const in vec2 v ) {
	vec4 r = vec4( v.x, fract( v.x * 255.0 ), v.y, fract( v.y * 255.0 ) );
	return vec4( r.x - r.y / 255.0, r.y, r.z - r.w / 255.0, r.w );
}
vec2 unpackRGBATo2Half( const in vec4 v ) {
	return vec2( v.x + ( v.y / 255.0 ), v.z + ( v.w / 255.0 ) );
}
float viewZToOrthographicDepth( const in float viewZ, const in float near, const in float far ) {
	return ( viewZ + near ) / ( near - far );
}
float orthographicDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return depth * ( near - far ) - near;
}
float viewZToPerspectiveDepth( const in float viewZ, const in float near, const in float far ) {
	return ( ( near + viewZ ) * far ) / ( ( far - near ) * viewZ );
}
float perspectiveDepthToViewZ( const in float depth, const in float near, const in float far ) {
	return ( near * far ) / ( ( far - near ) * depth - far );
}`,sC=`#ifdef PREMULTIPLIED_ALPHA
	gl_FragColor.rgb *= gl_FragColor.a;
#endif`,oC=`vec4 mvPosition = vec4( transformed, 1.0 );
#ifdef USE_BATCHING
	mvPosition = batchingMatrix * mvPosition;
#endif
#ifdef USE_INSTANCING
	mvPosition = instanceMatrix * mvPosition;
#endif
mvPosition = modelViewMatrix * mvPosition;
gl_Position = projectionMatrix * mvPosition;`,aC=`#ifdef DITHERING
	gl_FragColor.rgb = dithering( gl_FragColor.rgb );
#endif`,lC=`#ifdef DITHERING
	vec3 dithering( vec3 color ) {
		float grid_position = rand( gl_FragCoord.xy );
		vec3 dither_shift_RGB = vec3( 0.25 / 255.0, -0.25 / 255.0, 0.25 / 255.0 );
		dither_shift_RGB = mix( 2.0 * dither_shift_RGB, -2.0 * dither_shift_RGB, grid_position );
		return color + dither_shift_RGB;
	}
#endif`,cC=`float roughnessFactor = roughness;
#ifdef USE_ROUGHNESSMAP
	vec4 texelRoughness = texture2D( roughnessMap, vRoughnessMapUv );
	roughnessFactor *= texelRoughness.g;
#endif`,uC=`#ifdef USE_ROUGHNESSMAP
	uniform sampler2D roughnessMap;
#endif`,fC=`#if NUM_SPOT_LIGHT_COORDS > 0
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#if NUM_SPOT_LIGHT_MAPS > 0
	uniform sampler2D spotLightMap[ NUM_SPOT_LIGHT_MAPS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#else
			uniform sampler2D directionalShadowMap[ NUM_DIR_LIGHT_SHADOWS ];
		#endif
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform sampler2DShadow spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#else
			uniform sampler2D spotShadowMap[ NUM_SPOT_LIGHT_SHADOWS ];
		#endif
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#if defined( SHADOWMAP_TYPE_PCF )
			uniform samplerCubeShadow pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#elif defined( SHADOWMAP_TYPE_BASIC )
			uniform samplerCube pointShadowMap[ NUM_POINT_LIGHT_SHADOWS ];
		#endif
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float interleavedGradientNoise( vec2 position ) {
			return fract( 52.9829189 * fract( dot( position, vec2( 0.06711056, 0.00583715 ) ) ) );
		}
		vec2 vogelDiskSample( int sampleIndex, int samplesCount, float phi ) {
			const float goldenAngle = 2.399963229728653;
			float r = sqrt( ( float( sampleIndex ) + 0.5 ) / float( samplesCount ) );
			float theta = float( sampleIndex ) * goldenAngle + phi;
			return vec2( cos( theta ), sin( theta ) ) * r;
		}
	#endif
	#if defined( SHADOWMAP_TYPE_PCF )
		float getShadow( sampler2DShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 texelSize = vec2( 1.0 ) / shadowMapSize;
				float radius = shadowRadius * texelSize.x;
				float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
				shadow = (
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 0, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 1, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 2, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 3, 5, phi ) * radius, shadowCoord.z ) ) +
					texture( shadowMap, vec3( shadowCoord.xy + vogelDiskSample( 4, 5, phi ) * radius, shadowCoord.z ) )
				) * 0.2;
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#elif defined( SHADOWMAP_TYPE_VSM )
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				vec2 distribution = texture2D( shadowMap, shadowCoord.xy ).rg;
				float mean = distribution.x;
				float variance = distribution.y * distribution.y;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					float hard_shadow = step( mean, shadowCoord.z );
				#else
					float hard_shadow = step( shadowCoord.z, mean );
				#endif
				if ( hard_shadow == 1.0 ) {
					shadow = 1.0;
				} else {
					variance = max( variance, 0.0000001 );
					float d = shadowCoord.z - mean;
					float p_max = variance / ( variance + d * d );
					p_max = clamp( ( p_max - 0.3 ) / 0.65, 0.0, 1.0 );
					shadow = max( hard_shadow, p_max );
				}
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#else
		float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord ) {
			float shadow = 1.0;
			shadowCoord.xyz /= shadowCoord.w;
			shadowCoord.z += shadowBias;
			bool inFrustum = shadowCoord.x >= 0.0 && shadowCoord.x <= 1.0 && shadowCoord.y >= 0.0 && shadowCoord.y <= 1.0;
			bool frustumTest = inFrustum && shadowCoord.z <= 1.0;
			if ( frustumTest ) {
				float depth = texture2D( shadowMap, shadowCoord.xy ).r;
				#ifdef USE_REVERSED_DEPTH_BUFFER
					shadow = step( depth, shadowCoord.z );
				#else
					shadow = step( shadowCoord.z, depth );
				#endif
			}
			return mix( 1.0, shadow, shadowIntensity );
		}
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
	#if defined( SHADOWMAP_TYPE_PCF )
	float getPointShadow( samplerCubeShadow shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float texelSize = shadowRadius / shadowMapSize.x;
			vec3 absDir = abs( bd3D );
			vec3 tangent = absDir.x > absDir.z ? vec3( 0.0, 1.0, 0.0 ) : vec3( 1.0, 0.0, 0.0 );
			tangent = normalize( cross( bd3D, tangent ) );
			vec3 bitangent = cross( bd3D, tangent );
			float phi = interleavedGradientNoise( gl_FragCoord.xy ) * 6.28318530718;
			shadow = (
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 0, 5, phi ).x + bitangent * vogelDiskSample( 0, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 1, 5, phi ).x + bitangent * vogelDiskSample( 1, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 2, 5, phi ).x + bitangent * vogelDiskSample( 2, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 3, 5, phi ).x + bitangent * vogelDiskSample( 3, 5, phi ).y ) * texelSize, dp ) ) +
				texture( shadowMap, vec4( bd3D + ( tangent * vogelDiskSample( 4, 5, phi ).x + bitangent * vogelDiskSample( 4, 5, phi ).y ) * texelSize, dp ) )
			) * 0.2;
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#elif defined( SHADOWMAP_TYPE_BASIC )
	float getPointShadow( samplerCube shadowMap, vec2 shadowMapSize, float shadowIntensity, float shadowBias, float shadowRadius, vec4 shadowCoord, float shadowCameraNear, float shadowCameraFar ) {
		float shadow = 1.0;
		vec3 lightToPosition = shadowCoord.xyz;
		vec3 bd3D = normalize( lightToPosition );
		vec3 absVec = abs( lightToPosition );
		float viewSpaceZ = max( max( absVec.x, absVec.y ), absVec.z );
		if ( viewSpaceZ - shadowCameraFar <= 0.0 && viewSpaceZ - shadowCameraNear >= 0.0 ) {
			float dp = ( shadowCameraFar * ( viewSpaceZ - shadowCameraNear ) ) / ( viewSpaceZ * ( shadowCameraFar - shadowCameraNear ) );
			dp += shadowBias;
			float depth = textureCube( shadowMap, bd3D ).r;
			#ifdef USE_REVERSED_DEPTH_BUFFER
				shadow = step( depth, dp );
			#else
				shadow = step( dp, depth );
			#endif
		}
		return mix( 1.0, shadow, shadowIntensity );
	}
	#endif
	#endif
#endif`,dC=`#if NUM_SPOT_LIGHT_COORDS > 0
	uniform mat4 spotLightMatrix[ NUM_SPOT_LIGHT_COORDS ];
	varying vec4 vSpotLightCoord[ NUM_SPOT_LIGHT_COORDS ];
#endif
#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
		uniform mat4 directionalShadowMatrix[ NUM_DIR_LIGHT_SHADOWS ];
		varying vec4 vDirectionalShadowCoord[ NUM_DIR_LIGHT_SHADOWS ];
		struct DirectionalLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform DirectionalLightShadow directionalLightShadows[ NUM_DIR_LIGHT_SHADOWS ];
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
		struct SpotLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
		};
		uniform SpotLightShadow spotLightShadows[ NUM_SPOT_LIGHT_SHADOWS ];
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		uniform mat4 pointShadowMatrix[ NUM_POINT_LIGHT_SHADOWS ];
		varying vec4 vPointShadowCoord[ NUM_POINT_LIGHT_SHADOWS ];
		struct PointLightShadow {
			float shadowIntensity;
			float shadowBias;
			float shadowNormalBias;
			float shadowRadius;
			vec2 shadowMapSize;
			float shadowCameraNear;
			float shadowCameraFar;
		};
		uniform PointLightShadow pointLightShadows[ NUM_POINT_LIGHT_SHADOWS ];
	#endif
#endif`,hC=`#if ( defined( USE_SHADOWMAP ) && ( NUM_DIR_LIGHT_SHADOWS > 0 || NUM_POINT_LIGHT_SHADOWS > 0 ) ) || ( NUM_SPOT_LIGHT_COORDS > 0 )
	vec3 shadowWorldNormal = inverseTransformDirection( transformedNormal, viewMatrix );
	vec4 shadowWorldPosition;
#endif
#if defined( USE_SHADOWMAP )
	#if NUM_DIR_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * directionalLightShadows[ i ].shadowNormalBias, 0 );
			vDirectionalShadowCoord[ i ] = directionalShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0
		#pragma unroll_loop_start
		for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
			shadowWorldPosition = worldPosition + vec4( shadowWorldNormal * pointLightShadows[ i ].shadowNormalBias, 0 );
			vPointShadowCoord[ i ] = pointShadowMatrix[ i ] * shadowWorldPosition;
		}
		#pragma unroll_loop_end
	#endif
#endif
#if NUM_SPOT_LIGHT_COORDS > 0
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_COORDS; i ++ ) {
		shadowWorldPosition = worldPosition;
		#if ( defined( USE_SHADOWMAP ) && UNROLLED_LOOP_INDEX < NUM_SPOT_LIGHT_SHADOWS )
			shadowWorldPosition.xyz += shadowWorldNormal * spotLightShadows[ i ].shadowNormalBias;
		#endif
		vSpotLightCoord[ i ] = spotLightMatrix[ i ] * shadowWorldPosition;
	}
	#pragma unroll_loop_end
#endif`,pC=`float getShadowMask() {
	float shadow = 1.0;
	#ifdef USE_SHADOWMAP
	#if NUM_DIR_LIGHT_SHADOWS > 0
	DirectionalLightShadow directionalLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_DIR_LIGHT_SHADOWS; i ++ ) {
		directionalLight = directionalLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( directionalShadowMap[ i ], directionalLight.shadowMapSize, directionalLight.shadowIntensity, directionalLight.shadowBias, directionalLight.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_SPOT_LIGHT_SHADOWS > 0
	SpotLightShadow spotLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_SPOT_LIGHT_SHADOWS; i ++ ) {
		spotLight = spotLightShadows[ i ];
		shadow *= receiveShadow ? getShadow( spotShadowMap[ i ], spotLight.shadowMapSize, spotLight.shadowIntensity, spotLight.shadowBias, spotLight.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#if NUM_POINT_LIGHT_SHADOWS > 0 && ( defined( SHADOWMAP_TYPE_PCF ) || defined( SHADOWMAP_TYPE_BASIC ) )
	PointLightShadow pointLight;
	#pragma unroll_loop_start
	for ( int i = 0; i < NUM_POINT_LIGHT_SHADOWS; i ++ ) {
		pointLight = pointLightShadows[ i ];
		shadow *= receiveShadow ? getPointShadow( pointShadowMap[ i ], pointLight.shadowMapSize, pointLight.shadowIntensity, pointLight.shadowBias, pointLight.shadowRadius, vPointShadowCoord[ i ], pointLight.shadowCameraNear, pointLight.shadowCameraFar ) : 1.0;
	}
	#pragma unroll_loop_end
	#endif
	#endif
	return shadow;
}`,mC=`#ifdef USE_SKINNING
	mat4 boneMatX = getBoneMatrix( skinIndex.x );
	mat4 boneMatY = getBoneMatrix( skinIndex.y );
	mat4 boneMatZ = getBoneMatrix( skinIndex.z );
	mat4 boneMatW = getBoneMatrix( skinIndex.w );
#endif`,gC=`#ifdef USE_SKINNING
	uniform mat4 bindMatrix;
	uniform mat4 bindMatrixInverse;
	uniform highp sampler2D boneTexture;
	mat4 getBoneMatrix( const in float i ) {
		int size = textureSize( boneTexture, 0 ).x;
		int j = int( i ) * 4;
		int x = j % size;
		int y = j / size;
		vec4 v1 = texelFetch( boneTexture, ivec2( x, y ), 0 );
		vec4 v2 = texelFetch( boneTexture, ivec2( x + 1, y ), 0 );
		vec4 v3 = texelFetch( boneTexture, ivec2( x + 2, y ), 0 );
		vec4 v4 = texelFetch( boneTexture, ivec2( x + 3, y ), 0 );
		return mat4( v1, v2, v3, v4 );
	}
#endif`,vC=`#ifdef USE_SKINNING
	vec4 skinVertex = bindMatrix * vec4( transformed, 1.0 );
	vec4 skinned = vec4( 0.0 );
	skinned += boneMatX * skinVertex * skinWeight.x;
	skinned += boneMatY * skinVertex * skinWeight.y;
	skinned += boneMatZ * skinVertex * skinWeight.z;
	skinned += boneMatW * skinVertex * skinWeight.w;
	transformed = ( bindMatrixInverse * skinned ).xyz;
#endif`,_C=`#ifdef USE_SKINNING
	mat4 skinMatrix = mat4( 0.0 );
	skinMatrix += skinWeight.x * boneMatX;
	skinMatrix += skinWeight.y * boneMatY;
	skinMatrix += skinWeight.z * boneMatZ;
	skinMatrix += skinWeight.w * boneMatW;
	skinMatrix = bindMatrixInverse * skinMatrix * bindMatrix;
	objectNormal = vec4( skinMatrix * vec4( objectNormal, 0.0 ) ).xyz;
	#ifdef USE_TANGENT
		objectTangent = vec4( skinMatrix * vec4( objectTangent, 0.0 ) ).xyz;
	#endif
#endif`,xC=`float specularStrength;
#ifdef USE_SPECULARMAP
	vec4 texelSpecular = texture2D( specularMap, vSpecularMapUv );
	specularStrength = texelSpecular.r;
#else
	specularStrength = 1.0;
#endif`,yC=`#ifdef USE_SPECULARMAP
	uniform sampler2D specularMap;
#endif`,SC=`#if defined( TONE_MAPPING )
	gl_FragColor.rgb = toneMapping( gl_FragColor.rgb );
#endif`,MC=`#ifndef saturate
#define saturate( a ) clamp( a, 0.0, 1.0 )
#endif
uniform float toneMappingExposure;
vec3 LinearToneMapping( vec3 color ) {
	return saturate( toneMappingExposure * color );
}
vec3 ReinhardToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	return saturate( color / ( vec3( 1.0 ) + color ) );
}
vec3 CineonToneMapping( vec3 color ) {
	color *= toneMappingExposure;
	color = max( vec3( 0.0 ), color - 0.004 );
	return pow( ( color * ( 6.2 * color + 0.5 ) ) / ( color * ( 6.2 * color + 1.7 ) + 0.06 ), vec3( 2.2 ) );
}
vec3 RRTAndODTFit( vec3 v ) {
	vec3 a = v * ( v + 0.0245786 ) - 0.000090537;
	vec3 b = v * ( 0.983729 * v + 0.4329510 ) + 0.238081;
	return a / b;
}
vec3 ACESFilmicToneMapping( vec3 color ) {
	const mat3 ACESInputMat = mat3(
		vec3( 0.59719, 0.07600, 0.02840 ),		vec3( 0.35458, 0.90834, 0.13383 ),
		vec3( 0.04823, 0.01566, 0.83777 )
	);
	const mat3 ACESOutputMat = mat3(
		vec3(  1.60475, -0.10208, -0.00327 ),		vec3( -0.53108,  1.10813, -0.07276 ),
		vec3( -0.07367, -0.00605,  1.07602 )
	);
	color *= toneMappingExposure / 0.6;
	color = ACESInputMat * color;
	color = RRTAndODTFit( color );
	color = ACESOutputMat * color;
	return saturate( color );
}
const mat3 LINEAR_REC2020_TO_LINEAR_SRGB = mat3(
	vec3( 1.6605, - 0.1246, - 0.0182 ),
	vec3( - 0.5876, 1.1329, - 0.1006 ),
	vec3( - 0.0728, - 0.0083, 1.1187 )
);
const mat3 LINEAR_SRGB_TO_LINEAR_REC2020 = mat3(
	vec3( 0.6274, 0.0691, 0.0164 ),
	vec3( 0.3293, 0.9195, 0.0880 ),
	vec3( 0.0433, 0.0113, 0.8956 )
);
vec3 agxDefaultContrastApprox( vec3 x ) {
	vec3 x2 = x * x;
	vec3 x4 = x2 * x2;
	return + 15.5 * x4 * x2
		- 40.14 * x4 * x
		+ 31.96 * x4
		- 6.868 * x2 * x
		+ 0.4298 * x2
		+ 0.1191 * x
		- 0.00232;
}
vec3 AgXToneMapping( vec3 color ) {
	const mat3 AgXInsetMatrix = mat3(
		vec3( 0.856627153315983, 0.137318972929847, 0.11189821299995 ),
		vec3( 0.0951212405381588, 0.761241990602591, 0.0767994186031903 ),
		vec3( 0.0482516061458583, 0.101439036467562, 0.811302368396859 )
	);
	const mat3 AgXOutsetMatrix = mat3(
		vec3( 1.1271005818144368, - 0.1413297634984383, - 0.14132976349843826 ),
		vec3( - 0.11060664309660323, 1.157823702216272, - 0.11060664309660294 ),
		vec3( - 0.016493938717834573, - 0.016493938717834257, 1.2519364065950405 )
	);
	const float AgxMinEv = - 12.47393;	const float AgxMaxEv = 4.026069;
	color *= toneMappingExposure;
	color = LINEAR_SRGB_TO_LINEAR_REC2020 * color;
	color = AgXInsetMatrix * color;
	color = max( color, 1e-10 );	color = log2( color );
	color = ( color - AgxMinEv ) / ( AgxMaxEv - AgxMinEv );
	color = clamp( color, 0.0, 1.0 );
	color = agxDefaultContrastApprox( color );
	color = AgXOutsetMatrix * color;
	color = pow( max( vec3( 0.0 ), color ), vec3( 2.2 ) );
	color = LINEAR_REC2020_TO_LINEAR_SRGB * color;
	color = clamp( color, 0.0, 1.0 );
	return color;
}
vec3 NeutralToneMapping( vec3 color ) {
	const float StartCompression = 0.8 - 0.04;
	const float Desaturation = 0.15;
	color *= toneMappingExposure;
	float x = min( color.r, min( color.g, color.b ) );
	float offset = x < 0.08 ? x - 6.25 * x * x : 0.04;
	color -= offset;
	float peak = max( color.r, max( color.g, color.b ) );
	if ( peak < StartCompression ) return color;
	float d = 1. - StartCompression;
	float newPeak = 1. - d * d / ( peak + d - StartCompression );
	color *= newPeak / peak;
	float g = 1. - 1. / ( Desaturation * ( peak - newPeak ) + 1. );
	return mix( color, vec3( newPeak ), g );
}
vec3 CustomToneMapping( vec3 color ) { return color; }`,EC=`#ifdef USE_TRANSMISSION
	material.transmission = transmission;
	material.transmissionAlpha = 1.0;
	material.thickness = thickness;
	material.attenuationDistance = attenuationDistance;
	material.attenuationColor = attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		material.transmission *= texture2D( transmissionMap, vTransmissionMapUv ).r;
	#endif
	#ifdef USE_THICKNESSMAP
		material.thickness *= texture2D( thicknessMap, vThicknessMapUv ).g;
	#endif
	vec3 pos = vWorldPosition;
	vec3 v = normalize( cameraPosition - pos );
	vec3 n = inverseTransformDirection( normal, viewMatrix );
	vec4 transmitted = getIBLVolumeRefraction(
		n, v, material.roughness, material.diffuseContribution, material.specularColorBlended, material.specularF90,
		pos, modelMatrix, viewMatrix, projectionMatrix, material.dispersion, material.ior, material.thickness,
		material.attenuationColor, material.attenuationDistance );
	material.transmissionAlpha = mix( material.transmissionAlpha, transmitted.a, material.transmission );
	totalDiffuse = mix( totalDiffuse, transmitted.rgb, material.transmission );
#endif`,TC=`#ifdef USE_TRANSMISSION
	uniform float transmission;
	uniform float thickness;
	uniform float attenuationDistance;
	uniform vec3 attenuationColor;
	#ifdef USE_TRANSMISSIONMAP
		uniform sampler2D transmissionMap;
	#endif
	#ifdef USE_THICKNESSMAP
		uniform sampler2D thicknessMap;
	#endif
	uniform vec2 transmissionSamplerSize;
	uniform sampler2D transmissionSamplerMap;
	uniform mat4 modelMatrix;
	uniform mat4 projectionMatrix;
	varying vec3 vWorldPosition;
	float w0( float a ) {
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - a + 3.0 ) - 3.0 ) + 1.0 );
	}
	float w1( float a ) {
		return ( 1.0 / 6.0 ) * ( a *  a * ( 3.0 * a - 6.0 ) + 4.0 );
	}
	float w2( float a ){
		return ( 1.0 / 6.0 ) * ( a * ( a * ( - 3.0 * a + 3.0 ) + 3.0 ) + 1.0 );
	}
	float w3( float a ) {
		return ( 1.0 / 6.0 ) * ( a * a * a );
	}
	float g0( float a ) {
		return w0( a ) + w1( a );
	}
	float g1( float a ) {
		return w2( a ) + w3( a );
	}
	float h0( float a ) {
		return - 1.0 + w1( a ) / ( w0( a ) + w1( a ) );
	}
	float h1( float a ) {
		return 1.0 + w3( a ) / ( w2( a ) + w3( a ) );
	}
	vec4 bicubic( sampler2D tex, vec2 uv, vec4 texelSize, float lod ) {
		uv = uv * texelSize.zw + 0.5;
		vec2 iuv = floor( uv );
		vec2 fuv = fract( uv );
		float g0x = g0( fuv.x );
		float g1x = g1( fuv.x );
		float h0x = h0( fuv.x );
		float h1x = h1( fuv.x );
		float h0y = h0( fuv.y );
		float h1y = h1( fuv.y );
		vec2 p0 = ( vec2( iuv.x + h0x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p1 = ( vec2( iuv.x + h1x, iuv.y + h0y ) - 0.5 ) * texelSize.xy;
		vec2 p2 = ( vec2( iuv.x + h0x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		vec2 p3 = ( vec2( iuv.x + h1x, iuv.y + h1y ) - 0.5 ) * texelSize.xy;
		return g0( fuv.y ) * ( g0x * textureLod( tex, p0, lod ) + g1x * textureLod( tex, p1, lod ) ) +
			g1( fuv.y ) * ( g0x * textureLod( tex, p2, lod ) + g1x * textureLod( tex, p3, lod ) );
	}
	vec4 textureBicubic( sampler2D sampler, vec2 uv, float lod ) {
		vec2 fLodSize = vec2( textureSize( sampler, int( lod ) ) );
		vec2 cLodSize = vec2( textureSize( sampler, int( lod + 1.0 ) ) );
		vec2 fLodSizeInv = 1.0 / fLodSize;
		vec2 cLodSizeInv = 1.0 / cLodSize;
		vec4 fSample = bicubic( sampler, uv, vec4( fLodSizeInv, fLodSize ), floor( lod ) );
		vec4 cSample = bicubic( sampler, uv, vec4( cLodSizeInv, cLodSize ), ceil( lod ) );
		return mix( fSample, cSample, fract( lod ) );
	}
	vec3 getVolumeTransmissionRay( const in vec3 n, const in vec3 v, const in float thickness, const in float ior, const in mat4 modelMatrix ) {
		vec3 refractionVector = refract( - v, normalize( n ), 1.0 / ior );
		vec3 modelScale;
		modelScale.x = length( vec3( modelMatrix[ 0 ].xyz ) );
		modelScale.y = length( vec3( modelMatrix[ 1 ].xyz ) );
		modelScale.z = length( vec3( modelMatrix[ 2 ].xyz ) );
		return normalize( refractionVector ) * thickness * modelScale;
	}
	float applyIorToRoughness( const in float roughness, const in float ior ) {
		return roughness * clamp( ior * 2.0 - 2.0, 0.0, 1.0 );
	}
	vec4 getTransmissionSample( const in vec2 fragCoord, const in float roughness, const in float ior ) {
		float lod = log2( transmissionSamplerSize.x ) * applyIorToRoughness( roughness, ior );
		return textureBicubic( transmissionSamplerMap, fragCoord.xy, lod );
	}
	vec3 volumeAttenuation( const in float transmissionDistance, const in vec3 attenuationColor, const in float attenuationDistance ) {
		if ( isinf( attenuationDistance ) ) {
			return vec3( 1.0 );
		} else {
			vec3 attenuationCoefficient = -log( attenuationColor ) / attenuationDistance;
			vec3 transmittance = exp( - attenuationCoefficient * transmissionDistance );			return transmittance;
		}
	}
	vec4 getIBLVolumeRefraction( const in vec3 n, const in vec3 v, const in float roughness, const in vec3 diffuseColor,
		const in vec3 specularColor, const in float specularF90, const in vec3 position, const in mat4 modelMatrix,
		const in mat4 viewMatrix, const in mat4 projMatrix, const in float dispersion, const in float ior, const in float thickness,
		const in vec3 attenuationColor, const in float attenuationDistance ) {
		vec4 transmittedLight;
		vec3 transmittance;
		#ifdef USE_DISPERSION
			float halfSpread = ( ior - 1.0 ) * 0.025 * dispersion;
			vec3 iors = vec3( ior - halfSpread, ior, ior + halfSpread );
			for ( int i = 0; i < 3; i ++ ) {
				vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, iors[ i ], modelMatrix );
				vec3 refractedRayExit = position + transmissionRay;
				vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
				vec2 refractionCoords = ndcPos.xy / ndcPos.w;
				refractionCoords += 1.0;
				refractionCoords /= 2.0;
				vec4 transmissionSample = getTransmissionSample( refractionCoords, roughness, iors[ i ] );
				transmittedLight[ i ] = transmissionSample[ i ];
				transmittedLight.a += transmissionSample.a;
				transmittance[ i ] = diffuseColor[ i ] * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance )[ i ];
			}
			transmittedLight.a /= 3.0;
		#else
			vec3 transmissionRay = getVolumeTransmissionRay( n, v, thickness, ior, modelMatrix );
			vec3 refractedRayExit = position + transmissionRay;
			vec4 ndcPos = projMatrix * viewMatrix * vec4( refractedRayExit, 1.0 );
			vec2 refractionCoords = ndcPos.xy / ndcPos.w;
			refractionCoords += 1.0;
			refractionCoords /= 2.0;
			transmittedLight = getTransmissionSample( refractionCoords, roughness, ior );
			transmittance = diffuseColor * volumeAttenuation( length( transmissionRay ), attenuationColor, attenuationDistance );
		#endif
		vec3 attenuatedColor = transmittance * transmittedLight.rgb;
		vec3 F = EnvironmentBRDF( n, v, specularColor, specularF90, roughness );
		float transmittanceFactor = ( transmittance.r + transmittance.g + transmittance.b ) / 3.0;
		return vec4( ( 1.0 - F ) * attenuatedColor, 1.0 - ( 1.0 - transmittedLight.a ) * transmittanceFactor );
	}
#endif`,wC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_SPECULARMAP
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,AC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	varying vec2 vUv;
#endif
#ifdef USE_MAP
	uniform mat3 mapTransform;
	varying vec2 vMapUv;
#endif
#ifdef USE_ALPHAMAP
	uniform mat3 alphaMapTransform;
	varying vec2 vAlphaMapUv;
#endif
#ifdef USE_LIGHTMAP
	uniform mat3 lightMapTransform;
	varying vec2 vLightMapUv;
#endif
#ifdef USE_AOMAP
	uniform mat3 aoMapTransform;
	varying vec2 vAoMapUv;
#endif
#ifdef USE_BUMPMAP
	uniform mat3 bumpMapTransform;
	varying vec2 vBumpMapUv;
#endif
#ifdef USE_NORMALMAP
	uniform mat3 normalMapTransform;
	varying vec2 vNormalMapUv;
#endif
#ifdef USE_DISPLACEMENTMAP
	uniform mat3 displacementMapTransform;
	varying vec2 vDisplacementMapUv;
#endif
#ifdef USE_EMISSIVEMAP
	uniform mat3 emissiveMapTransform;
	varying vec2 vEmissiveMapUv;
#endif
#ifdef USE_METALNESSMAP
	uniform mat3 metalnessMapTransform;
	varying vec2 vMetalnessMapUv;
#endif
#ifdef USE_ROUGHNESSMAP
	uniform mat3 roughnessMapTransform;
	varying vec2 vRoughnessMapUv;
#endif
#ifdef USE_ANISOTROPYMAP
	uniform mat3 anisotropyMapTransform;
	varying vec2 vAnisotropyMapUv;
#endif
#ifdef USE_CLEARCOATMAP
	uniform mat3 clearcoatMapTransform;
	varying vec2 vClearcoatMapUv;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	uniform mat3 clearcoatNormalMapTransform;
	varying vec2 vClearcoatNormalMapUv;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	uniform mat3 clearcoatRoughnessMapTransform;
	varying vec2 vClearcoatRoughnessMapUv;
#endif
#ifdef USE_SHEEN_COLORMAP
	uniform mat3 sheenColorMapTransform;
	varying vec2 vSheenColorMapUv;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	uniform mat3 sheenRoughnessMapTransform;
	varying vec2 vSheenRoughnessMapUv;
#endif
#ifdef USE_IRIDESCENCEMAP
	uniform mat3 iridescenceMapTransform;
	varying vec2 vIridescenceMapUv;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	uniform mat3 iridescenceThicknessMapTransform;
	varying vec2 vIridescenceThicknessMapUv;
#endif
#ifdef USE_SPECULARMAP
	uniform mat3 specularMapTransform;
	varying vec2 vSpecularMapUv;
#endif
#ifdef USE_SPECULAR_COLORMAP
	uniform mat3 specularColorMapTransform;
	varying vec2 vSpecularColorMapUv;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	uniform mat3 specularIntensityMapTransform;
	varying vec2 vSpecularIntensityMapUv;
#endif
#ifdef USE_TRANSMISSIONMAP
	uniform mat3 transmissionMapTransform;
	varying vec2 vTransmissionMapUv;
#endif
#ifdef USE_THICKNESSMAP
	uniform mat3 thicknessMapTransform;
	varying vec2 vThicknessMapUv;
#endif`,bC=`#if defined( USE_UV ) || defined( USE_ANISOTROPY )
	vUv = vec3( uv, 1 ).xy;
#endif
#ifdef USE_MAP
	vMapUv = ( mapTransform * vec3( MAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ALPHAMAP
	vAlphaMapUv = ( alphaMapTransform * vec3( ALPHAMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_LIGHTMAP
	vLightMapUv = ( lightMapTransform * vec3( LIGHTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_AOMAP
	vAoMapUv = ( aoMapTransform * vec3( AOMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_BUMPMAP
	vBumpMapUv = ( bumpMapTransform * vec3( BUMPMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_NORMALMAP
	vNormalMapUv = ( normalMapTransform * vec3( NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_DISPLACEMENTMAP
	vDisplacementMapUv = ( displacementMapTransform * vec3( DISPLACEMENTMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_EMISSIVEMAP
	vEmissiveMapUv = ( emissiveMapTransform * vec3( EMISSIVEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_METALNESSMAP
	vMetalnessMapUv = ( metalnessMapTransform * vec3( METALNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ROUGHNESSMAP
	vRoughnessMapUv = ( roughnessMapTransform * vec3( ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_ANISOTROPYMAP
	vAnisotropyMapUv = ( anisotropyMapTransform * vec3( ANISOTROPYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOATMAP
	vClearcoatMapUv = ( clearcoatMapTransform * vec3( CLEARCOATMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_NORMALMAP
	vClearcoatNormalMapUv = ( clearcoatNormalMapTransform * vec3( CLEARCOAT_NORMALMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_CLEARCOAT_ROUGHNESSMAP
	vClearcoatRoughnessMapUv = ( clearcoatRoughnessMapTransform * vec3( CLEARCOAT_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCEMAP
	vIridescenceMapUv = ( iridescenceMapTransform * vec3( IRIDESCENCEMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_IRIDESCENCE_THICKNESSMAP
	vIridescenceThicknessMapUv = ( iridescenceThicknessMapTransform * vec3( IRIDESCENCE_THICKNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_COLORMAP
	vSheenColorMapUv = ( sheenColorMapTransform * vec3( SHEEN_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SHEEN_ROUGHNESSMAP
	vSheenRoughnessMapUv = ( sheenRoughnessMapTransform * vec3( SHEEN_ROUGHNESSMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULARMAP
	vSpecularMapUv = ( specularMapTransform * vec3( SPECULARMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_COLORMAP
	vSpecularColorMapUv = ( specularColorMapTransform * vec3( SPECULAR_COLORMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_SPECULAR_INTENSITYMAP
	vSpecularIntensityMapUv = ( specularIntensityMapTransform * vec3( SPECULAR_INTENSITYMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_TRANSMISSIONMAP
	vTransmissionMapUv = ( transmissionMapTransform * vec3( TRANSMISSIONMAP_UV, 1 ) ).xy;
#endif
#ifdef USE_THICKNESSMAP
	vThicknessMapUv = ( thicknessMapTransform * vec3( THICKNESSMAP_UV, 1 ) ).xy;
#endif`,CC=`#if defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0
	vec4 worldPosition = vec4( transformed, 1.0 );
	#ifdef USE_BATCHING
		worldPosition = batchingMatrix * worldPosition;
	#endif
	#ifdef USE_INSTANCING
		worldPosition = instanceMatrix * worldPosition;
	#endif
	worldPosition = modelMatrix * worldPosition;
#endif`;const RC=`varying vec2 vUv;
uniform mat3 uvTransform;
void main() {
	vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	gl_Position = vec4( position.xy, 1.0, 1.0 );
}`,PC=`uniform sampler2D t2D;
uniform float backgroundIntensity;
varying vec2 vUv;
void main() {
	vec4 texColor = texture2D( t2D, vUv );
	#ifdef DECODE_VIDEO_TEXTURE
		texColor = vec4( mix( pow( texColor.rgb * 0.9478672986 + vec3( 0.0521327014 ), vec3( 2.4 ) ), texColor.rgb * 0.0773993808, vec3( lessThanEqual( texColor.rgb, vec3( 0.04045 ) ) ) ), texColor.w );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,DC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,LC=`#ifdef ENVMAP_TYPE_CUBE
	uniform samplerCube envMap;
#elif defined( ENVMAP_TYPE_CUBE_UV )
	uniform sampler2D envMap;
#endif
uniform float flipEnvMap;
uniform float backgroundBlurriness;
uniform float backgroundIntensity;
uniform mat3 backgroundRotation;
varying vec3 vWorldDirection;
#include <cube_uv_reflection_fragment>
void main() {
	#ifdef ENVMAP_TYPE_CUBE
		vec4 texColor = textureCube( envMap, backgroundRotation * vec3( flipEnvMap * vWorldDirection.x, vWorldDirection.yz ) );
	#elif defined( ENVMAP_TYPE_CUBE_UV )
		vec4 texColor = textureCubeUV( envMap, backgroundRotation * vWorldDirection, backgroundBlurriness );
	#else
		vec4 texColor = vec4( 0.0, 0.0, 0.0, 1.0 );
	#endif
	texColor.rgb *= backgroundIntensity;
	gl_FragColor = texColor;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,IC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
	gl_Position.z = gl_Position.w;
}`,NC=`uniform samplerCube tCube;
uniform float tFlip;
uniform float opacity;
varying vec3 vWorldDirection;
void main() {
	vec4 texColor = textureCube( tCube, vec3( tFlip * vWorldDirection.x, vWorldDirection.yz ) );
	gl_FragColor = texColor;
	gl_FragColor.a *= opacity;
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,UC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
varying vec2 vHighPrecisionZW;
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vHighPrecisionZW = gl_Position.zw;
}`,FC=`#if DEPTH_PACKING == 3200
	uniform float opacity;
#endif
#include <common>
#include <packing>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
varying vec2 vHighPrecisionZW;
void main() {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#if DEPTH_PACKING == 3200
		diffuseColor.a = opacity;
	#endif
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <logdepthbuf_fragment>
	#ifdef USE_REVERSED_DEPTH_BUFFER
		float fragCoordZ = vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ];
	#else
		float fragCoordZ = 0.5 * vHighPrecisionZW[ 0 ] / vHighPrecisionZW[ 1 ] + 0.5;
	#endif
	#if DEPTH_PACKING == 3200
		gl_FragColor = vec4( vec3( 1.0 - fragCoordZ ), opacity );
	#elif DEPTH_PACKING == 3201
		gl_FragColor = packDepthToRGBA( fragCoordZ );
	#elif DEPTH_PACKING == 3202
		gl_FragColor = vec4( packDepthToRGB( fragCoordZ ), 1.0 );
	#elif DEPTH_PACKING == 3203
		gl_FragColor = vec4( packDepthToRG( fragCoordZ ), 0.0, 1.0 );
	#endif
}`,OC=`#define DISTANCE
varying vec3 vWorldPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <skinbase_vertex>
	#include <morphinstance_vertex>
	#ifdef USE_DISPLACEMENTMAP
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <worldpos_vertex>
	#include <clipping_planes_vertex>
	vWorldPosition = worldPosition.xyz;
}`,kC=`#define DISTANCE
uniform vec3 referencePosition;
uniform float nearDistance;
uniform float farDistance;
varying vec3 vWorldPosition;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <clipping_planes_pars_fragment>
void main () {
	vec4 diffuseColor = vec4( 1.0 );
	#include <clipping_planes_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	float dist = length( vWorldPosition - referencePosition );
	dist = ( dist - nearDistance ) / ( farDistance - nearDistance );
	dist = saturate( dist );
	gl_FragColor = vec4( dist, 0.0, 0.0, 1.0 );
}`,BC=`varying vec3 vWorldDirection;
#include <common>
void main() {
	vWorldDirection = transformDirection( position, modelMatrix );
	#include <begin_vertex>
	#include <project_vertex>
}`,VC=`uniform sampler2D tEquirect;
varying vec3 vWorldDirection;
#include <common>
void main() {
	vec3 direction = normalize( vWorldDirection );
	vec2 sampleUV = equirectUv( direction );
	gl_FragColor = texture2D( tEquirect, sampleUV );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
}`,zC=`uniform float scale;
attribute float lineDistance;
varying float vLineDistance;
#include <common>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	vLineDistance = scale * lineDistance;
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,HC=`uniform vec3 diffuse;
uniform float opacity;
uniform float dashSize;
uniform float totalSize;
varying float vLineDistance;
#include <common>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	if ( mod( vLineDistance, totalSize ) > dashSize ) {
		discard;
	}
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,GC=`#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#if defined ( USE_ENVMAP ) || defined ( USE_SKINNING )
		#include <beginnormal_vertex>
		#include <morphnormal_vertex>
		#include <skinbase_vertex>
		#include <skinnormal_vertex>
		#include <defaultnormal_vertex>
	#endif
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <fog_vertex>
}`,WC=`uniform vec3 diffuse;
uniform float opacity;
#ifndef FLAT_SHADED
	varying vec3 vNormal;
#endif
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	#ifdef USE_LIGHTMAP
		vec4 lightMapTexel = texture2D( lightMap, vLightMapUv );
		reflectedLight.indirectDiffuse += lightMapTexel.rgb * lightMapIntensity * RECIPROCAL_PI;
	#else
		reflectedLight.indirectDiffuse += vec3( 1.0 );
	#endif
	#include <aomap_fragment>
	reflectedLight.indirectDiffuse *= diffuseColor.rgb;
	vec3 outgoingLight = reflectedLight.indirectDiffuse;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,jC=`#define LAMBERT
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,XC=`#define LAMBERT
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_lambert_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_lambert_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,YC=`#define MATCAP
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <color_pars_vertex>
#include <displacementmap_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
	vViewPosition = - mvPosition.xyz;
}`,$C=`#define MATCAP
uniform vec3 diffuse;
uniform float opacity;
uniform sampler2D matcap;
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	vec3 viewDir = normalize( vViewPosition );
	vec3 x = normalize( vec3( viewDir.z, 0.0, - viewDir.x ) );
	vec3 y = cross( viewDir, x );
	vec2 uv = vec2( dot( x, normal ), dot( y, normal ) ) * 0.495 + 0.5;
	#ifdef USE_MATCAP
		vec4 matcapColor = texture2D( matcap, uv );
	#else
		vec4 matcapColor = vec4( vec3( mix( 0.2, 0.8, uv.y ) ), 1.0 );
	#endif
	vec3 outgoingLight = diffuseColor.rgb * matcapColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,qC=`#define NORMAL
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	vViewPosition = - mvPosition.xyz;
#endif
}`,KC=`#define NORMAL
uniform float opacity;
#if defined( FLAT_SHADED ) || defined( USE_BUMPMAP ) || defined( USE_NORMALMAP_TANGENTSPACE )
	varying vec3 vViewPosition;
#endif
#include <uv_pars_fragment>
#include <normal_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( 0.0, 0.0, 0.0, opacity );
	#include <clipping_planes_fragment>
	#include <logdepthbuf_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	gl_FragColor = vec4( normalize( normal ) * 0.5 + 0.5, diffuseColor.a );
	#ifdef OPAQUE
		gl_FragColor.a = 1.0;
	#endif
}`,ZC=`#define PHONG
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <envmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <envmap_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,QC=`#define PHONG
uniform vec3 diffuse;
uniform vec3 emissive;
uniform vec3 specular;
uniform float shininess;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_phong_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <specularmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <specularmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_phong_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + reflectedLight.directSpecular + reflectedLight.indirectSpecular + totalEmissiveRadiance;
	#include <envmap_fragment>
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,JC=`#define STANDARD
varying vec3 vViewPosition;
#ifdef USE_TRANSMISSION
	varying vec3 vWorldPosition;
#endif
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
#ifdef USE_TRANSMISSION
	vWorldPosition = worldPosition.xyz;
#endif
}`,eR=`#define STANDARD
#ifdef PHYSICAL
	#define IOR
	#define USE_SPECULAR
#endif
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float roughness;
uniform float metalness;
uniform float opacity;
#ifdef IOR
	uniform float ior;
#endif
#ifdef USE_SPECULAR
	uniform float specularIntensity;
	uniform vec3 specularColor;
	#ifdef USE_SPECULAR_COLORMAP
		uniform sampler2D specularColorMap;
	#endif
	#ifdef USE_SPECULAR_INTENSITYMAP
		uniform sampler2D specularIntensityMap;
	#endif
#endif
#ifdef USE_CLEARCOAT
	uniform float clearcoat;
	uniform float clearcoatRoughness;
#endif
#ifdef USE_DISPERSION
	uniform float dispersion;
#endif
#ifdef USE_IRIDESCENCE
	uniform float iridescence;
	uniform float iridescenceIOR;
	uniform float iridescenceThicknessMinimum;
	uniform float iridescenceThicknessMaximum;
#endif
#ifdef USE_SHEEN
	uniform vec3 sheenColor;
	uniform float sheenRoughness;
	#ifdef USE_SHEEN_COLORMAP
		uniform sampler2D sheenColorMap;
	#endif
	#ifdef USE_SHEEN_ROUGHNESSMAP
		uniform sampler2D sheenRoughnessMap;
	#endif
#endif
#ifdef USE_ANISOTROPY
	uniform vec2 anisotropyVector;
	#ifdef USE_ANISOTROPYMAP
		uniform sampler2D anisotropyMap;
	#endif
#endif
varying vec3 vViewPosition;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <iridescence_fragment>
#include <cube_uv_reflection_fragment>
#include <envmap_common_pars_fragment>
#include <envmap_physical_pars_fragment>
#include <fog_pars_fragment>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_physical_pars_fragment>
#include <transmission_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <clearcoat_pars_fragment>
#include <iridescence_pars_fragment>
#include <roughnessmap_pars_fragment>
#include <metalnessmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <roughnessmap_fragment>
	#include <metalnessmap_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <clearcoat_normal_fragment_begin>
	#include <clearcoat_normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_physical_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 totalDiffuse = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse;
	vec3 totalSpecular = reflectedLight.directSpecular + reflectedLight.indirectSpecular;
	#include <transmission_fragment>
	vec3 outgoingLight = totalDiffuse + totalSpecular + totalEmissiveRadiance;
	#ifdef USE_SHEEN
 
		outgoingLight = outgoingLight + sheenSpecularDirect + sheenSpecularIndirect;
 
 	#endif
	#ifdef USE_CLEARCOAT
		float dotNVcc = saturate( dot( geometryClearcoatNormal, geometryViewDir ) );
		vec3 Fcc = F_Schlick( material.clearcoatF0, material.clearcoatF90, dotNVcc );
		outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + ( clearcoatSpecularDirect + clearcoatSpecularIndirect ) * material.clearcoat;
	#endif
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,tR=`#define TOON
varying vec3 vViewPosition;
#include <common>
#include <batching_pars_vertex>
#include <uv_pars_vertex>
#include <displacementmap_pars_vertex>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <normal_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <shadowmap_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <normal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <displacementmap_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	vViewPosition = - mvPosition.xyz;
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,nR=`#define TOON
uniform vec3 diffuse;
uniform vec3 emissive;
uniform float opacity;
#include <common>
#include <dithering_pars_fragment>
#include <color_pars_fragment>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <aomap_pars_fragment>
#include <lightmap_pars_fragment>
#include <emissivemap_pars_fragment>
#include <gradientmap_pars_fragment>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <normal_pars_fragment>
#include <lights_toon_pars_fragment>
#include <shadowmap_pars_fragment>
#include <bumpmap_pars_fragment>
#include <normalmap_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	ReflectedLight reflectedLight = ReflectedLight( vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ), vec3( 0.0 ) );
	vec3 totalEmissiveRadiance = emissive;
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <color_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	#include <normal_fragment_begin>
	#include <normal_fragment_maps>
	#include <emissivemap_fragment>
	#include <lights_toon_fragment>
	#include <lights_fragment_begin>
	#include <lights_fragment_maps>
	#include <lights_fragment_end>
	#include <aomap_fragment>
	vec3 outgoingLight = reflectedLight.directDiffuse + reflectedLight.indirectDiffuse + totalEmissiveRadiance;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
	#include <dithering_fragment>
}`,iR=`uniform float size;
uniform float scale;
#include <common>
#include <color_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
#ifdef USE_POINTS_UV
	varying vec2 vUv;
	uniform mat3 uvTransform;
#endif
void main() {
	#ifdef USE_POINTS_UV
		vUv = ( uvTransform * vec3( uv, 1 ) ).xy;
	#endif
	#include <color_vertex>
	#include <morphinstance_vertex>
	#include <morphcolor_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <project_vertex>
	gl_PointSize = size;
	#ifdef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) gl_PointSize *= ( scale / - mvPosition.z );
	#endif
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <worldpos_vertex>
	#include <fog_vertex>
}`,rR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <color_pars_fragment>
#include <map_particle_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_particle_fragment>
	#include <color_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
	#include <premultiplied_alpha_fragment>
}`,sR=`#include <common>
#include <batching_pars_vertex>
#include <fog_pars_vertex>
#include <morphtarget_pars_vertex>
#include <skinning_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <shadowmap_pars_vertex>
void main() {
	#include <batching_vertex>
	#include <beginnormal_vertex>
	#include <morphinstance_vertex>
	#include <morphnormal_vertex>
	#include <skinbase_vertex>
	#include <skinnormal_vertex>
	#include <defaultnormal_vertex>
	#include <begin_vertex>
	#include <morphtarget_vertex>
	#include <skinning_vertex>
	#include <project_vertex>
	#include <logdepthbuf_vertex>
	#include <worldpos_vertex>
	#include <shadowmap_vertex>
	#include <fog_vertex>
}`,oR=`uniform vec3 color;
uniform float opacity;
#include <common>
#include <fog_pars_fragment>
#include <bsdfs>
#include <lights_pars_begin>
#include <logdepthbuf_pars_fragment>
#include <shadowmap_pars_fragment>
#include <shadowmask_pars_fragment>
void main() {
	#include <logdepthbuf_fragment>
	gl_FragColor = vec4( color, opacity * ( 1.0 - getShadowMask() ) );
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,aR=`uniform float rotation;
uniform vec2 center;
#include <common>
#include <uv_pars_vertex>
#include <fog_pars_vertex>
#include <logdepthbuf_pars_vertex>
#include <clipping_planes_pars_vertex>
void main() {
	#include <uv_vertex>
	vec4 mvPosition = modelViewMatrix[ 3 ];
	vec2 scale = vec2( length( modelMatrix[ 0 ].xyz ), length( modelMatrix[ 1 ].xyz ) );
	#ifndef USE_SIZEATTENUATION
		bool isPerspective = isPerspectiveMatrix( projectionMatrix );
		if ( isPerspective ) scale *= - mvPosition.z;
	#endif
	vec2 alignedPosition = ( position.xy - ( center - vec2( 0.5 ) ) ) * scale;
	vec2 rotatedPosition;
	rotatedPosition.x = cos( rotation ) * alignedPosition.x - sin( rotation ) * alignedPosition.y;
	rotatedPosition.y = sin( rotation ) * alignedPosition.x + cos( rotation ) * alignedPosition.y;
	mvPosition.xy += rotatedPosition;
	gl_Position = projectionMatrix * mvPosition;
	#include <logdepthbuf_vertex>
	#include <clipping_planes_vertex>
	#include <fog_vertex>
}`,lR=`uniform vec3 diffuse;
uniform float opacity;
#include <common>
#include <uv_pars_fragment>
#include <map_pars_fragment>
#include <alphamap_pars_fragment>
#include <alphatest_pars_fragment>
#include <alphahash_pars_fragment>
#include <fog_pars_fragment>
#include <logdepthbuf_pars_fragment>
#include <clipping_planes_pars_fragment>
void main() {
	vec4 diffuseColor = vec4( diffuse, opacity );
	#include <clipping_planes_fragment>
	vec3 outgoingLight = vec3( 0.0 );
	#include <logdepthbuf_fragment>
	#include <map_fragment>
	#include <alphamap_fragment>
	#include <alphatest_fragment>
	#include <alphahash_fragment>
	outgoingLight = diffuseColor.rgb;
	#include <opaque_fragment>
	#include <tonemapping_fragment>
	#include <colorspace_fragment>
	#include <fog_fragment>
}`,We={alphahash_fragment:PA,alphahash_pars_fragment:DA,alphamap_fragment:LA,alphamap_pars_fragment:IA,alphatest_fragment:NA,alphatest_pars_fragment:UA,aomap_fragment:FA,aomap_pars_fragment:OA,batching_pars_vertex:kA,batching_vertex:BA,begin_vertex:VA,beginnormal_vertex:zA,bsdfs:HA,iridescence_fragment:GA,bumpmap_pars_fragment:WA,clipping_planes_fragment:jA,clipping_planes_pars_fragment:XA,clipping_planes_pars_vertex:YA,clipping_planes_vertex:$A,color_fragment:qA,color_pars_fragment:KA,color_pars_vertex:ZA,color_vertex:QA,common:JA,cube_uv_reflection_fragment:eb,defaultnormal_vertex:tb,displacementmap_pars_vertex:nb,displacementmap_vertex:ib,emissivemap_fragment:rb,emissivemap_pars_fragment:sb,colorspace_fragment:ob,colorspace_pars_fragment:ab,envmap_fragment:lb,envmap_common_pars_fragment:cb,envmap_pars_fragment:ub,envmap_pars_vertex:fb,envmap_physical_pars_fragment:Mb,envmap_vertex:db,fog_vertex:hb,fog_pars_vertex:pb,fog_fragment:mb,fog_pars_fragment:gb,gradientmap_pars_fragment:vb,lightmap_pars_fragment:_b,lights_lambert_fragment:xb,lights_lambert_pars_fragment:yb,lights_pars_begin:Sb,lights_toon_fragment:Eb,lights_toon_pars_fragment:Tb,lights_phong_fragment:wb,lights_phong_pars_fragment:Ab,lights_physical_fragment:bb,lights_physical_pars_fragment:Cb,lights_fragment_begin:Rb,lights_fragment_maps:Pb,lights_fragment_end:Db,logdepthbuf_fragment:Lb,logdepthbuf_pars_fragment:Ib,logdepthbuf_pars_vertex:Nb,logdepthbuf_vertex:Ub,map_fragment:Fb,map_pars_fragment:Ob,map_particle_fragment:kb,map_particle_pars_fragment:Bb,metalnessmap_fragment:Vb,metalnessmap_pars_fragment:zb,morphinstance_vertex:Hb,morphcolor_vertex:Gb,morphnormal_vertex:Wb,morphtarget_pars_vertex:jb,morphtarget_vertex:Xb,normal_fragment_begin:Yb,normal_fragment_maps:$b,normal_pars_fragment:qb,normal_pars_vertex:Kb,normal_vertex:Zb,normalmap_pars_fragment:Qb,clearcoat_normal_fragment_begin:Jb,clearcoat_normal_fragment_maps:eC,clearcoat_pars_fragment:tC,iridescence_pars_fragment:nC,opaque_fragment:iC,packing:rC,premultiplied_alpha_fragment:sC,project_vertex:oC,dithering_fragment:aC,dithering_pars_fragment:lC,roughnessmap_fragment:cC,roughnessmap_pars_fragment:uC,shadowmap_pars_fragment:fC,shadowmap_pars_vertex:dC,shadowmap_vertex:hC,shadowmask_pars_fragment:pC,skinbase_vertex:mC,skinning_pars_vertex:gC,skinning_vertex:vC,skinnormal_vertex:_C,specularmap_fragment:xC,specularmap_pars_fragment:yC,tonemapping_fragment:SC,tonemapping_pars_fragment:MC,transmission_fragment:EC,transmission_pars_fragment:TC,uv_pars_fragment:wC,uv_pars_vertex:AC,uv_vertex:bC,worldpos_vertex:CC,background_vert:RC,background_frag:PC,backgroundCube_vert:DC,backgroundCube_frag:LC,cube_vert:IC,cube_frag:NC,depth_vert:UC,depth_frag:FC,distance_vert:OC,distance_frag:kC,equirect_vert:BC,equirect_frag:VC,linedashed_vert:zC,linedashed_frag:HC,meshbasic_vert:GC,meshbasic_frag:WC,meshlambert_vert:jC,meshlambert_frag:XC,meshmatcap_vert:YC,meshmatcap_frag:$C,meshnormal_vert:qC,meshnormal_frag:KC,meshphong_vert:ZC,meshphong_frag:QC,meshphysical_vert:JC,meshphysical_frag:eR,meshtoon_vert:tR,meshtoon_frag:nR,points_vert:iR,points_frag:rR,shadow_vert:sR,shadow_frag:oR,sprite_vert:aR,sprite_frag:lR},me={common:{diffuse:{value:new ct(16777215)},opacity:{value:1},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}},specularmap:{specularMap:{value:null},specularMapTransform:{value:new He}},envmap:{envMap:{value:null},envMapRotation:{value:new He},flipEnvMap:{value:-1},reflectivity:{value:1},ior:{value:1.5},refractionRatio:{value:.98},dfgLUT:{value:null}},aomap:{aoMap:{value:null},aoMapIntensity:{value:1},aoMapTransform:{value:new He}},lightmap:{lightMap:{value:null},lightMapIntensity:{value:1},lightMapTransform:{value:new He}},bumpmap:{bumpMap:{value:null},bumpMapTransform:{value:new He},bumpScale:{value:1}},normalmap:{normalMap:{value:null},normalMapTransform:{value:new He},normalScale:{value:new pt(1,1)}},displacementmap:{displacementMap:{value:null},displacementMapTransform:{value:new He},displacementScale:{value:1},displacementBias:{value:0}},emissivemap:{emissiveMap:{value:null},emissiveMapTransform:{value:new He}},metalnessmap:{metalnessMap:{value:null},metalnessMapTransform:{value:new He}},roughnessmap:{roughnessMap:{value:null},roughnessMapTransform:{value:new He}},gradientmap:{gradientMap:{value:null}},fog:{fogDensity:{value:25e-5},fogNear:{value:1},fogFar:{value:2e3},fogColor:{value:new ct(16777215)}},lights:{ambientLightColor:{value:[]},lightProbe:{value:[]},directionalLights:{value:[],properties:{direction:{},color:{}}},directionalLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},directionalShadowMap:{value:[]},directionalShadowMatrix:{value:[]},spotLights:{value:[],properties:{color:{},position:{},direction:{},distance:{},coneCos:{},penumbraCos:{},decay:{}}},spotLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{}}},spotLightMap:{value:[]},spotShadowMap:{value:[]},spotLightMatrix:{value:[]},pointLights:{value:[],properties:{color:{},position:{},decay:{},distance:{}}},pointLightShadows:{value:[],properties:{shadowIntensity:1,shadowBias:{},shadowNormalBias:{},shadowRadius:{},shadowMapSize:{},shadowCameraNear:{},shadowCameraFar:{}}},pointShadowMap:{value:[]},pointShadowMatrix:{value:[]},hemisphereLights:{value:[],properties:{direction:{},skyColor:{},groundColor:{}}},rectAreaLights:{value:[],properties:{color:{},position:{},width:{},height:{}}},ltc_1:{value:null},ltc_2:{value:null}},points:{diffuse:{value:new ct(16777215)},opacity:{value:1},size:{value:1},scale:{value:1},map:{value:null},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0},uvTransform:{value:new He}},sprite:{diffuse:{value:new ct(16777215)},opacity:{value:1},center:{value:new pt(.5,.5)},rotation:{value:0},map:{value:null},mapTransform:{value:new He},alphaMap:{value:null},alphaMapTransform:{value:new He},alphaTest:{value:0}}},wi={basic:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.fog]),vertexShader:We.meshbasic_vert,fragmentShader:We.meshbasic_frag},lambert:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ct(0)}}]),vertexShader:We.meshlambert_vert,fragmentShader:We.meshlambert_frag},phong:{uniforms:un([me.common,me.specularmap,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.fog,me.lights,{emissive:{value:new ct(0)},specular:{value:new ct(1118481)},shininess:{value:30}}]),vertexShader:We.meshphong_vert,fragmentShader:We.meshphong_frag},standard:{uniforms:un([me.common,me.envmap,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.roughnessmap,me.metalnessmap,me.fog,me.lights,{emissive:{value:new ct(0)},roughness:{value:1},metalness:{value:0},envMapIntensity:{value:1}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag},toon:{uniforms:un([me.common,me.aomap,me.lightmap,me.emissivemap,me.bumpmap,me.normalmap,me.displacementmap,me.gradientmap,me.fog,me.lights,{emissive:{value:new ct(0)}}]),vertexShader:We.meshtoon_vert,fragmentShader:We.meshtoon_frag},matcap:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,me.fog,{matcap:{value:null}}]),vertexShader:We.meshmatcap_vert,fragmentShader:We.meshmatcap_frag},points:{uniforms:un([me.points,me.fog]),vertexShader:We.points_vert,fragmentShader:We.points_frag},dashed:{uniforms:un([me.common,me.fog,{scale:{value:1},dashSize:{value:1},totalSize:{value:2}}]),vertexShader:We.linedashed_vert,fragmentShader:We.linedashed_frag},depth:{uniforms:un([me.common,me.displacementmap]),vertexShader:We.depth_vert,fragmentShader:We.depth_frag},normal:{uniforms:un([me.common,me.bumpmap,me.normalmap,me.displacementmap,{opacity:{value:1}}]),vertexShader:We.meshnormal_vert,fragmentShader:We.meshnormal_frag},sprite:{uniforms:un([me.sprite,me.fog]),vertexShader:We.sprite_vert,fragmentShader:We.sprite_frag},background:{uniforms:{uvTransform:{value:new He},t2D:{value:null},backgroundIntensity:{value:1}},vertexShader:We.background_vert,fragmentShader:We.background_frag},backgroundCube:{uniforms:{envMap:{value:null},flipEnvMap:{value:-1},backgroundBlurriness:{value:0},backgroundIntensity:{value:1},backgroundRotation:{value:new He}},vertexShader:We.backgroundCube_vert,fragmentShader:We.backgroundCube_frag},cube:{uniforms:{tCube:{value:null},tFlip:{value:-1},opacity:{value:1}},vertexShader:We.cube_vert,fragmentShader:We.cube_frag},equirect:{uniforms:{tEquirect:{value:null}},vertexShader:We.equirect_vert,fragmentShader:We.equirect_frag},distance:{uniforms:un([me.common,me.displacementmap,{referencePosition:{value:new G},nearDistance:{value:1},farDistance:{value:1e3}}]),vertexShader:We.distance_vert,fragmentShader:We.distance_frag},shadow:{uniforms:un([me.lights,me.fog,{color:{value:new ct(0)},opacity:{value:1}}]),vertexShader:We.shadow_vert,fragmentShader:We.shadow_frag}};wi.physical={uniforms:un([wi.standard.uniforms,{clearcoat:{value:0},clearcoatMap:{value:null},clearcoatMapTransform:{value:new He},clearcoatNormalMap:{value:null},clearcoatNormalMapTransform:{value:new He},clearcoatNormalScale:{value:new pt(1,1)},clearcoatRoughness:{value:0},clearcoatRoughnessMap:{value:null},clearcoatRoughnessMapTransform:{value:new He},dispersion:{value:0},iridescence:{value:0},iridescenceMap:{value:null},iridescenceMapTransform:{value:new He},iridescenceIOR:{value:1.3},iridescenceThicknessMinimum:{value:100},iridescenceThicknessMaximum:{value:400},iridescenceThicknessMap:{value:null},iridescenceThicknessMapTransform:{value:new He},sheen:{value:0},sheenColor:{value:new ct(0)},sheenColorMap:{value:null},sheenColorMapTransform:{value:new He},sheenRoughness:{value:1},sheenRoughnessMap:{value:null},sheenRoughnessMapTransform:{value:new He},transmission:{value:0},transmissionMap:{value:null},transmissionMapTransform:{value:new He},transmissionSamplerSize:{value:new pt},transmissionSamplerMap:{value:null},thickness:{value:0},thicknessMap:{value:null},thicknessMapTransform:{value:new He},attenuationDistance:{value:0},attenuationColor:{value:new ct(0)},specularColor:{value:new ct(1,1,1)},specularColorMap:{value:null},specularColorMapTransform:{value:new He},specularIntensity:{value:1},specularIntensityMap:{value:null},specularIntensityMapTransform:{value:new He},anisotropyVector:{value:new pt},anisotropyMap:{value:null},anisotropyMapTransform:{value:new He}}]),vertexShader:We.meshphysical_vert,fragmentShader:We.meshphysical_frag};const Xl={r:0,b:0,g:0},Yr=new ir,cR=new Nt;function uR(t,e,n,i,r,s,o){const a=new ct(0);let l=s===!0?0:1,c,f,u=null,h=0,p=null;function g(_){let S=_.isScene===!0?_.background:null;return S&&S.isTexture&&(S=(_.backgroundBlurriness>0?n:e).get(S)),S}function x(_){let S=!1;const E=g(_);E===null?d(a,l):E&&E.isColor&&(d(E,1),S=!0);const A=t.xr.getEnvironmentBlendMode();A==="additive"?i.buffers.color.setClear(0,0,0,1,o):A==="alpha-blend"&&i.buffers.color.setClear(0,0,0,0,o),(t.autoClear||S)&&(i.buffers.depth.setTest(!0),i.buffers.depth.setMask(!0),i.buffers.color.setMask(!0),t.clear(t.autoClearColor,t.autoClearDepth,t.autoClearStencil))}function m(_,S){const E=g(S);E&&(E.isCubeTexture||E.mapping===Eu)?(f===void 0&&(f=new rr(new el(1,1,1),new Ui({name:"BackgroundCubeMaterial",uniforms:To(wi.backgroundCube.uniforms),vertexShader:wi.backgroundCube.vertexShader,fragmentShader:wi.backgroundCube.fragmentShader,side:Rn,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),f.geometry.deleteAttribute("normal"),f.geometry.deleteAttribute("uv"),f.onBeforeRender=function(A,b,R){this.matrixWorld.copyPosition(R.matrixWorld)},Object.defineProperty(f.material,"envMap",{get:function(){return this.uniforms.envMap.value}}),r.update(f)),Yr.copy(S.backgroundRotation),Yr.x*=-1,Yr.y*=-1,Yr.z*=-1,E.isCubeTexture&&E.isRenderTargetTexture===!1&&(Yr.y*=-1,Yr.z*=-1),f.material.uniforms.envMap.value=E,f.material.uniforms.flipEnvMap.value=E.isCubeTexture&&E.isRenderTargetTexture===!1?-1:1,f.material.uniforms.backgroundBlurriness.value=S.backgroundBlurriness,f.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,f.material.uniforms.backgroundRotation.value.setFromMatrix4(cR.makeRotationFromEuler(Yr)),f.material.toneMapped=Qe.getTransfer(E.colorSpace)!==lt,(u!==E||h!==E.version||p!==t.toneMapping)&&(f.material.needsUpdate=!0,u=E,h=E.version,p=t.toneMapping),f.layers.enableAll(),_.unshift(f,f.geometry,f.material,0,0,null)):E&&E.isTexture&&(c===void 0&&(c=new rr(new wu(2,2),new Ui({name:"BackgroundMaterial",uniforms:To(wi.background.uniforms),vertexShader:wi.background.vertexShader,fragmentShader:wi.background.fragmentShader,side:Ur,depthTest:!1,depthWrite:!1,fog:!1,allowOverride:!1})),c.geometry.deleteAttribute("normal"),Object.defineProperty(c.material,"map",{get:function(){return this.uniforms.t2D.value}}),r.update(c)),c.material.uniforms.t2D.value=E,c.material.uniforms.backgroundIntensity.value=S.backgroundIntensity,c.material.toneMapped=Qe.getTransfer(E.colorSpace)!==lt,E.matrixAutoUpdate===!0&&E.updateMatrix(),c.material.uniforms.uvTransform.value.copy(E.matrix),(u!==E||h!==E.version||p!==t.toneMapping)&&(c.material.needsUpdate=!0,u=E,h=E.version,p=t.toneMapping),c.layers.enableAll(),_.unshift(c,c.geometry,c.material,0,0,null))}function d(_,S){_.getRGB(Xl,AS(t)),i.buffers.color.setClear(Xl.r,Xl.g,Xl.b,S,o)}function v(){f!==void 0&&(f.geometry.dispose(),f.material.dispose(),f=void 0),c!==void 0&&(c.geometry.dispose(),c.material.dispose(),c=void 0)}return{getClearColor:function(){return a},setClearColor:function(_,S=1){a.set(_),l=S,d(a,l)},getClearAlpha:function(){return l},setClearAlpha:function(_){l=_,d(a,l)},render:x,addToRenderList:m,dispose:v}}function fR(t,e){const n=t.getParameter(t.MAX_VERTEX_ATTRIBS),i={},r=h(null);let s=r,o=!1;function a(T,L,H,N,X){let $=!1;const k=u(N,H,L);s!==k&&(s=k,c(s.object)),$=p(T,N,H,X),$&&g(T,N,H,X),X!==null&&e.update(X,t.ELEMENT_ARRAY_BUFFER),($||o)&&(o=!1,S(T,L,H,N),X!==null&&t.bindBuffer(t.ELEMENT_ARRAY_BUFFER,e.get(X).buffer))}function l(){return t.createVertexArray()}function c(T){return t.bindVertexArray(T)}function f(T){return t.deleteVertexArray(T)}function u(T,L,H){const N=H.wireframe===!0;let X=i[T.id];X===void 0&&(X={},i[T.id]=X);let $=X[L.id];$===void 0&&($={},X[L.id]=$);let k=$[N];return k===void 0&&(k=h(l()),$[N]=k),k}function h(T){const L=[],H=[],N=[];for(let X=0;X<n;X++)L[X]=0,H[X]=0,N[X]=0;return{geometry:null,program:null,wireframe:!1,newAttributes:L,enabledAttributes:H,attributeDivisors:N,object:T,attributes:{},index:null}}function p(T,L,H,N){const X=s.attributes,$=L.attributes;let k=0;const O=H.getAttributes();for(const P in O)if(O[P].location>=0){const Y=X[P];let te=$[P];if(te===void 0&&(P==="instanceMatrix"&&T.instanceMatrix&&(te=T.instanceMatrix),P==="instanceColor"&&T.instanceColor&&(te=T.instanceColor)),Y===void 0||Y.attribute!==te||te&&Y.data!==te.data)return!0;k++}return s.attributesNum!==k||s.index!==N}function g(T,L,H,N){const X={},$=L.attributes;let k=0;const O=H.getAttributes();for(const P in O)if(O[P].location>=0){let Y=$[P];Y===void 0&&(P==="instanceMatrix"&&T.instanceMatrix&&(Y=T.instanceMatrix),P==="instanceColor"&&T.instanceColor&&(Y=T.instanceColor));const te={};te.attribute=Y,Y&&Y.data&&(te.data=Y.data),X[P]=te,k++}s.attributes=X,s.attributesNum=k,s.index=N}function x(){const T=s.newAttributes;for(let L=0,H=T.length;L<H;L++)T[L]=0}function m(T){d(T,0)}function d(T,L){const H=s.newAttributes,N=s.enabledAttributes,X=s.attributeDivisors;H[T]=1,N[T]===0&&(t.enableVertexAttribArray(T),N[T]=1),X[T]!==L&&(t.vertexAttribDivisor(T,L),X[T]=L)}function v(){const T=s.newAttributes,L=s.enabledAttributes;for(let H=0,N=L.length;H<N;H++)L[H]!==T[H]&&(t.disableVertexAttribArray(H),L[H]=0)}function _(T,L,H,N,X,$,k){k===!0?t.vertexAttribIPointer(T,L,H,X,$):t.vertexAttribPointer(T,L,H,N,X,$)}function S(T,L,H,N){x();const X=N.attributes,$=H.getAttributes(),k=L.defaultAttributeValues;for(const O in $){const P=$[O];if(P.location>=0){let K=X[O];if(K===void 0&&(O==="instanceMatrix"&&T.instanceMatrix&&(K=T.instanceMatrix),O==="instanceColor"&&T.instanceColor&&(K=T.instanceColor)),K!==void 0){const Y=K.normalized,te=K.itemSize,be=e.get(K);if(be===void 0)continue;const he=be.buffer,Ie=be.type,Ne=be.bytesPerElement,q=Ie===t.INT||Ie===t.UNSIGNED_INT||K.gpuType===gm;if(K.isInterleavedBufferAttribute){const J=K.data,oe=J.stride,Oe=K.offset;if(J.isInstancedInterleavedBuffer){for(let Me=0;Me<P.locationSize;Me++)d(P.location+Me,J.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=J.meshPerAttribute*J.count)}else for(let Me=0;Me<P.locationSize;Me++)m(P.location+Me);t.bindBuffer(t.ARRAY_BUFFER,he);for(let Me=0;Me<P.locationSize;Me++)_(P.location+Me,te/P.locationSize,Ie,Y,oe*Ne,(Oe+te/P.locationSize*Me)*Ne,q)}else{if(K.isInstancedBufferAttribute){for(let J=0;J<P.locationSize;J++)d(P.location+J,K.meshPerAttribute);T.isInstancedMesh!==!0&&N._maxInstanceCount===void 0&&(N._maxInstanceCount=K.meshPerAttribute*K.count)}else for(let J=0;J<P.locationSize;J++)m(P.location+J);t.bindBuffer(t.ARRAY_BUFFER,he);for(let J=0;J<P.locationSize;J++)_(P.location+J,te/P.locationSize,Ie,Y,te*Ne,te/P.locationSize*J*Ne,q)}}else if(k!==void 0){const Y=k[O];if(Y!==void 0)switch(Y.length){case 2:t.vertexAttrib2fv(P.location,Y);break;case 3:t.vertexAttrib3fv(P.location,Y);break;case 4:t.vertexAttrib4fv(P.location,Y);break;default:t.vertexAttrib1fv(P.location,Y)}}}}v()}function E(){R();for(const T in i){const L=i[T];for(const H in L){const N=L[H];for(const X in N)f(N[X].object),delete N[X];delete L[H]}delete i[T]}}function A(T){if(i[T.id]===void 0)return;const L=i[T.id];for(const H in L){const N=L[H];for(const X in N)f(N[X].object),delete N[X];delete L[H]}delete i[T.id]}function b(T){for(const L in i){const H=i[L];if(H[T.id]===void 0)continue;const N=H[T.id];for(const X in N)f(N[X].object),delete N[X];delete H[T.id]}}function R(){M(),o=!0,s!==r&&(s=r,c(s.object))}function M(){r.geometry=null,r.program=null,r.wireframe=!1}return{setup:a,reset:R,resetDefaultState:M,dispose:E,releaseStatesOfGeometry:A,releaseStatesOfProgram:b,initAttributes:x,enableAttribute:m,disableUnusedAttributes:v}}function dR(t,e,n){let i;function r(c){i=c}function s(c,f){t.drawArrays(i,c,f),n.update(f,i,1)}function o(c,f,u){u!==0&&(t.drawArraysInstanced(i,c,f,u),n.update(f,i,u))}function a(c,f,u){if(u===0)return;e.get("WEBGL_multi_draw").multiDrawArraysWEBGL(i,c,0,f,0,u);let p=0;for(let g=0;g<u;g++)p+=f[g];n.update(p,i,1)}function l(c,f,u,h){if(u===0)return;const p=e.get("WEBGL_multi_draw");if(p===null)for(let g=0;g<c.length;g++)o(c[g],f[g],h[g]);else{p.multiDrawArraysInstancedWEBGL(i,c,0,f,0,h,0,u);let g=0;for(let x=0;x<u;x++)g+=f[x]*h[x];n.update(g,i,1)}}this.setMode=r,this.render=s,this.renderInstances=o,this.renderMultiDraw=a,this.renderMultiDrawInstances=l}function hR(t,e,n,i){let r;function s(){if(r!==void 0)return r;if(e.has("EXT_texture_filter_anisotropic")===!0){const b=e.get("EXT_texture_filter_anisotropic");r=t.getParameter(b.MAX_TEXTURE_MAX_ANISOTROPY_EXT)}else r=0;return r}function o(b){return!(b!==fi&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_FORMAT))}function a(b){const R=b===tr&&(e.has("EXT_color_buffer_half_float")||e.has("EXT_color_buffer_float"));return!(b!==$n&&i.convert(b)!==t.getParameter(t.IMPLEMENTATION_COLOR_READ_TYPE)&&b!==bi&&!R)}function l(b){if(b==="highp"){if(t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.HIGH_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.HIGH_FLOAT).precision>0)return"highp";b="mediump"}return b==="mediump"&&t.getShaderPrecisionFormat(t.VERTEX_SHADER,t.MEDIUM_FLOAT).precision>0&&t.getShaderPrecisionFormat(t.FRAGMENT_SHADER,t.MEDIUM_FLOAT).precision>0?"mediump":"lowp"}let c=n.precision!==void 0?n.precision:"highp";const f=l(c);f!==c&&(Be("WebGLRenderer:",c,"not supported, using",f,"instead."),c=f);const u=n.logarithmicDepthBuffer===!0,h=n.reversedDepthBuffer===!0&&e.has("EXT_clip_control"),p=t.getParameter(t.MAX_TEXTURE_IMAGE_UNITS),g=t.getParameter(t.MAX_VERTEX_TEXTURE_IMAGE_UNITS),x=t.getParameter(t.MAX_TEXTURE_SIZE),m=t.getParameter(t.MAX_CUBE_MAP_TEXTURE_SIZE),d=t.getParameter(t.MAX_VERTEX_ATTRIBS),v=t.getParameter(t.MAX_VERTEX_UNIFORM_VECTORS),_=t.getParameter(t.MAX_VARYING_VECTORS),S=t.getParameter(t.MAX_FRAGMENT_UNIFORM_VECTORS),E=t.getParameter(t.MAX_SAMPLES),A=t.getParameter(t.SAMPLES);return{isWebGL2:!0,getMaxAnisotropy:s,getMaxPrecision:l,textureFormatReadable:o,textureTypeReadable:a,precision:c,logarithmicDepthBuffer:u,reversedDepthBuffer:h,maxTextures:p,maxVertexTextures:g,maxTextureSize:x,maxCubemapSize:m,maxAttributes:d,maxVertexUniforms:v,maxVaryings:_,maxFragmentUniforms:S,maxSamples:E,samples:A}}function pR(t){const e=this;let n=null,i=0,r=!1,s=!1;const o=new Qr,a=new He,l={value:null,needsUpdate:!1};this.uniform=l,this.numPlanes=0,this.numIntersection=0,this.init=function(u,h){const p=u.length!==0||h||i!==0||r;return r=h,i=u.length,p},this.beginShadows=function(){s=!0,f(null)},this.endShadows=function(){s=!1},this.setGlobalState=function(u,h){n=f(u,h,0)},this.setState=function(u,h,p){const g=u.clippingPlanes,x=u.clipIntersection,m=u.clipShadows,d=t.get(u);if(!r||g===null||g.length===0||s&&!m)s?f(null):c();else{const v=s?0:i,_=v*4;let S=d.clippingState||null;l.value=S,S=f(g,h,_,p);for(let E=0;E!==_;++E)S[E]=n[E];d.clippingState=S,this.numIntersection=x?this.numPlanes:0,this.numPlanes+=v}};function c(){l.value!==n&&(l.value=n,l.needsUpdate=i>0),e.numPlanes=i,e.numIntersection=0}function f(u,h,p,g){const x=u!==null?u.length:0;let m=null;if(x!==0){if(m=l.value,g!==!0||m===null){const d=p+x*4,v=h.matrixWorldInverse;a.getNormalMatrix(v),(m===null||m.length<d)&&(m=new Float32Array(d));for(let _=0,S=p;_!==x;++_,S+=4)o.copy(u[_]).applyMatrix4(v,a),o.normal.toArray(m,S),m[S+3]=o.constant}l.value=m,l.needsUpdate=!0}return e.numPlanes=x,e.numIntersection=0,m}}function mR(t){let e=new WeakMap;function n(o,a){return a===ch?o.mapping=vs:a===uh&&(o.mapping=So),o}function i(o){if(o&&o.isTexture){const a=o.mapping;if(a===ch||a===uh)if(e.has(o)){const l=e.get(o).texture;return n(l,o.mapping)}else{const l=o.image;if(l&&l.height>0){const c=new RS(l.height);return c.fromEquirectangularTexture(t,o),e.set(o,c),o.addEventListener("dispose",r),n(c.texture,o.mapping)}else return null}}return o}function r(o){const a=o.target;a.removeEventListener("dispose",r);const l=e.get(a);l!==void 0&&(e.delete(a),l.dispose())}function s(){e=new WeakMap}return{get:i,dispose:s}}const Er=4,j0=[.125,.215,.35,.446,.526,.582],ts=20,gR=256,qo=new IS,X0=new ct;let Uf=null,Ff=0,Of=0,kf=!1;const vR=new G;class Y0{constructor(e){this._renderer=e,this._pingPongRenderTarget=null,this._lodMax=0,this._cubeSize=0,this._sizeLods=[],this._sigmas=[],this._lodMeshes=[],this._backgroundBox=null,this._cubemapMaterial=null,this._equirectMaterial=null,this._blurMaterial=null,this._ggxMaterial=null}fromScene(e,n=0,i=.1,r=100,s={}){const{size:o=256,position:a=vR}=s;Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1,this._setSize(o);const l=this._allocateTargets();return l.depthBuffer=!0,this._sceneToCubeUV(e,i,r,l,a),n>0&&this._blur(l,0,0,n),this._applyPMREM(l),this._cleanup(l),l}fromEquirectangular(e,n=null){return this._fromTexture(e,n)}fromCubemap(e,n=null){return this._fromTexture(e,n)}compileCubemapShader(){this._cubemapMaterial===null&&(this._cubemapMaterial=K0(),this._compileMaterial(this._cubemapMaterial))}compileEquirectangularShader(){this._equirectMaterial===null&&(this._equirectMaterial=q0(),this._compileMaterial(this._equirectMaterial))}dispose(){this._dispose(),this._cubemapMaterial!==null&&this._cubemapMaterial.dispose(),this._equirectMaterial!==null&&this._equirectMaterial.dispose(),this._backgroundBox!==null&&(this._backgroundBox.geometry.dispose(),this._backgroundBox.material.dispose())}_setSize(e){this._lodMax=Math.floor(Math.log2(e)),this._cubeSize=Math.pow(2,this._lodMax)}_dispose(){this._blurMaterial!==null&&this._blurMaterial.dispose(),this._ggxMaterial!==null&&this._ggxMaterial.dispose(),this._pingPongRenderTarget!==null&&this._pingPongRenderTarget.dispose();for(let e=0;e<this._lodMeshes.length;e++)this._lodMeshes[e].geometry.dispose()}_cleanup(e){this._renderer.setRenderTarget(Uf,Ff,Of),this._renderer.xr.enabled=kf,e.scissorTest=!1,Fs(e,0,0,e.width,e.height)}_fromTexture(e,n){e.mapping===vs||e.mapping===So?this._setSize(e.image.length===0?16:e.image[0].width||e.image[0].image.width):this._setSize(e.image.width/4),Uf=this._renderer.getRenderTarget(),Ff=this._renderer.getActiveCubeFace(),Of=this._renderer.getActiveMipmapLevel(),kf=this._renderer.xr.enabled,this._renderer.xr.enabled=!1;const i=n||this._allocateTargets();return this._textureToCubeUV(e,i),this._applyPMREM(i),this._cleanup(i),i}_allocateTargets(){const e=3*Math.max(this._cubeSize,112),n=4*this._cubeSize,i={magFilter:sn,minFilter:sn,generateMipmaps:!1,type:tr,format:fi,colorSpace:Eo,depthBuffer:!1},r=$0(e,n,i);if(this._pingPongRenderTarget===null||this._pingPongRenderTarget.width!==e||this._pingPongRenderTarget.height!==n){this._pingPongRenderTarget!==null&&this._dispose(),this._pingPongRenderTarget=$0(e,n,i);const{_lodMax:s}=this;({lodMeshes:this._lodMeshes,sizeLods:this._sizeLods,sigmas:this._sigmas}=_R(s)),this._blurMaterial=yR(s,e,n),this._ggxMaterial=xR(s,e,n)}return r}_compileMaterial(e){const n=new rr(new _i,e);this._renderer.compile(n,qo)}_sceneToCubeUV(e,n,i,r,s){const l=new Yn(90,1,n,i),c=[1,-1,1,1,1,1],f=[1,1,1,-1,-1,-1],u=this._renderer,h=u.autoClear,p=u.toneMapping;u.getClearColor(X0),u.toneMapping=Di,u.autoClear=!1,u.state.buffers.depth.getReversed()&&(u.setRenderTarget(r),u.clearDepth(),u.setRenderTarget(null)),this._backgroundBox===null&&(this._backgroundBox=new rr(new el,new ES({name:"PMREM.Background",side:Rn,depthWrite:!1,depthTest:!1})));const x=this._backgroundBox,m=x.material;let d=!1;const v=e.background;v?v.isColor&&(m.color.copy(v),e.background=null,d=!0):(m.color.copy(X0),d=!0);for(let _=0;_<6;_++){const S=_%3;S===0?(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x+f[_],s.y,s.z)):S===1?(l.up.set(0,0,c[_]),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y+f[_],s.z)):(l.up.set(0,c[_],0),l.position.set(s.x,s.y,s.z),l.lookAt(s.x,s.y,s.z+f[_]));const E=this._cubeSize;Fs(r,S*E,_>2?E:0,E,E),u.setRenderTarget(r),d&&u.render(x,l),u.render(e,l)}u.toneMapping=p,u.autoClear=h,e.background=v}_textureToCubeUV(e,n){const i=this._renderer,r=e.mapping===vs||e.mapping===So;r?(this._cubemapMaterial===null&&(this._cubemapMaterial=K0()),this._cubemapMaterial.uniforms.flipEnvMap.value=e.isRenderTargetTexture===!1?-1:1):this._equirectMaterial===null&&(this._equirectMaterial=q0());const s=r?this._cubemapMaterial:this._equirectMaterial,o=this._lodMeshes[0];o.material=s;const a=s.uniforms;a.envMap.value=e;const l=this._cubeSize;Fs(n,0,0,3*l,2*l),i.setRenderTarget(n),i.render(o,qo)}_applyPMREM(e){const n=this._renderer,i=n.autoClear;n.autoClear=!1;const r=this._lodMeshes.length;for(let s=1;s<r;s++)this._applyGGXFilter(e,s-1,s);n.autoClear=i}_applyGGXFilter(e,n,i){const r=this._renderer,s=this._pingPongRenderTarget,o=this._ggxMaterial,a=this._lodMeshes[i];a.material=o;const l=o.uniforms,c=i/(this._lodMeshes.length-1),f=n/(this._lodMeshes.length-1),u=Math.sqrt(c*c-f*f),h=0+c*1.25,p=u*h,{_lodMax:g}=this,x=this._sizeLods[i],m=3*x*(i>g-Er?i-g+Er:0),d=4*(this._cubeSize-x);l.envMap.value=e.texture,l.roughness.value=p,l.mipInt.value=g-n,Fs(s,m,d,3*x,2*x),r.setRenderTarget(s),r.render(a,qo),l.envMap.value=s.texture,l.roughness.value=0,l.mipInt.value=g-i,Fs(e,m,d,3*x,2*x),r.setRenderTarget(e),r.render(a,qo)}_blur(e,n,i,r,s){const o=this._pingPongRenderTarget;this._halfBlur(e,o,n,i,r,"latitudinal",s),this._halfBlur(o,e,i,i,r,"longitudinal",s)}_halfBlur(e,n,i,r,s,o,a){const l=this._renderer,c=this._blurMaterial;o!=="latitudinal"&&o!=="longitudinal"&&it("blur direction must be either latitudinal or longitudinal!");const f=3,u=this._lodMeshes[r];u.material=c;const h=c.uniforms,p=this._sizeLods[i]-1,g=isFinite(s)?Math.PI/(2*p):2*Math.PI/(2*ts-1),x=s/g,m=isFinite(s)?1+Math.floor(f*x):ts;m>ts&&Be(`sigmaRadians, ${s}, is too large and will clip, as it requested ${m} samples when the maximum is set to ${ts}`);const d=[];let v=0;for(let b=0;b<ts;++b){const R=b/x,M=Math.exp(-R*R/2);d.push(M),b===0?v+=M:b<m&&(v+=2*M)}for(let b=0;b<d.length;b++)d[b]=d[b]/v;h.envMap.value=e.texture,h.samples.value=m,h.weights.value=d,h.latitudinal.value=o==="latitudinal",a&&(h.poleAxis.value=a);const{_lodMax:_}=this;h.dTheta.value=g,h.mipInt.value=_-i;const S=this._sizeLods[r],E=3*S*(r>_-Er?r-_+Er:0),A=4*(this._cubeSize-S);Fs(n,E,A,3*S,2*S),l.setRenderTarget(n),l.render(u,qo)}}function _R(t){const e=[],n=[],i=[];let r=t;const s=t-Er+1+j0.length;for(let o=0;o<s;o++){const a=Math.pow(2,r);e.push(a);let l=1/a;o>t-Er?l=j0[o-t+Er-1]:o===0&&(l=0),n.push(l);const c=1/(a-2),f=-c,u=1+c,h=[f,f,u,f,u,u,f,f,u,u,f,u],p=6,g=6,x=3,m=2,d=1,v=new Float32Array(x*g*p),_=new Float32Array(m*g*p),S=new Float32Array(d*g*p);for(let A=0;A<p;A++){const b=A%3*2/3-1,R=A>2?0:-1,M=[b,R,0,b+2/3,R,0,b+2/3,R+1,0,b,R,0,b+2/3,R+1,0,b,R+1,0];v.set(M,x*g*A),_.set(h,m*g*A);const T=[A,A,A,A,A,A];S.set(T,d*g*A)}const E=new _i;E.setAttribute("position",new wn(v,x)),E.setAttribute("uv",new wn(_,m)),E.setAttribute("faceIndex",new wn(S,d)),i.push(new rr(E,null)),r>Er&&r--}return{lodMeshes:i,sizeLods:e,sigmas:n}}function $0(t,e,n){const i=new Li(t,e,n);return i.texture.mapping=Eu,i.texture.name="PMREM.cubeUv",i.scissorTest=!0,i}function Fs(t,e,n,i,r){t.viewport.set(e,n,i,r),t.scissor.set(e,n,i,r)}function xR(t,e,n){return new Ui({name:"PMREMGGXConvolution",defines:{GGX_SAMPLES:gR,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},roughness:{value:0},mipInt:{value:0}},vertexShader:Au(),fragmentShader:`

			precision highp float;
			precision highp int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform float roughness;
			uniform float mipInt;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			#define PI 3.14159265359

			// Van der Corput radical inverse
			float radicalInverse_VdC(uint bits) {
				bits = (bits << 16u) | (bits >> 16u);
				bits = ((bits & 0x55555555u) << 1u) | ((bits & 0xAAAAAAAAu) >> 1u);
				bits = ((bits & 0x33333333u) << 2u) | ((bits & 0xCCCCCCCCu) >> 2u);
				bits = ((bits & 0x0F0F0F0Fu) << 4u) | ((bits & 0xF0F0F0F0u) >> 4u);
				bits = ((bits & 0x00FF00FFu) << 8u) | ((bits & 0xFF00FF00u) >> 8u);
				return float(bits) * 2.3283064365386963e-10; // / 0x100000000
			}

			// Hammersley sequence
			vec2 hammersley(uint i, uint N) {
				return vec2(float(i) / float(N), radicalInverse_VdC(i));
			}

			// GGX VNDF importance sampling (Eric Heitz 2018)
			// "Sampling the GGX Distribution of Visible Normals"
			// https://jcgt.org/published/0007/04/01/
			vec3 importanceSampleGGX_VNDF(vec2 Xi, vec3 V, float roughness) {
				float alpha = roughness * roughness;

				// Section 3.2: Transform view direction to hemisphere configuration
				vec3 Vh = normalize(vec3(alpha * V.x, alpha * V.y, V.z));

				// Section 4.1: Orthonormal basis
				float lensq = Vh.x * Vh.x + Vh.y * Vh.y;
				vec3 T1 = lensq > 0.0 ? vec3(-Vh.y, Vh.x, 0.0) / sqrt(lensq) : vec3(1.0, 0.0, 0.0);
				vec3 T2 = cross(Vh, T1);

				// Section 4.2: Parameterization of projected area
				float r = sqrt(Xi.x);
				float phi = 2.0 * PI * Xi.y;
				float t1 = r * cos(phi);
				float t2 = r * sin(phi);
				float s = 0.5 * (1.0 + Vh.z);
				t2 = (1.0 - s) * sqrt(1.0 - t1 * t1) + s * t2;

				// Section 4.3: Reprojection onto hemisphere
				vec3 Nh = t1 * T1 + t2 * T2 + sqrt(max(0.0, 1.0 - t1 * t1 - t2 * t2)) * Vh;

				// Section 3.4: Transform back to ellipsoid configuration
				return normalize(vec3(alpha * Nh.x, alpha * Nh.y, max(0.0, Nh.z)));
			}

			void main() {
				vec3 N = normalize(vOutputDirection);
				vec3 V = N; // Assume view direction equals normal for pre-filtering

				vec3 prefilteredColor = vec3(0.0);
				float totalWeight = 0.0;

				// For very low roughness, just sample the environment directly
				if (roughness < 0.001) {
					gl_FragColor = vec4(bilinearCubeUV(envMap, N, mipInt), 1.0);
					return;
				}

				// Tangent space basis for VNDF sampling
				vec3 up = abs(N.z) < 0.999 ? vec3(0.0, 0.0, 1.0) : vec3(1.0, 0.0, 0.0);
				vec3 tangent = normalize(cross(up, N));
				vec3 bitangent = cross(N, tangent);

				for(uint i = 0u; i < uint(GGX_SAMPLES); i++) {
					vec2 Xi = hammersley(i, uint(GGX_SAMPLES));

					// For PMREM, V = N, so in tangent space V is always (0, 0, 1)
					vec3 H_tangent = importanceSampleGGX_VNDF(Xi, vec3(0.0, 0.0, 1.0), roughness);

					// Transform H back to world space
					vec3 H = normalize(tangent * H_tangent.x + bitangent * H_tangent.y + N * H_tangent.z);
					vec3 L = normalize(2.0 * dot(V, H) * H - V);

					float NdotL = max(dot(N, L), 0.0);

					if(NdotL > 0.0) {
						// Sample environment at fixed mip level
						// VNDF importance sampling handles the distribution filtering
						vec3 sampleColor = bilinearCubeUV(envMap, L, mipInt);

						// Weight by NdotL for the split-sum approximation
						// VNDF PDF naturally accounts for the visible microfacet distribution
						prefilteredColor += sampleColor * NdotL;
						totalWeight += NdotL;
					}
				}

				if (totalWeight > 0.0) {
					prefilteredColor = prefilteredColor / totalWeight;
				}

				gl_FragColor = vec4(prefilteredColor, 1.0);
			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function yR(t,e,n){const i=new Float32Array(ts),r=new G(0,1,0);return new Ui({name:"SphericalGaussianBlur",defines:{n:ts,CUBEUV_TEXEL_WIDTH:1/e,CUBEUV_TEXEL_HEIGHT:1/n,CUBEUV_MAX_MIP:`${t}.0`},uniforms:{envMap:{value:null},samples:{value:1},weights:{value:i},latitudinal:{value:!1},dTheta:{value:0},mipInt:{value:0},poleAxis:{value:r}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;
			uniform int samples;
			uniform float weights[ n ];
			uniform bool latitudinal;
			uniform float dTheta;
			uniform float mipInt;
			uniform vec3 poleAxis;

			#define ENVMAP_TYPE_CUBE_UV
			#include <cube_uv_reflection_fragment>

			vec3 getSample( float theta, vec3 axis ) {

				float cosTheta = cos( theta );
				// Rodrigues' axis-angle rotation
				vec3 sampleDirection = vOutputDirection * cosTheta
					+ cross( axis, vOutputDirection ) * sin( theta )
					+ axis * dot( axis, vOutputDirection ) * ( 1.0 - cosTheta );

				return bilinearCubeUV( envMap, sampleDirection, mipInt );

			}

			void main() {

				vec3 axis = latitudinal ? poleAxis : cross( poleAxis, vOutputDirection );

				if ( all( equal( axis, vec3( 0.0 ) ) ) ) {

					axis = vec3( vOutputDirection.z, 0.0, - vOutputDirection.x );

				}

				axis = normalize( axis );

				gl_FragColor = vec4( 0.0, 0.0, 0.0, 1.0 );
				gl_FragColor.rgb += weights[ 0 ] * getSample( 0.0, axis );

				for ( int i = 1; i < n; i++ ) {

					if ( i >= samples ) {

						break;

					}

					float theta = dTheta * float( i );
					gl_FragColor.rgb += weights[ i ] * getSample( -1.0 * theta, axis );
					gl_FragColor.rgb += weights[ i ] * getSample( theta, axis );

				}

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function q0(){return new Ui({name:"EquirectangularToCubeUV",uniforms:{envMap:{value:null}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			varying vec3 vOutputDirection;

			uniform sampler2D envMap;

			#include <common>

			void main() {

				vec3 outputDirection = normalize( vOutputDirection );
				vec2 uv = equirectUv( outputDirection );

				gl_FragColor = vec4( texture2D ( envMap, uv ).rgb, 1.0 );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function K0(){return new Ui({name:"CubemapToCubeUV",uniforms:{envMap:{value:null},flipEnvMap:{value:-1}},vertexShader:Au(),fragmentShader:`

			precision mediump float;
			precision mediump int;

			uniform float flipEnvMap;

			varying vec3 vOutputDirection;

			uniform samplerCube envMap;

			void main() {

				gl_FragColor = textureCube( envMap, vec3( flipEnvMap * vOutputDirection.x, vOutputDirection.yz ) );

			}
		`,blending:$i,depthTest:!1,depthWrite:!1})}function Au(){return`

		precision mediump float;
		precision mediump int;

		attribute float faceIndex;

		varying vec3 vOutputDirection;

		// RH coordinate system; PMREM face-indexing convention
		vec3 getDirection( vec2 uv, float face ) {

			uv = 2.0 * uv - 1.0;

			vec3 direction = vec3( uv, 1.0 );

			if ( face == 0.0 ) {

				direction = direction.zyx; // ( 1, v, u ) pos x

			} else if ( face == 1.0 ) {

				direction = direction.xzy;
				direction.xz *= -1.0; // ( -u, 1, -v ) pos y

			} else if ( face == 2.0 ) {

				direction.x *= -1.0; // ( -u, v, 1 ) pos z

			} else if ( face == 3.0 ) {

				direction = direction.zyx;
				direction.xz *= -1.0; // ( -1, v, -u ) neg x

			} else if ( face == 4.0 ) {

				direction = direction.xzy;
				direction.xy *= -1.0; // ( -u, -1, v ) neg y

			} else if ( face == 5.0 ) {

				direction.z *= -1.0; // ( u, v, -1 ) neg z

			}

			return direction;

		}

		void main() {

			vOutputDirection = getDirection( uv, faceIndex );
			gl_Position = vec4( position, 1.0 );

		}
	`}function SR(t){let e=new WeakMap,n=null;function i(a){if(a&&a.isTexture){const l=a.mapping,c=l===ch||l===uh,f=l===vs||l===So;if(c||f){let u=e.get(a);const h=u!==void 0?u.texture.pmremVersion:0;if(a.isRenderTargetTexture&&a.pmremVersion!==h)return n===null&&(n=new Y0(t)),u=c?n.fromEquirectangular(a,u):n.fromCubemap(a,u),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),u.texture;if(u!==void 0)return u.texture;{const p=a.image;return c&&p&&p.height>0||f&&p&&r(p)?(n===null&&(n=new Y0(t)),u=c?n.fromEquirectangular(a):n.fromCubemap(a),u.texture.pmremVersion=a.pmremVersion,e.set(a,u),a.addEventListener("dispose",s),u.texture):null}}}return a}function r(a){let l=0;const c=6;for(let f=0;f<c;f++)a[f]!==void 0&&l++;return l===c}function s(a){const l=a.target;l.removeEventListener("dispose",s);const c=e.get(l);c!==void 0&&(e.delete(l),c.dispose())}function o(){e=new WeakMap,n!==null&&(n.dispose(),n=null)}return{get:i,dispose:o}}function MR(t){const e={};function n(i){if(e[i]!==void 0)return e[i];const r=t.getExtension(i);return e[i]=r,r}return{has:function(i){return n(i)!==null},init:function(){n("EXT_color_buffer_float"),n("WEBGL_clip_cull_distance"),n("OES_texture_float_linear"),n("EXT_color_buffer_half_float"),n("WEBGL_multisampled_render_to_texture"),n("WEBGL_render_shared_exponent")},get:function(i){const r=n(i);return r===null&&ka("WebGLRenderer: "+i+" extension not supported."),r}}}function ER(t,e,n,i){const r={},s=new WeakMap;function o(u){const h=u.target;h.index!==null&&e.remove(h.index);for(const g in h.attributes)e.remove(h.attributes[g]);h.removeEventListener("dispose",o),delete r[h.id];const p=s.get(h);p&&(e.remove(p),s.delete(h)),i.releaseStatesOfGeometry(h),h.isInstancedBufferGeometry===!0&&delete h._maxInstanceCount,n.memory.geometries--}function a(u,h){return r[h.id]===!0||(h.addEventListener("dispose",o),r[h.id]=!0,n.memory.geometries++),h}function l(u){const h=u.attributes;for(const p in h)e.update(h[p],t.ARRAY_BUFFER)}function c(u){const h=[],p=u.index,g=u.attributes.position;let x=0;if(p!==null){const v=p.array;x=p.version;for(let _=0,S=v.length;_<S;_+=3){const E=v[_+0],A=v[_+1],b=v[_+2];h.push(E,A,A,b,b,E)}}else if(g!==void 0){const v=g.array;x=g.version;for(let _=0,S=v.length/3-1;_<S;_+=3){const E=_+0,A=_+1,b=_+2;h.push(E,A,A,b,b,E)}}else return;const m=new(_S(h)?wS:TS)(h,1);m.version=x;const d=s.get(u);d&&e.remove(d),s.set(u,m)}function f(u){const h=s.get(u);if(h){const p=u.index;p!==null&&h.version<p.version&&c(u)}else c(u);return s.get(u)}return{get:a,update:l,getWireframeAttribute:f}}function TR(t,e,n){let i;function r(h){i=h}let s,o;function a(h){s=h.type,o=h.bytesPerElement}function l(h,p){t.drawElements(i,p,s,h*o),n.update(p,i,1)}function c(h,p,g){g!==0&&(t.drawElementsInstanced(i,p,s,h*o,g),n.update(p,i,g))}function f(h,p,g){if(g===0)return;e.get("WEBGL_multi_draw").multiDrawElementsWEBGL(i,p,0,s,h,0,g);let m=0;for(let d=0;d<g;d++)m+=p[d];n.update(m,i,1)}function u(h,p,g,x){if(g===0)return;const m=e.get("WEBGL_multi_draw");if(m===null)for(let d=0;d<h.length;d++)c(h[d]/o,p[d],x[d]);else{m.multiDrawElementsInstancedWEBGL(i,p,0,s,h,0,x,0,g);let d=0;for(let v=0;v<g;v++)d+=p[v]*x[v];n.update(d,i,1)}}this.setMode=r,this.setIndex=a,this.render=l,this.renderInstances=c,this.renderMultiDraw=f,this.renderMultiDrawInstances=u}function wR(t){const e={geometries:0,textures:0},n={frame:0,calls:0,triangles:0,points:0,lines:0};function i(s,o,a){switch(n.calls++,o){case t.TRIANGLES:n.triangles+=a*(s/3);break;case t.LINES:n.lines+=a*(s/2);break;case t.LINE_STRIP:n.lines+=a*(s-1);break;case t.LINE_LOOP:n.lines+=a*s;break;case t.POINTS:n.points+=a*s;break;default:it("WebGLInfo: Unknown draw mode:",o);break}}function r(){n.calls=0,n.triangles=0,n.points=0,n.lines=0}return{memory:e,render:n,programs:null,autoReset:!0,reset:r,update:i}}function AR(t,e,n){const i=new WeakMap,r=new It;function s(o,a,l){const c=o.morphTargetInfluences,f=a.morphAttributes.position||a.morphAttributes.normal||a.morphAttributes.color,u=f!==void 0?f.length:0;let h=i.get(a);if(h===void 0||h.count!==u){let M=function(){b.dispose(),i.delete(a),a.removeEventListener("dispose",M)};h!==void 0&&h.texture.dispose();const p=a.morphAttributes.position!==void 0,g=a.morphAttributes.normal!==void 0,x=a.morphAttributes.color!==void 0,m=a.morphAttributes.position||[],d=a.morphAttributes.normal||[],v=a.morphAttributes.color||[];let _=0;p===!0&&(_=1),g===!0&&(_=2),x===!0&&(_=3);let S=a.attributes.position.count*_,E=1;S>e.maxTextureSize&&(E=Math.ceil(S/e.maxTextureSize),S=e.maxTextureSize);const A=new Float32Array(S*E*4*u),b=new xS(A,S,E,u);b.type=bi,b.needsUpdate=!0;const R=_*4;for(let T=0;T<u;T++){const L=m[T],H=d[T],N=v[T],X=S*E*4*T;for(let $=0;$<L.count;$++){const k=$*R;p===!0&&(r.fromBufferAttribute(L,$),A[X+k+0]=r.x,A[X+k+1]=r.y,A[X+k+2]=r.z,A[X+k+3]=0),g===!0&&(r.fromBufferAttribute(H,$),A[X+k+4]=r.x,A[X+k+5]=r.y,A[X+k+6]=r.z,A[X+k+7]=0),x===!0&&(r.fromBufferAttribute(N,$),A[X+k+8]=r.x,A[X+k+9]=r.y,A[X+k+10]=r.z,A[X+k+11]=N.itemSize===4?r.w:1)}}h={count:u,texture:b,size:new pt(S,E)},i.set(a,h),a.addEventListener("dispose",M)}if(o.isInstancedMesh===!0&&o.morphTexture!==null)l.getUniforms().setValue(t,"morphTexture",o.morphTexture,n);else{let p=0;for(let x=0;x<c.length;x++)p+=c[x];const g=a.morphTargetsRelative?1:1-p;l.getUniforms().setValue(t,"morphTargetBaseInfluence",g),l.getUniforms().setValue(t,"morphTargetInfluences",c)}l.getUniforms().setValue(t,"morphTargetsTexture",h.texture,n),l.getUniforms().setValue(t,"morphTargetsTextureSize",h.size)}return{update:s}}function bR(t,e,n,i){let r=new WeakMap;function s(l){const c=i.render.frame,f=l.geometry,u=e.get(l,f);if(r.get(u)!==c&&(e.update(u),r.set(u,c)),l.isInstancedMesh&&(l.hasEventListener("dispose",a)===!1&&l.addEventListener("dispose",a),r.get(l)!==c&&(n.update(l.instanceMatrix,t.ARRAY_BUFFER),l.instanceColor!==null&&n.update(l.instanceColor,t.ARRAY_BUFFER),r.set(l,c))),l.isSkinnedMesh){const h=l.skeleton;r.get(h)!==c&&(h.update(),r.set(h,c))}return u}function o(){r=new WeakMap}function a(l){const c=l.target;c.removeEventListener("dispose",a),n.remove(c.instanceMatrix),c.instanceColor!==null&&n.remove(c.instanceColor)}return{update:s,dispose:o}}const CR={[iS]:"LINEAR_TONE_MAPPING",[rS]:"REINHARD_TONE_MAPPING",[sS]:"CINEON_TONE_MAPPING",[oS]:"ACES_FILMIC_TONE_MAPPING",[lS]:"AGX_TONE_MAPPING",[cS]:"NEUTRAL_TONE_MAPPING",[aS]:"CUSTOM_TONE_MAPPING"};function RR(t,e,n,i,r){const s=new Li(e,n,{type:t,depthBuffer:i,stencilBuffer:r}),o=new Li(e,n,{type:tr,depthBuffer:!1,stencilBuffer:!1}),a=new _i;a.setAttribute("position",new Ki([-1,3,0,-1,-1,0,3,-1,0],3)),a.setAttribute("uv",new Ki([0,2,0,0,2,0],2));const l=new EA({uniforms:{tDiffuse:{value:null}},vertexShader:`
			precision highp float;

			uniform mat4 modelViewMatrix;
			uniform mat4 projectionMatrix;

			attribute vec3 position;
			attribute vec2 uv;

			varying vec2 vUv;

			void main() {
				vUv = uv;
				gl_Position = projectionMatrix * modelViewMatrix * vec4( position, 1.0 );
			}`,fragmentShader:`
			precision highp float;

			uniform sampler2D tDiffuse;

			varying vec2 vUv;

			#include <tonemapping_pars_fragment>
			#include <colorspace_pars_fragment>

			void main() {
				gl_FragColor = texture2D( tDiffuse, vUv );

				#ifdef LINEAR_TONE_MAPPING
					gl_FragColor.rgb = LinearToneMapping( gl_FragColor.rgb );
				#elif defined( REINHARD_TONE_MAPPING )
					gl_FragColor.rgb = ReinhardToneMapping( gl_FragColor.rgb );
				#elif defined( CINEON_TONE_MAPPING )
					gl_FragColor.rgb = CineonToneMapping( gl_FragColor.rgb );
				#elif defined( ACES_FILMIC_TONE_MAPPING )
					gl_FragColor.rgb = ACESFilmicToneMapping( gl_FragColor.rgb );
				#elif defined( AGX_TONE_MAPPING )
					gl_FragColor.rgb = AgXToneMapping( gl_FragColor.rgb );
				#elif defined( NEUTRAL_TONE_MAPPING )
					gl_FragColor.rgb = NeutralToneMapping( gl_FragColor.rgb );
				#elif defined( CUSTOM_TONE_MAPPING )
					gl_FragColor.rgb = CustomToneMapping( gl_FragColor.rgb );
				#endif

				#ifdef SRGB_TRANSFER
					gl_FragColor = sRGBTransferOETF( gl_FragColor );
				#endif
			}`,depthTest:!1,depthWrite:!1}),c=new rr(a,l),f=new IS(-1,1,1,-1,0,1);let u=null,h=null,p=!1,g,x=null,m=[],d=!1;this.setSize=function(v,_){s.setSize(v,_),o.setSize(v,_);for(let S=0;S<m.length;S++){const E=m[S];E.setSize&&E.setSize(v,_)}},this.setEffects=function(v){m=v,d=m.length>0&&m[0].isRenderPass===!0;const _=s.width,S=s.height;for(let E=0;E<m.length;E++){const A=m[E];A.setSize&&A.setSize(_,S)}},this.begin=function(v,_){if(p||v.toneMapping===Di&&m.length===0)return!1;if(x=_,_!==null){const S=_.width,E=_.height;(s.width!==S||s.height!==E)&&this.setSize(S,E)}return d===!1&&v.setRenderTarget(s),g=v.toneMapping,v.toneMapping=Di,!0},this.hasRenderPass=function(){return d},this.end=function(v,_){v.toneMapping=g,p=!0;let S=s,E=o;for(let A=0;A<m.length;A++){const b=m[A];if(b.enabled!==!1&&(b.render(v,E,S,_),b.needsSwap!==!1)){const R=S;S=E,E=R}}if(u!==v.outputColorSpace||h!==v.toneMapping){u=v.outputColorSpace,h=v.toneMapping,l.defines={},Qe.getTransfer(u)===lt&&(l.defines.SRGB_TRANSFER="");const A=CR[h];A&&(l.defines[A]=""),l.needsUpdate=!0}l.uniforms.tDiffuse.value=S.texture,v.setRenderTarget(x),v.render(c,f),x=null,p=!1},this.isCompositing=function(){return p},this.dispose=function(){s.dispose(),o.dispose(),a.dispose(),l.dispose()}}const US=new mn,Yh=new Ba(1,1),FS=new xS,OS=new Qw,kS=new CS,Z0=[],Q0=[],J0=new Float32Array(16),ev=new Float32Array(9),tv=new Float32Array(4);function Po(t,e,n){const i=t[0];if(i<=0||i>0)return t;const r=e*n;let s=Z0[r];if(s===void 0&&(s=new Float32Array(r),Z0[r]=s),e!==0){i.toArray(s,0);for(let o=1,a=0;o!==e;++o)a+=n,t[o].toArray(s,a)}return s}function zt(t,e){if(t.length!==e.length)return!1;for(let n=0,i=t.length;n<i;n++)if(t[n]!==e[n])return!1;return!0}function Ht(t,e){for(let n=0,i=e.length;n<i;n++)t[n]=e[n]}function bu(t,e){let n=Q0[e];n===void 0&&(n=new Int32Array(e),Q0[e]=n);for(let i=0;i!==e;++i)n[i]=t.allocateTextureUnit();return n}function PR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1f(this.addr,e),n[0]=e)}function DR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2f(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2fv(this.addr,e),Ht(n,e)}}function LR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3f(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else if(e.r!==void 0)(n[0]!==e.r||n[1]!==e.g||n[2]!==e.b)&&(t.uniform3f(this.addr,e.r,e.g,e.b),n[0]=e.r,n[1]=e.g,n[2]=e.b);else{if(zt(n,e))return;t.uniform3fv(this.addr,e),Ht(n,e)}}function IR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4f(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4fv(this.addr,e),Ht(n,e)}}function NR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix2fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;tv.set(i),t.uniformMatrix2fv(this.addr,!1,tv),Ht(n,i)}}function UR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix3fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;ev.set(i),t.uniformMatrix3fv(this.addr,!1,ev),Ht(n,i)}}function FR(t,e){const n=this.cache,i=e.elements;if(i===void 0){if(zt(n,e))return;t.uniformMatrix4fv(this.addr,!1,e),Ht(n,e)}else{if(zt(n,i))return;J0.set(i),t.uniformMatrix4fv(this.addr,!1,J0),Ht(n,i)}}function OR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1i(this.addr,e),n[0]=e)}function kR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2i(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2iv(this.addr,e),Ht(n,e)}}function BR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3i(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3iv(this.addr,e),Ht(n,e)}}function VR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4i(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4iv(this.addr,e),Ht(n,e)}}function zR(t,e){const n=this.cache;n[0]!==e&&(t.uniform1ui(this.addr,e),n[0]=e)}function HR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y)&&(t.uniform2ui(this.addr,e.x,e.y),n[0]=e.x,n[1]=e.y);else{if(zt(n,e))return;t.uniform2uiv(this.addr,e),Ht(n,e)}}function GR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z)&&(t.uniform3ui(this.addr,e.x,e.y,e.z),n[0]=e.x,n[1]=e.y,n[2]=e.z);else{if(zt(n,e))return;t.uniform3uiv(this.addr,e),Ht(n,e)}}function WR(t,e){const n=this.cache;if(e.x!==void 0)(n[0]!==e.x||n[1]!==e.y||n[2]!==e.z||n[3]!==e.w)&&(t.uniform4ui(this.addr,e.x,e.y,e.z,e.w),n[0]=e.x,n[1]=e.y,n[2]=e.z,n[3]=e.w);else{if(zt(n,e))return;t.uniform4uiv(this.addr,e),Ht(n,e)}}function jR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r);let s;this.type===t.SAMPLER_2D_SHADOW?(Yh.compareFunction=n.isReversedDepthBuffer()?Em:Mm,s=Yh):s=US,n.setTexture2D(e||s,r)}function XR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture3D(e||OS,r)}function YR(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTextureCube(e||kS,r)}function $R(t,e,n){const i=this.cache,r=n.allocateTextureUnit();i[0]!==r&&(t.uniform1i(this.addr,r),i[0]=r),n.setTexture2DArray(e||FS,r)}function qR(t){switch(t){case 5126:return PR;case 35664:return DR;case 35665:return LR;case 35666:return IR;case 35674:return NR;case 35675:return UR;case 35676:return FR;case 5124:case 35670:return OR;case 35667:case 35671:return kR;case 35668:case 35672:return BR;case 35669:case 35673:return VR;case 5125:return zR;case 36294:return HR;case 36295:return GR;case 36296:return WR;case 35678:case 36198:case 36298:case 36306:case 35682:return jR;case 35679:case 36299:case 36307:return XR;case 35680:case 36300:case 36308:case 36293:return YR;case 36289:case 36303:case 36311:case 36292:return $R}}function KR(t,e){t.uniform1fv(this.addr,e)}function ZR(t,e){const n=Po(e,this.size,2);t.uniform2fv(this.addr,n)}function QR(t,e){const n=Po(e,this.size,3);t.uniform3fv(this.addr,n)}function JR(t,e){const n=Po(e,this.size,4);t.uniform4fv(this.addr,n)}function eP(t,e){const n=Po(e,this.size,4);t.uniformMatrix2fv(this.addr,!1,n)}function tP(t,e){const n=Po(e,this.size,9);t.uniformMatrix3fv(this.addr,!1,n)}function nP(t,e){const n=Po(e,this.size,16);t.uniformMatrix4fv(this.addr,!1,n)}function iP(t,e){t.uniform1iv(this.addr,e)}function rP(t,e){t.uniform2iv(this.addr,e)}function sP(t,e){t.uniform3iv(this.addr,e)}function oP(t,e){t.uniform4iv(this.addr,e)}function aP(t,e){t.uniform1uiv(this.addr,e)}function lP(t,e){t.uniform2uiv(this.addr,e)}function cP(t,e){t.uniform3uiv(this.addr,e)}function uP(t,e){t.uniform4uiv(this.addr,e)}function fP(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));let o;this.type===t.SAMPLER_2D_SHADOW?o=Yh:o=US;for(let a=0;a!==r;++a)n.setTexture2D(e[a]||o,s[a])}function dP(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture3D(e[o]||OS,s[o])}function hP(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTextureCube(e[o]||kS,s[o])}function pP(t,e,n){const i=this.cache,r=e.length,s=bu(n,r);zt(i,s)||(t.uniform1iv(this.addr,s),Ht(i,s));for(let o=0;o!==r;++o)n.setTexture2DArray(e[o]||FS,s[o])}function mP(t){switch(t){case 5126:return KR;case 35664:return ZR;case 35665:return QR;case 35666:return JR;case 35674:return eP;case 35675:return tP;case 35676:return nP;case 5124:case 35670:return iP;case 35667:case 35671:return rP;case 35668:case 35672:return sP;case 35669:case 35673:return oP;case 5125:return aP;case 36294:return lP;case 36295:return cP;case 36296:return uP;case 35678:case 36198:case 36298:case 36306:case 35682:return fP;case 35679:case 36299:case 36307:return dP;case 35680:case 36300:case 36308:case 36293:return hP;case 36289:case 36303:case 36311:case 36292:return pP}}class gP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.setValue=qR(n.type)}}class vP{constructor(e,n,i){this.id=e,this.addr=i,this.cache=[],this.type=n.type,this.size=n.size,this.setValue=mP(n.type)}}class _P{constructor(e){this.id=e,this.seq=[],this.map={}}setValue(e,n,i){const r=this.seq;for(let s=0,o=r.length;s!==o;++s){const a=r[s];a.setValue(e,n[a.id],i)}}}const Bf=/(\w+)(\])?(\[|\.)?/g;function nv(t,e){t.seq.push(e),t.map[e.id]=e}function xP(t,e,n){const i=t.name,r=i.length;for(Bf.lastIndex=0;;){const s=Bf.exec(i),o=Bf.lastIndex;let a=s[1];const l=s[2]==="]",c=s[3];if(l&&(a=a|0),c===void 0||c==="["&&o+2===r){nv(n,c===void 0?new gP(a,t,e):new vP(a,t,e));break}else{let u=n.map[a];u===void 0&&(u=new _P(a),nv(n,u)),n=u}}}class xc{constructor(e,n){this.seq=[],this.map={};const i=e.getProgramParameter(n,e.ACTIVE_UNIFORMS);for(let o=0;o<i;++o){const a=e.getActiveUniform(n,o),l=e.getUniformLocation(n,a.name);xP(a,l,this)}const r=[],s=[];for(const o of this.seq)o.type===e.SAMPLER_2D_SHADOW||o.type===e.SAMPLER_CUBE_SHADOW||o.type===e.SAMPLER_2D_ARRAY_SHADOW?r.push(o):s.push(o);r.length>0&&(this.seq=r.concat(s))}setValue(e,n,i,r){const s=this.map[n];s!==void 0&&s.setValue(e,i,r)}setOptional(e,n,i){const r=n[i];r!==void 0&&this.setValue(e,i,r)}static upload(e,n,i,r){for(let s=0,o=n.length;s!==o;++s){const a=n[s],l=i[a.id];l.needsUpdate!==!1&&a.setValue(e,l.value,r)}}static seqWithValue(e,n){const i=[];for(let r=0,s=e.length;r!==s;++r){const o=e[r];o.id in n&&i.push(o)}return i}}function iv(t,e,n){const i=t.createShader(e);return t.shaderSource(i,n),t.compileShader(i),i}const yP=37297;let SP=0;function MP(t,e){const n=t.split(`
`),i=[],r=Math.max(e-6,0),s=Math.min(e+6,n.length);for(let o=r;o<s;o++){const a=o+1;i.push(`${a===e?">":" "} ${a}: ${n[o]}`)}return i.join(`
`)}const rv=new He;function EP(t){Qe._getMatrix(rv,Qe.workingColorSpace,t);const e=`mat3( ${rv.elements.map(n=>n.toFixed(4))} )`;switch(Qe.getTransfer(t)){case Kc:return[e,"LinearTransferOETF"];case lt:return[e,"sRGBTransferOETF"];default:return Be("WebGLProgram: Unsupported color space: ",t),[e,"LinearTransferOETF"]}}function sv(t,e,n){const i=t.getShaderParameter(e,t.COMPILE_STATUS),s=(t.getShaderInfoLog(e)||"").trim();if(i&&s==="")return"";const o=/ERROR: 0:(\d+)/.exec(s);if(o){const a=parseInt(o[1]);return n.toUpperCase()+`

`+s+`

`+MP(t.getShaderSource(e),a)}else return s}function TP(t,e){const n=EP(e);return[`vec4 ${t}( vec4 value ) {`,`	return ${n[1]}( vec4( value.rgb * ${n[0]}, value.a ) );`,"}"].join(`
`)}const wP={[iS]:"Linear",[rS]:"Reinhard",[sS]:"Cineon",[oS]:"ACESFilmic",[lS]:"AgX",[cS]:"Neutral",[aS]:"Custom"};function AP(t,e){const n=wP[e];return n===void 0?(Be("WebGLProgram: Unsupported toneMapping:",e),"vec3 "+t+"( vec3 color ) { return LinearToneMapping( color ); }"):"vec3 "+t+"( vec3 color ) { return "+n+"ToneMapping( color ); }"}const Yl=new G;function bP(){Qe.getLuminanceCoefficients(Yl);const t=Yl.x.toFixed(4),e=Yl.y.toFixed(4),n=Yl.z.toFixed(4);return["float luminance( const in vec3 rgb ) {",`	const vec3 weights = vec3( ${t}, ${e}, ${n} );`,"	return dot( weights, rgb );","}"].join(`
`)}function CP(t){return[t.extensionClipCullDistance?"#extension GL_ANGLE_clip_cull_distance : require":"",t.extensionMultiDraw?"#extension GL_ANGLE_multi_draw : require":""].filter(ia).join(`
`)}function RP(t){const e=[];for(const n in t){const i=t[n];i!==!1&&e.push("#define "+n+" "+i)}return e.join(`
`)}function PP(t,e){const n={},i=t.getProgramParameter(e,t.ACTIVE_ATTRIBUTES);for(let r=0;r<i;r++){const s=t.getActiveAttrib(e,r),o=s.name;let a=1;s.type===t.FLOAT_MAT2&&(a=2),s.type===t.FLOAT_MAT3&&(a=3),s.type===t.FLOAT_MAT4&&(a=4),n[o]={type:s.type,location:t.getAttribLocation(e,o),locationSize:a}}return n}function ia(t){return t!==""}function ov(t,e){const n=e.numSpotLightShadows+e.numSpotLightMaps-e.numSpotLightShadowsWithMaps;return t.replace(/NUM_DIR_LIGHTS/g,e.numDirLights).replace(/NUM_SPOT_LIGHTS/g,e.numSpotLights).replace(/NUM_SPOT_LIGHT_MAPS/g,e.numSpotLightMaps).replace(/NUM_SPOT_LIGHT_COORDS/g,n).replace(/NUM_RECT_AREA_LIGHTS/g,e.numRectAreaLights).replace(/NUM_POINT_LIGHTS/g,e.numPointLights).replace(/NUM_HEMI_LIGHTS/g,e.numHemiLights).replace(/NUM_DIR_LIGHT_SHADOWS/g,e.numDirLightShadows).replace(/NUM_SPOT_LIGHT_SHADOWS_WITH_MAPS/g,e.numSpotLightShadowsWithMaps).replace(/NUM_SPOT_LIGHT_SHADOWS/g,e.numSpotLightShadows).replace(/NUM_POINT_LIGHT_SHADOWS/g,e.numPointLightShadows)}function av(t,e){return t.replace(/NUM_CLIPPING_PLANES/g,e.numClippingPlanes).replace(/UNION_CLIPPING_PLANES/g,e.numClippingPlanes-e.numClipIntersection)}const DP=/^[ \t]*#include +<([\w\d./]+)>/gm;function $h(t){return t.replace(DP,IP)}const LP=new Map;function IP(t,e){let n=We[e];if(n===void 0){const i=LP.get(e);if(i!==void 0)n=We[i],Be('WebGLRenderer: Shader chunk "%s" has been deprecated. Use "%s" instead.',e,i);else throw new Error("Can not resolve #include <"+e+">")}return $h(n)}const NP=/#pragma unroll_loop_start\s+for\s*\(\s*int\s+i\s*=\s*(\d+)\s*;\s*i\s*<\s*(\d+)\s*;\s*i\s*\+\+\s*\)\s*{([\s\S]+?)}\s+#pragma unroll_loop_end/g;function lv(t){return t.replace(NP,UP)}function UP(t,e,n,i){let r="";for(let s=parseInt(e);s<parseInt(n);s++)r+=i.replace(/\[\s*i\s*\]/g,"[ "+s+" ]").replace(/UNROLLED_LOOP_INDEX/g,s);return r}function cv(t){let e=`precision ${t.precision} float;
	precision ${t.precision} int;
	precision ${t.precision} sampler2D;
	precision ${t.precision} samplerCube;
	precision ${t.precision} sampler3D;
	precision ${t.precision} sampler2DArray;
	precision ${t.precision} sampler2DShadow;
	precision ${t.precision} samplerCubeShadow;
	precision ${t.precision} sampler2DArrayShadow;
	precision ${t.precision} isampler2D;
	precision ${t.precision} isampler3D;
	precision ${t.precision} isamplerCube;
	precision ${t.precision} isampler2DArray;
	precision ${t.precision} usampler2D;
	precision ${t.precision} usampler3D;
	precision ${t.precision} usamplerCube;
	precision ${t.precision} usampler2DArray;
	`;return t.precision==="highp"?e+=`
#define HIGH_PRECISION`:t.precision==="mediump"?e+=`
#define MEDIUM_PRECISION`:t.precision==="lowp"&&(e+=`
#define LOW_PRECISION`),e}const FP={[pc]:"SHADOWMAP_TYPE_PCF",[na]:"SHADOWMAP_TYPE_VSM"};function OP(t){return FP[t.shadowMapType]||"SHADOWMAP_TYPE_BASIC"}const kP={[vs]:"ENVMAP_TYPE_CUBE",[So]:"ENVMAP_TYPE_CUBE",[Eu]:"ENVMAP_TYPE_CUBE_UV"};function BP(t){return t.envMap===!1?"ENVMAP_TYPE_CUBE":kP[t.envMapMode]||"ENVMAP_TYPE_CUBE"}const VP={[So]:"ENVMAP_MODE_REFRACTION"};function zP(t){return t.envMap===!1?"ENVMAP_MODE_REFLECTION":VP[t.envMapMode]||"ENVMAP_MODE_REFLECTION"}const HP={[nS]:"ENVMAP_BLENDING_MULTIPLY",[Lw]:"ENVMAP_BLENDING_MIX",[Iw]:"ENVMAP_BLENDING_ADD"};function GP(t){return t.envMap===!1?"ENVMAP_BLENDING_NONE":HP[t.combine]||"ENVMAP_BLENDING_NONE"}function WP(t){const e=t.envMapCubeUVHeight;if(e===null)return null;const n=Math.log2(e)-2,i=1/e;return{texelWidth:1/(3*Math.max(Math.pow(2,n),7*16)),texelHeight:i,maxMip:n}}function jP(t,e,n,i){const r=t.getContext(),s=n.defines;let o=n.vertexShader,a=n.fragmentShader;const l=OP(n),c=BP(n),f=zP(n),u=GP(n),h=WP(n),p=CP(n),g=RP(s),x=r.createProgram();let m,d,v=n.glslVersion?"#version "+n.glslVersion+`
`:"";n.isRawShaderMaterial?(m=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ia).join(`
`),m.length>0&&(m+=`
`),d=["#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g].filter(ia).join(`
`),d.length>0&&(d+=`
`)):(m=[cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.extensionClipCullDistance?"#define USE_CLIP_DISTANCE":"",n.batching?"#define USE_BATCHING":"",n.batchingColor?"#define USE_BATCHING_COLOR":"",n.instancing?"#define USE_INSTANCING":"",n.instancingColor?"#define USE_INSTANCING_COLOR":"",n.instancingMorph?"#define USE_INSTANCING_MORPH":"",n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.map?"#define USE_MAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+f:"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.displacementMap?"#define USE_DISPLACEMENTMAP":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.mapUv?"#define MAP_UV "+n.mapUv:"",n.alphaMapUv?"#define ALPHAMAP_UV "+n.alphaMapUv:"",n.lightMapUv?"#define LIGHTMAP_UV "+n.lightMapUv:"",n.aoMapUv?"#define AOMAP_UV "+n.aoMapUv:"",n.emissiveMapUv?"#define EMISSIVEMAP_UV "+n.emissiveMapUv:"",n.bumpMapUv?"#define BUMPMAP_UV "+n.bumpMapUv:"",n.normalMapUv?"#define NORMALMAP_UV "+n.normalMapUv:"",n.displacementMapUv?"#define DISPLACEMENTMAP_UV "+n.displacementMapUv:"",n.metalnessMapUv?"#define METALNESSMAP_UV "+n.metalnessMapUv:"",n.roughnessMapUv?"#define ROUGHNESSMAP_UV "+n.roughnessMapUv:"",n.anisotropyMapUv?"#define ANISOTROPYMAP_UV "+n.anisotropyMapUv:"",n.clearcoatMapUv?"#define CLEARCOATMAP_UV "+n.clearcoatMapUv:"",n.clearcoatNormalMapUv?"#define CLEARCOAT_NORMALMAP_UV "+n.clearcoatNormalMapUv:"",n.clearcoatRoughnessMapUv?"#define CLEARCOAT_ROUGHNESSMAP_UV "+n.clearcoatRoughnessMapUv:"",n.iridescenceMapUv?"#define IRIDESCENCEMAP_UV "+n.iridescenceMapUv:"",n.iridescenceThicknessMapUv?"#define IRIDESCENCE_THICKNESSMAP_UV "+n.iridescenceThicknessMapUv:"",n.sheenColorMapUv?"#define SHEEN_COLORMAP_UV "+n.sheenColorMapUv:"",n.sheenRoughnessMapUv?"#define SHEEN_ROUGHNESSMAP_UV "+n.sheenRoughnessMapUv:"",n.specularMapUv?"#define SPECULARMAP_UV "+n.specularMapUv:"",n.specularColorMapUv?"#define SPECULAR_COLORMAP_UV "+n.specularColorMapUv:"",n.specularIntensityMapUv?"#define SPECULAR_INTENSITYMAP_UV "+n.specularIntensityMapUv:"",n.transmissionMapUv?"#define TRANSMISSIONMAP_UV "+n.transmissionMapUv:"",n.thicknessMapUv?"#define THICKNESSMAP_UV "+n.thicknessMapUv:"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.flatShading?"#define FLAT_SHADED":"",n.skinning?"#define USE_SKINNING":"",n.morphTargets?"#define USE_MORPHTARGETS":"",n.morphNormals&&n.flatShading===!1?"#define USE_MORPHNORMALS":"",n.morphColors?"#define USE_MORPHCOLORS":"",n.morphTargetsCount>0?"#define MORPHTARGETS_TEXTURE_STRIDE "+n.morphTextureStride:"",n.morphTargetsCount>0?"#define MORPHTARGETS_COUNT "+n.morphTargetsCount:"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.sizeAttenuation?"#define USE_SIZEATTENUATION":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 modelMatrix;","uniform mat4 modelViewMatrix;","uniform mat4 projectionMatrix;","uniform mat4 viewMatrix;","uniform mat3 normalMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;","#ifdef USE_INSTANCING","	attribute mat4 instanceMatrix;","#endif","#ifdef USE_INSTANCING_COLOR","	attribute vec3 instanceColor;","#endif","#ifdef USE_INSTANCING_MORPH","	uniform sampler2D morphTexture;","#endif","attribute vec3 position;","attribute vec3 normal;","attribute vec2 uv;","#ifdef USE_UV1","	attribute vec2 uv1;","#endif","#ifdef USE_UV2","	attribute vec2 uv2;","#endif","#ifdef USE_UV3","	attribute vec2 uv3;","#endif","#ifdef USE_TANGENT","	attribute vec4 tangent;","#endif","#if defined( USE_COLOR_ALPHA )","	attribute vec4 color;","#elif defined( USE_COLOR )","	attribute vec3 color;","#endif","#ifdef USE_SKINNING","	attribute vec4 skinIndex;","	attribute vec4 skinWeight;","#endif",`
`].filter(ia).join(`
`),d=[cv(n),"#define SHADER_TYPE "+n.shaderType,"#define SHADER_NAME "+n.shaderName,g,n.useFog&&n.fog?"#define USE_FOG":"",n.useFog&&n.fogExp2?"#define FOG_EXP2":"",n.alphaToCoverage?"#define ALPHA_TO_COVERAGE":"",n.map?"#define USE_MAP":"",n.matcap?"#define USE_MATCAP":"",n.envMap?"#define USE_ENVMAP":"",n.envMap?"#define "+c:"",n.envMap?"#define "+f:"",n.envMap?"#define "+u:"",h?"#define CUBEUV_TEXEL_WIDTH "+h.texelWidth:"",h?"#define CUBEUV_TEXEL_HEIGHT "+h.texelHeight:"",h?"#define CUBEUV_MAX_MIP "+h.maxMip+".0":"",n.lightMap?"#define USE_LIGHTMAP":"",n.aoMap?"#define USE_AOMAP":"",n.bumpMap?"#define USE_BUMPMAP":"",n.normalMap?"#define USE_NORMALMAP":"",n.normalMapObjectSpace?"#define USE_NORMALMAP_OBJECTSPACE":"",n.normalMapTangentSpace?"#define USE_NORMALMAP_TANGENTSPACE":"",n.emissiveMap?"#define USE_EMISSIVEMAP":"",n.anisotropy?"#define USE_ANISOTROPY":"",n.anisotropyMap?"#define USE_ANISOTROPYMAP":"",n.clearcoat?"#define USE_CLEARCOAT":"",n.clearcoatMap?"#define USE_CLEARCOATMAP":"",n.clearcoatRoughnessMap?"#define USE_CLEARCOAT_ROUGHNESSMAP":"",n.clearcoatNormalMap?"#define USE_CLEARCOAT_NORMALMAP":"",n.dispersion?"#define USE_DISPERSION":"",n.iridescence?"#define USE_IRIDESCENCE":"",n.iridescenceMap?"#define USE_IRIDESCENCEMAP":"",n.iridescenceThicknessMap?"#define USE_IRIDESCENCE_THICKNESSMAP":"",n.specularMap?"#define USE_SPECULARMAP":"",n.specularColorMap?"#define USE_SPECULAR_COLORMAP":"",n.specularIntensityMap?"#define USE_SPECULAR_INTENSITYMAP":"",n.roughnessMap?"#define USE_ROUGHNESSMAP":"",n.metalnessMap?"#define USE_METALNESSMAP":"",n.alphaMap?"#define USE_ALPHAMAP":"",n.alphaTest?"#define USE_ALPHATEST":"",n.alphaHash?"#define USE_ALPHAHASH":"",n.sheen?"#define USE_SHEEN":"",n.sheenColorMap?"#define USE_SHEEN_COLORMAP":"",n.sheenRoughnessMap?"#define USE_SHEEN_ROUGHNESSMAP":"",n.transmission?"#define USE_TRANSMISSION":"",n.transmissionMap?"#define USE_TRANSMISSIONMAP":"",n.thicknessMap?"#define USE_THICKNESSMAP":"",n.vertexTangents&&n.flatShading===!1?"#define USE_TANGENT":"",n.vertexColors||n.instancingColor||n.batchingColor?"#define USE_COLOR":"",n.vertexAlphas?"#define USE_COLOR_ALPHA":"",n.vertexUv1s?"#define USE_UV1":"",n.vertexUv2s?"#define USE_UV2":"",n.vertexUv3s?"#define USE_UV3":"",n.pointsUvs?"#define USE_POINTS_UV":"",n.gradientMap?"#define USE_GRADIENTMAP":"",n.flatShading?"#define FLAT_SHADED":"",n.doubleSided?"#define DOUBLE_SIDED":"",n.flipSided?"#define FLIP_SIDED":"",n.shadowMapEnabled?"#define USE_SHADOWMAP":"",n.shadowMapEnabled?"#define "+l:"",n.premultipliedAlpha?"#define PREMULTIPLIED_ALPHA":"",n.numLightProbes>0?"#define USE_LIGHT_PROBES":"",n.decodeVideoTexture?"#define DECODE_VIDEO_TEXTURE":"",n.decodeVideoTextureEmissive?"#define DECODE_VIDEO_TEXTURE_EMISSIVE":"",n.logarithmicDepthBuffer?"#define USE_LOGARITHMIC_DEPTH_BUFFER":"",n.reversedDepthBuffer?"#define USE_REVERSED_DEPTH_BUFFER":"","uniform mat4 viewMatrix;","uniform vec3 cameraPosition;","uniform bool isOrthographic;",n.toneMapping!==Di?"#define TONE_MAPPING":"",n.toneMapping!==Di?We.tonemapping_pars_fragment:"",n.toneMapping!==Di?AP("toneMapping",n.toneMapping):"",n.dithering?"#define DITHERING":"",n.opaque?"#define OPAQUE":"",We.colorspace_pars_fragment,TP("linearToOutputTexel",n.outputColorSpace),bP(),n.useDepthPacking?"#define DEPTH_PACKING "+n.depthPacking:"",`
`].filter(ia).join(`
`)),o=$h(o),o=ov(o,n),o=av(o,n),a=$h(a),a=ov(a,n),a=av(a,n),o=lv(o),a=lv(a),n.isRawShaderMaterial!==!0&&(v=`#version 300 es
`,m=[p,"#define attribute in","#define varying out","#define texture2D texture"].join(`
`)+`
`+m,d=["#define varying in",n.glslVersion===E0?"":"layout(location = 0) out highp vec4 pc_fragColor;",n.glslVersion===E0?"":"#define gl_FragColor pc_fragColor","#define gl_FragDepthEXT gl_FragDepth","#define texture2D texture","#define textureCube texture","#define texture2DProj textureProj","#define texture2DLodEXT textureLod","#define texture2DProjLodEXT textureProjLod","#define textureCubeLodEXT textureLod","#define texture2DGradEXT textureGrad","#define texture2DProjGradEXT textureProjGrad","#define textureCubeGradEXT textureGrad"].join(`
`)+`
`+d);const _=v+m+o,S=v+d+a,E=iv(r,r.VERTEX_SHADER,_),A=iv(r,r.FRAGMENT_SHADER,S);r.attachShader(x,E),r.attachShader(x,A),n.index0AttributeName!==void 0?r.bindAttribLocation(x,0,n.index0AttributeName):n.morphTargets===!0&&r.bindAttribLocation(x,0,"position"),r.linkProgram(x);function b(L){if(t.debug.checkShaderErrors){const H=r.getProgramInfoLog(x)||"",N=r.getShaderInfoLog(E)||"",X=r.getShaderInfoLog(A)||"",$=H.trim(),k=N.trim(),O=X.trim();let P=!0,K=!0;if(r.getProgramParameter(x,r.LINK_STATUS)===!1)if(P=!1,typeof t.debug.onShaderError=="function")t.debug.onShaderError(r,x,E,A);else{const Y=sv(r,E,"vertex"),te=sv(r,A,"fragment");it("THREE.WebGLProgram: Shader Error "+r.getError()+" - VALIDATE_STATUS "+r.getProgramParameter(x,r.VALIDATE_STATUS)+`

Material Name: `+L.name+`
Material Type: `+L.type+`

Program Info Log: `+$+`
`+Y+`
`+te)}else $!==""?Be("WebGLProgram: Program Info Log:",$):(k===""||O==="")&&(K=!1);K&&(L.diagnostics={runnable:P,programLog:$,vertexShader:{log:k,prefix:m},fragmentShader:{log:O,prefix:d}})}r.deleteShader(E),r.deleteShader(A),R=new xc(r,x),M=PP(r,x)}let R;this.getUniforms=function(){return R===void 0&&b(this),R};let M;this.getAttributes=function(){return M===void 0&&b(this),M};let T=n.rendererExtensionParallelShaderCompile===!1;return this.isReady=function(){return T===!1&&(T=r.getProgramParameter(x,yP)),T},this.destroy=function(){i.releaseStatesOfProgram(this),r.deleteProgram(x),this.program=void 0},this.type=n.shaderType,this.name=n.shaderName,this.id=SP++,this.cacheKey=e,this.usedTimes=1,this.program=x,this.vertexShader=E,this.fragmentShader=A,this}let XP=0;class YP{constructor(){this.shaderCache=new Map,this.materialCache=new Map}update(e){const n=e.vertexShader,i=e.fragmentShader,r=this._getShaderStage(n),s=this._getShaderStage(i),o=this._getShaderCacheForMaterial(e);return o.has(r)===!1&&(o.add(r),r.usedTimes++),o.has(s)===!1&&(o.add(s),s.usedTimes++),this}remove(e){const n=this.materialCache.get(e);for(const i of n)i.usedTimes--,i.usedTimes===0&&this.shaderCache.delete(i.code);return this.materialCache.delete(e),this}getVertexShaderID(e){return this._getShaderStage(e.vertexShader).id}getFragmentShaderID(e){return this._getShaderStage(e.fragmentShader).id}dispose(){this.shaderCache.clear(),this.materialCache.clear()}_getShaderCacheForMaterial(e){const n=this.materialCache;let i=n.get(e);return i===void 0&&(i=new Set,n.set(e,i)),i}_getShaderStage(e){const n=this.shaderCache;let i=n.get(e);return i===void 0&&(i=new $P(e),n.set(e,i)),i}}class $P{constructor(e){this.id=XP++,this.code=e,this.usedTimes=0}}function qP(t,e,n,i,r,s,o){const a=new SS,l=new YP,c=new Set,f=[],u=new Map,h=r.logarithmicDepthBuffer;let p=r.precision;const g={MeshDepthMaterial:"depth",MeshDistanceMaterial:"distance",MeshNormalMaterial:"normal",MeshBasicMaterial:"basic",MeshLambertMaterial:"lambert",MeshPhongMaterial:"phong",MeshToonMaterial:"toon",MeshStandardMaterial:"physical",MeshPhysicalMaterial:"physical",MeshMatcapMaterial:"matcap",LineBasicMaterial:"basic",LineDashedMaterial:"dashed",PointsMaterial:"points",ShadowMaterial:"shadow",SpriteMaterial:"sprite"};function x(M){return c.add(M),M===0?"uv":`uv${M}`}function m(M,T,L,H,N){const X=H.fog,$=N.geometry,k=M.isMeshStandardMaterial?H.environment:null,O=(M.isMeshStandardMaterial?n:e).get(M.envMap||k),P=O&&O.mapping===Eu?O.image.height:null,K=g[M.type];M.precision!==null&&(p=r.getMaxPrecision(M.precision),p!==M.precision&&Be("WebGLProgram.getParameters:",M.precision,"not supported, using",p,"instead."));const Y=$.morphAttributes.position||$.morphAttributes.normal||$.morphAttributes.color,te=Y!==void 0?Y.length:0;let be=0;$.morphAttributes.position!==void 0&&(be=1),$.morphAttributes.normal!==void 0&&(be=2),$.morphAttributes.color!==void 0&&(be=3);let he,Ie,Ne,q;if(K){const Ke=wi[K];he=Ke.vertexShader,Ie=Ke.fragmentShader}else he=M.vertexShader,Ie=M.fragmentShader,l.update(M),Ne=l.getVertexShaderID(M),q=l.getFragmentShaderID(M);const J=t.getRenderTarget(),oe=t.state.buffers.depth.getReversed(),Oe=N.isInstancedMesh===!0,Me=N.isBatchedMesh===!0,Xe=!!M.map,xt=!!M.matcap,$e=!!O,Ze=!!M.aoMap,st=!!M.lightMap,ze=!!M.bumpMap,gt=!!M.normalMap,D=!!M.displacementMap,rt=!!M.emissiveMap,tt=!!M.metalnessMap,ft=!!M.roughnessMap,ve=M.anisotropy>0,C=M.clearcoat>0,y=M.dispersion>0,U=M.iridescence>0,Q=M.sheen>0,ee=M.transmission>0,Z=ve&&!!M.anisotropyMap,Ce=C&&!!M.clearcoatMap,le=C&&!!M.clearcoatNormalMap,we=C&&!!M.clearcoatRoughnessMap,Le=U&&!!M.iridescenceMap,re=U&&!!M.iridescenceThicknessMap,de=Q&&!!M.sheenColorMap,Ee=Q&&!!M.sheenRoughnessMap,Re=!!M.specularMap,fe=!!M.specularColorMap,Ve=!!M.specularIntensityMap,I=ee&&!!M.transmissionMap,ge=ee&&!!M.thicknessMap,ae=!!M.gradientMap,xe=!!M.alphaMap,ie=M.alphaTest>0,z=!!M.alphaHash,ne=!!M.extensions;let Pe=Di;M.toneMapped&&(J===null||J.isXRRenderTarget===!0)&&(Pe=t.toneMapping);const Ge={shaderID:K,shaderType:M.type,shaderName:M.name,vertexShader:he,fragmentShader:Ie,defines:M.defines,customVertexShaderID:Ne,customFragmentShaderID:q,isRawShaderMaterial:M.isRawShaderMaterial===!0,glslVersion:M.glslVersion,precision:p,batching:Me,batchingColor:Me&&N._colorsTexture!==null,instancing:Oe,instancingColor:Oe&&N.instanceColor!==null,instancingMorph:Oe&&N.morphTexture!==null,outputColorSpace:J===null?t.outputColorSpace:J.isXRRenderTarget===!0?J.texture.colorSpace:Eo,alphaToCoverage:!!M.alphaToCoverage,map:Xe,matcap:xt,envMap:$e,envMapMode:$e&&O.mapping,envMapCubeUVHeight:P,aoMap:Ze,lightMap:st,bumpMap:ze,normalMap:gt,displacementMap:D,emissiveMap:rt,normalMapObjectSpace:gt&&M.normalMapType===Ow,normalMapTangentSpace:gt&&M.normalMapType===Fw,metalnessMap:tt,roughnessMap:ft,anisotropy:ve,anisotropyMap:Z,clearcoat:C,clearcoatMap:Ce,clearcoatNormalMap:le,clearcoatRoughnessMap:we,dispersion:y,iridescence:U,iridescenceMap:Le,iridescenceThicknessMap:re,sheen:Q,sheenColorMap:de,sheenRoughnessMap:Ee,specularMap:Re,specularColorMap:fe,specularIntensityMap:Ve,transmission:ee,transmissionMap:I,thicknessMap:ge,gradientMap:ae,opaque:M.transparent===!1&&M.blending===co&&M.alphaToCoverage===!1,alphaMap:xe,alphaTest:ie,alphaHash:z,combine:M.combine,mapUv:Xe&&x(M.map.channel),aoMapUv:Ze&&x(M.aoMap.channel),lightMapUv:st&&x(M.lightMap.channel),bumpMapUv:ze&&x(M.bumpMap.channel),normalMapUv:gt&&x(M.normalMap.channel),displacementMapUv:D&&x(M.displacementMap.channel),emissiveMapUv:rt&&x(M.emissiveMap.channel),metalnessMapUv:tt&&x(M.metalnessMap.channel),roughnessMapUv:ft&&x(M.roughnessMap.channel),anisotropyMapUv:Z&&x(M.anisotropyMap.channel),clearcoatMapUv:Ce&&x(M.clearcoatMap.channel),clearcoatNormalMapUv:le&&x(M.clearcoatNormalMap.channel),clearcoatRoughnessMapUv:we&&x(M.clearcoatRoughnessMap.channel),iridescenceMapUv:Le&&x(M.iridescenceMap.channel),iridescenceThicknessMapUv:re&&x(M.iridescenceThicknessMap.channel),sheenColorMapUv:de&&x(M.sheenColorMap.channel),sheenRoughnessMapUv:Ee&&x(M.sheenRoughnessMap.channel),specularMapUv:Re&&x(M.specularMap.channel),specularColorMapUv:fe&&x(M.specularColorMap.channel),specularIntensityMapUv:Ve&&x(M.specularIntensityMap.channel),transmissionMapUv:I&&x(M.transmissionMap.channel),thicknessMapUv:ge&&x(M.thicknessMap.channel),alphaMapUv:xe&&x(M.alphaMap.channel),vertexTangents:!!$.attributes.tangent&&(gt||ve),vertexColors:M.vertexColors,vertexAlphas:M.vertexColors===!0&&!!$.attributes.color&&$.attributes.color.itemSize===4,pointsUvs:N.isPoints===!0&&!!$.attributes.uv&&(Xe||xe),fog:!!X,useFog:M.fog===!0,fogExp2:!!X&&X.isFogExp2,flatShading:M.flatShading===!0&&M.wireframe===!1,sizeAttenuation:M.sizeAttenuation===!0,logarithmicDepthBuffer:h,reversedDepthBuffer:oe,skinning:N.isSkinnedMesh===!0,morphTargets:$.morphAttributes.position!==void 0,morphNormals:$.morphAttributes.normal!==void 0,morphColors:$.morphAttributes.color!==void 0,morphTargetsCount:te,morphTextureStride:be,numDirLights:T.directional.length,numPointLights:T.point.length,numSpotLights:T.spot.length,numSpotLightMaps:T.spotLightMap.length,numRectAreaLights:T.rectArea.length,numHemiLights:T.hemi.length,numDirLightShadows:T.directionalShadowMap.length,numPointLightShadows:T.pointShadowMap.length,numSpotLightShadows:T.spotShadowMap.length,numSpotLightShadowsWithMaps:T.numSpotLightShadowsWithMaps,numLightProbes:T.numLightProbes,numClippingPlanes:o.numPlanes,numClipIntersection:o.numIntersection,dithering:M.dithering,shadowMapEnabled:t.shadowMap.enabled&&L.length>0,shadowMapType:t.shadowMap.type,toneMapping:Pe,decodeVideoTexture:Xe&&M.map.isVideoTexture===!0&&Qe.getTransfer(M.map.colorSpace)===lt,decodeVideoTextureEmissive:rt&&M.emissiveMap.isVideoTexture===!0&&Qe.getTransfer(M.emissiveMap.colorSpace)===lt,premultipliedAlpha:M.premultipliedAlpha,doubleSided:M.side===Gi,flipSided:M.side===Rn,useDepthPacking:M.depthPacking>=0,depthPacking:M.depthPacking||0,index0AttributeName:M.index0AttributeName,extensionClipCullDistance:ne&&M.extensions.clipCullDistance===!0&&i.has("WEBGL_clip_cull_distance"),extensionMultiDraw:(ne&&M.extensions.multiDraw===!0||Me)&&i.has("WEBGL_multi_draw"),rendererExtensionParallelShaderCompile:i.has("KHR_parallel_shader_compile"),customProgramCacheKey:M.customProgramCacheKey()};return Ge.vertexUv1s=c.has(1),Ge.vertexUv2s=c.has(2),Ge.vertexUv3s=c.has(3),c.clear(),Ge}function d(M){const T=[];if(M.shaderID?T.push(M.shaderID):(T.push(M.customVertexShaderID),T.push(M.customFragmentShaderID)),M.defines!==void 0)for(const L in M.defines)T.push(L),T.push(M.defines[L]);return M.isRawShaderMaterial===!1&&(v(T,M),_(T,M),T.push(t.outputColorSpace)),T.push(M.customProgramCacheKey),T.join()}function v(M,T){M.push(T.precision),M.push(T.outputColorSpace),M.push(T.envMapMode),M.push(T.envMapCubeUVHeight),M.push(T.mapUv),M.push(T.alphaMapUv),M.push(T.lightMapUv),M.push(T.aoMapUv),M.push(T.bumpMapUv),M.push(T.normalMapUv),M.push(T.displacementMapUv),M.push(T.emissiveMapUv),M.push(T.metalnessMapUv),M.push(T.roughnessMapUv),M.push(T.anisotropyMapUv),M.push(T.clearcoatMapUv),M.push(T.clearcoatNormalMapUv),M.push(T.clearcoatRoughnessMapUv),M.push(T.iridescenceMapUv),M.push(T.iridescenceThicknessMapUv),M.push(T.sheenColorMapUv),M.push(T.sheenRoughnessMapUv),M.push(T.specularMapUv),M.push(T.specularColorMapUv),M.push(T.specularIntensityMapUv),M.push(T.transmissionMapUv),M.push(T.thicknessMapUv),M.push(T.combine),M.push(T.fogExp2),M.push(T.sizeAttenuation),M.push(T.morphTargetsCount),M.push(T.morphAttributeCount),M.push(T.numDirLights),M.push(T.numPointLights),M.push(T.numSpotLights),M.push(T.numSpotLightMaps),M.push(T.numHemiLights),M.push(T.numRectAreaLights),M.push(T.numDirLightShadows),M.push(T.numPointLightShadows),M.push(T.numSpotLightShadows),M.push(T.numSpotLightShadowsWithMaps),M.push(T.numLightProbes),M.push(T.shadowMapType),M.push(T.toneMapping),M.push(T.numClippingPlanes),M.push(T.numClipIntersection),M.push(T.depthPacking)}function _(M,T){a.disableAll(),T.instancing&&a.enable(0),T.instancingColor&&a.enable(1),T.instancingMorph&&a.enable(2),T.matcap&&a.enable(3),T.envMap&&a.enable(4),T.normalMapObjectSpace&&a.enable(5),T.normalMapTangentSpace&&a.enable(6),T.clearcoat&&a.enable(7),T.iridescence&&a.enable(8),T.alphaTest&&a.enable(9),T.vertexColors&&a.enable(10),T.vertexAlphas&&a.enable(11),T.vertexUv1s&&a.enable(12),T.vertexUv2s&&a.enable(13),T.vertexUv3s&&a.enable(14),T.vertexTangents&&a.enable(15),T.anisotropy&&a.enable(16),T.alphaHash&&a.enable(17),T.batching&&a.enable(18),T.dispersion&&a.enable(19),T.batchingColor&&a.enable(20),T.gradientMap&&a.enable(21),M.push(a.mask),a.disableAll(),T.fog&&a.enable(0),T.useFog&&a.enable(1),T.flatShading&&a.enable(2),T.logarithmicDepthBuffer&&a.enable(3),T.reversedDepthBuffer&&a.enable(4),T.skinning&&a.enable(5),T.morphTargets&&a.enable(6),T.morphNormals&&a.enable(7),T.morphColors&&a.enable(8),T.premultipliedAlpha&&a.enable(9),T.shadowMapEnabled&&a.enable(10),T.doubleSided&&a.enable(11),T.flipSided&&a.enable(12),T.useDepthPacking&&a.enable(13),T.dithering&&a.enable(14),T.transmission&&a.enable(15),T.sheen&&a.enable(16),T.opaque&&a.enable(17),T.pointsUvs&&a.enable(18),T.decodeVideoTexture&&a.enable(19),T.decodeVideoTextureEmissive&&a.enable(20),T.alphaToCoverage&&a.enable(21),M.push(a.mask)}function S(M){const T=g[M.type];let L;if(T){const H=wi[T];L=fA.clone(H.uniforms)}else L=M.uniforms;return L}function E(M,T){let L=u.get(T);return L!==void 0?++L.usedTimes:(L=new jP(t,T,M,s),f.push(L),u.set(T,L)),L}function A(M){if(--M.usedTimes===0){const T=f.indexOf(M);f[T]=f[f.length-1],f.pop(),u.delete(M.cacheKey),M.destroy()}}function b(M){l.remove(M)}function R(){l.dispose()}return{getParameters:m,getProgramCacheKey:d,getUniforms:S,acquireProgram:E,releaseProgram:A,releaseShaderCache:b,programs:f,dispose:R}}function KP(){let t=new WeakMap;function e(o){return t.has(o)}function n(o){let a=t.get(o);return a===void 0&&(a={},t.set(o,a)),a}function i(o){t.delete(o)}function r(o,a,l){t.get(o)[a]=l}function s(){t=new WeakMap}return{has:e,get:n,remove:i,update:r,dispose:s}}function ZP(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.material.id!==e.material.id?t.material.id-e.material.id:t.z!==e.z?t.z-e.z:t.id-e.id}function uv(t,e){return t.groupOrder!==e.groupOrder?t.groupOrder-e.groupOrder:t.renderOrder!==e.renderOrder?t.renderOrder-e.renderOrder:t.z!==e.z?e.z-t.z:t.id-e.id}function fv(){const t=[];let e=0;const n=[],i=[],r=[];function s(){e=0,n.length=0,i.length=0,r.length=0}function o(u,h,p,g,x,m){let d=t[e];return d===void 0?(d={id:u.id,object:u,geometry:h,material:p,groupOrder:g,renderOrder:u.renderOrder,z:x,group:m},t[e]=d):(d.id=u.id,d.object=u,d.geometry=h,d.material=p,d.groupOrder=g,d.renderOrder=u.renderOrder,d.z=x,d.group=m),e++,d}function a(u,h,p,g,x,m){const d=o(u,h,p,g,x,m);p.transmission>0?i.push(d):p.transparent===!0?r.push(d):n.push(d)}function l(u,h,p,g,x,m){const d=o(u,h,p,g,x,m);p.transmission>0?i.unshift(d):p.transparent===!0?r.unshift(d):n.unshift(d)}function c(u,h){n.length>1&&n.sort(u||ZP),i.length>1&&i.sort(h||uv),r.length>1&&r.sort(h||uv)}function f(){for(let u=e,h=t.length;u<h;u++){const p=t[u];if(p.id===null)break;p.id=null,p.object=null,p.geometry=null,p.material=null,p.group=null}}return{opaque:n,transmissive:i,transparent:r,init:s,push:a,unshift:l,finish:f,sort:c}}function QP(){let t=new WeakMap;function e(i,r){const s=t.get(i);let o;return s===void 0?(o=new fv,t.set(i,[o])):r>=s.length?(o=new fv,s.push(o)):o=s[r],o}function n(){t=new WeakMap}return{get:e,dispose:n}}function JP(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={direction:new G,color:new ct};break;case"SpotLight":n={position:new G,direction:new G,color:new ct,distance:0,coneCos:0,penumbraCos:0,decay:0};break;case"PointLight":n={position:new G,color:new ct,distance:0,decay:0};break;case"HemisphereLight":n={direction:new G,skyColor:new ct,groundColor:new ct};break;case"RectAreaLight":n={color:new ct,position:new G,halfWidth:new G,halfHeight:new G};break}return t[e.id]=n,n}}}function e2(){const t={};return{get:function(e){if(t[e.id]!==void 0)return t[e.id];let n;switch(e.type){case"DirectionalLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"SpotLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt};break;case"PointLight":n={shadowIntensity:1,shadowBias:0,shadowNormalBias:0,shadowRadius:1,shadowMapSize:new pt,shadowCameraNear:1,shadowCameraFar:1e3};break}return t[e.id]=n,n}}}let t2=0;function n2(t,e){return(e.castShadow?2:0)-(t.castShadow?2:0)+(e.map?1:0)-(t.map?1:0)}function i2(t){const e=new JP,n=e2(),i={version:0,hash:{directionalLength:-1,pointLength:-1,spotLength:-1,rectAreaLength:-1,hemiLength:-1,numDirectionalShadows:-1,numPointShadows:-1,numSpotShadows:-1,numSpotMaps:-1,numLightProbes:-1},ambient:[0,0,0],probe:[],directional:[],directionalShadow:[],directionalShadowMap:[],directionalShadowMatrix:[],spot:[],spotLightMap:[],spotShadow:[],spotShadowMap:[],spotLightMatrix:[],rectArea:[],rectAreaLTC1:null,rectAreaLTC2:null,point:[],pointShadow:[],pointShadowMap:[],pointShadowMatrix:[],hemi:[],numSpotLightShadowsWithMaps:0,numLightProbes:0};for(let c=0;c<9;c++)i.probe.push(new G);const r=new G,s=new Nt,o=new Nt;function a(c){let f=0,u=0,h=0;for(let M=0;M<9;M++)i.probe[M].set(0,0,0);let p=0,g=0,x=0,m=0,d=0,v=0,_=0,S=0,E=0,A=0,b=0;c.sort(n2);for(let M=0,T=c.length;M<T;M++){const L=c[M],H=L.color,N=L.intensity,X=L.distance;let $=null;if(L.shadow&&L.shadow.map&&(L.shadow.map.texture.format===Mo?$=L.shadow.map.texture:$=L.shadow.map.depthTexture||L.shadow.map.texture),L.isAmbientLight)f+=H.r*N,u+=H.g*N,h+=H.b*N;else if(L.isLightProbe){for(let k=0;k<9;k++)i.probe[k].addScaledVector(L.sh.coefficients[k],N);b++}else if(L.isDirectionalLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),L.castShadow){const O=L.shadow,P=n.get(L);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,i.directionalShadow[p]=P,i.directionalShadowMap[p]=$,i.directionalShadowMatrix[p]=L.shadow.matrix,v++}i.directional[p]=k,p++}else if(L.isSpotLight){const k=e.get(L);k.position.setFromMatrixPosition(L.matrixWorld),k.color.copy(H).multiplyScalar(N),k.distance=X,k.coneCos=Math.cos(L.angle),k.penumbraCos=Math.cos(L.angle*(1-L.penumbra)),k.decay=L.decay,i.spot[x]=k;const O=L.shadow;if(L.map&&(i.spotLightMap[E]=L.map,E++,O.updateMatrices(L),L.castShadow&&A++),i.spotLightMatrix[x]=O.matrix,L.castShadow){const P=n.get(L);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,i.spotShadow[x]=P,i.spotShadowMap[x]=$,S++}x++}else if(L.isRectAreaLight){const k=e.get(L);k.color.copy(H).multiplyScalar(N),k.halfWidth.set(L.width*.5,0,0),k.halfHeight.set(0,L.height*.5,0),i.rectArea[m]=k,m++}else if(L.isPointLight){const k=e.get(L);if(k.color.copy(L.color).multiplyScalar(L.intensity),k.distance=L.distance,k.decay=L.decay,L.castShadow){const O=L.shadow,P=n.get(L);P.shadowIntensity=O.intensity,P.shadowBias=O.bias,P.shadowNormalBias=O.normalBias,P.shadowRadius=O.radius,P.shadowMapSize=O.mapSize,P.shadowCameraNear=O.camera.near,P.shadowCameraFar=O.camera.far,i.pointShadow[g]=P,i.pointShadowMap[g]=$,i.pointShadowMatrix[g]=L.shadow.matrix,_++}i.point[g]=k,g++}else if(L.isHemisphereLight){const k=e.get(L);k.skyColor.copy(L.color).multiplyScalar(N),k.groundColor.copy(L.groundColor).multiplyScalar(N),i.hemi[d]=k,d++}}m>0&&(t.has("OES_texture_float_linear")===!0?(i.rectAreaLTC1=me.LTC_FLOAT_1,i.rectAreaLTC2=me.LTC_FLOAT_2):(i.rectAreaLTC1=me.LTC_HALF_1,i.rectAreaLTC2=me.LTC_HALF_2)),i.ambient[0]=f,i.ambient[1]=u,i.ambient[2]=h;const R=i.hash;(R.directionalLength!==p||R.pointLength!==g||R.spotLength!==x||R.rectAreaLength!==m||R.hemiLength!==d||R.numDirectionalShadows!==v||R.numPointShadows!==_||R.numSpotShadows!==S||R.numSpotMaps!==E||R.numLightProbes!==b)&&(i.directional.length=p,i.spot.length=x,i.rectArea.length=m,i.point.length=g,i.hemi.length=d,i.directionalShadow.length=v,i.directionalShadowMap.length=v,i.pointShadow.length=_,i.pointShadowMap.length=_,i.spotShadow.length=S,i.spotShadowMap.length=S,i.directionalShadowMatrix.length=v,i.pointShadowMatrix.length=_,i.spotLightMatrix.length=S+E-A,i.spotLightMap.length=E,i.numSpotLightShadowsWithMaps=A,i.numLightProbes=b,R.directionalLength=p,R.pointLength=g,R.spotLength=x,R.rectAreaLength=m,R.hemiLength=d,R.numDirectionalShadows=v,R.numPointShadows=_,R.numSpotShadows=S,R.numSpotMaps=E,R.numLightProbes=b,i.version=t2++)}function l(c,f){let u=0,h=0,p=0,g=0,x=0;const m=f.matrixWorldInverse;for(let d=0,v=c.length;d<v;d++){const _=c[d];if(_.isDirectionalLight){const S=i.directional[u];S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),u++}else if(_.isSpotLight){const S=i.spot[p];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),S.direction.setFromMatrixPosition(_.matrixWorld),r.setFromMatrixPosition(_.target.matrixWorld),S.direction.sub(r),S.direction.transformDirection(m),p++}else if(_.isRectAreaLight){const S=i.rectArea[g];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),o.identity(),s.copy(_.matrixWorld),s.premultiply(m),o.extractRotation(s),S.halfWidth.set(_.width*.5,0,0),S.halfHeight.set(0,_.height*.5,0),S.halfWidth.applyMatrix4(o),S.halfHeight.applyMatrix4(o),g++}else if(_.isPointLight){const S=i.point[h];S.position.setFromMatrixPosition(_.matrixWorld),S.position.applyMatrix4(m),h++}else if(_.isHemisphereLight){const S=i.hemi[x];S.direction.setFromMatrixPosition(_.matrixWorld),S.direction.transformDirection(m),x++}}}return{setup:a,setupView:l,state:i}}function dv(t){const e=new i2(t),n=[],i=[];function r(f){c.camera=f,n.length=0,i.length=0}function s(f){n.push(f)}function o(f){i.push(f)}function a(){e.setup(n)}function l(f){e.setupView(n,f)}const c={lightsArray:n,shadowsArray:i,camera:null,lights:e,transmissionRenderTarget:{}};return{init:r,state:c,setupLights:a,setupLightsView:l,pushLight:s,pushShadow:o}}function r2(t){let e=new WeakMap;function n(r,s=0){const o=e.get(r);let a;return o===void 0?(a=new dv(t),e.set(r,[a])):s>=o.length?(a=new dv(t),o.push(a)):a=o[s],a}function i(){e=new WeakMap}return{get:n,dispose:i}}const s2=`void main() {
	gl_Position = vec4( position, 1.0 );
}`,o2=`uniform sampler2D shadow_pass;
uniform vec2 resolution;
uniform float radius;
void main() {
	const float samples = float( VSM_SAMPLES );
	float mean = 0.0;
	float squared_mean = 0.0;
	float uvStride = samples <= 1.0 ? 0.0 : 2.0 / ( samples - 1.0 );
	float uvStart = samples <= 1.0 ? 0.0 : - 1.0;
	for ( float i = 0.0; i < samples; i ++ ) {
		float uvOffset = uvStart + i * uvStride;
		#ifdef HORIZONTAL_PASS
			vec2 distribution = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( uvOffset, 0.0 ) * radius ) / resolution ).rg;
			mean += distribution.x;
			squared_mean += distribution.y * distribution.y + distribution.x * distribution.x;
		#else
			float depth = texture2D( shadow_pass, ( gl_FragCoord.xy + vec2( 0.0, uvOffset ) * radius ) / resolution ).r;
			mean += depth;
			squared_mean += depth * depth;
		#endif
	}
	mean = mean / samples;
	squared_mean = squared_mean / samples;
	float std_dev = sqrt( max( 0.0, squared_mean - mean * mean ) );
	gl_FragColor = vec4( mean, std_dev, 0.0, 1.0 );
}`,a2=[new G(1,0,0),new G(-1,0,0),new G(0,1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1)],l2=[new G(0,-1,0),new G(0,-1,0),new G(0,0,1),new G(0,0,-1),new G(0,-1,0),new G(0,-1,0)],hv=new Nt,Ko=new G,Vf=new G;function c2(t,e,n){let i=new PS;const r=new pt,s=new pt,o=new It,a=new TA,l=new wA,c={},f=n.maxTextureSize,u={[Ur]:Rn,[Rn]:Ur,[Gi]:Gi},h=new Ui({defines:{VSM_SAMPLES:8},uniforms:{shadow_pass:{value:null},resolution:{value:new pt},radius:{value:4}},vertexShader:s2,fragmentShader:o2}),p=h.clone();p.defines.HORIZONTAL_PASS=1;const g=new _i;g.setAttribute("position",new wn(new Float32Array([-1,-1,.5,3,-1,.5,-1,3,.5]),3));const x=new rr(g,h),m=this;this.enabled=!1,this.autoUpdate=!0,this.needsUpdate=!1,this.type=pc;let d=this.type;this.render=function(A,b,R){if(m.enabled===!1||m.autoUpdate===!1&&m.needsUpdate===!1||A.length===0)return;A.type===hw&&(Be("WebGLShadowMap: PCFSoftShadowMap has been deprecated. Using PCFShadowMap instead."),A.type=pc);const M=t.getRenderTarget(),T=t.getActiveCubeFace(),L=t.getActiveMipmapLevel(),H=t.state;H.setBlending($i),H.buffers.depth.getReversed()===!0?H.buffers.color.setClear(0,0,0,0):H.buffers.color.setClear(1,1,1,1),H.buffers.depth.setTest(!0),H.setScissorTest(!1);const N=d!==this.type;N&&b.traverse(function(X){X.material&&(Array.isArray(X.material)?X.material.forEach($=>$.needsUpdate=!0):X.material.needsUpdate=!0)});for(let X=0,$=A.length;X<$;X++){const k=A[X],O=k.shadow;if(O===void 0){Be("WebGLShadowMap:",k,"has no shadow.");continue}if(O.autoUpdate===!1&&O.needsUpdate===!1)continue;r.copy(O.mapSize);const P=O.getFrameExtents();if(r.multiply(P),s.copy(O.mapSize),(r.x>f||r.y>f)&&(r.x>f&&(s.x=Math.floor(f/P.x),r.x=s.x*P.x,O.mapSize.x=s.x),r.y>f&&(s.y=Math.floor(f/P.y),r.y=s.y*P.y,O.mapSize.y=s.y)),O.map===null||N===!0){if(O.map!==null&&(O.map.depthTexture!==null&&(O.map.depthTexture.dispose(),O.map.depthTexture=null),O.map.dispose()),this.type===na){if(k.isPointLight){Be("WebGLShadowMap: VSM shadow maps are not supported for PointLights. Use PCF or BasicShadowMap instead.");continue}O.map=new Li(r.x,r.y,{format:Mo,type:tr,minFilter:sn,magFilter:sn,generateMipmaps:!1}),O.map.texture.name=k.name+".shadowMap",O.map.depthTexture=new Ba(r.x,r.y,bi),O.map.depthTexture.name=k.name+".shadowMapDepth",O.map.depthTexture.format=nr,O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt}else{k.isPointLight?(O.map=new RS(r.x),O.map.depthTexture=new MA(r.x,Ni)):(O.map=new Li(r.x,r.y),O.map.depthTexture=new Ba(r.x,r.y,Ni)),O.map.depthTexture.name=k.name+".shadowMap",O.map.depthTexture.format=nr;const Y=t.state.buffers.depth.getReversed();this.type===pc?(O.map.depthTexture.compareFunction=Y?Em:Mm,O.map.depthTexture.minFilter=sn,O.map.depthTexture.magFilter=sn):(O.map.depthTexture.compareFunction=null,O.map.depthTexture.minFilter=Kt,O.map.depthTexture.magFilter=Kt)}O.camera.updateProjectionMatrix()}const K=O.map.isWebGLCubeRenderTarget?6:1;for(let Y=0;Y<K;Y++){if(O.map.isWebGLCubeRenderTarget)t.setRenderTarget(O.map,Y),t.clear();else{Y===0&&(t.setRenderTarget(O.map),t.clear());const te=O.getViewport(Y);o.set(s.x*te.x,s.y*te.y,s.x*te.z,s.y*te.w),H.viewport(o)}if(k.isPointLight){const te=O.camera,be=O.matrix,he=k.distance||te.far;he!==te.far&&(te.far=he,te.updateProjectionMatrix()),Ko.setFromMatrixPosition(k.matrixWorld),te.position.copy(Ko),Vf.copy(te.position),Vf.add(a2[Y]),te.up.copy(l2[Y]),te.lookAt(Vf),te.updateMatrixWorld(),be.makeTranslation(-Ko.x,-Ko.y,-Ko.z),hv.multiplyMatrices(te.projectionMatrix,te.matrixWorldInverse),O._frustum.setFromProjectionMatrix(hv,te.coordinateSystem,te.reversedDepth)}else O.updateMatrices(k);i=O.getFrustum(),S(b,R,O.camera,k,this.type)}O.isPointLightShadow!==!0&&this.type===na&&v(O,R),O.needsUpdate=!1}d=this.type,m.needsUpdate=!1,t.setRenderTarget(M,T,L)};function v(A,b){const R=e.update(x);h.defines.VSM_SAMPLES!==A.blurSamples&&(h.defines.VSM_SAMPLES=A.blurSamples,p.defines.VSM_SAMPLES=A.blurSamples,h.needsUpdate=!0,p.needsUpdate=!0),A.mapPass===null&&(A.mapPass=new Li(r.x,r.y,{format:Mo,type:tr})),h.uniforms.shadow_pass.value=A.map.depthTexture,h.uniforms.resolution.value=A.mapSize,h.uniforms.radius.value=A.radius,t.setRenderTarget(A.mapPass),t.clear(),t.renderBufferDirect(b,null,R,h,x,null),p.uniforms.shadow_pass.value=A.mapPass.texture,p.uniforms.resolution.value=A.mapSize,p.uniforms.radius.value=A.radius,t.setRenderTarget(A.map),t.clear(),t.renderBufferDirect(b,null,R,p,x,null)}function _(A,b,R,M){let T=null;const L=R.isPointLight===!0?A.customDistanceMaterial:A.customDepthMaterial;if(L!==void 0)T=L;else if(T=R.isPointLight===!0?l:a,t.localClippingEnabled&&b.clipShadows===!0&&Array.isArray(b.clippingPlanes)&&b.clippingPlanes.length!==0||b.displacementMap&&b.displacementScale!==0||b.alphaMap&&b.alphaTest>0||b.map&&b.alphaTest>0||b.alphaToCoverage===!0){const H=T.uuid,N=b.uuid;let X=c[H];X===void 0&&(X={},c[H]=X);let $=X[N];$===void 0&&($=T.clone(),X[N]=$,b.addEventListener("dispose",E)),T=$}if(T.visible=b.visible,T.wireframe=b.wireframe,M===na?T.side=b.shadowSide!==null?b.shadowSide:b.side:T.side=b.shadowSide!==null?b.shadowSide:u[b.side],T.alphaMap=b.alphaMap,T.alphaTest=b.alphaToCoverage===!0?.5:b.alphaTest,T.map=b.map,T.clipShadows=b.clipShadows,T.clippingPlanes=b.clippingPlanes,T.clipIntersection=b.clipIntersection,T.displacementMap=b.displacementMap,T.displacementScale=b.displacementScale,T.displacementBias=b.displacementBias,T.wireframeLinewidth=b.wireframeLinewidth,T.linewidth=b.linewidth,R.isPointLight===!0&&T.isMeshDistanceMaterial===!0){const H=t.properties.get(T);H.light=R}return T}function S(A,b,R,M,T){if(A.visible===!1)return;if(A.layers.test(b.layers)&&(A.isMesh||A.isLine||A.isPoints)&&(A.castShadow||A.receiveShadow&&T===na)&&(!A.frustumCulled||i.intersectsObject(A))){A.modelViewMatrix.multiplyMatrices(R.matrixWorldInverse,A.matrixWorld);const N=e.update(A),X=A.material;if(Array.isArray(X)){const $=N.groups;for(let k=0,O=$.length;k<O;k++){const P=$[k],K=X[P.materialIndex];if(K&&K.visible){const Y=_(A,K,M,T);A.onBeforeShadow(t,A,b,R,N,Y,P),t.renderBufferDirect(R,null,N,Y,A,P),A.onAfterShadow(t,A,b,R,N,Y,P)}}}else if(X.visible){const $=_(A,X,M,T);A.onBeforeShadow(t,A,b,R,N,$,null),t.renderBufferDirect(R,null,N,$,A,null),A.onAfterShadow(t,A,b,R,N,$,null)}}const H=A.children;for(let N=0,X=H.length;N<X;N++)S(H[N],b,R,M,T)}function E(A){A.target.removeEventListener("dispose",E);for(const R in c){const M=c[R],T=A.target.uuid;T in M&&(M[T].dispose(),delete M[T])}}}const u2={[nh]:ih,[rh]:ah,[sh]:lh,[yo]:oh,[ih]:nh,[ah]:rh,[lh]:sh,[oh]:yo};function f2(t,e){function n(){let I=!1;const ge=new It;let ae=null;const xe=new It(0,0,0,0);return{setMask:function(ie){ae!==ie&&!I&&(t.colorMask(ie,ie,ie,ie),ae=ie)},setLocked:function(ie){I=ie},setClear:function(ie,z,ne,Pe,Ge){Ge===!0&&(ie*=Pe,z*=Pe,ne*=Pe),ge.set(ie,z,ne,Pe),xe.equals(ge)===!1&&(t.clearColor(ie,z,ne,Pe),xe.copy(ge))},reset:function(){I=!1,ae=null,xe.set(-1,0,0,0)}}}function i(){let I=!1,ge=!1,ae=null,xe=null,ie=null;return{setReversed:function(z){if(ge!==z){const ne=e.get("EXT_clip_control");z?ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.ZERO_TO_ONE_EXT):ne.clipControlEXT(ne.LOWER_LEFT_EXT,ne.NEGATIVE_ONE_TO_ONE_EXT),ge=z;const Pe=ie;ie=null,this.setClear(Pe)}},getReversed:function(){return ge},setTest:function(z){z?J(t.DEPTH_TEST):oe(t.DEPTH_TEST)},setMask:function(z){ae!==z&&!I&&(t.depthMask(z),ae=z)},setFunc:function(z){if(ge&&(z=u2[z]),xe!==z){switch(z){case nh:t.depthFunc(t.NEVER);break;case ih:t.depthFunc(t.ALWAYS);break;case rh:t.depthFunc(t.LESS);break;case yo:t.depthFunc(t.LEQUAL);break;case sh:t.depthFunc(t.EQUAL);break;case oh:t.depthFunc(t.GEQUAL);break;case ah:t.depthFunc(t.GREATER);break;case lh:t.depthFunc(t.NOTEQUAL);break;default:t.depthFunc(t.LEQUAL)}xe=z}},setLocked:function(z){I=z},setClear:function(z){ie!==z&&(ge&&(z=1-z),t.clearDepth(z),ie=z)},reset:function(){I=!1,ae=null,xe=null,ie=null,ge=!1}}}function r(){let I=!1,ge=null,ae=null,xe=null,ie=null,z=null,ne=null,Pe=null,Ge=null;return{setTest:function(Ke){I||(Ke?J(t.STENCIL_TEST):oe(t.STENCIL_TEST))},setMask:function(Ke){ge!==Ke&&!I&&(t.stencilMask(Ke),ge=Ke)},setFunc:function(Ke,dt,bt){(ae!==Ke||xe!==dt||ie!==bt)&&(t.stencilFunc(Ke,dt,bt),ae=Ke,xe=dt,ie=bt)},setOp:function(Ke,dt,bt){(z!==Ke||ne!==dt||Pe!==bt)&&(t.stencilOp(Ke,dt,bt),z=Ke,ne=dt,Pe=bt)},setLocked:function(Ke){I=Ke},setClear:function(Ke){Ge!==Ke&&(t.clearStencil(Ke),Ge=Ke)},reset:function(){I=!1,ge=null,ae=null,xe=null,ie=null,z=null,ne=null,Pe=null,Ge=null}}}const s=new n,o=new i,a=new r,l=new WeakMap,c=new WeakMap;let f={},u={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,_=null,S=null,E=null,A=null,b=new ct(0,0,0),R=0,M=!1,T=null,L=null,H=null,N=null,X=null;const $=t.getParameter(t.MAX_COMBINED_TEXTURE_IMAGE_UNITS);let k=!1,O=0;const P=t.getParameter(t.VERSION);P.indexOf("WebGL")!==-1?(O=parseFloat(/^WebGL (\d)/.exec(P)[1]),k=O>=1):P.indexOf("OpenGL ES")!==-1&&(O=parseFloat(/^OpenGL ES (\d)/.exec(P)[1]),k=O>=2);let K=null,Y={};const te=t.getParameter(t.SCISSOR_BOX),be=t.getParameter(t.VIEWPORT),he=new It().fromArray(te),Ie=new It().fromArray(be);function Ne(I,ge,ae,xe){const ie=new Uint8Array(4),z=t.createTexture();t.bindTexture(I,z),t.texParameteri(I,t.TEXTURE_MIN_FILTER,t.NEAREST),t.texParameteri(I,t.TEXTURE_MAG_FILTER,t.NEAREST);for(let ne=0;ne<ae;ne++)I===t.TEXTURE_3D||I===t.TEXTURE_2D_ARRAY?t.texImage3D(ge,0,t.RGBA,1,1,xe,0,t.RGBA,t.UNSIGNED_BYTE,ie):t.texImage2D(ge+ne,0,t.RGBA,1,1,0,t.RGBA,t.UNSIGNED_BYTE,ie);return z}const q={};q[t.TEXTURE_2D]=Ne(t.TEXTURE_2D,t.TEXTURE_2D,1),q[t.TEXTURE_CUBE_MAP]=Ne(t.TEXTURE_CUBE_MAP,t.TEXTURE_CUBE_MAP_POSITIVE_X,6),q[t.TEXTURE_2D_ARRAY]=Ne(t.TEXTURE_2D_ARRAY,t.TEXTURE_2D_ARRAY,1,1),q[t.TEXTURE_3D]=Ne(t.TEXTURE_3D,t.TEXTURE_3D,1,1),s.setClear(0,0,0,1),o.setClear(1),a.setClear(0),J(t.DEPTH_TEST),o.setFunc(yo),ze(!1),gt(_0),J(t.CULL_FACE),Ze($i);function J(I){f[I]!==!0&&(t.enable(I),f[I]=!0)}function oe(I){f[I]!==!1&&(t.disable(I),f[I]=!1)}function Oe(I,ge){return u[I]!==ge?(t.bindFramebuffer(I,ge),u[I]=ge,I===t.DRAW_FRAMEBUFFER&&(u[t.FRAMEBUFFER]=ge),I===t.FRAMEBUFFER&&(u[t.DRAW_FRAMEBUFFER]=ge),!0):!1}function Me(I,ge){let ae=p,xe=!1;if(I){ae=h.get(ge),ae===void 0&&(ae=[],h.set(ge,ae));const ie=I.textures;if(ae.length!==ie.length||ae[0]!==t.COLOR_ATTACHMENT0){for(let z=0,ne=ie.length;z<ne;z++)ae[z]=t.COLOR_ATTACHMENT0+z;ae.length=ie.length,xe=!0}}else ae[0]!==t.BACK&&(ae[0]=t.BACK,xe=!0);xe&&t.drawBuffers(ae)}function Xe(I){return g!==I?(t.useProgram(I),g=I,!0):!1}const xt={[es]:t.FUNC_ADD,[mw]:t.FUNC_SUBTRACT,[gw]:t.FUNC_REVERSE_SUBTRACT};xt[vw]=t.MIN,xt[_w]=t.MAX;const $e={[xw]:t.ZERO,[yw]:t.ONE,[Sw]:t.SRC_COLOR,[eh]:t.SRC_ALPHA,[bw]:t.SRC_ALPHA_SATURATE,[ww]:t.DST_COLOR,[Ew]:t.DST_ALPHA,[Mw]:t.ONE_MINUS_SRC_COLOR,[th]:t.ONE_MINUS_SRC_ALPHA,[Aw]:t.ONE_MINUS_DST_COLOR,[Tw]:t.ONE_MINUS_DST_ALPHA,[Cw]:t.CONSTANT_COLOR,[Rw]:t.ONE_MINUS_CONSTANT_COLOR,[Pw]:t.CONSTANT_ALPHA,[Dw]:t.ONE_MINUS_CONSTANT_ALPHA};function Ze(I,ge,ae,xe,ie,z,ne,Pe,Ge,Ke){if(I===$i){x===!0&&(oe(t.BLEND),x=!1);return}if(x===!1&&(J(t.BLEND),x=!0),I!==pw){if(I!==m||Ke!==M){if((d!==es||S!==es)&&(t.blendEquation(t.FUNC_ADD),d=es,S=es),Ke)switch(I){case co:t.blendFuncSeparate(t.ONE,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jd:t.blendFunc(t.ONE,t.ONE);break;case x0:t.blendFuncSeparate(t.ZERO,t.ONE_MINUS_SRC_COLOR,t.ZERO,t.ONE);break;case y0:t.blendFuncSeparate(t.DST_COLOR,t.ONE_MINUS_SRC_ALPHA,t.ZERO,t.ONE);break;default:it("WebGLState: Invalid blending: ",I);break}else switch(I){case co:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE_MINUS_SRC_ALPHA,t.ONE,t.ONE_MINUS_SRC_ALPHA);break;case Jd:t.blendFuncSeparate(t.SRC_ALPHA,t.ONE,t.ONE,t.ONE);break;case x0:it("WebGLState: SubtractiveBlending requires material.premultipliedAlpha = true");break;case y0:it("WebGLState: MultiplyBlending requires material.premultipliedAlpha = true");break;default:it("WebGLState: Invalid blending: ",I);break}v=null,_=null,E=null,A=null,b.set(0,0,0),R=0,m=I,M=Ke}return}ie=ie||ge,z=z||ae,ne=ne||xe,(ge!==d||ie!==S)&&(t.blendEquationSeparate(xt[ge],xt[ie]),d=ge,S=ie),(ae!==v||xe!==_||z!==E||ne!==A)&&(t.blendFuncSeparate($e[ae],$e[xe],$e[z],$e[ne]),v=ae,_=xe,E=z,A=ne),(Pe.equals(b)===!1||Ge!==R)&&(t.blendColor(Pe.r,Pe.g,Pe.b,Ge),b.copy(Pe),R=Ge),m=I,M=!1}function st(I,ge){I.side===Gi?oe(t.CULL_FACE):J(t.CULL_FACE);let ae=I.side===Rn;ge&&(ae=!ae),ze(ae),I.blending===co&&I.transparent===!1?Ze($i):Ze(I.blending,I.blendEquation,I.blendSrc,I.blendDst,I.blendEquationAlpha,I.blendSrcAlpha,I.blendDstAlpha,I.blendColor,I.blendAlpha,I.premultipliedAlpha),o.setFunc(I.depthFunc),o.setTest(I.depthTest),o.setMask(I.depthWrite),s.setMask(I.colorWrite);const xe=I.stencilWrite;a.setTest(xe),xe&&(a.setMask(I.stencilWriteMask),a.setFunc(I.stencilFunc,I.stencilRef,I.stencilFuncMask),a.setOp(I.stencilFail,I.stencilZFail,I.stencilZPass)),rt(I.polygonOffset,I.polygonOffsetFactor,I.polygonOffsetUnits),I.alphaToCoverage===!0?J(t.SAMPLE_ALPHA_TO_COVERAGE):oe(t.SAMPLE_ALPHA_TO_COVERAGE)}function ze(I){T!==I&&(I?t.frontFace(t.CW):t.frontFace(t.CCW),T=I)}function gt(I){I!==fw?(J(t.CULL_FACE),I!==L&&(I===_0?t.cullFace(t.BACK):I===dw?t.cullFace(t.FRONT):t.cullFace(t.FRONT_AND_BACK))):oe(t.CULL_FACE),L=I}function D(I){I!==H&&(k&&t.lineWidth(I),H=I)}function rt(I,ge,ae){I?(J(t.POLYGON_OFFSET_FILL),(N!==ge||X!==ae)&&(t.polygonOffset(ge,ae),N=ge,X=ae)):oe(t.POLYGON_OFFSET_FILL)}function tt(I){I?J(t.SCISSOR_TEST):oe(t.SCISSOR_TEST)}function ft(I){I===void 0&&(I=t.TEXTURE0+$-1),K!==I&&(t.activeTexture(I),K=I)}function ve(I,ge,ae){ae===void 0&&(K===null?ae=t.TEXTURE0+$-1:ae=K);let xe=Y[ae];xe===void 0&&(xe={type:void 0,texture:void 0},Y[ae]=xe),(xe.type!==I||xe.texture!==ge)&&(K!==ae&&(t.activeTexture(ae),K=ae),t.bindTexture(I,ge||q[I]),xe.type=I,xe.texture=ge)}function C(){const I=Y[K];I!==void 0&&I.type!==void 0&&(t.bindTexture(I.type,null),I.type=void 0,I.texture=void 0)}function y(){try{t.compressedTexImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function U(){try{t.compressedTexImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function Q(){try{t.texSubImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function ee(){try{t.texSubImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function Z(){try{t.compressedTexSubImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function Ce(){try{t.compressedTexSubImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function le(){try{t.texStorage2D(...arguments)}catch(I){it("WebGLState:",I)}}function we(){try{t.texStorage3D(...arguments)}catch(I){it("WebGLState:",I)}}function Le(){try{t.texImage2D(...arguments)}catch(I){it("WebGLState:",I)}}function re(){try{t.texImage3D(...arguments)}catch(I){it("WebGLState:",I)}}function de(I){he.equals(I)===!1&&(t.scissor(I.x,I.y,I.z,I.w),he.copy(I))}function Ee(I){Ie.equals(I)===!1&&(t.viewport(I.x,I.y,I.z,I.w),Ie.copy(I))}function Re(I,ge){let ae=c.get(ge);ae===void 0&&(ae=new WeakMap,c.set(ge,ae));let xe=ae.get(I);xe===void 0&&(xe=t.getUniformBlockIndex(ge,I.name),ae.set(I,xe))}function fe(I,ge){const xe=c.get(ge).get(I);l.get(ge)!==xe&&(t.uniformBlockBinding(ge,xe,I.__bindingPointIndex),l.set(ge,xe))}function Ve(){t.disable(t.BLEND),t.disable(t.CULL_FACE),t.disable(t.DEPTH_TEST),t.disable(t.POLYGON_OFFSET_FILL),t.disable(t.SCISSOR_TEST),t.disable(t.STENCIL_TEST),t.disable(t.SAMPLE_ALPHA_TO_COVERAGE),t.blendEquation(t.FUNC_ADD),t.blendFunc(t.ONE,t.ZERO),t.blendFuncSeparate(t.ONE,t.ZERO,t.ONE,t.ZERO),t.blendColor(0,0,0,0),t.colorMask(!0,!0,!0,!0),t.clearColor(0,0,0,0),t.depthMask(!0),t.depthFunc(t.LESS),o.setReversed(!1),t.clearDepth(1),t.stencilMask(4294967295),t.stencilFunc(t.ALWAYS,0,4294967295),t.stencilOp(t.KEEP,t.KEEP,t.KEEP),t.clearStencil(0),t.cullFace(t.BACK),t.frontFace(t.CCW),t.polygonOffset(0,0),t.activeTexture(t.TEXTURE0),t.bindFramebuffer(t.FRAMEBUFFER,null),t.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),t.bindFramebuffer(t.READ_FRAMEBUFFER,null),t.useProgram(null),t.lineWidth(1),t.scissor(0,0,t.canvas.width,t.canvas.height),t.viewport(0,0,t.canvas.width,t.canvas.height),f={},K=null,Y={},u={},h=new WeakMap,p=[],g=null,x=!1,m=null,d=null,v=null,_=null,S=null,E=null,A=null,b=new ct(0,0,0),R=0,M=!1,T=null,L=null,H=null,N=null,X=null,he.set(0,0,t.canvas.width,t.canvas.height),Ie.set(0,0,t.canvas.width,t.canvas.height),s.reset(),o.reset(),a.reset()}return{buffers:{color:s,depth:o,stencil:a},enable:J,disable:oe,bindFramebuffer:Oe,drawBuffers:Me,useProgram:Xe,setBlending:Ze,setMaterial:st,setFlipSided:ze,setCullFace:gt,setLineWidth:D,setPolygonOffset:rt,setScissorTest:tt,activeTexture:ft,bindTexture:ve,unbindTexture:C,compressedTexImage2D:y,compressedTexImage3D:U,texImage2D:Le,texImage3D:re,updateUBOMapping:Re,uniformBlockBinding:fe,texStorage2D:le,texStorage3D:we,texSubImage2D:Q,texSubImage3D:ee,compressedTexSubImage2D:Z,compressedTexSubImage3D:Ce,scissor:de,viewport:Ee,reset:Ve}}function d2(t,e,n,i,r,s,o){const a=e.has("WEBGL_multisampled_render_to_texture")?e.get("WEBGL_multisampled_render_to_texture"):null,l=typeof navigator>"u"?!1:/OculusBrowser/g.test(navigator.userAgent),c=new pt,f=new WeakMap;let u;const h=new WeakMap;let p=!1;try{p=typeof OffscreenCanvas<"u"&&new OffscreenCanvas(1,1).getContext("2d")!==null}catch{}function g(C,y){return p?new OffscreenCanvas(C,y):Qc("canvas")}function x(C,y,U){let Q=1;const ee=ve(C);if((ee.width>U||ee.height>U)&&(Q=U/Math.max(ee.width,ee.height)),Q<1)if(typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement||typeof HTMLCanvasElement<"u"&&C instanceof HTMLCanvasElement||typeof ImageBitmap<"u"&&C instanceof ImageBitmap||typeof VideoFrame<"u"&&C instanceof VideoFrame){const Z=Math.floor(Q*ee.width),Ce=Math.floor(Q*ee.height);u===void 0&&(u=g(Z,Ce));const le=y?g(Z,Ce):u;return le.width=Z,le.height=Ce,le.getContext("2d").drawImage(C,0,0,Z,Ce),Be("WebGLRenderer: Texture has been resized from ("+ee.width+"x"+ee.height+") to ("+Z+"x"+Ce+")."),le}else return"data"in C&&Be("WebGLRenderer: Image in DataTexture is too big ("+ee.width+"x"+ee.height+")."),C;return C}function m(C){return C.generateMipmaps}function d(C){t.generateMipmap(C)}function v(C){return C.isWebGLCubeRenderTarget?t.TEXTURE_CUBE_MAP:C.isWebGL3DRenderTarget?t.TEXTURE_3D:C.isWebGLArrayRenderTarget||C.isCompressedArrayTexture?t.TEXTURE_2D_ARRAY:t.TEXTURE_2D}function _(C,y,U,Q,ee=!1){if(C!==null){if(t[C]!==void 0)return t[C];Be("WebGLRenderer: Attempt to use non-existing WebGL internal format '"+C+"'")}let Z=y;if(y===t.RED&&(U===t.FLOAT&&(Z=t.R32F),U===t.HALF_FLOAT&&(Z=t.R16F),U===t.UNSIGNED_BYTE&&(Z=t.R8)),y===t.RED_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.R8UI),U===t.UNSIGNED_SHORT&&(Z=t.R16UI),U===t.UNSIGNED_INT&&(Z=t.R32UI),U===t.BYTE&&(Z=t.R8I),U===t.SHORT&&(Z=t.R16I),U===t.INT&&(Z=t.R32I)),y===t.RG&&(U===t.FLOAT&&(Z=t.RG32F),U===t.HALF_FLOAT&&(Z=t.RG16F),U===t.UNSIGNED_BYTE&&(Z=t.RG8)),y===t.RG_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RG8UI),U===t.UNSIGNED_SHORT&&(Z=t.RG16UI),U===t.UNSIGNED_INT&&(Z=t.RG32UI),U===t.BYTE&&(Z=t.RG8I),U===t.SHORT&&(Z=t.RG16I),U===t.INT&&(Z=t.RG32I)),y===t.RGB_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGB8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGB16UI),U===t.UNSIGNED_INT&&(Z=t.RGB32UI),U===t.BYTE&&(Z=t.RGB8I),U===t.SHORT&&(Z=t.RGB16I),U===t.INT&&(Z=t.RGB32I)),y===t.RGBA_INTEGER&&(U===t.UNSIGNED_BYTE&&(Z=t.RGBA8UI),U===t.UNSIGNED_SHORT&&(Z=t.RGBA16UI),U===t.UNSIGNED_INT&&(Z=t.RGBA32UI),U===t.BYTE&&(Z=t.RGBA8I),U===t.SHORT&&(Z=t.RGBA16I),U===t.INT&&(Z=t.RGBA32I)),y===t.RGB&&(U===t.UNSIGNED_INT_5_9_9_9_REV&&(Z=t.RGB9_E5),U===t.UNSIGNED_INT_10F_11F_11F_REV&&(Z=t.R11F_G11F_B10F)),y===t.RGBA){const Ce=ee?Kc:Qe.getTransfer(Q);U===t.FLOAT&&(Z=t.RGBA32F),U===t.HALF_FLOAT&&(Z=t.RGBA16F),U===t.UNSIGNED_BYTE&&(Z=Ce===lt?t.SRGB8_ALPHA8:t.RGBA8),U===t.UNSIGNED_SHORT_4_4_4_4&&(Z=t.RGBA4),U===t.UNSIGNED_SHORT_5_5_5_1&&(Z=t.RGB5_A1)}return(Z===t.R16F||Z===t.R32F||Z===t.RG16F||Z===t.RG32F||Z===t.RGBA16F||Z===t.RGBA32F)&&e.get("EXT_color_buffer_float"),Z}function S(C,y){let U;return C?y===null||y===Ni||y===Oa?U=t.DEPTH24_STENCIL8:y===bi?U=t.DEPTH32F_STENCIL8:y===Fa&&(U=t.DEPTH24_STENCIL8,Be("DepthTexture: 16 bit depth attachment is not supported with stencil. Using 24-bit attachment.")):y===null||y===Ni||y===Oa?U=t.DEPTH_COMPONENT24:y===bi?U=t.DEPTH_COMPONENT32F:y===Fa&&(U=t.DEPTH_COMPONENT16),U}function E(C,y){return m(C)===!0||C.isFramebufferTexture&&C.minFilter!==Kt&&C.minFilter!==sn?Math.log2(Math.max(y.width,y.height))+1:C.mipmaps!==void 0&&C.mipmaps.length>0?C.mipmaps.length:C.isCompressedTexture&&Array.isArray(C.image)?y.mipmaps.length:1}function A(C){const y=C.target;y.removeEventListener("dispose",A),R(y),y.isVideoTexture&&f.delete(y)}function b(C){const y=C.target;y.removeEventListener("dispose",b),T(y)}function R(C){const y=i.get(C);if(y.__webglInit===void 0)return;const U=C.source,Q=h.get(U);if(Q){const ee=Q[y.__cacheKey];ee.usedTimes--,ee.usedTimes===0&&M(C),Object.keys(Q).length===0&&h.delete(U)}i.remove(C)}function M(C){const y=i.get(C);t.deleteTexture(y.__webglTexture);const U=C.source,Q=h.get(U);delete Q[y.__cacheKey],o.memory.textures--}function T(C){const y=i.get(C);if(C.depthTexture&&(C.depthTexture.dispose(),i.remove(C.depthTexture)),C.isWebGLCubeRenderTarget)for(let Q=0;Q<6;Q++){if(Array.isArray(y.__webglFramebuffer[Q]))for(let ee=0;ee<y.__webglFramebuffer[Q].length;ee++)t.deleteFramebuffer(y.__webglFramebuffer[Q][ee]);else t.deleteFramebuffer(y.__webglFramebuffer[Q]);y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer[Q])}else{if(Array.isArray(y.__webglFramebuffer))for(let Q=0;Q<y.__webglFramebuffer.length;Q++)t.deleteFramebuffer(y.__webglFramebuffer[Q]);else t.deleteFramebuffer(y.__webglFramebuffer);if(y.__webglDepthbuffer&&t.deleteRenderbuffer(y.__webglDepthbuffer),y.__webglMultisampledFramebuffer&&t.deleteFramebuffer(y.__webglMultisampledFramebuffer),y.__webglColorRenderbuffer)for(let Q=0;Q<y.__webglColorRenderbuffer.length;Q++)y.__webglColorRenderbuffer[Q]&&t.deleteRenderbuffer(y.__webglColorRenderbuffer[Q]);y.__webglDepthRenderbuffer&&t.deleteRenderbuffer(y.__webglDepthRenderbuffer)}const U=C.textures;for(let Q=0,ee=U.length;Q<ee;Q++){const Z=i.get(U[Q]);Z.__webglTexture&&(t.deleteTexture(Z.__webglTexture),o.memory.textures--),i.remove(U[Q])}i.remove(C)}let L=0;function H(){L=0}function N(){const C=L;return C>=r.maxTextures&&Be("WebGLTextures: Trying to use "+C+" texture units while this GPU supports only "+r.maxTextures),L+=1,C}function X(C){const y=[];return y.push(C.wrapS),y.push(C.wrapT),y.push(C.wrapR||0),y.push(C.magFilter),y.push(C.minFilter),y.push(C.anisotropy),y.push(C.internalFormat),y.push(C.format),y.push(C.type),y.push(C.generateMipmaps),y.push(C.premultiplyAlpha),y.push(C.flipY),y.push(C.unpackAlignment),y.push(C.colorSpace),y.join()}function $(C,y){const U=i.get(C);if(C.isVideoTexture&&tt(C),C.isRenderTargetTexture===!1&&C.isExternalTexture!==!0&&C.version>0&&U.__version!==C.version){const Q=C.image;if(Q===null)Be("WebGLRenderer: Texture marked for update but no image data found.");else if(Q.complete===!1)Be("WebGLRenderer: Texture marked for update but image is incomplete");else{q(U,C,y);return}}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D,U.__webglTexture,t.TEXTURE0+y)}function k(C,y){const U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){q(U,C,y);return}else C.isExternalTexture&&(U.__webglTexture=C.sourceTexture?C.sourceTexture:null);n.bindTexture(t.TEXTURE_2D_ARRAY,U.__webglTexture,t.TEXTURE0+y)}function O(C,y){const U=i.get(C);if(C.isRenderTargetTexture===!1&&C.version>0&&U.__version!==C.version){q(U,C,y);return}n.bindTexture(t.TEXTURE_3D,U.__webglTexture,t.TEXTURE0+y)}function P(C,y){const U=i.get(C);if(C.isCubeDepthTexture!==!0&&C.version>0&&U.__version!==C.version){J(U,C,y);return}n.bindTexture(t.TEXTURE_CUBE_MAP,U.__webglTexture,t.TEXTURE0+y)}const K={[fh]:t.REPEAT,[Xi]:t.CLAMP_TO_EDGE,[dh]:t.MIRRORED_REPEAT},Y={[Kt]:t.NEAREST,[Nw]:t.NEAREST_MIPMAP_NEAREST,[wl]:t.NEAREST_MIPMAP_LINEAR,[sn]:t.LINEAR,[uf]:t.LINEAR_MIPMAP_NEAREST,[ss]:t.LINEAR_MIPMAP_LINEAR},te={[kw]:t.NEVER,[Gw]:t.ALWAYS,[Bw]:t.LESS,[Mm]:t.LEQUAL,[Vw]:t.EQUAL,[Em]:t.GEQUAL,[zw]:t.GREATER,[Hw]:t.NOTEQUAL};function be(C,y){if(y.type===bi&&e.has("OES_texture_float_linear")===!1&&(y.magFilter===sn||y.magFilter===uf||y.magFilter===wl||y.magFilter===ss||y.minFilter===sn||y.minFilter===uf||y.minFilter===wl||y.minFilter===ss)&&Be("WebGLRenderer: Unable to use linear filtering with floating point textures. OES_texture_float_linear not supported on this device."),t.texParameteri(C,t.TEXTURE_WRAP_S,K[y.wrapS]),t.texParameteri(C,t.TEXTURE_WRAP_T,K[y.wrapT]),(C===t.TEXTURE_3D||C===t.TEXTURE_2D_ARRAY)&&t.texParameteri(C,t.TEXTURE_WRAP_R,K[y.wrapR]),t.texParameteri(C,t.TEXTURE_MAG_FILTER,Y[y.magFilter]),t.texParameteri(C,t.TEXTURE_MIN_FILTER,Y[y.minFilter]),y.compareFunction&&(t.texParameteri(C,t.TEXTURE_COMPARE_MODE,t.COMPARE_REF_TO_TEXTURE),t.texParameteri(C,t.TEXTURE_COMPARE_FUNC,te[y.compareFunction])),e.has("EXT_texture_filter_anisotropic")===!0){if(y.magFilter===Kt||y.minFilter!==wl&&y.minFilter!==ss||y.type===bi&&e.has("OES_texture_float_linear")===!1)return;if(y.anisotropy>1||i.get(y).__currentAnisotropy){const U=e.get("EXT_texture_filter_anisotropic");t.texParameterf(C,U.TEXTURE_MAX_ANISOTROPY_EXT,Math.min(y.anisotropy,r.getMaxAnisotropy())),i.get(y).__currentAnisotropy=y.anisotropy}}}function he(C,y){let U=!1;C.__webglInit===void 0&&(C.__webglInit=!0,y.addEventListener("dispose",A));const Q=y.source;let ee=h.get(Q);ee===void 0&&(ee={},h.set(Q,ee));const Z=X(y);if(Z!==C.__cacheKey){ee[Z]===void 0&&(ee[Z]={texture:t.createTexture(),usedTimes:0},o.memory.textures++,U=!0),ee[Z].usedTimes++;const Ce=ee[C.__cacheKey];Ce!==void 0&&(ee[C.__cacheKey].usedTimes--,Ce.usedTimes===0&&M(y)),C.__cacheKey=Z,C.__webglTexture=ee[Z].texture}return U}function Ie(C,y,U){return Math.floor(Math.floor(C/U)/y)}function Ne(C,y,U,Q){const Z=C.updateRanges;if(Z.length===0)n.texSubImage2D(t.TEXTURE_2D,0,0,0,y.width,y.height,U,Q,y.data);else{Z.sort((re,de)=>re.start-de.start);let Ce=0;for(let re=1;re<Z.length;re++){const de=Z[Ce],Ee=Z[re],Re=de.start+de.count,fe=Ie(Ee.start,y.width,4),Ve=Ie(de.start,y.width,4);Ee.start<=Re+1&&fe===Ve&&Ie(Ee.start+Ee.count-1,y.width,4)===fe?de.count=Math.max(de.count,Ee.start+Ee.count-de.start):(++Ce,Z[Ce]=Ee)}Z.length=Ce+1;const le=t.getParameter(t.UNPACK_ROW_LENGTH),we=t.getParameter(t.UNPACK_SKIP_PIXELS),Le=t.getParameter(t.UNPACK_SKIP_ROWS);t.pixelStorei(t.UNPACK_ROW_LENGTH,y.width);for(let re=0,de=Z.length;re<de;re++){const Ee=Z[re],Re=Math.floor(Ee.start/4),fe=Math.ceil(Ee.count/4),Ve=Re%y.width,I=Math.floor(Re/y.width),ge=fe,ae=1;t.pixelStorei(t.UNPACK_SKIP_PIXELS,Ve),t.pixelStorei(t.UNPACK_SKIP_ROWS,I),n.texSubImage2D(t.TEXTURE_2D,0,Ve,I,ge,ae,U,Q,y.data)}C.clearUpdateRanges(),t.pixelStorei(t.UNPACK_ROW_LENGTH,le),t.pixelStorei(t.UNPACK_SKIP_PIXELS,we),t.pixelStorei(t.UNPACK_SKIP_ROWS,Le)}}function q(C,y,U){let Q=t.TEXTURE_2D;(y.isDataArrayTexture||y.isCompressedArrayTexture)&&(Q=t.TEXTURE_2D_ARRAY),y.isData3DTexture&&(Q=t.TEXTURE_3D);const ee=he(C,y),Z=y.source;n.bindTexture(Q,C.__webglTexture,t.TEXTURE0+U);const Ce=i.get(Z);if(Z.version!==Ce.__version||ee===!0){n.activeTexture(t.TEXTURE0+U);const le=Qe.getPrimaries(Qe.workingColorSpace),we=y.colorSpace===yr?null:Qe.getPrimaries(y.colorSpace),Le=y.colorSpace===yr||le===we?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,Le);let re=x(y.image,!1,r.maxTextureSize);re=ft(y,re);const de=s.convert(y.format,y.colorSpace),Ee=s.convert(y.type);let Re=_(y.internalFormat,de,Ee,y.colorSpace,y.isVideoTexture);be(Q,y);let fe;const Ve=y.mipmaps,I=y.isVideoTexture!==!0,ge=Ce.__version===void 0||ee===!0,ae=Z.dataReady,xe=E(y,re);if(y.isDepthTexture)Re=S(y.format===os,y.type),ge&&(I?n.texStorage2D(t.TEXTURE_2D,1,Re,re.width,re.height):n.texImage2D(t.TEXTURE_2D,0,Re,re.width,re.height,0,de,Ee,null));else if(y.isDataTexture)if(Ve.length>0){I&&ge&&n.texStorage2D(t.TEXTURE_2D,xe,Re,Ve[0].width,Ve[0].height);for(let ie=0,z=Ve.length;ie<z;ie++)fe=Ve[ie],I?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,Ee,fe.data):n.texImage2D(t.TEXTURE_2D,ie,Re,fe.width,fe.height,0,de,Ee,fe.data);y.generateMipmaps=!1}else I?(ge&&n.texStorage2D(t.TEXTURE_2D,xe,Re,re.width,re.height),ae&&Ne(y,re,de,Ee)):n.texImage2D(t.TEXTURE_2D,0,Re,re.width,re.height,0,de,Ee,re.data);else if(y.isCompressedTexture)if(y.isCompressedArrayTexture){I&&ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Re,Ve[0].width,Ve[0].height,re.depth);for(let ie=0,z=Ve.length;ie<z;ie++)if(fe=Ve[ie],y.format!==fi)if(de!==null)if(I){if(ae)if(y.layerUpdates.size>0){const ne=W0(fe.width,fe.height,y.format,y.type);for(const Pe of y.layerUpdates){const Ge=fe.data.subarray(Pe*ne/fe.data.BYTES_PER_ELEMENT,(Pe+1)*ne/fe.data.BYTES_PER_ELEMENT);n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,Pe,fe.width,fe.height,1,de,Ge)}y.clearLayerUpdates()}else n.compressedTexSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,re.depth,de,fe.data)}else n.compressedTexImage3D(t.TEXTURE_2D_ARRAY,ie,Re,fe.width,fe.height,re.depth,0,fe.data,0,0);else Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()");else I?ae&&n.texSubImage3D(t.TEXTURE_2D_ARRAY,ie,0,0,0,fe.width,fe.height,re.depth,de,Ee,fe.data):n.texImage3D(t.TEXTURE_2D_ARRAY,ie,Re,fe.width,fe.height,re.depth,0,de,Ee,fe.data)}else{I&&ge&&n.texStorage2D(t.TEXTURE_2D,xe,Re,Ve[0].width,Ve[0].height);for(let ie=0,z=Ve.length;ie<z;ie++)fe=Ve[ie],y.format!==fi?de!==null?I?ae&&n.compressedTexSubImage2D(t.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,fe.data):n.compressedTexImage2D(t.TEXTURE_2D,ie,Re,fe.width,fe.height,0,fe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .uploadTexture()"):I?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,fe.width,fe.height,de,Ee,fe.data):n.texImage2D(t.TEXTURE_2D,ie,Re,fe.width,fe.height,0,de,Ee,fe.data)}else if(y.isDataArrayTexture)if(I){if(ge&&n.texStorage3D(t.TEXTURE_2D_ARRAY,xe,Re,re.width,re.height,re.depth),ae)if(y.layerUpdates.size>0){const ie=W0(re.width,re.height,y.format,y.type);for(const z of y.layerUpdates){const ne=re.data.subarray(z*ie/re.data.BYTES_PER_ELEMENT,(z+1)*ie/re.data.BYTES_PER_ELEMENT);n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,z,re.width,re.height,1,de,Ee,ne)}y.clearLayerUpdates()}else n.texSubImage3D(t.TEXTURE_2D_ARRAY,0,0,0,0,re.width,re.height,re.depth,de,Ee,re.data)}else n.texImage3D(t.TEXTURE_2D_ARRAY,0,Re,re.width,re.height,re.depth,0,de,Ee,re.data);else if(y.isData3DTexture)I?(ge&&n.texStorage3D(t.TEXTURE_3D,xe,Re,re.width,re.height,re.depth),ae&&n.texSubImage3D(t.TEXTURE_3D,0,0,0,0,re.width,re.height,re.depth,de,Ee,re.data)):n.texImage3D(t.TEXTURE_3D,0,Re,re.width,re.height,re.depth,0,de,Ee,re.data);else if(y.isFramebufferTexture){if(ge)if(I)n.texStorage2D(t.TEXTURE_2D,xe,Re,re.width,re.height);else{let ie=re.width,z=re.height;for(let ne=0;ne<xe;ne++)n.texImage2D(t.TEXTURE_2D,ne,Re,ie,z,0,de,Ee,null),ie>>=1,z>>=1}}else if(Ve.length>0){if(I&&ge){const ie=ve(Ve[0]);n.texStorage2D(t.TEXTURE_2D,xe,Re,ie.width,ie.height)}for(let ie=0,z=Ve.length;ie<z;ie++)fe=Ve[ie],I?ae&&n.texSubImage2D(t.TEXTURE_2D,ie,0,0,de,Ee,fe):n.texImage2D(t.TEXTURE_2D,ie,Re,de,Ee,fe);y.generateMipmaps=!1}else if(I){if(ge){const ie=ve(re);n.texStorage2D(t.TEXTURE_2D,xe,Re,ie.width,ie.height)}ae&&n.texSubImage2D(t.TEXTURE_2D,0,0,0,de,Ee,re)}else n.texImage2D(t.TEXTURE_2D,0,Re,de,Ee,re);m(y)&&d(Q),Ce.__version=Z.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function J(C,y,U){if(y.image.length!==6)return;const Q=he(C,y),ee=y.source;n.bindTexture(t.TEXTURE_CUBE_MAP,C.__webglTexture,t.TEXTURE0+U);const Z=i.get(ee);if(ee.version!==Z.__version||Q===!0){n.activeTexture(t.TEXTURE0+U);const Ce=Qe.getPrimaries(Qe.workingColorSpace),le=y.colorSpace===yr?null:Qe.getPrimaries(y.colorSpace),we=y.colorSpace===yr||Ce===le?t.NONE:t.BROWSER_DEFAULT_WEBGL;t.pixelStorei(t.UNPACK_FLIP_Y_WEBGL,y.flipY),t.pixelStorei(t.UNPACK_PREMULTIPLY_ALPHA_WEBGL,y.premultiplyAlpha),t.pixelStorei(t.UNPACK_ALIGNMENT,y.unpackAlignment),t.pixelStorei(t.UNPACK_COLORSPACE_CONVERSION_WEBGL,we);const Le=y.isCompressedTexture||y.image[0].isCompressedTexture,re=y.image[0]&&y.image[0].isDataTexture,de=[];for(let z=0;z<6;z++)!Le&&!re?de[z]=x(y.image[z],!0,r.maxCubemapSize):de[z]=re?y.image[z].image:y.image[z],de[z]=ft(y,de[z]);const Ee=de[0],Re=s.convert(y.format,y.colorSpace),fe=s.convert(y.type),Ve=_(y.internalFormat,Re,fe,y.colorSpace),I=y.isVideoTexture!==!0,ge=Z.__version===void 0||Q===!0,ae=ee.dataReady;let xe=E(y,Ee);be(t.TEXTURE_CUBE_MAP,y);let ie;if(Le){I&&ge&&n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ve,Ee.width,Ee.height);for(let z=0;z<6;z++){ie=de[z].mipmaps;for(let ne=0;ne<ie.length;ne++){const Pe=ie[ne];y.format!==fi?Re!==null?I?ae&&n.compressedTexSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,Pe.width,Pe.height,Re,Pe.data):n.compressedTexImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,Ve,Pe.width,Pe.height,0,Pe.data):Be("WebGLRenderer: Attempt to load unsupported compressed texture format in .setTextureCube()"):I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,0,0,Pe.width,Pe.height,Re,fe,Pe.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne,Ve,Pe.width,Pe.height,0,Re,fe,Pe.data)}}}else{if(ie=y.mipmaps,I&&ge){ie.length>0&&xe++;const z=ve(de[0]);n.texStorage2D(t.TEXTURE_CUBE_MAP,xe,Ve,z.width,z.height)}for(let z=0;z<6;z++)if(re){I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,de[z].width,de[z].height,Re,fe,de[z].data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ve,de[z].width,de[z].height,0,Re,fe,de[z].data);for(let ne=0;ne<ie.length;ne++){const Ge=ie[ne].image[z].image;I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Ge.width,Ge.height,Re,fe,Ge.data):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,Ve,Ge.width,Ge.height,0,Re,fe,Ge.data)}}else{I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,0,0,Re,fe,de[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,0,Ve,Re,fe,de[z]);for(let ne=0;ne<ie.length;ne++){const Pe=ie[ne];I?ae&&n.texSubImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,0,0,Re,fe,Pe.image[z]):n.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+z,ne+1,Ve,Re,fe,Pe.image[z])}}}m(y)&&d(t.TEXTURE_CUBE_MAP),Z.__version=ee.version,y.onUpdate&&y.onUpdate(y)}C.__version=y.version}function oe(C,y,U,Q,ee,Z){const Ce=s.convert(U.format,U.colorSpace),le=s.convert(U.type),we=_(U.internalFormat,Ce,le,U.colorSpace),Le=i.get(y),re=i.get(U);if(re.__renderTarget=y,!Le.__hasExternalTextures){const de=Math.max(1,y.width>>Z),Ee=Math.max(1,y.height>>Z);ee===t.TEXTURE_3D||ee===t.TEXTURE_2D_ARRAY?n.texImage3D(ee,Z,we,de,Ee,y.depth,0,Ce,le,null):n.texImage2D(ee,Z,we,de,Ee,0,Ce,le,null)}n.bindFramebuffer(t.FRAMEBUFFER,C),rt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,Q,ee,re.__webglTexture,0,D(y)):(ee===t.TEXTURE_2D||ee>=t.TEXTURE_CUBE_MAP_POSITIVE_X&&ee<=t.TEXTURE_CUBE_MAP_NEGATIVE_Z)&&t.framebufferTexture2D(t.FRAMEBUFFER,Q,ee,re.__webglTexture,Z),n.bindFramebuffer(t.FRAMEBUFFER,null)}function Oe(C,y,U){if(t.bindRenderbuffer(t.RENDERBUFFER,C),y.depthBuffer){const Q=y.depthTexture,ee=Q&&Q.isDepthTexture?Q.type:null,Z=S(y.stencilBuffer,ee),Ce=y.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;rt(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),Z,y.width,y.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),Z,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,Z,y.width,y.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,Ce,t.RENDERBUFFER,C)}else{const Q=y.textures;for(let ee=0;ee<Q.length;ee++){const Z=Q[ee],Ce=s.convert(Z.format,Z.colorSpace),le=s.convert(Z.type),we=_(Z.internalFormat,Ce,le,Z.colorSpace);rt(y)?a.renderbufferStorageMultisampleEXT(t.RENDERBUFFER,D(y),we,y.width,y.height):U?t.renderbufferStorageMultisample(t.RENDERBUFFER,D(y),we,y.width,y.height):t.renderbufferStorage(t.RENDERBUFFER,we,y.width,y.height)}}t.bindRenderbuffer(t.RENDERBUFFER,null)}function Me(C,y,U){const Q=y.isWebGLCubeRenderTarget===!0;if(n.bindFramebuffer(t.FRAMEBUFFER,C),!(y.depthTexture&&y.depthTexture.isDepthTexture))throw new Error("renderTarget.depthTexture must be an instance of THREE.DepthTexture");const ee=i.get(y.depthTexture);if(ee.__renderTarget=y,(!ee.__webglTexture||y.depthTexture.image.width!==y.width||y.depthTexture.image.height!==y.height)&&(y.depthTexture.image.width=y.width,y.depthTexture.image.height=y.height,y.depthTexture.needsUpdate=!0),Q){if(ee.__webglInit===void 0&&(ee.__webglInit=!0,y.depthTexture.addEventListener("dispose",A)),ee.__webglTexture===void 0){ee.__webglTexture=t.createTexture(),n.bindTexture(t.TEXTURE_CUBE_MAP,ee.__webglTexture),be(t.TEXTURE_CUBE_MAP,y.depthTexture);const Le=s.convert(y.depthTexture.format),re=s.convert(y.depthTexture.type);let de;y.depthTexture.format===nr?de=t.DEPTH_COMPONENT24:y.depthTexture.format===os&&(de=t.DEPTH24_STENCIL8);for(let Ee=0;Ee<6;Ee++)t.texImage2D(t.TEXTURE_CUBE_MAP_POSITIVE_X+Ee,0,de,y.width,y.height,0,Le,re,null)}}else $(y.depthTexture,0);const Z=ee.__webglTexture,Ce=D(y),le=Q?t.TEXTURE_CUBE_MAP_POSITIVE_X+U:t.TEXTURE_2D,we=y.depthTexture.format===os?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;if(y.depthTexture.format===nr)rt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,we,le,Z,0,Ce):t.framebufferTexture2D(t.FRAMEBUFFER,we,le,Z,0);else if(y.depthTexture.format===os)rt(y)?a.framebufferTexture2DMultisampleEXT(t.FRAMEBUFFER,we,le,Z,0,Ce):t.framebufferTexture2D(t.FRAMEBUFFER,we,le,Z,0);else throw new Error("Unknown depthTexture format")}function Xe(C){const y=i.get(C),U=C.isWebGLCubeRenderTarget===!0;if(y.__boundDepthTexture!==C.depthTexture){const Q=C.depthTexture;if(y.__depthDisposeCallback&&y.__depthDisposeCallback(),Q){const ee=()=>{delete y.__boundDepthTexture,delete y.__depthDisposeCallback,Q.removeEventListener("dispose",ee)};Q.addEventListener("dispose",ee),y.__depthDisposeCallback=ee}y.__boundDepthTexture=Q}if(C.depthTexture&&!y.__autoAllocateDepthBuffer)if(U)for(let Q=0;Q<6;Q++)Me(y.__webglFramebuffer[Q],C,Q);else{const Q=C.texture.mipmaps;Q&&Q.length>0?Me(y.__webglFramebuffer[0],C,0):Me(y.__webglFramebuffer,C,0)}else if(U){y.__webglDepthbuffer=[];for(let Q=0;Q<6;Q++)if(n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[Q]),y.__webglDepthbuffer[Q]===void 0)y.__webglDepthbuffer[Q]=t.createRenderbuffer(),Oe(y.__webglDepthbuffer[Q],C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer[Q];t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Z)}}else{const Q=C.texture.mipmaps;if(Q&&Q.length>0?n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer[0]):n.bindFramebuffer(t.FRAMEBUFFER,y.__webglFramebuffer),y.__webglDepthbuffer===void 0)y.__webglDepthbuffer=t.createRenderbuffer(),Oe(y.__webglDepthbuffer,C,!1);else{const ee=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Z=y.__webglDepthbuffer;t.bindRenderbuffer(t.RENDERBUFFER,Z),t.framebufferRenderbuffer(t.FRAMEBUFFER,ee,t.RENDERBUFFER,Z)}}n.bindFramebuffer(t.FRAMEBUFFER,null)}function xt(C,y,U){const Q=i.get(C);y!==void 0&&oe(Q.__webglFramebuffer,C,C.texture,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,0),U!==void 0&&Xe(C)}function $e(C){const y=C.texture,U=i.get(C),Q=i.get(y);C.addEventListener("dispose",b);const ee=C.textures,Z=C.isWebGLCubeRenderTarget===!0,Ce=ee.length>1;if(Ce||(Q.__webglTexture===void 0&&(Q.__webglTexture=t.createTexture()),Q.__version=y.version,o.memory.textures++),Z){U.__webglFramebuffer=[];for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer[le]=[];for(let we=0;we<y.mipmaps.length;we++)U.__webglFramebuffer[le][we]=t.createFramebuffer()}else U.__webglFramebuffer[le]=t.createFramebuffer()}else{if(y.mipmaps&&y.mipmaps.length>0){U.__webglFramebuffer=[];for(let le=0;le<y.mipmaps.length;le++)U.__webglFramebuffer[le]=t.createFramebuffer()}else U.__webglFramebuffer=t.createFramebuffer();if(Ce)for(let le=0,we=ee.length;le<we;le++){const Le=i.get(ee[le]);Le.__webglTexture===void 0&&(Le.__webglTexture=t.createTexture(),o.memory.textures++)}if(C.samples>0&&rt(C)===!1){U.__webglMultisampledFramebuffer=t.createFramebuffer(),U.__webglColorRenderbuffer=[],n.bindFramebuffer(t.FRAMEBUFFER,U.__webglMultisampledFramebuffer);for(let le=0;le<ee.length;le++){const we=ee[le];U.__webglColorRenderbuffer[le]=t.createRenderbuffer(),t.bindRenderbuffer(t.RENDERBUFFER,U.__webglColorRenderbuffer[le]);const Le=s.convert(we.format,we.colorSpace),re=s.convert(we.type),de=_(we.internalFormat,Le,re,we.colorSpace,C.isXRRenderTarget===!0),Ee=D(C);t.renderbufferStorageMultisample(t.RENDERBUFFER,Ee,de,C.width,C.height),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+le,t.RENDERBUFFER,U.__webglColorRenderbuffer[le])}t.bindRenderbuffer(t.RENDERBUFFER,null),C.depthBuffer&&(U.__webglDepthRenderbuffer=t.createRenderbuffer(),Oe(U.__webglDepthRenderbuffer,C,!0)),n.bindFramebuffer(t.FRAMEBUFFER,null)}}if(Z){n.bindTexture(t.TEXTURE_CUBE_MAP,Q.__webglTexture),be(t.TEXTURE_CUBE_MAP,y);for(let le=0;le<6;le++)if(y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)oe(U.__webglFramebuffer[le][we],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,we);else oe(U.__webglFramebuffer[le],C,y,t.COLOR_ATTACHMENT0,t.TEXTURE_CUBE_MAP_POSITIVE_X+le,0);m(y)&&d(t.TEXTURE_CUBE_MAP),n.unbindTexture()}else if(Ce){for(let le=0,we=ee.length;le<we;le++){const Le=ee[le],re=i.get(Le);let de=t.TEXTURE_2D;(C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(de=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(de,re.__webglTexture),be(de,Le),oe(U.__webglFramebuffer,C,Le,t.COLOR_ATTACHMENT0+le,de,0),m(Le)&&d(de)}n.unbindTexture()}else{let le=t.TEXTURE_2D;if((C.isWebGL3DRenderTarget||C.isWebGLArrayRenderTarget)&&(le=C.isWebGL3DRenderTarget?t.TEXTURE_3D:t.TEXTURE_2D_ARRAY),n.bindTexture(le,Q.__webglTexture),be(le,y),y.mipmaps&&y.mipmaps.length>0)for(let we=0;we<y.mipmaps.length;we++)oe(U.__webglFramebuffer[we],C,y,t.COLOR_ATTACHMENT0,le,we);else oe(U.__webglFramebuffer,C,y,t.COLOR_ATTACHMENT0,le,0);m(y)&&d(le),n.unbindTexture()}C.depthBuffer&&Xe(C)}function Ze(C){const y=C.textures;for(let U=0,Q=y.length;U<Q;U++){const ee=y[U];if(m(ee)){const Z=v(C),Ce=i.get(ee).__webglTexture;n.bindTexture(Z,Ce),d(Z),n.unbindTexture()}}}const st=[],ze=[];function gt(C){if(C.samples>0){if(rt(C)===!1){const y=C.textures,U=C.width,Q=C.height;let ee=t.COLOR_BUFFER_BIT;const Z=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT,Ce=i.get(C),le=y.length>1;if(le)for(let Le=0;Le<y.length;Le++)n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,null),n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,null,0);n.bindFramebuffer(t.READ_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer);const we=C.texture.mipmaps;we&&we.length>0?n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer[0]):n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglFramebuffer);for(let Le=0;Le<y.length;Le++){if(C.resolveDepthBuffer&&(C.depthBuffer&&(ee|=t.DEPTH_BUFFER_BIT),C.stencilBuffer&&C.resolveStencilBuffer&&(ee|=t.STENCIL_BUFFER_BIT)),le){t.framebufferRenderbuffer(t.READ_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Le]);const re=i.get(y[Le]).__webglTexture;t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0,t.TEXTURE_2D,re,0)}t.blitFramebuffer(0,0,U,Q,0,0,U,Q,ee,t.NEAREST),l===!0&&(st.length=0,ze.length=0,st.push(t.COLOR_ATTACHMENT0+Le),C.depthBuffer&&C.resolveDepthBuffer===!1&&(st.push(Z),ze.push(Z),t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,ze)),t.invalidateFramebuffer(t.READ_FRAMEBUFFER,st))}if(n.bindFramebuffer(t.READ_FRAMEBUFFER,null),n.bindFramebuffer(t.DRAW_FRAMEBUFFER,null),le)for(let Le=0;Le<y.length;Le++){n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglMultisampledFramebuffer),t.framebufferRenderbuffer(t.FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.RENDERBUFFER,Ce.__webglColorRenderbuffer[Le]);const re=i.get(y[Le]).__webglTexture;n.bindFramebuffer(t.FRAMEBUFFER,Ce.__webglFramebuffer),t.framebufferTexture2D(t.DRAW_FRAMEBUFFER,t.COLOR_ATTACHMENT0+Le,t.TEXTURE_2D,re,0)}n.bindFramebuffer(t.DRAW_FRAMEBUFFER,Ce.__webglMultisampledFramebuffer)}else if(C.depthBuffer&&C.resolveDepthBuffer===!1&&l){const y=C.stencilBuffer?t.DEPTH_STENCIL_ATTACHMENT:t.DEPTH_ATTACHMENT;t.invalidateFramebuffer(t.DRAW_FRAMEBUFFER,[y])}}}function D(C){return Math.min(r.maxSamples,C.samples)}function rt(C){const y=i.get(C);return C.samples>0&&e.has("WEBGL_multisampled_render_to_texture")===!0&&y.__useRenderToTexture!==!1}function tt(C){const y=o.render.frame;f.get(C)!==y&&(f.set(C,y),C.update())}function ft(C,y){const U=C.colorSpace,Q=C.format,ee=C.type;return C.isCompressedTexture===!0||C.isVideoTexture===!0||U!==Eo&&U!==yr&&(Qe.getTransfer(U)===lt?(Q!==fi||ee!==$n)&&Be("WebGLTextures: sRGB encoded textures have to use RGBAFormat and UnsignedByteType."):it("WebGLTextures: Unsupported texture color space:",U)),y}function ve(C){return typeof HTMLImageElement<"u"&&C instanceof HTMLImageElement?(c.width=C.naturalWidth||C.width,c.height=C.naturalHeight||C.height):typeof VideoFrame<"u"&&C instanceof VideoFrame?(c.width=C.displayWidth,c.height=C.displayHeight):(c.width=C.width,c.height=C.height),c}this.allocateTextureUnit=N,this.resetTextureUnits=H,this.setTexture2D=$,this.setTexture2DArray=k,this.setTexture3D=O,this.setTextureCube=P,this.rebindTextures=xt,this.setupRenderTarget=$e,this.updateRenderTargetMipmap=Ze,this.updateMultisampleRenderTarget=gt,this.setupDepthRenderbuffer=Xe,this.setupFrameBufferTexture=oe,this.useMultisampledRTT=rt,this.isReversedDepthBuffer=function(){return n.buffers.depth.getReversed()}}function h2(t,e){function n(i,r=yr){let s;const o=Qe.getTransfer(r);if(i===$n)return t.UNSIGNED_BYTE;if(i===vm)return t.UNSIGNED_SHORT_4_4_4_4;if(i===_m)return t.UNSIGNED_SHORT_5_5_5_1;if(i===hS)return t.UNSIGNED_INT_5_9_9_9_REV;if(i===pS)return t.UNSIGNED_INT_10F_11F_11F_REV;if(i===fS)return t.BYTE;if(i===dS)return t.SHORT;if(i===Fa)return t.UNSIGNED_SHORT;if(i===gm)return t.INT;if(i===Ni)return t.UNSIGNED_INT;if(i===bi)return t.FLOAT;if(i===tr)return t.HALF_FLOAT;if(i===mS)return t.ALPHA;if(i===gS)return t.RGB;if(i===fi)return t.RGBA;if(i===nr)return t.DEPTH_COMPONENT;if(i===os)return t.DEPTH_STENCIL;if(i===vS)return t.RED;if(i===xm)return t.RED_INTEGER;if(i===Mo)return t.RG;if(i===ym)return t.RG_INTEGER;if(i===Sm)return t.RGBA_INTEGER;if(i===mc||i===gc||i===vc||i===_c)if(o===lt)if(s=e.get("WEBGL_compressed_texture_s3tc_srgb"),s!==null){if(i===mc)return s.COMPRESSED_SRGB_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_SRGB_ALPHA_S3TC_DXT5_EXT}else return null;else if(s=e.get("WEBGL_compressed_texture_s3tc"),s!==null){if(i===mc)return s.COMPRESSED_RGB_S3TC_DXT1_EXT;if(i===gc)return s.COMPRESSED_RGBA_S3TC_DXT1_EXT;if(i===vc)return s.COMPRESSED_RGBA_S3TC_DXT3_EXT;if(i===_c)return s.COMPRESSED_RGBA_S3TC_DXT5_EXT}else return null;if(i===hh||i===ph||i===mh||i===gh)if(s=e.get("WEBGL_compressed_texture_pvrtc"),s!==null){if(i===hh)return s.COMPRESSED_RGB_PVRTC_4BPPV1_IMG;if(i===ph)return s.COMPRESSED_RGB_PVRTC_2BPPV1_IMG;if(i===mh)return s.COMPRESSED_RGBA_PVRTC_4BPPV1_IMG;if(i===gh)return s.COMPRESSED_RGBA_PVRTC_2BPPV1_IMG}else return null;if(i===vh||i===_h||i===xh||i===yh||i===Sh||i===Mh||i===Eh)if(s=e.get("WEBGL_compressed_texture_etc"),s!==null){if(i===vh||i===_h)return o===lt?s.COMPRESSED_SRGB8_ETC2:s.COMPRESSED_RGB8_ETC2;if(i===xh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ETC2_EAC:s.COMPRESSED_RGBA8_ETC2_EAC;if(i===yh)return s.COMPRESSED_R11_EAC;if(i===Sh)return s.COMPRESSED_SIGNED_R11_EAC;if(i===Mh)return s.COMPRESSED_RG11_EAC;if(i===Eh)return s.COMPRESSED_SIGNED_RG11_EAC}else return null;if(i===Th||i===wh||i===Ah||i===bh||i===Ch||i===Rh||i===Ph||i===Dh||i===Lh||i===Ih||i===Nh||i===Uh||i===Fh||i===Oh)if(s=e.get("WEBGL_compressed_texture_astc"),s!==null){if(i===Th)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_4x4_KHR:s.COMPRESSED_RGBA_ASTC_4x4_KHR;if(i===wh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x4_KHR:s.COMPRESSED_RGBA_ASTC_5x4_KHR;if(i===Ah)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_5x5_KHR:s.COMPRESSED_RGBA_ASTC_5x5_KHR;if(i===bh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x5_KHR:s.COMPRESSED_RGBA_ASTC_6x5_KHR;if(i===Ch)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_6x6_KHR:s.COMPRESSED_RGBA_ASTC_6x6_KHR;if(i===Rh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x5_KHR:s.COMPRESSED_RGBA_ASTC_8x5_KHR;if(i===Ph)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x6_KHR:s.COMPRESSED_RGBA_ASTC_8x6_KHR;if(i===Dh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_8x8_KHR:s.COMPRESSED_RGBA_ASTC_8x8_KHR;if(i===Lh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x5_KHR:s.COMPRESSED_RGBA_ASTC_10x5_KHR;if(i===Ih)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x6_KHR:s.COMPRESSED_RGBA_ASTC_10x6_KHR;if(i===Nh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x8_KHR:s.COMPRESSED_RGBA_ASTC_10x8_KHR;if(i===Uh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_10x10_KHR:s.COMPRESSED_RGBA_ASTC_10x10_KHR;if(i===Fh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x10_KHR:s.COMPRESSED_RGBA_ASTC_12x10_KHR;if(i===Oh)return o===lt?s.COMPRESSED_SRGB8_ALPHA8_ASTC_12x12_KHR:s.COMPRESSED_RGBA_ASTC_12x12_KHR}else return null;if(i===kh||i===Bh||i===Vh)if(s=e.get("EXT_texture_compression_bptc"),s!==null){if(i===kh)return o===lt?s.COMPRESSED_SRGB_ALPHA_BPTC_UNORM_EXT:s.COMPRESSED_RGBA_BPTC_UNORM_EXT;if(i===Bh)return s.COMPRESSED_RGB_BPTC_SIGNED_FLOAT_EXT;if(i===Vh)return s.COMPRESSED_RGB_BPTC_UNSIGNED_FLOAT_EXT}else return null;if(i===zh||i===Hh||i===Gh||i===Wh)if(s=e.get("EXT_texture_compression_rgtc"),s!==null){if(i===zh)return s.COMPRESSED_RED_RGTC1_EXT;if(i===Hh)return s.COMPRESSED_SIGNED_RED_RGTC1_EXT;if(i===Gh)return s.COMPRESSED_RED_GREEN_RGTC2_EXT;if(i===Wh)return s.COMPRESSED_SIGNED_RED_GREEN_RGTC2_EXT}else return null;return i===Oa?t.UNSIGNED_INT_24_8:t[i]!==void 0?t[i]:null}return{convert:n}}const p2=`
void main() {

	gl_Position = vec4( position, 1.0 );

}`,m2=`
uniform sampler2DArray depthColor;
uniform float depthWidth;
uniform float depthHeight;

void main() {

	vec2 coord = vec2( gl_FragCoord.x / depthWidth, gl_FragCoord.y / depthHeight );

	if ( coord.x >= 1.0 ) {

		gl_FragDepth = texture( depthColor, vec3( coord.x - 1.0, coord.y, 1 ) ).r;

	} else {

		gl_FragDepth = texture( depthColor, vec3( coord.x, coord.y, 0 ) ).r;

	}

}`;class g2{constructor(){this.texture=null,this.mesh=null,this.depthNear=0,this.depthFar=0}init(e,n){if(this.texture===null){const i=new LS(e.texture);(e.depthNear!==n.depthNear||e.depthFar!==n.depthFar)&&(this.depthNear=e.depthNear,this.depthFar=e.depthFar),this.texture=i}}getMesh(e){if(this.texture!==null&&this.mesh===null){const n=e.cameras[0].viewport,i=new Ui({vertexShader:p2,fragmentShader:m2,uniforms:{depthColor:{value:this.texture},depthWidth:{value:n.z},depthHeight:{value:n.w}}});this.mesh=new rr(new wu(20,20),i)}return this.mesh}reset(){this.texture=null,this.mesh=null}getDepthTexture(){return this.texture}}class v2 extends Ro{constructor(e,n){super();const i=this;let r=null,s=1,o=null,a="local-floor",l=1,c=null,f=null,u=null,h=null,p=null,g=null;const x=typeof XRWebGLBinding<"u",m=new g2,d={},v=n.getContextAttributes();let _=null,S=null;const E=[],A=[],b=new pt;let R=null;const M=new Yn;M.viewport=new It;const T=new Yn;T.viewport=new It;const L=[M,T],H=new AA;let N=null,X=null;this.cameraAutoUpdate=!0,this.enabled=!1,this.isPresenting=!1,this.getController=function(q){let J=E[q];return J===void 0&&(J=new If,E[q]=J),J.getTargetRaySpace()},this.getControllerGrip=function(q){let J=E[q];return J===void 0&&(J=new If,E[q]=J),J.getGripSpace()},this.getHand=function(q){let J=E[q];return J===void 0&&(J=new If,E[q]=J),J.getHandSpace()};function $(q){const J=A.indexOf(q.inputSource);if(J===-1)return;const oe=E[J];oe!==void 0&&(oe.update(q.inputSource,q.frame,c||o),oe.dispatchEvent({type:q.type,data:q.inputSource}))}function k(){r.removeEventListener("select",$),r.removeEventListener("selectstart",$),r.removeEventListener("selectend",$),r.removeEventListener("squeeze",$),r.removeEventListener("squeezestart",$),r.removeEventListener("squeezeend",$),r.removeEventListener("end",k),r.removeEventListener("inputsourceschange",O);for(let q=0;q<E.length;q++){const J=A[q];J!==null&&(A[q]=null,E[q].disconnect(J))}N=null,X=null,m.reset();for(const q in d)delete d[q];e.setRenderTarget(_),p=null,h=null,u=null,r=null,S=null,Ne.stop(),i.isPresenting=!1,e.setPixelRatio(R),e.setSize(b.width,b.height,!1),i.dispatchEvent({type:"sessionend"})}this.setFramebufferScaleFactor=function(q){s=q,i.isPresenting===!0&&Be("WebXRManager: Cannot change framebuffer scale while presenting.")},this.setReferenceSpaceType=function(q){a=q,i.isPresenting===!0&&Be("WebXRManager: Cannot change reference space type while presenting.")},this.getReferenceSpace=function(){return c||o},this.setReferenceSpace=function(q){c=q},this.getBaseLayer=function(){return h!==null?h:p},this.getBinding=function(){return u===null&&x&&(u=new XRWebGLBinding(r,n)),u},this.getFrame=function(){return g},this.getSession=function(){return r},this.setSession=async function(q){if(r=q,r!==null){if(_=e.getRenderTarget(),r.addEventListener("select",$),r.addEventListener("selectstart",$),r.addEventListener("selectend",$),r.addEventListener("squeeze",$),r.addEventListener("squeezestart",$),r.addEventListener("squeezeend",$),r.addEventListener("end",k),r.addEventListener("inputsourceschange",O),v.xrCompatible!==!0&&await n.makeXRCompatible(),R=e.getPixelRatio(),e.getSize(b),x&&"createProjectionLayer"in XRWebGLBinding.prototype){let oe=null,Oe=null,Me=null;v.depth&&(Me=v.stencil?n.DEPTH24_STENCIL8:n.DEPTH_COMPONENT24,oe=v.stencil?os:nr,Oe=v.stencil?Oa:Ni);const Xe={colorFormat:n.RGBA8,depthFormat:Me,scaleFactor:s};u=this.getBinding(),h=u.createProjectionLayer(Xe),r.updateRenderState({layers:[h]}),e.setPixelRatio(1),e.setSize(h.textureWidth,h.textureHeight,!1),S=new Li(h.textureWidth,h.textureHeight,{format:fi,type:$n,depthTexture:new Ba(h.textureWidth,h.textureHeight,Oe,void 0,void 0,void 0,void 0,void 0,void 0,oe),stencilBuffer:v.stencil,colorSpace:e.outputColorSpace,samples:v.antialias?4:0,resolveDepthBuffer:h.ignoreDepthValues===!1,resolveStencilBuffer:h.ignoreDepthValues===!1})}else{const oe={antialias:v.antialias,alpha:!0,depth:v.depth,stencil:v.stencil,framebufferScaleFactor:s};p=new XRWebGLLayer(r,n,oe),r.updateRenderState({baseLayer:p}),e.setPixelRatio(1),e.setSize(p.framebufferWidth,p.framebufferHeight,!1),S=new Li(p.framebufferWidth,p.framebufferHeight,{format:fi,type:$n,colorSpace:e.outputColorSpace,stencilBuffer:v.stencil,resolveDepthBuffer:p.ignoreDepthValues===!1,resolveStencilBuffer:p.ignoreDepthValues===!1})}S.isXRRenderTarget=!0,this.setFoveation(l),c=null,o=await r.requestReferenceSpace(a),Ne.setContext(r),Ne.start(),i.isPresenting=!0,i.dispatchEvent({type:"sessionstart"})}},this.getEnvironmentBlendMode=function(){if(r!==null)return r.environmentBlendMode},this.getDepthTexture=function(){return m.getDepthTexture()};function O(q){for(let J=0;J<q.removed.length;J++){const oe=q.removed[J],Oe=A.indexOf(oe);Oe>=0&&(A[Oe]=null,E[Oe].disconnect(oe))}for(let J=0;J<q.added.length;J++){const oe=q.added[J];let Oe=A.indexOf(oe);if(Oe===-1){for(let Xe=0;Xe<E.length;Xe++)if(Xe>=A.length){A.push(oe),Oe=Xe;break}else if(A[Xe]===null){A[Xe]=oe,Oe=Xe;break}if(Oe===-1)break}const Me=E[Oe];Me&&Me.connect(oe)}}const P=new G,K=new G;function Y(q,J,oe){P.setFromMatrixPosition(J.matrixWorld),K.setFromMatrixPosition(oe.matrixWorld);const Oe=P.distanceTo(K),Me=J.projectionMatrix.elements,Xe=oe.projectionMatrix.elements,xt=Me[14]/(Me[10]-1),$e=Me[14]/(Me[10]+1),Ze=(Me[9]+1)/Me[5],st=(Me[9]-1)/Me[5],ze=(Me[8]-1)/Me[0],gt=(Xe[8]+1)/Xe[0],D=xt*ze,rt=xt*gt,tt=Oe/(-ze+gt),ft=tt*-ze;if(J.matrixWorld.decompose(q.position,q.quaternion,q.scale),q.translateX(ft),q.translateZ(tt),q.matrixWorld.compose(q.position,q.quaternion,q.scale),q.matrixWorldInverse.copy(q.matrixWorld).invert(),Me[10]===-1)q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse);else{const ve=xt+tt,C=$e+tt,y=D-ft,U=rt+(Oe-ft),Q=Ze*$e/C*ve,ee=st*$e/C*ve;q.projectionMatrix.makePerspective(y,U,Q,ee,ve,C),q.projectionMatrixInverse.copy(q.projectionMatrix).invert()}}function te(q,J){J===null?q.matrixWorld.copy(q.matrix):q.matrixWorld.multiplyMatrices(J.matrixWorld,q.matrix),q.matrixWorldInverse.copy(q.matrixWorld).invert()}this.updateCamera=function(q){if(r===null)return;let J=q.near,oe=q.far;m.texture!==null&&(m.depthNear>0&&(J=m.depthNear),m.depthFar>0&&(oe=m.depthFar)),H.near=T.near=M.near=J,H.far=T.far=M.far=oe,(N!==H.near||X!==H.far)&&(r.updateRenderState({depthNear:H.near,depthFar:H.far}),N=H.near,X=H.far),H.layers.mask=q.layers.mask|6,M.layers.mask=H.layers.mask&3,T.layers.mask=H.layers.mask&5;const Oe=q.parent,Me=H.cameras;te(H,Oe);for(let Xe=0;Xe<Me.length;Xe++)te(Me[Xe],Oe);Me.length===2?Y(H,M,T):H.projectionMatrix.copy(M.projectionMatrix),be(q,H,Oe)};function be(q,J,oe){oe===null?q.matrix.copy(J.matrixWorld):(q.matrix.copy(oe.matrixWorld),q.matrix.invert(),q.matrix.multiply(J.matrixWorld)),q.matrix.decompose(q.position,q.quaternion,q.scale),q.updateMatrixWorld(!0),q.projectionMatrix.copy(J.projectionMatrix),q.projectionMatrixInverse.copy(J.projectionMatrixInverse),q.isPerspectiveCamera&&(q.fov=jh*2*Math.atan(1/q.projectionMatrix.elements[5]),q.zoom=1)}this.getCamera=function(){return H},this.getFoveation=function(){if(!(h===null&&p===null))return l},this.setFoveation=function(q){l=q,h!==null&&(h.fixedFoveation=q),p!==null&&p.fixedFoveation!==void 0&&(p.fixedFoveation=q)},this.hasDepthSensing=function(){return m.texture!==null},this.getDepthSensingMesh=function(){return m.getMesh(H)},this.getCameraTexture=function(q){return d[q]};let he=null;function Ie(q,J){if(f=J.getViewerPose(c||o),g=J,f!==null){const oe=f.views;p!==null&&(e.setRenderTargetFramebuffer(S,p.framebuffer),e.setRenderTarget(S));let Oe=!1;oe.length!==H.cameras.length&&(H.cameras.length=0,Oe=!0);for(let $e=0;$e<oe.length;$e++){const Ze=oe[$e];let st=null;if(p!==null)st=p.getViewport(Ze);else{const gt=u.getViewSubImage(h,Ze);st=gt.viewport,$e===0&&(e.setRenderTargetTextures(S,gt.colorTexture,gt.depthStencilTexture),e.setRenderTarget(S))}let ze=L[$e];ze===void 0&&(ze=new Yn,ze.layers.enable($e),ze.viewport=new It,L[$e]=ze),ze.matrix.fromArray(Ze.transform.matrix),ze.matrix.decompose(ze.position,ze.quaternion,ze.scale),ze.projectionMatrix.fromArray(Ze.projectionMatrix),ze.projectionMatrixInverse.copy(ze.projectionMatrix).invert(),ze.viewport.set(st.x,st.y,st.width,st.height),$e===0&&(H.matrix.copy(ze.matrix),H.matrix.decompose(H.position,H.quaternion,H.scale)),Oe===!0&&H.cameras.push(ze)}const Me=r.enabledFeatures;if(Me&&Me.includes("depth-sensing")&&r.depthUsage=="gpu-optimized"&&x){u=i.getBinding();const $e=u.getDepthInformation(oe[0]);$e&&$e.isValid&&$e.texture&&m.init($e,r.renderState)}if(Me&&Me.includes("camera-access")&&x){e.state.unbindTexture(),u=i.getBinding();for(let $e=0;$e<oe.length;$e++){const Ze=oe[$e].camera;if(Ze){let st=d[Ze];st||(st=new LS,d[Ze]=st);const ze=u.getCameraImage(Ze);st.sourceTexture=ze}}}}for(let oe=0;oe<E.length;oe++){const Oe=A[oe],Me=E[oe];Oe!==null&&Me!==void 0&&Me.update(Oe,J,c||o)}he&&he(q,J),J.detectedPlanes&&i.dispatchEvent({type:"planesdetected",data:J}),g=null}const Ne=new NS;Ne.setAnimationLoop(Ie),this.setAnimationLoop=function(q){he=q},this.dispose=function(){}}}const $r=new ir,_2=new Nt;function x2(t,e){function n(m,d){m.matrixAutoUpdate===!0&&m.updateMatrix(),d.value.copy(m.matrix)}function i(m,d){d.color.getRGB(m.fogColor.value,AS(t)),d.isFog?(m.fogNear.value=d.near,m.fogFar.value=d.far):d.isFogExp2&&(m.fogDensity.value=d.density)}function r(m,d,v,_,S){d.isMeshBasicMaterial||d.isMeshLambertMaterial?s(m,d):d.isMeshToonMaterial?(s(m,d),u(m,d)):d.isMeshPhongMaterial?(s(m,d),f(m,d)):d.isMeshStandardMaterial?(s(m,d),h(m,d),d.isMeshPhysicalMaterial&&p(m,d,S)):d.isMeshMatcapMaterial?(s(m,d),g(m,d)):d.isMeshDepthMaterial?s(m,d):d.isMeshDistanceMaterial?(s(m,d),x(m,d)):d.isMeshNormalMaterial?s(m,d):d.isLineBasicMaterial?(o(m,d),d.isLineDashedMaterial&&a(m,d)):d.isPointsMaterial?l(m,d,v,_):d.isSpriteMaterial?c(m,d):d.isShadowMaterial?(m.color.value.copy(d.color),m.opacity.value=d.opacity):d.isShaderMaterial&&(d.uniformsNeedUpdate=!1)}function s(m,d){m.opacity.value=d.opacity,d.color&&m.diffuse.value.copy(d.color),d.emissive&&m.emissive.value.copy(d.emissive).multiplyScalar(d.emissiveIntensity),d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.bumpMap&&(m.bumpMap.value=d.bumpMap,n(d.bumpMap,m.bumpMapTransform),m.bumpScale.value=d.bumpScale,d.side===Rn&&(m.bumpScale.value*=-1)),d.normalMap&&(m.normalMap.value=d.normalMap,n(d.normalMap,m.normalMapTransform),m.normalScale.value.copy(d.normalScale),d.side===Rn&&m.normalScale.value.negate()),d.displacementMap&&(m.displacementMap.value=d.displacementMap,n(d.displacementMap,m.displacementMapTransform),m.displacementScale.value=d.displacementScale,m.displacementBias.value=d.displacementBias),d.emissiveMap&&(m.emissiveMap.value=d.emissiveMap,n(d.emissiveMap,m.emissiveMapTransform)),d.specularMap&&(m.specularMap.value=d.specularMap,n(d.specularMap,m.specularMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest);const v=e.get(d),_=v.envMap,S=v.envMapRotation;_&&(m.envMap.value=_,$r.copy(S),$r.x*=-1,$r.y*=-1,$r.z*=-1,_.isCubeTexture&&_.isRenderTargetTexture===!1&&($r.y*=-1,$r.z*=-1),m.envMapRotation.value.setFromMatrix4(_2.makeRotationFromEuler($r)),m.flipEnvMap.value=_.isCubeTexture&&_.isRenderTargetTexture===!1?-1:1,m.reflectivity.value=d.reflectivity,m.ior.value=d.ior,m.refractionRatio.value=d.refractionRatio),d.lightMap&&(m.lightMap.value=d.lightMap,m.lightMapIntensity.value=d.lightMapIntensity,n(d.lightMap,m.lightMapTransform)),d.aoMap&&(m.aoMap.value=d.aoMap,m.aoMapIntensity.value=d.aoMapIntensity,n(d.aoMap,m.aoMapTransform))}function o(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform))}function a(m,d){m.dashSize.value=d.dashSize,m.totalSize.value=d.dashSize+d.gapSize,m.scale.value=d.scale}function l(m,d,v,_){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.size.value=d.size*v,m.scale.value=_*.5,d.map&&(m.map.value=d.map,n(d.map,m.uvTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function c(m,d){m.diffuse.value.copy(d.color),m.opacity.value=d.opacity,m.rotation.value=d.rotation,d.map&&(m.map.value=d.map,n(d.map,m.mapTransform)),d.alphaMap&&(m.alphaMap.value=d.alphaMap,n(d.alphaMap,m.alphaMapTransform)),d.alphaTest>0&&(m.alphaTest.value=d.alphaTest)}function f(m,d){m.specular.value.copy(d.specular),m.shininess.value=Math.max(d.shininess,1e-4)}function u(m,d){d.gradientMap&&(m.gradientMap.value=d.gradientMap)}function h(m,d){m.metalness.value=d.metalness,d.metalnessMap&&(m.metalnessMap.value=d.metalnessMap,n(d.metalnessMap,m.metalnessMapTransform)),m.roughness.value=d.roughness,d.roughnessMap&&(m.roughnessMap.value=d.roughnessMap,n(d.roughnessMap,m.roughnessMapTransform)),d.envMap&&(m.envMapIntensity.value=d.envMapIntensity)}function p(m,d,v){m.ior.value=d.ior,d.sheen>0&&(m.sheenColor.value.copy(d.sheenColor).multiplyScalar(d.sheen),m.sheenRoughness.value=d.sheenRoughness,d.sheenColorMap&&(m.sheenColorMap.value=d.sheenColorMap,n(d.sheenColorMap,m.sheenColorMapTransform)),d.sheenRoughnessMap&&(m.sheenRoughnessMap.value=d.sheenRoughnessMap,n(d.sheenRoughnessMap,m.sheenRoughnessMapTransform))),d.clearcoat>0&&(m.clearcoat.value=d.clearcoat,m.clearcoatRoughness.value=d.clearcoatRoughness,d.clearcoatMap&&(m.clearcoatMap.value=d.clearcoatMap,n(d.clearcoatMap,m.clearcoatMapTransform)),d.clearcoatRoughnessMap&&(m.clearcoatRoughnessMap.value=d.clearcoatRoughnessMap,n(d.clearcoatRoughnessMap,m.clearcoatRoughnessMapTransform)),d.clearcoatNormalMap&&(m.clearcoatNormalMap.value=d.clearcoatNormalMap,n(d.clearcoatNormalMap,m.clearcoatNormalMapTransform),m.clearcoatNormalScale.value.copy(d.clearcoatNormalScale),d.side===Rn&&m.clearcoatNormalScale.value.negate())),d.dispersion>0&&(m.dispersion.value=d.dispersion),d.iridescence>0&&(m.iridescence.value=d.iridescence,m.iridescenceIOR.value=d.iridescenceIOR,m.iridescenceThicknessMinimum.value=d.iridescenceThicknessRange[0],m.iridescenceThicknessMaximum.value=d.iridescenceThicknessRange[1],d.iridescenceMap&&(m.iridescenceMap.value=d.iridescenceMap,n(d.iridescenceMap,m.iridescenceMapTransform)),d.iridescenceThicknessMap&&(m.iridescenceThicknessMap.value=d.iridescenceThicknessMap,n(d.iridescenceThicknessMap,m.iridescenceThicknessMapTransform))),d.transmission>0&&(m.transmission.value=d.transmission,m.transmissionSamplerMap.value=v.texture,m.transmissionSamplerSize.value.set(v.width,v.height),d.transmissionMap&&(m.transmissionMap.value=d.transmissionMap,n(d.transmissionMap,m.transmissionMapTransform)),m.thickness.value=d.thickness,d.thicknessMap&&(m.thicknessMap.value=d.thicknessMap,n(d.thicknessMap,m.thicknessMapTransform)),m.attenuationDistance.value=d.attenuationDistance,m.attenuationColor.value.copy(d.attenuationColor)),d.anisotropy>0&&(m.anisotropyVector.value.set(d.anisotropy*Math.cos(d.anisotropyRotation),d.anisotropy*Math.sin(d.anisotropyRotation)),d.anisotropyMap&&(m.anisotropyMap.value=d.anisotropyMap,n(d.anisotropyMap,m.anisotropyMapTransform))),m.specularIntensity.value=d.specularIntensity,m.specularColor.value.copy(d.specularColor),d.specularColorMap&&(m.specularColorMap.value=d.specularColorMap,n(d.specularColorMap,m.specularColorMapTransform)),d.specularIntensityMap&&(m.specularIntensityMap.value=d.specularIntensityMap,n(d.specularIntensityMap,m.specularIntensityMapTransform))}function g(m,d){d.matcap&&(m.matcap.value=d.matcap)}function x(m,d){const v=e.get(d).light;m.referencePosition.value.setFromMatrixPosition(v.matrixWorld),m.nearDistance.value=v.shadow.camera.near,m.farDistance.value=v.shadow.camera.far}return{refreshFogUniforms:i,refreshMaterialUniforms:r}}function y2(t,e,n,i){let r={},s={},o=[];const a=t.getParameter(t.MAX_UNIFORM_BUFFER_BINDINGS);function l(v,_){const S=_.program;i.uniformBlockBinding(v,S)}function c(v,_){let S=r[v.id];S===void 0&&(g(v),S=f(v),r[v.id]=S,v.addEventListener("dispose",m));const E=_.program;i.updateUBOMapping(v,E);const A=e.render.frame;s[v.id]!==A&&(h(v),s[v.id]=A)}function f(v){const _=u();v.__bindingPointIndex=_;const S=t.createBuffer(),E=v.__size,A=v.usage;return t.bindBuffer(t.UNIFORM_BUFFER,S),t.bufferData(t.UNIFORM_BUFFER,E,A),t.bindBuffer(t.UNIFORM_BUFFER,null),t.bindBufferBase(t.UNIFORM_BUFFER,_,S),S}function u(){for(let v=0;v<a;v++)if(o.indexOf(v)===-1)return o.push(v),v;return it("WebGLRenderer: Maximum number of simultaneously usable uniforms groups reached."),0}function h(v){const _=r[v.id],S=v.uniforms,E=v.__cache;t.bindBuffer(t.UNIFORM_BUFFER,_);for(let A=0,b=S.length;A<b;A++){const R=Array.isArray(S[A])?S[A]:[S[A]];for(let M=0,T=R.length;M<T;M++){const L=R[M];if(p(L,A,M,E)===!0){const H=L.__offset,N=Array.isArray(L.value)?L.value:[L.value];let X=0;for(let $=0;$<N.length;$++){const k=N[$],O=x(k);typeof k=="number"||typeof k=="boolean"?(L.__data[0]=k,t.bufferSubData(t.UNIFORM_BUFFER,H+X,L.__data)):k.isMatrix3?(L.__data[0]=k.elements[0],L.__data[1]=k.elements[1],L.__data[2]=k.elements[2],L.__data[3]=0,L.__data[4]=k.elements[3],L.__data[5]=k.elements[4],L.__data[6]=k.elements[5],L.__data[7]=0,L.__data[8]=k.elements[6],L.__data[9]=k.elements[7],L.__data[10]=k.elements[8],L.__data[11]=0):(k.toArray(L.__data,X),X+=O.storage/Float32Array.BYTES_PER_ELEMENT)}t.bufferSubData(t.UNIFORM_BUFFER,H,L.__data)}}}t.bindBuffer(t.UNIFORM_BUFFER,null)}function p(v,_,S,E){const A=v.value,b=_+"_"+S;if(E[b]===void 0)return typeof A=="number"||typeof A=="boolean"?E[b]=A:E[b]=A.clone(),!0;{const R=E[b];if(typeof A=="number"||typeof A=="boolean"){if(R!==A)return E[b]=A,!0}else if(R.equals(A)===!1)return R.copy(A),!0}return!1}function g(v){const _=v.uniforms;let S=0;const E=16;for(let b=0,R=_.length;b<R;b++){const M=Array.isArray(_[b])?_[b]:[_[b]];for(let T=0,L=M.length;T<L;T++){const H=M[T],N=Array.isArray(H.value)?H.value:[H.value];for(let X=0,$=N.length;X<$;X++){const k=N[X],O=x(k),P=S%E,K=P%O.boundary,Y=P+K;S+=K,Y!==0&&E-Y<O.storage&&(S+=E-Y),H.__data=new Float32Array(O.storage/Float32Array.BYTES_PER_ELEMENT),H.__offset=S,S+=O.storage}}}const A=S%E;return A>0&&(S+=E-A),v.__size=S,v.__cache={},this}function x(v){const _={boundary:0,storage:0};return typeof v=="number"||typeof v=="boolean"?(_.boundary=4,_.storage=4):v.isVector2?(_.boundary=8,_.storage=8):v.isVector3||v.isColor?(_.boundary=16,_.storage=12):v.isVector4?(_.boundary=16,_.storage=16):v.isMatrix3?(_.boundary=48,_.storage=48):v.isMatrix4?(_.boundary=64,_.storage=64):v.isTexture?Be("WebGLRenderer: Texture samplers can not be part of an uniforms group."):Be("WebGLRenderer: Unsupported uniform value type.",v),_}function m(v){const _=v.target;_.removeEventListener("dispose",m);const S=o.indexOf(_.__bindingPointIndex);o.splice(S,1),t.deleteBuffer(r[_.id]),delete r[_.id],delete s[_.id]}function d(){for(const v in r)t.deleteBuffer(r[v]);o=[],r={},s={}}return{bind:l,update:c,dispose:d}}const S2=new Uint16Array([12469,15057,12620,14925,13266,14620,13807,14376,14323,13990,14545,13625,14713,13328,14840,12882,14931,12528,14996,12233,15039,11829,15066,11525,15080,11295,15085,10976,15082,10705,15073,10495,13880,14564,13898,14542,13977,14430,14158,14124,14393,13732,14556,13410,14702,12996,14814,12596,14891,12291,14937,11834,14957,11489,14958,11194,14943,10803,14921,10506,14893,10278,14858,9960,14484,14039,14487,14025,14499,13941,14524,13740,14574,13468,14654,13106,14743,12678,14818,12344,14867,11893,14889,11509,14893,11180,14881,10751,14852,10428,14812,10128,14765,9754,14712,9466,14764,13480,14764,13475,14766,13440,14766,13347,14769,13070,14786,12713,14816,12387,14844,11957,14860,11549,14868,11215,14855,10751,14825,10403,14782,10044,14729,9651,14666,9352,14599,9029,14967,12835,14966,12831,14963,12804,14954,12723,14936,12564,14917,12347,14900,11958,14886,11569,14878,11247,14859,10765,14828,10401,14784,10011,14727,9600,14660,9289,14586,8893,14508,8533,15111,12234,15110,12234,15104,12216,15092,12156,15067,12010,15028,11776,14981,11500,14942,11205,14902,10752,14861,10393,14812,9991,14752,9570,14682,9252,14603,8808,14519,8445,14431,8145,15209,11449,15208,11451,15202,11451,15190,11438,15163,11384,15117,11274,15055,10979,14994,10648,14932,10343,14871,9936,14803,9532,14729,9218,14645,8742,14556,8381,14461,8020,14365,7603,15273,10603,15272,10607,15267,10619,15256,10631,15231,10614,15182,10535,15118,10389,15042,10167,14963,9787,14883,9447,14800,9115,14710,8665,14615,8318,14514,7911,14411,7507,14279,7198,15314,9675,15313,9683,15309,9712,15298,9759,15277,9797,15229,9773,15166,9668,15084,9487,14995,9274,14898,8910,14800,8539,14697,8234,14590,7790,14479,7409,14367,7067,14178,6621,15337,8619,15337,8631,15333,8677,15325,8769,15305,8871,15264,8940,15202,8909,15119,8775,15022,8565,14916,8328,14804,8009,14688,7614,14569,7287,14448,6888,14321,6483,14088,6171,15350,7402,15350,7419,15347,7480,15340,7613,15322,7804,15287,7973,15229,8057,15148,8012,15046,7846,14933,7611,14810,7357,14682,7069,14552,6656,14421,6316,14251,5948,14007,5528,15356,5942,15356,5977,15353,6119,15348,6294,15332,6551,15302,6824,15249,7044,15171,7122,15070,7050,14949,6861,14818,6611,14679,6349,14538,6067,14398,5651,14189,5311,13935,4958,15359,4123,15359,4153,15356,4296,15353,4646,15338,5160,15311,5508,15263,5829,15188,6042,15088,6094,14966,6001,14826,5796,14678,5543,14527,5287,14377,4985,14133,4586,13869,4257,15360,1563,15360,1642,15358,2076,15354,2636,15341,3350,15317,4019,15273,4429,15203,4732,15105,4911,14981,4932,14836,4818,14679,4621,14517,4386,14359,4156,14083,3795,13808,3437,15360,122,15360,137,15358,285,15355,636,15344,1274,15322,2177,15281,2765,15215,3223,15120,3451,14995,3569,14846,3567,14681,3466,14511,3305,14344,3121,14037,2800,13753,2467,15360,0,15360,1,15359,21,15355,89,15346,253,15325,479,15287,796,15225,1148,15133,1492,15008,1749,14856,1882,14685,1886,14506,1783,14324,1608,13996,1398,13702,1183]);let Si=null;function M2(){return Si===null&&(Si=new vA(S2,16,16,Mo,tr),Si.name="DFG_LUT",Si.minFilter=sn,Si.magFilter=sn,Si.wrapS=Xi,Si.wrapT=Xi,Si.generateMipmaps=!1,Si.needsUpdate=!0),Si}class E2{constructor(e={}){const{canvas:n=Ww(),context:i=null,depth:r=!0,stencil:s=!1,alpha:o=!1,antialias:a=!1,premultipliedAlpha:l=!0,preserveDrawingBuffer:c=!1,powerPreference:f="default",failIfMajorPerformanceCaveat:u=!1,reversedDepthBuffer:h=!1,outputBufferType:p=$n}=e;this.isWebGLRenderer=!0;let g;if(i!==null){if(typeof WebGLRenderingContext<"u"&&i instanceof WebGLRenderingContext)throw new Error("THREE.WebGLRenderer: WebGL 1 is not supported since r163.");g=i.getContextAttributes().alpha}else g=o;const x=p,m=new Set([Sm,ym,xm]),d=new Set([$n,Ni,Fa,Oa,vm,_m]),v=new Uint32Array(4),_=new Int32Array(4);let S=null,E=null;const A=[],b=[];let R=null;this.domElement=n,this.debug={checkShaderErrors:!0,onShaderError:null},this.autoClear=!0,this.autoClearColor=!0,this.autoClearDepth=!0,this.autoClearStencil=!0,this.sortObjects=!0,this.clippingPlanes=[],this.localClippingEnabled=!1,this.toneMapping=Di,this.toneMappingExposure=1,this.transmissionResolutionScale=1;const M=this;let T=!1;this._outputColorSpace=Wn;let L=0,H=0,N=null,X=-1,$=null;const k=new It,O=new It;let P=null;const K=new ct(0);let Y=0,te=n.width,be=n.height,he=1,Ie=null,Ne=null;const q=new It(0,0,te,be),J=new It(0,0,te,be);let oe=!1;const Oe=new PS;let Me=!1,Xe=!1;const xt=new Nt,$e=new G,Ze=new It,st={background:null,fog:null,environment:null,overrideMaterial:null,isScene:!0};let ze=!1;function gt(){return N===null?he:1}let D=i;function rt(w,F){return n.getContext(w,F)}try{const w={alpha:!0,depth:r,stencil:s,antialias:a,premultipliedAlpha:l,preserveDrawingBuffer:c,powerPreference:f,failIfMajorPerformanceCaveat:u};if("setAttribute"in n&&n.setAttribute("data-engine",`three.js r${mm}`),n.addEventListener("webglcontextlost",Pe,!1),n.addEventListener("webglcontextrestored",Ge,!1),n.addEventListener("webglcontextcreationerror",Ke,!1),D===null){const F="webgl2";if(D=rt(F,w),D===null)throw rt(F)?new Error("Error creating WebGL context with your selected attributes."):new Error("Error creating WebGL context.")}}catch(w){throw it("WebGLRenderer: "+w.message),w}let tt,ft,ve,C,y,U,Q,ee,Z,Ce,le,we,Le,re,de,Ee,Re,fe,Ve,I,ge,ae,xe,ie;function z(){tt=new MR(D),tt.init(),ae=new h2(D,tt),ft=new hR(D,tt,e,ae),ve=new f2(D,tt),ft.reversedDepthBuffer&&h&&ve.buffers.depth.setReversed(!0),C=new wR(D),y=new KP,U=new d2(D,tt,ve,y,ft,ae,C),Q=new mR(M),ee=new SR(M),Z=new RA(D),xe=new fR(D,Z),Ce=new ER(D,Z,C,xe),le=new bR(D,Ce,Z,C),Ve=new AR(D,ft,U),Ee=new pR(y),we=new qP(M,Q,ee,tt,ft,xe,Ee),Le=new x2(M,y),re=new QP,de=new r2(tt),fe=new uR(M,Q,ee,ve,le,g,l),Re=new c2(M,le,ft),ie=new y2(D,C,ft,ve),I=new dR(D,tt,C),ge=new TR(D,tt,C),C.programs=we.programs,M.capabilities=ft,M.extensions=tt,M.properties=y,M.renderLists=re,M.shadowMap=Re,M.state=ve,M.info=C}z(),x!==$n&&(R=new RR(x,n.width,n.height,r,s));const ne=new v2(M,D);this.xr=ne,this.getContext=function(){return D},this.getContextAttributes=function(){return D.getContextAttributes()},this.forceContextLoss=function(){const w=tt.get("WEBGL_lose_context");w&&w.loseContext()},this.forceContextRestore=function(){const w=tt.get("WEBGL_lose_context");w&&w.restoreContext()},this.getPixelRatio=function(){return he},this.setPixelRatio=function(w){w!==void 0&&(he=w,this.setSize(te,be,!1))},this.getSize=function(w){return w.set(te,be)},this.setSize=function(w,F,j=!0){if(ne.isPresenting){Be("WebGLRenderer: Can't change size while VR device is presenting.");return}te=w,be=F,n.width=Math.floor(w*he),n.height=Math.floor(F*he),j===!0&&(n.style.width=w+"px",n.style.height=F+"px"),R!==null&&R.setSize(n.width,n.height),this.setViewport(0,0,w,F)},this.getDrawingBufferSize=function(w){return w.set(te*he,be*he).floor()},this.setDrawingBufferSize=function(w,F,j){te=w,be=F,he=j,n.width=Math.floor(w*j),n.height=Math.floor(F*j),this.setViewport(0,0,w,F)},this.setEffects=function(w){if(x===$n){console.error("THREE.WebGLRenderer: setEffects() requires outputBufferType set to HalfFloatType or FloatType.");return}if(w){for(let F=0;F<w.length;F++)if(w[F].isOutputPass===!0){console.warn("THREE.WebGLRenderer: OutputPass is not needed in setEffects(). Tone mapping and color space conversion are applied automatically.");break}}R.setEffects(w||[])},this.getCurrentViewport=function(w){return w.copy(k)},this.getViewport=function(w){return w.copy(q)},this.setViewport=function(w,F,j,W){w.isVector4?q.set(w.x,w.y,w.z,w.w):q.set(w,F,j,W),ve.viewport(k.copy(q).multiplyScalar(he).round())},this.getScissor=function(w){return w.copy(J)},this.setScissor=function(w,F,j,W){w.isVector4?J.set(w.x,w.y,w.z,w.w):J.set(w,F,j,W),ve.scissor(O.copy(J).multiplyScalar(he).round())},this.getScissorTest=function(){return oe},this.setScissorTest=function(w){ve.setScissorTest(oe=w)},this.setOpaqueSort=function(w){Ie=w},this.setTransparentSort=function(w){Ne=w},this.getClearColor=function(w){return w.copy(fe.getClearColor())},this.setClearColor=function(){fe.setClearColor(...arguments)},this.getClearAlpha=function(){return fe.getClearAlpha()},this.setClearAlpha=function(){fe.setClearAlpha(...arguments)},this.clear=function(w=!0,F=!0,j=!0){let W=0;if(w){let B=!1;if(N!==null){const pe=N.texture.format;B=m.has(pe)}if(B){const pe=N.texture.type,ye=d.has(pe),_e=fe.getClearColor(),Ae=fe.getClearAlpha(),De=_e.r,ke=_e.g,Ue=_e.b;ye?(v[0]=De,v[1]=ke,v[2]=Ue,v[3]=Ae,D.clearBufferuiv(D.COLOR,0,v)):(_[0]=De,_[1]=ke,_[2]=Ue,_[3]=Ae,D.clearBufferiv(D.COLOR,0,_))}else W|=D.COLOR_BUFFER_BIT}F&&(W|=D.DEPTH_BUFFER_BIT),j&&(W|=D.STENCIL_BUFFER_BIT,this.state.buffers.stencil.setMask(4294967295)),D.clear(W)},this.clearColor=function(){this.clear(!0,!1,!1)},this.clearDepth=function(){this.clear(!1,!0,!1)},this.clearStencil=function(){this.clear(!1,!1,!0)},this.dispose=function(){n.removeEventListener("webglcontextlost",Pe,!1),n.removeEventListener("webglcontextrestored",Ge,!1),n.removeEventListener("webglcontextcreationerror",Ke,!1),fe.dispose(),re.dispose(),de.dispose(),y.dispose(),Q.dispose(),ee.dispose(),le.dispose(),xe.dispose(),ie.dispose(),we.dispose(),ne.dispose(),ne.removeEventListener("sessionstart",xi),ne.removeEventListener("sessionend",Nu),zr.stop()};function Pe(w){w.preventDefault(),w0("WebGLRenderer: Context Lost."),T=!0}function Ge(){w0("WebGLRenderer: Context Restored."),T=!1;const w=C.autoReset,F=Re.enabled,j=Re.autoUpdate,W=Re.needsUpdate,B=Re.type;z(),C.autoReset=w,Re.enabled=F,Re.autoUpdate=j,Re.needsUpdate=W,Re.type=B}function Ke(w){it("WebGLRenderer: A WebGL context could not be created. Reason: ",w.statusMessage)}function dt(w){const F=w.target;F.removeEventListener("dispose",dt),bt(F)}function bt(w){ys(w),y.remove(w)}function ys(w){const F=y.get(w).programs;F!==void 0&&(F.forEach(function(j){we.releaseProgram(j)}),w.isShaderMaterial&&we.releaseShaderCache(w))}this.renderBufferDirect=function(w,F,j,W,B,pe){F===null&&(F=st);const ye=B.isMesh&&B.matrixWorld.determinant()<0,_e=PE(w,F,j,W,B);ve.setMaterial(W,ye);let Ae=j.index,De=1;if(W.wireframe===!0){if(Ae=Ce.getWireframeAttribute(j),Ae===void 0)return;De=2}const ke=j.drawRange,Ue=j.attributes.position;let je=ke.start*De,ht=(ke.start+ke.count)*De;pe!==null&&(je=Math.max(je,pe.start*De),ht=Math.min(ht,(pe.start+pe.count)*De)),Ae!==null?(je=Math.max(je,0),ht=Math.min(ht,Ae.count)):Ue!=null&&(je=Math.max(je,0),ht=Math.min(ht,Ue.count));const Ct=ht-je;if(Ct<0||Ct===1/0)return;xe.setup(B,W,_e,j,Ae);let Rt,mt=I;if(Ae!==null&&(Rt=Z.get(Ae),mt=ge,mt.setIndex(Rt)),B.isMesh)W.wireframe===!0?(ve.setLineWidth(W.wireframeLinewidth*gt()),mt.setMode(D.LINES)):mt.setMode(D.TRIANGLES);else if(B.isLine){let Fe=W.linewidth;Fe===void 0&&(Fe=1),ve.setLineWidth(Fe*gt()),B.isLineSegments?mt.setMode(D.LINES):B.isLineLoop?mt.setMode(D.LINE_LOOP):mt.setMode(D.LINE_STRIP)}else B.isPoints?mt.setMode(D.POINTS):B.isSprite&&mt.setMode(D.TRIANGLES);if(B.isBatchedMesh)if(B._multiDrawInstances!==null)ka("WebGLRenderer: renderMultiDrawInstances has been deprecated and will be removed in r184. Append to renderMultiDraw arguments and use indirection."),mt.renderMultiDrawInstances(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount,B._multiDrawInstances);else if(tt.get("WEBGL_multi_draw"))mt.renderMultiDraw(B._multiDrawStarts,B._multiDrawCounts,B._multiDrawCount);else{const Fe=B._multiDrawStarts,ot=B._multiDrawCounts,nt=B._multiDrawCount,Ln=Ae?Z.get(Ae).bytesPerElement:1,Ss=y.get(W).currentProgram.getUniforms();for(let In=0;In<nt;In++)Ss.setValue(D,"_gl_DrawID",In),mt.render(Fe[In]/Ln,ot[In])}else if(B.isInstancedMesh)mt.renderInstances(je,Ct,B.count);else if(j.isInstancedBufferGeometry){const Fe=j._maxInstanceCount!==void 0?j._maxInstanceCount:1/0,ot=Math.min(j.instanceCount,Fe);mt.renderInstances(je,Ct,ot)}else mt.render(je,Ct)};function _n(w,F,j){w.transparent===!0&&w.side===Gi&&w.forceSinglePass===!1?(w.side=Rn,w.needsUpdate=!0,al(w,F,j),w.side=Ur,w.needsUpdate=!0,al(w,F,j),w.side=Gi):al(w,F,j)}this.compile=function(w,F,j=null){j===null&&(j=w),E=de.get(j),E.init(F),b.push(E),j.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),w!==j&&w.traverseVisible(function(B){B.isLight&&B.layers.test(F.layers)&&(E.pushLight(B),B.castShadow&&E.pushShadow(B))}),E.setupLights();const W=new Set;return w.traverse(function(B){if(!(B.isMesh||B.isPoints||B.isLine||B.isSprite))return;const pe=B.material;if(pe)if(Array.isArray(pe))for(let ye=0;ye<pe.length;ye++){const _e=pe[ye];_n(_e,j,B),W.add(_e)}else _n(pe,j,B),W.add(pe)}),E=b.pop(),W},this.compileAsync=function(w,F,j=null){const W=this.compile(w,F,j);return new Promise(B=>{function pe(){if(W.forEach(function(ye){y.get(ye).currentProgram.isReady()&&W.delete(ye)}),W.size===0){B(w);return}setTimeout(pe,10)}tt.get("KHR_parallel_shader_compile")!==null?pe():setTimeout(pe,10)})};let ln=null;function sl(w){ln&&ln(w)}function xi(){zr.stop()}function Nu(){zr.start()}const zr=new NS;zr.setAnimationLoop(sl),typeof self<"u"&&zr.setContext(self),this.setAnimationLoop=function(w){ln=w,ne.setAnimationLoop(w),w===null?zr.stop():zr.start()},ne.addEventListener("sessionstart",xi),ne.addEventListener("sessionend",Nu),this.render=function(w,F){if(F!==void 0&&F.isCamera!==!0){it("WebGLRenderer.render: camera is not an instance of THREE.Camera.");return}if(T===!0)return;const j=ne.enabled===!0&&ne.isPresenting===!0,W=R!==null&&(N===null||j)&&R.begin(M,N);if(w.matrixWorldAutoUpdate===!0&&w.updateMatrixWorld(),F.parent===null&&F.matrixWorldAutoUpdate===!0&&F.updateMatrixWorld(),ne.enabled===!0&&ne.isPresenting===!0&&(R===null||R.isCompositing()===!1)&&(ne.cameraAutoUpdate===!0&&ne.updateCamera(F),F=ne.getCamera()),w.isScene===!0&&w.onBeforeRender(M,w,F,N),E=de.get(w,b.length),E.init(F),b.push(E),xt.multiplyMatrices(F.projectionMatrix,F.matrixWorldInverse),Oe.setFromProjectionMatrix(xt,Ci,F.reversedDepth),Xe=this.localClippingEnabled,Me=Ee.init(this.clippingPlanes,Xe),S=re.get(w,A.length),S.init(),A.push(S),ne.enabled===!0&&ne.isPresenting===!0){const ye=M.xr.getDepthSensingMesh();ye!==null&&Uu(ye,F,-1/0,M.sortObjects)}Uu(w,F,0,M.sortObjects),S.finish(),M.sortObjects===!0&&S.sort(Ie,Ne),ze=ne.enabled===!1||ne.isPresenting===!1||ne.hasDepthSensing()===!1,ze&&fe.addToRenderList(S,w),this.info.render.frame++,Me===!0&&Ee.beginShadows();const B=E.state.shadowsArray;if(Re.render(B,w,F),Me===!0&&Ee.endShadows(),this.info.autoReset===!0&&this.info.reset(),(W&&R.hasRenderPass())===!1){const ye=S.opaque,_e=S.transmissive;if(E.setupLights(),F.isArrayCamera){const Ae=F.cameras;if(_e.length>0)for(let De=0,ke=Ae.length;De<ke;De++){const Ue=Ae[De];rg(ye,_e,w,Ue)}ze&&fe.render(w);for(let De=0,ke=Ae.length;De<ke;De++){const Ue=Ae[De];ig(S,w,Ue,Ue.viewport)}}else _e.length>0&&rg(ye,_e,w,F),ze&&fe.render(w),ig(S,w,F)}N!==null&&H===0&&(U.updateMultisampleRenderTarget(N),U.updateRenderTargetMipmap(N)),W&&R.end(M),w.isScene===!0&&w.onAfterRender(M,w,F),xe.resetDefaultState(),X=-1,$=null,b.pop(),b.length>0?(E=b[b.length-1],Me===!0&&Ee.setGlobalState(M.clippingPlanes,E.state.camera)):E=null,A.pop(),A.length>0?S=A[A.length-1]:S=null};function Uu(w,F,j,W){if(w.visible===!1)return;if(w.layers.test(F.layers)){if(w.isGroup)j=w.renderOrder;else if(w.isLOD)w.autoUpdate===!0&&w.update(F);else if(w.isLight)E.pushLight(w),w.castShadow&&E.pushShadow(w);else if(w.isSprite){if(!w.frustumCulled||Oe.intersectsSprite(w)){W&&Ze.setFromMatrixPosition(w.matrixWorld).applyMatrix4(xt);const ye=le.update(w),_e=w.material;_e.visible&&S.push(w,ye,_e,j,Ze.z,null)}}else if((w.isMesh||w.isLine||w.isPoints)&&(!w.frustumCulled||Oe.intersectsObject(w))){const ye=le.update(w),_e=w.material;if(W&&(w.boundingSphere!==void 0?(w.boundingSphere===null&&w.computeBoundingSphere(),Ze.copy(w.boundingSphere.center)):(ye.boundingSphere===null&&ye.computeBoundingSphere(),Ze.copy(ye.boundingSphere.center)),Ze.applyMatrix4(w.matrixWorld).applyMatrix4(xt)),Array.isArray(_e)){const Ae=ye.groups;for(let De=0,ke=Ae.length;De<ke;De++){const Ue=Ae[De],je=_e[Ue.materialIndex];je&&je.visible&&S.push(w,ye,je,j,Ze.z,Ue)}}else _e.visible&&S.push(w,ye,_e,j,Ze.z,null)}}const pe=w.children;for(let ye=0,_e=pe.length;ye<_e;ye++)Uu(pe[ye],F,j,W)}function ig(w,F,j,W){const{opaque:B,transmissive:pe,transparent:ye}=w;E.setupLightsView(j),Me===!0&&Ee.setGlobalState(M.clippingPlanes,j),W&&ve.viewport(k.copy(W)),B.length>0&&ol(B,F,j),pe.length>0&&ol(pe,F,j),ye.length>0&&ol(ye,F,j),ve.buffers.depth.setTest(!0),ve.buffers.depth.setMask(!0),ve.buffers.color.setMask(!0),ve.setPolygonOffset(!1)}function rg(w,F,j,W){if((j.isScene===!0?j.overrideMaterial:null)!==null)return;if(E.state.transmissionRenderTarget[W.id]===void 0){const je=tt.has("EXT_color_buffer_half_float")||tt.has("EXT_color_buffer_float");E.state.transmissionRenderTarget[W.id]=new Li(1,1,{generateMipmaps:!0,type:je?tr:$n,minFilter:ss,samples:ft.samples,stencilBuffer:s,resolveDepthBuffer:!1,resolveStencilBuffer:!1,colorSpace:Qe.workingColorSpace})}const pe=E.state.transmissionRenderTarget[W.id],ye=W.viewport||k;pe.setSize(ye.z*M.transmissionResolutionScale,ye.w*M.transmissionResolutionScale);const _e=M.getRenderTarget(),Ae=M.getActiveCubeFace(),De=M.getActiveMipmapLevel();M.setRenderTarget(pe),M.getClearColor(K),Y=M.getClearAlpha(),Y<1&&M.setClearColor(16777215,.5),M.clear(),ze&&fe.render(j);const ke=M.toneMapping;M.toneMapping=Di;const Ue=W.viewport;if(W.viewport!==void 0&&(W.viewport=void 0),E.setupLightsView(W),Me===!0&&Ee.setGlobalState(M.clippingPlanes,W),ol(w,j,W),U.updateMultisampleRenderTarget(pe),U.updateRenderTargetMipmap(pe),tt.has("WEBGL_multisampled_render_to_texture")===!1){let je=!1;for(let ht=0,Ct=F.length;ht<Ct;ht++){const Rt=F[ht],{object:mt,geometry:Fe,material:ot,group:nt}=Rt;if(ot.side===Gi&&mt.layers.test(W.layers)){const Ln=ot.side;ot.side=Rn,ot.needsUpdate=!0,sg(mt,j,W,Fe,ot,nt),ot.side=Ln,ot.needsUpdate=!0,je=!0}}je===!0&&(U.updateMultisampleRenderTarget(pe),U.updateRenderTargetMipmap(pe))}M.setRenderTarget(_e,Ae,De),M.setClearColor(K,Y),Ue!==void 0&&(W.viewport=Ue),M.toneMapping=ke}function ol(w,F,j){const W=F.isScene===!0?F.overrideMaterial:null;for(let B=0,pe=w.length;B<pe;B++){const ye=w[B],{object:_e,geometry:Ae,group:De}=ye;let ke=ye.material;ke.allowOverride===!0&&W!==null&&(ke=W),_e.layers.test(j.layers)&&sg(_e,F,j,Ae,ke,De)}}function sg(w,F,j,W,B,pe){w.onBeforeRender(M,F,j,W,B,pe),w.modelViewMatrix.multiplyMatrices(j.matrixWorldInverse,w.matrixWorld),w.normalMatrix.getNormalMatrix(w.modelViewMatrix),B.onBeforeRender(M,F,j,W,w,pe),B.transparent===!0&&B.side===Gi&&B.forceSinglePass===!1?(B.side=Rn,B.needsUpdate=!0,M.renderBufferDirect(j,F,W,B,w,pe),B.side=Ur,B.needsUpdate=!0,M.renderBufferDirect(j,F,W,B,w,pe),B.side=Gi):M.renderBufferDirect(j,F,W,B,w,pe),w.onAfterRender(M,F,j,W,B,pe)}function al(w,F,j){F.isScene!==!0&&(F=st);const W=y.get(w),B=E.state.lights,pe=E.state.shadowsArray,ye=B.state.version,_e=we.getParameters(w,B.state,pe,F,j),Ae=we.getProgramCacheKey(_e);let De=W.programs;W.environment=w.isMeshStandardMaterial?F.environment:null,W.fog=F.fog,W.envMap=(w.isMeshStandardMaterial?ee:Q).get(w.envMap||W.environment),W.envMapRotation=W.environment!==null&&w.envMap===null?F.environmentRotation:w.envMapRotation,De===void 0&&(w.addEventListener("dispose",dt),De=new Map,W.programs=De);let ke=De.get(Ae);if(ke!==void 0){if(W.currentProgram===ke&&W.lightsStateVersion===ye)return ag(w,_e),ke}else _e.uniforms=we.getUniforms(w),w.onBeforeCompile(_e,M),ke=we.acquireProgram(_e,Ae),De.set(Ae,ke),W.uniforms=_e.uniforms;const Ue=W.uniforms;return(!w.isShaderMaterial&&!w.isRawShaderMaterial||w.clipping===!0)&&(Ue.clippingPlanes=Ee.uniform),ag(w,_e),W.needsLights=LE(w),W.lightsStateVersion=ye,W.needsLights&&(Ue.ambientLightColor.value=B.state.ambient,Ue.lightProbe.value=B.state.probe,Ue.directionalLights.value=B.state.directional,Ue.directionalLightShadows.value=B.state.directionalShadow,Ue.spotLights.value=B.state.spot,Ue.spotLightShadows.value=B.state.spotShadow,Ue.rectAreaLights.value=B.state.rectArea,Ue.ltc_1.value=B.state.rectAreaLTC1,Ue.ltc_2.value=B.state.rectAreaLTC2,Ue.pointLights.value=B.state.point,Ue.pointLightShadows.value=B.state.pointShadow,Ue.hemisphereLights.value=B.state.hemi,Ue.directionalShadowMap.value=B.state.directionalShadowMap,Ue.directionalShadowMatrix.value=B.state.directionalShadowMatrix,Ue.spotShadowMap.value=B.state.spotShadowMap,Ue.spotLightMatrix.value=B.state.spotLightMatrix,Ue.spotLightMap.value=B.state.spotLightMap,Ue.pointShadowMap.value=B.state.pointShadowMap,Ue.pointShadowMatrix.value=B.state.pointShadowMatrix),W.currentProgram=ke,W.uniformsList=null,ke}function og(w){if(w.uniformsList===null){const F=w.currentProgram.getUniforms();w.uniformsList=xc.seqWithValue(F.seq,w.uniforms)}return w.uniformsList}function ag(w,F){const j=y.get(w);j.outputColorSpace=F.outputColorSpace,j.batching=F.batching,j.batchingColor=F.batchingColor,j.instancing=F.instancing,j.instancingColor=F.instancingColor,j.instancingMorph=F.instancingMorph,j.skinning=F.skinning,j.morphTargets=F.morphTargets,j.morphNormals=F.morphNormals,j.morphColors=F.morphColors,j.morphTargetsCount=F.morphTargetsCount,j.numClippingPlanes=F.numClippingPlanes,j.numIntersection=F.numClipIntersection,j.vertexAlphas=F.vertexAlphas,j.vertexTangents=F.vertexTangents,j.toneMapping=F.toneMapping}function PE(w,F,j,W,B){F.isScene!==!0&&(F=st),U.resetTextureUnits();const pe=F.fog,ye=W.isMeshStandardMaterial?F.environment:null,_e=N===null?M.outputColorSpace:N.isXRRenderTarget===!0?N.texture.colorSpace:Eo,Ae=(W.isMeshStandardMaterial?ee:Q).get(W.envMap||ye),De=W.vertexColors===!0&&!!j.attributes.color&&j.attributes.color.itemSize===4,ke=!!j.attributes.tangent&&(!!W.normalMap||W.anisotropy>0),Ue=!!j.morphAttributes.position,je=!!j.morphAttributes.normal,ht=!!j.morphAttributes.color;let Ct=Di;W.toneMapped&&(N===null||N.isXRRenderTarget===!0)&&(Ct=M.toneMapping);const Rt=j.morphAttributes.position||j.morphAttributes.normal||j.morphAttributes.color,mt=Rt!==void 0?Rt.length:0,Fe=y.get(W),ot=E.state.lights;if(Me===!0&&(Xe===!0||w!==$)){const cn=w===$&&W.id===X;Ee.setState(W,w,cn)}let nt=!1;W.version===Fe.__version?(Fe.needsLights&&Fe.lightsStateVersion!==ot.state.version||Fe.outputColorSpace!==_e||B.isBatchedMesh&&Fe.batching===!1||!B.isBatchedMesh&&Fe.batching===!0||B.isBatchedMesh&&Fe.batchingColor===!0&&B.colorTexture===null||B.isBatchedMesh&&Fe.batchingColor===!1&&B.colorTexture!==null||B.isInstancedMesh&&Fe.instancing===!1||!B.isInstancedMesh&&Fe.instancing===!0||B.isSkinnedMesh&&Fe.skinning===!1||!B.isSkinnedMesh&&Fe.skinning===!0||B.isInstancedMesh&&Fe.instancingColor===!0&&B.instanceColor===null||B.isInstancedMesh&&Fe.instancingColor===!1&&B.instanceColor!==null||B.isInstancedMesh&&Fe.instancingMorph===!0&&B.morphTexture===null||B.isInstancedMesh&&Fe.instancingMorph===!1&&B.morphTexture!==null||Fe.envMap!==Ae||W.fog===!0&&Fe.fog!==pe||Fe.numClippingPlanes!==void 0&&(Fe.numClippingPlanes!==Ee.numPlanes||Fe.numIntersection!==Ee.numIntersection)||Fe.vertexAlphas!==De||Fe.vertexTangents!==ke||Fe.morphTargets!==Ue||Fe.morphNormals!==je||Fe.morphColors!==ht||Fe.toneMapping!==Ct||Fe.morphTargetsCount!==mt)&&(nt=!0):(nt=!0,Fe.__version=W.version);let Ln=Fe.currentProgram;nt===!0&&(Ln=al(W,F,B));let Ss=!1,In=!1,Uo=!1;const vt=Ln.getUniforms(),xn=Fe.uniforms;if(ve.useProgram(Ln.program)&&(Ss=!0,In=!0,Uo=!0),W.id!==X&&(X=W.id,In=!0),Ss||$!==w){ve.buffers.depth.getReversed()&&w.reversedDepth!==!0&&(w._reversedDepth=!0,w.updateProjectionMatrix()),vt.setValue(D,"projectionMatrix",w.projectionMatrix),vt.setValue(D,"viewMatrix",w.matrixWorldInverse);const yn=vt.map.cameraPosition;yn!==void 0&&yn.setValue(D,$e.setFromMatrixPosition(w.matrixWorld)),ft.logarithmicDepthBuffer&&vt.setValue(D,"logDepthBufFC",2/(Math.log(w.far+1)/Math.LN2)),(W.isMeshPhongMaterial||W.isMeshToonMaterial||W.isMeshLambertMaterial||W.isMeshBasicMaterial||W.isMeshStandardMaterial||W.isShaderMaterial)&&vt.setValue(D,"isOrthographic",w.isOrthographicCamera===!0),$!==w&&($=w,In=!0,Uo=!0)}if(Fe.needsLights&&(ot.state.directionalShadowMap.length>0&&vt.setValue(D,"directionalShadowMap",ot.state.directionalShadowMap,U),ot.state.spotShadowMap.length>0&&vt.setValue(D,"spotShadowMap",ot.state.spotShadowMap,U),ot.state.pointShadowMap.length>0&&vt.setValue(D,"pointShadowMap",ot.state.pointShadowMap,U)),B.isSkinnedMesh){vt.setOptional(D,B,"bindMatrix"),vt.setOptional(D,B,"bindMatrixInverse");const cn=B.skeleton;cn&&(cn.boneTexture===null&&cn.computeBoneTexture(),vt.setValue(D,"boneTexture",cn.boneTexture,U))}B.isBatchedMesh&&(vt.setOptional(D,B,"batchingTexture"),vt.setValue(D,"batchingTexture",B._matricesTexture,U),vt.setOptional(D,B,"batchingIdTexture"),vt.setValue(D,"batchingIdTexture",B._indirectTexture,U),vt.setOptional(D,B,"batchingColorTexture"),B._colorsTexture!==null&&vt.setValue(D,"batchingColorTexture",B._colorsTexture,U));const Hn=j.morphAttributes;if((Hn.position!==void 0||Hn.normal!==void 0||Hn.color!==void 0)&&Ve.update(B,j,Ln),(In||Fe.receiveShadow!==B.receiveShadow)&&(Fe.receiveShadow=B.receiveShadow,vt.setValue(D,"receiveShadow",B.receiveShadow)),W.isMeshGouraudMaterial&&W.envMap!==null&&(xn.envMap.value=Ae,xn.flipEnvMap.value=Ae.isCubeTexture&&Ae.isRenderTargetTexture===!1?-1:1),W.isMeshStandardMaterial&&W.envMap===null&&F.environment!==null&&(xn.envMapIntensity.value=F.environmentIntensity),xn.dfgLUT!==void 0&&(xn.dfgLUT.value=M2()),In&&(vt.setValue(D,"toneMappingExposure",M.toneMappingExposure),Fe.needsLights&&DE(xn,Uo),pe&&W.fog===!0&&Le.refreshFogUniforms(xn,pe),Le.refreshMaterialUniforms(xn,W,he,be,E.state.transmissionRenderTarget[w.id]),xc.upload(D,og(Fe),xn,U)),W.isShaderMaterial&&W.uniformsNeedUpdate===!0&&(xc.upload(D,og(Fe),xn,U),W.uniformsNeedUpdate=!1),W.isSpriteMaterial&&vt.setValue(D,"center",B.center),vt.setValue(D,"modelViewMatrix",B.modelViewMatrix),vt.setValue(D,"normalMatrix",B.normalMatrix),vt.setValue(D,"modelMatrix",B.matrixWorld),W.isShaderMaterial||W.isRawShaderMaterial){const cn=W.uniformsGroups;for(let yn=0,Fu=cn.length;yn<Fu;yn++){const Hr=cn[yn];ie.update(Hr,Ln),ie.bind(Hr,Ln)}}return Ln}function DE(w,F){w.ambientLightColor.needsUpdate=F,w.lightProbe.needsUpdate=F,w.directionalLights.needsUpdate=F,w.directionalLightShadows.needsUpdate=F,w.pointLights.needsUpdate=F,w.pointLightShadows.needsUpdate=F,w.spotLights.needsUpdate=F,w.spotLightShadows.needsUpdate=F,w.rectAreaLights.needsUpdate=F,w.hemisphereLights.needsUpdate=F}function LE(w){return w.isMeshLambertMaterial||w.isMeshToonMaterial||w.isMeshPhongMaterial||w.isMeshStandardMaterial||w.isShadowMaterial||w.isShaderMaterial&&w.lights===!0}this.getActiveCubeFace=function(){return L},this.getActiveMipmapLevel=function(){return H},this.getRenderTarget=function(){return N},this.setRenderTargetTextures=function(w,F,j){const W=y.get(w);W.__autoAllocateDepthBuffer=w.resolveDepthBuffer===!1,W.__autoAllocateDepthBuffer===!1&&(W.__useRenderToTexture=!1),y.get(w.texture).__webglTexture=F,y.get(w.depthTexture).__webglTexture=W.__autoAllocateDepthBuffer?void 0:j,W.__hasExternalTextures=!0},this.setRenderTargetFramebuffer=function(w,F){const j=y.get(w);j.__webglFramebuffer=F,j.__useDefaultFramebuffer=F===void 0};const IE=D.createFramebuffer();this.setRenderTarget=function(w,F=0,j=0){N=w,L=F,H=j;let W=null,B=!1,pe=!1;if(w){const _e=y.get(w);if(_e.__useDefaultFramebuffer!==void 0){ve.bindFramebuffer(D.FRAMEBUFFER,_e.__webglFramebuffer),k.copy(w.viewport),O.copy(w.scissor),P=w.scissorTest,ve.viewport(k),ve.scissor(O),ve.setScissorTest(P),X=-1;return}else if(_e.__webglFramebuffer===void 0)U.setupRenderTarget(w);else if(_e.__hasExternalTextures)U.rebindTextures(w,y.get(w.texture).__webglTexture,y.get(w.depthTexture).__webglTexture);else if(w.depthBuffer){const ke=w.depthTexture;if(_e.__boundDepthTexture!==ke){if(ke!==null&&y.has(ke)&&(w.width!==ke.image.width||w.height!==ke.image.height))throw new Error("WebGLRenderTarget: Attached DepthTexture is initialized to the incorrect size.");U.setupDepthRenderbuffer(w)}}const Ae=w.texture;(Ae.isData3DTexture||Ae.isDataArrayTexture||Ae.isCompressedArrayTexture)&&(pe=!0);const De=y.get(w).__webglFramebuffer;w.isWebGLCubeRenderTarget?(Array.isArray(De[F])?W=De[F][j]:W=De[F],B=!0):w.samples>0&&U.useMultisampledRTT(w)===!1?W=y.get(w).__webglMultisampledFramebuffer:Array.isArray(De)?W=De[j]:W=De,k.copy(w.viewport),O.copy(w.scissor),P=w.scissorTest}else k.copy(q).multiplyScalar(he).floor(),O.copy(J).multiplyScalar(he).floor(),P=oe;if(j!==0&&(W=IE),ve.bindFramebuffer(D.FRAMEBUFFER,W)&&ve.drawBuffers(w,W),ve.viewport(k),ve.scissor(O),ve.setScissorTest(P),B){const _e=y.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_CUBE_MAP_POSITIVE_X+F,_e.__webglTexture,j)}else if(pe){const _e=F;for(let Ae=0;Ae<w.textures.length;Ae++){const De=y.get(w.textures[Ae]);D.framebufferTextureLayer(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0+Ae,De.__webglTexture,j,_e)}}else if(w!==null&&j!==0){const _e=y.get(w.texture);D.framebufferTexture2D(D.FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,_e.__webglTexture,j)}X=-1},this.readRenderTargetPixels=function(w,F,j,W,B,pe,ye,_e=0){if(!(w&&w.isWebGLRenderTarget)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");return}let Ae=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae){ve.bindFramebuffer(D.FRAMEBUFFER,Ae);try{const De=w.textures[_e],ke=De.format,Ue=De.type;if(!ft.textureFormatReadable(ke)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in RGBA or implementation defined format.");return}if(!ft.textureTypeReadable(Ue)){it("WebGLRenderer.readRenderTargetPixels: renderTarget is not in UnsignedByteType or implementation defined type.");return}F>=0&&F<=w.width-W&&j>=0&&j<=w.height-B&&(w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(F,j,W,B,ae.convert(ke),ae.convert(Ue),pe))}finally{const De=N!==null?y.get(N).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,De)}}},this.readRenderTargetPixelsAsync=async function(w,F,j,W,B,pe,ye,_e=0){if(!(w&&w.isWebGLRenderTarget))throw new Error("THREE.WebGLRenderer.readRenderTargetPixels: renderTarget is not THREE.WebGLRenderTarget.");let Ae=y.get(w).__webglFramebuffer;if(w.isWebGLCubeRenderTarget&&ye!==void 0&&(Ae=Ae[ye]),Ae)if(F>=0&&F<=w.width-W&&j>=0&&j<=w.height-B){ve.bindFramebuffer(D.FRAMEBUFFER,Ae);const De=w.textures[_e],ke=De.format,Ue=De.type;if(!ft.textureFormatReadable(ke))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in RGBA or implementation defined format.");if(!ft.textureTypeReadable(Ue))throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: renderTarget is not in UnsignedByteType or implementation defined type.");const je=D.createBuffer();D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.bufferData(D.PIXEL_PACK_BUFFER,pe.byteLength,D.STREAM_READ),w.textures.length>1&&D.readBuffer(D.COLOR_ATTACHMENT0+_e),D.readPixels(F,j,W,B,ae.convert(ke),ae.convert(Ue),0);const ht=N!==null?y.get(N).__webglFramebuffer:null;ve.bindFramebuffer(D.FRAMEBUFFER,ht);const Ct=D.fenceSync(D.SYNC_GPU_COMMANDS_COMPLETE,0);return D.flush(),await jw(D,Ct,4),D.bindBuffer(D.PIXEL_PACK_BUFFER,je),D.getBufferSubData(D.PIXEL_PACK_BUFFER,0,pe),D.deleteBuffer(je),D.deleteSync(Ct),pe}else throw new Error("THREE.WebGLRenderer.readRenderTargetPixelsAsync: requested read bounds are out of range.")},this.copyFramebufferToTexture=function(w,F=null,j=0){const W=Math.pow(2,-j),B=Math.floor(w.image.width*W),pe=Math.floor(w.image.height*W),ye=F!==null?F.x:0,_e=F!==null?F.y:0;U.setTexture2D(w,0),D.copyTexSubImage2D(D.TEXTURE_2D,j,0,0,ye,_e,B,pe),ve.unbindTexture()};const NE=D.createFramebuffer(),UE=D.createFramebuffer();this.copyTextureToTexture=function(w,F,j=null,W=null,B=0,pe=null){pe===null&&(B!==0?(ka("WebGLRenderer: copyTextureToTexture function signature has changed to support src and dst mipmap levels."),pe=B,B=0):pe=0);let ye,_e,Ae,De,ke,Ue,je,ht,Ct;const Rt=w.isCompressedTexture?w.mipmaps[pe]:w.image;if(j!==null)ye=j.max.x-j.min.x,_e=j.max.y-j.min.y,Ae=j.isBox3?j.max.z-j.min.z:1,De=j.min.x,ke=j.min.y,Ue=j.isBox3?j.min.z:0;else{const Hn=Math.pow(2,-B);ye=Math.floor(Rt.width*Hn),_e=Math.floor(Rt.height*Hn),w.isDataArrayTexture?Ae=Rt.depth:w.isData3DTexture?Ae=Math.floor(Rt.depth*Hn):Ae=1,De=0,ke=0,Ue=0}W!==null?(je=W.x,ht=W.y,Ct=W.z):(je=0,ht=0,Ct=0);const mt=ae.convert(F.format),Fe=ae.convert(F.type);let ot;F.isData3DTexture?(U.setTexture3D(F,0),ot=D.TEXTURE_3D):F.isDataArrayTexture||F.isCompressedArrayTexture?(U.setTexture2DArray(F,0),ot=D.TEXTURE_2D_ARRAY):(U.setTexture2D(F,0),ot=D.TEXTURE_2D),D.pixelStorei(D.UNPACK_FLIP_Y_WEBGL,F.flipY),D.pixelStorei(D.UNPACK_PREMULTIPLY_ALPHA_WEBGL,F.premultiplyAlpha),D.pixelStorei(D.UNPACK_ALIGNMENT,F.unpackAlignment);const nt=D.getParameter(D.UNPACK_ROW_LENGTH),Ln=D.getParameter(D.UNPACK_IMAGE_HEIGHT),Ss=D.getParameter(D.UNPACK_SKIP_PIXELS),In=D.getParameter(D.UNPACK_SKIP_ROWS),Uo=D.getParameter(D.UNPACK_SKIP_IMAGES);D.pixelStorei(D.UNPACK_ROW_LENGTH,Rt.width),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Rt.height),D.pixelStorei(D.UNPACK_SKIP_PIXELS,De),D.pixelStorei(D.UNPACK_SKIP_ROWS,ke),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Ue);const vt=w.isDataArrayTexture||w.isData3DTexture,xn=F.isDataArrayTexture||F.isData3DTexture;if(w.isDepthTexture){const Hn=y.get(w),cn=y.get(F),yn=y.get(Hn.__renderTarget),Fu=y.get(cn.__renderTarget);ve.bindFramebuffer(D.READ_FRAMEBUFFER,yn.__webglFramebuffer),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,Fu.__webglFramebuffer);for(let Hr=0;Hr<Ae;Hr++)vt&&(D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(w).__webglTexture,B,Ue+Hr),D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,y.get(F).__webglTexture,pe,Ct+Hr)),D.blitFramebuffer(De,ke,ye,_e,je,ht,ye,_e,D.DEPTH_BUFFER_BIT,D.NEAREST);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else if(B!==0||w.isRenderTargetTexture||y.has(w)){const Hn=y.get(w),cn=y.get(F);ve.bindFramebuffer(D.READ_FRAMEBUFFER,NE),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,UE);for(let yn=0;yn<Ae;yn++)vt?D.framebufferTextureLayer(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,Hn.__webglTexture,B,Ue+yn):D.framebufferTexture2D(D.READ_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,Hn.__webglTexture,B),xn?D.framebufferTextureLayer(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,cn.__webglTexture,pe,Ct+yn):D.framebufferTexture2D(D.DRAW_FRAMEBUFFER,D.COLOR_ATTACHMENT0,D.TEXTURE_2D,cn.__webglTexture,pe),B!==0?D.blitFramebuffer(De,ke,ye,_e,je,ht,ye,_e,D.COLOR_BUFFER_BIT,D.NEAREST):xn?D.copyTexSubImage3D(ot,pe,je,ht,Ct+yn,De,ke,ye,_e):D.copyTexSubImage2D(ot,pe,je,ht,De,ke,ye,_e);ve.bindFramebuffer(D.READ_FRAMEBUFFER,null),ve.bindFramebuffer(D.DRAW_FRAMEBUFFER,null)}else xn?w.isDataTexture||w.isData3DTexture?D.texSubImage3D(ot,pe,je,ht,Ct,ye,_e,Ae,mt,Fe,Rt.data):F.isCompressedArrayTexture?D.compressedTexSubImage3D(ot,pe,je,ht,Ct,ye,_e,Ae,mt,Rt.data):D.texSubImage3D(ot,pe,je,ht,Ct,ye,_e,Ae,mt,Fe,Rt):w.isDataTexture?D.texSubImage2D(D.TEXTURE_2D,pe,je,ht,ye,_e,mt,Fe,Rt.data):w.isCompressedTexture?D.compressedTexSubImage2D(D.TEXTURE_2D,pe,je,ht,Rt.width,Rt.height,mt,Rt.data):D.texSubImage2D(D.TEXTURE_2D,pe,je,ht,ye,_e,mt,Fe,Rt);D.pixelStorei(D.UNPACK_ROW_LENGTH,nt),D.pixelStorei(D.UNPACK_IMAGE_HEIGHT,Ln),D.pixelStorei(D.UNPACK_SKIP_PIXELS,Ss),D.pixelStorei(D.UNPACK_SKIP_ROWS,In),D.pixelStorei(D.UNPACK_SKIP_IMAGES,Uo),pe===0&&F.generateMipmaps&&D.generateMipmap(ot),ve.unbindTexture()},this.initRenderTarget=function(w){y.get(w).__webglFramebuffer===void 0&&U.setupRenderTarget(w)},this.initTexture=function(w){w.isCubeTexture?U.setTextureCube(w,0):w.isData3DTexture?U.setTexture3D(w,0):w.isDataArrayTexture||w.isCompressedArrayTexture?U.setTexture2DArray(w,0):U.setTexture2D(w,0),ve.unbindTexture()},this.resetState=function(){L=0,H=0,N=null,ve.reset(),xe.reset()},typeof __THREE_DEVTOOLS__<"u"&&__THREE_DEVTOOLS__.dispatchEvent(new CustomEvent("observe",{detail:this}))}get coordinateSystem(){return Ci}get outputColorSpace(){return this._outputColorSpace}set outputColorSpace(e){this._outputColorSpace=e;const n=this.getContext();n.drawingBufferColorSpace=Qe._getDrawingBufferColorSpace(e),n.unpackColorSpace=Qe._getUnpackColorSpace()}}const T2="/cv-juann/assets/Juan-D5V3jOtU.jpg",at={name:"Juan Torales",title:"Desarrollador Multiplataforma",photo:T2,location:"México",contact:[{label:"Email",value:"juanitotj001@gmail.com",href:"mailto:juanitotj001@gmail.com"},{label:"Teléfono",value:"5624190385",href:"tel:5624190385"},{label:"GitHub",value:"github.com/juant",href:"https://github.com"}],skillsAdvanced:[{name:"HTML5 - Estructuración",level:70},{name:"CSS3 - Estilos",level:70},{name:"Java - Backend",level:45},{name:"Spring Boot - Framework",level:45},{name:"Angular - Frontend",level:50},{name:"TypeScript - Tipado",level:50}],skillsIntermediate:[{name:"PHP - Backend",level:30},{name:"APIs - Integración",level:50},{name:"JavaScript - Dinamismo",level:40}],skillsBasic:[{name:"MongoDB - NoSQL",level:20},{name:"MySQL - Consultas",level:30},{name:"Arduino - IoT",level:30},{name:"ESP-32 - Embebidos",level:30}],languages:[{name:"Español",level:"Nativo"}],softSkills:["Comunicación efectiva","Análisis de requerimientos","Resolución de problemas","Trabajo en equipo","Adaptabilidad"],headline:"Creo soluciones digitales que fusionan creatividad y tecnología.",summary:"Soy un aspirante a programador junior en desarrollo web, comprometido con aprender y crear aplicaciones intuitivas y funcionales. Tengo conocimientos en desarrollo back-end y front-end, y busco contribuir en proyectos variados para ser versátil y eficaz en mi desarrollo laboral.",experience:[{role:"Full Stack Developer",period:"2025",bullets:["Desarrollo de plataforma analítica para visualización y gestión de información financiera.","Frontend con Angular + TypeScript: creación de dashboards interactivos, gráficos de evolución histórica y resúmenes visuales.","Backend con Java + Spring Boot: automatización de obtención de datos financieros, flujos mensuales y módulos de conciliación (exportaciones Excel/PDF)."]},{role:"Full Stack Developer",period:"2025",bullets:["Implementación y modificación de módulos completos de conciliación financiera.","Desarrollo de componentes ejecutables mensuales (Java + Spring Boot) para extracción y procesamiento automático de datos.","Aplicación de reglas de negocio para validaciones y generación de reportes estandarizados.","Frontend (Angular + TypeScript) para interfaces de carga masiva, selección por periodo y descarga de resultados."]},{role:"Full Stack Developer",period:"2025",bullets:["Desarrollo de portal de becas y apoyos educativos.","Construcción de interfaces para solicitudes, seguimiento de estatus y visualización de apoyos (Angular + TypeScript).","Gestión integral de procesos backend, validaciones de requisitos normativos y flujos seguros de aprobación (Java + Spring Boot)."]}],projects:[{title:"Sistema Domótico de Riego Automatizado (IoT)",desc:"Aporté en el desarrollo de una aplicación web para IoT enfocada en la automatización de riego y monitoreo ambiental.",tags:["HTML","CSS","PHP","JS","XAMPP","Arduino","ESP-32","MySQL"],href:"#"},{title:"App Zoológico Parque del Pueblo",desc:"Aporté en la creación de una aplicación web para la gestión incremental de un zoológico, optimizando procesos operativos y mejorando la usabilidad.",tags:["HTML","CSS","PHP","JS","XAMPP","MySQL"],href:"#"},{title:"Gestión de Huerto Móvil",desc:"Desarrollo de una aplicación web para la organización de un huerto móvil personal.",tags:["HTML","CSS","PHP","JS","XAMPP","MySQL","OpenIA","APIs"],href:"#"},{title:"Gestión de Zonas Arqueológicas",desc:"Colaboré en el desarrollo de una aplicación web innovadora para la gestión de zonas arqueológicas, implementando 3 APIs para enriquecer la funcionalidad.",tags:["HTML","CSS","PHP","JS","XAMPP","APIs","MySQL"],href:"#"}],education:"Técnico Superior Universitario en Desarrollo de Software Multiplataforma (2023-2025). Ingeniería en Desarrollo y Gestión de Software — Universidad Tecnológica de Nezahualcóyotl (En curso, 2026-Actualidad)."},BS=ue.createContext({});function Cu(t){const e=ue.useRef(null);return e.current===null&&(e.current=t()),e.current}const VS=typeof window<"u",wm=VS?ue.useLayoutEffect:ue.useEffect,Am=ue.createContext(null);function bm(t,e){t.indexOf(e)===-1&&t.push(e)}function Jc(t,e){const n=t.indexOf(e);n>-1&&t.splice(n,1)}const vi=(t,e,n)=>n>e?e:n<t?t:n;let Va=()=>{};const sr={},zS=t=>/^-?(?:\d+(?:\.\d+)?|\.\d+)$/u.test(t);function HS(t){return typeof t=="object"&&t!==null}const GS=t=>/^0[^.\s]+$/u.test(t);function Cm(t){let e;return()=>(e===void 0&&(e=t()),e)}const Dn=t=>t,w2=(t,e)=>n=>e(t(n)),tl=(...t)=>t.reduce(w2),wo=(t,e,n)=>{const i=e-t;return i===0?1:(n-t)/i};class Rm{constructor(){this.subscriptions=[]}add(e){return bm(this.subscriptions,e),()=>Jc(this.subscriptions,e)}notify(e,n,i){const r=this.subscriptions.length;if(r)if(r===1)this.subscriptions[0](e,n,i);else for(let s=0;s<r;s++){const o=this.subscriptions[s];o&&o(e,n,i)}}getSize(){return this.subscriptions.length}clear(){this.subscriptions.length=0}}const mi=t=>t*1e3,Kn=t=>t/1e3;function Pm(t,e){return e?t*(1e3/e):0}const WS=(t,e,n)=>(((1-3*n+3*e)*t+(3*n-6*e))*t+3*e)*t,A2=1e-7,b2=12;function C2(t,e,n,i,r){let s,o,a=0;do o=e+(n-e)/2,s=WS(o,i,r)-t,s>0?n=o:e=o;while(Math.abs(s)>A2&&++a<b2);return o}function nl(t,e,n,i){if(t===e&&n===i)return Dn;const r=s=>C2(s,0,1,t,n);return s=>s===0||s===1?s:WS(r(s),e,i)}const jS=t=>e=>e<=.5?t(2*e)/2:(2-t(2*(1-e)))/2,XS=t=>e=>1-t(1-e),YS=nl(.33,1.53,.69,.99),Dm=XS(YS),$S=jS(Dm),qS=t=>(t*=2)<1?.5*Dm(t):.5*(2-Math.pow(2,-10*(t-1))),Lm=t=>1-Math.sin(Math.acos(t)),KS=XS(Lm),ZS=jS(Lm),R2=nl(.42,0,1,1),P2=nl(0,0,.58,1),QS=nl(.42,0,.58,1),D2=t=>Array.isArray(t)&&typeof t[0]!="number",JS=t=>Array.isArray(t)&&typeof t[0]=="number",L2={linear:Dn,easeIn:R2,easeInOut:QS,easeOut:P2,circIn:Lm,circInOut:ZS,circOut:KS,backIn:Dm,backInOut:$S,backOut:YS,anticipate:qS},I2=t=>typeof t=="string",pv=t=>{if(JS(t)){Va(t.length===4);const[e,n,i,r]=t;return nl(e,n,i,r)}else if(I2(t))return L2[t];return t},$l=["setup","read","resolveKeyframes","preUpdate","update","preRender","render","postRender"];function N2(t,e){let n=new Set,i=new Set,r=!1,s=!1;const o=new WeakSet;let a={delta:0,timestamp:0,isProcessing:!1};function l(f){o.has(f)&&(c.schedule(f),t()),f(a)}const c={schedule:(f,u=!1,h=!1)=>{const g=h&&r?n:i;return u&&o.add(f),g.has(f)||g.add(f),f},cancel:f=>{i.delete(f),o.delete(f)},process:f=>{if(a=f,r){s=!0;return}r=!0,[n,i]=[i,n],n.forEach(l),n.clear(),r=!1,s&&(s=!1,c.process(f))}};return c}const U2=40;function eM(t,e){let n=!1,i=!0;const r={delta:0,timestamp:0,isProcessing:!1},s=()=>n=!0,o=$l.reduce((_,S)=>(_[S]=N2(s),_),{}),{setup:a,read:l,resolveKeyframes:c,preUpdate:f,update:u,preRender:h,render:p,postRender:g}=o,x=()=>{const _=sr.useManualTiming?r.timestamp:performance.now();n=!1,sr.useManualTiming||(r.delta=i?1e3/60:Math.max(Math.min(_-r.timestamp,U2),1)),r.timestamp=_,r.isProcessing=!0,a.process(r),l.process(r),c.process(r),f.process(r),u.process(r),h.process(r),p.process(r),g.process(r),r.isProcessing=!1,n&&e&&(i=!1,t(x))},m=()=>{n=!0,i=!0,r.isProcessing||t(x)};return{schedule:$l.reduce((_,S)=>{const E=o[S];return _[S]=(A,b=!1,R=!1)=>(n||m(),E.schedule(A,b,R)),_},{}),cancel:_=>{for(let S=0;S<$l.length;S++)o[$l[S]].cancel(_)},state:r,steps:o}}const{schedule:et,cancel:ei,state:Wt,steps:zf}=eM(typeof requestAnimationFrame<"u"?requestAnimationFrame:Dn,!0);let yc;function F2(){yc=void 0}const dn={now:()=>(yc===void 0&&dn.set(Wt.isProcessing||sr.useManualTiming?Wt.timestamp:performance.now()),yc),set:t=>{yc=t,queueMicrotask(F2)}},tM=t=>e=>typeof e=="string"&&e.startsWith(t),nM=tM("--"),O2=tM("var(--"),Im=t=>O2(t)?k2.test(t.split("/*")[0].trim()):!1,k2=/var\(--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)$/iu;function mv(t){return typeof t!="string"?!1:t.split("/*")[0].includes("var(--")}const Do={test:t=>typeof t=="number",parse:parseFloat,transform:t=>t},za={...Do,transform:t=>vi(0,1,t)},ql={...Do,default:1},pa=t=>Math.round(t*1e5)/1e5,Nm=/-?(?:\d+(?:\.\d+)?|\.\d+)/gu;function B2(t){return t==null}const V2=/^(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))$/iu,Um=(t,e)=>n=>!!(typeof n=="string"&&V2.test(n)&&n.startsWith(t)||e&&!B2(n)&&Object.prototype.hasOwnProperty.call(n,e)),iM=(t,e,n)=>i=>{if(typeof i!="string")return i;const[r,s,o,a]=i.match(Nm);return{[t]:parseFloat(r),[e]:parseFloat(s),[n]:parseFloat(o),alpha:a!==void 0?parseFloat(a):1}},z2=t=>vi(0,255,t),Hf={...Do,transform:t=>Math.round(z2(t))},as={test:Um("rgb","red"),parse:iM("red","green","blue"),transform:({red:t,green:e,blue:n,alpha:i=1})=>"rgba("+Hf.transform(t)+", "+Hf.transform(e)+", "+Hf.transform(n)+", "+pa(za.transform(i))+")"};function H2(t){let e="",n="",i="",r="";return t.length>5?(e=t.substring(1,3),n=t.substring(3,5),i=t.substring(5,7),r=t.substring(7,9)):(e=t.substring(1,2),n=t.substring(2,3),i=t.substring(3,4),r=t.substring(4,5),e+=e,n+=n,i+=i,r+=r),{red:parseInt(e,16),green:parseInt(n,16),blue:parseInt(i,16),alpha:r?parseInt(r,16)/255:1}}const qh={test:Um("#"),parse:H2,transform:as.transform},il=t=>({test:e=>typeof e=="string"&&e.endsWith(t)&&e.split(" ").length===1,parse:parseFloat,transform:e=>`${e}${t}`}),pr=il("deg"),Ii=il("%"),Te=il("px"),G2=il("vh"),W2=il("vw"),gv={...Ii,parse:t=>Ii.parse(t)/100,transform:t=>Ii.transform(t*100)},Qs={test:Um("hsl","hue"),parse:iM("hue","saturation","lightness"),transform:({hue:t,saturation:e,lightness:n,alpha:i=1})=>"hsla("+Math.round(t)+", "+Ii.transform(pa(e))+", "+Ii.transform(pa(n))+", "+pa(za.transform(i))+")"},Ft={test:t=>as.test(t)||qh.test(t)||Qs.test(t),parse:t=>as.test(t)?as.parse(t):Qs.test(t)?Qs.parse(t):qh.parse(t),transform:t=>typeof t=="string"?t:t.hasOwnProperty("red")?as.transform(t):Qs.transform(t),getAnimatableNone:t=>{const e=Ft.parse(t);return e.alpha=0,Ft.transform(e)}},j2=/(?:#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\))/giu;function X2(t){var e,n;return isNaN(t)&&typeof t=="string"&&(((e=t.match(Nm))==null?void 0:e.length)||0)+(((n=t.match(j2))==null?void 0:n.length)||0)>0}const rM="number",sM="color",Y2="var",$2="var(",vv="${}",q2=/var\s*\(\s*--(?:[\w-]+\s*|[\w-]+\s*,(?:\s*[^)(\s]|\s*\((?:[^)(]|\([^)(]*\))*\))+\s*)\)|#[\da-f]{3,8}|(?:rgb|hsl)a?\((?:-?[\d.]+%?[,\s]+){2}-?[\d.]+%?\s*(?:[,/]\s*)?(?:\b\d+(?:\.\d+)?|\.\d+)?%?\)|-?(?:\d+(?:\.\d+)?|\.\d+)/giu;function Ha(t){const e=t.toString(),n=[],i={color:[],number:[],var:[]},r=[];let s=0;const a=e.replace(q2,l=>(Ft.test(l)?(i.color.push(s),r.push(sM),n.push(Ft.parse(l))):l.startsWith($2)?(i.var.push(s),r.push(Y2),n.push(l)):(i.number.push(s),r.push(rM),n.push(parseFloat(l))),++s,vv)).split(vv);return{values:n,split:a,indexes:i,types:r}}function oM(t){return Ha(t).values}function aM(t){const{split:e,types:n}=Ha(t),i=e.length;return r=>{let s="";for(let o=0;o<i;o++)if(s+=e[o],r[o]!==void 0){const a=n[o];a===rM?s+=pa(r[o]):a===sM?s+=Ft.transform(r[o]):s+=r[o]}return s}}const K2=t=>typeof t=="number"?0:Ft.test(t)?Ft.getAnimatableNone(t):t;function Z2(t){const e=oM(t);return aM(t)(e.map(K2))}const Fr={test:X2,parse:oM,createTransformer:aM,getAnimatableNone:Z2};function Gf(t,e,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?t+(e-t)*6*n:n<1/2?e:n<2/3?t+(e-t)*(2/3-n)*6:t}function Q2({hue:t,saturation:e,lightness:n,alpha:i}){t/=360,e/=100,n/=100;let r=0,s=0,o=0;if(!e)r=s=o=n;else{const a=n<.5?n*(1+e):n+e-n*e,l=2*n-a;r=Gf(l,a,t+1/3),s=Gf(l,a,t),o=Gf(l,a,t-1/3)}return{red:Math.round(r*255),green:Math.round(s*255),blue:Math.round(o*255),alpha:i}}function eu(t,e){return n=>n>0?e:t}const Tt=(t,e,n)=>t+(e-t)*n,Wf=(t,e,n)=>{const i=t*t,r=n*(e*e-i)+i;return r<0?0:Math.sqrt(r)},J2=[qh,as,Qs],e3=t=>J2.find(e=>e.test(t));function _v(t){const e=e3(t);if(!e)return!1;let n=e.parse(t);return e===Qs&&(n=Q2(n)),n}const xv=(t,e)=>{const n=_v(t),i=_v(e);if(!n||!i)return eu(t,e);const r={...n};return s=>(r.red=Wf(n.red,i.red,s),r.green=Wf(n.green,i.green,s),r.blue=Wf(n.blue,i.blue,s),r.alpha=Tt(n.alpha,i.alpha,s),as.transform(r))},Kh=new Set(["none","hidden"]);function t3(t,e){return Kh.has(t)?n=>n<=0?t:e:n=>n>=1?e:t}function n3(t,e){return n=>Tt(t,e,n)}function Fm(t){return typeof t=="number"?n3:typeof t=="string"?Im(t)?eu:Ft.test(t)?xv:s3:Array.isArray(t)?lM:typeof t=="object"?Ft.test(t)?xv:i3:eu}function lM(t,e){const n=[...t],i=n.length,r=t.map((s,o)=>Fm(s)(s,e[o]));return s=>{for(let o=0;o<i;o++)n[o]=r[o](s);return n}}function i3(t,e){const n={...t,...e},i={};for(const r in n)t[r]!==void 0&&e[r]!==void 0&&(i[r]=Fm(t[r])(t[r],e[r]));return r=>{for(const s in i)n[s]=i[s](r);return n}}function r3(t,e){const n=[],i={color:0,var:0,number:0};for(let r=0;r<e.values.length;r++){const s=e.types[r],o=t.indexes[s][i[s]],a=t.values[o]??0;n[r]=a,i[s]++}return n}const s3=(t,e)=>{const n=Fr.createTransformer(e),i=Ha(t),r=Ha(e);return i.indexes.var.length===r.indexes.var.length&&i.indexes.color.length===r.indexes.color.length&&i.indexes.number.length>=r.indexes.number.length?Kh.has(t)&&!r.values.length||Kh.has(e)&&!i.values.length?t3(t,e):tl(lM(r3(i,r),r.values),n):eu(t,e)};function cM(t,e,n){return typeof t=="number"&&typeof e=="number"&&typeof n=="number"?Tt(t,e,n):Fm(t)(t,e)}const o3=t=>{const e=({timestamp:n})=>t(n);return{start:(n=!0)=>et.update(e,n),stop:()=>ei(e),now:()=>Wt.isProcessing?Wt.timestamp:dn.now()}},uM=(t,e,n=10)=>{let i="";const r=Math.max(Math.round(e/n),2);for(let s=0;s<r;s++)i+=Math.round(t(s/(r-1))*1e4)/1e4+", ";return`linear(${i.substring(0,i.length-2)})`},tu=2e4;function Om(t){let e=0;const n=50;let i=t.next(e);for(;!i.done&&e<tu;)e+=n,i=t.next(e);return e>=tu?1/0:e}function a3(t,e=100,n){const i=n({...t,keyframes:[0,e]}),r=Math.min(Om(i),tu);return{type:"keyframes",ease:s=>i.next(r*s).value/e,duration:Kn(r)}}const l3=5;function fM(t,e,n){const i=Math.max(e-l3,0);return Pm(n-t(i),e-i)}const Pt={stiffness:100,damping:10,mass:1,velocity:0,duration:800,bounce:.3,visualDuration:.3,restSpeed:{granular:.01,default:2},restDelta:{granular:.005,default:.5},minDuration:.01,maxDuration:10,minDamping:.05,maxDamping:1},jf=.001;function c3({duration:t=Pt.duration,bounce:e=Pt.bounce,velocity:n=Pt.velocity,mass:i=Pt.mass}){let r,s,o=1-e;o=vi(Pt.minDamping,Pt.maxDamping,o),t=vi(Pt.minDuration,Pt.maxDuration,Kn(t)),o<1?(r=c=>{const f=c*o,u=f*t,h=f-n,p=Zh(c,o),g=Math.exp(-u);return jf-h/p*g},s=c=>{const u=c*o*t,h=u*n+n,p=Math.pow(o,2)*Math.pow(c,2)*t,g=Math.exp(-u),x=Zh(Math.pow(c,2),o);return(-r(c)+jf>0?-1:1)*((h-p)*g)/x}):(r=c=>{const f=Math.exp(-c*t),u=(c-n)*t+1;return-jf+f*u},s=c=>{const f=Math.exp(-c*t),u=(n-c)*(t*t);return f*u});const a=5/t,l=f3(r,s,a);if(t=mi(t),isNaN(l))return{stiffness:Pt.stiffness,damping:Pt.damping,duration:t};{const c=Math.pow(l,2)*i;return{stiffness:c,damping:o*2*Math.sqrt(i*c),duration:t}}}const u3=12;function f3(t,e,n){let i=n;for(let r=1;r<u3;r++)i=i-t(i)/e(i);return i}function Zh(t,e){return t*Math.sqrt(1-e*e)}const d3=["duration","bounce"],h3=["stiffness","damping","mass"];function yv(t,e){return e.some(n=>t[n]!==void 0)}function p3(t){let e={velocity:Pt.velocity,stiffness:Pt.stiffness,damping:Pt.damping,mass:Pt.mass,isResolvedFromDuration:!1,...t};if(!yv(t,h3)&&yv(t,d3))if(t.visualDuration){const n=t.visualDuration,i=2*Math.PI/(n*1.2),r=i*i,s=2*vi(.05,1,1-(t.bounce||0))*Math.sqrt(r);e={...e,mass:Pt.mass,stiffness:r,damping:s}}else{const n=c3(t);e={...e,...n,mass:Pt.mass},e.isResolvedFromDuration=!0}return e}function nu(t=Pt.visualDuration,e=Pt.bounce){const n=typeof t!="object"?{visualDuration:t,keyframes:[0,1],bounce:e}:t;let{restSpeed:i,restDelta:r}=n;const s=n.keyframes[0],o=n.keyframes[n.keyframes.length-1],a={done:!1,value:s},{stiffness:l,damping:c,mass:f,duration:u,velocity:h,isResolvedFromDuration:p}=p3({...n,velocity:-Kn(n.velocity||0)}),g=h||0,x=c/(2*Math.sqrt(l*f)),m=o-s,d=Kn(Math.sqrt(l/f)),v=Math.abs(m)<5;i||(i=v?Pt.restSpeed.granular:Pt.restSpeed.default),r||(r=v?Pt.restDelta.granular:Pt.restDelta.default);let _;if(x<1){const E=Zh(d,x);_=A=>{const b=Math.exp(-x*d*A);return o-b*((g+x*d*m)/E*Math.sin(E*A)+m*Math.cos(E*A))}}else if(x===1)_=E=>o-Math.exp(-d*E)*(m+(g+d*m)*E);else{const E=d*Math.sqrt(x*x-1);_=A=>{const b=Math.exp(-x*d*A),R=Math.min(E*A,300);return o-b*((g+x*d*m)*Math.sinh(R)+E*m*Math.cosh(R))/E}}const S={calculatedDuration:p&&u||null,next:E=>{const A=_(E);if(p)a.done=E>=u;else{let b=E===0?g:0;x<1&&(b=E===0?mi(g):fM(_,E,A));const R=Math.abs(b)<=i,M=Math.abs(o-A)<=r;a.done=R&&M}return a.value=a.done?o:A,a},toString:()=>{const E=Math.min(Om(S),tu),A=uM(b=>S.next(E*b).value,E,30);return E+"ms "+A},toTransition:()=>{}};return S}nu.applyToOptions=t=>{const e=a3(t,100,nu);return t.ease=e.ease,t.duration=mi(e.duration),t.type="keyframes",t};function Qh({keyframes:t,velocity:e=0,power:n=.8,timeConstant:i=325,bounceDamping:r=10,bounceStiffness:s=500,modifyTarget:o,min:a,max:l,restDelta:c=.5,restSpeed:f}){const u=t[0],h={done:!1,value:u},p=R=>a!==void 0&&R<a||l!==void 0&&R>l,g=R=>a===void 0?l:l===void 0||Math.abs(a-R)<Math.abs(l-R)?a:l;let x=n*e;const m=u+x,d=o===void 0?m:o(m);d!==m&&(x=d-u);const v=R=>-x*Math.exp(-R/i),_=R=>d+v(R),S=R=>{const M=v(R),T=_(R);h.done=Math.abs(M)<=c,h.value=h.done?d:T};let E,A;const b=R=>{p(h.value)&&(E=R,A=nu({keyframes:[h.value,g(h.value)],velocity:fM(_,R,h.value),damping:r,stiffness:s,restDelta:c,restSpeed:f}))};return b(0),{calculatedDuration:null,next:R=>{let M=!1;return!A&&E===void 0&&(M=!0,S(R),b(R)),E!==void 0&&R>=E?A.next(R-E):(!M&&S(R),h)}}}function m3(t,e,n){const i=[],r=n||sr.mix||cM,s=t.length-1;for(let o=0;o<s;o++){let a=r(t[o],t[o+1]);if(e){const l=Array.isArray(e)?e[o]||Dn:e;a=tl(l,a)}i.push(a)}return i}function km(t,e,{clamp:n=!0,ease:i,mixer:r}={}){const s=t.length;if(Va(s===e.length),s===1)return()=>e[0];if(s===2&&e[0]===e[1])return()=>e[1];const o=t[0]===t[1];t[0]>t[s-1]&&(t=[...t].reverse(),e=[...e].reverse());const a=m3(e,i,r),l=a.length,c=f=>{if(o&&f<t[0])return e[0];let u=0;if(l>1)for(;u<t.length-2&&!(f<t[u+1]);u++);const h=wo(t[u],t[u+1],f);return a[u](h)};return n?f=>c(vi(t[0],t[s-1],f)):c}function g3(t,e){const n=t[t.length-1];for(let i=1;i<=e;i++){const r=wo(0,e,i);t.push(Tt(n,1,r))}}function dM(t){const e=[0];return g3(e,t.length-1),e}function v3(t,e){return t.map(n=>n*e)}function _3(t,e){return t.map(()=>e||QS).splice(0,t.length-1)}function ma({duration:t=300,keyframes:e,times:n,ease:i="easeInOut"}){const r=D2(i)?i.map(pv):pv(i),s={done:!1,value:e[0]},o=v3(n&&n.length===e.length?n:dM(e),t),a=km(o,e,{ease:Array.isArray(r)?r:_3(e,r)});return{calculatedDuration:t,next:l=>(s.value=a(l),s.done=l>=t,s)}}const x3=t=>t!==null;function Bm(t,{repeat:e,repeatType:n="loop"},i,r=1){const s=t.filter(x3),a=r<0||e&&n!=="loop"&&e%2===1?0:s.length-1;return!a||i===void 0?s[a]:i}const y3={decay:Qh,inertia:Qh,tween:ma,keyframes:ma,spring:nu};function hM(t){typeof t.type=="string"&&(t.type=y3[t.type])}class Vm{constructor(){this.updateFinished()}get finished(){return this._finished}updateFinished(){this._finished=new Promise(e=>{this.resolve=e})}notifyFinished(){this.resolve()}then(e,n){return this.finished.then(e,n)}}const S3=t=>t/100;class Ru extends Vm{constructor(e){super(),this.state="idle",this.startTime=null,this.isStopped=!1,this.currentTime=0,this.holdTime=null,this.playbackSpeed=1,this.stop=()=>{var i,r;const{motionValue:n}=this.options;n&&n.updatedAt!==dn.now()&&this.tick(dn.now()),this.isStopped=!0,this.state!=="idle"&&(this.teardown(),(r=(i=this.options).onStop)==null||r.call(i))},this.options=e,this.initAnimation(),this.play(),e.autoplay===!1&&this.pause()}initAnimation(){const{options:e}=this;hM(e);const{type:n=ma,repeat:i=0,repeatDelay:r=0,repeatType:s,velocity:o=0}=e;let{keyframes:a}=e;const l=n||ma;l!==ma&&typeof a[0]!="number"&&(this.mixKeyframes=tl(S3,cM(a[0],a[1])),a=[0,100]);const c=l({...e,keyframes:a});s==="mirror"&&(this.mirroredGenerator=l({...e,keyframes:[...a].reverse(),velocity:-o})),c.calculatedDuration===null&&(c.calculatedDuration=Om(c));const{calculatedDuration:f}=c;this.calculatedDuration=f,this.resolvedDuration=f+r,this.totalDuration=this.resolvedDuration*(i+1)-r,this.generator=c}updateTime(e){const n=Math.round(e-this.startTime)*this.playbackSpeed;this.holdTime!==null?this.currentTime=this.holdTime:this.currentTime=n}tick(e,n=!1){const{generator:i,totalDuration:r,mixKeyframes:s,mirroredGenerator:o,resolvedDuration:a,calculatedDuration:l}=this;if(this.startTime===null)return i.next(0);const{delay:c=0,keyframes:f,repeat:u,repeatType:h,repeatDelay:p,type:g,onUpdate:x,finalKeyframe:m}=this.options;this.speed>0?this.startTime=Math.min(this.startTime,e):this.speed<0&&(this.startTime=Math.min(e-r/this.speed,this.startTime)),n?this.currentTime=e:this.updateTime(e);const d=this.currentTime-c*(this.playbackSpeed>=0?1:-1),v=this.playbackSpeed>=0?d<0:d>r;this.currentTime=Math.max(d,0),this.state==="finished"&&this.holdTime===null&&(this.currentTime=r);let _=this.currentTime,S=i;if(u){const R=Math.min(this.currentTime,r)/a;let M=Math.floor(R),T=R%1;!T&&R>=1&&(T=1),T===1&&M--,M=Math.min(M,u+1),!!(M%2)&&(h==="reverse"?(T=1-T,p&&(T-=p/a)):h==="mirror"&&(S=o)),_=vi(0,1,T)*a}const E=v?{done:!1,value:f[0]}:S.next(_);s&&(E.value=s(E.value));let{done:A}=E;!v&&l!==null&&(A=this.playbackSpeed>=0?this.currentTime>=r:this.currentTime<=0);const b=this.holdTime===null&&(this.state==="finished"||this.state==="running"&&A);return b&&g!==Qh&&(E.value=Bm(f,this.options,m,this.speed)),x&&x(E.value),b&&this.finish(),E}then(e,n){return this.finished.then(e,n)}get duration(){return Kn(this.calculatedDuration)}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Kn(e)}get time(){return Kn(this.currentTime)}set time(e){var n;e=mi(e),this.currentTime=e,this.startTime===null||this.holdTime!==null||this.playbackSpeed===0?this.holdTime=e:this.driver&&(this.startTime=this.driver.now()-e/this.playbackSpeed),(n=this.driver)==null||n.start(!1)}get speed(){return this.playbackSpeed}set speed(e){this.updateTime(dn.now());const n=this.playbackSpeed!==e;this.playbackSpeed=e,n&&(this.time=Kn(this.currentTime))}play(){var r,s;if(this.isStopped)return;const{driver:e=o3,startTime:n}=this.options;this.driver||(this.driver=e(o=>this.tick(o))),(s=(r=this.options).onPlay)==null||s.call(r);const i=this.driver.now();this.state==="finished"?(this.updateFinished(),this.startTime=i):this.holdTime!==null?this.startTime=i-this.holdTime:this.startTime||(this.startTime=n??i),this.state==="finished"&&this.speed<0&&(this.startTime+=this.calculatedDuration),this.holdTime=null,this.state="running",this.driver.start()}pause(){this.state="paused",this.updateTime(dn.now()),this.holdTime=this.currentTime}complete(){this.state!=="running"&&this.play(),this.state="finished",this.holdTime=null}finish(){var e,n;this.notifyFinished(),this.teardown(),this.state="finished",(n=(e=this.options).onComplete)==null||n.call(e)}cancel(){var e,n;this.holdTime=null,this.startTime=0,this.tick(0),this.teardown(),(n=(e=this.options).onCancel)==null||n.call(e)}teardown(){this.state="idle",this.stopDriver(),this.startTime=this.holdTime=null}stopDriver(){this.driver&&(this.driver.stop(),this.driver=void 0)}sample(e){return this.startTime=0,this.tick(e,!0)}attachTimeline(e){var n;return this.options.allowFlatten&&(this.options.type="keyframes",this.options.ease="linear",this.initAnimation()),(n=this.driver)==null||n.stop(),e.observe(this)}}function M3(t){for(let e=1;e<t.length;e++)t[e]??(t[e]=t[e-1])}const ls=t=>t*180/Math.PI,Jh=t=>{const e=ls(Math.atan2(t[1],t[0]));return ep(e)},E3={x:4,y:5,translateX:4,translateY:5,scaleX:0,scaleY:3,scale:t=>(Math.abs(t[0])+Math.abs(t[3]))/2,rotate:Jh,rotateZ:Jh,skewX:t=>ls(Math.atan(t[1])),skewY:t=>ls(Math.atan(t[2])),skew:t=>(Math.abs(t[1])+Math.abs(t[2]))/2},ep=t=>(t=t%360,t<0&&(t+=360),t),Sv=Jh,Mv=t=>Math.sqrt(t[0]*t[0]+t[1]*t[1]),Ev=t=>Math.sqrt(t[4]*t[4]+t[5]*t[5]),T3={x:12,y:13,z:14,translateX:12,translateY:13,translateZ:14,scaleX:Mv,scaleY:Ev,scale:t=>(Mv(t)+Ev(t))/2,rotateX:t=>ep(ls(Math.atan2(t[6],t[5]))),rotateY:t=>ep(ls(Math.atan2(-t[2],t[0]))),rotateZ:Sv,rotate:Sv,skewX:t=>ls(Math.atan(t[4])),skewY:t=>ls(Math.atan(t[1])),skew:t=>(Math.abs(t[1])+Math.abs(t[4]))/2};function tp(t){return t.includes("scale")?1:0}function np(t,e){if(!t||t==="none")return tp(e);const n=t.match(/^matrix3d\(([-\d.e\s,]+)\)$/u);let i,r;if(n)i=T3,r=n;else{const a=t.match(/^matrix\(([-\d.e\s,]+)\)$/u);i=E3,r=a}if(!r)return tp(e);const s=i[e],o=r[1].split(",").map(A3);return typeof s=="function"?s(o):o[s]}const w3=(t,e)=>{const{transform:n="none"}=getComputedStyle(t);return np(n,e)};function A3(t){return parseFloat(t.trim())}const Lo=["transformPerspective","x","y","z","translateX","translateY","translateZ","scale","scaleX","scaleY","rotate","rotateX","rotateY","rotateZ","skew","skewX","skewY"],Io=new Set(Lo),Tv=t=>t===Do||t===Te,b3=new Set(["x","y","z"]),C3=Lo.filter(t=>!b3.has(t));function R3(t){const e=[];return C3.forEach(n=>{const i=t.getValue(n);i!==void 0&&(e.push([n,i.get()]),i.set(n.startsWith("scale")?1:0))}),e}const Tr={width:({x:t},{paddingLeft:e="0",paddingRight:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),height:({y:t},{paddingTop:e="0",paddingBottom:n="0"})=>t.max-t.min-parseFloat(e)-parseFloat(n),top:(t,{top:e})=>parseFloat(e),left:(t,{left:e})=>parseFloat(e),bottom:({y:t},{top:e})=>parseFloat(e)+(t.max-t.min),right:({x:t},{left:e})=>parseFloat(e)+(t.max-t.min),x:(t,{transform:e})=>np(e,"x"),y:(t,{transform:e})=>np(e,"y")};Tr.translateX=Tr.x;Tr.translateY=Tr.y;const fs=new Set;let ip=!1,rp=!1,sp=!1;function pM(){if(rp){const t=Array.from(fs).filter(i=>i.needsMeasurement),e=new Set(t.map(i=>i.element)),n=new Map;e.forEach(i=>{const r=R3(i);r.length&&(n.set(i,r),i.render())}),t.forEach(i=>i.measureInitialState()),e.forEach(i=>{i.render();const r=n.get(i);r&&r.forEach(([s,o])=>{var a;(a=i.getValue(s))==null||a.set(o)})}),t.forEach(i=>i.measureEndState()),t.forEach(i=>{i.suspendedScrollY!==void 0&&window.scrollTo(0,i.suspendedScrollY)})}rp=!1,ip=!1,fs.forEach(t=>t.complete(sp)),fs.clear()}function mM(){fs.forEach(t=>{t.readKeyframes(),t.needsMeasurement&&(rp=!0)})}function P3(){sp=!0,mM(),pM(),sp=!1}class zm{constructor(e,n,i,r,s,o=!1){this.state="pending",this.isAsync=!1,this.needsMeasurement=!1,this.unresolvedKeyframes=[...e],this.onComplete=n,this.name=i,this.motionValue=r,this.element=s,this.isAsync=o}scheduleResolve(){this.state="scheduled",this.isAsync?(fs.add(this),ip||(ip=!0,et.read(mM),et.resolveKeyframes(pM))):(this.readKeyframes(),this.complete())}readKeyframes(){const{unresolvedKeyframes:e,name:n,element:i,motionValue:r}=this;if(e[0]===null){const s=r==null?void 0:r.get(),o=e[e.length-1];if(s!==void 0)e[0]=s;else if(i&&n){const a=i.readValue(n,o);a!=null&&(e[0]=a)}e[0]===void 0&&(e[0]=o),r&&s===void 0&&r.set(e[0])}M3(e)}setFinalKeyframe(){}measureInitialState(){}renderEndStyles(){}measureEndState(){}complete(e=!1){this.state="complete",this.onComplete(this.unresolvedKeyframes,this.finalKeyframe,e),fs.delete(this)}cancel(){this.state==="scheduled"&&(fs.delete(this),this.state="pending")}resume(){this.state==="pending"&&this.scheduleResolve()}}const D3=t=>t.startsWith("--");function L3(t,e,n){D3(e)?t.style.setProperty(e,n):t.style[e]=n}const gM=Cm(()=>window.ScrollTimeline!==void 0),I3={};function N3(t,e){const n=Cm(t);return()=>I3[e]??n()}const vM=N3(()=>{try{document.createElement("div").animate({opacity:0},{easing:"linear(0, 1)"})}catch{return!1}return!0},"linearEasing"),ra=([t,e,n,i])=>`cubic-bezier(${t}, ${e}, ${n}, ${i})`,wv={linear:"linear",ease:"ease",easeIn:"ease-in",easeOut:"ease-out",easeInOut:"ease-in-out",circIn:ra([0,.65,.55,1]),circOut:ra([.55,0,1,.45]),backIn:ra([.31,.01,.66,-.59]),backOut:ra([.33,1.53,.69,.99])};function _M(t,e){if(t)return typeof t=="function"?vM()?uM(t,e):"ease-out":JS(t)?ra(t):Array.isArray(t)?t.map(n=>_M(n,e)||wv.easeOut):wv[t]}function U3(t,e,n,{delay:i=0,duration:r=300,repeat:s=0,repeatType:o="loop",ease:a="easeOut",times:l}={},c=void 0){const f={[e]:n};l&&(f.offset=l);const u=_M(a,r);Array.isArray(u)&&(f.easing=u);const h={delay:i,duration:r,easing:Array.isArray(u)?"linear":u,fill:"both",iterations:s+1,direction:o==="reverse"?"alternate":"normal"};return c&&(h.pseudoElement=c),t.animate(f,h)}function xM(t){return typeof t=="function"&&"applyToOptions"in t}function F3({type:t,...e}){return xM(t)&&vM()?t.applyToOptions(e):(e.duration??(e.duration=300),e.ease??(e.ease="easeOut"),e)}class yM extends Vm{constructor(e){if(super(),this.finishedTime=null,this.isStopped=!1,this.manualStartTime=null,!e)return;const{element:n,name:i,keyframes:r,pseudoElement:s,allowFlatten:o=!1,finalKeyframe:a,onComplete:l}=e;this.isPseudoElement=!!s,this.allowFlatten=o,this.options=e,Va(typeof e.type!="string");const c=F3(e);this.animation=U3(n,i,r,c,s),c.autoplay===!1&&this.animation.pause(),this.animation.onfinish=()=>{if(this.finishedTime=this.time,!s){const f=Bm(r,this.options,a,this.speed);this.updateMotionValue?this.updateMotionValue(f):L3(n,i,f),this.animation.cancel()}l==null||l(),this.notifyFinished()}}play(){this.isStopped||(this.manualStartTime=null,this.animation.play(),this.state==="finished"&&this.updateFinished())}pause(){this.animation.pause()}complete(){var e,n;(n=(e=this.animation).finish)==null||n.call(e)}cancel(){try{this.animation.cancel()}catch{}}stop(){if(this.isStopped)return;this.isStopped=!0;const{state:e}=this;e==="idle"||e==="finished"||(this.updateMotionValue?this.updateMotionValue():this.commitStyles(),this.isPseudoElement||this.cancel())}commitStyles(){var n,i,r;const e=(n=this.options)==null?void 0:n.element;!this.isPseudoElement&&(e!=null&&e.isConnected)&&((r=(i=this.animation).commitStyles)==null||r.call(i))}get duration(){var n,i;const e=((i=(n=this.animation.effect)==null?void 0:n.getComputedTiming)==null?void 0:i.call(n).duration)||0;return Kn(Number(e))}get iterationDuration(){const{delay:e=0}=this.options||{};return this.duration+Kn(e)}get time(){return Kn(Number(this.animation.currentTime)||0)}set time(e){this.manualStartTime=null,this.finishedTime=null,this.animation.currentTime=mi(e)}get speed(){return this.animation.playbackRate}set speed(e){e<0&&(this.finishedTime=null),this.animation.playbackRate=e}get state(){return this.finishedTime!==null?"finished":this.animation.playState}get startTime(){return this.manualStartTime??Number(this.animation.startTime)}set startTime(e){this.manualStartTime=this.animation.startTime=e}attachTimeline({timeline:e,observe:n}){var i;return this.allowFlatten&&((i=this.animation.effect)==null||i.updateTiming({easing:"linear"})),this.animation.onfinish=null,e&&gM()?(this.animation.timeline=e,Dn):n(this)}}const SM={anticipate:qS,backInOut:$S,circInOut:ZS};function O3(t){return t in SM}function k3(t){typeof t.ease=="string"&&O3(t.ease)&&(t.ease=SM[t.ease])}const Xf=10;class B3 extends yM{constructor(e){k3(e),hM(e),super(e),e.startTime!==void 0&&(this.startTime=e.startTime),this.options=e}updateMotionValue(e){const{motionValue:n,onUpdate:i,onComplete:r,element:s,...o}=this.options;if(!n)return;if(e!==void 0){n.set(e);return}const a=new Ru({...o,autoplay:!1}),l=Math.max(Xf,dn.now()-this.startTime),c=vi(0,Xf,l-Xf);n.setWithVelocity(a.sample(Math.max(0,l-c)).value,a.sample(l).value,c),a.stop()}}const Av=(t,e)=>e==="zIndex"?!1:!!(typeof t=="number"||Array.isArray(t)||typeof t=="string"&&(Fr.test(t)||t==="0")&&!t.startsWith("url("));function V3(t){const e=t[0];if(t.length===1)return!0;for(let n=0;n<t.length;n++)if(t[n]!==e)return!0}function z3(t,e,n,i){const r=t[0];if(r===null)return!1;if(e==="display"||e==="visibility")return!0;const s=t[t.length-1],o=Av(r,e),a=Av(s,e);return!o||!a?!1:V3(t)||(n==="spring"||xM(n))&&i}function op(t){t.duration=0,t.type="keyframes"}const H3=new Set(["opacity","clipPath","filter","transform"]),G3=Cm(()=>Object.hasOwnProperty.call(Element.prototype,"animate"));function W3(t){var f;const{motionValue:e,name:n,repeatDelay:i,repeatType:r,damping:s,type:o}=t;if(!(((f=e==null?void 0:e.owner)==null?void 0:f.current)instanceof HTMLElement))return!1;const{onUpdate:l,transformTemplate:c}=e.owner.getProps();return G3()&&n&&H3.has(n)&&(n!=="transform"||!c)&&!l&&!i&&r!=="mirror"&&s!==0&&o!=="inertia"}const j3=40;class X3 extends Vm{constructor({autoplay:e=!0,delay:n=0,type:i="keyframes",repeat:r=0,repeatDelay:s=0,repeatType:o="loop",keyframes:a,name:l,motionValue:c,element:f,...u}){var g;super(),this.stop=()=>{var x,m;this._animation&&(this._animation.stop(),(x=this.stopTimeline)==null||x.call(this)),(m=this.keyframeResolver)==null||m.cancel()},this.createdAt=dn.now();const h={autoplay:e,delay:n,type:i,repeat:r,repeatDelay:s,repeatType:o,name:l,motionValue:c,element:f,...u},p=(f==null?void 0:f.KeyframeResolver)||zm;this.keyframeResolver=new p(a,(x,m,d)=>this.onKeyframesResolved(x,m,h,!d),l,c,f),(g=this.keyframeResolver)==null||g.scheduleResolve()}onKeyframesResolved(e,n,i,r){var m,d;this.keyframeResolver=void 0;const{name:s,type:o,velocity:a,delay:l,isHandoff:c,onUpdate:f}=i;this.resolvedAt=dn.now(),z3(e,s,o,a)||((sr.instantAnimations||!l)&&(f==null||f(Bm(e,i,n))),e[0]=e[e.length-1],op(i),i.repeat=0);const h={startTime:r?this.resolvedAt?this.resolvedAt-this.createdAt>j3?this.resolvedAt:this.createdAt:this.createdAt:void 0,finalKeyframe:n,...i,keyframes:e},p=!c&&W3(h),g=(d=(m=h.motionValue)==null?void 0:m.owner)==null?void 0:d.current,x=p?new B3({...h,element:g}):new Ru(h);x.finished.then(()=>{this.notifyFinished()}).catch(Dn),this.pendingTimeline&&(this.stopTimeline=x.attachTimeline(this.pendingTimeline),this.pendingTimeline=void 0),this._animation=x}get finished(){return this._animation?this.animation.finished:this._finished}then(e,n){return this.finished.finally(e).then(()=>{})}get animation(){var e;return this._animation||((e=this.keyframeResolver)==null||e.resume(),P3()),this._animation}get duration(){return this.animation.duration}get iterationDuration(){return this.animation.iterationDuration}get time(){return this.animation.time}set time(e){this.animation.time=e}get speed(){return this.animation.speed}get state(){return this.animation.state}set speed(e){this.animation.speed=e}get startTime(){return this.animation.startTime}attachTimeline(e){return this._animation?this.stopTimeline=this.animation.attachTimeline(e):this.pendingTimeline=e,()=>this.stop()}play(){this.animation.play()}pause(){this.animation.pause()}complete(){this.animation.complete()}cancel(){var e;this._animation&&this.animation.cancel(),(e=this.keyframeResolver)==null||e.cancel()}}function MM(t,e,n,i=0,r=1){const s=Array.from(t).sort((c,f)=>c.sortNodePosition(f)).indexOf(e),o=t.size,a=(o-1)*i;return typeof n=="function"?n(s,o):r===1?s*i:a-s*i}const Y3=/^var\(--(?:([\w-]+)|([\w-]+), ?([a-zA-Z\d ()%#.,-]+))\)/u;function $3(t){const e=Y3.exec(t);if(!e)return[,];const[,n,i,r]=e;return[`--${n??i}`,r]}function EM(t,e,n=1){const[i,r]=$3(t);if(!i)return;const s=window.getComputedStyle(e).getPropertyValue(i);if(s){const o=s.trim();return zS(o)?parseFloat(o):o}return Im(r)?EM(r,e,n+1):r}const q3={type:"spring",stiffness:500,damping:25,restSpeed:10},K3=t=>({type:"spring",stiffness:550,damping:t===0?2*Math.sqrt(550):30,restSpeed:10}),Z3={type:"keyframes",duration:.8},Q3={type:"keyframes",ease:[.25,.1,.35,1],duration:.3},J3=(t,{keyframes:e})=>e.length>2?Z3:Io.has(t)?t.startsWith("scale")?K3(e[1]):q3:Q3,eD=t=>t!==null;function tD(t,{repeat:e,repeatType:n="loop"},i){const r=t.filter(eD),s=e&&n!=="loop"&&e%2===1?0:r.length-1;return r[s]}function TM(t,e){if(t!=null&&t.inherit&&e){const{inherit:n,...i}=t;return{...e,...i}}return t}function Hm(t,e){const n=(t==null?void 0:t[e])??(t==null?void 0:t.default)??t;return n!==t?TM(n,t):n}function nD({when:t,delay:e,delayChildren:n,staggerChildren:i,staggerDirection:r,repeat:s,repeatType:o,repeatDelay:a,from:l,elapsed:c,...f}){return!!Object.keys(f).length}const Gm=(t,e,n,i={},r,s)=>o=>{const a=Hm(i,t)||{},l=a.delay||i.delay||0;let{elapsed:c=0}=i;c=c-mi(l);const f={keyframes:Array.isArray(n)?n:[null,n],ease:"easeOut",velocity:e.getVelocity(),...a,delay:-c,onUpdate:h=>{e.set(h),a.onUpdate&&a.onUpdate(h)},onComplete:()=>{o(),a.onComplete&&a.onComplete()},name:t,motionValue:e,element:s?void 0:r};nD(a)||Object.assign(f,J3(t,f)),f.duration&&(f.duration=mi(f.duration)),f.repeatDelay&&(f.repeatDelay=mi(f.repeatDelay)),f.from!==void 0&&(f.keyframes[0]=f.from);let u=!1;if((f.type===!1||f.duration===0&&!f.repeatDelay)&&(op(f),f.delay===0&&(u=!0)),(sr.instantAnimations||sr.skipAnimations||r!=null&&r.shouldSkipAnimations)&&(u=!0,op(f),f.delay=0),f.allowFlatten=!a.type&&!a.ease,u&&!s&&e.get()!==void 0){const h=tD(f.keyframes,a);if(h!==void 0){et.update(()=>{f.onUpdate(h),f.onComplete()});return}}return a.isSync?new Ru(f):new X3(f)};function bv(t){const e=[{},{}];return t==null||t.values.forEach((n,i)=>{e[0][i]=n.get(),e[1][i]=n.getVelocity()}),e}function Wm(t,e,n,i){if(typeof e=="function"){const[r,s]=bv(i);e=e(n!==void 0?n:t.custom,r,s)}if(typeof e=="string"&&(e=t.variants&&t.variants[e]),typeof e=="function"){const[r,s]=bv(i);e=e(n!==void 0?n:t.custom,r,s)}return e}function fo(t,e,n){const i=t.getProps();return Wm(i,e,n!==void 0?n:i.custom,t)}const wM=new Set(["width","height","top","left","right","bottom",...Lo]),Cv=30,iD=t=>!isNaN(parseFloat(t)),ga={current:void 0};class rD{constructor(e,n={}){this.canTrackVelocity=null,this.events={},this.updateAndNotify=i=>{var s;const r=dn.now();if(this.updatedAt!==r&&this.setPrevFrameValue(),this.prev=this.current,this.setCurrent(i),this.current!==this.prev&&((s=this.events.change)==null||s.notify(this.current),this.dependents))for(const o of this.dependents)o.dirty()},this.hasAnimated=!1,this.setCurrent(e),this.owner=n.owner}setCurrent(e){this.current=e,this.updatedAt=dn.now(),this.canTrackVelocity===null&&e!==void 0&&(this.canTrackVelocity=iD(this.current))}setPrevFrameValue(e=this.current){this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt}onChange(e){return this.on("change",e)}on(e,n){this.events[e]||(this.events[e]=new Rm);const i=this.events[e].add(n);return e==="change"?()=>{i(),et.read(()=>{this.events.change.getSize()||this.stop()})}:i}clearListeners(){for(const e in this.events)this.events[e].clear()}attach(e,n){this.passiveEffect=e,this.stopPassiveEffect=n}set(e){this.passiveEffect?this.passiveEffect(e,this.updateAndNotify):this.updateAndNotify(e)}setWithVelocity(e,n,i){this.set(n),this.prev=void 0,this.prevFrameValue=e,this.prevUpdatedAt=this.updatedAt-i}jump(e,n=!0){this.updateAndNotify(e),this.prev=e,this.prevUpdatedAt=this.prevFrameValue=void 0,n&&this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}dirty(){var e;(e=this.events.change)==null||e.notify(this.current)}addDependent(e){this.dependents||(this.dependents=new Set),this.dependents.add(e)}removeDependent(e){this.dependents&&this.dependents.delete(e)}get(){return ga.current&&ga.current.push(this),this.current}getPrevious(){return this.prev}getVelocity(){const e=dn.now();if(!this.canTrackVelocity||this.prevFrameValue===void 0||e-this.updatedAt>Cv)return 0;const n=Math.min(this.updatedAt-this.prevUpdatedAt,Cv);return Pm(parseFloat(this.current)-parseFloat(this.prevFrameValue),n)}start(e){return this.stop(),new Promise(n=>{this.hasAnimated=!0,this.animation=e(n),this.events.animationStart&&this.events.animationStart.notify()}).then(()=>{this.events.animationComplete&&this.events.animationComplete.notify(),this.clearAnimation()})}stop(){this.animation&&(this.animation.stop(),this.events.animationCancel&&this.events.animationCancel.notify()),this.clearAnimation()}isAnimating(){return!!this.animation}clearAnimation(){delete this.animation}destroy(){var e,n;(e=this.dependents)==null||e.clear(),(n=this.events.destroy)==null||n.notify(),this.clearListeners(),this.stop(),this.stopPassiveEffect&&this.stopPassiveEffect()}}function di(t,e){return new rD(t,e)}const ap=t=>Array.isArray(t);function sD(t,e,n){t.hasValue(e)?t.getValue(e).set(n):t.addValue(e,di(n))}function oD(t){return ap(t)?t[t.length-1]||0:t}function aD(t,e){const n=fo(t,e);let{transitionEnd:i={},transition:r={},...s}=n||{};s={...s,...i};for(const o in s){const a=oD(s[o]);sD(t,o,a)}}const Xt=t=>!!(t&&t.getVelocity);function lD(t){return!!(Xt(t)&&t.add)}function lp(t,e){const n=t.getValue("willChange");if(lD(n))return n.add(e);if(!n&&sr.WillChange){const i=new sr.WillChange("auto");t.addValue("willChange",i),i.add(e)}}function jm(t){return t.replace(/([A-Z])/g,e=>`-${e.toLowerCase()}`)}const cD="framerAppearId",AM="data-"+jm(cD);function bM(t){return t.props[AM]}function uD({protectedKeys:t,needsAnimating:e},n){const i=t.hasOwnProperty(n)&&e[n]!==!0;return e[n]=!1,i}function CM(t,e,{delay:n=0,transitionOverride:i,type:r}={}){let{transition:s,transitionEnd:o,...a}=e;const l=t.getDefaultTransition();s=s?TM(s,l):l;const c=s==null?void 0:s.reduceMotion;i&&(s=i);const f=[],u=r&&t.animationState&&t.animationState.getState()[r];for(const h in a){const p=t.getValue(h,t.latestValues[h]??null),g=a[h];if(g===void 0||u&&uD(u,h))continue;const x={delay:n,...Hm(s||{},h)},m=p.get();if(m!==void 0&&!p.isAnimating&&!Array.isArray(g)&&g===m&&!x.velocity)continue;let d=!1;if(window.MotionHandoffAnimation){const S=bM(t);if(S){const E=window.MotionHandoffAnimation(S,h,et);E!==null&&(x.startTime=E,d=!0)}}lp(t,h);const v=c??t.shouldReduceMotion;p.start(Gm(h,p,g,v&&wM.has(h)?{type:!1}:x,t,d));const _=p.animation;_&&f.push(_)}if(o){const h=()=>et.update(()=>{o&&aD(t,o)});f.length?Promise.all(f).then(h):h()}return f}function cp(t,e,n={}){var l;const i=fo(t,e,n.type==="exit"?(l=t.presenceContext)==null?void 0:l.custom:void 0);let{transition:r=t.getDefaultTransition()||{}}=i||{};n.transitionOverride&&(r=n.transitionOverride);const s=i?()=>Promise.all(CM(t,i,n)):()=>Promise.resolve(),o=t.variantChildren&&t.variantChildren.size?(c=0)=>{const{delayChildren:f=0,staggerChildren:u,staggerDirection:h}=r;return fD(t,e,c,f,u,h,n)}:()=>Promise.resolve(),{when:a}=r;if(a){const[c,f]=a==="beforeChildren"?[s,o]:[o,s];return c().then(()=>f())}else return Promise.all([s(),o(n.delay)])}function fD(t,e,n=0,i=0,r=0,s=1,o){const a=[];for(const l of t.variantChildren)l.notify("AnimationStart",e),a.push(cp(l,e,{...o,delay:n+(typeof i=="function"?0:i)+MM(t.variantChildren,l,i,r,s)}).then(()=>l.notify("AnimationComplete",e)));return Promise.all(a)}function dD(t,e,n={}){t.notify("AnimationStart",e);let i;if(Array.isArray(e)){const r=e.map(s=>cp(t,s,n));i=Promise.all(r)}else if(typeof e=="string")i=cp(t,e,n);else{const r=typeof e=="function"?fo(t,e,n.custom):e;i=Promise.all(CM(t,r,n))}return i.then(()=>{t.notify("AnimationComplete",e)})}const hD={test:t=>t==="auto",parse:t=>t},RM=t=>e=>e.test(t),PM=[Do,Te,Ii,pr,W2,G2,hD],Rv=t=>PM.find(RM(t));function pD(t){return typeof t=="number"?t===0:t!==null?t==="none"||t==="0"||GS(t):!0}const mD=new Set(["brightness","contrast","saturate","opacity"]);function gD(t){const[e,n]=t.slice(0,-1).split("(");if(e==="drop-shadow")return t;const[i]=n.match(Nm)||[];if(!i)return t;const r=n.replace(i,"");let s=mD.has(e)?1:0;return i!==n&&(s*=100),e+"("+s+r+")"}const vD=/\b([a-z-]*)\(.*?\)/gu,up={...Fr,getAnimatableNone:t=>{const e=t.match(vD);return e?e.map(gD).join(" "):t}},Pv={...Do,transform:Math.round},_D={rotate:pr,rotateX:pr,rotateY:pr,rotateZ:pr,scale:ql,scaleX:ql,scaleY:ql,scaleZ:ql,skew:pr,skewX:pr,skewY:pr,distance:Te,translateX:Te,translateY:Te,translateZ:Te,x:Te,y:Te,z:Te,perspective:Te,transformPerspective:Te,opacity:za,originX:gv,originY:gv,originZ:Te},Xm={borderWidth:Te,borderTopWidth:Te,borderRightWidth:Te,borderBottomWidth:Te,borderLeftWidth:Te,borderRadius:Te,borderTopLeftRadius:Te,borderTopRightRadius:Te,borderBottomRightRadius:Te,borderBottomLeftRadius:Te,width:Te,maxWidth:Te,height:Te,maxHeight:Te,top:Te,right:Te,bottom:Te,left:Te,inset:Te,insetBlock:Te,insetBlockStart:Te,insetBlockEnd:Te,insetInline:Te,insetInlineStart:Te,insetInlineEnd:Te,padding:Te,paddingTop:Te,paddingRight:Te,paddingBottom:Te,paddingLeft:Te,paddingBlock:Te,paddingBlockStart:Te,paddingBlockEnd:Te,paddingInline:Te,paddingInlineStart:Te,paddingInlineEnd:Te,margin:Te,marginTop:Te,marginRight:Te,marginBottom:Te,marginLeft:Te,marginBlock:Te,marginBlockStart:Te,marginBlockEnd:Te,marginInline:Te,marginInlineStart:Te,marginInlineEnd:Te,fontSize:Te,backgroundPositionX:Te,backgroundPositionY:Te,..._D,zIndex:Pv,fillOpacity:za,strokeOpacity:za,numOctaves:Pv},xD={...Xm,color:Ft,backgroundColor:Ft,outlineColor:Ft,fill:Ft,stroke:Ft,borderColor:Ft,borderTopColor:Ft,borderRightColor:Ft,borderBottomColor:Ft,borderLeftColor:Ft,filter:up,WebkitFilter:up},DM=t=>xD[t];function LM(t,e){let n=DM(t);return n!==up&&(n=Fr),n.getAnimatableNone?n.getAnimatableNone(e):void 0}const yD=new Set(["auto","none","0"]);function SD(t,e,n){let i=0,r;for(;i<t.length&&!r;){const s=t[i];typeof s=="string"&&!yD.has(s)&&Ha(s).values.length&&(r=t[i]),i++}if(r&&n)for(const s of e)t[s]=LM(n,r)}class MD extends zm{constructor(e,n,i,r,s){super(e,n,i,r,s,!0)}readKeyframes(){const{unresolvedKeyframes:e,element:n,name:i}=this;if(!n||!n.current)return;super.readKeyframes();for(let f=0;f<e.length;f++){let u=e[f];if(typeof u=="string"&&(u=u.trim(),Im(u))){const h=EM(u,n.current);h!==void 0&&(e[f]=h),f===e.length-1&&(this.finalKeyframe=u)}}if(this.resolveNoneKeyframes(),!wM.has(i)||e.length!==2)return;const[r,s]=e,o=Rv(r),a=Rv(s),l=mv(r),c=mv(s);if(l!==c&&Tr[i]){this.needsMeasurement=!0;return}if(o!==a)if(Tv(o)&&Tv(a))for(let f=0;f<e.length;f++){const u=e[f];typeof u=="string"&&(e[f]=parseFloat(u))}else Tr[i]&&(this.needsMeasurement=!0)}resolveNoneKeyframes(){const{unresolvedKeyframes:e,name:n}=this,i=[];for(let r=0;r<e.length;r++)(e[r]===null||pD(e[r]))&&i.push(r);i.length&&SD(e,i,n)}measureInitialState(){const{element:e,unresolvedKeyframes:n,name:i}=this;if(!e||!e.current)return;i==="height"&&(this.suspendedScrollY=window.pageYOffset),this.measuredOrigin=Tr[i](e.measureViewportBox(),window.getComputedStyle(e.current)),n[0]=this.measuredOrigin;const r=n[n.length-1];r!==void 0&&e.getValue(i,r).jump(r,!1)}measureEndState(){var a;const{element:e,name:n,unresolvedKeyframes:i}=this;if(!e||!e.current)return;const r=e.getValue(n);r&&r.jump(this.measuredOrigin,!1);const s=i.length-1,o=i[s];i[s]=Tr[n](e.measureViewportBox(),window.getComputedStyle(e.current)),o!==null&&this.finalKeyframe===void 0&&(this.finalKeyframe=o),(a=this.removedTransforms)!=null&&a.length&&this.removedTransforms.forEach(([l,c])=>{e.getValue(l).set(c)}),this.resolveNoneKeyframes()}}const ED=new Set(["opacity","clipPath","filter","transform"]);function Ym(t,e,n){if(t==null)return[];if(t instanceof EventTarget)return[t];if(typeof t=="string"){const r=document.querySelectorAll(t);return r?Array.from(r):[]}return Array.from(t).filter(i=>i!=null)}const IM=(t,e)=>e&&typeof t=="number"?e.transform(t):t;function NM(t){return HS(t)&&"offsetHeight"in t}const{schedule:$m}=eM(queueMicrotask,!1),oi={x:!1,y:!1};function UM(){return oi.x||oi.y}function TD(t){return t==="x"||t==="y"?oi[t]?null:(oi[t]=!0,()=>{oi[t]=!1}):oi.x||oi.y?null:(oi.x=oi.y=!0,()=>{oi.x=oi.y=!1})}function FM(t,e){const n=Ym(t),i=new AbortController,r={passive:!0,...e,signal:i.signal};return[n,r,()=>i.abort()]}function wD(t){return!(t.pointerType==="touch"||UM())}function AD(t,e,n={}){const[i,r,s]=FM(t,n);return i.forEach(o=>{let a=!1,l=!1,c;const f=()=>{o.removeEventListener("pointerleave",g)},u=m=>{c&&(c(m),c=void 0),f()},h=m=>{a=!1,window.removeEventListener("pointerup",h),window.removeEventListener("pointercancel",h),l&&(l=!1,u(m))},p=()=>{a=!0,window.addEventListener("pointerup",h,r),window.addEventListener("pointercancel",h,r)},g=m=>{if(m.pointerType!=="touch"){if(a){l=!0;return}u(m)}},x=m=>{if(!wD(m))return;l=!1;const d=e(o,m);typeof d=="function"&&(c=d,o.addEventListener("pointerleave",g,r))};o.addEventListener("pointerenter",x,r),o.addEventListener("pointerdown",p,r)}),s}const OM=(t,e)=>e?t===e?!0:OM(t,e.parentElement):!1,qm=t=>t.pointerType==="mouse"?typeof t.button!="number"||t.button<=0:t.isPrimary!==!1,bD=new Set(["BUTTON","INPUT","SELECT","TEXTAREA","A"]);function CD(t){return bD.has(t.tagName)||t.isContentEditable===!0}const RD=new Set(["INPUT","SELECT","TEXTAREA"]);function PD(t){return RD.has(t.tagName)||t.isContentEditable===!0}const Sc=new WeakSet;function Dv(t){return e=>{e.key==="Enter"&&t(e)}}function Yf(t,e){t.dispatchEvent(new PointerEvent("pointer"+e,{isPrimary:!0,bubbles:!0}))}const DD=(t,e)=>{const n=t.currentTarget;if(!n)return;const i=Dv(()=>{if(Sc.has(n))return;Yf(n,"down");const r=Dv(()=>{Yf(n,"up")}),s=()=>Yf(n,"cancel");n.addEventListener("keyup",r,e),n.addEventListener("blur",s,e)});n.addEventListener("keydown",i,e),n.addEventListener("blur",()=>n.removeEventListener("keydown",i),e)};function Lv(t){return qm(t)&&!UM()}const Iv=new WeakSet;function LD(t,e,n={}){const[i,r,s]=FM(t,n),o=a=>{const l=a.currentTarget;if(!Lv(a)||Iv.has(a))return;Sc.add(l),n.stopPropagation&&Iv.add(a);const c=e(l,a),f=(p,g)=>{window.removeEventListener("pointerup",u),window.removeEventListener("pointercancel",h),Sc.has(l)&&Sc.delete(l),Lv(p)&&typeof c=="function"&&c(p,{success:g})},u=p=>{f(p,l===window||l===document||n.useGlobalTarget||OM(l,p.target))},h=p=>{f(p,!1)};window.addEventListener("pointerup",u,r),window.addEventListener("pointercancel",h,r)};return i.forEach(a=>{(n.useGlobalTarget?window:a).addEventListener("pointerdown",o,r),NM(a)&&(a.addEventListener("focus",c=>DD(c,r)),!CD(a)&&!a.hasAttribute("tabindex")&&(a.tabIndex=0))}),s}function Km(t){return HS(t)&&"ownerSVGElement"in t}const Mc=new WeakMap;let mr;const kM=(t,e,n)=>(i,r)=>r&&r[0]?r[0][t+"Size"]:Km(i)&&"getBBox"in i?i.getBBox()[e]:i[n],ID=kM("inline","width","offsetWidth"),ND=kM("block","height","offsetHeight");function UD({target:t,borderBoxSize:e}){var n;(n=Mc.get(t))==null||n.forEach(i=>{i(t,{get width(){return ID(t,e)},get height(){return ND(t,e)}})})}function FD(t){t.forEach(UD)}function OD(){typeof ResizeObserver>"u"||(mr=new ResizeObserver(FD))}function kD(t,e){mr||OD();const n=Ym(t);return n.forEach(i=>{let r=Mc.get(i);r||(r=new Set,Mc.set(i,r)),r.add(e),mr==null||mr.observe(i)}),()=>{n.forEach(i=>{const r=Mc.get(i);r==null||r.delete(e),r!=null&&r.size||mr==null||mr.unobserve(i)})}}const Ec=new Set;let Js;function BD(){Js=()=>{const t={get width(){return window.innerWidth},get height(){return window.innerHeight}};Ec.forEach(e=>e(t))},window.addEventListener("resize",Js)}function VD(t){return Ec.add(t),Js||BD(),()=>{Ec.delete(t),!Ec.size&&typeof Js=="function"&&(window.removeEventListener("resize",Js),Js=void 0)}}function fp(t,e){return typeof t=="function"?VD(t):kD(t,e)}function BM(t,e){let n;const i=()=>{const{currentTime:r}=e,o=(r===null?0:r.value)/100;n!==o&&t(o),n=o};return et.preUpdate(i,!0),()=>ei(i)}function zD(t){return Km(t)&&t.tagName==="svg"}function HD(...t){const e=!Array.isArray(t[0]),n=e?0:-1,i=t[0+n],r=t[1+n],s=t[2+n],o=t[3+n],a=km(r,s,o);return e?a(i):a}function GD(t,e,n={}){const i=t.get();let r=null,s=i,o;const a=typeof i=="string"?i.replace(/[\d.-]/g,""):void 0,l=()=>{r&&(r.stop(),r=null)},c=()=>{l();const f=Uv(t.get()),u=Uv(s);f!==u&&(r=new Ru({keyframes:[f,u],velocity:t.getVelocity(),type:"spring",restDelta:.001,restSpeed:.01,...n,onUpdate:o}))};if(t.attach((f,u)=>{s=f,o=h=>u(Nv(h,a)),et.postRender(()=>{var h;c(),(h=t.events.animationStart)==null||h.notify(),r==null||r.then(()=>{var p;(p=t.events.animationComplete)==null||p.notify()})})},l),Xt(e)){const f=e.on("change",h=>t.set(Nv(h,a))),u=t.on("destroy",f);return()=>{f(),u()}}return l}function Nv(t,e){return e?t+e:t}function Uv(t){return typeof t=="number"?t:parseFloat(t)}const WD=[...PM,Ft,Fr],jD=t=>WD.find(RM(t)),Fv=()=>({translate:0,scale:1,origin:0,originPoint:0}),eo=()=>({x:Fv(),y:Fv()}),Ov=()=>({min:0,max:0}),kt=()=>({x:Ov(),y:Ov()}),XD=new WeakMap;function Pu(t){return t!==null&&typeof t=="object"&&typeof t.start=="function"}function Ga(t){return typeof t=="string"||Array.isArray(t)}const Zm=["animate","whileInView","whileFocus","whileHover","whileTap","whileDrag","exit"],Qm=["initial",...Zm];function Du(t){return Pu(t.animate)||Qm.some(e=>Ga(t[e]))}function VM(t){return!!(Du(t)||t.variants)}function YD(t,e,n){for(const i in e){const r=e[i],s=n[i];if(Xt(r))t.addValue(i,r);else if(Xt(s))t.addValue(i,di(r,{owner:t}));else if(s!==r)if(t.hasValue(i)){const o=t.getValue(i);o.liveStyle===!0?o.jump(r):o.hasAnimated||o.set(r)}else{const o=t.getStaticValue(i);t.addValue(i,di(o!==void 0?o:r,{owner:t}))}}for(const i in n)e[i]===void 0&&t.removeValue(i);return e}const dp={current:null},zM={current:!1},$D=typeof window<"u";function qD(){if(zM.current=!0,!!$D)if(window.matchMedia){const t=window.matchMedia("(prefers-reduced-motion)"),e=()=>dp.current=t.matches;t.addEventListener("change",e),e()}else dp.current=!1}const kv=["AnimationStart","AnimationComplete","Update","BeforeLayoutMeasure","LayoutMeasure","LayoutAnimationStart","LayoutAnimationComplete"];let iu={};function HM(t){iu=t}function KD(){return iu}class ZD{scrapeMotionValuesFromProps(e,n,i){return{}}constructor({parent:e,props:n,presenceContext:i,reducedMotionConfig:r,skipAnimations:s,blockInitialAnimation:o,visualState:a},l={}){this.current=null,this.children=new Set,this.isVariantNode=!1,this.isControllingVariants=!1,this.shouldReduceMotion=null,this.shouldSkipAnimations=!1,this.values=new Map,this.KeyframeResolver=zm,this.features={},this.valueSubscriptions=new Map,this.prevMotionValues={},this.hasBeenMounted=!1,this.events={},this.propEventSubscriptions={},this.notifyUpdate=()=>this.notify("Update",this.latestValues),this.render=()=>{this.current&&(this.triggerBuild(),this.renderInstance(this.current,this.renderState,this.props.style,this.projection))},this.renderScheduledAt=0,this.scheduleRender=()=>{const p=dn.now();this.renderScheduledAt<p&&(this.renderScheduledAt=p,et.render(this.render,!1,!0))};const{latestValues:c,renderState:f}=a;this.latestValues=c,this.baseTarget={...c},this.initialValues=n.initial?{...c}:{},this.renderState=f,this.parent=e,this.props=n,this.presenceContext=i,this.depth=e?e.depth+1:0,this.reducedMotionConfig=r,this.skipAnimationsConfig=s,this.options=l,this.blockInitialAnimation=!!o,this.isControllingVariants=Du(n),this.isVariantNode=VM(n),this.isVariantNode&&(this.variantChildren=new Set),this.manuallyAnimateOnMount=!!(e&&e.current);const{willChange:u,...h}=this.scrapeMotionValuesFromProps(n,{},this);for(const p in h){const g=h[p];c[p]!==void 0&&Xt(g)&&g.set(c[p])}}mount(e){var n,i;if(this.hasBeenMounted)for(const r in this.initialValues)(n=this.values.get(r))==null||n.jump(this.initialValues[r]),this.latestValues[r]=this.initialValues[r];this.current=e,XD.set(e,this),this.projection&&!this.projection.instance&&this.projection.mount(e),this.parent&&this.isVariantNode&&!this.isControllingVariants&&(this.removeFromVariantTree=this.parent.addVariantChild(this)),this.values.forEach((r,s)=>this.bindToMotionValue(s,r)),this.reducedMotionConfig==="never"?this.shouldReduceMotion=!1:this.reducedMotionConfig==="always"?this.shouldReduceMotion=!0:(zM.current||qD(),this.shouldReduceMotion=dp.current),this.shouldSkipAnimations=this.skipAnimationsConfig??!1,(i=this.parent)==null||i.addChild(this),this.update(this.props,this.presenceContext),this.hasBeenMounted=!0}unmount(){var e;this.projection&&this.projection.unmount(),ei(this.notifyUpdate),ei(this.render),this.valueSubscriptions.forEach(n=>n()),this.valueSubscriptions.clear(),this.removeFromVariantTree&&this.removeFromVariantTree(),(e=this.parent)==null||e.removeChild(this);for(const n in this.events)this.events[n].clear();for(const n in this.features){const i=this.features[n];i&&(i.unmount(),i.isMounted=!1)}this.current=null}addChild(e){this.children.add(e),this.enteringChildren??(this.enteringChildren=new Set),this.enteringChildren.add(e)}removeChild(e){this.children.delete(e),this.enteringChildren&&this.enteringChildren.delete(e)}bindToMotionValue(e,n){if(this.valueSubscriptions.has(e)&&this.valueSubscriptions.get(e)(),n.accelerate&&ED.has(e)&&this.current instanceof HTMLElement){const{factory:o,keyframes:a,times:l,ease:c,duration:f}=n.accelerate,u=new yM({element:this.current,name:e,keyframes:a,times:l,ease:c,duration:mi(f)}),h=o(u);this.valueSubscriptions.set(e,()=>{h(),u.cancel()});return}const i=Io.has(e);i&&this.onBindTransform&&this.onBindTransform();const r=n.on("change",o=>{this.latestValues[e]=o,this.props.onUpdate&&et.preRender(this.notifyUpdate),i&&this.projection&&(this.projection.isTransformDirty=!0),this.scheduleRender()});let s;typeof window<"u"&&window.MotionCheckAppearSync&&(s=window.MotionCheckAppearSync(this,e,n)),this.valueSubscriptions.set(e,()=>{r(),s&&s(),n.owner&&n.stop()})}sortNodePosition(e){return!this.current||!this.sortInstanceNodePosition||this.type!==e.type?0:this.sortInstanceNodePosition(this.current,e.current)}updateFeatures(){let e="animation";for(e in iu){const n=iu[e];if(!n)continue;const{isEnabled:i,Feature:r}=n;if(!this.features[e]&&r&&i(this.props)&&(this.features[e]=new r(this)),this.features[e]){const s=this.features[e];s.isMounted?s.update():(s.mount(),s.isMounted=!0)}}}triggerBuild(){this.build(this.renderState,this.latestValues,this.props)}measureViewportBox(){return this.current?this.measureInstanceViewportBox(this.current,this.props):kt()}getStaticValue(e){return this.latestValues[e]}setStaticValue(e,n){this.latestValues[e]=n}update(e,n){(e.transformTemplate||this.props.transformTemplate)&&this.scheduleRender(),this.prevProps=this.props,this.props=e,this.prevPresenceContext=this.presenceContext,this.presenceContext=n;for(let i=0;i<kv.length;i++){const r=kv[i];this.propEventSubscriptions[r]&&(this.propEventSubscriptions[r](),delete this.propEventSubscriptions[r]);const s="on"+r,o=e[s];o&&(this.propEventSubscriptions[r]=this.on(r,o))}this.prevMotionValues=YD(this,this.scrapeMotionValuesFromProps(e,this.prevProps||{},this),this.prevMotionValues),this.handleChildMotionValue&&this.handleChildMotionValue()}getProps(){return this.props}getVariant(e){return this.props.variants?this.props.variants[e]:void 0}getDefaultTransition(){return this.props.transition}getTransformPagePoint(){return this.props.transformPagePoint}getClosestVariantNode(){return this.isVariantNode?this:this.parent?this.parent.getClosestVariantNode():void 0}addVariantChild(e){const n=this.getClosestVariantNode();if(n)return n.variantChildren&&n.variantChildren.add(e),()=>n.variantChildren.delete(e)}addValue(e,n){const i=this.values.get(e);n!==i&&(i&&this.removeValue(e),this.bindToMotionValue(e,n),this.values.set(e,n),this.latestValues[e]=n.get())}removeValue(e){this.values.delete(e);const n=this.valueSubscriptions.get(e);n&&(n(),this.valueSubscriptions.delete(e)),delete this.latestValues[e],this.removeValueFromRenderState(e,this.renderState)}hasValue(e){return this.values.has(e)}getValue(e,n){if(this.props.values&&this.props.values[e])return this.props.values[e];let i=this.values.get(e);return i===void 0&&n!==void 0&&(i=di(n===null?void 0:n,{owner:this}),this.addValue(e,i)),i}readValue(e,n){let i=this.latestValues[e]!==void 0||!this.current?this.latestValues[e]:this.getBaseTargetFromProps(this.props,e)??this.readValueFromInstance(this.current,e,this.options);return i!=null&&(typeof i=="string"&&(zS(i)||GS(i))?i=parseFloat(i):!jD(i)&&Fr.test(n)&&(i=LM(e,n)),this.setBaseTarget(e,Xt(i)?i.get():i)),Xt(i)?i.get():i}setBaseTarget(e,n){this.baseTarget[e]=n}getBaseTarget(e){var s;const{initial:n}=this.props;let i;if(typeof n=="string"||typeof n=="object"){const o=Wm(this.props,n,(s=this.presenceContext)==null?void 0:s.custom);o&&(i=o[e])}if(n&&i!==void 0)return i;const r=this.getBaseTargetFromProps(this.props,e);return r!==void 0&&!Xt(r)?r:this.initialValues[e]!==void 0&&i===void 0?void 0:this.baseTarget[e]}on(e,n){return this.events[e]||(this.events[e]=new Rm),this.events[e].add(n)}notify(e,...n){this.events[e]&&this.events[e].notify(...n)}scheduleRenderMicrotask(){$m.render(this.render)}}class GM extends ZD{constructor(){super(...arguments),this.KeyframeResolver=MD}sortInstanceNodePosition(e,n){return e.compareDocumentPosition(n)&2?1:-1}getBaseTargetFromProps(e,n){const i=e.style;return i?i[n]:void 0}removeValueFromRenderState(e,{vars:n,style:i}){delete n[e],delete i[e]}handleChildMotionValue(){this.childSubscription&&(this.childSubscription(),delete this.childSubscription);const{children:e}=this.props;Xt(e)&&(this.childSubscription=e.on("change",n=>{this.current&&(this.current.textContent=`${n}`)}))}}class Vr{constructor(e){this.isMounted=!1,this.node=e}update(){}}function WM({top:t,left:e,right:n,bottom:i}){return{x:{min:e,max:n},y:{min:t,max:i}}}function QD({x:t,y:e}){return{top:e.min,right:t.max,bottom:e.max,left:t.min}}function JD(t,e){if(!e)return t;const n=e({x:t.left,y:t.top}),i=e({x:t.right,y:t.bottom});return{top:n.y,left:n.x,bottom:i.y,right:i.x}}function $f(t){return t===void 0||t===1}function hp({scale:t,scaleX:e,scaleY:n}){return!$f(t)||!$f(e)||!$f(n)}function Jr(t){return hp(t)||jM(t)||t.z||t.rotate||t.rotateX||t.rotateY||t.skewX||t.skewY}function jM(t){return Bv(t.x)||Bv(t.y)}function Bv(t){return t&&t!=="0%"}function ru(t,e,n){const i=t-n,r=e*i;return n+r}function Vv(t,e,n,i,r){return r!==void 0&&(t=ru(t,r,i)),ru(t,n,i)+e}function pp(t,e=0,n=1,i,r){t.min=Vv(t.min,e,n,i,r),t.max=Vv(t.max,e,n,i,r)}function XM(t,{x:e,y:n}){pp(t.x,e.translate,e.scale,e.originPoint),pp(t.y,n.translate,n.scale,n.originPoint)}const zv=.999999999999,Hv=1.0000000000001;function eL(t,e,n,i=!1){const r=n.length;if(!r)return;e.x=e.y=1;let s,o;for(let a=0;a<r;a++){s=n[a],o=s.projectionDelta;const{visualElement:l}=s.options;l&&l.props.style&&l.props.style.display==="contents"||(i&&s.options.layoutScroll&&s.scroll&&s!==s.root&&no(t,{x:-s.scroll.offset.x,y:-s.scroll.offset.y}),o&&(e.x*=o.x.scale,e.y*=o.y.scale,XM(t,o)),i&&Jr(s.latestValues)&&no(t,s.latestValues))}e.x<Hv&&e.x>zv&&(e.x=1),e.y<Hv&&e.y>zv&&(e.y=1)}function to(t,e){t.min=t.min+e,t.max=t.max+e}function Gv(t,e,n,i,r=.5){const s=Tt(t.min,t.max,r);pp(t,e,n,s,i)}function no(t,e){Gv(t.x,e.x,e.scaleX,e.scale,e.originX),Gv(t.y,e.y,e.scaleY,e.scale,e.originY)}function YM(t,e){return WM(JD(t.getBoundingClientRect(),e))}function tL(t,e,n){const i=YM(t,n),{scroll:r}=e;return r&&(to(i.x,r.offset.x),to(i.y,r.offset.y)),i}const nL={x:"translateX",y:"translateY",z:"translateZ",transformPerspective:"perspective"},iL=Lo.length;function rL(t,e,n){let i="",r=!0;for(let s=0;s<iL;s++){const o=Lo[s],a=t[o];if(a===void 0)continue;let l=!0;if(typeof a=="number")l=a===(o.startsWith("scale")?1:0);else{const c=parseFloat(a);l=o.startsWith("scale")?c===1:c===0}if(!l||n){const c=IM(a,Xm[o]);if(!l){r=!1;const f=nL[o]||o;i+=`${f}(${c}) `}n&&(e[o]=c)}}return i=i.trim(),n?i=n(e,r?"":i):r&&(i="none"),i}function Jm(t,e,n){const{style:i,vars:r,transformOrigin:s}=t;let o=!1,a=!1;for(const l in e){const c=e[l];if(Io.has(l)){o=!0;continue}else if(nM(l)){r[l]=c;continue}else{const f=IM(c,Xm[l]);l.startsWith("origin")?(a=!0,s[l]=f):i[l]=f}}if(e.transform||(o||n?i.transform=rL(e,t.transform,n):i.transform&&(i.transform="none")),a){const{originX:l="50%",originY:c="50%",originZ:f=0}=s;i.transformOrigin=`${l} ${c} ${f}`}}function $M(t,{style:e,vars:n},i,r){const s=t.style;let o;for(o in e)s[o]=e[o];r==null||r.applyProjectionStyles(s,i);for(o in n)s.setProperty(o,n[o])}function Wv(t,e){return e.max===e.min?0:t/(e.max-e.min)*100}const Zo={correct:(t,e)=>{if(!e.target)return t;if(typeof t=="string")if(Te.test(t))t=parseFloat(t);else return t;const n=Wv(t,e.target.x),i=Wv(t,e.target.y);return`${n}% ${i}%`}},sL={correct:(t,{treeScale:e,projectionDelta:n})=>{const i=t,r=Fr.parse(t);if(r.length>5)return i;const s=Fr.createTransformer(t),o=typeof r[0]!="number"?1:0,a=n.x.scale*e.x,l=n.y.scale*e.y;r[0+o]/=a,r[1+o]/=l;const c=Tt(a,l,.5);return typeof r[2+o]=="number"&&(r[2+o]/=c),typeof r[3+o]=="number"&&(r[3+o]/=c),s(r)}},mp={borderRadius:{...Zo,applyTo:["borderTopLeftRadius","borderTopRightRadius","borderBottomLeftRadius","borderBottomRightRadius"]},borderTopLeftRadius:Zo,borderTopRightRadius:Zo,borderBottomLeftRadius:Zo,borderBottomRightRadius:Zo,boxShadow:sL};function qM(t,{layout:e,layoutId:n}){return Io.has(t)||t.startsWith("origin")||(e||n!==void 0)&&(!!mp[t]||t==="opacity")}function eg(t,e,n){var o;const i=t.style,r=e==null?void 0:e.style,s={};if(!i)return s;for(const a in i)(Xt(i[a])||r&&Xt(r[a])||qM(a,t)||((o=n==null?void 0:n.getValue(a))==null?void 0:o.liveStyle)!==void 0)&&(s[a]=i[a]);return s}function oL(t){return window.getComputedStyle(t)}class aL extends GM{constructor(){super(...arguments),this.type="html",this.renderInstance=$M}readValueFromInstance(e,n){var i;if(Io.has(n))return(i=this.projection)!=null&&i.isProjecting?tp(n):w3(e,n);{const r=oL(e),s=(nM(n)?r.getPropertyValue(n):r[n])||0;return typeof s=="string"?s.trim():s}}measureInstanceViewportBox(e,{transformPagePoint:n}){return YM(e,n)}build(e,n,i){Jm(e,n,i.transformTemplate)}scrapeMotionValuesFromProps(e,n,i){return eg(e,n,i)}}const lL={offset:"stroke-dashoffset",array:"stroke-dasharray"},cL={offset:"strokeDashoffset",array:"strokeDasharray"};function uL(t,e,n=1,i=0,r=!0){t.pathLength=1;const s=r?lL:cL;t[s.offset]=`${-i}`,t[s.array]=`${e} ${n}`}const fL=["offsetDistance","offsetPath","offsetRotate","offsetAnchor"];function KM(t,{attrX:e,attrY:n,attrScale:i,pathLength:r,pathSpacing:s=1,pathOffset:o=0,...a},l,c,f){if(Jm(t,a,c),l){t.style.viewBox&&(t.attrs.viewBox=t.style.viewBox);return}t.attrs=t.style,t.style={};const{attrs:u,style:h}=t;u.transform&&(h.transform=u.transform,delete u.transform),(h.transform||u.transformOrigin)&&(h.transformOrigin=u.transformOrigin??"50% 50%",delete u.transformOrigin),h.transform&&(h.transformBox=(f==null?void 0:f.transformBox)??"fill-box",delete u.transformBox);for(const p of fL)u[p]!==void 0&&(h[p]=u[p],delete u[p]);e!==void 0&&(u.x=e),n!==void 0&&(u.y=n),i!==void 0&&(u.scale=i),r!==void 0&&uL(u,r,s,o,!1)}const ZM=new Set(["baseFrequency","diffuseConstant","kernelMatrix","kernelUnitLength","keySplines","keyTimes","limitingConeAngle","markerHeight","markerWidth","numOctaves","targetX","targetY","surfaceScale","specularConstant","specularExponent","stdDeviation","tableValues","viewBox","gradientTransform","pathLength","startOffset","textLength","lengthAdjust"]),QM=t=>typeof t=="string"&&t.toLowerCase()==="svg";function dL(t,e,n,i){$M(t,e,void 0,i);for(const r in e.attrs)t.setAttribute(ZM.has(r)?r:jm(r),e.attrs[r])}function JM(t,e,n){const i=eg(t,e,n);for(const r in t)if(Xt(t[r])||Xt(e[r])){const s=Lo.indexOf(r)!==-1?"attr"+r.charAt(0).toUpperCase()+r.substring(1):r;i[s]=t[r]}return i}class hL extends GM{constructor(){super(...arguments),this.type="svg",this.isSVGTag=!1,this.measureInstanceViewportBox=kt}getBaseTargetFromProps(e,n){return e[n]}readValueFromInstance(e,n){if(Io.has(n)){const i=DM(n);return i&&i.default||0}return n=ZM.has(n)?n:jm(n),e.getAttribute(n)}scrapeMotionValuesFromProps(e,n,i){return JM(e,n,i)}build(e,n,i){KM(e,n,this.isSVGTag,i.transformTemplate,i.style)}renderInstance(e,n,i,r){dL(e,n,i,r)}mount(e){this.isSVGTag=QM(e.tagName),super.mount(e)}}const pL=Qm.length;function eE(t){if(!t)return;if(!t.isControllingVariants){const n=t.parent?eE(t.parent)||{}:{};return t.props.initial!==void 0&&(n.initial=t.props.initial),n}const e={};for(let n=0;n<pL;n++){const i=Qm[n],r=t.props[i];(Ga(r)||r===!1)&&(e[i]=r)}return e}function tE(t,e){if(!Array.isArray(e))return!1;const n=e.length;if(n!==t.length)return!1;for(let i=0;i<n;i++)if(e[i]!==t[i])return!1;return!0}const mL=[...Zm].reverse(),gL=Zm.length;function vL(t){return e=>Promise.all(e.map(({animation:n,options:i})=>dD(t,n,i)))}function _L(t){let e=vL(t),n=jv(),i=!0;const r=l=>(c,f)=>{var h;const u=fo(t,f,l==="exit"?(h=t.presenceContext)==null?void 0:h.custom:void 0);if(u){const{transition:p,transitionEnd:g,...x}=u;c={...c,...x,...g}}return c};function s(l){e=l(t)}function o(l){const{props:c}=t,f=eE(t.parent)||{},u=[],h=new Set;let p={},g=1/0;for(let m=0;m<gL;m++){const d=mL[m],v=n[d],_=c[d]!==void 0?c[d]:f[d],S=Ga(_),E=d===l?v.isActive:null;E===!1&&(g=m);let A=_===f[d]&&_!==c[d]&&S;if(A&&i&&t.manuallyAnimateOnMount&&(A=!1),v.protectedKeys={...p},!v.isActive&&E===null||!_&&!v.prevProp||Pu(_)||typeof _=="boolean")continue;if(d==="exit"&&v.isActive&&E!==!0){v.prevResolvedValues&&(p={...p,...v.prevResolvedValues});continue}const b=xL(v.prevProp,_);let R=b||d===l&&v.isActive&&!A&&S||m>g&&S,M=!1;const T=Array.isArray(_)?_:[_];let L=T.reduce(r(d),{});E===!1&&(L={});const{prevResolvedValues:H={}}=v,N={...H,...L},X=O=>{R=!0,h.has(O)&&(M=!0,h.delete(O)),v.needsAnimating[O]=!0;const P=t.getValue(O);P&&(P.liveStyle=!1)};for(const O in N){const P=L[O],K=H[O];if(p.hasOwnProperty(O))continue;let Y=!1;ap(P)&&ap(K)?Y=!tE(P,K):Y=P!==K,Y?P!=null?X(O):h.add(O):P!==void 0&&h.has(O)?X(O):v.protectedKeys[O]=!0}v.prevProp=_,v.prevResolvedValues=L,v.isActive&&(p={...p,...L}),i&&t.blockInitialAnimation&&(R=!1);const $=A&&b;R&&(!$||M)&&u.push(...T.map(O=>{const P={type:d};if(typeof O=="string"&&i&&!$&&t.manuallyAnimateOnMount&&t.parent){const{parent:K}=t,Y=fo(K,O);if(K.enteringChildren&&Y){const{delayChildren:te}=Y.transition||{};P.delay=MM(K.enteringChildren,t,te)}}return{animation:O,options:P}}))}if(h.size){const m={};if(typeof c.initial!="boolean"){const d=fo(t,Array.isArray(c.initial)?c.initial[0]:c.initial);d&&d.transition&&(m.transition=d.transition)}h.forEach(d=>{const v=t.getBaseTarget(d),_=t.getValue(d);_&&(_.liveStyle=!0),m[d]=v??null}),u.push({animation:m})}let x=!!u.length;return i&&(c.initial===!1||c.initial===c.animate)&&!t.manuallyAnimateOnMount&&(x=!1),i=!1,x?e(u):Promise.resolve()}function a(l,c){var u;if(n[l].isActive===c)return Promise.resolve();(u=t.variantChildren)==null||u.forEach(h=>{var p;return(p=h.animationState)==null?void 0:p.setActive(l,c)}),n[l].isActive=c;const f=o(l);for(const h in n)n[h].protectedKeys={};return f}return{animateChanges:o,setActive:a,setAnimateFunction:s,getState:()=>n,reset:()=>{n=jv()}}}function xL(t,e){return typeof e=="string"?e!==t:Array.isArray(e)?!tE(e,t):!1}function qr(t=!1){return{isActive:t,protectedKeys:{},needsAnimating:{},prevResolvedValues:{}}}function jv(){return{animate:qr(!0),whileInView:qr(),whileHover:qr(),whileTap:qr(),whileDrag:qr(),whileFocus:qr(),exit:qr()}}function Xv(t,e){t.min=e.min,t.max=e.max}function si(t,e){Xv(t.x,e.x),Xv(t.y,e.y)}function Yv(t,e){t.translate=e.translate,t.scale=e.scale,t.originPoint=e.originPoint,t.origin=e.origin}const nE=1e-4,yL=1-nE,SL=1+nE,iE=.01,ML=0-iE,EL=0+iE;function hn(t){return t.max-t.min}function TL(t,e,n){return Math.abs(t-e)<=n}function $v(t,e,n,i=.5){t.origin=i,t.originPoint=Tt(e.min,e.max,t.origin),t.scale=hn(n)/hn(e),t.translate=Tt(n.min,n.max,t.origin)-t.originPoint,(t.scale>=yL&&t.scale<=SL||isNaN(t.scale))&&(t.scale=1),(t.translate>=ML&&t.translate<=EL||isNaN(t.translate))&&(t.translate=0)}function va(t,e,n,i){$v(t.x,e.x,n.x,i?i.originX:void 0),$v(t.y,e.y,n.y,i?i.originY:void 0)}function qv(t,e,n){t.min=n.min+e.min,t.max=t.min+hn(e)}function wL(t,e,n){qv(t.x,e.x,n.x),qv(t.y,e.y,n.y)}function Kv(t,e,n){t.min=e.min-n.min,t.max=t.min+hn(e)}function su(t,e,n){Kv(t.x,e.x,n.x),Kv(t.y,e.y,n.y)}function Zv(t,e,n,i,r){return t-=e,t=ru(t,1/n,i),r!==void 0&&(t=ru(t,1/r,i)),t}function AL(t,e=0,n=1,i=.5,r,s=t,o=t){if(Ii.test(e)&&(e=parseFloat(e),e=Tt(o.min,o.max,e/100)-o.min),typeof e!="number")return;let a=Tt(s.min,s.max,i);t===s&&(a-=e),t.min=Zv(t.min,e,n,a,r),t.max=Zv(t.max,e,n,a,r)}function Qv(t,e,[n,i,r],s,o){AL(t,e[n],e[i],e[r],e.scale,s,o)}const bL=["x","scaleX","originX"],CL=["y","scaleY","originY"];function Jv(t,e,n,i){Qv(t.x,e,bL,n?n.x:void 0,i?i.x:void 0),Qv(t.y,e,CL,n?n.y:void 0,i?i.y:void 0)}function e_(t){return t.translate===0&&t.scale===1}function rE(t){return e_(t.x)&&e_(t.y)}function t_(t,e){return t.min===e.min&&t.max===e.max}function RL(t,e){return t_(t.x,e.x)&&t_(t.y,e.y)}function n_(t,e){return Math.round(t.min)===Math.round(e.min)&&Math.round(t.max)===Math.round(e.max)}function sE(t,e){return n_(t.x,e.x)&&n_(t.y,e.y)}function i_(t){return hn(t.x)/hn(t.y)}function r_(t,e){return t.translate===e.translate&&t.scale===e.scale&&t.originPoint===e.originPoint}function Ti(t){return[t("x"),t("y")]}function PL(t,e,n){let i="";const r=t.x.translate/e.x,s=t.y.translate/e.y,o=(n==null?void 0:n.z)||0;if((r||s||o)&&(i=`translate3d(${r}px, ${s}px, ${o}px) `),(e.x!==1||e.y!==1)&&(i+=`scale(${1/e.x}, ${1/e.y}) `),n){const{transformPerspective:c,rotate:f,rotateX:u,rotateY:h,skewX:p,skewY:g}=n;c&&(i=`perspective(${c}px) ${i}`),f&&(i+=`rotate(${f}deg) `),u&&(i+=`rotateX(${u}deg) `),h&&(i+=`rotateY(${h}deg) `),p&&(i+=`skewX(${p}deg) `),g&&(i+=`skewY(${g}deg) `)}const a=t.x.scale*e.x,l=t.y.scale*e.y;return(a!==1||l!==1)&&(i+=`scale(${a}, ${l})`),i||"none"}const oE=["TopLeft","TopRight","BottomLeft","BottomRight"],DL=oE.length,s_=t=>typeof t=="string"?parseFloat(t):t,o_=t=>typeof t=="number"||Te.test(t);function LL(t,e,n,i,r,s){r?(t.opacity=Tt(0,n.opacity??1,IL(i)),t.opacityExit=Tt(e.opacity??1,0,NL(i))):s&&(t.opacity=Tt(e.opacity??1,n.opacity??1,i));for(let o=0;o<DL;o++){const a=`border${oE[o]}Radius`;let l=a_(e,a),c=a_(n,a);if(l===void 0&&c===void 0)continue;l||(l=0),c||(c=0),l===0||c===0||o_(l)===o_(c)?(t[a]=Math.max(Tt(s_(l),s_(c),i),0),(Ii.test(c)||Ii.test(l))&&(t[a]+="%")):t[a]=c}(e.rotate||n.rotate)&&(t.rotate=Tt(e.rotate||0,n.rotate||0,i))}function a_(t,e){return t[e]!==void 0?t[e]:t.borderRadius}const IL=aE(0,.5,KS),NL=aE(.5,.95,Dn);function aE(t,e,n){return i=>i<t?0:i>e?1:n(wo(t,e,i))}function UL(t,e,n){const i=Xt(t)?t:di(t);return i.start(Gm("",i,e,n)),i.animation}function Wa(t,e,n,i={passive:!0}){return t.addEventListener(e,n,i),()=>t.removeEventListener(e,n)}const FL=(t,e)=>t.depth-e.depth;class OL{constructor(){this.children=[],this.isDirty=!1}add(e){bm(this.children,e),this.isDirty=!0}remove(e){Jc(this.children,e),this.isDirty=!0}forEach(e){this.isDirty&&this.children.sort(FL),this.isDirty=!1,this.children.forEach(e)}}function kL(t,e){const n=dn.now(),i=({timestamp:r})=>{const s=r-n;s>=e&&(ei(i),t(s-e))};return et.setup(i,!0),()=>ei(i)}function Tc(t){return Xt(t)?t.get():t}class BL{constructor(){this.members=[]}add(e){bm(this.members,e);for(let n=this.members.length-1;n>=0;n--){const i=this.members[n];if(i===e||i===this.lead||i===this.prevLead)continue;const r=i.instance;r&&r.isConnected===!1&&i.isPresent!==!1&&!i.snapshot&&Jc(this.members,i)}e.scheduleRender()}remove(e){if(Jc(this.members,e),e===this.prevLead&&(this.prevLead=void 0),e===this.lead){const n=this.members[this.members.length-1];n&&this.promote(n)}}relegate(e){const n=this.members.findIndex(r=>e===r);if(n===0)return!1;let i;for(let r=n;r>=0;r--){const s=this.members[r],o=s.instance;if(s.isPresent!==!1&&(!o||o.isConnected!==!1)){i=s;break}}return i?(this.promote(i),!0):!1}promote(e,n){const i=this.lead;if(e!==i&&(this.prevLead=i,this.lead=e,e.show(),i)){i.instance&&i.scheduleRender(),e.scheduleRender();const r=i.options.layoutDependency,s=e.options.layoutDependency;if(!(r!==void 0&&s!==void 0&&r===s)){const l=i.instance;l&&l.isConnected===!1&&!i.snapshot||(e.resumeFrom=i,n&&(e.resumeFrom.preserveOpacity=!0),i.snapshot&&(e.snapshot=i.snapshot,e.snapshot.latestValues=i.animationValues||i.latestValues),e.root&&e.root.isUpdating&&(e.isLayoutDirty=!0))}const{crossfade:a}=e.options;a===!1&&i.hide()}}exitAnimationComplete(){this.members.forEach(e=>{const{options:n,resumingFrom:i}=e;n.onExitComplete&&n.onExitComplete(),i&&i.options.onExitComplete&&i.options.onExitComplete()})}scheduleRender(){this.members.forEach(e=>{e.instance&&e.scheduleRender(!1)})}removeLeadSnapshot(){this.lead&&this.lead.snapshot&&(this.lead.snapshot=void 0)}}const wc={hasAnimatedSinceResize:!0,hasEverUpdated:!1},qf=["","X","Y","Z"],VL=1e3;let zL=0;function Kf(t,e,n,i){const{latestValues:r}=e;r[t]&&(n[t]=r[t],e.setStaticValue(t,0),i&&(i[t]=0))}function lE(t){if(t.hasCheckedOptimisedAppear=!0,t.root===t)return;const{visualElement:e}=t.options;if(!e)return;const n=bM(e);if(window.MotionHasOptimisedAnimation(n,"transform")){const{layout:r,layoutId:s}=t.options;window.MotionCancelOptimisedAnimation(n,"transform",et,!(r||s))}const{parent:i}=t;i&&!i.hasCheckedOptimisedAppear&&lE(i)}function cE({attachResizeListener:t,defaultParent:e,measureScroll:n,checkIsScrollRoot:i,resetTransform:r}){return class{constructor(o={},a=e==null?void 0:e()){this.id=zL++,this.animationId=0,this.animationCommitId=0,this.children=new Set,this.options={},this.isTreeAnimating=!1,this.isAnimationBlocked=!1,this.isLayoutDirty=!1,this.isProjectionDirty=!1,this.isSharedProjectionDirty=!1,this.isTransformDirty=!1,this.updateManuallyBlocked=!1,this.updateBlockedByResize=!1,this.isUpdating=!1,this.isSVG=!1,this.needsReset=!1,this.shouldResetTransform=!1,this.hasCheckedOptimisedAppear=!1,this.treeScale={x:1,y:1},this.eventHandlers=new Map,this.hasTreeAnimated=!1,this.layoutVersion=0,this.updateScheduled=!1,this.scheduleUpdate=()=>this.update(),this.projectionUpdateScheduled=!1,this.checkUpdateFailed=()=>{this.isUpdating&&(this.isUpdating=!1,this.clearAllSnapshots())},this.updateProjection=()=>{this.projectionUpdateScheduled=!1,this.nodes.forEach(WL),this.nodes.forEach($L),this.nodes.forEach(qL),this.nodes.forEach(jL)},this.resolvedRelativeTargetAt=0,this.linkedParentVersion=0,this.hasProjected=!1,this.isVisible=!0,this.animationProgress=0,this.sharedNodes=new Map,this.latestValues=o,this.root=a?a.root||a:this,this.path=a?[...a.path,a]:[],this.parent=a,this.depth=a?a.depth+1:0;for(let l=0;l<this.path.length;l++)this.path[l].shouldResetTransform=!0;this.root===this&&(this.nodes=new OL)}addEventListener(o,a){return this.eventHandlers.has(o)||this.eventHandlers.set(o,new Rm),this.eventHandlers.get(o).add(a)}notifyListeners(o,...a){const l=this.eventHandlers.get(o);l&&l.notify(...a)}hasListeners(o){return this.eventHandlers.has(o)}mount(o){if(this.instance)return;this.isSVG=Km(o)&&!zD(o),this.instance=o;const{layoutId:a,layout:l,visualElement:c}=this.options;if(c&&!c.current&&c.mount(o),this.root.nodes.add(this),this.parent&&this.parent.children.add(this),this.root.hasTreeAnimated&&(l||a)&&(this.isLayoutDirty=!0),t){let f,u=0;const h=()=>this.root.updateBlockedByResize=!1;et.read(()=>{u=window.innerWidth}),t(o,()=>{const p=window.innerWidth;p!==u&&(u=p,this.root.updateBlockedByResize=!0,f&&f(),f=kL(h,250),wc.hasAnimatedSinceResize&&(wc.hasAnimatedSinceResize=!1,this.nodes.forEach(u_)))})}a&&this.root.registerSharedNode(a,this),this.options.animate!==!1&&c&&(a||l)&&this.addEventListener("didUpdate",({delta:f,hasLayoutChanged:u,hasRelativeLayoutChanged:h,layout:p})=>{if(this.isTreeAnimationBlocked()){this.target=void 0,this.relativeTarget=void 0;return}const g=this.options.transition||c.getDefaultTransition()||eI,{onLayoutAnimationStart:x,onLayoutAnimationComplete:m}=c.getProps(),d=!this.targetLayout||!sE(this.targetLayout,p),v=!u&&h;if(this.options.layoutRoot||this.resumeFrom||v||u&&(d||!this.currentAnimation)){this.resumeFrom&&(this.resumingFrom=this.resumeFrom,this.resumingFrom.resumingFrom=void 0);const _={...Hm(g,"layout"),onPlay:x,onComplete:m};(c.shouldReduceMotion||this.options.layoutRoot)&&(_.delay=0,_.type=!1),this.startAnimation(_),this.setAnimationOrigin(f,v)}else u||u_(this),this.isLead()&&this.options.onExitComplete&&this.options.onExitComplete();this.targetLayout=p})}unmount(){this.options.layoutId&&this.willUpdate(),this.root.nodes.remove(this);const o=this.getStack();o&&o.remove(this),this.parent&&this.parent.children.delete(this),this.instance=void 0,this.eventHandlers.clear(),ei(this.updateProjection)}blockUpdate(){this.updateManuallyBlocked=!0}unblockUpdate(){this.updateManuallyBlocked=!1}isUpdateBlocked(){return this.updateManuallyBlocked||this.updateBlockedByResize}isTreeAnimationBlocked(){return this.isAnimationBlocked||this.parent&&this.parent.isTreeAnimationBlocked()||!1}startUpdate(){this.isUpdateBlocked()||(this.isUpdating=!0,this.nodes&&this.nodes.forEach(KL),this.animationId++)}getTransformTemplate(){const{visualElement:o}=this.options;return o&&o.getProps().transformTemplate}willUpdate(o=!0){if(this.root.hasTreeAnimated=!0,this.root.isUpdateBlocked()){this.options.onExitComplete&&this.options.onExitComplete();return}if(window.MotionCancelOptimisedAnimation&&!this.hasCheckedOptimisedAppear&&lE(this),!this.root.isUpdating&&this.root.startUpdate(),this.isLayoutDirty)return;this.isLayoutDirty=!0;for(let f=0;f<this.path.length;f++){const u=this.path[f];u.shouldResetTransform=!0,u.updateScroll("snapshot"),u.options.layoutRoot&&u.willUpdate(!1)}const{layoutId:a,layout:l}=this.options;if(a===void 0&&!l)return;const c=this.getTransformTemplate();this.prevTransformTemplateValue=c?c(this.latestValues,""):void 0,this.updateSnapshot(),o&&this.notifyListeners("willUpdate")}update(){if(this.updateScheduled=!1,this.isUpdateBlocked()){this.unblockUpdate(),this.clearAllSnapshots(),this.nodes.forEach(l_);return}if(this.animationId<=this.animationCommitId){this.nodes.forEach(c_);return}this.animationCommitId=this.animationId,this.isUpdating?(this.isUpdating=!1,this.nodes.forEach(YL),this.nodes.forEach(HL),this.nodes.forEach(GL)):this.nodes.forEach(c_),this.clearAllSnapshots();const a=dn.now();Wt.delta=vi(0,1e3/60,a-Wt.timestamp),Wt.timestamp=a,Wt.isProcessing=!0,zf.update.process(Wt),zf.preRender.process(Wt),zf.render.process(Wt),Wt.isProcessing=!1}didUpdate(){this.updateScheduled||(this.updateScheduled=!0,$m.read(this.scheduleUpdate))}clearAllSnapshots(){this.nodes.forEach(XL),this.sharedNodes.forEach(ZL)}scheduleUpdateProjection(){this.projectionUpdateScheduled||(this.projectionUpdateScheduled=!0,et.preRender(this.updateProjection,!1,!0))}scheduleCheckAfterUnmount(){et.postRender(()=>{this.isLayoutDirty?this.root.didUpdate():this.root.checkUpdateFailed()})}updateSnapshot(){this.snapshot||!this.instance||(this.snapshot=this.measure(),this.snapshot&&!hn(this.snapshot.measuredBox.x)&&!hn(this.snapshot.measuredBox.y)&&(this.snapshot=void 0))}updateLayout(){if(!this.instance||(this.updateScroll(),!(this.options.alwaysMeasureLayout&&this.isLead())&&!this.isLayoutDirty))return;if(this.resumeFrom&&!this.resumeFrom.instance)for(let l=0;l<this.path.length;l++)this.path[l].updateScroll();const o=this.layout;this.layout=this.measure(!1),this.layoutVersion++,this.layoutCorrected=kt(),this.isLayoutDirty=!1,this.projectionDelta=void 0,this.notifyListeners("measure",this.layout.layoutBox);const{visualElement:a}=this.options;a&&a.notify("LayoutMeasure",this.layout.layoutBox,o?o.layoutBox:void 0)}updateScroll(o="measure"){let a=!!(this.options.layoutScroll&&this.instance);if(this.scroll&&this.scroll.animationId===this.root.animationId&&this.scroll.phase===o&&(a=!1),a&&this.instance){const l=i(this.instance);this.scroll={animationId:this.root.animationId,phase:o,isRoot:l,offset:n(this.instance),wasRoot:this.scroll?this.scroll.isRoot:l}}}resetTransform(){if(!r)return;const o=this.isLayoutDirty||this.shouldResetTransform||this.options.alwaysMeasureLayout,a=this.projectionDelta&&!rE(this.projectionDelta),l=this.getTransformTemplate(),c=l?l(this.latestValues,""):void 0,f=c!==this.prevTransformTemplateValue;o&&this.instance&&(a||Jr(this.latestValues)||f)&&(r(this.instance,c),this.shouldResetTransform=!1,this.scheduleRender())}measure(o=!0){const a=this.measurePageBox();let l=this.removeElementScroll(a);return o&&(l=this.removeTransform(l)),tI(l),{animationId:this.root.animationId,measuredBox:a,layoutBox:l,latestValues:{},source:this.id}}measurePageBox(){var c;const{visualElement:o}=this.options;if(!o)return kt();const a=o.measureViewportBox();if(!(((c=this.scroll)==null?void 0:c.wasRoot)||this.path.some(nI))){const{scroll:f}=this.root;f&&(to(a.x,f.offset.x),to(a.y,f.offset.y))}return a}removeElementScroll(o){var l;const a=kt();if(si(a,o),(l=this.scroll)!=null&&l.wasRoot)return a;for(let c=0;c<this.path.length;c++){const f=this.path[c],{scroll:u,options:h}=f;f!==this.root&&u&&h.layoutScroll&&(u.wasRoot&&si(a,o),to(a.x,u.offset.x),to(a.y,u.offset.y))}return a}applyTransform(o,a=!1){const l=kt();si(l,o);for(let c=0;c<this.path.length;c++){const f=this.path[c];!a&&f.options.layoutScroll&&f.scroll&&f!==f.root&&no(l,{x:-f.scroll.offset.x,y:-f.scroll.offset.y}),Jr(f.latestValues)&&no(l,f.latestValues)}return Jr(this.latestValues)&&no(l,this.latestValues),l}removeTransform(o){const a=kt();si(a,o);for(let l=0;l<this.path.length;l++){const c=this.path[l];if(!c.instance||!Jr(c.latestValues))continue;hp(c.latestValues)&&c.updateSnapshot();const f=kt(),u=c.measurePageBox();si(f,u),Jv(a,c.latestValues,c.snapshot?c.snapshot.layoutBox:void 0,f)}return Jr(this.latestValues)&&Jv(a,this.latestValues),a}setTargetDelta(o){this.targetDelta=o,this.root.scheduleUpdateProjection(),this.isProjectionDirty=!0}setOptions(o){this.options={...this.options,...o,crossfade:o.crossfade!==void 0?o.crossfade:!0}}clearMeasurements(){this.scroll=void 0,this.layout=void 0,this.snapshot=void 0,this.prevTransformTemplateValue=void 0,this.targetDelta=void 0,this.target=void 0,this.isLayoutDirty=!1}forceRelativeParentToResolveTarget(){this.relativeParent&&this.relativeParent.resolvedRelativeTargetAt!==Wt.timestamp&&this.relativeParent.resolveTargetDelta(!0)}resolveTargetDelta(o=!1){var p;const a=this.getLead();this.isProjectionDirty||(this.isProjectionDirty=a.isProjectionDirty),this.isTransformDirty||(this.isTransformDirty=a.isTransformDirty),this.isSharedProjectionDirty||(this.isSharedProjectionDirty=a.isSharedProjectionDirty);const l=!!this.resumingFrom||this!==a;if(!(o||l&&this.isSharedProjectionDirty||this.isProjectionDirty||(p=this.parent)!=null&&p.isProjectionDirty||this.attemptToResolveRelativeTarget||this.root.updateBlockedByResize))return;const{layout:f,layoutId:u}=this.options;if(!this.layout||!(f||u))return;this.resolvedRelativeTargetAt=Wt.timestamp;const h=this.getClosestProjectingParent();h&&this.linkedParentVersion!==h.layoutVersion&&!h.options.layoutRoot&&this.removeRelativeTarget(),!this.targetDelta&&!this.relativeTarget&&(h&&h.layout?this.createRelativeTarget(h,this.layout.layoutBox,h.layout.layoutBox):this.removeRelativeTarget()),!(!this.relativeTarget&&!this.targetDelta)&&(this.target||(this.target=kt(),this.targetWithTransforms=kt()),this.relativeTarget&&this.relativeTargetOrigin&&this.relativeParent&&this.relativeParent.target?(this.forceRelativeParentToResolveTarget(),wL(this.target,this.relativeTarget,this.relativeParent.target)):this.targetDelta?(this.resumingFrom?this.target=this.applyTransform(this.layout.layoutBox):si(this.target,this.layout.layoutBox),XM(this.target,this.targetDelta)):si(this.target,this.layout.layoutBox),this.attemptToResolveRelativeTarget&&(this.attemptToResolveRelativeTarget=!1,h&&!!h.resumingFrom==!!this.resumingFrom&&!h.options.layoutScroll&&h.target&&this.animationProgress!==1?this.createRelativeTarget(h,this.target,h.target):this.relativeParent=this.relativeTarget=void 0))}getClosestProjectingParent(){if(!(!this.parent||hp(this.parent.latestValues)||jM(this.parent.latestValues)))return this.parent.isProjecting()?this.parent:this.parent.getClosestProjectingParent()}isProjecting(){return!!((this.relativeTarget||this.targetDelta||this.options.layoutRoot)&&this.layout)}createRelativeTarget(o,a,l){this.relativeParent=o,this.linkedParentVersion=o.layoutVersion,this.forceRelativeParentToResolveTarget(),this.relativeTarget=kt(),this.relativeTargetOrigin=kt(),su(this.relativeTargetOrigin,a,l),si(this.relativeTarget,this.relativeTargetOrigin)}removeRelativeTarget(){this.relativeParent=this.relativeTarget=void 0}calcProjection(){var g;const o=this.getLead(),a=!!this.resumingFrom||this!==o;let l=!0;if((this.isProjectionDirty||(g=this.parent)!=null&&g.isProjectionDirty)&&(l=!1),a&&(this.isSharedProjectionDirty||this.isTransformDirty)&&(l=!1),this.resolvedRelativeTargetAt===Wt.timestamp&&(l=!1),l)return;const{layout:c,layoutId:f}=this.options;if(this.isTreeAnimating=!!(this.parent&&this.parent.isTreeAnimating||this.currentAnimation||this.pendingAnimation),this.isTreeAnimating||(this.targetDelta=this.relativeTarget=void 0),!this.layout||!(c||f))return;si(this.layoutCorrected,this.layout.layoutBox);const u=this.treeScale.x,h=this.treeScale.y;eL(this.layoutCorrected,this.treeScale,this.path,a),o.layout&&!o.target&&(this.treeScale.x!==1||this.treeScale.y!==1)&&(o.target=o.layout.layoutBox,o.targetWithTransforms=kt());const{target:p}=o;if(!p){this.prevProjectionDelta&&(this.createProjectionDeltas(),this.scheduleRender());return}!this.projectionDelta||!this.prevProjectionDelta?this.createProjectionDeltas():(Yv(this.prevProjectionDelta.x,this.projectionDelta.x),Yv(this.prevProjectionDelta.y,this.projectionDelta.y)),va(this.projectionDelta,this.layoutCorrected,p,this.latestValues),(this.treeScale.x!==u||this.treeScale.y!==h||!r_(this.projectionDelta.x,this.prevProjectionDelta.x)||!r_(this.projectionDelta.y,this.prevProjectionDelta.y))&&(this.hasProjected=!0,this.scheduleRender(),this.notifyListeners("projectionUpdate",p))}hide(){this.isVisible=!1}show(){this.isVisible=!0}scheduleRender(o=!0){var a;if((a=this.options.visualElement)==null||a.scheduleRender(),o){const l=this.getStack();l&&l.scheduleRender()}this.resumingFrom&&!this.resumingFrom.instance&&(this.resumingFrom=void 0)}createProjectionDeltas(){this.prevProjectionDelta=eo(),this.projectionDelta=eo(),this.projectionDeltaWithTransform=eo()}setAnimationOrigin(o,a=!1){const l=this.snapshot,c=l?l.latestValues:{},f={...this.latestValues},u=eo();(!this.relativeParent||!this.relativeParent.options.layoutRoot)&&(this.relativeTarget=this.relativeTargetOrigin=void 0),this.attemptToResolveRelativeTarget=!a;const h=kt(),p=l?l.source:void 0,g=this.layout?this.layout.source:void 0,x=p!==g,m=this.getStack(),d=!m||m.members.length<=1,v=!!(x&&!d&&this.options.crossfade===!0&&!this.path.some(JL));this.animationProgress=0;let _;this.mixTargetDelta=S=>{const E=S/1e3;f_(u.x,o.x,E),f_(u.y,o.y,E),this.setTargetDelta(u),this.relativeTarget&&this.relativeTargetOrigin&&this.layout&&this.relativeParent&&this.relativeParent.layout&&(su(h,this.layout.layoutBox,this.relativeParent.layout.layoutBox),QL(this.relativeTarget,this.relativeTargetOrigin,h,E),_&&RL(this.relativeTarget,_)&&(this.isProjectionDirty=!1),_||(_=kt()),si(_,this.relativeTarget)),x&&(this.animationValues=f,LL(f,c,this.latestValues,E,v,d)),this.root.scheduleUpdateProjection(),this.scheduleRender(),this.animationProgress=E},this.mixTargetDelta(this.options.layoutRoot?1e3:0)}startAnimation(o){var a,l,c;this.notifyListeners("animationStart"),(a=this.currentAnimation)==null||a.stop(),(c=(l=this.resumingFrom)==null?void 0:l.currentAnimation)==null||c.stop(),this.pendingAnimation&&(ei(this.pendingAnimation),this.pendingAnimation=void 0),this.pendingAnimation=et.update(()=>{wc.hasAnimatedSinceResize=!0,this.motionValue||(this.motionValue=di(0)),this.currentAnimation=UL(this.motionValue,[0,1e3],{...o,velocity:0,isSync:!0,onUpdate:f=>{this.mixTargetDelta(f),o.onUpdate&&o.onUpdate(f)},onStop:()=>{},onComplete:()=>{o.onComplete&&o.onComplete(),this.completeAnimation()}}),this.resumingFrom&&(this.resumingFrom.currentAnimation=this.currentAnimation),this.pendingAnimation=void 0})}completeAnimation(){this.resumingFrom&&(this.resumingFrom.currentAnimation=void 0,this.resumingFrom.preserveOpacity=void 0);const o=this.getStack();o&&o.exitAnimationComplete(),this.resumingFrom=this.currentAnimation=this.animationValues=void 0,this.notifyListeners("animationComplete")}finishAnimation(){this.currentAnimation&&(this.mixTargetDelta&&this.mixTargetDelta(VL),this.currentAnimation.stop()),this.completeAnimation()}applyTransformsToTarget(){const o=this.getLead();let{targetWithTransforms:a,target:l,layout:c,latestValues:f}=o;if(!(!a||!l||!c)){if(this!==o&&this.layout&&c&&uE(this.options.animationType,this.layout.layoutBox,c.layoutBox)){l=this.target||kt();const u=hn(this.layout.layoutBox.x);l.x.min=o.target.x.min,l.x.max=l.x.min+u;const h=hn(this.layout.layoutBox.y);l.y.min=o.target.y.min,l.y.max=l.y.min+h}si(a,l),no(a,f),va(this.projectionDeltaWithTransform,this.layoutCorrected,a,f)}}registerSharedNode(o,a){this.sharedNodes.has(o)||this.sharedNodes.set(o,new BL),this.sharedNodes.get(o).add(a);const c=a.options.initialPromotionConfig;a.promote({transition:c?c.transition:void 0,preserveFollowOpacity:c&&c.shouldPreserveFollowOpacity?c.shouldPreserveFollowOpacity(a):void 0})}isLead(){const o=this.getStack();return o?o.lead===this:!0}getLead(){var a;const{layoutId:o}=this.options;return o?((a=this.getStack())==null?void 0:a.lead)||this:this}getPrevLead(){var a;const{layoutId:o}=this.options;return o?(a=this.getStack())==null?void 0:a.prevLead:void 0}getStack(){const{layoutId:o}=this.options;if(o)return this.root.sharedNodes.get(o)}promote({needsReset:o,transition:a,preserveFollowOpacity:l}={}){const c=this.getStack();c&&c.promote(this,l),o&&(this.projectionDelta=void 0,this.needsReset=!0),a&&this.setOptions({transition:a})}relegate(){const o=this.getStack();return o?o.relegate(this):!1}resetSkewAndRotation(){const{visualElement:o}=this.options;if(!o)return;let a=!1;const{latestValues:l}=o;if((l.z||l.rotate||l.rotateX||l.rotateY||l.rotateZ||l.skewX||l.skewY)&&(a=!0),!a)return;const c={};l.z&&Kf("z",o,c,this.animationValues);for(let f=0;f<qf.length;f++)Kf(`rotate${qf[f]}`,o,c,this.animationValues),Kf(`skew${qf[f]}`,o,c,this.animationValues);o.render();for(const f in c)o.setStaticValue(f,c[f]),this.animationValues&&(this.animationValues[f]=c[f]);o.scheduleRender()}applyProjectionStyles(o,a){if(!this.instance||this.isSVG)return;if(!this.isVisible){o.visibility="hidden";return}const l=this.getTransformTemplate();if(this.needsReset){this.needsReset=!1,o.visibility="",o.opacity="",o.pointerEvents=Tc(a==null?void 0:a.pointerEvents)||"",o.transform=l?l(this.latestValues,""):"none";return}const c=this.getLead();if(!this.projectionDelta||!this.layout||!c.target){this.options.layoutId&&(o.opacity=this.latestValues.opacity!==void 0?this.latestValues.opacity:1,o.pointerEvents=Tc(a==null?void 0:a.pointerEvents)||""),this.hasProjected&&!Jr(this.latestValues)&&(o.transform=l?l({},""):"none",this.hasProjected=!1);return}o.visibility="";const f=c.animationValues||c.latestValues;this.applyTransformsToTarget();let u=PL(this.projectionDeltaWithTransform,this.treeScale,f);l&&(u=l(f,u)),o.transform=u;const{x:h,y:p}=this.projectionDelta;o.transformOrigin=`${h.origin*100}% ${p.origin*100}% 0`,c.animationValues?o.opacity=c===this?f.opacity??this.latestValues.opacity??1:this.preserveOpacity?this.latestValues.opacity:f.opacityExit:o.opacity=c===this?f.opacity!==void 0?f.opacity:"":f.opacityExit!==void 0?f.opacityExit:0;for(const g in mp){if(f[g]===void 0)continue;const{correct:x,applyTo:m,isCSSVariable:d}=mp[g],v=u==="none"?f[g]:x(f[g],c);if(m){const _=m.length;for(let S=0;S<_;S++)o[m[S]]=v}else d?this.options.visualElement.renderState.vars[g]=v:o[g]=v}this.options.layoutId&&(o.pointerEvents=c===this?Tc(a==null?void 0:a.pointerEvents)||"":"none")}clearSnapshot(){this.resumeFrom=this.snapshot=void 0}resetTree(){this.root.nodes.forEach(o=>{var a;return(a=o.currentAnimation)==null?void 0:a.stop()}),this.root.nodes.forEach(l_),this.root.sharedNodes.clear()}}}function HL(t){t.updateLayout()}function GL(t){var n;const e=((n=t.resumeFrom)==null?void 0:n.snapshot)||t.snapshot;if(t.isLead()&&t.layout&&e&&t.hasListeners("didUpdate")){const{layoutBox:i,measuredBox:r}=t.layout,{animationType:s}=t.options,o=e.source!==t.layout.source;s==="size"?Ti(u=>{const h=o?e.measuredBox[u]:e.layoutBox[u],p=hn(h);h.min=i[u].min,h.max=h.min+p}):uE(s,e.layoutBox,i)&&Ti(u=>{const h=o?e.measuredBox[u]:e.layoutBox[u],p=hn(i[u]);h.max=h.min+p,t.relativeTarget&&!t.currentAnimation&&(t.isProjectionDirty=!0,t.relativeTarget[u].max=t.relativeTarget[u].min+p)});const a=eo();va(a,i,e.layoutBox);const l=eo();o?va(l,t.applyTransform(r,!0),e.measuredBox):va(l,i,e.layoutBox);const c=!rE(a);let f=!1;if(!t.resumeFrom){const u=t.getClosestProjectingParent();if(u&&!u.resumeFrom){const{snapshot:h,layout:p}=u;if(h&&p){const g=kt();su(g,e.layoutBox,h.layoutBox);const x=kt();su(x,i,p.layoutBox),sE(g,x)||(f=!0),u.options.layoutRoot&&(t.relativeTarget=x,t.relativeTargetOrigin=g,t.relativeParent=u)}}}t.notifyListeners("didUpdate",{layout:i,snapshot:e,delta:l,layoutDelta:a,hasLayoutChanged:c,hasRelativeLayoutChanged:f})}else if(t.isLead()){const{onExitComplete:i}=t.options;i&&i()}t.options.transition=void 0}function WL(t){t.parent&&(t.isProjecting()||(t.isProjectionDirty=t.parent.isProjectionDirty),t.isSharedProjectionDirty||(t.isSharedProjectionDirty=!!(t.isProjectionDirty||t.parent.isProjectionDirty||t.parent.isSharedProjectionDirty)),t.isTransformDirty||(t.isTransformDirty=t.parent.isTransformDirty))}function jL(t){t.isProjectionDirty=t.isSharedProjectionDirty=t.isTransformDirty=!1}function XL(t){t.clearSnapshot()}function l_(t){t.clearMeasurements()}function c_(t){t.isLayoutDirty=!1}function YL(t){const{visualElement:e}=t.options;e&&e.getProps().onBeforeLayoutMeasure&&e.notify("BeforeLayoutMeasure"),t.resetTransform()}function u_(t){t.finishAnimation(),t.targetDelta=t.relativeTarget=t.target=void 0,t.isProjectionDirty=!0}function $L(t){t.resolveTargetDelta()}function qL(t){t.calcProjection()}function KL(t){t.resetSkewAndRotation()}function ZL(t){t.removeLeadSnapshot()}function f_(t,e,n){t.translate=Tt(e.translate,0,n),t.scale=Tt(e.scale,1,n),t.origin=e.origin,t.originPoint=e.originPoint}function d_(t,e,n,i){t.min=Tt(e.min,n.min,i),t.max=Tt(e.max,n.max,i)}function QL(t,e,n,i){d_(t.x,e.x,n.x,i),d_(t.y,e.y,n.y,i)}function JL(t){return t.animationValues&&t.animationValues.opacityExit!==void 0}const eI={duration:.45,ease:[.4,0,.1,1]},h_=t=>typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().includes(t),p_=h_("applewebkit/")&&!h_("chrome/")?Math.round:Dn;function m_(t){t.min=p_(t.min),t.max=p_(t.max)}function tI(t){m_(t.x),m_(t.y)}function uE(t,e,n){return t==="position"||t==="preserve-aspect"&&!TL(i_(e),i_(n),.2)}function nI(t){var e;return t!==t.root&&((e=t.scroll)==null?void 0:e.wasRoot)}const iI=cE({attachResizeListener:(t,e)=>Wa(t,"resize",e),measureScroll:()=>{var t,e;return{x:document.documentElement.scrollLeft||((t=document.body)==null?void 0:t.scrollLeft)||0,y:document.documentElement.scrollTop||((e=document.body)==null?void 0:e.scrollTop)||0}},checkIsScrollRoot:()=>!0}),Zf={current:void 0},fE=cE({measureScroll:t=>({x:t.scrollLeft,y:t.scrollTop}),defaultParent:()=>{if(!Zf.current){const t=new iI({});t.mount(window),t.setOptions({layoutScroll:!0}),Zf.current=t}return Zf.current},resetTransform:(t,e)=>{t.style.transform=e!==void 0?e:"none"},checkIsScrollRoot:t=>window.getComputedStyle(t).position==="fixed"}),Lu=ue.createContext({transformPagePoint:t=>t,isStatic:!1,reducedMotion:"never"});function rI(t=!0){const e=ue.useContext(Am);if(e===null)return[!0,null];const{isPresent:n,onExitComplete:i,register:r}=e,s=ue.useId();ue.useEffect(()=>{if(t)return r(s)},[t]);const o=ue.useCallback(()=>t&&i&&i(s),[s,i,t]);return!n&&i?[!1,o]:[!0]}const dE=ue.createContext({strict:!1}),g_={animation:["animate","variants","whileHover","whileTap","exit","whileInView","whileFocus","whileDrag"],exit:["exit"],drag:["drag","dragControls"],focus:["whileFocus"],hover:["whileHover","onHoverStart","onHoverEnd"],tap:["whileTap","onTap","onTapStart","onTapCancel"],pan:["onPan","onPanStart","onPanSessionStart","onPanEnd"],inView:["whileInView","onViewportEnter","onViewportLeave"],layout:["layout","layoutId"]};let v_=!1;function sI(){if(v_)return;const t={};for(const e in g_)t[e]={isEnabled:n=>g_[e].some(i=>!!n[i])};HM(t),v_=!0}function hE(){return sI(),KD()}function oI(t){const e=hE();for(const n in t)e[n]={...e[n],...t[n]};HM(e)}const aI=new Set(["animate","exit","variants","initial","style","values","variants","transition","transformTemplate","custom","inherit","onBeforeLayoutMeasure","onAnimationStart","onAnimationComplete","onUpdate","onDragStart","onDrag","onDragEnd","onMeasureDragConstraints","onDirectionLock","onDragTransitionEnd","_dragX","_dragY","onHoverStart","onHoverEnd","onViewportEnter","onViewportLeave","globalTapTarget","propagate","ignoreStrict","viewport"]);function ou(t){return t.startsWith("while")||t.startsWith("drag")&&t!=="draggable"||t.startsWith("layout")||t.startsWith("onTap")||t.startsWith("onPan")||t.startsWith("onLayout")||aI.has(t)}let pE=t=>!ou(t);function lI(t){typeof t=="function"&&(pE=e=>e.startsWith("on")?!ou(e):t(e))}try{lI(require("@emotion/is-prop-valid").default)}catch{}function cI(t,e,n){const i={};for(const r in t)r==="values"&&typeof t.values=="object"||(pE(r)||n===!0&&ou(r)||!e&&!ou(r)||t.draggable&&r.startsWith("onDrag"))&&(i[r]=t[r]);return i}const Iu=ue.createContext({});function uI(t,e){if(Du(t)){const{initial:n,animate:i}=t;return{initial:n===!1||Ga(n)?n:void 0,animate:Ga(i)?i:void 0}}return t.inherit!==!1?e:{}}function fI(t){const{initial:e,animate:n}=uI(t,ue.useContext(Iu));return ue.useMemo(()=>({initial:e,animate:n}),[__(e),__(n)])}function __(t){return Array.isArray(t)?t.join(" "):t}const tg=()=>({style:{},transform:{},transformOrigin:{},vars:{}});function mE(t,e,n){for(const i in e)!Xt(e[i])&&!qM(i,n)&&(t[i]=e[i])}function dI({transformTemplate:t},e){return ue.useMemo(()=>{const n=tg();return Jm(n,e,t),Object.assign({},n.vars,n.style)},[e])}function hI(t,e){const n=t.style||{},i={};return mE(i,n,t),Object.assign(i,dI(t,e)),i}function pI(t,e){const n={},i=hI(t,e);return t.drag&&t.dragListener!==!1&&(n.draggable=!1,i.userSelect=i.WebkitUserSelect=i.WebkitTouchCallout="none",i.touchAction=t.drag===!0?"none":`pan-${t.drag==="x"?"y":"x"}`),t.tabIndex===void 0&&(t.onTap||t.onTapStart||t.whileTap)&&(n.tabIndex=0),n.style=i,n}const gE=()=>({...tg(),attrs:{}});function mI(t,e,n,i){const r=ue.useMemo(()=>{const s=gE();return KM(s,e,QM(i),t.transformTemplate,t.style),{...s.attrs,style:{...s.style}}},[e]);if(t.style){const s={};mE(s,t.style,t),r.style={...s,...r.style}}return r}const gI=["animate","circle","defs","desc","ellipse","g","image","line","filter","marker","mask","metadata","path","pattern","polygon","polyline","rect","stop","switch","symbol","svg","text","tspan","use","view"];function ng(t){return typeof t!="string"||t.includes("-")?!1:!!(gI.indexOf(t)>-1||/[A-Z]/u.test(t))}function vI(t,e,n,{latestValues:i},r,s=!1,o){const l=(o??ng(t)?mI:pI)(e,i,r,t),c=cI(e,typeof t=="string",s),f=t!==ue.Fragment?{...c,...l,ref:n}:{},{children:u}=e,h=ue.useMemo(()=>Xt(u)?u.get():u,[u]);return ue.createElement(t,{...f,children:h})}function _I({scrapeMotionValuesFromProps:t,createRenderState:e},n,i,r){return{latestValues:xI(n,i,r,t),renderState:e()}}function xI(t,e,n,i){const r={},s=i(t,{});for(const h in s)r[h]=Tc(s[h]);let{initial:o,animate:a}=t;const l=Du(t),c=VM(t);e&&c&&!l&&t.inherit!==!1&&(o===void 0&&(o=e.initial),a===void 0&&(a=e.animate));let f=n?n.initial===!1:!1;f=f||o===!1;const u=f?a:o;if(u&&typeof u!="boolean"&&!Pu(u)){const h=Array.isArray(u)?u:[u];for(let p=0;p<h.length;p++){const g=Wm(t,h[p]);if(g){const{transitionEnd:x,transition:m,...d}=g;for(const v in d){let _=d[v];if(Array.isArray(_)){const S=f?_.length-1:0;_=_[S]}_!==null&&(r[v]=_)}for(const v in x)r[v]=x[v]}}}return r}const vE=t=>(e,n)=>{const i=ue.useContext(Iu),r=ue.useContext(Am),s=()=>_I(t,e,i,r);return n?s():Cu(s)},yI=vE({scrapeMotionValuesFromProps:eg,createRenderState:tg}),SI=vE({scrapeMotionValuesFromProps:JM,createRenderState:gE}),MI=Symbol.for("motionComponentSymbol");function EI(t,e,n){const i=ue.useRef(n);ue.useInsertionEffect(()=>{i.current=n});const r=ue.useRef(null);return ue.useCallback(s=>{var a;s&&((a=t.onMount)==null||a.call(t,s)),e&&(s?e.mount(s):e.unmount());const o=i.current;if(typeof o=="function")if(s){const l=o(s);typeof l=="function"&&(r.current=l)}else r.current?(r.current(),r.current=null):o(s);else o&&(o.current=s)},[e])}const _E=ue.createContext({});function Bs(t){return t&&typeof t=="object"&&Object.prototype.hasOwnProperty.call(t,"current")}function TI(t,e,n,i,r,s){var _,S;const{visualElement:o}=ue.useContext(Iu),a=ue.useContext(dE),l=ue.useContext(Am),c=ue.useContext(Lu),f=c.reducedMotion,u=c.skipAnimations,h=ue.useRef(null),p=ue.useRef(!1);i=i||a.renderer,!h.current&&i&&(h.current=i(t,{visualState:e,parent:o,props:n,presenceContext:l,blockInitialAnimation:l?l.initial===!1:!1,reducedMotionConfig:f,skipAnimations:u,isSVG:s}),p.current&&h.current&&(h.current.manuallyAnimateOnMount=!0));const g=h.current,x=ue.useContext(_E);g&&!g.projection&&r&&(g.type==="html"||g.type==="svg")&&wI(h.current,n,r,x);const m=ue.useRef(!1);ue.useInsertionEffect(()=>{g&&m.current&&g.update(n,l)});const d=n[AM],v=ue.useRef(!!d&&!((_=window.MotionHandoffIsComplete)!=null&&_.call(window,d))&&((S=window.MotionHasOptimisedAnimation)==null?void 0:S.call(window,d)));return wm(()=>{p.current=!0,g&&(m.current=!0,window.MotionIsMounted=!0,g.updateFeatures(),g.scheduleRenderMicrotask(),v.current&&g.animationState&&g.animationState.animateChanges())}),ue.useEffect(()=>{g&&(!v.current&&g.animationState&&g.animationState.animateChanges(),v.current&&(queueMicrotask(()=>{var E;(E=window.MotionHandoffMarkAsComplete)==null||E.call(window,d)}),v.current=!1),g.enteringChildren=void 0)}),g}function wI(t,e,n,i){const{layoutId:r,layout:s,drag:o,dragConstraints:a,layoutScroll:l,layoutRoot:c,layoutCrossfade:f}=e;t.projection=new n(t.latestValues,e["data-framer-portal-id"]?void 0:xE(t.parent)),t.projection.setOptions({layoutId:r,layout:s,alwaysMeasureLayout:!!o||a&&Bs(a),visualElement:t,animationType:typeof s=="string"?s:"both",initialPromotionConfig:i,crossfade:f,layoutScroll:l,layoutRoot:c})}function xE(t){if(t)return t.options.allowProjection!==!1?t.projection:xE(t.parent)}function Qf(t,{forwardMotionProps:e=!1,type:n}={},i,r){i&&oI(i);const s=n?n==="svg":ng(t),o=s?SI:yI;function a(c,f){let u;const h={...ue.useContext(Lu),...c,layoutId:AI(c)},{isStatic:p}=h,g=fI(c),x=o(c,p);if(!p&&VS){bI();const m=CI(h);u=m.MeasureLayout,g.visualElement=TI(t,x,h,r,m.ProjectionNode,s)}return V.jsxs(Iu.Provider,{value:g,children:[u&&g.visualElement?V.jsx(u,{visualElement:g.visualElement,...h}):null,vI(t,c,EI(x,g.visualElement,f),x,p,e,s)]})}a.displayName=`motion.${typeof t=="string"?t:`create(${t.displayName??t.name??""})`}`;const l=ue.forwardRef(a);return l[MI]=t,l}function AI({layoutId:t}){const e=ue.useContext(BS).id;return e&&t!==void 0?e+"-"+t:t}function bI(t,e){ue.useContext(dE).strict}function CI(t){const e=hE(),{drag:n,layout:i}=e;if(!n&&!i)return{};const r={...n,...i};return{MeasureLayout:n!=null&&n.isEnabled(t)||i!=null&&i.isEnabled(t)?r.MeasureLayout:void 0,ProjectionNode:r.ProjectionNode}}function RI(t,e){if(typeof Proxy>"u")return Qf;const n=new Map,i=(s,o)=>Qf(s,o,t,e),r=(s,o)=>i(s,o);return new Proxy(r,{get:(s,o)=>o==="create"?i:(n.has(o)||n.set(o,Qf(o,void 0,t,e)),n.get(o))})}const PI=(t,e)=>e.isSVG??ng(t)?new hL(e):new aL(e,{allowProjection:t!==ue.Fragment});class DI extends Vr{constructor(e){super(e),e.animationState||(e.animationState=_L(e))}updateAnimationControlsSubscription(){const{animate:e}=this.node.getProps();Pu(e)&&(this.unmountControls=e.subscribe(this.node))}mount(){this.updateAnimationControlsSubscription()}update(){const{animate:e}=this.node.getProps(),{animate:n}=this.node.prevProps||{};e!==n&&this.updateAnimationControlsSubscription()}unmount(){var e;this.node.animationState.reset(),(e=this.unmountControls)==null||e.call(this)}}let LI=0;class II extends Vr{constructor(){super(...arguments),this.id=LI++}update(){if(!this.node.presenceContext)return;const{isPresent:e,onExitComplete:n}=this.node.presenceContext,{isPresent:i}=this.node.prevPresenceContext||{};if(!this.node.animationState||e===i)return;const r=this.node.animationState.setActive("exit",!e);n&&!e&&r.then(()=>{n(this.id)})}mount(){const{register:e,onExitComplete:n}=this.node.presenceContext||{};n&&n(this.id),e&&(this.unmount=e(this.id))}unmount(){}}const NI={animation:{Feature:DI},exit:{Feature:II}};function rl(t){return{point:{x:t.pageX,y:t.pageY}}}const UI=t=>e=>qm(e)&&t(e,rl(e));function _a(t,e,n,i){return Wa(t,e,UI(n),i)}const yE=({current:t})=>t?t.ownerDocument.defaultView:null,x_=(t,e)=>Math.abs(t-e);function FI(t,e){const n=x_(t.x,e.x),i=x_(t.y,e.y);return Math.sqrt(n**2+i**2)}const y_=new Set(["auto","scroll"]);class SE{constructor(e,n,{transformPagePoint:i,contextWindow:r=window,dragSnapToOrigin:s=!1,distanceThreshold:o=3,element:a}={}){if(this.startEvent=null,this.lastMoveEvent=null,this.lastMoveEventInfo=null,this.handlers={},this.contextWindow=window,this.scrollPositions=new Map,this.removeScrollListeners=null,this.onElementScroll=p=>{this.handleScroll(p.target)},this.onWindowScroll=()=>{this.handleScroll(window)},this.updatePoint=()=>{if(!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const p=ed(this.lastMoveEventInfo,this.history),g=this.startEvent!==null,x=FI(p.offset,{x:0,y:0})>=this.distanceThreshold;if(!g&&!x)return;const{point:m}=p,{timestamp:d}=Wt;this.history.push({...m,timestamp:d});const{onStart:v,onMove:_}=this.handlers;g||(v&&v(this.lastMoveEvent,p),this.startEvent=this.lastMoveEvent),_&&_(this.lastMoveEvent,p)},this.handlePointerMove=(p,g)=>{this.lastMoveEvent=p,this.lastMoveEventInfo=Jf(g,this.transformPagePoint),et.update(this.updatePoint,!0)},this.handlePointerUp=(p,g)=>{this.end();const{onEnd:x,onSessionEnd:m,resumeAnimation:d}=this.handlers;if((this.dragSnapToOrigin||!this.startEvent)&&d&&d(),!(this.lastMoveEvent&&this.lastMoveEventInfo))return;const v=ed(p.type==="pointercancel"?this.lastMoveEventInfo:Jf(g,this.transformPagePoint),this.history);this.startEvent&&x&&x(p,v),m&&m(p,v)},!qm(e))return;this.dragSnapToOrigin=s,this.handlers=n,this.transformPagePoint=i,this.distanceThreshold=o,this.contextWindow=r||window;const l=rl(e),c=Jf(l,this.transformPagePoint),{point:f}=c,{timestamp:u}=Wt;this.history=[{...f,timestamp:u}];const{onSessionStart:h}=n;h&&h(e,ed(c,this.history)),this.removeListeners=tl(_a(this.contextWindow,"pointermove",this.handlePointerMove),_a(this.contextWindow,"pointerup",this.handlePointerUp),_a(this.contextWindow,"pointercancel",this.handlePointerUp)),a&&this.startScrollTracking(a)}startScrollTracking(e){let n=e.parentElement;for(;n;){const i=getComputedStyle(n);(y_.has(i.overflowX)||y_.has(i.overflowY))&&this.scrollPositions.set(n,{x:n.scrollLeft,y:n.scrollTop}),n=n.parentElement}this.scrollPositions.set(window,{x:window.scrollX,y:window.scrollY}),window.addEventListener("scroll",this.onElementScroll,{capture:!0,passive:!0}),window.addEventListener("scroll",this.onWindowScroll,{passive:!0}),this.removeScrollListeners=()=>{window.removeEventListener("scroll",this.onElementScroll,{capture:!0}),window.removeEventListener("scroll",this.onWindowScroll)}}handleScroll(e){const n=this.scrollPositions.get(e);if(!n)return;const i=e===window,r=i?{x:window.scrollX,y:window.scrollY}:{x:e.scrollLeft,y:e.scrollTop},s={x:r.x-n.x,y:r.y-n.y};s.x===0&&s.y===0||(i?this.lastMoveEventInfo&&(this.lastMoveEventInfo.point.x+=s.x,this.lastMoveEventInfo.point.y+=s.y):this.history.length>0&&(this.history[0].x-=s.x,this.history[0].y-=s.y),this.scrollPositions.set(e,r),et.update(this.updatePoint,!0))}updateHandlers(e){this.handlers=e}end(){this.removeListeners&&this.removeListeners(),this.removeScrollListeners&&this.removeScrollListeners(),this.scrollPositions.clear(),ei(this.updatePoint)}}function Jf(t,e){return e?{point:e(t.point)}:t}function S_(t,e){return{x:t.x-e.x,y:t.y-e.y}}function ed({point:t},e){return{point:t,delta:S_(t,ME(e)),offset:S_(t,OI(e)),velocity:kI(e,.1)}}function OI(t){return t[0]}function ME(t){return t[t.length-1]}function kI(t,e){if(t.length<2)return{x:0,y:0};let n=t.length-1,i=null;const r=ME(t);for(;n>=0&&(i=t[n],!(r.timestamp-i.timestamp>mi(e)));)n--;if(!i)return{x:0,y:0};i===t[0]&&t.length>2&&r.timestamp-i.timestamp>mi(e)*2&&(i=t[1]);const s=Kn(r.timestamp-i.timestamp);if(s===0)return{x:0,y:0};const o={x:(r.x-i.x)/s,y:(r.y-i.y)/s};return o.x===1/0&&(o.x=0),o.y===1/0&&(o.y=0),o}function BI(t,{min:e,max:n},i){return e!==void 0&&t<e?t=i?Tt(e,t,i.min):Math.max(t,e):n!==void 0&&t>n&&(t=i?Tt(n,t,i.max):Math.min(t,n)),t}function M_(t,e,n){return{min:e!==void 0?t.min+e:void 0,max:n!==void 0?t.max+n-(t.max-t.min):void 0}}function VI(t,{top:e,left:n,bottom:i,right:r}){return{x:M_(t.x,n,r),y:M_(t.y,e,i)}}function E_(t,e){let n=e.min-t.min,i=e.max-t.max;return e.max-e.min<t.max-t.min&&([n,i]=[i,n]),{min:n,max:i}}function zI(t,e){return{x:E_(t.x,e.x),y:E_(t.y,e.y)}}function HI(t,e){let n=.5;const i=hn(t),r=hn(e);return r>i?n=wo(e.min,e.max-i,t.min):i>r&&(n=wo(t.min,t.max-r,e.min)),vi(0,1,n)}function GI(t,e){const n={};return e.min!==void 0&&(n.min=e.min-t.min),e.max!==void 0&&(n.max=e.max-t.min),n}const gp=.35;function WI(t=gp){return t===!1?t=0:t===!0&&(t=gp),{x:T_(t,"left","right"),y:T_(t,"top","bottom")}}function T_(t,e,n){return{min:w_(t,e),max:w_(t,n)}}function w_(t,e){return typeof t=="number"?t:t[e]||0}const jI=new WeakMap;class XI{constructor(e){this.openDragLock=null,this.isDragging=!1,this.currentDirection=null,this.originPoint={x:0,y:0},this.constraints=!1,this.hasMutatedConstraints=!1,this.elastic=kt(),this.latestPointerEvent=null,this.latestPanInfo=null,this.visualElement=e}start(e,{snapToCursor:n=!1,distanceThreshold:i}={}){const{presenceContext:r}=this.visualElement;if(r&&r.isPresent===!1)return;const s=u=>{n&&this.snapToCursor(rl(u).point),this.stopAnimation()},o=(u,h)=>{const{drag:p,dragPropagation:g,onDragStart:x}=this.getProps();if(p&&!g&&(this.openDragLock&&this.openDragLock(),this.openDragLock=TD(p),!this.openDragLock))return;this.latestPointerEvent=u,this.latestPanInfo=h,this.isDragging=!0,this.currentDirection=null,this.resolveConstraints(),this.visualElement.projection&&(this.visualElement.projection.isAnimationBlocked=!0,this.visualElement.projection.target=void 0),Ti(d=>{let v=this.getAxisMotionValue(d).get()||0;if(Ii.test(v)){const{projection:_}=this.visualElement;if(_&&_.layout){const S=_.layout.layoutBox[d];S&&(v=hn(S)*(parseFloat(v)/100))}}this.originPoint[d]=v}),x&&et.update(()=>x(u,h),!1,!0),lp(this.visualElement,"transform");const{animationState:m}=this.visualElement;m&&m.setActive("whileDrag",!0)},a=(u,h)=>{this.latestPointerEvent=u,this.latestPanInfo=h;const{dragPropagation:p,dragDirectionLock:g,onDirectionLock:x,onDrag:m}=this.getProps();if(!p&&!this.openDragLock)return;const{offset:d}=h;if(g&&this.currentDirection===null){this.currentDirection=$I(d),this.currentDirection!==null&&x&&x(this.currentDirection);return}this.updateAxis("x",h.point,d),this.updateAxis("y",h.point,d),this.visualElement.render(),m&&et.update(()=>m(u,h),!1,!0)},l=(u,h)=>{this.latestPointerEvent=u,this.latestPanInfo=h,this.stop(u,h),this.latestPointerEvent=null,this.latestPanInfo=null},c=()=>{const{dragSnapToOrigin:u}=this.getProps();(u||this.constraints)&&this.startAnimation({x:0,y:0})},{dragSnapToOrigin:f}=this.getProps();this.panSession=new SE(e,{onSessionStart:s,onStart:o,onMove:a,onSessionEnd:l,resumeAnimation:c},{transformPagePoint:this.visualElement.getTransformPagePoint(),dragSnapToOrigin:f,distanceThreshold:i,contextWindow:yE(this.visualElement),element:this.visualElement.current})}stop(e,n){const i=e||this.latestPointerEvent,r=n||this.latestPanInfo,s=this.isDragging;if(this.cancel(),!s||!r||!i)return;const{velocity:o}=r;this.startAnimation(o);const{onDragEnd:a}=this.getProps();a&&et.postRender(()=>a(i,r))}cancel(){this.isDragging=!1;const{projection:e,animationState:n}=this.visualElement;e&&(e.isAnimationBlocked=!1),this.endPanSession();const{dragPropagation:i}=this.getProps();!i&&this.openDragLock&&(this.openDragLock(),this.openDragLock=null),n&&n.setActive("whileDrag",!1)}endPanSession(){this.panSession&&this.panSession.end(),this.panSession=void 0}updateAxis(e,n,i){const{drag:r}=this.getProps();if(!i||!Kl(e,r,this.currentDirection))return;const s=this.getAxisMotionValue(e);let o=this.originPoint[e]+i[e];this.constraints&&this.constraints[e]&&(o=BI(o,this.constraints[e],this.elastic[e])),s.set(o)}resolveConstraints(){var s;const{dragConstraints:e,dragElastic:n}=this.getProps(),i=this.visualElement.projection&&!this.visualElement.projection.layout?this.visualElement.projection.measure(!1):(s=this.visualElement.projection)==null?void 0:s.layout,r=this.constraints;e&&Bs(e)?this.constraints||(this.constraints=this.resolveRefConstraints()):e&&i?this.constraints=VI(i.layoutBox,e):this.constraints=!1,this.elastic=WI(n),r!==this.constraints&&!Bs(e)&&i&&this.constraints&&!this.hasMutatedConstraints&&Ti(o=>{this.constraints!==!1&&this.getAxisMotionValue(o)&&(this.constraints[o]=GI(i.layoutBox[o],this.constraints[o]))})}resolveRefConstraints(){const{dragConstraints:e,onMeasureDragConstraints:n}=this.getProps();if(!e||!Bs(e))return!1;const i=e.current,{projection:r}=this.visualElement;if(!r||!r.layout)return!1;const s=tL(i,r.root,this.visualElement.getTransformPagePoint());let o=zI(r.layout.layoutBox,s);if(n){const a=n(QD(o));this.hasMutatedConstraints=!!a,a&&(o=WM(a))}return o}startAnimation(e){const{drag:n,dragMomentum:i,dragElastic:r,dragTransition:s,dragSnapToOrigin:o,onDragTransitionEnd:a}=this.getProps(),l=this.constraints||{},c=Ti(f=>{if(!Kl(f,n,this.currentDirection))return;let u=l&&l[f]||{};o&&(u={min:0,max:0});const h=r?200:1e6,p=r?40:1e7,g={type:"inertia",velocity:i?e[f]:0,bounceStiffness:h,bounceDamping:p,timeConstant:750,restDelta:1,restSpeed:10,...s,...u};return this.startAxisValueAnimation(f,g)});return Promise.all(c).then(a)}startAxisValueAnimation(e,n){const i=this.getAxisMotionValue(e);return lp(this.visualElement,e),i.start(Gm(e,i,0,n,this.visualElement,!1))}stopAnimation(){Ti(e=>this.getAxisMotionValue(e).stop())}getAxisMotionValue(e){const n=`_drag${e.toUpperCase()}`,i=this.visualElement.getProps(),r=i[n];return r||this.visualElement.getValue(e,(i.initial?i.initial[e]:void 0)||0)}snapToCursor(e){Ti(n=>{const{drag:i}=this.getProps();if(!Kl(n,i,this.currentDirection))return;const{projection:r}=this.visualElement,s=this.getAxisMotionValue(n);if(r&&r.layout){const{min:o,max:a}=r.layout.layoutBox[n],l=s.get()||0;s.set(e[n]-Tt(o,a,.5)+l)}})}scalePositionWithinConstraints(){if(!this.visualElement.current)return;const{drag:e,dragConstraints:n}=this.getProps(),{projection:i}=this.visualElement;if(!Bs(n)||!i||!this.constraints)return;this.stopAnimation();const r={x:0,y:0};Ti(o=>{const a=this.getAxisMotionValue(o);if(a&&this.constraints!==!1){const l=a.get();r[o]=HI({min:l,max:l},this.constraints[o])}});const{transformTemplate:s}=this.visualElement.getProps();this.visualElement.current.style.transform=s?s({},""):"none",i.root&&i.root.updateScroll(),i.updateLayout(),this.constraints=!1,this.resolveConstraints(),Ti(o=>{if(!Kl(o,e,null))return;const a=this.getAxisMotionValue(o),{min:l,max:c}=this.constraints[o];a.set(Tt(l,c,r[o]))}),this.visualElement.render()}addListeners(){if(!this.visualElement.current)return;jI.set(this.visualElement,this);const e=this.visualElement.current,n=_a(e,"pointerdown",c=>{const{drag:f,dragListener:u=!0}=this.getProps(),h=c.target,p=h!==e&&PD(h);f&&u&&!p&&this.start(c)});let i;const r=()=>{const{dragConstraints:c}=this.getProps();Bs(c)&&c.current&&(this.constraints=this.resolveRefConstraints(),i||(i=YI(e,c.current,()=>this.scalePositionWithinConstraints())))},{projection:s}=this.visualElement,o=s.addEventListener("measure",r);s&&!s.layout&&(s.root&&s.root.updateScroll(),s.updateLayout()),et.read(r);const a=Wa(window,"resize",()=>this.scalePositionWithinConstraints()),l=s.addEventListener("didUpdate",({delta:c,hasLayoutChanged:f})=>{this.isDragging&&f&&(Ti(u=>{const h=this.getAxisMotionValue(u);h&&(this.originPoint[u]+=c[u].translate,h.set(h.get()+c[u].translate))}),this.visualElement.render())});return()=>{a(),n(),o(),l&&l(),i&&i()}}getProps(){const e=this.visualElement.getProps(),{drag:n=!1,dragDirectionLock:i=!1,dragPropagation:r=!1,dragConstraints:s=!1,dragElastic:o=gp,dragMomentum:a=!0}=e;return{...e,drag:n,dragDirectionLock:i,dragPropagation:r,dragConstraints:s,dragElastic:o,dragMomentum:a}}}function A_(t){let e=!0;return()=>{if(e){e=!1;return}t()}}function YI(t,e,n){const i=fp(t,A_(n)),r=fp(e,A_(n));return()=>{i(),r()}}function Kl(t,e,n){return(e===!0||e===t)&&(n===null||n===t)}function $I(t,e=10){let n=null;return Math.abs(t.y)>e?n="y":Math.abs(t.x)>e&&(n="x"),n}class qI extends Vr{constructor(e){super(e),this.removeGroupControls=Dn,this.removeListeners=Dn,this.controls=new XI(e)}mount(){const{dragControls:e}=this.node.getProps();e&&(this.removeGroupControls=e.subscribe(this.controls)),this.removeListeners=this.controls.addListeners()||Dn}update(){const{dragControls:e}=this.node.getProps(),{dragControls:n}=this.node.prevProps||{};e!==n&&(this.removeGroupControls(),e&&(this.removeGroupControls=e.subscribe(this.controls)))}unmount(){this.removeGroupControls(),this.removeListeners(),this.controls.isDragging||this.controls.endPanSession()}}const td=t=>(e,n)=>{t&&et.update(()=>t(e,n),!1,!0)};class KI extends Vr{constructor(){super(...arguments),this.removePointerDownListener=Dn}onPointerDown(e){this.session=new SE(e,this.createPanHandlers(),{transformPagePoint:this.node.getTransformPagePoint(),contextWindow:yE(this.node)})}createPanHandlers(){const{onPanSessionStart:e,onPanStart:n,onPan:i,onPanEnd:r}=this.node.getProps();return{onSessionStart:td(e),onStart:td(n),onMove:td(i),onEnd:(s,o)=>{delete this.session,r&&et.postRender(()=>r(s,o))}}}mount(){this.removePointerDownListener=_a(this.node.current,"pointerdown",e=>this.onPointerDown(e))}update(){this.session&&this.session.updateHandlers(this.createPanHandlers())}unmount(){this.removePointerDownListener(),this.session&&this.session.end()}}let nd=!1;class ZI extends ue.Component{componentDidMount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i,layoutId:r}=this.props,{projection:s}=e;s&&(n.group&&n.group.add(s),i&&i.register&&r&&i.register(s),nd&&s.root.didUpdate(),s.addEventListener("animationComplete",()=>{this.safeToRemove()}),s.setOptions({...s.options,layoutDependency:this.props.layoutDependency,onExitComplete:()=>this.safeToRemove()})),wc.hasEverUpdated=!0}getSnapshotBeforeUpdate(e){const{layoutDependency:n,visualElement:i,drag:r,isPresent:s}=this.props,{projection:o}=i;return o&&(o.isPresent=s,e.layoutDependency!==n&&o.setOptions({...o.options,layoutDependency:n}),nd=!0,r||e.layoutDependency!==n||n===void 0||e.isPresent!==s?o.willUpdate():this.safeToRemove(),e.isPresent!==s&&(s?o.promote():o.relegate()||et.postRender(()=>{const a=o.getStack();(!a||!a.members.length)&&this.safeToRemove()}))),null}componentDidUpdate(){const{projection:e}=this.props.visualElement;e&&(e.root.didUpdate(),$m.postRender(()=>{!e.currentAnimation&&e.isLead()&&this.safeToRemove()}))}componentWillUnmount(){const{visualElement:e,layoutGroup:n,switchLayoutGroup:i}=this.props,{projection:r}=e;nd=!0,r&&(r.scheduleCheckAfterUnmount(),n&&n.group&&n.group.remove(r),i&&i.deregister&&i.deregister(r))}safeToRemove(){const{safeToRemove:e}=this.props;e&&e()}render(){return null}}function EE(t){const[e,n]=rI(),i=ue.useContext(BS);return V.jsx(ZI,{...t,layoutGroup:i,switchLayoutGroup:ue.useContext(_E),isPresent:e,safeToRemove:n})}const QI={pan:{Feature:KI},drag:{Feature:qI,ProjectionNode:fE,MeasureLayout:EE}};function b_(t,e,n){const{props:i}=t;t.animationState&&i.whileHover&&t.animationState.setActive("whileHover",n==="Start");const r="onHover"+n,s=i[r];s&&et.postRender(()=>s(e,rl(e)))}class JI extends Vr{mount(){const{current:e}=this.node;e&&(this.unmount=AD(e,(n,i)=>(b_(this.node,i,"Start"),r=>b_(this.node,r,"End"))))}unmount(){}}class eN extends Vr{constructor(){super(...arguments),this.isActive=!1}onFocus(){let e=!1;try{e=this.node.current.matches(":focus-visible")}catch{e=!0}!e||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!0),this.isActive=!0)}onBlur(){!this.isActive||!this.node.animationState||(this.node.animationState.setActive("whileFocus",!1),this.isActive=!1)}mount(){this.unmount=tl(Wa(this.node.current,"focus",()=>this.onFocus()),Wa(this.node.current,"blur",()=>this.onBlur()))}unmount(){}}function C_(t,e,n){const{props:i}=t;if(t.current instanceof HTMLButtonElement&&t.current.disabled)return;t.animationState&&i.whileTap&&t.animationState.setActive("whileTap",n==="Start");const r="onTap"+(n==="End"?"":n),s=i[r];s&&et.postRender(()=>s(e,rl(e)))}class tN extends Vr{mount(){const{current:e}=this.node;if(!e)return;const{globalTapTarget:n,propagate:i}=this.node.props;this.unmount=LD(e,(r,s)=>(C_(this.node,s,"Start"),(o,{success:a})=>C_(this.node,o,a?"End":"Cancel")),{useGlobalTarget:n,stopPropagation:(i==null?void 0:i.tap)===!1})}unmount(){}}const vp=new WeakMap,id=new WeakMap,nN=t=>{const e=vp.get(t.target);e&&e(t)},iN=t=>{t.forEach(nN)};function rN({root:t,...e}){const n=t||document;id.has(n)||id.set(n,{});const i=id.get(n),r=JSON.stringify(e);return i[r]||(i[r]=new IntersectionObserver(iN,{root:t,...e})),i[r]}function sN(t,e,n){const i=rN(e);return vp.set(t,n),i.observe(t),()=>{vp.delete(t),i.unobserve(t)}}const oN={some:0,all:1};class aN extends Vr{constructor(){super(...arguments),this.hasEnteredView=!1,this.isInView=!1}startObserver(){this.unmount();const{viewport:e={}}=this.node.getProps(),{root:n,margin:i,amount:r="some",once:s}=e,o={root:n?n.current:void 0,rootMargin:i,threshold:typeof r=="number"?r:oN[r]},a=l=>{const{isIntersecting:c}=l;if(this.isInView===c||(this.isInView=c,s&&!c&&this.hasEnteredView))return;c&&(this.hasEnteredView=!0),this.node.animationState&&this.node.animationState.setActive("whileInView",c);const{onViewportEnter:f,onViewportLeave:u}=this.node.getProps(),h=c?f:u;h&&h(l)};return sN(this.node.current,o,a)}mount(){this.startObserver()}update(){if(typeof IntersectionObserver>"u")return;const{props:e,prevProps:n}=this.node;["amount","margin","root"].some(lN(e,n))&&this.startObserver()}unmount(){}}function lN({viewport:t={}},{viewport:e={}}={}){return n=>t[n]!==e[n]}const cN={inView:{Feature:aN},tap:{Feature:tN},focus:{Feature:eN},hover:{Feature:JI}},uN={layout:{ProjectionNode:fE,MeasureLayout:EE}},fN={...NI,...cN,...QI,...uN},qt=RI(fN,PI),dN=50,R_=()=>({current:0,offset:[],progress:0,scrollLength:0,targetOffset:0,targetLength:0,containerLength:0,velocity:0}),hN=()=>({time:0,x:R_(),y:R_()}),pN={x:{length:"Width",position:"Left"},y:{length:"Height",position:"Top"}};function P_(t,e,n,i){const r=n[e],{length:s,position:o}=pN[e],a=r.current,l=n.time;r.current=t[`scroll${o}`],r.scrollLength=t[`scroll${s}`]-t[`client${s}`],r.offset.length=0,r.offset[0]=0,r.offset[1]=r.scrollLength,r.progress=wo(0,r.scrollLength,r.current);const c=i-l;r.velocity=c>dN?0:Pm(r.current-a,c)}function mN(t,e,n){P_(t,"x",e,n),P_(t,"y",e,n),e.time=n}function gN(t,e){const n={x:0,y:0};let i=t;for(;i&&i!==e;)if(NM(i))n.x+=i.offsetLeft,n.y+=i.offsetTop,i=i.offsetParent;else if(i.tagName==="svg"){const r=i.getBoundingClientRect();i=i.parentElement;const s=i.getBoundingClientRect();n.x+=r.left-s.left,n.y+=r.top-s.top}else if(i instanceof SVGGraphicsElement){const{x:r,y:s}=i.getBBox();n.x+=r,n.y+=s;let o=null,a=i.parentNode;for(;!o;)a.tagName==="svg"&&(o=a),a=i.parentNode;i=o}else break;return n}const _p={start:0,center:.5,end:1};function D_(t,e,n=0){let i=0;if(t in _p&&(t=_p[t]),typeof t=="string"){const r=parseFloat(t);t.endsWith("px")?i=r:t.endsWith("%")?t=r/100:t.endsWith("vw")?i=r/100*document.documentElement.clientWidth:t.endsWith("vh")?i=r/100*document.documentElement.clientHeight:t=r}return typeof t=="number"&&(i=e*t),n+i}const vN=[0,0];function _N(t,e,n,i){let r=Array.isArray(t)?t:vN,s=0,o=0;return typeof t=="number"?r=[t,t]:typeof t=="string"&&(t=t.trim(),t.includes(" ")?r=t.split(" "):r=[t,_p[t]?t:"0"]),s=D_(r[0],n,i),o=D_(r[1],e),s-o}const xN={All:[[0,0],[1,1]]},yN={x:0,y:0};function SN(t){return"getBBox"in t&&t.tagName!=="svg"?t.getBBox():{width:t.clientWidth,height:t.clientHeight}}function MN(t,e,n){const{offset:i=xN.All}=n,{target:r=t,axis:s="y"}=n,o=s==="y"?"height":"width",a=r!==t?gN(r,t):yN,l=r===t?{width:t.scrollWidth,height:t.scrollHeight}:SN(r),c={width:t.clientWidth,height:t.clientHeight};e[s].offset.length=0;let f=!e[s].interpolate;const u=i.length;for(let h=0;h<u;h++){const p=_N(i[h],c[o],l[o],a[s]);!f&&p!==e[s].interpolatorOffsets[h]&&(f=!0),e[s].offset[h]=p}f&&(e[s].interpolate=km(e[s].offset,dM(i),{clamp:!1}),e[s].interpolatorOffsets=[...e[s].offset]),e[s].progress=vi(0,1,e[s].interpolate(e[s].current))}function EN(t,e=t,n){if(n.x.targetOffset=0,n.y.targetOffset=0,e!==t){let i=e;for(;i&&i!==t;)n.x.targetOffset+=i.offsetLeft,n.y.targetOffset+=i.offsetTop,i=i.offsetParent}n.x.targetLength=e===t?e.scrollWidth:e.clientWidth,n.y.targetLength=e===t?e.scrollHeight:e.clientHeight,n.x.containerLength=t.clientWidth,n.y.containerLength=t.clientHeight}function TN(t,e,n,i={}){return{measure:r=>{EN(t,i.target,n),mN(t,n,r),(i.offset||i.target)&&MN(t,n,i)},notify:()=>e(n)}}const Os=new WeakMap,L_=new WeakMap,rd=new WeakMap,I_=new WeakMap,Zl=new WeakMap,N_=t=>t===document.scrollingElement?window:t;function TE(t,{container:e=document.scrollingElement,trackContentSize:n=!1,...i}={}){if(!e)return Dn;let r=rd.get(e);r||(r=new Set,rd.set(e,r));const s=hN(),o=TN(e,t,s,i);if(r.add(o),!Os.has(e)){const l=()=>{for(const h of r)h.measure(Wt.timestamp);et.preUpdate(c)},c=()=>{for(const h of r)h.notify()},f=()=>et.read(l);Os.set(e,f);const u=N_(e);window.addEventListener("resize",f,{passive:!0}),e!==document.documentElement&&L_.set(e,fp(e,f)),u.addEventListener("scroll",f,{passive:!0}),f()}if(n&&!Zl.has(e)){const l=Os.get(e),c={width:e.scrollWidth,height:e.scrollHeight};I_.set(e,c);const f=()=>{const h=e.scrollWidth,p=e.scrollHeight;(c.width!==h||c.height!==p)&&(l(),c.width=h,c.height=p)},u=et.read(f,!0);Zl.set(e,u)}const a=Os.get(e);return et.read(a,!1,!0),()=>{var u;ei(a);const l=rd.get(e);if(!l||(l.delete(o),l.size))return;const c=Os.get(e);Os.delete(e),c&&(N_(e).removeEventListener("scroll",c),(u=L_.get(e))==null||u(),window.removeEventListener("resize",c));const f=Zl.get(e);f&&(ei(f),Zl.delete(e)),I_.delete(e)}}const U_=new Map;function wN(t){const e={value:0},n=TE(i=>{e.value=i[t.axis].progress*100},t);return{currentTime:e,cancel:n}}function wE({source:t,container:e,...n}){const{axis:i}=n;t&&(e=t);const r=U_.get(e)??new Map;U_.set(e,r);const s=n.target??"self",o=r.get(s)??{},a=i+(n.offset??[]).join(",");return o[a]||(o[a]=!n.target&&gM()?new ScrollTimeline({source:e,axis:i}):wN({container:e,...n})),o[a]}function AN(t,e){const n=wE(e);return t.attachTimeline({timeline:e.target?void 0:n,observe:i=>(i.pause(),BM(r=>{i.time=i.iterationDuration*r},n))})}function bN(t){return t.length===2}function CN(t,e){return bN(t)?TE(n=>{t(n[e.axis].progress,n)},e):BM(t,wE(e))}function sd(t,{axis:e="y",container:n=document.scrollingElement,...i}={}){if(!n)return Dn;const r={axis:e,container:n,...i};return typeof t=="function"?CN(t,r):AN(t,r)}const RN=()=>({scrollX:di(0),scrollY:di(0),scrollXProgress:di(0),scrollYProgress:di(0)}),Ql=t=>t?!t.current:!1;function PN({container:t,target:e,...n}={}){const i=Cu(RN);i.scrollXProgress.accelerate={factory:a=>sd(a,{...n,axis:"x",container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),times:[0,1],keyframes:[0,1],ease:a=>a,duration:1},i.scrollYProgress.accelerate={factory:a=>sd(a,{...n,axis:"y",container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),times:[0,1],keyframes:[0,1],ease:a=>a,duration:1};const r=ue.useRef(null),s=ue.useRef(!1),o=ue.useCallback(()=>(r.current=sd((a,{x:l,y:c})=>{i.scrollX.set(l.current),i.scrollXProgress.set(l.progress),i.scrollY.set(c.current),i.scrollYProgress.set(c.progress)},{...n,container:(t==null?void 0:t.current)||void 0,target:(e==null?void 0:e.current)||void 0}),()=>{var a;(a=r.current)==null||a.call(r)}),[t,e,JSON.stringify(n.offset)]);return wm(()=>{if(s.current=!1,Ql(t)||Ql(e)){s.current=!0;return}else return o()},[o]),ue.useEffect(()=>{if(s.current)return Va(!Ql(t)),Va(!Ql(e)),o()},[o]),i}function AE(t){const e=Cu(()=>di(t)),{isStatic:n}=ue.useContext(Lu);if(n){const[,i]=ue.useState(t);ue.useEffect(()=>e.on("change",i),[])}return e}function bE(t,e){const n=AE(e()),i=()=>n.set(e());return i(),wm(()=>{const r=()=>et.preRender(i,!1,!0),s=t.map(o=>o.on("change",r));return()=>{s.forEach(o=>o()),ei(i)}}),n}function DN(t){ga.current=[],t();const e=bE(ga.current,t);return ga.current=void 0,e}function LN(t,e,n,i){if(typeof t=="function")return DN(t);const s=HD(e,n,i),o=Array.isArray(t)?F_(t,s):F_([t],([l])=>s(l)),a=Array.isArray(t)?void 0:t.accelerate;return a&&!a.isTransformed&&typeof e!="function"&&Array.isArray(n)&&(i==null?void 0:i.clamp)!==!1&&(o.accelerate={...a,times:e,keyframes:n,isTransformed:!0}),o}function F_(t,e){const n=Cu(()=>[]);return bE(t,()=>{n.length=0;const i=t.length;for(let r=0;r<i;r++)n[r]=t[r].get();return e(n)})}function IN(t,e={}){const{isStatic:n}=ue.useContext(Lu),i=()=>Xt(t)?t.get():t;if(n)return LN(i);const r=AE(i());return ue.useInsertionEffect(()=>GD(r,t,e),[r,JSON.stringify(e)]),r}function xp(t,e={}){return IN(t,{type:"spring",...e})}const NN={some:0,all:1};function UN(t,e,{root:n,margin:i,amount:r="some"}={}){const s=Ym(t),o=new WeakMap,a=c=>{c.forEach(f=>{const u=o.get(f.target);if(f.isIntersecting!==!!u)if(f.isIntersecting){const h=e(f.target,f);typeof h=="function"?o.set(f.target,h):l.unobserve(f.target)}else typeof u=="function"&&(u(f),o.delete(f.target))})},l=new IntersectionObserver(a,{root:n,rootMargin:i,threshold:typeof r=="number"?r:NN[r]});return s.forEach(c=>l.observe(c)),()=>l.disconnect()}function No(t,{root:e,margin:n,amount:i,once:r=!1,initial:s=!1}={}){const[o,a]=ue.useState(s);return ue.useEffect(()=>{if(!t.current||r&&o)return;const l=()=>(a(!0),r?void 0:()=>a(!1)),c={root:e&&e.current||void 0,margin:n,amount:i};return UN(t.current,l,c)},[e,t,n,r,i]),o}/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const CE=(...t)=>t.filter((e,n,i)=>!!e&&e.trim()!==""&&i.indexOf(e)===n).join(" ").trim();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const FN=t=>t.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase();/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const ON=t=>t.replace(/^([A-Z])|[\s-_]+(\w)/g,(e,n,i)=>i?i.toUpperCase():n.toLowerCase());/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const O_=t=>{const e=ON(t);return e.charAt(0).toUpperCase()+e.slice(1)};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */var kN={xmlns:"http://www.w3.org/2000/svg",width:24,height:24,viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const BN=t=>{for(const e in t)if(e.startsWith("aria-")||e==="role"||e==="title")return!0;return!1};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const VN=ue.forwardRef(({color:t="currentColor",size:e=24,strokeWidth:n=2,absoluteStrokeWidth:i,className:r="",children:s,iconNode:o,...a},l)=>ue.createElement("svg",{ref:l,...kN,width:e,height:e,stroke:t,strokeWidth:i?Number(n)*24/Number(e):n,className:CE("lucide",r),...!s&&!BN(a)&&{"aria-hidden":"true"},...a},[...o.map(([c,f])=>ue.createElement(c,f)),...Array.isArray(s)?s:[s]]));/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const an=(t,e)=>{const n=ue.forwardRef(({className:i,...r},s)=>ue.createElement(VN,{ref:s,iconNode:e,className:CE(`lucide-${FN(O_(t))}`,`lucide-${t}`,i),...r}));return n.displayName=O_(t),n};/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const zN=[["path",{d:"M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16",key:"jecpp"}],["rect",{width:"20",height:"14",x:"2",y:"6",rx:"2",key:"i6l2r4"}]],HN=an("briefcase",zN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const GN=[["path",{d:"m6 9 6 6 6-6",key:"qrunsl"}]],WN=an("chevron-down",GN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const jN=[["path",{d:"m18 16 4-4-4-4",key:"1inbqp"}],["path",{d:"m6 8-4 4 4 4",key:"15zrgr"}],["path",{d:"m14.5 4-5 16",key:"e7oirm"}]],XN=an("code-xml",jN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const YN=[["path",{d:"M4 20h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.93a2 2 0 0 1-1.66-.9l-.82-1.2A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13c0 1.1.9 2 2 2Z",key:"1fr9dc"}],["path",{d:"M8 10v4",key:"tgpxqk"}],["path",{d:"M12 10v2",key:"hh53o1"}],["path",{d:"M16 10v6",key:"1d6xys"}]],RE=an("folder-kanban",YN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const $N=[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4",key:"tonef"}],["path",{d:"M9 18c-4.51 2-5-2-7-2",key:"9comsn"}]],qN=an("github",$N);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const KN=[["circle",{cx:"12",cy:"12",r:"10",key:"1mglay"}],["path",{d:"M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20",key:"13o1zl"}],["path",{d:"M2 12h20",key:"9i4pu4"}]],ZN=an("globe",KN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const QN=[["path",{d:"M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z",key:"j76jl0"}],["path",{d:"M22 10v6",key:"1lu8f3"}],["path",{d:"M6 12.5V16a6 3 0 0 0 12 0v-3.5",key:"1r8lef"}]],JN=an("graduation-cap",QN);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const eU=[["path",{d:"M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5",key:"mvr1a0"}]],tU=an("heart",eU);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const nU=[["path",{d:"m5 8 6 6",key:"1wu5hv"}],["path",{d:"m4 14 6-6 2-3",key:"1k1g8d"}],["path",{d:"M2 5h12",key:"or177f"}],["path",{d:"M7 2h1",key:"1t2jsx"}],["path",{d:"m22 22-5-10-5 10",key:"don7ne"}],["path",{d:"M14 18h6",key:"1m8k6r"}]],iU=an("languages",nU);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const rU=[["path",{d:"M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z",key:"c2jq9f"}],["rect",{width:"4",height:"12",x:"2",y:"9",key:"mk3on5"}],["circle",{cx:"4",cy:"4",r:"2",key:"bt5ra8"}]],sU=an("linkedin",rU);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const oU=[["path",{d:"m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7",key:"132q7q"}],["rect",{x:"2",y:"4",width:"20",height:"16",rx:"2",key:"izxlao"}]],k_=an("mail",oU);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const aU=[["path",{d:"M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0",key:"1r0f0z"}],["circle",{cx:"12",cy:"10",r:"3",key:"ilqhr7"}]],lU=an("map-pin",aU);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const cU=[["path",{d:"M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401",key:"kfwtm"}]],uU=an("moon",cU);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const fU=[["path",{d:"M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384",key:"9njp5v"}]],dU=an("phone",fU);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const hU=[["path",{d:"M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z",key:"1s2grr"}],["path",{d:"M20 2v4",key:"1rf3ol"}],["path",{d:"M22 4h-4",key:"gwowj6"}],["circle",{cx:"4",cy:"20",r:"2",key:"6kqj1y"}]],pU=an("sparkles",hU);/**
 * @license lucide-react v0.563.0 - ISC
 *
 * This source code is licensed under the ISC license.
 * See the LICENSE file in the root directory of this source tree.
 */const mU=[["circle",{cx:"12",cy:"12",r:"4",key:"4exip2"}],["path",{d:"M12 2v2",key:"tus03m"}],["path",{d:"M12 20v2",key:"1lh1kg"}],["path",{d:"m4.93 4.93 1.41 1.41",key:"149t6j"}],["path",{d:"m17.66 17.66 1.41 1.41",key:"ptbguv"}],["path",{d:"M2 12h2",key:"1t8f8n"}],["path",{d:"M20 12h2",key:"1q8mjw"}],["path",{d:"m6.34 17.66-1.41 1.41",key:"1m8zz5"}],["path",{d:"m19.07 4.93-1.41 1.41",key:"1shlcs"}]],gU=an("sun",mU);function vU(t){if(typeof document>"u")return;let e=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",e.appendChild(n),n.styleSheet?n.styleSheet.cssText=t:n.appendChild(document.createTextNode(t))}const _U=t=>{switch(t){case"success":return SU;case"info":return EU;case"warning":return MU;case"error":return TU;default:return null}},xU=Array(12).fill(0),yU=({visible:t,className:e})=>ce.createElement("div",{className:["sonner-loading-wrapper",e].filter(Boolean).join(" "),"data-visible":t},ce.createElement("div",{className:"sonner-spinner"},xU.map((n,i)=>ce.createElement("div",{className:"sonner-loading-bar",key:`spinner-bar-${i}`})))),SU=ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ce.createElement("path",{fillRule:"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z",clipRule:"evenodd"})),MU=ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24",fill:"currentColor",height:"20",width:"20"},ce.createElement("path",{fillRule:"evenodd",d:"M9.401 3.003c1.155-2 4.043-2 5.197 0l7.355 12.748c1.154 2-.29 4.5-2.599 4.5H4.645c-2.309 0-3.752-2.5-2.598-4.5L9.4 3.003zM12 8.25a.75.75 0 01.75.75v3.75a.75.75 0 01-1.5 0V9a.75.75 0 01.75-.75zm0 8.25a.75.75 0 100-1.5.75.75 0 000 1.5z",clipRule:"evenodd"})),EU=ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ce.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a.75.75 0 000 1.5h.253a.25.25 0 01.244.304l-.459 2.066A1.75 1.75 0 0010.747 15H11a.75.75 0 000-1.5h-.253a.25.25 0 01-.244-.304l.459-2.066A1.75 1.75 0 009.253 9H9z",clipRule:"evenodd"})),TU=ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 20 20",fill:"currentColor",height:"20",width:"20"},ce.createElement("path",{fillRule:"evenodd",d:"M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-5a.75.75 0 01.75.75v4.5a.75.75 0 01-1.5 0v-4.5A.75.75 0 0110 5zm0 10a1 1 0 100-2 1 1 0 000 2z",clipRule:"evenodd"})),wU=ce.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"12",height:"12",viewBox:"0 0 24 24",fill:"none",stroke:"currentColor",strokeWidth:"1.5",strokeLinecap:"round",strokeLinejoin:"round"},ce.createElement("line",{x1:"18",y1:"6",x2:"6",y2:"18"}),ce.createElement("line",{x1:"6",y1:"6",x2:"18",y2:"18"})),AU=()=>{const[t,e]=ce.useState(document.hidden);return ce.useEffect(()=>{const n=()=>{e(document.hidden)};return document.addEventListener("visibilitychange",n),()=>window.removeEventListener("visibilitychange",n)},[]),t};let yp=1;class bU{constructor(){this.subscribe=e=>(this.subscribers.push(e),()=>{const n=this.subscribers.indexOf(e);this.subscribers.splice(n,1)}),this.publish=e=>{this.subscribers.forEach(n=>n(e))},this.addToast=e=>{this.publish(e),this.toasts=[...this.toasts,e]},this.create=e=>{var n;const{message:i,...r}=e,s=typeof(e==null?void 0:e.id)=="number"||((n=e.id)==null?void 0:n.length)>0?e.id:yp++,o=this.toasts.find(l=>l.id===s),a=e.dismissible===void 0?!0:e.dismissible;return this.dismissedToasts.has(s)&&this.dismissedToasts.delete(s),o?this.toasts=this.toasts.map(l=>l.id===s?(this.publish({...l,...e,id:s,title:i}),{...l,...e,id:s,dismissible:a,title:i}):l):this.addToast({title:i,...r,dismissible:a,id:s}),s},this.dismiss=e=>(e?(this.dismissedToasts.add(e),requestAnimationFrame(()=>this.subscribers.forEach(n=>n({id:e,dismiss:!0})))):this.toasts.forEach(n=>{this.subscribers.forEach(i=>i({id:n.id,dismiss:!0}))}),e),this.message=(e,n)=>this.create({...n,message:e}),this.error=(e,n)=>this.create({...n,message:e,type:"error"}),this.success=(e,n)=>this.create({...n,type:"success",message:e}),this.info=(e,n)=>this.create({...n,type:"info",message:e}),this.warning=(e,n)=>this.create({...n,type:"warning",message:e}),this.loading=(e,n)=>this.create({...n,type:"loading",message:e}),this.promise=(e,n)=>{if(!n)return;let i;n.loading!==void 0&&(i=this.create({...n,promise:e,type:"loading",message:n.loading,description:typeof n.description!="function"?n.description:void 0}));const r=Promise.resolve(e instanceof Function?e():e);let s=i!==void 0,o;const a=r.then(async c=>{if(o=["resolve",c],ce.isValidElement(c))s=!1,this.create({id:i,type:"default",message:c});else if(RU(c)&&!c.ok){s=!1;const u=typeof n.error=="function"?await n.error(`HTTP error! status: ${c.status}`):n.error,h=typeof n.description=="function"?await n.description(`HTTP error! status: ${c.status}`):n.description,g=typeof u=="object"&&!ce.isValidElement(u)?u:{message:u};this.create({id:i,type:"error",description:h,...g})}else if(c instanceof Error){s=!1;const u=typeof n.error=="function"?await n.error(c):n.error,h=typeof n.description=="function"?await n.description(c):n.description,g=typeof u=="object"&&!ce.isValidElement(u)?u:{message:u};this.create({id:i,type:"error",description:h,...g})}else if(n.success!==void 0){s=!1;const u=typeof n.success=="function"?await n.success(c):n.success,h=typeof n.description=="function"?await n.description(c):n.description,g=typeof u=="object"&&!ce.isValidElement(u)?u:{message:u};this.create({id:i,type:"success",description:h,...g})}}).catch(async c=>{if(o=["reject",c],n.error!==void 0){s=!1;const f=typeof n.error=="function"?await n.error(c):n.error,u=typeof n.description=="function"?await n.description(c):n.description,p=typeof f=="object"&&!ce.isValidElement(f)?f:{message:f};this.create({id:i,type:"error",description:u,...p})}}).finally(()=>{s&&(this.dismiss(i),i=void 0),n.finally==null||n.finally.call(n)}),l=()=>new Promise((c,f)=>a.then(()=>o[0]==="reject"?f(o[1]):c(o[1])).catch(f));return typeof i!="string"&&typeof i!="number"?{unwrap:l}:Object.assign(i,{unwrap:l})},this.custom=(e,n)=>{const i=(n==null?void 0:n.id)||yp++;return this.create({jsx:e(i),id:i,...n}),i},this.getActiveToasts=()=>this.toasts.filter(e=>!this.dismissedToasts.has(e.id)),this.subscribers=[],this.toasts=[],this.dismissedToasts=new Set}}const Mn=new bU,CU=(t,e)=>{const n=(e==null?void 0:e.id)||yp++;return Mn.addToast({title:t,...e,id:n}),n},RU=t=>t&&typeof t=="object"&&"ok"in t&&typeof t.ok=="boolean"&&"status"in t&&typeof t.status=="number",PU=CU,DU=()=>Mn.toasts,LU=()=>Mn.getActiveToasts(),ks=Object.assign(PU,{success:Mn.success,info:Mn.info,warning:Mn.warning,error:Mn.error,custom:Mn.custom,message:Mn.message,promise:Mn.promise,dismiss:Mn.dismiss,loading:Mn.loading},{getHistory:DU,getToasts:LU});vU("[data-sonner-toaster][dir=ltr],html[dir=ltr]{--toast-icon-margin-start:-3px;--toast-icon-margin-end:4px;--toast-svg-margin-start:-1px;--toast-svg-margin-end:0px;--toast-button-margin-start:auto;--toast-button-margin-end:0;--toast-close-button-start:0;--toast-close-button-end:unset;--toast-close-button-transform:translate(-35%, -35%)}[data-sonner-toaster][dir=rtl],html[dir=rtl]{--toast-icon-margin-start:4px;--toast-icon-margin-end:-3px;--toast-svg-margin-start:0px;--toast-svg-margin-end:-1px;--toast-button-margin-start:0;--toast-button-margin-end:auto;--toast-close-button-start:unset;--toast-close-button-end:0;--toast-close-button-transform:translate(35%, -35%)}[data-sonner-toaster]{position:fixed;width:var(--width);font-family:ui-sans-serif,system-ui,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,Noto Sans,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol,Noto Color Emoji;--gray1:hsl(0, 0%, 99%);--gray2:hsl(0, 0%, 97.3%);--gray3:hsl(0, 0%, 95.1%);--gray4:hsl(0, 0%, 93%);--gray5:hsl(0, 0%, 90.9%);--gray6:hsl(0, 0%, 88.7%);--gray7:hsl(0, 0%, 85.8%);--gray8:hsl(0, 0%, 78%);--gray9:hsl(0, 0%, 56.1%);--gray10:hsl(0, 0%, 52.3%);--gray11:hsl(0, 0%, 43.5%);--gray12:hsl(0, 0%, 9%);--border-radius:8px;box-sizing:border-box;padding:0;margin:0;list-style:none;outline:0;z-index:999999999;transition:transform .4s ease}@media (hover:none) and (pointer:coarse){[data-sonner-toaster][data-lifted=true]{transform:none}}[data-sonner-toaster][data-x-position=right]{right:var(--offset-right)}[data-sonner-toaster][data-x-position=left]{left:var(--offset-left)}[data-sonner-toaster][data-x-position=center]{left:50%;transform:translateX(-50%)}[data-sonner-toaster][data-y-position=top]{top:var(--offset-top)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--offset-bottom)}[data-sonner-toast]{--y:translateY(100%);--lift-amount:calc(var(--lift) * var(--gap));z-index:var(--z-index);position:absolute;opacity:0;transform:var(--y);touch-action:none;transition:transform .4s,opacity .4s,height .4s,box-shadow .2s;box-sizing:border-box;outline:0;overflow-wrap:anywhere}[data-sonner-toast][data-styled=true]{padding:16px;background:var(--normal-bg);border:1px solid var(--normal-border);color:var(--normal-text);border-radius:var(--border-radius);box-shadow:0 4px 12px rgba(0,0,0,.1);width:var(--width);font-size:13px;display:flex;align-items:center;gap:6px}[data-sonner-toast]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-y-position=top]{top:0;--y:translateY(-100%);--lift:1;--lift-amount:calc(1 * var(--gap))}[data-sonner-toast][data-y-position=bottom]{bottom:0;--y:translateY(100%);--lift:-1;--lift-amount:calc(var(--lift) * var(--gap))}[data-sonner-toast][data-styled=true] [data-description]{font-weight:400;line-height:1.4;color:#3f3f3f}[data-rich-colors=true][data-sonner-toast][data-styled=true] [data-description]{color:inherit}[data-sonner-toaster][data-sonner-theme=dark] [data-description]{color:#e8e8e8}[data-sonner-toast][data-styled=true] [data-title]{font-weight:500;line-height:1.5;color:inherit}[data-sonner-toast][data-styled=true] [data-icon]{display:flex;height:16px;width:16px;position:relative;justify-content:flex-start;align-items:center;flex-shrink:0;margin-left:var(--toast-icon-margin-start);margin-right:var(--toast-icon-margin-end)}[data-sonner-toast][data-promise=true] [data-icon]>svg{opacity:0;transform:scale(.8);transform-origin:center;animation:sonner-fade-in .3s ease forwards}[data-sonner-toast][data-styled=true] [data-icon]>*{flex-shrink:0}[data-sonner-toast][data-styled=true] [data-icon] svg{margin-left:var(--toast-svg-margin-start);margin-right:var(--toast-svg-margin-end)}[data-sonner-toast][data-styled=true] [data-content]{display:flex;flex-direction:column;gap:2px}[data-sonner-toast][data-styled=true] [data-button]{border-radius:4px;padding-left:8px;padding-right:8px;height:24px;font-size:12px;color:var(--normal-bg);background:var(--normal-text);margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end);border:none;font-weight:500;cursor:pointer;outline:0;display:flex;align-items:center;flex-shrink:0;transition:opacity .4s,box-shadow .2s}[data-sonner-toast][data-styled=true] [data-button]:focus-visible{box-shadow:0 0 0 2px rgba(0,0,0,.4)}[data-sonner-toast][data-styled=true] [data-button]:first-of-type{margin-left:var(--toast-button-margin-start);margin-right:var(--toast-button-margin-end)}[data-sonner-toast][data-styled=true] [data-cancel]{color:var(--normal-text);background:rgba(0,0,0,.08)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-styled=true] [data-cancel]{background:rgba(255,255,255,.3)}[data-sonner-toast][data-styled=true] [data-close-button]{position:absolute;left:var(--toast-close-button-start);right:var(--toast-close-button-end);top:0;height:20px;width:20px;display:flex;justify-content:center;align-items:center;padding:0;color:var(--gray12);background:var(--normal-bg);border:1px solid var(--gray4);transform:var(--toast-close-button-transform);border-radius:50%;cursor:pointer;z-index:1;transition:opacity .1s,background .2s,border-color .2s}[data-sonner-toast][data-styled=true] [data-close-button]:focus-visible{box-shadow:0 4px 12px rgba(0,0,0,.1),0 0 0 2px rgba(0,0,0,.2)}[data-sonner-toast][data-styled=true] [data-disabled=true]{cursor:not-allowed}[data-sonner-toast][data-styled=true]:hover [data-close-button]:hover{background:var(--gray2);border-color:var(--gray5)}[data-sonner-toast][data-swiping=true]::before{content:'';position:absolute;left:-100%;right:-100%;height:100%;z-index:-1}[data-sonner-toast][data-y-position=top][data-swiping=true]::before{bottom:50%;transform:scaleY(3) translateY(50%)}[data-sonner-toast][data-y-position=bottom][data-swiping=true]::before{top:50%;transform:scaleY(3) translateY(-50%)}[data-sonner-toast][data-swiping=false][data-removed=true]::before{content:'';position:absolute;inset:0;transform:scaleY(2)}[data-sonner-toast][data-expanded=true]::after{content:'';position:absolute;left:0;height:calc(var(--gap) + 1px);bottom:100%;width:100%}[data-sonner-toast][data-mounted=true]{--y:translateY(0);opacity:1}[data-sonner-toast][data-expanded=false][data-front=false]{--scale:var(--toasts-before) * 0.05 + 1;--y:translateY(calc(var(--lift-amount) * var(--toasts-before))) scale(calc(-1 * var(--scale)));height:var(--front-toast-height)}[data-sonner-toast]>*{transition:opacity .4s}[data-sonner-toast][data-x-position=right]{right:0}[data-sonner-toast][data-x-position=left]{left:0}[data-sonner-toast][data-expanded=false][data-front=false][data-styled=true]>*{opacity:0}[data-sonner-toast][data-visible=false]{opacity:0;pointer-events:none}[data-sonner-toast][data-mounted=true][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset)));height:var(--initial-height)}[data-sonner-toast][data-removed=true][data-front=true][data-swipe-out=false]{--y:translateY(calc(var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=true]{--y:translateY(calc(var(--lift) * var(--offset) + var(--lift) * -100%));opacity:0}[data-sonner-toast][data-removed=true][data-front=false][data-swipe-out=false][data-expanded=false]{--y:translateY(40%);opacity:0;transition:transform .5s,opacity .2s}[data-sonner-toast][data-removed=true][data-front=false]::before{height:calc(var(--initial-height) + 20%)}[data-sonner-toast][data-swiping=true]{transform:var(--y) translateY(var(--swipe-amount-y,0)) translateX(var(--swipe-amount-x,0));transition:none}[data-sonner-toast][data-swiped=true]{user-select:none}[data-sonner-toast][data-swipe-out=true][data-y-position=bottom],[data-sonner-toast][data-swipe-out=true][data-y-position=top]{animation-duration:.2s;animation-timing-function:ease-out;animation-fill-mode:forwards}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=left]{animation-name:swipe-out-left}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=right]{animation-name:swipe-out-right}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=up]{animation-name:swipe-out-up}[data-sonner-toast][data-swipe-out=true][data-swipe-direction=down]{animation-name:swipe-out-down}@keyframes swipe-out-left{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) - 100%));opacity:0}}@keyframes swipe-out-right{from{transform:var(--y) translateX(var(--swipe-amount-x));opacity:1}to{transform:var(--y) translateX(calc(var(--swipe-amount-x) + 100%));opacity:0}}@keyframes swipe-out-up{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) - 100%));opacity:0}}@keyframes swipe-out-down{from{transform:var(--y) translateY(var(--swipe-amount-y));opacity:1}to{transform:var(--y) translateY(calc(var(--swipe-amount-y) + 100%));opacity:0}}@media (max-width:600px){[data-sonner-toaster]{position:fixed;right:var(--mobile-offset-right);left:var(--mobile-offset-left);width:100%}[data-sonner-toaster][dir=rtl]{left:calc(var(--mobile-offset-left) * -1)}[data-sonner-toaster] [data-sonner-toast]{left:0;right:0;width:calc(100% - var(--mobile-offset-left) * 2)}[data-sonner-toaster][data-x-position=left]{left:var(--mobile-offset-left)}[data-sonner-toaster][data-y-position=bottom]{bottom:var(--mobile-offset-bottom)}[data-sonner-toaster][data-y-position=top]{top:var(--mobile-offset-top)}[data-sonner-toaster][data-x-position=center]{left:var(--mobile-offset-left);right:var(--mobile-offset-right);transform:none}}[data-sonner-toaster][data-sonner-theme=light]{--normal-bg:#fff;--normal-border:var(--gray4);--normal-text:var(--gray12);--success-bg:hsl(143, 85%, 96%);--success-border:hsl(145, 92%, 87%);--success-text:hsl(140, 100%, 27%);--info-bg:hsl(208, 100%, 97%);--info-border:hsl(221, 91%, 93%);--info-text:hsl(210, 92%, 45%);--warning-bg:hsl(49, 100%, 97%);--warning-border:hsl(49, 91%, 84%);--warning-text:hsl(31, 92%, 45%);--error-bg:hsl(359, 100%, 97%);--error-border:hsl(359, 100%, 94%);--error-text:hsl(360, 100%, 45%)}[data-sonner-toaster][data-sonner-theme=light] [data-sonner-toast][data-invert=true]{--normal-bg:#000;--normal-border:hsl(0, 0%, 20%);--normal-text:var(--gray1)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast][data-invert=true]{--normal-bg:#fff;--normal-border:var(--gray3);--normal-text:var(--gray12)}[data-sonner-toaster][data-sonner-theme=dark]{--normal-bg:#000;--normal-bg-hover:hsl(0, 0%, 12%);--normal-border:hsl(0, 0%, 20%);--normal-border-hover:hsl(0, 0%, 25%);--normal-text:var(--gray1);--success-bg:hsl(150, 100%, 6%);--success-border:hsl(147, 100%, 12%);--success-text:hsl(150, 86%, 65%);--info-bg:hsl(215, 100%, 6%);--info-border:hsl(223, 43%, 17%);--info-text:hsl(216, 87%, 65%);--warning-bg:hsl(64, 100%, 6%);--warning-border:hsl(60, 100%, 9%);--warning-text:hsl(46, 87%, 65%);--error-bg:hsl(358, 76%, 10%);--error-border:hsl(357, 89%, 16%);--error-text:hsl(358, 100%, 81%)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]{background:var(--normal-bg);border-color:var(--normal-border);color:var(--normal-text)}[data-sonner-toaster][data-sonner-theme=dark] [data-sonner-toast] [data-close-button]:hover{background:var(--normal-bg-hover);border-color:var(--normal-border-hover)}[data-rich-colors=true][data-sonner-toast][data-type=success]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=success] [data-close-button]{background:var(--success-bg);border-color:var(--success-border);color:var(--success-text)}[data-rich-colors=true][data-sonner-toast][data-type=info]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=info] [data-close-button]{background:var(--info-bg);border-color:var(--info-border);color:var(--info-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=warning] [data-close-button]{background:var(--warning-bg);border-color:var(--warning-border);color:var(--warning-text)}[data-rich-colors=true][data-sonner-toast][data-type=error]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}[data-rich-colors=true][data-sonner-toast][data-type=error] [data-close-button]{background:var(--error-bg);border-color:var(--error-border);color:var(--error-text)}.sonner-loading-wrapper{--size:16px;height:var(--size);width:var(--size);position:absolute;inset:0;z-index:10}.sonner-loading-wrapper[data-visible=false]{transform-origin:center;animation:sonner-fade-out .2s ease forwards}.sonner-spinner{position:relative;top:50%;left:50%;height:var(--size);width:var(--size)}.sonner-loading-bar{animation:sonner-spin 1.2s linear infinite;background:var(--gray11);border-radius:6px;height:8%;left:-10%;position:absolute;top:-3.9%;width:24%}.sonner-loading-bar:first-child{animation-delay:-1.2s;transform:rotate(.0001deg) translate(146%)}.sonner-loading-bar:nth-child(2){animation-delay:-1.1s;transform:rotate(30deg) translate(146%)}.sonner-loading-bar:nth-child(3){animation-delay:-1s;transform:rotate(60deg) translate(146%)}.sonner-loading-bar:nth-child(4){animation-delay:-.9s;transform:rotate(90deg) translate(146%)}.sonner-loading-bar:nth-child(5){animation-delay:-.8s;transform:rotate(120deg) translate(146%)}.sonner-loading-bar:nth-child(6){animation-delay:-.7s;transform:rotate(150deg) translate(146%)}.sonner-loading-bar:nth-child(7){animation-delay:-.6s;transform:rotate(180deg) translate(146%)}.sonner-loading-bar:nth-child(8){animation-delay:-.5s;transform:rotate(210deg) translate(146%)}.sonner-loading-bar:nth-child(9){animation-delay:-.4s;transform:rotate(240deg) translate(146%)}.sonner-loading-bar:nth-child(10){animation-delay:-.3s;transform:rotate(270deg) translate(146%)}.sonner-loading-bar:nth-child(11){animation-delay:-.2s;transform:rotate(300deg) translate(146%)}.sonner-loading-bar:nth-child(12){animation-delay:-.1s;transform:rotate(330deg) translate(146%)}@keyframes sonner-fade-in{0%{opacity:0;transform:scale(.8)}100%{opacity:1;transform:scale(1)}}@keyframes sonner-fade-out{0%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(.8)}}@keyframes sonner-spin{0%{opacity:1}100%{opacity:.15}}@media (prefers-reduced-motion){.sonner-loading-bar,[data-sonner-toast],[data-sonner-toast]>*{transition:none!important;animation:none!important}}.sonner-loader{position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);transform-origin:center;transition:opacity .2s,transform .2s}.sonner-loader[data-visible=false]{opacity:0;transform:scale(.8) translate(-50%,-50%)}");function Jl(t){return t.label!==void 0}const IU=3,NU="24px",UU="16px",B_=4e3,FU=356,OU=14,kU=45,BU=200;function Mi(...t){return t.filter(Boolean).join(" ")}function VU(t){const[e,n]=t.split("-"),i=[];return e&&i.push(e),n&&i.push(n),i}const zU=t=>{var e,n,i,r,s,o,a,l,c;const{invert:f,toast:u,unstyled:h,interacting:p,setHeights:g,visibleToasts:x,heights:m,index:d,toasts:v,expanded:_,removeToast:S,defaultRichColors:E,closeButton:A,style:b,cancelButtonStyle:R,actionButtonStyle:M,className:T="",descriptionClassName:L="",duration:H,position:N,gap:X,expandByDefault:$,classNames:k,icons:O,closeButtonAriaLabel:P="Close toast"}=t,[K,Y]=ce.useState(null),[te,be]=ce.useState(null),[he,Ie]=ce.useState(!1),[Ne,q]=ce.useState(!1),[J,oe]=ce.useState(!1),[Oe,Me]=ce.useState(!1),[Xe,xt]=ce.useState(!1),[$e,Ze]=ce.useState(0),[st,ze]=ce.useState(0),gt=ce.useRef(u.duration||H||B_),D=ce.useRef(null),rt=ce.useRef(null),tt=d===0,ft=d+1<=x,ve=u.type,C=u.dismissible!==!1,y=u.className||"",U=u.descriptionClassName||"",Q=ce.useMemo(()=>m.findIndex(z=>z.toastId===u.id)||0,[m,u.id]),ee=ce.useMemo(()=>{var z;return(z=u.closeButton)!=null?z:A},[u.closeButton,A]),Z=ce.useMemo(()=>u.duration||H||B_,[u.duration,H]),Ce=ce.useRef(0),le=ce.useRef(0),we=ce.useRef(0),Le=ce.useRef(null),[re,de]=N.split("-"),Ee=ce.useMemo(()=>m.reduce((z,ne,Pe)=>Pe>=Q?z:z+ne.height,0),[m,Q]),Re=AU(),fe=u.invert||f,Ve=ve==="loading";le.current=ce.useMemo(()=>Q*X+Ee,[Q,Ee]),ce.useEffect(()=>{gt.current=Z},[Z]),ce.useEffect(()=>{Ie(!0)},[]),ce.useEffect(()=>{const z=rt.current;if(z){const ne=z.getBoundingClientRect().height;return ze(ne),g(Pe=>[{toastId:u.id,height:ne,position:u.position},...Pe]),()=>g(Pe=>Pe.filter(Ge=>Ge.toastId!==u.id))}},[g,u.id]),ce.useLayoutEffect(()=>{if(!he)return;const z=rt.current,ne=z.style.height;z.style.height="auto";const Pe=z.getBoundingClientRect().height;z.style.height=ne,ze(Pe),g(Ge=>Ge.find(dt=>dt.toastId===u.id)?Ge.map(dt=>dt.toastId===u.id?{...dt,height:Pe}:dt):[{toastId:u.id,height:Pe,position:u.position},...Ge])},[he,u.title,u.description,g,u.id,u.jsx,u.action,u.cancel]);const I=ce.useCallback(()=>{q(!0),Ze(le.current),g(z=>z.filter(ne=>ne.toastId!==u.id)),setTimeout(()=>{S(u)},BU)},[u,S,g,le]);ce.useEffect(()=>{if(u.promise&&ve==="loading"||u.duration===1/0||u.type==="loading")return;let z;return _||p||Re?(()=>{if(we.current<Ce.current){const Ge=new Date().getTime()-Ce.current;gt.current=gt.current-Ge}we.current=new Date().getTime()})():(()=>{gt.current!==1/0&&(Ce.current=new Date().getTime(),z=setTimeout(()=>{u.onAutoClose==null||u.onAutoClose.call(u,u),I()},gt.current))})(),()=>clearTimeout(z)},[_,p,u,ve,Re,I]),ce.useEffect(()=>{u.delete&&(I(),u.onDismiss==null||u.onDismiss.call(u,u))},[I,u.delete]);function ge(){var z;if(O!=null&&O.loading){var ne;return ce.createElement("div",{className:Mi(k==null?void 0:k.loader,u==null||(ne=u.classNames)==null?void 0:ne.loader,"sonner-loader"),"data-visible":ve==="loading"},O.loading)}return ce.createElement(yU,{className:Mi(k==null?void 0:k.loader,u==null||(z=u.classNames)==null?void 0:z.loader),visible:ve==="loading"})}const ae=u.icon||(O==null?void 0:O[ve])||_U(ve);var xe,ie;return ce.createElement("li",{tabIndex:0,ref:rt,className:Mi(T,y,k==null?void 0:k.toast,u==null||(e=u.classNames)==null?void 0:e.toast,k==null?void 0:k.default,k==null?void 0:k[ve],u==null||(n=u.classNames)==null?void 0:n[ve]),"data-sonner-toast":"","data-rich-colors":(xe=u.richColors)!=null?xe:E,"data-styled":!(u.jsx||u.unstyled||h),"data-mounted":he,"data-promise":!!u.promise,"data-swiped":Xe,"data-removed":Ne,"data-visible":ft,"data-y-position":re,"data-x-position":de,"data-index":d,"data-front":tt,"data-swiping":J,"data-dismissible":C,"data-type":ve,"data-invert":fe,"data-swipe-out":Oe,"data-swipe-direction":te,"data-expanded":!!(_||$&&he),"data-testid":u.testId,style:{"--index":d,"--toasts-before":d,"--z-index":v.length-d,"--offset":`${Ne?$e:le.current}px`,"--initial-height":$?"auto":`${st}px`,...b,...u.style},onDragEnd:()=>{oe(!1),Y(null),Le.current=null},onPointerDown:z=>{z.button!==2&&(Ve||!C||(D.current=new Date,Ze(le.current),z.target.setPointerCapture(z.pointerId),z.target.tagName!=="BUTTON"&&(oe(!0),Le.current={x:z.clientX,y:z.clientY})))},onPointerUp:()=>{var z,ne,Pe;if(Oe||!C)return;Le.current=null;const Ge=Number(((z=rt.current)==null?void 0:z.style.getPropertyValue("--swipe-amount-x").replace("px",""))||0),Ke=Number(((ne=rt.current)==null?void 0:ne.style.getPropertyValue("--swipe-amount-y").replace("px",""))||0),dt=new Date().getTime()-((Pe=D.current)==null?void 0:Pe.getTime()),bt=K==="x"?Ge:Ke,ys=Math.abs(bt)/dt;if(Math.abs(bt)>=kU||ys>.11){Ze(le.current),u.onDismiss==null||u.onDismiss.call(u,u),be(K==="x"?Ge>0?"right":"left":Ke>0?"down":"up"),I(),Me(!0);return}else{var _n,ln;(_n=rt.current)==null||_n.style.setProperty("--swipe-amount-x","0px"),(ln=rt.current)==null||ln.style.setProperty("--swipe-amount-y","0px")}xt(!1),oe(!1),Y(null)},onPointerMove:z=>{var ne,Pe,Ge;if(!Le.current||!C||((ne=window.getSelection())==null?void 0:ne.toString().length)>0)return;const dt=z.clientY-Le.current.y,bt=z.clientX-Le.current.x;var ys;const _n=(ys=t.swipeDirections)!=null?ys:VU(N);!K&&(Math.abs(bt)>1||Math.abs(dt)>1)&&Y(Math.abs(bt)>Math.abs(dt)?"x":"y");let ln={x:0,y:0};const sl=xi=>1/(1.5+Math.abs(xi)/20);if(K==="y"){if(_n.includes("top")||_n.includes("bottom"))if(_n.includes("top")&&dt<0||_n.includes("bottom")&&dt>0)ln.y=dt;else{const xi=dt*sl(dt);ln.y=Math.abs(xi)<Math.abs(dt)?xi:dt}}else if(K==="x"&&(_n.includes("left")||_n.includes("right")))if(_n.includes("left")&&bt<0||_n.includes("right")&&bt>0)ln.x=bt;else{const xi=bt*sl(bt);ln.x=Math.abs(xi)<Math.abs(bt)?xi:bt}(Math.abs(ln.x)>0||Math.abs(ln.y)>0)&&xt(!0),(Pe=rt.current)==null||Pe.style.setProperty("--swipe-amount-x",`${ln.x}px`),(Ge=rt.current)==null||Ge.style.setProperty("--swipe-amount-y",`${ln.y}px`)}},ee&&!u.jsx&&ve!=="loading"?ce.createElement("button",{"aria-label":P,"data-disabled":Ve,"data-close-button":!0,onClick:Ve||!C?()=>{}:()=>{I(),u.onDismiss==null||u.onDismiss.call(u,u)},className:Mi(k==null?void 0:k.closeButton,u==null||(i=u.classNames)==null?void 0:i.closeButton)},(ie=O==null?void 0:O.close)!=null?ie:wU):null,(ve||u.icon||u.promise)&&u.icon!==null&&((O==null?void 0:O[ve])!==null||u.icon)?ce.createElement("div",{"data-icon":"",className:Mi(k==null?void 0:k.icon,u==null||(r=u.classNames)==null?void 0:r.icon)},u.promise||u.type==="loading"&&!u.icon?u.icon||ge():null,u.type!=="loading"?ae:null):null,ce.createElement("div",{"data-content":"",className:Mi(k==null?void 0:k.content,u==null||(s=u.classNames)==null?void 0:s.content)},ce.createElement("div",{"data-title":"",className:Mi(k==null?void 0:k.title,u==null||(o=u.classNames)==null?void 0:o.title)},u.jsx?u.jsx:typeof u.title=="function"?u.title():u.title),u.description?ce.createElement("div",{"data-description":"",className:Mi(L,U,k==null?void 0:k.description,u==null||(a=u.classNames)==null?void 0:a.description)},typeof u.description=="function"?u.description():u.description):null),ce.isValidElement(u.cancel)?u.cancel:u.cancel&&Jl(u.cancel)?ce.createElement("button",{"data-button":!0,"data-cancel":!0,style:u.cancelButtonStyle||R,onClick:z=>{Jl(u.cancel)&&C&&(u.cancel.onClick==null||u.cancel.onClick.call(u.cancel,z),I())},className:Mi(k==null?void 0:k.cancelButton,u==null||(l=u.classNames)==null?void 0:l.cancelButton)},u.cancel.label):null,ce.isValidElement(u.action)?u.action:u.action&&Jl(u.action)?ce.createElement("button",{"data-button":!0,"data-action":!0,style:u.actionButtonStyle||M,onClick:z=>{Jl(u.action)&&(u.action.onClick==null||u.action.onClick.call(u.action,z),!z.defaultPrevented&&I())},className:Mi(k==null?void 0:k.actionButton,u==null||(c=u.classNames)==null?void 0:c.actionButton)},u.action.label):null)};function V_(){if(typeof window>"u"||typeof document>"u")return"ltr";const t=document.documentElement.getAttribute("dir");return t==="auto"||!t?window.getComputedStyle(document.documentElement).direction:t}function HU(t,e){const n={};return[t,e].forEach((i,r)=>{const s=r===1,o=s?"--mobile-offset":"--offset",a=s?UU:NU;function l(c){["top","right","bottom","left"].forEach(f=>{n[`${o}-${f}`]=typeof c=="number"?`${c}px`:c})}typeof i=="number"||typeof i=="string"?l(i):typeof i=="object"?["top","right","bottom","left"].forEach(c=>{i[c]===void 0?n[`${o}-${c}`]=a:n[`${o}-${c}`]=typeof i[c]=="number"?`${i[c]}px`:i[c]}):l(a)}),n}const GU=ce.forwardRef(function(e,n){const{id:i,invert:r,position:s="bottom-right",hotkey:o=["altKey","KeyT"],expand:a,closeButton:l,className:c,offset:f,mobileOffset:u,theme:h="light",richColors:p,duration:g,style:x,visibleToasts:m=IU,toastOptions:d,dir:v=V_(),gap:_=OU,icons:S,containerAriaLabel:E="Notifications"}=e,[A,b]=ce.useState([]),R=ce.useMemo(()=>i?A.filter(he=>he.toasterId===i):A.filter(he=>!he.toasterId),[A,i]),M=ce.useMemo(()=>Array.from(new Set([s].concat(R.filter(he=>he.position).map(he=>he.position)))),[R,s]),[T,L]=ce.useState([]),[H,N]=ce.useState(!1),[X,$]=ce.useState(!1),[k,O]=ce.useState(h!=="system"?h:typeof window<"u"&&window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light"),P=ce.useRef(null),K=o.join("+").replace(/Key/g,"").replace(/Digit/g,""),Y=ce.useRef(null),te=ce.useRef(!1),be=ce.useCallback(he=>{b(Ie=>{var Ne;return(Ne=Ie.find(q=>q.id===he.id))!=null&&Ne.delete||Mn.dismiss(he.id),Ie.filter(({id:q})=>q!==he.id)})},[]);return ce.useEffect(()=>Mn.subscribe(he=>{if(he.dismiss){requestAnimationFrame(()=>{b(Ie=>Ie.map(Ne=>Ne.id===he.id?{...Ne,delete:!0}:Ne))});return}setTimeout(()=>{aw.flushSync(()=>{b(Ie=>{const Ne=Ie.findIndex(q=>q.id===he.id);return Ne!==-1?[...Ie.slice(0,Ne),{...Ie[Ne],...he},...Ie.slice(Ne+1)]:[he,...Ie]})})})}),[A]),ce.useEffect(()=>{if(h!=="system"){O(h);return}if(h==="system"&&(window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?O("dark"):O("light")),typeof window>"u")return;const he=window.matchMedia("(prefers-color-scheme: dark)");try{he.addEventListener("change",({matches:Ie})=>{O(Ie?"dark":"light")})}catch{he.addListener(({matches:Ne})=>{try{O(Ne?"dark":"light")}catch(q){console.error(q)}})}},[h]),ce.useEffect(()=>{A.length<=1&&N(!1)},[A]),ce.useEffect(()=>{const he=Ie=>{var Ne;if(o.every(oe=>Ie[oe]||Ie.code===oe)){var J;N(!0),(J=P.current)==null||J.focus()}Ie.code==="Escape"&&(document.activeElement===P.current||(Ne=P.current)!=null&&Ne.contains(document.activeElement))&&N(!1)};return document.addEventListener("keydown",he),()=>document.removeEventListener("keydown",he)},[o]),ce.useEffect(()=>{if(P.current)return()=>{Y.current&&(Y.current.focus({preventScroll:!0}),Y.current=null,te.current=!1)}},[P.current]),ce.createElement("section",{ref:n,"aria-label":`${E} ${K}`,tabIndex:-1,"aria-live":"polite","aria-relevant":"additions text","aria-atomic":"false",suppressHydrationWarning:!0},M.map((he,Ie)=>{var Ne;const[q,J]=he.split("-");return R.length?ce.createElement("ol",{key:he,dir:v==="auto"?V_():v,tabIndex:-1,ref:P,className:c,"data-sonner-toaster":!0,"data-sonner-theme":k,"data-y-position":q,"data-x-position":J,style:{"--front-toast-height":`${((Ne=T[0])==null?void 0:Ne.height)||0}px`,"--width":`${FU}px`,"--gap":`${_}px`,...x,...HU(f,u)},onBlur:oe=>{te.current&&!oe.currentTarget.contains(oe.relatedTarget)&&(te.current=!1,Y.current&&(Y.current.focus({preventScroll:!0}),Y.current=null))},onFocus:oe=>{oe.target instanceof HTMLElement&&oe.target.dataset.dismissible==="false"||te.current||(te.current=!0,Y.current=oe.relatedTarget)},onMouseEnter:()=>N(!0),onMouseMove:()=>N(!0),onMouseLeave:()=>{X||N(!1)},onDragEnd:()=>N(!1),onPointerDown:oe=>{oe.target instanceof HTMLElement&&oe.target.dataset.dismissible==="false"||$(!0)},onPointerUp:()=>$(!1)},R.filter(oe=>!oe.position&&Ie===0||oe.position===he).map((oe,Oe)=>{var Me,Xe;return ce.createElement(zU,{key:oe.id,icons:S,index:Oe,toast:oe,defaultRichColors:p,duration:(Me=d==null?void 0:d.duration)!=null?Me:g,className:d==null?void 0:d.className,descriptionClassName:d==null?void 0:d.descriptionClassName,invert:r,visibleToasts:m,closeButton:(Xe=d==null?void 0:d.closeButton)!=null?Xe:l,interacting:X,position:he,style:d==null?void 0:d.style,unstyled:d==null?void 0:d.unstyled,classNames:d==null?void 0:d.classNames,cancelButtonStyle:d==null?void 0:d.cancelButtonStyle,actionButtonStyle:d==null?void 0:d.actionButtonStyle,closeButtonAriaLabel:d==null?void 0:d.closeButtonAriaLabel,removeToast:be,toasts:R.filter(xt=>xt.position==oe.position),heights:T.filter(xt=>xt.position==oe.position),setHeights:L,expandByDefault:a,gap:_,expanded:H,swipeDirections:e.swipeDirections})})):null}))});function WU({onEnter:t}){const[e,n]=ue.useState(!1),i=ue.useRef(null);return ue.useEffect(()=>{const r=i.current;if(!r)return;const s=window.innerWidth<=768,o=new gA,a=new Yn(75,window.innerWidth/window.innerHeight,.1,1e3),l=new E2({canvas:r,alpha:!0});l.setSize(window.innerWidth,window.innerHeight),l.setPixelRatio(Math.min(window.devicePixelRatio,2));const c=s?1500:3e3,f=new _i,u=new Float32Array(c*3),h=new Float32Array(c*3),p=new Float32Array(c),g=new Float32Array(c),x=new Float32Array(c*3),m=[[1,.2,.2],[1,.4,0],[.8,0,0]];for(let N=0;N<c;N++){u[N*3]=(Math.random()-.5)*80,u[N*3+1]=(Math.random()-.5)*80,u[N*3+2]=(Math.random()-.5)*80;const X=m[Math.floor(Math.random()*m.length)];h[N*3]=X[0],h[N*3+1]=X[1],h[N*3+2]=X[2],p[N]=Math.random()*.15+.05,g[N]=.85,x[N*3]=(Math.random()-.5)*.015,x[N*3+1]=(Math.random()-.5)*.015,x[N*3+2]=(Math.random()-.5)*.015}f.setAttribute("position",new wn(u,3)),f.setAttribute("color",new wn(h,3)),f.setAttribute("size",new wn(p,1)),f.setAttribute("opacity",new wn(g,1));const d=new DS({size:.15,vertexColors:!0,transparent:!0,opacity:.85,blending:Jd,depthWrite:!1}),v=new SA(f,d);o.add(v);let _=0,S=0;const E=N=>{_=N.clientX/window.innerWidth*2-1,S=-(N.clientY/window.innerHeight)*2+1},A=N=>{N.touches.length>0&&(_=N.touches[0].clientX/window.innerWidth*2-1,S=-(N.touches[0].clientY/window.innerHeight)*2+1)};s?window.addEventListener("touchmove",A):window.addEventListener("mousemove",E),a.position.z=30;const b=new bA;let R,M=!1,T=0;const L=()=>{R=requestAnimationFrame(L);const N=b.getDelta(),X=b.getElapsedTime();r.dataset.triggerRush==="true"&&!M&&(M=!0,T=X);const $=f.attributes.position.array,k=f.attributes.size.array,O=f.attributes.opacity.array;if(M&&X-T<2.5)for(let P=0;P<c;P++)x[P*3+2]+=(Math.random()*.15+.6)*N*60,$[P*3+2]+=x[P*3+2]*N*8,k[P]=Math.min(k[P]+N*1.2,.6),$[P*3+2]>25&&(O[P]=Math.max(O[P]-N*1.5,0)),$[P*3+2]>30&&($[P*3+2]=-50,x[P*3+2]=0,k[P]=Math.random()*.15+.05,O[P]=.85);else for(let P=0;P<c;P++){$[P*3]+=x[P*3]*N*60,$[P*3+1]+=x[P*3+1]*N*60,$[P*3+2]+=x[P*3+2]*N*60;const K=$[P*3]-_*40,Y=$[P*3+1]-S*40;Math.sqrt(K*K+Y*Y)<8&&(x[P*3]-=K*.002*N*60,x[P*3+1]-=Y*.002*N*60),x[P*3]*=.995,x[P*3+1]*=.995,x[P*3+2]*=.995,Math.abs($[P*3])>40&&(x[P*3]*=-.8),Math.abs($[P*3+1])>40&&(x[P*3+1]*=-.8),Math.abs($[P*3+2])>40&&(x[P*3+2]*=-.8),k[P]=.1+Math.sin(X*.5+P)*.03,O[P]=.85}f.attributes.position.needsUpdate=!0,f.attributes.size.needsUpdate=!0,f.attributes.opacity.needsUpdate=!0,v.rotation.y+=3e-4*N*60,l.render(o,a)};L();const H=()=>{a.aspect=window.innerWidth/window.innerHeight,a.updateProjectionMatrix(),l.setSize(window.innerWidth,window.innerHeight)};return window.addEventListener("resize",H),()=>{window.removeEventListener("resize",H),window.removeEventListener("mousemove",E),window.removeEventListener("touchmove",A),cancelAnimationFrame(R),l.dispose(),f.dispose()}},[]),V.jsxs("div",{className:"splash-overlay-webgl",children:[V.jsx("canvas",{ref:i,id:"webgl-bg"}),V.jsx("div",{className:"center-glow"}),V.jsxs("div",{className:`splash-content ${e?"hidden":""}`,children:[V.jsx("h1",{className:"splash-title-webgl",children:"Juan Torales"}),V.jsx("p",{className:"splash-sub-webgl",children:"Desarrollador de Software Multiplataforma"}),V.jsx("button",{className:"splash-btn-webgl",onClick:()=>{n(!0),i.current&&(i.current.dataset.rushing="true",i.current.dataset.triggerRush="true"),setTimeout(t,2e3)},children:"Ver Portafolio"})]})]})}function ec({children:t,className:e,id:n,delay:i=0}){const r=ue.useRef(null),s=No(r,{once:!0,margin:"-60px"});return V.jsx(qt.section,{ref:r,id:n,className:e,initial:{opacity:0,y:40,filter:"blur(8px)"},animate:s?{opacity:1,y:0,filter:"blur(0px)"}:{},transition:{duration:.8,delay:i,ease:[.25,.46,.45,.94]},children:t})}function od({name:t,level:e,levelClass:n}){const i=ue.useRef(null),r=No(i,{once:!0});return V.jsxs("div",{className:`skill ${n}`,ref:i,children:[V.jsxs("div",{className:"skill-row",children:[V.jsx("span",{className:"skill-name",children:t}),V.jsxs("span",{className:"skill-level",children:[e,"%"]})]}),V.jsx("div",{className:"bar",children:V.jsx(qt.div,{className:"bar-fill",initial:{width:0},animate:r?{width:`${e}%`}:{},transition:{duration:1.4,ease:[.25,.46,.45,.94]}})})]})}function jU({text:t}){const[e,n]=ue.useState(""),i=ue.useRef(null),r=No(i,{once:!0});return ue.useEffect(()=>{if(!r)return;let s=0;const o=setInterval(()=>{n(t.slice(0,s)),s++,s>t.length&&clearInterval(o)},20);return()=>clearInterval(o)},[t,r]),V.jsxs("span",{ref:i,children:[e,r&&e.length<t.length&&V.jsx("span",{className:"cursor",children:"|"})]})}function XU({job:t,index:e}){const n=ue.useRef(null),i=No(n,{once:!0,margin:"-40px"});return V.jsxs(qt.article,{ref:n,className:"timeline-item",initial:{opacity:0,x:-20,filter:"blur(6px)"},animate:i?{opacity:1,x:0,filter:"blur(0px)"}:{},transition:{duration:.7,delay:e*.12},children:[V.jsx("div",{className:"dot-wrapper",children:V.jsx("div",{className:"dot"})}),V.jsxs("div",{className:"content",children:[V.jsxs("div",{className:"job-header",children:[V.jsx("h3",{children:t.role}),V.jsx("span",{className:"company",children:t.company})]}),V.jsx("span",{className:"meta",children:t.period}),V.jsx("ul",{children:t.bullets.map((r,s)=>V.jsx(qt.li,{initial:{opacity:0,x:-8},animate:i?{opacity:1,x:0}:{},transition:{delay:.3+s*.08,duration:.4},children:r},s))})]})]})}function YU({project:t,index:e}){const n=ue.useRef(null),i=No(n,{once:!0,margin:"-30px"});return V.jsxs(qt.a,{ref:n,className:"project-card",href:t.href,target:"_blank",rel:"noopener noreferrer",initial:{opacity:0,y:30,filter:"blur(6px)"},animate:i?{opacity:1,y:0,filter:"blur(0px)"}:{},transition:{duration:.6,delay:e*.1},whileHover:{y:-6,transition:{duration:.25}},children:[V.jsx("div",{className:"card-accent"}),V.jsxs("div",{className:"card-content",children:[V.jsx("div",{className:"card-icon",children:V.jsx(RE,{size:20})}),V.jsx("h3",{children:t.title}),V.jsx("p",{children:t.desc}),t.tags&&V.jsx("div",{className:"project-tags",children:t.tags.map((r,s)=>V.jsx("span",{className:"project-tag",children:r},s))})]})]})}function tc({icon:t,title:e}){const n=ue.useRef(null),i=No(n,{once:!0});return V.jsxs(qt.div,{ref:n,className:"section-header",initial:{opacity:0,x:-16,filter:"blur(4px)"},animate:i?{opacity:1,x:0,filter:"blur(0px)"}:{},transition:{duration:.5},children:[V.jsx("div",{className:"section-icon",children:V.jsx(t,{size:18})}),V.jsx("h2",{children:e})]})}function $U(){const t=xp(0,{stiffness:500,damping:28}),e=xp(0,{stiffness:500,damping:28});return ce.useEffect(()=>{const n=({clientX:i,clientY:r})=>{t.set(i),e.set(r)};return window.addEventListener("mousemove",n),()=>window.removeEventListener("mousemove",n)},[t,e]),V.jsx(qt.div,{className:"cursor-spotlight",style:{left:t,top:e,translateX:"-50%",translateY:"-50%"}})}function qU(){var p,g,x;const[t,e]=ue.useState(!1),[n,i]=ue.useState(!0),r=ue.useRef(null),{scrollYProgress:s}=PN(),o=xp(s,{stiffness:100,damping:30,restDelta:.001}),a=m=>{const d=m.toLowerCase();return d.includes("email")?V.jsx(k_,{size:15}):d.includes("tel")||d.includes("phone")?V.jsx(dU,{size:15}):d.includes("linkedin")?V.jsx(sU,{size:15}):d.includes("github")?V.jsx(qN,{size:15}):V.jsx(ZN,{size:15})},l=1,c=(((p=at.skillsAdvanced)==null?void 0:p.length)||0)+(((g=at.skillsIntermediate)==null?void 0:g.length)||0)+(((x=at.skillsBasic)==null?void 0:x.length)||0),f=ue.useCallback(async()=>{ks.loading("Generando PDF...",{id:"pdf"});try{const m=(await uw(async()=>{const{default:E}=await import("./html2pdf-C8cmUYGZ.js").then(A=>A.h);return{default:E}},[])).default,d=r.current;if(!d)return;const v=d.closest(".app"),_=!v.classList.contains("light");v.classList.add("light"),await new Promise(E=>setTimeout(E,600));const S={margin:[6,0,6,0],filename:`${at.name.replace(/\s+/g,"-")}-CV.pdf`,image:{type:"jpeg",quality:.98},html2canvas:{scale:2,useCORS:!0,logging:!1,windowWidth:1200},jsPDF:{unit:"mm",format:"a4",orientation:"portrait"},pagebreak:{mode:["avoid-all","css","legacy"]}};await m().set(S).from(d).save(),_&&v.classList.remove("light"),ks.success("¡PDF descargado!",{id:"pdf"})}catch(m){console.error(m),ks.error("Error al generar PDF",{id:"pdf"})}},[]);ue.useCallback(()=>{const m=new Blob([JSON.stringify(at,null,2)],{type:"application/json"}),d=URL.createObjectURL(m),v=document.createElement("a");v.href=d,v.download=`${at.name.replace(/\s+/g,"-")}-resume.json`,document.body.appendChild(v),v.click(),v.remove(),URL.revokeObjectURL(d),ks.success("JSON descargado")},[]);const u=ue.useCallback(()=>{e(m=>!m),ks(t?"Modo oscuro":"Modo claro",{duration:1500})},[t]),h=(m,d)=>{navigator.clipboard.writeText(m),ks.success(`${d} copiado al portapapeles`)};return ce.useEffect(()=>{const m=d=>{d.target.tagName==="INPUT"||d.target.tagName==="TEXTAREA"||((d.key==="t"||d.key==="T")&&u(),(d.key==="p"||d.key==="P")&&f())};return window.addEventListener("keydown",m),()=>window.removeEventListener("keydown",m)},[u,f]),at.name.split(" ").map(m=>m[0]).join("").slice(0,2),V.jsxs("div",{className:`app ${t?"light":"dark"}`,children:[n&&V.jsx(WU,{onEnter:()=>i(!1)}),V.jsx(GU,{position:"bottom-right",toastOptions:{style:{background:t?"#fff":"#1e293b",color:t?"#111":"#f1f5f9",border:`1px solid ${t?"#e5e7eb":"rgba(255,255,255,0.08)"}`,borderRadius:"12px",fontSize:"0.88rem"}}}),V.jsx($U,{}),V.jsx(qt.div,{className:"scroll-progress",style:{scaleX:o}}),V.jsx("a",{className:"skip-link",href:"#content",children:"Saltar al contenido"}),V.jsx(qt.nav,{className:"navbar",initial:{y:-64,opacity:0},animate:{y:0,opacity:1},transition:{duration:.6,ease:"easeOut"},children:V.jsxs("div",{className:"navbar-inner",children:[V.jsx("a",{href:"#",className:"nav-brand",children:V.jsx("div",{className:"nav-brand-text",children:"Portafolio Web"})}),V.jsxs("ul",{className:"nav-links",children:[V.jsx("li",{children:V.jsx("a",{href:"#about",children:"Sobre mí"})}),V.jsx("li",{children:V.jsx("a",{href:"#experience",children:"Experiencia"})}),V.jsx("li",{children:V.jsx("a",{href:"#projects",children:"Proyectos"})}),V.jsx("li",{children:V.jsx("a",{href:"#education",children:"Educación"})})]}),V.jsx("div",{className:"nav-actions controls",children:V.jsx("button",{className:"control-btn",onClick:u,title:"Tema (T)",children:t?V.jsx(uU,{size:14}):V.jsx(gU,{size:14})})})]})}),V.jsxs("div",{ref:r,className:"cv-wrapper",children:[V.jsxs(qt.aside,{className:"sidebar",initial:{opacity:0,x:-40,filter:"blur(10px)"},animate:{opacity:1,x:0,filter:"blur(0px)"},transition:{duration:.8,delay:.2},children:[V.jsxs(qt.div,{className:"profile-section",initial:{opacity:0,scale:.9},animate:{opacity:1,scale:1},transition:{duration:.6,delay:.3},children:[V.jsxs("div",{className:"photo-ring",children:[V.jsx("div",{className:"photo",children:V.jsx("img",{src:at.photo,alt:at.name})}),V.jsx("div",{className:"status-badge",title:"Disponible para trabajar"})]}),V.jsx("h1",{className:"name",children:at.name}),V.jsx("p",{className:"title",children:at.title}),V.jsxs("p",{className:"location",children:[V.jsx(lU,{size:13}),at.location]}),V.jsxs("div",{className:"quick-stats",children:[V.jsxs("div",{className:"stat",children:[V.jsxs("strong",{children:[l,"+"]}),V.jsx("span",{children:"Años Exp."})]}),V.jsxs("div",{className:"stat",children:[V.jsx("strong",{children:at.projects.length}),V.jsx("span",{children:"Proyectos"})]}),V.jsxs("div",{className:"stat",children:[V.jsx("strong",{children:c}),V.jsx("span",{children:"Skills"})]})]})]}),V.jsxs(qt.section,{className:"sidebar-block contact-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.4,duration:.5},children:[V.jsxs("h4",{children:[V.jsx(k_,{size:13})," Contacto"]}),V.jsx("div",{className:"contact-list",children:at.contact.map((m,d)=>V.jsxs(qt.a,{href:m.label==="Email"?"#":m.href,onClick:v=>{m.label==="Email"&&(v.preventDefault(),h(m.value,"Email"))},target:m.label==="Email"?"_self":"_blank",rel:"noopener noreferrer",className:"contact-item",initial:{opacity:0,x:-10},animate:{opacity:1,x:0},transition:{delay:.45+d*.07},whileHover:{x:4},style:{cursor:"pointer"},children:[V.jsx("div",{className:"icon-box",children:a(m.label)}),V.jsxs("div",{className:"contact-info",children:[V.jsx("span",{className:"label",children:m.label}),V.jsx("span",{className:"value",children:m.value})]})]},d))})]}),at.languages&&V.jsxs(qt.section,{className:"sidebar-block languages-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.5,duration:.5},children:[V.jsxs("h4",{children:[V.jsx(iU,{size:13})," Idiomas"]}),V.jsx("div",{className:"contact-list",children:at.languages.map((m,d)=>V.jsx("div",{className:"contact-item",style:{paddingLeft:0},children:V.jsxs("div",{className:"contact-info",children:[V.jsx("span",{className:"label",style:{color:"var(--text-primary)",fontSize:"0.85rem"},children:m.name}),V.jsx("span",{className:"value",style:{color:"var(--text-secondary)",fontSize:"0.75rem",fontWeight:400},children:m.level})]})},d))})]}),V.jsxs(qt.section,{className:"sidebar-block skills-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.55,duration:.5},children:[V.jsxs("h4",{children:[V.jsx(XN,{size:13})," Habilidades Técnicas"]}),at.skillsAdvanced&&V.jsxs(V.Fragment,{children:[V.jsx("h5",{children:"Avanzadas"}),V.jsx("div",{className:"skills-grid",children:at.skillsAdvanced.map((m,d)=>V.jsx(od,{name:m.name,level:m.level,levelClass:"skill-advanced"},`a-${d}`))})]}),at.skillsIntermediate&&V.jsxs(V.Fragment,{children:[V.jsx("h5",{children:"Intermedias"}),V.jsx("div",{className:"skills-grid",children:at.skillsIntermediate.map((m,d)=>V.jsx(od,{name:m.name,level:m.level,levelClass:"skill-intermediate"},`i-${d}`))})]}),at.skillsBasic&&V.jsxs(V.Fragment,{children:[V.jsx("h5",{children:"Básicas"}),V.jsx("div",{className:"skills-grid",children:at.skillsBasic.map((m,d)=>V.jsx(od,{name:m.name,level:m.level,levelClass:"skill-basic"},`b-${d}`))})]})]}),V.jsxs(qt.section,{className:"sidebar-block soft-skills-section",initial:{opacity:0,y:20},animate:{opacity:1,y:0},transition:{delay:.65,duration:.5},children:[V.jsxs("h4",{children:[V.jsx(tU,{size:13})," Habilidades Blandas"]}),V.jsx("div",{className:"badges-container",children:at.softSkills.map((m,d)=>V.jsx(qt.span,{className:"badge",initial:{opacity:0,scale:.8},animate:{opacity:1,scale:1},transition:{delay:.7+d*.05,type:"spring",stiffness:300},whileHover:{scale:1.08,y:-2},children:m},d))})]})]}),V.jsxs("main",{id:"content",className:"main",children:[V.jsxs(ec,{className:"hero-section",id:"about",children:[V.jsx(tc,{icon:pU,title:"Acerca de Mí"}),V.jsx("p",{className:"hero-text",children:V.jsx(jU,{text:at.summary||at.headline})}),V.jsx("div",{className:"hero-actions",children:V.jsxs("a",{className:"btn-ghost",href:"#experience",children:["Ver experiencia ",V.jsx(WN,{size:15})]})})]}),V.jsxs(ec,{className:"experience-section",id:"experience",delay:.1,children:[V.jsx(tc,{icon:HN,title:"Experiencia Profesional"}),V.jsx("div",{className:"timeline",children:at.experience.map((m,d)=>V.jsx(XU,{job:m,index:d},d))})]}),V.jsxs(ec,{className:"projects-section",id:"projects",delay:.1,children:[V.jsx(tc,{icon:RE,title:"Proyectos Escolares"}),V.jsx("div",{className:"cards-grid",children:at.projects.map((m,d)=>V.jsx(YU,{project:m,index:d},d))})]}),V.jsxs(ec,{className:"education-section",id:"education",delay:.1,children:[V.jsx(tc,{icon:JN,title:"Formación Académica"}),V.jsx("div",{className:"edu-card",children:V.jsx("p",{children:at.education})})]}),V.jsx("footer",{className:"cv-footer",children:V.jsxs("p",{children:["© ",new Date().getFullYear()," ",at.name]})})]})]})]})}tS(document.getElementById("root")).render(V.jsx(ce.StrictMode,{children:V.jsx(qU,{})}));export{KU as c,z_ as g};
