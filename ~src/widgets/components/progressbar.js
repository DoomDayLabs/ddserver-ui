import React from 'react';

export class Progressbar extends React.Component{
    
    render(){
        var min = this.props.min||0;
        var max = this.props.max||1;
        var value = this.props.value||0;
        
        var width = (max-min)*value*100;
        console.log(min,max,value,width);
        return (
            <div className="progress">
                <div className="bar" style={{width:width+'%'}}></div>
            </div>
            )
    }
}