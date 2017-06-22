import DevicesConfig from './devices-config';

console.log('DEVICE MANAGER');
var devices = {};
var sensors = {};

var DeviceManager = {
    addDevice(device){
        device.sensors.forEach((sensor)=>{           
           sensors[device.name+'.'+sensor.name] = {sensor:sensor};
        });
    },
    getSensor(name){
        return (sensors[name]||{});
    }
}

DevicesConfig.forEach((d)=>DeviceManager.addDevice(d));

export default DeviceManager;