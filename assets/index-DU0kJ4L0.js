function Z(p){return p&&p.__esModule&&Object.prototype.hasOwnProperty.call(p,"default")?p.default:p}var m={exports:{}},o={};/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N;function J(){if(N)return o;N=1;var p=Symbol.for("react.transitional.element"),M=Symbol.for("react.portal"),k=Symbol.for("react.fragment"),x=Symbol.for("react.strict_mode"),I=Symbol.for("react.profiler"),L=Symbol.for("react.consumer"),U=Symbol.for("react.context"),b=Symbol.for("react.forward_ref"),q=Symbol.for("react.suspense"),D=Symbol.for("react.memo"),C=Symbol.for("react.lazy"),w=Symbol.iterator;function z(t){return t===null||typeof t!="object"?null:(t=w&&t[w]||t["@@iterator"],typeof t=="function"?t:null)}var A={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},S=Object.assign,g={};function _(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||A}_.prototype.isReactComponent={},_.prototype.setState=function(t,e){if(typeof t!="object"&&typeof t!="function"&&t!=null)throw Error("takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,t,e,"setState")},_.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")};function h(){}h.prototype=_.prototype;function y(t,e,n){this.props=t,this.context=e,this.refs=g,this.updater=n||A}var v=y.prototype=new h;v.constructor=y,S(v,_.prototype),v.isPureReactComponent=!0;var O=Array.isArray,i={H:null,A:null,T:null,S:null},j=Object.prototype.hasOwnProperty;function R(t,e,n,r,s,f){return n=f.ref,{$$typeof:p,type:t,key:e,ref:n!==void 0?n:null,props:f}}function G(t,e){return R(t.type,e,void 0,void 0,void 0,t.props)}function d(t){return typeof t=="object"&&t!==null&&t.$$typeof===p}function K(t){var e={"=":"=0",":":"=2"};return"$"+t.replace(/[=:]/g,function(n){return e[n]})}var H=/\/+/g;function T(t,e){return typeof t=="object"&&t!==null&&t.key!=null?K(""+t.key):e.toString(36)}function P(){}function B(t){switch(t.status){case"fulfilled":return t.value;case"rejected":throw t.reason;default:switch(typeof t.status=="string"?t.then(P,P):(t.status="pending",t.then(function(e){t.status==="pending"&&(t.status="fulfilled",t.value=e)},function(e){t.status==="pending"&&(t.status="rejected",t.reason=e)})),t.status){case"fulfilled":return t.value;case"rejected":throw t.reason}}throw t}function l(t,e,n,r,s){var f=typeof t;(f==="undefined"||f==="boolean")&&(t=null);var u=!1;if(t===null)u=!0;else switch(f){case"bigint":case"string":case"number":u=!0;break;case"object":switch(t.$$typeof){case p:case M:u=!0;break;case C:return u=t._init,l(u(t._payload),e,n,r,s)}}if(u)return s=s(t),u=r===""?"."+T(t,0):r,O(s)?(n="",u!=null&&(n=u.replace(H,"$&/")+"/"),l(s,e,n,"",function(X){return X})):s!=null&&(d(s)&&(s=G(s,n+(s.key==null||t&&t.key===s.key?"":(""+s.key).replace(H,"$&/")+"/")+u)),e.push(s)),1;u=0;var a=r===""?".":r+":";if(O(t))for(var c=0;c<t.length;c++)r=t[c],f=a+T(r,c),u+=l(r,e,n,f,s);else if(c=z(t),typeof c=="function")for(t=c.call(t),c=0;!(r=t.next()).done;)r=r.value,f=a+T(r,c++),u+=l(r,e,n,f,s);else if(f==="object"){if(typeof t.then=="function")return l(B(t),e,n,r,s);throw e=String(t),Error("Objects are not valid as a React child (found: "+(e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e)+"). If you meant to render a collection of children, use an array instead.")}return u}function E(t,e,n){if(t==null)return t;var r=[],s=0;return l(t,r,"","",function(f){return e.call(n,f,s++)}),r}function W(t){if(t._status===-1){var e=t._result;e=e(),e.then(function(n){(t._status===0||t._status===-1)&&(t._status=1,t._result=n)},function(n){(t._status===0||t._status===-1)&&(t._status=2,t._result=n)}),t._status===-1&&(t._status=0,t._result=e)}if(t._status===1)return t._result.default;throw t._result}var $=typeof reportError=="function"?reportError:function(t){if(typeof window=="object"&&typeof window.ErrorEvent=="function"){var e=new window.ErrorEvent("error",{bubbles:!0,cancelable:!0,message:typeof t=="object"&&t!==null&&typeof t.message=="string"?String(t.message):String(t),error:t});if(!window.dispatchEvent(e))return}else if(typeof process=="object"&&typeof process.emit=="function"){process.emit("uncaughtException",t);return}console.error(t)};function Q(){}return o.Children={map:E,forEach:function(t,e,n){E(t,function(){e.apply(this,arguments)},n)},count:function(t){var e=0;return E(t,function(){e++}),e},toArray:function(t){return E(t,function(e){return e})||[]},only:function(t){if(!d(t))throw Error("React.Children.only expected to receive a single React element child.");return t}},o.Component=_,o.Fragment=k,o.Profiler=I,o.PureComponent=y,o.StrictMode=x,o.Suspense=q,o.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE=i,o.act=function(){throw Error("act(...) is not supported in production builds of React.")},o.cache=function(t){return function(){return t.apply(null,arguments)}},o.cloneElement=function(t,e,n){if(t==null)throw Error("The argument must be a React element, but you passed "+t+".");var r=S({},t.props),s=t.key,f=void 0;if(e!=null)for(u in e.ref!==void 0&&(f=void 0),e.key!==void 0&&(s=""+e.key),e)!j.call(e,u)||u==="key"||u==="__self"||u==="__source"||u==="ref"&&e.ref===void 0||(r[u]=e[u]);var u=arguments.length-2;if(u===1)r.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];r.children=a}return R(t.type,s,void 0,void 0,f,r)},o.createContext=function(t){return t={$$typeof:U,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null},t.Provider=t,t.Consumer={$$typeof:L,_context:t},t},o.createElement=function(t,e,n){var r,s={},f=null;if(e!=null)for(r in e.key!==void 0&&(f=""+e.key),e)j.call(e,r)&&r!=="key"&&r!=="__self"&&r!=="__source"&&(s[r]=e[r]);var u=arguments.length-2;if(u===1)s.children=n;else if(1<u){for(var a=Array(u),c=0;c<u;c++)a[c]=arguments[c+2];s.children=a}if(t&&t.defaultProps)for(r in u=t.defaultProps,u)s[r]===void 0&&(s[r]=u[r]);return R(t,f,void 0,void 0,null,s)},o.createRef=function(){return{current:null}},o.forwardRef=function(t){return{$$typeof:b,render:t}},o.isValidElement=d,o.lazy=function(t){return{$$typeof:C,_payload:{_status:-1,_result:t},_init:W}},o.memo=function(t,e){return{$$typeof:D,type:t,compare:e===void 0?null:e}},o.startTransition=function(t){var e=i.T,n={};i.T=n;try{var r=t(),s=i.S;s!==null&&s(n,r),typeof r=="object"&&r!==null&&typeof r.then=="function"&&r.then(Q,$)}catch(f){$(f)}finally{i.T=e}},o.unstable_useCacheRefresh=function(){return i.H.useCacheRefresh()},o.use=function(t){return i.H.use(t)},o.useActionState=function(t,e,n){return i.H.useActionState(t,e,n)},o.useCallback=function(t,e){return i.H.useCallback(t,e)},o.useContext=function(t){return i.H.useContext(t)},o.useDebugValue=function(){},o.useDeferredValue=function(t,e){return i.H.useDeferredValue(t,e)},o.useEffect=function(t,e){return i.H.useEffect(t,e)},o.useId=function(){return i.H.useId()},o.useImperativeHandle=function(t,e,n){return i.H.useImperativeHandle(t,e,n)},o.useInsertionEffect=function(t,e){return i.H.useInsertionEffect(t,e)},o.useLayoutEffect=function(t,e){return i.H.useLayoutEffect(t,e)},o.useMemo=function(t,e){return i.H.useMemo(t,e)},o.useOptimistic=function(t,e){return i.H.useOptimistic(t,e)},o.useReducer=function(t,e,n){return i.H.useReducer(t,e,n)},o.useRef=function(t){return i.H.useRef(t)},o.useState=function(t){return i.H.useState(t)},o.useSyncExternalStore=function(t,e,n){return i.H.useSyncExternalStore(t,e,n)},o.useTransition=function(){return i.H.useTransition()},o.version="19.0.0",o}var Y;function V(){return Y||(Y=1,m.exports=J()),m.exports}var F=V();const tt=Z(F);export{V as a,tt as e,Z as g,F as r};
