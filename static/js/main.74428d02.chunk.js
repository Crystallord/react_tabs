(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{13:function(e,t,i){},15:function(e,t,i){},16:function(e,t,i){"use strict";i.r(t);var a=i(3),s=i.n(a),n=i(4),c=i(5),o=i(8),u=i(7),r=i(1),l=i.n(r),b=i(6),m=i.n(b),d=(i(13),i(0)),p=function(e){var t=e.tabs,i=e.selectedTab,a=e.chooseTab;return Object(d.jsxs)(d.Fragment,{children:[Object(d.jsx)("ul",{className:"tabs-list",children:t.map((function(e){return Object(d.jsx)("li",{className:"tabs-item",children:Object(d.jsx)("button",{className:m()("tabs-button",{"button-active":e.id===i.id}),type:"button",onClick:function(){i.id!==e.id&&a(e)},children:e.title})},e.id)}))}),Object(d.jsx)("div",{className:"show-tabs",children:i.content})]})},h=(i(15),[{id:"tab-1",title:"Tab 1",content:"TEXT 1 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime excepturi quaerat atque asperiores hic? Aliquam adipisci autem labore nulla nemo distinctio vel beatae minima, magni quam suscipit nisi neque."},{id:"tab-2",title:"Tab 2",content:"TEXT 2 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime excepturi quaerat atque asperiores hic? Aliquam adipisci autem labore nulla nemo distinctio vel beatae minima, magni quam suscipit nisi neque."},{id:"tab-3",title:"Tab 3",content:"TEXT 3 - Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque maxime excepturi quaerat atque asperiores hic? Aliquam adipisci autem labore nulla nemo distinctio vel beatae minima, magni quam suscipit nisi neque."}]),j=function(e){Object(o.a)(i,e);var t=Object(u.a)(i);function i(){var e;Object(n.a)(this,i);for(var a=arguments.length,s=new Array(a),c=0;c<a;c++)s[c]=arguments[c];return(e=t.call.apply(t,[this].concat(s))).state={selectedTab:h[0]},e.chooseTab=function(t){e.setState({selectedTab:t})},e}return Object(c.a)(i,[{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"Selected tab is ".concat(this.state.selectedTab.title)}),Object(d.jsx)(p,{tabs:h,selectedTab:this.state.selectedTab,chooseTab:this.chooseTab})]})}}]),i}(l.a.Component);s.a.render(Object(d.jsx)(j,{}),document.getElementById("root"))}},[[16,1,2]]]);
//# sourceMappingURL=main.74428d02.chunk.js.map