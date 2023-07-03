(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{8312:function(e,r,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return t(4556)}])},4556:function(e,r,t){"use strict";t.r(r),t.d(r,{default:function(){return b}});var a=t(5893),n=t(7294),s=t(3156),l=t(3298),c=t(5819),o=t(3321),i=t(1163),u=t(9583),d=t(7632),h=t(9008),x=t.n(h),p=t(9253),g=t(5310),m=t(4195),f=t(3023),j=t(5358),v=t(4888),y=t(9264),P=t(6880),A=t(7446),_=e=>{let{records:r}=e,[t,s]=(0,n.useState)([]);return(0,n.useEffect)(()=>{let e=[];for(let t in r)for(let a in r[t]){let n=0,s=0,l=0,c=r[t][a];for(let e of c||[])n+=e.score,s+=(0,A._)(e.score)*e.credit,l+=e.credit;c&&c.length>0&&e.push({semester:"".concat(t," ").concat(a),averageScore:n/c.length,averageGPA:s/l})}s(e)},[r]),(0,a.jsx)(p.h,{width:"100%",height:"100%",children:(0,a.jsxs)(g.w,{data:t,margin:{top:5,right:5,left:5,bottom:5},children:[(0,a.jsx)(m.q,{strokeDasharray:"3 3"}),(0,a.jsx)(f.K,{dataKey:"semester"}),(0,a.jsx)(j.B,{}),(0,a.jsx)(v.u,{}),(0,a.jsx)(y.D,{}),(0,a.jsx)(P.x,{type:"monotone",dataKey:"averageScore",stroke:"#8884d8",name:"Average Score"}),(0,a.jsx)(P.x,{type:"monotone",dataKey:"averageGPA",stroke:"#82ca9d",name:"Average GPA"})]})})},G=t(7281),w=t.n(G);let N=()=>{(0,d.Z)();let e=(0,i.useRouter)(),[r,t]=(0,n.useState)(new Date().getFullYear()),[h,x]=(0,n.useState)("Spring"),{records:p}=(0,u.q)(),g=(r,t,a)=>{r.preventDefault(),e.push("/".concat(t,"/").concat(a))};return(0,a.jsxs)(s.Z,{children:[(0,a.jsx)("h1",{children:"Calculate NCKU GPA"}),Array.from(Object.entries(p)).map(e=>Array.from(Object.entries(e[1])).map(r=>(0,a.jsx)("div",{children:(0,a.jsxs)("form",{onSubmit:t=>g(t,e[0],r[0]),className:w().form,children:[(0,a.jsx)(l.Z,{className:w().select,disabled:!0,value:e[0],MenuProps:{PaperProps:{style:{maxHeight:"200px"}}},children:[...Array(20)].map((e,r)=>(0,a.jsx)(c.Z,{value:new Date().getFullYear()-r,children:new Date().getFullYear()-r},(0,d.Z)()))}),(0,a.jsxs)(l.Z,{className:w().select,disabled:!0,value:r[0],children:[(0,a.jsx)(c.Z,{value:"Spring",children:"Spring"}),(0,a.jsx)(c.Z,{value:"Fall",children:"Fall"})]}),(0,a.jsx)(o.Z,{type:"submit",children:"Edit"})]})},(0,d.Z)()))),(0,a.jsxs)("form",{onSubmit:t=>{t.preventDefault(),e.push("/".concat(r,"/").concat(h))},className:w().form,children:[(0,a.jsx)(l.Z,{className:w().select,value:r,onChange:e=>t(e.target.value),MenuProps:{PaperProps:{style:{maxHeight:"200px"}}},children:[...Array(20)].map((e,r)=>(0,a.jsx)(c.Z,{value:new Date().getFullYear()-r,children:new Date().getFullYear()-r},r))}),(0,a.jsxs)(l.Z,{className:w().select,value:h,onChange:e=>x(e.target.value),children:[(0,a.jsx)(c.Z,{value:"Spring",children:"Spring"}),(0,a.jsx)(c.Z,{value:"Fall",children:"Fall"})]}),(0,a.jsx)(o.Z,{type:"submit",children:"Select"})]}),(0,a.jsx)("div",{className:w()["score-chart-container"],children:(0,a.jsx)(_,{records:p})}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("br",{}),(0,a.jsx)("div",{className:w()["separate-line"]}),(0,a.jsx)("h1",{children:"成功大學 GPA 計算工具 | National Cheng Kung University GPA Calculator"}),(0,a.jsx)("p",{children:"提供一個能夠在裝置上永久儲存你的成績資料的網站的成功大學 GPA 計算工具，選擇學期，只需輸入你的成績，工具將快速計算你的 GPA。此 GPA 計算機使用104年後的新標準計算，請特別注意。"}),(0,a.jsx)("p",{children:"Offering a National Cheng Kung University GPA calculator that allows you to permanently save your grade data on your device. Choose the semester, simply input your grades, and the tool will quickly calculate your GPA. Please note that this GPA calculator uses the new standard calculation after 2015."}),(0,a.jsx)("br",{}),(0,a.jsx)("p",{children:"加這一大長串是想順便玩一下 seo ㄟ嘿"})]})};var b=()=>{let[e,r]=(0,n.useState)(!0);return(0,n.useEffect)(()=>{r(!1)},[]),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(x(),{children:[(0,a.jsx)("title",{children:"成功大學 GPA 計算工具 | National Cheng Kung University GPA Calculator"}),(0,a.jsx)("meta",{name:"description",content:"提供一個能夠在裝置上永久儲存你的成績資料的網站的成功大學 GPA 計算工具，選擇學期，只需輸入你的成績，工具將快速計算你的 GPA。此 GPA 計算機使用104年後的新標準計算，請特別注意 | Offering a National Cheng Kung University GPA calculator that allows you to permanently save your grade data on your device. Choose the semester, simply input your grades, and the tool will quickly calculate your GPA. Please note that this GPA calculator uses the new standard calculation after 2015."})]}),!e&&(0,a.jsx)(N,{})]})}},9583:function(e,r,t){"use strict";t.d(r,{q:function(){return l}});var a=t(4529),n=t(782);let s=e=>({records:{},addCourse:(r,t,a)=>e(e=>{var n,s;let l=null!==(n=e.records[r])&&void 0!==n?n:{},c=null!==(s=l[t])&&void 0!==s?s:[];return c.push(a),l[t]=c,{records:{...e.records,[r]:l}}}),updateCourse:(r,t,a,n)=>e(e=>{let s=e.records[r],l=s[t],c=l.findIndex(e=>e.id===a);l[c]=n,s[t]=l;let o={...e.records,[r]:s};return{records:o}}),removeCourse:(r,t,a)=>e(e=>{let n=e.records[r],s=n[t],l=s.findIndex(e=>e.id===a);s.splice(l,1),n[t]=s;let c={...e.records,[r]:n};return{records:c}})}),l=(0,a.Ue)()((0,n.mW)((0,n.tJ)(function(){for(var e=arguments.length,r=Array(e),t=0;t<e;t++)r[t]=arguments[t];return{...s(...r)}},{name:"gpa-calculator"})))},7446:function(e,r,t){"use strict";t.d(r,{F:function(){return n},_:function(){return a}});let a=e=>e>=90?4.3:e>=85?4:e>=80?3.7:e>=77?3.3:e>=73?3:e>=70?2.7:e>=67?2.3:e>=63?2:e>=60?1.7:e>=50?1:0,n=e=>{console.log(e);let r=0,t=0;return(e.forEach(e=>{r+=a(e.score)*e.credit,t+=e.credit}),console.log(r,t),0===t)?0:r/t}},7281:function(e){e.exports={form:"index_form__0iSqz",select:"index_select__zbZhD","score-chart-container":"index_score-chart-container__wKWN4","separate-line":"index_separate-line__i7GAb"}}},function(e){e.O(0,[529,354,201,774,888,179],function(){return e(e.s=8312)}),_N_E=e.O()}]);