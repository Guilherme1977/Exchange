webpackJsonp([3],{215:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=a(0),l=d(r),n=a(197),o=d(a(643)),s=d(a(598)),i=d(a(603)),c=d(a(584)),u=d(a(583)),f=d(a(586));function d(e){return e&&e.__esModule?e:{default:e}}t.default=(0,n.compose)((0,n.setDisplayName)("Pricing"))(function(){return l.default.createElement(r.Fragment,null,l.default.createElement(c.default,null),l.default.createElement("div",{className:"mb-4"},l.default.createElement("div",{className:"container text-center"},l.default.createElement("div",{className:"mb-4"},l.default.createElement("h2",{className:"text-primary"},"Pricing"),l.default.createElement("div",{className:"page-desc"},"faa.st is the cheapest way to ",l.default.createElement("b",null,"instantly")," exchange crypto currencies")),l.default.createElement("div",{className:"bg-ultra-dark py-4 px-2 my-3"},l.default.createElement("div",null,l.default.createElement(s.default,{className:"p-1 border border-primary",style:{fill:"#05B8AB",height:"30px",width:"30px",borderRadius:"50%"},src:i.default})),l.default.createElement("div",{className:"font-weight-bold"},"optimized transactions"),l.default.createElement("div",{className:"text-muted"},"faa.st portfolio intelligently optimizes transactions. This allows diversification with the ",l.default.createElement("b",null,"minimum number")," of transactions and fees.")),l.default.createElement("div",{className:"bg-ultra-dark py-4 px-2 my-3"},l.default.createElement("div",{className:"mb-3"},"Here is an example transaction confirmation which clearly indicates transaction fees."),l.default.createElement("div",null,l.default.createElement("img",{className:"mt-2 p-1",style:{minWidth:"320px",maxWidth:"600px",width:"100%",background:"#333"},src:o.default}))),l.default.createElement("div",{className:"row"},l.default.createElement("div",{className:"col-md-4"},l.default.createElement("div",{className:"bg-ultra-dark py-5 px-4 mb-3"},l.default.createElement("div",{className:"font-weight-bold"},"swap fee"),l.default.createElement("div",{className:"text-muted"},"A ",l.default.createElement("b",null,"0.5%")," swap fee is applied on each side while swapping between two cryptocurrencies."))),l.default.createElement("div",{className:"col-md-4"},l.default.createElement("div",{className:"bg-ultra-dark py-5 px-4 mb-3"},l.default.createElement("div",{className:"font-weight-bold"},"exchange rate"),l.default.createElement("div",{className:"text-muted"},"Exchange rates are based on ",l.default.createElement("b",null,"real-time market data"),". Large orders are priced based on market depth."))),l.default.createElement("div",{className:"col-md-4"},l.default.createElement("div",{className:"bg-ultra-dark py-5 px-4 mb-3"},l.default.createElement("div",{className:"font-weight-bold"},"network fees"),l.default.createElement("div",{className:"text-muted"},"Network fees are charged on deposits and withdrawals. These fees are ",l.default.createElement("b",null,"paid to miners, not faa.st."))))))),l.default.createElement(u.default,null),l.default.createElement(f.default,{footerClass:"bg-ultra-dark p-4"}))})},579:function(e,t,a){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
!function(){"use strict";var a={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var n=typeof r;if("string"===n||"number"===n)e.push(r);else if(Array.isArray(r)&&r.length){var o=l.apply(null,r);o&&e.push(o)}else if("object"===n)for(var s in r)a.call(r,s)&&r[s]&&e.push(s)}}return e.join(" ")}void 0!==e&&e.exports?(l.default=l,e.exports=l):void 0===(r=function(){return l}.apply(t,[]))||(e.exports=r)}()},580:function(e,t,a){"use strict";e.exports={name:"Faa.st",author:"Bitaccess",description:"Faast is the safest and fastest way to build a crypto currency portfolio. Connect your hardware wallet, metamask, or other ethereum wallet and let us do the work for you. Easily trade over 100 different tokens for near-zero fees.",year:(new Date).getFullYear()}},582:function(e,t,a){e.exports=a(579)},583:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0));t.default=function(){return r.createElement("section",{className:"container-fluid signup-wrapper"},r.createElement("iframe",{src:"https://app.mailjet.com/widget/iframe/3lll/8M5",width:"100%",height:"260px",frameBorder:0,scrolling:"no",marginHeight:0,marginWidth:0}))}},584:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0)),l=a(197),n=a(104),o=i(a(580)),s=i(a(585));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,l.compose)((0,l.setDisplayName)("Header"))(function(){return r.createElement("nav",{className:"navbar navbar-dark navbar-expand-md navigation-clean-button",style:{backgroundColor:"transparent",paddingLeft:"12px"}},r.createElement("div",{className:"container"},r.createElement(n.Link,{exact:!0,to:"/",className:"navbar-brand text-white",style:{fontWeight:400}},r.createElement("img",{src:s.default,style:{height:"32px",marginRight:"16px"}}),o.default.name),r.createElement("button",{className:"navbar-toggler","data-toggle":"collapse","data-target":"#navcol-1"},r.createElement("span",{className:"sr-only"},"Toggle navigation"),r.createElement("span",{className:"navbar-toggler-icon text-white"})),r.createElement("div",{className:"collapse navbar-collapse",id:"navcol-1"},r.createElement("ul",{className:"nav navbar-nav ml-auto"},r.createElement("li",{className:"nav-item",role:"presentation"},r.createElement("a",{className:"nav-link text-light",href:"/app/swap"},"Swap")),r.createElement("li",{className:"nav-item",role:"presentation"},r.createElement("a",{className:"nav-link text-light",href:"https://medium.com/faast",target:"_blank noopener noreferrer",rel:"noopener"},"Blog")),r.createElement("li",{className:"nav-item",role:"presentation"},r.createElement("a",{className:"nav-link py-1",href:"/app"},r.createElement("button",{className:"btn btn-light"},"Portfolio")))))))})},585:function(e,t,a){e.exports=a.p+"static/img/faast-logo-64x64.4f4a2fc0.png"},586:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(0)),l=a(197),n=i(a(580)),o=i(a(582)),s=i(a(1));function i(e){return e&&e.__esModule?e:{default:e}}t.default=(0,l.compose)((0,l.setDisplayName)("Footer"),(0,l.setPropTypes)({footerClass:s.default.string}),(0,l.defaultProps)({footerClass:""}))(function(e){var t=e.footerClass;return r.createElement("div",{className:"footer-clean",style:{backgroundColor:"rgb(24,24,24)",paddingTop:"0px",height:"394px"}},r.createElement("footer",null,r.createElement("div",{className:(0,o.default)("container",t),style:{paddingTop:"40px"}},r.createElement("div",{className:"row no-gutters"},r.createElement("div",{className:"col-6 col-sm-6 col-md-2 col-xl-2 offset-xl-1 item"},r.createElement("h3",{style:{fontWeight:"normal",color:"#00d7b8"}},"Faast"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{className:"text-white",href:"/app",target:"_blank noopener noreferrer"},"Portfolio")),r.createElement("li",null,r.createElement("a",{className:"text-white",href:"/app/swap",target:"_blank noopener noreferrer"},"Swap")),r.createElement("li",null,r.createElement("a",{className:"text-white",href:"https://medium.com/faast",target:"_blank noopener noreferrer"},"Blog")))),r.createElement("div",{className:"col-6 col-sm-6 col-md-2 col-xl-2 offset-md-1 offset-xl-1 item"},r.createElement("h3",{style:{fontWeight:"normal",color:"rgb(251,181,18)"}},"Bitaccess"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{className:"text-white",href:"https://bitaccess.ca/about-us/",target:"_blank noopener noreferrer"},"About Us")),r.createElement("li",null,r.createElement("a",{className:"text-white",href:"/terms",target:"_blank noopener noreferrer"},"Terms of use")),r.createElement("li",null,r.createElement("a",{className:"text-white",href:"/privacy",target:"_blank noopener noreferrer"},"Privacy Policy")))),r.createElement("div",{className:"col-6 col-sm-6 col-md-2 col-xl-2 offset-md-2 offset-xl-1 item"},r.createElement("h3",{className:"text-light",style:{fontWeight:"normal"}},"Contact"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"mailto:support@faa.st",style:{color:"rgb(255,255,255)"}},"support@faa.st")))),r.createElement("div",{className:"col-6 col-sm-6 col-md-2 col-xl-2 offset-md-1 offset-xl-1 item"},r.createElement("h3",{className:"text-light",style:{fontWeight:"normal"}},"Links"),r.createElement("ul",null,r.createElement("li",null,r.createElement("a",{href:"https://api.faa.st/",target:"_blank noopener noreferrer",style:{color:"rgb(255,255,255)"}},"API")),r.createElement("li",null,r.createElement("a",{href:"/static/faast-press-kit.zip",target:"_blank noopener noreferrer",style:{color:"rgb(255,255,255)"}},"Press Kit")),r.createElement("li",null))),r.createElement("div",{className:"col-lg-12 col-xl-12 offset-lg-0 offset-xl-0 item social text-white",style:{minHeight:"0px",paddingRight:"0px",paddingLeft:"0px"}},r.createElement("a",{href:"https://github.com/go-faast"},r.createElement("i",{className:"icon ion-social-github"})),r.createElement("a",{href:"https://www.facebook.com/Faast-237787136707810",target:"_blank noopener noreferrer"},r.createElement("i",{className:"icon ion-social-facebook"})),r.createElement("a",{href:"https://twitter.com/gofaast"},r.createElement("i",{className:"icon ion-social-twitter"})),r.createElement("a",{href:"https://slack.faa.st/",target:"_blank noopener noreferrer"},r.createElement("i",{className:"fab fa-slack-hash"})),r.createElement("a",{href:"https://www.reddit.com/r/gofaast/",target:"_blank noopener noreferrer"},r.createElement("i",{className:"icon ion-social-reddit"})),r.createElement("p",{className:"lead text-white copyright"},"© ",n.default.year," ",n.default.author))))))})},597:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.numberish=t.tag=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=a(1);Object.keys(l).forEach(function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return l[e]}})});var n=i(l),o=i(a(105)),s=i(a(7));function i(e){return e&&e.__esModule?e:{default:e}}var c=t.tag=n.default.oneOfType([n.default.string,n.default.func]),u=t.numberish=n.default.oneOfType([n.default.string,n.default.number,n.default.instanceOf(o.default),n.default.instanceOf(s.default)]);t.default=r({},n.default,{tag:c,numberish:u})},598:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=i(a(0)),n=i(a(1)),o=a(599),s=a(597);function i(e){return e&&e.__esModule?e:{default:e}}var c={display:"inline-block",lineHeight:0,verticalAlign:"middle"},u={display:"block"},f=function(e){var t=e.src,a=e.tag,n=e.inline,s=e.block,i=e.width,f=e.height,d=e.size,m=e.rotate,p=e.color,h=e.style,g=function(e,t){var a={};for(var r in e)t.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(a[r]=e[r]);return a}(e,["src","tag","inline","block","width","height","size","rotate","color","style"]);return"string"==typeof t?"img"===a?g=r({src:t},g):h=r({backgroundImage:"url("+t+")",backgroundSize:"contain",backgroundRepeat:"no-repeat",backgroundPosition:"center"},h):a=t,"span"===a&&null===n&&null===s&&(n=!0),!d||i||f||(i="1rem",f="1rem"),l.default.createElement(a,r({style:(0,o.reduceStyles)({width:i,height:f},(0,o.resize)(d),(0,o.rotate)(m),(0,o.fill)(p),n&&c,s&&u,h)},g))};f.stylePropTypes={inline:n.default.bool,block:n.default.bool,width:n.default.string,height:n.default.string,size:n.default.oneOfType([n.default.number,n.default.string]),rotate:n.default.string,color:n.default.string,style:n.default.object},f.propTypes=r({src:n.default.oneOfType([n.default.string,s.tag]).isRequired,tag:s.tag},f.stylePropTypes),f.defaultProps={tag:"img",inline:null,block:null,size:null,width:null,height:null,rotate:null,color:null,style:{}},t.default=f},599:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.fill=t.resize=t.rotate=t.reduceStyles=t.scaleUnit=t.breakpoint=t.chartColor=t.zIndex=t.themeColor=t.styleVars=void 0;var r=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l=function(){return function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var a=[],r=!0,l=!1,n=void 0;try{for(var o,s=e[Symbol.iterator]();!(r=(o=s.next()).done)&&(a.push(o.value),!t||a.length!==t);r=!0);}catch(e){l=!0,n=e}finally{try{!r&&s.return&&s.return()}finally{if(l)throw n}}return a}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")}}(),n=c(a(600)),o=c(a(43)),s=a(42),i=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t.default=e,t}(a(200));function c(e){return e&&e.__esModule?e:{default:e}}var u=Object.entries(i).reduce(function(e,t){var a=l(t,2),r=a[0],n=a[1];return(0,s.set)(e,r.split("_").map(s.camelCase),n)},{}),f=u.themeColor,d=u.zIndex,m=u.chartColor,p=u.breakpoint;t.styleVars=u,t.themeColor=f,t.zIndex=d,t.chartColor=m,t.breakpoint=p;var h={up:"0",right:"90deg",down:"180deg",left:"270deg"},g={sm:1,md:2,lg:4},v=t.scaleUnit=function(e,t){var a=(0,n.default)(e),r=l(a,2);return[r[0]*t,r[1]].join("")};t.reduceStyles=function(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return t.reduce(function(e,t){return(0,s.isFunction)(t)?r({},e,t(e)):(0,s.isObject)(t)?r({},e,t):e},{})},t.rotate=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:h;return e?{transform:"rotate("+(e=t[e]||e)+")"}:{}},t.resize=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:g;return function(){var a=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};if(!e)return{};if("number"!=typeof(e=t[e]||e))return o.default.debug("Cannot resize width and height by non scalar "+e),a;var l=a.width,n=a.height;return r({},l?{width:v(l,e)}:{},n?{height:v(n,e)}:{})}},t.fill=function(e){return e?{fill:e=f[e]||e}:{}}},600:function(e,t){e.exports=function(e,t){t||(t=[0,""]),e=String(e);var a=parseFloat(e,10);return t[0]=a,t[1]=e.match(/[\d.\-\+]*\s*(.*)/)[1]||"",t}},603:function(e,t,a){var r=a(0);function l(e){return r.createElement("svg",e,r.createElement("path",{d:"M20 14.8a.8.8 0 1 0 0-1.6H1a.8.8 0 0 0-.58 1.351l6.65 7a.8.8 0 0 0 1.16-1.102L2.863 14.8H20zM1 7.2a.8.8 0 1 0 0 1.6h19a.8.8 0 0 0 .58-1.351l-6.65-7a.8.8 0 1 0-1.16 1.102L18.137 7.2H1z"}))}l.defaultProps={className:"LinkedInput__ExchangeIcon-fbfITA fIxUxo",viewBox:"0 0 21 22"},e.exports=l,l.default=l},643:function(e,t,a){e.exports=a.p+"static/img/txFees.452701ed.png"}});
//# sourceMappingURL=Pricing.677c828a.js.map