var e={d:(i,o)=>{for(var r in o)e.o(o,r)&&!e.o(i,r)&&Object.defineProperty(i,r,{enumerable:!0,get:o[r]})},o:(e,i)=>Object.prototype.hasOwnProperty.call(e,i)},i={};!function(){if(!window||"object"==typeof window.$flex)return;const e=[];Object.defineProperty(window,"$flex",{value:{},writable:!0,enumerable:!0}),Object.defineProperties(window.$flex,{version:{value:1,writable:!0,enumerable:!0},isMobile:{value:/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),writable:!0,enumerable:!0},isAndroid:{value:/Android/i.test(navigator.userAgent),writable:!0,enumerable:!0},isiOS:{value:/iPhone|iPad|iPod/i.test(navigator.userAgent),writable:!0,enumerable:!0},isScript:{value:!0,writable:!1,enumerable:!1},device:{value:{},writable:!0,enumerable:!0},addEventListener:{value:function(i,o){e.push({e:i,c:o})},writable:!1,enumerable:!1},web:{value:{},writable:!1,enumerable:!0}})}(),(()=>{function o(e){if(!window||!window.$flex.isScript)throw Error("$flex is not in Script mode.");return"object"==typeof e&&("string"==typeof e.version&&(window.$flex.version=e.version),"boolean"==typeof e.isMobile&&(window.$flex.isMobile=e.isMobile),"boolean"==typeof e.isAndroid&&(window.$flex.isAndroid=e.isAndroid),"boolean"==typeof e.isiOS&&(window.$flex.isiOS=e.isiOS),"object"==typeof e.device&&(window.$flex.device=e.device)),window.$flex}function r(e){if(!window||!window.$flex.isScript)throw Error("$flex is not in Script mode.");return"object"==typeof e&&(Object.keys(e).forEach((i=>{"version"!==i&&"isMobile"!==i&&"isAndroid"!==i&&"isiOS"!==i&&"isScript"!==i&&"device"!==i&&"addEventListener"!==i&&"web"!==i||delete e[i]})),Object.assign(window.$flex,e)),window.$flex}function n(e){if(!window||!window.$flex.isScript)throw Error("$flex is not in Script mode.");return"object"==typeof e&&Object.assign(window.$flex.web,e),window.$flex.web}function t(e,i,t){if(!window||!window.$flex.isScript)throw Error("$flex is not in Script mode.");return o(e),r(i),n(t),window.$flex}e.d(i,{zS:()=>o,er:()=>r,Pz:()=>n,x6:()=>t})})();var o=i.zS,r=i.er,n=i.x6,t=i.Pz;export{o as flexScriptInfo,r as flexScriptNative,n as flexScriptSet,t as flexScriptWeb};