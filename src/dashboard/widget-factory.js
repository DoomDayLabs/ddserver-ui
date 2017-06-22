
let src = `
var React = require('react');

this.renderView = function(){
return React.createElement('div',null,'SCRIPT_VIEW');
}
this.renderPrefpane = function(){

}
`

function getWidget(className){
    return new Function('require,config',src);
}

export default {
    getWidget:getWidget
}
