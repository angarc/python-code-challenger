(this.webpackJsonpobcode=this.webpackJsonpobcode||[]).push([[0],{110:function(e,t,a){e.exports=a.p+"static/media/bear_1.cb04446b.jpeg"},111:function(e,t,a){e.exports=a.p+"static/media/bear_2.f29b4fd1.JPG"},112:function(e,t,a){e.exports=a.p+"static/media/obi_1.27478925.png"},113:function(e,t,a){e.exports=a.p+"static/media/obi_2.3e90fb4c.jpeg"},115:function(e,t,a){e.exports=a(264)},120:function(e,t,a){},122:function(e,t,a){},123:function(e,t,a){},230:function(e,t,a){},232:function(e,t,a){},258:function(e,t,a){},259:function(e,t,a){},263:function(e,t,a){},264:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(22),l=a.n(r),c=(a(120),a(7)),i=a(8),s=a(9),u=a(10),m=(a(121),a(122),a(13)),d=a(6),p=(a(123),a(266)),h=a(267),b=a(27),E=a.n(b),f=a(140),v=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"closeButtonClicked",value:function(){this.props.closeProblem()}},{key:"displayCloseButton",value:function(){var e=this,t=null;return"expanded"==this.props.problemClass&&(t=o.a.createElement(p.a,{variant:"light",className:"hideButton mt-3",onClick:function(){return e.closeButtonClicked()}},"Hide Problem")),t}},{key:"render",value:function(){return o.a.createElement(h.a,{lg:6,className:this.props.problemClass+" problemContainer"},o.a.createElement("div",{className:"problem"},o.a.createElement("h1",{className:"bold"},this.props.problem.title),o.a.createElement(f,{source:this.props.problem.description}),o.a.createElement("h3",{className:"bold"},"Challenge"),o.a.createElement(f,{source:this.props.problem.challenge}),o.a.createElement("hr",null),o.a.createElement("h3",{className:"bold"},"Test Cases"),o.a.createElement(f,{source:this.props.problem.test_case_1}),o.a.createElement("hr",null),o.a.createElement(f,{source:this.props.problem.test_case_2}),this.displayCloseButton()))}}]),a}(o.a.Component),y=a(101),g=a.n(y),C=(a(228),a(229),a(230),a(24)),O=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"displayExpandProblemButton",value:function(){var e=this,t=null;return"hidden"==this.props.problemClass&&(t=o.a.createElement(p.a,{variant:"light",className:"mr-1",onClick:function(){return e.expandProblemButtonClicked()}},"Show Problem")),t}},{key:"displayTerminalButton",value:function(){var e=this;return"terminal-hidden"==this.props.terminalClass?o.a.createElement(p.a,{onClick:function(){return e.showTerminalButtonClicked()},variant:"light"},"Show Terminal"):o.a.createElement(p.a,{onClick:function(){return e.hideTerminalButtonClicked()},variant:"light"},"Hide Terminal")}},{key:"showTerminalButtonClicked",value:function(){this.props.showTerminal()}},{key:"hideTerminalButtonClicked",value:function(){this.props.hideTerminal()}},{key:"expandProblemButtonClicked",value:function(){this.props.expandProblem()}},{key:"submitButtonClicked",value:function(){var e=this.props.code,t=this.props.problemId,a=this;E()({method:"get",url:"http://localhost:8000/api/submit/".concat(t),params:{code:e}}).then((function(e){console.log(e.data),e.data.did_pass_tests?a.props.showModal("Nice you got it! You can move on to the next problem!"):void 0!==e.data.timeout_error?a.props.showModal("<strong>Wrong!</strong><br>Your code took too long! Make sure you're not going into an infinite loop or something like that."):a.props.showModal("<strong>Wrong!</strong><br><strong>Expected Output:</strong> ".concat(e.data.expected_output,"<br><strong>Actual Output</strong>: ").concat(e.data.actual_output))})).catch((function(e){console.log(e)}))}},{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"ActionBox"},o.a.createElement("div",{className:"left-buttons"},this.displayExpandProblemButton(),this.displayTerminalButton()),o.a.createElement("div",{className:"right-buttons"},o.a.createElement(p.a,{variant:"success",onClick:function(){return e.submitButtonClicked()}},"Run Test Cases")))}}]),a}(o.a.Component),k=Object(C.b)((function(e){var t=e.screenLayout.problemClass,a=e.screenLayout.terminalClass,n=e.problem.id;return{problemClass:t,terminalClass:a,code:e.codeState.code,problemId:n}}),(function(e){return{expandProblem:function(){return e({type:"EXPAND_PROBLEM",payload:{problemClass:"expanded",codeEditorWidth:6}})},showTerminal:function(){return e({type:"SHOW_TERMINAL",payload:{terminalClass:"terminal",codeEditorHeight:"50vh"}})},hideTerminal:function(){return e({type:"HIDE_TERMINAL",payload:{terminalClass:"terminal-hidden",codeEditorHeight:"90vh"}})},showModal:function(t){return e(function(e){return{type:"SHOW_MODAL",payload:{modalContent:e,showModal:!0}}}(t))}}}))(O),w=(a(232),a(103)),j=a.n(w),_=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(e){var n;return Object(c.a)(this,a),(n=t.call(this,e)).commands={python:{fn:function(e){var t=n.terminal.current;if(void 0===e)return"Sorry, we don't support running python directly in the browser.\nAt any given point, you can only run the script of the file you're working on.";if(e!==n.props.problemTitle)return'File "'.concat(e,'" non found.\n');var a=n.props.code,o=n.props.problemId;return E()({method:"get",url:"http://localhost:8000/api/run/".concat(o),params:{code:a}}).then((function(e){t.pushToStdout(e.data.output)})).catch((function(e){console.log(e)})),""}}},n.terminal=o.a.createRef(),n}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(j.a,{className:this.props.terminalClass,commands:this.commands,ref:this.terminal,welcomeMessage:"-- To test your code, you can run it here in the terminal. The name of python file is the name of the challenge.",promptLabel:"me@obcode:~$"})}}]),a}(o.a.Component),N=Object(C.b)((function(e){var t=e.screenLayout.terminalClass,a=e.problem.id,n=e.problem.title;return{terminalClass:t,code:e.codeState.code,problemId:a,problemTitle:n}}))(_),M=(a(258),function(e){return{type:"UPDATE_CODE",payload:{code:e}}}),B=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement(h.a,{lg:this.props.codeEditorWidth,className:"CodeEditor"},o.a.createElement(g.a,{placeholder:"Python 3.8",mode:"python",theme:"twilight",name:"code-editor",width:"auto",height:this.props.codeEditorHeight,onLoad:this.onLoad,onChange:function(t){return e.props.updateCode(t)},fontSize:22,showPrintMargin:!0,showGutter:!0,highlightActiveLine:!0,value:this.props.code,setOptions:{showLineNumbers:!0,tabSize:4,insertSpaces:!0}}),o.a.createElement(N,null),o.a.createElement(k,null))}}]),a}(o.a.Component),L=Object(C.b)((function(e){var t=e.screenLayout;return{codeEditorWidth:t.codeEditorWidth,codeEditorHeight:t.codeEditorHeight,code:e.codeState.code}}),(function(e){return{updateCode:function(t){return e(M(t))}}}))(B),P=(a(259),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={displayMenu:!1},e}return Object(i.a)(a,[{key:"render",value:function(){var e=this;return this.state.displayMenu?o.a.createElement("div",{className:"UnobtrusiveNavbar__menu"},o.a.createElement("button",{onClick:function(){return e.setState({displayMenu:!1})},className:"UnobtrusiveNavbar"},o.a.createElement("i",{class:"fas fa-times"})),o.a.createElement(m.b,{className:"UnobtrusiveNavbar__menu-link",to:"/"},"Home"),o.a.createElement(m.b,{className:"UnobtrusiveNavbar__menu-link",to:"/About"},"About")):o.a.createElement("button",{onClick:function(){return e.setState({displayMenu:!0})},className:"UnobtrusiveNavbar"},o.a.createElement("i",{class:"fas fa-bars"}))}}]),a}(o.a.Component)),T=a(268),S=a(270),A=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:8000/api/problem/".concat(this.props.match.params.id)).then((function(t){e.props.updateProblem(t.data),e.props.updateCode(t.data.starting_code)}))}},{key:"render",value:function(){return o.a.createElement("div",{className:"wrapper"},o.a.createElement(x,{onHide:this.props.closeModal,content:this.props.modal.modalContent,show:this.props.modal.showModal}),o.a.createElement(P,null),o.a.createElement(T.a,{noGutters:!0},o.a.createElement(v,{problemClass:this.props.problemClass,problem:this.props.problem,closeProblem:this.props.closeProblem}),o.a.createElement(L,null)))}}]),a}(o.a.Component);function x(e){return o.a.createElement(S.a,Object.assign({},e,{"aria-labelledby":"contained-modal-title-vcenter",centered:!0}),o.a.createElement(S.a.Header,{closeButton:!0},o.a.createElement(S.a.Title,{id:"contained-modal-title-vcenter"},"Test Results")),o.a.createElement(S.a.Body,null,o.a.createElement("p",null,o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.content}}))),o.a.createElement(S.a.Footer,null,"Nice you got it! You can move on to the next problem!"==e.content?o.a.createElement(m.b,{to:"/",className:"btn btn-success"},"Back To Problems"):o.a.createElement(p.a,{onClick:e.onHide},"Close")))}var H=Object(C.b)((function(e){return{problem:e.problem,problemClass:e.screenLayout.problemClass,modal:e.response}}),(function(e){return{updateProblem:function(t){return e(function(e){return{type:"UPDATE_PROBLEM",payload:{problem:e}}}(t))},updateCode:function(t){return e(M(t))},closeProblem:function(){return e({type:"CLOSE_PROBLEM",payload:{problemClass:"hidden",codeEditorWidth:12}})},closeModal:function(){return e({type:"CLOSE_MODAL",payload:{modalContent:null,showModal:!1}})}}}))(A),D=a(271),I=a(272),W=function(){return o.a.createElement(D.a,{className:"navbar-dark",expand:"lg"},o.a.createElement(m.b,{to:"/",className:"navbar-brand"},"OBCode"),o.a.createElement(D.a.Toggle,{"aria-controls":"basic-navbar-nav"}),o.a.createElement(D.a.Collapse,{id:"basic-navbar-nav"},o.a.createElement(I.a,{className:"ml-auto"},o.a.createElement(m.b,{to:"/",className:"nav-link active"},"Home"),o.a.createElement(m.b,{to:"/about",className:"nav-link active"},"About"))))},R=a(273),U=function(e){return o.a.createElement(R.a.Item,null,o.a.createElement(m.b,{to:"/problem/".concat(e.id)},e.title))},z=a(269),G=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){var e;Object(c.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(e=t.call.apply(t,[this].concat(o))).state={problemListings:[]},e}return Object(i.a)(a,[{key:"componentDidMount",value:function(){var e=this;E.a.get("http://localhost:8000/api/problems").then((function(t){e.setState({problemListings:t.data})}))}},{key:"render",value:function(){return o.a.createElement(z.a,null,o.a.createElement(R.a,{className:"mt-5"},this.state.problemListings.map((function(e,t){return o.a.createElement(U,{key:e.id,id:e.id,title:e.title})}))))}}]),a}(o.a.Component),J=a(110),Y=a.n(J),F=a(111),X=a.n(F),$=a(112),q=a.n($),K=a(113),Q=a.n(K),V=(a(263),function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(z.a,null,o.a.createElement("h1",{className:"about--h1"},"About"),o.a.createElement(T.a,null,o.a.createElement(h.a,{lg:3},o.a.createElement("img",{className:"about--img",src:Y.a,width:"100%"})),o.a.createElement(h.a,{lg:3},o.a.createElement("img",{className:"about--img",src:X.a,width:"100%"})),o.a.createElement(h.a,{lg:3},o.a.createElement("img",{className:"about--img",src:q.a,width:"100%"})),o.a.createElement(h.a,{lg:3},o.a.createElement("img",{className:"about--img",src:Q.a,width:"100%"}))),o.a.createElement("div",{className:"about--content"},o.a.createElement("p",{className:"about--p"},"I built OBCode for my girlfriend, who very recently decided to change her major to Computer Science and start learning Python."),o.a.createElement("p",{className:"about--p"},"She texted me once, asking me to quiz her on some of the python subject material she had learned that day. However, it's difficult to write code over text messages. So, I got the idea of making a website that could give her python programming challenges, and to welcome her into the world of programming in the funnest possible way, I made the central theme of the website her pets!"),o.a.createElement("p",{className:"about--p"},'The site is called OBCode because "O" and "B" stand for "Obi" and "Bear", her cat and dog respectively. Every coding problem is related to her pets in some way.')))}}]),a}(o.a.Component)),Z=function(e){Object(u.a)(a,e);var t=Object(s.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(i.a)(a,[{key:"render",value:function(){return o.a.createElement(m.a,null,o.a.createElement("div",null,o.a.createElement(d.c,null,o.a.createElement(d.a,{exact:!0,path:"/"},o.a.createElement(W,null),o.a.createElement("h1",{className:"title"},"Pick A Problem"),o.a.createElement(G,null)),o.a.createElement(d.a,{exact:!0,path:"/about"},o.a.createElement(W,null),o.a.createElement(V,null)),o.a.createElement(d.a,{path:"/problem/:id",component:H}))))}}]),a}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ee=a(36),te=a(17),ae={problemClass:"expanded",terminalClass:"terminal",codeEditorWidth:6,codeEditorHeight:"50vh"};var ne={code:""},oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ne,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_CODE":return Object(te.a)({},e,{code:t.payload.code});default:return e}},re={id:-1,num_inputs:-1,title:"",description:"",challenge:"",test_case_1:"",test_case_2:""},le=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"UPDATE_PROBLEM":return Object(te.a)({},e,{title:t.payload.problem.title,description:t.payload.problem.description,challenge:t.payload.problem.challenge,test_case_1:t.payload.problem.test_case_1,test_case_2:t.payload.problem.test_case_2,id:t.payload.problem.id});default:return e}},ce={modalContent:"",showModal:!1},ie=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ce,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"SHOW_MODAL":case"CLOSE_MODAL":return Object(te.a)({},e,{modalContent:t.payload.modalContent,showModal:t.payload.showModal});default:return e}},se=Object(ee.b)({screenLayout:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CLOSE_PROBLEM":case"EXPAND_PROBLEM":return Object(te.a)({},e,{problemClass:t.payload.problemClass,codeEditorWidth:t.payload.codeEditorWidth});case"SHOW_TERMINAL":case"HIDE_TERMINAL":return Object(te.a)({},e,{terminalClass:t.payload.terminalClass,codeEditorHeight:t.payload.codeEditorHeight});default:return e}},codeState:oe,problem:le,response:ie}),ue=Object(ee.c)(se);l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(C.a,{store:ue},o.a.createElement(Z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[115,1,2]]]);
//# sourceMappingURL=main.dc02a99c.chunk.js.map