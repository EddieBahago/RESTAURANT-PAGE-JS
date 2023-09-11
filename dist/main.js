(()=>{"use strict";function e(e,t,n){e.style.textDecoration="underline",t.style.textDecoration="none",n.style.textDecoration="none"}function t(){const e=document.getElementById("infoSection");let t=document.createElement("h4");t.id="missionStatement",e.appendChild(t),t.innerHTML="Great Food, Great Drinks, Great Times"}!function(){const e=document.getElementById("content");function t(e,t,n){let o=document.createElement(t);o.id=e,n.appendChild(o)}function n(e,t,n,o){let a=document.createElement(t);a.id=e,a.innerHTML=o,n.appendChild(a)}t("pageHeader","header",e);let o=document.getElementById("pageHeader");t("infoSection","section",e),t("pageFooter","footer",e);let a=document.getElementById("pageFooter");n("name","h1",o,"The Last Stop"),n("hoursTitle","h3",a,"Hours"),n("hoursText","p",a,"Tues - Sat: 11:30 am - 10:00 pm </br>\n        Sunday: 3:00 pm - 9:30 pm</br>\n        Monday: Closed"),n("contactTitle","h3",a,"Contact"),n("contactText","p",a,"914-555-5555</br>\n        info@thelaststop.com</br>\n        724 Cambridge Place, Derry, PA"),t("navTabs","nav",o);const d=document.getElementById("navTabs"),i=document.createElement("ul");i.id="navList",d.appendChild(i),n("homeButton","li",i,"<a>Home</a>");const m=document.getElementById("homeButton");m.className="navBtn",m.style.textDecoration="underline",n("menuButton","li",i,"<a>Menu</a>"),document.getElementById("menuButton").className="navBtn",n("aboutButton","li",i,"<a>About</a>"),document.getElementById("aboutButton").className="navBtn"}(),t();let n=document.getElementById("homeButton"),o=document.getElementById("menuButton"),a=document.getElementById("aboutButton");document.getElementById("homeButton").addEventListener("click",(function(){e(n,o,a);const d=document.getElementById("infoSection");for(;d.firstChild;)d.removeChild(d.lastChild);t()})),document.getElementById("menuButton").addEventListener("click",(function(){e(o,n,a);const t=document.getElementById("infoSection");for(;t.firstChild;)t.removeChild(t.lastChild);!function(){const e=document.getElementById("infoSection"),t=(document.getElementById("infoSection"),document.createElement("h4"));function n(e,t,n,o){let a=document.createElement("h5");a.id=e,a.className=t,n.appendChild(a),a.innerHTML=o}function o(t,n){let o=document.createElement("h5");o.className=t,e.appendChild(o),o.innerHTML=n}function a(e,t,n){let o=document.createElement("p");o.className=e,t.appendChild(o),o.innerHTML=n,o.style.fontWeight=300}t.id="menuInfo",t.innerHTML="Menu",e.appendChild(t),n("starters","menuSection",e,"Starters"),document.getElementById("starters"),o("itemName","-- Chicken Tenders -- $13"),a("foodItem",e,"<em>Spiced to perfection</br>\n        served with siracha slaw.</em>"),o("itemName","-- Nachos -- $11/15"),a("foodItem",e,"<em>Add chicken, pork or chili.</em>"),o("itemName","-- Wings -- $9"),a("foodItem",e,"<em>Buffalo, garlic parm, mango habanero</br>\n        siracha agave, BBQ, Nashville.</em>"),n("salads","menuSection",e,"Salads"),document.getElementById("salads"),o("itemName","-- Ceasar Salad -- $11"),a("foodItem",e,"<em>Romaine tossed with Ceasar dressing</br>\n        topped with parmesean and herbed croutons.</em>"),o("itemName","-- Cobb Salad -- $15"),a("foodItem",e,"<em>Romaine, diced tomato, crumbled blue cheese</br>\n        bacon bits, chopped egg, avacado, grilled chicken.</em>"),n("entrees","menuSection",e,"Entrees"),document.getElementById("entrees"),o("itemName","-- Beef Bolognese -- $16"),a("foodItem",e,"<em>Pepperdelle, ground sirloin, parmesean</br>\n        side of bread.</em>"),o("itemName","-- NY Strip -- $26"),a("foodItem",e,"<em>Prime cut beef, crispy onions</br>\n        choice of two sides.</em>"),o("itemName","-- Penne Alla Vodka -- $15"),a("foodItem",e,"<em>Chicken +3 / Shrimp +5.</em>"),n("sides","menuSection",e,"Sides"),document.getElementById("sides"),a("foodItem",e,"-- Sauteed Spinach --"),a("foodItem",e,"-- Mashed Potatoes --"),a("foodItem",e,"-- Steamed Broccoli --"),a("foodItem",e,"-- Coleslaw --"),a("foodItem",e,"-- Brussel Sprouts --"),a("foodItem",e,"-- Rice --")}()})),document.getElementById("aboutButton").addEventListener("click",(function(){e(a,o,n);const t=document.getElementById("infoSection");for(;t.firstChild;)t.removeChild(t.lastChild);!function(){const e=document.getElementById("infoSection"),t=document.createElement("h4");t.id="aboutContainer",t.innerHTML="About",e.appendChild(t);let n=document.createElement("p");n.id="aboutInfo",e.appendChild(n),n.innerHTML="A local hotspot for over 15 years, specializing in great\n        food and a friendly atmosphere. This restaurant is located one\n        minute form the Metro North train station. A great resting spot \n        after a long day, or a pleasant getaway for a night out. With \n        new specials and tasty cocktails that change weekly, there will \n        always be something new to try. So come stop by, and experience a \n        the best that Westchester has to offer. "}()}))})();