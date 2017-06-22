const config = {
    widgets:[
        {
            class:'defaultWidget',
            config:{
                sensors:[
                    {
                        sensor:'device1.sensor1',
                        label:'Sensor 1',
                        type:'linear'
                    },
                    {
                        sensor:'device1.sensor2',
                        label:'Sensor 2',
                        type:'radial'
                    }
                ]
            }            
        }
    ]
};
export default config;