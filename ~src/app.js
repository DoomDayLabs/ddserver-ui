import React from 'react';
import ReactDOM from 'react-dom';
import {Dashboard} from './dashboard';
import DashboardConf from './dashboard-conf';
import {Require} from "webpack-runtime-require";
import Style from './styles';

const customSrc = `


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

React = require('react');
ToUse = require('ToUse');
var CustomView = function (_React$Component) {
    _inherits(CustomView, _React$Component);

    function CustomView() {
        _classCallCheck(this, CustomView);

        return _possibleConstructorReturn(this, (CustomView.__proto__ || Object.getPrototypeOf(CustomView)).apply(this, arguments));
    }

    _createClass(CustomView, [{
        key: 'render',
        value: function render() {
            return React.createElement(
                'div',
                null,
                'CUSTOMVIEW',
                React.createElement(ToUse, null)
            );
        }
    }]);

    return CustomView;
}(React.Component);

exports.default = CustomView;
`;



class App extends React.Component{
    componentWillMount(){
                                               
    }
    render(){
        return (
            <Dashboard config={DashboardConf} />
            );
    }
}


class DialogController{
    showDialog($content){
        if (this.callback){
            this.callback($content);
        }
    }
    
    showClass($cls){        
        if (this.callbackClass){
            this.callbackClass($cls)
        }
    }
    
    onShow(callback){
        this.callback = callback;
    }
    onShowClass(callback){
        this.callbackClass = callback;
    }
}
class ToUse extends React.Component{
    render(){
        return <span>TO_USE</span>
    }
}
class DialogInstance{ 
    constructor(){
        
    }
    close(){
        console.log('close');
    }
}

class DialogBox extends React.Component{
    constructor(){
        super();
        this.state = {dialogs:[]};
    }
    componentWillMount(){
        this.props.controller.onShow(($content)=>{   
            /*
            var dialog = <div>{$content}<div/>;            
            var dialogs = this.state.dialogs;
            dialogs.push(dialog);        
            this.setState({dialogs:dialogs});            
            */
        });
        
        this.props.controller.onShowClass(($class)=>{
             var dialogInstance = new DialogInstance();
             //var content = <$class instance={dialogInstance} />
             var dialog = <$class instance={dialogInstance} />;             
             var dialogs = this.state.dialogs;
             dialogs.push(dialog);
             this.setState({dialogs:dialogs});
                
        });
    }
    render(){        
        return <div>DIALOGBOX:{this.state.dialogs.map((d,k)=><div key={k}>{d}</div>)}</div>
    }
}
class TestApp extends React.Component{
    constructor(){
        super();
        this.dialogCtrl = new DialogController();
        this.foo = 'BAR';
    }
    dialogClick(){
        console.log('Dialog click!');
    }
    
    makeClass($class){
        return class extends React.Component{
            constructor(props){
                super();
                console.log('PROXY');
                this.backend = new $class(props);
                console.log(this.backend);
                
                for (p in this.backend){
                    console.log(p);
                    //this[p] = this.backend[p];
                }
            }
            render(){
                return <div>{this.backend.render()}</div>;
            }
        }
    }
    click(){
        console.log('Click-click!');        
        this.dialogCtrl.showDialog(<span onClick={(e,f,g)=>{console.log(e,f,g)}}>DIALOGCONTENT</span>);
        var _this = this;
        var classFn = new Function('require,exports',customSrc);
        let exports = {};
        var classInstance = classFn(function(name){console.log('require '+name);if (name=='ToUse') {return ToUse}else return Require(name)},exports,React);
        
        //this.dialogCtrl.showClass(class extends React.Component{render(){return <div onClick={()=>{this.props.instance.close();}}>{_this.foo}</div>}});                
        //this.dialogCtrl.showClass(this.makeClass(class {render(){return <div>CUSTOMVIEW</div>}}));
        this.dialogCtrl.showClass(exports.default);
                                  
    }
    render(){                
        return <div>TestApp<ToUse /><DialogBox controller={this.dialogCtrl} /><button onClick={()=>{this.click()}}>Press me!</button></div>;
    }
}

ReactDOM.render(<TestApp />,document.getElementById('root'));