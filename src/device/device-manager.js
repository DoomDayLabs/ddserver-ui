
class Trigger {
    
    constructor(def,UID){
        let stateSubs = [];
        let adef = {UID,...def}    
        let state = {
            enabled:true
        };
        let notify = ()=>{
            stateSubs.forEach((s)=>s(state));   
        }
        
        this.def = ()=>{return {...adef}};
        this.call = (args)=>{
            console.log('Call '+adef.name+' with',args);
        }
        this.onState = (callback)=>{
            stateSubs.push(callback);
        }
        this.enable = ()=>{
            state.enabled = true;
            notify();
        }
        this.disable = ()=>{
            state.enabled = false;
            notify();
        }
        this.UID = ()=>UID;
    }
    
    
        
    
}

class Sensor {    
    constructor(sensorDef,value,UID){
        let $def = {UID,...sensorDef};
        let $value = value;
        let $subs = [];

        this.def = ()=>({...$def});
        this.sub = (fn)=>$subs.push(fn);
        this.val = ()=>$value;        
        this.put = (v)=>{
            $value = v;
            $subs.forEach((s)=>s(v,$def.UID));
        }        
    }                    
}
var sensors = new Map();
var triggers = new Map();




function addDevice(device){
    (device.sensors||[]).forEach((s)=>{        
        let UID = device.name+'.'+s.name;
        let value = device.values[s.name]
        let sensor = new Sensor(s,value,UID)
        sensors.set(sensor.def().UID, sensor);
    });
    
    let onlineSensor = new Sensor({name:'online',type:'bool',value:false},false,device.name+'.online');
    sensors.set(onlineSensor.def().UID,onlineSensor);

    (device.triggers||[]).forEach((t)=>{
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