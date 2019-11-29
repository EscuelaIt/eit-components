import { html, css, LitElement } from 'lit-element';
import parseISO from 'date-fns/parseISO';
import format from 'date-fns/format';

export class EitDateIsoToLocalZone  extends LitElement {

  static get styles() {
    return css`
      :host {
        display: inline-block;
      }
    `;
  }

  static get properties() {
    return {
      iso: { type: String },
      format: { type: String },
    };
  }

  constructor() {
    super();
    this.format = 'kk:mm';
  }

  render() {
    return html`
      ${this.formatDateTime(this.iso)}
    `;
  }

  formatDateTime(iso) {
    let date = parseISO(iso);
    return format(date, this.format);
  }
}