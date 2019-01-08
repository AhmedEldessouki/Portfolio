(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{309:function(e,t,a){},312:function(e,t,a){},343:function(e,t,a){e.exports=a.p+"static/media/react.f0e512c7.svg"},356:function(e,t,a){e.exports=a(755)},361:function(e,t,a){},368:function(e,t,a){},371:function(e,t,a){},374:function(e,t,a){},422:function(e,t,a){},424:function(e,t,a){},428:function(e,t,a){},486:function(e,t,a){},590:function(e,t,a){},675:function(e,t,a){},677:function(e,t,a){},679:function(e,t,a){},681:function(e,t,a){},699:function(e,t,a){},702:function(e,t,a){},710:function(e,t,a){},755:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(38),o=a.n(c),l=(a(361),a(364),a(366),a(15)),i=a(16),s=a(19),m=a(17),u=a(18),d=(a(368),a(371),a(374),a(107)),p=a.n(d),E=a(84),h=a(39),f=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={profile:"",isLoading:!0},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){var e=this;p.a.get("https://api.github.com/users/ahmedeldessouki").then(function(t){e.setState({profile:t.data,isLoading:!1})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){var e=this.state,t=e.profile,a=e.isLoading;return r.a.createElement("div",null,a?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:this.state.loading}),"Loading..."):r.a.createElement("div",{className:"MyInfo"},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:t.avatar_url,alt:"profilePicture"})),r.a.createElement("ul",{className:"details-container"},r.a.createElement("li",null,t.name),r.a.createElement("li",{className:"follow-container"},"Lives in ",t.location),r.a.createElement("li",null,r.a.createElement("a",{href:t.html_url},r.a.createElement(E.a,null),"   My Github")))),r.a.createElement("div",{className:"second-container"},r.a.createElement("p",null,"Welcome! I'm Ahmed Eldessouki.  I'm 29 years old from Cairo, Egypt currently living in Turkey. I work as a",r.a.createElement("em",null," Front-End Developer"),". I graduated from University Of South Wales. I work at RoomMe as an entry level Front-End Developer. I'm a very passionate newbie Front-End Developer who loves  to develop himself. A strength of mine, is my ability to be observant of small details and to stay up-to-date with the newest ",r.a.createElement("em",null,"technologies and techniques"),"."))))}}]),t}(n.Component),g=(a(422),a(353)),j=(a(424),a(40)),b=a(29),N=a(764),v=a(156),O=function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("project actions....:",e),r.collection("projects").doc("".concat(e.id)).delete().then(function(){t({type:"PROJECT_DELETED"})}).catch(function(e){t({type:"PROJECT_DELETE_ERROR",err:e})})}},y=a(31),S=(a(428),a(88)),w=a(758),C=a(60),D=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleShow=a.handleShow.bind(Object(y.a)(Object(y.a)(a))),a.handleClose=a.handleClose.bind(Object(y.a)(Object(y.a)(a))),a.handleDelete=a.handleDelete.bind(Object(y.a)(Object(y.a)(a))),a.state={show:!1},a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleDelete",value:function(){this.props.deleteProject(this.props.project),this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this.props.project?null:{display:"none"};return r.a.createElement("div",{className:"PopUp"},r.a.createElement(w.a,{bsStyle:"primary",className:"toggle-button",bsSize:"large",onClick:this.handleShow},r.a.createElement(E.c,null)),r.a.createElement("div",{className:"static-modal"},r.a.createElement(S.a,{show:this.state.show,onHide:this.handleClose},r.a.createElement(S.a.Header,{closeButton:!0},r.a.createElement(S.a.Title,null,"Warning")),r.a.createElement(S.a.Body,null,"Do you want to delete this project?"),r.a.createElement(S.a.Footer,null,r.a.createElement(w.a,{onClick:this.handleClose},"No"),r.a.createElement(w.a,{bsStyle:"danger",style:e,onClick:this.handleDelete},"Yes")))))}}]),t}(n.Component),P=Object(C.a)(null,function(e){return{deleteProject:function(t){return e(O(t))}}})(D),L=Object(b.b)(function(e){return{auth:e.firebase.auth}},function(e){return{deleteProject:function(t){return e(O(t))}}})(function(e){var t=e.project,a=e.auth,n=Object(g.a)(e,["project","auth"]);return r.a.createElement("div",null,r.a.createElement("div",{className:"ProjectSummary"},a.uid?r.a.createElement("div",{className:"icons-svg"},r.a.createElement(N.a,{to:"/edit/".concat(t.id),key:t},r.a.createElement(j.g,null)),r.a.createElement(P,{project:t})):null,r.a.createElement(N.a,{to:n.to,key:n.key},t.projectLogo[0]?r.a.createElement("img",{alt:"Project's logo",src:t.projectLogo[0]}):null,r.a.createElement("h3",null,t.projectName),r.a.createElement("p",null,t.description))))}),k=function(e){var t=e.projectsData;return r.a.createElement("div",{className:"Projects"},r.a.createElement("h1",null,"My Projects"),r.a.createElement("div",{className:"cards-wrapper"},t&&t.map(function(e){return r.a.createElement(L,{project:e,to:"/projects/".concat(e.id),key:e.id})})))},R=a(11),T=(a(486),a(27)),A=a(30),_={contactName:"",email:"",phoneNumber:"",description:""},U=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=Object(R.a)({},_),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.errors,a=e.touched,n=e.isSubmitting,c=e.handleChange,o=e.contError,l=e.contactName,i=e.email,s=e.phoneNumber,m=e.description;return r.a.createElement("div",{className:"ContactMe"},r.a.createElement("h1",null,"Contact Me"),r.a.createElement(T.b,{id:"contactMe"},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{className:"field-container"},r.a.createElement("div",{className:"input-svg"},r.a.createElement(j.a,null),r.a.createElement(T.a,{name:"contactName",value:l,placeholder:"Enter your name"})),t.contactName&&a.contactName?r.a.createElement("p",{className:"error-message"},t.contactName):null),r.a.createElement("div",{className:"field-container"},r.a.createElement("div",{className:"input-svg"},r.a.createElement(E.b,null),r.a.createElement(T.a,{name:"email",value:i,type:"email",placeholder:"Email Address"})),t.email&&a.email?r.a.createElement("div",{className:"error-message"},t.email):null),r.a.createElement("div",{className:"field-container"},r.a.createElement("div",{className:"input-svg"},r.a.createElement(j.h,null),r.a.createElement(T.a,{name:"phoneNumber",type:"tel",value:s,placeholder:"Enter Your Phone Number"})),t.phoneNumber&&a.phoneNumber?r.a.createElement("div",{className:"error-message"},t.phoneNumber):null)),r.a.createElement("div",{className:"second-container"},r.a.createElement("textarea",{name:"description",onChange:c,value:m,className:"textArea",required:!0})),r.a.createElement("button",{type:"submit",disabled:n},"Submit"),o?r.a.createElement("div",{className:"error-message"},o):null),n?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement("span",null,"Thank you for contacting me"),r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:n}),r.a.createElement("span",null,"I will get back to you soon")):null)}}]),t}(n.Component),I=Object(T.c)({validationSchema:A.object().shape({contactName:A.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:A.string().email("Invalid email").required("Required"),phoneNumber:A.string().min(11,"Too Short!").max(13,"Too Long!").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),description:A.string()}),enableReinitialize:!0,mapPropsToValues:function(e){return Object(R.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){setTimeout(function(){"admin"===e.name?t.setErrors({contactName:"Nice try!"}):(e.contactedMe(e),document.getElementById("contactMe").reset(),t.resetForm()),t.setSubmitting(!1)},2e3)},displayName:"ContactMe"})(U),M=Object(C.a)(function(e){return{contError:e.contactedMe.contError}},function(e){return{contactedMe:function(t){return e(function(e){return function(t,a,n){n.getFirebase,(0,n.getFirestore)().collection("contactedMe").add({contactName:e.contactName,email:e.email,phoneNumber:e.phoneNumber,description:e.description,sentAt:new Date}).then(function(){t({type:"MESSAGE_SENT",contact:e})}).catch(function(e){t({type:"MESSAGE_NOT_SENT",err:e})})}}(t))}}})(I),F=(a(590),a(343)),x=a.n(F),z=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"MyFooter"},r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"left-container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/ahmedeldessouki/"},r.a.createElement(j.f,null)),r.a.createElement("a",{href:"https://www.github.com/ahmedeldessouki/"},r.a.createElement(j.c,null)),r.a.createElement("a",{href:"https://plus.google.com/+AhmedElDessouki1"},r.a.createElement(j.d,null)),r.a.createElement("a",{href:"https://www.instagram.com/nem0ahmed"},r.a.createElement(j.e,null)),r.a.createElement("a",{href:"https://www.facebook.com/nemoahmed"},r.a.createElement(j.b,null)),r.a.createElement("a",{href:"https://www.twitter.com/nem0adam"},r.a.createElement(j.k,null))),r.a.createElement("div",{className:"center-container"},r.a.createElement("img",{className:"react-logo",alt:"",src:x.a}),r.a.createElement(j.j,{style:{color:"hotpink",alignSelf:"center"}})),r.a.createElement("div",{className:"right-container"},r.a.createElement(j.i,null),r.a.createElement("p",null,"2019 Ahmed ElDessouki")))}}]),t}(n.Component),B=a(344),G=a.n(B),q=a(42),J=a(33),H=(a(309),a(760)),W=a(763),K=a(759),V=Object(b.b)(null,function(e){return{signOut:function(){return e(function(e,t,a){(0,a.getFirebase)().auth().signOut().then(function(){e({type:"SIGNOUT_SUCCESS"})}).catch(function(t){e({type:"SIGNOUT_FAILED",err:t})})})}}})(function(e){return r.a.createElement("div",null,r.a.createElement("div",null,r.a.createElement(H.a,{className:"Navigation",inverse:!0,collapseOnSelect:!0},r.a.createElement(H.a.Header,null,r.a.createElement(H.a.Brand,null,r.a.createElement("span",null,e.title)),r.a.createElement(H.a.Toggle,null)),r.a.createElement(H.a.Collapse,null,r.a.createElement(W.a,{pullRight:!0},r.a.createElement(K.a,{eventKey:1,href:"/"},"Home"),r.a.createElement(K.a,{eventKey:2,href:"/#projects"},"Projects"),r.a.createElement(K.a,{eventKey:3,href:"/#contactMe"},"Contact Me"),r.a.createElement(K.a,{eventKey:4,href:"/dashboard"},"DashBoard"),r.a.createElement(K.a,{eventKey:5,href:"/create-project"},"Create Project"),r.a.createElement(K.a,{eventKey:5,href:"/signup"},"SignUp"),r.a.createElement(K.a,{eventKey:5,onClick:e.signOut,href:"/"},"SignOut"))))))}),X=function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).state={intervalId:0,title:"Nemo Adam"},e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projectsData,a=e.auth,n=e.profile,c=a.uid?r.a.createElement(V,{profile:n,title:this.state.title}):r.a.createElement("div",{className:"myNav-container"},r.a.createElement("div",{className:"my-name"},r.a.createElement("span",null,"Nemo Adam")),r.a.createElement("div",{className:"scroll-spy"},r.a.createElement("a",{className:"scroll-spy-item",href:"/"},"Home"),r.a.createElement("a",{className:"scroll-spy-item",href:"#projects"},"Projects"),r.a.createElement("a",{className:"scroll-spy-item",href:"#contactMe"},"Contact Me")));return r.a.createElement("div",{className:"Home"},r.a.createElement("header",{className:"Home-header",id:"1"},c,r.a.createElement(f,null)),r.a.createElement(G.a,{StopPosition:0,ShowAtPosition:150,EasingType:"easeOutCubic",AnimationDuration:500,ContainerClassName:"ScrollUpButton__Container",TransitionClassName:"ScrollUpButton__Toggled"}),r.a.createElement("main",{id:"projects"},r.a.createElement(k,{projectsData:t})),r.a.createElement("footer",{id:"contactMe"},r.a.createElement(M,null),r.a.createElement(z,null)))}}]),t}(n.Component),Y=Object(J.d)(Object(b.b)(function(e){return{projectsData:e.firestore.ordered.projects,auth:e.firebase.auth,profile:e.firebase.profile}}),Object(q.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"projectLogo"}]))(X),$=a(765),Q=a(757),Z=a(761),ee=(a(675),function(e){var t=e.notifications;return r.a.createElement("div",{className:"Notifications"},r.a.createElement("h1",null,"Notification"),r.a.createElement("div",{className:"notification-card"},r.a.createElement("div",null,r.a.createElement("ul",{className:"items"},t&&t.map(function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:Array.from(e.content.split(" ",3)).join("-")},r.a.createElement("h4",null,e.user),r.a.createElement("h6",null,e.content),r.a.createElement("span",null,e.time.toDate().toDateString())))})))))}),te=(a(677),a(679),a(681),a(347)),ae=function(e){var t=e.contact;return r.a.createElement("div",{className:"MessagesSummary"},r.a.createElement("h3",null,t.contactName),r.a.createElement(te.Scrollbars,{className:"my-scroller"},r.a.createElement("p",{className:"description"},t.description)),r.a.createElement("span",null,t.sentAt.toDate().toDateString()))},ne=function(e){var t=e.messagesData;return r.a.createElement("div",{className:"Messages"},r.a.createElement("h1",null,"My Messages"),r.a.createElement("div",{className:"cards-wrapper"},t&&t.map(function(e){return r.a.createElement(N.a,{to:"/Messages/".concat(e.id),key:e.id},r.a.createElement(ae,{contact:e}))})))},re=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.projectsData,a=e.auth,n=e.notifications,c=e.messagesData,o=e.isSubmitting;return r.a.createElement("div",null,a.uid?r.a.createElement("div",null,o?r.a.createElement("div",{className:"Dashboard"},r.a.createElement(V,{title:"Dashboard"}),r.a.createElement("main",null,r.a.createElement("div",{className:"Dashboard-items"},r.a.createElement("div",{className:"first-container"},r.a.createElement(k,{projectsData:t})),r.a.createElement("div",{className:"second-container"},r.a.createElement(ee,{notifications:n})))),r.a.createElement("div",null,r.a.createElement(ne,{messagesData:c}))):r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!o}),"Loading...")):r.a.createElement(Z.a,{to:"/signin"}))}}]),t}(n.Component),ce=Object(J.d)(Object(b.b)(function(e){return{projectsData:e.firestore.ordered.projects,isSubmitting:e.firebase.profile.isLoaded,messagesData:e.firestore.ordered.contactedMe,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}}),Object(q.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"contactedMe",orderBy:["sentAt","desc"]},{collection:"notifications",limit:10,orderBy:["time","desc"]}]))(re),oe=(a(699),Object(J.d)(Object(b.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.contactedMe;return{message:n?n[a]:null}}),Object(q.firestoreConnect)([{collection:"contactedMe"}]))(function(e){var t=e.message;return t?r.a.createElement("div",{className:"MessageDetails"},r.a.createElement(V,null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{className:"double-container"},r.a.createElement("h2",null,r.a.createElement("a",{href:"mailto:".concat(t.email)},t.email)),r.a.createElement("h2",null,t.phoneNumber)),r.a.createElement("p",null,t.description)),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",null,"Author: ",t.contactName),r.a.createElement("div",null,"Created At: ",t.sentAt.toDate().toDateString())))):r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!0}),"Loading...")})),le=a(151),ie=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"Navigation"},r.a.createElement("ul",{className:"not-auth-nav"},r.a.createElement("li",null,r.a.createElement(N.a,{to:"/"},"Home"))))}}]),t}(n.Component),se=(a(312),function(e){function t(){var e;return Object(l.a)(this,t),(e=Object(s.a)(this,Object(m.a)(t).call(this))).handleChange=function(t){e.setState(Object(le.a)({},t.target.id,t.target.value))},e.handleSubmit=function(t){t.preventDefault(),e.props.signIn(e.state)},e.state={email:"",password:""},e.handleSubmit=e.handleSubmit.bind(Object(y.a)(Object(y.a)(e))),e.handleChange=e.handleChange.bind(Object(y.a)(Object(y.a)(e))),e}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.authError,a=e.auth,n=a.uid?r.a.createElement(V,null):r.a.createElement(ie,null);return r.a.createElement("div",null,a.uid?r.a.createElement(Z.a,{to:"/"}):r.a.createElement("div",{className:"SignIn"},n,r.a.createElement("h1",null,"Signin"),r.a.createElement("form",{onSubmit:this.handleSubmit},r.a.createElement("div",{className:"field-container"},r.a.createElement("input",{type:"email",placeholder:"Enter Email",id:"email",onChange:this.handleChange}),r.a.createElement("input",{type:"password",placeholder:"Enter Password",id:"password",onChange:this.handleChange})),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"SignIn"),t?r.a.createElement("p",null,t):null))))}}]),t}(n.Component)),me=Object(b.b)(function(e){return{authError:e.auth.authError,auth:e.firebase.auth}},function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then(function(){e({type:"LOGIN_SUCCESS"})}).catch(function(t){e({type:"LOGIN_ERROR",err:t})})}));var a}}})(se),ue={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},de=function(e){function t(){var e,a;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state=Object(R.a)({},ue),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.props,t=e.errors,a=e.touched,n=e.isSubmitting,c=e.authError,o=e.auth,l=e.handleSubmit,i=e.firstName,s=e.lastName,m=e.email,u=e.password,d=e.confirmPassword;return r.a.createElement("div",null,o.uid?r.a.createElement("div",{className:"SignUp"},r.a.createElement(V,{title:"Registration"}),r.a.createElement("h1",null,"Sign up"),r.a.createElement(T.b,{id:"#sign-up",onSubmit:l},r.a.createElement("div",{className:"double-container"},r.a.createElement("div",{className:"field-container"},r.a.createElement(T.a,{name:"firstName",value:i,placeholder:"First Name"}),t.firstName&&a.firstName?r.a.createElement("p",{className:"error-message"},t.firstName):null),r.a.createElement("div",{className:"field-container"},r.a.createElement(T.a,{name:"lastName",value:s,placeholder:"Last Name"}),t.lastName&&a.lastName?r.a.createElement("div",{className:"error-message"},t.lastName):null)),r.a.createElement("div",{className:"field-container"},r.a.createElement(T.a,{name:"email",type:"email",value:m,placeholder:"Email Address"}),t.email&&a.email?r.a.createElement("div",{className:"error-message"},t.email):null),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",{className:"field-container"},r.a.createElement(T.a,{name:"password",type:"password",value:u,placeholder:"Enter Password"}),t.password&&a.password?r.a.createElement("div",{className:"error-message"},t.password):null),r.a.createElement("div",{className:"field-container"},r.a.createElement(T.a,{name:"confirmPassword",type:"password",value:d,placeholder:"Re-Enter Password"}),t.confirmPassword&&a.confirmPassword?r.a.createElement("div",{className:"error-message"},t.confirmPassword):null),c?r.a.createElement("div",{className:"error-message"},c):null),r.a.createElement("button",{type:"submit",disabled:n},"Submit")),n?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:n}),"Loading..."):null):r.a.createElement(Z.a,{to:"/signin"}))}}]),t}(n.Component),pe=Object(T.c)({validationSchema:A.object().shape({firstName:A.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:A.string().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:A.string().email("Invalid email").required("Required"),password:A.string().min(6,"Too Short!").required("Required"),confirmPassword:A.string().oneOf([A.ref("password"),null],"Passwords don't match").required("Confirm Password is required")}),mapPropsToValues:function(e){return Object(R.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){setTimeout(function(){"admin"===e.firstName?t.setErrors({firstName:"Nice try!"}):"admin"===e.lastName?t.setErrors({lastName:"Nice try!"}):(e.signUp(e),document.getElementById("sign-up").reset(),t.resetForm()),t.setSubmitting(!1)},2e3)},displayName:"SignUp"})(de),Ee=Object(C.a)(function(e){return{auth:e.firebase.auth,authError:e.auth.authError}},function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,o=r(),l=c();o.auth().createUserWithEmailAndPassword(a.email,a.password).then(function(e){return l.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})}).then(function(){e({type:"SIGNUP_SUCCESS"})}).catch(function(t){e({type:"SIGNUP_ERROR",err:t})})}));var a}}})(pe),he=(a(702),a(704),a(348)),fe=Object(J.d)(Object(b.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,profile:e.firebase.profile,auth:e.firebase.auth}}),Object(q.firestoreConnect)([{collection:"projects"}]))(function(e){var t=e.project,a=e.auth,n=e.profile,c=a.uid?r.a.createElement(V,{auth:a,title:"Project Details",profile:n}):r.a.createElement(ie,null);return window.scrollTo(0,0),t?r.a.createElement("div",{className:"bg-img"},r.a.createElement("div",{className:"ProjectDetails"},c,r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"logos-container"},null!==t.projectLogo?r.a.createElement(he.Carousel,null,t.projectLogo.map(function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{className:"img-display",alt:"project's pictures",src:e}))})):null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"first-container"},r.a.createElement("h2",null,r.a.createElement("a",{href:t.projectLink},t.projectName)),r.a.createElement("p",null,t.description)),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",null,"Author: ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,"Created At: ",t.createdAt.toDate().toDateString())))),r.a.createElement("footer",null,r.a.createElement(M,null),r.a.createElement(z,null)))):r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!0}),"Loading...")}),ge=(a(710),a(354)),je="obaxyyex",be="579628475278557",Ne=" https://api.cloudinary.com/v1_1/ahmedeldessouki/image/upload",ve={projectName:"",projectLink:"",description:""},Oe=function(e){function t(e){var a;return Object(l.a)(this,t),(a=Object(s.a)(this,Object(m.a)(t).call(this,e))).handleDrop=function(e,t){if(a.setState({isLoading:!0}),e&&e.length>0&&e[0].size<8e6){var n=e.map(function(e){var t,n=[];return(t=new FormData).append("file",e),t.append("tags","codeinfuse, small, gist"),t.append("upload_preset",je),t.append("api_key",be),t.append("timestamp",Date.now()/1e3||0),p.a.post(Ne,t,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then(function(e){var t=e.data;a.state.imageDropArray.push(t),a.state.imageDropArray.map(function(e){n.push(e.secure_url),a.props.setValues(Object(R.a)({},a.props.values,{projectLogos:n}))})}).catch(function(e){console.log(e)})});p.a.all(n).then(function(){a.setState({isLoading:!1}),a.props.setValues(Object(R.a)({},a.props.values))}).catch(function(e){console.log(e)})}t&&t.length>0&&t[0].Size>8e6&&alert("This File is too big")},a.state=Object(R.a)({imSrc:null,imageDropArray:[],projectLogos:[],isLoading:!1},ve),a.handleDrop=a.handleDrop.bind(Object(y.a)(Object(y.a)(a))),a}return Object(u.a)(t,e),Object(i.a)(t,[{key:"render",value:function(){var e=this.state,t=e.imageDropArray,a=e.isLoading,n=this.props,c=n.errors,o=n.touched,l=n.isSubmitting,i=n.auth,s=n.project,m=n.handleChange,u=n.description,d=n.projectLink,p=n.projectName,E=a||l;return r.a.createElement("div",null,i.uid?r.a.createElement("div",{className:"CreateProject"},r.a.createElement(V,{title:"Create Project"}),r.a.createElement("h1",null,"Create New Project"),r.a.createElement("div",{className:"wrapper-container"},0!==t.length?r.a.createElement("div",{className:"maping"},t.map(function(e,t){return r.a.createElement("img",{alt:"",key:t,src:e.url})})):null,r.a.createElement(T.b,{id:"createProject"},r.a.createElement(ge.a,{onDrop:this.handleDrop,accept:"image/*",multiple:!0,maxSize:8e6},function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",Object.assign({},t(),{className:"drop-zone-styles"}),r.a.createElement("span",null,"drop image(s)"),r.a.createElement("input",Object.assign({type:"file"},a())))}),r.a.createElement("div",{className:"field-container"},r.a.createElement(T.a,{type:"text",value:p,placeholder:s?s.projectName:"Project Name",name:"projectName"})),c.projectName&&o.projectName?r.a.createElement("p",{className:"error-message"},c.projectName):null,r.a.createElement("div",{className:"field-container"},r.a.createElement(T.a,{type:"url",value:d,placeholder:s?s.projectLink:"Project Link",name:"projectLink"})),r.a.createElement("textarea",{placeholder:s?s.description:"Project Description",name:"description",value:u,onChange:m}),r.a.createElement("button",{type:"submit",disabled:l},s?"Edit":"Create"," Project"))),E?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(h.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:E}),"Loading..."):null,r.a.createElement(z,null)):r.a.createElement(Z.a,{to:"/signin"}))}}]),t}(n.Component),ye=Object(T.c)({validationSchema:A.object().shape({projectName:A.string(),description:A.string()}),enableReinitialize:!0,mapPropsToValues:function(e){return Object(R.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){setTimeout(function(){e.project?e.updateProject(e):e.createProject(e),document.getElementById("createProject").reset(),t.setSubmitting(!1)},2e3)},displayName:"createProject"})(Oe),Se=Object(b.b)(function(e,t){var a=t.match.params.id,n=e.firestore.data.projects,r=n?n[a]:null;return console.log(n),{auth:e.firebase.auth,project:r}},function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,o=a().firebase.auth.uid;r.collection("projects").add({projectName:e.projectName,projectLink:e.projectLink,description:e.description,projectLogo:Object(v.a)(e.projectLogos),authorFirstName:c.firstName,authorLastName:c.lastName,authorId:o,createdAt:new Date}).then(function(){t({type:"CREATE_PROJECT",project:e})}).catch(function(e){t({type:"CREATE_PROJECT_ERROR",err:e})})}}(t))},updateProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("project actions....:",e),r.collection("projects").doc("".concat(e.match.params.id)).update({projectName:e.projectName?e.projectName:e.project.projectName,projectLink:e.projectLink?e.projectLink:e.project.projectLink,projectLogo:e.projectLogos?Object(v.a)(e.projectLogos):Object(v.a)(e.project.projectLogo),description:e.description?e.description:e.project.description}).then(function(){t({type:"PROJECT_UPDATED",project:e})}).catch(function(e){t({type:"PROJECT_NOT_UPDATED",err:e})})}}(t))}}})(ye),we=function(e){function t(){return Object(l.a)(this,t),Object(s.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(i.a)(t,[{key:"componentDidMount",value:function(){document.title="Ahmed ElDessouki"}},{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement($.a,null,r.a.createElement(Q.a,{path:"/",exact:!0,component:Y}),r.a.createElement(Q.a,{path:"/dashboard",component:ce}),r.a.createElement(Q.a,{path:"/projects/:id",component:fe}),r.a.createElement(Q.a,{path:"/messages/:id",component:oe}),r.a.createElement(Q.a,{path:"/signin",component:me}),r.a.createElement(Q.a,{path:"/SignUp",component:Ee}),r.a.createElement(Q.a,{path:"/create-project",component:Se}),r.a.createElement(Q.a,{path:"/edit/:id",component:Se}),r.a.createElement(Z.a,{from:"*",to:"/"})))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ce=a(762),De={authError:null},Pe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:De,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login Success"),Object(R.a)({},e,{authError:null});case"LOGIN_ERROR":return console.log("login error"),Object(R.a)({},e,{authError:t.err.message});case"SIGNOUT_SUCCESS":return console.log("SIGN OUT SUCCESS"),Object(R.a)({},e,{authError:null});case"SIGNOUT_FAILED":return console.log("Sign Out Error",t.err.message),Object(R.a)({},e,{authError:t.err.message});case"SIGNUP_SUCCESS":return Object(R.a)({},e,{authError:null});case"SIGNUP_ERROR":return console.log("signUp failed"),Object(R.a)({},e,{authError:t.err.message});default:return e}},Le={projects:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}]},ke=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Le,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("project has been created",t.project),Object(R.a)({},e);case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),Object(R.a)({},e,{projError:t.err.message});case"PROJECT_UPDATED":return console.log("project successfully updated",t.project),Object(R.a)({},e);case"PROJECT_NOT_UPDATED":return console.log("project did not update",t.err),Object(R.a)({},e,{projError:t.err.message});case"PROJECT_DELETED":return console.log("project successfully deleted"),null;case"PROJECT_DELETE_ERROR":return console.log("project still exists",t.err),{projError:t.err.message};default:return e}},Re={contError:null,contactedMe:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}]},Te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Re,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGE_SENT":return Object(R.a)({},e,{contError:null});case"MESSAGE_NOT_SENT":return Object(R.a)({},e,{contError:t.err.message});default:return e}},Ae={projects:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}],projError:null,downloadUrls:[]},_e=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:Ae,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROJ_LOGO_ADDED":return console.log("PROJ_LOGO_ADDED",t.file,t.downloadUrl),Object(R.a)({},e,{downloadUrls:[t.downloadUrl.toString()]});case"PROJ_LOGO_NOT_ADDED":return console.log("PROJ_LOGO_NOT_ADDED",t.err),Object(R.a)({},e,{projError:t.err.message});default:return e}},Ue=a(109),Ie=Object(J.c)({auth:Pe,project:ke,contactedMe:Te,projectLogos:_e,firestore:Ue.firestoreReducer,firebase:q.firebaseReducer}),Me=a(350),Fe=a(155),xe=a.n(Fe);a(749),a(753),a(756);xe.a.initializeApp({apiKey:"AIzaSyAABosRQdWuCOmy4ylwUjdi3Rlz3ngRcfM",authDomain:"ahmedeldessouki-a7488.firebaseapp.com",databaseURL:"https://ahmedeldessouki-a7488.firebaseio.com",projectId:"ahmedeldessouki-a7488",storageBucket:"gs://ahmedeldessouki-a7488.appspot.com",storage:"gs://ahmedeldessouki-a7488.appspot.com",messagingSenderId:"928636667018"});xe.a.firestore().settings({timestampsInSnapshots:!0});var ze=xe.a,Be=Object(J.e)(Ie,Object(J.d)(Object(J.a)(Me.a.withExtraArgument({getFirebase:q.getFirebase,getFirestore:Ue.getFirestore})),Object(Ue.reduxFirestore)(ze),Object(q.reactReduxFirebase)(ze,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));Be.firebaseAuthIsReady.then(function(){o.a.render(r.a.createElement(b.a,{store:Be},r.a.createElement(Ce.a,null,r.a.createElement(we,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})})}},[[356,2,1]]]);
//# sourceMappingURL=main.731ccf12.chunk.js.map