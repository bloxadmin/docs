"use strict";(self.webpackChunkbloxadmin_docs=self.webpackChunkbloxadmin_docs||[]).push([[162],{3905:(e,t,a)=>{a.d(t,{Zo:()=>c,kt:()=>g});var r=a(7294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var s=r.createContext({}),u=function(e){var t=r.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(a),m=n,g=p["".concat(s,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(g,i(i({ref:t},c),{},{components:a})):r.createElement(g,i({ref:t},c))}));function g(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[p]="string"==typeof e?e:n,i[1]=l;for(var u=2;u<o;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},5162:(e,t,a)=>{a.d(t,{Z:()=>i});var r=a(7294),n=a(6010);const o={tabItem:"tabItem_Ymn6"};function i(e){let{children:t,hidden:a,className:i}=e;return r.createElement("div",{role:"tabpanel",className:(0,n.Z)(o.tabItem,i),hidden:a},t)}},4866:(e,t,a)=>{a.d(t,{Z:()=>v});var r=a(7462),n=a(7294),o=a(6010),i=a(2466),l=a(6550),s=a(1980),u=a(7392),c=a(12);function p(e){return function(e){return n.Children.map(e,(e=>{if(!e||(0,n.isValidElement)(e)&&function(e){const{props:t}=e;return!!t&&"object"==typeof t&&"value"in t}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}(e).map((e=>{let{props:{value:t,label:a,attributes:r,default:n}}=e;return{value:t,label:a,attributes:r,default:n}}))}function d(e){const{values:t,children:a}=e;return(0,n.useMemo)((()=>{const e=t??p(a);return function(e){const t=(0,u.l)(e,((e,t)=>e.value===t.value));if(t.length>0)throw new Error(`Docusaurus error: Duplicate values "${t.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[t,a])}function m(e){let{value:t,tabValues:a}=e;return a.some((e=>e.value===t))}function g(e){let{queryString:t=!1,groupId:a}=e;const r=(0,l.k6)(),o=function(e){let{queryString:t=!1,groupId:a}=e;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return a??null}({queryString:t,groupId:a});return[(0,s._X)(o),(0,n.useCallback)((e=>{if(!o)return;const t=new URLSearchParams(r.location.search);t.set(o,e),r.replace({...r.location,search:t.toString()})}),[o,r])]}function h(e){const{defaultValue:t,queryString:a=!1,groupId:r}=e,o=d(e),[i,l]=(0,n.useState)((()=>function(e){let{defaultValue:t,tabValues:a}=e;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!m({value:t,tabValues:a}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${t}" but none of its children has the corresponding value. Available values are: ${a.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return t}const r=a.find((e=>e.default))??a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:t,tabValues:o}))),[s,u]=g({queryString:a,groupId:r}),[p,h]=function(e){let{groupId:t}=e;const a=function(e){return e?`docusaurus.tab.${e}`:null}(t),[r,o]=(0,c.Nk)(a);return[r,(0,n.useCallback)((e=>{a&&o.set(e)}),[a,o])]}({groupId:r}),b=(()=>{const e=s??p;return m({value:e,tabValues:o})?e:null})();(0,n.useLayoutEffect)((()=>{b&&l(b)}),[b]);return{selectedValue:i,selectValue:(0,n.useCallback)((e=>{if(!m({value:e,tabValues:o}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),h(e)}),[u,h,o]),tabValues:o}}var b=a(2389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function y(e){let{className:t,block:a,selectedValue:l,selectValue:s,tabValues:u}=e;const c=[],{blockElementScrollPositionUntilNextRender:p}=(0,i.o5)(),d=e=>{const t=e.currentTarget,a=c.indexOf(t),r=u[a].value;r!==l&&(p(t),s(r))},m=e=>{let t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const a=c.indexOf(e.currentTarget)+1;t=c[a]??c[0];break}case"ArrowLeft":{const a=c.indexOf(e.currentTarget)-1;t=c[a]??c[c.length-1];break}}t?.focus()};return n.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,o.Z)("tabs",{"tabs--block":a},t)},u.map((e=>{let{value:t,label:a,attributes:i}=e;return n.createElement("li",(0,r.Z)({role:"tab",tabIndex:l===t?0:-1,"aria-selected":l===t,key:t,ref:e=>c.push(e),onKeyDown:m,onClick:d},i,{className:(0,o.Z)("tabs__item",f.tabItem,i?.className,{"tabs__item--active":l===t})}),a??t)})))}function k(e){let{lazy:t,children:a,selectedValue:r}=e;const o=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){const e=o.find((e=>e.props.value===r));return e?(0,n.cloneElement)(e,{className:"margin-top--md"}):null}return n.createElement("div",{className:"margin-top--md"},o.map(((e,t)=>(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r}))))}function N(e){const t=h(e);return n.createElement("div",{className:(0,o.Z)("tabs-container",f.tabList)},n.createElement(y,(0,r.Z)({},e,t)),n.createElement(k,(0,r.Z)({},e,t)))}function v(e){const t=(0,b.Z)();return n.createElement(N,(0,r.Z)({key:String(t)},e))}},9390:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>u,default:()=>h,frontMatter:()=>s,metadata:()=>c,toc:()=>d});var r=a(7462),n=a(7294),o=a(3905),i=a(4866),l=a(5162);const s={sidebar_position:1},u="Getting Started",c={unversionedId:"getting-started",id:"getting-started",title:"Getting Started",description:"Installing bloxadmin to your game is easy.",source:"@site/docs/getting-started.md",sourceDirName:".",slug:"/getting-started",permalink:"/docs/getting-started",draft:!1,editUrl:"https://github.com/bloxadmin/docs/tree/main/docs/docs/getting-started.md",tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tutorialSidebar",next:{title:"Guides",permalink:"/docs/category/guides"}},p={},d=[{value:"Get API key",id:"get-api-key",level:2},{value:"Add to game",id:"add-to-game",level:2},{value:"Publish",id:"publish",level:2}],m={toc:d},g="wrapper";function h(e){let{components:t,...s}=e;return(0,o.kt)(g,(0,r.Z)({},m,s,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"getting-started"},"Getting Started"),(0,o.kt)("p",null,"Installing bloxadmin to your game is easy."),(0,o.kt)("h2",{id:"get-api-key"},"Get API key"),(0,o.kt)("p",null,"bloxadmin uses API keys provided by Roblox for authentication. We do this to prove that the data\ncoming into bloxadmin comes from your game by using the messaging service to verify a key's\nauthenticity periodically."),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Login to the Roblox creator dashboard ",(0,o.kt)("a",{parentName:"strong",href:"https://create.roblox.com/dashboard/creations"},"https://create.roblox.com/dashboard/creations")))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"At the top left, verify you are in the correct group if any.")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"image",src:a(8258).Z,width:"399",height:"303"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'Go to "Credentials" on the left sidebar'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'Click "Create API Key" Will be on the top right if you already have keys, otherwise in the center')),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"image",src:a(5527).Z,width:"196",height:"57"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},'Name the key whatever you like, such as "bloxadmin"'),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"image",src:a(9526).Z,width:"1116",height:"507"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Under access permissions:")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},'Under the "Select API System" dropdown, select "Messaging Service API"'),(0,o.kt)("li",{parentName:"ul"},'Under the new dropdown labeled "Select an Experience" select the game that this API key will be used for'),(0,o.kt)("li",{parentName:"ul"},'Press "Add Experience"'),(0,o.kt)("li",{parentName:"ul"},'Under the "Experience Operations" dropdown, select "Publish"'),(0,o.kt)("li",{parentName:"ul"},"Do this for every game you wish to add to bloxadmin using this key"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"image",src:a(295).Z,width:"1121",height:"402"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Under security, add the IP ",(0,o.kt)("inlineCode",{parentName:"strong"},"0.0.0.0/0")," and verify that there is no expiration set")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},"You may of course set an expiration date, but bloxadmin will stop working after that time and\nyou will be required to update the API key in your games"),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("img",{alt:"image",src:a(881).Z,width:"1118",height:"527"})))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},'Click "Save & Generate Key"'))),(0,o.kt)("li",{parentName:"ol"},(0,o.kt)("p",{parentName:"li"},(0,o.kt)("strong",{parentName:"p"},"Copy the API key it gives you and note it down for use later")),(0,o.kt)("ul",{parentName:"li"},(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("admonition",{parentName:"li",type:"danger"},(0,o.kt)("p",{parentName:"admonition"},(0,o.kt)("strong",{parentName:"p"},"Note!")," Copy the API Key before closing the page and save it to a secure place. Roblox will NOT store the key for security reasons."))),(0,o.kt)("li",{parentName:"ul"},"Your key should look something like this: ",(0,o.kt)("inlineCode",{parentName:"li"},"Ojj2UBWUC0S+qn3F3aavirWfezWS7ti9CeuFuceh3eHf9Au8"))))),(0,o.kt)("h2",{id:"add-to-game"},"Add to game"),(0,o.kt)("p",null,"Using the API Key you got in the previous steps, copy the code below into your\ngame replacing ",(0,o.kt)("inlineCode",{parentName:"p"},"API_KEY")," with your API key."),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(l.Z,{value:"lua",label:(0,o.kt)(n.Fragment,null,"Lua",(0,o.kt)("i",null,"u")),mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-lua"},'require(7586411088)("API_KEY")\n'))),(0,o.kt)(l.Z,{value:"ts",label:"Roblox TS",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},'// First-party TypeScript types will be published soon\nrequire(7586411088)("API_KEY");\n')))),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Make sure you add the code in a ",(0,o.kt)("strong",{parentName:"p"},"server script"),". bloxadmin will ",(0,o.kt)("strong",{parentName:"p"},"not")," run on the client. And\nattempting to run it on the client could expose sensitive information to malicious actors.")),(0,o.kt)("h2",{id:"publish"},"Publish"),(0,o.kt)("p",null,"Publish your game and the next time a server is started bloxadmin will connect\nand start receiving data."),(0,o.kt)("p",null,"After the game connects to bloxadmin for the first time, the ",(0,o.kt)("strong",{parentName:"p"},"owner")," can go to\n",(0,o.kt)("a",{parentName:"p",href:"https://bloxadmin.com"},"the dashboard")," and see it in their game list. If the game is owned by a\ngroup, the owner of the group is used. If you do not see the game, contact our support on Discord\nat ",(0,o.kt)("a",{parentName:"p",href:"https://discord.gg/ZNENruRTeG"},"https://discord.gg/ZNENruRTeG")," or at ",(0,o.kt)("a",{parentName:"p",href:"mailto:support@bloxadmin.com"},"support@bloxadmin.com"),"."))}h.isMDXComponent=!0},5527:(e,t,a)=>{a.d(t,{Z:()=>r});const r="data:image/png;base64,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"},9526:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/getting-started--api-key--general-461f3091e880d2a6e2929d608570d7b0.png"},8258:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/getting-started--api-key--group-c89e60ab75fa3699ca19d346d0ffed0c.png"},295:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/getting-started--api-key--permissions-4549015e9f3795d701859cfdf1ea720a.png"},881:(e,t,a)=>{a.d(t,{Z:()=>r});const r=a.p+"assets/images/getting-started--api-key--security-3d9897865864ac66ce3dbd837c47ff45.png"}}]);