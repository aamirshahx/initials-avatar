!function(t){function e(r){if(n[r])return n[r].exports;var a=n[r]={exports:{},id:r,loaded:!1};return t[r].call(a.exports,a,a.exports,e),a.loaded=!0,a.exports}var n={};return e.m=t,e.c=n,e.p="",e(0)}([function(t,e,n){"use strict";function r(t){var e=["#626be0","#e06277","#b467da","#e09862","#1abc9c","#f44336","#3498db","#673ab7","#34495e","#8bc24a","#27ae60","#2980b9","#8e44ad","#6c3244","#f1c40f","#2266e6","#e74c3c","#50e3c2","#4498ae","#f39c12","#2c5e1c","#ea1e63","#62b6e0","#484d9c"],n=a((t.getAttribute("data-fulltitle")||"").replace(/[`~!@#$%^&*()_|+\-=?;:'",.<>\{\}\[\]\\\/]/gi,""));""==n&&(n=a(t.getAttribute("data-fulltitle")||""));var r="";if(n){var i=n.split(" "),s=i[0][0];if(r=o(s)?s.toUpperCase():s,i.length>1&&i[i.length-1][0]){var u=i[i.length-1][0];r+=o(u)?u.toUpperCase():u}t.setAttribute("data-avatar",r)}else r=t.getAttribute("data-avatar"),t.setAttribute("data-avatar",r||"");if(r=t.getAttribute("data-avatar")){var c=Math.abs(r[0].charCodeAt()-64),f=r.length>1?Math.abs(r[1].charCodeAt()-64):0,l=c*f+c;t.setAttribute("style","background-color:"+e[l%e.length])}}function a(t){return t="string"==typeof t&&t&&t.length?t.replace(/^\s+|\s+$|\s+(?=\s)/g,""):""}n(4);var i=function(t){"nodeInserted"==t.animationName&&r(t.target)},o=function(t){return 1===t.length&&/[a-z]/i.test(t)};window.rerenderAvatar=function(){var t=document.querySelectorAll("[data-avatar]");[].slice.call(t).forEach(function(t){return r(t)})},document.addEventListener("animationstart",i,!1),document.addEventListener("MSAnimationStart",i,!1),document.addEventListener("webkitAnimationStart",i,!1)},function(t,e,n){e=t.exports=n(2)(),e.push([t.id,"@keyframes nodeInserted{0%{opacity:.99}to{opacity:1}}[data-avatar],[data-fulltitle]{animation-duration:1ms;animation-name:nodeInserted}",""])},function(t,e){t.exports=function(){var t=[];return t.toString=function(){for(var t=[],e=0;e<this.length;e++){var n=this[e];n[2]?t.push("@media "+n[2]+"{"+n[1]+"}"):t.push(n[1])}return t.join("")},t.i=function(e,n){"string"==typeof e&&(e=[[null,e,""]]);for(var r={},a=0;a<this.length;a++){var i=this[a][0];"number"==typeof i&&(r[i]=!0)}for(a=0;a<e.length;a++){var o=e[a];"number"==typeof o[0]&&r[o[0]]||(n&&!o[2]?o[2]=n:n&&(o[2]="("+o[2]+") and ("+n+")"),t.push(o))}},t}},function(t,e,n){function r(t,e){for(var n=0;n<t.length;n++){var r=t[n],a=p[r.id];if(a){a.refs++;for(var i=0;i<a.parts.length;i++)a.parts[i](r.parts[i]);for(;i<r.parts.length;i++)a.parts.push(c(r.parts[i],e))}else{for(var o=[],i=0;i<r.parts.length;i++)o.push(c(r.parts[i],e));p[r.id]={id:r.id,refs:1,parts:o}}}}function a(t){for(var e=[],n={},r=0;r<t.length;r++){var a=t[r],i=a[0],o=a[1],s=a[2],u=a[3],c={css:o,media:s,sourceMap:u};n[i]?n[i].parts.push(c):e.push(n[i]={id:i,parts:[c]})}return e}function i(t,e){var n=b(),r=y[y.length-1];if("top"===t.insertAt)r?r.nextSibling?n.insertBefore(e,r.nextSibling):n.appendChild(e):n.insertBefore(e,n.firstChild),y.push(e);else{if("bottom"!==t.insertAt)throw new Error("Invalid value for parameter 'insertAt'. Must be 'top' or 'bottom'.");n.appendChild(e)}}function o(t){t.parentNode.removeChild(t);var e=y.indexOf(t);e>=0&&y.splice(e,1)}function s(t){var e=document.createElement("style");return e.type="text/css",i(t,e),e}function u(t){var e=document.createElement("link");return e.rel="stylesheet",i(t,e),e}function c(t,e){var n,r,a;if(e.singleton){var i=m++;n=g||(g=s(e)),r=f.bind(null,n,i,!1),a=f.bind(null,n,i,!0)}else t.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=u(e),r=d.bind(null,n),a=function(){o(n),n.href&&URL.revokeObjectURL(n.href)}):(n=s(e),r=l.bind(null,n),a=function(){o(n)});return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else a()}}function f(t,e,n,r){var a=n?"":r.css;if(t.styleSheet)t.styleSheet.cssText=A(e,a);else{var i=document.createTextNode(a),o=t.childNodes;o[e]&&t.removeChild(o[e]),o.length?t.insertBefore(i,o[e]):t.appendChild(i)}}function l(t,e){var n=e.css,r=e.media;if(r&&t.setAttribute("media",r),t.styleSheet)t.styleSheet.cssText=n;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(n))}}function d(t,e){var n=e.css,r=e.sourceMap;r&&(n+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(r))))+" */");var a=new Blob([n],{type:"text/css"}),i=t.href;t.href=URL.createObjectURL(a),i&&URL.revokeObjectURL(i)}var p={},h=function(t){var e;return function(){return"undefined"==typeof e&&(e=t.apply(this,arguments)),e}},v=h(function(){return/msie [6-9]\b/.test(self.navigator.userAgent.toLowerCase())}),b=h(function(){return document.head||document.getElementsByTagName("head")[0]}),g=null,m=0,y=[];t.exports=function(t,e){e=e||{},"undefined"==typeof e.singleton&&(e.singleton=v()),"undefined"==typeof e.insertAt&&(e.insertAt="bottom");var n=a(t);return r(n,e),function(t){for(var i=[],o=0;o<n.length;o++){var s=n[o],u=p[s.id];u.refs--,i.push(u)}if(t){var c=a(t);r(c,e)}for(var o=0;o<i.length;o++){var u=i[o];if(0===u.refs){for(var f=0;f<u.parts.length;f++)u.parts[f]();delete p[u.id]}}}};var A=function(){var t=[];return function(e,n){return t[e]=n,t.filter(Boolean).join("\n")}}()},function(t,e,n){var r=n(1);"string"==typeof r&&(r=[[t.id,r,""]]);n(3)(r,{});r.locals&&(t.exports=r.locals)}]);