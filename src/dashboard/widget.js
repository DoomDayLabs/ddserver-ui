import React from 'react';
import Injector from './injector';
import WidgetFactory from './widget-factory';
import {DefaultWidget} from './default-widget/widget';
Injector.append({'react':React});

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
                    if (this.renderView) return this.renderView();
                    return <div>CUSTOM_VIEW</div>
                }
            }
            
            
        }        
    }
    handlePrefClick(){
        this.setState({mode:'pref'});
    }
    render(){
        console.log('RENDER');
        return (
                    <div className="widget">                    
                        <div className="header">
                            <i className="btnConfig" onClick={()=>this.handlePrefClick()}>*</i>
                            <h2>{this.header}</h2>
                            <h3>{this.subheader}</h3>
                            
                        </div>
      
                        <this.widget mode={this.state.mode}/>
           
                    </div>
                )
    }
}