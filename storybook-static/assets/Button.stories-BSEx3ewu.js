import{w as G,u as H}from"./index-DQvKtGYT.js";import{j as J}from"./jsx-runtime-BjgbQsUx.js";import{c as K}from"./index-CRGxjvZy.js";const L=K(["font-semibold","border","rounded","shadow-sm","inline-flex","items-center","cursor-pointer","gap-1.5","focus-visible:outline","focus-visible:outline-2","focus-visible:outline-offset-2","transition-colors","disabled:opacity-50","disabled:cursor-not-allowed","disabled:pointer-events-none"],{variants:{variant:{primary:["bg-primary-600","text-white","border-transparent","hover:bg-primary-500","active:bg-primary-400"],secondary:["bg-secondary-600","text-white","border-transparent","hover:bg-secondary-500","active:bg-secondary-400"],accent:["bg-accent-600","text-white","border-transparent","hover:bg-accent-500","active:bg-accent-400"]},size:{small:["text-sm","px-2","py-1"],medium:["text-sm","px-2.5","py-1.5"],large:["text-sm","px-3","py-2"]}},defaultVariants:{variant:"primary",size:"medium"}}),A=({children:m,variant:l="primary",size:d="medium",className:D,...F})=>J.jsx("button",{className:L({variant:l,size:d,className:D}),...F,children:m});A.__docgenInfo={description:"",methods:[],displayName:"Button",props:{variant:{defaultValue:{value:'"primary"',computed:!1},required:!1},size:{defaultValue:{value:'"medium"',computed:!1},required:!1}}};const Q={title:"Components/Button",component:A,parameters:{layout:"centered"},argTypes:{variant:{options:["primary","secondary","accent"],description:"you can choose one of this variant :",mapping:{primary:"primary",secondary:"secondary",accent:"accent"},table:{type:{summary:"union",detail:"'primary' | 'secondary' | 'accent'"}},control:"select",type:"string"},disabled:{control:"boolean",description:"you can disable button :"},size:{control:"radio",options:["small","medium","large"],description:"you can change size of button :",table:{type:{summary:"union",detail:"'small' | 'medium' | 'large'"}}}},args:{disabled:!1,size:"medium",children:"button"}},e={args:{children:"primary button",variant:"primary"}},r={args:{children:"secondary button",variant:"secondary"}},a={args:{children:"accent button",variant:"accent"}},t={args:{size:"small"}},n={args:{size:"medium"}},s={args:{size:"large"}},o={parameters:{themes:{themeOverride:"dark"}},args:{children:"dark button",variant:"primary"}},c={parameters:{viewport:{defaultViewport:"mobile1"}}},i={args:{children:"click me!",variant:"primary"},play:async({canvasElement:m})=>{const d=G(m).getByRole("button");H.click(d)}};var p,u,y;e.parameters={...e.parameters,docs:{...(p=e.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    children: "primary button",
    variant: "primary"
  }
}`,...(y=(u=e.parameters)==null?void 0:u.docs)==null?void 0:y.source}}};var g,b,v;r.parameters={...r.parameters,docs:{...(g=r.parameters)==null?void 0:g.docs,source:{originalSource:`{
  args: {
    children: "secondary button",
    variant: "secondary"
  }
}`,...(v=(b=r.parameters)==null?void 0:b.docs)==null?void 0:v.source}}};var h,f,x;a.parameters={...a.parameters,docs:{...(h=a.parameters)==null?void 0:h.docs,source:{originalSource:`{
  args: {
    children: "accent button",
    variant: "accent"
  }
}`,...(x=(f=a.parameters)==null?void 0:f.docs)==null?void 0:x.source}}};var S,z,k;t.parameters={...t.parameters,docs:{...(S=t.parameters)==null?void 0:S.docs,source:{originalSource:`{
  args: {
    size: "small"
  }
}`,...(k=(z=t.parameters)==null?void 0:z.docs)==null?void 0:k.source}}};var w,B,_;n.parameters={...n.parameters,docs:{...(w=n.parameters)==null?void 0:w.docs,source:{originalSource:`{
  args: {
    size: "medium"
  }
}`,...(_=(B=n.parameters)==null?void 0:B.docs)==null?void 0:_.source}}};var E,j,O;s.parameters={...s.parameters,docs:{...(E=s.parameters)==null?void 0:E.docs,source:{originalSource:`{
  args: {
    size: "large"
  }
}`,...(O=(j=s.parameters)==null?void 0:j.docs)==null?void 0:O.source}}};var V,M,R;o.parameters={...o.parameters,docs:{...(V=o.parameters)==null?void 0:V.docs,source:{originalSource:`{
  parameters: {
    themes: {
      themeOverride: "dark"
    }
  },
  args: {
    children: "dark button",
    variant: "primary"
  }
}`,...(R=(M=o.parameters)==null?void 0:M.docs)==null?void 0:R.source}}};var q,N,T;c.parameters={...c.parameters,docs:{...(q=c.parameters)==null?void 0:q.docs,source:{originalSource:`{
  parameters: {
    viewport: {
      defaultViewport: "mobile1"
    }
  }
}`,...(T=(N=c.parameters)==null?void 0:N.docs)==null?void 0:T.source}}};var C,I,P;i.parameters={...i.parameters,docs:{...(C=i.parameters)==null?void 0:C.docs,source:{originalSource:`{
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
}`,...(P=(I=i.parameters)==null?void 0:I.docs)==null?void 0:P.source}}};const U=["primary","secondary","accent","small","medium","large","darkMode","mobileScreen","clickingButton"],Z=Object.freeze(Object.defineProperty({__proto__:null,__namedExportsOrder:U,accent:a,clickingButton:i,darkMode:o,default:Q,large:s,medium:n,mobileScreen:c,primary:e,secondary:r,small:t},Symbol.toStringTag,{value:"Module"}));export{Z as B};
