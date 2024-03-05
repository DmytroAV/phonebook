"use strict";(self.webpackChunkphonebook=self.webpackChunkphonebook||[]).push([[660],{4098:function(e,t,o){o.d(t,{Z:function(){return ht}});var n=o(9439),r=o(4942),i=o(3366),a=o(7462),s=o(2791),p=o(3733),c=o(4419),l=o(183),u=o(2065),f=o(6934),d=o(3967),m=o(1402),h=o(4036),v=o(3208),g=o(6117),b=o(2876),y=o(4913);function w(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function x(e){return e instanceof w(e).Element||e instanceof Element}function O(e){return e instanceof w(e).HTMLElement||e instanceof HTMLElement}function Z(e){return"undefined"!==typeof ShadowRoot&&(e instanceof w(e).ShadowRoot||e instanceof ShadowRoot)}var T=Math.max,P=Math.min,R=Math.round;function E(){var e=navigator.userAgentData;return null!=e&&e.brands&&Array.isArray(e.brands)?e.brands.map((function(e){return e.brand+"/"+e.version})).join(" "):navigator.userAgent}function M(){return!/^((?!chrome|android).)*safari/i.test(E())}function j(e,t,o){void 0===t&&(t=!1),void 0===o&&(o=!1);var n=e.getBoundingClientRect(),r=1,i=1;t&&O(e)&&(r=e.offsetWidth>0&&R(n.width)/e.offsetWidth||1,i=e.offsetHeight>0&&R(n.height)/e.offsetHeight||1);var a=(x(e)?w(e):window).visualViewport,s=!M()&&o,p=(n.left+(s&&a?a.offsetLeft:0))/r,c=(n.top+(s&&a?a.offsetTop:0))/i,l=n.width/r,u=n.height/i;return{width:l,height:u,top:c,right:p+l,bottom:c+u,left:p,x:p,y:c}}function k(e){var t=w(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function D(e){return e?(e.nodeName||"").toLowerCase():null}function L(e){return((x(e)?e.ownerDocument:e.document)||window.document).documentElement}function A(e){return j(L(e)).left+k(e).scrollLeft}function S(e){return w(e).getComputedStyle(e)}function C(e){var t=S(e),o=t.overflow,n=t.overflowX,r=t.overflowY;return/auto|scroll|overlay|hidden/.test(o+r+n)}function W(e,t,o){void 0===o&&(o=!1);var n=O(t),r=O(t)&&function(e){var t=e.getBoundingClientRect(),o=R(t.width)/e.offsetWidth||1,n=R(t.height)/e.offsetHeight||1;return 1!==o||1!==n}(t),i=L(t),a=j(e,r,o),s={scrollLeft:0,scrollTop:0},p={x:0,y:0};return(n||!n&&!o)&&(("body"!==D(t)||C(i))&&(s=function(e){return e!==w(e)&&O(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:k(e);var t}(t)),O(t)?((p=j(t,!0)).x+=t.clientLeft,p.y+=t.clientTop):i&&(p.x=A(i))),{x:a.left+s.scrollLeft-p.x,y:a.top+s.scrollTop-p.y,width:a.width,height:a.height}}function B(e){var t=j(e),o=e.offsetWidth,n=e.offsetHeight;return Math.abs(t.width-o)<=1&&(o=t.width),Math.abs(t.height-n)<=1&&(n=t.height),{x:e.offsetLeft,y:e.offsetTop,width:o,height:n}}function H(e){return"html"===D(e)?e:e.assignedSlot||e.parentNode||(Z(e)?e.host:null)||L(e)}function N(e){return["html","body","#document"].indexOf(D(e))>=0?e.ownerDocument.body:O(e)&&C(e)?e:N(H(e))}function F(e,t){var o;void 0===t&&(t=[]);var n=N(e),r=n===(null==(o=e.ownerDocument)?void 0:o.body),i=w(n),a=r?[i].concat(i.visualViewport||[],C(n)?n:[]):n,s=t.concat(a);return r?s:s.concat(F(H(a)))}function I(e){return["table","td","th"].indexOf(D(e))>=0}function V(e){return O(e)&&"fixed"!==S(e).position?e.offsetParent:null}function q(e){for(var t=w(e),o=V(e);o&&I(o)&&"static"===S(o).position;)o=V(o);return o&&("html"===D(o)||"body"===D(o)&&"static"===S(o).position)?t:o||function(e){var t=/firefox/i.test(E());if(/Trident/i.test(E())&&O(e)&&"fixed"===S(e).position)return null;var o=H(e);for(Z(o)&&(o=o.host);O(o)&&["html","body"].indexOf(D(o))<0;){var n=S(o);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||t&&"filter"===n.willChange||t&&n.filter&&"none"!==n.filter)return o;o=o.parentNode}return null}(e)||t}var U="top",z="bottom",$="right",X="left",Y="auto",_=[U,z,$,X],Q="start",G="end",J="clippingParents",K="viewport",ee="popper",te="reference",oe=_.reduce((function(e,t){return e.concat([t+"-"+Q,t+"-"+G])}),[]),ne=[].concat(_,[Y]).reduce((function(e,t){return e.concat([t,t+"-"+Q,t+"-"+G])}),[]),re=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ie(e){var t=new Map,o=new Set,n=[];function r(e){o.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!o.has(e)){var n=t.get(e);n&&r(n)}})),n.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){o.has(e.name)||r(e)})),n}function ae(e){var t;return function(){return t||(t=new Promise((function(o){Promise.resolve().then((function(){t=void 0,o(e())}))}))),t}}var se={placement:"bottom",modifiers:[],strategy:"absolute"};function pe(){for(var e=arguments.length,t=new Array(e),o=0;o<e;o++)t[o]=arguments[o];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function ce(e){void 0===e&&(e={});var t=e,o=t.defaultModifiers,n=void 0===o?[]:o,r=t.defaultOptions,i=void 0===r?se:r;return function(e,t,o){void 0===o&&(o=i);var r={placement:"bottom",orderedModifiers:[],options:Object.assign({},se,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,p={state:r,setOptions:function(o){var s="function"===typeof o?o(r.options):o;c(),r.options=Object.assign({},i,r.options,s),r.scrollParents={reference:x(e)?F(e):e.contextElement?F(e.contextElement):[],popper:F(t)};var l=function(e){var t=ie(e);return re.reduce((function(e,o){return e.concat(t.filter((function(e){return e.phase===o})))}),[])}(function(e){var t=e.reduce((function(e,t){var o=e[t.name];return e[t.name]=o?Object.assign({},o,t,{options:Object.assign({},o.options,t.options),data:Object.assign({},o.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(n,r.options.modifiers)));return r.orderedModifiers=l.filter((function(e){return e.enabled})),r.orderedModifiers.forEach((function(e){var t=e.name,o=e.options,n=void 0===o?{}:o,i=e.effect;if("function"===typeof i){var s=i({state:r,name:t,instance:p,options:n}),c=function(){};a.push(s||c)}})),p.update()},forceUpdate:function(){if(!s){var e=r.elements,t=e.reference,o=e.popper;if(pe(t,o)){r.rects={reference:W(t,q(o),"fixed"===r.options.strategy),popper:B(o)},r.reset=!1,r.placement=r.options.placement,r.orderedModifiers.forEach((function(e){return r.modifiersData[e.name]=Object.assign({},e.data)}));for(var n=0;n<r.orderedModifiers.length;n++)if(!0!==r.reset){var i=r.orderedModifiers[n],a=i.fn,c=i.options,l=void 0===c?{}:c,u=i.name;"function"===typeof a&&(r=a({state:r,options:l,name:u,instance:p})||r)}else r.reset=!1,n=-1}}},update:ae((function(){return new Promise((function(e){p.forceUpdate(),e(r)}))})),destroy:function(){c(),s=!0}};if(!pe(e,t))return p;function c(){a.forEach((function(e){return e()})),a=[]}return p.setOptions(o).then((function(e){!s&&o.onFirstUpdate&&o.onFirstUpdate(e)})),p}}var le={passive:!0};function ue(e){return e.split("-")[0]}function fe(e){return e.split("-")[1]}function de(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function me(e){var t,o=e.reference,n=e.element,r=e.placement,i=r?ue(r):null,a=r?fe(r):null,s=o.x+o.width/2-n.width/2,p=o.y+o.height/2-n.height/2;switch(i){case U:t={x:s,y:o.y-n.height};break;case z:t={x:s,y:o.y+o.height};break;case $:t={x:o.x+o.width,y:p};break;case X:t={x:o.x-n.width,y:p};break;default:t={x:o.x,y:o.y}}var c=i?de(i):null;if(null!=c){var l="y"===c?"height":"width";switch(a){case Q:t[c]=t[c]-(o[l]/2-n[l]/2);break;case G:t[c]=t[c]+(o[l]/2-n[l]/2)}}return t}var he={top:"auto",right:"auto",bottom:"auto",left:"auto"};function ve(e){var t,o=e.popper,n=e.popperRect,r=e.placement,i=e.variation,a=e.offsets,s=e.position,p=e.gpuAcceleration,c=e.adaptive,l=e.roundOffsets,u=e.isFixed,f=a.x,d=void 0===f?0:f,m=a.y,h=void 0===m?0:m,v="function"===typeof l?l({x:d,y:h}):{x:d,y:h};d=v.x,h=v.y;var g=a.hasOwnProperty("x"),b=a.hasOwnProperty("y"),y=X,x=U,O=window;if(c){var Z=q(o),T="clientHeight",P="clientWidth";if(Z===w(o)&&"static"!==S(Z=L(o)).position&&"absolute"===s&&(T="scrollHeight",P="scrollWidth"),r===U||(r===X||r===$)&&i===G)x=z,h-=(u&&Z===O&&O.visualViewport?O.visualViewport.height:Z[T])-n.height,h*=p?1:-1;if(r===X||(r===U||r===z)&&i===G)y=$,d-=(u&&Z===O&&O.visualViewport?O.visualViewport.width:Z[P])-n.width,d*=p?1:-1}var E,M=Object.assign({position:s},c&&he),j=!0===l?function(e,t){var o=e.x,n=e.y,r=t.devicePixelRatio||1;return{x:R(o*r)/r||0,y:R(n*r)/r||0}}({x:d,y:h},w(o)):{x:d,y:h};return d=j.x,h=j.y,p?Object.assign({},M,((E={})[x]=b?"0":"",E[y]=g?"0":"",E.transform=(O.devicePixelRatio||1)<=1?"translate("+d+"px, "+h+"px)":"translate3d("+d+"px, "+h+"px, 0)",E)):Object.assign({},M,((t={})[x]=b?h+"px":"",t[y]=g?d+"px":"",t.transform="",t))}var ge={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.offset,i=void 0===r?[0,0]:r,a=ne.reduce((function(e,o){return e[o]=function(e,t,o){var n=ue(e),r=[X,U].indexOf(n)>=0?-1:1,i="function"===typeof o?o(Object.assign({},t,{placement:e})):o,a=i[0],s=i[1];return a=a||0,s=(s||0)*r,[X,$].indexOf(n)>=0?{x:s,y:a}:{x:a,y:s}}(o,t.rects,i),e}),{}),s=a[t.placement],p=s.x,c=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=p,t.modifiersData.popperOffsets.y+=c),t.modifiersData[n]=a}},be={left:"right",right:"left",bottom:"top",top:"bottom"};function ye(e){return e.replace(/left|right|bottom|top/g,(function(e){return be[e]}))}var we={start:"end",end:"start"};function xe(e){return e.replace(/start|end/g,(function(e){return we[e]}))}function Oe(e,t){var o=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(o&&Z(o)){var n=t;do{if(n&&e.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function Ze(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function Te(e,t,o){return t===K?Ze(function(e,t){var o=w(e),n=L(e),r=o.visualViewport,i=n.clientWidth,a=n.clientHeight,s=0,p=0;if(r){i=r.width,a=r.height;var c=M();(c||!c&&"fixed"===t)&&(s=r.offsetLeft,p=r.offsetTop)}return{width:i,height:a,x:s+A(e),y:p}}(e,o)):x(t)?function(e,t){var o=j(e,!1,"fixed"===t);return o.top=o.top+e.clientTop,o.left=o.left+e.clientLeft,o.bottom=o.top+e.clientHeight,o.right=o.left+e.clientWidth,o.width=e.clientWidth,o.height=e.clientHeight,o.x=o.left,o.y=o.top,o}(t,o):Ze(function(e){var t,o=L(e),n=k(e),r=null==(t=e.ownerDocument)?void 0:t.body,i=T(o.scrollWidth,o.clientWidth,r?r.scrollWidth:0,r?r.clientWidth:0),a=T(o.scrollHeight,o.clientHeight,r?r.scrollHeight:0,r?r.clientHeight:0),s=-n.scrollLeft+A(e),p=-n.scrollTop;return"rtl"===S(r||o).direction&&(s+=T(o.clientWidth,r?r.clientWidth:0)-i),{width:i,height:a,x:s,y:p}}(L(e)))}function Pe(e,t,o,n){var r="clippingParents"===t?function(e){var t=F(H(e)),o=["absolute","fixed"].indexOf(S(e).position)>=0&&O(e)?q(e):e;return x(o)?t.filter((function(e){return x(e)&&Oe(e,o)&&"body"!==D(e)})):[]}(e):[].concat(t),i=[].concat(r,[o]),a=i[0],s=i.reduce((function(t,o){var r=Te(e,o,n);return t.top=T(r.top,t.top),t.right=P(r.right,t.right),t.bottom=P(r.bottom,t.bottom),t.left=T(r.left,t.left),t}),Te(e,a,n));return s.width=s.right-s.left,s.height=s.bottom-s.top,s.x=s.left,s.y=s.top,s}function Re(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function Ee(e,t){return t.reduce((function(t,o){return t[o]=e,t}),{})}function Me(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=void 0===n?e.placement:n,i=o.strategy,a=void 0===i?e.strategy:i,s=o.boundary,p=void 0===s?J:s,c=o.rootBoundary,l=void 0===c?K:c,u=o.elementContext,f=void 0===u?ee:u,d=o.altBoundary,m=void 0!==d&&d,h=o.padding,v=void 0===h?0:h,g=Re("number"!==typeof v?v:Ee(v,_)),b=f===ee?te:ee,y=e.rects.popper,w=e.elements[m?b:f],O=Pe(x(w)?w:w.contextElement||L(e.elements.popper),p,l,a),Z=j(e.elements.reference),T=me({reference:Z,element:y,strategy:"absolute",placement:r}),P=Ze(Object.assign({},y,T)),R=f===ee?P:Z,E={top:O.top-R.top+g.top,bottom:R.bottom-O.bottom+g.bottom,left:O.left-R.left+g.left,right:R.right-O.right+g.right},M=e.modifiersData.offset;if(f===ee&&M){var k=M[r];Object.keys(E).forEach((function(e){var t=[$,z].indexOf(e)>=0?1:-1,o=[U,z].indexOf(e)>=0?"y":"x";E[e]+=k[o]*t}))}return E}function je(e,t,o){return T(e,P(t,o))}var ke={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name,r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0!==a&&a,p=o.boundary,c=o.rootBoundary,l=o.altBoundary,u=o.padding,f=o.tether,d=void 0===f||f,m=o.tetherOffset,h=void 0===m?0:m,v=Me(t,{boundary:p,rootBoundary:c,padding:u,altBoundary:l}),g=ue(t.placement),b=fe(t.placement),y=!b,w=de(g),x="x"===w?"y":"x",O=t.modifiersData.popperOffsets,Z=t.rects.reference,R=t.rects.popper,E="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,M="number"===typeof E?{mainAxis:E,altAxis:E}:Object.assign({mainAxis:0,altAxis:0},E),j=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,k={x:0,y:0};if(O){if(i){var D,L="y"===w?U:X,A="y"===w?z:$,S="y"===w?"height":"width",C=O[w],W=C+v[L],H=C-v[A],N=d?-R[S]/2:0,F=b===Q?Z[S]:R[S],I=b===Q?-R[S]:-Z[S],V=t.elements.arrow,Y=d&&V?B(V):{width:0,height:0},_=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},G=_[L],J=_[A],K=je(0,Z[S],Y[S]),ee=y?Z[S]/2-N-K-G-M.mainAxis:F-K-G-M.mainAxis,te=y?-Z[S]/2+N+K+J+M.mainAxis:I+K+J+M.mainAxis,oe=t.elements.arrow&&q(t.elements.arrow),ne=oe?"y"===w?oe.clientTop||0:oe.clientLeft||0:0,re=null!=(D=null==j?void 0:j[w])?D:0,ie=C+te-re,ae=je(d?P(W,C+ee-re-ne):W,C,d?T(H,ie):H);O[w]=ae,k[w]=ae-C}if(s){var se,pe="x"===w?U:X,ce="x"===w?z:$,le=O[x],me="y"===x?"height":"width",he=le+v[pe],ve=le-v[ce],ge=-1!==[U,X].indexOf(g),be=null!=(se=null==j?void 0:j[x])?se:0,ye=ge?he:le-Z[me]-R[me]-be+M.altAxis,we=ge?le+Z[me]+R[me]-be-M.altAxis:ve,xe=d&&ge?function(e,t,o){var n=je(e,t,o);return n>o?o:n}(ye,le,we):je(d?ye:he,le,d?we:ve);O[x]=xe,k[x]=xe-le}t.modifiersData[n]=k}},requiresIfExists:["offset"]};var De={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,o=e.state,n=e.name,r=e.options,i=o.elements.arrow,a=o.modifiersData.popperOffsets,s=ue(o.placement),p=de(s),c=[X,$].indexOf(s)>=0?"height":"width";if(i&&a){var l=function(e,t){return Re("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:Ee(e,_))}(r.padding,o),u=B(i),f="y"===p?U:X,d="y"===p?z:$,m=o.rects.reference[c]+o.rects.reference[p]-a[p]-o.rects.popper[c],h=a[p]-o.rects.reference[p],v=q(i),g=v?"y"===p?v.clientHeight||0:v.clientWidth||0:0,b=m/2-h/2,y=l[f],w=g-u[c]-l[d],x=g/2-u[c]/2+b,O=je(y,x,w),Z=p;o.modifiersData[n]=((t={})[Z]=O,t.centerOffset=O-x,t)}},effect:function(e){var t=e.state,o=e.options.element,n=void 0===o?"[data-popper-arrow]":o;null!=n&&("string"!==typeof n||(n=t.elements.popper.querySelector(n)))&&Oe(t.elements.popper,n)&&(t.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function Le(e,t,o){return void 0===o&&(o={x:0,y:0}),{top:e.top-t.height-o.y,right:e.right-t.width+o.x,bottom:e.bottom-t.height+o.y,left:e.left-t.width-o.x}}function Ae(e){return[U,$,z,X].some((function(t){return e[t]>=0}))}var Se=ce({defaultModifiers:[{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,o=e.instance,n=e.options,r=n.scroll,i=void 0===r||r,a=n.resize,s=void 0===a||a,p=w(t.elements.popper),c=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&c.forEach((function(e){e.addEventListener("scroll",o.update,le)})),s&&p.addEventListener("resize",o.update,le),function(){i&&c.forEach((function(e){e.removeEventListener("scroll",o.update,le)})),s&&p.removeEventListener("resize",o.update,le)}},data:{}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,o=e.name;t.modifiersData[o]=me({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,o=e.options,n=o.gpuAcceleration,r=void 0===n||n,i=o.adaptive,a=void 0===i||i,s=o.roundOffsets,p=void 0===s||s,c={placement:ue(t.placement),variation:fe(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:r,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,ve(Object.assign({},c,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:p})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,ve(Object.assign({},c,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:p})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"applyStyles",enabled:!0,phase:"write",fn:function(e){var t=e.state;Object.keys(t.elements).forEach((function(e){var o=t.styles[e]||{},n=t.attributes[e]||{},r=t.elements[e];O(r)&&D(r)&&(Object.assign(r.style,o),Object.keys(n).forEach((function(e){var t=n[e];!1===t?r.removeAttribute(e):r.setAttribute(e,!0===t?"":t)})))}))},effect:function(e){var t=e.state,o={popper:{position:t.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(t.elements.popper.style,o.popper),t.styles=o,t.elements.arrow&&Object.assign(t.elements.arrow.style,o.arrow),function(){Object.keys(t.elements).forEach((function(e){var n=t.elements[e],r=t.attributes[e]||{},i=Object.keys(t.styles.hasOwnProperty(e)?t.styles[e]:o[e]).reduce((function(e,t){return e[t]="",e}),{});O(n)&&D(n)&&(Object.assign(n.style,i),Object.keys(r).forEach((function(e){n.removeAttribute(e)})))}))}},requires:["computeStyles"]},ge,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,o=e.options,n=e.name;if(!t.modifiersData[n]._skip){for(var r=o.mainAxis,i=void 0===r||r,a=o.altAxis,s=void 0===a||a,p=o.fallbackPlacements,c=o.padding,l=o.boundary,u=o.rootBoundary,f=o.altBoundary,d=o.flipVariations,m=void 0===d||d,h=o.allowedAutoPlacements,v=t.options.placement,g=ue(v),b=p||(g===v||!m?[ye(v)]:function(e){if(ue(e)===Y)return[];var t=ye(e);return[xe(e),t,xe(t)]}(v)),y=[v].concat(b).reduce((function(e,o){return e.concat(ue(o)===Y?function(e,t){void 0===t&&(t={});var o=t,n=o.placement,r=o.boundary,i=o.rootBoundary,a=o.padding,s=o.flipVariations,p=o.allowedAutoPlacements,c=void 0===p?ne:p,l=fe(n),u=l?s?oe:oe.filter((function(e){return fe(e)===l})):_,f=u.filter((function(e){return c.indexOf(e)>=0}));0===f.length&&(f=u);var d=f.reduce((function(t,o){return t[o]=Me(e,{placement:o,boundary:r,rootBoundary:i,padding:a})[ue(o)],t}),{});return Object.keys(d).sort((function(e,t){return d[e]-d[t]}))}(t,{placement:o,boundary:l,rootBoundary:u,padding:c,flipVariations:m,allowedAutoPlacements:h}):o)}),[]),w=t.rects.reference,x=t.rects.popper,O=new Map,Z=!0,T=y[0],P=0;P<y.length;P++){var R=y[P],E=ue(R),M=fe(R)===Q,j=[U,z].indexOf(E)>=0,k=j?"width":"height",D=Me(t,{placement:R,boundary:l,rootBoundary:u,altBoundary:f,padding:c}),L=j?M?$:X:M?z:U;w[k]>x[k]&&(L=ye(L));var A=ye(L),S=[];if(i&&S.push(D[E]<=0),s&&S.push(D[L]<=0,D[A]<=0),S.every((function(e){return e}))){T=R,Z=!1;break}O.set(R,S)}if(Z)for(var C=function(e){var t=y.find((function(t){var o=O.get(t);if(o)return o.slice(0,e).every((function(e){return e}))}));if(t)return T=t,"break"},W=m?3:1;W>0;W--){if("break"===C(W))break}t.placement!==T&&(t.modifiersData[n]._skip=!0,t.placement=T,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},ke,De,{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,o=e.name,n=t.rects.reference,r=t.rects.popper,i=t.modifiersData.preventOverflow,a=Me(t,{elementContext:"reference"}),s=Me(t,{altBoundary:!0}),p=Le(a,n),c=Le(s,r,i),l=Ae(p),u=Ae(c);t.modifiersData[o]={referenceClippingOffsets:p,popperEscapeOffsets:c,isReferenceHidden:l,hasPopperEscaped:u},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":l,"data-popper-escaped":u})}}]}),Ce=o(6174),We=o(1217);function Be(e){return(0,We.Z)("MuiPopper",e)}(0,o(5878).Z)("MuiPopper",["root"]);var He=o(1107),Ne=o(184),Fe={disableDefaultClasses:!1},Ie=s.createContext(Fe);var Ve=["anchorEl","children","direction","disablePortal","modifiers","open","placement","popperOptions","popperRef","slotProps","slots","TransitionProps","ownerState"],qe=["anchorEl","children","container","direction","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","style","transition","slotProps","slots"];function Ue(e){return"function"===typeof e?e():e}function ze(e){return void 0!==e.nodeType}var $e=function(){return(0,c.Z)({root:["root"]},function(e){var t=s.useContext(Ie).disableDefaultClasses;return function(o){return t?"":e(o)}}(Be))},Xe={},Ye=s.forwardRef((function(e,t){var o,r=e.anchorEl,p=e.children,c=e.direction,l=e.disablePortal,u=e.modifiers,f=e.open,d=e.placement,m=e.popperOptions,h=e.popperRef,v=e.slotProps,y=void 0===v?{}:v,w=e.slots,x=void 0===w?{}:w,O=e.TransitionProps,Z=(0,i.Z)(e,Ve),T=s.useRef(null),P=(0,g.Z)(T,t),R=s.useRef(null),E=(0,g.Z)(R,h),M=s.useRef(E);(0,b.Z)((function(){M.current=E}),[E]),s.useImperativeHandle(h,(function(){return R.current}),[]);var j=function(e,t){if("ltr"===t)return e;switch(e){case"bottom-end":return"bottom-start";case"bottom-start":return"bottom-end";case"top-end":return"top-start";case"top-start":return"top-end";default:return e}}(d,c),k=s.useState(j),D=(0,n.Z)(k,2),L=D[0],A=D[1],S=s.useState(Ue(r)),C=(0,n.Z)(S,2),W=C[0],B=C[1];s.useEffect((function(){R.current&&R.current.forceUpdate()})),s.useEffect((function(){r&&B(Ue(r))}),[r]),(0,b.Z)((function(){if(W&&f){var e=[{name:"preventOverflow",options:{altBoundary:l}},{name:"flip",options:{altBoundary:l}},{name:"onUpdate",enabled:!0,phase:"afterWrite",fn:function(e){var t=e.state;A(t.placement)}}];null!=u&&(e=e.concat(u)),m&&null!=m.modifiers&&(e=e.concat(m.modifiers));var t=Se(W,T.current,(0,a.Z)({placement:j},m,{modifiers:e}));return M.current(t),function(){t.destroy(),M.current(null)}}}),[W,l,u,f,m,j]);var H={placement:L};null!==O&&(H.TransitionProps=O);var N=$e(),F=null!=(o=x.root)?o:"div",I=(0,He.y)({elementType:F,externalSlotProps:y.root,externalForwardedProps:Z,additionalProps:{role:"tooltip",ref:P},ownerState:e,className:N.root});return(0,Ne.jsx)(F,(0,a.Z)({},I,{children:"function"===typeof p?p(H):p}))})),_e=s.forwardRef((function(e,t){var o,r=e.anchorEl,p=e.children,c=e.container,l=e.direction,u=void 0===l?"ltr":l,f=e.disablePortal,d=void 0!==f&&f,m=e.keepMounted,h=void 0!==m&&m,v=e.modifiers,g=e.open,b=e.placement,w=void 0===b?"bottom":b,x=e.popperOptions,O=void 0===x?Xe:x,Z=e.popperRef,T=e.style,P=e.transition,R=void 0!==P&&P,E=e.slotProps,M=void 0===E?{}:E,j=e.slots,k=void 0===j?{}:j,D=(0,i.Z)(e,qe),L=s.useState(!0),A=(0,n.Z)(L,2),S=A[0],C=A[1];if(!h&&!g&&(!R||S))return null;if(c)o=c;else if(r){var W=Ue(r);o=W&&ze(W)?(0,y.Z)(W).body:(0,y.Z)(null).body}var B=g||!h||R&&!S?void 0:"none",H=R?{in:g,onEnter:function(){C(!1)},onExited:function(){C(!0)}}:void 0;return(0,Ne.jsx)(Ce.h,{disablePortal:d,container:o,children:(0,Ne.jsx)(Ye,(0,a.Z)({anchorEl:r,direction:u,disablePortal:d,modifiers:v,ref:t,open:R?!S:g,placement:w,popperOptions:O,popperRef:Z,slotProps:M,slots:k},D,{style:(0,a.Z)({position:"fixed",top:0,left:0,display:B},T),TransitionProps:H,children:p}))})})),Qe=o(9120),Ge=["anchorEl","component","components","componentsProps","container","disablePortal","keepMounted","modifiers","open","placement","popperOptions","popperRef","transition","slots","slotProps"],Je=(0,f.ZP)(_e,{name:"MuiPopper",slot:"Root",overridesResolver:function(e,t){return t.root}})({}),Ke=s.forwardRef((function(e,t){var o,n=(0,Qe.Z)(),r=(0,m.Z)({props:e,name:"MuiPopper"}),s=r.anchorEl,p=r.component,c=r.components,l=r.componentsProps,u=r.container,f=r.disablePortal,d=r.keepMounted,h=r.modifiers,v=r.open,g=r.placement,b=r.popperOptions,y=r.popperRef,w=r.transition,x=r.slots,O=r.slotProps,Z=(0,i.Z)(r,Ge),T=null!=(o=null==x?void 0:x.root)?o:null==c?void 0:c.Root,P=(0,a.Z)({anchorEl:s,container:u,disablePortal:f,keepMounted:d,modifiers:h,open:v,placement:g,popperOptions:b,popperRef:y,transition:w},Z);return(0,Ne.jsx)(Je,(0,a.Z)({as:p,direction:null==n?void 0:n.direction,slots:{root:T},slotProps:null!=O?O:l},P,{ref:t}))})),et=o(9683),tt=o(2071),ot=o(7384),nt=o(3031),rt=o(5158),it=o(9293),at=["arrow","children","classes","components","componentsProps","describeChild","disableFocusListener","disableHoverListener","disableInteractive","disableTouchListener","enterDelay","enterNextDelay","enterTouchDelay","followCursor","id","leaveDelay","leaveTouchDelay","onClose","onOpen","open","placement","PopperComponent","PopperProps","slotProps","slots","title","TransitionComponent","TransitionProps"];var st=(0,f.ZP)(Ke,{name:"MuiTooltip",slot:"Popper",overridesResolver:function(e,t){var o=e.ownerState;return[t.popper,!o.disableInteractive&&t.popperInteractive,o.arrow&&t.popperArrow,!o.open&&t.popperClose]}})((function(e){var t,o=e.theme,n=e.ownerState,i=e.open;return(0,a.Z)({zIndex:(o.vars||o).zIndex.tooltip,pointerEvents:"none"},!n.disableInteractive&&{pointerEvents:"auto"},!i&&{pointerEvents:"none"},n.arrow&&(t={},(0,r.Z)(t,'&[data-popper-placement*="bottom"] .'.concat(it.Z.arrow),{top:0,marginTop:"-0.71em","&::before":{transformOrigin:"0 100%"}}),(0,r.Z)(t,'&[data-popper-placement*="top"] .'.concat(it.Z.arrow),{bottom:0,marginBottom:"-0.71em","&::before":{transformOrigin:"100% 0"}}),(0,r.Z)(t,'&[data-popper-placement*="right"] .'.concat(it.Z.arrow),(0,a.Z)({},n.isRtl?{right:0,marginRight:"-0.71em"}:{left:0,marginLeft:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"100% 100%"}})),(0,r.Z)(t,'&[data-popper-placement*="left"] .'.concat(it.Z.arrow),(0,a.Z)({},n.isRtl?{left:0,marginLeft:"-0.71em"}:{right:0,marginRight:"-0.71em"},{height:"1em",width:"0.71em","&::before":{transformOrigin:"0 0"}})),t))})),pt=(0,f.ZP)("div",{name:"MuiTooltip",slot:"Tooltip",overridesResolver:function(e,t){var o=e.ownerState;return[t.tooltip,o.touch&&t.touch,o.arrow&&t.tooltipArrow,t["tooltipPlacement".concat((0,h.Z)(o.placement.split("-")[0]))]]}})((function(e){var t,o,n=e.theme,i=e.ownerState;return(0,a.Z)({backgroundColor:n.vars?n.vars.palette.Tooltip.bg:(0,u.Fq)(n.palette.grey[700],.92),borderRadius:(n.vars||n).shape.borderRadius,color:(n.vars||n).palette.common.white,fontFamily:n.typography.fontFamily,padding:"4px 8px",fontSize:n.typography.pxToRem(11),maxWidth:300,margin:2,wordWrap:"break-word",fontWeight:n.typography.fontWeightMedium},i.arrow&&{position:"relative",margin:0},i.touch&&{padding:"8px 16px",fontSize:n.typography.pxToRem(14),lineHeight:"".concat((o=16/14,Math.round(1e5*o)/1e5),"em"),fontWeight:n.typography.fontWeightRegular},(t={},(0,r.Z)(t,".".concat(it.Z.popper,'[data-popper-placement*="left"] &'),(0,a.Z)({transformOrigin:"right center"},i.isRtl?(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}):(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}))),(0,r.Z)(t,".".concat(it.Z.popper,'[data-popper-placement*="right"] &'),(0,a.Z)({transformOrigin:"left center"},i.isRtl?(0,a.Z)({marginRight:"14px"},i.touch&&{marginRight:"24px"}):(0,a.Z)({marginLeft:"14px"},i.touch&&{marginLeft:"24px"}))),(0,r.Z)(t,".".concat(it.Z.popper,'[data-popper-placement*="top"] &'),(0,a.Z)({transformOrigin:"center bottom",marginBottom:"14px"},i.touch&&{marginBottom:"24px"})),(0,r.Z)(t,".".concat(it.Z.popper,'[data-popper-placement*="bottom"] &'),(0,a.Z)({transformOrigin:"center top",marginTop:"14px"},i.touch&&{marginTop:"24px"})),t))})),ct=(0,f.ZP)("span",{name:"MuiTooltip",slot:"Arrow",overridesResolver:function(e,t){return t.arrow}})((function(e){var t=e.theme;return{overflow:"hidden",position:"absolute",width:"1em",height:"0.71em",boxSizing:"border-box",color:t.vars?t.vars.palette.Tooltip.bg:(0,u.Fq)(t.palette.grey[700],.9),"&::before":{content:'""',margin:"auto",display:"block",width:"100%",height:"100%",backgroundColor:"currentColor",transform:"rotate(45deg)"}}})),lt=!1,ut=null,ft={x:0,y:0};function dt(e,t){return function(o){t&&t(o),e(o)}}var mt=s.forwardRef((function(e,t){var o,r,u,f,g,b,y,w,x,O,Z,T,P,R,E,M,j,k,D,L=(0,m.Z)({props:e,name:"MuiTooltip"}),A=L.arrow,S=void 0!==A&&A,C=L.children,W=L.components,B=void 0===W?{}:W,H=L.componentsProps,N=void 0===H?{}:H,F=L.describeChild,I=void 0!==F&&F,V=L.disableFocusListener,q=void 0!==V&&V,U=L.disableHoverListener,z=void 0!==U&&U,$=L.disableInteractive,X=void 0!==$&&$,Y=L.disableTouchListener,_=void 0!==Y&&Y,Q=L.enterDelay,G=void 0===Q?100:Q,J=L.enterNextDelay,K=void 0===J?0:J,ee=L.enterTouchDelay,te=void 0===ee?700:ee,oe=L.followCursor,ne=void 0!==oe&&oe,re=L.id,ie=L.leaveDelay,ae=void 0===ie?0:ie,se=L.leaveTouchDelay,pe=void 0===se?1500:se,ce=L.onClose,le=L.onOpen,ue=L.open,fe=L.placement,de=void 0===fe?"bottom":fe,me=L.PopperComponent,he=L.PopperProps,ve=void 0===he?{}:he,ge=L.slotProps,be=void 0===ge?{}:ge,ye=L.slots,we=void 0===ye?{}:ye,xe=L.title,Oe=L.TransitionComponent,Ze=void 0===Oe?v.Z:Oe,Te=L.TransitionProps,Pe=(0,i.Z)(L,at),Re=s.isValidElement(C)?C:(0,Ne.jsx)("span",{children:C}),Ee=(0,d.Z)(),Me="rtl"===Ee.direction,je=s.useState(),ke=(0,n.Z)(je,2),De=ke[0],Le=ke[1],Ae=s.useState(null),Se=(0,n.Z)(Ae,2),Ce=Se[0],We=Se[1],Be=s.useRef(!1),He=X||ne,Fe=s.useRef(),Ie=s.useRef(),Ve=s.useRef(),qe=s.useRef(),Ue=(0,rt.Z)({controlled:ue,default:!1,name:"Tooltip",state:"open"}),ze=(0,n.Z)(Ue,2),$e=ze[0],Xe=ze[1],Ye=$e,_e=(0,ot.Z)(re),Qe=s.useRef(),Ge=s.useCallback((function(){void 0!==Qe.current&&(document.body.style.WebkitUserSelect=Qe.current,Qe.current=void 0),clearTimeout(qe.current)}),[]);s.useEffect((function(){return function(){clearTimeout(Fe.current),clearTimeout(Ie.current),clearTimeout(Ve.current),Ge()}}),[Ge]);var Je=function(e){clearTimeout(ut),lt=!0,Xe(!0),le&&!Ye&&le(e)},mt=(0,et.Z)((function(e){clearTimeout(ut),ut=setTimeout((function(){lt=!1}),800+ae),Xe(!1),ce&&Ye&&ce(e),clearTimeout(Fe.current),Fe.current=setTimeout((function(){Be.current=!1}),Ee.transitions.duration.shortest)})),ht=function(e){Be.current&&"touchstart"!==e.type||(De&&De.removeAttribute("title"),clearTimeout(Ie.current),clearTimeout(Ve.current),G||lt&&K?Ie.current=setTimeout((function(){Je(e)}),lt?K:G):Je(e))},vt=function(e){clearTimeout(Ie.current),clearTimeout(Ve.current),Ve.current=setTimeout((function(){mt(e)}),ae)},gt=(0,nt.Z)(),bt=gt.isFocusVisibleRef,yt=gt.onBlur,wt=gt.onFocus,xt=gt.ref,Ot=s.useState(!1),Zt=(0,n.Z)(Ot,2)[1],Tt=function(e){yt(e),!1===bt.current&&(Zt(!1),vt(e))},Pt=function(e){De||Le(e.currentTarget),wt(e),!0===bt.current&&(Zt(!0),ht(e))},Rt=function(e){Be.current=!0;var t=Re.props;t.onTouchStart&&t.onTouchStart(e)},Et=ht,Mt=vt;s.useEffect((function(){if(Ye)return document.addEventListener("keydown",e),function(){document.removeEventListener("keydown",e)};function e(e){"Escape"!==e.key&&"Esc"!==e.key||mt(e)}}),[mt,Ye]);var jt=(0,tt.Z)(Re.ref,xt,Le,t);xe||0===xe||(Ye=!1);var kt=s.useRef(),Dt={},Lt="string"===typeof xe;I?(Dt.title=Ye||!Lt||z?null:xe,Dt["aria-describedby"]=Ye?_e:null):(Dt["aria-label"]=Lt?xe:null,Dt["aria-labelledby"]=Ye&&!Lt?_e:null);var At=(0,a.Z)({},Dt,Pe,Re.props,{className:(0,p.Z)(Pe.className,Re.props.className),onTouchStart:Rt,ref:jt},ne?{onMouseMove:function(e){var t=Re.props;t.onMouseMove&&t.onMouseMove(e),ft={x:e.clientX,y:e.clientY},kt.current&&kt.current.update()}}:{});var St={};_||(At.onTouchStart=function(e){Rt(e),clearTimeout(Ve.current),clearTimeout(Fe.current),Ge(),Qe.current=document.body.style.WebkitUserSelect,document.body.style.WebkitUserSelect="none",qe.current=setTimeout((function(){document.body.style.WebkitUserSelect=Qe.current,ht(e)}),te)},At.onTouchEnd=function(e){Re.props.onTouchEnd&&Re.props.onTouchEnd(e),Ge(),clearTimeout(Ve.current),Ve.current=setTimeout((function(){mt(e)}),pe)}),z||(At.onMouseOver=dt(Et,At.onMouseOver),At.onMouseLeave=dt(Mt,At.onMouseLeave),He||(St.onMouseOver=Et,St.onMouseLeave=Mt)),q||(At.onFocus=dt(Pt,At.onFocus),At.onBlur=dt(Tt,At.onBlur),He||(St.onFocus=Pt,St.onBlur=Tt));var Ct=s.useMemo((function(){var e,t=[{name:"arrow",enabled:Boolean(Ce),options:{element:Ce,padding:4}}];return null!=(e=ve.popperOptions)&&e.modifiers&&(t=t.concat(ve.popperOptions.modifiers)),(0,a.Z)({},ve.popperOptions,{modifiers:t})}),[Ce,ve]),Wt=(0,a.Z)({},L,{isRtl:Me,arrow:S,disableInteractive:He,placement:de,PopperComponentProp:me,touch:Be.current}),Bt=function(e){var t=e.classes,o=e.disableInteractive,n=e.arrow,r=e.touch,i=e.placement,a={popper:["popper",!o&&"popperInteractive",n&&"popperArrow"],tooltip:["tooltip",n&&"tooltipArrow",r&&"touch","tooltipPlacement".concat((0,h.Z)(i.split("-")[0]))],arrow:["arrow"]};return(0,c.Z)(a,it.Q,t)}(Wt),Ht=null!=(o=null!=(r=we.popper)?r:B.Popper)?o:st,Nt=null!=(u=null!=(f=null!=(g=we.transition)?g:B.Transition)?f:Ze)?u:v.Z,Ft=null!=(b=null!=(y=we.tooltip)?y:B.Tooltip)?b:pt,It=null!=(w=null!=(x=we.arrow)?x:B.Arrow)?w:ct,Vt=(0,l.$)(Ht,(0,a.Z)({},ve,null!=(O=be.popper)?O:N.popper,{className:(0,p.Z)(Bt.popper,null==ve?void 0:ve.className,null==(Z=null!=(T=be.popper)?T:N.popper)?void 0:Z.className)}),Wt),qt=(0,l.$)(Nt,(0,a.Z)({},Te,null!=(P=be.transition)?P:N.transition),Wt),Ut=(0,l.$)(Ft,(0,a.Z)({},null!=(R=be.tooltip)?R:N.tooltip,{className:(0,p.Z)(Bt.tooltip,null==(E=null!=(M=be.tooltip)?M:N.tooltip)?void 0:E.className)}),Wt),zt=(0,l.$)(It,(0,a.Z)({},null!=(j=be.arrow)?j:N.arrow,{className:(0,p.Z)(Bt.arrow,null==(k=null!=(D=be.arrow)?D:N.arrow)?void 0:k.className)}),Wt);return(0,Ne.jsxs)(s.Fragment,{children:[s.cloneElement(Re,At),(0,Ne.jsx)(Ht,(0,a.Z)({as:null!=me?me:Ke,placement:de,anchorEl:ne?{getBoundingClientRect:function(){return{top:ft.y,left:ft.x,right:ft.x,bottom:ft.y,width:0,height:0}}}:De,popperRef:kt,open:!!De&&Ye,id:_e,transition:!0},St,Vt,{popperOptions:Ct,children:function(e){var t=e.TransitionProps;return(0,Ne.jsx)(Nt,(0,a.Z)({timeout:Ee.transitions.duration.shorter},t,qt,{children:(0,Ne.jsxs)(Ft,(0,a.Z)({},Ut,{children:[xe,S?(0,Ne.jsx)(It,(0,a.Z)({},zt,{ref:We})):null]}))}))}}))]})})),ht=mt},9293:function(e,t,o){o.d(t,{Q:function(){return i}});var n=o(5878),r=o(1217);function i(e){return(0,r.Z)("MuiTooltip",e)}var a=(0,n.Z)("MuiTooltip",["popper","popperInteractive","popperArrow","popperClose","tooltip","tooltipArrow","touch","tooltipPlacementLeft","tooltipPlacementRight","tooltipPlacementTop","tooltipPlacementBottom","arrow"]);t.Z=a},3457:function(e,t,o){var n=(0,o(4046).ZP)();t.Z=n}}]);
//# sourceMappingURL=660.97595fa0.chunk.js.map