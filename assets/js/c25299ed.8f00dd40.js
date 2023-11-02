"use strict";(self.webpackChunkbloxadmin_docs=self.webpackChunkbloxadmin_docs||[]).push([[232],{5566:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(5893),a=t(1151),i=t(4866),s=t(5162);const o={sidebar_position:3},l="Remote Config",c={id:"guides/remote-config",title:"Remote Config",description:"Remote config is a very simple Key-value store similar to",source:"@site/docs/guides/remote-config.md",sourceDirName:"guides",slug:"/guides/remote-config",permalink:"/docs/guides/remote-config",draft:!1,unlisted:!1,editUrl:"https://github.com/bloxadmin/docs/tree/main/docs/docs/guides/remote-config.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Using The Roblox Library",permalink:"/docs/guides/using-more-features"},next:{title:"Promotion Codes",permalink:"/docs/guides/promo-codes"}},u={},d=[{value:"When to use Remote Config",id:"when-to-use-remote-config",level:2},{value:"When not to use Remote config",id:"when-not-to-use-remote-config",level:2},{value:"Creating and Updating",id:"creating-and-updating",level:2},{value:"In game setup",id:"in-game-setup",level:2},{value:"Limits",id:"limits",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",i:"i",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"remote-config",children:"Remote Config"}),"\n",(0,r.jsxs)(n.p,{children:["Remote config is a very simple Key-value store similar to\n",(0,r.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Environment_variable",children:"Environment variables"}),"\ninspired by\n",(0,r.jsx)(n.a,{href:"https://firebase.google.com/docs/remote-config",children:"Firebase's remote config"})," that\ncan be updated live from the ",(0,r.jsx)(n.a,{href:"https://bloxadmin.com",children:"dashboard"})]}),"\n",(0,r.jsx)(n.h2,{id:"when-to-use-remote-config",children:"When to use Remote Config"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Daily or weekly in-game shop changes"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Cost of in-game items"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A list of users with admin privilges on the game"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Enable and disable features of your game live"}),"\n"]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["Have another use-case? Tell us about it on Discord\n",(0,r.jsx)(n.a,{href:"https://discord.gg/ZNENruRTeG",children:"https://discord.gg/ZNENruRTeG"}),", we'd love to hear!"]}),"\n",(0,r.jsx)(n.h2,{id:"when-not-to-use-remote-config",children:"When not to use Remote config"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Don't use Remote Config to store player data"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Don't use Remote Config for data that updates very often"}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"creating-and-updating",children:"Creating and Updating"}),"\n",(0,r.jsxs)(n.p,{children:["To update the Remote Config head to the ",(0,r.jsx)(n.a,{href:"https://bloxadmin.com",children:"dashboard"}),' and\nselect your game. On the sidebar select "Data" and scroll to the "Remote Config"']}),"\n",(0,r.jsx)(n.p,{children:'At first you won\'t have anything configured, but to get started click "Create"\nat the top right. Enter a name for the parameter and a value.'}),"\n",(0,r.jsx)(n.p,{children:"For example:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["Name: ",(0,r.jsx)(n.code,{children:"my_parameter"})]}),"\n",(0,r.jsxs)(n.li,{children:["Value: ",(0,r.jsx)(n.code,{children:"This is an example value"})]}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"Click save!"}),"\n",(0,r.jsx)(n.h2,{id:"in-game-setup",children:"In game setup"}),"\n",(0,r.jsx)(i.Z,{children:(0,r.jsx)(s.Z,{value:"lua",label:(0,r.jsxs)(r.Fragment,{children:["Lua",(0,r.jsx)(n.i,{children:"u"})]}),children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-lua",children:'bloxadmin:getRemoteConfig():watch("my_parameter", function(my_parameter)\n  if my_parameter == nil then\n    print("\'my_parameter\' is not set!")\n\n    return\n  end\n\n  print("\'my_parameter\' is set to: " .. my_parameter)\nend)\n'})})})}),"\n",(0,r.jsxs)(n.p,{children:["Once the game connects to bloxadmin, the ",(0,r.jsx)(n.code,{children:"watch"})," callback is called with the\ncurrently set value. If the parameter does not exist, the callback will be\ncalled with ",(0,r.jsx)(n.code,{children:"nil"})," (",(0,r.jsx)(n.code,{children:"undefined"})," in roblox-ts)."]}),"\n",(0,r.jsxs)(n.p,{children:["If the parameter value is updated on the bloxadmin dashboard, the ",(0,r.jsx)(n.code,{children:"watch"}),"\ncallback will be called with the new value (updates typically take up to 15\nseconds)."]}),"\n",(0,r.jsx)(n.h2,{id:"limits",children:"Limits"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"A game can have up to 2000 Remote Config parameters"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A Remote Config parameter name can not start with a ",(0,r.jsx)(n.code,{children:"!"})," or ",(0,r.jsx)(n.code,{children:"$"})]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsx)(n.p,{children:"Remote Config parameter names have a max length of 28 characters"}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["A Remote config value can only be of type ",(0,r.jsx)(n.code,{children:"string"})]}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>s});t(7294);var r=t(6010);const a={tabItem:"tabItem_Ymn6"};var i=t(5893);function s(e){let{children:n,hidden:t,className:s}=e;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(7294),a=t(6010),i=t(2466),s=t(6550),o=t(469),l=t(1980),c=t(7392),u=t(12);function d(e){return r.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,r.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,r.useMemo)((()=>{const e=n??function(e){return d(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,c.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const a=(0,s.k6)(),i=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(i),(0,r.useCallback)((e=>{if(!i)return;const n=new URLSearchParams(a.location.search);n.set(i,e),a.replace({...a.location,search:n.toString()})}),[i,a])]}function f(e){const{defaultValue:n,queryString:t=!1,groupId:a}=e,i=h(e),[s,l]=(0,r.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:i}))),[c,d]=p({queryString:t,groupId:a}),[f,g]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[a,i]=(0,u.Nk)(t);return[a,(0,r.useCallback)((e=>{t&&i.set(e)}),[t,i])]}({groupId:a}),b=(()=>{const e=c??f;return m({value:e,tabValues:i})?e:null})();(0,o.Z)((()=>{b&&l(b)}),[b]);return{selectedValue:s,selectValue:(0,r.useCallback)((e=>{if(!m({value:e,tabValues:i}))throw new Error(`Can't select invalid tab value=${e}`);l(e),d(e),g(e)}),[d,g,i]),tabValues:i}}var g=t(2389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(5893);function v(e){let{className:n,block:t,selectedValue:r,selectValue:s,tabValues:o}=e;const l=[],{blockElementScrollPositionUntilNextRender:c}=(0,i.o5)(),u=e=>{const n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),s(a))},d=e=>{let n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((e=>{let{value:n,label:t,attributes:i}=e;return(0,x.jsx)("li",{role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:e=>l.push(e),onKeyDown:d,onClick:u,...i,className:(0,a.Z)("tabs__item",b.tabItem,i?.className,{"tabs__item--active":r===n}),children:t??n},n)}))})}function j(e){let{lazy:n,children:t,selectedValue:a}=e;const i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=i.find((e=>e.props.value===a));return e?(0,r.cloneElement)(e,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map(((e,n)=>(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=f(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,{...e,...n}),(0,x.jsx)(j,{...e,...n})]})}function w(e){const n=(0,g.Z)();return(0,x.jsx)(y,{...e,children:d(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(7294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);