(this["webpackJsonplanding-page"]=this["webpackJsonplanding-page"]||[]).push([[0],[,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),i=n(3),s=n.n(i),l=(n(9),n(4)),r=n.p+"static/media/profile.08762f2a.png",o=(n(10),n(11),n(0)),u=function(e){var t=e.title;return Object(o.jsx)("p",{className:"lang",children:t})},j=(n(13),function(e){var t=e.language,n=e.handleClickLanguage;return Object(o.jsx)("header",{className:"app-header",children:Object(o.jsx)("button",{className:"app-header__style-button",onClick:function(){return n()},children:Object(o.jsx)(u,{title:t})})})}),d=(n(14),function(e){var t=e.children;return Object(o.jsx)("main",{className:"container",children:t})}),m=(n(15),function(e){var t=e.avatar;return Object(o.jsx)("img",{src:t,className:"avatar",alt:"avatar"})}),b=(n(16),function(e){var t=e.title,n=e.url;return Object(o.jsx)("a",{className:"anchor",href:n,target:"_blank",rel:"noopener noreferrer",children:t})}),p=(n(17),function(e){var t=e.data,n=e.name,a=e.occupation;return Object(o.jsxs)("div",{className:"network",children:[Object(o.jsxs)("h1",{className:"network__profile-name network__brackets",children:[" ",n," "]}),Object(o.jsxs)("h4",{className:"network__occupation network__bar-asterisk",children:[" ",a," "]}),Object(o.jsx)("ul",{className:"network__ul",children:t.map((function(e){return Object(o.jsx)("li",{className:"network__li",children:Object(o.jsx)(b,{title:e.title,url:e.url})},e.title)}))})]})}),h=(n(18),function(){return Object(o.jsx)("span",{className:"const-color",children:"const"})}),f=(n(19),function(e){var t=e.name,n=e.comma;return Object(o.jsx)("p",{className:"string-color ".concat(n?"add-comma":null),children:t})}),O=(n(20),function(e){var t=e.title,n=e.description;return Object(o.jsxs)("div",{className:"description",children:[Object(o.jsx)(h,{})," ",t," = {",Object(o.jsx)("div",{className:"description__align-description",children:n.map((function(e,t){return Object(o.jsx)(f,{name:e.title},t)}))}),"}"]})}),x=(n(21),function(e){var t=e.type,n=e.skills;return Object(o.jsxs)("div",{className:"skill",children:[Object(o.jsx)(h,{})," ",t," = [",Object(o.jsx)("div",{className:"skill__align-skill",children:n.map((function(e,t){return Object(o.jsx)(f,{name:e,comma:!0},t)}))}),"]"]})}),v=(n(22),function(e){return Object(o.jsx)("div",{className:"ide",children:e.children})}),g=(n(23),function(e){var t=e.data;return Object(o.jsx)("div",{className:"contact",children:Object(o.jsx)("ul",{className:"contact--ul",children:t.map((function(e){return Object(o.jsx)("li",{className:"contact--li",children:Object(o.jsx)(b,{title:e.title,url:e.url})},e.title)}))})})}),k=(n(24),function(e){var t=e.contact;return Object(o.jsx)("footer",{className:"app-footer",children:Object(o.jsx)(g,{data:t})})});var N=function(){var e=c.a.useState("PT-br"),t=Object(l.a)(e,2),n=t[0],a=t[1],i=[{title:"Github",url:"https://github.com/donascimentomarcelo"},{title:"Linkedin",url:"https://www.linkedin.com/in/marcelo-nascimento-0b734a189/"},{title:"Whatsapp",url:"https://api.whatsapp.com/send?phone=5521982525286"}],s=function(e,t){return"PT-br"==n?e:t};return Object(o.jsxs)("div",{className:"app",children:[Object(o.jsx)(j,{language:s("PT-br","Eng"),handleClickLanguage:function(){a("PT-br"==n?"Eng":"PT-br")}}),Object(o.jsxs)(d,{children:[Object(o.jsx)(m,{avatar:r}),Object(o.jsx)(p,{name:"Marcelo Sant'Anna",occupation:s("Desenvolvedor Fullstack","Fullstack Developer"),data:i}),Object(o.jsxs)(v,{children:[Object(o.jsx)(O,{title:"description",description:s([{title:'"Ol\xe1! Bem vindo a minha p\xe1gina!!! '},{title:"Meu nome \xe9 Marcelo e tenho 26 anos. "},{title:"Sou formado em Tecnologia da Informa\xe7\xe3o (An\xe1lise e Desenvolvimento de Sistemas) "},{title:"e sou formado na MIT de em Engenharia de Software com tecnologia Java."},{title:'Abaixo est\xe1 minha lista de habilidades."'}],[{title:'"Hi! Welcome to my page!!! '},{title:"This is Marcelo, and I am 26. "},{title:"I am trained in systems analysis and development"},{title:"and also in MIT Software Engineer with Java."},{title:'Bellow is my skills list."'}])}),Object(o.jsx)(x,{type:"frontend",skills:['"HTML5"','"CSS3"','"SCSS"','"Javascript"','"AngularJs"','"Angular +2"','"ReactJs"','"Redux"']}),Object(o.jsx)(x,{type:"backend",skills:['"Java/Spring MVC/Spring Boot"','"PHP/Laravel"']}),Object(o.jsx)(x,{type:"database",skills:['"Mysql"','"Oracle"','"PostgreSql"','"MongoDB "']}),Object(o.jsx)(x,{type:"mobile",skills:['"Ionic +3"','"React Native"']}),Object(o.jsx)(x,{type:"devops",skills:['"Microservi\xe7os"','"APIs"','"Jenkins"','"Docker"','"Git"']})]})]}),Object(o.jsx)(k,{contact:i})]})},_=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,26)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,i=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),i(e),s(e)}))};s.a.render(Object(o.jsx)(c.a.StrictMode,{children:Object(o.jsx)(N,{})}),document.getElementById("root")),_()}],[[25,1,2]]]);
//# sourceMappingURL=main.495ef7ce.chunk.js.map