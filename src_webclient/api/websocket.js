import EventBus from 'eventbus';
import {wsAddr,makeError} from './commons';

let w = new WebSocket(wsAddr('/event.ws'));
w.onmessage = (msg)=>{  
    var msgObject = JSON.parse(msg.data);  
    EventBus.emit(msgObject.key,msgObject.payload);
};
w.onclose = ()=>{
    makeError({title:'Опаньки! Что-то пошло не так :(',text:'Lost connection with server. Try reload page'});
};


function send(str){
    console.log('Send '+str);
    w.send(str);
}
export default {
    send:send
};

