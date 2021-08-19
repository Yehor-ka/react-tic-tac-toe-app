(this["webpackJsonpreact-tic-tac-toe-app"]=this["webpackJsonpreact-tic-tac-toe-app"]||[]).push([[0],{68:function(e,t,n){},69:function(e,t,n){"use strict";n.r(t);var r=n(0),s=n.n(r),a=n(10),c=n.n(a),i=n(52),o=n(13),u=n(14),l=n(5),j=function(e){var t=e.value,n=e.onClickStep;return Object(l.jsx)("div",{onClick:n,className:"square",children:Object(l.jsx)("span",{children:t})})},d=function(e){var t=e.board,n=e.handleStep,r=e.lineThroughStyle;return Object(l.jsxs)("div",{className:"board",children:[Object(l.jsx)("div",{className:"board__line-through",style:r}),Object(l.jsx)("div",{className:"board__field",children:t.map((function(e,t){return Object(l.jsx)(j,{value:e,onClickStep:function(){return n(t)}},t)}))})]})},p=function(e){var t=e.usersConfig,n=t.firstUsername,r=t.firstUserCount,s=t.secondUsername,a=t.secondUserCount;return Object(l.jsxs)("div",{className:"score",children:[Object(l.jsx)("h1",{className:"score__text",children:"Score"}),Object(l.jsxs)("div",{children:[Object(l.jsxs)("h3",{className:"score__text",children:[n,": ",r]}),Object(l.jsxs)("h3",{className:"score__text",children:[s,": ",a]})]})]})},f=n(105),x=n(100),h=n(103),b=function(e){var t=e.isOpenResult,n=e.winner,r=e.usersConfig,s=e.setIsOpenResult,a=e.newGame,c=e.stepsCounter,i=function(){s(!1),setTimeout(a,100)};return Object(l.jsx)(f.a,{open:t,onClose:i,children:Object(l.jsxs)(x.a,{children:[null!==n&&9!==c?Object(l.jsxs)("h2",{children:["Winner is ","X"===n?r.firstUsername:r.secondUsername]}):Object(l.jsx)("h2",{children:"It`s draw"}),Object(l.jsx)(h.a,{style:{marginTop:15},variant:"outlined",color:"primary",onClick:i,children:"New Game"})]})})},O=n(35),m=n(102),g=function(e){var t=e.isOpenBeginSetting,n=e.setUsersConfig,r=e.setIsOpenBeginSettings,a=s.a.useState({firstUsername:"",secondUsername:""}),c=Object(u.a)(a,2),i=c[0],j=c[1];s.a.useEffect((function(){""===i.firstUsername.trim()&&j((function(e){return Object(o.a)(Object(o.a)({},e),{},{firstUsername:"Player1"})})),""===i.secondUsername.trim()&&j((function(e){return Object(o.a)(Object(o.a)({},e),{},{secondUsername:"Player2"})}))}),[i]);var d=function(e){var t=e.target.name,n=e.target.value;j((function(e){return Object(o.a)(Object(o.a)({},e),{},Object(O.a)({},t,n))}))};return Object(l.jsx)(f.a,{open:t,children:Object(l.jsxs)(x.a,{children:[Object(l.jsx)(m.a,{name:"firstUsername",label:"First Username",type:"text",fullWidth:!0,onChange:d}),Object(l.jsx)(m.a,{name:"secondUsername",label:"Second Username",type:"text",fullWidth:!0,onChange:d}),Object(l.jsx)(h.a,{style:{marginTop:15},variant:"contained",color:"secondary",onClick:function(){n((function(e){return Object(o.a)(Object(o.a)({},e),i)})),r(!1)},children:"Add players"})]})})},U=function(){var e=s.a.useState(Array(9).fill(null)),t=Object(u.a)(e,2),n=t[0],r=t[1],a=s.a.useState(!0),c=Object(u.a)(a,2),j=c[0],f=c[1],x=s.a.useState(!1),h=Object(u.a)(x,2),O=h[0],m=h[1],U=s.a.useState({firstUsername:"",firstUserCount:0,secondUsername:"",secondUserCount:0}),v=Object(u.a)(U,2),C=v[0],S=v[1],w=s.a.useState(!1),y=Object(u.a)(w,2),N=y[0],_=y[1],k=s.a.useState(0),I=Object(u.a)(k,2),B=I[0],E=I[1],T=s.a.useState({}),R=Object(u.a)(T,2),W=R[0],A=R[1],G=s.a.useMemo((function(){return function(e){for(var t=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]],n=0;n<t.length;n++){var r=Object(u.a)(t[n],3),s=r[0],a=r[1],c=r[2];if(e[s]&&e[s]===e[a]&&e[s]===e[c])return{winner:e[s],arr:[s,a,c]}}return{winner:null,arr:[-1,-1,-1]}}(n)}),[n]),X=G.winner,F=G.arr;s.a.useEffect((function(){_(!0)}),[]),s.a.useEffect((function(){A(function(e){switch("["+String(e)+"]"){case"[0,1,2]":return{top:"45px",left:"5px",height:"10px",width:"320px"};case"[3,4,5]":return{top:"155px",left:"5px",height:"10px",width:"320px"};case"[6,7,8]":return{top:"265px",left:"5px",height:"10px",width:"320px"};case"[0,4,8]":return{top:"-24px",left:"165px",height:"380px",width:"10px",transform:"rotate(-45deg)"};case"[2,4,6]":return{top:"-24px",left:"165px",height:"380px",width:"10px",transform:"rotate(45deg)"};case"[0,3,6]":return{top:"5px",left:"45px",height:"320px",width:"10px"};case"[1,4,7]":return{top:"5px",left:"160px",height:"320px",width:"10px"};case"[2,5,8]":return{top:"5px",left:"270px",height:"320px",width:"10px"};default:return null}}(F))}),[F]),s.a.useEffect((function(){null!==X?(m(!0),f(!0),E(0),S("X"===X?function(e){return Object(o.a)(Object(o.a)({},e),{},{firstUserCount:e.firstUserCount+1})}:function(e){return Object(o.a)(Object(o.a)({},e),{},{secondUserCount:e.secondUserCount+1})})):null===X&&9===B&&(m(!0),E(0))}),[n]);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsxs)("div",{className:"wrapper",children:[Object(l.jsx)(d,{lineThroughStyle:W,board:n,handleStep:function(e){var t=Object(i.a)(n);X||t[e]||(E((function(e){return e+1})),t[e]=j?"X":"O",r(t),f(!j))}}),Object(l.jsx)(p,{usersConfig:C})]}),Object(l.jsx)(b,{newGame:function(){r(Array(9).fill(null))},usersConfig:C,isOpenResult:O,setIsOpenResult:m,winner:X,stepsCounter:B}),Object(l.jsx)(g,{isOpenBeginSetting:N,setIsOpenBeginSettings:_,setUsersConfig:S})]})},v=n(101),C=function(){return Object(l.jsx)(v.a,{maxWidth:"md",children:Object(l.jsx)("div",{className:"container",children:Object(l.jsx)(U,{})})})};n(68);c.a.render(Object(l.jsx)(s.a.StrictMode,{children:Object(l.jsx)(C,{})}),document.getElementById("root"))}},[[69,1,2]]]);
//# sourceMappingURL=main.a05620aa.chunk.js.map