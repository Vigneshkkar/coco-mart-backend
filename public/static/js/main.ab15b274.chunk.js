(this["webpackJsonpcoco-mart"]=this["webpackJsonpcoco-mart"]||[]).push([[0],{110:function(e,t,n){e.exports={heading:"heading_heading__a3AWx"}},111:function(e,t,n){e.exports={dialogCont:"AddProduct_dialogCont__JUWIf"}},114:function(e,t,n){e.exports={container:"button_container__2XNlZ"}},135:function(e,t,n){},136:function(e,t,n){},164:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"getNamesDetails",(function(){return g})),n.d(a,"fetchNamesSuccess",(function(){return E})),n.d(a,"getGraphDataDetails",(function(){return _})),n.d(a,"fetchGraphDataDetailsSuccess",(function(){return m}));var r={};n.r(r),n.d(r,"getProductDetails",(function(){return R})),n.d(r,"fetchProductSuccess",(function(){return P})),n.d(r,"updateSearch",(function(){return w})),n.d(r,"updateSort",(function(){return F})),n.d(r,"createProduct",(function(){return y})),n.d(r,"updatePrice",(function(){return N})),n.d(r,"deleteProds",(function(){return k}));var c={};n.r(c),n.d(c,"getFeedDetails",(function(){return I})),n.d(c,"fetchFeedSuccess",(function(){return H})),n.d(c,"createFeed",(function(){return B}));var o=n(0),i=n.n(o),s=n(40),u=n.n(s),l=(n(135),n(136),n(10)),d=n(41),j=n(30),p=function(e){e=Array.isArray(e)?e:Object.keys(e);var t={};return e.map((function(e){return t[e]=e})),t}({GET_CATEGORY:null,FETCH_SUCCESS:null,GET_PRODUCTS:null,FETCH_PRODUCTS:null,UPDATE_SEARCH:null,UPDATE_SORTBY:null,UPDATE_SEL_CATS:null,DELETE_SEL_CATS:null,GET_PRICE_RANGE:null,UPDATE_PRICE_RANGE:null,CREATE_PRODUCT:null,UPDATE_PRICE:null,DELETE_PROD:null,GET_FEEDS:null,FETCH_FEEDS:null,CREATE_FEEDS:null,GET_NAMES:null,FETCH_NAMES:null,GET_TRENDS_GRAPH_DATA:null,FETCH_TRENDS_GRAPH_DATA:null,ADD_CART:null,DELETE_CART:null,RESET_CART:null,REGISTER_USER:null,REGISTER_SUCC:null,REGISTER_ERR:null,VALIDATE_USER:null,VALIDATE_SUCC:null,VALIDATE_ERR:null,FORGOT_SEND_CODE:null,FORGOT_SEND_SUCC:null,RESET_LOGIN:null,CHANGE_PASSWORD:null,REQUEST_PAYMENT:null,PAYMENT_SUCCESS:null,PAYMENT_ERROR:null,CREATE_ORDER:null,ORDER_SUCC:null,ORDER_FAIL:null,SHOW_LOADING:null,HIDE_LOADING:null}),b=p.GET_NAMES,f=p.FETCH_NAMES,O=p.GET_TRENDS_GRAPH_DATA,h=p.FETCH_TRENDS_GRAPH_DATA,g=function(){return{type:b}},E=function(e){return{type:f,payload:e}},_=function(e){return{type:O,payload:e}},m=function(e){return{type:h,payload:e}},x=p.GET_PRODUCTS,v=p.FETCH_PRODUCTS,C=p.UPDATE_SEARCH,S=p.UPDATE_SORTBY,T=(p.UPDATE_SEL_CATS,p.DELETE_SEL_CATS,p.GET_PRICE_RANGE,p.UPDATE_PRICE_RANGE,p.CREATE_PRODUCT),D=p.UPDATE_PRICE,A=p.DELETE_PROD,R=function(){return{type:x}},P=function(e){return{type:v,payload:e}},w=function(e){return{type:C,payload:e}},F=function(e){return{type:S,payload:e}},y=function(e){return{type:T,payload:e}},N=function(e){return{type:D,payload:e}},k=function(e){return{type:A,payload:e}},G=p.GET_FEEDS,U=p.FETCH_FEEDS,L=p.CREATE_FEEDS,I=function(){return{type:G}},H=function(e){return{type:U,payload:e}},B=function(e){return{type:L,payload:e}},V=n(8),W=n(110),M=n.n(W),J=n(1),Y=function(e){var t=e.children;return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("span",{className:M.a.heading,children:t})})},q=n(75),Z=n.n(q),X=n(85),z=n.n(X),K=n.p+"static/media/backTrees.76cb1b85.svg",Q=function(){return Object(J.jsxs)(J.Fragment,{children:[Object(J.jsx)("img",{className:z.a.leftTree,src:K,alt:""}),Object(J.jsx)("img",{className:z.a.rightTree,src:K,alt:""})]})},$=n.p+"static/media/Add.803a73de.svg",ee=n(28),te=n(211),ne=n(207),ae=n(209),re=n(203),ce=n(215),oe=n(210),ie=n(199),se=n(205),ue=n(213),le=n(111),de=n.n(le),je=function(e){var t=e.open,n=e.handleClose,a=e.feeds,r=Object(o.useState)(""),c=Object(V.a)(r,2),i=c[0],s=c[1],u=Object(o.useState)(null),l=Object(V.a)(u,2),d=l[0],j=l[1],p=Object(o.useState)({name:"",type:""}),b=Object(V.a)(p,2),f=(b[0],b[1]);return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(ce.a,{onClose:function(){return n(null,null,!0)},open:t,children:[Object(J.jsx)(oe.a,{children:a?"Add Feed":"Add Product"}),Object(J.jsx)("div",{className:de.a.dialogCont,children:Object(J.jsxs)(ie.a,{spacing:3,children:[Object(J.jsx)(se.a,{multiline:a,rows:a?4:1,onChange:function(e){return s(e.target.value)},value:i,label:a?"Feed Content":"Product Name",variant:"outlined"}),d&&Object(J.jsx)("img",{width:50,height:50,src:d}),Object(J.jsxs)(ue.a,{variant:"contained",component:"label",children:["Upload Image",Object(J.jsx)("input",{onChange:function(e){console.log(e);var t=e.target.files[0];if(t){f({name:t.name,type:t.type});var n=new FileReader;n.onload=function(e){var n=e.target.result;j("data:"+t.type+";base64,"+btoa(n))},n.readAsBinaryString(t)}},accept:"image/*",type:"file",hidden:!0})]}),Object(J.jsx)(ue.a,{onClick:function(){return n(i,d)},variant:"contained",color:"success",component:"label",children:"Save"})]})})]})})},pe={PaperProps:{style:{maxHeight:224,width:250}}};var be=function(e){e.loading;var t=e.names,n=(e.graphData,e.graphDataCollector,e.createProd),a=e.updatePrice,r=e.deleteProds,c=e.createFeed,i=(Object(ee.d)(),Object(o.useState)([])),s=Object(V.a)(i,2),u=s[0],l=s[1],d=Object(o.useState)(!1),j=Object(V.a)(d,2),p=j[0],b=j[1],f=Object(o.useState)(!1),O=Object(V.a)(f,2),h=O[0],g=O[1],E=Object(o.useState)(0),_=Object(V.a)(E,2),m=_[0],x=_[1];return Object(J.jsxs)("div",{children:[Object(J.jsx)(Y,{children:"Admin"}),Object(J.jsx)("div",{className:Z.a.feedAddCont,children:Object(J.jsx)(ue.a,{onClick:function(){return g(!0)},color:"primary",variant:"contained",children:"Add Feed"})}),Object(J.jsxs)("div",{className:Z.a.SearchCont,children:[Object(J.jsx)(ae.a,{sx:{m:1,width:300,mt:3},children:Object(J.jsx)(re.a,{style:{color:"#587850",backgroundColor:"#fff"},multiple:!0,displayEmpty:!0,value:u,onChange:function(e){var t=e.target.value;l("string"===typeof t?t.split(","):t);"string"===typeof t&&t.split(",")},input:Object(J.jsx)(te.a,{}),renderValue:function(e){return 0===e.length?Object(J.jsx)("em",{children:"Select Products"}):e.join(", ")},MenuProps:pe,inputProps:{"aria-label":"Without label"},children:t.map((function(e){return Object(J.jsx)(ne.a,{value:e.name,children:e.name},e.name)}))})}),Object(J.jsx)("div",{onClick:function(){return b(!0)},className:Z.a.addProd,children:Object(J.jsx)("img",{src:$})})]}),Object(J.jsx)(je,{open:p,handleClose:function(e,t,a){b(!1),a||n({name:e,image:t,priceDetails:[]})}}),Object(J.jsx)(je,{feeds:!0,open:h,handleClose:function(e,t,n){g(!1),n||c({content:e,image:t})}}),u.length>0&&Object(J.jsx)("div",{children:Object(J.jsxs)(ie.a,{style:{padding:"10px"},spacing:3,children:[Object(J.jsx)(se.a,{value:m,onChange:function(e){return x(e.target.value)},type:"number",style:{color:"#587850",backgroundColor:"#fff"},label:"Enter Price for today",variant:"outlined"}),Object(J.jsx)(ue.a,{onClick:function(){return a({names:u,priceDetails:{price:+m,date:new Date}})},variant:"contained",children:"Update Price"}),Object(J.jsx)(ue.a,{onClick:function(){return u.length>0?r(u):null},color:"error",variant:"contained",children:"Delete Products"})]})}),Object(J.jsx)(Q,{})]})},fe=Object(d.b)((function(e){return{data:e.Trends.data,graphData:e.Trends.graphData,loading:e.Trends.loading,error:e.Trends.error}}),(function(e){return{actions:Object(j.b)(Object(l.a)(Object(l.a)(Object(l.a)({},a),r),c),e)}}))((function(e){return Object(o.useEffect)((function(){return e.actions.getNamesDetails(),function(){}}),[]),Object(J.jsx)(be,{names:e.data,loading:e.loading,graphData:e.graphData,graphDataCollector:e.actions.getGraphDataDetails,createProd:e.actions.createProduct,updatePrice:e.actions.updatePrice,deleteProds:e.actions.deleteProds,createFeed:e.actions.createFeed})})),Oe=n(88),he=n.n(Oe),ge=function(e){var t=e.value,n=e.placeholder,a=e.icon,r=e.type,c=e.liveValue;return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("div",{className:he.a.container,children:[a?Object(J.jsx)("img",{src:a,alt:""}):null,Object(J.jsx)("input",{value:t,onKeyUp:function(e){return c?c(e.target.value):""},placeholder:n,className:he.a.inputtransparent,type:r})]})})},Ee=n(89),_e=n.n(Ee),me=n.p+"static/media/Search.d41575c7.svg",xe=n(77),ve=n.n(xe),Ce=function(e){var t=e.image,n=e.content,a=e.date;e.children;return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("div",{className:ve.a.container,children:[Object(J.jsx)("img",{src:t,alt:""}),Object(J.jsx)("span",{className:ve.a.content,children:n}),Object(J.jsx)("span",{className:ve.a.date,children:a})]})})},Se=n(214),Te=function(e){var t=e.loading,n=e.feeds,a=Object(o.useState)(""),r=Object(V.a)(a,2),c=r[0],i=r[1];return Object(J.jsxs)("div",{children:[Object(J.jsx)(Y,{children:"Feeds"}),Object(J.jsx)("div",{className:_e.a.SearchCont,children:Object(J.jsx)(ge,{liveValue:function(e){return i(e)},icon:me,placeholder:"Search"})}),Object(J.jsx)("div",{className:_e.a.cardContainer,children:t?new Array(10).fill(1).map((function(e,t){return Object(J.jsx)(Se.a,{width:"-webkit-fill-available",height:"15rem"},"Skeleton_"+t)})):n.filter((function(e){return e.content.includes(c)})).map((function(e,t){return Object(J.jsx)(Ce,{image:e.image,content:e.content,date:new Date(e.createdAt).toLocaleDateString("en-US",{weekday:"long",year:"numeric",month:"long",day:"numeric"})})}))}),Object(J.jsx)(Q,{})]})},De=Object(d.b)((function(e){return{data:e.Feeds.data,loading:e.Feeds.loading,error:e.Feeds.error}}),(function(e){return{actions:Object(j.b)(Object(l.a)({},c),e)}}))((function(e){return Object(o.useEffect)((function(){return e.actions.getFeedDetails(),function(){}}),[]),Object(J.jsx)(Te,{feeds:e.data,loading:e.loading})})),Ae=n(64),Re=n.n(Ae),Pe=function(e){var t=e.image,n=e.heading,a=e.price;e.favourite,e.children;return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)("div",{className:Re.a.container,children:[Object(J.jsx)("img",{src:t,alt:""}),Object(J.jsx)("span",{className:Re.a.heading,children:n}),Object(J.jsxs)("span",{className:Re.a.price,children:["Rs. ",a]}),Object(J.jsx)("div",{className:Re.a.favIcon})]})})},we=n(90),Fe=n.n(we),ye=function(e){var t=e.loading,n=e.products,a=Object(o.useState)(""),r=Object(V.a)(a,2),c=r[0],i=r[1];return Object(J.jsxs)("div",{children:[Object(J.jsx)(Y,{children:"Home"}),Object(J.jsx)("div",{className:Fe.a.SearchCont,children:Object(J.jsx)(ge,{liveValue:function(e){return i(e)},icon:me,placeholder:"Search"})}),Object(J.jsx)("div",{className:Fe.a.cardContainer,children:t?new Array(10).fill(1).map((function(e,t){return Object(J.jsx)(Se.a,{width:"10rem",height:"10rem"},"Skeleton_"+t)})):n.filter((function(e){return e.name.includes(c)})).map((function(e,t){return Object(J.jsx)(Pe,{image:e.image,heading:e.name,price:e.price.price,favourite:!0},"Cards_"+t)}))}),Object(J.jsx)(Q,{})]})},Ne=Object(d.b)((function(e){return{data:e.Products.data,loading:e.Products.loading,error:e.Products.error}}),(function(e){return{actions:Object(j.b)(Object(l.a)({},r),e)}}))((function(e){return Object(o.useEffect)((function(){return e.actions.getProductDetails(),function(){}}),[]),Object(J.jsx)(ye,{products:e.data,loading:e.loading})})),ke=n(21),Ge=n.p+"static/media/Logo.b4d04556.svg",Ue=n.p+"static/media/Google.170ac5c8.svg",Le=n.p+"static/media/Asset 1.20e3c66b.svg",Ie=n.p+"static/media/login Background.f10c798c.svg",He=n(114),Be=n.n(He),Ve=function(e){var t=e.children;return Object(J.jsx)(J.Fragment,{children:Object(J.jsx)("div",{className:Be.a.container,children:t})})},We=n(49),Me=n.n(We),Je=function(e){var t=e.onLogin;return Object(J.jsxs)("div",{className:Me.a.container,children:[Object(J.jsx)("img",{src:Ge,alt:"Logo"}),Object(J.jsxs)("div",{className:Me.a.loginContainer,children:[Object(J.jsx)(Y,{children:"Login"}),Object(J.jsx)(ge,{placeholder:"Username or Mobile Number"}),Object(J.jsx)(ge,{placeholder:"Password",type:"password"}),Object(J.jsx)("div",{onClick:function(){return t()},children:Object(J.jsx)(Ve,{children:Object(J.jsx)("span",{children:"Sign In"})})}),Object(J.jsx)("div",{className:Me.a.orCont,children:"Or"}),Object(J.jsxs)("div",{className:Me.a.googleSign,children:[Object(J.jsx)("img",{src:Ue,alt:"Google"}),"Sign in with Google"]}),Object(J.jsxs)("div",{className:Me.a.fbSign,children:[Object(J.jsx)("img",{src:Le,alt:"FB"}),"Sign in with Facebook"]})]}),Object(J.jsx)("img",{className:Me.a.backgroundImage,src:Ie,alt:"background"})]})},Ye=function(){var e=Object(ke.f)();return Object(J.jsx)(Je,{onLogin:function(){return e("/Home")}})},qe=n(65),Ze=n.n(qe),Xe=function(){var e=Object(ke.f)();return Object(J.jsxs)("div",{children:[Object(J.jsx)(Y,{children:"Profile"}),Object(J.jsx)("div",{className:Ze.a.nameCont,children:Object(J.jsx)("div",{className:Ze.a.nameLog,children:"V"})}),Object(J.jsxs)("div",{className:Ze.a.detailCont,children:[Object(J.jsx)("span",{children:"Name: Vigneshkkar Ravichandran"}),Object(J.jsx)("span",{children:"Phone: +91 7708222403"}),Object(J.jsx)("span",{children:"Email: Vigneshkkar@gmail.com"})]}),Object(J.jsxs)("div",{className:Ze.a.buttonCont,children:[Object(J.jsx)("div",{onClick:function(){return e("/")},children:Object(J.jsx)(Ve,{children:"Sign Out"})}),Object(J.jsx)("div",{onClick:function(){return e(-1)},children:Object(J.jsx)(Ve,{children:"Close"})})]}),Object(J.jsx)(Q,{})]})},ze=function(){return Object(J.jsx)(Xe,{})},Ke=n(91),Qe=n.n(Ke),$e=n(26),et=n(117),tt=["#FF6633","#FFB399","#FF33FF","#FFFF99","#00B3E6","#E6B333","#3366E6","#999966","#99FF99","#B34D4D","#80B300","#809900","#E6B3B3","#6680B3","#66991A","#FF99E6","#CCFF1A","#FF1A66","#E6331A","#33FFCC","#66994D","#B366CC","#4D8000","#B33300","#CC80CC","#66664D","#991AFF","#E666FF","#4DB3FF","#1AB399","#E666B3","#33991A","#CC9999","#B3B31A","#00E680","#4D8066","#809980","#E6FF80","#1AFF33","#999933","#FF3380","#CCCC00","#66E64D","#4D80CC","#9900B3","#E64D66","#4DB380","#FF4D4D","#99E6E6","#6666FF"];n(143);$e.d.register($e.c,$e.i,$e.k,$e.h,$e.o,$e.p,$e.q,$e.f);var nt={responsive:!0,maintainAspectRatio:!1,tooltips:{enabled:!0},scales:{x:{type:"time",time:{unit:"day"}}},plugins:{legend:{position:"bottom"}}},at=function(e){e.loading;var t=function(e){var t=[];return e.map((function(e,n){t.push({label:e.name,data:e.priceDetails.map((function(e){return{x:new Date(e.date),y:e.price}})),borderColor:tt[n],backgroundColor:tt[n]+"88"})})),{datasets:t}}(e.data);return console.log(t),Object(J.jsx)(et.a,{options:nt,data:t,style:{height:"calc(100vh - 15rem)"}})},rt={PaperProps:{style:{maxHeight:224,width:250}}};var ct=function(e){var t=e.loading,n=e.names,a=e.graphData,r=e.graphDataCollector,c=(Object(ee.d)(),Object(o.useState)([])),i=Object(V.a)(c,2),s=i[0],u=i[1];return Object(J.jsxs)("div",{children:[Object(J.jsx)(Y,{children:"Trends"}),Object(J.jsx)("div",{className:Qe.a.SearchCont,children:Object(J.jsx)(ae.a,{sx:{m:1,width:300,mt:3},children:Object(J.jsx)(re.a,{style:{color:"#587850",backgroundColor:"#fff"},multiple:!0,displayEmpty:!0,value:s,onChange:function(e){var t=e.target.value;u("string"===typeof t?t.split(","):t);var n="string"===typeof t?t.split(","):t;r(n)},input:Object(J.jsx)(te.a,{}),renderValue:function(e){return 0===e.length?Object(J.jsx)("em",{children:"Select Products"}):e.join(", ")},MenuProps:rt,inputProps:{"aria-label":"Without label"},children:n.map((function(e){return Object(J.jsx)(ne.a,{value:e.name,children:e.name},e.name)}))})})}),Object(J.jsx)("div",{className:Qe.a.graphContainer,children:a.length>0?Object(J.jsx)(at,{loading:t,data:a}):Object(J.jsx)("span",{children:"No Products Selected. Select Product to Display Graph "})}),Object(J.jsx)(Q,{})]})},ot=Object(d.b)((function(e){return{data:e.Trends.data,graphData:e.Trends.graphData,loading:e.Trends.loading,error:e.Trends.error}}),(function(e){return{actions:Object(j.b)(Object(l.a)({},a),e)}}))((function(e){return Object(o.useEffect)((function(){return e.actions.getNamesDetails(),function(){}}),[]),Object(J.jsx)(ct,{names:e.data,loading:e.loading,graphData:e.graphData,graphDataCollector:e.actions.getGraphDataDetails})})),it=[{path:"/",component:Object(J.jsx)(Ne,{})},{path:"/Login",component:Object(J.jsx)(Ye,{})},{path:"Home",component:Object(J.jsx)(Ne,{})},{path:"Feeds",component:Object(J.jsx)(De,{})},{path:"Trends",component:Object(J.jsx)(ot,{})},{path:"Profile",component:Object(J.jsx)(ze,{})},{path:"SuperSecretPathVickyNandha",component:Object(J.jsx)(fe,{})}],st=n(57),ut=n(78),lt=n.n(ut),dt=function(e){var t=e.details,n=e.hideNav,a=void 0===n?[]:n,r=Object(ke.f)(),c=Object(ke.e)(),i=Object(o.useRef)(null),s=Object(o.useState)("0px"),u=Object(V.a)(s,2),l=u[0],d=u[1],j=Object(o.useState)(""),p=Object(V.a)(j,2),b=p[0],f=p[1];return Object(o.useEffect)((function(){return console.log(b),f(window.location.pathname),function(){f("")}}),[c]),Object(J.jsx)(J.Fragment,{children:a.includes(b)?null:Object(J.jsxs)("div",{className:lt.a.bottomNavContainer,children:[t.map((function(e,t){return Object(J.jsxs)("div",{onClick:function(){return n=t,a=e.path,d(n*i.current.offsetWidth),void r(a);var n,a},className:lt.a.itemHolder,children:[Object(J.jsx)("img",{alt:"",src:e.icon}),Object(J.jsx)("span",{children:e.name})]},"nav_"+t)})),Object(J.jsx)("div",{ref:i,className:lt.a.highlighter,style:{width:"calc(100vw / "+t.length+")",left:l}})]})})},jt=[{name:"Home",icon:n.p+"static/media/Home.341d4395.svg",path:"/Home"},{name:"Feeds",icon:n.p+"static/media/Feeds.57544f23.svg",path:"/Feeds"},{name:"Trends",icon:n.p+"static/media/Trends.dbf01425.svg",path:"/Trends"}],pt=["/Login","/Profile","/SuperSecretPathVickyNandha"],bt=function(){return Object(J.jsx)(J.Fragment,{children:Object(J.jsxs)(st.a,{children:[Object(J.jsx)(ke.c,{children:it?it.map((function(e){return Object(J.jsx)(ke.a,{path:e.path,element:e.component},e.path)})):null}),Object(J.jsx)(dt,{details:jt,hideNav:pt})]})})},ft=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function Ot(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://cra.link/PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}var ht=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,219)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,c=t.getLCP,o=t.getTTFB;n(e),a(e),r(e),c(e),o(e)}))},gt=n(116),Et=p.GET_FEEDS,_t=p.FETCH_FEEDS,mt=(p.CREATE_FEEDS,{searchValue:"",sortValue:{name:"Name",asc:!0},data:[],loading:!1,error:null}),xt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:mt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case Et:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case _t:return Object(l.a)(Object(l.a)({},e),{},{data:t.payload,loading:!1,error:null});default:return e}},vt=p.REGISTER_USER,Ct=p.REGISTER_SUCC,St=p.REGISTER_ERR,Tt=p.VALIDATE_USER,Dt=p.FORGOT_SEND_CODE,At=p.FORGOT_SEND_SUCC,Rt=p.RESET_LOGIN,Pt=p.CHANGE_PASSWORD,wt={data:null,loading:!1,forgotPassCode:!1,forgotEmail:null,error:null},Ft=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case vt:case Dt:case Tt:return Object(l.a)(Object(l.a)({},e),{},{error:null,loading:!0});case Ct:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,data:t.payload,forgotPassCode:!1,forgotEmail:null,error:null});case At:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,data:null,forgotPassCode:!0,forgotEmail:t.payload,error:null});case Pt:return Object(l.a)(Object(l.a)({},e),{},{error:null,loading:!0});case St:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,data:null,error:t.payload});case Rt:return Object(l.a)(Object(l.a)({},e),{},{loading:!1,data:null,error:null,forgotPassCode:!1,forgotEmail:null});default:return e}},yt=p.GET_PRODUCTS,Nt=p.FETCH_PRODUCTS,kt=p.UPDATE_SEARCH,Gt=p.UPDATE_SORTBY,Ut=(p.UPDATE_SEL_CATS,p.DELETE_SEL_CATS,p.GET_PRICE_RANGE,p.UPDATE_PRICE_RANGE,{searchValue:"",sortValue:{name:"Name",asc:!0},data:[],loading:!1,error:null}),Lt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ut,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case yt:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case Nt:return Object(l.a)(Object(l.a)({},e),{},{data:t.payload,loading:!1,error:null});case kt:return Object(l.a)(Object(l.a)({},e),{},{searchValue:t.payload});case Gt:return Object(l.a)(Object(l.a)({},e),{},{sortValue:t.payload});default:return e}},It=p.GET_NAMES,Ht=p.FETCH_NAMES,Bt=p.GET_TRENDS_GRAPH_DATA,Vt=p.FETCH_TRENDS_GRAPH_DATA,Wt={searchValue:[],sortValue:{name:"Name",asc:!0},data:[],graphData:[],loading:!1,error:null},Mt=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Wt,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case It:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case Ht:return Object(l.a)(Object(l.a)({},e),{},{data:t.payload,loading:!1,error:null});case Bt:return Object(l.a)(Object(l.a)({},e),{},{loading:!0});case Vt:return Object(l.a)(Object(l.a)({},e),{},{graphData:t.payload,loading:!1,error:null});default:return e}},Jt=Object(j.c)({Login:Ft,Products:Lt,Feeds:xt,Trends:Mt}),Yt=function(e,t){return Jt(e,t)},qt=n(11),Zt=n.n(qt),Xt=n(12),zt=n(115),Kt=n.n(zt),Qt="http://localhost:3001/users/";Qt="".concat(window.location.protocol,"//").concat(window.location.host,"/users/"),console.log("production");var $t=Kt.a.create({baseURL:Qt}),en=function(e){return $t.post("/user/register",e).then((function(e){return e.data}))},tn=function(e){return $t.post("/user/validate",e).then((function(e){return e.data}))},nn=function(e){return $t.post("/user/resetPassword",e).then((function(e){return e.data}))},an=function(e){return $t.post("/user/changePassword",e).then((function(e){return e.data}))},rn=function(e){return $t.get("/allProds",e).then((function(e){return e.data}))},cn=function(e){return $t.post("/createProduct",e).then((function(e){return e.data}))},on=function(e){return $t.delete("/deleteProducts",{params:{names:JSON.stringify(e)}}).then((function(e){return e.data}))},sn=function(e){return $t.post("/updatePrice",e).then((function(e){return e.data}))},un=function(e){return $t.get("/allFeeds",e).then((function(e){return e.data}))},ln=function(e){return $t.post("/createFeed",e).then((function(e){return e.data}))},dn=function(e){return $t.get("/getNames",e).then((function(e){return e.data}))},jn=function(e){return $t.get("/getGraphData",{params:{names:JSON.stringify(e)}}).then((function(e){return e.data}))},pn=Zt.a.mark(En),bn=Zt.a.mark(_n),fn=Zt.a.mark(mn),On=Zt.a.mark(xn),hn=p.GET_FEEDS,gn=p.CREATE_FEEDS;function En(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(hn,_n);case 2:case"end":return e.stop()}}),pn)}function _n(e){var t;return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.b)(un);case 2:return t=e.sent,e.next=5,Object(Xt.d)(H(t));case 5:case"end":return e.stop()}}),bn)}function mn(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(gn,xn);case 2:case"end":return e.stop()}}),fn)}function xn(e){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Xt.b)(ln,e.payload);case 2:t.sent;case 3:case"end":return t.stop()}}),On)}p.REGISTER_USER;var vn=p.REGISTER_SUCC,Cn=p.REGISTER_ERR,Sn=(p.VALIDATE_USER,p.FORGOT_SEND_CODE,p.FORGOT_SEND_SUCC),Tn=(p.CHANGE_PASSWORD,p.RESET_LOGIN,function(e){return{type:vn,payload:e}}),Dn=function(e){return{type:Cn,payload:e}},An=function(e){return{type:Sn,payload:e}},Rn=Zt.a.mark(Bn),Pn=Zt.a.mark(Vn),wn=Zt.a.mark(Wn),Fn=Zt.a.mark(Mn),yn=Zt.a.mark(Jn),Nn=Zt.a.mark(Yn),kn=Zt.a.mark(qn),Gn=Zt.a.mark(Zn),Un=p.REGISTER_USER,Ln=p.VALIDATE_USER,In=p.FORGOT_SEND_CODE,Hn=p.CHANGE_PASSWORD;function Bn(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(Un,Jn);case 2:case"end":return e.stop()}}),Rn)}function Vn(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(Ln,Yn);case 2:case"end":return e.stop()}}),Pn)}function Wn(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(In,qn);case 2:case"end":return e.stop()}}),wn)}function Mn(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(Hn,Zn);case 2:case"end":return e.stop()}}),Fn)}function Jn(e){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Xt.b)(en,e.payload);case 3:return t.sent,t.next=6,Object(Xt.d)(Tn(e.payload.userEmail));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Xt.d)(Dn("Cannot Register. Email already registered."));case 12:case"end":return t.stop()}}),yn,null,[[0,8]])}function Yn(e){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Xt.b)(tn,e.payload);case 3:return t.sent,t.next=6,Object(Xt.d)(Tn(e.payload.userEmail));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Xt.d)(Dn("Error Validating User. Please check Email and Password"));case 12:case"end":return t.stop()}}),Nn,null,[[0,8]])}function qn(e){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Xt.b)(nn,e.payload);case 3:return t.sent,t.next=6,Object(Xt.d)(An(e.payload.userEmail));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Xt.d)(Dn("Error resetting Password. Please check Email."));case 12:case"end":return t.stop()}}),kn,null,[[0,8]])}function Zn(e){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,Object(Xt.b)(an,e.payload);case 3:return t.sent,t.next=6,Object(Xt.d)(Tn(e.payload.userEmail));case 6:t.next=12;break;case 8:return t.prev=8,t.t0=t.catch(0),t.next=12,Object(Xt.d)(Dn("Wrong Passcode Please Try again."));case 12:case"end":return t.stop()}}),Gn,null,[[0,8]])}var Xn=Zt.a.mark(ia),zn=Zt.a.mark(sa),Kn=Zt.a.mark(ua),Qn=Zt.a.mark(la),$n=Zt.a.mark(da),ea=Zt.a.mark(ja),ta=Zt.a.mark(pa),na=Zt.a.mark(ba),aa=p.GET_PRODUCTS,ra=p.CREATE_PRODUCT,ca=p.UPDATE_PRICE,oa=p.DELETE_PROD;function ia(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(aa,sa);case 2:case"end":return e.stop()}}),Xn)}function sa(e){var t;return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.b)(rn);case 2:return t=e.sent,e.next=5,Object(Xt.d)(P(t));case 5:case"end":return e.stop()}}),zn)}function ua(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(ra,la);case 2:case"end":return e.stop()}}),Kn)}function la(e){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Xt.b)(cn,e.payload);case 2:t.sent;case 3:case"end":return t.stop()}}),Qn)}function da(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(ca,ja);case 2:case"end":return e.stop()}}),$n)}function ja(e){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Xt.b)(sn,e.payload);case 2:t.sent,g();case 4:case"end":return t.stop()}}),ea)}function pa(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(oa,ba);case 2:case"end":return e.stop()}}),ta)}function ba(e){return Zt.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,Object(Xt.b)(on,e.payload);case 2:t.sent,g();case 4:case"end":return t.stop()}}),na)}var fa=Zt.a.mark(ma),Oa=Zt.a.mark(xa),ha=Zt.a.mark(va),ga=Zt.a.mark(Ca),Ea=p.GET_NAMES,_a=p.GET_TRENDS_GRAPH_DATA;function ma(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(Ea,xa);case 2:case"end":return e.stop()}}),fa)}function xa(e){var t;return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.b)(dn);case 2:return t=e.sent,e.next=5,Object(Xt.d)(E(t));case 5:case"end":return e.stop()}}),Oa)}function va(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.e)(_a,Ca);case 2:case"end":return e.stop()}}),ha)}function Ca(e){var t;return Zt.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,Object(Xt.b)(jn,e.payload);case 2:return t=n.sent,n.next=5,Object(Xt.d)(m(t));case 5:case"end":return n.stop()}}),ga)}var Sa=Zt.a.mark(Ta);function Ta(){return Zt.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Xt.a)([Object(Xt.c)(Bn),Object(Xt.c)(Vn),Object(Xt.c)(Wn),Object(Xt.c)(Mn),Object(Xt.c)(ia),Object(Xt.c)(En),Object(Xt.c)(ma),Object(Xt.c)(va),Object(Xt.c)(ua),Object(Xt.c)(da),Object(Xt.c)(pa),Object(Xt.c)(mn)]);case 2:case"end":return e.stop()}}),Sa)}var Da=Object(gt.a)(),Aa=Object(j.e)(Yt,Object(j.d)(Object(j.a)(Da)));Da.run(Ta);var Ra=Aa,Pa=n(202);u.a.render(Object(J.jsx)(i.a.StrictMode,{children:Object(J.jsx)(Pa.a,{injectFirst:!0,children:Object(J.jsx)(d.a,{store:Ra,children:Object(J.jsx)(bt,{})})})}),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");ft?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(n){var a=n.headers.get("content-type");404===n.status||null!=a&&-1===a.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):Ot(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://cra.link/PWA")}))):Ot(t,e)}))}}(),ht()},49:function(e,t,n){e.exports={container:"Login_container__17pSb",loginContainer:"Login_loginContainer__-h8a2",orCont:"Login_orCont__Jlx3s",googleSign:"Login_googleSign__3tEVp",fbSign:"Login_fbSign__3p2qh",backgroundImage:"Login_backgroundImage__3Xzn5"}},64:function(e,t,n){e.exports={container:"card_container__3_L9M",heading:"card_heading__36Urq",price:"card_price__2eOJo",favIcon:"card_favIcon__3OdV_"}},65:function(e,t,n){e.exports={nameLog:"Profile_nameLog__7Xe-g",nameCont:"Profile_nameCont__3IlZg",detailCont:"Profile_detailCont__3mvjr",buttonCont:"Profile_buttonCont__2Nfqe"}},75:function(e,t,n){e.exports={graphContainer:"Admin_graphContainer__P4DE_",SearchCont:"Admin_SearchCont__3TZF_",addProd:"Admin_addProd__2DA5W",deleteProd:"Admin_deleteProd__2vye6",feedAddCont:"Admin_feedAddCont__1TL0Z"}},77:function(e,t,n){e.exports={container:"NewsCard_container__2ZqK5",content:"NewsCard_content__1078S",date:"NewsCard_date__1IG1t"}},78:function(e,t,n){e.exports={bottomNavContainer:"BottomNav_bottomNavContainer__2KxC9",itemHolder:"BottomNav_itemHolder__C_AGq",highlighter:"BottomNav_highlighter__jz-69"}},85:function(e,t,n){e.exports={leftTree:"backgroundTrees_leftTree__2raCx",rightTree:"backgroundTrees_rightTree__16GOD"}},88:function(e,t,n){e.exports={inputtransparent:"input_inputtransparent__2V8IG",container:"input_container__3LZqJ"}},89:function(e,t,n){e.exports={cardContainer:"Feeds_cardContainer__Ck1HY",SearchCont:"Feeds_SearchCont__2ojek"}},90:function(e,t,n){e.exports={cardContainer:"Home_cardContainer__2RjZQ",SearchCont:"Home_SearchCont__3cozI"}},91:function(e,t,n){e.exports={graphContainer:"Trends_graphContainer__276X1"}}},[[164,1,2]]]);
//# sourceMappingURL=main.ab15b274.chunk.js.map