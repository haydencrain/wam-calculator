import reactify from 'skatejs-react-integration';

class WiredTextArea extends HTMLElement{}

window.customElements.define('wired-textarea', WiredTextArea);

export default reactify(WiredTextArea);