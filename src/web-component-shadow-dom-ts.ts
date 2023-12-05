export default class WebComponentShadowDOM extends HTMLElement {
	private shadow: ShadowRoot;

	constructor() {
		super();
		this.shadow = this.attachShadow({ mode: "open" });
	}

	static get observedAttributes(): string[] {
		return ["foo"];
	}

	get foo(): string {
		return this.getAttribute("foo") || "";
	}
	set foo(value) {
		if (typeof value === "string") this.setAttribute("foo", value);
	}

	public connectedCallback(): void {
		this.render();
	}

	public attributeChangedCallback(name: string, oldValue: string, newValue: string) {
		console.log("changed", name, oldValue, newValue);
	}

	private render(): void {
		const html = `<div><slot>Hello World</slot></div>`;
		const css = `<style></style>`;
		this.shadow.innerHTML = `${css}${html}`;
	}
}
customElements.define("web-component-shadow-dom-js", WebComponentShadowDOM);
