(this.webpackJsonp3c=this.webpackJsonp3c||[]).push([[0],{21:function(t,n,e){},40:function(t,n,e){"use strict";e.r(n);var c=e(0),r=e(2),o=e.n(r),a=e(15),i=e.n(a),u=e(6),s=e(3),j=(e(21),function(t){var n=t.note,e=t.toggleImportance,r=n.important?"make not important":"make important";return Object(c.jsxs)("li",{className:"note",children:[n.content,Object(c.jsx)("button",{onClick:e,children:r})]})}),l=function(t){var n=t.message;return null===n?null:Object(c.jsx)("div",{className:"error",children:n})},b=e(4),f=e.n(b),d="/api/notes",m=function(){return f.a.get(d).then((function(t){return t.data}))},O=function(t){return f.a.post(d,t).then((function(t){return t.data}))},h=function(t,n){return f.a.put("".concat(d,"/").concat(t),n).then((function(t){return t.data}))},p=function(){var t=Object(r.useState)([]),n=Object(s.a)(t,2),e=n[0],o=n[1],a=Object(r.useState)(""),i=Object(s.a)(a,2),b=i[0],f=i[1],d=Object(r.useState)(!0),p=Object(s.a)(d,2),v=p[0],x=p[1],g=Object(r.useState)(null),S=Object(s.a)(g,2),k=S[0],w=S[1];Object(r.useEffect)((function(){m().then((function(t){o(t)}))}),[]);var I=v?e:e.filter((function(t){return t.important}));return Object(c.jsxs)("div",{children:[Object(c.jsx)("h1",{children:"Notes"}),Object(c.jsx)(l,{message:k}),Object(c.jsx)("div",{children:Object(c.jsxs)("button",{onClick:function(){return x(!v)},children:["show ",v?"important":"all"]})}),Object(c.jsx)("ul",{children:I.map((function(t,n){return Object(c.jsx)(j,{note:t,toggleImportance:function(){return function(t){var n=e.find((function(n){return n.id===t})),c=Object(u.a)(Object(u.a)({},n),{},{important:!n.important});h(t,c).then((function(n){o(e.map((function(e){return e.id!==t?e:n})))})).catch((function(t){w("Note '".concat(n.content,"' was already removed from server")),setTimeout((function(){w(null)}),5e3)}))}(t.id)}},n)}))}),Object(c.jsxs)("form",{onSubmit:function(t){t.preventDefault();var n={content:b,date:(new Date).toISOString(),important:Math.random()>.5,id:e.length+1};O(n).then((function(t){o(e.concat(t)),f("")}))},children:[Object(c.jsx)("input",{value:b,onChange:function(t){f(t.target.value)}}),Object(c.jsx)("button",{type:"submit",children:"save"})]})]})};i.a.render(Object(c.jsx)(o.a.StrictMode,{children:Object(c.jsx)(p,{})}),document.getElementById("root"))}},[[40,1,2]]]);
//# sourceMappingURL=main.a8603001.chunk.js.map