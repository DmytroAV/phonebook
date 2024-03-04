"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[921],{7921:(e,o,r)=>{r.r(o),r.d(o,{BtnStyled:()=>E,default:()=>M});var n=r(5048),t=r(7689),a=r(1889),i=r(4294),s=r(2791),l=r(1134),d=r(890),c=r(8380),u=r(8096),p=r(3466),m=r(3400),b=r(4554),h=r(6934),g=r(8007),f=r(4695),v=r(9569),x=r(3710),Z=r(184);const w=g.Ry().shape({name:g.Z_().required("Name is required").max(32,"Name must be less than 100 characters"),email:g.Z_().required("Email is required").email("Email is invalid"),password:g.Z_().required("Password is required").min(8,"Password must be more than 8 characters").max(32,"Password must be less than 32 characters"),passwordConfirm:g.Z_().required("Confirm Password is required").oneOf([g.iH("password")],"Passwords must match")}),C=e=>{let{initialValues:o,onSubmit:r}=e;const[n,t]=(0,s.useState)(!1),[a,i]=(0,s.useState)(!1),b=()=>t((e=>!e)),h=()=>i((e=>!e)),g=e=>{e.preventDefault()},C=e=>{e.preventDefault()},{control:z,formState:k,reset:P,handleSubmit:R,formState:{errors:I,isValid:M,isSubmitting:E,isDirty:B}}=(0,l.cI)({defaultValues:o,resolver:(0,f.X)(w),mode:"onChange"});return(0,s.useEffect)((()=>{k.isSubmitSuccessful&&P()}),[k.isSubmitSuccessful,P]),(0,Z.jsxs)(S,{component:"form",onSubmit:R(r),control:z,children:[(0,Z.jsx)(d.Z,{fontSize:18,color:"#833510",alignSelf:"center",children:"Register"}),(0,Z.jsx)(l.Qr,{name:"name",control:z,rules:{required:!0},render:e=>{let{field:{onChange:o,onBlur:r,value:n,name:t}}=e;return(0,Z.jsx)(c.Z,{sx:{mb:2,"& .MuiOutlinedInput-input":{textTransform:"capitalize"}},name:t,label:"Name",type:"name",autoComplete:"off",value:n,onBlur:r,onChange:o,hiddenLabel:!0,autoFocus:!0,error:!!I[t],helperText:I[t]&&I[t].message})}}),(0,Z.jsx)(l.Qr,{name:"email",control:z,rules:{required:!0},render:e=>{let{field:{onChange:o,onBlur:r,value:n,name:t}}=e;return(0,Z.jsx)(c.Z,{name:t,label:"Email",type:"email",autoComplete:"off",value:n,onBlur:r,onChange:o,hiddenLabel:!0,error:!!I[t],helperText:I[t]&&I[t].message})}}),(0,Z.jsx)(l.Qr,{name:"password",control:z,rules:{required:!0},render:e=>{let{field:{onChange:o,onBlur:r,value:t,name:a}}=e;return(0,Z.jsx)(u.Z,{variant:"outlined",children:(0,Z.jsx)(c.Z,{name:a,label:"Password",type:n?"text":"password",autoComplete:"off",value:t,onBlur:r,onChange:o,hiddenLabel:!0,error:!!I[a],helperText:I[a]&&I[a].message,InputProps:{endAdornment:(0,Z.jsx)(p.Z,{position:"end",children:(0,Z.jsx)(m.Z,{"aria-label":"toggle password visibility",onClick:b,onMouseDown:g,edge:"end",children:n?(0,Z.jsx)(v.Z,{}):(0,Z.jsx)(x.Z,{})})})}})})}}),(0,Z.jsx)(l.Qr,{name:"passwordConfirm",control:z,rules:{required:!0},render:e=>{let{field:{onChange:o,onBlur:r,value:n,name:t}}=e;return(0,Z.jsx)(u.Z,{variant:"outlined",children:(0,Z.jsx)(c.Z,{name:t,label:"Confirm Password",type:a?"text":"password",autoComplete:"off",value:n,onBlur:r,onChange:o,hiddenLabel:!0,error:!!I[t],helperText:I[t]&&I[t].message,InputProps:{endAdornment:(0,Z.jsx)(p.Z,{position:"end",children:(0,Z.jsx)(m.Z,{"aria-label":"toggle passwordConfirm visibility",onClick:h,onMouseDown:C,edge:"end",children:a?(0,Z.jsx)(v.Z,{}):(0,Z.jsx)(x.Z,{})})})}})})}}),(0,Z.jsx)(j,{type:"submit",disabled:E||!M,children:"Register"}),(0,Z.jsx)(y,{type:"button",disabled:!1===B,onClick:()=>P(),children:"Reset"})]})},S=(0,h.ZP)(b.Z)((e=>{let{theme:o}=e;return{alignSelf:"center",display:"flex",flexDirection:"column",justifyContent:"space-around",rowGap:20,width:300,padding:"24px",backgroundColor:"#f8f8f8",border:"1px solid #b4a49d ",borderRadius:"3px",boxShadow:" 0 4px 7px rgba(0, 0, 0, 0.25)",[o.breakpoints.down("sm")]:{width:"250px",padding:"10px"}}})),j=(0,h.ZP)(i.Z)((e=>{let{theme:o}=e;return{border:"2px solid #c1b7b3 ",backgroundColor:"#ebe5e3",color:"#342c29","&:hover":{backgroundColor:"#c1b7b3",border:"2px solid #ebe5e3 ",color:"#ebe5e3"},[o.breakpoints.up("xs")]:{color:"#833510",fontSize:".7rem",fontWeight:500}}})),y=(0,h.ZP)(i.Z)((e=>{let{theme:o}=e;return{border:"2px solid #c1b7b3 ",backgroundColor:"#a0e893",color:"#342c29","&:hover":{backgroundColor:"#23a835",border:"2px solid #ebe5e3 ",color:"#ebe5e3"},[o.breakpoints.up("xs")]:{color:"#833510",fontSize:".7rem",fontWeight:500}}}));var z=r(260),k=r(9273),P=r(9655);const R={position:"top-right",autoClose:5e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},I={name:"",email:"",password:"",passwordConfirm:""};function M(){const e=(0,n.I0)(),o=(0,t.s0)();return(0,Z.jsxs)(a.ZP,{container:!0,sx:{flexDirection:"column",justifyContent:"flex-start",height:"100%",rowGap:"40px",width:"100%"},children:[(0,Z.jsx)(E,{onClick:()=>o("/"),startIcon:(0,Z.jsx)(z.Z,{}),children:"Go back"}),(0,Z.jsx)(C,{initialValues:I,onSubmit:async o=>{const r={name:o.name,email:o.email,password:o.password};console.log("credentials :>> ",r);try{await e((0,k.a$)({name:o.name,email:o.email,password:o.password}))}catch(n){P.Am.error(n,R)}}})]})}const E=(0,h.ZP)(i.Z)((e=>{let{theme:o}=e;return{alignSelf:"flex-start",fontSize:".8rem",border:"2px solid #c1b7b3 ",backgroundColor:"#ebe5e3",margin:"20px",color:"#833510",padding:"3px 4px","&:hover":{backgroundColor:"#c1b7b3",border:"2px solid #ebe5e3 ",color:"#ebe5e3"},[o.breakpoints.down("sm")]:{margin:0,fontSize:".7rem",fontWeight:500}}}))},260:(e,o,r)=>{var n=r(4836);o.Z=void 0;var t=n(r(5649)),a=r(184),i=(0,t.default)((0,a.jsx)("path",{d:"M17.77 3.77 16 2 6 12l10 10 1.77-1.77L9.54 12z"}),"ArrowBackIosNew");o.Z=i},3710:(e,o,r)=>{r.d(o,{Z:()=>a});var n=r(9201),t=r(184);const a=(0,n.Z)((0,t.jsx)("path",{d:"M12 4.5C7 4.5 2.73 7.61 1 12c1.73 4.39 6 7.5 11 7.5s9.27-3.11 11-7.5c-1.73-4.39-6-7.5-11-7.5zM12 17c-2.76 0-5-2.24-5-5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5zm0-8c-1.66 0-3 1.34-3 3s1.34 3 3 3 3-1.34 3-3-1.34-3-3-3z"}),"Visibility")},9569:(e,o,r)=>{r.d(o,{Z:()=>a});var n=r(9201),t=r(184);const a=(0,n.Z)((0,t.jsx)("path",{d:"M12 7c2.76 0 5 2.24 5 5 0 .65-.13 1.26-.36 1.83l2.92 2.92c1.51-1.26 2.7-2.89 3.43-4.75-1.73-4.39-6-7.5-11-7.5-1.4 0-2.74.25-3.98.7l2.16 2.16C10.74 7.13 11.35 7 12 7zM2 4.27l2.28 2.28.46.46C3.08 8.3 1.78 10.02 1 12c1.73 4.39 6 7.5 11 7.5 1.55 0 3.03-.3 4.38-.84l.42.42L19.73 22 21 20.73 3.27 3 2 4.27zM7.53 9.8l1.55 1.55c-.05.21-.08.43-.08.65 0 1.66 1.34 3 3 3 .22 0 .44-.03.65-.08l1.55 1.55c-.67.33-1.41.53-2.2.53-2.76 0-5-2.24-5-5 0-.79.2-1.53.53-2.2zm4.31-.78 3.15 3.15.02-.16c0-1.66-1.34-3-3-3l-.17.01z"}),"VisibilityOff")},3400:(e,o,r)=>{r.d(o,{Z:()=>Z});var n=r(3366),t=r(7462),a=r(2791),i=r(3733),s=r(4419),l=r(2065),d=r(6934),c=r(1402),u=r(533),p=r(4036),m=r(5878),b=r(1217);function h(e){return(0,b.Z)("MuiIconButton",e)}const g=(0,m.Z)("MuiIconButton",["root","disabled","colorInherit","colorPrimary","colorSecondary","colorError","colorInfo","colorSuccess","colorWarning","edgeStart","edgeEnd","sizeSmall","sizeMedium","sizeLarge"]);var f=r(184);const v=["edge","children","className","color","disabled","disableFocusRipple","size"],x=(0,d.ZP)(u.Z,{name:"MuiIconButton",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,"default"!==r.color&&o["color".concat((0,p.Z)(r.color))],r.edge&&o["edge".concat((0,p.Z)(r.edge))],o["size".concat((0,p.Z)(r.size))]]}})((e=>{let{theme:o,ownerState:r}=e;return(0,t.Z)({textAlign:"center",flex:"0 0 auto",fontSize:o.typography.pxToRem(24),padding:8,borderRadius:"50%",overflow:"visible",color:(o.vars||o).palette.action.active,transition:o.transitions.create("background-color",{duration:o.transitions.duration.shortest})},!r.disableRipple&&{"&:hover":{backgroundColor:o.vars?"rgba(".concat(o.vars.palette.action.activeChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(o.palette.action.active,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}}},"start"===r.edge&&{marginLeft:"small"===r.size?-3:-12},"end"===r.edge&&{marginRight:"small"===r.size?-3:-12})}),(e=>{let{theme:o,ownerState:r}=e;var n;const a=null==(n=(o.vars||o).palette)?void 0:n[r.color];return(0,t.Z)({},"inherit"===r.color&&{color:"inherit"},"inherit"!==r.color&&"default"!==r.color&&(0,t.Z)({color:null==a?void 0:a.main},!r.disableRipple&&{"&:hover":(0,t.Z)({},a&&{backgroundColor:o.vars?"rgba(".concat(a.mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(a.main,o.palette.action.hoverOpacity)},{"@media (hover: none)":{backgroundColor:"transparent"}})}),"small"===r.size&&{padding:5,fontSize:o.typography.pxToRem(18)},"large"===r.size&&{padding:12,fontSize:o.typography.pxToRem(28)},{["&.".concat(g.disabled)]:{backgroundColor:"transparent",color:(o.vars||o).palette.action.disabled}})})),Z=a.forwardRef((function(e,o){const r=(0,c.Z)({props:e,name:"MuiIconButton"}),{edge:a=!1,children:l,className:d,color:u="default",disabled:m=!1,disableFocusRipple:b=!1,size:g="medium"}=r,Z=(0,n.Z)(r,v),w=(0,t.Z)({},r,{edge:a,color:u,disabled:m,disableFocusRipple:b,size:g}),C=(e=>{const{classes:o,disabled:r,color:n,edge:t,size:a}=e,i={root:["root",r&&"disabled","default"!==n&&"color".concat((0,p.Z)(n)),t&&"edge".concat((0,p.Z)(t)),"size".concat((0,p.Z)(a))]};return(0,s.Z)(i,h,o)})(w);return(0,f.jsx)(x,(0,t.Z)({className:(0,i.Z)(C.root,d),centerRipple:!0,focusRipple:!b,disabled:m,ref:o,ownerState:w},Z,{children:l}))}))},3466:(e,o,r)=>{r.d(o,{Z:()=>C});var n=r(3366),t=r(7462),a=r(2791),i=r(3733),s=r(4419),l=r(4036),d=r(890),c=r(3840),u=r(2930),p=r(6934),m=r(5878),b=r(1217);function h(e){return(0,b.Z)("MuiInputAdornment",e)}const g=(0,m.Z)("MuiInputAdornment",["root","filled","standard","outlined","positionStart","positionEnd","disablePointerEvents","hiddenLabel","sizeSmall"]);var f,v=r(1402),x=r(184);const Z=["children","className","component","disablePointerEvents","disableTypography","position","variant"],w=(0,p.ZP)("div",{name:"MuiInputAdornment",slot:"Root",overridesResolver:(e,o)=>{const{ownerState:r}=e;return[o.root,o["position".concat((0,l.Z)(r.position))],!0===r.disablePointerEvents&&o.disablePointerEvents,o[r.variant]]}})((e=>{let{theme:o,ownerState:r}=e;return(0,t.Z)({display:"flex",height:"0.01em",maxHeight:"2em",alignItems:"center",whiteSpace:"nowrap",color:(o.vars||o).palette.action.active},"filled"===r.variant&&{["&.".concat(g.positionStart,"&:not(.").concat(g.hiddenLabel,")")]:{marginTop:16}},"start"===r.position&&{marginRight:8},"end"===r.position&&{marginLeft:8},!0===r.disablePointerEvents&&{pointerEvents:"none"})})),C=a.forwardRef((function(e,o){const r=(0,v.Z)({props:e,name:"MuiInputAdornment"}),{children:p,className:m,component:b="div",disablePointerEvents:g=!1,disableTypography:C=!1,position:S,variant:j}=r,y=(0,n.Z)(r,Z),z=(0,u.Z)()||{};let k=j;j&&z.variant,z&&!k&&(k=z.variant);const P=(0,t.Z)({},r,{hiddenLabel:z.hiddenLabel,size:z.size,disablePointerEvents:g,position:S,variant:k}),R=(e=>{const{classes:o,disablePointerEvents:r,hiddenLabel:n,position:t,size:a,variant:i}=e,d={root:["root",r&&"disablePointerEvents",t&&"position".concat((0,l.Z)(t)),i,n&&"hiddenLabel",a&&"size".concat((0,l.Z)(a))]};return(0,s.Z)(d,h,o)})(P);return(0,x.jsx)(c.Z.Provider,{value:null,children:(0,x.jsx)(w,(0,t.Z)({as:b,ownerState:P,className:(0,i.Z)(R.root,m),ref:o},y,{children:"string"!==typeof p||C?(0,x.jsxs)(a.Fragment,{children:["start"===S?f||(f=(0,x.jsx)("span",{className:"notranslate",children:"\u200b"})):null,p]}):(0,x.jsx)(d.Z,{color:"text.secondary",children:p})}))})}))}}]);
//# sourceMappingURL=921.dcbf6818.chunk.js.map