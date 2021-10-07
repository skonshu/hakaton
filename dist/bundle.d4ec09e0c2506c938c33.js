(()=>{"use strict";var e,t={1361:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(8081),r=n.n(a),l=n(3645),o=n.n(l)()(r());o.push([e.id,".container {\r\n    padding-right: 1rem;\r\n}",""]);const c=o},7599:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(8081),r=n.n(a),l=n(3645),o=n.n(l)()(r());o.push([e.id,".alert-message {\r\n    margin-bottom: 1rem;\r\n}",""]);const c=o},1424:(e,t,n)=>{n.d(t,{Z:()=>c});var a=n(8081),r=n.n(a),l=n(3645),o=n.n(l)()(r());o.push([e.id,".logo {\r\n  float: left;\r\n  width: 67px;\r\n  height: 64px;\r\n  }\r\n  \r\n  .ant-row-rtl .logo {\r\n    float: right;\r\n    margin: 16px 0 16px 24px;\r\n  }\r\n  \r\n  .site-layout-background {\r\n    background: #fff;\r\n  }",""]);const c=o},166:(e,t,n)=>{var a=n(7294),r=n(3935),l=n(7183),o=n(8659),c=n(3379),s=n.n(c),i=n(7795),d=n.n(i),u=n(569),m=n.n(u),p=n(3565),g=n.n(p),E=n(9216),y=n.n(E),h=n(4589),v=n.n(h),f=n(1424),I={};I.styleTagTransform=v(),I.setAttributes=g(),I.insert=m().bind(null,"head"),I.domAPI=d(),I.insertStyleElement=y(),s()(f.Z,I),f.Z&&f.Z.locals&&f.Z.locals,n(6946);var M=n(2704),Z=n(9002),b=n(1635),S=n(6772),A=n(7563),w=n(3625);const C=a.createContext({mapInstance:{},setMapInstance:e=>{}}),j=a.memo((()=>a.createElement("div",{id:"map-container",style:{width:"100%",height:"500px"}})),(()=>!0)),x=({lat:e,lon:t,points:n})=>{const{mapInstance:r,setMapInstance:l}=a.useContext(C);return(0,a.useEffect)((()=>{let a,o;return(0,w.z)().then((r=>{const c=new r.Map("map-container",{center:[t,e],zoom:13,key:"810c6285-76cf-4577-a0ce-775d22bc3adb-"});a=new r.Marker(c,{coordinates:[t,e]}),l(c),n.length&&n.forEach((e=>{const t=new r.Marker(c,{coordinates:[e.lon,e.lat]});o.push(t)}))})),()=>{r&&r.destroy(),a&&a.destroy(),o.forEach((e=>e&&e.destroy()))}}),[]),a.createElement(j,null)},N=a.createContext({});var T=n(4312),D=n(3860),L=n(1361),O={};O.styleTagTransform=v(),O.setAttributes=g(),O.insert=m().bind(null,"head"),O.domAPI=d(),O.insertStyleElement=y(),s()(L.Z,O),L.Z&&L.Z.locals&&L.Z.locals;const{Step:P}=T.Z,k=({loading:e,currentStep:t,handleChangeStep:n,points:r})=>a.createElement("div",{className:"container"},e&&a.createElement(D.Z,{loading:e,paragraph:{rows:6}}),a.createElement(T.Z,{current:t,onChange:n,direction:"vertical"},r.map((e=>a.createElement(P,{key:e.id,title:e.pointName,description:e.address})))));var z=n(6349),B=n(7049),U=n(8222),Y=n(3484);const W="http://84.201.139.152:8080";var Q;!function(e){e.CAR="car",e.PEDO="pedo",e.BICYCLE="bicycle"}(Q||(Q={}));const R=({handleStartCalc:e,handleChangeMovmentType:t,isDdisableButton:n})=>a.createElement(a.Fragment,null,a.createElement(Z.Z,{justify:"center"},a.createElement(b.Z,{md:24},a.createElement(z.ZP.Group,{defaultValue:Q.CAR,buttonStyle:"solid",onChange:t},a.createElement(z.ZP.Button,{value:Q.CAR},a.createElement(Y.Z,null)),a.createElement(z.ZP.Button,{value:Q.BICYCLE},"Велосипед"),a.createElement(z.ZP.Button,{value:Q.PEDO},"Пешком")))),a.createElement(B.Z,null),a.createElement(Z.Z,{justify:"center"},a.createElement(b.Z,{md:24},a.createElement(U.Z,{size:"large",type:"primary",onClick:e,disabled:n},"Построить маршрут"))));var J=n(9669),F=n.n(J),G=n(7599),H={};H.styleTagTransform=v(),H.setAttributes=g(),H.insert=m().bind(null,"head"),H.domAPI=d(),H.insertStyleElement=y(),s()(G.Z,H),G.Z&&G.Z.locals&&G.Z.locals;var V=function(e,t,n,a){return new(n||(n=Promise))((function(r,l){function o(e){try{s(a.next(e))}catch(e){l(e)}}function c(e){try{s(a.throw(e))}catch(e){l(e)}}function s(e){var t;e.done?r(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(o,c)}s((a=a.apply(e,t||[])).next())}))};const $=e=>{const[t,n]=(0,a.useState)(!1),[r,l]=(0,a.useState)(""),[o,c]=(0,a.useState)(!1),[s,i]=(0,a.useState)(1),[d,u]=(0,a.useState)([]),[m,p]=(0,a.useState)(Q.CAR),g=(A.parse(e.location.search),{employeeId:1125,date:"2021-10-07",lon:37.3376426,lat:55.7386526});(0,a.useEffect)((()=>{l(""),c(!1),V(void 0,void 0,void 0,(function*(){var e;try{n(!0);const t=yield F().post(`${W}/compass/get-point-list`,{employeeId:g.employeeId,date:g.date});u((null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.points)||[])}catch(e){l(`Ошибка получения точек: ${e}`),c(!0),setTimeout(E,5e3)}finally{n(!1)}}))}),[]);const E=()=>{l(""),c(!1)};return a.createElement(N.Provider,{value:{initialUserParams:g}},a.createElement(Z.Z,null,a.createElement(b.Z,{md:24},r&&a.createElement("div",{className:"alert-message"},a.createElement(S.Z,{message:r,type:o?"error":"success",closable:!0,onClose:E})))),a.createElement(Z.Z,null,a.createElement(b.Z,{md:6},a.createElement(k,{handleChangeStep:e=>{i(e)},loading:t,points:d,currentStep:s})),a.createElement(b.Z,{md:4},a.createElement(R,{handleStartCalc:()=>{V(void 0,void 0,void 0,(function*(){var e;try{n(!0);const t=yield F().post(`${W}/compass/get-tour`,{employeeId:g.employeeId,lat:g.lat,lon:g.lon,date:g.date,movmentType:m});u((null===(e=null==t?void 0:t.data)||void 0===e?void 0:e.points)||[])}catch(e){l(`Ошибка расчета маршрута: ${e}`),c(!0),setTimeout(E,5e3)}finally{n(!1)}}))},handleChangeMovmentType:e=>{e.preventDefault(),p(e.target.value)},isDdisableButton:t})),a.createElement(b.Z,{md:14},a.createElement(x,{lat:g.lat,lon:g.lon,points:d}))))};var _=n(3727),X=n(5977);const{Header:K,Content:q}=l.Z;var ee=n(9409);(0,n(162).ZF)({apiKey:"AIzaSyB5nx4s-0QtrjIWJDOfHBUOzJFldLkR-6o",authDomain:"hakaton-21.firebaseapp.com",projectId:"hakaton-21",storageBucket:"hakaton-21.appspot.com",messagingSenderId:"740901348912",appId:"1:740901348912:web:2b31e4d1330322e1ea6ff5"}),r.render(a.createElement(ee.ZP,null,a.createElement((e=>{const[t,n]=a.useState({});return a.createElement(C.Provider,{value:{mapInstance:t,setMapInstance:n}},e.children)}),null,a.createElement((()=>a.createElement(_.VK,null,a.createElement(l.Z,null,a.createElement(l.Z,{style:{padding:"0 24px 24px"}},a.createElement(o.Z,{style:{margin:"16px 0"}},a.createElement(o.Z.Item,null,a.createElement(_.rU,{to:"/"},"Главная"))),a.createElement(q,{className:"site-layout-background",style:{padding:24,margin:0}},a.createElement(X.rs,null,a.createElement(X.AW,{path:"/",component:$})))),a.createElement(M.$_,null)))),null)),","),document.getElementById("root"))},2445:e=>{e.exports="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cGF0aCBkPSJNMTQuNSAyLjVoLTEzQS41LjUgMCAwIDAgMSAzdjEwYS41LjUgMCAwIDAgLjUuNWgxM2EuNS41IDAgMCAwIC41LS41VjNhLjUuNSAwIDAgMC0uNS0uNXpNNS4yODEgNC43NWExIDEgMCAwIDEgMCAyIDEgMSAwIDAgMSAwLTJ6bTguMDMgNi44M2EuMTI3LjEyNyAwIDAgMS0uMDgxLjAzSDIuNzY5YS4xMjUuMTI1IDAgMCAxLS4wOTYtLjIwN2wyLjY2MS0zLjE1NmEuMTI2LjEyNiAwIDAgMSAuMTc3LS4wMTZsLjAxNi4wMTZMNy4wOCAxMC4wOWwyLjQ3LTIuOTNhLjEyNi4xMjYgMCAwIDEgLjE3Ny0uMDE2bC4wMTUuMDE2IDMuNTg4IDQuMjQ0YS4xMjcuMTI3IDAgMCAxLS4wMi4xNzV6IiBmaWxsPSIjOEM4QzhDIiBmaWxsLXJ1bGU9Im5vbnplcm8iLz48L3N2Zz4="}},n={};function a(e){var r=n[e];if(void 0!==r)return r.exports;var l=n[e]={id:e,loaded:!1,exports:{}};return t[e](l,l.exports,a),l.loaded=!0,l.exports}a.m=t,e=[],a.O=(t,n,r,l)=>{if(!n){var o=1/0;for(d=0;d<e.length;d++){for(var[n,r,l]=e[d],c=!0,s=0;s<n.length;s++)(!1&l||o>=l)&&Object.keys(a.O).every((e=>a.O[e](n[s])))?n.splice(s--,1):(c=!1,l<o&&(o=l));if(c){e.splice(d--,1);var i=r();void 0!==i&&(t=i)}}return t}l=l||0;for(var d=e.length;d>0&&e[d-1][2]>l;d--)e[d]=e[d-1];e[d]=[n,r,l]},a.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return a.d(t,{a:t}),t},a.d=(e,t)=>{for(var n in t)a.o(t,n)&&!a.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},a.g=function(){if("object"==typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"==typeof window)return window}}(),a.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),a.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.nmd=e=>(e.paths=[],e.children||(e.children=[]),e),(()=>{a.b=document.baseURI||self.location.href;var e={179:0};a.O.j=t=>0===e[t];var t=(t,n)=>{var r,l,[o,c,s]=n,i=0;if(o.some((t=>0!==e[t]))){for(r in c)a.o(c,r)&&(a.m[r]=c[r]);if(s)var d=s(a)}for(t&&t(n);i<o.length;i++)l=o[i],a.o(e,l)&&e[l]&&e[l][0](),e[o[i]]=0;return a.O(d)},n=self.webpackChunkpwa=self.webpackChunkpwa||[];n.forEach(t.bind(null,0)),n.push=t.bind(null,n.push.bind(n))})();var r=a.O(void 0,[331],(()=>a(166)));r=a.O(r)})();