import DeviceManager from '../device/device-manager';
import EventBus from 'eventbus';

const URL = 'ws://localhost:8080/client';

function onSensorSet(m){
    DeviceManager.getSensor(m.sensor).put(m.value);
}

let onmessage = function(m,e){
    console.log('Message',m,this);
    let msg = JSON.parse(m);
    switch(msg.type){
        case 'sensor.set':onSensorSet(msg.data);break;
        case 'device.add':onDeviceAdd(msg.data);break;
        case 'widget.add':onWidgetAdd(msg.data);break;
    }
}

let openSocket = function(){
    let w = new WebSocket(URL);
    w.onerror = onerror;
    w.onclose = onclose;
    w.onmessage = onmessage;
    w.onopen = onopen;
    window.w = w;
}

let onopen = function(e){
    console.log('Open',this);
}

let onerror = function(e){
    console.log('Error',this);
    this.close();    
}

let onclose = function(e){
    console.log('Close',this);
    setTimeout(openSocket,5000);
}




openSocket();
