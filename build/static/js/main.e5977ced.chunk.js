(this["webpackJsonphacker-news"]=this["webpackJsonphacker-news"]||[]).push([[0],{25:function(e,n,t){e.exports=t(50)},31:function(e,n,t){},50:function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(20),c=t.n(o),i=(t(30),t(31),t(4)),l=t.n(i),s=t(5),u=t(6),m=t(8),f=t.n(m),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=e.id,t=e.by,a=e.url,r=e.time,o=e.title;return{id:n,by:t,url:a,time:r,title:o}},b="https://hacker-news.firebaseio.com/v0/",p="".concat(b,"newstories.json"),h="".concat(b,"item/"),g=function(){var e=Object(s.a)(l.a.mark((function e(n){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get("".concat(h).concat(n,".json"));case 2:return t=e.sent,e.next=5,t.data;case 5:return a=e.sent,e.abrupt("return",a?d(a):{});case 7:case"end":return e.stop()}}),e)})));return function(n){return e.apply(this,arguments)}}(),v=function(){var e=Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,f.a.get(p).then((function(e){return e.data}));case 2:return n=e.sent,e.abrupt("return",n);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),E=t(2),x=t(3);function w(){var e=Object(E.a)(["\n  display: flex;\n  flex-flow: row nowrap;\n  \n  > time:first-of-type {\n    padding-right: 1rem;\n  }\n"]);return w=function(){return e},e}function y(){var e=Object(E.a)(["\n  font-style: italic;\n  color: ",";\n"]);return y=function(){return e},e}function j(){var e=Object(E.a)(["\n  font-weight: bold;\n  color: ",";\n"]);return j=function(){return e},e}function O(){var e=Object(E.a)(["\n  font-style: italic;\n\n  > span(:first-child) {\n    margin-right: 10px;\n  }\n\n  > span:not(:first-child):before {\n    content: '.';\n    margin: 0 7px;\n  }\n\n  .story__meta-bold {\n    font-weight: bold;\n  }\n"]);return O=function(){return e},e}function k(){var e=Object(E.a)(["\n  margin-bottom: 5px;\n  font-size: 18px;\n  line-height: 1.8;\n  margin: 0;\n  text-decoration: none;\n\n  a {\n    color: #2e2e2c;\n    background-color: #f8dc3d;\n    text-decoration: none;\n  }\n"]);return k=function(){return e},e}function N(){var e=Object(E.a)(["\n  position: absolute;\n  bottom: 0;\n  width: 100%;\n  background-color: #fafafa;\n  padding: 2rem 1.5rem;\n  border-top: 1px solid #d7d7d7;\n"]);return N=function(){return e},e}function S(){var e=Object(E.a)(["\n  border-bottom: 1px solid hsla(0, 0%, 47%, 0.7);\n  box-shadow: 0 2px 4px 0 hsla(0, 0%, 47%, 0.7);\n"]);return S=function(){return e},e}function M(){var e=Object(E.a)(["\n  padding-top: 10px;\n  margin-bottom: 20px;\n  border-top: 1px solid #ccc;\n\n  &:first-of-type {\n    border-top: 0\n  }\n\n  &:last-of-type {\n    margin-bottom: 0;\n    padding-bottom: 0;\n  }\n"]);return M=function(){return e},e}x.b.section(M());var H=x.b.header(S()),z=x.b.footer(N()),D=(x.b.h1(k()),x.b.div(O()),x.b.span(j(),(function(e){return e.color||"#f00"})),x.b.p(y(),(function(e){return e.color||"#777"}))),F=x.b.div(w()),I=Object(a.memo)((function(e){var n=e.storyID,t=Object(a.useState)({}),o=Object(u.a)(t,2),c=o[0],i=o[1],m=function(e){return e?Date(e):""},f=function(e){return e||""};return Object(a.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var t,a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,t=g(n),e.next=4,t;case 4:a=e.sent,Object.keys(a).length&&a.url&&i(a),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()})),r.a.createElement(a.Fragment,null,Object.keys(c).length?r.a.createElement("div",{className:"box","data-testid":"story"},r.a.createElement("article",{className:"media"},r.a.createElement("div",{className:"media-left"},r.a.createElement("figure",{className:"image is-64x64"},r.a.createElement("img",{src:"https://bulma.io/images/placeholders/128x128.png",alt:"Image"}))),r.a.createElement("div",{className:"media-content"},r.a.createElement("div",{className:"content"},r.a.createElement("p",{className:""},r.a.createElement("strong",null,r.a.createElement("a",{href:f(c.url),target:"_blank",rel:"noopener noreferrer"},f(c.title))),"\xa0\xa0",c.by?r.a.createElement("small",{"data-testid":"story-by"},"by: @",f(c.by)):null),r.a.createElement(F,null,r.a.createElement("time",{dateTime:m(c.time),"data-testid":"story-time"},m(c.time)),r.a.createElement(D,null,"Posted: ",function(e){var n=Math.floor((new Date-1e3*e)/1e3),t=Math.floor(n/3153600);return t>1?"".concat(t," years"):(t=Math.floor(n/3153600))>1?"".concat(t," months"):(t=Math.floor(n/2592e3))>1||(t=Math.floor(n/86400))>1?"".concat(t," days"):(t=Math.floor(n/3600))>1?"".concat(t," hours"):(t=Math.floor(n/60))>1?"".concat(t," minutes"):"".concat(Math.floor(n)," seconds")}(c.time)," ago")))))):null)})),L=function(){var e=Object(a.useState)(!1),n=Object(u.a)(e,2),t=n[0],r=n[1],o=Object(a.useState)(30),c=Object(u.a)(o,2),i=c[0],l=c[1],s=function(e,n,t,a){var r;return function(){var o=t&&!r;clearTimeout(r),r=setTimeout((function(){t||e.apply(void 0,a)}),n),o&&e.apply(void 0,a)}}((function(){if(window.innerHeight+document.documentElement.scrollTop!==document.documentElement.offsetHeight||t)return!1;r(!0)}),500);return Object(a.useEffect)((function(){t&&(l(i+30>=500?500:i+30),r(!1))}),[t]),Object(a.useEffect)((function(){return window.addEventListener("scroll",s),function(){return window.removeEventListener("scroll",s)}}),[]),{count:i}},T=function(){var e=L().count,n=Object(a.useState)([]),t=Object(u.a)(n,2),o=t[0],c=t[1];return Object(a.useEffect)((function(){Object(s.a)(l.a.mark((function e(){var n;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:(n=e.sent)&&c(n);case 4:case"end":return e.stop()}}),e)})))()}),[]),r.a.createElement("div",{className:"columns is-mobile is-centered mt-3"},r.a.createElement("div",{className:"column is-11-widescreen is-11-desktop is-11-tablet","data-test-id":"stories-container"},r.a.createElement("h1",{className:"title has-text-centered"},"Hacker News Stories"),o.slice(0,e).map((function(e,n){return r.a.createElement(I,{key:n.toString(),storyID:e})}))))};function B(){var e=Object(E.a)(["\n  max-width: 1140px;\n  padding: 20px 15px;\n  margin: auto;\n"]);return B=function(){return e},e}function _(){var e=Object(E.a)(["\n  *,\n  *::after,\n  *::before {\n    box-sizing: border-box;\n  }\n\n  body {\n    margin: 0;\n    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',\n      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',\n      sans-serif;\n    font-size: 16px;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    text-rendering: optimizeLegibility;\n    position: relative;\n    min-height: 100vh;\n  }\n"]);return _=function(){return e},e}var J=Object(x.a)(_()),U=(x.b.main(B()),function(){return r.a.createElement(H,null,r.a.createElement("nav",{className:"navbar",role:"navigation","aria-label":"main-navigation"},r.a.createElement("div",{className:"navbar-brand"},r.a.createElement("a",{href:"/"},r.a.createElement("img",{className:"header-logo",src:"#",alt:"Hacker News Logo"})),r.a.createElement("a",{role:"button",className:"navbar-burger burger","aria-label":"menu","aria-expanded":"false","data-target":"main-navbar"},r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"}),r.a.createElement("span",{"aria-hidden":"true"})))))}),W=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(z,null,r.a.createElement("div",{className:"content has-text-centered"},r.a.createElement("p",null,r.a.createElement("strong",null,"Hacker News")))))};var C=function(){return r.a.createElement(a.Fragment,null,r.a.createElement(J,null),r.a.createElement(U,null),r.a.createElement("main",{className:"container"},r.a.createElement(T,null)),r.a.createElement(W,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(C,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[25,1,2]]]);
//# sourceMappingURL=main.e5977ced.chunk.js.map