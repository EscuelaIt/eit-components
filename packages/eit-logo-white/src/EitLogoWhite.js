import { css } from 'lit-element';
import { EitLogo } from '@escuelait/eit-logo';

export class EitLogoWhite extends EitLogo {
  static get styles() {
    return [super.styles, css`
      svg .letter {
        fill: #fff;
      }
      svg .icon {
        fill: #fff;
      }
    `];
  }
}
