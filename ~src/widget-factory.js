import React from 'react';


function resolveWidget(name){
    return require('./widgets/'+name+'-widget');
}

export default class WidgetFactory{
    
    getWidget(name){
        
    }
}