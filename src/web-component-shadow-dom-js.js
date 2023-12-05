export default class WebComponentShadowDOM extends HTMLElement {
	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	static get observedAttributes() {
		return ["foo"];
	}

	get foo() {
		return this.getAttribute("foo") || "";
	}
	set foo(value) {
		if (typeof value === "string") this.setAttribute("foo", value);
	}

	connectedCallback() {
		this.render();
	}

	attributeChangedCallback(name, oldValue, newValue) {
		console.log("changed", name, oldValue, newValue);
	}

	render() {
		const html = `<div><slot>Hello World</slot></div>`;
		const css = `<style></style>`;
		this.shadow.innerHTML = `${css}${html}`;
	}
}
customElements.define("web-component-shadow-dom-ts", WebComponentShadowDOM);
