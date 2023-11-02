"use strict";(self.webpackChunkbloxadmin_docs=self.webpackChunkbloxadmin_docs||[]).push([[831],{4008:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>l,default:()=>m,frontMatter:()=>a,metadata:()=>d,toc:()=>u});var o=t(5893),r=t(1151),s=t(4866),i=t(5162);const a={sidebar_position:4},l="Promotion Codes",d={id:"guides/promo-codes",title:"Promotion Codes",description:"Promotion codes, or promo codes, are in-game codes player can use to access",source:"@site/docs/guides/promo-codes.md",sourceDirName:"guides",slug:"/guides/promo-codes",permalink:"/docs/guides/promo-codes",draft:!1,unlisted:!1,editUrl:"https://github.com/bloxadmin/docs/tree/main/docs/docs/guides/promo-codes.md",tags:[],version:"current",sidebarPosition:4,frontMatter:{sidebar_position:4},sidebar:"tutorialSidebar",previous:{title:"Remote Config",permalink:"/docs/guides/remote-config"},next:{title:"Troubleshooting",permalink:"/docs/troubleshooting"}},c={},u=[{value:"When to use Promotion Codes",id:"when-to-use-promotion-codes",level:2},{value:"When not to use Promotion Codes",id:"when-not-to-use-promotion-codes",level:2},{value:"Creating and Updating",id:"creating-and-updating",level:2},{value:"In game setup",id:"in-game-setup",level:2},{value:"Limits",id:"limits",level:2}];function h(e){const n={a:"a",code:"code",h1:"h1",h2:"h2",i:"i",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"promotion-codes",children:"Promotion Codes"}),"\n",(0,o.jsx)(n.p,{children:"Promotion codes, or promo codes, are in-game codes player can use to access\ncontent or gain in-game items."}),"\n",(0,o.jsx)(n.h2,{id:"when-to-use-promotion-codes",children:"When to use Promotion Codes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Reward your players for staying up to date with your social media"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Reward members in your Discord with exclusive in-game items"}),"\n"]}),"\n"]}),"\n",(0,o.jsxs)(n.p,{children:["Have another use-case? Tell us about it on Discord\n",(0,o.jsx)(n.a,{href:"https://discord.gg/ZNENruRTeG",children:"https://discord.gg/ZNENruRTeG"}),", we'd love to hear!"]}),"\n",(0,o.jsx)(n.h2,{id:"when-not-to-use-promotion-codes",children:"When not to use Promotion Codes"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Don't use promotion codes as a coupon system"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Don't use promotion codes for reoccuring rewards"}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"creating-and-updating",children:"Creating and Updating"}),"\n",(0,o.jsxs)(n.p,{children:["To update the Promotion Codes head to the ",(0,o.jsx)(n.a,{href:"https://bloxadmin.com",children:"dashboard"}),' and\nselect your game. On the sidebar select "Data" and scroll to the "Promotion\nCodes"']}),"\n",(0,o.jsx)(n.p,{children:'At first you won\'t have anything configured, but to get started click the\n"Create" icon at the top right. Enter a name for the code and click Add. Then,\nconfigure your code and click save!'}),"\n",(0,o.jsx)(n.p,{children:"Some configuration options include:"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Active"}),": Whether or not the code is active and can be redeemed. If you want\nto disable a code, but not delete it, you can set this to false"]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Uses"}),": The number of times the code can be redeemed. Setting this to 0 will\nallow the code to be redeemed an unlimited number of times."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Starts"})," (coming soon): The date and time the code will become redeemable.\nBefore this date, the code will not be redeemable."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Expires"})," (coming soon): The date and time the code will expire. After this\ndate, the code will no longer be redeemable."]}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsxs)(n.p,{children:[(0,o.jsx)(n.strong,{children:"Attributes"}),": A list of key value pairs that can be used to store any\ninformation you want. For example, you could use this to store the item a\nplayer should receive when redeeming the code. For example:"]}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["Key: ",(0,o.jsx)(n.code,{children:"item"})]}),"\n",(0,o.jsxs)(n.li,{children:["Value: ",(0,o.jsx)(n.code,{children:"Sword of the Undead"})]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(n.h2,{id:"in-game-setup",children:"In game setup"}),"\n",(0,o.jsx)(s.Z,{children:(0,o.jsxs)(i.Z,{value:"lua",label:(0,o.jsxs)(o.Fragment,{children:["Lua",(0,o.jsx)(n.i,{children:"u"})]}),children:[(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-lua",children:'-- Player is the player redeeming the code\n-- Code is the code the player is redeeming\nbloxadmin:GetService("PromoCodes"):ClaimCode(player, code)\n  :andThen(function (code)\n    print("Promo code claimed!")\n    \n    -- The promo code has been claimed by the user!\n    \n    -- Use code.attributes to access the table of attributes you set on the dashboard\t\n    print(code.attributes)\n    \n    -- Additionally you can access other variables about the promo code\n    print("This promo code has been used " .. tostring(code.used) .. " times")\n  end)\n  :catch(function (result)\n    print("Promo code error")\n    \n    -- The promo code could not be claimed\n    -- It\'s up to you what to tell your user depending on the error code\n    \n    if result == "not_found" then\n      print("Promo code not found")\n    elseif result == "expired" then\n      print("Promo code has expired")\n    elseif result == "not_started" then\n      print("Promo code has not started")\n    elseif result == "already_used" then\n      print("You have already used this promo code")\n    else \n      print("Unknown error")\n    end\n  end)\n'})}),(0,o.jsxs)(n.p,{children:["When a player inputs a code to be redeemed, you can use the code above to\nattempt to redeem the code. If the code is valid, the code will be redeemed and\nthe ",(0,o.jsx)(n.code,{children:"andThen"})," callback will be called with the ",(0,o.jsx)(n.code,{children:"PromoCode"})," object. If the code\nis invalid, the ",(0,o.jsx)(n.code,{children:"catch"})," callback will be called with a string representing the\nerror."]}),(0,o.jsx)(n.p,{children:"Errors include:"}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"not_found"'}),": The code does not exist"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"expired"'}),": The code has expired"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"not_started"'}),": The code has not started"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:'"already_used"'}),": The player has already redeemed the code"]}),"\n"]}),(0,o.jsxs)(n.p,{children:["The ",(0,o.jsx)(n.code,{children:"PromoCode"})," object has the following properties:"]}),(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"code"}),": The code the player redeemed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"attributes"}),": A table of attributes you set on the dashboard"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"used"}),": The number of times the code has been redeemed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"uses"}),"?: The number of times the code can be redeemed"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"active"}),": Whether or not the code is active"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"expires"}),"?: The date and time the code will expire"]}),"\n",(0,o.jsxs)(n.li,{children:[(0,o.jsx)(n.code,{children:"starts"}),"?: The date and time the code will become redeemable"]}),"\n"]}),(0,o.jsxs)(n.p,{children:["(? = the property is optional and may be ",(0,o.jsx)(n.code,{children:"nil"}),")"]})]})}),"\n",(0,o.jsx)(n.h2,{id:"limits",children:"Limits"}),"\n",(0,o.jsxs)(n.ul,{children:["\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Each player can only redeem a code once"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A game on the free plan can have up to 10 Promotion Codes"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"A game on the pro plan can have up to 250 Promotion Codes"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Promotion Codes can be up to 32 characters long"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Promotion Codes can only contain letters, numbers and underscores"}),"\n"]}),"\n",(0,o.jsxs)(n.li,{children:["\n",(0,o.jsx)(n.p,{children:"Promotion Codes are case insensitive and will be converted to uppercase"}),"\n"]}),"\n"]})]})}function m(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},5162:(e,n,t)=>{t.d(n,{Z:()=>i});t(7294);var o=t(6010);const r={tabItem:"tabItem_Ymn6"};var s=t(5893);function i(e){let{children:n,hidden:t,className:i}=e;return(0,s.jsx)("div",{role:"tabpanel",className:(0,o.Z)(r.tabItem,i),hidden:t,children:n})}},4866:(e,n,t)=>{t.d(n,{Z:()=>w});var o=t(7294),r=t(6010),s=t(2466),i=t(6550),a=t(469),l=t(1980),d=t(7392),c=t(12);function u(e){return o.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,o.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function h(e){const{values:n,children:t}=e;return(0,o.useMemo)((()=>{const e=n??function(e){return u(e).map((e=>{let{props:{value:n,label:t,attributes:o,default:r}}=e;return{value:n,label:t,attributes:o,default:r}}))}(t);return function(e){const n=(0,d.l)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function m(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function p(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.k6)(),s=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,l._X)(s),(0,o.useCallback)((e=>{if(!s)return;const n=new URLSearchParams(r.location.search);n.set(s,e),r.replace({...r.location,search:n.toString()})}),[s,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,s=h(e),[i,l]=(0,o.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const o=t.find((e=>e.default))??t[0];if(!o)throw new Error("Unexpected error: 0 tabValues");return o.value}({defaultValue:n,tabValues:s}))),[d,u]=p({queryString:t,groupId:r}),[x,b]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,s]=(0,c.Nk)(t);return[r,(0,o.useCallback)((e=>{t&&s.set(e)}),[t,s])]}({groupId:r}),j=(()=>{const e=d??x;return m({value:e,tabValues:s})?e:null})();(0,a.Z)((()=>{j&&l(j)}),[j]);return{selectedValue:i,selectValue:(0,o.useCallback)((e=>{if(!m({value:e,tabValues:s}))throw new Error(`Can't select invalid tab value=${e}`);l(e),u(e),b(e)}),[u,b,s]),tabValues:s}}var b=t(2389);const j={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var f=t(5893);function g(e){let{className:n,block:t,selectedValue:o,selectValue:i,tabValues:a}=e;const l=[],{blockElementScrollPositionUntilNextRender:d}=(0,s.o5)(),c=e=>{const n=e.currentTarget,t=l.indexOf(n),r=a[t].value;r!==o&&(d(n),i(r))},u=e=>{let n=null;switch(e.key){case"Enter":c(e);break;case"ArrowRight":{const t=l.indexOf(e.currentTarget)+1;n=l[t]??l[0];break}case"ArrowLeft":{const t=l.indexOf(e.currentTarget)-1;n=l[t]??l[l.length-1];break}}n?.focus()};return(0,f.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,f.jsx)("li",{role:"tab",tabIndex:o===n?0:-1,"aria-selected":o===n,ref:e=>l.push(e),onKeyDown:u,onClick:c,...s,className:(0,r.Z)("tabs__item",j.tabItem,s?.className,{"tabs__item--active":o===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:r}=e;const s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=s.find((e=>e.props.value===r));return e?(0,o.cloneElement)(e,{className:"margin-top--md"}):null}return(0,f.jsx)("div",{className:"margin-top--md",children:s.map(((e,n)=>(0,o.cloneElement)(e,{key:n,hidden:e.props.value!==r})))})}function y(e){const n=x(e);return(0,f.jsxs)("div",{className:(0,r.Z)("tabs-container",j.tabList),children:[(0,f.jsx)(g,{...e,...n}),(0,f.jsx)(v,{...e,...n})]})}function w(e){const n=(0,b.Z)();return(0,f.jsx)(y,{...e,children:u(e.children)},String(n))}},1151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var o=t(7294);const r={},s=o.createContext(r);function i(e){const n=o.useContext(s);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),o.createElement(s.Provider,{value:n},e.children)}}}]);