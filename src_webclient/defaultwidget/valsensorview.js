import React from 'react';
import cssCommon from './sensorview.css';
import theme from './valsensorview.css';
import {Avatar,Chip} from 'react-toolbox';

export class ValSensor extends React.Component{
    render(){
        let options = this.props.profile.options||[];
        let strValue = this.props.value||'';
        let value = options.findIndex(v=>v==strValue);
        return <div className={cssCommon.sensorView}>
            <h4>{this.props.config.title}</h4>
            <div className={theme.options}>
                {this.props.profile.options.map((o,k)=>{
                    let className = k==value?theme.active:theme.inactive;
                    return <Chip className={className} key={k}><Avatar title={o} />{o}</Chip>
                })}
            </div>
        </div>
    }
}