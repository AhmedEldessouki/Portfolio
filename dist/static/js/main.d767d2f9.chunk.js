(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{148:function(e,t,a){e.exports=a.p+"static/media/my.958c41ec.svg"},198:function(e,t,a){e.exports=a.p+"static/media/react.26ef1cbc.svg"},276:function(e,t,a){},278:function(e,t,a){},306:function(e,t,a){e.exports=a(577)},311:function(e,t,a){},312:function(e,t,a){},313:function(e,t,a){},315:function(e,t,a){},357:function(e,t,a){},358:function(e,t,a){},362:function(e,t,a){},364:function(e,t,a){},366:function(e,t,a){},518:function(e,t,a){},519:function(e,t,a){},520:function(e,t,a){},521:function(e,t,a){},537:function(e,t,a){},538:function(e,t,a){},544:function(e,t,a){},577:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),c=a(48),o=a.n(c),i=(a(311),a(312),a(43)),l=(a(313),a(199)),s=a.n(l),m=a(293),u=(a(315),a(109)),d=a.n(u),p=a(82),E=a(26),f=function(){var e=Object(n.useState)(""),t=Object(i.a)(e,2),a=t[0],c=t[1],o=Object(n.useState)(!0),l=Object(i.a)(o,2),u=l[0],f=l[1],h=Object(n.useState)(""),g=Object(i.a)(h,2),b=g[0],j=g[1],N=Object(n.useState)(0),v=Object(i.a)(N,2),O=v[0],y=v[1],S=function(){var e=Object(m.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return j("https://api.github.com/users/ahmedeldessouki"),e.next=3,d()(b);case 3:return t=e.sent,c(t.data),f(!1),y(84e4),e.abrupt("return",[a,u,O]);case 8:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useEffect)((function(){setTimeout((function(){S()}),O)})),r.a.createElement("div",null,u?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(E.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:u}),"Loading..."):r.a.createElement("div",{className:"MyInfo",style:{minHeight:window.innerHeight}},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{className:"img-container"},r.a.createElement("img",{src:a.avatar_url,alt:"profilePicture"})),r.a.createElement("ul",{className:"details-container"},r.a.createElement("li",null,a.name),r.a.createElement("li",{className:"follow-container"},"Lives in ",a.location),r.a.createElement("li",{style:{backgroundColor:"#23527c"}},r.a.createElement("a",{href:a.html_url},r.a.createElement(p.a,null)," My Github")))),r.a.createElement("div",{className:"second-container"},r.a.createElement("p",null,"Welcome! I'm Ahmed Eldessouki. I'm 31 years old from Cairo, Egypt currently living in ",r.a.createElement("b",null,"Istanbul, Turkey"),". I looking for a new opportunity as a",r.a.createElement("em",null," Front-End Developer"),". I graduated from University Of Wales. I worked at RoomMe as an entry level Front-End Developer. I'm a very passionate about Front-End Developer. Always developing myself. A strength of mine, is my ability to be observant of small details and to stay up-to-date with the newest ",r.a.createElement("em",null,"technologies and techniques"),"."))))},h=(a(357),a(305)),g=(a(358),a(28)),b=a(7),j=a(36),N=a(155),v=a(6),O=function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("project actions....:",e),r.collection("projects").doc("".concat(e.id)).delete().then((function(){v.b.success('Project "'.concat(e.projectName,'" deleted')),t({type:"PROJECT_DELETED"})})).catch((function(e){v.b.error("Project Deletion Failed"),t({type:"PROJECT_DELETE_ERROR",err:e})}))}},y=a(53),S=a(54),w=a(61),D=a(59),T=a(58),C=(a(362),function(e){Object(D.a)(a,e);var t=Object(T.a)(a);function a(){var e;return Object(y.a)(this,a),(e=t.call(this)).state={show:!1},e.handleShow=e.handleShow.bind(Object(w.a)(e)),e.handleClose=e.handleClose.bind(Object(w.a)(e)),e.handleDelete=e.handleDelete.bind(Object(w.a)(e)),e}return Object(S.a)(a,[{key:"handleClose",value:function(){this.setState({show:!1})}},{key:"handleDelete",value:function(){this.props.project?this.props.deleteProject(this.props.project):this.props.contact?this.props.deleteMessage(this.props.contact):this.props.notification&&this.props.deleteNotification(this.props.notification),this.setState({show:!1})}},{key:"handleShow",value:function(){this.setState({show:!0})}},{key:"render",value:function(){var e=this.props.project||this.props.contact||this.props.notification?{display:""}:{display:"none"},t=this.props.title;return r.a.createElement("div",{className:"PopUp",style:{display:"none"}},r.a.createElement("button",{className:"toggle-button primary",onClick:this.handleShow},r.a.createElement(p.c,null)),r.a.createElement("div",{className:"static-modal"},r.a.createElement("header",null,r.a.createElement("h1",null,"Warning")),r.a.createElement("h2",null,"Do you want to delete this ",t),r.a.createElement("footer",null,r.a.createElement("button",{onClick:this.handleClose},"No"),r.a.createElement("button",{className:"danger",style:{HIDE:e},onClick:this.handleDelete},"Yes"))))}}]),a}(n.Component)),P=Object(b.b)(null,(function(e){return{deleteProject:function(t){return e(O(t))},deleteMessage:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("message actions....:",e),r.collection("contactedMe").doc("".concat(e.id)).delete().then((function(){v.b.success('Message from "'.concat(e.contactName,'" is no longer exits')),t({type:"MESSAGE_DELETED"})})).catch((function(e){v.b.error("Error! Message Still Exists"),t({type:"MESSAGE_DELETE_ERROR",err:e})}))}}(t))},deleteNotification:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("notification actions....:",e),r.collection("notifications").doc("".concat(e.id)).delete().then((function(){v.b.success("Notification deleted"),t({type:"NOTIFICATION_DELETED"})})).catch((function(e){v.b.error("Notification Deletion Failed"),t({type:"NOTIFICATION_DELETE_ERROR",err:e})}))}}(t))}}}))(C),R=a(198),L=a.n(R),_=Object(b.b)((function(e){return{auth:e.firebase.auth}}),(function(e){return{deleteProject:function(t){return e(O(t))}}}))((function(e){var t=e.project,a=e.auth,n=Object(h.a)(e,["project","auth"]);return r.a.createElement("div",null,r.a.createElement("div",{className:"ProjectSummary"},a.uid?r.a.createElement("div",{className:"icons-svg"},r.a.createElement(j.b,{to:"/edit/".concat(t.id),key:t},r.a.createElement(g.g,null)),r.a.createElement(P,{project:t,title:"Project"})):null,t.projectLogo[0]?r.a.createElement("img",{alt:"Project's logo",src:"https://images.weserv.nl/?url=".concat(t.projectLogo[0])||!1}):null,r.a.createElement(j.b,{to:n.to,key:n.key},r.a.createElement("h1",{style:{color:"cornflowerblue"}},t.projectName))))})),A=function(e){var t=e.projectsData,a=Object(n.useState)(window.innerHeight),c=Object(i.a)(a,2),o=c[0],l=c[1];return Object(n.useEffect)((function(){l(window.innerHeight)}),[l]),r.a.createElement("div",{className:"Projects",style:{maxHeight:o}},r.a.createElement("h1",null,"My Projects"),r.a.createElement("div",{className:"cards-wrapper",style:{maxHeight:o}},t&&t.map((function(e){return r.a.createElement(_,{project:e,to:"/projects/".concat(e.id),key:e.id})}))))},k=a(4),I=(a(364),a(18)),F=a(20),M={contactName:"",email:"",phoneNumber:"",description:""},U=function(e){Object(D.a)(a,e);var t=Object(T.a)(a);function a(){var e;return Object(y.a)(this,a),(e=t.call(this)).state=Object(k.a)({},M),e}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props,t=e.errors,a=e.touched,n=e.isSubmitting,c=e.handleChange,o=e.contError,i=e.contactName,l=e.email,s=e.phoneNumber,m=e.description;return r.a.createElement("div",{className:"ContactMe"},r.a.createElement("h1",null,"Contact Me"),r.a.createElement(I.b,{id:"ContactMe"},r.a.createElement("div",{className:"first-container"},r.a.createElement("label",{className:"field-container",htmlFor:"contactName"},r.a.createElement("div",{className:"input-svg"},r.a.createElement(g.a,null),r.a.createElement(I.a,{name:"contactName",id:"contactName",value:i,placeholder:"Enter your name"})),t.contactName&&a.contactName?r.a.createElement("p",{className:"error-message"},t.contactName):null),r.a.createElement("div",{className:"field-container"},r.a.createElement("label",{className:"input-svg",htmlFor:"email"},r.a.createElement(p.b,null),r.a.createElement(I.a,{name:"email",id:"email",value:l,type:"email",placeholder:"Email Address"})),t.email&&a.email?r.a.createElement("div",{className:"error-message"},t.email):null),r.a.createElement("label",{className:"field-container",htmlFor:"phoneNumber"},r.a.createElement("div",{className:"input-svg"},r.a.createElement(g.h,null),r.a.createElement(I.a,{name:"phoneNumber",id:"phoneNumber",type:"tel",value:s,placeholder:"Enter Your Phone Number"})),t.phoneNumber&&a.phoneNumber?r.a.createElement("label",{className:"error-message"},t.phoneNumber):null)),r.a.createElement("label",{className:"second-container",htmlFor:"description"},r.a.createElement("textarea",{name:"description",id:"description",onChange:c,value:m,className:"textArea",required:!0})),r.a.createElement("button",{type:"submit",disabled:n},"Submit"),o?r.a.createElement("div",{className:"error-message"},o):null),n?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement("span",null,"Thank you for contacting me"),r.a.createElement(E.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:n}),r.a.createElement("span",null,"I will get back to you soon")):null)}}]),a}(n.Component),x=Object(I.c)({validationSchema:F.a().shape({contactName:F.c().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:F.c().email("Invalid email").required("Required"),phoneNumber:F.c().min(11,"Too Short!").max(13,"Too Long!").matches(/^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/,"Phone number is not valid"),description:F.c()}),enableReinitialize:!0,mapPropsToValues:function(e){return Object(k.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){var a=t.setErrors,n=t.resetForm,r=t.setSubmitting;setTimeout((function(){"admin"===e.name?a({contactName:"Nice try!"}):(e.contactedMe(e),n({}),document.getElementById("ContactMe").reset()),r(!1)}),2e3)},displayName:"ContactMe"})(U),G=Object(b.b)((function(e){return{contError:e.contactedMe.contError}}),(function(e){return{contactedMe:function(t){return e(function(e){return function(t,a,n){n.getFirebase;(0,n.getFirestore)().collection("contactedMe").add({contactName:e.contactName,email:e.email,phoneNumber:e.phoneNumber,description:e.description,sentAt:new Date}).then((function(){v.b.success('Thanks "'.concat(e.contactName,'" For Contacting Me')),t({type:"MESSAGE_SENT",contact:e})})).catch((function(e){v.b.error("Sorry, I Didn't Get Your Message. Due to an Error"),t({type:"MESSAGE_NOT_SENT",err:e})}))}}(t))}}}))(x),z=(a(366),function(){return r.a.createElement("div",{className:"MyFooter"},r.a.createElement("div",{className:"separator"}),r.a.createElement("div",{className:"left-container"},r.a.createElement("a",{href:"https://www.linkedin.com/in/ahmedeldessouki/"},r.a.createElement(g.f,null)),r.a.createElement("a",{href:"https://www.github.com/ahmedeldessouki/"},r.a.createElement(g.c,null)),r.a.createElement("a",{href:"https://plus.google.com/+AhmedElDessouki1"},r.a.createElement(g.d,null)),r.a.createElement("a",{href:"https://www.instagram.com/eldessouki.a"},r.a.createElement(g.e,null)),r.a.createElement("a",{href:"https://www.facebook.com/ahmed.eldessouki.39"},r.a.createElement(g.b,null)),r.a.createElement("a",{href:"https://www.twitter.com/nem0adam"},r.a.createElement(g.k,null))),r.a.createElement("div",{className:"center-container"},r.a.createElement("img",{className:"react-logo",alt:"",src:L.a}),r.a.createElement(g.j,{style:{color:"hotpink",alignSelf:"center"}})),r.a.createElement("div",{className:"right-container"},r.a.createElement(g.i,null),r.a.createElement("p",null,"2019 Ahmed ElDessouki")))}),B=a(299),q=a.n(B),J=a(32),H=a(21),W=(a(276),a(148)),V=a.n(W),Y=Object(b.b)(null,(function(e){return{signOut:function(){return e((function(e,t,a){(0,a.getFirebase)().auth().signOut().then((function(){v.b.success("See You Soon"),e({type:"SIGNOUT_SUCCESS"})})).catch((function(t){v.b.error("Shit, You Can't Logout"),e({type:"SIGNOUT_FAILED",err:t})}))}))}}}))((function(e){return r.a.createElement("div",{className:"Navigation"},r.a.createElement("div",null,r.a.createElement("img",{src:V.a,alt:"Ahmed ElDessouki",style:{width:"150px",padding:"0"}})),r.a.createElement("div",null,r.a.createElement("a",{href:"/"},"Home"),r.a.createElement("a",{href:"/#projects"},"Projects"),r.a.createElement("a",{href:"/#contactMe"},"Contact Me"),r.a.createElement("a",{href:"/dashboard"},"DashBoard"),r.a.createElement("a",{href:"/create-project"},"Create Project"),r.a.createElement("a",{href:"/signup"},"SignUp"),r.a.createElement("a",{onClick:e.signOut,href:"/"},"SignOut")))})),X=function(){return r.a.createElement("div",{className:"myNav-container"},r.a.createElement("div",{className:"my-name"},r.a.createElement("img",{src:V.a,alt:"Ahmed Eldessouki",style:{width:"267px",padding:"0px 0px 15px 20px"}})),r.a.createElement("div",{className:"myNav"},r.a.createElement("a",{className:"myNav-item",href:"/"},"Home"),r.a.createElement("a",{className:"myNav-item",href:"/#projects"},"Projects"),r.a.createElement("a",{className:"myNav-item",href:"/#contactMe"},"Contact Me")))},$=Object(H.d)(Object(b.b)((function(e){return{projectsData:e.firestore.ordered.projects,auth:e.firebase.auth,profile:e.firebase.profile}})),Object(J.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]}]))((function(e){var t=e.projectsData,a=e.auth,c=e.profile,o=Object(n.useState)((function(){})),l=Object(i.a)(o,2),s=l[0],m=l[1];return Object(n.useEffect)((function(){m(a.uid?r.a.createElement(Y,{profile:c}):r.a.createElement(X,null))}),[a.uid,c]),r.a.createElement("div",{className:"Home"},r.a.createElement("header",{className:"Home-header",id:"1"},s,r.a.createElement(f,null)),r.a.createElement(q.a,{StopPosition:0,ShowAtPosition:150,EasingType:"easeOutCubic",AnimationDuration:500,ContainerClassName:"ScrollUpButton__Container",TransitionClassName:"ScrollUpButton__Toggled"}),r.a.createElement("main",{id:"projects"},r.a.createElement(A,{projectsData:t})),r.a.createElement("footer",{id:"contactMe"},r.a.createElement(G,null),r.a.createElement(z,null)))})),K=a(12),Q=(a(518),function(e){var t=e.notifications;return r.a.createElement("div",{className:"Notifications"},r.a.createElement("h1",null,"Notification"),r.a.createElement("div",{className:"notification-card"},r.a.createElement("div",null,r.a.createElement("ul",{className:"items"},t&&t.map((function(e){return r.a.createElement("li",{key:e.id},r.a.createElement("div",{className:Array.from(e.content.split(" ",3)).join("-")},r.a.createElement(P,{notification:e,title:"Notification"}),r.a.createElement("h4",null,e.user),r.a.createElement("h6",null,e.content),r.a.createElement("span",null,e.time.toDate().toDateString())))}))))))}),Z=(a(519),a(520),a(521),a(300)),ee=function(e){var t=e.contact;return r.a.createElement("div",{className:"MessagesSummary"},r.a.createElement(P,{contact:t,title:"Message"}),r.a.createElement(j.b,{to:e.to,key:e.id},r.a.createElement("h3",null,t.contactName),r.a.createElement(Z.Scrollbars,{className:"my-scroller"},r.a.createElement("p",{className:"description"},t.description)),r.a.createElement("span",null,t.sentAt.toDate().toDateString())))},te=function(e){var t=e.messagesData;return r.a.createElement("div",{className:"Messages"},r.a.createElement("h1",null,"My Messages"),r.a.createElement("div",{className:"cards-wrapper"},t&&t.map((function(e){return r.a.createElement(ee,{contact:e,to:"/Messages/".concat(e.id),key:e.id})}))))},ae=Object(H.d)(Object(b.b)((function(e){return{projectsData:e.firestore.ordered.projects,isSubmitting:e.firebase.profile.isLoaded,messagesData:e.firestore.ordered.contactedMe,auth:e.firebase.auth,notifications:e.firestore.ordered.notifications}})),Object(J.firestoreConnect)([{collection:"projects",orderBy:["createdAt","desc"]},{collection:"contactedMe",orderBy:["sentAt","desc"]},{collection:"notifications",limit:10,orderBy:["time","desc"]}]))((function(e){e.isLoaded;var t=e.isSubmitting,a=e.auth,n=e.projectsData,c=e.notifications,o=e.messagesData;return r.a.createElement("div",null,a.uid?r.a.createElement("div",null,t?r.a.createElement("div",{className:"Dashboard"},r.a.createElement(Y,null),r.a.createElement("main",null,r.a.createElement("div",{className:"Dashboard-items"},r.a.createElement("div",{className:"first-container"},r.a.createElement(A,{projectsData:n})),r.a.createElement("div",{className:"second-container"},r.a.createElement(Q,{notifications:c})))),r.a.createElement("div",null,r.a.createElement(te,{messagesData:o}))):r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(E.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!t}),"Loading...")):r.a.createElement(K.a,{to:"/signin"}))})),ne=(a(537),Object(H.d)(Object(b.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.contactedMe;return{message:n?n[a]:null,auth:e.firebase.auth}})),Object(J.firestoreConnect)([{collection:"contactedMe"}]))((function(e){var t=e.message;return t?r.a.createElement("div",{className:"MessageDetails"},r.a.createElement(Y,null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"first-container"},r.a.createElement("div",{className:"double-container"},r.a.createElement("h2",null,r.a.createElement("a",{href:"mailto:".concat(t.email)},t.email)),r.a.createElement("h2",null,t.phoneNumber)),r.a.createElement("p",null,t.description)),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",null,"Author: ",t.contactName),r.a.createElement("div",null,"Created At: ",t.sentAt.toDate().toDateString())))):r.a.createElement("div",null,e.auth.uid?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(E.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!0}),"Loading..."):r.a.createElement(K.a,{to:"/signin"}))}))),re=(a(278),Object(b.b)((function(e){return{authError:e.auth.authError,auth:e.firebase.auth}}),(function(e){return{signIn:function(t){return e((a=t,function(e,t,n){(0,n.getFirebase)().auth().signInWithEmailAndPassword(a.email,a.password).then((function(){v.b.success('Welcome "'.concat(a.email,'"')),e({type:"LOGIN_SUCCESS"})})).catch((function(t){v.b.error("Login Failed, Incorrect Credentials!!"),e({type:"LOGIN_ERROR",err:t})}))}));var a}}}))((function(e){var t=e.signIn,a=e.auth,c=e.authError,o=s("Enter Your Email"),l=s("Enter Your Password");function s(e){var t=Object(n.useState)(e),a=Object(i.a)(t,2),r=a[0],c=a[1];return{value:r,onChange:function(e){c(e.target.value)}}}var m=a.uid?r.a.createElement(Y,null):r.a.createElement(X,null);return r.a.createElement("div",null,a.uid?r.a.createElement(K.a,{to:"/"}):r.a.createElement("div",{className:"SignIn"},m,r.a.createElement("h1",null,"Sign-in"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault();var a={email:o.value,password:l.value};t(a)}},r.a.createElement("div",{className:"field-container"},r.a.createElement("input",o),r.a.createElement("input",Object.assign({},l,{type:"password"}))),r.a.createElement("div",null,r.a.createElement("button",{type:"submit"},"SignIn"),c?r.a.createElement("p",null,c):null))))}))),ce={firstName:"",lastName:"",email:"",password:"",confirmPassword:""},oe=function(e){Object(D.a)(a,e);var t=Object(T.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state=Object(k.a)({},ce),e}return Object(S.a)(a,[{key:"render",value:function(){var e=this.props,t=e.errors,a=e.touched,n=e.isSubmitting,c=e.authError,o=e.auth,i=e.handleSubmit,l=e.firstName,s=e.lastName,m=e.email,u=e.password,d=e.confirmPassword;return r.a.createElement("div",null,o.uid?r.a.createElement("div",{className:"SignUp"},r.a.createElement(Y,{title:"Registration"}),r.a.createElement("h1",null,"Sign up"),r.a.createElement(I.b,{id:"#sign-up",onSubmit:i},r.a.createElement("div",{className:"double-container"},r.a.createElement("div",{className:"field-container"},r.a.createElement(I.a,{name:"firstName",value:l,placeholder:"First Name"}),t.firstName&&a.firstName?r.a.createElement("p",{className:"error-message"},t.firstName):null),r.a.createElement("div",{className:"field-container"},r.a.createElement(I.a,{name:"lastName",value:s,placeholder:"Last Name"}),t.lastName&&a.lastName?r.a.createElement("div",{className:"error-message"},t.lastName):null)),r.a.createElement("div",{className:"field-container"},r.a.createElement(I.a,{name:"email",type:"email",value:m,placeholder:"Email Address"}),t.email&&a.email?r.a.createElement("div",{className:"error-message"},t.email):null),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",{className:"field-container"},r.a.createElement(I.a,{name:"password",type:"password",value:u,placeholder:"Enter Password"}),t.password&&a.password?r.a.createElement("div",{className:"error-message"},t.password):null),r.a.createElement("div",{className:"field-container"},r.a.createElement(I.a,{name:"confirmPassword",type:"password",value:d,placeholder:"Re-Enter Password"}),t.confirmPassword&&a.confirmPassword?r.a.createElement("div",{className:"error-message"},t.confirmPassword):null),c?r.a.createElement("div",{className:"error-message"},c):null),r.a.createElement("button",{type:"submit",disabled:n},"Submit")),n?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(E.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:n}),"Loading..."):null):r.a.createElement(K.a,{to:"/signin"}))}}]),a}(n.Component),ie=Object(I.c)({validationSchema:F.a().shape({firstName:F.c().min(2,"Too Short!").max(50,"Too Long!").required("Required"),lastName:F.c().min(2,"Too Short!").max(50,"Too Long!").required("Required"),email:F.c().email("Invalid email").required("Required"),password:F.c().min(6,"Too Short!").required("Required"),confirmPassword:F.c().oneOf([F.b("password"),null],"Passwords don't match").required("Confirm Password is required")}),mapPropsToValues:function(e){return Object(k.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){setTimeout((function(){"admin"===e.firstName?t.setErrors({firstName:"Nice try!"}):"admin"===e.lastName?t.setErrors({lastName:"Nice try!"}):(e.signUp(e),document.getElementById("sign-up").reset(),t.resetForm()),t.setSubmitting(!1)}),2e3)},displayName:"SignUp"})(oe),le=Object(b.b)((function(e){return{auth:e.firebase.auth,authError:e.auth.authError}}),(function(e){return{signUp:function(t){return e((a=t,function(e,t,n){var r=n.getFirebase,c=n.getFirestore,o=r(),i=c();o.auth().createUserWithEmailAndPassword(a.email,a.password).then((function(e){return i.collection("users").doc(e.user.uid).set({firstName:a.firstName,lastName:a.lastName,initials:a.firstName[0]+a.lastName[0]})})).then((function(){v.b.success('Welcome "'.concat(a.email,'" to The Club')),e({type:"SIGNUP_SUCCESS"})})).catch((function(t){v.b.error("SignUp Failed"),e({type:"SIGNUP_ERROR",err:t})}))}));var a}}}))(ie),se=(a(538),a(539),a(301)),me=Object(H.d)(Object(b.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects;return{project:n?n[a]:null,profile:e.firebase.profile,auth:e.firebase.auth}})),Object(J.firestoreConnect)([{collection:"projects"}]))((function(e){var t=e.project,a=e.auth,n=e.profile,c=a.uid?r.a.createElement(Y,{auth:a,title:"Project Details",profile:n}):r.a.createElement(X,null);return window.scrollTo(0,0),t?r.a.createElement("div",{className:"bg-img"},r.a.createElement("div",{className:"ProjectDetails"},c,r.a.createElement("div",{className:"details-container"},r.a.createElement("div",{className:"logos-container"},null!==t.projectLogo?r.a.createElement(se.Carousel,null,t.projectLogo.map((function(e,t){return r.a.createElement("div",{key:t},r.a.createElement("img",{className:"img-display",alt:"project's pictures",src:"https://images.weserv.nl/?url=".concat(e)}))}))):null),r.a.createElement("div",{className:"details"},r.a.createElement("div",{className:"first-container"},r.a.createElement("h2",null,r.a.createElement("a",{href:t.projectLink},t.projectName)),r.a.createElement("p",null,t.description)),r.a.createElement("div",{className:"double-container"},r.a.createElement("div",null,"Author: ",t.authorFirstName," ",t.authorLastName),r.a.createElement("div",null,"Created At: ",t.createdAt.toDate().toDateString())))),r.a.createElement("footer",null,r.a.createElement(G,null),r.a.createElement(z,null)))):r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(E.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:!0}),"Loading...")})),ue=(a(544),a(304)),de={projectName:"",projectLink:"",description:""},pe=function(e){Object(D.a)(a,e);var t=Object(T.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).handleDrop=function(e,t){if(n.setState({isLoading:!0}),e&&e.length>0&&e[0].size<8e6){var a=e.map((function(e){var t,a=[];return(t=new FormData).append("file",e),t.append("tags","codeinfuse, small, gist"),t.append("upload_preset","obaxyyex"),t.append("api_key","579628475278557"),t.append("timestamp",Date.now()/1e3||0),d.a.post(" https://api.cloudinary.com/v1_1/ahmedeldessouki/image/upload",t,{headers:{"X-Requested-With":"XMLHttpRequest"}}).then((function(e){v.b.success("Images Upload Was Successful");var t=e.data;n.state.imageDropArray.push(t),n.state.imageDropArray.map((function(e){a.push(e.secure_url),n.props.setValues(Object(k.a)(Object(k.a)({},n.props.values),{},{projectLogos:a}))}))})).catch((function(e){v.b.error("Sorry, Images Didn't Upload!"),console.error(e)}))}));d.a.all(a).then((function(){n.setState({isLoading:!1}),n.props.setValues(Object(k.a)({},n.props.values))})).catch((function(e){console.error(e)}))}t&&t.length>0&&t[0].Size>8e6&&alert("This File is too big")},n.state=Object(k.a)({imSrc:null,imageDropArray:[],projectLogos:[],isLoading:!1},de),n.handleDrop=n.handleDrop.bind(Object(w.a)(n)),n}return Object(S.a)(a,[{key:"render",value:function(){var e=this.state,t=e.imageDropArray,a=e.isLoading,n=this.props,c=n.errors,o=n.touched,i=n.isSubmitting,l=n.auth,s=n.project,m=n.handleChange,u=n.description,d=n.projectLink,p=n.projectName,f=a||i;return r.a.createElement("div",null,l.uid?r.a.createElement("div",{className:"CreateProject"},r.a.createElement(Y,{title:"Create Project"}),r.a.createElement("h1",null,"Create New Project"),r.a.createElement("div",{className:"wrapper-container"},0!==t.length?r.a.createElement("div",{className:"maping"},t.map((function(e,t){return r.a.createElement("img",{alt:"",key:t,src:e.url})}))):null,r.a.createElement(I.b,{id:"createProject"},r.a.createElement(ue.a,{onDrop:this.handleDrop,accept:"image/*",multiple:!0,maxSize:8e6},(function(e){var t=e.getRootProps,a=e.getInputProps;return r.a.createElement("div",Object.assign({},t(),{className:"drop-zone-styles"}),r.a.createElement("span",null,"drop image(s)"),r.a.createElement("input",Object.assign({type:"file"},a())))})),r.a.createElement("div",{className:"field-container"},r.a.createElement(I.a,{type:"text",value:p,placeholder:s?s.projectName:"Project Name",name:"projectName"})),c.projectName&&o.projectName?r.a.createElement("p",{className:"error-message"},c.projectName):null,r.a.createElement("div",{className:"field-container"},r.a.createElement(I.a,{type:"url",value:d,placeholder:s?s.projectLink:"Project Link",name:"projectLink"})),r.a.createElement("textarea",{placeholder:s?s.description:"Project Description",name:"description",value:u,onChange:m}),r.a.createElement("button",{type:"submit",disabled:i},s?"Edit":"Create"," Project"))),f?r.a.createElement("div",{className:"my-spinner-container"},r.a.createElement(E.BarLoader,{className:"my-spinner",sizeUnit:"px",size:150,color:"#d4dff6",loading:f}),"Loading..."):null,r.a.createElement(z,null)):r.a.createElement(K.a,{to:"/signin"}))}}]),a}(n.Component),Ee=Object(I.c)({validationSchema:F.a().shape({projectName:F.c(),description:F.c()}),enableReinitialize:!0,mapPropsToValues:function(e){return Object(k.a)({},e)},mapValuesToPayload:function(e){return e},handleSubmit:function(e,t){setTimeout((function(){e.project?e.updateProject(e):e.createProject(e),t.setSubmitting(!1),e.history.push("/dashboard")}),2e3)},displayName:"createProject"})(pe),fe=Object(b.b)((function(e,t){var a=t.match.params.id,n=e.firestore.data.projects,r=n?n[a]:null;return{auth:e.firebase.auth,project:r}}),(function(e){return{createProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)(),c=a().firebase.profile,o=a().firebase.auth.uid;r.collection("projects").add({projectName:e.projectName,projectLink:e.projectLink,description:e.description,projectLogo:Object(N.a)(e.projectLogos),authorFirstName:c.firstName,authorLastName:c.lastName,authorId:o,createdAt:new Date}).then((function(){v.b.success('Project "'.concat(e.projectName,'" Created')),t({type:"CREATE_PROJECT",project:e})})).catch((function(e){v.b.error("Project Creation Failed"),t({type:"CREATE_PROJECT_ERROR",err:e})}))}}(t))},updateProject:function(t){return e(function(e){return function(t,a,n){n.getFirebase;var r=(0,n.getFirestore)();console.log("project actions....:",e),r.collection("projects").doc("".concat(e.match.params.id)).update({projectName:e.projectName?e.projectName:e.project.projectName,projectLink:e.projectLink?e.projectLink:e.project.projectLink,projectLogo:e.projectLogos?Object(N.a)(e.projectLogos):Object(N.a)(e.project.projectLogo),description:e.description?e.description:e.project.description}).then((function(){v.b.success('Project "'.concat(e.projectName,'" Updated')),t({type:"PROJECT_UPDATED",project:e})})).catch((function(e){t({type:"PROJECT_NOT_UPDATED",err:e}),v.b.error("Project Didn't Update")}))}}(t))}}}))(Ee);a(545);var he=function(){return Object(n.useEffect)((function(){document.title="Ahmed Eldessouki"})),r.a.createElement("div",{className:"App"},r.a.createElement(j.a,null,r.a.createElement(K.d,null,r.a.createElement(K.b,{path:"/",exact:!0,component:$}),r.a.createElement(K.b,{path:"/dashboard",component:ae}),r.a.createElement(K.b,{path:"/projects/:id",component:me}),r.a.createElement(K.b,{path:"/messages/:id",component:ne}),r.a.createElement(K.b,{path:"/signin",component:re}),r.a.createElement(K.b,{path:"/SignUp",component:le}),r.a.createElement(K.b,{path:"/create-project",component:fe}),r.a.createElement(K.b,{path:"/edit/:id",component:fe}),r.a.createElement(K.a,{from:"*",to:"/"}))),r.a.createElement(v.a,{autoClose:2e3}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge={authError:null},be=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ge,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"LOGIN_SUCCESS":return console.log("login Success"),Object(k.a)(Object(k.a)({},e),{},{authError:null});case"LOGIN_ERROR":return console.log("login error"),Object(k.a)(Object(k.a)({},e),{},{authError:t.err.message});case"SIGNOUT_SUCCESS":return console.log("SIGN OUT SUCCESS"),Object(k.a)(Object(k.a)({},e),{},{authError:null});case"SIGNOUT_FAILED":return console.log("Sign Out Error",t.err.message),Object(k.a)(Object(k.a)({},e),{},{authError:t.err.message});case"SIGNUP_SUCCESS":return Object(k.a)(Object(k.a)({},e),{},{authError:null});case"SIGNUP_ERROR":return console.log("signUp failed"),Object(k.a)(Object(k.a)({},e),{},{authError:t.err.message});default:return e}},je={projects:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}]},Ne=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:je,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CREATE_PROJECT":return console.log("project has been created",t.project),Object(k.a)({},e);case"CREATE_PROJECT_ERROR":return console.log("create project error",t.err),Object(k.a)(Object(k.a)({},e),{},{projError:t.err.message});case"PROJECT_UPDATED":return console.log("project successfully updated",t.project),Object(k.a)({},e);case"PROJECT_NOT_UPDATED":return console.log("project did not update",t.err),Object(k.a)(Object(k.a)({},e),{},{projError:t.err.message});case"PROJECT_DELETED":return console.log("project successfully deleted"),null;case"PROJECT_DELETE_ERROR":return console.log("project still exists",t.err),{projError:t.err.message};default:return e}},ve={contError:null,contactedMe:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}]},Oe=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ve,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"MESSAGE_SENT":return Object(k.a)(Object(k.a)({},e),{},{contError:null});case"MESSAGE_NOT_SENT":return Object(k.a)(Object(k.a)({},e),{},{contError:t.err.message});case"MESSAGE_DELETED":return console.log("Message no longer exists"),null;case"MESSAGE_DELETE_ERROR":return console.log("Message cannot be sent",t.err),Object(k.a)(Object(k.a)({},e),{},{contError:t.err.message});default:return e}},ye={projects:[{id:1,projectName:"cong dong",description:"jasd asfddasf "},{id:2,projectName:"cong dong",description:"jasd asfddasf "},{id:3,projectName:"cong dong",description:"jasd asfddasf "}],projError:null,downloadUrls:[]},Se=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ye,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"PROJ_LOGO_ADDED":return console.log("PROJ_LOGO_ADDED",t.file,t.downloadUrl),Object(k.a)(Object(k.a)({},e),{},{downloadUrls:[t.downloadUrl.toString()]});case"PROJ_LOGO_NOT_ADDED":return console.log("PROJ_LOGO_NOT_ADDED",t.err),Object(k.a)(Object(k.a)({},e),{},{projError:t.err.message});default:return e}},we=a(111),De=function(e,t){switch(t.type){case"NOTIFICATION_DELETED":return console.log("NOTIFICATION_DELETED"),null;case"NOTIFICATION_DELETE_ERROR":return console.log("NOTIFICATION_DELETE_ERROR",t.err),{notificationError:t.err.message};default:return null}},Te=Object(H.c)({auth:be,project:Ne,contactedMe:Oe,projectLogos:Se,firestore:we.firestoreReducer,firebase:J.firebaseReducer,notifications:De}),Ce=a(303),Pe=a(154),Re=a.n(Pe);a(572),a(575),a(578);Re.a.initializeApp({apiKey:"AIzaSyAABosRQdWuCOmy4ylwUjdi3Rlz3ngRcfM",authDomain:"ahmedeldessouki-a7488.firebaseapp.com",databaseURL:"https://ahmedeldessouki-a7488.firebaseio.com",projectId:"ahmedeldessouki-a7488",storageBucket:"gs://ahmedeldessouki-a7488.appspot.com",storage:"gs://ahmedeldessouki-a7488.appspot.com",messagingSenderId:"928636667018"}),Re.a.firestore();var Le=Re.a,_e=Object(H.e)(Te,Object(H.d)(Object(H.a)(Ce.a.withExtraArgument({getFirebase:J.getFirebase,getFirestore:we.getFirestore})),Object(we.reduxFirestore)(Le),Object(J.reactReduxFirebase)(Le,{useFirestoreForProfile:!0,userProfile:"users",attachAuthIsReady:!0})));_e.firebaseAuthIsReady.then((function(){o.a.render(r.a.createElement(b.a,{store:_e},r.a.createElement(he,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}))}},[[306,1,2]]]);
//# sourceMappingURL=main.d767d2f9.chunk.js.map