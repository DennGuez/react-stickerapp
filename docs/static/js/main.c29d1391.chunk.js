(this.webpackJsonpstickerapp=this.webpackJsonpstickerapp||[]).push([[0],{16:function(t,e,n){},18:function(t,e,n){"use strict";n.r(e);var c=n(0),a=n(1),r=n(7),i=n.n(r),s=n(2),u=(n(16),n(9)),o=function(t){var e=t.setStickers,n=Object(a.useState)(null),r=Object(s.a)(n,2),i=r[0],o=r[1],j=Object(a.useState)(""),l=Object(s.a)(j,2),d=l[0],b=l[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("form",{onSubmit:function(t){t.preventDefault(),d.trim().length>2?(e((function(t){return[d].concat(Object(u.a)(t))})),o(""),b("")):(console.log("no hay nada"),o("El campo esta vacio"))},children:Object(c.jsx)("input",{type:"text",value:d,placeholder:"Buscar Sticker",onChange:function(t){b(t.target.value)}})}),Object(c.jsx)("span",{style:{color:"red"},children:i})]})},j=n(10),l=n(6),d=n.n(l),b=n(8),p=function(){var t=Object(b.a)(d.a.mark((function t(e){var n,c,a,r,i;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/stickers/search?q=".concat(encodeURI(e),"&limit=10&api_key=ewwlDgHSm5jIhyrMlny2T7tbW6FIEcSD"),t.next=3,fetch(n);case 3:return c=t.sent,t.next=6,c.json();case 6:return a=t.sent,r=a.data,i=r.map((function(t){var e;return{id:t.id,title:t.title,url:null===(e=t.images)||void 0===e?void 0:e.downsized_medium.url}})),t.abrupt("return",i);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(t){t.id;var e=t.title,n=t.url;return Object(c.jsxs)("div",{className:"card animate__animated animate__zoomIn",children:[Object(c.jsx)("img",{src:n,alt:e}),Object(c.jsx)("p",{children:e})]})},m=function(t){var e=t.sticker,n=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(s.a)(e,2),c=n[0],r=n[1];return Object(a.useEffect)((function(){p(t).then((function(t){r({data:t,loading:!1})}))}),[t]),c}(e),r=n.data,i=n.loading;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h3",{children:e}),i&&Object(c.jsx)("p",{className:"card animate__animated animate__flash",children:"Loading..."}),Object(c.jsx)("div",{className:"card-grid",children:r.map((function(t){return Object(c.jsx)(h,Object(j.a)({},t),t.id)}))})]})};var O=function(){var t=Object(a.useState)(["The Simpsons"]),e=Object(s.a)(t,2),n=e[0],r=e[1];return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsx)("h2",{children:"Sticker App"}),Object(c.jsx)(o,{setStickers:r}),Object(c.jsx)("hr",{}),Object(c.jsx)("ol",{children:n.map((function(t){return Object(c.jsx)(m,{sticker:t},t)}))})]})};i.a.render(Object(c.jsx)(O,{}),document.getElementById("root"))}},[[18,1,2]]]);
//# sourceMappingURL=main.c29d1391.chunk.js.map