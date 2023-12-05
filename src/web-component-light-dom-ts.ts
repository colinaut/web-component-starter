export default class WebComponentLightDOM extends HTMLElement {
	constructor() {
		super();
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
		const html = `<div>Hello World</div>`;
		this.innerHTML = `${html}`;
	}
}
customElements.define("web-component-light-dom-ts", WebComponentLightDOM);
