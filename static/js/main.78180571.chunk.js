(this.webpackJsonpresume=this.webpackJsonpresume||[]).push([[0],{12:function(e,a,t){},13:function(e,a,t){"use strict";t.r(a);var l=t(0),n=t.n(l),s=t(6),i=t.n(s),r=(t(12),t(1)),c=t(2),m=t(3),o=t(4),p=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("header",{id:"home"},n.a.createElement("nav",{id:"nav-wrap"},n.a.createElement("a",{className:"mobile-btn",href:"#nav-wrap",title:"Show navigation"},"Show navigation"),n.a.createElement("a",{className:"mobile-btn",href:"#",title:"Hide navigation"},"Hide navigation"),n.a.createElement("ul",{id:"nav",className:"nav"},n.a.createElement("li",{className:"current"},n.a.createElement("a",{className:"smoothscroll",href:"#home"},"Home")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#about"},"About")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#resume"},"Resume")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#portfolio"},"Works")),n.a.createElement("li",null,n.a.createElement("a",{className:"smoothscroll",href:"#contactus"},"Contact")))," ")," ",n.a.createElement("div",{className:"row banner"},n.a.createElement("div",{className:"banner-text"},n.a.createElement("h1",{className:"responsive-headline"},e.name),n.a.createElement("h3",{className:"hitam"},"I am  ",e.role1," and ",e.role2,". ",e.roleDescription),n.a.createElement("hr",null),n.a.createElement("ul",{className:"social"},e.socialLinks&&e.socialLinks.map((function(e){return n.a.createElement("li",{key:e.name},n.a.createElement("a",{href:e.url,target:"_blank"},n.a.createElement("i",{className:e.className})))}))))),n.a.createElement("p",{className:"scrolldown"},n.a.createElement("a",{className:"smoothscroll",href:"#about"},n.a.createElement("i",{className:"icon-down-circle"})))))}}]),t}(l.Component),u=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{id:"about"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"three columns"},n.a.createElement("img",{className:"profile-pic",src:"images/15115364.jpg",alt:""})),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("h2",null,"About Me"),n.a.createElement("p",null,e.aboutme),n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"columns contact-details"},n.a.createElement("h2",null,"Contact Details"),n.a.createElement("p",{className:"address"},n.a.createElement("span",null,e.name),n.a.createElement("br",null),n.a.createElement("span",null,e.address),n.a.createElement("br",null),n.a.createElement("span",null,e.email))),n.a.createElement("div",{className:"columns download"},n.a.createElement("p",null,n.a.createElement("a",{href:"https://drive.google.com/file/d/1wd1frjtA0Ir5wCOhn-RFToVyqyJXSf26/view?usp=sharing",className:"button"},n.a.createElement("i",{className:"fa fa-download"}),"Download CV"))))))))}}]),t}(l.Component),d=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("section",{id:"resume"},n.a.createElement("div",{className:"row education"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Education"))),n.a.createElement("div",{className:"nine columns main-col"},e.education&&e.education.map((function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.UniversityName),n.a.createElement("div",{className:"row item"},n.a.createElement("h4",{className:"twelve columns"},e.specialization,"| ",e.GradYear," ")),n.a.createElement("div",{className:"row item"},n.a.createElement("p",{className:"  twelve columns"}," Graduated with GPA ",e.GPA," ",n.a.createElement("br",null)," ",e.active))))})))),n.a.createElement("div",{className:"row work"},n.a.createElement("div",{className:"four columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Work Experiences"))),n.a.createElement("div",{className:"nine columns main-col"},e.education&&e.experiences.map((function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h3",null,e.companyName),n.a.createElement("div",{className:"row item"},n.a.createElement("h4",{className:"twelve columns"},e.job,"| ",e.year," ")),n.a.createElement("div",{className:"row item"},n.a.createElement("p",{className:"  twelve columns"},"  ",e.jobDesc," ")),n.a.createElement("br",null),n.a.createElement("h3",null,e.companyName1),n.a.createElement("div",{className:"row item"},n.a.createElement("h4",{className:"twelve columns"},e.job1,"| ",e.year1," ")),n.a.createElement("div",{className:"row item"},n.a.createElement("p",{className:"  twelve columns"},"  ",e.jobDesc1," ")),n.a.createElement("br",null),n.a.createElement("h3",null,e.companyName2),n.a.createElement("div",{className:"row item"},n.a.createElement("h4",{className:"twelve columns"},e.job2,"| ",e.year2," ")),n.a.createElement("div",{className:"row item"},n.a.createElement("p",{className:"  twelve columns"},"  ",e.jobDesc2," ")),n.a.createElement("br",null),n.a.createElement("h3",null,e.companyName3),n.a.createElement("div",{className:"row item"},n.a.createElement("h4",{className:"twelve columns"},e.job3,"| ",e.year3," ")),n.a.createElement("div",{className:"row item"},n.a.createElement("p",{className:"  twelve columns"},"  ",e.jobDesc3," "))))})))),n.a.createElement("div",{className:"row skill"},n.a.createElement("div",{className:"three columns header-col"},n.a.createElement("h1",null,n.a.createElement("span",null,"Skills"))),n.a.createElement("div",{className:"nine columns main-col"},n.a.createElement("p",null,e.skillsDescription),e.skills&&e.skills.map((function(e){return n.a.createElement("div",{className:"row item"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("h4",null,e.skillName1),n.a.createElement("div",{className:"row item"},n.a.createElement("span",{className:"  twelve columns hitam"},"  ",e.skillWeb1,n.a.createElement("br",null),e.skillWeb2," ",n.a.createElement("br",null)," ",e.skillWeb3," ",n.a.createElement("br",null)," ",e.skillWeb4,n.a.createElement("br",null)," ",e.skillWeb5," ",n.a.createElement("br",null)," ",e.skillWeb6)),n.a.createElement("br",null),n.a.createElement("h4",null,e.skillName2),n.a.createElement("div",{className:"row item"},n.a.createElement("span",{className:"  twelve columns hitam"},"  ",e.skillDb1," ")),n.a.createElement("br",null),n.a.createElement("h4",null,e.skillName3),n.a.createElement("div",{className:"row item"},n.a.createElement("span",{className:"  twelve columns hitam"},"  ",e.skillSoftware1,n.a.createElement("br",null),e.skillSoftware2," ",n.a.createElement("br",null)," ",e.skillSoftware3," ",n.a.createElement("br",null)," ",e.skillSoftware4)),n.a.createElement("br",null),n.a.createElement("h4",null,e.skillName4),n.a.createElement("div",{className:"row item"},n.a.createElement("span",{className:"  twelve columns hitam"},"  ",e.skillDesktop1,n.a.createElement("br",null),e.skillDesktop2," ",n.a.createElement("br",null)," ",e.skillDesktop3))))}))))))}}]),t}(l.Component),E=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){var e=this.props.resumeData;return n.a.createElement("section",{id:"portfolio"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"one columns "},n.a.createElement("h1",null,"Check Out Some of My Works."),n.a.createElement("div",{id:"portfolio-wrapper",className:"bgrid-quarters s-bgrid-thirds cf"},e.portfolio&&e.portfolio.map((function(e){return n.a.createElement("div",{className:" column portfolio-item"},n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:"#modal-01"},n.a.createElement("img",{src:"".concat(e.imgurl1),className:"item-img"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name1),n.a.createElement("p",null,e.description))))),n.a.createElement("br",null),n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:"#modal-03"},n.a.createElement("img",{src:"".concat(e.imgurl2),className:"item-img"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name2),n.a.createElement("p",null,e.description2))))),n.a.createElement("br",null),n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:"#modal-04"},n.a.createElement("img",{src:"".concat(e.imgurl3),className:"item-img"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name3),n.a.createElement("p",null,e.description3))))),n.a.createElement("br",null),n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:"#modal-05"},n.a.createElement("img",{src:"".concat(e.imgurl4),className:"item-img"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name4),n.a.createElement("p",null,e.description4))))),n.a.createElement("br",null),n.a.createElement("div",{className:"item-wrap"},n.a.createElement("a",{href:"#modal-06"},n.a.createElement("img",{src:"".concat(e.imgurl5),className:"item-img"}),n.a.createElement("div",{className:"overlay"},n.a.createElement("div",{className:"portfolio-item-meta"},n.a.createElement("h5",null,e.name5),n.a.createElement("p",null,e.description5))))))}))))),n.a.createElement("div",{id:"modal-01",class:"popup-modal mfp-hide"},n.a.createElement("div",{class:"sliders"},n.a.createElement("figure",null,n.a.createElement("div",{class:"slide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/sfs.png",alt:""})),n.a.createElement("div",{class:"slide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/sfs1.png",alt:""})))),n.a.createElement("div",{class:"description-box"},n.a.createElement("h4",null,"SFS Law Office Website"),n.a.createElement("p",null,"This website is a SFS Law Office website located in Depok. The main feature on this website is client scheduling where clients can make schedules with lawyers."),n.a.createElement("span",{class:"categories"},n.a.createElement("i",{class:"fa fa-tag"}),"Website, Laravel, Law")),n.a.createElement("div",{class:"link-box"},n.a.createElement("a",{class:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-03",class:"popup-modal mfp-hide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/pkk.jpg",alt:""}),n.a.createElement("div",{class:"description-box"},n.a.createElement("h4",null,"Management Information System Website for PKK Kota Depok"),n.a.createElement("p",null,"This website is a website for managing data contained in Depok City PKK."),n.a.createElement("span",{class:"categories"},n.a.createElement("i",{class:"fa fa-tag"}),"Website, Government")),n.a.createElement("div",{class:"link-box"},n.a.createElement("a",{class:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-04",class:"popup-modal mfp-hide"},n.a.createElement("div",{class:"sliders"},n.a.createElement("figure",null,n.a.createElement("div",{class:"slide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/fisika.png",alt:""})),n.a.createElement("div",{class:"slide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/fisika1.png",alt:""})))),n.a.createElement("div",{class:"description-box"},n.a.createElement("h4",null,"Physics Learning Application"),n.a.createElement("p",null,"This application is a physics learning application for Class VIII Junior High School. This application has 4 menus namely basic competencies, materials, quizzes, and exams."),n.a.createElement("span",{class:"categories"},n.a.createElement("i",{class:"fa fa-tag"}),"Desktop Application, Learning, Adobe Animate")),n.a.createElement("div",{class:"link-box"},n.a.createElement("a",{class:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-05",class:"popup-modal mfp-hide"},n.a.createElement("div",{class:"sliders"},n.a.createElement("figure",null,n.a.createElement("div",{class:"slide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/gaji.jpg",alt:""})),n.a.createElement("div",{class:"slide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/gaji1.jpg",alt:""})))),n.a.createElement("div",{class:"description-box"},n.a.createElement("h4",null,"Employee Payroll Information System Application"),n.a.createElement("p",null,"This application is a desktop-based payroll system application. This application can add employee data, view absences, and calculate employee salaries."),n.a.createElement("span",{class:"categories"},n.a.createElement("i",{class:"fa fa-tag"}),"Desktop Application, Employee Payroll, VB.NET")),n.a.createElement("div",{class:"link-box"},n.a.createElement("a",{class:"popup-modal-dismiss"},"Close"))),n.a.createElement("div",{id:"modal-06",class:"popup-modal mfp-hide"},n.a.createElement("div",{class:"sliders"},n.a.createElement("figure",null,n.a.createElement("div",{class:"slide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/kredit.jpg",alt:""})),n.a.createElement("div",{class:"slide"},n.a.createElement("img",{class:"scale-with-grid",src:"images/portfolio/kredit1.jpg",alt:""})))),n.a.createElement("div",{class:"description-box"},n.a.createElement("h4",null,"Car Loan Transaction Application"),n.a.createElement("p",null,"This application is a car loan transaction application. The main feature of this application is calculating credit transactions. This application is a desktop based application."),n.a.createElement("span",{class:"categories"},n.a.createElement("i",{class:"fa fa-tag"}),"Desktop Application, Car Loan, C++")),n.a.createElement("div",{class:"link-box"},n.a.createElement("a",{class:"popup-modal-dismiss"},"Close"))))}}]),t}(l.Component),h=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){this.props.resumeData;return n.a.createElement(n.a.Fragment,null,n.a.createElement("footer",{id:"contactus"},n.a.createElement("div",{className:"row"},n.a.createElement("div",{className:"twelve columns"},n.a.createElement("ul",{className:"social-links"},n.a.createElement("li",null,n.a.createElement("a",{href:"mailto:prasastiaas@gmail.com"},n.a.createElement("i",{className:"fa fa-google-plus"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.linkedin.com/in/prasastia-aryani-saliha"},n.a.createElement("i",{className:"fa fa-linkedin"}))),n.a.createElement("li",null,n.a.createElement("a",{href:"https://www.github.com/prasastiatia"},n.a.createElement("i",{className:"fa fa-github"})))),n.a.createElement("ul",{className:"copyright"},n.a.createElement("li",null,"\xa9 Copyright 2020 Prasastia Resume"))),n.a.createElement("div",{id:"go-top"},n.a.createElement("a",{className:"smoothscroll",title:"Back to Top",href:"#home"},n.a.createElement("i",{className:"icon-up-open"})))))," ")}}]),t}(l.Component),f={imagebaseurl:"http://localhost:3000/",name:"Prasastia Aryani Saliha",role1:"Web Developer",role2:"Desktop Programmer",linkedin:"https://www.linkedin.com/in/prasastia-aryani-saliha",linkedinId:"Prasastia Aryani Saliha",github:"https://www.github.com/prasastiatia",instagram:"https://www.instagram.com/prasastiaasaliha/",email:"prasastiaas@gmail.com",address:"Depok, Jawa Barat",roleDescription:"I like to code. I'm interested in web and desktop programming.",socialLinks:[{name:"linkedin",url:"https://www.linkedin.com/in/prasastia-aryani-saliha",className:"fa fa-linkedin"},{name:"github",url:"http://github.com/prasastiatia",className:"fa fa-github"},{name:"email",url:"prasastiaas@gmail.com",className:"fa fa-email"}],aboutme:"I was born in Jakarta on August 15, 1997. The applications that I have made are Desktop Based Learning Applications, SFS Law Office Websites with Laravel Framework, and  Management Information System Website for PKK Kota Depok.",education:[{UniversityName:"Gunadarma University",specialization:"Bachelor of Science in Information Systems (S1)",GradYear:"2015-2019",GPA:"3.70 from 4.00",active:"Being assistant at Basic Physics Laboratory Gunadarma"}],experiences:[{companyName:"PT. Automata Neo Solutions",job:"Junior Web Developer",year:"Jan 2021 - Present",jobDesc:"Manage Data in SuiteCRM, Made chatbot whatsapp, Support at Technology",companyName1:"PT. Ruma Indonesia Digital",job1:"Junior Web Developer",year1:"Jul 2020 - Des 2020",jobDesc1:"Manage Data in SuiteCRM, Made chatbot whatsapp, Support at Technology",companyName2:"PKK Depok",job2:"Freelance Web Developer",year2:"Sep 2019 - Mar 2020",jobDesc2:"Make a website Management Information System for PKK in Depok",companyName3:"Basic Physics Laboratory of Gunadarma University",job3:"Assistant",year3:"Sep 2017 - Jan 2020",jobDesc3:"Help students to do a basic physics practicum"}],skillsDescription:"My Skills",skills:[{skillName1:"Web Programming",skillName2:"Database",skillName3:"Software Application",skillName4:"Desktop Programming",skillWeb1:"PHP (Framework Laravel and Codeigniter)",skillWeb2:"HTML",skillWeb3:"CSS and Bootstrap",skillWeb4:"Javascript and AJAX",skillWeb5:"ReactJS (a little bit)",skillWeb6:"Python",skillDb1:"MySQL",skillDesktop1:"Java (a little bit)",skillDesktop2:"VB 6 and VB.NET",skillDesktop3:"ActionScript 3.0",skillSoftware1:"Microsoft Office",skillSoftware2:"Adobe Animate CC ",skillSoftware3:"ERPNext",skillSoftware4:"SuiteCRM"}],portfolio:[{name:"Service Car Website",description:"Web App",imgurl:"images/portfolio/service.jpg",name1:"SFS Law Office Website",description1:"Web App",imgurl1:"images/portfolio/sfs.png",name2:"MIS Website for PKK Kota Depok",description2:"Web App",imgurl2:"images/portfolio/pkk.jpg",name3:"Physics Learning Application",description3:"Desktop App",imgurl3:"images/portfolio/fisika.png",name4:"Employee Payroll Information System Application",description4:"Desktop App",imgurl4:"images/portfolio/gaji.jpg",name5:"Car Loan Transaction Application",description5:"Desktop App",imgurl5:"images/portfolio/kredit.jpg"}]},v=function(e){Object(o.a)(t,e);var a=Object(m.a)(t);function t(){return Object(r.a)(this,t),a.apply(this,arguments)}return Object(c.a)(t,[{key:"render",value:function(){return n.a.createElement("div",{className:"App"},n.a.createElement(p,{resumeData:f}),n.a.createElement(u,{resumeData:f}),n.a.createElement(d,{resumeData:f}),n.a.createElement(E,{resumeData:f}),n.a.createElement(h,{resumeData:f}))}}]),t}(l.Component),g=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function b(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}i.a.render(n.a.createElement(v,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("/resume",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("/resume","/service-worker.js");g?(!function(e){fetch(e).then((function(a){404===a.status||-1===a.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):b(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://goo.gl/SC7cgQ")}))):b(e)}))}}()},7:function(e,a,t){e.exports=t(13)}},[[7,1,2]]]);
//# sourceMappingURL=main.78180571.chunk.js.map