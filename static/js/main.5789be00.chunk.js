(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{234:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(21),l=a.n(c),o=a(78),i=a(45),s=a.n(i),u=a(46),m=a(79),h=a(27),d=a(28),f=a(30),g=a(29),v=a(31),p=a(80),E=a.n(p).a.create({baseURL:"https://randomuser.me/api"});localStorage.getItem("token")&&(E.defaults.headers.common.authorization="token");var w=E,y=a(81),b=function(e){return r.a.createElement(y.a,Object.assign({height:90,width:400,speed:2,primaryColor:"#000",secondaryColor:"#ecebeb"},e),r.a.createElement("rect",{x:"65",y:"19",rx:"3",ry:"3",width:"70",height:"10"}),r.a.createElement("rect",{x:"155",y:"20",rx:"3",ry:"3",width:"130",height:"10"}),r.a.createElement("rect",{x:"74",y:"42",rx:"3",ry:"3",width:"90",height:"10"}),r.a.createElement("rect",{x:"190",y:"40",rx:"3",ry:"3",width:"60",height:"10"}),r.a.createElement("circle",{cx:"34.55",cy:"34.22",r:"24.55"}))},j=a(82),x=a.n(j),O=a(88),k=a(84),C=a.n(k),S=a(32),M=a.n(S),N=a(85),U=a.n(N),I=a(86),W=a.n(I),L=a(87),P=a.n(L),B=function(e){function t(){return Object(h.a)(this,t),Object(f.a)(this,Object(g.a)(t).apply(this,arguments))}return Object(v.a)(t,e),Object(d.a)(t,[{key:"render",value:function(){var e=this.props.classes;return r.a.createElement(x.a,{square:!0,className:e.root},r.a.createElement(C.a,{value:this.props.value,onChange:this.props.handleChange,fullWidth:!0,indicatorColor:"primary",textColor:"primary"},r.a.createElement(M.a,{icon:r.a.createElement(U.a,null)}),r.a.createElement(M.a,{icon:r.a.createElement(W.a,null)}),r.a.createElement(M.a,{icon:r.a.createElement(P.a,null)})),this.props.children)}}]),t}(r.a.Component),H=Object(O.withStyles)({root:{flexGrow:1,maxWidth:500}})(B),J=function(e){function t(){var e,a;Object(h.a)(this,t);for(var n=arguments.length,c=new Array(n),l=0;l<n;l++)c[l]=arguments[l];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(c)))).state={users:[],loading:!1,filter:"",loadingMore:!1,morePage:!0,file:"",value:0},a.onScroll=function(){window.onscroll=function(){if(window.innerHeight+document.documentElement.scrollTop===document.documentElement.offsetHeight){if(!a.state.morePage)return;a.fetchMoreUser()}}},a.fetchUser=function(){a.setState({loading:!0},function(){return w.get("/?nat=us&results=12").then(function(e){var t=e.data;a.setState({loading:!1,users:t.results})})})},a.fetchMoreUser=Object(m.a)(s.a.mark(function e(){var t,n;return s.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return a.setState({loadingMore:!0}),e.next=3,w.get("/?nat=us&results=10");case 3:t=e.sent,n=t.data,a.setState(function(e){return{users:Object(u.a)(e.users).concat(Object(u.a)(n.results)),loadingMore:!1,morePage:e.users.length<100}});case 6:case"end":return e.stop()}},e,this)})),a.handleChange=function(e,t){a.setState({value:t}),console.log(t)},a.renderItem=function(){return 0===a.state.value?a.renderList():1===a.state.value?r.a.createElement("div",null,"halaman 0"):2===a.state.value?r.a.createElement("div",null,"halaman 2"):void 0},a.renderList=function(){var e=a.state.users.filter(function(e){return-1!==[e.name.title,e.name.firstname,e.name.lastname,e.email].join(" ").indexOf(a.state.filter)});return r.a.createElement("div",null,r.a.createElement("input",{name:"filter",onChange:function(e){var t=e.target,n=t.name,r=t.value;return a.setState(Object(o.a)({},n,r))},className:"form-control mb-2"}),a.state.loading?r.a.createElement("div",null,[1,2,3,4,5,6,7,9,10].map(function(e){return r.a.createElement(b,{key:e,className:"m-1"})})):e.map(function(e){return r.a.createElement("div",{className:"d-flex m-2",key:e.id.value},r.a.createElement("div",null,r.a.createElement("img",{src:e.picture.thumbnail,alt:e.name.first,className:"rounded-circle mr-2"})),r.a.createElement("div",null,"".concat(e.name.title," ").concat(e.name.first," ").concat(e.name.last)))}),a.state.loadingMore&&r.a.createElement(b,null))},a}return Object(v.a)(t,e),Object(d.a)(t,[{key:"componentDidMount",value:function(){this.fetchUser(),this.onScroll()}},{key:"render",value:function(){return r.a.createElement("div",{className:"d-flex justify-content-center"},r.a.createElement("div",{className:"w-50"},r.a.createElement(H,{handleChange:this.handleChange,value:this.state.value},this.renderItem())))}}]),t}(n.Component);a(232),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(J,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},89:function(e,t,a){e.exports=a(234)}},[[89,2,1]]]);
//# sourceMappingURL=main.5789be00.chunk.js.map