import React from 'react';
let src = `
var React = require('react');
var ReactSlider = require('react-slider');

this.renderView = function(){
return React.createElement('div',null,React.createElement(ReactSlider));
}
this.renderPrefpane = function(){
return React.createElement('div',null,'SCRIPT PREF PANE');
}
`

class WidgetClass{
    constructor(name,jsSource,cssSource){
        let $name = name;
        let $js = jsSource;
        let $css = cssSource;
        let $fn = new Function('require,config,React',$js);

        
        this.jsSource = ()=>$js;
        this.cssSource = ()=>$css;        
        this.fn = ()=>$fn;
    }

}

let classes = new Map();

function addWidget(className,jsSource,cssSource){
    let w = new WidgetClass(className,jsSource,cssSource);
    classes.set(className,w);
    return w;
};

function getWidget(className){
    
    return classes.get(className)||new WidgetClass(className,'','');
    
        
}

function makeWidget(className,injector){
    let widgetSource = classes.get(className);
    if (!widgetSource)
        return class extends React.Component{
            render(){
                return <div>VIEW_NOT_FOUND</div>
            }
        }

    let widgetFn = widgetSource.fn();

    let widgetClass = class extends React.Component{
                constructor(props){
                    super();
                    let  _render = this.render;
                    let  _componentWillMount = this.componentnWillMount;
                    let  _componentDidMount = this.componentDidMount;                    
                    widgetFn.apply(this,[(name)=>injector.require(name),props.config,React]);
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
    return widgetClass;
}

export default {
    getWidget:getWidget,
    addWidget:addWidget,
    makeWidget:makeWidget,        
}
