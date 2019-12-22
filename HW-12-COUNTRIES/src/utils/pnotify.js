import PNotify from '../../node_modules/pnotify/dist/es/PNotify.js';

import { messages } from './messages';

const pWarning = message => PNotify.alert(message || messages.info);
const pNotice = message => PNotify.alert(message || messages.warning);

export { pWarning, pNotice };
