"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[67],{963:function(t,e,r){r.d(e,{y:function(){return c}});var n=r(689),a=r(87),u=r(184),c=function(t){var e=t.list,r=(0,n.TH)();return(0,u.jsx)("ul",{children:e.map((function(t){var e=t.title,n=t.id;return(0,u.jsx)("li",{children:(0,u.jsx)(a.rU,{className:"item-movie",to:"/movies/".concat(n),state:{from:r},children:e})},n)}))})}},67:function(t,e,r){r.r(e),r.d(e,{default:function(){return p}});var n=r(439),a=r(963),u=r(184),c=function(t){var e=t.onSubmit;return(0,u.jsx)("header",{children:(0,u.jsxs)("form",{onSubmit:e,children:[(0,u.jsx)("button",{type:"submit",children:"search"}),(0,u.jsx)("input",{type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Search movies",name:"searcValue"})]})})},i=r(791),s=r(390),o=r(87),f=r(154),p=function(){var t=(0,i.useState)([]),e=(0,n.Z)(t,2),r=e[0],p=e[1],l=(0,o.lr)(),v=(0,n.Z)(l,2),m=v[0],d=v[1],h=(0,i.useState)(!1),x=(0,n.Z)(h,2),y=x[0],k=x[1],w=(0,i.useMemo)((function(){var t;return null!==(t=m.get("query"))&&void 0!==t?t:""}),[m]);(0,i.useEffect)((function(){k(!0),(0,s.LI)(w).then((function(t){return p(t)})).catch((function(t){return alert(t)})).finally(k(!1))}),[w]);return(0,u.jsxs)("div",{children:[(0,u.jsx)(c,{onSubmit:function(t){t.preventDefault();var e=t.currentTarget.elements.searcValue.value;if(t.currentTarget.reset(),""===e)return d({}),alert("Enter movie name");d({query:e})}}),y&&(0,u.jsx)(f.a,{}),(0,u.jsx)(a.y,{list:r})]})}},390:function(t,e,r){r.d(e,{Bt:function(){return l},LI:function(){return f},Tg:function(){return o},Wg:function(){return p},y:function(){return v}});var n=r(861),a=r(757),u=r.n(a),c=r(243),i="https://api.themoviedb.org/3/",s="d03712107dcdd723f1173c5ee2c0d8c1",o=function(){var t=(0,n.Z)(u().mark((function t(){var e;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"trending/movie/day"),{params:{api_key:s}});case 2:return e=t.sent,t.abrupt("return",e.data.results);case 4:case"end":return t.stop()}}),t)})));return function(){return t.apply(this,arguments)}}(),f=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/search/movie?api_key=").concat(s,"&query=").concat(e));case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(e),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),l=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(e,"/reviews"),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data.results);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),v=function(){var t=(0,n.Z)(u().mark((function t(e){var r;return u().wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c.Z.get("".concat(i,"/movie/").concat(e,"/credits"),{params:{api_key:s}});case 2:return r=t.sent,t.abrupt("return",r.data.cast);case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}]);
//# sourceMappingURL=67.0ec6db78.chunk.js.map