"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[496],{6496:function(e,n,t){t.r(n),t.d(n,{default:function(){return ye}});var o=t(4165),r=t(5861),i=t(9439),a=t(2791),s=t(5048),l=t(5602),c=function(e){return e.contact.value},u=t(4942),p=t(1413),d=t(6934),x=t(3044),m=t(6314),f=t(184);function h(e){var n,t=0;for(n=0;n<e.length;n+=1)t=e.charCodeAt(n)+((t<<5)-t);var o="#";for(n=0;n<3;n+=1){o+="00".concat((t>>8*n&255).toString(16)).slice(-2)}return o}function g(e){return{sx:{bgcolor:h(e)},children:e.includes(" ")?"".concat(e.split(" ")[0][0]).concat(e.split(" ")[1][0]):"".concat(e.split(" ")[0][0])}}function b(e){var n=e.name;return(0,f.jsx)(m.Z,{direction:"row",spacing:2,children:(0,f.jsx)(j,(0,p.Z)({},g(n)))})}var j=(0,d.ZP)(x.Z)((function(e){var n=e.theme;return(0,u.Z)({fontFamily:"ui-monospace",fontStyle:"italic",textTransform:"uppercase",width:"50px",height:"50px"},n.breakpoints.down("sm"),{width:"40px",height:"40px",fontSize:16})})),Z=t(277),v=t(9403),C=t(1066),y=t(9088),w=t(8596),S=t(6307),k=t(6200),z=t(4267),P=t(9655),T={position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"};function I(e){var n=e.isOpen,t=e.onClose,o=e.id,r=e.name,a=(0,l.Nt)(),s=(0,i.Z)(a,1)[0];return(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(S.ZP,{open:n,onClose:t,children:(0,f.jsxs)(k.Z,{variant:"outlined",role:"alertdialog",children:[(0,f.jsxs)(C.Z,{children:[(0,f.jsx)(z.Z,{sx:{fill:"#c41c1c"}}),"Confirmation"]}),(0,f.jsx)(v.Z,{}),(0,f.jsxs)(y.Z,{children:["Are you sure want to discard ",r," of your PhoneBook ?"]}),(0,f.jsxs)(w.Z,{children:[(0,f.jsx)(Z.Z,{variant:"solid",color:"danger",onClick:function(){s(o),t(),P.Am.success("Contact ".concat(r,"  has been deleted to your PhoneBook"),T)},children:"Confirm"}),(0,f.jsx)(Z.Z,{variant:"plain",color:"neutral",onClick:t,children:"Cancel"})]})]})})})}var B=t(1134),N=t(948),O=t(6727),A=t(4695),F=t(4875),q=t(9139),V=t(8380),D=O.Ry({name:O.Z_().label("Name").trim().min(3,"must be at least 3 characters long").max(30,"must be at least 10 characters long").required("Name is required"),number:O.Z_().matches(/^\(\d{3}\)\s(\d{3})-(\d{2})-(\d{2})$/,"Phone number is not valid").required("Mobile Phone is required")});function E(e){var n=e.onSubmit,t=e.isOpen,o=e.onClose,r=e.initialValues,i=e.title,s=e.content,l=(0,B.cI)({defaultValues:r,resolver:(0,A.X)(D),mode:"onChange"}),c=l.control,u=l.handleSubmit,p=l.formState,d=l.reset,x=l.setValue,m=l.formState,h=m.errors,g=m.isValid,b=m.isSubmitting;return(0,a.useEffect)((function(){p.isSubmitSuccessful&&d()}),[p.isSubmitSuccessful,d]),(0,f.jsx)(f.Fragment,{children:(0,f.jsx)(S.ZP,{open:t,onClose:o,children:(0,f.jsxs)(k.Z,{children:[(0,f.jsx)(C.Z,{children:i}),(0,f.jsxs)(y.Z,{children:["Please, ",s]}),(0,f.jsx)("form",{onSubmit:u(n),children:(0,f.jsxs)(q.Z,{spacing:2,children:[(0,f.jsx)(F.Z,{children:(0,f.jsx)(B.Qr,{name:"name",control:c,rules:{required:!0},render:function(e){var n=e.field,t=n.onChange,o=n.onBlur,r=n.value,i=n.name;return(0,f.jsx)(V.Z,{sx:{mb:2,"& .MuiOutlinedInput-input":{textTransform:"capitalize"}},type:"text",label:"Name",placeholder:"Please enter Name",name:i,autoComplete:"off",value:r,onBlur:o,onChange:t,autoFocus:!0,fullWidth:!0,required:!0,error:!!h[i],helperText:h[i]&&h[i].message})}})}),(0,f.jsx)(F.Z,{children:(0,f.jsx)(B.Qr,{name:"number",control:c,rules:{required:!0},render:function(e){var n=e.field,t=n.onChange,o=n.onBlur,r=n.value,i=n.name;return(0,f.jsx)(N.HH,{customInput:V.Z,sx:{mb:2},name:i,type:"tel",label:"Number",format:"(###) ###-##-##",mask:"_",autoComplete:"off",value:r,onBlur:o,onChange:t,onValueChange:function(e){return x(e.formattedValue)},fullWidth:!0,required:!0,allowEmptyFormatting:!0,error:!!h[i],helperText:h[i]&&h[i].message})}})}),(0,f.jsx)(Z.Z,{type:"submit",disabled:b||!g,children:i})]})})]})})})}var G=t(8619),L=t(890),W=t(7247),H=t(2226),Y=t(4554),M=t(5987),_=t(7621),Q=t(9504),R=t(2363),U=t(4098),X=t(9293),$=["className"],J=(0,d.ZP)(_.Z)((function(e){var n=e.theme;return(0,u.Z)({display:"grid",gridTemplateColumns:"10% 1fr 20%",justifyItems:"center",alignContent:"center",width:"100%",height:"60px",rowGap:"10px",maxWidth:700,padding:"5px",columnGap:"20px",transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"},n.breakpoints.down("sm"),{gridTemplateColumns:"20% 1fr 15%",columnGap:"5px",justifyContent:"center",alignItems:"center"})})),K=(0,d.ZP)(Q.Z)((function(e){var n=e.theme;return(0,u.Z)({display:"grid",gridTemplateColumns:"1fr 1fr",justifyContent:"space-around",justifyItems:"center",alignContent:"center",width:"100%",padding:0,fontWeight:600,fontSize:18},n.breakpoints.down("sm"),{gridTemplateColumns:"none",fontSize:16,rowGap:5})})),ee=(0,d.ZP)(R.Z)((function(e){var n=e.theme;return(0,u.Z)({justifySelf:"center",alignSelf:"start",flexDirection:"row",justifyContent:"space-around",padding:0,width:"100%",height:"100%"},n.breakpoints.down("md"),{display:"flex",flexDirection:"column",justifyContent:"space-around",alignItems:"end"})})),ne=(0,d.ZP)((function(e){var n=e.className,t=(0,M.Z)(e,$);return(0,f.jsx)(U.Z,(0,p.Z)((0,p.Z)({},t),{},{classes:{popper:n}}))}))((0,u.Z)({},"& .".concat(X.Z.tooltip),{display:"flex",justifyContent:"center",fontSize:"14px",border:"1px solid #dadde9",backgroundColor:"#f5f5f9",color:"#342c29",transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"})),te={position:"top-right",autoClose:1500,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"};function oe(e){var n=e.item,t=(0,l.wv)(),s=(0,i.Z)(t,1)[0],c=(0,a.useState)(!1),u=(0,i.Z)(c,2),p=u[0],d=u[1],x=(0,a.useState)(!1),m=(0,i.Z)(x,2),h=m[0],g=m[1],j=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(n){return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,s(n);case 3:v(),P.Am.success("Contact ".concat(n.name," has updated your phone book"),te),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){return d(!1)};return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(J,{children:[(0,f.jsx)(b,{name:n.name}),(0,f.jsxs)(K,{children:[(0,f.jsx)(L.Z,{sx:{justifySelf:"start",color:"#342c29",m:0,textTransform:"capitalize"},gutterBottom:!0,variant:"p",component:"p",children:n.name}),(0,f.jsxs)(Y.Z,{component:"div",sx:{justifySelf:"end",display:"grid",gridTemplateColumns:"10% 1fr",justifyItems:"center",columnGap:"10px"},children:[(0,f.jsx)(G.Z,{sx:{color:"#833510",fontSize:"20px"}}),(0,f.jsx)(L.Z,{sx:{color:"#342c29",justifySelf:"end"},variant:"p",component:"p",children:n.number})]})]}),(0,f.jsxs)(ee,{children:[(0,f.jsx)(ne,{sx:{display:{sm:"flex",md:"none"}},title:"Edit",size:"lg",placement:"top",children:(0,f.jsxs)(Z.Z,{sx:{gap:"5px"},variant:"plain",size:"small",name:"edit",type:"button",onClick:function(){return d(!0)},children:[(0,f.jsx)(H.Z,{sx:{display:{xs:"flex",sm:"none",justifyContent:"space-around;"},color:"#833510",fontSize:"20px"}}),(0,f.jsx)(L.Z,{variant:"p",component:"p",sx:{display:{xs:"none",sm:"flex",justifyContent:"space-around;",fontSize:"14px"},textTransform:"uppercase",color:"#833510"},children:"edit"})]})}),(0,f.jsx)(ne,{sx:{display:{sm:"flex",md:"none"}},title:"Delete",size:"lg",placement:"bottom",children:(0,f.jsxs)(Z.Z,{sx:{gap:"5px"},variant:"plain",size:"small",name:"delete",type:"button",onClick:function(){return g(!0)},children:[(0,f.jsx)(W.Z,{sx:{display:{xs:"flex",sm:"none",justifyContent:"space-around;"},color:"#f01818",fontSize:"20px"}}),(0,f.jsx)(L.Z,{variant:"p",component:"p",sx:{display:{xs:"none",sm:"flex",justifyContent:"space-around;",fontSize:"14px"},textTransform:"uppercase",color:"#f01818"},children:"delete"})]})})]})]}),(0,f.jsx)(E,{onSubmit:j,initialValues:n,isOpen:p,onClose:v,title:"Edit Contact",content:"Edit Contact"}),(0,f.jsx)(I,{isOpen:h,name:n.name,id:n.id,onClose:function(){return g(!1)}})]})}var re=(0,d.ZP)(L.Z)((function(e){var n=e.theme;return(0,u.Z)({color:"#833510",fontSize:"1.2rem",m:0,padding:0,fontWeight:500},n.breakpoints.down("md"),{fontSize:".8rem"})}));var ie=function(e){var n=e.text;return(0,f.jsx)(Y.Z,{sx:{display:"flex",justifyContent:"center",marginTop:"50px",color:"#833510",fontSize:"1.2rem"},children:(0,f.jsx)(re,{variant:"p",component:"p",children:n})})};var ae=function(e){var n=e.items,t=(0,s.v9)(c);return(0,f.jsx)(Y.Z,{sx:{display:"flex",flexDirection:"column",width:"100%",height:"100%",justifyContent:"flex-start",alignItems:"center",gap:"10px"},children:n.length>0?n.map((function(e){return(0,f.jsx)(oe,{item:e},e.id)})):(0,f.jsx)(ie,{text:"You don't have a contact with the name \" ".concat(t,' "')})})},se=t(1538),le=t(3628),ce=t(292),ue=t(7322),pe=function(){var e=(0,s.I0)(),n=(0,s.v9)(c);return(0,f.jsxs)(Y.Z,{sx:{display:"flex",justifyContent:"center",alignItems:"center",gap:"10px"},children:[(0,f.jsx)(ue.vU7,{size:25,fill:"#833510"}),(0,f.jsx)(le.DebounceInput,{type:"text",name:"filter",autoComplete:"off",minLength:2,debounceTimeout:500,value:n,onChange:function(n){return e((0,se.M)(n.target.value))},element:ce.Z,placeholder:"Search of contact by name\u2026",sx:{"--Input-focused":1,width:200,fontStyle:"italic",fontSize:".8rem"}})]})},de=t(7300),xe=t(5678),me=t(9877),fe=(0,d.ZP)(Y.Z)((function(e){var n=e.theme;return(0,u.Z)({position:"fixed",bottom:"30%",right:"20%"},n.breakpoints.down("lg"),{bottom:"5%",right:"5%"})}));function he(){var e=(0,a.useState)(!1),n=(0,i.Z)(e,2),t=n[0],o=n[1],r=function(){window.scrollY>300?o(!0):o(!1)};return(0,a.useEffect)((function(){window.addEventListener("scroll",r)}),[]),(0,f.jsx)(f.Fragment,{children:t&&(0,f.jsx)(fe,{onClick:function(){window.scrollTo({top:0,behavior:"smooth"})},children:(0,f.jsx)(me.Z,{sx:{width:"50px",height:"50px"},"aria-label":"scroll back to top",children:(0,f.jsx)(xe.Z,{sx:{fontSize:"1.8rem"}})})})})}var ge=["className"],be=(0,d.ZP)((function(e){var n=e.className,t=(0,M.Z)(e,ge);return(0,f.jsx)(U.Z,(0,p.Z)((0,p.Z)({},t),{},{classes:{popper:n}}))}))((0,u.Z)({},"& .".concat(X.Z.tooltip),{width:"110px",display:"flex",justifyContent:"center",fontSize:"14px",border:"1px solid #dadde9",backgroundColor:"#f5f5f9",color:"#342c29",transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"})),je=(0,d.ZP)(Y.Z)((function(e){var n=e.theme;return(0,u.Z)({display:"flex",justifyContent:"space-around",width:"100%",marginTop:20},n.breakpoints.down("sm"),{flexDirection:"column",height:"100px",rowGap:"20px"})})),Ze=(0,d.ZP)(Y.Z)((function(e){e.theme;return{display:"flex",flexDirection:"column",justifyContent:"flex-start",width:"100%",height:"100%",rowGap:"40px",padding:"10px 0",position:"relative"}})),ve={position:"top-right",autoClose:3e3,hideProgressBar:!1,closeOnClick:!0,pauseOnHover:!0,draggable:!0,progress:void 0,theme:"colored"},Ce={name:"",number:""};function ye(){var e=(0,l.Lr)(),n=(0,i.Z)(e,1)[0],t=(0,a.useState)(!1),u=(0,i.Z)(t,2),p=u[0],d=u[1],x=(0,l.wY)(),m=x.data,h=x.isFetching,g=(0,s.v9)(c),b=function(){var e=g.toLowerCase().trim();if(m)return m.filter((function(n){return n.name.toLowerCase().includes(e)}))}(),j=function(){var e=(0,r.Z)((0,o.Z)().mark((function e(t){var r,i,a,s;return(0,o.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(r=t.name,i=t.number,a=r.toLowerCase(),!(null===m||void 0===m?void 0:m.some((function(e){return e.name.toLowerCase()===a})))){e.next=6;break}return P.Am.info("".concat(r," is already in your phone book"),ve),e.abrupt("return");case 6:return s={name:r,number:i},e.prev=7,e.next=10,n(s);case 10:P.Am.success("Contact ".concat(r," has been added to your PhoneBook"),ve),v(),e.next=17;break;case 14:e.prev=14,e.t0=e.catch(7),P.Am.error(e.t0,ve);case 17:case"end":return e.stop()}}),e,null,[[7,14]])})));return function(n){return e.apply(this,arguments)}}(),v=function(){return d(!1)};return(0,f.jsxs)(f.Fragment,{children:[h?(0,f.jsx)(de.a,{}):(0,f.jsxs)(Ze,{children:[(0,f.jsxs)(je,{children:[(0,f.jsx)(pe,{}),(0,f.jsx)(be,{sx:{display:{sm:"block",md:"none"}},title:"Add New Contact",placement:"bottom-end",children:(0,f.jsxs)(Z.Z,{sx:{display:"flex",alignItems:"center",alignSelf:"end",maxWidth:180,height:40,gap:"10px",padding:"10px",transition:"box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms",boxShadow:"0px 2px 4px -1px rgba(0,0,0,0.2), 0px 4px 5px 0px rgba(0,0,0,0.14),0px 1px 10px 0px rgba(0,0,0,0.12)"},variant:"outlined",color:"neutral",onClick:function(e){e.target&&d(!0)},children:[(0,f.jsx)(ue.bwg,{size:25,fill:"#833510"}),(0,f.jsx)(L.Z,{sx:{display:{xs:"none",sm:"none",md:"block"},color:"#342c29",m:0},gutterBottom:!0,variant:"p",component:"p",children:"Add New Contact"})]})})]}),m?(0,f.jsx)(ae,{items:b}):(0,f.jsx)(ie,{text:"You are not contacts"}),(0,f.jsx)(he,{})]}),(0,f.jsx)(E,{onSubmit:j,initialValues:Ce,isOpen:p,onClose:v,title:"Create contact",content:"create new contact"})]})}}}]);
//# sourceMappingURL=496.e9055d31.chunk.js.map