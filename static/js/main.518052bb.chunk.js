(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,,,,function(e,t,a){e.exports=a(23)},,,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(8),i=a.n(r),s=(a(15),a(1)),c=a(2),l=a(4),u=a(3),d=a(5),m=a(6);a(16);var g=function(e){var t=e.name,a=e.id,n=e.getRadio;return o.a.createElement("div",{className:"Radio"},o.a.createElement("input",{type:"radio",name:t,id:a,onChange:n}),o.a.createElement("label",{htmlFor:a},a))};a(17);var p=function(e){var t=e.getRadio,a=e.className,n=e.IDs.map(function(e){return o.a.createElement(g,{name:a,id:e,getRadio:t,key:a+e})});return o.a.createElement("div",{className:"RadioSection "+a},n)};a(18);var h=function(e){var t=e.toggleCopyCmd,a=e.toggleCopyAnimation,n=e.className;return o.a.createElement("div",{className:"CopySection "+n},o.a.createElement("button",{onClick:t,className:a},"Copy"))};a(19);var v=function(e){var t=e.handleReset,a=e.className;return o.a.createElement("div",{className:"ResetSection "+a},o.a.createElement("input",{type:"reset",value:"Reset",onClick:t}))};a(20);var y=function e(t){var a=t.getTextInput,n=t.className,r=t.placeholder,i=t.pattern,s=t.maxLength;return o.a.createElement("div",{className:e+n},o.a.createElement("input",{id:n,type:"text",autoComplete:"off",placeholder:r,pattern:i,maxLength:s||"",onChange:a,required:!0}))};a(21);var f=function(e){var t=e.getRadio,a=e.getTextInput,n=e.toggleCopyCmd,r=e.toggleCopyAnimation,i=e.handleReset;return o.a.createElement("div",{className:"LeftSide"},o.a.createElement(p,{className:"Language",IDs:["English","French"],getRadio:t}),o.a.createElement(p,{className:"Strike",IDs:["Closure","S1","S2","S3"],getRadio:t}),o.a.createElement(p,{className:"Gender",IDs:["Male","Female"],getRadio:t}),o.a.createElement(y,{className:"Name",placeholder:"Name here",pattern:"[\\sA-Za-z]{3,}",getTextInput:a}),o.a.createElement(y,{className:"Incident",placeholder:"INC0000000",maxLength:"10",pattern:"(inc|inC|iNC|INC|iNc|INc|Inc|InC)+[0-9]{7}",getTextInput:a}),o.a.createElement(h,{toggleCopyAnimation:r,toggleCopyCmd:n}),o.a.createElement(v,{handleReset:i}))};var C=function(e){var t=e.text;return o.a.createElement("div",{className:"RightSide"},o.a.createElement("textarea",{value:t,cols:"70",rows:"5",readOnly:!0}))},b=(a(22),{French:{S1:["Bonjour",",\nNous avons essay\xe9 de vous contacter aujourd\u2019hui \xe0 l'\xe9gard de votre incident",".\nVeuillez ne pas r\xe9pondre directement \xe0 ce courriel mais nous rappeler au num\xe9ro de votre  Centre d\u2019assistance local.\nCordialement,\nCentre d'Assistance de Bombardier."],S2:["Bonjour",",\nNous avons essay\xe9 de vous contacter aujourd\u2019hui pour la seconde fois \xe0 l'\xe9gard de votre incident",".\nVeuillez ne pas r\xe9pondre directement \xe0 ce courriel mais nous rappeler au num\xe9ro de votre  Centre d\u2019assistance local.\nCordialement,\nCentre d'Assistance de Bombardier."],S3:["Bonjour",",\nNous avons essay\xe9 de vous contacter aujourd\u2019hui pour la troisi\xe8me fois \xe0 l'\xe9gard de votre incident",".\nConstatant l\u2019impossibilit\xe9 de vous joindre ces derniers jours, sans r\xe9ponse de votre part nous serons dans l\u2019obligation de fermer votre billet.\nVeuillez ne pas r\xe9pondre directement \xe0 ce courriel mais nous rappeler au num\xe9ro de votre  Centre d\u2019assistance local.\nCordialement,\nCentre d'Assistance de Bombardier."],Closure:["Bonjour",",\nNous avons essay\xe9 de vous contacter d\xe9j\xe0 trois fois \xe0 l\u2019\xe9gard de votre incident",".\nNous vous contactons aujourd\u2019hui pour vous informer que nous avons ferm\xe9 votre billet.\nDans l\u2019\xe9ventualit\xe9 o\xf9 votre probl\xe8me ne serait pas r\xe9gl\xe9, nous vous invitons \xe0 nous contacter au num\xe9ro habituel afin d\u2019ouvrir un nouveau ticket.\nVeuillez ne pas r\xe9pondre directement \xe0 ce courriel mais communiquer avec nous au num\xe9ro de votre Centre d\u2019assistance local.\nCordialement,\nCentre d\u2019Assistance Bombardier."],Male:" Monsieur",Female:" Mme"},English:{S1:["Dear",",\nWe tried to contact you today about your incident",".\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center."],S2:["Dear",",\nWe tried to contact you today for the second time about your incident",".\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center."],S3:["Dear",",\nWe tried to contact you today for the third time about your incident",".\nNoting the impossibility to reach you these last days, without answer on your part we will be in the obligation to close your ticket.\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center."],Closure:["Dear",",\nWe tried to contact you already three times about your incident",".\nWe are contacting you today to inform you that we have closed your ticket.\nIn the event that your problem is not resolved, we invite you to contact us at the usual number to open a new ticket.\nPlease do not reply directly to this email, but call us at the number of your local help desk.\nRegards,\nBombardier Service Center."],Male:" Mr",Female:" Madam"}}),N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={Language:"French",Strike:"S1",Gender:"",Name:"",Incident:"",text:"",copyAnimation:"inactive"},a.componentDidMount=function(){document.getElementById(a.state.Language).checked=!0,document.getElementById(a.state.Strike).checked=!0,a.setText()},a.getRadio=function(e){a.setState(Object(m.a)({},e.target.name,e.target.id)),setTimeout(function(){return a.setText()}),setTimeout(function(){return a.resizeTextArea()})},a.getTextInput=function(e){if(e.target.checkValidity()){var t="Name"===e.target.id?" "+e.target.value.charAt(0).toUpperCase()+e.target.value.slice(1):" "+e.target.value.toUpperCase();t=" "===t.charAt(t.length-1)?t.slice(0,t.length-1):t,a.setState(Object(m.a)({},e.target.id,t))}else a.setState(Object(m.a)({},e.target.id,""));setTimeout(function(){return a.setText()}),setTimeout(function(){return a.resizeTextArea()})},a.setText=function(){var e=a.state,t=e.Language,n=e.Strike,o=e.Gender,r=(e.Name,e.Incident,b[t]);console.log(r[o]),a.setState({text:r[n][0]+(""==o?"":r[o])+a.state.Name+r[n][1]+a.state.Incident+r[n][2]})},a.resizeTextArea=function(){var e=document.querySelector(".RightSide textarea");e.style.height="10px",e.style.height=e.scrollHeight+10+"px"},a.toggleCopyCmd=function(e){console.log("toggleCopyCmd")},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){var e=this.props.handleReset;return o.a.createElement("div",{className:"EmailsTemplates"},o.a.createElement(f,{getRadio:this.getRadio,getTextInput:this.getTextInput,toggleCopyAnimation:this.state.copyAnimation,toggleCopyCmd:this.toggleCopyCmd,handleReset:e}),o.a.createElement(C,{text:this.state.text}))}}]),t}(o.a.Component),k=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(a=Object(l.a)(this,(e=Object(u.a)(t)).call.apply(e,[this].concat(o)))).state={key:{strikes:1e3,logs:1e3}},a.handleReset=function(){a.setState({key:{strikes:a.state.key.strikes+1,logs:a.state.key.logs}})},a}return Object(d.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return o.a.createElement("div",{className:"App"},o.a.createElement(N,{key:this.state.key.strikes,handleReset:this.handleReset}))}}]),t}(o.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(o.a.createElement(k,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[9,1,2]]]);
//# sourceMappingURL=main.518052bb.chunk.js.map