import { initStart, initAdd, initUpdate, initEnd } from './modules/index';
const startForm = document.getElementById('startShift');

if(startForm) initStart(startForm); 