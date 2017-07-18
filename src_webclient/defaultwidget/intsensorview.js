import React from 'react';
import {ProgressBar} from 'react-toolbox';
import css from './intsensorview.css';

class CircularView extends React.Component{
    render(){
        // let value = 57;
        let char = this.props.config.char;
        let min = parseInt(this.props.profile.min);
        let max = parseInt(this.props.profile.max);
        let value = parseInt(this.props.value||0);
        return <div className={css.circularView}>
                <ProgressBar type='circular' mode='determinate' min={min} max={max} value={value} />
                <div className={css.circularValue}>
                    <span>{value}{char}</span>
                </div>
            </div>
    }
}
class LinearView extends React.Component{
    render(){        
        let char = this.props.config.char;
        let min = parseInt(this.props.profile.min);
        let max = parseInt(this.props.profile.max);
        let value = parseInt(this.props.value||0);
        return <div className={css.linearView}>
            <h4>
                <span>{this.props.config.title}</span>
                <span>{value}{char}</span>
            </h4>
                <ProgressBar type='linear' mode='determinate' min={min} max={max} value={value} />                
            </div>
    }
}

export class IntSensor extends React.Component{

    render(){
        if (this.props.config.type=='circular')
            return <CircularView config={this.props.config} profile={this.props.profile} value={this.props.value}/>
        else
            return <LinearView config={this.props.config} profile={this.props.profile} value={this.props.value}/>
    }
}