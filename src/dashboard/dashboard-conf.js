export default {
    widgets:[
        {
            label:'Чайник',
            description:'Чайник на кухне',
            class:'default',
            config:{
                sensors:[
                    {
                        view:'main',
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