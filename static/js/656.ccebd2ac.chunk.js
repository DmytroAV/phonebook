"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[656],{5990:(t,n,e)=>{e.d(n,{Z:()=>u});var o=e(5043),i=e(7950),r=e(7042),a=e(3844),s=e(9184),l=e(579);const u=o.forwardRef((function(t,n){const{children:e,container:u,disablePortal:p=!1}=t,[c,d]=o.useState(null),h=(0,r.A)(o.isValidElement(e)?e.ref:null,n);if((0,a.A)((()=>{p||d(function(t){return"function"===typeof t?t():t}(u)||document.body)}),[u,p]),(0,a.A)((()=>{if(c&&!p)return(0,s.A)(n,c),()=>{(0,s.A)(n,null)}}),[n,c,p]),p){if(o.isValidElement(e)){const t={ref:h};return o.cloneElement(e,t)}return(0,l.jsx)(o.Fragment,{children:e})}return(0,l.jsx)(o.Fragment,{children:c?i.createPortal(e,c):c})}))},2205:(t,n,e)=>{e.d(n,{X:()=>r});var o=e(8168),i=e(540);function r(t,n,e){return void 0===t||(0,i.g)(t)?n:(0,o.A)({},n,{ownerState:(0,o.A)({},n.ownerState,e)})}},9279:(t,n,e)=>{function o(t){let n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[];if(void 0===t)return{};const e={};return Object.keys(t).filter((e=>e.match(/^on[A-Z]/)&&"function"===typeof t[e]&&!n.includes(e))).forEach((n=>{e[n]=t[n]})),e}e.d(n,{h:()=>o})},540:(t,n,e)=>{function o(t){return"string"===typeof t}e.d(n,{g:()=>o})},8413:(t,n,e)=>{e.d(n,{p:()=>s});var o=e(8168),i=e(8387),r=e(9279);function a(t){if(void 0===t)return{};const n={};return Object.keys(t).filter((n=>!(n.match(/^on[A-Z]/)&&"function"===typeof t[n]))).forEach((e=>{n[e]=t[e]})),n}function s(t){const{getSlotProps:n,additionalProps:e,externalSlotProps:s,externalForwardedProps:l,className:u}=t;if(!n){const t=(0,i.A)(null==e?void 0:e.className,u,null==l?void 0:l.className,null==s?void 0:s.className),n=(0,o.A)({},null==e?void 0:e.style,null==l?void 0:l.style,null==s?void 0:s.style),r=(0,o.A)({},e,l,s);return t.length>0&&(r.className=t),Object.keys(n).length>0&&(r.style=n),{props:r,internalRef:void 0}}const p=(0,r.h)((0,o.A)({},l,s)),c=a(s),d=a(l),h=n(p),f=(0,i.A)(null==h?void 0:h.className,null==e?void 0:e.className,u,null==l?void 0:l.className,null==s?void 0:s.className),m=(0,o.A)({},null==h?void 0:h.style,null==e?void 0:e.style,null==l?void 0:l.style,null==s?void 0:s.style),g=(0,o.A)({},h,e,d,c);return f.length>0&&(g.className=f),Object.keys(m).length>0&&(g.style=m),{props:g,internalRef:h.ref}}},4430:(t,n,e)=>{function o(t,n,e){return"function"===typeof t?t(n,e):t}e.d(n,{Y:()=>o})},3662:(t,n,e)=>{e.d(n,{Q:()=>p});var o=e(8168),i=e(8587),r=e(7042),a=e(2205),s=e(8413),l=e(4430);const u=["elementType","externalSlotProps","ownerState","skipResolvingSlotProps"];function p(t){var n;const{elementType:e,externalSlotProps:p,ownerState:c,skipResolvingSlotProps:d=!1}=t,h=(0,i.A)(t,u),f=d?{}:(0,l.Y)(p,c),{props:m,internalRef:g}=(0,s.p)((0,o.A)({},h,{externalSlotProps:f})),E=(0,r.A)(g,null==f?void 0:f.ref,null==(n=t.additionalProps)?void 0:n.ref);return(0,a.X)(e,(0,o.A)({},m,{ref:E}),c)}},6328:(t,n,e)=>{e.d(n,{A:()=>E});var o=e(8168),i=e(8587),r=e(5043),a=e(1140),s=e(9998),l=e(6240),u=e(653),p=e(5849),c=e(579);const d=["addEndListener","appear","children","easing","in","onEnter","onEntered","onEntering","onExit","onExited","onExiting","style","timeout","TransitionComponent"];function h(t){return"scale(".concat(t,", ").concat(t**2,")")}const f={entering:{opacity:1,transform:h(1)},entered:{opacity:1,transform:"none"}},m="undefined"!==typeof navigator&&/^((?!chrome|android).)*(safari|mobile)/i.test(navigator.userAgent)&&/(os |version\/)15(.|_)4/i.test(navigator.userAgent),g=r.forwardRef((function(t,n){const{addEndListener:e,appear:g=!0,children:E,easing:y,in:v,onEnter:x,onEntered:A,onEntering:b,onExit:S,onExited:k,onExiting:N,style:T,timeout:C="auto",TransitionComponent:R=s.Ay}=t,O=(0,i.A)(t,d),w=(0,a.A)(),P=r.useRef(),M=(0,l.A)(),D=r.useRef(null),j=(0,p.A)(D,E.ref,n),B=t=>n=>{if(t){const e=D.current;void 0===n?t(e):t(e,n)}},W=B(b),L=B(((t,n)=>{(0,u.q)(t);const{duration:e,delay:o,easing:i}=(0,u.c)({style:T,timeout:C,easing:y},{mode:"enter"});let r;"auto"===C?(r=M.transitions.getAutoHeightDuration(t.clientHeight),P.current=r):r=e,t.style.transition=[M.transitions.create("opacity",{duration:r,delay:o}),M.transitions.create("transform",{duration:m?r:.666*r,delay:o,easing:i})].join(","),x&&x(t,n)})),F=B(A),H=B(N),I=B((t=>{const{duration:n,delay:e,easing:o}=(0,u.c)({style:T,timeout:C,easing:y},{mode:"exit"});let i;"auto"===C?(i=M.transitions.getAutoHeightDuration(t.clientHeight),P.current=i):i=n,t.style.transition=[M.transitions.create("opacity",{duration:i,delay:e}),M.transitions.create("transform",{duration:m?i:.666*i,delay:m?e:e||.333*i,easing:o})].join(","),t.style.opacity=0,t.style.transform=h(.75),S&&S(t)})),U=B(k);return(0,c.jsx)(R,(0,o.A)({appear:g,in:v,nodeRef:D,onEnter:L,onEntered:F,onEntering:W,onExit:I,onExited:U,onExiting:H,addEndListener:t=>{"auto"===C&&w.start(P.current||0,t),e&&e(D.current,t)},timeout:"auto"===C?null:C},O,{children:(t,n)=>r.cloneElement(E,(0,o.A)({style:(0,o.A)({opacity:0,transform:h(.75),visibility:"exited"!==t||v?void 0:"hidden"},f[t],T,E.props.style),ref:j},n))}))}));g.muiSupportAuto=!0;const E=g},5865:(t,n,e)=>{e.d(n,{A:()=>x});var o=e(8587),i=e(8168),r=e(5043),a=e(8387),s=e(8698),l=e(8606),u=e(4535),p=e(2876),c=e(6803),d=e(7056),h=e(2400);function f(t){return(0,h.Ay)("MuiTypography",t)}(0,d.A)("MuiTypography",["root","h1","h2","h3","h4","h5","h6","subtitle1","subtitle2","body1","body2","inherit","button","caption","overline","alignLeft","alignRight","alignCenter","alignJustify","noWrap","gutterBottom","paragraph"]);var m=e(579);const g=["align","className","component","gutterBottom","noWrap","paragraph","variant","variantMapping"],E=(0,u.Ay)("span",{name:"MuiTypography",slot:"Root",overridesResolver:(t,n)=>{const{ownerState:e}=t;return[n.root,e.variant&&n[e.variant],"inherit"!==e.align&&n["align".concat((0,c.A)(e.align))],e.noWrap&&n.noWrap,e.gutterBottom&&n.gutterBottom,e.paragraph&&n.paragraph]}})((t=>{let{theme:n,ownerState:e}=t;return(0,i.A)({margin:0},"inherit"===e.variant&&{font:"inherit"},"inherit"!==e.variant&&n.typography[e.variant],"inherit"!==e.align&&{textAlign:e.align},e.noWrap&&{overflow:"hidden",textOverflow:"ellipsis",whiteSpace:"nowrap"},e.gutterBottom&&{marginBottom:"0.35em"},e.paragraph&&{marginBottom:16})})),y={h1:"h1",h2:"h2",h3:"h3",h4:"h4",h5:"h5",h6:"h6",subtitle1:"h6",subtitle2:"h6",body1:"p",body2:"p",inherit:"p"},v={primary:"primary.main",textPrimary:"text.primary",secondary:"secondary.main",textSecondary:"text.secondary",error:"error.main"},x=r.forwardRef((function(t,n){const e=(0,p.A)({props:t,name:"MuiTypography"}),r=(t=>v[t]||t)(e.color),u=(0,s.A)((0,i.A)({},e,{color:r})),{align:d="inherit",className:h,component:x,gutterBottom:A=!1,noWrap:b=!1,paragraph:S=!1,variant:k="body1",variantMapping:N=y}=u,T=(0,o.A)(u,g),C=(0,i.A)({},u,{align:d,color:r,className:h,component:x,gutterBottom:A,noWrap:b,paragraph:S,variant:k,variantMapping:N}),R=x||(S?"p":N[k]||y[k])||"span",O=(t=>{const{align:n,gutterBottom:e,noWrap:o,paragraph:i,variant:r,classes:a}=t,s={root:["root",r,"inherit"!==t.align&&"align".concat((0,c.A)(n)),e&&"gutterBottom",o&&"noWrap",i&&"paragraph"]};return(0,l.A)(s,f,a)})(C);return(0,m.jsx)(E,(0,i.A)({as:R,ref:n,ownerState:C,className:(0,a.A)(O.root,h)},T))}))},6240:(t,n,e)=>{e.d(n,{A:()=>a});e(5043);var o=e(8653),i=e(5170),r=e(3375);function a(){const t=(0,o.A)(i.A);return t[r.A]||t}},653:(t,n,e)=>{e.d(n,{c:()=>i,q:()=>o});const o=t=>t.scrollTop;function i(t,n){var e,o;const{timeout:i,easing:r,style:a={}}=t;return{duration:null!=(e=a.transitionDuration)?e:"number"===typeof i?i:i[n.mode]||0,easing:null!=(o=a.transitionTimingFunction)?o:"object"===typeof r?r[n.mode]:r,delay:a.transitionDelay}}},9998:(t,n,e)=>{e.d(n,{Ay:()=>g});var o=e(8587),i=e(5540),r=e(5043),a=e(7950);const s=!1;var l=e(8726),u="unmounted",p="exited",c="entering",d="entered",h="exiting",f=function(t){function n(n,e){var o;o=t.call(this,n,e)||this;var i,r=e&&!e.isMounting?n.enter:n.appear;return o.appearStatus=null,n.in?r?(i=p,o.appearStatus=c):i=d:i=n.unmountOnExit||n.mountOnEnter?u:p,o.state={status:i},o.nextCallback=null,o}(0,i.A)(n,t),n.getDerivedStateFromProps=function(t,n){return t.in&&n.status===u?{status:p}:null};var e=n.prototype;return e.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},e.componentDidUpdate=function(t){var n=null;if(t!==this.props){var e=this.state.status;this.props.in?e!==c&&e!==d&&(n=c):e!==c&&e!==d||(n=h)}this.updateStatus(!1,n)},e.componentWillUnmount=function(){this.cancelNextCallback()},e.getTimeouts=function(){var t,n,e,o=this.props.timeout;return t=n=e=o,null!=o&&"number"!==typeof o&&(t=o.exit,n=o.enter,e=void 0!==o.appear?o.appear:n),{exit:t,enter:n,appear:e}},e.updateStatus=function(t,n){if(void 0===t&&(t=!1),null!==n)if(this.cancelNextCallback(),n===c){if(this.props.unmountOnExit||this.props.mountOnEnter){var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this);e&&function(t){t.scrollTop}(e)}this.performEnter(t)}else this.performExit();else this.props.unmountOnExit&&this.state.status===p&&this.setState({status:u})},e.performEnter=function(t){var n=this,e=this.props.enter,o=this.context?this.context.isMounting:t,i=this.props.nodeRef?[o]:[a.findDOMNode(this),o],r=i[0],l=i[1],u=this.getTimeouts(),p=o?u.appear:u.enter;!t&&!e||s?this.safeSetState({status:d},(function(){n.props.onEntered(r)})):(this.props.onEnter(r,l),this.safeSetState({status:c},(function(){n.props.onEntering(r,l),n.onTransitionEnd(p,(function(){n.safeSetState({status:d},(function(){n.props.onEntered(r,l)}))}))})))},e.performExit=function(){var t=this,n=this.props.exit,e=this.getTimeouts(),o=this.props.nodeRef?void 0:a.findDOMNode(this);n&&!s?(this.props.onExit(o),this.safeSetState({status:h},(function(){t.props.onExiting(o),t.onTransitionEnd(e.exit,(function(){t.safeSetState({status:p},(function(){t.props.onExited(o)}))}))}))):this.safeSetState({status:p},(function(){t.props.onExited(o)}))},e.cancelNextCallback=function(){null!==this.nextCallback&&(this.nextCallback.cancel(),this.nextCallback=null)},e.safeSetState=function(t,n){n=this.setNextCallback(n),this.setState(t,n)},e.setNextCallback=function(t){var n=this,e=!0;return this.nextCallback=function(o){e&&(e=!1,n.nextCallback=null,t(o))},this.nextCallback.cancel=function(){e=!1},this.nextCallback},e.onTransitionEnd=function(t,n){this.setNextCallback(n);var e=this.props.nodeRef?this.props.nodeRef.current:a.findDOMNode(this),o=null==t&&!this.props.addEndListener;if(e&&!o){if(this.props.addEndListener){var i=this.props.nodeRef?[this.nextCallback]:[e,this.nextCallback],r=i[0],s=i[1];this.props.addEndListener(r,s)}null!=t&&setTimeout(this.nextCallback,t)}else setTimeout(this.nextCallback,0)},e.render=function(){var t=this.state.status;if(t===u)return null;var n=this.props,e=n.children,i=(n.in,n.mountOnEnter,n.unmountOnExit,n.appear,n.enter,n.exit,n.timeout,n.addEndListener,n.onEnter,n.onEntering,n.onEntered,n.onExit,n.onExiting,n.onExited,n.nodeRef,(0,o.A)(n,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]));return r.createElement(l.A.Provider,{value:null},"function"===typeof e?e(t,i):r.cloneElement(r.Children.only(e),i))},n}(r.Component);function m(){}f.contextType=l.A,f.propTypes={},f.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m},f.UNMOUNTED=u,f.EXITED=p,f.ENTERING=c,f.ENTERED=d,f.EXITING=h;const g=f}}]);
//# sourceMappingURL=656.ccebd2ac.chunk.js.map