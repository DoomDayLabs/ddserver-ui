import React from 'react';
import Injector from './injector';
import WidgetFactory from './widget-factory';
import {DefaultWidget} from './default-widget/widget';
import ReactSlider from 'react-slider';
import styles from './widget-styles';
import { Card, CardMedia, CardTitle, CardText, CardActions } from 'react-toolbox/lib/card';

Injector.append({'react':React,'react-slider':ReactSlider});
export class Widget extends React.Component{
  
    constructor(props){
        super();        
        this.state = {
           mode:'widget' 
        };
        
        this.header = props.config.label;
        this.subheader = props.config.description;
        let className = props.config.class||'default'; 
        if (className==='default'){            
            this.widget = DefaultWidget;
        } else {
            let widgetFn = WidgetFactory.getWidget(this.class);
            let injector = Injector.get();            
                        
            this.widget = class extends React.Component{
                constructor(props){
                    super();
                    let  _render = this.render;
                    let  _componentWillMount = this.componentnWillMount;
                    let  _componentDidMount = this.componentDidMount;                    
                    widgetFn.apply(this,[(name)=>injector.require(name),props.config]);
                    this.componentDidMount = _componentDidMount;
                    this.componentWillMount = _componentWillMount;
                    this.render = _render;
                }
                render(){
                    if (this.props.mode==='widget'){
                        if (this.renderView) return this.renderView()
                        else return <div>VIEW_NOT_FOUND</div>
                    } else {
                        if (this.renderPrefpane) return this.renderPrefpane()
                        else return <div>PREFPANE_NOT_FOUND</div>
                    }
                    
                    
                }
            }
            
            
        }        
    }
    handlePrefClick(){
        
        this.setState(this.state.mode==='pref'?{mode:'widget'}:{mode:'pref'});
    }
    render(){
        
        return (
                    <div className={styles.widget}>                    
                        <div className={styles.header}>
                            <i className="material-icons" onClick={()=>this.handlePrefClick()}></i>
                            
                            <h2>{this.header}</h2>
                            <h3>{this.subheader}</h3>
                            
                        </div>
      
                        <this.widget mode={this.state.mode} config={this.props.config.config}/>
           
                    </div>
                )
    }
}