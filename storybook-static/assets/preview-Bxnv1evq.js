import"./index-DEBVq0NN.js";import"./index-D2MAbzvX.js";const{useParameter:l,addons:c,useEffect:d,useMemo:L}=__STORYBOOK_MODULE_PREVIEW_API__;var A=Object.defineProperty,p=(e,t)=>{for(var r in t)A(e,r,{get:t[r],enumerable:!0})},R={};p(R,{initializeThemeState:()=>n,pluckThemeFromContext:()=>T,useThemeParameters:()=>i});var m="themes",S=`storybook/${m}`,D="theme",M={},O={REGISTER_THEMES:`${S}/REGISTER_THEMES`};function T({globals:e}){return e[D]||""}function i(){return l(m,M)}function n(e,t){c.getChannel().emit(O.REGISTER_THEMES,{defaultTheme:t,themes:e})}var b="html",f="data-theme",v=({themes:e,defaultTheme:t,parentSelector:r=b,attributeName:_=f})=>(n(Object.keys(e),t),(s,h)=>{let{themeOverride:a}=i(),o=T(h);return d(()=>{let E=document.querySelector(r),u=a||o||t;E&&E.setAttribute(_,e[u])},[a,o]),s()});const g={parameters:{controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}}},globalTypes:{},decorators:[v({themes:{light:"light",dark:"dark"},defaultTheme:"light",attributeName:"data-mode"})]};export{g as default};
