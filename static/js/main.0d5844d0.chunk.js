(this["webpackJsonpblank-app"]=this["webpackJsonpblank-app"]||[]).push([[0],{13:function(e,t,c){},15:function(e,t,c){"use strict";c.r(t);var n=c(1),a=c.n(n),r=c(7),i=c.n(r),s=(c(13),c(0));function l(){return Object(s.jsx)("nav",{className:"green darken-1",children:Object(s.jsxs)("div",{className:"nav-wrapper",children:[Object(s.jsx)("a",{href:"https://rddeveloper2019.github.io/react-shop-fortnite/",className:"brand-logo",children:"Fortnite Shop"}),Object(s.jsx)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:Object(s.jsx)("li",{children:Object(s.jsx)("a",{href:"https://github.com/rddeveloper2019/react-shop-fortnite",children:"Repo"})})})]})})}function o(){return Object(s.jsx)("footer",{className:"page-footer green lighten-4",children:Object(s.jsx)("div",{className:"footer-copyright",children:Object(s.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," Copyright Text",Object(s.jsx)("a",{className:"grey-text text-lighten-4 right",href:"#!",children:"Repo"})]})})})}var d=c(2);function j(){return Object(s.jsx)("div",{className:"progress",children:Object(s.jsx)("div",{className:"indeterminate"})})}var u=c(8),b=c(6);function O(e,t){var c=t.type,n=t.payload;switch(c){case"SET_BASKETSHOW":return Object(d.a)(Object(d.a)({},e),{},{isBasketShow:!e.isBasketShow});case"SET_LOADING":return Object(d.a)(Object(d.a)({},e),{},{loading:n.current});case"SET_DATA":return Object(d.a)(Object(d.a)({},e),{},{data:n.data||[]});case"ADD_TO_BASKET":return Object(d.a)(Object(d.a)({},e),{},{order:m(n.id,e.data,e.order).newOrder,alertName:m(n.id,e.data,e.order).alertName});case"REMOVE_FROM_BASKET":return Object(d.a)(Object(d.a)({},e),{},{order:h(n.id,e.order,n.totally)});case"SET_ALERTNAME":return Object(d.a)(Object(d.a)({},e),{},{alertName:n.name});case"CLOSE_ALERT":return Object(d.a)(Object(d.a)({},e),{},{alertName:""});default:return e}}function h(e,t){var c=arguments.length>2&&void 0!==arguments[2]&&arguments[2],n=Object(b.a)(t),a=n.findIndex((function(t){return t.id===e}));return c||1===n[a].quantity?n=n.filter((function(t){return t.id!==e})):n[a].quantity--,n}function m(e,t,c){var n,a=t.filter((function(t){return t.id===e}))[0],r=Object(b.a)(c),i=r.findIndex((function(t){return t.id===e}));if(i<0){a.quantity=1;var s=a.name,l=a.price,o=a.id,d=a.quantity;r.push({name:s,price:l,id:o,quantity:d}),n=s}else r[i].quantity++,n=r[i].name;return{newOrder:r,alertName:n}}var x=Object(n.createContext)(),f={data:[],loading:!0,order:[],isBasketShow:!1,alertName:""},p=function(e){var t=e.children,c=Object(n.useReducer)(O,f),a=Object(u.a)(c,2),r=a[0],i=a[1];return r.closeAlert=function(){i({type:"CLOSE_ALERT"})},r.setAlertName=function(e){i({type:"SET_ALERTNAME",payload:{name:e}})},r.removeFromBasket=function(e){var t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];i({type:"REMOVE_FROM_BASKET",payload:{id:e,totally:t}})},r.addToBasket=function(e){i({type:"ADD_TO_BASKET",payload:{id:e}})},r.setData=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];i({type:"SET_DATA",payload:{data:e}})},r.setLoading=function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];i({type:"SET_LOADING",payload:{current:e}})},r.setBasketShow=function(){i({type:"SET_BASKETSHOW"})},Object(s.jsx)(x.Provider,{value:r,children:t})};function v(e){var t=Object(n.useContext)(x).addToBasket,c=e.id,a=e.name,r=e.description,i=e.price,l=e.full_background;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("div",{className:"card-image",children:Object(s.jsx)("img",{src:l,alt:a})}),Object(s.jsxs)("div",{className:"card-content",children:[Object(s.jsx)("span",{className:"card-title",children:a}),Object(s.jsx)("p",{children:r})]}),Object(s.jsxs)("div",{className:"card-action",children:[Object(s.jsx)("button",{className:"btn",onClick:function(){return t(c)},children:"\u041a\u0443\u043f\u0438\u0442\u044c"}),Object(s.jsxs)("span",{className:"right",style:{fontSize:"1.8rem"},children:[i," \u0440\u0443\u0431."]})]})]})}function N(){var e=Object(n.useContext)(x).data;return Object(s.jsx)("div",{className:"goods",children:e.map((function(e){return Object(s.jsx)(v,Object(d.a)({},e),e.id)}))})}function y(e){var t=Object(n.useContext)(x),c=t.order,a=t.setBasketShow,r=c.length,i=e.orderDetails,l=void 0===i?{}:i;return Object(s.jsxs)("div",{className:"cart",onClick:a,children:[Object(s.jsx)("div",{children:Object(s.jsx)("i",{className:"large material-icons blue darken-4 yellow-text",children:"shopping_cart"})}),r?Object(s.jsxs)("span",{className:"basket-quantity blue darken-4 yellow-text",children:[l.quantity," \u0448\u0442- ",l.sum," \u0440\u0443\u0431."]}):null]})}function g(e){var t=Object(n.useContext)(x),c=t.addToBasket,a=t.removeFromBasket,r=e.id,i=e.name,l=e.quantity,o=e.price;return Object(s.jsxs)("li",{className:"collection-item ",children:[Object(s.jsxs)("span",{children:[i,": "]}),Object(s.jsxs)("span",{children:[" ",Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:"material-icons basket-quantity",onClick:function(){a(r)},children:"remove_circle"})}),l,"\u0448\u0442.",Object(s.jsx)("span",{onClick:function(){c(r)},children:Object(s.jsx)("i",{className:"material-icons basket-quantity",children:"add_circle"})})]}),Object(s.jsxs)("span",{children:[" \u043f\u043e ",o," \u0440\u0443\u0431."]}),Object(s.jsxs)("span",{children:[" ","= ",Object(s.jsxs)("b",{children:[o*l," \u0440\u0443\u0431."]})]}),Object(s.jsx)("i",{className:"material-icons right basket-quantity",onClick:function(){a(r,"totally")},children:"delete"})]})}function k(e){var t=Object(n.useContext)(x),c=t.order,a=void 0===c?[]:c,r=t.setBasketShow,i=e.orderDetails,l=void 0===i?{}:i;return Object(s.jsxs)("ul",{className:"collection basket-list",children:[Object(s.jsxs)("li",{className:"collection-item active",children:[Object(s.jsx)("span",{children:"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"}),Object(s.jsx)("i",{className:"material-icons right",onClick:function(){r()},children:"close"})]}),a.length?a.map((function(e){return Object(s.jsx)(g,Object(d.a)({},e),e.id)})):Object(s.jsx)("li",{className:"collection-item ",children:"\u041f\u0443\u0441\u0442\u043e"}),Object(s.jsxs)("li",{className:"collection-item  active",children:["\u0412\u0441\u0435\u0433\u043e \u0442\u043e\u0432\u0430\u0440\u043e\u0432: ",Object(s.jsx)("b",{children:l.quantity})," \u0448\u0442. \u041e\u0431\u0449\u0430\u044f \u0441\u0443\u043c\u043c\u0430:"," ",Object(s.jsx)("b",{children:l.sum})," \u0440\u0443\u0431.",Object(s.jsx)("button",{className:"secondary-content btn btn-small",children:"\u041e\u0444\u043e\u0440\u043c\u0438\u0442\u044c \u0437\u0430\u043a\u0430\u0437"})]})]})}function E(){var e=Object(n.useContext)(x),t=e.alertName,c=e.closeAlert;return Object(n.useEffect)((function(){var e=setTimeout(c,2e3);return function(){clearTimeout(e)}}),[t]),Object(s.jsx)("div",{id:"toast-container",children:Object(s.jsxs)("div",{className:"toast",style:{opacity:1},children:[t," \u0434\u043e\u0431\u0430\u0432\u043b\u0435\u043d \u0432 \u043a\u043e\u0440\u0437\u0438\u043d\u0443!"]})})}function S(){var e=Object(n.useContext)(x),t=e.setData,c=e.alertName,a=e.order,r=e.loading,i=e.setLoading,l=e.isBasketShow;Object(n.useEffect)((function(){fetch("https://fortniteapi.io/v1/shop?lang=ru",{headers:{Authorization:"08e8add6-7bbcf95d-c79e2fa0-b37f616c"}}).then((function(e){return e.json()})).then((function(e){var c=e.featured.map((function(e){return Object(d.a)(Object(d.a)({},e),{},{quantity:0})}));t(c),i(!1)})).catch((function(e){i(!1)}))}),[]);var o=a.reduce((function(e,t){return e.quantity+=+t.quantity,e.sum+=+t.quantity*+t.price,e}),{quantity:0,sum:0});return Object(s.jsxs)("div",{className:"container content",children:[r?Object(s.jsx)(j,{}):Object(s.jsx)(N,{}),Object(s.jsx)(y,{orderDetails:o}),l&&Object(s.jsx)(k,{orderDetails:o}),c&&Object(s.jsx)(E,{})]})}var T=function(){return Object(s.jsx)(s.Fragment,{children:Object(s.jsxs)(p,{children:[Object(s.jsx)(l,{}),Object(s.jsx)(S,{}),Object(s.jsx)(o,{})]})})};i.a.render(Object(s.jsx)(a.a.StrictMode,{children:Object(s.jsx)(T,{})}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.0d5844d0.chunk.js.map