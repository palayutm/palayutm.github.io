(window["webpackJsonppalayutm-website"]=window["webpackJsonppalayutm-website"]||[]).push([[0],{67:function(e,t,a){e.exports=a(78)},78:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(8),i=a.n(c),o=a(44),l=a(16),s=a(3),u=a(54),m=a(29),d=a(131),h=a(123),p=a(124),f=a(125),E=a(127),g=a(33),y=a(126),b=a(122),w=a(56),v=a.n(w),O=a(57),j=a.n(O),k=a(58),_=a.n(k),S=a(128),x=a(129),C=a(130),P=a(60),D=a.n(P),N=a(59),T=a.n(N),B=a(32),I=a(26),F=a(23),H=a(34),R=a(24),L=a(52),M=a(53),U=a(61),A=a(115),G=a(119),J=a(118),W=a(116),Z=a(117),q=a(79),z=a(132),K=a(120),Q=a(121),V=a(133),X=function(e){function t(e){var a;return Object(H.a)(this,t),(a=Object(L.a)(this,Object(M.a)(t).call(this,e))).state={show_name:["Codeforces","TopCoder","AtCoder","Codeforces Gym","CodeChef"],selected:[!0,!0,!0,!1,!1],api_name:["codeforces","top_coder","at_coder","codeforces_gym","code_chef"],contests:[]},a.update_contests(),a}return Object(U.a)(t,e),Object(R.a)(t,[{key:"durationToText",value:function(e){if("-"===e)return"-";var t=parseInt(e),a=Math.floor(t/86400),n="days";1===a&&(n="day"),t%=86400;var r=Math.floor(t/3600);r=("0"+r).slice(-2),t%=3600;var c=Math.floor(t/60);return c=("0"+c).slice(-2),a>0?"".concat(a," ").concat(n," and ").concat(r,":").concat(c):"".concat(r,":").concat(c)}},{key:"localTimeFromUtc",value:function(e){if("-"===e)return"-";var t=new Date(e);return new Intl.DateTimeFormat("en-US",{year:"numeric",day:"numeric",month:"short",weekday:"short",hour:"numeric",minute:"numeric",timeZoneName:"short",hour12:!1}).format(t)}},{key:"create_contest",value:function(e){return{name:e.name,url:e.url,start_time:this.localTimeFromUtc(e.start_time),duration:this.durationToText(e.duration),status:"BEFORE"===e.status?"Waiting":"Running"}}},{key:"update_contests",value:function(){for(var e=this,t=[],a=!1,n=0;n<this.state.show_name.length;n++)if(this.state.selected[n]){a=!0;var r="https://www.kontests.net/api/v1/"+this.state.api_name[n];fetch(r).then((function(e){return e.json()})).then((function(a){var n=!0,r=!1,c=void 0;try{for(var i,o=a[Symbol.iterator]();!(n=(i=o.next()).done);n=!0){var l=i.value;"ZCO Practice Contest"!==l.name&&"INOI Practice Contest"!==l.name&&t.push(e.create_contest(l))}}catch(s){r=!0,c=s}finally{try{n||null==o.return||o.return()}finally{if(r)throw c}}e.setState({contests:t})})).catch((function(e){console.error(e)}))}a||this.setState({contests:t})}},{key:"renderTable",value:function(){return this.state.contests.sort((function(e,t){return new Date(e.start_time)-new Date(t.start_time)})),r.a.createElement(q.a,null,r.a.createElement(A.a,null,r.a.createElement(W.a,null,r.a.createElement(Z.a,null,r.a.createElement(J.a,{width:"35%",align:"center"},"Name"),r.a.createElement(J.a,{align:"center"},"Start time"),r.a.createElement(J.a,{align:"center"},"Duration"),r.a.createElement(J.a,{align:"center"},"Status"))),r.a.createElement(G.a,null,this.state.contests.map((function(e){return r.a.createElement(Z.a,{key:e.name},r.a.createElement(J.a,{align:"center"},e.name,r.a.createElement("br",null),r.a.createElement("a",{href:e.url},"Enter")),r.a.createElement(J.a,{align:"center"},e.start_time),r.a.createElement(J.a,{align:"center"},e.duration),r.a.createElement(J.a,{align:"center"},e.status))})))))}},{key:"render",value:function(){var e=this,t=Object(F.a)(Array(this.state.show_name.length).keys());return r.a.createElement("div",null,r.a.createElement(V.a,{component:"fieldset"},r.a.createElement(K.a,{"aria-label":"position",name:"position",row:!0},t.map((function(t){return r.a.createElement(Q.a,{key:e.state.show_name[t],control:r.a.createElement(z.a,{color:"primary"}),label:e.state.show_name[t],checked:e.state.selected[t],labelPlacement:"start",onChange:(a=t,function(t){var n=e.state.selected;n[a]=t.target.checked,e.setState({selected:n}),e.update_contests()})});var a})))),this.renderTable())}}]),t}(r.a.Component);function Y(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function $(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?Y(a,!0).forEach((function(t){Object(l.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):Y(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var ee=Object(u.a)((function(e){return{root:{display:"flex"},appBar:{transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen})},appBarShift:{width:"calc(100% - ".concat(240,"px)"),marginLeft:240,transition:e.transitions.create(["margin","width"],{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen})},menuButton:{marginRight:e.spacing(2)},hide:{display:"none"},drawer:{width:240,flexShrink:0},drawerPaper:{width:240},drawerHeader:$({display:"flex",alignItems:"center",padding:e.spacing(0,1)},e.mixins.toolbar,{justifyContent:"flex-end"}),content:{flexGrow:1,padding:e.spacing(3),transition:e.transitions.create("margin",{easing:e.transitions.easing.sharp,duration:e.transitions.duration.leavingScreen}),marginLeft:-240},contentShift:{transition:e.transitions.create("margin",{easing:e.transitions.easing.easeOut,duration:e.transitions.duration.enteringScreen}),marginLeft:0}}}));i.a.render(r.a.createElement((function(){var e=ee(),t=Object(m.a)(),a=r.a.useState(!0),n=Object(o.a)(a,2),c=n[0],i=n[1],u=r.a.useState(window.location.pathname),w=Object(o.a)(u,2),O=w[0],k=w[1];function P(e,t){k(t)}return r.a.createElement(B.a,null,r.a.createElement("div",{className:e.root},r.a.createElement(h.a,null),r.a.createElement(p.a,{color:"inherit",position:"fixed",className:Object(s.a)(e.appBar,Object(l.a)({},e.appBarShift,c))},r.a.createElement(f.a,null,r.a.createElement(b.a,{color:"inherit","aria-label":"open drawer",onClick:function(){i(!0)},edge:"start",className:Object(s.a)(e.menuButton,c&&e.hide)},r.a.createElement(v.a,null)),r.a.createElement(g.a,{variant:"h6",noWrap:!0},"palaytum's home"))),r.a.createElement(d.a,{className:e.drawer,variant:"persistent",anchor:"left",open:c,classes:{paper:e.drawerPaper}},r.a.createElement("div",{className:e.drawerHeader},r.a.createElement(b.a,{onClick:function(){i(!1)}},"ltr"===t.direction?r.a.createElement(j.a,null):r.a.createElement(_.a,null))),r.a.createElement(y.a,null),r.a.createElement(E.a,null,r.a.createElement(B.b,{to:"/",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(S.a,{button:!0,selected:null!=Object(I.d)(O,{path:"/",exact:!0}),key:"home",onClick:function(e){return P(0,"/")}},r.a.createElement(x.a,null,r.a.createElement(T.a,null)),r.a.createElement(C.a,{primary:"Home"}))),r.a.createElement(B.b,{to:"/calendar/",style:{color:"inherit",textDecoration:"inherit"}},r.a.createElement(S.a,{button:!0,key:"calendar",selected:null!=Object(I.d)(O,{path:"/calendar/",exact:!0}),onClick:function(e){return P(0,"/calendar/")}},r.a.createElement(x.a,null,r.a.createElement(D.a,null)),r.a.createElement(C.a,{primary:"Recent contests"}))))),r.a.createElement("main",{className:Object(s.a)(e.content,Object(l.a)({},e.contentShift,c))},r.a.createElement("div",{className:e.drawerHeader}),r.a.createElement("div",null,r.a.createElement(I.a,{path:"/calendar/",component:X})))))}),null),document.getElementById("root"))}},[[67,1,2]]]);
//# sourceMappingURL=main.6280612e.chunk.js.map