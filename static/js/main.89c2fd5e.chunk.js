(this["webpackJsonpgoit-react-hw-03-phonebook"]=this["webpackJsonpgoit-react-hw-03-phonebook"]||[]).push([[0],{16:function(t,e,n){},26:function(t,e,n){},27:function(t,e,n){},28:function(t,e,n){},29:function(t,e,n){"use strict";n.r(e);var a=n(1),c=n.n(a),r=n(9),o=n.n(r),s=n(11),i=n(3),u=n(4),l=n(6),m=n(5),h=(n(16),n(0)),b=function(t){var e=t.id,n=t.name,a=t.number,c=t.onRemove;return Object(h.jsxs)("li",{className:"Contact-List",children:[n,": ",a," ",Object(h.jsx)("button",{className:"Button-List",type:"submit",onClick:function(){return c(e)},children:"Delete"})]},e)},d=function(t){var e=t.contacts,n=t.onRemoveContact;return Object(h.jsx)("ul",{children:e.map((function(t){return Object(h.jsx)(b,{id:t.id,name:t.name,number:t.number,onRemove:n},t.id)}))})},j=n(10),f=n(8),p=n.n(f),v=(n(26),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={name:"",number:""},t.handleSubmitForm=function(e){e.preventDefault();var n=t.props.onSubmit,a=t.state,c=a.name,r=a.number;t.validateForm()&&(n({id:p.a.generate(),name:c,number:r}),t.reset())},t.handleChange=function(e){var n=e.currentTarget,a=n.name,c=n.value;t.setState(Object(j.a)({},a,c))},t.reset=function(){t.setState({id:p.a.generate(),name:"",number:""})},t.validateForm=function(){var e=t.state,n=e.name,a=e.number,c=t.props.check;return n&&a||alert("Some filed is empty"),c(n)},t}return Object(u.a)(n,[{key:"render",value:function(){return Object(h.jsxs)("form",{className:"Form",onSubmit:this.handleSubmitForm,children:[Object(h.jsxs)("label",{className:"Label",children:["Name  ",Object(h.jsx)("input",{className:"Input",id:this.state.id,type:"text",name:"name",value:this.state.name,pattern:"^[a-zA-Z\u0430-\u044f\u0410-\u042f]+(([' -][a-zA-Z\u0430-\u044f\u0410-\u042f ])?[a-zA-Z\u0430-\u044f\u0410-\u042f]*)*$",title:"\u0418\u043c\u044f \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0442\u043e\u043b\u044c\u043a\u043e \u0438\u0437 \u0431\u0443\u043a\u0432, \u0430\u043f\u043e\u0441\u0442\u0440\u043e\u0444\u0430, \u0442\u0438\u0440\u0435 \u0438 \u043f\u0440\u043e\u0431\u0435\u043b\u043e\u0432. \u041d\u0430\u043f\u0440\u0438\u043c\u0435\u0440 Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan \u0438 \u0442. \u043f.",required:!0,onChange:this.handleChange,placeholder:"name"})]}),Object(h.jsxs)("label",{children:["Number  ",Object(h.jsx)("input",{className:"Input",type:"tel",name:"number",placeholder:"number",value:this.state.number,pattern:"\\+?\\d{1,4}?[-.\\s]?\\(?\\d{1,3}?\\)?[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,4}[-.\\s]?\\d{1,9}",title:"\u041d\u043e\u043c\u0435\u0440 \u0442\u0435\u043b\u0435\u0444\u043e\u043d\u0430 \u0434\u043e\u043b\u0436\u0435\u043d \u0441\u043e\u0441\u0442\u043e\u044f\u0442\u044c \u0446\u0438\u0444\u0440 \u0438 \u043c\u043e\u0436\u0435\u0442 \u0441\u043e\u0434\u0435\u0440\u0436\u0430\u0442\u044c \u043f\u0440\u043e\u0431\u0435\u043b\u044b, \u0442\u0438\u0440\u0435, \u043a\u0440\u0443\u0433\u043b\u044b\u0435 \u0441\u043a\u043e\u0431\u043a\u0438 \u0438 \u043c\u043e\u0436\u0435\u0442 \u043d\u0430\u0447\u0438\u043d\u0430\u0442\u044c\u0441\u044f \u0441 +",required:!0,onChange:this.handleChange})]}),Object(h.jsx)("button",{className:"Button",type:"submit",children:"Add contact"})]})}}]),n}(a.Component)),O=(n(27),function(t){var e=t.filter,n=t.changeFilter;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h3",{children:" Find contacts by me "}),Object(h.jsx)("input",{className:"Input-Filter",type:"text",name:"",value:e,onChange:function(t){return n(t.target.value)}})]})}),g=(n(28),function(t){Object(l.a)(n,t);var e=Object(m.a)(n);function n(){var t;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),r=0;r<a;r++)c[r]=arguments[r];return(t=e.call.apply(e,[this].concat(c))).state={contacts:[],filter:""},t.handleSubmitForm=function(e){console.log(e),t.setState((function(t){var n=t.contacts;return{contacts:[].concat(Object(s.a)(n),[e])}}))},t.changeFilter=function(e){t.setState({filter:e})},t.visibleContacts=function(){var e=t.state,n=e.contacts,a=e.filter;return n.filter((function(t){return t.name.toLowerCase().includes(a.toLowerCase())}))},t.checkContact=function(e){var n=!!t.state.contacts.find((function(t){return t.name===e}));return n&&alert("".concat(e," is already in contacts")),!n},t.handlerRemoveContact=function(e){return t.setState((function(t){return{contacts:t.contacts.filter((function(t){return t.id!==e}))}}))},t}return Object(u.a)(n,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("contacts"),e=JSON.parse(t);e&&this.setState({contacts:e})}},{key:"componentDidUpdate",value:function(t,e){this.state.contacts!==e.contacts&&localStorage.setItem("contacts",JSON.stringify(this.state.contacts))}},{key:"render",value:function(){var t=this.state,e=t.contacts,n=t.filter;return Object(h.jsxs)("div",{className:"Phonebook",children:[Object(h.jsx)("h1",{className:"Phonebook-title",children:"Phonebook"}),Object(h.jsx)(v,{onSubmit:this.handleSubmitForm,check:this.checkContact}),Object(h.jsx)("h2",{children:"Contacts"}),e.length>1&&Object(h.jsx)(O,{filter:n,changeFilter:this.changeFilter}),e.length>0&&Object(h.jsx)(d,{contacts:this.visibleContacts(),onRemoveContact:this.handlerRemoveContact})]})}}]),n}(a.Component));o.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(g,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.89c2fd5e.chunk.js.map