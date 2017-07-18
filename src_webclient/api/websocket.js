import EventBus from 'eventbus';
import {wsAddr,makeError} from './commons';

let w = new WebSocket(wsAddr('/event.ws'));
w.onmessage = (msg)=>{
    //console.log(msg.data);
    var msgObject = JSON.parse(msg.data);
    //console.log(msgObject);
    EventBus.emit(msgObject.key,msgObject.payload);
}
w.onclose = ()=>{
    makeError({title:'Опаньки! Что-то пошло не так :(',text:'Lost connection with server. Try reload page'});
}

