_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[23],{"0Yqi":function(e,a,l){"use strict";function s(e,a){if(null==e)return{};var l,s,n=function(e,a){if(null==e)return{};var l,s,n={},t=Object.keys(e);for(s=0;s<t.length;s++)l=t[s],a.indexOf(l)>=0||(n[l]=e[l]);return n}(e,a);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);for(s=0;s<t.length;s++)l=t[s],a.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(n[l]=e[l])}return n}var n=l("nOHt"),t=l("YFqc"),i=l.n(t),o=l("q1tI"),c=l.n(o),r=c.a.createElement;a.a=Object(n.withRouter)((function(e){var a=e.router,l=e.children,n=s(e,["router","children"]),t=o.Children.only(l),m=t.props.className||"";return a.pathname===n.href&&n.activeClassName&&(m="".concat(m," ").concat(n.activeClassName).trim()),delete n.activeClassName,r(i.a,n,c.a.cloneElement(t,{className:m}))}))},"1OyB":function(e,a,l){"use strict";function s(e,a){if(!(e instanceof a))throw new TypeError("Cannot call a class as a function")}l.d(a,"a",(function(){return s}))},"2Xoa":function(e,a,l){"use strict";var s=l("q1tI"),n=l.n(s).a.createElement;a.a=function(){return n("div",{className:"agent-now-area ptb-100"},n("div",{className:"container"},n("div",{className:"section-title"},n("h2",null,"Not Sure What You Need ",n("br",null)," Find Agent Now")),n("div",{className:"row"},n("div",{className:"col-lg-6"},n("div",{className:"call-now"},n("i",{className:"flaticon-call"}),n("p",null,"Call Us"),n("span",null,"+123-465-789"))),n("div",{className:"col-lg-6"},n("div",{className:"subscribe-wrap"},n("p",null,"Subscribe Now"),n("form",{className:"newsletter-form"},n("input",{type:"email",className:"form-control",placeholder:"Enter Your Email",name:"email",required:!0}),n("button",{className:"default-btn",type:"submit"},"Subscribe")))))),n("div",{className:"agent-shape"},n("img",{src:"/images/agent-shape.png",alt:"Image"})))}},JX7q:function(e,a,l){"use strict";function s(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}l.d(a,"a",(function(){return s}))},Ji7U:function(e,a,l){"use strict";function s(e,a){return(s=Object.setPrototypeOf||function(e,a){return e.__proto__=a,e})(e,a)}function n(e,a){if("function"!==typeof a&&null!==a)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(a&&a.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),a&&s(e,a)}l.d(a,"a",(function(){return n}))},ODXe:function(e,a,l){"use strict";function s(e,a){(null==a||a>e.length)&&(a=e.length);for(var l=0,s=new Array(a);l<a;l++)s[l]=e[l];return s}function n(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"!==typeof Symbol&&Symbol.iterator in Object(e)){var l=[],s=!0,n=!1,t=void 0;try{for(var i,o=e[Symbol.iterator]();!(s=(i=o.next()).done)&&(l.push(i.value),!a||l.length!==a);s=!0);}catch(c){n=!0,t=c}finally{try{s||null==o.return||o.return()}finally{if(n)throw t}}return l}}(e,a)||function(e,a){if(e){if("string"===typeof e)return s(e,a);var l=Object.prototype.toString.call(e).slice(8,-1);return"Object"===l&&e.constructor&&(l=e.constructor.name),"Map"===l||"Set"===l?Array.from(e):"Arguments"===l||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(l)?s(e,a):void 0}}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}l.d(a,"a",(function(){return n}))},RNiq:function(e,a,l){"use strict";l.r(a);var s=l("q1tI"),n=l.n(s),t=l("ODXe"),i=l("0Yqi"),o=l("j1fb"),c=n.a.createElement,r=function(){var e=n.a.useState(!0),a=Object(t.a)(e,2),l=a[0],s=a[1],r=n.a.useState(!1),m=Object(t.a)(r,2),u=m[0],d=m[1],v=n.a.useState(!1),p=Object(t.a)(v,2),f=p[0],N=p[1],b=function(){d(!u)},g=function(){N(!f)},h=function(){s(!l)};n.a.useEffect((function(){var e=document.getElementById("navbar");document.addEventListener("scroll",(function(){window.scrollY>170?e.classList.add("is-sticky"):e.classList.remove("is-sticky")})),window.scrollTo(0,0)}));var y=l?"collapse navbar-collapse":"collapse navbar-collapse show",x=l?"navbar-toggler navbar-toggler-right collapsed":"navbar-toggler navbar-toggler-right";return c(n.a.Fragment,null,c("header",{className:"header-area fixed-top"},c(o.a,null),c("div",{id:"navbar",className:"navbar-area"},c("div",{className:"main-nav"},c("nav",{className:"navbar navbar-expand-lg navbar-light"},c("div",{className:"container"},c(i.a,{href:"/"},c("a",{onClick:h,className:"navbar-brand"},c("img",{src:"/images/logo.png",alt:"logo"}))),c("button",{onClick:h,className:x,type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},c("span",{className:"icon-bar top-bar"}),c("span",{className:"icon-bar middle-bar"}),c("span",{className:"icon-bar bottom-bar"})),c("div",{className:y,id:"navbarSupportedContent"},c("ul",{className:"navbar-nav m-auto"},c("li",{className:"nav-item"},c(i.a,{href:"#",activeClassName:"active"},c("a",{onClick:function(e){return e.preventDefault()},className:"nav-link"},"Home ",c("i",{className:"bx bx-chevron-down"}))),c("ul",{className:"dropdown-menu"},c("li",{className:"nav-item"},c(i.a,{href:"/",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Home One"))),c("li",{className:"nav-item"},c(i.a,{href:"/index2",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Home Two"))),c("li",{className:"nav-item"},c(i.a,{href:"/index3",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Home Three"))))),c("li",{className:"nav-item"},c(i.a,{href:"/about",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"About"))),c("li",{className:"nav-item"},c(i.a,{href:"#"},c("a",{onClick:function(e){return e.preventDefault()},className:"nav-link"},"Pages ",c("i",{className:"bx bx-chevron-down"}))),c("ul",{className:"dropdown-menu"},c("li",{className:"nav-item"},c(i.a,{href:"/team",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Team"))),c("li",{className:"nav-item"},c(i.a,{href:"/pricing",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Pricing"))),c("li",{className:"nav-item"},c(i.a,{href:"/testimonials",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Testimonials"))),c("li",{className:"nav-item"},c(i.a,{href:"#"},c("a",{onClick:function(e){return e.preventDefault()},className:"nav-link"},"User ",c("i",{className:"bx bx-chevron-down"}))),c("ul",{className:"dropdown-menu"},c("li",{className:"nav-item"},c(i.a,{href:"/sign-up",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Sign Up"))),c("li",{className:"nav-item"},c(i.a,{href:"/sign-in",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Sign In"))),c("li",{className:"nav-item"},c(i.a,{href:"/recover-password",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Recover Password"))))),c("li",{className:"nav-item"},c(i.a,{href:"/faq",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"FAQ"))),c("li",{className:"nav-item"},c(i.a,{href:"/coming-soon",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Coming Soon"))),c("li",{className:"nav-item"},c(i.a,{href:"/terms-conditions",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Terms & Conditions"))),c("li",{className:"nav-item"},c(i.a,{href:"/privacy-policy",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Privacy Policy"))),c("li",{className:"nav-item"},c(i.a,{href:"/404",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"404 Error Page"))))),c("li",{className:"nav-item"},c(i.a,{href:"#"},c("a",{onClick:function(e){return e.preventDefault()},className:"nav-link"},"Insurance ",c("i",{className:"bx bx-chevron-down"}))),c("ul",{className:"dropdown-menu"},c("li",{className:"nav-item"},c(i.a,{href:"/travel-insurance",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Travel Insurance"))),c("li",{className:"nav-item"},c(i.a,{href:"/business-insurance",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Business Insurance"))),c("li",{className:"nav-item"},c(i.a,{href:"/health-insurance",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Health Insurance"))),c("li",{className:"nav-item"},c(i.a,{href:"/car-insurance",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Car Insurance"))),c("li",{className:"nav-item"},c(i.a,{href:"/insurance-details",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Insurance Details"))))),c("li",{className:"nav-item"},c(i.a,{href:"#",activeClassName:"active"},c("a",{onClick:function(e){return e.preventDefault()},className:"nav-link"},"Portfolio ",c("i",{className:"bx bx-chevron-down"}))),c("ul",{className:"dropdown-menu"},c("li",{className:"nav-item"},c(i.a,{href:"/portfolio-columns-two",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Portfolio Columns Two"))),c("li",{className:"nav-item"},c(i.a,{href:"/portfolio-columns-three",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Portfolio Columns Three"))),c("li",{className:"nav-item"},c(i.a,{href:"/portfolio-columns-four",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Portfolio Columns Four"))),c("li",{className:"nav-item"},c(i.a,{href:"/portfolio-details",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Portfolio Details"))))),c("li",{className:"nav-item"},c(i.a,{href:"#"},c("a",{onClick:function(e){return e.preventDefault()},className:"nav-link"},"Blog ",c("i",{className:"bx bx-chevron-down"}))),c("ul",{className:"dropdown-menu"},c("li",{className:"nav-item"},c(i.a,{href:"/blog-grid",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Blog Grid"))),c("li",{className:"nav-item"},c(i.a,{href:"/blog-left-sidebar",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Blog Left Sidebar"))),c("li",{className:"nav-item"},c(i.a,{href:"/blog-right-sidebar",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Blog Right Sidebar"))),c("li",{className:"nav-item"},c(i.a,{href:"/blog-details",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Blog Details"))))),c("li",{className:"nav-item"},c(i.a,{href:"/contact",activeClassName:"active"},c("a",{onClick:h,className:"nav-link"},"Contact")))),c("div",{className:"others-option"},c("div",{className:"option-item"},c("i",{className:"search-btn bx bx-search",onClick:function(e){e.preventDefault(),g()}})),c("div",{className:"subscribe"},c(i.a,{href:"#"},c("a",{className:"default-btn"},"Get A Quote"))),c("div",{className:"sidebar-menu"},c(i.a,{href:"#"},c("a",{onClick:function(e){e.preventDefault(),b()}},c("i",{className:"bx bx-grid-alt"}))))))))))),c("div",{className:"search-overlay ".concat(f?"search-overlay-active":null)},c("div",{className:"d-table"},c("div",{className:"d-table-cell"},c("div",{className:"search-overlay-layer"}),c("div",{className:"search-overlay-layer"}),c("div",{className:"search-overlay-layer"}),c("div",{className:"search-overlay-close",onClick:function(e){e.preventDefault(),g()}},c("span",{className:"search-overlay-close-line"}),c("span",{className:"search-overlay-close-line"})),c("div",{className:"search-overlay-form"},c("form",null,c("input",{type:"text",className:"input-search",placeholder:"Search here..."}),c("button",{type:"submit"},c("i",{className:"bx bx-search"}))))))),c("div",{className:"sidebar-modal ".concat(u?"active":null)},c("div",{className:"modal"},c("div",{className:"modal-dialog"},c("div",{className:"modal-content"},c("div",{className:"modal-header"},c("button",{type:"button",className:"close",onClick:function(e){e.preventDefault(),b()}},c("span",{"aria-hidden":"true"},c("i",{className:"bx bx-x"}))),c("h2",{className:"modal-title"},c(i.a,{href:"/"},c("a",null,c("img",{src:"/images/logo2.png",alt:"Logo"}))))),c("div",{className:"modal-body"},c("div",{className:"sidebar-modal-widget"},c("h3",{className:"title"},"About Us"),c("p",null,"Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, asperiores doloribus eum laboriosam praesentium delectus unde magni aut perspiciatis cumque deserunt dolore voluptate, autem pariatur.")),c("div",{className:"sidebar-modal-widget"},c("h3",{className:"title"},"Additional Links"),c("ul",null,c("li",null,c(i.a,{href:"/sign-up"},c("a",null,"Sign Up"))),c("li",null,c(i.a,{href:"/log-in"},c("a",null,"Log In"))),c("li",null,c(i.a,{href:"/faq"},c("a",null,"FAQ"))))),c("div",{className:"sidebar-modal-widget"},c("h3",{className:"title"},"Contact Info"),c("ul",{className:"contact-info"},c("li",null,c("i",{className:"bx bx-location-plus"}),"Address",c("span",null,"123, Western Road, Melbourne Australia")),c("li",null,c("i",{className:"bx bx-envelope"}),"Email",c("a",{href:"mailto:hello@flexa.com"},"hello@flexa.com")),c("li",null,c("i",{className:"bx bxs-phone-call"}),"Phone",c("a",{href:"tel:+822456974"},"+822456974")))),c("div",{className:"sidebar-modal-widget"},c("h3",{className:"title"},"Connect With Us"),c("ul",{className:"social-list"},c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-twitter"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-facebook"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-instagram"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-linkedin"}))),c("li",null,c("a",{href:"#",target:"_blank"},c("i",{className:"bx bxl-youtube"})))))))))))},m=l("YFqc"),u=l.n(m),d=l("2RFb"),v=l.n(d),p=n.a.createElement,f=function(){return p("div",{className:"main-banner-area"},p("div",{className:"container-fluid"},p("div",{className:"row align-items-center"},p("div",{className:"col-lg-6"},p("div",{className:"banner-text"},p(v.a,{animation:"fadeInUp",delay:"0.1s"},p("span",null,"Investment Retirement Insurance")),p(v.a,{animation:"fadeInUp",delay:"0.2s"},p("h1",null,"The Right Protection to Keep You Moving Forward")),p(v.a,{animation:"fadeInUp",delay:"0.4s"},p("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum.")),p(v.a,{animation:"fadeInUp",delay:"0.6s"},p("div",{className:"banner-btn"},p(u.a,{href:"#"},p("a",{className:"default-btn"},"Get Started")),p(u.a,{href:"#"},p("a",{className:"default-btn active"},"Find An Agent")))))),p("div",{className:"col-lg-6 pr-0"},p(v.a,{animation:"fadeInUp",delay:"0.2s"},p("div",{className:"banner-img"},p("img",{src:"/images/banner/banner-img.png",alt:"Image"})))))),p("div",{className:"shape"},p("img",{src:"/images/banner/banner-shape.png",alt:"Image"})),p("div",{className:"banner-shape-right"},p("img",{src:"/images/banner/banner-shape-right.png",alt:"Image"})))},N=n.a.createElement,b=function(){return N("div",{className:"choose-us-area mt-50 pb-70"},N("div",{className:"container"},N("div",{className:"section-title"},N("span",null,"Why Choose Us"),N("h2",null,"We are Dedicated to Support You"),N("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),N("div",{className:"row"},N("div",{className:"col-lg-4 col-sm-6"},N(v.a,{animation:"fadeInUp",delay:"0.1s"},N("div",{className:"single-choose"},N("span",{className:"flaticon-kindness"}),N("h3",null,"Service With Love"),N("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"),N(u.a,{href:"/insurance-details"},N("a",null,N("i",{className:"flaticon-right"}))),N("span",{className:"choose-icon flaticon-kindness"})))),N("div",{className:"col-lg-4 col-sm-6"},N(v.a,{animation:"fadeInUp",delay:"0.2s"},N("div",{className:"single-choose"},N("span",{className:"flaticon-target"}),N("h3",null,"Clients Focused"),N("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"),N(u.a,{href:"/insurance-details"},N("a",null,N("i",{className:"flaticon-right"}))),N("span",{className:"choose-icon flaticon-target"})))),N("div",{className:"col-lg-4 col-sm-6 offset-sm-3 offset-lg-0"},N(v.a,{animation:"fadeInUp",delay:"0.3s"},N("div",{className:"single-choose"},N("span",{className:"flaticon-support"}),N("h3",null,"Awesome Support"),N("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore"),N(u.a,{href:"/insurance-details"},N("a",null,N("i",{className:"flaticon-right"}))),N("span",{className:"choose-icon flaticon-support"})))))))},g=l("1BCu"),h=l("6vUo"),y=n.a.createElement,x=function(){return y("div",{className:"services-area pt-100 pb-70"},y("div",{className:"container"},y("div",{className:"section-title"},y("span",null,"Our Services"),y("h2",null,"Types of Flexa Insurance"),y("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),y("div",{className:"row"},y("div",{className:"col-lg-4 col-sm-6"},y("div",{className:"single-services"},y("i",{className:"flaticon-car-insurance"}),y("h3",null,"Car Insurance"),y("p",null,"Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."),y(u.a,{href:"/insurance-details"},y("a",{className:"read-more"},"Read More")))),y("div",{className:"col-lg-4 col-sm-6"},y("div",{className:"single-services"},y("i",{className:"flaticon-health-care"}),y("h3",null,"Health Insurance"),y("p",null,"Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."),y(u.a,{href:"/insurance-details"},y("a",{className:"read-more"},"Read More")))),y("div",{className:"col-lg-4 col-sm-6"},y("div",{className:"single-services"},y("i",{className:"flaticon-life-insurance"}),y("h3",null,"Life Insurance"),y("p",null,"Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."),y(u.a,{href:"/insurance-details"},y("a",{className:"read-more"},"Read More")))),y("div",{className:"col-lg-4 col-sm-6"},y("div",{className:"single-services"},y("i",{className:"flaticon-salesman"}),y("h3",null,"Travel Insurance"),y("p",null,"Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."),y(u.a,{href:"/insurance-details"},y("a",{className:"read-more"},"Read More")))),y("div",{className:"col-lg-4 col-sm-6"},y("div",{className:"single-services"},y("i",{className:"flaticon-travel-insurance"}),y("h3",null,"Business Insurance"),y("p",null,"Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."),y(u.a,{href:"/insurance-details"},y("a",{className:"read-more"},"Read More")))),y("div",{className:"col-lg-4 col-sm-6"},y("div",{className:"single-services"},y("i",{className:"flaticon-social-care-1"}),y("h3",null,"Home Insurance"),y("p",null,"Lorem ipsum dolor do sit amet ut, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut."),y(u.a,{href:"/insurance-details"},y("a",{className:"read-more"},"Read More")))))),y("div",{className:"services-shape"},y("img",{src:"/images/services-shape-1.png",alt:"Image"})))},C=l("Z1c+"),k=l("wh+f"),w=l("ttnC"),I=l("2Xoa"),S=l("wx14"),E=l("a6RD"),O=l.n(E),L=n.a.createElement,q=O()((function(){return l.e(6).then(l.t.bind(null,"Rst5",7))}),{loadableGenerated:{webpack:function(){return["Rst5"]},modules:["react-owl-carousel3"]}}),j={loop:!0,margin:30,nav:!0,mouseDrag:!1,touchDrag:!1,dots:!1,autoplay:!0,smartSpeed:1500,autoplayHoverPause:!0,center:!0,navText:["<i class='bx bx-chevron-left'></i>","<i class='bx bx-chevron-right'></i>"],responsive:{0:{items:1},576:{items:2},768:{items:2},992:{items:3}}},T=function(){var e=n.a.useState(!1),a=Object(t.a)(e,2),l=a[0],s=a[1];return n.a.useEffect((function(){s(!0)}),[]),L("div",{className:"testimonial-area ptb-100"},L("div",{className:"container"},L("div",{className:"section-title"},L("span",null,"Testimonials"),L("h2",null,"What Our Clients Say"),L("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),l?L(q,Object(S.a)({className:"testimonial-wrap owl-carousel owl-theme"},j),L("div",{className:"single-client"},L("img",{src:"/images/testimonials/client1.jpg",alt:"img"}),L("h3",null,"Denial Peer"),L("span",null,"Marketer"),L("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."),L("ul",null,L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"}))),L("div",{className:"quotes"},L("i",{className:"flaticon-left-quotes-sign"}))),L("div",{className:"single-client"},L("img",{src:"/images/testimonials/client2.jpg",alt:"img"}),L("h3",null,"Anna Dew"),L("span",null,"Developer"),L("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."),L("ul",null,L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"}))),L("div",{className:"quotes"},L("i",{className:"flaticon-left-quotes-sign"}))),L("div",{className:"single-client"},L("img",{src:"/images/testimonials/client3.jpg",alt:"img"}),L("h3",null,"Jecty Smith"),L("span",null,"UI UX Designer"),L("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."),L("ul",null,L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"}))),L("div",{className:"quotes"},L("i",{className:"flaticon-left-quotes-sign"}))),L("div",{className:"single-client"},L("img",{src:"/images/testimonials/client4.jpg",alt:"img"}),L("h3",null,"Jonson"),L("span",null,"React Developer"),L("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore."),L("ul",null,L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"})),L("li",null,L("i",{className:"bx bxs-star"}))),L("div",{className:"quotes"},L("i",{className:"flaticon-left-quotes-sign"})))):""))},P=l("snbm"),R=l("azCz"),_=l("mdYk"),A=n.a.createElement;a.default=function(){return A(n.a.Fragment,null,A(r,null),A(f,null),A(b,null),A(g.a,null),A(h.a,null),A(x,null),A(C.a,null),A(k.a,null),A("div",{className:"pt-100"},A(w.a,null)),A(I.a,null),A(T,null),A("div",{className:"pb-100"},A(P.a,null)),A(R.a,null),A(_.a,null))}},YFqc:function(e,a,l){e.exports=l("cTJO")},"Z1c+":function(e,a,l){"use strict";l.d(a,"a",(function(){return g}));var s=l("1OyB"),n=l("vuIU"),t=l("JX7q"),i=l("Ji7U"),o=l("md7G"),c=l("foSv"),r=l("rePB"),m=l("q1tI"),u=l.n(m),d=l("2RFb"),v=l.n(d),p=l("YFqc"),f=l.n(p),N=u.a.createElement;function b(e){var a=function(){if("undefined"===typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"===typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],(function(){}))),!0}catch(e){return!1}}();return function(){var l,s=Object(c.a)(e);if(a){var n=Object(c.a)(this).constructor;l=Reflect.construct(s,arguments,n)}else l=s.apply(this,arguments);return Object(o.a)(this,l)}}var g=function(e){Object(i.a)(l,e);var a=b(l);function l(){var e;Object(s.a)(this,l);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return e=a.call.apply(a,[this].concat(i)),Object(r.a)(Object(t.a)(e),"openTabSection",(function(e,a){var l,s,n;for(s=document.getElementsByClassName("tabs_item"),l=0;l<s.length;l++)s[l].classList.remove("fadeInUp"),s[l].style.display="none";for(n=document.getElementsByTagName("li"),l=0;l<n.length;l++)n[l].className=n[l].className.replace("current","");document.getElementById(a).style.display="block",document.getElementById(a).className+=" fadeInUp animated",e.currentTarget.className+="current"})),e}return Object(n.a)(l,[{key:"render",value:function(){var e=this;return N("div",{className:"get-quat-area ptb-100"},N("div",{className:"container"},N("div",{className:"section-title"},N("span",null,"Get A Quote"),N("h2",null,"Get A Free Quote"),N("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.")),N("div",{className:"row align-items-center"},N("div",{className:"col-lg-6"},N(v.a,{animation:"fadeInLeft",delay:"0.1s"},N("div",{className:"get-quat-img"},N("img",{src:"/images/get-quat-img.png",alt:"Image"})))),N("div",{className:"col-lg-6"},N("div",{className:"quat-form"},N("div",{className:"tab"},N("ul",{className:"tabs"},N("li",{className:"current",onClick:function(a){return e.openTabSection(a,"tab1")}},N("div",{className:"dot"})," Car"),N("li",{onClick:function(a){return e.openTabSection(a,"tab2")}},N("div",{className:"dot"})," Home"),N("li",{onClick:function(a){return e.openTabSection(a,"tab3")}},N("div",{className:"dot"})," Life"),N("li",{onClick:function(a){return e.openTabSection(a,"tab4")}},N("div",{className:"dot"})," Health")),N("div",{className:"tab_content"},N("div",{id:"tab1",className:"tabs_item"},N("p",null,"Start with your zip code to compare car insurance"),N("div",{className:"form"},N("div",{className:"form-group"},N("input",{type:"text",className:"form-control",id:"Name",placeholder:"Your Name"})),N("div",{className:"form-group"},N("input",{type:"email",className:"form-control",id:"Email",placeholder:"Your Email"})),N("div",{className:"form-group"},N("input",{type:"text",className:"form-control",id:"Number",placeholder:"Your Number"})),N("div",{className:"form-group"},N("div",{className:"select-box"},N("i",{className:"flaticon-avatar"}),N("select",{className:"form-control"},N("option",{value:"5"},"Property Type"),N("option",{value:"1"},"Home Property"),N("option",{value:"2"},"Health Insurance"),N("option",{value:"0"},"Car Insurance"),N("option",{value:"3"},"Life Insurance"),N("option",{value:"4"},"Home Insurance")))),N("button",{type:"submit",className:"default-btn"},"Start Saving Today"),N("ul",{className:"ratings"},N("li",null,"45 Ratings"),N("li",{className:"right"},"Already Member?",N(f.a,{href:"/sign-in"},N("a",null,"SIGN IN")))))),N("div",{id:"tab2",className:"tabs_item"},N("p",null,"Start with your zip code to compare home insurance"),N("div",{className:"form"},N("div",{className:"form-group"},N("input",{type:"text",className:"form-control",id:"Name2",placeholder:"Your Name"})),N("div",{className:"form-group"},N("input",{type:"email",className:"form-control",id:"Email2",placeholder:"Your Email"})),N("div",{className:"form-group"},N("input",{type:"text",className:"form-control",id:"Number2",placeholder:"Your Number"})),N("div",{className:"form-group"},N("div",{className:"select-box"},N("i",{className:"flaticon-avatar"}),N("select",{className:"form-control"},N("option",{value:"5"},"Home Property"),N("option",{value:"1"},"Property Type "),N("option",{value:"2"},"Health Insurance"),N("option",{value:"0"},"Car Insurance"),N("option",{value:"3"},"Life Insurance"),N("option",{value:"4"},"Home Insurance")))),N("button",{type:"submit",className:"default-btn"},"Start Saving Today"),N("ul",{className:"ratings"},N("li",null,"45 Ratings"),N("li",{className:"right"},"Already Member?",N(f.a,{href:"/sign-in"},N("a",null,"SIGN IN")))))),N("div",{id:"tab3",className:"tabs_item"},N("p",null,"Start with your zip code to compare life insurance"),N("div",{className:"form"},N("div",{className:"form-group"},N("input",{type:"text",className:"form-control",id:"Name3",placeholder:"Your Name"})),N("div",{className:"form-group"},N("input",{type:"email",className:"form-control",id:"Email3",placeholder:"Your Email"})),N("div",{className:"form-group"},N("input",{type:"text",className:"form-control",id:"Number3",placeholder:"Your Number"})),N("div",{className:"form-group"},N("div",{className:"select-box"},N("i",{className:"flaticon-avatar"}),N("select",{className:"form-control"},N("option",{value:"5"},"Life Insurance"),N("option",{value:"1"},"Home Property"),N("option",{value:"2"},"Health Insurance"),N("option",{value:"0"},"Car Insurance"),N("option",{value:"3"},"Property Type"),N("option",{value:"4"},"Home Insurance")))),N("button",{type:"submit",className:"default-btn"},"Start Saving Today"),N("ul",{className:"ratings"},N("li",null,"45 Ratings"),N("li",{className:"right"},"Already Member?",N(f.a,{href:"/sign-in"},N("a",null,"SIGN IN")))))),N("div",{id:"tab4",className:"tabs_item"},N("p",null,"Start with your zip code to compare health insurance"),N("div",{className:"form"},N("div",{className:"form-group"},N("input",{type:"text",className:"form-control",id:"Name4",placeholder:"Your Name"})),N("div",{className:"form-group"},N("input",{type:"email",className:"form-control",id:"Email4",placeholder:"Your Email"})),N("div",{className:"form-group"},N("input",{type:"text",className:"form-control",id:"Number4",placeholder:"Your Number"})),N("div",{className:"form-group"},N("div",{className:"select-box"},N("i",{className:"flaticon-avatar"}),N("select",{className:"form-control"},N("option",{value:"5"},"Property Health"),N("option",{value:"1"},"Home Property"),N("option",{value:"2"},"Health Insurance"),N("option",{value:"0"},"Car Insurance"),N("option",{value:"3"},"Life Insurance"),N("option",{value:"4"},"Home Insurance")))),N("button",{type:"submit",className:"default-btn"},"Start Saving Today"),N("ul",{className:"ratings"},N("li",null,"45 Ratings"),N("li",{className:"right"},"Already Member?",N(f.a,{href:"/sign-in"},N("a",null,"SIGN IN")))))))))))))}}]),l}(m.Component)},cTJO:function(e,a,l){"use strict";var s=l("J4zp"),n=l("284h");a.__esModule=!0,a.default=void 0;var t,i=n(l("q1tI")),o=l("elyg"),c=(l("g/15"),l("nOHt")),r=new Map,m=window.IntersectionObserver,u={};var d=function(e,a){var l=t||(m?t=new m((function(e){e.forEach((function(e){if(r.has(e.target)){var a=r.get(e.target);(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(e.target),r.delete(e.target),a())}}))}),{rootMargin:"200px"}):void 0);return l?(l.observe(e),r.set(e,a),function(){try{l.unobserve(e)}catch(a){console.error(a)}r.delete(e)}):function(){}};function v(e,a,l,s){(0,o.isLocalURL)(a)&&(e.prefetch(a,l,s).catch((function(e){0})),u[a+"%"+l]=!0)}var p=function(e){var a=!1!==e.prefetch,l=i.default.useState(),n=s(l,2),t=n[0],r=n[1],p=(0,c.useRouter)(),f=p&&p.pathname||"/",N=i.default.useMemo((function(){var a=(0,o.resolveHref)(f,e.href);return{href:a,as:e.as?(0,o.resolveHref)(f,e.as):a}}),[f,e.href,e.as]),b=N.href,g=N.as;i.default.useEffect((function(){if(a&&m&&t&&t.tagName&&(0,o.isLocalURL)(b)&&!u[b+"%"+g])return d(t,(function(){v(p,b,g)}))}),[a,t,b,g,p]);var h=e.children,y=e.replace,x=e.shallow,C=e.scroll;"string"===typeof h&&(h=i.default.createElement("a",null,h));var k=i.Children.only(h),w={ref:function(e){e&&r(e),k&&"object"===typeof k&&k.ref&&("function"===typeof k.ref?k.ref(e):"object"===typeof k.ref&&(k.ref.current=e))},onClick:function(e){k.props&&"function"===typeof k.props.onClick&&k.props.onClick(e),e.defaultPrevented||function(e,a,l,s,n,t,i){("A"!==e.currentTarget.nodeName||!function(e){var a=e.currentTarget.target;return a&&"_self"!==a||e.metaKey||e.ctrlKey||e.shiftKey||e.altKey||e.nativeEvent&&2===e.nativeEvent.which}(e)&&(0,o.isLocalURL)(l))&&(e.preventDefault(),null==i&&(i=s.indexOf("#")<0),a[n?"replace":"push"](l,s,{shallow:t}).then((function(e){e&&i&&(window.scrollTo(0,0),document.body.focus())})))}(e,p,b,g,y,x,C)}};return a&&(w.onMouseEnter=function(e){(0,o.isLocalURL)(b)&&(k.props&&"function"===typeof k.props.onMouseEnter&&k.props.onMouseEnter(e),v(p,b,g,{priority:!0}))}),!e.passHref&&("a"!==k.type||"href"in k.props)||(w.href=(0,o.addBasePath)(g)),i.default.cloneElement(k,w)};a.default=p},foSv:function(e,a,l){"use strict";function s(e){return(s=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}l.d(a,"a",(function(){return s}))},j1fb:function(e,a,l){"use strict";var s=l("q1tI"),n=l.n(s).a.createElement;a.a=function(){return n("div",{className:"top-header-area"},n("div",{className:"container"},n("div",{className:"row align-items-center"},n("div",{className:"col-lg-6 col-md-4 col-sm-6"},n("div",{className:"header-content-left"},n("p",null,"Welcome To flexa Insurance!"))),n("div",{className:"col-lg-6 col-md-8 col-sm-6"},n("ul",{className:"header-content-right"},n("li",null,n("a",{href:"tel:+822456974"},n("i",{className:"bx bx-phone-call"}),"Call Us For Inquiry: +822456974")),n("li",null,n("a",{href:"mailto:hello@flexa.com"},n("i",{className:"bx bx-envelope"}),"Email: hello@flexa.com")))))))}},md7G:function(e,a,l){"use strict";function s(e){return(s="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}l.d(a,"a",(function(){return t}));var n=l("JX7q");function t(e,a){return!a||"object"!==s(a)&&"function"!==typeof a?Object(n.a)(e):a}},mdYk:function(e,a,l){"use strict";var s=l("q1tI"),n=l.n(s),t=l("YFqc"),i=l.n(t),o=n.a.createElement;a.a=function(){var e=(new Date).getFullYear();return o(n.a.Fragment,null,o("footer",{className:"footer-top-area pt-100 pb-70"},o("div",{className:"container"},o("div",{className:"row"},o("div",{className:"col-lg-3 col-md-6"},o("div",{className:"single-widget"},o(i.a,{href:"/"},o("a",null,o("img",{src:"/images/logo2.png",alt:"Image"}))),o("p",null,"Lorem ipsum dolor sitamet,cons adipiscing elit, sed do eiusmod te incididunt ut labore et dolore Lorem ipsum dolor sitamet,cons adipiscing dolore Lorem ipsum dolor."),o("div",{className:"social-area"},o("ul",null,o("li",null,o("a",{href:"#",target:"_blank"},o("i",{className:"bx bxl-facebook"}))),o("li",null,o("a",{href:"#",target:"_blank"},o("i",{className:"bx bxl-twitter"}))),o("li",null,o("a",{href:"#",target:"_blank"},o("i",{className:"bx bxl-linkedin"}))),o("li",null,o("a",{href:"#",target:"_blank"},o("i",{className:"bx bxl-youtube"}))),o("li",null,o("a",{href:"#",target:"_blank"},o("i",{className:"bx bxl-instagram"}))))))),o("div",{className:"col-lg-3 col-md-6"},o("div",{className:"single-widget contact"},o("h3",null,"Contact Us"),o("ul",null,o("li",null,o("i",{className:"flaticon-call"}),o("span",null,"Hotline:"),o("a",{href:"tel:+822456974"},"Phone: +822456974")),o("li",null,o("i",{className:"flaticon-email"}),o("span",null,"Email:"),o("a",{href:"mailto:hello@flexa.com"},"hello@flexa.com")),o("li",null,o("i",{className:"flaticon-maps-and-flags"}),o("span",null,"Address:"),"123, Western Road, Melbourne Australia")))),o("div",{className:"col-lg-3 col-md-6"},o("div",{className:"single-widget"},o("h3",null,"Service Links"),o("ul",null,o("li",null,o(i.a,{href:"#"},o("a",null,"Insurance"))),o("li",null,o(i.a,{href:"#"},o("a",null,"Car Insurance"))),o("li",null,o(i.a,{href:"#"},o("a",null,"Home Insurance"))),o("li",null,o(i.a,{href:"#"},o("a",null,"Investment"))),o("li",null,o(i.a,{href:"#"},o("a",null,"Health Insurance"))),o("li",null,o(i.a,{href:"#"},o("a",null,"Business")))))),o("div",{className:"col-lg-3 col-md-6"},o("div",{className:"single-widget"},o("h3",null,"Newsletter"),o("p",{className:"newsletter-p"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do."),o("div",{className:"subscribe-wrap"},o("form",{className:"newsletter-form"},o("input",{type:"email",className:"form-control",placeholder:"Enter Your Email",name:"email",required:!0}),o("button",{className:"default-btn",type:"submit"},"Subscribe")))))))),o("div",{className:"footer-bottom-area footer-bottom-electronics-area"},o("div",{className:"container"},o("div",{className:"copy-right"},o("p",null,"Copyright @",e," Flexa Designed By ",o("a",{href:"https://envytheme.com/",target:"blank"},"EnvyTheme"))))))}},rePB:function(e,a,l){"use strict";function s(e,a,l){return a in e?Object.defineProperty(e,a,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[a]=l,e}l.d(a,"a",(function(){return s}))},ttnC:function(e,a,l){"use strict";var s=l("ODXe"),n=l("q1tI"),t=l.n(n),i=l("YFqc"),o=l.n(i),c=l("60Bi"),r=l.n(c),m=t.a.createElement;a.a=function(){var e=t.a.useState(!0),a=Object(s.a)(e,2),l=a[0],n=a[1];return m(t.a.Fragment,null,m("div",{className:"achievement-area"},m("div",{className:"container"},m("div",{className:"row align-items-center"},m("div",{className:"col-lg-6"},m("div",{className:"video-img"},m("img",{src:"/images/video-img.jpg",alt:"Image"}),m("div",{className:"video"},m(o.a,{href:"#play-video"},m("a",{onClick:function(e){e.preventDefault(),n(!l)},className:"video-btn popup-youtube"},m("i",{className:"flaticon-play-button"})))))),m("div",{className:"col-lg-6"},m("div",{className:"achievement-content"},m("span",null,"Achievement"),m("h2",null,"We have Achieved Many National Award For Our Success"),m("p",null,"Lorem ipsum dolor commod sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ipsum suspendisse ultrices gravida. Risus commod o viverra maecenas."),m("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."),m(o.a,{href:"#"},m("a",{className:"default-btn"},"Be Connected"))))))),m(r.a,{channel:"youtube",isOpen:!l,videoId:"bk7McNUjWgw",onClose:function(){return n(!l)}}))}},vlRD:function(e,a,l){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return l("RNiq")}])},vuIU:function(e,a,l){"use strict";function s(e,a){for(var l=0;l<a.length;l++){var s=a[l];s.enumerable=s.enumerable||!1,s.configurable=!0,"value"in s&&(s.writable=!0),Object.defineProperty(e,s.key,s)}}function n(e,a,l){return a&&s(e.prototype,a),l&&s(e,l),e}l.d(a,"a",(function(){return n}))},"wh+f":function(e,a,l){"use strict";var s=l("q1tI"),n=l.n(s).a.createElement;a.a=function(){return n("div",{className:"counter-area pt-100 pb-70"},n("div",{className:"container"},n("div",{className:"row"},n("div",{className:"col-lg-3 col-md-6 col-sm-6"},n("div",{className:"single-counter"},n("h2",null,"950 ",n("span",{className:"target"},"+")),n("p",null,"Completed Project"))),n("div",{className:"col-lg-3 col-md-6 col-sm-6"},n("div",{className:"single-counter"},n("h2",null,"850 ",n("span",{className:"target"},"+")),n("p",null,"Winning Awards"))),n("div",{className:"col-lg-3 col-md-6 col-sm-6"},n("div",{className:"single-counter"},n("h2",null,"550 ",n("span",{className:"traget"},"+")),n("p",null,"Clients"))),n("div",{className:"col-lg-3 col-md-6 col-sm-6"},n("div",{className:"single-counter"},n("h2",null,"440 ",n("span",{className:"target"},"+")),n("p",null,"Countries"))))))}}},[["vlRD",0,1,2,4,5,7]]]);