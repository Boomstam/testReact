(this.webpackJsonptest=this.webpackJsonptest||[]).push([[0],{11:function(e,n,t){"use strict";t.r(n);var c=t(1),r=t.n(c),o=t(3),i=t.n(o),a=(t(8),t(9),[{name:"fris",products:[{name:"cola",price:1},{name:"water",price:1,note:"plat of bruisend"}]},{name:"alcohol",note:"alleen boven 16 jaar",products:[{name:"bier",price:1,size:25},{name:"bier groot",price:1.5,size:33},{name:"wijn",price:2,note:"rood, wit of ros\xe9"},{name:"cava",price:3}]},{name:"eten",note:"tussen 12:00 en 15:00",products:[{name:"chips",price:1,note:"paprika of zout"},{name:"olijven",price:2,note:"mix zwart en groen"},{name:"kaas",price:4,note:"mix jonge en oude blokjes"}]}]),s=t(0);function u(e){var n=e.product;return n.size?Object(s.jsx)("span",{className:"productSize",children:" - "+n.size+"cl"}):null}function d(e){var n=e.noteHolder;return n.note?Object(s.jsx)("div",{className:"note",children:n.note}):null}function j(e){var n=e.product;return n.name?Object(s.jsxs)("div",{className:"productLine",children:[Object(s.jsxs)("div",{children:[n.name,Object(s.jsx)(u,{product:n}),Object(s.jsx)(d,{noteHolder:n})]}),Object(s.jsx)("div",{children:n.price})]}):null}function l(e){var n=e.category;return Object(s.jsxs)("div",{children:[Object(s.jsx)("h2",{children:n.name}),Object(s.jsx)(d,{noteHolder:n}),Object(s.jsx)("div",{children:n.products.map((function(e){return Object(s.jsx)(j,{product:e},e.name)}))})]})}var p=function(){return Object(s.jsxs)("div",{children:[Object(s.jsx)("h1",{children:"Menu"}),a.map((function(e){return Object(s.jsx)(l,{category:e},e.name)}))]})},m=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,12)).then((function(n){var t=n.getCLS,c=n.getFID,r=n.getFCP,o=n.getLCP,i=n.getTTFB;t(e),c(e),r(e),o(e),i(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(p,{})}),document.getElementById("root")),m()},8:function(e,n,t){},9:function(e,n,t){}},[[11,1,2]]]);
//# sourceMappingURL=main.839b540e.chunk.js.map