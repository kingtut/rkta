webpackHotUpdate(0,{231:function(e,t,a){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var s=a(79),l=n(s),u=a(80),i=n(u),r=a(81),c=n(r),o=a(83),d=n(o),f=a(82),m=n(f),h=a(4),g=n(h),p=a(94),v=n(p),y=a(148),E=function(e){function t(){var e,a,n,s;(0,i["default"])(this,t);for(var u=arguments.length,r=Array(u),c=0;u>c;c++)r[c]=arguments[c];return a=n=(0,d["default"])(this,(e=(0,l["default"])(t)).call.apply(e,[this].concat(r))),n.state={message:"",cnt:0},s=a,(0,d["default"])(n,s)}return(0,m["default"])(t,e),(0,c["default"])(t,[{key:"setMessage",value:function(e){this.setState({message:e}),this.refs.message.value=e}},{key:"_change",value:function(e){this.setMessage(e.target.value)}},{key:"_del",value:function(e){this.props.racerModel.del("test."+e)}},{key:"_submit",value:function(e){e.preventDefault(),this.props.racerModel.add("test",{ts:Date.now(),message:this.state.message}),this.setMessage("")}},{key:"componentDidMount",value:function(){var e=this;this["int"]=setInterval(function(){e.setState({cnt:e.state.cnt+1})},1e3)}},{key:"componentWillUnmount",value:function(){clearInterval(this["int"])}},{key:"render",value:function(){var e=this;return g["default"].createElement("div",{className:"FrontPage"},g["default"].createElement(v["default"],{title:"Home"}),"Hi you ",this.state.cnt&&this.state.cnt,g["default"].createElement("hr",null),g["default"].createElement("form",{onSubmit:this._submit.bind(this)},g["default"].createElement("textarea",{ref:"message",onChange:this._change.bind(this)}),g["default"].createElement("button",{disabled:""===this.state.message},"Add")),g["default"].createElement("ul",{style:{listStyleType:"none",margin:0,padding:0}},this.props.testList.map(function(t,a){return g["default"].createElement("li",{key:a,style:{marginBottom:"1em"}},g["default"].createElement("div",null,g["default"].createElement("strong",null,t.message)," — ",g["default"].createElement("span",{onClick:e._del.bind(e,t.id),style:{cursor:"pointer"}},"×")),g["default"].createElement("small",null,t.ts))})))}}]),t}(h.Component);E.statics={racer:function(e){e("test",{$orderby:{ts:-1}}).pipeAs("testList")}},t["default"]=(0,y.Connect)(E)}});