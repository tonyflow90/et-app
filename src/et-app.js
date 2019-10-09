import {
    html,
    render
} from 'lit-html';

class EtApp extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({
            'mode': 'open'
        });
        render(this.template(), this._shadowRoot, {
            eventContext: this
        });
    }

    template() {
        return html `
                <style>
                :host {
                    display: block;
                }
                </style>
                <div>
                    <h1>ET App</h1>
                </div>
        `;
    }
}

window.customElements.define('et-app', EtApp);