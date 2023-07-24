"use strict";(self.webpackChunkbloxadmin_docs=self.webpackChunkbloxadmin_docs||[]).push([[963],{3905:(e,t,a)=>{a.d(t,{Zo:()=>m,kt:()=>A});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),p=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=p(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,m=l(e,["components","mdxType","originalType","parentName"]),c=p(a),u=r,A=c["".concat(s,".").concat(u)]||c[u]||d[u]||o;return a?n.createElement(A,i(i({ref:t},m),{},{components:a})):n.createElement(A,i({ref:t},m))}));function A(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,i=new Array(o);i[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[c]="string"==typeof e?e:r,i[1]=l;for(var p=2;p<o;p++)i[p]=a[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},3441:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>p});var n=a(7462),r=(a(7294),a(3905));const o={sidebar_position:1},i="Roblox Open Cloud",l={unversionedId:"guides/cloud-api",id:"guides/cloud-api",title:"Roblox Open Cloud",description:"The Roblox Open Cloud API is",source:"@site/docs/guides/cloud-api.md",sourceDirName:"guides",slug:"/guides/cloud-api",permalink:"/docs/guides/cloud-api",draft:!1,editUrl:"https://github.com/bloxadmin/docs/tree/main/docs/docs/guides/cloud-api.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",previous:{title:"Guides",permalink:"/docs/category/guides"},next:{title:"Using The Roblox Library",permalink:"/docs/guides/using-more-features"}},s={},p=[{value:"Get API key",id:"get-api-key",level:2}],m={toc:p},c="wrapper";function d(e){let{components:t,...o}=e;return(0,r.kt)(c,(0,n.Z)({},m,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"roblox-open-cloud"},"Roblox Open Cloud"),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://create.roblox.com/docs/cloud/open-cloud"},"Roblox Open Cloud API")," is\nan offical Roblox API that allows third-party services, such as bloxadmin, to\ninteract with Roblox and perform actions on a user's behalf."),(0,r.kt)("p",null,"bloxadmin uses API keys provided by Roblox for a more stable way to send\nmessages to your Roblox games and improve security. In addition, bloxadmin uses\nthe keys for other optional functionality such as the datastore viewer. As\nRoblox creates more APIs under Open Cloud, bloxadmin will be right there behind\nthem to use it to give you more features."),(0,r.kt)("h2",{id:"get-api-key"},"Get API key"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Login to the Roblox creator dashboard\n",(0,r.kt)("a",{parentName:"strong",href:"https://create.roblox.com/dashboard/creations"},"https://create.roblox.com/dashboard/creations")))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"At the top left, verify you are in the correct group if any.")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"group selector",src:a(9461).Z,width:"399",height:"303"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'Go to "Credentials" on the left sidebar'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'Click "Create API Key" Will be on the top right if you already have keys,\notherwise in the center')),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"create api key",src:a(7721).Z,width:"196",height:"57"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},'Name the key whatever you like, such as "bloxadmin"'),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"general information",src:a(320).Z,width:"1116",height:"507"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Under access permissions:")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},'Under the "Select API System" dropdown, select "Messaging Service API"'),(0,r.kt)("li",{parentName:"ul"},'Under the new dropdown labeled "Select an Experience" select the game that\nthis API key will be used for'),(0,r.kt)("li",{parentName:"ul"},'Press "Add Experience"'),(0,r.kt)("li",{parentName:"ul"},'Under the "Experience Operations" dropdown, select "Publish"'),(0,r.kt)("li",{parentName:"ul"},"Do this for every game you wish to add to bloxadmin using this key"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"access permissions",src:a(9933).Z,width:"1121",height:"402"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Under security, add the IP ",(0,r.kt)("inlineCode",{parentName:"strong"},"0.0.0.0/0")," and verify that there is no\nexpiration set")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"You may of course set an expiration date, but bloxadmin will stop working\nafter that time and you will be required to update the API key in your\ngames"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"security",src:a(7717).Z,width:"1118",height:"527"})))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},'Click "Save & Generate Key"'))),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"Copy the API key it gives you and note it down for use later")),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("admonition",{parentName:"li",type:"danger"},(0,r.kt)("mdxAdmonitionTitle",{parentName:"admonition"},(0,r.kt)("strong",{parentName:"mdxAdmonitionTitle"},"Note!")," Copy the API Key before closing the page and save it to"),(0,r.kt)("p",{parentName:"admonition"},"a secure place. Roblox will NOT store the key for security reasons. :::"))),(0,r.kt)("li",{parentName:"ul"},"Your key should look something like this:\n",(0,r.kt)("inlineCode",{parentName:"li"},"Ojj2UBWUC0S+qn3F3aavirWfezWS7ti9CeuFuceh3eHf9Au8"))))),(0,r.kt)("h1",{id:"save-the-key-to-bloxadmin"},"Save the Key to bloxadmin"),(0,r.kt)("p",null,"Now that you have the key, we need to save it on bloxadmin for it to be used."),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Go to the ",(0,r.kt)("a",{parentName:"li",href:"https://bloxadmin.com/games"},"bloxadmin dashboard")),(0,r.kt)("li",{parentName:"ol"},"Navigate to the game you created the key for"),(0,r.kt)("li",{parentName:"ol"},'Go to the "Settings" page for the game',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"Settings tab",src:a(1263).Z,width:"254",height:"49"})))),(0,r.kt)("li",{parentName:"ol"},'Find the "Roblox Config" card',(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("img",{alt:"Roblox config card",src:a(7032).Z,width:"851",height:"180"})))),(0,r.kt)("li",{parentName:"ol"},"Enter your Open Cloud API Key and click save"),(0,r.kt)("li",{parentName:"ol"},"You're done!")))}d.isMDXComponent=!0},7032:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/config-158a249ac3bef03bfcc71038d8c6e6e3.png"},7721:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"},320:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/general-461f3091e880d2a6e2929d608570d7b0.png"},9461:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/group-c89e60ab75fa3699ca19d346d0ffed0c.png"},9933:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/permissions-4549015e9f3795d701859cfdf1ea720a.png"},7717:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/security-3d9897865864ac66ce3dbd837c47ff45.png"},1263:(e,t,a)=>{a.d(t,{Z:()=>n});const n="data:image/png;base64,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"}}]);