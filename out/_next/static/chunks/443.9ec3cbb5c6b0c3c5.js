"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[443],{5443:function(e,r,t){t.r(r),t.d(r,{default:function(){return H}});var n=t(5893),i=t(6817),a=t(6768),l=t(2679),o=t(7294),s=t(4761),d=t(4258),c=Object.defineProperty,p=Object.defineProperties,g=Object.getOwnPropertyDescriptors,f=Object.getOwnPropertySymbols,h=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,r,t)=>r in e?c(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,x=(e,r)=>{for(var t in r||(r={}))h.call(r,t)&&m(e,t,r[t]);if(f)for(var t of f(r))u.call(r,t)&&m(e,t,r[t]);return e},b=(e,r)=>p(e,g(r));let y={xs:(0,a.h)(16),sm:(0,a.h)(20),md:(0,a.h)(26),lg:(0,a.h)(32),xl:(0,a.h)(40)},k=["filled","light","gradient","outline","default"];var v=(0,i.k)((e,{color:r,radius:t,gradient:n},{variant:i,size:l})=>{let o=(0,d.a)({size:l,sizes:y});return{root:x(b(x({},e.fn.fontStyles()),{display:"inline-flex",alignItems:"center",justifyContent:"center",boxSizing:"border-box",width:o,height:o,minWidth:o,minHeight:o,borderRadius:e.fn.radius(t)}),function({theme:e,variant:r,color:t,gradient:n}){if(!k.includes(r))return null;let i=e.fn.variant({variant:r,color:t||e.primaryColor,gradient:n,primaryFallback:!1});return{backgroundColor:i.background,color:i.color,backgroundImage:"gradient"===r?i.background:void 0,border:`${(0,a.h)("gradient"===r?0:1)} solid ${i.border}`}}({theme:e,variant:i,gradient:n,color:r}))}}),j=t(7414),w=Object.defineProperty,O=Object.getOwnPropertySymbols,I=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,z=(e,r,t)=>r in e?w(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,C=(e,r)=>{for(var t in r||(r={}))I.call(r,t)&&z(e,t,r[t]);if(O)for(var t of O(r))M.call(r,t)&&z(e,t,r[t]);return e},P=(e,r)=>{var t={};for(var n in e)I.call(e,n)&&0>r.indexOf(n)&&(t[n]=e[n]);if(null!=e&&O)for(var n of O(e))0>r.indexOf(n)&&M.call(e,n)&&(t[n]=e[n]);return t};let E={size:"md",variant:"filled"},N=(0,o.forwardRef)((e,r)=>{let t=(0,s.N4)("ThemeIcon",E,e),{className:n,size:i,radius:a,variant:l,color:d,children:c,gradient:p,unstyled:g}=t,f=P(t,["className","size","radius","variant","color","children","gradient","unstyled"]),{classes:h,cx:u}=v({variant:l,radius:a,color:d,gradient:p},{name:"ThemeIcon",unstyled:g,variant:l,size:i});return o.createElement(j.x,C({className:u(h.root,n),ref:r},f),c)});N.displayName="@mantine/core/ThemeIcon";var S=t(5117),W=t(2445),L=t(9467),B=t(9236),F=t(9469),T=t(4065),D=t(853),R=(0,D.Z)("palette","IconPalette",[["path",{d:"M12 21a9 9 0 0 1 0 -18c4.97 0 9 3.582 9 8c0 1.06 -.474 2.078 -1.318 2.828c-.844 .75 -1.989 1.172 -3.182 1.172h-2.5a2 2 0 0 0 -1 3.75a1.3 1.3 0 0 1 -1 2.25",key:"svg-0"}],["path",{d:"M8.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-1"}],["path",{d:"M12.5 7.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-2"}],["path",{d:"M16.5 10.5m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0",key:"svg-3"}]]),_=(0,D.Z)("world-upload","IconWorldUpload",[["path",{d:"M21 12a9 9 0 1 0 -9 9",key:"svg-0"}],["path",{d:"M3.6 9h16.8",key:"svg-1"}],["path",{d:"M3.6 15h8.4",key:"svg-2"}],["path",{d:"M11.578 3a17 17 0 0 0 0 18",key:"svg-3"}],["path",{d:"M12.5 3c1.719 2.755 2.5 5.876 2.5 9",key:"svg-4"}],["path",{d:"M18 21v-7m3 3l-3 -3l-3 3",key:"svg-5"}]]);let G=(0,i.k)(e=>({wrapper:{marginTop:-50,position:"relative",paddingTop:e.spacing.xl,paddingBottom:e.spacing.xl,paddingLeft:e.spacing.xs,paddingRight:e.spacing.xs,marginBottom:e.spacing.xl,borderRadius:7,background:"dark"===e.colorScheme?e.colors.dark[6]:e.colors.gray[0]},title:{fontFamily:"Greycliff CF, ".concat(e.fontFamily),fontSize:(0,a.h)(36),fontWeight:900,lineHeight:1.1,marginBottom:e.spacing.md,color:"#64EBC4"}})),A=[{icon:R,title:"Grafikdesign",description:"Flyer, Plakate, Poster, Visitenkarten. Lass deiner Kreativit\xe4t freien Lauf. Auf was hast du Lust?"},{icon:_,title:"Webentwicklung",description:"Onepager, Multipager, Online-Shop. Individuelle L\xf6sungen f\xfcr deinen Internetauftritt. Womit fangen wir an?"}];function H(){let{classes:e}=G(),r=(0,T.a)("(max-width: 768px)"),t=A.map(e=>(0,n.jsx)("div",{children:(0,n.jsxs)(l.r,{gutter:"xl",align:"flex-end",children:[(0,n.jsx)(l.r.Col,{span:"content",children:(0,n.jsx)(N,{size:50,radius:"md",variant:"filled",color:"#64EBC4",children:(0,n.jsx)(e.icon,{size:(0,a.h)(36),stroke:1.5,color:"#0A0E2D"})})}),(0,n.jsx)(l.r.Col,{span:"content",children:(0,n.jsx)(S.x,{fz:"xl",mt:"sm",fw:500,children:e.title})}),(0,n.jsx)(l.r.Col,{children:(0,n.jsx)(S.x,{fz:"sm",children:e.description})})]})},e.title));return(0,n.jsx)(W.W,{size:"xl",children:(0,n.jsxs)(l.r,{gutter:r?30:80,className:e.wrapper,children:[(0,n.jsxs)(L.J,{span:12,md:5,children:[(0,n.jsx)(B.D,{className:e.title,order:2,children:"Let's go!"}),(0,n.jsx)(S.x,{children:"Egal ob Grafikdesign oder individuelle Wordpress-L\xf6sungen. Ich steh an Deiner Seite um deine Ideen l\xf6sungsorientiert und kreativ umzusetzen."})]}),(0,n.jsx)(L.J,{span:12,md:7,children:(0,n.jsx)(F.M,{cols:2,spacing:30,breakpoints:[{maxWidth:"md",cols:1}],children:t})})]})})}}}]);