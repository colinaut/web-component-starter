var i=Object.defineProperty;var c=(o,e,t)=>e in o?i(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var n=(o,e,t)=>(c(o,typeof e!="symbol"?e+"":e,t),t);class d extends HTMLElement{constructor(){super();n(this,"shadow");this.shadow=this.attachShadow({mode:"open"})}static get observedAttributes(){return["foo"]}get foo(){return this.getAttribute("foo")||""}set foo(t){typeof t=="string"&&this.setAttribute("foo",t)}connectedCallback(){this.render()}attributeChangedCallback(t,s,r){console.log("changed",t,s,r)}render(){const t="<div><slot></slot></div>",s="<style></style>";this.shadow.innerHTML=`${s}${t}`}}customElements.define("web-component",d);
//# sourceMappingURL=web-component.js.map
