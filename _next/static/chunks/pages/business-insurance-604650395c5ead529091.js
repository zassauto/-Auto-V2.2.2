_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[17],{"1OyB":function(e,t,a){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}a.d(t,"a",(function(){return n}))},"2RFb":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var n in a)Object.prototype.hasOwnProperty.call(a,n)&&(e[n]=a[n])}return e},i=function(){function e(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,a,n){return a&&e(t.prototype,a),n&&e(t,n),t}}(),s=d(a("q1tI")),o=d(a("i8i4")),r=a("17x9"),l=a("dwFv"),c=d(a("b7n0")),u=d(a("j5U0")),m=d(a("Ci6P"));function d(e){return e&&e.__esModule?e:{default:e}}var p=0,f=0,v={listeners:[],pending:[]},g=!1;try{var N=Object.defineProperty({},"passive",{get:function(){g=!0}});window.addEventListener("test",null,N)}catch(I){}var b=!!g&&{capture:!1,passive:!0},h=function(e){var t=o.default.findDOMNode(e);if(t){var a=(0,m.default)(t);(e.props.overflow&&a!==t.ownerDocument&&a!==document&&a!==document.documentElement?function(e,t){var a=o.default.findDOMNode(e),n=void 0,i=void 0;try{var s=t.getBoundingClientRect();n=s.top,i=s.height}catch(I){n=p,i=f}var r=window.innerHeight||document.documentElement.clientHeight,l=Math.max(n,0),c=Math.min(r,n+i)-l,u=void 0,m=void 0;try{var d=a.getBoundingClientRect();u=d.top,m=d.height}catch(I){u=p,m=f}var v=u-l,g=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return v-g[0]<=c&&v+m+g[1]>=0}(e,a):function(e){var t=o.default.findDOMNode(e);if(!(t.offsetWidth||t.offsetHeight||t.getClientRects().length))return!1;var a=void 0,n=void 0;try{var i=t.getBoundingClientRect();a=i.top,n=i.height}catch(I){a=p,n=f}var s=window.innerHeight||document.documentElement.clientHeight,r=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return a-r[0]<=s&&a+n+r[1]>=0}(e))&&(e.visible||(v.pending.push(e),e.visible=!0,e.setState({stopped:!1}),e.forceUpdate()))}},y=function(){v.listeners.forEach((function(e){return h(e)})),v.pending.forEach((function(e){return(0,c.default)(v.listeners,e)})),v.pending=[]},w=function(e){function t(e){!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);var a=function(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!==typeof t&&"function"!==typeof t?e:t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e));return a.customStyle=function(e){var t=a.props,n=t.duration,i=t.delay,s=t.iteration,o=t.animation,r=t.disabled,l={animationName:e?"none":o,visibility:e&&!r?"hidden":"visible"};return n&&(l.animationDuration=n),i&&(l.animationDelay=i),s&&(l.animationIterationCount=s),l},a.resetAnimation=function(e){-1!==e.type.toLowerCase().indexOf("animationend")&&a.setState({stopped:!0},(function(){var e=a.props.callback;"function"===typeof e&&e.call(a,o.default.findDOMNode(a))}))},a.visible=!1,a.state={stopped:!1},a}return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),i(t,[{key:"componentDidMount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,m.default)(o.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute("data-react-wow")+1;1===t&&(0,l.on)(e,"scroll",y,b),e.setAttribute("data-react-wow",t)}}else if(!v.listeners.length){var a=this.props,n=a.scroll,i=a.resize;n&&(0,l.on)(window,"scroll",y,b),i&&(0,l.on)(window,"resize",y,b)}v.listeners.push(this),h(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,m.default)(o.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var t=+e.getAttribute("data-react-wow")-1;0===t?((0,l.off)(e,"scroll",y,b),e.removeAttribute("data-react-wow")):e.setAttribute("data-react-wow",t)}}(0,c.default)(v.listeners,this),v.listeners.length||((0,l.off)(window,"scroll",y,b),(0,l.off)(window,"resize",y,b))}},{key:"mergeProps",value:function(e){var t=this.props,a=t.animation,i=t.animateClass,s=this.customStyle(!this.visible),o=this.visible?a+" "+(this.state.stopped?"":i):a;return n({},e,{style:n({},e.style,s),className:(0,u.default)((e.className?e.className:"")+" "+o),onAnimationEnd:this.resetAnimation})}},{key:"render",value:function(){var e=this,t=this.props,a=t.children;return t.disabled?a:a?s.default.Children.map(a,(function(t){return s.default.cloneElement(t,e.mergeProps(t.props))})):null}}]),t}(s.default.Component);w.propTypes={duration:r.string,delay:r.string,iteration:r.string,animation:r.string,children:r.node,scroll:r.bool,resize:r.bool,animateClass:r.string,offset:(0,r.oneOfType)([r.number,(0,r.arrayOf)(r.number)]),overflow:r.bool,callback:r.func},w.defaultProps={duration:"",delay:"",iteration:"",animation:"",scroll:!0,resize:!0,animateClass:"animated",offset:0,overflow:!1,disabled:!1,callback:function(){}},t.default=w},B11q:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/business-insurance",function(){return a("MrNQ")}])},Ci6P:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e){if(!e)return document.documentElement;for(var t="absolute"===e.style.position,a=/(scroll|auto)/,n=e;n;){if(!n.parentNode)return e.ownerDocument||document.documentElement;var i=window.getComputedStyle(n),s=i.position,o=i.overflow,r=i["overflow-x"],l=i["overflow-y"];if("static"===s&&t)n=n.parentNode;else{if(a.test(o)&&a.test(r)&&a.test(l))return n;n=n.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},Ix5F:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("YFqc"),o=a.n(s),r=i.a.createElement;t.a=function(e){var t=e.pageTitle,a=e.homePageUrl,n=e.homePageText,i=e.activePageText;return r("div",{className:"page-title-area"},r("div",{className:"container"},r("div",{className:"page-title-content"},r("h2",null,t),r("ul",null,r("li",null,r(o.a,{href:a},r("a",null,n))),r("li",{className:"active"},i)))))}},JX7q:function(e,t,a){"use strict";function n(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}a.d(t,"a",(function(){return n}))},Ji7U:function(e,t,a){"use strict";function n(e,t){return(n=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function i(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&n(e,t)}a.d(t,"a",(function(){return i}))},MrNQ:function(e,t,a){"use strict";a.r(t);var n=a("q1tI"),i=a.n(n),s=a("vObv"),o=a("Ix5F"),r=a("ftS8"),l=a("YFqc"),c=a.n(l),u=i.a.createElement,m=function(){return u("div",{className:"service-area-two pt-100 pb-70"},u("div",{className:"container"},u("div",{className:"section-title"},u("span",null,"Our Service"),u("h2",null,"Types of Flexa Insurance"),u("p",null,"Oppor ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mua. Quis ipsum suspendices gravida.")),u("div",{className:"row"},u("div",{className:"col-lg-4 col-sm-6"},u("div",{className:"single-service"},u("img",{src:"/images/services/service1.jpg",alt:"Image"}),u("div",{className:"service-content"},u("i",{className:"icon-style flaticon-car-insurance"}),u("h3",null,"Car Insurance"),u("p",null,"Startup ipsum dolor sit amet consuring elised faisism dolor sit amet."),u(c.a,{href:"/insurance-details"},u("a",null,u("i",{className:"bx bx-chevrons-right"})))))),u("div",{className:"col-lg-4 col-sm-6"},u("div",{className:"single-service"},u("img",{src:"/images/services/service2.jpg",alt:"Image"}),u("div",{className:"service-content"},u("i",{className:"icon-style flaticon-insurance"}),u("h3",null,"Leadership Work"),u("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),u(c.a,{href:"/insurance-details"},u("a",null,u("i",{className:"bx bx-chevrons-right"})))))),u("div",{className:"col-lg-4 col-sm-6"},u("div",{className:"single-service"},u("img",{src:"/images/services/service3.jpg",alt:"Image"}),u("div",{className:"service-content"},u("i",{className:"icon-style flaticon-salesman"}),u("h3",null,"Business Insurance"),u("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),u(c.a,{href:"/insurance-details"},u("a",null,u("i",{className:"bx bx-chevrons-right"})))))),u("div",{className:"col-lg-4 col-sm-6"},u("div",{className:"single-service"},u("img",{src:"/images/services/service4.jpg",alt:"Image"}),u("div",{className:"service-content"},u("i",{className:"icon-style flaticon-insurance-1"}),u("h3",null,"Travel Insurance"),u("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),u(c.a,{href:"/insurance-details"},u("a",null,u("i",{className:"bx bx-chevrons-right"})))))),u("div",{className:"col-lg-4 col-sm-6"},u("div",{className:"single-service"},u("img",{src:"/images/services/service5.jpg",alt:"Image"}),u("div",{className:"service-content"},u("i",{className:"icon-style flaticon-health-care"}),u("h3",null,"Health Insurance"),u("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),u(c.a,{href:"/insurance-details"},u("a",null,u("i",{className:"bx bx-chevrons-right"})))))),u("div",{className:"col-lg-4 col-sm-6"},u("div",{className:"single-service"},u("img",{src:"/images/services/service6.jpg",alt:"Image"}),u("div",{className:"service-content"},u("i",{className:"icon-style flaticon-life-insurance-1"}),u("h3",null,"Life Insurance"),u("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),u(c.a,{href:"/insurance-details"},u("a",null,u("i",{className:"bx bx-chevrons-right"})))))))))},d=a("snbm"),p=a("Z1c+"),f=a("mdYk"),v=i.a.createElement;t.default=function(){return v(i.a.Fragment,null,v(s.a,null),v(o.a,{pageTitle:"Business Insurance",homePageUrl:"/",homePageText:"Home",activePageText:"Business Insurance"}),v("div",{className:"choose-us-area choose-us-area-two pt-100 pb-70"},v("div",{className:"container"},v("div",{className:"section-title"},v("span",null,"Our Features"),v("h2",null,"We are Award  Wining Company"),v("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),v("div",{className:"row"},v("div",{className:"col-lg-3"},v("div",{className:"single-choose"},v("span",{className:"flaticon-team"}),v("h3",null,"Trustworthy Company"),v("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),v(c.a,{href:"/insurance-details"},v("a",null,v("i",{className:"flaticon-right"}))))),v("div",{className:"col-lg-3"},v("div",{className:"single-choose"},v("span",{className:"flaticon-money"}),v("h3",null,"Money Back Guarantee"),v("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),v(c.a,{href:"/insurance-details"},v("a",null,v("i",{className:"flaticon-right"}))))),v("div",{className:"col-lg-3"},v("div",{className:"single-choose"},v("span",{className:"flaticon-support"}),v("h3",null,"Awesome Support"),v("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),v(c.a,{href:"/insurance-details"},v("a",null,v("i",{className:"flaticon-right"}))))),v("div",{className:"col-lg-3"},v("div",{className:"single-choose"},v("span",{className:"flaticon-contract"}),v("h3",null,"Anytime Cancellation"),v("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),v(c.a,{href:"/insurance-details"},v("a",null,v("i",{className:"flaticon-right"})))))))),v(r.a,null),v(m,null),v(d.a,null),v(p.a,null),v(f.a,null))}},"Z1c+":function(e,t,a){"use strict";a.d(t,"a",(function(){return b}));var n=a("1OyB"),i=a("vuIU"),s=a("JX7q"),o=a("Ji7U"),r=a("md7G"),l=a("foSv"),c=a("rePB"),u=a("q1tI"),m=a.n(u),d=a("2RFb"),p=a.n(d),f=a("YFqc"),v=a.n(f),g=m.a.createElement;function N(e){var t=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var a,n=Object(l.a)(e);if(t){var i=Object(l.a)(this).constructor;a=Reflect.construct(n,arguments,i)}else a=n.apply(this,arguments);return Object(r.a)(this,a)}}var b=function(e){Object(o.a)(a,e);var t=N(a);function a(){var e;Object(n.a)(this,a);for(var i=arguments.length,o=new Array(i),r=0;r<i;r++)o[r]=arguments[r];return e=t.call.apply(t,[this].concat(o)),Object(c.a)(Object(s.a)(e),"openTabSection",(function(e,t){var a,n,i;for(n=document.getElementsByClassName("tabs_item"),a=0;a<n.length;a++)n[a].classList.remove("fadeInUp"),n[a].style.display="none";for(i=document.getElementsByTagName("li"),a=0;a<i.length;a++)i[a].className=i[a].className.replace("current","");document.getElementById(t).style.display="block",document.getElementById(t).className+=" fadeInUp animated",e.currentTarget.className+="current"})),e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return g("div",{className:"get-quat-area ptb-100"},g("div",{className:"container"},g("div",{className:"section-title"},g("span",null,"Get A Quote"),g("h2",null,"Get A Free Quote"),g("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),g("div",{className:"row align-items-center"},g("div",{className:"col-lg-6"},g(p.a,{animation:"fadeInLeft",delay:"0.1s"},g("div",{className:"get-quat-img"},g("img",{src:"/images/get-quat-img.png",alt:"Image"})))),g("div",{className:"col-lg-6"},g("div",{className:"quat-form"},g("div",{className:"tab"},g("ul",{className:"tabs"},g("li",{className:"current",onClick:function(t){return e.openTabSection(t,"tab1")}},g("div",{className:"dot"})," Car"),g("li",{onClick:function(t){return e.openTabSection(t,"tab2")}},g("div",{className:"dot"})," Home"),g("li",{onClick:function(t){return e.openTabSection(t,"tab3")}},g("div",{className:"dot"})," Life"),g("li",{onClick:function(t){return e.openTabSection(t,"tab4")}},g("div",{className:"dot"})," Health")),g("div",{className:"tab_content"},g("div",{id:"tab1",className:"tabs_item"},g("p",null,"Start with your zip code to compare car insurance"),g("div",{className:"form"},g("div",{className:"form-group"},g("input",{type:"text",className:"form-control",id:"Name",placeholder:"Your Name"})),g("div",{className:"form-group"},g("input",{type:"email",className:"form-control",id:"Email",placeholder:"Your Email"})),g("div",{className:"form-group"},g("input",{type:"text",className:"form-control",id:"Number",placeholder:"Your Number"})),g("div",{className:"form-group"},g("div",{className:"select-box"},g("i",{className:"flaticon-avatar"}),g("select",{className:"form-control"},g("option",{value:"5"},"Property Type"),g("option",{value:"1"},"Home Property"),g("option",{value:"2"},"Health Insurance"),g("option",{value:"0"},"Car Insurance"),g("option",{value:"3"},"Life Insurance"),g("option",{value:"4"},"Home Insurance")))),g("button",{type:"submit",className:"default-btn"},"Start Saving Today"),g("ul",{className:"ratings"},g("li",null,"45 Ratings"),g("li",{className:"right"},"Already Member?",g(v.a,{href:"/sign-in"},g("a",null,"SIGN IN")))))),g("div",{id:"tab2",className:"tabs_item"},g("p",null,"Start with your zip code to compare home insurance"),g("div",{className:"form"},g("div",{className:"form-group"},g("input",{type:"text",className:"form-control",id:"Name2",placeholder:"Your Name"})),g("div",{className:"form-group"},g("input",{type:"email",className:"form-control",id:"Email2",placeholder:"Your Email"})),g("div",{className:"form-group"},g("input",{type:"text",className:"form-control",id:"Number2",placeholder:"Your Number"})),g("div",{className:"form-group"},g("div",{className:"select-box"},g("i",{className:"flaticon-avatar"}),g("select",{className:"form-control"},g("option",{value:"5"},"Home Property"),g("option",{value:"1"},"Property Type "),g("option",{value:"2"},"Health Insurance"),g("option",{value:"0"},"Car Insurance"),g("option",{value:"3"},"Life Insurance"),g("option",{value:"4"},"Home Insurance")))),g("button",{type:"submit",className:"default-btn"},"Start Saving Today"),g("ul",{className:"ratings"},g("li",null,"45 Ratings"),g("li",{className:"right"},"Already Member?",g(v.a,{href:"/sign-in"},g("a",null,"SIGN IN")))))),g("div",{id:"tab3",className:"tabs_item"},g("p",null,"Start with your zip code to compare life insurance"),g("div",{className:"form"},g("div",{className:"form-group"},g("input",{type:"text",className:"form-control",id:"Name3",placeholder:"Your Name"})),g("div",{className:"form-group"},g("input",{type:"email",className:"form-control",id:"Email3",placeholder:"Your Email"})),g("div",{className:"form-group"},g("input",{type:"text",className:"form-control",id:"Number3",placeholder:"Your Number"})),g("div",{className:"form-group"},g("div",{className:"select-box"},g("i",{className:"flaticon-avatar"}),g("select",{className:"form-control"},g("option",{value:"5"},"Life Insurance"),g("option",{value:"1"},"Home Property"),g("option",{value:"2"},"Health Insurance"),g("option",{value:"0"},"Car Insurance"),g("option",{value:"3"},"Property Type"),g("option",{value:"4"},"Home Insurance")))),g("button",{type:"submit",className:"default-btn"},"Start Saving Today"),g("ul",{className:"ratings"},g("li",null,"45 Ratings"),g("li",{className:"right"},"Already Member?",g(v.a,{href:"/sign-in"},g("a",null,"SIGN IN")))))),g("div",{id:"tab4",className:"tabs_item"},g("p",null,"Start with your zip code to compare health insurance"),g("div",{className:"form"},g("div",{className:"form-group"},g("input",{type:"text",className:"form-control",id:"Name4",placeholder:"Your Name"})),g("div",{className:"form-group"},g("input",{type:"email",className:"form-control",id:"Email4",placeholder:"Your Email"})),g("div",{className:"form-group"},g("input",{type:"text",className:"form-control",id:"Number4",placeholder:"Your Number"})),g("div",{className:"form-group"},g("div",{className:"select-box"},g("i",{className:"flaticon-avatar"}),g("select",{className:"form-control"},g("option",{value:"5"},"Property Health"),g("option",{value:"1"},"Home Property"),g("option",{value:"2"},"Health Insurance"),g("option",{value:"0"},"Car Insurance"),g("option",{value:"3"},"Life Insurance"),g("option",{value:"4"},"Home Insurance")))),g("button",{type:"submit",className:"default-btn"},"Start Saving Today"),g("ul",{className:"ratings"},g("li",null,"45 Ratings"),g("li",{className:"right"},"Already Member?",g(v.a,{href:"/sign-in"},g("a",null,"SIGN IN")))))))))))))}}]),a}(u.Component)},b7n0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments[1],a=e.indexOf(t);-1!==a&&e.splice(a,1)}},dwFv:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.on=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener?e.addEventListener(t,a,n):e.attachEvent&&e.attachEvent("on"+t,(function(t){a.call(e,t||window.event)}))},t.off=function(e,t,a){var n=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener?e.removeEventListener(t,a,n):e.detachEvent&&e.detachEvent("on"+t,a)}},foSv:function(e,t,a){"use strict";function n(e){return(n=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}a.d(t,"a",(function(){return n}))},ftS8:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n).a.createElement;t.a=function(){return i("div",{className:"about-area ptb-100"},i("div",{className:"container"},i("div",{className:"row align-items-center"},i("div",{className:"col-lg-6 col-md-6"},i("div",{className:"about-content"},i("span",null,"About Us"),i("h2",null,"Insurance Always Ready to Protect your Life & Business"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis"),i("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris."),i("div",{className:"about-list"},i("div",{className:"row"},i("div",{className:"col-lg-6"},i("div",{className:"about-single-list list-2"},i("i",{className:"flaticon-social-care-1"}),i("span",null,"We are always Care about Client Satisfy"))),i("div",{className:"col-lg-6"},i("div",{className:"about-single-list"},i("i",{className:"flaticon-target"}),i("span",null,"100+ Community Involvement"))))))),i("div",{className:"col-lg-6 col-md-6"},i("div",{className:"about-img-3"},i("img",{src:"/images/about-img-3.jpg",alt:"Image"}),i("div",{className:"about-img-2"},i("img",{src:"/images/about-img-2.jpg",alt:"Image"})))))))}},j5U0:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=e.trim().split(" ");return t.filter((function(e,a){return!!e&&t.indexOf(e)===a})).join(" ")}},md7G:function(e,t,a){"use strict";function n(e){return(n="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}a.d(t,"a",(function(){return s}));var i=a("JX7q");function s(e,t){return!t||"object"!==n(t)&&"function"!==typeof t?Object(i.a)(e):t}},rePB:function(e,t,a){"use strict";function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}a.d(t,"a",(function(){return n}))},snbm:function(e,t,a){"use strict";var n=a("q1tI"),i=a.n(n),s=a("YFqc"),o=a.n(s),r=i.a.createElement;t.a=function(){return r("div",{className:"business-contact-area"},r("div",{className:"container"},r("div",{className:"row align-items-center"},r("div",{className:"col-lg-6 col-md-6 p-0"},r("div",{className:"business-img"},r("img",{src:"/images/business-img.jpg",alt:"Image"}))),r("div",{className:"col-lg-6 col-md-6 p-0"},r("div",{className:"business-content"},r("h3",null,"Save up to 30% when you buy small business insurance in online"),r(o.a,{href:"/contact"},r("a",{className:"default-btn active ml-0"},"Contact Us")),r("p",null,"Call Us Today: ",r("br",null)," +82546-564-234"))))))}},vuIU:function(e,t,a){"use strict";function n(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function i(e,t,a){return t&&n(e.prototype,t),a&&n(e,a),e}a.d(t,"a",(function(){return i}))}},[["B11q",0,1,2,3]]]);