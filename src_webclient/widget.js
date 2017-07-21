import React from 'react';
import {Card,CardTitle} from 'react-toolbox/lib/card';
import {Avatar} from 'react-toolbox'; 
import {DefaultWidget} from './defaultwidget';
import Classloader from './classloader';
import theme from './widget.css';
import Injector from 'injector';

export class Widget extends React.Component{
    constructor(){
        super();     
        
    }
    componentWillMount(){
        let widgetClassName = this.props.widget.class;
        if (widgetClassName==='default')
            this.widgetClass = DefaultWidget;
        else
            this.widgetClass = Classloader.loadClass(widgetClassName);
    }

    render(){
        
        return <Card className={theme.widgetCard}>
            <CardTitle title={this.props.widget.label} subtitle={this.props.widget.description} avatar={<Avatar title={this.props.widget.label} />} />
            <this.widgetClass config={this.props.widget.config} />
        </Card>
    }
}