"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[105],{321:function(n,t,e){e.d(t,{wr:function(){return f},E3:function(){return d},sI:function(){return h},cp:function(){return p},h6:function(){return l}});var r=e(861),c=e(757),o=e.n(c),i="https://api.themoviedb.org/3",u="6603b3505d8dff735b697cdd8dfb31e0";function a(){return s.apply(this,arguments)}function s(){return s=(0,r.Z)(o().mark((function n(){var t,e,r=arguments;return o().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=r.length>0&&void 0!==r[0]?r[0]:"",n.next=3,fetch(t);case 3:if(!(e=n.sent).ok){n.next=10;break}return n.next=7,e.json();case 7:n.t0=n.sent,n.next=11;break;case 10:n.t0=Promise.reject(new Error("Not found"));case 11:return n.abrupt("return",n.t0);case 12:case"end":return n.stop()}}),n)}))),s.apply(this,arguments)}function f(){return a("".concat(i,"/trending/movie/day?api_key=").concat(u))}function d(n){return a("".concat(i,"/search/movie?api_key=").concat(u,"&query=").concat(n))}function h(n){return a("".concat(i,"/movie/").concat(n,"?api_key=").concat(u))}function p(n){return a("".concat(i,"/movie/").concat(n,"/credits?api_key=").concat(u))}function l(n){return a("".concat(i,"/movie/").concat(n,"/reviews?api_key=").concat(u))}},105:function(n,t,e){e.r(t);var r=e(152),c=e(791),o=e(523),i=e(321),u=e(184);t.default=function(){var n=(0,c.useState)(null),t=(0,r.Z)(n,2),e=t[0],a=t[1];return(0,c.useEffect)((function(){i.wr().then(a).catch((function(n){return console.log(n)}))}),[]),(0,u.jsxs)(u.Fragment,{children:[" ",(0,u.jsx)("h2",{children:"Trending today"}),e&&(0,u.jsxs)("ul",{children:[" ",e.results.map((function(n){return(0,u.jsxs)("li",{children:[" ",(0,u.jsx)(o.rU,{to:"/movies/".concat(n.id),children:n.title})," "]},n.id)}))]})]})}}}]);
//# sourceMappingURL=105.7d5c24bf.chunk.js.map