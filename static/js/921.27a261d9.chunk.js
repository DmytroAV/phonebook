"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[921],{7921:function(e,o,r){r.r(o),r.d(o,{BtnStyled:function(){return N},default:function(){return q}});var n=r(4942),t=r(4165),a=r(5861),i=r(5048),s=r(7689),l=r(1889),d=r(4294),c=r(9439),u=r(2791),p=r(1134),m=r(890),f=r(8380),b=r(8096),v=r(3466),h=r(3400),g=r(4554),Z=r(6934),x=r(6727),w=r(4695),C=r(9569),S=r(3710),j=r(184),y=x.Ry().shape({name:x.Z_().required("Name is required").max(32,"Name must be less than 100 characters"),email:x.Z_().required("Email is required").email("Email is invalid"),password:x.Z_().required("Password is required").min(8,"Password must be more than 8 characters").max(32,"Password must be less than 32 characters"),passwordConfirm:x.Z_().required("Confirm Password is required").oneOf([x.iH("password")],"Passwords must match")}),z=function(e){var o=e.initialValues,r=e.onSubmit,n=(0,u.useState)(!1),t=(0,c.Z)(n,2),a=t[0],i=t[1],s=(0,u.useState)(!1),l=(0,c.Z)(s,2),d=l[0],g=l[1],Z=function(){return i((function(e){return!e}))},x=function(){return g((function(e){return!e}))},z=function(e){e.preventDefault()},I=function(e){e.preventDefault()},M=(0,p.cI)({defaultValues:o,resolver:(0,w.X)(y),mode:"onChange"}),E=M.control,B=M.formState,L=M.reset,q=M.handleSubmit,N=M.formState,T=N.errors,A=N.isValid,O=N.isSubmitting,D=N.isDirty;return(0,u.useEffect)((function(){B.isSubmitSuccessful&&L()}),[B.isSubmitSuccessful,L]),(0,j.jsxs)(k,{component:"form",onSubmit:q(r),control:E,children:[(0,j.jsx)(m.Z,{fontSize:18,color:"#833510",alignSelf:"center",children:"Register"}),(0,j.jsx)(p.Qr,{name:"name",control:E,rules:{required:!0},render:function(e){var o=e.field,r=o.onChange,n=o.onBlur,t=o.value,a=o.name;return(0,j.jsx)(f.Z,{sx:{mb:2,"& .MuiOutlinedInput-input":{textTransform:"capitalize"}},name:a,label:"Name",type:"name",autoComplete:"off",value:t,onBlur:n,onChange:r,hiddenLabel:!0,autoFocus:!0,error:!!T[a],helperText:T[a]&&T[a].message})}}),(0,j.jsx)(p.Qr,{name:"email",control:E,rules:{required:!0},render:function(e){var o=e.field,r=o.onChange,n=o.onBlur,t=o.value,a=o.name;return(0,j.jsx)(f.Z,{name:a,label:"Email",type:"email",autoComplete:"off",value:t,onBlur:n,onChange:r,hiddenLabel:!0,error:!!T[a],helperText:T[a]&&T[a].message})}}),(0,j.jsx)(p.Qr,{name:"password",control:E,rules:{required:!0},render:function(e){var o=e.field,r=o.onChange,n=o.onBlur,t=o.value,i=o.name;return(0,j.jsx)(b.Z,{variant:"outlined",children:(0,j.jsx)(f.Z,{name:i,label:"Password",type:a?"text":"password",autoComplete:"off",value:t,onBlur:n,onChange:r,hiddenLabel:!0,error:!!T[i],helperText:T[i]&&T[i].message,InputProps:{endAdornment:(0,j.jsx)(v.Z,{position:"end",children:(0,j.jsx)(h.Z,{"aria-label":"toggle password visibility",onClick:Z,onMouseDown:z,edge:"end",children:a?(0,j.jsx)(C.Z,{}):(0,j.jsx)(S.Z,{})})})}})})}}),(0,j.jsx)(p.Qr,{name:"passwordConfirm",control:E,rules:{required:!0},render:function(e){var o=e.field,r=o.onChange,n=o.onBlur,t=o.value,a=o.name;return(0,j.jsx)(b.Z,{variant:"outlined",children:(0,j.jsx)(f.Z,{name:a,label:"Confirm Password",type:d?"text":"password",autoComplete:"off",value:t,onBlur:n,onChange:r,hiddenLabel:!0,error:!!T[a],helperText:T[a]&&T[a].message,InputProps:{endAdornment:(0,j.jsx)(v.Z,{position:"end",children:(0,j.jsx)(h.Z,{"aria-label":"toggle passwordConfirm visibility",onClick:x,onMouseDown:I,edge:"end",children:d?(0,j.jsx)(C.Z,{}):(0,j.jsx)(S.Z,{})})})}})})}}),(0,j.jsx)(P,{type:"submit",disabled:O||!A,children:"Register"}),(0,j.jsx)(R,{type:"button",disabled:!1===D,onClick:function(){return L()},children:"Reset"})]})},k=(0,Z.ZP)(g.Z)((function(e){var o=e.theme;return(0,n.Z)({alignSelf:"center",display:"flex",flexDirection:"column",justifyContent:"space-around",rowGap:20,width:300,padding:"24px",backgroundColor:"#f8f8f8",border:"1px solid #b4a49d ",borderRadius:"3px",boxShadow:" 0 4px 7px rgba(0, 0, 0, 0.25)"},o.breakpoints.down("sm"),{width:"250px",padding:"10px"})})),P=(0,Z.ZP)(d.Z)((function(e){var o=e.theme;return(0,n.Z)({border:"2px solid #c1b7b3 ",backgroundColor:"#ebe5e3",color:"#342c29","&:hover":{backgroundColor:"#c1b7b3",border:"2px solid #ebe5e3 ",color:"#ebe5e3"}},o.breakpoints.up("xs"),{color:"#833510",fontSize:".7rem",fontWeight:500})})),R=(0,Z.ZP)(d.Z)((function(e){var o=e.theme;return(0,n.Z)({border:"2px solid #c1b7b3 ",backgroundColor:"#a0e893",color:"#342c29","&:hover":{backgroundColor:"#23a835",border:"2px solid #ebe5e3 ",color:"#ebe5e3"}},o.breakpoints.up("xs"),{color:"#833510",fontSize:".7rem",fontWeight:500})})),I=r(260),M=r(9273),E=r(9655),B={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},L={name:"",email:"",password:"",passwordConfirm:""};function q(){var e=(0,i.I0)(),o=(0,s.s0)(),r=function(){var o=(0,a.Z)((0,t.Z)().mark((function o(r){var n;return(0,t.Z)().wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return n={name:r.name,email:r.email,password:r.password},console.log("credentials :>> ",n),o.prev=2,o.next=5,e((0,M.a$)({name:r.name,email:r.email,password:r.password}));case 5:o.next=10;break;case 7:o.prev=7,o.t0=o.catch(2),E.Am.error(o.t0,B);case 10:case"end":return o.stop()}}),o,null,[[2,7]])})));return function(e){return o.apply(this,arguments)}}();return(0,j.jsxs)(l.ZP,{container:!0,sx:{flexDirection:"column",justifyContent:"flex-start",height:"100%",rowGap:"40px",width:"100%"},children:[(0,j.jsx)(N,{onClick:function(){return o("/")},startIcon:(0,j.jsx)(I.Z,{}),children:"Go back"}),(0,j.jsx)(z,{initialValues:L,onSubmit:r})]})}var N=(0,Z.ZP)(d.Z)((function(e){var o=e.theme;return(0,n.Z)({alignSelf:"flex-start",fontSize:".8rem",border:"2px solid #c1b7b3 ",backgroundColor:"#ebe5e3",margin:"20px",color:"#833510",padding:"3px 4px","&:hover":{backgroundColor:"#c1b7b3",border:"2px solid #ebe5e3 ",color:"#ebe5e3"}},o.breakpoints.down("sm"),{margin:0,fontSize:".7rem",fontWeight:500})}))},260:function(e,o,r){var n=r(4836);o.Z=void 0;var t=n(r(5649)),a=r(184),i=(0,t.default)((0,a.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");o.Z=i},3710:function(e,o,r){var n=r(9201),t=r(184);o.Z=(0,n.Z)((0,t.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:function(e,o,r){var n=r(9201),t=r(184);o.Z=(0,n.Z)((0,t.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3400:function(e,o,r){r.d(o,{Z:function(){return w}});var n=r(4942),t=r(3366),a=r(7462),i=r(2791),s=r(3733),l=r(4419),d=r(2065),c=r(6934),u=r(1402),p=r(3701),m=r(4036),f=r(5878),b=r(1217);function v(e){return(0,b.Z)("MuiIconButton",e)}var h=(0,f.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]),g=r(184),Z=["edge","children","className","color","disabled","disableFocusRipple","size"],x=(0,c.ZP)(p.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,"default"!==r.color&&o["color".concat((0,m.Z)(r.color))],r.edge&&o["edge".concat((0,m.Z)(r.edge))],o["size".concat((0,m.Z)(r.size))]]}})((function(e){var o=e.theme,r=e.ownerState;return(0,a.Z)({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.activeChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(function(e){var o,r=e.theme,t=e.ownerState,i=null==(o=(r.vars||r).palette)?void 0:o[t.color];return(0,a.Z)({},"inherit"===t.color&&{color:"inherit"},"inherit"!==t.color&&"default"!==t.color&&(0,a.Z)({color:null==i?void 0:i.main},!t.disableRipple&&{"&:hover":(0,a.Z)({},i&&{backgroundColor:r.vars?"rgba(".concat(i.mainChannel," / ").concat(r.vars.palette.action.hoverOpacity,")"):(0,d.Fq)(i.main,r.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===t.size&&{padding:5,fontSize:r.typography.pxToRem(18)},"large"===t.size&&{padding:12,fontSize:r.typography.pxToRem(28)},(0,n.Z)({},"&.".concat(h.disabled),{backgroundColor:"transparent",color:(r.vars||r).palette.action.disabled}))})),w=i.forwardRef((function(e,o){var r=(0,u.Z)({props:e,name:"MuiIconButton"}),n=r.edge,i=void 0!==n&&n,d=r.children,c=r.className,p=r.color,f=void 0===p?"default":p,b=r.disabled,h=void 0!==b&&b,w=r.disableFocusRipple,C=void 0!==w&&w,S=r.size,j=void 0===S?"medium":S,y=(0,t.Z)(r,Z),z=(0,a.Z)({},r,{edge:i,color:f,disabled:h,disableFocusRipple:C,size:j}),k=function(e){var o=e.classes,r=e.disabled,n=e.color,t=e.edge,a=e.size,i={root:["root",r&&"disabled","default"!==n&&"color".concat((0,m.Z)(n)),t&&"edge".concat((0,m.Z)(t)),"size".concat((0,m.Z)(a))]};return(0,l.Z)(i,v,o)}(z);return(0,g.jsx)(x,(0,a.Z)({className:(0,s.Z)(k.root,c),centerRipple:!0,focusRipple:!C,disabled:h,ref:o,ownerState:z},y,{children:d}))}))},3466:function(e,o,r){r.d(o,{Z:function(){return S}});var n=r(4942),t=r(3366),a=r(7462),i=r(2791),s=r(3733),l=r(4419),d=r(4036),c=r(890),u=r(3840),p=r(2930),m=r(6934),f=r(5878),b=r(1217);function v(e){return(0,b.Z)("MuiInputAdornment",e)}var h,g=(0,f.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]),Z=r(1402),x=r(184),w=["children","className","component","disablePointerEvents","disableTypography","position","variant"],C=(0,m.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:function(e,o){var r=e.ownerState;return[o.root,o["position".concat((0,d.Z)(r.position))],!0===r.disablePointerEvents&&o.disablePointerEvents,o[r.variant]]}})((function(e){var o=e.theme,r=e.ownerState;return(0,a.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(o.vars||o).palette.action.active},"filled"===r.variant&&(0,n.Z)({},"&.".concat(g.positionStart,"&:not(.").concat(g.hiddenLabel,")"),{marginTop:16}),"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),S=i.forwardRef((function(e,o){var r=(0,Z.Z)({props:e,name:"MuiInputAdornment"}),n=r.children,m=r.className,f=r.component,b=void 0===f?"div":f,g=r.disablePointerEvents,S=void 0!==g&&g,j=r.disableTypography,y=void 0!==j&&j,z=r.position,k=r.variant,P=(0,t.Z)(r,w),R=(0,p.Z)()||{},I=k;k&&R.variant,R&&!I&&(I=R.variant);var M=(0,a.Z)({},r,{hiddenLabel:R.hiddenLabel,size:R.size,disablePointerEvents:S,position:z,variant:I}),E=function(e){var o=e.classes,r=e.disablePointerEvents,n=e.hiddenLabel,t=e.position,a=e.size,i=e.variant,s={root:["root",r&&"disablePointerEvents",t&&"position".concat((0,d.Z)(t)),i,n&&"hiddenLabel",a&&"size".concat((0,d.Z)(a))]};return(0,l.Z)(s,v,o)}(M);return(0,x.jsx)(u.Z.Provider,{value:null,children:(0,x.jsx)(C,(0,a.Z)({as:b,ownerState:M,className:(0,s.Z)(E.root,m),ref:o},P,{children:"string"!==typeof n||y?(0,x.jsxs)(i.Fragment,{children:["start"===z?h||(h=(0,x.jsx)("span",{className:"notranslate",children:"\u200b"})):null,n]}):(0,x.jsx)(c.Z,{color:"text.secondary",children:n})}))})}))}}]);
//# sourceMappingURL=921.27a261d9.chunk.js.map