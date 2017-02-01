import {handleUri} from './helpers';
import {topHandlers} from './handlers/TopHandlers'

window.addEventListener('load',function(){
	handleUri(document.location.pathname,topHandlers)
});