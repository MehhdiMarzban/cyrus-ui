import{w as te,u as ne}from"./index-DQvKtGYT.js";import{j as se}from"./jsx-runtime-BjgbQsUx.js";function X(r){var a,e,t="";if(typeof r=="string"||typeof r=="number")t+=r;else if(typeof r=="object")if(Array.isArray(r)){var s=r.length;for(a=0;a<s;a++)r[a]&&(e=X(r[a]))&&(t&&(t+=" "),t+=e)}else for(e in r)r[e]&&(t&&(t+=" "),t+=e);return t}function oe(){for(var r,a,e=0,t="",s=arguments.length;e<s;e++)(r=arguments[e])&&(a=X(r))&&(t&&(t+=" "),t+=a);return t}const k=r=>typeof r=="boolean"?`${r}`:r===0?"0":r,z=oe,ie=(r,a)=>e=>{var t;if((a==null?void 0:a.variants)==null)return z(r,e==null?void 0:e.class,e==null?void 0:e.className);const{variants:s,defaultVariants:c}=a,Z=Object.keys(s).map(n=>{const o=e==null?void 0:e[n],l=c==null?void 0:c[n];if(o===null)return null;const i=k(o)||k(l);return s[n][i]}),x=e&&Object.entries(e).reduce((n,o)=>{let[l,i]=o;return i===void 0||(n[l]=i),n},{}),ee=a==null||(t=a.compoundVariants)===null||t===void 0?void 0:t.reduce((n,o)=>{let{class:l,className:i,...re}=o;return Object.entries(re).every(ae=>{let[S,h]=ae;return Array.isArray(h)?h.includes({...c,...x}[S]):{...c,...x}[S]===h})?[...n,l,i]:n},[]);return z(r,Z,ee,e==null?void 0:e.class,e==null?void 0:e.className)},ce=ie(["font-semibold","border","rounded","shadow-sm","inline-flex","items-center","cursor-pointer","gap-1.5","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","transition-colors","disabled:opacity-50","disabled:cursor-not-allowed","disabled:pointer-events-none"],{variants:{variant:{primary:["bg-primary-600","text-white","border-transparent","hover:bg-primary-500","active:bg-primary-400"],secondary:["bg-secondary-600","text-white","border-transparent","hover:bg-secondary-500","active:bg-secondary-400"],accent:["bg-accent-600","text-white","border-transparent","hover:bg-accent-500","active:bg-accent-400"]},size:{small:["text-sm","px-2","py-1"],medium:["text-sm","px-2.5","py-1.5"],large:["text-sm","px-3","py-2"]}},defaultVariants:{variant:"primary",size:"medium"}}),Y=({children:r,variant:a="primary",size:e="medium",className:t,...s})=>se.jsx("button",{className:ce({variant:a,size:e,className:t}),...s,children:r});Y.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1}}};const le={title:"Components/Button",component:Y,parameters:{layout:"centered"},argTypes:{variant:{options:["primary","secondary","accent"],description:"you can choose one of this variant :",mapping:{primary:"primary",secondary:"secondary",accent:"accent"},table:{type:{summary:"union",detail:"'primary' | 'secondary' | 'accent'"}},control:"select",type:"string"},disabled:{control:"boolean",description:"you can disable button :"},size:{control:"radio",options:["small","medium","large"],description:"you can change size of button :",table:{type:{summary:"union",detail:"'small' | 'medium' | 'large'"}}}},args:{disabled:!1,size:"medium",children:"button"}},d={args:{children:"primary button",variant:"primary"}},m={args:{children:"secondary button",variant:"secondary"}},u={args:{children:"accent button",variant:"accent"}},p={args:{size:"small"}},y={args:{size:"medium"}},v={args:{size:"large"}},g={parameters:{themes:{themeOverride:"dark"}},args:{children:"dark button",variant:"primary"}},b={parameters:{viewport:{defaultViewport:"mobile1"}}},f={args:{children:"click me!",variant:"primary"},play:async({canvasElement:r})=>{const e=te(r).getByRole("button");ne.click(e)}};var w,V,_;d.parameters={...d.parameters,docs:{...(w=d.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    children: "primary button",
    variant: "primary"
  }
}`,...(_=(V=d.parameters)==null?void 0:V.docs)==null?void 0:_.source}}};var j,B,O;m.parameters={...m.parameters,docs:{...(j=m.parameters)==null?void 0:j.docs,source:{originalSource:`{
  args: {
    children: "secondary button",
    variant: "secondary"
  }
}`,...(O=(B=m.parameters)==null?void 0:B.docs)==null?void 0:O.source}}};var N,C,E;u.parameters={...u.parameters,docs:{...(N=u.parameters)==null?void 0:N.docs,source:{originalSource:`{
  args: {
    children: "accent button",
    variant: "accent"
  }
}`,...(E=(C=u.parameters)==null?void 0:C.docs)==null?void 0:E.source}}};var A,M,P;p.parameters={...p.parameters,docs:{...(A=p.parameters)==null?void 0:A.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(P=(M=p.parameters)==null?void 0:M.docs)==null?void 0:P.source}}};var R,T,q;y.parameters={...y.parameters,docs:{...(R=y.parameters)==null?void 0:R.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...(q=(T=y.parameters)==null?void 0:T.docs)==null?void 0:q.source}}};var I,K,U;v.parameters={...v.parameters,docs:{...(I=v.parameters)==null?void 0:I.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...(U=(K=v.parameters)==null?void 0:K.docs)==null?void 0:U.source}}};var W,$,D;g.parameters={...g.parameters,docs:{...(W=g.parameters)==null?void 0:W.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: "dark"
    }
  },
  args: {
    children: "dark button",
    variant: "primary"
  }
}`,...(D=($=g.parameters)==null?void 0:$.docs)==null?void 0:D.source}}};var F,G,H;b.parameters={...b.parameters,docs:{...(F=b.parameters)==null?void 0:F.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(H=(G=b.parameters)==null?void 0:G.docs)==null?void 0:H.source}}};var J,L,Q;f.parameters={...f.parameters,docs:{...(J=f.parameters)==null?void 0:J.docs,source:{originalSource:`{
  args: {
    children: "click me!",
    variant: "primary"
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const button = canvas.getByRole("button");
    userEvent.click(button);
  }
}`,...(Q=(L=f.parameters)==null?void 0:L.docs)==null?void 0:Q.source}}};const de=["primary","secondary","accent","small","medium","large","darkMode","mobileScreen","clickingButton"],pe=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:de,accent:u,clickingButton:f,darkMode:g,default:le,large:v,medium:y,mobileScreen:b,primary:d,secondary:m,small:p},Symbol.toStringTag,{value:"Module"}));export{pe as B};
