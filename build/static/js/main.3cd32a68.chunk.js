(this.webpackJsonppuhelinluettelo=this.webpackJsonppuhelinluettelo||[]).push([[0],{14:function(e,n,t){e.exports=t(37)},36:function(e,n,t){},37:function(e,n,t){"use strict";t.r(n);var a=t(0),u=t.n(a),c=t(13),r=t.n(c),o=t(2),l=function(e){var n=e.person;return u.a.createElement("table",null,u.a.createElement("tbody",null,u.a.createElement("tr",null,u.a.createElement("td",{className:"person"},n.name," ",n.number))))},i=function(e){var n=e.selected,t=e.persons,a=e.deletePerson;return(""===n?t:t.filter((function(e){return e.name.includes(n)}))).map((function(e){return u.a.createElement("div",{key:e.name},u.a.createElement(l,{person:e}),u.a.createElement("button",{onClick:function(){return a(e.id)}},"Delete"))}))},s=t(3),m=t.n(s),f="/api/persons",d=function(){return m.a.get(f).then((function(e){return e.data}))},h=function(e){return m.a.post(f,e).then((function(e){return e.data}))},v=function(e,n){return m.a.put("".concat(f,"/").concat(e),n).then((function(e){return e.data}))},p=function(e){return m.a.delete("".concat(f,"/").concat(e)).then((function(e){return e.data}))},b=function(e){var n=e.message;return null===n?null:u.a.createElement("div",{className:"error"},n)},E=function(){Object(a.useEffect)((function(){d().then((function(e){c(e)}))}),[]);var e=Object(a.useState)([]),n=Object(o.a)(e,2),t=n[0],c=n[1],r=Object(a.useState)(""),l=Object(o.a)(r,2),s=l[0],m=l[1],f=Object(a.useState)(""),E=Object(o.a)(f,2),g=E[0],j=E[1],O=Object(a.useState)(""),w=Object(o.a)(O,2),y=w[0],k=w[1],P=Object(a.useState)("something bad has happened"),S=Object(o.a)(P,2),T=S[0],C=S[1];return u.a.createElement("div",null,u.a.createElement("h2",null,"Phonebook"),u.a.createElement(b,{message:T}),u.a.createElement("div",null,"filter shown with ",u.a.createElement("input",{value:y,onChange:function(e){console.log(e.target.value),k(e.target.value)}})),u.a.createElement("form",{onSubmit:function(e){e.preventDefault();var n={name:s,number:g};if(t.map((function(e){return e.name})).includes(s)){window.alert("Puhelinluettelo sis\xe4lt\xe4\xe4 jo sy\xf6tt\xe4m\xe4si nimen ".concat(s,", haluatko korvata vanhan numeron uudella?"));var a=t.find((function(e){return e.name===s})),u={name:a.name,number:g};v(a.id,u).then((function(){c(t),C("Person's ".concat(n.name," informations was updated successfully")),setTimeout((function(){C(null)}),3e3)})).catch((function(e){C("Person ".concat(n.name," was already removed from server")),setTimeout((function(){C(null)}),5e3)}))}else h(n).then((function(e){c(t.concat(e)),C("Person ".concat(n.name," was successfully added")),setTimeout((function(){C(null)}),3e3)})).catch((function(e){console.log(e),setTimeout((function(){C(null)}),5e3)}));m(""),j("")}},u.a.createElement("div",null,"name: ",u.a.createElement("input",{value:s,onChange:function(e){console.log(e.target.value),m(e.target.value)}})),u.a.createElement("div",null,"number: ",u.a.createElement("input",{value:g,onChange:function(e){console.log(e.target.value),j(e.target.value)}})),u.a.createElement("div",null,u.a.createElement("button",{type:"submit"}," Submit"))),u.a.createElement("h2",null,"Numbers"),u.a.createElement(i,{selected:y,persons:t,deletePerson:function(e){var n=t.find((function(n){return n.id===e}));p(e).then((function(){var a=t.filter((function(n){return n.id!==e}));c(a),C("you just deleted person named '".concat(n.name,"'")),setTimeout((function(){C(null)}),5e3)})).catch((function(n){c(t.filter((function(n){return n.id!==e}))),C("person coudn't be deleted"),setTimeout((function(){C(null)}),5e3)}))}}))};t(36);r.a.render(u.a.createElement(E,null),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.3cd32a68.chunk.js.map