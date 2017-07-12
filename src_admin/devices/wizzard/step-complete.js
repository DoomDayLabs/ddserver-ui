import React from 'react';
import {List,ListSubHeader,ListItem} from 'react-toolbox/lib/list';
import {FontIcon} from 'react-toolbox';
import Api from '../../api';
import style from './wizzard-style';

export class StepComplete extends React.Component{
    
    render(){
        let cfg = JSON.stringify(this.props.config);
        return(
        <div>
            <h1>Congratulations!</h1>
            <h3>Widget has been added to dashboard</h3>
            <FontIcon className={style.congratulationIcon} value="thumb_up" />            
        </div>
        )
    }
}
StepComplete.isFinal = true;