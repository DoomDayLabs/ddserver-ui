import DeviceManager from '../device/device-manager';

const URL = 'ws://dds:8080/client';

let onmessage = function(m,e){
    console.log('Message',m,this);
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
