import { html, css, LitElement } from 'lit-element';

export class EitLogo extends LitElement {

  static get styles() {
    return css`
      :host {
        display: inline-block;
        width: 300px;
      }
      svg .letter {
        fill: #313131;
      }
      svg .icon {
        fill: #e74c3c;
      }
    `;
  }

  render() {
    return html`
      <svg version="1.1" id="EIT"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 116 40"
            style="enable-background:new 0 0 116 40;" xml:space="preserve">
        <path class="letter" d="M8.4,15.1H3.2v3.3H9V21H0V7h8.7v2.6H3.2v2.9h5.2V15.1z"/>
        <path class="letter" d="M11,17.7c0.9,0.4,2.2,0.9,3.5,0.9c1.5,0,2.2-0.6,2.2-1.5c0-0.9-0.7-1.4-2.3-2
          c-2.3-0.8-3.8-2.1-3.8-4.1c0-2.4,2-4.2,5.3-4.2c1.6,0,2.7,0.3,3.6,0.7L18.7,10c-0.6-0.3-1.6-0.7-2.9-0.7s-2,0.6-2,1.3
          c0,0.9,0.8,1.3,2.6,2c2.5,0.9,3.6,2.2,3.6,4.2c0,2.3-1.8,4.3-5.7,4.3c-1.6,0-3.2-0.4-4-0.9L11,17.7z"/>
        <path class="letter" d="M31.8,20.6c-0.6,0.3-1.9,0.6-3.6,0.6c-4.8,0-7.3-3-7.3-7c0-4.8,3.4-7.4,7.7-7.4
          c1.6,0,2.9,0.3,3.5,0.6l-0.6,2.5c-0.6-0.3-1.5-0.5-2.7-0.5c-2.5,0-4.5,1.5-4.5,4.6c0,2.8,1.7,4.6,4.5,4.6c1,0,2-0.2,2.6-0.5
          L31.8,20.6z"/>
        <path class="letter" d="M36.7,7v8.1c0,2.4,0.9,3.6,2.5,3.6c1.7,0,2.6-1.2,2.6-3.6V7H45v7.9c0,4.3-2.2,6.4-5.8,6.4
          c-3.5,0-5.6-2-5.6-6.4V7H36.7z"/>
        <path class="letter" d="M55.4,15.1h-5.2v3.3H56V21h-9V7h8.7v2.6h-5.5v2.9h5.2V15.1z"/>
        <path class="letter" d="M58,7h3.2v11.3H67V21h-9V7z"/>
        <path class="letter" d="M72.5,17.4l-1,3.6h-3.3l4.3-14h4.2L81,21h-3.4l-1.1-3.6H72.5z M76.1,15l-0.9-3
          c-0.2-0.8-0.5-1.9-0.7-2.7h0c-0.2,0.8-0.4,1.9-0.6,2.7L73,15H76.1z"/>
        <path class="icon" d="M85,0v28h15l16,12V0H85z M97.1,21h-3.2V7h3.2V21z M109.4,10.2h-3.6V21h-3.2V10.2H99V7h10.4V10.2z"/>
      </svg>
    `;
  }
}