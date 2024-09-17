class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
            <header>
                <h1>Lathesh Shetty's Game Development Portfolio</h1>
            </header>
        `;
    }
}

customElements.define('header-component', HeaderComponent);