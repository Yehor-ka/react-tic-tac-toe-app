(this["webpackJsonpreact-tic-tac-toe-app"]=this["webpackJsonpreact-tic-tac-toe-app"]||[]).push([[0],{68:function(e,n,t){},69:function(e,n,t){"use strict";t.r(n);var r=t(0),s=t.n(r),a=t(10),c=t.n(a),i=t(52),o=t(13),u=t(14),j=t(5),l=function(e){var n=e.value,t=e.onClickStep,r=e.winSquare;return Object(j.jsx)("div",{onClick:t,className:"square",style:{backgroundColor:r?"green":"rgb(63, 42, 71)"},children:Object(j.jsx)("span",{children:n})})},b=function(e){var n=e.board,t=e.handleStep,r=e.winPos;return Object(j.jsx)("div",{className:"board",children:n.map((function(e,n){return Object(j.jsx)(l,{winSquare:r[0]===n||r[1]===n||r[2]===n,value:e,onClickStep:function(){return t(n)}},n)}))})},O=function(e){var n=e.usersConfig,t=n.firstUsername,r=n.firstUserCount,s=n.secondUsername,a=n.secondUserCount;return Object(j.jsxs)("div",{className:"score",children:[Object(j.jsx)("h1",{className:"score__text",children:"Score"}),Object(j.jsxs)("div",{children:[Object(j.jsxs)("h3",{className:"score__text",children:[t,": ",r]}),Object(j.jsxs)("h3",{className:"score__text",children:[s,": ",a]})]})]})},f=t(105),d=t(100),m=t(103),h=function(e){var n=e.isOpenResult,t=e.winner,r=e.usersConfig,s=e.setIsOpenResult,a=e.newGame,c=e.stepsCounter,i=function(){s(!1),setTimeout(a,100)};return Object(j.jsx)(f.a,{open:n,onClose:i,children:Object(j.jsxs)(d.a,{children:[null!==t&&9!==c?Object(j.jsxs)("h2",{children:["Winner is ","X"===t?r.firstUsername:r.secondUsername]}):Object(j.jsx)("h2",{children:"It`s draw"}),Object(j.jsx)(m.a,{style:{marginTop:15},variant:"outlined",color:"primary",onClick:i,children:"New Game"})]})})},x=t(35),p=t(102),g=function(e){var n=e.isOpenBeginSetting,t=e.setUsersConfig,r=e.setIsOpenBeginSettings,a=s.a.useState({firstUsername:"",secondUsername:""}),c=Object(u.a)(a,2),i=c[0],l=c[1];s.a.useEffect((function(){""===i.firstUsername.trim()&&l((function(e){return Object(o.a)(Object(o.a)({},e),{},{firstUsername:"Player1"})})),""===i.secondUsername.trim()&&l((function(e){return Object(o.a)(Object(o.a)({},e),{},{secondUsername:"Player2"})}))}),[i]);var b=function(e){var n=e.target.name,t=e.target.value;l((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(x.a)({},n,t))}))};return Object(j.jsx)(f.a,{open:n,children:Object(j.jsxs)(d.a,{children:[Object(j.jsx)(p.a,{name:"firstUsername",label:"First Username",type:"text",fullWidth:!0,onChange:b}),Object(j.jsx)(p.a,{name:"secondUsername",label:"Second Username",type:"text",fullWidth:!0,onChange:b}),Object(j.jsx)(m.a,{style:{marginTop:15},variant:"contained",color:"secondary",onClick:function(){t((function(e){return Object(o.a)(Object(o.a)({},e),i)})),r(!1)},children:"Add players"})]})})},U=function(){var e=s.a.useState(Array(9).fill(null)),n=Object(u.a)(e,2),t=n[0],r=n[1],a=s.a.useState(!0),c=Object(u.a)(a,2),l=c[0],f=c[1],d=s.a.useState(!1),m=Object(u.a)(d,2),x=m[0],p=m[1],U=s.a.useState({firstUsername:"",firstUserCount:0,secondUsername:"",secondUserCount:0}),C=Object(u.a)(U,2),v=C[0],S=C[1],w=s.a.useState(!1),y=Object(u.a)(w,2),N=y[0],k=y[1],I=s.a.useState(0),_=Object(u.a)(I,2),B=_[0],E=_[1],P=s.a.useState([]),R=Object(u.a)(P,2),W=R[0],q=R[1],A=s.a.useMemo((function(){return function(e){for(var n=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],t=0;t<n.length;t++){var r=Object(u.a)(n[t],3),s=r[0],a=r[1],c=r[2];if(e[s]&&e[s]===e[a]&&e[s]===e[c])return{winner:e[s],arr:[s,a,c]}}return{winner:null,arr:[-1,-1,-1]}}(t)}),[t]),G=A.winner,T=A.arr;s.a.useEffect((function(){k(!0)}),[]),s.a.useEffect((function(){q(T)}),[T]),s.a.useEffect((function(){null!==G?(p(!0),f(!0),E(0),S("X"===G?function(e){return Object(o.a)(Object(o.a)({},e),{},{firstUserCount:e.firstUserCount+1})}:function(e){return Object(o.a)(Object(o.a)({},e),{},{secondUserCount:e.secondUserCount+1})})):null===G&&9===B&&(p(!0),E(0))}),[t]);return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{className:"wrapper",children:[Object(j.jsx)(b,{board:t,handleStep:function(e){var n=Object(i.a)(t);G||n[e]||(E((function(e){return e+1})),n[e]=l?"X":"O",r(n),f(!l))},winPos:W}),Object(j.jsx)(O,{usersConfig:v})]}),Object(j.jsx)(h,{newGame:function(){r(Array(9).fill(null))},usersConfig:v,isOpenResult:x,setIsOpenResult:p,winner:G,stepsCounter:B}),Object(j.jsx)(g,{isOpenBeginSetting:N,setIsOpenBeginSettings:k,setUsersConfig:S})]})},C=t(101),v=function(){return Object(j.jsx)(C.a,{maxWidth:"md",children:Object(j.jsx)("div",{className:"container",children:Object(j.jsx)(U,{})})})};t(68);c.a.render(Object(j.jsx)(s.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.de1bd6d9.chunk.js.map