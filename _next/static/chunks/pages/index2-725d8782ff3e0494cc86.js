_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[24],{"2RFb":function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var i=Object.assign||function(e){for(var a=1;a<arguments.length;a++){var t=arguments[a];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},s=function(){function e(e,a){for(var t=0;t<a.length;t++){var i=a[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(a,t,i){return t&&e(a.prototype,t),i&&e(a,i),a}}(),l=d(t("q1tI")),n=d(t("i8i4")),o=t("17x9"),r=t("dwFv"),c=d(t("b7n0")),u=d(t("j5U0")),m=d(t("Ci6P"));function d(e){return e&&e.__esModule?e:{default:e}}var p=0,f=0,v={listeners:[],pending:[]},b=!1;try{var g=Object.defineProperty({},"passive",{get:function(){b=!0}});window.addEventListener("test",null,g)}catch(y){}var N=!!b&&{capture:!1,passive:!0},h=function(e){var a=n.default.findDOMNode(e);if(a){var t=(0,m.default)(a);(e.props.overflow&&t!==a.ownerDocument&&t!==document&&t!==document.documentElement?function(e,a){var t=n.default.findDOMNode(e),i=void 0,s=void 0;try{var l=a.getBoundingClientRect();i=l.top,s=l.height}catch(y){i=p,s=f}var o=window.innerHeight||document.documentElement.clientHeight,r=Math.max(i,0),c=Math.min(o,i+s)-r,u=void 0,m=void 0;try{var d=t.getBoundingClientRect();u=d.top,m=d.height}catch(y){u=p,m=f}var v=u-r,b=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return v-b[0]<=c&&v+m+b[1]>=0}(e,t):function(e){var a=n.default.findDOMNode(e);if(!(a.offsetWidth||a.offsetHeight||a.getClientRects().length))return!1;var t=void 0,i=void 0;try{var s=a.getBoundingClientRect();t=s.top,i=s.height}catch(y){t=p,i=f}var l=window.innerHeight||document.documentElement.clientHeight,o=Array.isArray(e.props.offset)?e.props.offset:[e.props.offset,e.props.offset];return t-o[0]<=l&&t+i+o[1]>=0}(e))&&(e.visible||(v.pending.push(e),e.visible=!0,e.setState({stopped:!1}),e.forceUpdate()))}},x=function(){v.listeners.forEach((function(e){return h(e)})),v.pending.forEach((function(e){return(0,c.default)(v.listeners,e)})),v.pending=[]},w=function(e){function a(e){!function(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}(this,a);var t=function(e,a){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!a||"object"!==typeof a&&"function"!==typeof a?e:a}(this,(a.__proto__||Object.getPrototypeOf(a)).call(this,e));return t.customStyle=function(e){var a=t.props,i=a.duration,s=a.delay,l=a.iteration,n=a.animation,o=a.disabled,r={animationName:e?"none":n,visibility:e&&!o?"hidden":"visible"};return i&&(r.animationDuration=i),s&&(r.animationDelay=s),l&&(r.animationIterationCount=l),r},t.resetAnimation=function(e){-1!==e.type.toLowerCase().indexOf("animationend")&&t.setState({stopped:!0},(function(){var e=t.props.callback;"function"===typeof e&&e.call(t,n.default.findDOMNode(t))}))},t.visible=!1,t.state={stopped:!1},t}return function(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function, not "+typeof a);e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),a&&(Object.setPrototypeOf?Object.setPrototypeOf(e,a):e.__proto__=a)}(a,e),s(a,[{key:"componentDidMount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,m.default)(n.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var a=+e.getAttribute("data-react-wow")+1;1===a&&(0,r.on)(e,"scroll",x,N),e.setAttribute("data-react-wow",a)}}else if(!v.listeners.length){var t=this.props,i=t.scroll,s=t.resize;i&&(0,r.on)(window,"scroll",x,N),s&&(0,r.on)(window,"resize",x,N)}v.listeners.push(this),h(this)}},{key:"shouldComponentUpdate",value:function(){return this.visible}},{key:"componentWillUnmount",value:function(){if(this.props.disabled)return!1;if(this.props.overflow){var e=(0,m.default)(n.default.findDOMNode(this));if(e&&"function"===typeof e.getAttribute){var a=+e.getAttribute("data-react-wow")-1;0===a?((0,r.off)(e,"scroll",x,N),e.removeAttribute("data-react-wow")):e.setAttribute("data-react-wow",a)}}(0,c.default)(v.listeners,this),v.listeners.length||((0,r.off)(window,"scroll",x,N),(0,r.off)(window,"resize",x,N))}},{key:"mergeProps",value:function(e){var a=this.props,t=a.animation,s=a.animateClass,l=this.customStyle(!this.visible),n=this.visible?t+" "+(this.state.stopped?"":s):t;return i({},e,{style:i({},e.style,l),className:(0,u.default)((e.className?e.className:"")+" "+n),onAnimationEnd:this.resetAnimation})}},{key:"render",value:function(){var e=this,a=this.props,t=a.children;return a.disabled?t:t?l.default.Children.map(t,(function(a){return l.default.cloneElement(a,e.mergeProps(a.props))})):null}}]),a}(l.default.Component);w.propTypes={duration:o.string,delay:o.string,iteration:o.string,animation:o.string,children:o.node,scroll:o.bool,resize:o.bool,animateClass:o.string,offset:(0,o.oneOfType)([o.number,(0,o.arrayOf)(o.number)]),overflow:o.bool,callback:o.func},w.defaultProps={duration:"",delay:"",iteration:"",animation:"",scroll:!0,resize:!0,animateClass:"animated",offset:0,overflow:!1,disabled:!1,callback:function(){}},a.default=w},"7DGc":function(e,a,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/index2",function(){return t("fC+r")}])},Ci6P:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(e){if(!e)return document.documentElement;for(var a="absolute"===e.style.position,t=/(scroll|auto)/,i=e;i;){if(!i.parentNode)return e.ownerDocument||document.documentElement;var s=window.getComputedStyle(i),l=s.position,n=s.overflow,o=s["overflow-x"],r=s["overflow-y"];if("static"===l&&a)i=i.parentNode;else{if(t.test(n)&&t.test(o)&&t.test(r))return i;i=i.parentNode}}return e.ownerDocument||e.documentElement||document.documentElement}},ECD5:function(e,a,t){"use strict";var i=t("wx14"),s=t("ODXe"),l=t("q1tI"),n=t.n(l),o=t("a6RD"),r=t.n(o),c=n.a.createElement,u=r()((function(){return t.e(6).then(t.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),m={loop:!0,margin:30,nav:!1,mouseDrag:!1,touchDrag:!1,dots:!0,autoplay:!0,smartSpeed:1500,autoplayHoverPause:!0,center:!0,responsive:{0:{items:1},576:{items:2},768:{items:2},992:{items:3}}};a.a=function(){var e=n.a.useState(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return n.a.useEffect((function(){l(!0)}),[]),c("div",{className:"team-area ptb-100"},c("div",{className:"container"},c("div",{className:"section-title"},c("span",null,"Team"),c("h2",null,"Our Expert Team"),c("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidiunt labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),t?c(u,Object(i.a)({className:"team-wrap owl-carousel owl-theme"},m),c("div",{className:"single-team"},c("div",{className:"image"},c("img",{src:"/images/team/team1.jpg",alt:"image"}),c("ul",{className:"social"},c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-facebook"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-twitter"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-linkedin"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-instagram"}))))),c("div",{className:"content"},c("h3",null,"Denial Vetori"),c("span",null,"Team Lead"))),c("div",{className:"single-team"},c("div",{className:"image"},c("img",{src:"/images/team/team2.jpg",alt:"image"}),c("ul",{className:"social"},c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-facebook"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-twitter"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-linkedin"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-instagram"}))))),c("div",{className:"content"},c("h3",null,"David Jon Korola"),c("span",null,"Marketer"))),c("div",{className:"single-team"},c("div",{className:"image"},c("img",{src:"/images/team/team3.jpg",alt:"image"}),c("ul",{className:"social"},c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-facebook"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-twitter"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-linkedin"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-instagram"}))))),c("div",{className:"content"},c("h3",null,"Merris Polar"),c("span",null,"CEO"))),c("div",{className:"single-team"},c("div",{className:"image"},c("img",{src:"/images/team/team4.jpg",alt:"image"}),c("ul",{className:"social"},c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-facebook"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-twitter"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-linkedin"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-instagram"}))))),c("div",{className:"content"},c("h3",null,"Jeck Dew"),c("span",null,"Founder")))):""))}},O6tT:function(e,a,t){"use strict";var i=t("wx14"),s=t("ODXe"),l=t("q1tI"),n=t.n(l),o=t("a6RD"),r=t.n(o),c=n.a.createElement,u=r()((function(){return t.e(6).then(t.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),m={loop:!0,margin:30,nav:!0,mouseDrag:!1,touchDrag:!1,dots:!1,autoplay:!0,smartSpeed:1500,autoplayHoverPause:!0,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:1},576:{items:1},768:{items:1},992:{items:2},1200:{items:2}}};a.a=function(){var e=n.a.useState(!1),a=Object(s.a)(e,2),t=a[0],l=a[1];return n.a.useEffect((function(){l(!0)}),[]),c("div",{className:"testimonial-area ptb-100"},c("div",{className:"container"},c("div",{className:"section-title"},c("span",null,"Testimonials"),c("h2",null,"What Our Clients Say"),c("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),t?c(u,Object(i.a)({className:"testimonial-wrap-two owl-carousel owl-theme"},m),c("div",{className:"single-client"},c("div",{className:"client-text"},c("img",{src:"/images/testimonials/client10.jpg",alt:"Image"}),c("h3",null,"Denial Peer"),c("span",null,"Marketer")),c("p",null,"Lorem, ipsum dolor sit amet consectetur quam adipisicing elit. Itaque exercitationem quia modi ipsam veniam obcaecati temporibus rerum quam velit ab eius, reiciendis rem a nemo facilis porro ad corrupti nulla  rerum quam, velit temporibus."),c("ul",null,c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"}))),c("div",{className:"quotes"},c("i",{className:"flaticon-left-quotes-sign"}))),c("div",{className:"single-client"},c("div",{className:"client-text"},c("img",{src:"/images/testimonials/client11.jpg",alt:"Image"}),c("h3",null,"Anna Dew"),c("span",null,"Developer")),c("p",null,"Lorem, ipsum dolor sit amet consectetur quam adipisicing elit. Itaque exercitationem quia modi ipsam veniam obcaecati temporibus rerum quam velit ab eius, reiciendis rem a nemo facilis porro ad corrupti nulla  rerum quam, velit temporibus."),c("ul",null,c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"}))),c("div",{className:"quotes"},c("i",{className:"flaticon-left-quotes-sign"}))),c("div",{className:"single-client"},c("div",{className:"client-text"},c("img",{src:"/images/testimonials/client12.jpg",alt:"Image"}),c("h3",null,"Jecty Smith"),c("span",null,"UI UX Designer")),c("p",null,"Lorem, ipsum dolor sit amet consectetur quam adipisicing elit. Itaque exercitationem quia modi ipsam veniam obcaecati temporibus rerum quam velit ab eius, reiciendis rem a nemo facilis porro ad corrupti nulla  rerum quam, velit temporibus."),c("ul",null,c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"})),c("li",null,c("i",{className:"bx bxs-star"}))),c("div",{className:"quotes"},c("i",{className:"flaticon-left-quotes-sign"})))):""))}},b7n0:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],a=arguments[1],t=e.indexOf(a);-1!==t&&e.splice(t,1)}},dwFv:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0});a.on=function(e,a,t){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.addEventListener?e.addEventListener(a,t,i):e.attachEvent&&e.attachEvent("on"+a,(function(a){t.call(e,a||window.event)}))},a.off=function(e,a,t){var i=arguments.length>3&&void 0!==arguments[3]&&arguments[3];e.removeEventListener?e.removeEventListener(a,t,i):e.detachEvent&&e.detachEvent("on"+a,t)}},"fC+r":function(e,a,t){"use strict";t.r(a);var i=t("q1tI"),s=t.n(i),l=t("vObv"),n=t("YFqc"),o=t.n(n),r=t("2RFb"),c=t.n(r),u=s.a.createElement,m=function(){return u("div",{className:"main-banner-area-two jarallax"},u("div",{className:"container-fluid"},u("div",{className:"row align-items-center"},u("div",{className:"col-lg-6"},u("div",{className:"banner-text"},u(c.a,{animation:"fadeInUp",delay:"0.1s"},u("span",null,"Investment Retirement Insurance")),u(c.a,{animation:"fadeInUp",delay:"0.2s"},u("h1",null,"Take The Worry Out of Life with Insurance Protection")),u(c.a,{animation:"fadeInUp",delay:"0.3s"},u("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum.")),u(c.a,{animation:"fadeInUp",delay:"0.5s"},u("div",{className:"banner-btn"},u(o.a,{href:"#"},u("a",{className:"default-btn"},"Get Started")),u(o.a,{href:"#"},u("a",{className:"default-btn active"},"Find An Agent")))))),u("div",{className:"col-lg-6 pr-0"},u(c.a,{animation:"fadeInRight",delay:"0.2s"},u("div",{className:"banner-img"}))))))},d=s.a.createElement,p=function(){return d("div",{className:"choose-us-area choose-us-area-two pt-100 pb-70"},d("div",{className:"container"},d("div",{className:"section-title"},d("span",null,"Our Features"),d("h2",null,"We are Award  Wining Company"),d("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),d("div",{className:"row"},d("div",{className:"col-lg-3 col-sm-6"},d("div",{className:"single-choose"},d("span",{className:"flaticon-team"}),d("h3",null,"Trustworthy Company"),d("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),d(o.a,{href:"/insurance-details"},d("a",null,d("i",{className:"flaticon-right"}))))),d("div",{className:"col-lg-3 col-sm-6"},d("div",{className:"single-choose"},d("span",{className:"flaticon-money"}),d("h3",null,"Money Back Guarantee"),d("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),d(o.a,{href:"/insurance-details"},d("a",null,d("i",{className:"flaticon-right"}))))),d("div",{className:"col-lg-3 col-sm-6"},d("div",{className:"single-choose"},d("span",{className:"flaticon-support"}),d("h3",null,"Awesome Support"),d("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),d(o.a,{href:"/insurance-details"},d("a",null,d("i",{className:"flaticon-right"}))))),d("div",{className:"col-lg-3 col-sm-6"},d("div",{className:"single-choose"},d("span",{className:"flaticon-contract"}),d("h3",null,"Anytime Cancellation"),d("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor"),d(o.a,{href:"/insurance-details"},d("a",null,d("i",{className:"flaticon-right"}))))))))},f=s.a.createElement,v=function(){return f("div",{className:"about-area ptb-100"},f("div",{className:"container"},f("div",{className:"row align-items-center"},f("div",{className:"col-lg-6 col-md-6"},f("div",{className:"about-content"},f("span",null,"About Us"),f("h2",null,"Insurance Always Ready to Protect your Life & Business"),f("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis"),f("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida. Risus aliqua suspendris."),f("div",{className:"about-list"},f("div",{className:"row"},f("div",{className:"col-lg-6"},f("div",{className:"about-single-list list-2"},f("i",{className:"flaticon-social-care-1"}),f("span",null,"We are always Care about Client Satisfy"))),f("div",{className:"col-lg-6"},f("div",{className:"about-single-list"},f("i",{className:"flaticon-target"}),f("span",null,"100+ Community Involvement"))))),f(o.a,{href:"/about"},f("a",{className:"default-btn"},"Know Details")))),f("div",{className:"col-lg-6 col-md-6"},f("div",{className:"about-img-3"},f("img",{src:"/images/about-img-3.jpg",alt:"Image"}),f("div",{className:"about-img-2"},f("img",{src:"/images/about-img-2.jpg",alt:"Image"})))))))},b=s.a.createElement,g=function(){return b("div",{className:"service-area-two pt-100 pb-35"},b("div",{className:"container"},b("div",{className:"section-title"},b("span",null,"Our Services"),b("h2",null,"Types of flexa Insurance"),b("p",null,"Oppor ipsum suspendice consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore mua. Quis ipsum suspendices gravida.")),b("div",{className:"row"},b("div",{className:"col-lg-4 col-sm-6"},b("div",{className:"single-service mb-65"},b("div",{className:"service-content"},b("i",{className:"icon-style flaticon-car-insurance"}),b("h3",null,"Car Insurance"),b("p",null,"Startup ipsum dolor sit amet consuring elised faisism dolor sit amet."),b(o.a,{href:"/insurance-details"},b("a",null,b("i",{className:"bx bx-chevrons-right"})))))),b("div",{className:"col-lg-4 col-sm-6"},b("div",{className:"single-service mb-65"},b("div",{className:"service-content"},b("i",{className:"icon-style flaticon-insurance"}),b("h3",null,"Leadership Work"),b("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),b(o.a,{href:"/insurance-details"},b("a",null,b("i",{className:"bx bx-chevrons-right"})))))),b("div",{className:"col-lg-4 col-sm-6"},b("div",{className:"single-service mb-65"},b("div",{className:"service-content"},b("i",{className:"icon-style flaticon-salesman"}),b("h3",null,"Business Insurance"),b("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),b(o.a,{href:"/insurance-details"},b("a",null,b("i",{className:"bx bx-chevrons-right"})))))),b("div",{className:"col-lg-4 col-sm-6"},b("div",{className:"single-service mb-65"},b("div",{className:"service-content"},b("i",{className:"icon-style flaticon-insurance-1"}),b("h3",null,"Travel Insurance"),b("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),b(o.a,{href:"/insurance-details"},b("a",null,b("i",{className:"bx bx-chevrons-right"})))))),b("div",{className:"col-lg-4 col-sm-6"},b("div",{className:"single-service mb-65"},b("div",{className:"service-content"},b("i",{className:"icon-style flaticon-health-care"}),b("h3",null,"Health Insurance"),b("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),b(o.a,{href:"/insurance-details"},b("a",null,b("i",{className:"bx bx-chevrons-right"})))))),b("div",{className:"col-lg-4 col-sm-6"},b("div",{className:"single-service mb-65"},b("div",{className:"service-content"},b("i",{className:"icon-style flaticon-life-insurance-1"}),b("h3",null,"Life Insurance"),b("p",null,"Leader ipsum dolor sit amet consuring lised faisism dolor sit amet."),b(o.a,{href:"/insurance-details"},b("a",null,b("i",{className:"bx bx-chevrons-right"})))))))))},N=t("snbm"),h=s.a.createElement,x=function(){return h("div",{className:"chooses-us-area-two pt-100 pb-70"},h("div",{className:"container"},h("div",{className:"section-title"},h("span",null,"Choose Us"),h("h2",null,"Why Choose Us"),h("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusd tempor incididunt ut labore et dolore printing.")),h("div",{className:"choose-us-wrap"},h("ul",null,h("li",null,h("i",{className:"flaticon-health-care"}),h("h3",null,"Clients Focused"),h("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur totam maxime, minima.")),h("li",null,h("i",{className:"flaticon-kindness"}),h("h3",null,"Service With Love"),h("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur totam maxime, minima.")),h("li",null,h("i",{className:"flaticon-support"}),h("h3",null,"24/7 Support"),h("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero consequatur totam maxime, minima."))))))},w=t("ECD5"),y=s.a.createElement,_=function(){return y("div",{className:"counter-area-two pt-100 pb-70 jarallax"},y("div",{className:"container"},y("div",{className:"row"},y("div",{className:"col-lg-3 col-md-6 col-sm-6"},y("div",{className:"single-counter"},y("h2",null,"950 ",y("span",{className:"target"},"+")),y("p",null,"Completed Project"))),y("div",{className:"col-lg-3 col-md-6 col-sm-6"},y("div",{className:"single-counter"},y("h2",null,"850 ",y("span",{className:"target"},"+")),y("p",null,"Winning Awards"))),y("div",{className:"col-lg-3 col-md-6 col-sm-6"},y("div",{className:"single-counter"},y("h2",null,"550 ",y("span",{className:"traget"},"+")),y("p",null,"Clients"))),y("div",{className:"col-lg-3 col-md-6 col-sm-6"},y("div",{className:"single-counter"},y("h2",null,"440 ",y("span",{className:"target"},"+")),y("p",null,"Countries"))))))},k=t("O6tT"),E=s.a.createElement,O=function(){return E("div",{className:"any-contact-area"},E("div",{className:"container"},E("div",{className:"row"},E("div",{className:"col-lg-8 col-md-6"},E("div",{className:"contact-text"},E("h3",null,"Have you any question? Ask Us anything, we\u2019d love to answer!"))),E("div",{className:"col-lg-4 col-md-6"},E("div",{className:"contact-call"},E("h3",null,E("i",{className:"flaticon-call"}),"+824-456-876-521"))))))},q=t("azCz"),L=t("mdYk"),C=s.a.createElement;a.default=function(){return C(s.a.Fragment,null,C(l.a,null),C(m,null),C(p,null),C(v,null),C(g,null),C("div",{className:"pb-100"},C(N.a,null)),C(x,null),C(w.a,null),C(_,null),C(k.a,null),C("div",{className:"pb-100"},C(O,null)),C(q.a,null),C(L.a,null))}},j5U0:function(e,a,t){"use strict";Object.defineProperty(a,"__esModule",{value:!0}),a.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",a=e.trim().split(" ");return a.filter((function(e,t){return!!e&&a.indexOf(e)===t})).join(" ")}}},[["7DGc",0,1,2,3,7]]]);