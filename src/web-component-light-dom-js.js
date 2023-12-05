export default class WebComponentLightDOMjs extends HTMLElement {
	constructor() {
		super();
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
		const html = `<div>Hello World</div>`;
		this.innerHTML = `${html}`;
	}
}
customElements.define("web-component-light-dom-js", WebComponentLightDOMjs);
