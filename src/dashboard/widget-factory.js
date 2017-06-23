
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

function getWidget(className){
    return new Function('require,config',src);
}

export default {
    getWidget:getWidget
}
