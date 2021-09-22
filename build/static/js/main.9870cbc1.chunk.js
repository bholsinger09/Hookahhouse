(this.webpackJsonphookahsite=this.webpackJsonphookahsite||[]).push([[0],{34:function(e,t,c){},35:function(e,t,c){},60:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c.n(n),i=c(11),r=c.n(i),o=(c(34),c(35),c(1)),a=function(){return Object(o.jsx)("header",{className:"App-header"})},j=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h1",{id:"siteTitle",children:"Grocery & Hookah House"})})},l=c(9),d=function(){return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("nav",{id:"nav",children:[Object(o.jsx)(j,{}),Object(o.jsxs)("ul",{children:[Object(o.jsx)("li",{className:"navMenu",id:"homeMenu",children:Object(o.jsx)(l.b,{className:"navbar-item",activeClassName:"is-active",to:"/",children:"Home"})}),Object(o.jsx)("li",{className:"navMenu",id:"quoteMenu",children:Object(o.jsx)(l.b,{className:"navbar-item",activeClassName:"is-active",to:"/getQuote",children:"Get a quote "})}),Object(o.jsx)("li",{className:"navMenu",id:"contactMenu",children:Object(o.jsx)(l.b,{className:"navbar-item",activeClassName:"is-active",to:"/contactUs",children:"Contact Us"})}),Object(o.jsx)("li",{className:"navMenu",id:"directionsMenu",children:Object(o.jsx)(l.b,{className:"navbar-item",activeClassName:"is-active",to:"/getDirections",children:"Get Directions"})})]})]})})},b=c(2),h=function(){return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"welcome",children:"Welcome to the Grocery & Hookah house!"}),Object(o.jsxs)("p",{className:"introductionPar",id:"introductionProducts",children:["Come to visit our store, we carry the very best shisha, hookah, tobacco, and vape products.",Object(o.jsx)("br",{})," "]}),Object(o.jsxs)("p",{className:"introductionPar",id:"introductionGrocery",children:[" Come see our new Grocery products such as a varity of Tea and Coffee.",Object(o.jsx)("br",{})," "]}),Object(o.jsxs)("p",{className:"introductionPar",children:["Check our customers review on google here: ",Object(o.jsx)("a",{href:"https://www.yelp.com/biz/grocery-house-boise",children:" Click here"})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("p",{className:"introductionPar",id:"introductionFreeShipping",children:[" Free shipping for all Products to all US States",Object(o.jsx)("br",{})]})]})})},u=c.p+"static/media/MainPictureBody.dff6f39e.jpg",x=function(){return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:u,alt:"hookah products",id:"mainPictureBody"})})})},O=function(){return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"originsTitle",children:"Our Origins"}),Object(o.jsxs)("p",{className:"homePar",id:"originsPar1",children:["HOOKAH HOUSE TOBACCO DISTRIBUTION LLC is a trendsetting online store, ",Object(o.jsx)("br",{}),"offering our first-rate products and exceptional customer service to shoppers from",Object(o.jsx)("br",{}),"the comfort of their own homes. We\u2019re a business made up of innovators and",Object(o.jsx)("br",{}),"forward-thinkers, with the drive and wherewithal to constantly update and ",Object(o.jsx)("br",{}),"improve the online shopping experience",Object(o.jsx)("br",{})]})]})})},m=function(){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"navMenu"}),Object(o.jsx)(h,{}),Object(o.jsx)(x,{}),Object(o.jsx)(O,{})]})},p=c(12),v=c(29),f=c.n(v),g=function(){var e=Object(n.useState)(""),t=Object(p.a)(e,2),c=t[0],i=t[1],r=Object(n.useState)(""),a=Object(p.a)(r,2),j=a[0],l=a[1],d=Object(n.useState)(""),b=Object(p.a)(d,2),h=b[0],u=b[1];return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsxs)("form",{id:"quoteForm",children:[Object(o.jsx)("h1",{id:"quoteTitle",children:"Quote Help Form"}),Object(o.jsx)("p",{id:"quotePar",children:"Please provide your Name, Contact Email, and what products you would like more information about in this form :"}),Object(o.jsxs)("label",{id:"formName",className:"Form",children:["Name:",Object(o.jsx)("input",{type:"text",name:"name",onChange:function(e){i(e.target.value)}})]}),Object(o.jsxs)("label",{id:"formEmail",className:"Form",children:["Email:",Object(o.jsx)("input",{type:"text",name:"email",onChange:function(e){l(e.target.value)}})]}),Object(o.jsx)("br",{}),Object(o.jsxs)("label",{id:"formQuestion",className:"Form",children:["What products would you like to know more about:",Object(o.jsx)("input",{type:"text",name:"help",onChange:function(e){u(e.target.value)}})]}),Object(o.jsx)("br",{}),Object(o.jsx)("br",{}),Object(o.jsx)("button",{id:"quoteSubmit",type:"submit",onClick:function(){try{f.a.post("https://dashboard.heroku.com/apps/hookahsite-backend.com || http://localhost:8000/",{name:c,email:j,question:h}).then((function(){console.log("data sent")}))}catch(e){console.error(e)}},children:"Submit "})]}),"\u203a"]})},N=c(14),y=["places"],w={lat:40.756795,lng:-73.954298};var C=function(){var e=Object(n.useState)(null),t=Object(p.a)(e,2),c=t[0],i=t[1];return Object(o.jsxs)(N.b,{googleMapsApiKey:"AIzaSyBLHVaMGB8ZnWhGKwIDrCV5C1nxpHEPwl0",libraries:y,children:[Object(o.jsx)(N.c,{onPlacesChanged:function(){return console.log(c.getPlaces())},onLoad:function(e){i(e)},children:Object(o.jsx)("input",{type:"text",placeholder:"type address here (our location: 10395 W Fairview Ave, Boise, ID 837040)",style:{boxSizing:"border-box",border:"1px solid transparent",width:"40rem",height:"40px",padding:"0 12px",borderRadius:"3px",boxShadow:"0 2px 6px rgba(0, 0, 0, 0.3)",fontSize:"14px",outline:"none",textOverflow:"ellipses",position:"absolute",top:"10rem",left:"30%"}})}),Object(o.jsx)(N.a,{mapContainerStyle:{height:"20rem",width:"40rem",top:"14rem",left:"20rem"},center:w,zoom:12,children:Object(o.jsx)(s.a.Fragment,{children:"componentDidMount() "})})]})},F=function(){return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)("div",{children:[Object(o.jsx)("h1",{id:"mapTitle",children:" Get Directions "}),Object(o.jsx)(C,{})]})})},k=function(e){return Object(o.jsxs)(s.a.Fragment,{children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{id:"contactTitle",children:"Contact Us"})}),Object(o.jsxs)("div",{children:[Object(o.jsx)("p",{id:"contAddress",children:"Our Addresss:   10395 W Fairview Ave, Boise, ID 83704"}),Object(o.jsx)("p",{id:"contPhone",children:"Our Phone Number:  (208) 353-4308"})]})]})},P=function(){return Object(o.jsx)("h1",{children:" Page Not Found "})};var S=function(){return Object(o.jsx)(s.a.Fragment,{children:Object(o.jsxs)(l.a,{children:[Object(o.jsx)(d,{}),Object(o.jsx)("div",{className:"App",children:Object(o.jsx)(a,{})}),Object(o.jsxs)(b.c,{children:[Object(o.jsx)(b.a,{path:"/",component:m,exact:!0}),Object(o.jsx)(b.a,{path:"/getQuote",component:g}),Object(o.jsx)(b.a,{path:"/getDirections",component:F}),Object(o.jsx)(b.a,{path:"/contactUs",component:k}),Object(o.jsx)(b.a,{component:P})]})]})})};r.a.render(Object(o.jsx)(s.a.StrictMode,{children:Object(o.jsx)(S,{})}),document.getElementById("root"))}},[[60,1,2]]]);
//# sourceMappingURL=main.9870cbc1.chunk.js.map