export default {
    widgets:[
        {
            label:'Чайник',
            description:'Чайник на кухне',
            class:'default',
            config:{
                sensors:[
                    {
                        title:'Temperature',
                        sensor:'device1.sensor1'                        
                    }
                ]                                           
            }            
        },
        {
            label:'CUSTOM1',
            class:'custom'
        },        
        {
            label:'CUSTOM2',
            class:'custom'
        }
    ]
}