(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{18:function(e,t,a){e.exports=a(38)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},27:function(e,t,a){},28:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},31:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},38:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(15),c=a.n(r),l=(a(23),a(6)),i=a(1),s=a(5),u=a(3),m=a(2),d=a(4),p=(a(24),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).shouldComponentUpdate=function(){return!1},a.render=function(){return o.a.createElement("div",{className:"LeftSide"},a.props.content)},a}return Object(d.a)(t,e),t}(o.a.Component));a(25);var g=function(e){var t=e.content,a=e.templateName;return Object(n.useEffect)(function(){var e=document.querySelector(".".concat(a," .RightSide textarea"));e.style.height="10px",e.style.height=e.scrollHeight+10+"px"}),o.a.createElement("div",{className:"RightSide"},t)};a(26);var h=function(e){var t=e.name,a=e.id,n=e.getRadio,r=e.content;return o.a.createElement("div",{className:"Radio "},o.a.createElement("input",{className:r,type:"radio",name:t,id:a,content:r,onChange:n}),o.a.createElement("label",{htmlFor:a},r))},y=(a(27),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){var e=a.props,t=e.getRadio,n=e.className,r=e.IDs,c=e.legend,l=r.map(function(e){return o.a.createElement(h,{content:e,name:n,id:e+Math.random(),getRadio:t,key:n+e})});return o.a.createElement("div",{className:"RadioSection "+n},l,o.a.createElement("legend",null,c))},a}return Object(d.a)(t,e),t}(o.a.Component)),v=(a(28),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).shouldComponentUpdate=function(e){return a.props.toggleCopyAnimation!==e.toggleCopyAnimation},a.render=function(){var e=a.props,t=e.toggleCopyCmd,n=e.toggleCopyAnimation,r=e.className;return o.a.createElement("div",{className:"CopySection "+r},o.a.createElement("button",{onClick:t,className:n},"Copy"),o.a.createElement("legend",null))},a}return Object(d.a)(t,e),t}(o.a.Component));a(29);var f=function(e){var t=e.handleReset,a=e.className;return o.a.createElement("div",{className:"ResetSection "+a},o.a.createElement("input",{type:"reset",value:"Reset",onClick:t}),o.a.createElement("legend",null))};a(30);var b=function(e){var t=e.getTextInput,a=e.className,n=e.placeholder,r=e.pattern,c=e.maxLength,l=e.legend;return o.a.createElement("div",{className:"TextFieldSection "+a},o.a.createElement("input",{id:a,type:"text",autoComplete:"off",placeholder:n,pattern:r,maxLength:c||"",onChange:t,required:!0}),o.a.createElement("legend",null,l))};var E=function(e,t){return function(a){function n(){var a,o;Object(i.a)(this,n);for(var r=arguments.length,c=new Array(r),l=0;l<r;l++)c[l]=arguments[l];return(o=Object(u.a)(this,(a=Object(m.a)(n)).call.apply(a,[this].concat(c)))).shouldComponentUpdate=t,o.componentDidMount=function(){document.querySelector(".".concat(e.name," .").concat(o.props.textData.Language))&&(document.querySelector(".".concat(e.name," .").concat(o.props.textData.Language)).checked=!0),document.querySelector(".".concat(e.name," .").concat(o.props.textData.Strike)).checked=!0},o.componentWillUpdate=function(){document.querySelector(".".concat(e.name," .").concat(o.props.textData.Strike)).checked=!1},o.componentDidUpdate=function(){document.querySelector(".".concat(e.name," .").concat(o.props.textData.Strike)).checked=!0},o}return Object(d.a)(n,a),Object(s.a)(n,[{key:"render",value:function(){return o.a.createElement(e,this.props)}}]),n}(o.a.Component)},S=(a(31),{French:{S1:["Bonjour",",\nNous avons essay\xe9 de vous contacter aujourd\u2019hui \xe0 l'\xe9gard de votre incident",".\nVeuillez ne pas r\xe9pondre directement \xe0 ce courriel mais nous rappeler au num\xe9ro de votre  Centre d\u2019assistance local.\nCordialement,\nCentre d'Assistance de Bombardier."],S2:["Bonjour",",\nNous avons essay\xe9 de vous contacter aujourd\u2019hui pour la seconde fois \xe0 l'\xe9gard de votre incident",".\nVeuillez ne pas r\xe9pondre directement \xe0 ce courriel mais nous rappeler au num\xe9ro de votre  Centre d\u2019assistance local.\nCordialement,\nCentre d'Assistance de Bombardier."],S3:["Bonjour",",\nNous avons essay\xe9 de vous contacter aujourd\u2019hui pour la troisi\xe8me fois \xe0 l'\xe9gard de votre incident",".\nConstatant l\u2019impossibilit\xe9 de vous joindre ces derniers jours, sans r\xe9ponse de votre part nous serons dans l\u2019obligation de fermer votre billet.\nVeuillez ne pas r\xe9pondre directement \xe0 ce courriel mais nous rappeler au num\xe9ro de votre  Centre d\u2019assistance local.\nCordialement,\nCentre d'Assistance de Bombardier."],Closure:["Bonjour",",\nNous avons essay\xe9 de vous contacter d\xe9j\xe0 trois fois \xe0 l\u2019\xe9gard de votre incident",".\nNous vous contactons aujourd\u2019hui pour vous informer que nous avons ferm\xe9 votre billet.\nDans l\u2019\xe9ventualit\xe9 o\xf9 votre probl\xe8me ne serait pas r\xe9gl\xe9, nous vous invitons \xe0 nous contacter au num\xe9ro habituel afin d\u2019ouvrir un nouveau ticket.\nVeuillez ne pas r\xe9pondre directement \xe0 ce courriel mais communiquer avec nous au num\xe9ro de votre Centre d\u2019assistance local.\nCordialement,\nCentre d\u2019Assistance Bombardier."],Male:" Monsieur",Female:" Mme"},English:{S1:["Dear",",\nWe tried to contact you today about your incident",".\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center."],S2:["Dear",",\nWe tried to contact you today for the second time about your incident",".\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center."],S3:["Dear",",\nWe tried to contact you today for the third time about your incident",".\nNoting the impossibility to reach you these last days, without answer on your part we will be in the obligation to close your ticket.\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center."],Closure:["Dear",",\nWe tried to contact you already three times about your incident",".\nWe are contacting you today to inform you that we have closed your ticket.\nIn the event that your problem is not resolved, we invite you to contact us at the usual number to open a new ticket.\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center."],Male:" Mr",Female:" Madam"}}),C=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){var e=a.props.textData,t=e.Language,n=e.Strike,r=e.Gender,c=e.Name,l=e.Incident;return o.a.createElement("div",{className:"EmailsTemplates"},o.a.createElement(p,{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{className:"Language",legend:"Language",IDs:["English","French"],getRadio:a.props.getRadio}),o.a.createElement(y,{className:"Strike",legend:"Strike",IDs:["Closure","S1","S2","S3"],getRadio:a.props.getRadio}),o.a.createElement(y,{className:"Gender",legend:"Gender",IDs:["Male","Female"],getRadio:a.props.getRadio}),o.a.createElement(b,{className:"Name",legend:"Name",placeholder:"Name",getTextInput:a.props.getTextInput}),o.a.createElement(b,{className:"Incident",legend:"Incident",placeholder:"INC0000000",maxLength:"10",pattern:"(inc|inC|iNC|INC|iNc|INc|Inc|InC)+[0-9]{7}",getTextInput:a.props.getTextInput}),o.a.createElement(v,{toggleCopyAnimation:a.props.textData.copyEmailsTemplates,toggleCopyCmd:function(e){return a.props.toggleCopyCmd(e,a.constructor.name)}}),o.a.createElement(f,{handleReset:a.props.handleReset}))}),o.a.createElement(g,{templateName:"EmailsTemplates",content:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:a.props.textData.copyEmailsTemplates},o.a.createElement("textarea",{value:S[t][n][0]+(""===r?"":S[t][r])+c+S[t][n][1]+l+S[t][n][2],cols:"80",rows:"1",readOnly:!0})))}))},a}return Object(d.a)(t,e),Object(s.a)(t,null,[{key:"shouldComponentUpdate",value:function(e,t){var a=e.textData,n=this.props.textData,o=n.Gender,r=n.Language,c=n.Name,l=n.Incident,i=n.Strike,s=n.copyEmailsTemplates;return o!==a.Gender||r!==a.Language||c!==a.Name||l!==a.Incident||i!==a.Strike||s!==a.copyEmailsTemplates}}]),t}(o.a.Component),k=E(C,C.shouldComponentUpdate),N=(a(32),{StrikeLog:{Closure:"Closing ticket as per 3 strikes process.\nEmailed the user.",S1:"1st contact attempt.",S2:"2nd contact attempt.",S3:"3rd contact attempt."},Voicemail:{None:"\nNo phone number found.",Yes:"\nLeft a voicemail.",No:"\nVoicemail disabled."},Skype:{Yes:"\nMessaged the user on Skype.",No:"\nSkype offline."},Email:{Yes:"\nEmail sent.",No:"\nNo Email found."}}),j=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).render=function(){var e=a.props.textData,t=e.Strike,n=e.Voicemail,r=e.Skype,c=e.Email;return o.a.createElement("div",{className:"LogsTemplates"},o.a.createElement(p,{content:o.a.createElement(o.a.Fragment,null,o.a.createElement(y,{className:"StrikeLog",legend:"Strike",IDs:["Closure","S1","S2","S3"],getRadio:a.props.getRadio}),o.a.createElement(y,{className:"Voicemail",legend:"Voicemail",IDs:["None","Yes","No"],getRadio:a.props.getRadio}),o.a.createElement(y,{className:"Skype",legend:"Skype",IDs:["Yes","No"],getRadio:a.props.getRadio}),o.a.createElement(y,{className:"Email",legend:"Email",IDs:["Yes","No"],getRadio:a.props.getRadio}),o.a.createElement("div",{className:"wrap"},o.a.createElement(v,{toggleCopyAnimation:a.props.textData.copyLogsTemplates,toggleCopyCmd:function(e){return a.props.toggleCopyCmd(e,a.constructor.name)}}),o.a.createElement("legend",null)),o.a.createElement("div",{className:"wrap"},o.a.createElement(f,{handleReset:a.props.handleReset}),o.a.createElement("legend",null)))}),o.a.createElement(g,{templateName:"LogsTemplates",content:o.a.createElement(o.a.Fragment,null,o.a.createElement("div",{className:a.props.textData.copyLogsTemplates},o.a.createElement("textarea",{value:N.StrikeLog[t]+(""===n?"":N.Voicemail[n])+(""===r?"":N.Skype[r])+(""===c?"":N.Email[c]),cols:"80",rows:"1",readOnly:!0})))}))},a}return Object(d.a)(t,e),Object(s.a)(t,null,[{key:"shouldComponentUpdate",value:function(e,t){var a=e.textData,n=this.props.textData,o=n.Strike,r=n.Voicemail,c=n.Skype,l=n.Email,i=n.copyLogsTemplates;return o!==a.Strike||r!==a.Voicemail||c!==a.Skype||l!==a.Email||i!==a.copyLogsTemplates}}]),t}(o.a.Component),O=E(j,j.shouldComponentUpdate),R=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(o)))).state={Strike:"S1",Language:"French",Gender:"",Name:"",Incident:"",Voicemail:"",Skype:"",Email:""},a.getRadio=function(e){var t="StrikeLog"===e.target.name?"Strike":e.target.name;a.setState(Object(l.a)({},t,e.target.className))},a.getTextInput=function(e){if(e.target.checkValidity()){var t="Name"===e.target.id?" "+e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1):" "+e.target.value.toUpperCase();t=" "===t.charAt(t.length-1)?t.slice(0,t.length-1):t,a.setState(Object(l.a)({},e.target.id,t))}else a.setState(Object(l.a)({},e.target.id,""))},a.toggleCopyCmd=function(e,t){a.setState(Object(l.a)({},"copy".concat(t),"inactive")),setTimeout(function(){return a.setState(Object(l.a)({},"copy".concat(t),"active"))},17);var n=document.querySelector(".".concat(t," .RightSide textarea"));n.select(),document.execCommand("copy"),n.setSelectionRange(0,0),setTimeout(function(){return a.handleReset()},700)},a.handleReset=function(){["Gender","Skype","Voicemail","Email"].forEach(function(e){""!==a.state[e]&&(document.querySelector(" .".concat(e," .").concat(a.state[e])).checked=!1)}),document.querySelector(".EmailsTemplates .Name #Name").value="",document.querySelector(".EmailsTemplates .Incident #Incident").value="",a.setState({Language:"French",Gender:"",Name:"",Incident:"",Voicemail:"",Skype:"",Email:""})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(k,{handleReset:this.handleReset,getStrike:this.getStrike,getRadio:this.getRadio,getTextInput:this.getTextInput,textData:this.state,toggleCopyCmd:this.toggleCopyCmd}),o.a.createElement(O,{handleReset:this.handleReset,getStrike:this.getStrike,getRadio:this.getRadio,textData:this.state,toggleCopyCmd:this.toggleCopyCmd}))}}]),t}(o.a.Component),x=a(8),D=(a(33),function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).content=[{Templates:["3 Strikes","Dimension Data"]},{Utenze:["Aerospace","Transportation"]},{Solutions:["All solutions"]},{Drives:["Aerospace"]}],a.renderNavlinks=function(){return a.content.map(function(e,t){return o.a.createElement(w,{key:t,title:Object.keys(e)[0],links:e[Object.keys(e)[0]]})})},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"Navbar"},o.a.createElement("h4",{className:"logo"},"Bombardier"),o.a.createElement("ul",{className:"links-ul"},this.renderNavlinks()))}}]),t}(o.a.Component)),w=function(e){function t(){var e,a;Object(i.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(u.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).renderLinks=function(){var e=a.props.links.map(function(e,t){return o.a.createElement(x.b,{to:"".concat(a.props.title,"-").concat(e),key:t},e)});return o.a.createElement("div",{className:"dropdown"},e)},a}return Object(d.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){return o.a.createElement("li",{className:"open-dropdown"},o.a.createElement("h3",null,this.props.title),this.renderLinks())}}]),t}(o.a.Component),I=D;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(o.a.createElement(function(){return o.a.createElement(x.a,null,o.a.createElement(I,null),o.a.createElement(R,null))},null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,1,2]]]);
//# sourceMappingURL=main.0a04f111.chunk.js.map