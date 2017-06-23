import DeviceConf from './device-conf';
class Trigger {
    constructor(def,UID){
        this.def = {UID,...def}    
    }
    
    def(){
        return {...def}
    }
    
    call(...args){
        
    }
}

class Sensor {
    
    constructor(sensorDef,value,UID){
        this.sensorDef = {UID,...sensorDef};
        this.value = value;
        this.subs = [];
    }
    
    sub(fn){
        this.subs.push(fn);
    }
    
    def(){
        return {...this.sensorDef}
    }
    
    put(value){
        this.value = value;
        this.subs.forEach((s)=>s(value,this.sensorDef.UID));
    }
    
}
var sensors = new Map();
var triggers = new Map();

DeviceConf.devices.forEach((d)=>addDevice(d));


let val = 0;
let inc = 1;
setInterval(()=>{
    sensors.get('device1.sensor1').put(val+=inc);
    if (val==100){
        inc = -1
    }
    if (val==0){
        inc = 1;
    }
},100);

function addDevice(device){
    (device.sensors||[]).forEach((s)=>{        
        let UID = device.name+'.'+s.name;
        sensors.set(UID, new Sensor(s,0,UID));
    });
    (device.triggets||[]).forEach((t)=>{
        let UID = device.name+'.'+t.name;
        triggers.set(UID,new Trigger(t,UID));
    })
}

function getSensor(name){
    return sensors.get(name)||null;
}

function getTrigger(name){
    return triggers.get(name)||null;
}

export default{
    addDevice:addDevice,
    getSensor:getSensor,
    getTrigger:getTrigger
}