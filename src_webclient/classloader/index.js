import React from 'react';

function loadClass(){
    return class Class extends React.Component{
        render(){
            return <div>CUSTOM_WIDGET</div>
        }
    }    
}

export default{
    loadClass:loadClass
}