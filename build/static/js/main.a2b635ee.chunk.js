(this.webpackJsonppatientor=this.webpackJsonppatientor||[]).push([[0],{201:function(e,t,a){"use strict";a.r(t);var n,c,r=a(0),i=a.n(r),l=a(63),s=a.n(l),o=(a(174),a(42)),d=a.n(o),j=a(72),b=a(21),h=a(64),u=a.n(h),p=a(85),O=a(10),x=a(212),m=a(224),v=a(219),f=a(213),g="/api/patients",y=a(68),k=a(13),C=function(e){return{type:"ADD_PATIENT",payload:e}},S=function(e){return console.log(e),{type:"ADD_ENTRY",payload:e}},w=a(2),D={patients:{},diagnoses:{}},H=Object(r.createContext)([D,function(){return D}]),N=function(e){var t=e.reducer,a=e.children,n=Object(r.useReducer)(t,D),c=Object(b.a)(n,2),i=c[0],l=c[1];return Object(w.jsx)(H.Provider,{value:[i,l],children:a})},T=function(){return Object(r.useContext)(H)},E=a(217),A=a(216),R=a(222),I=a(221),L=a(11),F=a(215),_=(a(214),function(e){var t=e.name,a=e.label,n=e.options;return Object(w.jsxs)(F.a.Field,{children:[Object(w.jsx)("label",{children:a}),Object(w.jsx)(L.b,{as:"select",name:t,className:"ui dropdown",children:n.map((function(e){return Object(w.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})}),B=function(e){var t=e.name,a=e.label,n=e.options;return Object(w.jsxs)(F.a.Field,{children:[Object(w.jsx)("label",{children:a}),Object(w.jsx)(L.b,{as:"select",name:t,className:"ui dropdown",children:n.map((function(e){return Object(w.jsx)("option",{value:e.value,children:e.label||e.value},e.value)}))})]})},P=function(e){var t=e.field,a=e.label,n=e.placeholder;return Object(w.jsxs)(F.a.Field,{children:[Object(w.jsx)("label",{children:a}),Object(w.jsx)(L.b,Object(k.a)({placeholder:n},t)),Object(w.jsx)("div",{style:{color:"red"},children:Object(w.jsx)(L.a,{name:t.name})})]})},M=function(e){var t=e.field,a=e.label,n=e.min,c=e.max,r=e.placeholder;return Object(w.jsxs)(F.a.Field,{children:[Object(w.jsx)("label",{children:a}),Object(w.jsx)(L.b,Object(k.a)(Object(k.a)({},t),{},{type:"number",min:n,max:c,placeholder:r})),Object(w.jsx)("div",{style:{color:"red"},children:Object(w.jsx)(L.a,{name:t.name})})]})};!function(e){e.Male="male",e.Female="female",e.Other="other"}(n||(n={})),function(e){e[e.Healthy=0]="Healthy",e[e.LowRisk=1]="LowRisk",e[e.HighRisk=2]="HighRisk",e[e.CriticalRisk=3]="CriticalRisk"}(c||(c={}));var Y=[{value:n.Male,label:"Male"},{value:n.Female,label:"Female"},{value:n.Other,label:"Other"}],U=function(e){var t=e.onSubmit,a=e.onCancel;return Object(w.jsx)(L.d,{initialValues:{name:"",ssn:"123456-123A",dateOfBirth:"",occupation:"",gender:n.Other},onSubmit:t,validate:function(e){var t="Field is required",a={};return e.name||(a.name=t),e.ssn||(a.ssn=t),e.dateOfBirth||(a.dateOfBirth=t),e.occupation||(a.occupation=t),a},children:function(e){var t=e.isValid,n=e.dirty;return Object(w.jsxs)(L.c,{className:"form ui",children:[Object(w.jsx)(L.b,{label:"Name",placeholder:"Name",name:"name",component:P}),Object(w.jsx)(L.b,{label:"Social Security Number",placeholder:"SSN",name:"ssn",component:P}),Object(w.jsx)(L.b,{label:"Date Of Birth",placeholder:"YYYY-MM-DD",name:"dateOfBirth",component:P}),Object(w.jsx)(L.b,{label:"Occupation",placeholder:"Occupation",name:"occupation",component:P}),Object(w.jsx)(_,{label:"Gender",name:"gender",options:Y}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(I.a.Column,{floated:"left",width:5,children:Object(w.jsx)(v.a,{type:"button",onClick:a,color:"red",children:"Cancel"})}),Object(w.jsx)(I.a.Column,{floated:"right",width:5,children:Object(w.jsx)(v.a,{type:"submit",floated:"right",color:"green",disabled:!n||!t,children:"Add"})})]})]})}})},G=function(e){var t=e.modalOpen,a=e.onClose,n=e.onSubmit,c=e.error;return Object(w.jsxs)(A.a,{open:t,onClose:a,centered:!1,closeIcon:!0,children:[Object(w.jsx)(A.a.Header,{children:"Add a new patient"}),Object(w.jsxs)(A.a.Content,{children:[c&&Object(w.jsx)(R.a,{inverted:!0,color:"red",children:"Error: ".concat(c)}),Object(w.jsx)(U,{onSubmit:n,onCancel:a})]})]})},V=a(223),z=["The patient is in great shape","The patient has a low risk of getting sick","The patient has a high risk of getting sick","The patient has a diagnosed condition"],J=function(e){var t=e.rating,a=e.showText;return Object(w.jsxs)("div",{className:"health-bar",children:[Object(w.jsx)(V.a,{icon:"heart",disabled:!0,rating:4-t,maxRating:4}),a?Object(w.jsx)("p",{children:z[t]}):null]})},q=function(){var e=T(),t=Object(b.a)(e,2),a=t[0].patients,n=t[1],c=i.a.useState(!1),r=Object(b.a)(c,2),l=r[0],s=r[1],o=i.a.useState(),h=Object(b.a)(o,2),O=h[0],m=h[1],f=function(){s(!1),m(void 0)},y=function(){var e=Object(j.a)(d.a.mark((function e(t){var a,c,r,i,l;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.post("".concat(g,"/api/patients"),t);case 3:a=e.sent,c=a.data,n(C(c)),f(),e.next=13;break;case 9:e.prev=9,e.t0=e.catch(0),console.error((null===(r=e.t0.response)||void 0===r?void 0:r.data)||"Unknown Error"),m((null===(i=e.t0.response)||void 0===i||null===(l=i.data)||void 0===l?void 0:l.error)||"Unknown error");case 13:case"end":return e.stop()}}),e,null,[[0,9]])})));return function(t){return e.apply(this,arguments)}}();return Object(w.jsxs)("div",{className:"App",children:[Object(w.jsx)(x.a,{textAlign:"center",children:Object(w.jsx)("h3",{children:"Patient list"})}),Object(w.jsxs)(E.a,{celled:!0,children:[Object(w.jsx)(E.a.Header,{children:Object(w.jsxs)(E.a.Row,{children:[Object(w.jsx)(E.a.HeaderCell,{children:"Name"}),Object(w.jsx)(E.a.HeaderCell,{children:"Gender"}),Object(w.jsx)(E.a.HeaderCell,{children:"Occupation"}),Object(w.jsx)(E.a.HeaderCell,{children:"Health Rating"})]})}),Object(w.jsx)(E.a.Body,{children:Object.values(a).map((function(e){return Object(w.jsxs)(E.a.Row,{children:[Object(w.jsx)(E.a.Cell,{children:Object(w.jsx)(p.b,{to:"/".concat(e.id),children:e.name})}),Object(w.jsx)(E.a.Cell,{children:e.gender}),Object(w.jsx)(E.a.Cell,{children:e.occupation}),Object(w.jsx)(E.a.Cell,{children:Object(w.jsx)(J,{showText:!1,rating:1})})]},e.id)}))})]}),Object(w.jsx)(G,{modalOpen:l,onSubmit:y,error:O,onClose:f}),Object(w.jsx)(v.a,{onClick:function(){return s(!0)},children:"Add New Patient"})]})},K=a(93),Q=a(218),W=function(e){return console.log(e.health),e.health?Object(w.jsx)("div",{children:Object(w.jsxs)(Q.a,{fluid:!0,centered:!0,style:{padding:10,margin:10},children:[Object(w.jsxs)("p",{children:[e.health.date," ",Object(w.jsx)(K.a,{fitted:!0,name:"doctor",size:"huge"}),e.health.specialist]}),Object(w.jsx)("p",{children:e.health.description}),Object(w.jsx)("p",{children:e.health.healthCheckRating<2?Object(w.jsx)(K.a,{color:"red",fitted:!0,name:"heart"}):Object(w.jsx)(K.a,{color:"yellow",fitted:!0,name:"heart"})})]})}):null},X=function(e){return console.log(e.hospital),e.hospital?Object(w.jsx)("div",{children:Object(w.jsxs)(Q.a,{fluid:!0,centered:!0,style:{padding:10,margin:10},children:[Object(w.jsxs)("p",{children:[e.hospital.date," ",Object(w.jsx)(K.a,{fitted:!0,name:"doctor",size:"huge"}),e.hospital.specialist]}),Object(w.jsx)("p",{children:e.hospital.description}),Object(w.jsx)("p",{children:Object.values(e.hospital.discharge).join("  discharged:   ")})]})}):null},Z=function(e){return console.log(e.occupational),e.occupational?Object(w.jsx)("div",{children:Object(w.jsxs)(Q.a,{fluid:!0,centered:!0,style:{padding:10,margin:10},children:[Object(w.jsxs)("p",{children:[e.occupational.date," ",Object(w.jsx)(K.a,{fitted:!0,name:"stethoscope",size:"huge"})," ",e.occupational.specialist]}),Object(w.jsx)("p",{children:e.occupational.description}),Object(w.jsx)("p",{children:e.occupational.employerName}),e.occupational.sickLeave?Object(w.jsxs)("p",{children:["Start: ",e.occupational.sickLeave.startDate,Object(w.jsx)("br",{}),"End: ",e.occupational.sickLeave.endDate]}):null]})}):null},$=[{value:"HealthCheck",label:"HealthCheck"},{value:"Hospital",label:"Hospital"},{value:"OccupationalHealthcare",label:"OccupationalHealthcare"}],ee=function(e){return 0===e.length||Boolean(Date.parse(e))},te=function(e){var t=e.onSubmit,a=e.onCancel,n=(new Date).toISOString().split("T")[0];return Object(w.jsx)(L.d,{initialValues:{date:"".concat(n),specialist:"",description:"",type:"",healthCheckRating:0,discharge:{date:"",criteria:""},sickLeave:{startDate:"",endDate:""},employerName:""},onSubmit:t,validate:function(e){var t="Field is required",a="Malformatted date",n={};if(e.date||(n.date=t),e.date&&!ee(e.date)&&(n.date=a),e.specialist&&0!==e.specialist.length||(n.specialist=t),e.description&&0!==e.description.length||(n.description=t),"HealthCheck"===e.type){var c=e.healthCheckRating;c||(n.healthCheckRating=t),[0,1,2,3].includes(c)||(n.healthCheckRating="value must be 0-3")}if("Hospital"===e.type){var r=e.discharge;r&&!ee(r.date)&&(n.discharge=a)}if("OccupationalHealthcare"===e.type){var i=e.sickLeave;!i||ee(i.startDate)&&ee(i.endDate)||(n.sickLeave=a)}return n},children:function(e){var t=e.isValid,n=e.dirty,c=e.values,r=e.errors;return Object(w.jsxs)(L.c,{className:"form ui",children:[Object(w.jsx)(B,{label:"Type",name:"type",options:$}),Object(w.jsx)(L.b,{label:"Date",placeholder:"Date",name:"date",component:P}),Object(w.jsx)(L.b,{label:"Specialist",placeholder:"Specialist",name:"specialist",component:P}),Object(w.jsx)(L.b,{label:"Description",placeholder:"Description",name:"description",component:P}),"HealthCheck"===c.type&&Object(w.jsx)(w.Fragment,{children:Object(w.jsx)(L.b,{label:"Rating",placeholder:"0",name:"healthCheckRating",component:M,min:0,max:3})}),"Hospital"===c.type&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(L.b,{label:"Discharge Date",placeholder:"Discharge Date",name:"discharge.date",component:P}),Object(w.jsx)("div",{style:{color:"red",marginBottom:5},children:r.discharge}),Object(w.jsx)(L.b,{label:"Discharge Criteria",placeholder:"Discharge Criteria",name:"discharge.criteria",component:P})]}),"OccupationalHealthcare"===c.type&&Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(L.b,{label:"Employer Name",placeholder:"Employer Name",name:"employerName",component:P}),Object(w.jsx)("div",{style:{color:"red",marginBottom:5},children:r.sickLeave}),Object(w.jsx)(L.b,{label:"Sick leave start date",placeholder:"Sick leave start date",name:"sickLeave.startDate",component:P}),Object(w.jsx)(L.b,{label:"Sick leave end date",placeholder:"Sick leave end date",name:"sickLeave.endDate",component:P})]}),Object(w.jsxs)(I.a,{children:[Object(w.jsx)(I.a.Column,{floated:"left",width:5,children:Object(w.jsx)(v.a,{type:"button",onClick:a,color:"red",children:"Cancel"})}),Object(w.jsx)(I.a.Column,{floated:"right",width:5,children:Object(w.jsx)(v.a,{type:"submit",floated:"right",color:"green",disabled:!n||!t,children:"Add"})})]})]})}})},ae=function(e){var t=e.modalOpen,a=e.onClose,n=e.onSubmit,c=e.error;return Object(w.jsxs)(A.a,{open:t,onClose:a,centered:!1,closeIcon:!0,children:[Object(w.jsx)(A.a.Header,{children:"Add a new entry"}),Object(w.jsxs)(A.a.Content,{children:[c&&Object(w.jsx)(R.a,{inverted:!0,color:"red",children:"Error: ".concat(c)}),Object(w.jsx)(te,{onSubmit:n,onCancel:a})]})]})},ne=function(){var e=T(),t=Object(b.a)(e,2),a=t[0],n=a.patients,c=a.diagnoses,r=t[1],l=Object(O.g)().id;console.log(n),console.log(c);var s=i.a.useState(!1),o=Object(b.a)(s,2),h=o[0],p=o[1],x=i.a.useState(),m=Object(b.a)(x,2),f=m[0],y=m[1],k=function(){p(!1),y(void 0)},C=function(e){console.log(e),Object.values(n).map(function(){var t=Object(j.a)(d.a.mark((function t(a){var n,c,i,s,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(a.id!==l){t.next=17;break}return t.prev=1,t.next=4,u.a.post("".concat(g,"/api/patients/").concat(l,"/entries"),e);case 4:n=t.sent,c=n.data,console.log(c),i=a.entries.concat(c),console.log(i),r(S(a)),k(),t.next=17;break;case 13:t.prev=13,t.t0=t.catch(1),console.error((null===(s=t.t0.response)||void 0===s?void 0:s.data)||"Unknown Error"),y((null===(o=t.t0.response)||void 0===o?void 0:o.data)||"Unknown Error");case 17:case"end":return t.stop()}}),t,null,[[1,13]])})));return function(e){return t.apply(this,arguments)}}())},D=function(e){var t=e.entry;switch(console.log(t),t.type){case"Hospital":return Object(w.jsx)(X,{hospital:t});case"OccupationalHealthcare":return Object(w.jsx)(Z,{occupational:t});case"HealthCheck":return Object(w.jsx)(W,{health:t});default:return function(e){throw new Error("Unhandled discriminated union member: ".concat(JSON.stringify(e)))}(t)}};return Object(w.jsx)("div",{children:Object.values(n).map((function(e){var t;return e.id===l?Object(w.jsxs)("div",{children:[Object(w.jsxs)("h1",{children:[e.name,"  ","male"===e.gender?Object(w.jsx)(K.a,{fitted:!0,name:"mars"}):Object(w.jsx)(K.a,{fitted:!0,name:"venus"})]}),Object(w.jsxs)("p",{children:["ssn: ",e.ssn]}),Object(w.jsxs)("p",{children:["occupation: ",e.occupation]}),Object(w.jsx)("h3",{children:"entries"}),Object(w.jsxs)("div",{children:[Object(w.jsx)(ae,{modalOpen:h,onSubmit:C,error:f,onClose:k}),Object(w.jsx)(v.a,{onClick:function(){return p(!0)},children:"Add New Entry"})]}),Object(w.jsx)("div",{children:null===(t=Object.values(e.entries))||void 0===t?void 0:t.map((function(e){return console.log(e),D({entry:e})}))})]},e.id):null}))})},ce=function(){var e=T(),t=Object(b.a)(e,2)[1];return i.a.useEffect((function(){var e=function(){var e=Object(j.a)(d.a.mark((function e(){var a,n,c,r;return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,u.a.get("".concat(g));case 3:return a=e.sent,n=a.data,t({type:"SET_PATIENT_LIST",payload:n}),e.next=8,u.a.get("".concat("/api/diagnoses"));case 8:c=e.sent,r=c.data,t({type:"SET_DIAGNOSIS_LIST",payload:r}),e.next=16;break;case 13:e.prev=13,e.t0=e.catch(0),console.error(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})));return function(){return e.apply(this,arguments)}}();e()}),[t]),Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(p.a,{children:Object(w.jsxs)(x.a,{children:[Object(w.jsx)(m.a,{as:"h1",children:"Patientor"}),Object(w.jsx)(v.a,{as:p.b,to:"/",primary:!0,children:"Home"}),Object(w.jsx)(f.a,{hidden:!0}),Object(w.jsxs)(O.c,{children:[Object(w.jsx)(O.a,{path:"/",element:Object(w.jsx)(q,{})}),Object(w.jsx)(O.a,{path:"/:id",element:Object(w.jsx)(ne,{})})]})]})})})};s.a.render(Object(w.jsx)(N,{reducer:function(e,t){switch(console.log("State: ",e),console.log("Action: ",t),t.type){case"SET_PATIENT_LIST":return Object(k.a)(Object(k.a)({},e),{},{patients:Object(k.a)(Object(k.a)({},t.payload.reduce((function(e,t){return Object(k.a)(Object(k.a)({},e),{},Object(y.a)({},t.id,t))}),{})),e.patients)});case"ADD_PATIENT":return Object(k.a)(Object(k.a)({},e),{},{patients:Object(k.a)(Object(k.a)({},e.patients),{},Object(y.a)({},t.payload.id,t.payload))});case"ADD_ENTRY":return Object(k.a)(Object(k.a)({},e),{},{patients:Object(k.a)(Object(k.a)({},e.patients),{},Object(y.a)({},t.payload.id,e.patients[t.payload.id]=t.payload))});case"SET_DIAGNOSIS_LIST":return Object(k.a)(Object(k.a)({},e),{},{diagnoses:Object(k.a)(Object(k.a)({},t.payload.reduce((function(e,t){return Object(k.a)(Object(k.a)({},e),{},Object(y.a)({},t.code,t))}),{})),e.diagnoses)});default:return e}},children:Object(w.jsx)(ce,{})}),document.getElementById("root"))}},[[201,1,2]]]);
//# sourceMappingURL=main.a2b635ee.chunk.js.map