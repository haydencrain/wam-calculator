import reactify from 'skatejs-react-integration';
//import { WiredButton } from 'wired-button';

class WiredButton extends HTMLElement {}

window.customElements.define('my-component', WiredButton);
export default reactify(WiredButton);
